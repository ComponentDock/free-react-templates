# Noir (ColorLib Oraxol) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-noir`.

## Design notes (replication findings)

- **Original:** ColorLib "Oraxol" — dark minimal designer/developer studio
  portfolio one-pager (page title "Oraxol - Free Bootstrap 5 Template by
  Colorlib"; source: https://colorlib.com/wp/template/oraxol/, appears 3× in
  TEMPLATES.md — line 613 Bootstrap 5 (89) + line 1119 Business (365) + line
  2537 Portfolio (89); mark ALL THREE `[x]` when done). The app name MUST
  differ from the source — hence **Noir** (French for "black"; single
  lowercase word, no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/` — verified 2026-08-13).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/oraxol/ (HTTP
  200, ~34 KB HTML; `css/style.css` ~57.7 KB parsed for tokens; screenshot
  `oraxol-free-template.jpg` 1200×946 viewed in browser — matches the live
  DOM section-for-section). Stack: Bootstrap 5 + AOS + glightbox +
  tiny-slider + ionicons/fontawesome/flaticon icons — recreate ALL
  interactivity client-side in React (accessible slider/disclosure patterns,
  no jQuery libs).
- **Screenshot visual design:** modern dark minimal agency one-pager. Deep
  charcoal `#1d1e21` background, muted grey body text, white headings.
  Transparent navbar (square icon-logo + "oraxol") over the hero; 50px white
  headline with the trailing phrase underlined; translucent white pill
  "Available for freelance work"; row of four colourful 150px work tiles;
  then SERVICES (4 bordered icon cards), PORTFOLIO (6 large 550px image
  cards), TESTIMONIAL slider, OUR TEAM (4 dark cards with quarter-circle
  avatars), BLOG (3 bordered post cards), dark 5-column footer with social
  circles. Thin light rules separate the sections. Poppins typography,
  generous 7em padding.
- **Design tokens (CSS-verified):** body bg `#1d1e21` / text `#aaaaaa` /
  Poppins 15px lh 1.8; dark surfaces `#18191c` (scrolled navbar, team
  cards), `#161719` (footer social circles); nav links 14px/500 `#aaaaaa` →
  `#fff`; subheading 13px/600 uppercase ls 2px `#aaaaaa`; section h2
  40px/600 (28px mobile); hero h1 50px/500 white (30px mobile); pill button
  `rgba(255,255,255,0.1)` bg, radius 2px, uppercase 13px/700; card borders
  `rgba(255,255,255,0.1)`; `<hr>` separators `rgba(255,255,255,0.3)`;
  services icon 60px; work img 550px radius 4px; team avatar 120px radius
  `50% 0 50% 50%` (hover `0 50% 50% 50%`); blog heading 20px/500; footer
  widget h2 16px/500 uppercase ls 2px; footer text `rgba(255,255,255,0.4)`
  links underlined → white hover; testimonial dots 9px `#ddd` active `#999`.
- **Source quirks to handle (note in PR):** nav "About" href points to
  blog.html; hero pill href="#helo" (dead anchor); all 5 testimonial blocks
  identical ("Roger Scott — Marketing Manager"); all 6 portfolio cards share
  the title "High Quality Design Concept". Recreation: real section anchors,
  MAY vary testimonial authors + portfolio titles.
- **Icons (source → lucide/inline SVG):** flaticon-layers → Layers (logo);
  flaticon-vector-art → PenTool (Graphic Design); flaticon-monitoring →
  Monitor (Web Design); flaticon-branding → Stamp (Branding & Printing);
  flaticon-web → Code (Web Development); fa-search → Search (hover
  magnifier); ion-ios-quote → Quote; ion-ios-arrow-round-down/forward →
  ChevronDown/ArrowRight; fa-chevron-right → ChevronRight; brand socials
  (twitter/facebook/instagram) → inline SVG (lucide has NO brand icons);
  map-marker/phone/paper-plane → MapPin/Phone/Send.

## Section-by-section fidelity notes (build order)

1. **Navbar** — floating transparent over the dark hero (desktop
   `margin-top: 30px`-ish; simply `fixed top-0` transparent), brand = square
   icon box (Layers glyph) + "Noir" white; links Work / Blog / About /
   Contact (14px/500 `#aaaaaa`, hover/active `#fff`, uppercase not required);
   scrolled → solid `#18191c` (scroll listener + state; jsdom-safe test with
   `fireEvent.scroll`); mobile: hamburger (`fa fa-bars`-style Menu icon) +
   "Menu" label, expands a collapsible link list. Nav links anchor to
   sections: Work → #portfolio, Blog → #blog, About → #team, Contact →
   #footer (or #contact if added).
2. **Hero** — centered column, max-w ~8/12; left-edge bouncing down-arrow
   (absolute, animate-bounce, anchors to #portfolio); h1 50px/500 white
   (30px mobile): "We Create Minimal & Functional Website, Powered by The
   Latest Bootstrap 5 Alpha." — trailing phrase underlined (`underline
decoration-…`); pill button "Available for freelance work" +
   ArrowRight (uppercase 13px/700, `bg-white/10`, px-2.5 py-1, radius 2px,
   hover slightly brighter) → anchors to footer; below: `max-w-lg ml-auto`
   row of FOUR 150px image tiles (`grid grid-cols-2 gap-3 md:grid-cols-4`),
   each `rounded` tile with seeded picsum image + centered Search icon on
   hover (group-hover opacity). Lightbox optional — skip or minimal.
3. **Services** — centered subheading "Services" + h2 "We Provide the
   Perfect Solution" (40px/600, 28px mobile); grid 4 (lg) / 2 (md) / 1
   cards: `border border-white/10 p-5` centered; 60px white icon (PenTool,
   Monitor, Stamp, Code) + h3 24px (Graphic Design / Web Design / Branding &
   Printing / Web Development). Optional subtle flip/hover animation.
4. **Portfolio** — subheading "Portfolio" + h2 "Our Portfolio"; grid 2 cols
   (lg); SIX cards: image `h-[550px] rounded` (picsum seed noir-p1..p6),
   text p-8: underlined category (`underline`, `#aaaaaa`-ish) + h3 30px
   white link. Titles may vary per project (note in PR) or repeat source
   title.
5. **Testimonials** — subheading "Testimonial" + h2 "Satisfied Clients";
   slider (state + index): 5 blocks in the DOM, one visible at a time; each:
   Quote icon, Duden-style paragraph, author name + underlined position;
   vary authors (Roger Scott — Marketing Manager, + 4 more); controls:
   prev/next round bordered buttons (40px, `border-white/30`) + 9px dots
   (`#ddd` → active `#999`).
6. **Team** — subheading "Our Team" + h2 "Designer & Developer"; grid 4
   (lg) / 2 (md); cards `bg-[#18191c] p-5`: avatar 120×120
   `rounded-tl-full` (the `50% 0 50% 50%` quarter-circle = `rounded-tl-full`
   in Tailwind) with verified picsum portraits (1027, 64, 823, 996 — /id/
   form), hover swaps to `rounded-tr-full`; h3 22px/500 name + span
   15px underline role. Members: John McArthur — CEO, Founder & Developer;
   Mark Sky — Graphic Designer; Kyle Becker — Web Designer; Alan Nortwood —
   CEO, Founder & Developer.
7. **Blog** — subheading "Blog" + h2 "Recent Blog"; grid 3 (lg); cards
   `border border-white/10`: cover image (picsum seed noir-b1..b3, ~4:3),
   p-5/7.5: author chip (round 34px avatar + "John Dorf" 14px/500), meta
   13px "Dec. 09, 2020" · "3 Comments", h3 20px/500 white link "Grow your
   insights with inspiring news", Duden excerpt.
8. **Footer** — 5 widget columns (lg): (1) brand icon + "Noir" + about
   paragraph + 3 round social circles 40px `bg-[#161719]` (inline SVG
   Twitter/Facebook/Instagram); (2) "Explore": About Us / Blog / Work;
   (3) "Quick Links": Contact Us / Terms & Conditions / Privacy / Feedbacks;
   (4) "Categories": 4 service names with ChevronRight; (5) "Have a
   Questions?": MapPin address "203 Fake St. Mountain View, San Francisco,
   California, USA", Phone "+2 392 3929 210", Send "info@yourdomain.com".
   Widget h2 16px/500 uppercase ls 2px white; links
   `text-white/40 underline hover:text-white`. Bottom bar: border-t,
   centered copyright "© <year> All rights reserved | Made with Component
   Dock" linking https://www.componentdock.com/.
9. **Dividers** — 1px `border-white/30` horizontal rules (`<hr>`-equivalent
   `<div class="h-px bg-white/30" />`) between each main section; sections
   `py-28` (~7em).

## Tasks (implementation checklist)

- [ ] Scaffold `apps/noir` from the simplest existing app; rename package to
      `@free-react-templates/noir`; `public/CNAME` `noir.free.componentdock.com`;
      homepage `https://noir.free.componentdock.com`; `npm install` at root
      so the lockfile registers the workspace (deploy Action runs `npm ci`)
- [ ] `vite.config.ts` with `injectUiSource()` (copy pattern from any
      existing app); Tailwind 4 tokens in `index.css` `@theme` (ink
      `#1d1e21` body bg, surface `#18191c`, social `#161719`, muted
      `#aaaaaa`, white)
- [ ] Poppins 400/500/600/700 `<link>` in `index.html`; document title
      "Noir — Minimal & Functional Website Template"
- [ ] Components: `Navbar` (scroll state + mobile menu), `Hero` (scroll
      arrow + pill + 4 tiles), `Services`, `Portfolio`, `Testimonials`
      (slider), `Team`, `Blog`, `Footer`, `SectionDivider`
- [ ] TDD: tests per section mirroring the spec's Gherkin scenarios; 100%
      coverage; `scripts/verify-app.sh noir` green
- [ ] Footer credit → "Component Dock" linking
      https://www.componentdock.com/; NO colorlib/oraxol strings in app code
      (provenance only in this spec + TEMPLATES.md + PR)
- [ ] PR: `feat/template-noir` → merge immediately (`gh pr merge --squash
  --delete-branch`); description includes source template, preview URL,
      design tokens, renames/placeholder notes, and the varied source quirks
      (nav About anchor, identical testimonials, repeated portfolio titles)
- [ ] Bookkeeping (implementer): mark ALL THREE TEMPLATES.md rows (613,
      1119, 2537) `[x]` with `noir.free.componentdock.com` + `npm run
    readme:status`, push
