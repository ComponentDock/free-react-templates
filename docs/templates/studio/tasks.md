# Studio (ColorLib "Carousel #10", slug carousel-20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-studio`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel #10" — creative-studio single-hero landing
  from the Bootstrap Carousels series (source:
  https://colorlib.com/wp/template/carousel-20/). TEMPLATES.md has ONE row:
  line 727 (section "## Bootstrap Carousels (20)") — no duplicate rows
  (grep-checked before prepping). NEW name **Studio** (free in `apps/` and
  `openspec/specs/` — `studia` exists, `studio` does not).
- **Preview URL quirk:** the standard path 404s. The real demo is
  `https://preview.colorlib.com/theme/bootstrap/carousel-20/` (HTTP 200,
  14,799 bytes; title "Carousel #10") — the Bootstrap series lives under the
  `/theme/bootstrap/` prefix. The ColorLib template page's "Live Preview"
  href reveals the real path; check it before falling back to the screenshot.
  HTML saved to `/tmp/carousel20/preview.html`; template CSS
  `.../carousel-20/css/style.css` (4,030 bytes — small custom sheet, NOT the
  bootstrap bundle) saved to `/tmp/carousel20/style.css`.
- **Screenshot:** `carousel-20.jpg` (1200×972, AVIF — opened in the browser):
  solid deep-navy `#272343` background; small centered white "Carousel #10"
  label near the top; LEFT half = warm beige studio photo (hand holding a
  hardcover "GENESIS" book/magazine, mountain cover); RIGHT half = huge white
  "The Studio" headline, one lorem line, white-outline pill "Start a
  project". Minimal, editorial, high contrast. Cross-checks the live DOM +
  CSS.
- **Visual design (DOM + CSS tokens):** the page is ONLY the hero — no
  navbar, no footer in the source. Structure 1:1:
  1. Series label — `.content > .container > h2.my-5.text-center.text-white`
     "Carousel #10" (20px). KEEP the label verbatim — the source's numbering
     lags the slug by 10 (carousel-18 → "#8", 19 → "#9", 20 → "#10") and
     that IS the source content.
  2. Hero (`.site-blocks-cover`, min-height 600px, height calc(100vh)):
     - `.img-wrap` — LEFT 50% (`width: calc(100% - 50%); right: 50%`), full
       height, `border-bottom-right-radius: 200px`, `overflow: hidden`,
       z-index 2. Inside: `.owl-carousel.slide-one-item.hero-slider` with 3
       `.slide > img` (object-fit cover, 100vh).
     - Intro — right half (`col-md-6 ml-auto align-self-center`, z-index 3):
       `.heading` h1 "The Studio" (`margin-left: -150px` — pulled over the
       image edge), `.text.sub-text` (`padding-left: 50px`) = 1.4rem gray
       lorem paragraph + `.btn.btn-outline-primary.btn-md.btn-pill` "Start a
       project".
  - Mobile (≤991.98px): img-wrap full-width + `.hero-slider:before` white
    overlay (opacity .5); `.sub-text` → `#000`; h1 → 4rem; offsets reset.
- **Design tokens:**
  - Background `#272343` (body AND `.content` — whole page).
  - Font **Roboto** (Google Fonts): body + headings; weights 300 (body,
    sub-text), 400, 900 (headline). Load via `<link>` in index.html.
  - Headline: 8rem / 900 / line-height 1, white (4rem ≤991.98px).
  - Sub-text: 1.4rem, `gray` `#808080`, 300. Paragraphs `#b3b3b3` 300.
  - Button `.btn-pill`: radius 30px, padding 15px 30px, white 1px border +
    white text; hover → white bg + `#000` text.
  - Carousel arrows (JS-injected owl nav, styled in CSS): 50px circles
    `#007bff`, white 30px chevrons, stacked vertically (mb 10px), absolute
    `bottom: 120px; right: 50px` within the image wrap. → lucide
    `ChevronLeft`/`ChevronRight`.
  - `.content` padding `7rem 0`.
- **lucide-react icon map:** chevrons → `ChevronLeft`/`ChevronRight`; no
  other icons needed (no nav, no socials).
- **Seeds for picsum placeholders (3 hero slides):**
  `https://picsum.photos/seed/studio-hero-<n>/1600/900` — SCREEN each for a
  studio/editorial subject (book/magazine/workspace/portrait); verified
  editorial-ish picsum IDs from the replication skill: 1027/64/823/996
  (portraits), 453 (dark stage). Don't trust arbitrary seeds for the hero.
- **Deviations from source (document in PR):**
  - "Start a project" hrefs to free-template.co in the source — use
    `href="#"`/inert CTA (no ColorLib/sister-site references in app code).
  - No footer in source — ADD the mandatory minimal footer (AGENTS.md): dark
    `#272343` bar, "© 2026 Studio. All rights reserved." + "Made with ❤"
    linking to `https://www.componentdock.com/`.
  - icomoon chevron glyphs → lucide icons; jQuery/Owl carousel → React state
    (fade/slide transition); copied photos → screened picsum seeds.

## Implementation order (suggested)

1. Scaffold `apps/studio` from the simplest existing app; rename package to
   `@free-react-templates/studio`; register in the root lockfile via the
   repo's usual add-workspace flow (implementer's job, NOT prep).
2. `@theme` tokens: `#272343` brand bg; `#007bff` arrow accent; `#808080`
   sub-text gray; `#b3b3b3` body text; font Roboto (300/400/900).
3. Components (in `apps/studio/src/components/`):
   - `SeriesLabel` — centered white 20px "Carousel #10" (or fold into
     `Hero`/`App`; it is one h2).
   - `Hero` — split layout: left `.img-wrap` (50% width, right-50%, 200px
     bottom-right radius, overflow hidden) + right intro (`ml-auto`,
     heading -150px, text 50px padding).
   - `HeroSlider` — 3 slides with fade transition + prev/next 50px `#007bff`
     circles (lucide chevrons, white 30px), stacked bottom-right of the
     image wrap; aria-labels on controls.
   - `Footer` — minimal dark bar with Component Dock credit (mandatory).
4. TDD per component: tests first, 100% coverage via
   `scripts/verify-app.sh studio` (typecheck + lint + vitest + build).
   Slider test: assert slide 1 visible on load; click next → slide 2
   (`aria-hidden` on inactive slides — use `{ hidden: true }` in queries;
   see replication skill pitfalls); wrap-around on last slide.
5. PR description: source template (ColorLib "Carousel #10", slug
   carousel-20) + preview URL (note the `/theme/bootstrap/` prefix) + tokens
   - what differs (rename, picsum seeds, lucide chevrons, inert CTA instead
     of free-template.co link, added Component Dock footer, no navbar/footer
     in source).
6. After deploy: mark TEMPLATES.md line 727 `[x]` + surge URL
   (`https://studio.free.componentdock.com`), `npm run readme:status`,
   conventional commit. (Line 727 is the only row for this slug.)

## Verification

- [ ] `scripts/verify-app.sh studio` (typecheck + lint + 100% coverage tests + build)
- [ ] Spec scenarios all implemented (`openspec/specs/template-studio/spec.md`)
- [ ] Visual pass vs live demo `https://preview.colorlib.com/theme/bootstrap/carousel-20/`
- [ ] TEMPLATES.md line 727 `[x]` with `https://studio.free.componentdock.com`
