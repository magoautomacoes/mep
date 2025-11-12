// Utilitários para mascaramento e criptografia leve no cliente
// Observação: criptografia forte deve ser feita no backend; aqui fornecemos
// helpers para dados em repouso no navegador (localStorage) quando aplicável.

export const maskString = (value: string, visibleStart = 2, visibleEnd = 2): string => {
  if (!value) return value;
  const start = value.slice(0, visibleStart);
  const end = value.slice(-visibleEnd);
  const middleLen = Math.max(0, value.length - visibleStart - visibleEnd);
  return `${start}${"*".repeat(middleLen)}${end}`;
};

export const maskEmail = (email?: string): string => {
  if (!email) return "";
  const [user, domain] = email.split("@");
  return `${maskString(user, 2, Math.min(1, Math.floor(user.length / 3)))}@${domain}`;
};

export const maskPhone = (phone?: string): string => {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  return maskString(digits, 2, 2);
};

export const redactObject = <T extends Record<string, any>>(obj: T, sensitiveKeys: string[] = [
  "email", "phone", "password", "token", "apiKey", "authorization"
]): T => {
  const clone: any = Array.isArray(obj) ? [...obj] : { ...obj };
  const walk = (node: any): any => {
    if (Array.isArray(node)) return node.map(walk);
    if (node && typeof node === "object") {
      const out: any = {};
      for (const [k, v] of Object.entries(node)) {
        if (sensitiveKeys.includes(k)) {
          const val = typeof v === "string" ? maskString(v) : "***";
          out[k] = val;
        } else {
          out[k] = walk(v);
        }
      }
      return out;
    }
    return node;
  };
  return walk(clone);
};

// Criptografia AES-GCM no navegador para armazenar dados sensíveis localmente
// Use uma senha forte e um salt por usuário/sessão.
export const deriveKey = async (password: string, salt: Uint8Array) => {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  // Corrige tipos de BufferSource para compatibilidade com TS e Web Crypto
  const saltBuf = salt.buffer as ArrayBuffer;
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: saltBuf, iterations: 100_000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
};

export const encryptLocal = async (plaintext: string, password: string) => {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const enc = new TextEncoder();
  const ivBuf = iv.buffer as ArrayBuffer;
  const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv: ivBuf }, key, enc.encode(plaintext));
  // Helpers base64 para navegador (evita uso de Buffer do Node)
  const toBase64 = (bytes: Uint8Array) => {
    let binary = "";
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  };
  return {
    salt: toBase64(salt),
    iv: toBase64(iv),
    data: toBase64(new Uint8Array(cipher)),
  };
};

export const decryptLocal = async (payload: { salt: string; iv: string; data: string }, password: string) => {
  const fromBase64 = (b64: string) => {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  };
  const salt = fromBase64(payload.salt);
  const iv = fromBase64(payload.iv);
  const data = fromBase64(payload.data);
  const key = await deriveKey(password, salt);
  const ivBuf = iv.buffer as ArrayBuffer;
  const out = await crypto.subtle.decrypt({ name: "AES-GCM", iv: ivBuf }, key, data);
  return new TextDecoder().decode(out);
};

export const secureStorage = {
  async set(key: string, value: any, password: string) {
    const json = JSON.stringify(value);
    const payload = await encryptLocal(json, password);
    localStorage.setItem(key, JSON.stringify(payload));
  },
  async get<T>(key: string, password: string): Promise<T | null> {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    const json = await decryptLocal(payload, password);
    return JSON.parse(json) as T;
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};