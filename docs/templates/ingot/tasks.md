# Ingot (ColorLib Industrial) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-ingot`.

## Design notes (replication findings)

- **Original:** ColorLib "Industrial" — steel fabrication / industrial
  company website, "Free Bootstrap 4 Template by Free-Template.co"
  (source: https://colorlib.com/wp/template/industrial/).
- **Preview analyzed:** https://preview.colorlib.com/theme/industrial/
  (HTTP 200, ~28.8 KB HTML + `css/style.css` ~57.7 KB parsed; live DOM
  rendered in browser, screenshots reviewed; footer bg verified via
  computed style — LIGHT, not dark).
- **Visual design:** dark welding-sparks hero photo under a white circular
  play button; uppercase headline sits on a SOLID ORANGE `#fd5f00`
  highlight block (bg + `box-shadow 0.5em 0 0 / -0.5em 0 0`). Single
  orange brand accent everywhere (feature icons, buttons, CTA band,
  footer links, nav brand span). Sections alternate white / `#f8f9fa`
  light grey. Projects = full-bleed 3×2 tile grid with hover overlay +
  slide-up titles. Footer LIGHT with dark-grey text and orange links.
- **Structure (1:1, section order, home page):**
  1. Navbar `nav.navbar.navbar-expand-lg.navbar-dark.bg-dark`
     (`container-fluid`): brand "Industrial" (uppercase ls .2em, span
     `#fd5f00`); links HOME (active) / ABOUT / PROJECTS / SERVICES
     (dropdown: Architectural Design, Interior, Building) / BLOG /
     CONTACT (12px uppercase ls .2em, padding 1.7rem 1rem, active white);
     right `form.search-form` (ion-search icon + input "Search...");
     mobile toggler collapse.
  2. Hero slider `section.home-slider.owl-carousel`: 2 `slider-item`
     (100vh, min 700px, bg `industrial_hero_1.jpg` / `_2.jpg`; inactive
     slides opacity .4): centered col-lg-7 — `a.btn-play` circular play
     (Vimeo link) + h1 uppercase 50px w300 white, `<span>` on SOLID
     ORANGE block (`#fd5f00` bg + box-shadow 0.5em both sides) + p 20px
     w300 white. Owl arrows at vertical center + dots.
  3. Services `section.section`: centered h2 "We'll Handle Any Probles
     and Solve Them" [sic]; asymmetric row: center col-lg-4 = feature
     image (400px `feature-img-bg`); left col = **Ducting Design**
     (ion-easel), **Stacks Design** (ion-hammer); right col = **Tanks
     Design** (ion-cube), **Structural Design** (ion-clipboard); each
     `span.ion.display-4.text-primary` orange + h3 + blurb.
  4. Features `section.section.bg-light` (`#f8f9fa`): 3 centered
     `media.block-6 d-block text-center` — icon.mb-3 orange +
     h3.heading + p: **Modern Design** (ion-android-notifications),
     **Built With Passion** (ion-heart), **Fast Loading** (ion-flash).
  5. Split block A `section.section.element-animate` "Let's Build
     Together": image col-lg-7 order-md-2 (`scaling-image > frame`, hover
     frame→.9 / img→1.2) + text col-md-5 order-md-1 (`block-41`:
     heading 50px lh 1.2 + text 20px + `a.readmore` arrow "Read More").
  6. Split block B `section.element-animate.bg-light` "We'll handle any
     intercate custom design" [sic] — MIRRORED (image left, text right).
  7. Projects `section.section.border-t.pb-0`: centered h2 "Projects" +
     `p.lead`; `container-fluid row.no-gutters` of SIX
     `a.link-thumbnail` (col-md-4): h3 + `ion-plus.icon` + img. Hover:
     overlay `rgba(0,0,0,0.6)`, h3 white 18px slides to bottom 30px,
     plus icon white 30px, img zoom 1.1. Titles: Ducting Design in
     Colorado · Tanks Project In California · Structural Design in New
     York · Stacks Design · Intercate Custom [sic] · Banker Design.
  8. Testimonial `section.section.bg-light.block-11`: centered h2
     "Testimonial"; carousel of WHITE `block-33` cards (max-w 700px,
     padding 40px): vcard d-flex — avatar 60px circle + name 18px w300 +
     meta `#a6a6a6` "Free-Template.co Client"; blockquote 16px. Names:
     John Smith / Joshua Darren / John Smith. Arrows below centered.
  9. Blog Posts `section.section.blog`: centered h2 + `p.lead`; col-md-6
     `media.mb-4`: image (`mr-5`) + media-body — `span.post-meta`
     uppercase 12px `#b3b3b3` ls .2em "Feb 26th, 2018" + h3 20px title +
     excerpt + readmore. 3 posts (1 left, 2 stacked right).
  10. CTA band `section.section.bg-primary` (solid `#fd5f00`): col-lg-8
      `h2.text-white` "Get Started With Industrial Free Template" +
      `p.text-white.lead`; col-lg-4 text-lg-right `a.btn.btn-outline-
white.px-4.py-3` "Download This Template".
  11. Footer `footer.site-footer` (LIGHT, border-top `#eee`, padding 7em
      0, text `#6c757d`): About The Industrial (p + 4 social icons
      twitter/facebook/linkedin/instagram, 30px circle) · Contact Info
      (Address 34 Street Name, City Name Here, United States · Telephone
      +1 242 4942 290 · Email info@yourdomain.com) · Quick Links (About,
      Terms of Use, Disclaimers, Contact). Copyright bar. h3 12px
      uppercase ls .1em bold; links `#fd5f00` (bottom border) → `#000`.
