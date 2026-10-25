# Quarto — Tasks

Recreation of ColorLib **"Fieldnotes Student"** (https://colorlib.com/wp/template/fieldnotes-student/)
as a React 19 + Vite + Tailwind 4 + TypeScript app under the name **Quarto** (`apps/quarto`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `fieldnotes-student` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> **`## Portfolio`** *before* opening the PR — the exact line is in the spec, §Purpose — **between
> `Evans` and `Fplus`** (the section is sorted by the ColorLib source name). On `origin/main`
> `d089ec83e` the heading reads `## Portfolio (89)` over 89 rows, so the honest value after adding
> Fieldnotes Student is **`(90)`**. Re-count the rows, do not copy the number.

**Scope:** the source is a **five-page** static site (landing + résumé + two case studies + a writing
guide). Build the **landing page only**; the other four are inventoried in the spec and are out of
scope (spec Deviation 1).

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, **7,216 B**, `<title>` *Avery Chen | Student
      portfolio — Fieldnotes Student*, sha256 `e202abae…50f3`); preview-path ladder probed —
      `theme/<slug>/` 200, `theme/bootstrap/<slug>/` 404, `theme/bb/<slug>/` 404,
      `etc/cs/<slug>/index.html` 404, `downloads/free/<slug>.zip` 404 (no archive; live DOM is the only
      reference)
- [x] Token sheet measured (`assets/style.css`, 10,112 B, sha256 `667e2fec…59a2`): **seven** `:root`
      properties — paper `#f7f5ef`, ink `#262923`, muted `#62675d`, line `#d8dbcf`, green `#244b3b`,
      yellow `#e7ed92`, cream `#fffef8` (declared, unused) — plus three literals that react
      (link hover `#0e3020`, button hover `#163a2a`, **focus ring `#9d461d` 3 px @ 5 px**), the notebook
      surface (`#e5e8dc` card, `#e6cf99b0` tape, `#b3baa7` rules, `#65785f` stamp), the art grounds
      (sage `#e2e7dc`, clay `#eedfcd`, chrome `#f5f4ed`, dots `#c6cbbb`, route `#527f61`) and radii
      3 / 4 / 30 px + 50 % — **no shadows anywhere**
- [x] Live-render verification (Playwright, 1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360):
      `h1` **96.48 / 102.27 / −5.31** at 1440, 51.46 at 768, **53.6** at 390 (the ≤575 block *raises*
      it); section `h2` 57.6 → 32; contact `h2` 68.8 → 40; notebook card **380 × 500** `rotate(2deg)`
      (1deg at 390); hero columns 853/427 → stacked at 992; cards **628 ×2 → 384 ×2 → 370 ×1**; contact
      panel **1232 × 467** on `rgb(231,237,146)` with 55 px padding; header **78 px static**; document
      height **3,336 px at 1440**, **4,670 at 390**
- [x] Behaviour read from `assets/app.js` (1,494 B, sha256 `7c89692c…f570`) — **five** behaviours only:
      the `.js` class, the menu toggle (open/close + `Escape` + focus return), the filter pills
      (`aria-pressed` + hide non-matching `[data-project]` + `"N projects shown"` in a polite live
      region), the résumé print button (out of scope), and nothing else. **No** reveal, preloader, cookie
      strip, back-to-top, scroll spy, dark toggle or `localStorage`
- [x] Class census: **61** distinct classes, **0** phantom (11 are Bootstrap grid/utility:
      `row col-lg-8 col-lg-4 col-lg-5 col-lg-7 col-md-6 g-4 g-lg-5 align-items-center mt-4
      visually-hidden`; 2 are JS state: `js`, `open`); the stylesheet has **0 dead selectors**
- [x] Link/destination census: **62** anchors across the five pages, **0** dead `#`, **0** broken
      fragments (index holds `main site-nav work about experience contact project-status`;
      `setup.html` holds the `case-study` anchor). Landing page alone: **16** anchors, 0 dead
- [x] Inner-page inventory recorded (résumé headings, both case studies' six `h2`s + pull-notes +
      artifact cards, the writing guide's seven sections) — reference only, not built
- [x] Screenshot analysed (AVIF 2400×1892 → PNG): a **marketing composition**, not a browser capture —
      sage `#e8ebe0` ground, catalogue kicker, three framed windows (landing, case study, résumé)
- [x] Name `quarto` cleared: no `apps/quarto`, no `template-quarto` spec, no `docs/templates/quarto`,
      `git grep -il quarto origin/main` empty, and `wp/template/quarto/`,
      `preview.colorlib.com/theme/quarto/`, `…/theme/bootstrap/quarto/` all **404**
- [x] Spec written and validated: `openspec/specs/template-quarto/spec.md`
      (`openspec validate template-quarto --type spec` → valid); notes in
      `docs/templates/quarto/design-notes.md`

## Build

- [ ] `npm install` at the repo root **first** (the workspace must be registered), then scaffold
      `apps/quarto` by copying the simplest existing app; rename the package to
      `@free-react-templates/quarto`
- [ ] `vite.config.ts` registers `injectUiSource()`; `react`/`react-dom` are `latest`; `public/CNAME` =
      `quarto.free.componentdock.com`; `package.json#homepage` =
      `https://quarto.free.componentdock.com`
- [ ] `src/index.css`: paste the `@theme` block from `docs/templates/quarto/design-notes.md` verbatim
      (paper/ink/muted/line/green/yellow/cream + notebook + art tokens + `--font-serif` stack), plus the
      base layer `html { scroll-behavior: smooth; scroll-padding-top: 95px }` and the
      `prefers-reduced-motion` override
- [ ] `index.html`: `<link>` Google Fonts **Inter** (`wght@100..900`) and **Gelasio**
      (`ital,wght@0,400..700;1,400..700`) with `display=swap`; one `<title>`, one meta description

### Sections, in reference order

- [ ] `Navbar` — static 78 px header, 33 px circular monogram (Georgia italic), wordmark 18.08/700,
      nav `Work / About / Résumé / Let's talk ↗` (34 px gaps, current item underlined, last item 1 px
      bottom border); `Menu` toggle **≤575** with `aria-expanded`, `aria-controls`, `Escape`-to-close and
      focus return
- [ ] `Hero` — availability line (7 px green dot), `h1` with the `in progress.` Georgia italic run
      (max 760), intro (max 440), two CTAs (solid 3 px-radius green button + outlined twin, 24 px
      label-to-glyph gap); stacks above the notebook card **below 992**
- [ ] `NotebookNote` — `#e5e8dc` card, `rotate(2deg)` (1deg ≤575), 42/30 padding, tape `#e6cf99` @72 %
      −6deg 130 × 28 at `top: -12px`, `FIELD NOTES` / `VOL. 01 / 2026` over a `#b3baa7` rule, 48 px
      Georgia italic `h2`, three `↳` ruled note rows, 62 px `#65785f` stamp rotated −14deg right-aligned
- [ ] `Work` — counted eyebrow `01 / SELECTED PROJECTS`, `h2` with italic `worked on.`, right-aligned
      320 px two-line lede (baseline-aligned); 3 pills (`All work` active = ink ground) + polite live
      status; 2 cards in a `md` two-up grid
- [ ] `ProjectCard` — 900:590 art frame on a `#e9e8df` mat (hover scale 1.025), uppercase meta, 25.6 px
      `h3` with the `↗` pushed right, max-490 blurb
- [ ] `ConceptArt` (or two components) — **original inline SVG** mockups: card 1 sage `#e2e7dc` with a
      dashed `#527f61` route, card 2 clay `#eedfcd` with `#244b3b`/`#e7ed92` bars; `#f5f4ed` window bar,
      three `#c6cbbb` dots; `role="img"` + `aria-label`
- [ ] `About` — 5/7 split, `02 / A LITTLE CONTEXT`, `h2` with italic `making things.`, two paragraphs
      (first at 17.92 px / max 640), **five** bordered skill chips
- [ ] `Experience` — 5/7 split, `03 / ALONG THE WAY`, `h2` with italic `outside class.`, `Résumé` link,
      `<ol>` of **three** hairline rows (23 px padding, 11.52 px date, 18.4 px title, 13.76 px body)
- [ ] `ContactPanel` — **inset** `#e7ed92` panel (4 px radius, 55 px padding, 65 px bottom margin),
      `04 / SAY HELLO`, 68.8 px `h2` with italic `start.`, lede, **outlined** email button with a
      **green** label, sample notice
- [ ] `Footer` — hairline top, brand line, **Component Dock** link, fictional-sample notice

### Behaviour

- [ ] Filters: `useState`, `aria-pressed`, derived visible cards, `"1 project shown"` / `"2 projects
      shown"` in a `role="status" aria-live="polite"` region; keyboard operable
- [ ] Menu: open/close, close on link click, `Escape` closes and returns focus; `scrollWidth ===
      clientWidth` at 360/390
- [ ] Reduced motion: smooth scroll → instant, hover scale dropped
- [ ] Focus ring: 3 px `#9d461d` at 5 px offset on every interactive element

### Tests (TDD — write them red first)

- [ ] `Hero.test.tsx` — one `h1`; the `em` run is the italic tail; both CTAs present and labelled
- [ ] `NotebookNote.test.tsx` — `FIELD NOTES` / `VOL. 01 / 2026`, all three note rows, the stamp text
- [ ] `Work.test.tsx` — eyebrow + italic tail; pressing `Personal project` hides the coursework card,
      sets `aria-pressed`, and writes `1 project shown`; pressing `All work` restores `2 projects shown`
- [ ] `ProjectCard.test.tsx` — meta line, title, blurb, `↗` glyph present
- [ ] `About.test.tsx` — five chips, both paragraphs
- [ ] `Experience.test.tsx` — three rows in order with their dates
- [ ] `ContactPanel.test.tsx` — `mailto:` href, sample notice
- [ ] `Navbar.test.tsx` — toggle `aria-expanded` flips, `Escape` closes, link click closes
- [ ] `scripts/verify-app.sh quarto` green (typecheck + lint + **100 % coverage** + build)

### Hand-off

- [ ] Row added to `TEMPLATES.md` under `## Portfolio`, alphabetical (between `Evans` and `Fplus`),
      heading count re-measured (89 → 90)
- [ ] `npm install` at the root again after the workspace rename; `grep -c
      "free-react-templates/quarto" package-lock.json` ≥ 1
- [ ] `grep -ri 'colorlib\|fieldnotes\|avery' apps/quarto` prints nothing
- [ ] PR description: source design, preview URL, tokens used, and the deviations list (single page,
      new persona, redrawn illustrations, Google-Fonts delivery, Component Dock attribution)
- [ ] Merge, then `gh workflow run deploy-surge.yml -f app="quarto"`; verify
      `curl -4 -sI https://quarto.free.componentdock.com` → 200 and
      `curl -4 -sI https://na-west1.surge.sh -H 'Host: quarto.free.componentdock.com'` → 200
- [ ] Bookkeeping: `[x]` marker + surge URL in the row, `npm run readme:status`
