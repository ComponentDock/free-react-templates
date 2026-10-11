# Gridhost — implementation tasks

Recreation of ColorLib **"Webhostingservice"** (source slug `webhostingservice`
— the Web Hosting family's **midnight-navy-and-pink hosting showcase**: a
`#020230` hero with a **65 px/700 white Oswald headline**, a white sub-line, a
**pink `#eb566c` pill** action and a large isometric server illustration beside a
vertical cyan/navy dot rail, a **transparent header** that turns solid `#010E21`
on scroll (wordmark, six links with two dropdowns, a pink phone pill), a services
band whose **top half is the warm `#f8f5f2` wash** behind **three white cards**
(70 px line glyphs, `#28395a` titles, navy round-arrow "get started" links, pink
`.01/.02/.03` numerals, hover flooding every accent pink), a **navy photo band**
with a **690×90 pill domain-search bar** (input + TLD select + pink "search now")
over a `1px #032a57` **six-column TLD price strip** tinted per column
(`#ff7474`/`#ffdd74`/`#74ff9f`/`#748bff`/`#f074ff`), a split "we are with you"
band plus a **3 × 2 partner-logo grid**, a **`#ff4f5b` pricing card** (100 px
`#fce0d8` rocket medallion, 35 px/900 white price over a white rule, four-row
white list, white pill action) beside a copy column and a **pill Monthly/Yearly
tab pair**, a **testimonial split** (30 px pink founder name, 20 px quote, pale
pink prev / pink next arrows, no dots), a **dark circuit-photo support band** with
two **165×136 `#eb566c` cards** (50 px `#ff6b81` medallions), a **three-card blog
row** whose `#fff9f9` captions overlap their photos at `bottom:-63px; width:94%;
border-radius:0 7px 0 0`, and a **navy photo footer** (logo, three columns, a
`1px #1c2e4c` rule, 40 px social rings, running-year credit).
Type is **Oswald** for every heading (global `h1–h6`) and **Muli** for body copy,
the blog titles and every footer heading — the footer's *third* column puts the
**phone number where the other columns put their heading**.
The shape language is **pills** (30 px actions, 30 px tab outer corners, 50 px
search-bar ends), 10 px tiles/strips, 6/7 px blog pieces and circles for both
medallions, the social rings and back-to-top.
Preview: `https://preview.colorlib.com/theme/webhostingservice/` (HTTP 200,
47,215 B; `assets/css/style.css` HTTP 200, 64,303 B; title
`🐴 Web Hosting HTML-5 Template`).
Screenshot: `webhostingservice-free-template.jpg` (AVIF, 1200×946, 47,419 B —
convert with PIL before viewing).

Spec: `openspec/specs/template-gridhost/spec.md`. New name: **gridhost** (never
reuse the source slug `webhostingservice`, the name "Webhostingservice", its
"Hosting" ring logo, its `hero_right.png` / `visit_bg.jpg` / `section_bg0*.jpg` /
`footer_bg.jpg` / `cisco_brand*.png` artwork, its icon fonts or its copy
verbatim). Design notes: `docs/templates/gridhost/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/gridhost`
- [ ] Rename package to `@free-react-templates/gridhost`; set
      `"homepage": "https://gridhost.free.componentdock.com"`
- [ ] `public/CNAME` = `gridhost.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/gridhost`
      (`grep -c "free-react-templates/gridhost" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app)
- [ ] Google Fonts `<link>` in `index.html`: **Oswald + Mulish**
      (`https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Mulish:wght@300;400;500;600;700;800;900&display=swap`)
      — `Mulish` is the current Google Fonts name of the source's **Muli** face
      (both resolve HTTP 200; the `900` axis is needed for the pricing price and
      is missing from the source's own import). No icon font: icons come from
      `lucide-react` plus inline SVG brand paths.
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #eb566c`,
      `--color-brand-hover: #f32a48`, `--color-pricing: #ff4f5b`,
      `--color-medallion: #ff6b81`, `--color-peach: #fce0d8`,
      `--color-navy: #020230`, `--color-navy-heading: #28395a`,
      `--color-navy-link: #10275c`, `--color-header-sticky: #010E21`,
      `--color-surface: #ffffff`, `--color-surface-warm: #f8f5f2`,
      `--color-surface-pink: #fff9f9`, `--color-footer-text: #8ba4b1`,
      `--color-muted: #57667e`, `--color-muted-alt: #636376`,
      `--color-input: #777777`, `--color-placeholder: #616875`,
      `--color-rule-strip: #032a57`, `--color-rule-footer: #1c2e4c`,
      `--color-ring: #e5e5e5`, `--color-dot-idle: #162e78`,
      `--color-dot-active: #03a7d2`, `--color-tld-1..5` (the five TLD tints),
      radii (30/50/10/7/6 px + the circles), the four measured shadows, Oswald as
      the heading font and Mulish as the body font, plus
      `prefers-reduced-motion` handling

## Spec + TDD

- [ ] Re-read `openspec/specs/template-gridhost/spec.md` and mirror every
      scenario as a failing test first (RED), then implement (GREEN)
- [ ] Components under `src/components/`: `Header` (+ `NavDropdown`,
      `PhoneChip`, `MobileMenu`), `HeroSlider` (+ `HeroSlide`, `DotRail`,
      `SocialRail`, `HeroArt`), `ServicesBand` (+ `ServiceCard`, `ServiceOrdinal`),
      `DomainSearch` (+ `SearchBar`, `TldStrip`), `StoryBand`, `PartnerGrid`,
      `Pricing` (+ `PlanCard`, `PricingTabs`), `Testimonials`
      (+ `TestimonialSlide`, `CarouselArrows`), `SupportBand` (+ `ContactCard`),
      `BlogRow` (+ `BlogCard`), `Footer` (+ `FooterColumns`, `SocialRings`,
      `CreditBar`), `BackToTop`
- [ ] Reuse `packages/ui` (`Button` / `ButtonLink` / `cn()`) for the pill actions
      — the sliding `#f32a48` fill belongs to the shared button's hover treatment
      (do not fork it per section); variant maps typed `Record<Variant, string>`;
      no new dependencies

## Implementation notes (measured from the live reference)

Header (transparent, absolute, `padding:22px 50px`; 100 px tall at 1440 px):

- [ ] Links **14 px/500 uppercase white**, `padding:39px 19px`, hover/current
      `#eb566c`; scrolled the bar is `#010E21` with links at `padding:27px 13px`
- [ ] Dropdowns: white **170 px** panels with `border-top:5px solid #eb566c`,
      `padding:17px 0`, `box-shadow:0 0 10px 3px rgba(0,0,0,.05)`,
      `top:120% → 100%` over `.3s`; rows `padding:6px 10px`, 14 px `#0b1c39`
      capitalised labels → `#eb566c`
- [ ] Phone chip = the pill at `padding:14px 29px` (measured **177×53**) with a
      **22×25** glyph (`margin-right:9px`, `top:-2px`) and a `tel:` label
- [ ] Below `lg`: desktop menu + phone chip `display:none`, mobile toggle
      (`aria-expanded`) opens a panel with the same six links + phone action

Hero (`#020230`, `min-height:1000px` → ≈**923 px** measured at 1440×900):

- [ ] `h1` **65 px/700** Oswald white (`line-height:1.3`, `mb:32px`; → 55 / 50 /
      29 px); `p` 16 px white (`mb:54px`, `pr:155px`); CTA the shared pill
      (measured **169×54**, `padding:27px 44px`)
- [ ] Illustration column ≈**559×671** (`right:-63px`, hidden below `lg`) — own
      inline SVG isometric servers/cloud, never `hero_right.png`; thin vertical
      divider line; dotted corner accents as CSS/SVG
- [ ] Social rail: `right:-20px; bottom:40%; rotate(-90deg)`, 14 px `#45455f`
      icons (hover `#f27420`)
- [ ] Dot rail: vertical, `bottom:14%; right:35px`, **3 px** bars, idle **20 px**
      `#162e78`, active **34 px** `#03a7d2`, 10 px apart, 7 px bottom margin;
      real `button`s with `aria-label="<n> of 3"`
- [ ] **Three** slides (the reference repeats one three times); keyboard
      reachable; no autoplay under reduced motion

Services (`padding:195px 0 140px`, `::before` `#f8f5f2` over the top **50 %**):

- [ ] Title block: pink eyebrow **18 px/700** with a **50 × 2 px** rule at
      `left:-67px`, `h2` **50 px/600 `#28395a`**; `margin-bottom:50px`, plus 100 px
      before the cards
- [ ] Three white cards (measured **330×530**, `mb-50`), `padding:94px 57px 30px
      65px` (→ 53/25/11/26 → 42/20/9/20): **70 px** glyph (`mb:50px`) →
      **30 px/600 `#28395a`** title → 15 px blurb (`mb:30px`) → `get-btn`
      (**13 px/700 uppercase `#10275c`**) with a **24 × 24 `#10275c` circle**
      carrying a white arrow (`mr:6px; top:2px`)
- [ ] Ordinals **40 px/600 `#eb566c`** at `bottom:0; right:0` over a dotted
      accent; hover turns glyph + label + medallion `#eb566c` (medallion fill
      `#eb566c !important`, white arrow) over `.4s ease-out`; `focus-visible` gets
      the same state

Domain search (photo band, `padding:140px 0`; bar **690×90**):

- [ ] Bar: `box-shadow:0 6px 29px 0 rgba(36,43,94,.08)`, `padding-top:30px`,
      flex row — input **65 %**/**60 px** (`padding:9px 33px 9px 32px`, 18 px/400
      `#777777`, placeholder `#616875`, left end `50px`), TLD `<select>` **13 %**
      (**60 px**, `padding:11px 3px 11px 43px`, **16 px/600 `#020230`**, chevron
      from `#020230` borders), pink submit **22 %** (**60 px**, Oswald 14 px
      uppercase, `letter-spacing:.1em`, right end `50px`, measured **152×60**)
- [ ] Strip: `1px solid #032a57`, `border-radius:10px`, `padding:15px 0`,
      measured **690×86**, six **16 %** columns (`padding-left:25px`, 1 px
      `#032a57` rules 74 px tall at `right:0; top:-10px`, none on the last), TLD
      label **16 px/700** tinted **by column index** (`#ff7474`, `#ffdd74`,
      `#74ff9f`, `#748bff`, then `#f074ff` for 5 and 6) over a `#636376` price
      line; wraps to `33.33 %` then `50 %` columns
- [ ] The TLD label is 16 px/700 — the source's `font-size:20xp` is invalid CSS
      and is silently dropped

Story band + logos:

- [ ] `padding:200px 0` (→ 100 → 70), text half inset `padding-left:19%`
      (→ 10 % → 8 % → `0 30px; mb:60px`) with `padding-right:117px` on the inner
      block, `h2` **44 px** (`mb:50px`), two paragraphs (`pt:45px; pb:35px`), pink
      pill CTA; other half = own illustration
- [ ] Logo band (measured **204 px**): title column + **3 × 2** grid of six marks
      (`col-lg-4 col-md-4 col-sm-6`) — **give them an explicit size** (the
      reference leaves them unstyled at their natural **196×102**), muted
      treatment with a hover-darken, own abstract marks (no third-party logos)

Pricing (`padding:195px 0 140px`):

- [ ] Card: `#ff4f5b`, measured **342×636**, `padding:78px 73px` (→ 57/23);
      **100 × 100 `#fce0d8` circle** (`line-height:100px`) + rocket glyph →
      **35 px/900 white** price (`mb:30px; pb:30px; border-bottom:1px solid #fff`)
      → four list rows (**16 px/300 white**, `margin:19px 0`) → white pill action
      (label `#020230`); decor shapes bottom-left / top-right
- [ ] Tabs: flex row (`margin-bottom:31px`), each **Oswald 16 px uppercase**
      `padding:15px 43px` (measured **142×54**), idle `#fce0d8`/`#020230`, active
      `#ff4f5b`/white, outer corners **30 px** (`:first-child` left,
      `:last-child` right); real tab semantics (`role="tablist"`, `aria-selected`,
      `aria-controls`, arrow keys) driving the plan content (monthly/yearly price)
- [ ] Copy column: pink eyebrow + `#28395a` `h2` + two paragraphs

Testimonials (`padding-bottom:180px` → 100 → 120 → 70):

- [ ] `col-lg-7` column inset `padding-left:80px` (→ 40): avatar + name
      **30 px/600 `#eb566c`** + role `#57667e`, quote **20 px** (`line-height:1.5`,
      `pr:100px`, `mb:50px`, colour `#10285d`)
- [ ] `col-lg-5` illustration (`right:-55px`, `width:100%`)
- [ ] Two slides with the app's own two people; arrows **20 px** — previous
      **`#ffe1e3`**, next **`#eb566c`** — with accessible names and **no dots**

Support (photo band, `padding:150px 0` → `70px 0`):

- [ ] Left: pink eyebrow (inset 72 px) + **`#f2f2f2` 50 px/600** heading + **white**
      body (`padding:30px 10px 30px 0`)
- [ ] Right: two cards **`#eb566c` 165×136 `border-radius:10px`** (`margin:0 15px`),
      each with a **50 × 50 `#ff6b81` circle** (white glyph, `mb:16px; pt:24px`)
      over **16 px/700 white** text — one `tel:`, one chat action

Blog (`padding:195px 0 140px`):

- [ ] Centred title (`mb-80`); three cards (`mb-100`, 15 px side margins), image
      `border-radius:6px`, caption **`#fff9f9`** at `bottom:-63px; right:0;
      width:94%; border-radius:0 7px 0 0`, `padding:29px 20px 20px 31px`
- [ ] Date **14 px/600 uppercase `#57667e`**; title bold navy in the body face —
      render it at a legible **18–20 px** (the source's cascade lands on 13.6 px;
      note the deliberate deviation), hover `#eb566c`

Footer / chrome:

- [ ] Navy photo band with `padding:170px 0 50px` (→100 →80); logo ≈145×35
      (`mb:40px`); three columns — package list, quick links, and a **contact
      column whose heading slot is the phone number** over an e-mail row and a
      street address
- [ ] Column headings **white 20 px/500 in the body face (Muli)** with
      `mb:29px`; links **`#8ba4b1`/300** → `#eb566c` + `padding-left:5px`; rows
      `mb:15px`; phone/e-mail are real `tel:`/`mailto:` links
- [ ] Social rings **40 × 40**, `1px solid #e5e5e5`, `#8ba4b1` → fill `#eb566c`;
      brand glyphs as inline SVG paths (lucide has no brand icons)
- [ ] Credit bar: `border-top:1px solid #1c2e4c; padding:40px 0 23px`, copy
      `#8ba4b1`/300, **computed current year** + the Component Dock link
- [ ] `#back-top`: **50 × 50 `#eb566c` circle** fixed `right:31px; bottom:18px`,
      `box-shadow:0 0 10px 3px rgba(108,98,98,.2)`, white 20 px icon, appears after
      scroll, labelled button
- [ ] **Do not** reproduce the reference's blocking `#f7f7f7` preloader — render
      content immediately (no overlay gate, no layout shift when the hero image
      loads)

## Verification

- [ ] `npm run spec:validate` passes for `template-gridhost`
- [ ] `scripts/verify-app.sh gridhost` passes (typecheck + lint + knip + fallow +
      vitest 100 % + build)
- [ ] The four pinks stay distinct (`#eb566c` / `#ff4f5b` / `#f32a48` /
      `#ff6b81`); the hero dot rail keeps `#03a7d2` + `#162e78`; the TLD tints
      stay per-column; the testimonial arrows stay asymmetric
- [ ] Radius audit: 30 px pills + tab outer corners, 50 px bar ends, 10 px strip
      and support cards, 6/7 px blog pieces, circles for medallions/social/back-to-top
- [ ] Responsive audit at 1440 / 1199 / 991 / 767 / 375 px: hero **≈923 → 900 →
      600 px**, headline 65 → 55 → 50 → 29 px, section padding 195/140 → 150/90 →
      100/40 → 65/10 px, grids 3 → 2 → 1, TLD strip 6 → 3 → 2 per row, no
      horizontal overflow (reference: `scrollWidth == innerWidth == 375`; page
      10,038 px tall at 375 px, ≈7,631 px at 1440 px)
- [ ] Reduced-motion + keyboard/aria audit (carousels, tabs, mobile menu,
      dropdowns, back-to-top)
- [ ] Zero `colorlib` / "Webhostingservice" / `webhostingservice` strings in
      `apps/gridhost`; no copied asset (see the spec's checklist for the full list)
- [ ] `public/CNAME` + `"homepage"` + lockfile registration verified; PR
      description carries the tokens, the measured structure and the deviations
