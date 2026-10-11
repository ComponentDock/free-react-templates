# Premiere — design notes (replication research)

Source: ColorLib **Coming Soon 2** —
https://colorlib.com/wp/template/comingsoon_02/ (source slug `comingsoon_02`;
ColorLib page title "Coming Soon V02 - Free Full-Screen Website Template
2026", HTTP 200, 109,311 B, verified 2026-10-11). Theme preview
`https://preview.colorlib.com/theme/comingsoon_02/` returns **HTTP 404**
(9 B, `text/plain`, verified 2026-10-11); the ColorLib template page exposes
only the anchor preview `https://preview.colorlib.com/#comingsoon_02` and a
downloadable source zip. Replication therefore used the **official source
zip** `https://preview.colorlib.com/downloads/free/comingsoon_02.zip`
(HTTP 200, 647,366 B, 19 entries) as the DOM/CSS/behaviour reference, plus
the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-2.jpg`.
Reference artifacts: `/tmp/cs02.zip`, extracted to `/tmp/cs02x/comingsoon_02/`
(`index.html` 2,232 B · `css/style.css` 10,186 B · `js/snippet.js` 4,003 B ·
`README.md` 1,260 B · `images/bg01|bg02|bg03.jpg` · `fonts/` woff2 set),
screenshot converted to `/tmp/cs02_shot.png` (1200×972). Research date:
2026-10-11.

## Visual summary (from screenshot)

A single full-viewport coming-soon screen, centred, with no split and no
panels. The whole viewport is a full-bleed photograph — a speckled
aloe/agave plant, dark green and heavily out of focus at the edges — under a
heavy black wash, so the photo reads as a dark textured backdrop. Near the
upper third sits the bold uppercase white headline "COMING SOON"; directly
under it the pale white sub-line "Our website is under construction, follow
us for update now!". Below that, one horizontal row of four thin translucent
white circles, each holding a large white number ("35", "17", "59", "58")
with a small purple uppercase label beneath it (DAYS / HOURS / MINUTES /
SECONDS). The column is closed by a form row: a wide white pill input reading
"Enter Email Address" whose placeholder is grey, and immediately to its right
a purple pill button reading "SUBSCRIBE" in small white capitals. There is no
logo, no navigation, and no footer band. Overall aesthetic: minimal,
photo-forward, one purple accent, countdown-forward.

## Structure order (1:1 with the source DOM)

The reference is one screen, not a scrolling page:

1. `.simpleslide100` — fixed background layer (`position:fixed; top:0;
   left:0; width:100%; height:100%; z-index:0`), three
   `.simpleslide100-item.bg-img1` children with inline `background-image`
   (`images/bg01.jpg` visible; `bg02.jpg` / `bg03.jpg` `display:none`) and
   `background-position:center; background-repeat:no-repeat;
   background-size:cover`
2. `.size1.overlay1` — the screen (`width:100%; min-height:100vh;
   position:relative; z-index:1`), with `::before` a 100% × 100%
   `rgba(0,0,0,0.8)` overlay at `z-index:-1`
   1. `.size1.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-50` — centred column
      (flex, column, centred both axes) containing, in order:
      1. `h3.l1-txt1.txt-center.p-b-25` — "Coming Soon"
      2. `p.m2-txt1.txt-center.p-b-48` — "Our website is under construction,
         follow us for update now!"
      3. `div.flex-w.flex-c-m.cd100.p-b-33` — countdown row (wrapping,
         centred) with four
         `.flex-col-c-m.size2.bor1.m-l-15.m-r-15.m-b-20` cells, each a
         `span.l2-txt1.p-b-9.days|hours|minutes|seconds` (DOM: 35 / 17 / 50 /
         39) over a `span.s2-txt1` label (Days / Hours / Minutes / Seconds)
      4. `form.w-full.flex-w.flex-c-m.validate-form` — wrapping centred row:
         `div.wrap-input100.validate-input.where1` (`data-validate="Valid
         email is required: ex@abc.xyz"`) with
         `input.input100.placeholder0.s2-txt2[type=text name=email
         placeholder="Enter Email Address"]` + `span.focus-input100`, and
         `button.flex-c-m.size3.s2-txt3.how-btn1.trans-04.where1` —
         "Subscribe"
