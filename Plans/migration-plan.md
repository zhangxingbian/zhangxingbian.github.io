# Migration Plan: Google Sites → al-folio (GitHub Pages)

**Date:** 2026-03-11
**Source:** https://sites.google.com/umich.edu/zxbian/home
**Target:** `https://zhangxingbian.github.io/` (GitHub org `zhangxingbian` created)
**Status:** Plan finalized — ready for implementation

---

## Table of Contents

1. [Resolved Decisions](#1-resolved-decisions)
2. [URL Setup](#2-url-setup)
3. [Content Inventory](#3-content-inventory)
4. [Step 1 — Site Identity & Configuration](#4-step-1--site-identity--configuration)
5. [Step 2 — Delete Example Content](#5-step-2--delete-example-content)
6. [Step 3 — Navigation](#6-step-3--navigation)
7. [Step 4 — About / Homepage](#7-step-4--about--homepage)
8. [Step 5 — Publications (BibTeX)](#8-step-5--publications-bibtex)
9. [Step 6 — Projects](#9-step-6--projects)
10. [Step 7 — News & Announcements](#10-step-7--news--announcements)
11. [Step 8 — Repositories Page](#11-step-8--repositories-page)
12. [Step 9 — Photography Page](#12-step-9--photography-page)
13. [Step 10 — Assets Migration](#13-step-10--assets-migration)
14. [Step 11 — Build, Format & QA](#14-step-11--build-format--qa)
15. [Step 12 — Deploy](#15-step-12--deploy)
16. [Post-Launch](#16-post-launch)
17. [Pitfalls to Watch](#17-pitfalls-to-watch)
18. [File Change Summary](#18-file-change-summary)

---

## 1. Resolved Decisions

| #   | Decision           | Answer                                                                                                                                    |
| --- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | GitHub org / repo  | Org: **zhangxingbian** (created). Repo transferred there, renamed to **zhangxingbian.github.io**. URL: `https://zhangxingbian.github.io/` |
| 2   | Profile photo      | `profile_pic.png` (already at repo root)                                                                                                  |
| 3   | Publications       | 34 papers from Google Scholar (full list in `Plans/gscholar_list.md`). Link PDFs externally. Scholar ID: **i2oLdaYAAAAJ**                 |
| 4   | CV page            | **No CV page in navigation.** CV PDF is reference-only. Education/experience info goes into the about page.                               |
| 5   | Photography        | **Option A** — Dedicated page with curated travel photos (~29 compressed)                                                                 |
| 6   | Blog               | **No** — disable for now                                                                                                                  |
| 7   | Navigation         | **Home \| Projects \| Publications \| Repositories \| Photography**                                                                       |
| 8   | Paper PDFs         | **Link externally** (arXiv / publisher) — saves repo space                                                                                |
| 9   | LinkedIn           | `zxbian` (linkedin.com/in/zxbian)                                                                                                         |
| 10  | Featured repo      | `jasonbian97/Deep-Learning-Computer-Vision`                                                                                               |
| 11  | Project thumbnails | Placeholder images initially                                                                                                              |

### Key info extracted from CV (reference only, not published):

- **Current position:** PhD student, Johns Hopkins University
- **Email:** zbian4@jhu.edu
- **Google Scholar:** `i2oLdaYAAAAJ`
- **GitHub:** jasonbian97
- **Education:**
  - University of Michigan — M.S. in Computer Vision (Sep 2019 – Apr 2021), GPA 3.97/4.0
  - Southeast University — B.E. in Electrical & Computer Engineering (Sep 2015 – Jun 2019), GPA 90.04/100, Top 5%, National Scholarship
- **Skills:** Python, C/C++, MATLAB, Julia, OpenCV, PyTorch, TensorFlow, ITK

---

## 2. URL Setup

GitHub org `zhangxingbian` has been created. The deployment plan:

1. Transfer repo from `jasonbian97/zhangxing.github.io` to `zhangxingbian` org
2. Rename repo to `zhangxingbian.github.io`
3. Site deploys at `https://zhangxingbian.github.io/`

```yaml
url: https://zhangxingbian.github.io
baseurl: # empty — root of org site
```

---

## 3. Content Inventory

### Source → Destination Mapping

| Google Site        | al-folio Target                                       | Notes                                    |
| ------------------ | ----------------------------------------------------- | ---------------------------------------- |
| Home (bio)         | `_pages/about.md` + `_config.yml`                     | Profile image, bio, social links         |
| Home (news)        | `_news/*.md`                                          | One file per announcement                |
| Publications       | `_bibliography/papers.bib` + `_pages/publications.md` | BibTeX-driven, 34 papers                 |
| Projects (8 total) | `_projects/*.md`                                      | One page per project                     |
| Photography        | `_pages/photography.md`                               | Lightbox2 gallery                        |
| ~~CV~~             | ~~removed~~                                           | Not in nav; info used in about page only |
| Academic Service   | Part of `_pages/about.md`                             | Reviewer roles                           |
| Repositories       | `_pages/repositories.md`                              | GitHub repos display                     |

### Publication summary (34 papers, full list in `Plans/gscholar_list.md`)

**Top papers:**

| Year | Venue      | Title                                                                               | Notes                                    |
| ---- | ---------- | ----------------------------------------------------------------------------------- | ---------------------------------------- |
| 2026 | CVPR       | Solving a Nonlinear Blind Inverse Problem for Tagged MRI...                         | 1st author                               |
| 2025 | NeurIPS    | OCT Harmonization with Anatomy-Guided Latent Metric Schrödinger Bridges             | Co-author                                |
| 2025 | MIA        | A survey on deep learning in medical image registration...                          | Co-author, 183 citations                 |
| 2025 | IPMI       | Brightness-Invariant Tracking Estimation in Tagged MRI                              | 1st author                               |
| 2024 | SPIE       | Is registering raw tagged-MR enough for strain estimation?                          | 1st author, **Best Student Paper Award** |
| 2023 | MIDL       | DRIMET: Deep Registration-based 3D Incompressible Motion Estimation...              | 1st author, **Oral**                     |
| 2023 | SPIE       | FastCod: Fast Brain Connectivity in Diffusion Imaging                               | 1st author, **Best Paper Runner-up**     |
| 2022 | CVPR       | Learning Pixel Trajectories with Multiscale Contrastive Random Walks                | 1st author, 51 citations                 |
| 2022 | Radiology  | Vascular deformation mapping for CT surveillance of thoracic aortic aneurysm growth | 40 citations                             |
| 2022 | Med. Phys. | Validation of quantification of 3D growth of the thoracic aorta...                  | 1st author, 21 citations                 |

Plus 24 more papers at MICCAI, SPIE, ISBI, BIBM, PRCV, etc.

---

## 4. Step 1 — Site Identity & Configuration

**File:** `_config.yml`

Changes:

- `first_name: Zhangxing`, `middle_name:` (empty), `last_name: Bian`
- `url: https://zhangxingbian.github.io`, `baseurl:` (empty)
- `description:` → Zhangxing Bian's academic site description
- `keywords: medical image analysis, computer vision, deep learning, image registration, Johns Hopkins`
- `icon: 🔬`
- `last_updated: true`
- `blog_name: ""`, `blog_description: ""`
- `disqus_shortname:` (empty)
- `external_sources: []`
- `display_tags: []`, `display_categories: []`
- `scholar.last_name: [Bian]`, `scholar.first_name: [Zhangxing, Z.]`
- `giscus.repo:` (empty — disables comments)
- `repo_trophies.enabled: false`

**File:** `_data/socials.yml` — replace entirely:

```yaml
email: zbian4@jhu.edu
scholar_userid: i2oLdaYAAAAJ
github_username: jasonbian97
linkedin_username: zxbian
```

---

## 5. Step 2 — Delete Example Content

### Files to DELETE:

**31 posts** — everything in `_posts/`:

- `2015-03-15-formatting-and-links.md` through `2025-03-26-plotly.md`

**9 projects** — everything in `_projects/`:

- `1_project.md` through `9_project.md`

**3 news** — everything in `_news/`:

- `announcement_1.md`, `announcement_2.md`, `announcement_3.md`

**1 book + 2 teachings:**

- `_books/the_godfather.md`
- `_teachings/data-science-fundamentals.md`, `_teachings/introduction-to-machine-learning.md`

**Example assets:**

- `assets/pdf/example_pdf.pdf`
- `assets/img/1.jpg` through `12.jpg` (12 files)
- `assets/img/prof_pic.jpg`, `assets/img/prof_pic_color.png`
- `assets/img/rhino.png`, `assets/img/template_error.png`
- `assets/img/publication_preview/brownian-motion.gif`, `assets/img/publication_preview/wave-mechanics.gif`
- `assets/img/book_covers/the_godfather.jpg`

**Data files to clear/replace:**

- `_data/coauthors.yml` → replace with Zhangxing's key coauthors (Step 5)
- `_data/venues.yml` → replace with relevant venues (Step 5)
- `_data/cv.yml` → minimal placeholder (`cv: { name: Zhangxing Bian }`)
- `_data/citations.yml` → clear (will be regenerated by update-citations workflow)
- `assets/json/resume.json` → replace with `{}` (must exist — referenced by `jekyll_get_json` config)

---

## 6. Step 3 — Navigation

**Set `nav: false`:**

| File                 | Current      | Action       |
| -------------------- | ------------ | ------------ |
| `_pages/blog.md`     | nav_order: 1 | `nav: false` |
| `_pages/cv.md`       | nav_order: 5 | `nav: false` |
| `_pages/teaching.md` | nav_order: 6 | `nav: false` |
| `_pages/profiles.md` | nav_order: 7 | `nav: false` |
| `_pages/dropdown.md` | nav_order: 8 | `nav: false` |

Note: `_pages/books.md` already has `nav: false`.

**Set `nav_order` for visible pages:**

| File                          | nav_order | Navbar label        |
| ----------------------------- | --------- | ------------------- |
| `_pages/about.md`             | —         | (homepage via logo) |
| `_pages/projects.md`          | 1         | Projects            |
| `_pages/publications.md`      | 2         | Publications        |
| `_pages/repositories.md`      | 3         | Repositories        |
| `_pages/photography.md` (new) | 4         | Photography         |

---

## 7. Step 4 — About / Homepage

**File:** `_pages/about.md` — replace entirely

### Frontmatter:

```yaml
---
layout: about
title: about
permalink: /
subtitle: >
  PhD Student, <a href="https://engineering.jhu.edu/ece/">ECE</a>,
  <a href="https://www.jhu.edu/">Johns Hopkins University</a>

profile:
  align: right
  image: profile_pic.png
  image_circular: false
  more_info: >
    <p>Baltimore, MD, USA</p>
    <p>zbian4@jhu.edu</p>

selected_papers: true
social: true
announcements:
  enabled: true
  scrollable: true
  limit: 5
latest_posts:
  enabled: false
---
```

### Biography body (synthesize from CV and Google Site):

- PhD student at JHU, medical image analysis & applied ML
- Research: image registration, motion estimation, inverse problems in tagged MRI
- Key results: CVPR 2022/2026, two SPIE Best Student Paper Awards, MIDL oral
- M.S. University of Michigan (2021, Computer Vision, GPA 3.97)
- B.E. Southeast University (2019, ECE, Top 5%, National Scholarship)
- Reviewer: Image and Vision Computing, ACM Multimedia, IEEE ICMLA

### Asset:

Copy `./profile_pic.png` → `assets/img/profile_pic.png`

---

## 8. Step 5 — Publications (BibTeX)

**File:** `_bibliography/papers.bib` — replace entirely with 34 entries

Source: `Plans/gscholar_list.md`

### For each paper:

- Create BibTeX entry with standard fields (title, author, booktitle/journal, year, volume, pages)
- Add al-folio fields: `abbr`, `bibtex_show = {true}`, `html` (publisher/arXiv link)
- Add `arxiv` field where applicable
- Add `google_scholar_id` where findable
- Use `Bian, Zhangxing` consistently for author name matching

### Mark `selected = {true}` (shown on homepage):

1. CVPR 2026 — "Solving a Nonlinear Blind Inverse Problem for Tagged MRI..."
2. CVPR 2022 — "Learning Pixel Trajectories..." (51 citations)
3. MIA 2025 — "A survey on deep learning in medical image registration..." (183 citations)
4. MIDL 2023 — "DRIMET..." (oral presentation)

### Mark awards:

- SPIE 2024: `award = {Best Student Paper Award}`, `award_name = {Best Paper}`
- SPIE 2023 FastCod: `award = {Best Student Paper Award Runner-up}`, `award_name = {Best Paper Runner-up}`

### BibTeX template:

```bibtex
@inproceedings{bian2022pixel,
  abbr         = {CVPR},
  title        = {Learning Pixel Trajectories with Multiscale Contrastive Random Walks},
  author       = {Bian, Zhangxing and Jabri, Allan and Efros, Alexei A. and Owens, Andrew},
  booktitle    = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year         = {2022},
  selected     = {true},
  bibtex_show  = {true},
  arxiv        = {2201.08467},
  html         = {https://arxiv.org/abs/2201.08467},
}
```

### Supporting data files:

**File:** `_data/venues.yml` — replace with relevant venues:

```yaml
"CVPR":
  color: "#d93025"
  url: https://cvpr.thecvf.com/
"NeurIPS":
  color: "#c62828"
  url: https://neurips.cc/
"MICCAI":
  color: "#0b8043"
  url: https://www.miccai.org/
"MIDL":
  color: "#1a73e8"
  url: https://www.midl.io/
"SPIE":
  color: "#e37400"
  url: https://spie.org/conferences-and-exhibitions/medical-imaging
"MedIA":
  color: "#7b1fa2"
  url: https://www.sciencedirect.com/journal/medical-image-analysis
"Radiology":
  color: "#00897b"
  url: https://pubs.rsna.org/journal/radiology
"Med. Phys.":
  color: "#5c6bc0"
  url: https://aapm.onlinelibrary.wiley.com/journal/24734209
"IPMI":
  color: "#6a1b9a"
"ISBI":
  color: "#00838f"
"BIBM":
  color: "#4e342e"
"PRCV":
  color: "#37474f"
```

**File:** `_data/coauthors.yml` — replace with key collaborators:

```yaml
"prince":
  - firstname: ["Jerry L.", "Jerry", "J. L.", "JL"]
    url: https://engineering.jhu.edu/faculty/jerry-prince/
"owens":
  - firstname: ["Andrew", "A."]
    url: https://andrewowens.com/
"efros":
  - firstname: ["Alexei A.", "Alexei", "A. A.", "AA"]
    url: https://people.eecs.berkeley.edu/~efros/
"burris":
  - firstname: ["Nicholas S.", "Nicholas", "N. S.", "NS"]
    url: https://medicine.umich.edu/dept/radiology/nicholas-burris-md
"carass":
  - firstname: ["Aaron", "A."]
    url: https://www.cs.jhu.edu/~acarass/
```

---

## 9. Step 6 — Projects

**File:** `_pages/projects.md` — change `display_categories: [work, fun]` → `[research, fun]`

**Create 8 files in `_projects/`:**

| File                    | Title                                                                | Category | Importance |
| ----------------------- | -------------------------------------------------------------------- | -------- | ---------- |
| `pixel-trajectories.md` | Learning Pixel Trajectories with Multiscale Contrastive Random Walks | research | 1          |
| `tagged-mri.md`         | Motion Estimation and Inverse Problems in Tagged MRI                 | research | 2          |
| `aorta.md`              | Aorta Registration and Deformation Analysis                          | research | 3          |
| `vitiligo.md`           | Weakly-Supervised Vitiligo Segmentation                              | research | 4          |
| `highlight-removal.md`  | Highlight Removal in Facial Images                                   | research | 5          |
| `6d-pose.md`            | 6D Pose Estimation from Single RGB Image                             | research | 6          |
| `video-synopsis.md`     | Video Synopsis for Surveillance                                      | research | 7          |
| `q-value-rl.md`         | Q-value Based RL on Atari Games                                      | fun      | 1          |

### Frontmatter template:

```yaml
---
layout: page
title: Project Title
description: One-line description
img: assets/img/placeholder.jpg
importance: N
category: research
related_publications: true
---
```

All projects use a single `assets/img/placeholder.jpg` for thumbnails initially.

### Content source mapping:

| Project            | Content source                                                      | Has Google Site subpage?        |
| ------------------ | ------------------------------------------------------------------- | ------------------------------- |
| Pixel Trajectories | Brief mention on Google Site home                                   | No — write from CVPR 2022 paper |
| Tagged MRI         | **New** — PhD thesis thread (DRIMET, BITE, MomentaMorph, CVPR 2026) | No                              |
| Aorta              | Detailed subpage + CV                                               | Yes                             |
| Vitiligo           | CV + `project description.md`                                       | No                              |
| Highlight Removal  | Detailed subpage                                                    | Yes                             |
| 6D Pose            | CV + brief mention                                                  | No                              |
| Video Synopsis     | Detailed subpage + CV                                               | Yes                             |
| Q-value RL         | Brief mention on Google Site                                        | No                              |

---

## 10. Step 7 — News & Announcements

**Create 8 files in `_news/`:**

| File                 | Date       | Content                                                               |
| -------------------- | ---------- | --------------------------------------------------------------------- |
| `cvpr2026.md`        | 2025-09-15 | Paper accepted at **CVPR 2026**                                       |
| `neurips2025.md`     | 2025-09-01 | Co-authored paper accepted at **NeurIPS 2025**                        |
| `ipmi2025.md`        | 2025-02-01 | Paper accepted at **IPMI 2025**                                       |
| `spie2024-award.md`  | 2024-02-15 | **Best Student Paper Award** (1st place) at SPIE Medical Imaging 2024 |
| `spie2023-award.md`  | 2023-02-15 | **Best Student Paper Award Runner-up** at SPIE Medical Imaging 2023   |
| `midl2023.md`        | 2023-04-15 | DRIMET accepted as **oral** at MIDL 2023                              |
| `cvpr2022.md`        | 2022-03-15 | Paper accepted at **CVPR 2022**                                       |
| `medical-physics.md` | 2022-01-15 | Paper published in **Medical Physics**                                |

Format: `layout: post`, `date: YYYY-MM-DD`, `inline: true`, `related_posts: false`

---

## 11. Step 8 — Repositories Page

**File:** `_data/repositories.yml` — replace:

```yaml
github_users:
  - jasonbian97

repo_description_lines_max: 2

github_repos:
  - jasonbian97/Deep-Learning-Computer-Vision
```

**File:** `_pages/repositories.md` — set `nav_order: 3`, update description

---

## 12. Step 9 — Photography Page

**New file:** `_pages/photography.md`

```yaml
---
layout: page
title: photography
permalink: /photography/
description: Travel and landscape photography
nav: true
nav_order: 4
images:
  lightbox2: true
---
```

### Two gallery sections:

1. **Huangshan & Hongcun** — 16 photos (Yellow Mountains, UNESCO village)
   - Source: `google-site/Personal Websites/photos/huangshan-hongcun (compressed)/`
   - Files: `1.jpg`–`9.jpg`, `s2.jpg`, `s3.jpg`, `s4.jpg`, `sssssss.jpg`, `v1.jpg`, `v2.jpg`, `v3.jpg`

2. **Nanjing** — 13 photos (temples, cherry blossoms)
   - Source: `google-site/Personal Websites/photos/nanjing (compressed)/`
   - Files: `1.jpg`–`13.jpg`

Gallery uses Lightbox2 with `data-lightbox` grouping per section:

```html
<div class="row row-cols-2 row-cols-md-3">
  <div class="col mb-4">
    <a href="{{ '/assets/img/photography/huangshan/1.jpg' | relative_url }}" data-lightbox="huangshan">
      <img src="{{ '/assets/img/photography/huangshan/1.jpg' | relative_url }}" class="img-fluid rounded z-depth-1" />
    </a>
  </div>
  <!-- repeat for each photo -->
</div>
```

### Copy photos:

```
google-site/.../huangshan-hongcun (compressed)/*.jpg → assets/img/photography/huangshan/   (16 files)
google-site/.../nanjing (compressed)/*.jpg           → assets/img/photography/nanjing/      (13 files)
```

---

## 13. Step 10 — Assets Migration

| Asset                   | Source                                                 | Destination                                    |
| ----------------------- | ------------------------------------------------------ | ---------------------------------------------- |
| Profile photo           | `./profile_pic.png`                                    | `assets/img/profile_pic.png`                   |
| Photography (Huangshan) | `google-site/.../huangshan-hongcun (compressed)/*.jpg` | `assets/img/photography/huangshan/` (16 files) |
| Photography (Nanjing)   | `google-site/.../nanjing (compressed)/*.jpg`           | `assets/img/photography/nanjing/` (13 files)   |
| Project placeholder     | Generate a simple placeholder                          | `assets/img/placeholder.jpg`                   |

### Files NOT to include:

- CV PDFs (private reference only)
- Transcripts, degree certificates (private)
- Original/uncompressed photos (too large)
- `photosforwebsite/` 482-image collection (too large)
- SPIE video 35 MB (upload to YouTube if needed)
- Research paper PDFs (linking externally instead)

---

## 14. Step 11 — Build, Format & QA

```bash
npx prettier . --write
docker compose pull && docker compose up
# Site runs at http://localhost:8080
```

### Verification method: Playwright screenshots

Use the Playwright MCP tools to navigate to each page and take screenshots. Iterate on any issues found.

```
1. browser_navigate → http://localhost:8080                    → screenshot (homepage)
2. browser_navigate → http://localhost:8080/projects/          → screenshot (projects grid)
3. browser_navigate → http://localhost:8080/publications/      → screenshot (publications list)
4. browser_navigate → http://localhost:8080/repositories/      → screenshot (repos page)
5. browser_navigate → http://localhost:8080/photography/       → screenshot (photo gallery)
6. Click dark mode toggle                                      → screenshot (dark mode)
7. browser_resize to mobile width (375px)                      → screenshot (mobile layout)
```

### QA checklist (verify via screenshots):

- [ ] Homepage: name, bio, profile photo, social links render correctly
- [ ] Nav: Home | Projects | Publications | Repositories | Photography (no CV, no Blog)
- [ ] Publications: all 34 papers render, selected papers on homepage, awards shown
- [ ] Projects: 8 project cards with categories
- [ ] News: 8 announcements on homepage
- [ ] Repositories: shows jasonbian97 profile and Deep-Learning-Computer-Vision repo
- [ ] Photography: galleries load with photo grid
- [ ] Dark mode toggle works
- [ ] Mobile responsive layout works
- [ ] No broken links/images or rendering errors

If any issues are found in screenshots, fix and re-verify in a loop until all checks pass.

---

## 15. Step 12 — Deploy

1. Transfer repo from `jasonbian97` to `zhangxingbian` org on GitHub
2. Rename repo to `zhangxingbian.github.io`
3. Push to `main`
4. GitHub → Settings → Pages → Source: `gh-pages` branch
5. `deploy.yml` workflow builds and deploys
6. Verify at `https://zhangxingbian.github.io/`

---

## 16. Post-Launch

- [ ] Verify all pages load correctly on production
- [ ] Enable citation auto-update workflow (`.github/workflows/update-citations.yml`)
- [ ] Add Google Analytics ID if desired
- [ ] Update links elsewhere (LinkedIn, Google Scholar, email signature) to point to new site
- [ ] Consider adding blog section later
- [ ] Consider adding CV page later

---

## 17. Pitfalls to Watch

- **`resume.json` must exist** — `jekyll_get_json` in config references it; keep as `{}`
- **Photo directory names have spaces** — source dirs have `(compressed)` in names; use clean target names
- **`google-site/` is gitignored** (line 17 of `.gitignore`) — assets must be copied to `assets/img/` to be tracked
- **Scholar name matching** — use `Bian, Zhangxing` in BibTeX for bold highlighting in publication lists
- **`max_author_limit: 3`** in config — papers with 5+ authors auto-collapse (fine)
- **Build errors from missing assets** — after deleting example images, no leftover references remain since we delete all posts/projects/books that reference them

---

## 18. File Change Summary

### Files to CREATE:

| File                                     | Purpose                          |
| ---------------------------------------- | -------------------------------- |
| `_projects/pixel-trajectories.md`        | Project page                     |
| `_projects/tagged-mri.md`                | Project page (PhD thesis thread) |
| `_projects/aorta.md`                     | Project page                     |
| `_projects/vitiligo.md`                  | Project page                     |
| `_projects/highlight-removal.md`         | Project page                     |
| `_projects/6d-pose.md`                   | Project page                     |
| `_projects/video-synopsis.md`            | Project page                     |
| `_projects/q-value-rl.md`                | Project page                     |
| `_news/cvpr2026.md`                      | News item                        |
| `_news/neurips2025.md`                   | News item                        |
| `_news/ipmi2025.md`                      | News item                        |
| `_news/spie2024-award.md`                | News item                        |
| `_news/spie2023-award.md`                | News item                        |
| `_news/midl2023.md`                      | News item                        |
| `_news/cvpr2022.md`                      | News item                        |
| `_news/medical-physics.md`               | News item                        |
| `_pages/photography.md`                  | Photography gallery              |
| `assets/img/profile_pic.png`             | Profile photo (copy from root)   |
| `assets/img/photography/huangshan/*.jpg` | 16 gallery photos                |
| `assets/img/photography/nanjing/*.jpg`   | 13 gallery photos                |
| `assets/img/placeholder.jpg`             | Project thumbnail placeholder    |

### Files to MODIFY:

| File                       | Changes                                                                      |
| -------------------------- | ---------------------------------------------------------------------------- |
| `_config.yml`              | Name, URL, baseurl, scholar config, disable blog/comments/feeds (~20 values) |
| `_pages/about.md`          | Replace entirely — bio, profile, social, announcements                       |
| `_pages/projects.md`       | `display_categories: [research, fun]`, `nav_order: 1`                        |
| `_pages/publications.md`   | `nav_order: 2`                                                               |
| `_pages/repositories.md`   | `nav_order: 3`, update description                                           |
| `_pages/cv.md`             | Set `nav: false`                                                             |
| `_pages/blog.md`           | Set `nav: false`                                                             |
| `_pages/teaching.md`       | Set `nav: false`                                                             |
| `_pages/profiles.md`       | Set `nav: false`                                                             |
| `_pages/dropdown.md`       | Set `nav: false`                                                             |
| `_bibliography/papers.bib` | Replace with 34 real publications                                            |
| `_data/socials.yml`        | Replace — email, GitHub, Scholar ID, LinkedIn                                |
| `_data/repositories.yml`   | Replace — jasonbian97 + Deep-Learning-Computer-Vision                        |
| `_data/venues.yml`         | Replace — CVPR, NeurIPS, MICCAI, MIDL, SPIE, etc.                            |
| `_data/coauthors.yml`      | Replace — Prince, Owens, Efros, Burris, Carass                               |
| `_data/cv.yml`             | Minimal placeholder                                                          |
| `_data/citations.yml`      | Clear (auto-regenerated)                                                     |
| `assets/json/resume.json`  | Replace with `{}`                                                            |

### Files to DELETE:

| File(s)                                                                   | Count | Reason             |
| ------------------------------------------------------------------------- | ----- | ------------------ |
| `_posts/*`                                                                | 31    | Example blog posts |
| `_projects/1_project.md` – `9_project.md`                                 | 9     | Example projects   |
| `_news/announcement_*.md`                                                 | 3     | Example news       |
| `_books/the_godfather.md`                                                 | 1     | Example book       |
| `_teachings/*.md`                                                         | 2     | Example teachings  |
| `assets/img/{1..12}.jpg`, `prof_pic.*`, `rhino.png`, `template_error.png` | 16    | Example images     |
| `assets/img/publication_preview/*.gif`                                    | 2     | Example previews   |
| `assets/img/book_covers/the_godfather.jpg`                                | 1     | Example cover      |
| `assets/pdf/example_pdf.pdf`                                              | 1     | Example PDF        |

**Total:** ~21 files to create, ~18 files to modify, ~66 files to delete, plus ~29 photo copies.

---

## Execution Order

```
Step 1  → _config.yml + _data/socials.yml           (foundation)
Step 2  → Delete example content                     (clean slate)
Step 3  → Set nav: false/true + nav_order            (navigation)
Step 4  → about.md + profile photo                   (homepage)
Step 5  → papers.bib + venues.yml + coauthors.yml    (publications — largest task)
Step 6  → _projects/*.md + placeholder.jpg           (projects)
Step 7  → _news/*.md                                 (news)
Step 8  → repositories.yml + repositories.md         (repos page)
Step 9  → photography.md + copy photos               (gallery)
Step 10 → Copy remaining assets                      (images)
Step 11 → prettier + docker build + QA               (verify)
Step 12 → Transfer repo + deploy                     (go live)
```

### Critical files (largest effort):

| File                       | Size of change                                         |
| -------------------------- | ------------------------------------------------------ |
| `_bibliography/papers.bib` | **Large** — 34 BibTeX entries, need arXiv IDs and DOIs |
| `_pages/about.md`          | Medium — write biography prose                         |
| `_projects/*.md` (8 files) | Medium — write project descriptions                    |
| `_config.yml`              | Medium — ~20 config values                             |
| Everything else            | Small — mechanical edits                               |
