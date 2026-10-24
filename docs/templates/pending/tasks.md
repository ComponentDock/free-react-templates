# Pending — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/pending`
> (<https://pending.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib "Coming Soon V13" (source slug `comingsoon_13` — the
coming-soon family's **full-screen slider** page: a `position:fixed`
100%×100% FOUR-photograph cross-fading slideshow over `#000` at `z-index:0`, one
`rgba(0,0,0,0.5)` scrim, and a single `justify-content:space-between` content
column (`min-height:100vh`, `padding:20px 75px 40px`, `align-items:center`) that
lays out THREE bands: a top bar holding the brand mark (`flex-grow:1`), a
four-unit countdown (`35 Days · 18 Hr · 59 Min · 58 Sec`, Montserrat-Regular
30px digits with `min-width:46px` and 18px labels baseline-aligned) and a
TRANSPARENT `1px solid #fff` `radius:25px` `Sign Up` pill (140×50, Montserrat
SemiBold 14px uppercase, hover fill `#fff` + `#555` text); a centre band with the
family's only brush-script headline (`Playlist Script` **180px** white, 160/120/80
at ≤992/768/576px, 55px below) above a 60×60 circular play button whose solid
WHITE disc is its `::after` at `z-index:-1` with a `#333` triangle (hover
`opacity:.6` + `scale(1.2)`; the source ships NO handler); and a `space-between`
bottom bar carrying three 36×36 TRANSLUCENT-ring social circles
(`1px solid rgba(255,255,255,0.1)`, transparent fill, 18px `#999` glyphs, hover
white fill + `#555`) on the LEFT and, on the RIGHT, a **bare underline e-mail
field** (280×50, `border-bottom:1px solid rgba(255,255,255,0.1)`,
`border-radius:0`, `padding:0 40px 0 3px`, transparent → `rgba(255,255,255,0.05)`
on focus) with a 16px `#999` arrow in an invisible 35×50 lane that turns `#fff`
on hover. Validation is the family's bordered white bubble
(`1px solid #c80000`, `border-radius:0`, `right:32px`, glyph `right:38px`,
hover-revealed above 992px and always visible at ≤992px). There is **no navbar,
no footer band and no scrolling** — the page is exactly one viewport
(`scrollHeight == clientHeight` at 1440×900).

Spec: `openspec/specs/template-pending/spec.md`. New name: **pending** (never
reuse the source slug `comingsoon_13`, the demo title "Coming Soon 13", its
`bg01.jpg`…`bg04.jpg` photographs, its 127×24 `logo.png` wordmark, its
`fonts/*.woff2` or its inlined zmdi/fa SVG paths, and never write its
"Coming Soon" / "Sign Up" / "Email Address" /
"Email is required: ex@abc.xyz" strings into app files).
Design notes: `docs/templates/pending/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/pending`
- [ ] Rename package to `@free-react-templates/pending`; set
      `"homepage": "https://pending.free.componentdock.com"`
