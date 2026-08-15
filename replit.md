# Guía después de un sismo

Web educativa, gratuita y mobile-first en español que ayuda a personas que acaban de vivir un sismo a saber cuál es su siguiente paso.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- Pantalla inicial con 8 rutas grandes (no sé qué hacer, pánico, pérdida de un ser querido/mascota/vivienda, necesito algo, buscando a alguien, acompañamiento emocional)
- 8 guías paso a paso con tono humano y calmado; ejercicio de grounding 5-4-3-2-1
- Aviso de responsabilidad visible en todas las páginas
- Frontend-only (sin backend, auth, ni datos personales); contenido en `artifacts/guia-sismo/src/content/data.ts` para fácil actualización/traducción
- Regla dura: nunca inventar teléfonos, refugios ni recursos; referir genéricamente a autoridades/canales oficiales

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
