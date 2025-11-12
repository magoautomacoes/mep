# Segurança em Aplicações

Medidas para endurecer a aplicação contra ataques comuns.

## Cabeçalhos HTTP
- `Content-Security-Policy (CSP)`: restrinja fontes de script/estilo/imagem/mídia; evite `'unsafe-inline'` em produção.
- `X-Frame-Options: DENY` e `frame-ancestors 'none'`: previne clickjacking.
- `X-Content-Type-Options: nosniff`: evita interpretação incorreta de MIME.
- `Referrer-Policy: strict-origin-when-cross-origin`: limita vazamento de URLs.
- `Permissions-Policy`: desabilite recursos não usados (camera, microphone, geolocation, etc.).
- `Strict-Transport-Security (HSTS)`: força HTTPS.

## CSP prática
Exemplo (ajuste domínios conforme integrações):

```
default-src 'self';
script-src 'self' https://scripts.converteai.net https://*.converteai.net;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
media-src 'self' https:;
font-src 'self' data:;
connect-src 'self' https:;
frame-src 'self' https:;
base-uri 'self';
form-action 'self';
frame-ancestors 'none'
```

## XSS e injeções
- Evite `dangerouslySetInnerHTML` e sanitizar input quando necessário.
- Não interpolar HTML vindo do usuário; valide/escape.
- Valide parâmetros capazes de influenciar rotas, queries e URLs; use listas de permissão.

## Varreduras de vulnerabilidades
- Use SCA (análise de dependências) com Snyk, npm audit, Retire.js.
- Varreduras DAST (ZAP) em staging com flows críticos.
- Automatize em CI e trate findings com prioridade.

## Links externos
- Sempre `rel="noopener noreferrer"` (ou `window.open(...,'_blank','noopener,noreferrer')` + `opener=null`).