3. `js/snippet.js` — three framework-free behaviours: e-mail validation on
   submit (`.alert-validate` added to the field wrapper, removed on focus),
   the countdown, and the background slideshow

## Section-by-section fidelity notes

- **Layout / column** — `.size1{width:100%;min-height:100vh}` applied to both
  the screen and the inner column, which is `flex-col-c-m` (direction column,
  `align-items:center`, `justify-content:center`) with `.p-t-50.p-b-50` and
  `.p-l-15.p-r-15`. Recreation: a single `min-h-screen` flex column centred
  both axes with 50px vertical / 15px horizontal padding — no grid, no split.
- **Photo backdrop** — `.simpleslide100` is `position:fixed` full-viewport at
  `z-index:0`; the content sits above it at `z-index:1`. Source photos are
  `images/bg01.jpg` … `bg03.jpg`; recreation uses
  `picsum.photos/seed/premiere-bg-1|2|3/<w>/<h>` (`object-cover`), i.e. dark
  abstract/textured scenes echoing the plant photo. `.simpleslide100-item`
  is `position:absolute` 100% × 100% from the top-left.
- **Slideshow behaviour** — `js/snippet.js`: `setInterval(…, 7000)`; the next
  item is displayed at opacity 0 and then set to 1 in a
  `requestAnimationFrame`, while the current fades to 0 and is set to
  `display:none` after the 1000 ms transition. If
  `matchMedia('(prefers-reduced-motion: reduce)').matches` the interval is
  never attached. Recreation: React state + a 7000 ms interval with a 1 s
  CSS opacity transition; skip the interval under `prefers-reduced-motion`;
  clear on unmount.
- **Overlay** — `.overlay1::before{background-color:rgba(0,0,0,0.8)}`
  covering the whole screen behind the content. Recreation: an absolutely
  positioned `bg-black/80` layer (`rgba(0,0,0,0.8)`) between the photo and
  the column.
- **Headline** — `.l1-txt1` Poppins-Bold 50px/1.1 white, uppercase,
  `.p-b-25` (25px). Recreation: Poppins 700, uppercase, 50px, white,
  `pb-[25px]`; copy the same kind as "Coming Soon" without reusing the demo
  brand.
- **Sub-line** — `.m2-txt1` Lato-Light 25px/1.2 white, `.p-b-48` (48px).
  Recreation: Lato 300, 25px, white, `pb-[48px]`; paraphrase the
  under-construction sentence.
- **Countdown circles** — `.size2{width:155px;height:155px}` +
  `.bor1{border:1px solid rgba(255,255,255,0.3);border-radius:50%}`; cells
  are `flex-col-c-m` with `.m-l-15.m-r-15.m-b-20` and the row is
  `.flex-w.flex-c-m` (wrapping, centred) with `.p-b-33`. Number `.l2-txt1`:
  Lato-Bold 40px/1 white, `.p-b-9` (9px). Label `.s2-txt1`: Lato-Regular
  12px/1 `#846add`, uppercase. Recreation: Tailwind `h-[155px] w-[155px]
  rounded-full border border-white/30` cells in a centred wrapping row with
  15px side / 20px bottom margins.
- **Countdown logic** — `COUNTDOWNS = [{sel:'.cd100', kind:'spans',
  cfg:{Y:0,M:0,D:35,h:18,m:0,s:0}}]`. Target =
  `new Date(Y, M-1, D, h, m, s)`; **if that is not in the future** the target
  becomes `Date.now() + D*864e5 + h*36e5`, so the demo never reads 00:00:00.
  Painting sets `.days` = full days, `.hours`/`.minutes`/`.seconds` padded via
  `('0'+n).slice(-2)`; the interval clears itself when the remaining time
  hits 0. Recreation: the same maths in React (`useEffect` + `setInterval`
  1000 ms), days unpadded, h/m/s zero-padded, cleanup on unmount.
