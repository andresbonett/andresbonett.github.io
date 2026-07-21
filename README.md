# Andres Bonett — Portafolio

Portafolio personal y landing de contacto de **[Andres Bonett](https://andresbonett.com)**, Frontend Developer (React · Next.js · TypeScript).

**Sitio en producción:** [https://andresbonett.com](https://andresbonett.com)  
Alias GitHub Pages: [https://andresbonett.github.io](https://andresbonett.github.io)

Sitio estático generado con **Next.js** (`output: 'export'`) y publicado en **GitHub Pages** desde la rama `gh-pages`, con dominio personalizado `andresbonett.com`.

## Sobre el proyecto

Landing / portafolio con:

- Hero con foto, resumen y CTAs (WhatsApp, proyectos, experiencia)
- Stack y skills
- Proyectos seleccionados
- Página de experiencia profesional (`/experiencia/`)
- Contacto (WhatsApp, email, LinkedIn, GitHub, Telegram)

El contenido profesional se gestiona en [`cv-skilldex.json`](cv-skilldex.json) y se expone a la UI vía [`lib/cv.ts`](lib/cv.ts).

## Stack

- Next.js (App Router) + React + TypeScript
- Export estático (HTML pre-renderizado, SEO)
- Tema claro / oscuro / sistema
- Google Tag Manager
- GitHub Pages + Bun + Actions

## Estructura

```text
app/                 # Rutas App Router (/, /experiencia)
components/          # UI (hero, skills, projects, contact, …)
lib/                 # cv.ts, site.ts, gtm.ts
public/              # favicon, foto, CNAME, llms.txt
cv-skilldex.json     # Fuente del CV
.github/workflows/   # Deploy a gh-pages
```

## Desarrollo

```bash
bun install
bun run dev
```

Abre [http://localhost:3000](http://localhost:3000).

También puedes usar `npm install` / `npm run dev` si prefieres npm.

## Build y preview

```bash
bun run build    # genera out/ + .nojekyll (y copia public/, incl. CNAME)
bun run preview  # sirve out/ en local
```

## Deploy

Cada push a `main` dispara [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `bun install` + `bun run build`
2. Publica `out/` en la rama `gh-pages` (`force_orphan`)
3. Mantiene el dominio con `cname: andresbonett.com` y [`public/CNAME`](public/CNAME)

En el repositorio, GitHub Pages debe servir desde la rama **gh-pages** / carpeta raíz (`/`).

## SEO e IA

Tras el deploy, estas URLs deben existir:

| Recurso | URL |
|---------|-----|
| Sitemap | https://andresbonett.com/sitemap.xml |
| Robots | https://andresbonett.com/robots.txt |
| Índice para LLMs | https://andresbonett.com/llms.txt |
| Perfil denso para LLMs | https://andresbonett.com/llms-full.txt |

Recomendado en [Google Search Console](https://search.google.com/search-console): verificar `andresbonett.com`, enviar el sitemap y solicitar indexación de `/`.

`robots.txt` permite crawlers de búsqueda e IA (Googlebot, GPTBot, ClaudeBot, PerplexityBot, etc.). `llms.txt` sigue la convención [llmstxt.org](https://llmstxt.org/) para agentes y RAG.

## Contenido del CV

1. Edita [`cv-skilldex.json`](cv-skilldex.json)
2. La UI y el metadata leen los datos a través de [`lib/cv.ts`](lib/cv.ts) y [`lib/site.ts`](lib/site.ts) (`SITE_URL`)
3. Si cambias el perfil de forma relevante, actualiza también [`public/llms.txt`](public/llms.txt) y [`public/llms-full.txt`](public/llms-full.txt)

## Licencia

MIT
