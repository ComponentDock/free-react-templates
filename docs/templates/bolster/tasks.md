# Bolster (ColorLib Victor) — Tasks & Design Notes

> Recreation of ColorLib "Victor"
> (https://colorlib.com/wp/template/victor/) under the NEW name
> **Bolster** (support / strengthen-themed word; single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-14), per the monorepo naming mandate
> (never reuse the ColorLib source name). TEMPLATES.md: primary row in
> Bootstrap 5 (89) at line 635; duplicate row in Business (365) at line
> 1219 (both `- [ ]`).

## Design notes (replication findings)

- **Original:** ColorLib "Victor" — free HTML5 BUSINESS CONSULTING /
  business-loan landing (transparent navbar over a 900px photo hero,
  3-column client value props with circular avatars, accordion split
  section, light-grey services band with 2 icon cards, photo testimonial
  band, 2-slide feature carousel, split CTA, navy-gradient 4-column
  footer). The recreation brands itself **Bolster**.
- **Live preview analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/victor/` — HTTP 200, ~29.8 KB HTML +
  `assets/css/style.css` ~64 KB (curl; Bootstrap 5 + slick + slicknav +
  wow + magnific-popup + counterup). The TEMPLATES.md screenshot
  (`victor-free-template.jpg`, 1200×946, viewed in browser) shows an older
  split hero (solid navy left + man-on-couch photo right, white semicircle
  - orange dots) with a white navbar; the LIVE DOM/CSS renders a
    transparent header over a full-bleed photo hero — the live render is the
    structural authority; the navy `#232F55` / orange `#FF6D21` / white /
    `#F8FAFC` palette is identical in both.
- **Visual design (screenshot):** modern professional business/SaaS
  consulting landing. Split hero (navy + photo), orange "Get Started" CTA,
  white nav with orange bolt logo, 3 avatar value props on light-grey,
  white accordion section. Palette: deep navy `#232F55`/`#454e6d`,
  vibrant orange `#FF6D21`, white, light-grey `#F8FAFC`. DM Sans
  throughout.
- **Section order (1:1, verified from live DOM):**
  1. **Header** — `header-area.header-transparent` (absolute top 0, z-9) >
     `main-header.header-sticky` (padding 0 88px): logo (orange bolt +
     "Victor" → **"Bolster"**) · `main-menu` links Home · About · Services
     · Portfolio · Blog (dropdown: Blog / Blog Details / Element) ·
     Contact (white 18px 500, padding 37px 5px) · right buttons:
     `header-btn` phone "+10 (56) 745 3095" (white + orange phone icon) +
     `white-btn` "Get Free Consultant" (white bg, orange text, radius 5px,
     hover orange fill). Sticky (`.sticky-bar`): fixed, navy gradient
     `linear-gradient(45deg,#454e6d,#232f55)`, shadow, padding 15px 50px,
     hides buttons, link padding 30px 5px. Mobile: slicknav hamburger.
  2. **Hero** — `single-sliders.slider-height(900px).slider-bg1` (bg photo
     h1_hero1.jpg cover) > left `col-xxl-5` `hero-caption.text-center`: h1
     "Get the help you need, every step of the way" (white 67px 700 lh 1.2)
     · p "Design better websites and spend less with Essentials." (white
     24px 500) · `a.btn.hero-btn` "Get Started" (orange, padding 33px 58px,
     radius 5px); right `col-xl-5` `hero-shape` (absolute top 111px right
     100px) img.
  3. **Client props** — `our-client.border-bottom.top-padding(120px)`: 3 ×
     `client-single` (flex): circular avatar (client1..3.jpg, blockquote mr
     30px) + `client-say` h2 "Happier customers" / "Faster growth" /
     "Connected workflow" (26px 700 navy) + p (IDENTICAL 3× — paraphrase
     into distinct taglines).
  4. **Accordion split** — `section.project-us.section-padding(120px)`:
     centered section-tittle h2 "Flexible support to suit your business
     needs" (44px 700 navy lh 1.4) + loan paragraph (#6A6063 18px); left
     offset col: project-right-img (about.jpg); right col: accordion of 4
     items (border-bottom #E8ECF1; button 20px 700 navy, padding 20px 10px
     21px 34px, focus orange #FF6D21; SECOND item open by default):
     "Starts the automated process." / "The automated process starts." /
     "Automated process starts." / "Process the automated magic." + SAME
     lorem body 4× — paraphrase into 4 distinct Q&A pairs.
  5. **Services band** — `section.services-area.gray-bg(#F8FAFC)
.section-padding`: section-tittle3 h2 "Improved Digital Experience" +
     p; 2 × `single-cat` (white, radius 10px, padding 52px 50px): cat-icon
     (services1.svg / services2.svg) + h5 "Design & Development" (24px 700
     navy) + 3 bullets ("- Design better websites an spend." [typo → "and
     spend"] / "- We'll extend your term." / "- Get the breathing space
     now.") + `browse-btn` "Learn More" (orange 16px 500 + 2px orange
     underline, hover letter-spacing 1px). SOURCE REPEATS THE CARD 2× —
     make 2 distinct services (e.g. Design & Development + Digital
     Marketing) with distinct bullets. Right: `services-banner` img
     (services-img.jpg, radius 10px).
  6. **Testimonial band** — `emargency-care.section-img-bg2` (bg photo
     section-bg1.jpg via data-background, padding 100px 0) > row
     justify-content-end > `single-emargency` (white, radius 10px, padding
     65px 50px 65px 60px): cat-icon message.svg + p.emargenc-cap quote "I
     love that I was able to open a café and transform it into a place that
     makes people happy. A small business loan from Prospa was a big part
     of making that possible." (20px) + ceo-name: span "- Barb Dwyer"
     (orange 22px 700) + p "CEO of Victor" (→ **"CEO of Bolster"**).
  7. **Feature carousel** — `services-area2.section-padding`: section-tittle
     text-center mb-60 h2 "Handpicked by Victor" (→ **"Handpicked by
     Bolster"**) + p; `services1-active` slick carousel (arrows
     rgba(32,69,112,0.3), hover #FF6D21): 2 × `single-services2` (d-flex):
     features-img (project-img.jpg, height 400px, radius 10px 0 0 10px) +
     features-caption (#F8FAFC, height 400px, padding 60px 40px): icon
     logo.svg + h3 "Essentials helped us to increase our revenue by more."
     (30px 700 navy) + p + `browse-btn` "View Project". SOURCE REPEATS
     SLIDE 2× — paraphrase into 2 distinct case studies.
  8. **Support CTA** — `support-company-area.bottom-padding(120px)`: left
     section-tittle h2 "Professional who works to help with your business."
     - loan paragraph + `a.btn.about-btn` "Get Started" (orange, padding
       35px 65px); right support-location-img (about2.png).
  9. **Footer** — `footer.footer-wrappper` (NAVY GRADIENT
     linear-gradient(45deg,#454e6d,#232f55)) > footer-area
     (padding-top 80px): brand col (logo2_footer.png + pera "Get the
     breathing space now, and we'll extend your term at the other end."
     #A2A6B2 16px lh 1.8 + 4 social icons) · Services (5 links: Design &
     Strategy · Product Design · Digital Marketing · Software Development ·
     Ecommerce) · Navigation (SAME 5 links duplicated — paraphrase into
     distinct nav links) · Contact us (consulto98@gmail.com · 76/A, Green
     road, NYC · (80) 783 367-3904 — phone PLAIN TEXT, NO `tel:` literal);
     copyright strip: "Copyright © {year} All rights reserved | Made with ♥
     by Component Dock" (https://www.componentdock.com/); back-top button.

## Design tokens (from assets/css/style.css)

- Orange `#FF6D21` (brand — .btn bg, browse-btn, white-btn hover fill,
  ceo-name span, accordion focus, footer links) · Navy `#232F55` (headings,
  accordion text) + `#454e6d` (gradient partner) · Footer/sticky gradient
  `linear-gradient(45deg,#454e6d,#232f55)` · Light `#F8FAFC` (gray-bg,
  features-caption) · Text `#6A6063` (section p) / `#A2A6B2` (footer) ·
  Accordion border `#E8ECF1`.
- Font: DM Sans 400/500/700 — Google Fonts `<link>` in `index.html`.
- h1 (hero) 67px 700 white lh 1.2; h2 (section) 44px 700 navy lh 1.4;
  client h2 26px 700; card h5 24px 700; features h3 30px 700; footer h4
  17px 700 white.
- Buttons: radius 5px; .btn orange 20px 500 padding 22px 32px; hero-btn
  33px 58px; about-btn 35px 65px; white-btn white bg/orange text; browse-btn
  orange 16px 500 + 2px underline.
- Cards radius 10px: single-cat 52px 50px padding; single-emargency
  65px 50px 65px 60px; features-img `10px 0 0 10px` h-400; features-caption
  #F8FAFC h-400 padding 60px 40px.
- Section padding 120px (top-padding/bottom-padding/section-padding); hero
  900px; footer pt 80px; copyright border pt 45px.

## Tasks / todo outline

- [ ] Scaffold `apps/bolster` (copy the simplest existing app, rename
      package to `@free-react-templates/bolster`; register the workspace —
      `npm install` at root so `package-lock.json` includes it; set
      `public/CNAME` = `bolster.free.componentdock.com` and `"homepage"` =
      `https://bolster.free.componentdock.com`; `vite.config.ts` keeps
      `injectUiSource()`; jsdom MemoryStorage polyfill in
      `src/test/setup.ts` if needed).
- [ ] `src/index.css` — `@theme` tokens: `--color-brand: #FF6D21`,
      `--color-ink: #232F55`, `--color-footer: #454e6d`,
      `--color-surface: #F8FAFC` (gradient via
      `bg-[linear-gradient(45deg,#454e6d,#232f55)]` utility or a custom
      class); Google Fonts DM Sans link in `index.html`.
- [ ] `Navbar.tsx` — transparent over hero → fixed navy gradient on scroll
      (scroll listener w/ cleanup); brand (Zap icon + "Bolster"); desktop
      nav (Home · About · Services · Portfolio · Blog · Contact — anchor
      links); phone (PLAIN TEXT, no tel:) + "Get Free Consultant"
      white-btn; mobile hamburger toggle (aria-expanded, focus-visible).
- [ ] `Hero.tsx` — 900px photo bg + left caption column; h1 "Get the help
      you need, every step of the way", p, orange "Get Started" btn;
      decorative shape image right.
- [ ] `ClientProps.tsx` — white row w/ border-bottom; 3 avatar + title +
      distinct tagline items (Happier customers / Faster growth / Connected
      workflow).
- [ ] `AccordionSection.tsx` — split: image left, 4-item accordion right
      (second open by default; toggling; orange focus) — accessible
      `aria-expanded` + `aria-controls`.
- [ ] `ServicesBand.tsx` — `#F8FAFC` band; heading "Improved Digital
      Experience"; 2 distinct icon service cards (title + 3 bullets +
      "Learn More" browse-link w/ underline); banner image right.
- [ ] `TestimonialBand.tsx` — photo bg band; white card right: message
      icon, quote, orange "- Barb Dwyer" + "CEO of Bolster".
- [ ] `FeatureCarousel.tsx` — "Handpicked by Bolster" heading; 2-slide
      carousel (photo left rounded, caption panel right w/ icon, title, p,
      "View Project"); prev/next arrows (testable index-based state).
- [ ] `SupportCta.tsx` — split; h2 "Professional who works to help with
      your business." + p + orange "Get Started" (about-btn padding) +
      image right.
- [ ] `Footer.tsx` — navy gradient: brand col (logo + blurb + social
      inline SVG); Services (5 links); Navigation (5 distinct links);
      "Contact us" (email, address, phone — phone PLAIN TEXT, NO tel:);
      copyright strip "Copyright ©{year} All rights reserved | Made with ♥
      by Component Dock" (https://www.componentdock.com/); back-top button.
- [ ] `App.tsx` — compose in exact order: Navbar → Hero → ClientProps →
      AccordionSection → ServicesBand → TestimonialBand → FeatureCarousel →
      SupportCta → Footer.
- [ ] Tests: one `describe` per component mirroring the spec scenarios;
      scroll-state navbar; accordion toggle + default-open; carousel
      navigation; footer Component Dock link + no ColorLib string; 100%
      coverage.
- [ ] Placeholder images: `https://picsum.photos/seed/bolster-<n>/<w>/<h>`.
      Subject-critical seeds (hero working-scene, 3 headshot avatars,
      accordion image, services banner, testimonial band bg, project
      photos, CTA image) — screen per the seed-screening method in the
      colorlib-template-replication skill (headshots: verified picsum
      people IDs 1027/64/823/996; avoid 91/177/338/65/1005/342).
- [ ] Icons: lucide-react (Zap, Phone, Menu, ChevronDown, ArrowRight,
      MessageSquareQuote, ArrowUp); social brand icons as inline SVG (probe
      every icon import with the typeof check — brand icons were removed
      from lucide).
- [ ] `scripts/verify-app.sh bolster` green (typecheck + lint + knip +
      fallow + vitest 100% + build).
- [ ] PR: branch `feat/template-bolster`, description with source template
      (ColorLib Victor), preview URL, design tokens, differences (renames,
      picsum placeholders `bolster-<n>`, paraphrased copy — distinct client
      taglines / accordion Q&As / service cards / case studies / nav links —
      fixed typos "an spend"→"and spend", "Victor"→"Bolster" branding);
      merge immediately (`gh pr merge --squash`), verify deploy + curl
      bundle.
