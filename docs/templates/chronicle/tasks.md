# Chronicle (ColorLib "Content") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-chronicle` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Content" — Blog / Magazine HTML Template
  (source: https://colorlib.com/wp/template/content/). Listed in
  TEMPLATES.md under **Blog (60)** (line ~252).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/content/`. DOM fetched
  (`/tmp/content-preview.html`, 27 KB) + stylesheet
  (`/tmp/content-style.css`, 28 KB, Sass-compiled) + screenshot
  (`content-free-template.jpg`, viewed in browser). All references
  verified live.
- **Visual design:** minimalist white editorial blog. Top utility row:
  "Sign In" (lock icon) left, centered serif text logo "Content.",
  "Search" toggle right (expanding inline input "Enter keyword and hit
  enter..."); centered menu below: Food and Drinks (active), Categories ▾,
  Travel, Elements ▾, Inner Page, Contact us. Full-viewport-height hero
  slider (3 slides): each slide is a background image with a white card
  floating at the bottom center (max-width 500px, padding 40px, soft
  shadow) holding share icons (Facebook/Twitter/Pinterest 30×30 tiles),
  "FOOD AND DRINK" category, big Playfair serif title, excerpt, meta
  "May 10, 2020 • 5 mins read"; slider arrows + dots. "Today's
  Highlight" section: 2 vertical post cards + 3 horizontal post rows
  (160px image column) left, sticky white "Subscribe to Newsletter" card
  (rounded image, email input + full-width Subscribe button) right. Two
  half-width sections "Lifestyle" and "Travel" (3 horizontal posts
  each), then "Food and Drink" with 4 vertical cards. Centered footer:
  socials (Facebook, Twitter, Linkedin, YouTube), copyright with heart,
  "Terms & Conditions / Privacy Policy". Accent = tan/beige gold
  `#c1a57b` on links/buttons/section-title highlight; page bg warm grey
  `#f0f0f0`; headings Playfair Display serif, UI Jost sans.
- **Structure (1:1 from the preview DOM):**
  1. Top bar `nav.site-nav` (padding 20px top/bottom): row
     justify-content-between — "Sign In" (desktop only) | centered
     `div.logo` text logo (2rem, black, "Content.") | right: search
     toggle + `div.search-wrap` expanding form (absolute right 10px,
     width 0 → open; input "Enter keyword and hit enter...") + burger
     (mobile only). Desktop menu row below: `site-navigation
text-center` — Food and Drinks (active), Categories ▾ (Menu One,
     Menu Two ▾ [Sub Menu One/Two/Three], Menu Three), Travel, Elements
     ▾, Inner Page, Contact us.
  2. Mobile off-canvas `div.site-mobile-menu` (close button + links).
  3. Hero `div.featured-post` (margin-bottom 100px) → `div.main-slider
owl-carousel`: 3 `div.post-slide` (background-image cover, center
     center, height 100vh, min-height 560px, position relative). Card
     `div.text-wrap`: white, absolute bottom 20px, left 50%
     translateX(-50%), max-width 500px, padding 40px, box-shadow
     `0 15px 30px rgba(0,0,0,.05)`; contents: `div.share` (3 icon links
     fb/tw/pin: 30×30, radius 4px, bg `#f8f9fa`, black glyph centered),
     `div.meta-cat` "Food and Drink", serif h2, excerpt link
     (text-black), `div.meta` "May 10, 2020 • 5 mins read" (grey
     `rgba(152,152,152,.7)`). Owl dots at bottom -50px; nav arrows
     vertically centered.
  4. `div.section-latest` (margin-bottom 100px): `row gutter-v1
align-items-stretch` → `col-12` section-title "Today's Highlight";
     `col-md-9 pr-md-5`: `row mb-5` (2 vertical `col-md-6
div.post-entry`) + 3 horizontal `col-12 div.post-entry.horizontal
d-flex` (last `mb-0`); `col-md-3`: `div.floating-block
sticky-top text-center` (white, shadow, padding 20px, top 20px):
     rounded img (`img-fluid mb-4 rounded`), h2 "Subscribe to
     Newsletter" (16px w700), copy, form: email input + `btn
btn-primary btn-block` "Subscribe".
  5. `div.section-more-posts`: two `col-md-6` — section-title
     text-center "Lifestyle" + 3 horizontal posts; "Travel" + 3
     horizontal posts.
  6. `div.section-more-posts.mb-0`: `col-12 text-center` section-title
     "Food and Drink" + 4 `col-md-6 col-lg-3` vertical `div.post-entry`
     cards.
  7. Footer `div.site-footer` (padding-top 70px / bottom 30px, font-size
     15px, centered): social icons (fb/tw/linkedin/youtube), copyright
     "© <year> All rights reserved | This template is made with ♥ by
     Colorlib", "Terms & Conditions / Privacy Policy" links.
  8. `#overlayer` + `.loader` spinner overlay.
- **Design tokens (extracted from style.css):**
  - Brand: **`#c1a57b`** tan/beige gold (25 usages: links, hover,
    `.btn-primary` bg+border, `.text-primary`, section-title highlight
    bar, footer hover). Lighter variant `#c9b18c`.
  - Text: `#000000` (headings, logo, nav, titles); meta
    `rgba(152,152,152,0.7)`; minor `#303030`, `#7b7b7b`.
  - Bg: page `#f0f0f0`; white cards `#ffffff`; `#f8f9fa` (share tiles,
    input borders); `#e6e6e6`; focus border `#e9ecef`; `#ccc`.
  - Fonts: **Jost** (body/nav/section-titles/buttons) + **Playfair
    Display** (h1–h4, logo, post titles) via Google Fonts.
  - `.section-title`: Jost 18px UPPERCASE letter-spacing .1rem w700
    black inline-block; `::before` = `#c1a57b` bar, height 40%, bottom
    0, left 0, right -10px, z-index -1 (gold highlight behind bottom of
    text).
  - `.btn`: padding 8px 20px (Bootstrap default radius ~4px);
    `.btn-primary` bg/border `#c1a57b` white text; `.btn-block` width
    100%.
  - `.form-control`: height 45px, font-size 16px, border 2px solid
    `#f8f9fa`, focus border `#e9ecef`.
  - `.post-entry` margin-bottom 40px; `.media` margin-bottom 10px;
    `.text h2` 20px black serif; `.text .meta` grey, margin-bottom 20px;
    horizontal: `.media` flex 0 0 160px, margin-right 30px.
  - Hero `.text-wrap` as above; share links 30×30 radius 4px bg
    `#f8f9fa` color `#000`.
  - `.floating-block`: white, shadow `0 15px 30px rgba(0,0,0,.05)`,
    padding 20px, sticky top 20px.
  - Logo 2rem black; nav links black; footer links black hover
    `#c1a57b`.
- **Recreation name:** Chronicle (NEW name, differs from ColorLib
  "Content"). App folder `apps/chronicle`, package
  `@free-react-templates/chronicle`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/chronicle-<n>/<w>/<h>`: hero slides 1600×900,
  vertical posts 800×500, horizontal thumbs 160×160, newsletter rounded
  image 400×300, food-and-drink cards 600×400); lucide-react icons
  (Search, Menu, X, Mail, Lock, ChevronDown, Heart; brand socials as
  inline SVG: Facebook, Twitter, Pinterest, Linkedin, YouTube — lucide
  has no brand icons); Jost + Playfair Display via Google Fonts `<link>`;
  logo → text wordmark "Chronicle."; hero slider → React carousel
  (auto-advance ~5s, arrows + dots, cycle); section title = uppercase
  text with a gold bar behind the bottom 40% (inline-block + ::before or
  absolutely positioned span, z-index -1); no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-chronicle/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/chronicle` (copy a section-rich landing app pattern,
      e.g. Aurora; rename package to `@free-react-templates/chronicle`;
      run `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: TopBar (Sign In +
      centered wordmark + search toggle/expand + burger), NavMenu
      (centered links + dropdowns + off-canvas mobile menu), HeroSlider
      (full-height slides + white text-wrap card + arrows/dots), Section
      Title (gold highlight bar), PostEntry (vertical + horizontal
      variants), HighlightSection, NewsletterCard (floating sticky),
      CategorySections (Lifestyle/Travel halves + Food and Drink cards),
      Footer (socials + copyright + legal links).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh chronicle` in
      FAST_MODE).
- [ ] Push `feat/template-chronicle`, open PR (source template ColorLib
      "Content", preview URL reachable, design tokens, what differs:
      name, placeholder images, text logo), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-chronicle.surge.sh) + homepage; run
      `npm run readme:status`; push.
