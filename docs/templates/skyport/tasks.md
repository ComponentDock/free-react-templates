# Skyport — implementation tasks

Recreation of ColorLib **"Hosting"** (source slug `hosting` — the hosting
family's **azure-on-blue-photo** page: a `#222222` utility top bar carrying a
flat azure `#3898f8` purchase button above a white fixed header, then a
viewport-tall cover-photo hero with a **left-aligned** white uppercase headline
and a **white pill** CTA, a five-mark grey logo strip, one hairline-separated
testimonial row, a square-cornered `#f9f9ff` pricing triple that flips to solid
`#3898f8` with an offset shadow on hover, a 6/6 image/caption split, a six-card
feature grid, a `rgba(0,0,0,.5)` photo band, a counter + Q/A band, a solid
`#3898f8` CTA band, a two-column contact form and a `#222222` three-widget
footer with an 8-thumbnail Instagram strip). Type is Poppins; buttons are `25px`
pills except the square `#222` price button. Preview:
`https://preview.colorlib.com/theme/hosting/` (HTTP 200; stylesheet
`css/main.css` 37,279 B; script `js/main.js` 10,629 B).

Spec: `openspec/specs/template-skyport/spec.md`. New name: **skyport** (never
reuse the source slug `hosting`, the name "Hosting", its logo/hero/illustration/
logo-strip/photograph assets or its copy verbatim). Design notes:
`docs/templates/skyport/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/skyport`
- [ ] Rename package to `@free-react-templates/skyport`; set
      `"homepage": "https://skyport.free.componentdock.com"`
