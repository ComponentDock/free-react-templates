# Looming — implementation tasks

Recreation of ColorLib "Coming Soon V12" (source slug `comingsoon_12` — the
coming-soon family's only **SPLIT-SCREEN** page: one `width:100%; min-height:100vh`
wrapping flex row with `align-items:stretch` split into an opaque WHITE 50% left
panel and a 50% right panel that is a full-height THREE-photograph cross-fading
slideshow (`950×900` warm interior shots, 1000 ms fade every 7000 ms), all under
ONE `rgba(0,0,0,0.5)` scrim that only the photo half sits behind — no gradient).
The white panel is itself a `justify-content:space-between` column at
`padding:37px 80px 50px 65px`: a small near-black mark pinned top-left; a centred
hero block (`padding:80px 0 90px`) holding a **90px `PlayfairDisplay-BlackItalic`**
`#333` sentence-case "Coming Soon" heading (60px at ≤576px), a Poppins-Regular
24px `#999` sub-line, and a **500×80 flat WHITE e-mail well with NO border and NO
radius** (only `box-shadow:0 10px 15px rgba(0,0,0,0.1)` → `0.2` on focus) whose
`Email Address` placeholder is `#999999` and whose submit is an invisible `90×80`
lane at the well's `top:0; right:0` corner holding a 30px `#333` arrow that slides
`translateX(10px)` on hover; and a bottom row of THREE 36×36 **filled `#ccc`**
circles with 22px white glyphs (Facebook / Twitter / YouTube, hover fill `#333`),
left-aligned on the panel's bottom edge. Validation is this slug's own flavour: a
white bubble with `1px solid #c80000`, `border-radius:0`, `padding:4px 25px 4px
10px`, red `Poppins-Medium 14px/1.4` text at `right:82px` and a 14px red warning
glyph at `right:88px`, hover-revealed above 992px and always visible at ≤992px,
cleared on focus, submit prevented. The split is 50/50 above 1200px, 60/40 at
≤1200px, and STACKED at ≤992px (white panel full width with 15px side padding,
photo band full width at `height:500px`). There is NO navbar, NO countdown, NO
footer band and NO scrolling section.
Spec: `openspec/specs/template-looming/spec.md`. New name: **looming** (never
reuse the source slug `comingsoon_12`, the demo title "Coming Soon 12", its
`bg01.jpg`…`bg03.jpg` photos, its `logo.png` mark, its "Coming Soon" /
"Follow us for update now!" / "Email Address" / "Email is required: ex@abc.xyz"
strings, or its inlined fa/zmdi SVG paths, in app files).
Design notes: `docs/templates/looming/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/looming`
- [ ] Rename package to `@free-react-templates/looming`; set
      `"homepage": "https://looming.free.componentdock.com"`
- [ ] `public/CNAME` = `looming.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/looming`
      (`grep -c "free-react-templates/looming" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` in `index.html`: **Playfair Display 900 italic**
      (`ital,wght@1,900`) + **Poppins 400;500** (the source faces are
      PlayfairDisplay-BlackItalic, Poppins-Regular, Poppins-Medium); no icon
      font — icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: panel `#fff`; heading/arrow `#333`;
      sub-line + placeholder `#999` / `#999999`; field text `#333`; social disc
      `#ccc` + hover `#333`; validation red `#c80000`; scrim `rgba(0,0,0,0.5)`;
      well shadow `0 10px 15px rgba(0,0,0,0.1)` → `0.2` on focus; radii `0px`
      everywhere except `50%` social circles; transitions `.4s` (field, arrow,
      discs) / `400ms` opacity (bubble) / `1000ms` (slideshow) / `7000ms`
      interval. NO brand accent token, NO gradient token

## Structure (component order in `App.tsx`)

- [ ] `Looming.tsx` (page shell) — one `min-h-screen w-full flex flex-wrap
      items-stretch relative z-1` row with ONE `bg-black/50` overlay behind the
      panels, then `ContentPanel` (FIRST child) → `PhotoPanel` (SECOND child);
      NO navbar, NO countdown, NO footer band, NO modal
- [ ] `ContentPanel.tsx` — `w-1/2 bg-white flex flex-col justify-between
      pt-[37px] pr-[80px] pb-[50px] pl-[65px]` (`max-[1200px]:w-3/5`,
      `max-[992px]:w-full px-[15px]`) holding `BrandMark` → `Hero` → `SocialRow`
- [ ] `BrandMark.tsx` — the app's OWN dark wordmark (short letterform/word) at
      the panel's top-left, `block max-w-full` (never the source 51×44 PNG or its
      glyph)
- [ ] `Hero.tsx` — `w-full flex items-center justify-center pt-[80px] pb-[90px]`
      wrapping a `wsize2`-equivalent `max-w-full` block with `Heading` →
      `SubLine` → `EmailForm` in that order
- [ ] `Heading.tsx` — `h3` in Playfair Display **900 italic** 90px/1.1 `#333`,
      sentence case, `pb-[34px]`, `text-[60px]` at ≤576px, NO `letter-spacing`,
      NO uppercase
- [ ] `SubLine.tsx` — Poppins 400 24px/1.2 `#999`, `pb-[46px]` (own copy of the
      same kind, never the source string verbatim)
- [ ] `EmailForm.tsx` — `max-w-full mx-0 my-[10px]` wrapping a
      `w-[500px] max-w-full h-[80px] relative` container with `EmailField` +
      `SubmitLane` + `ValidationBubble`
