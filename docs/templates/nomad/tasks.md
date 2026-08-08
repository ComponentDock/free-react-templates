# Nomad (ColorLib "Explore") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-nomad` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Explore" — travel/personal blog template
  (source: https://colorlib.com/wp/template/explore/). Listed in TEMPLATES.md
  (Blog section, line 258; duplicate entries at lines 390 and 2392 — mark
  EVERY copy `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/explore/ — reachable.
  Fetched: `/tmp/explore-prep/preview.html` (32 KB), `css/style.css` (68 KB).
  Screenshot `explore-free-template.jpg` (1200×946, viewed in browser —
  converted AVIF→PNG via ffmpeg). Preview DOM and screenshot agree —
  editorial travel-blog aesthetic: split hero (text left, full-height photo
  right), huge serif watermark words behind headlines, coral `#ff895d` CTAs,
  clean white page, near-black `#141313` footer.
- **Visual design:** light, magazine-like travel blog. White background; body
  text `#666666`; black headings; muted grey `#b3b3b3` meta; coral `#ff895d`
  accents (buttons, active nav, newsletter band, hover states, pagination
  circles); the hero's right half is a full-bleed travel photo; blog cards are
  full-width (image 400px → text below) with an Abril Fatface watermark word
  (category name) behind the title; the newsletter sidebar widget is a solid
  coral band with a white subscribe button; footer is dark charcoal with
  white/translucent text and 50px circular social buttons.
- **Fonts:** Poppins (body, weight 300, 16px, lh 1.8, `#666666`) + Abril
  Fatface (display watermark words, 100px/60px, `#e6e6e6`/`#ebebeb`, absolute
  `top: -20px; left: -60px` behind headings). Load both via Google Fonts
  `<link>` in `index.html`.
- **Structure (1:1 from the preview DOM):**
  1. Navbar `nav#ftco-navbar.ftco_navbar.bg-dark.ftco-navbar-light` — logo
     "Explorer" → **Nomad** (weight 700, 20px, white); desktop links (14px,
     white, padding .9rem 20px): Home ▾ (Home with slider / Home with full
     slider / Home with parallax) · Post ▾ (Post with right sidebar / Post
     with left sidebar / Post no sidebar) · Archives ▾ (Destination / Tag /
     Authors Post) · Pages ▾ (Right Sidebar / Left Sidebar / Authors Page) ·
     Contact. Mobile toggle text "Menu". Scrolled (`.scrolled`): fixed, white
     bg, `box-shadow 0 0 10px rgba(0,0,0,0.1)`, links black, active `#ff895d`.
  2. Hero `div.home-slider.js-fullheight.owl-carousel` — height 750px; TWO
     `div.slider-item.js-fullheight` slides, each a row split into:
     - `div.col-md-6.text`: `div.author.mb-4.d-flex` → 80px circular avatar
       (`person_1.jpg`/`person_2.jpg`) + "Written by **Dave Lewis**,
       October 04, 2018"; `div.text-2`: `span.big` watermark ("Europe" /
       "USA") + `h1.mb-4` ("Switzerland famous for chocolate making" /
       "Hawaii known as the Big Island") + `p.mb-4` excerpt ("A small river
       named Duden flows by their place and supplies it with the necessary
       regelialia") + `a.btn.btn-primary.p-3.px-xl-4.py-xl-3` "Continue
       Reading" (radius 30px in hero).
     - `div.col-md-6.js-fullheight.img` background photo (`bg_1.jpg` /
       `bg_2.jpg`).
     - Slide overlay `#000` opacity .3. Dots: 10px circles
       `rgba(255,255,255,0.4)`, active `#fff`, bottom 40px. Auto-rotate +
       arrows optional (owl-nav arrows are hidden until hover; simple dots
       suffice).
  3. Intro `div.ftco-intro` — centered h1 (34px, weight 300):
     "I'm **Traveler & Blogger** from Paris, Italy Who Loves Documenting
     Adventures & Discoveries Around the World". Padding `4em 0` (bottom 0).
  4. Blog `section.ftco-section` (padding `6em 0`) → container → row:
     - main `div.col-lg-8`: FIVE `div.blog-entry.ftco-animate`, each:
       `a.img` bg photo (400px; `image_1.jpg`…`image_5.jpg`) → `div.text.pt-2.
mt-5`: `span.big` watermark category word (preview uses "South
       America" on all five — vary: Europe / USA / South America / Asia /
       Africa), `h3` title (preview repeats "Hawaii known as the Big Island"
       — paraphrase per card), `p` excerpt (lorem), `div.author` row (avatar
       80px + "Written by Dave Lewis, October 04, 2018"), `div.meta-wrap.
d-md-flex.align-items-center`: right half = `p.meta` counters
       (`icon-heart` 3 · `icon-eye` 100 · `icon-comment` 5) + left half =
       "Continue Reading" coral button. Card spacing: margin-bottom 6em.
     - sidebar `div.col-lg-4` — seven `.sidebar-box` widgets in order:
       a. Search: `form.search-form` (bg `#fafafa`, padding 10px) — input
       placeholder "Type a keyword and hit enter" + search icon right.
       b. "Destination" — 6 links with counts: Africa (6) · Asia (8) ·
       Australia (2) · Europe (2) · North America (7) · South America (5).
       c. "Popular Articles" — 3 × `div.block-21` items: 80×80 thumb + heading
       (18px weight 300, hover coral) + meta "Oct. 04, 2018 Dave Lewis
       19" (12px gray).
       d. "Tag Cloud" — 8 tags: dish · menu · food · sweet · tasty ·
       delicious · desserts · drinks (uppercase 11px, `border 1px solid
   #ccc`, radius 4px, hover border black).
       e. `div.sidebar-box.subs-wrap` "Subcribe to our Newsletter" (fix typo
       → "Subscribe") — bg `#ff895d`, white h3, blurb "Far far away,
       behind the word mountains, far from the countries Vokalia",
       `form.subscribe-form`: email input (transparent bg, 1px
       `rgba(255,255,255,0.4)` border) + full-width white "Subscribe"
       submit (52px, radius 0). NOTE: subscribe-form ALSO used in footer
       of some variants — here it's the sidebar widget.
       f. "Archives" — September 2018 (6) · August 2018 (8) · July 2018 (2) ·
       June 2018 (7) · May 2018 (5) · April 2018 (3).
       g. "Paragraph" — lorem filler (`<p>` with Duden-style copy).
  5. Footer `footer.ftco-footer.ftco-bg-dark.ftco-section` — bg `#141313`,
     padding `6em 0`, font-size 14px. Four `.ftco-footer-widget` columns:
     - "Explorer" → **Nomad**: about text ("Far far away, behind the word
       mountains, far from the countries Vokalia and Consonantia, there live
       the blind texts.") + 5 circular social icon links (50px,
       `rgba(255,255,255,0.05)` bg, 26px icons, hover white).
     - "Destination": same 6 links as sidebar (with counts).
     - "Archives": same 6 months (with counts).
     - "Have a Questions?": 203 Fake St. Mountain View, San Francisco,
       California, USA · +2 392 3929 210 · info@yourdomain.com.
     - Copyright bar: "Copyright © <year> All rights reserved | This template
       is made with Colorlib" → paraphrase "© 2026 Nomad — Travel blog
       template".
- Inner pages (post/destination/tag/author pages, index2/index3 alternate
  heroes) are NOT recreated — single-page index.html only.
- Images to replace with picsum: `bg_1.jpg`, `bg_2.jpg` (hero), `person_1.jpg`,
  `person_2.jpg` (avatars), `image_1.jpg`…`image_5.jpg` (blog cards) → e.g.
  `https://picsum.photos/seed/nomad-hero-1/1200/750`, `.../nomad-blog-1/1200/400`.

## Implementation tasks (implementer)

- [ ] Scaffold `apps/nomad` from the simplest existing app; package
      `@free-react-templates/nomad`; `npm install` at root to register the
      workspace in package-lock.json; keep `injectUiSource()` in
      `vite.config.ts`.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #ff895d`,
      `--color-brand-soft: #78d5ef` (focus rings), `--color-body: #666666`,
      `--color-ink: #000000`, `--color-muted: #b3b3b3`, `--color-footer:
    #141313`, `--color-search: #fafafa`, `--color-watermark: #ebebeb`;
      Poppins + Abril Fatface via Google Fonts `<link>` in `index.html`
      (`.font-display` utility for watermark words).
- [ ] Shared UI: use `Button`/`ButtonLink`/`cn` from `packages/ui`; social
      icons typed with `BrandName` (satisfy knip — see repo memory); heart/
      eye/comment/search icons from lucide-react.
- [ ] Components (each with colocated 100%-coverage tests):
      `Navbar` (transparent→scrolled states, 4 dropdowns, mobile toggle),
      `Hero` (2-slide slider with dots + author row + watermark),
      `Intro`, `BlogCard` (photo, watermark, title, excerpt, author, meta
      counters, CTA), `Sidebar` (Search + Destination + PopularArticles +
      TagCloud + Newsletter + Archives + Paragraph widgets — Newsletter gets
      zod validation), `Footer` (4 columns + socials + copyright).
- [ ] Tests mirror the Gherkin scenarios in
      `openspec/specs/template-nomad/spec.md`; keep 100% coverage.
- [ ] `App.tsx` composes sections in order: Navbar → Hero → Intro → Blog →
      Footer; document title "Nomad — Travel Blog Template".
- [ ] Self-review (docs/self-review.md) + `scripts/verify-app.sh nomad`
      green; README status regenerated after merge.
- [ ] Commit `feat: Nomad — travel blog template (ColorLib Explore)`; PR +
      immediate squash merge; surge deploy
      https://free-react-templates-nomad.surge.sh.
