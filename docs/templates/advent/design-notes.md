# Advent — design notes (replication research)

Source: ColorLib **Coming Soon V05** —
https://colorlib.com/wp/template/comingsoon_05/ (source slug `comingsoon_05`;
ColorLib page title "Coming Soon V05 - Free Website Template 2026", HTTP 200,
109,324 B, verified 2026-10-11). The theme preview
`https://preview.colorlib.com/theme/comingsoon_05/` returns **HTTP 404**
(9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — as do the
`comingsoon05`, `comingsoon-05`, `comingsoon5` and `comingsoon/05` variants), so
the live preview DOM is unreachable for this slug. Replication therefore used
the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_05.zip`
(HTTP 200, 254,330 B, `application/zip`) — the real template's own files — as
the DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-5.jpg`.
Reference artifacts: `/tmp/cs05/cs05.zip`, extracted to
`/tmp/cs05/comingsoon_05/` (`index.html` 2,068 B · `css/style.css` 10,652 B ·
`js/snippet.js` 3,069 B · `README.md` 1,260 B · `images/icons/favicon.ico` ·
`fonts/Ubuntu-Regular.woff2` + `fonts/Ubuntu-Bold.woff2` + a FontAwesome
subset), screenshot converted to `/tmp/coming-soon-5.png` (1200×972, source
served as AVIF, decoded with `avifdec`). Research date: 2026-10-11.

## Visual summary (from screenshot)

One full-viewport screen with **no imagery at all** — the design is a single
vertical gradient that is PINK at the top and CORAL/salmon at the bottom
(source declares `linear-gradient(bottom, #f77062, #fe5196)`, i.e. coral
`#f77062` starting at the bottom and pink `#fe5196` arriving at the top).

Pinned FLUSH to the very top edge of the viewport — no gap, square top corners —
sits a single white rounded bar split into four cells by faint vertical
hairlines, each reading a bold dark-grey number above a tiny uppercase grey-blue
label: "35 / DAYS", "17 / HOURS", "59 / MINUTES", "57 / SECONDS". Below it is a
large empty band of gradient, then, centred: a large heavy all-caps white
"COMING SOON" headline; directly under it, in a thinner lighter face, the
two-line line "Our website is under construction, follow us for update now!".
Then one centred inline row of three pills of equal size — two WHITE rounded
inputs with grey placeholders ("Name", "Email") and a DARK near-black rounded
button reading a bold white "Get Updates". At the very bottom of the viewport, a
small white credit line. No nav, no images, no scrolling sections, no footer
band. Overall aesthetic: flat, vivid, warm-pink gradient with a light "app
dashboard" accent — the countdown bar and the form pills are the only chrome.

There is NO modal and no overlays in this design; everything is on the one
screen.

## Structure order (1:1 with the source DOM)

The reference is one screen, not a scrolling page:

1. `div.bg-g1.size1.flex-w.flex-col-c-sb.p-l-15.p-r-15.p-b-30` — the screen:
   `.size1{width:100%; min-height:100vh}`, `.bg-g1` = the brand wash,
   `.flex-w` = `flex-wrap:wrap`, `.flex-col-c-sb` = column +
   `justify-content:space-between` + `align-items:center`, padding 15px left /
   15px right / 30px bottom and **NO top padding** (so the countdown bar touches
   the viewport edge). Children, in order:
   1. `div.flex-w.flex-c.cd100.wsize1.bor1` — the countdown BAR (wrapping,
      centre-justified, `.wsize1{max-width:100%; width:360px}`,
      `.bor1{border-bottom-right-radius:15px; border-bottom-left-radius:15px;
      overflow:hidden}`) with four `div.flex-col-c-m.size2.bg0` cells — the
      first three also `.bor2` (a 1px `#e6e6e6` right border), the fourth
      deliberately without — each cell a
      `span.l1-txt3.p-b-7.days|hours|minutes|seconds` (DOM: 35 / 17 / 50 / 39)
      over a `span.s1-txt1` label (Days / Hours / Minutes / Seconds)
   2. `div.flex-col-c.w-full.p-t-50.p-b-80` — the centred middle block (flex
      column, align-centre, `width:100%`, 50px top and 80px bottom padding):
      1. `h3.l1-txt1.txt-center.p-b-10` — "Coming Soon"
      2. `p.txt-center.l1-txt2.p-b-43.wsize2` — "Our website is under
         construction, follow us for update now!"
      3. `form.flex-w.flex-c-m.w-full.contact100-form.validate-form` — the
         inline row (wrapping, centre-justified AND centre-aligned, `width:100%`):
         1. `div.wrap-input100.validate-input.where1[data-validate="Name is
            required"] > input.s1-txt3.placeholder0.input100[type=text]
            [name=name][placeholder=Name]`
         2. `div.wrap-input100.validate-input.where1[data-validate="Email is
            required: ex@abc.xyz"] > input.s1-txt3.placeholder0.input100
            [type=text][name=email][placeholder=Email]`
         3. `button.flex-c-m.s1-txt4.size3.how-btn.trans-04.where1` —
            "Get Updates"
   3. `span.s1-txt2.txt-center` — the credit line (source copy "@ 2017 Coming
      Soon Template. Designed by Colorlib"; the recreation replaces it with the
      Component Dock attribution)