- [ ] `public/CNAME` = `pending.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/pending`
      (`grep -c "free-react-templates/pending" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern)
- [ ] Google Fonts `<link>` in `index.html`: **Montserrat 400;600** (the source
      faces are Montserrat-Regular / Montserrat-SemiBold) + **Kaushan Script**
      (the source's `Playlist Script` face is NOT on Google Fonts — the CSS API
      answers HTTP 400; Kaushan Script is the closest brush script, `Yellowtail`
      the documented alternative). Document the substitution in the PR. No icon
      font — icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: backdrop `#000`; scrim
      `rgba(0,0,0,0.5)`; hairline `rgba(255,255,255,0.1)` (field underline +
      social rings); focus wash `rgba(255,255,255,0.05)`; type/lines `#fff`;
      muted glyphs `#999` + placeholder `#999999`; play glyph `#333`; hover text
      `#555`; validation red `#c80000`; body text `#666666`; radii `0px` for the
      field + bubble, `25px` for the pill, `50%` for the social rings and the play
      disc; transitions `all .4s` (field, pill, arrow, rings) and `opacity .4s`
      (bubble), slideshow `1000ms` / `7000ms`. NO brand accent token, NO gradient
      token, NO dark/light toggle

## Structure (component order in `App.tsx`)

- [ ] `Pending.tsx` (page shell) — `min-h-screen relative z-[1] flex flex-col
      justify-between items-center pt-[20px] px-[75px] pb-[40px]
      max-[576px]:px-[15px]` holding ONE `fixed inset-0 z-0 bg-black` overlay on
      top of `BackgroundSlideshow`, then `TopBar` → `CenterHero` → `BottomBar`;
      NO navbar, NO footer band, NO scrolling section
- [ ] `BackgroundSlideshow.tsx` — `fixed inset-0 z-0 bg-black` layer with FOUR
      `bg-cover bg-center bg-no-repeat` items
      (`https://picsum.photos/seed/pending-bg1/1900/900` … `...-bg4/1900/900`);
      first shown, rest hidden; cross-fade over `1000ms` every `7000ms` wrapping
      all four; frozen on the first photo under `prefers-reduced-motion: reduce`;
      `clearInterval` on unmount. NOT absolute inside a panel — this slug has no
      photo panel
- [ ] `Scrim.tsx` (or one `absolute inset-0 bg-black/50` element) — the ONLY
      overlay: above the fixed slideshow, below the content column; no gradient
- [ ] `TopBar.tsx` — `w-full flex flex-wrap justify-between items-center`
      (`flex-sb-m flex-w w-full`) holding `BrandMark` → `Countdown` → `SignUpCta`
- [ ] `BrandMark.tsx` — wrapper `flex-1 mr-[30px] my-[10px]` (the `flex-grow:1`
      box that pushes the countdown and the pill to the right edge) holding the
      app's OWN wordmark ("Pending."-style text or inline SVG, `max-w-full`).
      Never the source's 127×24 all-white PNG or its demo brand string
- [ ] `Countdown.tsx` — `flex flex-wrap pt-[15px] pb-[15px] pr-[36px]` holding
      FOUR units `flex items-end mr-[22px] my-[8px]`, each
      `<span class="… min-w-[46px]">35</span><span class="… pb-[2px]">Days</span>`:
      digits Montserrat 400 30px/1 `#fff` `min-w-[46px]`, labels Montserrat 400
      18px/1 `#fff` `pb-[2px]`, labels `Days / Hr / Min / Sec`
- [ ] `useCountdown.ts` — target `now + 35 days + 19 hours` (the source's
      `new Date(0,-1,35,19,0,0)` is always in the past, so the script always falls
      back to that offset); 1000 ms interval; days printed UNPADDED, hours /
      minutes / seconds zero-padded to two digits; interval stops at zero and is
      cleared on unmount
- [ ] `SignUpCta.tsx` — `min-w-[140px] h-[50px] px-[15px] flex items-center
      justify-center` TRANSPARENT button/link with `border border-white
      rounded-[25px]`, Montserrat 600 14px/1.2 uppercase `#fff`,
      `transition-all duration-[400ms]`, hover `bg-white text-[#555]`; NEVER
      filled at rest
- [ ] `CenterHero.tsx` — `flex flex-col items-center justify-center px-[15px]
      pt-[80px] pb-[90px]` with `Heading` then `PlayButton` only
- [ ] `Heading.tsx` — `h3` brush script (Kaushan Script) 180px/1.1 `#fff`,
      `text-center pb-[55px]`, sentence case, NO uppercase, NO `letter-spacing`;
      `text-[160px]` ≤992px, `text-[120px]` ≤768px, `text-[80px]` ≤576px
- [ ] `PlayButton.tsx` — 60×60 `rounded-full` transparent button with a
      full-size WHITE `after:` disc at `z-[-1]` and a `#333` lucide `Play` glyph;
      `transition-all duration-[400ms]`, hover `after:opacity-60` +
      `after:scale-125`; `aria-label` added (the source has none); decorative —
      no video, no modal, honour `prefers-reduced-motion`
- [ ] `BottomBar.tsx` — `w-full flex flex-wrap justify-between items-center`
      holding `SocialRow` (left) + `EmailForm` (right)
- [ ] `SocialRow.tsx` — `flex flex-wrap items-center my-[10px]` with THREE 36×36
      `rounded-full` links, `border border-white/10`, `bg-transparent`, 18px
      `#999` lucide glyphs (Facebook, Twitter, Youtube), `m-[3px]`,
      `transition-all duration-[400ms]`, hover `bg-white text-[#555]`
- [ ] `EmailForm.tsx` — `max-w-full my-[10px]` wrapping a
      `w-[280px] max-w-full h-[50px] relative` transparent container with
      `EmailField` + `SubmitArrow` + `ValidationBubble`
- [ ] `EmailField.tsx` — `block h-full w-full pt-0 pr-[40px] pb-0 pl-[3px]
      border-b border-b-white/10 rounded-none bg-transparent
      focus:bg-white/5 transition-all duration-[400ms]`, Montserrat 400 15px
      `#fff` (documented delta — the source's `.s2-txt1` rule is missing from its
      sheet, leaving Arial-black text over the photo), `placeholder:text-[#999999]`,
      own placeholder copy of the same kind; validated as an e-mail
- [ ] `SubmitArrow.tsx` — absolute `top-0 right-0 h-full w-[35px] flex
      items-center justify-center` button, NO fill/border/radius, a 16px `#999`
      lucide arrow (`group-hover:text-white transition-colors duration-[400ms]`),
      with an `aria-label` (the source has none)
- [ ] `ValidationBubble.tsx` — white box, `border border-[#c80000] rounded-none
      py-[4px] pl-[10px] pr-[25px] max-w-[70%]`, vertically centred,
      `right-[32px]`, Montserrat 400 14px/1.4 `#c80000`, `pointer-events-none`,
      opacity transition `400ms`; a 14px `#c80000` warning glyph at
      `right-[38px]`; hidden until hover above 992px and always visible at ≤992px
- [ ] `useEmailValidation.ts` — trimmed value must match
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`; invalid submit sets the field's error
      state and prevents submission (no network call, no navigation); focusing the
      field clears the error
- [ ] `Attribution.tsx` — a small low-emphasis line linking
      `https://www.componentdock.com/` branded "Component Dock", pinned
      absolutely (e.g. `absolute bottom-1 inset-x-0 text-center text-[11px]
      text-white/40`) so the three-band `space-between` geometry is untouched —
      the only addition vs the reference

## Do NOT

- [ ] Do NOT make the backdrop absolute-in-a-panel or a CSS `background-image` on
      the column — it is `position:fixed`, `z-index:0`, over `#000`, with the
      scrim above it and the content column above that
- [ ] Do NOT use three slides or `950×900` placeholders — this slug has FOUR
      `1900×900` landscape photographs
- [ ] Do NOT replace the brush script with a sans/serif, uppercase the heading or
      add `letter-spacing` — it is the family's only script face and its biggest
      type
- [ ] Do NOT move the countdown into the centre block or centre it — it lives in
      the top bar, with `flex-1` on the mark wrapper and `flex-wrap` on the row
- [ ] Do NOT turn the e-mail field into a white/rounded well, add a border or a
      radius, or widen its 3px left inset — it is a bare 280×50 underline and the
      `pr-[40px]` exists only to clear the 35px arrow lane
- [ ] Do NOT fill the `Sign Up` pill at rest (the fill is the hover state) and do
      NOT drop its 25px radius
- [ ] Do NOT give the socials a filled `#ccc`/white disc or a solid `1px`/`2px`
      white border — they are translucent `rgba(255,255,255,0.1)` rings with
      `#999` glyphs
- [ ] Do NOT wire the play button to a video/modal or remove its white disc and
      `#333` triangle; keep the `opacity .6 / scale 1.2` hover and add an
      `aria-label`
- [ ] Do NOT drop the digits' `min-w-[46px]` — it is what stops the ticking row
      from jittering
- [ ] Do NOT add a navbar, a second section, a footer band or any scrolling
      content; at desktop the page is exactly one viewport
- [ ] Do NOT copy the source's four photographs, its `logo.png`, its favicon, its
      woff2 files, its `css/style.css` (including the `all: revert` guard and the
      Bootstrap reboot) or its inlined zmdi/fa SVG paths
- [ ] Do NOT reference ColorLib, "Colorlib", "Coming Soon 13", `comingsoon_13`,
      "Playlist Script" or the source's copy strings anywhere in `apps/pending`
      (comments included — record the brush-script substitution as a design note,
      not as provenance)

## Verification

- [ ] `openspec validate template-pending --type spec` passes
- [ ] `scripts/verify-app.sh pending` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build (~2–3 min)
- [ ] Visual check against the reference screenshot (`coming-soon-13.jpg`,
      1200×972): full-bleed dark photograph, white bold wordmark top-left, four
      countdown units top-right with a thin white pill at the far right, huge
      white brush-script headline centred, white circular play disc below it,
      three thin-ring social circles bottom-left, grey `Email Address` underline
      with a grey arrow bottom-right
- [ ] Responsive: heading 180 → 160 (≤992) → 120 (≤768) → 80 (≤576); column side
      padding drops to 15px at ≤576px; the top bar WRAPS at narrow widths (the
      pill drops to its own line) instead of overflowing
- [ ] Countdown: opens at `35 Days 19 Hr` and counts down once a second; days
      unpadded, h/m/s two-digit padded; intervals cleared on unmount
- [ ] Validation: empty field and `foo@bar` both show the bubble and block
      submit; a valid address clears it; focusing the field clears the error;
      the bubble is hover-revealed above 992px and always visible at ≤992px
- [ ] Slideshow: four photos cross-fading `1000ms` every `7000ms`; frozen on the
      first photo under `prefers-reduced-motion: reduce`
- [ ] `public/CNAME` = `pending.free.componentdock.com`; `homepage` matches;
      lockfile registers the workspace
- [ ] PR description includes: source template (ColorLib Coming Soon V13), preview
      URL (`https://preview.colorlib.com/theme/comingsoon_13/` → HTTP 404 →
      source-zip fallback), the design tokens used (`#000` backdrop,
      `rgba(0,0,0,0.5)` scrim, `rgba(255,255,255,0.1)` hairlines,
      `rgba(255,255,255,0.05)` focus wash, `#fff` type/pill border,
      `#999`/`#999999` greys, `#333` play glyph, `#555` hover text, `#c80000`
      validation, Montserrat 400/600, the 180/160/120/80px script scale, the
      `25px` pill, `50%` discs/rings, the `1000ms`/`7000ms` slideshow) and what
      differs (new name, picsum placeholders, own wordmark/strings, Kaushan Script
      instead of the non-Google-Fonts Playlist Script, the white field-text delta,
      lucide icons, added `aria-label`s, Component Dock attribution)