- [ ] `EmailField.tsx` — `h-full w-full pt-0 pr-[90px] pb-0 pl-[35px] bg-white
      rounded-none border-0 shadow-[0_10px_15px_rgba(0,0,0,0.1)]
      focus:shadow-[0_10px_15px_rgba(0,0,0,0.2)] transition-all duration-[400ms]`
      Poppins 500 15px/1.2 `#333`, `placeholder:text-[#999999]`; validated as an
      e-mail even though the source field is `type="text"` (use `type="email"`
      or `inputMode="email"` in the recreation)
- [ ] `SubmitLane.tsx` — absolute `top-0 right-0 h-[80px] w-[90px] flex
      items-center justify-center` button, NO fill/border/radius, a 30px `#333`
      lucide arrow that translates `10px` right on hover
      (`group-hover:translate-x-[10px] transition-all duration-[400ms]`), with an
      `aria-label` (the source has none — the recreation adds it)
- [ ] `ValidationBubble.tsx` — white box, `border border-[#c80000] rounded-none
      py-[4px] pl-[10px] pr-[25px] max-w-[70%]`, vertically centred, `right-[82px]`,
      Poppins 500 14px/1.4 `#c80000`, `opacity` transition `400ms`,
      `pointer-events-none`; a 14px `#c80000` warning glyph at `right-[88px]`;
      hidden until hover above 992px and always visible at ≤992px
- [ ] `useEmailValidation.ts` — trimmed value must match
      `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`; invalid submit sets the error state and
      prevents submission (no network call, no navigation); focusing the field
      clears the error
- [ ] `PhotoPanel.tsx` — `w-1/2 relative z-1` (`max-[1200px]:w-2/5`,
      `max-[992px]:w-full h-[500px]`) rendering `Slideshow`
- [ ] `Slideshow.tsx` — absolute `inset-0 z-[-1]` layer inside the photo panel
      with THREE `bg-cover bg-center bg-no-repeat` items
      (`https://picsum.photos/seed/looming-bg1/950/900` … `...-bg3/950/900`);
      first shown, rest hidden; cross-fade over `1000ms` every `7000ms` wrapping
      all three; frozen on the first photo under `prefers-reduced-motion: reduce`;
      `clearInterval` on unmount
- [ ] `SocialRow.tsx` — `flex flex-wrap` LEFT aligned (no `justify-center`), three
      `size-9` (36×36) `rounded-full bg-[#ccc]` discs with NO border and 22px
      white lucide glyphs (Facebook, Twitter, YouTube), `mr-[15px] mb-[10px]`,
      `transition-all duration-[400ms]`, hover `bg-[#333]`
- [ ] `Attribution.tsx` — a small centred line linking
      `https://www.componentdock.com/` branded "Component Dock" (the only
      addition vs the reference)

## Do NOT

- [ ] Do NOT make the panels full-bleed with a page-wide scrim over both halves —
      the LEFT panel is opaque `#fff`; the scrim must only read on the photo half
- [ ] Do NOT add a countdown, a navbar or a footer band — this slug has none
- [ ] Do NOT round the e-mail well, give it a border, or make the submit a filled
      pill/circle — flat white slab + shadow + an invisible arrow lane only
- [ ] Do NOT centre the social row or give the discs a border/transparent fill —
      filled `#ccc` discs, left-aligned, hover `#333`
- [ ] Do NOT change the split rhythm: 50/50 above 1200px, 60/40 at ≤1200px,
      stacked at ≤992px (photo band `height:500px`)
- [ ] Do NOT uppercase the heading or add `letter-spacing` — it is sentence case
      Playfair Display **900 italic**
- [ ] Do NOT copy the source's three photographs, its `logo.png`, its favicon,
      its woff2 files, its `css/style.css` (including the `all: revert` guard and
      the Bootstrap reboot) or its inlined fa/zmdi SVG paths
- [ ] Do NOT reference ColorLib, "Colorlib", "Coming Soon 12",
      `comingsoon_12` or the source's copy strings anywhere in `apps/looming`
      (comments included)

## Verification

- [ ] `openspec validate template-looming --type spec` passes
- [ ] `scripts/verify-app.sh looming` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build (~2–3 min)
- [ ] Visual check against the reference screenshot (`coming-soon-12.jpg`,
      1200×972): 50/50 split, white left half with a small mark top-left, heavy
      italic serif headline centred, grey sans sub-line, flat white e-mail well
      with a dark arrow, three left-aligned grey circles at the bottom-left,
      scrimmed warm photo on the right
- [ ] Responsive: 60/40 at ≤1200px; stacked at ≤992px (white panel full width,
      15px side padding, photo band `500px` tall); heading 60px at ≤576px
- [ ] Validation: empty field and `foo@bar` both show the bubble and block
      submit; a valid address clears it; focusing the field clears the error
- [ ] `public/CNAME` = `looming.free.componentdock.com`; `homepage` matches;
      lockfile registers the workspace
- [ ] PR description includes: source template (ColorLib Coming Soon V12),
      preview URL (404 for the slug AND the bootstrap variant → source-zip
      fallback), the design tokens used (`rgba(0,0,0,0.5)` scrim, `#fff` panel,
      `#333` heading/arrow, `#999`/`#999999` greys, `#ccc` → `#333` discs,
      `#c80000` validation, Playfair Display 900 italic + Poppins 400/500, 90px
      → 60px heading scale, `0 10px 15px rgba(0,0,0,0.1)` well shadow, 50/60/
      stacked split) and what differs (new name, picsum placeholders, own
      mark/strings, lucide icons, added `aria-label`, Component Dock attribution)
