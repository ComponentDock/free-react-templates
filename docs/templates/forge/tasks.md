# Forge (ColorLib "Craft") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-forge` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Craft" — Creative Agency Bootstrap HTML Template
  (source: https://colorlib.com/wp/template/craft/). Listed in TEMPLATES.md
  (line 367, Bootstrap category; dup rows at 958 and 1455 — do not
  re-claim).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/craft/`. DOM fetched
  (`/tmp/craft-ref/craft.html`, 19.8 KB) + stylesheet
  (`/tmp/craft-ref/style.css`, 55 KB) + screenshot
  (`craft-free-template.jpg`, 1200×946, viewed in browser). All references
  verified live.
- **Visual design:** light corporate creative-agency landing. Transparent
  navbar (thin uppercase wordmark, 5 centered links, right search field)
  over a full-screen hero photo (workspace flat-lay) with dark overlay,
  centered bold uppercase headline "WE ARE CREATIVE AGENCY" (Raleway 700,
  5rem) with a teal `#20c997` highlighter span, 60px white circular play
  button + "Watch Video". White "Who We Are" two-column section (eyebrow +
  black 70×6px divider + uppercase heading w/ bold span + outline-black
  button; right photo with 10px `#eee` offset shadow over dotted bg).
  Portfolio grid on blue-gray `#90a8af` with hover-reveal cards (dark
  overlay + name/category) + outline-white "More Portfolio". Split
  "Featured Services" section (4 icon cards: Branding/Web Design/App
  Design/Start Up). Testimonials carousel on `#f8f9fa` (white 40px-padded
  cards, 60px avatars, name 3rem + role, blockquote). Full-width teal CTA
  band (py-5) + `#333` footer (About + Contact Info + Quick Links columns,
  socials, copyright bar with heart).
- **Structure (1:1 from the preview DOM):**
  1. Header `header` > `nav.navbar.navbar-expand-lg.bg-dark` — CSS forces
     transparent over hero (`background: none !important`), black below
     1200px. `a.navbar-brand` (uppercase, letter-spacing .2em, white,
     weight 400) + nav links Home/About/Services/Portfolio/Contact
     (`padding 1.7rem 1rem`, 1.05rem, weight 300,
     `rgba(255,255,255,.5)`, active = white) + dropdown menu (4px radius,
     `#20c997` hover/active w/ black text, `:before` arrow) + right search
     form (ion-search icon + input placeholder "Search...").
  2. Hero `div.slider-item.overlay` — `background-image:
images/hero_2.jpg`, cover, top center; 100vh / min 700px; `:before`
     `#000` opacity .4; centered col-lg-9 text-center: `h1.mb-4` "We Are
     Creative Agency" (5rem lh 1.2, 700, uppercase, white, margin-left
     .5em; span = `#20c997` bg + `box-shadow .5em 0 0 #20c997, -.5em 0 0
#20c997`); `div.btn-play-wrap.mx-auto` (100px) > `a.btn-play` (60px
     white circle, radius 50%, play icon, fancybox YouTube
     `https://www.youtube.com/watch?v=_VnYSoMI-9Q`) + span "Watch Video".
     Owl dots bottom 100px (5px, radius 4px).
  3. About `div.section` (7em 0) — col-lg-5.mr-auto.mb-5:
     `span.d-block.text-uppercase.text-secondary` "Who We Are" +
     `span.divider.my-4` (70×6px `#000`, translateX(-50%)) + `h2.mb-4.section-title`
     "We Are **Design Agency** That Bring Your Ideas Alive" (3rem lh 1,
     uppercase, 300; strong 700) + 2 paragraphs +
     `a.btn.btn-outline-black` "Learn More" (2px `#000` border, uppercase,
     14px bold, radius 0, 10px 20px). col-lg-6: `figure.img-dotted-bg` >
     img about_1.jpg (`box-shadow: 10px 10px 0 0 #eee`, dotted.jpg bg).
  4. Portfolio `div.section.portfolio-section` (bg `#90a8af`) — centered
     `h2.mb-4.section-title` "Latest Work"; 2 rows × 2 col-lg-6 `a.work-thumb`
     (img work_1..4.jpg; `:before` `rgba(0,0,0,.5)` opacity 0→1 on hover;
     `.work-text` centered absolute, opacity 0→1, `h2` "Work Name Here" +
     span "Category Here"); bottom center `a.btn.btn-outline-white.px-4.py-3`
     "More Portfolio".
  5. Services `div.section` — col-lg-5.mr-auto.mb-3: "Featured Services"
     eyebrow + divider + `h2.section-title` "The **Services** That We Are
     Providing" + 2 paragraphs; col-lg-6: row.mt-5 × 4 col-lg-6.col-md-6.mb-4
     `div.service` — `span.icon.icon-shield|icon-screen-desktop|icon-screen-smartphone|icon-rocket.mb-4.d-block`
     (2rem) + h3 (1.2rem, 400) Branding / Web Design / App Design / Start
     Up + one-line lorem.
  6. Testimonials `div.section.bg-light.block-11` — centered
     `h2.mb-4.section-title` "Testimonial"; `div.nonloop-block-11.owl-carousel`
     > `div.item` × 4 > `div.block-33.h-100` (white, max-width 700px, auto
     > margins, padding 40px): `div.vcard.d-flex.mb-3` (60px round avatar +
     > name-text: `h2.heading` John Smith / Joshua Darren (3rem lh 1) +
     > span "XYZ Inc. Client") + `div.text` blockquote.
  7. CTA `div.bg-primary.py-5` (`#20c997`) — centered col-lg-7: `h3.text-white.mb-4.font-weight-normal`
     "Do You Have An Awesome Project In Mind?" + p.text-white.mb-5 +
     `a.btn.btn-outline-white.px-4.py-3` "Get In Touch!".
  8. Footer `footer.site-footer` (bg `#333`, 7em 0; p =
     `rgba(255,255,255,.5)`) — row.mb-5: col-md-4 "About Craft" + p +
     social `ul.footer-social` (fa-twitter/facebook/linkedin/instagram,
     p-2); col-md-5.pl-md-5 "Contact Info" (Address: / Telephone: / Email:
     labels dim, values text-white); col-md-3 "Quick Links" (About, Terms
     of Use, Disclaimers, Contact); then row > col-12.text-md-center:
     copyright "© <year> All Rights Reserved | This template is made with
     <i.fa-heart.text-danger> by Colorlib".
