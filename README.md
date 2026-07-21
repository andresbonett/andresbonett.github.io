# andresbonett.github.io

Portafolio personal de [Andrés Bonett](https://andresbonett.github.io) — desarrollador frontend.

Sitio estático generado con **Next.js** (`output: 'export'`) y publicado en **GitHub Pages** desde la rama `gh-pages`.

## Desarrollo

```bash
bun install
bun run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build local

```bash
bun run build    # genera out/ + .nojekyll
bun run preview  # sirve out/ en local
```

## Deploy

Cada push a `main` dispara [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `bun install` + `bun run build`
2. Publica el contenido de `out/` en la rama `gh-pages`

En el repositorio, GitHub Pages debe estar configurado para servir desde la rama **gh-pages** / carpeta raíz (`/`).

## Stack

- Next.js (App Router) + React + TypeScript
- Export estático para SEO (HTML pre-renderizado)
- GitHub Pages + Bun