Note on `space-between`: with the countdown bar first and the credit line last,
the flex column distributes the free space so the bar pins to the top and the
credit sits 30px above the bottom, leaving the middle block in the optical
centre. There is NO spacer span in this template (unlike sibling `eve`).

## Section-by-section fidelity notes

### 1. Screen wrapper

- `width:100%; min-height:100vh`; `padding:0 15px 30px` (15px sides, 30px
  bottom, NO top padding — the bar must be flush); `display:flex`,
  `flex-wrap:wrap`, `flex-direction:column`, `align-items:center`,
  `justify-content:space-between`.
- Background: `background:#fb5f7e;` then
  `background:linear-gradient(bottom, #f77062, #fe5196)`. The legacy
  `bottom` direction keyword is not valid modern CSS (it would need `to top`),
  so implementations must translate the intent — coral `#f77062` at the bottom,
  pink `#fe5196` at the top, which is exactly what the screenshot shows. Use
  `linear-gradient(to top, #f77062, #fe5196)` with `#fb5f7e` as the solid
  fallback layer underneath.
- No `@media` override of the wrapper padding in this sheet (unlike `eve`,
  which drops its top padding at ≤576px).

### 2. Countdown bar

- ONE bar, not four detached tiles: `width:360px; max-width:100%`, wrapping
  (`flex-wrap:wrap`) and centre-justified, bottom corners rounded 15px with
  `overflow:hidden` so the white fill is clipped to those corners; the top
  corners are square because the bar meets the viewport edge.
