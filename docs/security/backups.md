# Backups Seguros e Regulares

Recomendações para backups confiáveis e com testes de restauração.

## Princípios
- 3-2-1: três cópias, em dois tipos de mídia, uma fora do site (offsite).
- Criptografia em repouso no destino (ex.: S3 com SSE-KMS).
- Backups automatizados e versionados; retenção adequada (ex.: 30-90 dias).

## O que armazenar
- Código e configurações (repositório e artefatos de build).
- Assets estáticos (imagens, vídeos) — preferencialmente em um bucket dedicado.
- Configurações de infraestrutura (IaC), secrets (em vaults com rotação).

## Como implementar
- Pipelines CI com agendamentos (cron) para criar snapshots e enviar ao storage seguro.
- Verificação periódica de integridade (hashes) e testes de restauração em staging.

## Exemplos
- GitHub Actions: job diário que gera artefatos e envia para S3 com SSE-KMS.
- `rclone` + storage S3/Backblaze com criptografia de lado cliente e políticas de retenção.