- **Form row** — `.w-full.flex-w.flex-c-m.validate-form`; each control is
  `.where1{margin:0 5px 20px 5px}`, so the row wraps and stays centred.
- **Input pill** — `.wrap-input100{position:relative;width:500px;
  max-width:calc(100% - 10px);z-index:1}`;
  `.input100{display:block;width:100%;background:#fff;height:70px;
  border-radius:35px;padding:0 40px}` (no border, no outline — the visible
  edge is the white fill itself); text `.s2-txt2` Lato-Bold 15px/1.4
  `#846add`; placeholder `.placeholder0` `#999999` (all four vendor
  pseudo-elements in the source). Recreation: `h-[70px] w-[500px]
  max-w-[calc(100%-10px)] rounded-[35px] bg-white px-10 text-[#846add]`
  Lato-Bold 15px, `placeholder:text-[#999999]`.
- **Focus glow** — `.focus-input100` is an absolutely positioned full-size
  layer at `z-index:-1`, `border-radius:35px`, `box-shadow:0 0 0 0`,
  `color:rgba(132,106,221,0.5)` (the shadow colour is `currentColor`);
  `.input100:focus + .focus-input100` runs `anim-shadow .5s ease-in-out
  forwards` → `to{box-shadow:0 0 80px 30px; opacity:0}` — a purple halo that
  blooms outward once and fades. Recreation: a peer/state-driven layer that
  re-triggers the same keyframes on focus (Tailwind keyframes or an
  `@keyframes anim-shadow` in `index.css`), not a static ring.
- **Subscribe button** — `.size3{min-width:160px;height:70px}`;
  `.how-btn1{border-radius:35px;background-color:#846add;padding-right:20px;
  padding-left:20px}` with `:hover{background-color:#5d43b5}`; label
  `.s2-txt3` Lato-Bold 15px/1.4 white, uppercase; `.trans-04` `transition:
  all .4s`. Recreation: a purple pill, `min-w-[160px] h-[70px]
  rounded-[35px] px-5`, white uppercase Lato-Bold 15px, `#5d43b5` hover.
- **Validation bubble** — `.alert-validate::before{content:attr(data-validate);
  position:absolute; max-width:70%; background-color:#fff; border:1px solid
  #c80000; border-radius:16px; padding:5px 30px 6px 10px; top:50%;
  transform:translateY(-50%); right:12px; font-family:Lato-Bold; color:
  #c80000; font-size:15px; line-height:1.4; text-align:left; visibility:
  hidden; opacity:0; transition:opacity .4s}` shown on `:hover`, and forced
  visible inside `@media (max-width:992px)`; `::after{content:"\f06a";
  font-family:FontAwesome; color:#c80000; font-size:20px; right:18px;
  top:50%; transform:translateY(-50%)}`. So the message overlays the right
  end of the pill, vertically centred, with a small warning glyph to its
  left. Recreation: React-state error bubble inside the input wrapper at
  `right-[12px]`, white with a `1px solid #c80000` border, `rounded-[16px]`,
  Lato-Bold 15px `#c80000` text keep a lucide `AlertCircle` in place of the
  FontAwesome glyph at `right-[18px]`; visible on hover (group-hover) and
  always under `lg`; cleared on focus; the source `data-validate` copy
  ("Valid email is required: ex@abc.xyz") is paraphrased to clean text.
- **Validation logic** — `js/snippet.js` `EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`;
  non-empty required fields pass, the `email` field must match; on submit the
  failing wrapper gets `.alert-validate` and `preventDefault()` is called;
  focus removes the class. Recreation: the same rule in React state, valid
  submit accepted without navigation (prevent the default, show a quiet
  success state).
- **Fonts** — self-hosted `@font-face` woff2 in the source: `Poppins-Bold`
  (headline), `Lato-Light` (sub-line), `Lato-Regular` (countdown labels),
  `Lato-Bold` (numbers, input text, button label). Recreation: Poppins +
  Lato from Google Fonts via `<link>`; no font files copied.