- **Design tokens (extracted from style.css):**
  - Primary teal: `#20c997` (btn-primary, hero highlight span, CTA band,
    dropdown hover), hover `#1ba87e` / `#199d76`, light `#3ce0af`.
  - Portfolio bg: `#90a8af`; work overlay `rgba(0,0,0,.5)`.
  - Darks: `#000` (overlay .4, outline-black), `#343a40` (mobile navbar),
    `#333` (footer), `#212529` (body), `#495057` (dim labels).
  - Lights: `#fff`, `#f8f9fa` (testimonials), `#eee` (about shadow),
    `#dee2e6`/`#e9ecef` (borders).
  - Text: `#fff`, `#6c757d` (eyebrows, footer dim), `rgba(255,255,255,.5)`
    (nav, footer p).
  - Font: **Raleway** 300/400/700 — Google Fonts `<link>` in index.html.
  - Shapes: btn radius .25rem (primary) / 0 (outline-black); play 60px
    circle; avatar 60px circle; divider 70×6px `#000`; section padding 7em
    0; hero 100vh min 700px; card padding 40px (testimonials).
- **Recreation name:** Forge (NEW name, differs from ColorLib "Craft").
  App folder `apps/forge`, package `@free-react-templates/forge`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/forge-<n>/<w>/<h>`: hero 1920×1080, about 800×600,
  work 900×650 ×4, avatars 120×120); lucide-react icons (Search, Play,
  Shield, Monitor, Smartphone, Rocket, Heart; brand icons Twitter/
  Facebook/Linkedin/Instagram as inline SVG); Raleway via Google Fonts;
  play button → YouTube iframe lightbox on click; hero slider → single
  hero slide (document the choice); testimonial carousel → rotating quote
  with dot indicators; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-forge/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/forge` (copy a section-rich landing app pattern, e.g.
      Chronicle/Aurora; rename package to `@free-react-templates/forge`;
      run `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (transparent
      navbar, wordmark, 5 links + dropdown, search field), Hero (photo +
      .4 overlay, 5rem uppercase h1 w/ teal highlight span, 60px play
      circle → YouTube lightbox, "Watch Video"), About (eyebrow, black
      divider, bold-span heading, 2 paragraphs, outline-black button,
      offset-shadow image), Portfolio (`#90a8af` bg, 2×2 hover-reveal
      cards, "More Portfolio"), Services (4 icon cards: Branding, Web
      Design, App Design, Start Up), Testimonials (`#f8f9fa` carousel,
      white cards, avatars + names + quotes, dots), CTA band (teal, h3 +
      outline-white "Get In Touch!"), Footer (`#333`, 3 columns, socials,
      copyright heart).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh forge` in
      FAST_MODE).
- [ ] Push `feat/template-forge`, open PR (source template ColorLib
      "Craft", preview URL reachable, design tokens, what differs: name,
      placeholder images, video lightbox approach, slider/carousel
      simplification), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-forge.surge.sh) + homepage; run
      `npm run readme:status`; push.
