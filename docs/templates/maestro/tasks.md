# Maestro (ColorLib "Creative Agency 2") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-maestro` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Creative Agency 2" — Free Creative & Marketing
  Agency Website Template (source:
  https://colorlib.com/wp/template/creative-agency-2/). Listed in
  TEMPLATES.md (line 368, Bootstrap category; dup rows at 961 and 1457 —
  do not re-claim).
- **Preview REACHABLE (HTTP 200) — BUT at a different slug:**
  `https://preview.colorlib.com/theme/creative-agency-2/` 404s; the
  portal serves the theme at
  `https://preview.colorlib.com/theme/creativeagency/` (discovered via
  the preview portal iframe — the "Live Preview" button on the ColorLib
  template page points to `https://preview.colorlib.com/#creativeagency`).
  DOM fetched (`/tmp/creative-agency-2-ref/creativeagency.html`, 28.6 KB)
  - stylesheet (`/tmp/creative-agency-2-ref/main.css`, 36.6 KB) +
    screenshot (`agency-free-agency-website-template.jpg`, 1200×935, viewed
    in browser). All references verified live.
- **Visual design:** clean, modern, minimalist, airy corporate-agency
  landing with generous whitespace and a single purple/lavender accent.
  Transparent header with image logo (recreate as text wordmark +
  diamond icon) and uppercase black links (HOME/SERVICE/PROJECT/BLOG/TEAM
  - PAGES dropdown). Full-height parallax hero photo (hands in blue knit
    sweater holding a potted plant, cool greyish tint, 0.4 black overlay)
    with right-aligned mixed-weight white headline "We Provide Solutions
    that Brings Joy" (bold "Solutions" / "Joy") and a purple-gradient pill
    "HIRE US NOW!". White services grid (4 thin line icons + identical
    lorem), about band on a bg image (white headline + white-outline pill
    buttons), project carousel, black skills section with 3 gradient donut
    rings, `#f9f9ff` team grid (4 photo cards, hover socials), testimonial
    carousel over a photo with gradient overlay (white cards), blog grid
    (black date badges), `#222222` footer (Top Products / Newsletter /
    Instagram Feed + copyright bar with socials).
- **Structure (1:1 from the preview DOM):**
  1. Header `header.default-header` (absolute, top 0, z-index 9,
     transparent) > `nav.navbar.navbar-expand-lg.navbar-light` —
     `a.navbar-brand` (image logo `img/logo.png` → text wordmark + icon)
     - `ul.navbar-nav` links Home(#home)/Service(#service)/project(#project)/blog(#blog)/team(#team)
       (uppercase, weight 600, `#000`, padding 20px) + `li.dropdown`
       "Pages" → `div.dropdown-menu` (Generic, Elements; fade in).
  2. Hero `section.banner-area.relative#home` — parallax
     `data-image-src="img/header-bg.jpg"` cover; `div.overlay-bg.overlay`
     (`#000` opacity .4); `div.row.fullscreen` (100vh)
     `justify-content-end` → `div.banner-content.col-lg-6`: `h1` "We
     Provide <br> Solutions that <br> Brings Joy" (72px, weight 100,
     lh 1em, white, mb 40px; `span` = weight 700) + `a.primary-btn2.header-btn.text-uppercase`
     "Hire Us Now!" (gradient pill: radius 25px, lh 42px, pl 30 / pr 60,
     white, 500; hover = transparent + 1px white border).
  3. Services `section.service-area.pt-100.pb-150#service` — centered
     `h1.mb-10` "Latest News from all categories" + sub; 4 ×
     `div.sigle-service.col-lg-3.col-md-6`: `span.lnr` (rocket /
     magic-wand / gift / phone → lucide Rocket, Wand2, Gift, Headphones;
     gradient text on hover) + `h4` Easy Flight Search / Get Hotel Offers
     / Holiday Packages / Dedicated Support + lorem + `a.primary-btn2.primary-border.circle`
     "View Details" (`#8490ff` border/text, white bg, radius 20px,
     padding 8px 35px, weight 600).
  4. About `section.about-area` — bg `img/about-bg.png` cover; left
     `div.about-left.col-lg-6.mt-70`: `h1` white "We can be your digital
     <br> Problems Solution Partner" + lorem + 2 × `a.about-btn` "What we
     offer" / "Get a free quote" (white text, 1px white border, radius
     20px, padding 5px 30px, weight 600; hover = white bg, black text);
     right `div.about-right.col-lg-6` img `about.png`.
  5. Projects `section.project-area.section-gap#project` — centered
     `h1.mb-10` "Latest Project on the go" + sub; `div.active-works-carousel`
     (owl) 5 × `div.item`: img `project.jpg` (460px tall) + caption:
     `h6.text-uppercase` "Vector Illustration" + LCD lorem.
  6. Skills `section.skill-area.section-gap` (bg `#000`) — left
     `div.skill-left.col-lg-6`: `h1.text-white.mb-30` "Our Fields of
     Expertness" + lorem; right `div.skill-right.col-lg-6` 3 ×
     `div.single-skill.col-lg-4`: donut widget (skill1/2/3 → conic-
     gradient ring; segment = `#908ced→#b56fe8` gradient, rest `#292929`)
     - `h4` Wireframing 75% / User Research 95% / User Experience 85%.
  7. Team `section.team-area.section-gap#team` (bg `#f9f9ff`) — centered
     `h1.mb-10` "About Creative Agency Team" + "Who are in extremely love
     with eco friendly system."; 4 × `div.single-team.col-md-3`: img
     `t1..t4.jpg` + hover socials (facebook/twitter/linkedin) +
     `div.meta-text.text-center` `h4` name + `p` role (Ethel Davis —
     Managing Director (Sales); Rodney Cooper — Creative Art Director
     (Project); Dora Walker — Senior Core Developer; Lena Keller —
     Creative Content Developer).
  8. Testimonials `section.testimonial-area.relative.section-gap` — bg
     `img/testimonial-bg.jpg` + `div.overlay.overlay-bg` (purple
     gradient); `div.active-testimonial` (owl) 2 × `div.single-testimonial.item.d-flex.flex-row`
     (white bg, padding 25px 30px 12px): `div.thumb` avatar
     `user1.png|user2.png` + `div.desc`: quote + `h4` "Mark Alviro
     Wiens" + `p` "CEO at Google".
  9. Blog `section.blog-area.section-gap#blog` — centered `h1.mb-10`
     "Latest From Our Blog" + sub; 4 × `div.single-blog.col-lg-3.col-md-6`:
     img `b1..b4.jpg` + `p.date` "10 Jan 2018" (`#000` bg, white, weight
     100, padding 2px 15px, width 115px, centered, mt 20) + `h4` `a`
     "Addiction When Gambling Becomes A Problem" (gradient text on
     hover) + lorem + `div.meta-bottom` × 2 `p`: heart " 15 Likes" /
     bubble " 02 Comments".
  10. Footer `footer.footer-area.section-gap` (bg `#222222`, pt 100) —
      `div.col-lg-3` "Top Products" (`ul.footer-nav`: Managed Website,
      Manage Reputation, Power Tools, Marketing Service); `div.col-lg-6`
      Newsletter ("You can trust us. we only send promo offers, not a
      single spam." + email input "Enter Email" + `button.nw-btn.primary-btn`
      "Subscribe" + arrow icon — gradient pill); `div.col-lg-3`
      "Instragram Feed" 8 × img `i1..i8.jpg`; `div.row.footer-bottom`
      (pt 80): `p.footer-text` copyright "© <year> All rights reserved |
      This template is made with <heart> by Colorlib" (`a`,`i` = `#8490ff`)
      - `div.footer-social` (right) 4 × a facebook/twitter/dribbble/
        behance (gradient bg on hover).
