# Skyvault — implementation tasks

Recreation of ColorLib **"Hostspace"** (source slug `hostspace` — the Web
Hosting family's **violet night-sky** page: a transparent nav floating over an
`821px` hero painted with a `#200e35 → #4d1d85` gradient, a violet line-art city
skyline pinned to the hero's bottom edge with **four clouds drifting across it on
infinite 60 s loops**, a centred white 60 px headline over a wide rounded search
bar (white 24 px field + `#7836c6` TLD chip + mint `#1befc5` action), a white
three-step row with **143 px circle badges** (the middle one mint) over a dotted
arc, a violet photo band of three white **`12px`-radius cards** whose "Read More"
chips hang 32 px below the card, a **single bordered four-column pricing table**
(`#4d1d85` header bars, 2 px `#d5dfe3` rules, mint actions), a `#f6f8fb` 6/6
split with a bottom-left photo and four icons, a 135 px `#715691` CTA strip, and
a `#26064c` footer with a `#715691`-field contact form and four link columns).
Type is Raleway; the shape language is `12px` radii with **zero shadows**.
Preview: `https://preview.colorlib.com/theme/hostspace/` (HTTP 200, 24,890 B;
`styles/main_styles.css` 22,550 B; `styles/responsive.css` 5,731 B;
`js/custom.js` 3,269 B).

Spec: `openspec/specs/template-skyvault/spec.md`. New name: **skyvault** (never
reuse the source slug `hostspace`, the name "Hostspace"/"HostSpace", its
wordmark/hero/cloud/skyline/photo/icon assets or its copy verbatim). Design
notes: `docs/templates/skyvault/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/skyvault`
- [ ] Rename package to `@free-react-templates/skyvault`; set
      `"homepage": "https://skyvault.free.componentdock.com"`