- **Design tokens extracted from the preview CSS:**
  - Brand orange `#fd5f00` (22×): `.text-primary`, `.btn-primary`,
    `.bg-primary`, hero h1 highlight block, brand span, dropdown hover,
    footer links. Shades: `#d75100` (btn hover), `#ca4c00` (active /
    text-primary hover), `#ff7e31` (btn.btn-primary hover), `#b14200`.
  - Neutrals: `#212529` body text, `#6c757d` footer text, `#b3b3b3`
    post-meta, `#a6a6a6` testimonial meta, `#f8f9fa` bg-light, `#eee`
    footer top border.
  - Fonts: **Montserrat** (navbar/brand/headings) + **Oxygen** (body,
    Bootstrap default) — both via Google Fonts `<link>` in `index.html`.
  - Buttons `.btn`: 13px uppercase ls .2em weight 900; `.btn-primary`
    white on `#fd5f00` border-width 2px, hover `#ff7e31`;
    `.btn-outline-white` 2px white border, hover white bg black text.
  - Hero h1 50px uppercase w300 white on orange block; p 20px w300
    white; circular white play button.
  - `.section` padding 7em 0; `.block-41-heading` 50px lh 1.2;
    `.readmore` uppercase .9rem + arrow icon.
- **Recreation name:** Ingot (NEW name — never reuse "Industrial").
  App folder `apps/ingot`, package `@free-react-templates/ingot`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/ingot-<n>/<w>/<h>`); lucide-react icons (Play,
  ChevronLeft, ChevronRight, Search, Easel, Hammer, Box, ClipboardList,
  Bell, Heart, Zap, Plus, ArrowRight, Twitter, Facebook, Linkedin,
  Instagram, MapPin, Phone, Mail, Menu); Montserrat + Oxygen via Google
  Fonts `<link>`; brand orange `#fd5f00` in `@theme`; hero h1 highlight
  = orange bg span (Tailwind `bg-brand` with px); shared Button/ButtonLink
  primary = orange. Paraphrase demo copy (same kinds); fix typos
  ("Probles" → "Problems", "intercate" → "intricate"). Hero slider
  auto-advance + arrows/dots; testimonial carousel prev/next + dots;
  project tile hover overlay + slide-up title. Footer stays LIGHT (do
  NOT make it dark) with orange links.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn); adapt the repo
  chrome: dark navbar with search form + Services dropdown, light
  3-column footer with orange links + copyright bar.

## Tasks

- [x] Write `openspec/specs/template-ingot/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/ingot` (copy the closest existing landing app; rename
      package to `@free-react-templates/ingot`; run `npm install` at root +
      verify `grep -c free-react-templates/ingot package-lock.json` before
      commit).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar (dark +
      brand + links + Services dropdown + search form + mobile menu),
      Hero slider (2 slides, play button, orange-highlight headline,
      arrows/dots), Services (asymmetric 4 items + center image),
      Features (3 centered items), SplitBlock (image/text, two mirrored
      variants), Projects (6-tile hover grid), Testimonials (carousel of
      white cards), Blog (3 entries), CtaBand (orange + outline button),
      Footer (light, 3 columns + copyright).
- [ ] Per-app gate: `bash scripts/verify-app.sh ingot` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-ingot`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D). NOTE: "Industrial" appears 3× in
      TEMPLATES.md (lines 421, 1053, 1948 — same ColorLib template in
      different category sections); mark all three.
