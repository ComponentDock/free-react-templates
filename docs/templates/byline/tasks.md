# Byline (ColorLib Andrea) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-byline` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Andrea" — personal/lifestyle blog template with a
  fixed left sidebar + blog listing + right widgets sidebar
  (source: https://colorlib.com/wp/template/andrea/). Listed in TEMPLATES.md
  under Blog (line 240) — one recreation covers that single checklist row.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/andrea/`
  (HTTP 200, 43KB). DOM + `css/style.css` (56KB) extracted and analyzed.
  Screenshot `andrea-free-template.jpg` viewed in browser (AVIF): confirms
  three-column layout, circular thumbnails, serif headings, sky-blue accent
  links, "Andrea Moore" logo in blue/purple gradient over a faint floral
  photo.
- **Structure (1:1, section order from the DOM):**
  1. Left sidebar (fixed, white, 320px/25%): logo (two lines "Andrea" /
     "Moore", Abril Fatface, image-clipped text) → nav Home (active) /
     Fashion / Travel / About / Contact (Poppins 18px 500; active + hover
     underline animation in `#1eafed`) → "Subscribe for newsletter" form
     (email input, `#7cd1f5` border, paper-plane icon right) → sidebar footer
     (copyright + "made with ♥ by Colorlib").
  2. Main column (75%, offset right): 12 blog entries, each `blog-entry
d-md-flex` — circular 150px image (`.blog-entry .img`: 150×150,
     `border-radius: 50%`) left; text right: h3 title (Lora, 30px, weight
     400), meta row (14px `#bfbfbf`: icon-calendar date · icon-folder-o
     category · icon-comment2 count), excerpt, "Read More" link + arrow icon
     (`.btn-custom` class has NO CSS in the original — renders as a plain
     accent link; screenshot shows it sky-blue).
  3. Right sidebar (`col-xl-4 sidebar bg-light` `#f8f9fa`): search form
     (`#fafafa` bg, search icon right, placeholder "Type a keyword and hit
     enter") → Categories (Fashion 6 / Technology 8 / Travel 2 / Food 2 /
     Photography 7) → Popular Articles (3 × `block-21`: 80×80 thumb, 16px
     title, 12px gray meta date/author/comments) → Tag Cloud (8 tags:
     animals, human, people, cat, dog, nature, leaves, food — uppercase 11px,
     1px `#ccc` border, radius 4px) → Newsletter (`subs-wrap`: photo bg +
     `rgba(0,0,0,.6)` overlay, white heading + blurb + email input + white
     full-width "Subscribe" button, radius 0) → Archives (6 months with
     counts — note the original typo "Decob14 2018", fix to December 2018) →
     Paragraph (blurb).
  4. No pagination on the index page (12 entries only). `block-27` pager
     (40px circles, `#1eafed` border, active filled) exists in CSS for other
     pages — do NOT add it here.
- **Design tokens (from `css/style.css`):**
  - Fonts: **Lora** (headings h1–h6, `font-weight: normal`, color
    `rgba(0,0,0,.8)`), **Abril Fatface** (logo, 62–74px, line-height .8),
    **Poppins** (sidebar nav 18px/500; subscribe inputs 14px). Load via
    Google Fonts `<link>`.
  - Colors: primary **`#1eafed`** (active nav + underline, hover links,
    pagination); `#7cd1f5` (newsletter input border); headings `#000` /
    `rgba(0,0,0,.8)`; nav links `rgba(0,0,0,.7)`; meta `#bfbfbf` / `#b3b3b3`;
    muted `#6c757d`; right sidebar `#f8f9fa`; search `#fafafa`; newsletter
    overlay `rgba(0,0,0,.6)`.
  - Shapes: circular 150px entry images; 80×80 square popular thumbs; tag
    pills radius 4px uppercase 11px; inputs radius 0; pagination circles
    radius 50%.
  - Layout: sidebar fixed (top/bottom 0, left 0, 320px, translateX(-320px)
    off-canvas on small screens); main `width: 75%`; hamburger toggle
    (`#colorlib-nav-toggle` 30×2px bars) slides main right 270px when the
    off-canvas menu opens; blog card `margin-bottom: 6em`.
- **Recreation decisions:** new name **Byline** (no collision with `apps/` or
  existing spec folders). Logo = "Byline" / "Journal" two lines, Abril
  Fatface, gradient text via `bg-clip-text` (blue→purple) standing in for the
  image-clipped original. Nav = repo-standard sidebar with dark-mode toggle
  (original has no toggle; convention requires one — add it in the sidebar
  header area). Blog titles: keep the 5 unique originals + 7 variants (same
  kind of content). Icons from lucide-react: Calendar, Folder, MessageCircle
  (meta row), Search (search form), Send (sidebar subscribe), ArrowRight
  (Read More), Heart (credit line), User (popular meta), Menu/X (mobile
  toggle). Images: `https://picsum.photos/seed/byline-<n>/300/300` for entry
  circles (render 150px), `seed/byline-pop-<n>/160/160` for 80px thumbs,
  `seed/byline-news/600/400` for the newsletter bg. Brand `#1eafed` in
  `@theme`. Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).
  Forms: email validation per repo conventions (zod + react-hook-form
  pattern where used; block submit until valid; success confirmation).
  Sidebar off-canvas behavior: fixed on `lg+`, slide-in drawer with toggle
  below `lg`.

## Tasks

- [x] Write `openspec/specs/template-byline/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/byline` (copy the simplest app; rename package to
      `@free-react-templates/byline`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate (local per-app gate in FAST_MODE).
- [ ] Push `feat/template-byline`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: mark the Andrea row in TEMPLATES.md (Blog) `[~]` → `[x]` +
      Surge URL + homepage (bookkeeping on main, state D).
