# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **al-folio** Jekyll site — an academic portfolio/blog theme. It generates a static site with pages for publications (BibTeX-driven), blog posts, projects, CV, courses, and news.

## Essential Commands

### Local Development (Docker — the only recommended approach)

```bash
docker compose pull && docker compose up    # Start dev server at http://localhost:8080
docker compose up --build                   # Rebuild after dependency/Dockerfile changes
docker compose down                         # Stop and free port 8080
```

The Docker entry point runs `bundle exec jekyll serve --watch --port=8080 --livereload --force_polling` and auto-restarts when `_config.yml` changes.

### Formatting (mandatory before every commit)

```bash
npm install --save-dev prettier @shopify/prettier-plugin-liquid   # first time only
npx prettier . --write
```

The `prettier.yml` workflow will fail PRs with unformatted code.

### Non-Docker Build (fallback)

```bash
bundle install
pip install jupyter
bundle exec jekyll serve --port 4000
```

Requires ImageMagick installed (`convert -version` to check) and `pip3 install --upgrade nbconvert`.

## Architecture

### Content Pipeline

```
_config.yml          → Site-wide settings, feature flags, plugin config
_pages/*.md          → Static pages (about, cv, publications, projects, teaching, blog)
_posts/YYYY-MM-DD-*  → Blog posts
_projects/*.md       → Project showcase entries
_news/*.md           → News/announcements
_teachings/*.md      → Course listings
_books/*.md          → Book reviews
_bibliography/papers.bib → Publications (processed by jekyll-scholar)
_data/*.yml          → Structured data (socials, coauthors, cv, citations, venues, repositories)
assets/json/resume.json → JSON Resume data (loaded via jekyll-get-json)
```

### Template Rendering

- **Layouts** (`_layouts/`): `default.liquid` wraps all pages. Key layouts: `about`, `post`, `bib`, `cv`, `distill`, `page`, `course`, `profiles`.
- **Includes** (`_includes/`): Reusable components — `header`, `footer`, `head`, `scripts`, `metadata`, plus feature-specific includes (`giscus`, `newsletter`, `citation`, `figure`, `video`, `audio`).
- **Styles** (`_sass/`): SCSS partials. `_themes.scss` handles light/dark mode. `_variables.scss` for design tokens.
- **Scripts** (`_scripts/`): JS modules for search, analytics, cookie consent, comments (giscus), photoswipe gallery.

### Plugin System

Custom Ruby plugins in `_plugins/`:

- `external-posts.rb` — Fetches posts from external RSS feeds
- `google-scholar-citations.rb`, `inspirehep-citations.rb` — Citation count fetching
- `hide-custom-bibtex.rb` — Filters internal BibTeX keywords from output
- `details.rb`, `file-exists.rb`, `remove-accents.rb` — Liquid tag/filter helpers

### Key Configuration (`_config.yml`)

- **URL pair** (must be consistent): `url` + `baseurl`. Personal site = empty `baseurl`; project site = `/repo-name/`.
- **Feature flags**: `enable_darkmode`, `enable_math`, `enable_masonry`, `enable_medium_zoom`, `enable_progressbar`, etc.
- **Jekyll Scholar**: Controls publication display — `scholar.last_name`, `scholar.style`, `scholar.source`, `bibliography_template: bib`.
- **Collections**: `books`, `news`, `projects`, `teachings` — each with `output: true`.
- **Third-party libraries**: Version-pinned CDN URLs with SRI hashes.

## CI/CD Workflows (`.github/workflows/`)

- **deploy.yml** — Builds with Ruby 3.3.5, Python 3.13, runs purgecss, pushes to `gh-pages` branch.
- **prettier.yml** — Formatting gate (blocks merge if failing).
- **broken-links.yml / broken-links-site.yml** — Link validation.
- **axe.yml** — Accessibility checks.
- **update-citations.yml** — Auto-updates citation counts.

## Commit Message Convention

Format: `<type>: <subject>` where type is one of: `feat`, `fix`, `docs`, `style`, `config`, `chore`. Stage files explicitly (no `git add .`).

## File-Type-Specific Instructions

Detailed coding guidelines exist per file type in `.github/instructions/`:

| File type                          | Instruction file                                           |
| ---------------------------------- | ---------------------------------------------------------- |
| Markdown (`_posts/`, `_pages/`)    | `.github/instructions/markdown-content.instructions.md`    |
| YAML (`_config.yml`, `_data/`)     | `.github/instructions/yaml-configuration.instructions.md`  |
| BibTeX (`_bibliography/`)          | `.github/instructions/bibtex-bibliography.instructions.md` |
| Liquid (`_includes/`, `_layouts/`) | `.github/instructions/liquid-templates.instructions.md`    |
| JavaScript (`_scripts/`)           | `.github/instructions/javascript-scripts.instructions.md`  |

## Common Pitfalls

- **YAML special characters**: Quote values containing `:`, `&`, `#` — e.g., `title: "My: Cool Site"`.
- **`url`/`baseurl` mismatch**: Causes CSS/JS to not load. Always update both together.
- **Port conflicts**: Run `docker compose down` before `docker compose up`.
- **Related posts errors** ("Zero vectors cannot be normalized"): Caused by empty posts — add meaningful content or set `related_posts: false` in frontmatter.
- **Prettier must run before commit**: The CI gate will reject unformatted code.