- [ ] `public/CNAME` = `skyvault.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/skyvault`
      (`grep -c "free-react-templates/skyvault" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern)
- [ ] Google Fonts `<link>` in `index.html`: **Raleway
      `wght@400;500;600;700`**
      (`https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap`
      — verified HTTP 200). No icon font: icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: `--color-mint: #1befc5`,
      `--color-night: #200e35`, `--color-plum: #4d1d85`,
      `--color-plum-mid: #715691`, `--color-plum-bright: #7836c6`,
      `--color-plum-deep: #26064c`, `--color-ink-on-mint: #35214d`,
      `--color-surface: #ffffff`, `--color-surface-cool: #f6f8fb`,
      `--color-surface-chip: #f4f7f8`, `--color-haze: #d5dfe3`,
      `--color-ink: #1f1d22`, `--color-body-copy: #656566`,
      `--color-body: #a5a5a5`, `--color-icon-muted: #778990`, radius `12px`
      (+ 50 % circles, 7 px hamburger outline), font Raleway, **no shadows**

## Spec + TDD

- [ ] Re-read `openspec/specs/template-skyvault/spec.md` and mirror every
      scenario as a failing test first (RED), then implement (GREEN)
- [ ] Components under `src/components/`: `Navbar` (+ `MobileMenu`),
      `Hero` (+ `HeroSkyline`, `CloudLayer`, `DomainSearch` + `TldSelect`),
      `HowToSteps` (+ `StepBadge`), `ServiceBand` (+ `ServiceCard`),
      `PricingTable` (+ `PlanColumn`), `WhyChooseSplit`, `CtaStrip`, `Footer`
      (+ `ContactForm`, `FooterLinkColumns`)
- [ ] Use `cn()` from `packages/ui`; reuse `Button` / `ButtonLink` for the mint
      actions, the `#715691` intro pill and the floating `#f4f7f8` chip; no new
      dependencies

## Implementation notes (measured from the live reference)

- [ ] Header is `position:fixed` and **transparent** over the hero
      (`width:100vw; z-index:100`); `.header_content` 124 px → 80 px with
      `background:#200e35; padding-top:6px` after `scrollTop > 91`
      (400 ms transition)
- [ ] Nav: five links 16 px/600 white with 48 px gaps (40 px ≤1199 px), current +
      hover mint, centred with auto margins; auth pair split by a `/`; wordmark
      24 px/600 with a mint second half
- [ ] Off-canvas panel (≤991 px): 350 px wide `#200e35` panel from
      `right:-350px`, `height:100vh`, `padding:50px 30px 0`; overlay
      `rgba(255,255,255,.55)`; 45°-rotated 18×18 close control at `41px/28px`
      (two 2 px white bars, hover mint); panel links 24 px/500
      `rgba(255,255,255,.75)` with 3 px gaps; add `aria-expanded`, `Escape`,
      focus containment and focus return
- [ ] Hero: **821 px band** (`75vh` ≤575 px) with
      `linear-gradient(to bottom, #200e35, #4d1d85)`, own SVG skyline
      (bottom-aligned violet buildings with window-dot grids) and **four own
      cloud shapes** (138×57) at `top:147/204/332/353px` drifting
      `left:-138px → calc(100vw + 138px)` over 60 s linear infinite with negative
      delays `-39/-6/-45/-15 s`, the 353 px cloud behind the skyline
- [ ] Hero caption: absolutely placed at `top:31.9%`, centred; title 60 px/600
      white (`line-height:1.2`, 48 px ≤767 px, 36 px ≤575 px); paragraph
      `max-width:750px`, 14 px, `line-height:2.14`, 9 px gap
- [ ] Search bar: `col-lg-10 offset-lg-1`, `margin-top:69px`, flex row; white
      field `height:60px; border-radius:12px 0 0 12px; padding-left:30px;
      font-size:24px; font-weight:500; color:#1f1d22` (placeholder
      "yourdomain"); TLD chip 141×60 `#7836c6` `border-radius:0 12px 12px 0`
      `padding-left:19px` with a chevron, 24 px/500 white label
      (`margin-left:28px`) and a white list of `.io`/`.com`/`.net`
      (24 px/500 `#1f1d22`, hover mint); mint action 166×60
      (`border-radius:12px; font-size:24px; font-weight:600; color:#1f1d22`,
      magnifier + label, hover white); controls 50 px ≤991 px and 40 px ≤575 px,
      action stacked `margin-top:18px` ≤767 px
- [ ] Search form is **local-only**: field validation with an inline error, a
      polite success region, no navigation, no source `action="#"`/mail endpoint
- [ ] How-to row: white `padding:96px 0 97px`, centred title with
      `line-height:0.75`, `.intro_row{margin-top:98px}`; three 143 px `#d5dfe3`
      circle badges with 188 px halos at `rgba(213,223,227,.25)` — **the middle
      (`nth-child(3)`) badge is mint `#1befc5` with a `rgba(27,239,197,.25)`
      halo**; 56 px icons; content `padding-top:66px`; titles 24 px/700; text
      `margin-top:27px`; own dotted-arc ornament at `top:-137px` (`contain`,
      hidden ≤991 px); items stack with 80 px gaps below `md`
- [ ] How-to CTA: 257×63 `#715691` `border-radius:12px` `margin-top:86px`, hover
      mint, 16 px/700 white label; 227×53 with a 14 px label ≤575 px (badges
      100 px, halos 133 px, icons 40 px there)
- [ ] Service band: `padding:96px 0 127px`, own picsum photo
      (`skyvault-band`) under a violet overlay from the ramp, **white** centred
      title with a ramp-coloured band fill so the heading survives an image
      failure; `.services_row{margin-top:95px}`; three white cards
      `border-radius:12px; padding:58px 30px 66px;
      border:2px solid transparent` → hover mint, 75 px icon
      (`#778990` → mint), title `margin-top:39px`, text `margin-top:19px`
- [ ] Service chip: `position:absolute; bottom:-32px; left:50%;
      translateX(-50%); 157×63; background:#f4f7f8; border-radius:12px`;
      16 px/600 `#656566` label, hover mint chip with a `#1f1d22` label; keep
      enough card spacing (95 px stacking gap ≤991 px) and no `overflow:hidden`
      so the chip hangs out
- [ ] Pricing: white `padding:94px 0 98px`, **no title**; one container
      `border-radius:12px; border:2px solid #d5dfe3; overflow:hidden`; four
      `width:25%` columns with `2px solid #d5dfe3` right rules (last none);
      header bars 129 px `#4d1d85` 30 px/700 white (`line-height:129px`, hover
      mint); content `padding:50px 0 37px`; price 36 px/700 `#715691` with a
      14 px/500 `#1f1d22` span at `translate(-5px,12px)`; list
      `margin-top:89px` with five 26 px-gapped rows — check glyph + `#1f1d22`
      600 label for included, cross glyph + 16 px/500 `#656566` label
      (`margin-left:10px`) for excluded; action 132×53 mint
      (`border-radius:12px`, `margin-top:75px`, hover `#7836c6`) with a
      16 px/700 `#35214d` label (white on hover); plan names/prices/rows are the
      app's own (a starter/basic/premium/pro tier)
- [ ] Pricing reflow: `width:50%` at ≤991 px where **only `nth-child(odd)` keeps
      the right rule** (source behaviour), single column with no rules ≤575 px
- [ ] Why-choose split: `#f6f8fb`, 6/6; bottom-left photo
      (`position:absolute; bottom:0; left:25px`, own picsum seed
      `skyvault-choice`, hidden ≤991 px); right `padding:94px 0 91px`;
      `.choice_text{margin-top:51px}` with `font-weight:500`;
      `.choice_list{margin-top:52px}` → flex `justify-content:space-between` with
      four centred items (64 px icon + 18 px/500 `#1f1d22` title,
      `margin-top:20px`; 48 px icons / 15 px titles ≤575 px)
- [ ] CTA strip: `#715691`, `.cta_content` 135 px with `padding-left:5px` and
      `justify-content-between` at ≥lg; title 36 px/700 white (30 px ≤1199 px,
      24 px ≤575 px); price 48 px/700 mint `translateY(-8px)` with 16 px spans
      (5 px gap; 36 px ≤1199 px, 24 px/14 px spans ≤575 px); action 148×63 mint
      `border-radius:12px` `translateY(4px)` (hover `#26064c`) with a 16 px/700
      `#35214d` label (white on hover); stacked 300 px column ≤991 px
      (258 px ≤575 px, `margin-top:11px` gaps)
- [ ] Footer: `#26064c; padding:95px 0`; 47 px/600 two-tone wordmark
      (36 px ≤575 px); 11 px/400 `#715691` credit line; text
      `margin-top:33px`; form `margin-top:38px` with two `col-md-6` fields + a
      textarea, all `height:49px; background:#715691; border:none;
      border-radius:12px; padding-left:29px; color:#fff`, 12 px/400 white
      placeholders, 21 px row gaps, textarea 142 px, submit 108×52 mint
      (`border-radius:12px`, 16 px/700 `#35214d`, `margin-top:23px`)
- [ ] Footer link columns: `padding-top:13px`, four columns with 20 px/700 mint
      titles and `margin-top:36px` lists (15 px/400 white links with mint hover,
      14 px gaps) — source sets 6 / 5 / 4 / 3 links, first two columns
      `margin-bottom:45px` at ≥lg; halves stack with a 95 px gap ≤991 px and
      columns 60 px apart ≤575 px
- [ ] Footer must link `https://www.componentdock.com/` ("Component Dock")
      exactly once, replacing the source credit
- [ ] Motion: ~0.5 s fade-in for the reveal blocks (IntersectionObserver is
      enough) that does **not** reverse, content always in the DOM, everything
      static under `prefers-reduced-motion` (including the cloud drift)
- [ ] `scroll-margin-top` on every anchor target so sections clear the fixed
      header (124 px, 80 px scrolled)

## Verification

- [ ] `npm run spec:validate` (passes now — re-run after any spec edit)
- [ ] `scripts/verify-app.sh skyvault` — typecheck + lint + knip + fallow +
      vitest at 100 % coverage + build
- [ ] Screenshot comparison against `hostspace-free-template.jpg` (1200×946,
      AVIF decoded): transparent header with a two-tone wordmark, a white centred
      five-link menu and a white auth pair; deep-violet gradient hero with a
      violet line-art skyline along its bottom edge, floating white clouds, a
      centred 60 px white headline over a ≤750 px paragraph and a wide rounded
      search bar (white 24 px field + `#7836c6` TLD chip + mint "Search" button)
- [ ] Zero `colorlib` / "Hostspace" / "HostSpace" / `hostspace` provenance
      references anywhere in `apps/skyvault` (comments included — record the
      palette as design notes)
- [ ] No copied assets: no `city.png`, `cloud.png`, `cloud_full.png`,
      `services.jpg`, `choice.png`, `dots.png`, `search.png`, `ok.png`, `x.png`,
      `icon_1–10.svg`, no Bootstrap/OwlCarousel/FontAwesome/parallax CSS or JS,
      no Greensock/ScrollMagic bundles; photos from picsum, icons from
      `lucide-react`, artwork drawn as own SVG
- [ ] PR description includes: source template (ColorLib Hostspace), preview URL
      (`https://preview.colorlib.com/theme/hostspace/` → HTTP 200, 24,890 B;
      `styles/main_styles.css` 22,550 B; `styles/responsive.css` 5,731 B;
      `js/custom.js` 3,269 B), the design tokens used (mint `#1befc5`, the violet
      ramp `#200e35`/`#4d1d85`/`#26064c`/`#35214d`/`#715691`/`#7836c6`, surfaces
      `#fff`/`#f6f8fb`/`#f4f7f8`/`#d5dfe3`, text
      `#1f1d22`/`#656566`/`#a5a5a5`/`#778990`, 12 px radii, Raleway, no shadows),
      the measured structure (821 px gradient hero with four drifting clouds and
      a `top:31.9%` caption, 69 px search-bar offset, 143 px badges with a mint
      middle one, `padding:58px 30px 66px` cards with `bottom:-32px` chips,
      129 px `#4d1d85` pricing headers inside a single 2 px-bordered container,
      135 px `#715691` CTA strip, `#26064c` footer with a `#715691`-field form)
      and what differs (new name, own skyline/cloud/photo/icon/copy assets, a
      violet overlay standing in for the source's pre-tinted photo, lucide icons
      instead of FontAwesome, reduced-motion handling for the reveal and cloud
      loops, added keyboard/aria states, local-only forms, Component Dock
      attribution)
