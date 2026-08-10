# Scroll (ColorLib "Blogger") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-scroll` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Blogger" — Free Blogging Website Template
  (source: https://colorlib.com/wp/template/blogger/). Listed in
  TEMPLATES.md (line 247, Blog category; single row — grep confirms no
  dup rows).
- **Preview REACHABLE (HTTP 200, slug matches directly):**
  `https://preview.colorlib.com/theme/blogger/`. DOM fetched
  (`/tmp/blogger-ref/blogger.html`, 25.6 KB) + stylesheet
  (`/tmp/blogger-ref/main.css`, 35.4 KB — extracted tokens) + screenshot
  (`blogger-free-blogging-website-template.jpg`, 1200×935, viewed in
  browser). All references verified live.
- **Visual design:** minimalist magazine-style blog. Full-width scenic
  river/city hero photo (dark overlay) with a large bold white centered
  headline "A Discount Toner Cartridge Is Better Than Ever.", engagement
  counts, and an author block (circular avatar, "Mark wiens", date) at
  bottom right. Below: white content area, dark centered heading "Latest
  News from all categories" + lorem, three image cards with a carousel
  pagination. Medium light-blue accent (logo, nav links, hovers); Poppins;
  airy magazine grid.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.default-header` (absolute, white, soft shadow) —
     navbar-brand logo (img/logo.png → text wordmark) + navbar-nav
     uppercase 600 `#222` padding 20px, hover `#69B4FD`: Home, News,
     Travel, fashion, team + Pages dropdown (Single, Category, Search,
     Archive, Generic, Elements) + mobile navbar-toggler.
  2. Banner `section.banner-area#home` (parallax bg img/header-bg.jpg;
     overlay `rgba(34,34,34,0.4)`) — banner-content (margin-top 25%):
     h1 white 48px/700 "A Discount Toner Cartridge / Is Better Than
     Ever." + meta (lnr-heart "15 Likes" + lnr-bubble "02 Comments");
     head-bottom-meta: "Mark wiens" + circular user-img + h4.text-white
     "12 Dec, 2017 11:21 am".
  3. Category `section.category-area.section-gap#news` (white) —
     h1.mb-10 "Latest News from all categories" + lorem; 3 × single-cat
     (img c1-c3 hover scale 1.1 + `.date` black bar 115px "10 Jan 2018"
     - h4 link): "It S Hurricane Season Visiting Hilton", "What Makes A
       Hotel Boutique", "Les Houches The Hidden Gem Valley"; carousel
       arrows (up/down, white, shadow).
  4. Travel `section.travel-area.section-gap#travel` (bg `#f9f9ff`) —
     h1.mb-10 "Hot topics from Travel Section" + lorem; 4 × single-travel
     (col-lg-6): img (t1,t3,t2,t4) + `.dates` absolute `#222` block
     (span 24px/600 "20" + p "Dec") + media-body h4.mt-0 (gradient-text
     hover) "Addiction When Gambling Becomes A Problem" + lorem + "15
     Likes"; `.primary-btn.load-more.pbtn-2.text-uppercase.mx-auto.mt-60`
     "Load More".
  5. Fashion `section.fashion-area.section-gap#fashion` (white) —
     h1.mb-10 "Fashion News This Week" + lorem; 4 × single-fashion
     (col-lg-3): img f1-f4 + black `.date` bar "10 Jan 2018" + h4
     (demo repeats the SAME headline in all 4 cards — vary with
     article-style headlines, document in PR) + lorem + "15 Likes"; a
     second "Load More" pill button.
  6. Team `section.team-area.section-gap#team` (bg `#f9f9ff`) —
     h1.mb-10 "About Blogger Team" + p "Who are in extremely love with
     eco friendly system."; 2 × single-team (thumb img + hover overlay
     `rgba(105,180,253,0.7)`: name span uppercase 18px/600 ls 3px + role
     p weight 100 + social icons; static h4 name + p role below): Dora
     Walker / Senior Core Developer, Lena Keller / Creative Content
     Developer.
  7. Footer `footer.footer-area.section-gap` (bg `#222222`, pt 100) —
     h6 white 18px widgets: "Top Products" (footer-nav: Managed Website,
     Manage Reputation, Power Tools, Marketing Service — white links,
     hover `#69B4FD`), "Newsletter" (p "You can trust us. we only send
     promo offers, not a single spam." + form-inline pill input: white,
     lh 38px, radius 20px, padding-left 20px, `#777` + submit),
     "Instragram Feed" (ul.instafeed 8 × img i1-i8, 25% width);
     footer-bottom (pt 80): footer-social 40px `#111111` circles with
     `#cccccc` icons (hover gradient + white): Facebook, Twitter,
     Linkedin, Dribbble, Behance + footer-text copyright "Copyright ©2024
     All rights reserved | This template is made with ♥ by Colorlib"
     (link/heart `#69B4FD`).
