# Segurança — Visão Geral

Este guia consolida práticas e implementações de segurança aplicáveis ao projeto, cobrindo proteção de dados, segurança de rede e segurança de aplicações.

## Objetivos
- Proteger dados sensíveis em trânsito e em repouso.
- Reduzir superfície de ataque na rede (WAF, DDoS, VPN).
- Endurecer a aplicação (headers HTTP, CSP, prevenção a XSS/injeções).
- Estabelecer rotinas de backup seguras e verificáveis.
- Automatizar varreduras e revisões contínuas.

## Estrutura
- `docs/security/network.md` — WAF, DDoS, VPN e IDS/IPS.
- `docs/security/backups.md` — estratégias de backup seguro e testes de restauração.
- `docs/security/appsec.md` — cabeçalhos HTTP, CSP, mitigação de XSS, injeções e varredura de vulnerabilidades.
- `docs/deploy/security-headers.md` — exemplos de configuração de headers de segurança em Nginx e hosts CDN.