# Foretaste — implementation tasks

Recreation of ColorLib "Coming Soon V15" (source slug `comingsoon_15` — the
coming-soon family's **full-bleed gradient skyline** page: ONE `min-height:100vh`
shell showing a single cover photograph (a washed downtown skyline, source file
`images/bg01.jpg` 1900×900) under ONE `linear-gradient(top, #b224ef, #7579ff)`
overlay at `opacity:0.8`, holding a single centred flex column
(`padding:160px 0 215px`, `80px 0 100px` at ≤576px) with exactly four bands: a
101×44 white monogram lockup (`flex-grow:1` wrapper, `image max-width:100%`), the
headline `COMING SOON` (**Montserrat Thin 50px, `line-height:1.1`, white,
`text-transform:uppercase`, `letter-spacing:10px`**, `padding:30px 0 100px`,
unchanged at every width), a **4-group flip-clock countdown** (Days · Hrs · Min ·
Sec) of eight `90×120` `border-radius:10px` `#0d1629` tiles (`margin:3px`, 6px
between a pair) each holding a zero-padded digit in **Quantico Regular 120px
white**, with `68px × 120px` dividers whose `::before` paints an oversized white
Quantico colon (the first/days divider stays `width:0` and paints none) and whose
`::after` paints the caption `days`/`hrs`/`min`/`sec` in **Montserrat Bold 14px,
`letter-spacing:3px`, uppercase, white** (`193px` box at `left:100%; top:100%`,
`padding-top:23px`), and a social row (`flex-wrap:wrap; justify-content:center;
align-items:center; padding-bottom:35px`) of THREE `36×36` transparent circles
ringed `1px solid #fff` with 18px white glyphs that invert to a `#fff` fill with
`#0d1629` glyphs on hover (`transition:all .4s`). The countdown is live:
`js/snippet.js` sets `end = Date.now() + 35 days + 18 hours` and re-paints the
digits every 1000ms, flipping only the cards whose digit changed (0.5s
`turn`/`turn2` animations re-triggered by toggling the `play` class); the static
markup ships `35 : 17 : 59 : 57` so the page reads before JS runs. Responsive:
only two breakpoints move anything — the countdown wrapper is `max-width:470px`
(`margin-right:10px`) at ≤1200px with the days/minutes dividers at `10px` and the
minutes colon hidden, and `max-width:210px` (`margin-right:10px`) at ≤576px with
every divider at `10px` and every colon hidden, plus the column padding collapsing
to `80px 0 100px`. There is **no navbar, no subscribe form, no footer band, no
second section**; at 1440×900 the measured page is 938px tall in a 900px viewport
(a 38px scroll caused by the shell's own `padding-bottom:35px`).

Spec: `openspec/specs/template-foretaste/spec.md`. New name: **foretaste** (never
reuse the source slug `comingsoon_15`, the demo title "Coming Soon 15", its
`bg01.jpg` photograph, its 101×44 `logo.png` monogram, its `fonts/*.woff2`, its
inlined fa SVG paths, and never write its hero copy verbatim into app files).
Design notes: `docs/templates/foretaste/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/foretaste`
- [ ] Rename package to `@free-react-templates/foretaste`; set
      `"homepage": "https://foretaste.free.componentdock.com"`
- [ ] `public/CNAME` = `foretaste.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/foretaste`
      (`grep -c "free-react-templates/foretaste" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern)
- [ ] Google Fonts `<link>` in `index.html`:
      **Montserrat `wght@100;700`** (source `Montserrat-Thin` = 100 for the
      headline, `Montserrat-Bold` = 700 for the group captions) +
      **Quantico `wght@400`** (source `Quantico-Regular` = the 120px digits and
      colons). All three source faces ARE on Google Fonts — no substitution
      needed. No icon font: icons come from `lucide-react`
- [ ] `@theme` tokens in `src/index.css`: `--color-brand-from: #b224ef`,
      `--color-brand-to: #7579ff` (the gradient — the ONLY brand colour),
      `--color-tile: #0d1629` (digit tiles + the social hover glyph), white
      `#fff` for everything else, radii `10px` (tiles) and `50%` (social
      circles), transition `all .4s`, wash `opacity .8`. NO additional grey
      palette, NO second accent, NO dark-mode treatment

## Structure (component order in `App.tsx`)

- [ ] `Foretaste.tsx` (page shell) — the single screen:
      `relative z-[1] min-h-screen w-full bg-cover bg-center bg-no-repeat
      px-[15px] pb-[35px]` with
      `style={{backgroundImage:'url(https://picsum.photos/seed/foretaste-skyline/1900/900)'}}`
      holding `GradientOverlay`, `Attribution` and the centred column
- [ ] `GradientOverlay.tsx` — ONE `absolute inset-0 -z-10` element with
      `bg-linear-to-b from-[#b224ef] to-[#7579ff] opacity-80` (the shell's
      `::before`). No second overlay, no scrim, no blur; it must sit above the
      shell's background image and below all content
- [ ] `CountdownColumn.tsx` — `flex flex-col items-center pt-[160px] pb-[215px]
      max-[576px]:pt-[80px] max-[576px]:pb-[100px]` with exactly FOUR children in
      order: `Monogram` → `Headline` → `Countdown` → `SocialRow`. No form, no
      second section, no footer band
- [ ] `Monogram.tsx` — `block` wrapper (`flex-grow:1` is inert on an auto-height
      column) containing the app's OWN white monogram/wordmark (JSX or inline
      SVG), at most 44px tall, `max-w-full`; never the source's 101×44 PNG or its
      letter shapes; render it as a brand lockup with no dead `href="#"` link
- [ ] `Headline.tsx` — `h3` with Montserrat `font-thin` (100) `text-[50px]
      leading-[1.1] tracking-[10px] uppercase text-white text-center
      pt-[30px] pb-[100px]`, own copy of the same kind (a two-word "coming soon"
      headline); NO size change at any breakpoint, NO different weight, NO
      reduced tracking
- [ ] `Countdown.tsx` — the countdown wrapper: `flex flex-wrap justify-center
      w-full max-w-full mb-[20px] max-[1200px]:max-w-[470px]
      max-[1200px]:mr-[10px] max-[576px]:max-w-[210px] max-[576px]:mr-[10px]`,
      rendering four `CountdownGroup`s separated by three `CountdownColon`s
- [ ] `CountdownGroup.tsx` — one group: `flex` with two `DigitTile`s, plus the
      group's caption rendered as a real element with the reference offsets
      (`absolute left-full top-full pt-[23px] w-[193px] text-center`) in
      `font-bold text-[14px] tracking-[3px] uppercase text-white`
- [ ] `DigitTile.tsx` — `w-[90px] h-[120px] rounded-[10px] bg-[#0d1629] mx-[3px]`
      with a flex-centred `120px` Quantico white digit; expose the animation
      state so only changed digits flip
- [ ] `CountdownColon.tsx` — `w-[68px] h-[120px] flex items-center justify-center`
      (`max-[1200px]:w-[10px]`, `max-[576px]:w-[10px]`) rendering a `120px`
      Quantico white `:` (omit it entirely for the first/days position, which is
      `width:0` and paints none; hide it at ≤1200px for the minutes group and at
      ≤576px everywhere)
- [ ] `useCountdown.ts` — target = `useRef(Date.now() + 35*864e5 + 18*36e5)` (a
      stable `load time + 35d 18h`), a `setInterval` every **1000ms**, remaining
      clamped with `Math.max(0, …)`, output
      `{days, hours, minutes, seconds}` each zero-padded to two digits (days ≥2);
      the interval is cleared in the effect cleanup. No network call, no
      navigation. The first render must already be non-zero
- [ ] `SocialRow.tsx` — `flex flex-wrap justify-center items-center pb-[35px]`
      with exactly three `SocialCircle`s
- [ ] `SocialCircle.tsx` — `size-9` (36×36) `rounded-full border border-white
      bg-transparent text-white flex items-center justify-center mx-[3px] mb-[5px]
      transition-all duration-[400ms] hover:bg-white hover:text-[#0d1629]`;
      `lucide-react` Facebook / Twitter / Youtube glyphs at 18px; each link gets
      an `aria-label` and a visible focus ring
- [ ] `Attribution.tsx` — a small low-emphasis line linking
      `https://www.componentdock.com/` branded "Component Dock", pinned
      absolutely near the bottom of the shell (e.g. `absolute bottom-1 inset-x-0
      text-center text-[11px] text-white/70`) so the three-band geometry is
      untouched — the only addition vs the reference

## Do NOT

- [ ] Do NOT add a navbar, a subscribe/e-mail form, a footer band, a second
      section, a modal or any navigation — the page is exactly one screen
- [ ] Do NOT replace the gradient with a flat colour, a dark scrim, a blur, or a
      second overlay — it is ONE `#b224ef → #7579ff` layer at `opacity:0.8`
- [ ] Do NOT lighten/darken the two gradient stops or change the `.8` opacity —
      the wash is what makes the photograph read violet→periwinkle
- [ ] Do NOT use Playfair/Poppins or a serif for the headline: it is
      **Montserrat weight 100, 50px, `letter-spacing:10px`, uppercase, white**
      (the source face is `Montserrat-Thin`), and it stays 50px at every width
- [ ] Do NOT square off or shrink the digit tiles: they are `90×120`,
      `border-radius:10px`, `background:#0d1629`, `margin:3px`
- [ ] Do NOT render the digits in a system/mono font — they are **Quantico
      Regular 120px white**, and the colons use the same face at the same size
- [ ] Do NOT drop the oversized colon separators (or make them text nodes inside
      the tile row): they are `68px`-wide divider columns between the four groups,
      absent only at the days position
- [ ] Do NOT restyle the captions: `days`/`hrs`/`min`/`sec` are Montserrat
      **700**, 14px, `letter-spacing:3px`, uppercase, white, in a `193px` box
      hanging `23px` below the tiles (`left:100%; top:100%`), not centred labels
      inside the tiles
- [ ] Do NOT turn the social circles into filled discs or coloured rings — they
      are transparent with a `1px solid #fff` border and 18px white glyphs,
      inverted on hover (`#fff` fill, `#0d1629` glyph, `all .4s`)
- [ ] Do NOT make the countdown a static string or a fake interval: it counts to
      `load + 35d 18h`, updates every 1000ms, clamps at zero, flips only changed
      digits, and clears its interval on unmount
- [ ] Do NOT forget the two breakpoints (wrapper `470px` at ≤1200px with the
      days/minutes dividers at `10px` and the minutes colon hidden; wrapper
      `210px` at ≤576px with all colons hidden and the column padding at
      `80px 0 100px`)
- [ ] Do NOT copy the source's `bg01.jpg`, its 101×44 `logo.png`, its favicon,
      its woff2 files, its `css/style.css` (including the `all: revert` guard and
      the Bootstrap reboot) or its inlined fa SVG paths
- [ ] Do NOT reference ColorLib, "Colorlib", "Coming Soon 15", `comingsoon_15`,
      "Montserrat-Thin", "Montserrat-Bold" or "Quantico-Regular" anywhere in
      `apps/foretaste` (comments included — record tokens as design notes, not
      provenance)

## Verification

- [ ] `openspec validate template-foretaste --type spec` (or
      `npm run spec:validate`) passes
- [ ] `scripts/verify-app.sh foretaste` passes: typecheck + lint + knip + fallow
      + vitest at 100% coverage + build (~2–3 min)
- [ ] Visual check against the reference screenshot (`coming-soon-15.jpg`,
      1200×972): violet→periwinkle gradient over a washed skyline; white monogram
      in the upper third; thin widely letterspaced uppercase `COMING SOON`; four
      groups of two near-black rounded tiles separated by oversized colons;
      `DAYS · HRS · MIN · SEC` captions under the groups; three white hairline
      social circles centred near the bottom; nothing else on screen
- [ ] Geometry at 1440×900: shell `padding:0 15px 35px` (page ~938px tall in a
      900px viewport); column `padding:160px 0 215px`; lockup at `y160` (≤44px
      tall); headline at `y204` (50px/1.1 + 30/100 padding, ~490px wide);
      countdown wrapper `x15 y389 w1395 h203`; tiles `90×120` at `y392` with 6px
      between a pair and `68px` colons between groups; social row at `y827` with
      the first circle at `x653 y827`
- [ ] Countdown: initial render shows non-zero days/hours/minutes/seconds; after
      one second the seconds digit flips only where it changed; the target is
      `load + 35d 18h`; values are zero-padded; the timer is cleared on unmount
      (no act warnings, no leaked intervals in tests — use fake timers)
- [ ] Responsive: at ≤1200px the wrapper is `470px` with `margin-right:10px`, the
      days/minutes dividers are `10px` and the minutes colon is hidden; at
      ≤576px the wrapper is `210px`, every divider is `10px` with no colon, and
      the column padding is `80px 0 100px`; headline 50px and tiles `90×120` at
      every width
- [ ] Accessibility: heading is a real heading element; each countdown group is
      labelled (Days/Hours/Minutes/Seconds) for assistive tech; social links have
      `aria-label`s; interactive elements have visible focus rings
- [ ] `public/CNAME` = `foretaste.free.componentdock.com`; `homepage` matches;
      lockfile registers the workspace
- [ ] PR description includes: source template (ColorLib Coming Soon V15),
      preview URL (`https://preview.colorlib.com/theme/comingsoon_15/` → HTTP 404
      → live demo `https://colorlib.com/etc/cs/comingsoon_15/index.html` +
      source-zip fallback), the design tokens used (`#b224ef → #7579ff` gradient
      at `opacity .8`, `#0d1629` tiles, `10px`/`50%` radii, Montserrat 100/700,
      Quantico 400 at 120px, `1px solid #fff` rings, `all .4s`), the measured
      geometry and what differs (new name, picsum skyline placeholder, own
      monogram and copy, lucide icons, real caption elements with `aria-label`s,
      added focus states, Component Dock attribution line)