- **Design tokens (main.css):** font Poppins (body 14px/300 lh 1.625
  `#777`; headings 600 `#222`, h1 36px section titles, h4 18px; banner
  h1 48px/700 white; footer h6 18px white); accent `#69B4FD` (selection,
  nav hover, load-more hover border/text, footer link hover, footer-text,
  team overlay rgba(105,180,253,0.7)); gradient
  `linear-gradient(45deg,#62bdfc 0%,#8490ff 100%)` (primary-btn bg,
  footer-social hover bg, h4 gradient-text hover); darks `#222` (headings/
  nav/banner overlay .4/travel dates/footer bg `#222222`), `#000`
  (category+fashion date bars), `#111111` (social circles); lights `#fff`,
  `#f9f9ff` (travel + team bgs), `#777` (body), `#cccccc` (social icons),
  `#f5f5f5` (arrow border). Buttons: primary-btn pill radius 25px, lh
  42px, padding 0 30px 0 60px (load-more/pbtn-2 30px both), white
  uppercase 500; load-more hover → transparent + 1px `#69B4FD` + `#69B4FD`
  text. Section-gap 120px; date bars black 115px weight 100; travel dates
  `#222` block 18px 24px padding; team overlay rgba(105,180,253,0.7)
  opacity 0→1 0.5s.
- **Recreation name:** Scroll (NEW name, differs from ColorLib "Blogger").
  App folder `apps/scroll`, package `@free-react-templates/scroll`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/scroll-<n>/<w>/<h>`: hero 1600×900, category
  600×400 ×3, travel 400×400 ×4, fashion 600×400 ×4, team 600×400 ×2,
  instagram 200×200 ×8, avatar 120×120); lucide-react icons (Heart,
  MessageCircle, ChevronUp, ChevronDown; brand socials Facebook/Twitter/
  Linkedin/Dribbble/Behance as inline SVG); Poppins via Google Fonts; owl
  carousels → simple grids + prev/next (document); parallax → fixed/cover
  bg (document); newsletter → local success state (no mailchimp); keep
  banner headline + section titles + category card titles 1:1; vary the
  repeated travel/fashion demo headline (document); no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-scroll/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/scroll` (copy a section-rich landing app pattern, e.g.
      Marginalia/Memoir/Dispatch; rename package to
      `@free-react-templates/scroll`; run `npm install` at root so
      `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Header (white fixed,
      wordmark, 5 uppercase nav links + Pages dropdown + mobile toggler),
      Banner (cover river/city photo, `rgba(34,34,34,0.4)` overlay, 48px
      white headline, 15 Likes / 02 Comments, Mark wiens author block),
      News (3 image cards + black date bars), Travel (`#f9f9ff`, 4 rows
      with "20 Dec" date blocks + gradient-text hover + Load More pill),
      Fashion (4 cards + Load More), Team (`#f9f9ff`, 2 photo cards with
      `rgba(105,180,253,0.7)` hover overlay), Footer (`#222222`, Top
      Products / Newsletter pill form / Instagram feed / social circles /
      copyright bar).
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh scroll` in
      FAST_MODE).
- [ ] Push `feat/template-scroll`, open PR (source template ColorLib
      "Blogger", preview URL `https://preview.colorlib.com/theme/blogger/`,
      design tokens, what differs: name, placeholder images, carousels →
      grids, parallax → fixed/cover, varied travel/fashion headlines,
      newsletter → local success state, no assets copied), merge
      immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-scroll.surge.sh) + homepage; run
      `npm run readme:status`; push.