- Cells: `width:calc((100% - 3px) / 4)` — that `- 3px` accounts for the three
  1px dividers — and `height:92px`, `background:#fff`, centred on both axes
  (`flex-col-c-m`), with `border-right:1px solid #e6e6e6` on the FIRST THREE
  cells only (source: the fourth cell's class list omits `.bor2`).
- Number: `.l1-txt3{font-family:Ubuntu-Bold; font-size:36px; color:#555555;
  line-height:1}` with `.p-b-7`. Label: `.s1-txt1{font-family:Ubuntu-Regular;
  font-size:12px; color:#7d8da6; line-height:1; text-transform:uppercase}`.
- The bar is narrow (360px) relative to the viewport, so at desktop widths it
  reads as a card pinned to the top centre; below 360px + padding the cells keep
  wrapping inside the bar's own max-width.

### 3. Middle block

- `flex-direction:column`, `align-items:center`, `width:100%`,
  `padding:50px 0 80px`. Order: headline → sub line → form.
- Headline `.l1-txt1{font-family:Ubuntu-Bold; font-size:60px; color:#fff;
  line-height:1.2; text-transform:uppercase}` + `.txt-center.p-b-10`.
- Sub line `.l1-txt2{font-family:Ubuntu-Regular; font-size:24px; color:#fff;
  line-height:1.5}` + `.txt-center.p-b-43` + `.wsize2{max-width:526px}`.

### 4. Inline form

- Row: `display:flex; flex-wrap:wrap; justify-content:center;
  align-items:center; width:100%`. Each of the three controls carries
  `.where1{margin:0 10px 20px 10px}`, so on a wide screen they sit on one line
  with 20px below them; on narrow screens they wrap into their own lines.
- Input well `.wrap-input100{width:280px; max-width:calc(100% - 20px);
  height:50px; background:#fff; border-radius:25px}` +
  `.validate-input{position:relative}` (the positioner exists for the
  validation bubble). The field `.input100{display:block; width:100%;
  height:100%; padding:0 20px 0 30px; border-radius:25px; transition:all .4s}`
  — note the ASYMMETRIC padding (30px on the left, 20px on the right, leaving
  room for the validation warning icon).
- Field text `.s1-txt3{font-family:Ubuntu-Bold; font-size:15px; color:#555555;
  line-height:1.4}`; placeholder `#999999` (`.placeholder0`). Inputs are reset
  in the sheet (`display:block; outline:none; border:none`).
- Focus bloom: `.input100:focus{box-shadow:0 0px 10px 1px rgba(255,255,255,0.5)}`
  — a white glow on the white pill, visible only over the pink gradient.
- Button: `.size3{width:280px; max-width:calc(100% - 20px); height:50px}` +
  `.how-btn{padding:0px 20px; background-color:#222222; border-radius:25px;
  color:#fff; position:relative; z-index:1; overflow:hidden}`. Its `::before`
  overlay is `#fb2e57` then
  `linear-gradient(top, #f65342, #fb3282)`, absolutely filling the pill at
  `z-index:-1`, `transition:all .4s; opacity:0`; on hover the base goes
  `background-color:transparent` and `:before{opacity:1}`, so the button turns
  into a coral→magenta gradient. Use `linear-gradient(to bottom, #f65342,
  #fb3282)` for the modern equivalent of the legacy `top` keyword. Label
  `.s1-txt4{font-family:Ubuntu-Bold; font-size:15px; color:#fff;
  line-height:1.4}`. `.trans-04` = `transition:all .4s`.

### 5. Validation (name + e-mail)

- `.alert-validate::before` — a white bubble at `right:12px`, vertically
  centred, carrying `content:attr(data-validate)` (the message lives in the
  `data-validate` attribute: "Name is required" /
  "Email is required: ex@abc.xyz"), `max-width:70%`,
  `background-color:#fff`, `border:1px solid #c80000`, `border-radius:15px`,
  `padding:4px 25px 4px 10px`, `pointer-events:none`,
  `font-family:Ubuntu-Regular; color:#c80000; font-size:13px; line-height:1.4;
  text-align:left`, `visibility:hidden; opacity:0`, `transition:opacity .4s`.
- `.alert-validate::after` — an icon at `right:18px`, vertically centred,
  `content:"\f071"` in FontAwesome at 14px `#c80000`. `\f071` is FontAwesome's
  exclamation-triangle — the recreation uses lucide-react `AlertTriangle`, never
  the icon font.
- Visibility: hidden until an invalid submit adds `.alert-validate`; then shown
  on `.alert-validate:hover:before`; and ALWAYS shown inside
  `@media (max-width:992px)`. The class is removed on field `focus`.
- Submit rule (source `js/snippet.js`): for every field in `.validate-form`,
  e-mail fields (`input.type === 'email'` **or** `input.name === 'email'`) must
  match `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`, all others must be non-empty;
  failures add `.alert-validate` to the closest `.validate-input` and
  `preventDefault()`. The source e-mail field is `type=text` and is caught by
  the name check — the recreation may use `type="email"` for accessibility but
  must keep the same regex and the same two messages.
- **There is no success path in the source**: a valid submit simply reloads the
  demo page. The recreation must therefore show its own confirmation in React
  state and not navigate (documented deviation).

### 6. Countdown behaviour (source `js/snippet.js`)

- Config: `[{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":18,
  "m":0,"s":0}}]`. Target = `new Date(0, -1, 35, 18, 0, 0)` → year 1900, i.e.
  always in the past, so the source falls back to
  `Date.now() + D*864e5 + h*36e5` = **now + 35 days + 18 hours**. The demo must
  never read `00:00:00`; the recreation keeps this fallback rule.
- Tick: `setInterval(paint, 1000)`, `paint()` called once immediately.
- Formatting: `set('days', r.d)` (UNPADDED), `set('hours', pad(r.h))`,
  `set('minutes', pad(r.m))`, `set('seconds', pad(r.s))` where
  `pad = n => ('0'+n).slice(-2)`. The initial DOM values are 35 / 17 / 50 / 39.
- The interval is cleared when the remaining time reaches zero; the recreation
  must also clear it on unmount.

### 7. Credit line

- `span.s1-txt2.txt-center` — `.s1-txt2{font-family:Ubuntu-Regular;
  font-size:14px; color:#fff; line-height:1.5}`, centred. Source copy is
  "@ 2017 Coming Soon Template. Designed by Colorlib" — replaced entirely by the
  Component Dock attribution in the recreation.

## Source → React adaptation table

| Source | Recreation |
| --- | --- |
| `.bg-g1` legacy `linear-gradient(bottom, #f77062, #fe5196)` | Tailwind arbitrary `bg-[linear-gradient(to_top,#f77062,#fe5196)]` over `bg-[#fb5f7e]` |
| `.size1` (`min-height:100vh`) | `min-h-screen` |
| `.flex-col-c-sb` + zero top padding | `flex flex-wrap flex-col items-center justify-between px-[15px] pb-[30px]` |
| `.cd100.wsize1.bor1` bar | `w-[360px] max-w-full rounded-b-[15px] overflow-hidden flex flex-wrap justify-center` |
| `.size2.bg0` cells (3× `.bor2`) | `w-[calc((100%-3px)/4)] h-[92px] bg-white`; `border-r border-[#e6e6e6]` on `[0..2]`, none on index 3 |
| `.l1-txt3.p-b-7` / `.s1-txt1` | `font-[Ubuntu] font-bold text-[36px] leading-none text-[#555555] pb-[7px]` / `text-[12px] leading-none uppercase text-[#7d8da6]` |
| `.l1-txt1.txt-center.p-b-10` | `font-[Ubuntu] font-bold text-[60px] leading-[1.2] uppercase text-white text-center pb-[10px]` |
| `.l1-txt2` + `.wsize2` + `.p-b-43` | `text-[24px] leading-[1.5] text-white text-center max-w-[526px] pb-[43px]` |
| `.flex-w.flex-c-m.w-full` form row + `.where1` | `flex flex-wrap justify-center items-center w-full` + `mx-[10px] mb-[20px]` per control |
| `.wrap-input100` / `.input100` | well `w-[280px] max-w-[calc(100%-20px)] h-[50px] bg-white rounded-[25px] relative`; field `w-full h-full pl-[30px] pr-[20px] rounded-[25px] transition-all duration-[400ms]` |
| `.input100:focus` bloom | `focus:shadow-[0_0_10px_1px_rgba(255,255,255,0.5)]` |
| `.size3.how-btn` + `::before` overlay | `w-[280px] max-w-[calc(100%-20px)] h-[50px] px-5 bg-[#222222] rounded-[25px] overflow-hidden relative group` + absolute overlay `bg-[linear-gradient(to_bottom,#f65342,#fb3282)] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] z-[-1]`, base `group-hover:bg-transparent` |
| `.alert-validate::before` bubble | React-state absolute bubble (`1px solid #c80000`, `rounded-[15px]`, `py-[4px] pl-[10px] pr-[25px]`, `right:12px`, `max-w-[70%]`, 13px/1.4 `#c80000`), hidden until an invalid submit, then hover-shown and always ≤992px |
| `.alert-validate::after` FontAwesome `\f071` | lucide-react `AlertTriangle` 14px `#c80000` at `right:18px` |
| jQuery-free `.validate-form` submit handler | React `onSubmit` with the same regex, non-empty rules, two messages, `preventDefault`, plus a React-state confirmation |
| `setInterval` countdown on `.cd100` | `useEffect` + `setInterval(…, 1000)` with the same target, the same past-target fallback, the same padding rules, cleared on unmount |
| `body,html{font-family:Arial…}` base | Tailwind base + Ubuntu from Google Fonts; no Arial fallback styling is copied |
| source `@font-face` woff2 (Ubuntu-Regular / Bold) + FontAwesome subset | Google Fonts `<link>` for Ubuntu 400/700; lucide icons instead of the icon font |
| demo credit "…Designed by Colorlib" | "Made with ♥ by Component Dock" → `https://www.componentdock.com/` |

## What the recreation must NOT carry over

- The `:where(html) … { all: revert }` framework-neutralising guard and the
  whole Bootstrap-4 reboot block at the top of `css/style.css`.
- Any source class name (`.bg-g1`, `.size1`, `.size2`, `.bor1`, `.bor2`,
  `.cd100`, `.wsize1`, `.wsize2`, `.l1-txt1..3`, `.s1-txt1..4`, `.where1`,
  `.how-btn`, `.wrap-input100`, `.input100`, `.placeholder0`, `.alert-validate`,
  `.trans-04`, `.flex-*`), the `data-validate` attribute mechanism, and the
  `js/snippet.js` file itself.
- The self-hosted `Ubuntu-Regular.woff2` / `Ubuntu-Bold.woff2` /
  `fontawesome-webfont-subset.woff2` files and the `favicon.ico`.
- Every `colorlib` / "Colorlib" / "Coming Soon 5" / "Coming Soon V05" /
  `comingsoon_05` string in `apps/advent`, including comments.
- The source credit line and the `type=text` e-mail field (use
  `type="email"`; keep the same regex and messages).

## Sibling comparison (ColorLib "Uncategorized" coming-soon family)

| Template | New name | Preview slug | Design |
| --- | --- | --- | --- |
| Coming Soon 1 | `debut` | `comingsoon_01` | diagonal split: white form panel + photo panel, 2×2 countdown, green `#57b846` accent |
| Coming Soon 2 | `premiere` | `comingsoon_02` | single centred column over a cross-fading photo slideshow, four 155px translucent circles, pill controls, `#846add` |
| Coming Soon 3 | `incoming` | `comingsoon_03` | translucent white card on a light photo, four dark rectangular tiles |
| Coming Soon 4 | `eve` | `comingsoon_04` | purple→violet diagonal gradient, four white rounded-SQUARE tiles, one outlined ghost pill opening a subscribe modal |
| **Coming Soon 5** | **`advent`** | **`comingsoon_05`** | **pink→coral vertical gradient, ONE white countdown BAR pinned flush to the top edge, inline Name/Email/button row, NO modal** |

Advent is the only member of the family with (a) a top-pinned countdown bar
rather than detached tiles, (b) a warm pink/coral (not purple) wash, (c) an
inline dark submit button, and (d) no overlay of any kind.
