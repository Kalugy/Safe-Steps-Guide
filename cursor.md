# Cursor — Guía después de un sismo

Proyecto open source: una web educativa, gratuita y en español para acompañar a personas antes, durante y después de un sismo en Colombia.

- Repositorio: [https://github.com/Kalugy/Safe-Steps-Guide](https://github.com/Kalugy/Safe-Steps-Guide)
- Licencia: MIT (`package.json`)
- App principal: `artifacts/guia-sismo`

Este archivo explica cómo correr el proyecto **fuera de Replit**, cómo está organizado y cómo contribuir (issues, forks y pull requests).

---

## Qué es

No es una red social ni una app con cuentas. Es una guía estática:

- **Mapa** (`/`): entrada por defecto; capas e historial. Botón **Guías** abre la guía de sismos.
- **Durante** (`/durante`): qué hacer mientras tiembla (inicio de la guía).
- **Después** (`/despues`): ayuda inmediata y pasos por días.
- **Antes** (`/antes`): preparación, por qué prepararte y riesgo según la región.

El contenido vive en archivos TypeScript, no en una base de datos. No hay autenticación ni datos personales.

La API y Postgres del workspace de Replit **no hacen falta** para ver ni editar la guía.

---

## Stack

| Pieza | Detalle |
| --- | --- |
| Runtime | Node.js 24 |
| Paquetes | pnpm workspaces |
| App | Vite 7 + React 19 + TypeScript + Tailwind 4 |
| Rutas | wouter |
| Contenido | `artifacts/guia-sismo/src/content/data.ts` |

Puerto de desarrollo: **21071**.

---

## Cómo correrlo fuera de Replit

### 1. Requisitos

- **Node.js 24** (en Replit es `nodejs-24`; en local, 22 LTS o 24)
- **pnpm** 9+ (el repo no usa npm ni yarn)
- **Git**

Instalar pnpm (elige una):

```bash
npm install -g pnpm
```

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

En Windows, el script `preinstall` usa `sh`. Con Git for Windows suele funcionar. Si falla, abre la terminal de Git Bash o agrega `C:\Program Files\Git\usr\bin` al `PATH`.

### 2. Clonar e instalar

```bash
git clone https://github.com/Kalugy/Safe-Steps-Guide.git
cd Safe-Steps-Guide
pnpm install
```

Si pnpm 11 bloquea el postinstall de esbuild:

```bash
pnpm approve-builds esbuild
```

### 3. Arrancar la guía

Vite exige `PORT` y `BASE_PATH`.

**macOS / Linux:**

```bash
export PORT=21071
export BASE_PATH=/
pnpm --filter @workspace/guia-sismo run dev
```

**Windows (PowerShell):**

```powershell
$env:PORT = "21071"
$env:BASE_PATH = "/"
pnpm --filter @workspace/guia-sismo run dev
```

Abre [http://localhost:21071/](http://localhost:21071/).

### 4. Build local

```bash
export PORT=21071
export BASE_PATH=/
pnpm --filter @workspace/guia-sismo run build
pnpm --filter @workspace/guia-sismo run serve
```

En Windows, define las mismas variables `$env:PORT` y `$env:BASE_PATH` antes de `build` y `serve`.

La salida queda en `artifacts/guia-sismo/dist/public`.

### Windows y binarios nativos

El `pnpm-workspace.yaml` original de Replit excluye paquetes nativos que no son Linux. En Windows hace falta que existan, como mínimo:

- `@esbuild/win32-x64`
- `lightningcss-win32-x64-msvc`
- `@tailwindcss/oxide-win32-x64-msvc`
- `@rollup/rollup-win32-x64-msvc`

Si `vite` no arranca por esbuild o Tailwind, revisa que esas exclusiones no estén activas para tu plataforma.

---

## Mapa del repo

```
Safe-Steps-Guide/
├── artifacts/guia-sismo/     ← la web (esto es lo que corres)
│   ├── src/content/data.ts   ← textos, rutas y números de emergencia
│   ├── src/pages/            ← Durante, Antes, Después, Guide
│   └── src/components/       ← footer, compartir, navegación
├── artifacts/api-server/     ← API de Replit (no necesaria para la guía)
├── lib/                      ← cliente API, db, zod (workspace)
├── attached_assets/          ← brief original
├── replit.md                 ← notas del workspace Replit
└── cursor.md                 ← este archivo
```

Rutas de la app:

| URL | Qué muestra |
| --- | --- |
| `/` | Mapa (inicio) |
| `/map` | Alias del mapa |
| `/durante` | Guía de sismos — Durante |
| `/durante/:id` | Guías de durante |
| `/despues` | Después del sismo |
| `/guia/:id` | Guías de después |
| `/antes` | Antes del sismo |
| `/antes/:id` | Guías de antes |

---

## Cómo se edita el contenido

Casi todo el copy está en:

`artifacts/guia-sismo/src/content/data.ts`

Ahí están:

- `duringContent`, `homeContent` (después), `beforeContent`
- `guidesData`, `duringGuidesData`, `beforeGuidesData`
- `emergencyContacts`
- `shareContent`

**Regla dura:** no inventar teléfonos, refugios ni recursos. Usar solo líneas y canales oficiales, o hablar en genérico (“autoridades locales”).

Tono: calmo, en español, de tú, sin alarmismo.

---

## Comandos útiles

```bash
pnpm --filter @workspace/guia-sismo run dev
pnpm --filter @workspace/guia-sismo run typecheck
pnpm --filter @workspace/guia-sismo run build
pnpm run typecheck
```

No hace falta `DATABASE_URL` para la guía.

---

## Contribuir (open source)

Cualquier persona puede ayudar: textos, traducción, accesibilidad, datos oficiales, diseño o código.

### 1. Issue

Si ves un error de contenido o de código, abre un issue en GitHub describiendo:

- qué pasa
- qué esperabas
- en qué página (`/`, `/despues`, `/antes`, etc.)

### 2. Fork y rama

```bash
git clone https://github.com/<tu-usuario>/Safe-Steps-Guide.git
cd Safe-Steps-Guide
git checkout -b fix/descripcion-corta
```

Ejemplos de nombre de rama:

- `fix/typo-footer`
- `feat/guia-mascotas`
- `docs/cursor-md`

### 3. Cambios pequeños y claros

- Un PR = un tema.
- No reformatees archivos que no tocaste.
- Si cambias números de emergencia, cita la fuente oficial en la descripción del PR.

### 4. Probar en local

Arranca la app y revisa Durante, Después y Antes, más el footer (emergencias y compartir).

### 5. Commit

Mensajes en presente, cortos, en español o inglés:

```bash
git add .
git commit -m "Add climate preparedness section in Antes"
```

### 6. Push y pull request

```bash
git push -u origin HEAD
```

En GitHub: **Compare & pull request** hacia `Kalugy/Safe-Steps-Guide`, rama `main`.

En el PR incluye:

- **Qué** cambió y **por qué**
- Capturas si es UI
- Cómo lo probaste
- Fuentes si hay datos o teléfonos

### 7. Review

Mantener el tono de la guía, no inventar recursos y no romper el arranque local (`PORT`, `BASE_PATH`, pnpm).

---

## Ideas de contribución

- Corregir textos o hacer más claro un paso
- Añadir fuentes oficiales (SGC, UNGRD, Cruz Roja, IDEAM)
- Mejorar accesibilidad (contraste, teclado, lectores de pantalla)
- Traducir (el contenido hoy está en español)
- Ajustar el layout en móvil y escritorio

---

## Contacto del proyecto

- Código: [github.com/Kalugy/Safe-Steps-Guide](https://github.com/Kalugy/Safe-Steps-Guide)
- Es software libre: úsalo, adáptalo y compártelo (licencia MIT)