- **Design tokens (extracted from main.css):**
  - Primary gradient: `linear-gradient(0deg, #908ced 0%, #b56fe8 100%)`
    (hero + subscribe buttons, donut segment, testimonial overlay,
    footer-social hover, hover gradient-text on icons/titles).
  - Primary flat: `#8490ff` (selection, "View Details" border/text,
    copyright links).
  - Darks: `#000` (hero overlay .4, skills bg, date badge), `#222222`
    (footer, headings), `#292929` (donut rest), `#111111`.
  - Lights: `#fff`, `#f9f9ff` (team bg, borders), `#f4f4f4` (btn2
    border), `#eeeeee`.
  - Text: `#777777` (body 14px/300), `#fff` (hero/about/skills/footer).
  - Font: **Poppins** (Google Fonts `<link>`); h1 36px (hero 72px/100,
    spans 700), h2 30px, h3 24px, h4 18px.
  - Shapes: gradient pill radius 25px (lh 42, pl 30/pr 60); outline pills
    radius 20px; date badge width 115px; donut rings conic-gradient;
    section gap 120px 0; footer pt 100px; project img 460px.
- **Recreation name:** Maestro (NEW name, differs from ColorLib "Creative
  Agency 2"). App folder `apps/maestro`, package
  `@free-react-templates/maestro`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/maestro-<n>/<w>/<h>`: hero 1920×1080, about
  800×600, project 900×600 ×5, team 400×400 ×4, avatars 120×120 ×2,
  blog 600×400 ×4, insta 200×200 ×8); lucide-react icons (Rocket, Wand2,
  Gift, Headphones, Heart, MessageCircle, ArrowRight, Diamond; brand
  icons Facebook/Twitter/Linkedin/Dribbble/Behance as inline SVG);
  Poppins via Google Fonts; parallax hero → static cover; owl carousels
  (project/testimonial) → carousel with dots or grid (document choice);
  donut widgets → conic-gradient progress rings with % labels; newsletter
  → controlled form + success state (no Mailchimp); no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-maestro/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/maestro` (copy a section-rich landing app pattern,
      e.g. Forge/Chronicle; rename package to
      `@free-react-templates/maestro`; run `npm install` at root so
      `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (transparent,
      wordmark + diamond icon, 5 uppercase links + Pages dropdown), Hero
      (photo + .4 overlay, right-aligned 72px weight-100 h1 with bold
      spans, gradient "Hire Us Now!" pill), Services (4 icon cards +
      `#8490ff` "View Details" pills), About (bg image, white headline,
      white-outline pills, right image), Projects (carousel/grid,
      uppercase captions), Skills (`#000`, 3 conic-gradient donut rings
      w/ % labels), Team (`#f9f9ff`, 4 photo cards, hover socials),
      Testimonials (photo + gradient overlay, white cards, dots), Blog
      (4 posts, black date badges, likes/comments), Footer (`#222222`,
      Top Products/Newsletter/Instagram Feed, copyright + socials).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh maestro` in
      FAST_MODE).
- [ ] Push `feat/template-maestro`, open PR (source template ColorLib
      "Creative Agency 2", preview URL
      `https://preview.colorlib.com/theme/creativeagency/` — note the
      slug difference — design tokens, what differs: name, placeholder
      images, parallax → static hero, carousel/donut simplifications,
      newsletter without Mailchimp), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-maestro.surge.sh) + homepage; run
      `npm run readme:status`; push.
