# Rivulet (ColorLib "Droppler") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-rivulet` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Droppler" — Photography Blog HTML Template
  (source: https://colorlib.com/wp/template/droppler/). Listed in
  TEMPLATES.md (line 254).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/droppler/`. DOM fetched
  (`/tmp/prep-droppler/preview.html`, 21 KB) + stylesheets
  (`/tmp/prep-droppler/style.css` 34.6 KB, `css/common.css` 4 KB) +
  screenshot (`droppler-photography-blog-website-template.jpg`, 1200×942,
  viewed in browser). All references verified live.
- **Visual design:** dark, minimalist photography/designer blog. Hero =
  full-screen deep-navy `#2b3344` with a faint animated particle (dust)
  texture; droplet logo (bright-blue circle w/ white droplet per
  screenshot) at top center / logo left + hamburger right per DOM; bold
  white uppercase headline "DESIGNER. PHOTOGRAPHER. BLOGGER." (56px
  Montserrat 700); thinner lighter quote line (26px); thin white pill
  scroll indicator bottom-center. Below: five full-screen blog posts, each
  a fixed-attachment background photo under `#343451` overlay with centered
  white uppercase date/category/title (56px) + 36px serif excerpt + icon
  buttons "READ MORE" / "WATCH VIDEO". Then a testimonials slider (270px
  `#3b455b` quote glyph, 36px quotes, 24px authors, dot pagination) and a
  near-black `#191919` footer: widget columns, droplet logo in a 10px
  white-bordered circle, Twitter/Linkedin/Dribbble/Instagram icons, and a
  copyright bar with a coral `#e76f7d` pulsing heart.
- **Structure (1:1 from the preview DOM):**
  1. Header `div.header-holder`: `a.header-logo > img`
     (`images/default_droppler_logo.png`) + `div.toggle-holder.relative.right`
     burger `button#toggle` (three `span` lines) → full-screen
     `nav#header-main-menu` (sm-clean): Home, About, About 2, About 3,
     Gallery, Contact.
  2. Hero `div.blog-top-content-holder` (bg `#2b3344`, min-height 100%,
     `canvas#particles-js` absolute overlay): `div.blog-top-content
.content-1170.center-relative.center-text` (padding-bottom 100px) →
     `h1.entry-title` "DESIGNER. PHOTOGRAPHER. BLOGGER." (56px lh 60,
     uppercase, mb 40) + `p.site-description` (26px lh 35, max-width 870px,
     margin auto) + `div.icon-scroll` (35×60px, inset white 1px ring,
     radius 25px, 8px white dot, absolute bottom 25px center).
  3. Blog posts ×5 `div.blog-item-holder` (bg images
     `demo-images/one_drop_home_image01..05`; `background-size: cover;
background-attachment: fixed; background-position: top center`;
     `.no-background-image` → `#2B3344`; color `#ffffff`). `div.entry-content`
     (`:before` overlay `#343451` covering top): `div.content-1170`
     (padding-top 17%, padding-bottom 200px) →
     `span.entry-date.published` (20px uppercase, "November 19, 2017") +
     `span.cat-links` (20px uppercase; `/` separators 30px margins) +
     `h2.entry-title` (56px lh 60 uppercase, mt 35) + `div.excerpt-content`
     (36px lh 50) + `div.read-more-holder` (mt 120px mb 30px, inline-block;
     `img read_more_icon.svg` "READ MORE") and/or `a.video-popup`
     (`img video_icon.svg` + "WATCH VIDEO"; `i` 40px lh 58).
     Quote-titles used in the demo: "Start by doing what's necessary then
     do what's possible", "Positive anything is better than negative
     nothing", "Trust in dreams for in them is hidden the gate to
     eternity", "If you can design one thing you can design everything",
     "A camel is a horse designed by a committee".
  4. Testimonials `div.demo1.testimonial_slider_holder.slider_holder`
     (carouFredSel): `div.testimonial-top-quotes` (270px bold `#3b455b`),
     `div.testimonial-content` ×3 (36px lh 50, centered) + `div
.testimonial-author` (24px, pt 90): CHRISTIAN LINDHOLM / JAY-Z / MIKE
     DAVISON; `div#demo1_pagination.carousel_pagination.left` dots.
  5. Footer `footer.footer` (bg `#191919`): `h4.widgettitle` (24px)
     widget columns; `div.logo-holder.footer-logo img` (droplet logo,
     `border: 10px solid #fff; border-radius: 90%`); social `a`s (Twitter,
     Linkedin, Dribbble, Instagram); copyright "© <year> All rights
     reserved | This template is made with <i.fa-heart `#e76f7d`,
     pulse 1s infinite> by Colorlib"; `img back_to_top.png`.
- **Design tokens (extracted from style.css / common.css):**
  - Brand navy: `#2b3344` (hero, no-image posts), overlay `#343451`,
    footer `#191919`, alt darks `#2a2e41`/`#2d333f`/`#0D1529`.
  - Text: `#ffffff`, `#757B88` (muted, dominant gray), `#8f939e`,
    `#888888`, `#b5b5b5`, `#e2e2e2`.
  - Accent: `#e76f7d` coral — footer heart (pulse animation) + hover
    accents only; no filled buttons in the whole template.
  - Fonts: **Montserrat** 400/700 (headings + UI, heavy uppercase use) +
    **PT Serif** 400/700 (quotes/excerpts), via `@font-face` in the
    preview → recreate with Google Fonts `<link>`.
  - Shapes: scroll indicator pill radius 25px; logo circle
    `border-radius: 90%` with 10px white border; icon buttons (SVG + text),
    no radius/background.
- **Recreation name:** Rivulet (NEW name, differs from ColorLib
  "Droppler"). App folder `apps/rivulet`, package
  `@free-react-templates/rivulet`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/rivulet-<n>/<w>/<h>`: 5 post backgrounds 1600×900);
  logo → inline SVG droplet in a circle; lucide-react icons (Menu, X,
  ArrowDown, Play, ArrowRight, Heart, ArrowUp; brand icons Twitter/
  Linkedin/Dribbble/Instagram as inline SVG — lucide has none); Montserrat
  - PT Serif via Google Fonts; hero particles → lightweight canvas/CSS
    speckle animation (avoid heavy particles.js dep; document the choice);
    no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-rivulet/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/rivulet` (copy a section-rich landing app pattern,
      e.g. Chronicle/Aurora; rename package to
      `@free-react-templates/rivulet`; run `npm install` at root so
      `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (logo +
      hamburger full-screen menu), Hero (navy bg, particle overlay, h1 +
      quote + scroll pill), PostSection (×5: fixed photo bg + `#343451`
      overlay, date/cat/title/excerpt, READ MORE + WATCH VIDEO lightbox),
      Testimonials (slider w/ 270px quote glyph + pagination), Footer
      (widgets, circle logo, socials, pulsing heart, copyright).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh rivulet` in
      FAST_MODE).
- [ ] Push `feat/template-rivulet`, open PR (source template ColorLib
      "Droppler", preview URL reachable, design tokens, what differs:
      name, placeholder images, SVG logo, particles approach), merge
      immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-rivulet.surge.sh) + homepage; run
      `npm run readme:status`; push.