- [ ] `public/CNAME` = `skyport.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/skyport`
      (`grep -c "free-react-templates/skyport" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern)
- [ ] Google Fonts `<link>` in `index.html`:
      **Poppins `wght@300;400;500;600;700`** (verified on Google Fonts,
      HTTP 200). No icon font: icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #3898f8`,
      `--color-dark: #222222`, `--color-darkest: #111111`,
      `--color-surface: #ffffff`, `--color-surface-soft: #f9f9ff`,
      `--color-surface-tint: #f1f1f1`, `--color-ink: #222222`,
      `--color-body: #777777`, `--color-line: #eeeeee`,
      `--color-overlay: rgba(0, 0, 0, 0.5)`,
      `--color-social-glyph: #cccccc`, radii `25px` (pills) / `20px` (footer
      input) / `0` (price button, cards, form fields), font Poppins

## Spec + TDD

- [ ] Re-read `openspec/specs/template-skyport/spec.md` and mirror every
      scenario as a failing test first (RED), then implement (GREEN)
- [ ] Components under `src/components/`: `UtilityBar`, `Navbar` (+
      `PagesDropdown`), `Hero` (+ `HeroArtwork`), `LogoStrip`, `TestimonialRow`,
      `PricingSection` (+ `PlanCard`), `AboutSplit`, `ServiceGrid`
      (+ `ServiceCard`), `InfoBand`, `StatsAndFaq` (+ `StatCounter`,
      `FaqItem`), `CallActionBand`, `ContactForm`, `Footer`
      (+ `NewsletterForm`, `InstagramStrip`)
- [ ] Use `cn()` from `packages/ui`; `Button` / `ButtonLink` for the three
      button variants (azure pill, white pill, azure pill on the about split)
      and the square `#222` price button; no new dependencies

## Implementation notes (measured from the live reference)

- [ ] Header is `position:fixed` (white, `z-index:997`), so the hero band must
      not be pushed down; add the scroll shadow
      (`-21.213px 21.213px 30px rgba(158,158,158,.3)`) after ~100 px of scroll
      while keeping the background opaque white
- [ ] Hero row = viewport height (`min-h-screen`), dropping to a 700 px band at
      ≤767.98 px; **no dark overlay** (the source's `.overlay` rule is defined
      but unused in its markup — the live hero is bright azure)
- [ ] Hero `h1` step sequence: 48 px → 45 px (≤1199.98) → 36 px (≤991.98, line
      breaks dropped) → 40 px (≤414)
- [ ] White pill CTA hover: `background:transparent; border:1px solid #fff;
      color:#fff`
- [ ] `Pages` dropdown: white panel, `padding:10px; margin-top:22px;
      box-shadow:0 0 30px rgba(127,137,161,.25)`, items `12px`/`#333`, hover
      `#3898f8`
- [ ] Logo strip: exactly 5 own muted-grey marks, wrapper `padding:60px 65px`,
      band `padding-top:40px`
- [ ] Testimonial row: one block, `border-bottom:1px solid #eee` +
      `padding-bottom:100px`, right column
      `border-left:1px solid #eee; padding-left:30px`
- [ ] Pricing cards: square corners, `#f9f9ff`, sections
      `padding:40px 40px 22px` with `1px solid #eeeeee` hairlines, 5-item lists
      (`li` `margin-bottom:20px`), `#222` square button; hover flips
      `.bottom-sec`/`.end-sec` to `#3898f8`, white text,
      `box-shadow:0 20px 20px 0 rgba(157,157,157,.5)` and inverts the button
- [ ] About split: fluid container, copy column
      `padding-left:20%; padding-right:5%` (5 %/5 % ≤1199.98, extra vertical
      padding ≤991.98), azure pill `padding:0 50px` whose hover is transparent
      with a `1px solid #3898f8` border and azure text
- [ ] Service grid: 6 cards `col-lg-4 col-md-6`, `#f9f9ff`, `padding:30px`,
      inline lucide icon `margin-right:15px` + `h4` `margin:20px 0`, hover
      `#3898f8` + `box-shadow:-14.142px 14.142px 20px 0 rgba(157,157,157,.5)`
- [ ] Info band: own cover image at `background-position:right` + full-bleed
      `rgba(0,0,0,.5)` overlay, white `col-lg-5` copy, white pill CTA
- [ ] Counters: animate on first view over ~1 s
      (`counterUp({delay:10, time:1000})` in the source JS), render the final
      value immediately under `prefers-reduced-motion`, keep the real value as
      text in the DOM
- [ ] FAQ: 3 items, question `h2` 18 px/600 with `margin:15px 0 25px`, answer
      `p` 16 px/300/`line-height:24px`
- [ ] Call-action band: solid `#3898f8`, centred, `120px 0`, white copy, white
      pill CTA
- [ ] Contact form: `margin-top:60px`, two `col-lg-6` columns, square fields
      (`padding:15px; font-size:12px; border-radius:0`), 180 px textarea, azure
      pill "Send Message" + arrow glyph; local validation with per-field errors
      and a success live region (no `mail.php`, no Mailchimp endpoint)
- [ ] Footer: `#222222; padding-top:100px`; `Top Products` 4 links
      (`margin-top:8px`, hover `#3898f8`), newsletter (white `20px`-radius pill
      input `line-height:38px`, azure `Subscribe` with `margin-top:20px`), 8
      Instagram thumbnails 4-per-row (`margin:-5px` wrapper, `li` 25 %,
      `img{margin:5px}`), `.footer-bottom` `padding-top:80px` with the
      `#3898f8` copyright links and `#111111` social chips
      (`width:45px; padding:12px`, hover `#3898f8`, glyphs `#cccccc`)
- [ ] Footer must link `https://www.componentdock.com/` ("Component Dock")
      exactly once, replacing the source credit
- [ ] Picsum seeds: `skyport-about` (about image), `skyport-band` (info band),
      `skyport-gram-<n>` (footer thumbnails)
- [ ] `scroll-margin-top` on every anchor target so sections clear the fixed
      header (~108 px offset in the source)

## Verification

- [ ] `npm run spec:validate` (passes now — re-run after any spec edit)
- [ ] `scripts/verify-app.sh skyport` — typecheck + lint + knip + fallow +
      vitest at 100 % coverage + build
- [ ] Screenshot comparison against `hosting-free-hosting-website-template.jpg`
      (1200×935): dark utility bar, white header, saturated-azure viewport hero
      with a left-aligned uppercase headline + white pill, artwork right, cloud
      scallop edge, five grey logo marks, hairline testimonial row
- [ ] Section order check at desktop: header → hero → logo strip → testimonial →
      pricing (3) → about split → services (6) → info band → counters + FAQ →
      CTA band → contact → footer
- [ ] No `colorlib` / "Hosting" / source-slug string anywhere in `apps/skyport`
- [ ] No copied source assets (logo, `header-bg.jpg`, `c1.jpg`, `info-bg.jpg`,
      `l1–l5.png`, `i1–i8.png`, Linearicons/FontAwesome CSS)
- [ ] One Component Dock link in the footer; `public/CNAME` +
      `"homepage"` = `skyport.free.componentdock.com`
- [ ] PR description records: source (ColorLib Hosting), preview URL, design
      tokens used, measured section order/geometry, and what differs (new name,
      own assets/copy/icons, no dark hero overlay, added a11y states, Component
      Dock attribution)
