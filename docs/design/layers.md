# Camadas e Z-index

Este documento descreve a hierarquia de camadas (overlay layers) usada no site para garantir que nenhum conteúdo do VTurb ou do comparador seja sobreposto indevidamente em qualquer estado ou resolução.

## Princípios
- Isolar contextos de empilhamento onde necessário usando `isolation: isolate`.
- Manter elementos interativos do player acima de placeholders/skeletons.
- Evitar `pointer-events` em overlays não-interativos para não bloquear o player.
- Preferir `position: absolute` com `inset: 0` no player para ocupar 100% do frame.

## Hierarquia de camadas

- z-0: Poster/Skeleton do VTurb (`pointer-events: none`).
- z-10: `vturb-smartplayer` (player e controles). Ocupa `absolute` `inset: 0` no frame.
- z-20: Handles e linha do componente de comparação (apenas dentro do comparador), não coexistem com o VTurb na mesma seção.
- Base: Cards/containers sem `z-index` explícito, evitando competir com o player.

## Contextos de empilhamento

- Frame do VTurb (`VturbLazy`): aplica `isolation: isolate` para conter camadas relacionadas ao player e evitar competição com elementos externos.
- Card premium (wrapper): sem `z-index`, apenas `overflow-hidden` para limitar bordas, sem afetar o empilhamento do player.

## Responsividade

- Mobile (≤640px): `aspect-[4/3]` e largura total. Wrapper com `px-0` e `-mx-6` para full‑bleed.
- Desktop (≥640px): `aspect-video`. Larguras máximas progressivas: `sm:max-w-[760px] md:max-w-[960px] lg:max-w-[1200px] xl:max-w-[1360px]`.

## Estados cobertos

- Carregamento: Poster com `pointer-events: none` impede bloqueios.
- Interação (hover/click/fullscreen): Player em `z-10` acima de overlays locais; fullscreen é gerido pelo navegador e não sofre interferência.
- Erro/Sucesso: Overlays internos do player permanecem em `z-10` dentro do contexto isolado.
- Conteúdo dinâmico: O frame isolado evita competição de camadas durante mudanças.

## Testes

- Playwright E2E valida que `document.elementFromPoint` no centro do frame retorna `vturb-smartplayer` e que `poster` tem `pointer-events: none`, testado em múltiplas resoluções e navegadores.