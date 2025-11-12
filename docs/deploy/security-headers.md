# Headers de Segurança — Configuração em Produção

## Nginx
Exemplo de configuração para site estático:

```
server {
  listen 443 ssl http2;
  server_name exemplo.com;

  root /var/www/site;
  index index.html;

  # TLS moderno
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;

  # HSTS
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

  # Segurança
  add_header X-Content-Type-Options nosniff always;
  add_header X-Frame-Options DENY always;
  add_header Referrer-Policy strict-origin-when-cross-origin always;
  add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()" always;
  add_header Cross-Origin-Opener-Policy same-origin always;

  # CSP — ajuste domínios conforme integrações
  add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://scripts.converteai.net https://*.converteai.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; media-src 'self' https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https:; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" always;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Netlify (`public/_headers`)

Crie `public/_headers` com:

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' https://scripts.converteai.net https://*.converteai.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; media-src 'self' https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https:; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
```

## Cloudflare
- Ative HSTS e headers via “Transform Rules” ou “HTTP Response Headers”.
- WAF com regras gerenciadas e proteção DDoS.