- **Body/base** — source `body,html{font-family:Arial,sans-serif;font-size:
  15px;color:#666666}`, on top of a Bootstrap-4-style reboot (`#212529`
  text). The recreation inherits Tailwind 4's reset and never copies the
  reboot or the `.flex-w/.flex-c-m/.flex-col-c-m/.p-t-50/…` utility classes.
- **Attribution** — the source has none (it is a snippet); the monorepo rule
  requires a Component Dock link. Add "Made with ♥ by
  [Component Dock](https://www.componentdock.com/)" as a slim line at the
  bottom of the column (it must read fine over the dark photo).

## Tokens cheat-sheet (verified)

| Token | Value |
| --- | --- |
| brand (purple) | `#846add` |
| hover (purple) | `#5d43b5` |
| focus glow | `rgba(132,106,221,0.5)` → `0 0 80px 30px`, `.5s ease-in-out` |
| headline | `#fff` (Poppins-Bold 50px, uppercase) |
| sub-line | `#fff` (Lato-Light 25px) |
| countdown number | `#fff` (Lato-Bold 40px) |
| countdown label | `#846add` (Lato-Regular 12px uppercase) |
| input text | `#846add` (Lato-Bold 15px) |
| placeholder | `#999999` |
| button label | `#fff` (Lato-Bold 15px uppercase) |
| overlay | `rgba(0,0,0,0.8)` |
| error red | `#c80000` |
| base body text | `#666666` (reboot `#212529`) |
| fonts | Poppins-Bold + Lato-Light/Regular/Bold |
| radii | 35px (input, button), 50% (circles), 16px (bubble) |
| input pill | 500px (`max-width calc(100% - 10px)`), 70px tall, `padding 0 40px` |
| button pill | `min-width:160px`, 70px tall, `padding 0 20px` |
| countdown circle | 155px, `1px solid rgba(255,255,255,0.3)` |
| page column | `min-height:100vh`, `padding 50px 15px` |
| slideshow | fixed full viewport, 3 photos, 7 s interval, 1 s fade |
| spacing | 25px headline · 48px sub-line · 33px countdown row · 9px number · 15px/20px cells · 5px/20px form row |
| transitions | `all .4s` (button) · `opacity .5s` (glow) |

## Deviations (document in the PR)

- **Preview unreachable** (`theme/comingsoon_02/` → HTTP 404): the reference
  is the official source zip (`…/downloads/free/comingsoon_02.zip`, HTTP 200,
  647,366 B, 19 entries) + the screenshot, as noted above.
- Demo brand "Coming Soon 2" / "Coming Soon V02" is replaced; no logo exists
  in the source, so none is invented into the layout.
- Placeholder images (`picsum.photos/seed/premiere-bg-*`), lucide-react icons
  (`AlertCircle` for the FontAwesome `\f06a` glyph), Google-fonts Poppins +
  Lato — no assets, font files, or CSS copied.
- The source is a framework-free self-contained snippet (its own Bootstrap-4
  style reboot + namespaced utilities); the recreation is Tailwind 4 + React
  state. jQuery-free source JS is re-implemented in React; FontAwesome →
  lucide-react.
- Validation copy is paraphrased ("Valid email is required: ex@abc.xyz" →
  clean text), and a valid submit shows a quiet success state instead of the
  source's navigation-less no-op.
- Source README states "Free for personal and commercial use. Attribution
  appreciated, not required." — the recreation nonetheless ships the
  monorepo-mandated Component Dock attribution, and never mentions ColorLib.

## Relationship to neighbouring preps (avoid duplication)

- `debut` (prepped, ColorLib `comingsoon_01`) is the **sibling** coming-soon
  snippet: a diagonal split (white form panel left, night-photo panel right,
  2×2 countdown grid, green `#57b846` accent, three social buttons, a "CO."
  logo). Premiere shares only the genre: it is a single centred column, a
  horizontal row of four circles, pill controls, and a purple `#846add`
  accent over a cross-fading photo. The next prep in this group is
  `comingsoon_03` (TEMPLATES.md line 3034).
- `helios` / `sunflux` both prepped ColorLib `solarshift` (solar energy) —
  unrelated to this item.
