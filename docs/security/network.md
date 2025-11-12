# Segurança de Rede

Medidas recomendadas para proteger a camada de rede do ambiente de produção.

## WAF e IDS/IPS
- Ative um WAF (ex.: Cloudflare, AWS WAF) com regras gerenciadas (OWASP) e listas de bloqueio específicas.
- Configure alertas e logs detalhados para eventuais bloqueios (HTTP 403/Challenge).
- IDS/IPS: utilize soluções gerenciadas do provedor (ex.: AWS GuardDuty, Azure Defender) ou appliances dedicados.

## Proteção DDoS
- Use proteção DDoS na borda (ex.: Cloudflare, AWS Shield). Ative modo “Under Attack” quando necessário.
- Configure rate limiting por IP/rota para APIs públicas.
- Cache agressivo de conteúdo estático via CDN para reduzir carga na origem.

## Firewalls
- Restrinja portas e origens com Security Groups (cloud) ou firewalls gerenciados.
- Exponha somente 80/443 para público. Demais portas apenas via VPN.
- Habilite logs de firewall e monitore anomalias.

## VPN para acesso remoto
- Exija VPN com MFA para acesso administrativo.
- Separe ambientes (prod/staging/dev) e rede interna para serviços críticos.

## TLS e HSTS
- Forçar HTTPS (redirecionar 80 -> 443).
- Certificados válidos e rotação periódica.
- HSTS: `max-age=31536000; includeSubDomains; preload`.