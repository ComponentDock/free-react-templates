# Eve — design notes (replication research)

Source: ColorLib **Coming Soon V04** —
https://colorlib.com/wp/template/comingsoon_04/ (source slug `comingsoon_04`;
ColorLib page title "Coming Soon V04 - Free Gradient Website Template 2026",
HTTP 200, 109,305 B, verified 2026-10-11). The theme preview
`https://preview.colorlib.com/theme/comingsoon_04/` returns **HTTP 404**
(9 B, `text/plain;charset=UTF-8`, verified 2026-10-11) — the live preview DOM is
unreachable for this slug, and the ColorLib page exposes only the anchor preview
`https://preview.colorlib.com/#comingsoon_04` plus the source-zip download.
Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_04.zip`
(HTTP 200, 252,580 B, `application/zip`) — the real template's own files — as
the DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-4.jpg`.
Reference artifacts: `/tmp/ref/cs04.zip`, extracted to
`/tmp/ref/cs04/comingsoon_04/` (`index.html` 3,459 B · `css/style.css`
16,469 B · `js/snippet.js` 6,189 B · `README.md` 1,260 B ·
`images/icons/favicon.ico` · `fonts/Montserrat-Regular|Light|Black|Bold.woff2` +
a FontAwesome subset), screenshot converted to `/tmp/ref/cs04shot.png`
(1200×972, source served as AVIF). Research date: 2026-10-11.

## Visual summary (from screenshot)

One full-viewport screen with **no imagery at all** — the design is a single
diagonal purple→violet gradient (deeper blue-purple at the upper-left, lighter
violet toward the lower-right). Centred in the upper-middle: a large, heavy,
all-caps white "COMING SOON"; directly under it, in a lighter and thinner
face, the line "Our website is under construction". Below that, a row of four
WHITE rounded-SQUARE tiles (squarish, radius ~18px, generous spacing, a soft
card look against the gradient) each reading a bold dark-grey number above a
tiny uppercase grey label: "35 / DAYS", "17 / HOURS", "59 / MINUTES",
"57 / SECONDS". After a noticeably wider gap, one centered pill button —
transparent with a thin white outline, white bold label "Follow us for update
now!" — i.e. an outline/ghost pill, not a filled button. At the very bottom of
the viewport, a small light-grey credit line. No nav, no images, no scrolling
sections, no footer band. Overall aesthetic: flat, vivid, gradient-driven,
typographic — the opposite of the photographic siblings in the same series.

The modal is not visible in the screenshot: it is opened by the button (source
markup carries `data-toggle="modal" data-target="#subscribe"`).

## Structure order (1:1 with the source DOM)

The reference is one screen, not a scrolling page:

1. `div.bg-g1.size1.flex-w.flex-col-c-sb.p-l-15.p-r-15.p-t-55.p-b-35.respon1` —
   the screen: `.size1{width:100%; min-height:100vh}`, `.bg-g1` = the diagonal
   gradient, `.flex-w` = `flex-wrap:wrap`, `.flex-col-c-sb` = column +
   `justify-content:space-between` + `align-items:center`, padding 55px top /
   35px bottom / 15px sides; `.respon1` → `padding-top:35px` at ≤576px.
   Children, in order:
   1. `span` (EMPTY — a flex spacer; with `space-between` it balances the
      credit line at the bottom so the middle block lands at the optical
      centre. Keep an equivalent spacer element in the recreation.)
   2. `div.flex-col-c.p-t-50.p-b-50` — the centred middle block (flex column,
      align-centre, 50px top and bottom padding):
      1. `h3.l1-txt1.txt-center.p-b-10` — "Coming Soon"
      2. `p.txt-center.l1-txt2.p-b-60` — "Our website is under construction"
      3. `div.flex-w.flex-c.cd100.p-b-82` — countdown row (wrapping, centred,
         82px bottom padding) with four `div.flex-col-c-m.size2.how-countdown`
         cells, each a `span.l1-txt3.p-b-9.days|hours|minutes|seconds`
         (DOM: 35 / 17 / 50 / 39) over a `span.s1-txt1` label (Days / Hours /
         Minutes / Seconds)
      4. `button.flex-c-m.s1-txt2.size3.how-btn[data-toggle=modal]
         [data-target="#subscribe"]` — "Follow us for update now!"
   3. `span.s1-txt3.txt-center` — the credit line (source copy
      "@ 2017 Coming Soon Template. Designed by Colorlib"; the recreation
      replaces it with the Component Dock attribution)
2. `div.cl-modal.cl-fade#subscribe[tabindex=-1][role=dialog][aria-hidden=true]`
   → `div.cl-modal-dialog[role=document][data-dismiss=modal]` →
   `div.modal-subscribe.where1-parent.bg0.bor2.size4.p-t-54.p-b-100.p-l-15
   .p-r-15`, containing:
   1. `button.btn-close-modal.how-btn2.fs-26.where1.trans-04` — an inline SVG
      "×" (`.cl-icon`) at absolute `top:-40px; right:5px`, 26px, coloured
      `rgba(255,255,255,0.5)` and warming to full white on hover over `.4s`
   2. `div.wsize1.m-lr-auto` (`max-width:390px`, auto margins):
      1. `h3.m1-txt1.txt-center.p-b-36 > span.bor1.p-b-6` — "Subscribe", the
         word underlined by `border-bottom:3px solid #3a5dff`
      2. `p.m1-txt2.txt-center.p-b-40` — "Follow us for update now!"
      3. `form.contact100-form.validate-form` — two
         `div.wrap-input100.m-b-10|m-b-20.validate-input`
         (`data-validate="Name is required"` /
         `data-validate="Email is required: ex@abc.xyz"`), each
         `input.s1-txt4.placeholder0.input100` + `span.focus-input100`; then
         `div.w-full > button.flex-c-m.s1-txt2.size5.how-btn1.trans-04` —
         "Get Updates"
      4. `p.s1-txt5.txt-center.wsize2.m-lr-auto.p-t-20` — "And don't worry, we
         hate spam too! You can unsubcribe at anytime."
3. `js/snippet.js` — three framework-free behaviours: form validation, the
   `.cd100` countdown, and the modal (details below).

## Section-by-section fidelity notes

- **Screen / gradient** — `.bg-g1` sets a solid `#7918f2` then the
  `-45deg` `#ac32e4 → #7918f2 → #4801ff` gradient; `.size1` makes the wrapper
  `width:100%; min-height:100vh`. Unlike `incoming` (`comingsoon_03`, a
  translucent card on a photo) or `premiere` (`comingsoon_02`, a photo
  slideshow), **Eve has no image layer at all** — no `picsum` background is
  needed; the gradient utility is the whole background. Recreation: one
  Tailwind arbitrary gradient on the shell (`bg-[linear-gradient(-45deg,…)]`
  plus a `bg-[#7918f2]` fallback class).
- **space-between column** — the wrapper is `.flex-col-c-sb` (column,
  `space-between`, items-centre), and the source's first child is an EMPTY
  `<span>`. With a bottom credit line, that spacer is what keeps the middle
  block optically centred rather than top-flushed. Reproduce the structure
  (spacer + mid block + attribution) instead of relying on a single
  `justify-center`.
- **Responsive padding** — `.respon1` only lifts `padding-top` to 35px at
  ≤576px; the horizontal 15px and bottom 35px stay. Note the asymmetry
  (55/35) — do not use even vertical padding.
- **Headline pair** — two different Montserrat weights carry the hierarchy:
  `.l1-txt1` Montserrat-Black 50px/1.2 white uppercase with `p-b-10`, then
  `.l1-txt2` Montserrat-Light 30px/1.2 white with a large `p-b-60` (the gap
  before the tiles). The contrast between Black-caps and Light mixed-case is
  the design's typographic signature.
- **Countdown tiles** — white, SQUARE-ish (`90×90`), radius 18px,
  `margin:0px 18px 25px 18px`, on the gradient (`.how-countdown`). Contents
  are a centred column (`.flex-col-c-m`): `span.l1-txt3.p-b-9` = Montserrat-Bold
  36px/1 `#555555` over `span.s1-txt1` = Montserrat-Regular 12px/1 uppercase
  `#7d8da6`. Contrast with siblings: `incoming` uses DARK `#333333`
  rectangles with WHITE numbers; Eve inverts that (white tiles, grey numbers).
  The row is `.flex-w.flex-c` (wrapping, centred) with `p-b-82`.
- **Outline pill button** — `.how-btn` has `background-color:transparent`,
  `border:2px solid #fff`, `border-radius:25px`, `padding:10px 20px`,
  `position:relative; z-index:1; overflow:hidden`; its `::before` is a
  full-size absolutely positioned layer at `z-index:-1` filled with the
  `45deg` gradient at `opacity:0`, fading to `1` on `.how-btn:hover`
  (`transition:all .4s`). So the ghost pill "fills" with the gradient on hover
  — must be clipped to the pill (`overflow:hidden`) and sit behind the label.
  Size comes from `.size3`: `min-width:280px; max-width:100%; min-height:50px`.
  Label `.s1-txt2` = Montserrat-Bold 15px/1.2 white.
- **Modal shell** — a hand-rolled Bootstrap lookalike:
  `.cl-modal{position:fixed; inset:0; display:none; overflow:auto}` (the
  snippet overrides to `z-index:1160`), `.cl-fade` = `opacity .15s linear`
  with `.cl-show` = `opacity:1`; `.cl-modal-dialog` is a
  `min-height:100%` flex box centring its child with `padding:50px 15px`
  (max-width 100%, margin 0 — note this differs from Bootstrap's default
  centred-top dialog); the dialog slides from `translate(0,-25%)` to
  `translate(0,0)` over `.3s ease-out`. The backdrop div is created by JS with
  `background:#000`, but the stylesheet forces
  `.cl-modal-backdrop.cl-show{opacity:0}` — **the design deliberately shows no
  dark wash**; keep a backdrop element for click-outside handling but keep it
  invisible.
- **Modal card** — `.modal-subscribe.bg0.bor2.size4` + padding
  `p-t-54.p-b-100.p-l-15.p-r-15`: white (`#fff`), radius 5px, `width:686px`
  capped at 100%, and a very tall top/bottom padding (54px / 100px) — that
  blank space is intentional. `.where1-parent` is just `position:relative` so
  the close button can sit above the card.
- **Close button** — `.where1{position:absolute; top:-40px; right:5px}` puts
  it OUTSIDE the card's top-right corner, over the gradient, in
  `rgba(255,255,255,0.5)` warming to `1` (`.how-btn2`, `.trans-04`, `.fs-26`).
  The source renders an icon-font glyph; the recreation uses its own
  lucide-react `X` with an `aria-label`.
- **Modal heading** — `.m1-txt1` Montserrat-Black 24px/1.2 `#333` uppercase
  with `p-b-36`; only the word "Subscribe" is wrapped in `.bor1`
  (`border-bottom:3px solid #3a5dff`, `p-b-6`) — a blue underline under the
  word, mirroring the action-blue accent of the button and focus ring.
- **Modal sub line** — `.m1-txt2` Montserrat-Regular 18px/1.4 `#555`,
  uppercase, `p-b-40`. Uppercase is unusual for body copy here; keep it.
- **Inputs** — `.wrap-input100` = full width, `height:50px`, white fill,
  `border:2px solid #e6e6e6`, `border-radius:25px` (pill), `position:relative`;
  `input.input100` = `height:100%; padding:0 30px`, no border/outline, and
  `.s1-txt4` = Montserrat-Bold 15px `#555` with `#999999` placeholders
  (`.placeholder0`). Spacing: Name `m-b-10`, Email `m-b-20`. Note these are
  full-width pills in the modal — unlike `incoming`'s single compact 220×40
  inline input.
- **Focus ring** — `.focus-input100` is a sibling span, `calc(100% + 4px)`
  square, offset `top/left:-2px`, `border:2px solid #3a5dff`, radius 25px,
  `pointer-events:none`, hidden with `visibility:hidden; opacity:0;
  transform:scaleX(1.1) scaleY(1.2)`; `.input100:focus + .focus-input100`
  makes it visible/opaque at `scale(1)` over `all .4s`. Recreation: same
  absolutely positioned layer driven by focus state (`peer-focus:` or a
  conditional class).
- **Modal button** — `.size5{width:100%; height:50px}` + `.how-btn1`:
  `background-color:#3a5dff`, `border-radius:25px`, `padding:0 20px`, hover
  `background-color:#333; color:#fff`, with `.trans-04`. This is the only
  filled/coloured button in the whole design (the hero button is a ghost), so
  `#3a5dff` is the modal's primary accent alongside the heading underline and
  the focus ring.
- **Small print** — `.s1-txt5` Montserrat-Regular 12px/1.667 `#999` with
  `.txt-center.wsize2.m-lr-auto.p-t-20` (`.wsize2{max-width:285px}`) — a narrow
  centred column under the button.
- **Validation** — `.validate-form` submit: e-mail must match
  `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`, other fields must be non-empty; failures
  add `.alert-validate` to the closest `.validate-input` and `preventDefault`;
  the class clears on `focus`. Bubble `.alert-validate::before`: white fill,
  `1px solid #c80000`, `border-radius:15px` (note: 15px here, not the siblings'
  2px), `padding:4px 25px 4px 10px`, `top:50%` + `translateY(-50%)`,
  `right:12px`, Montserrat-Bold 13px/1.4 `#c80000`, `transition:opacity .4s`,
  hidden by default; `::after` = FontAwesome `\f06a` 18px `#c80000` at
  `right:18px`. Visibility: hidden until an invalid submit, then revealed by
  `.alert-validate:hover:before` and ALWAYS by `@media (max-width:992px)`.
  Recreation: React state for the error, the same visibility rules in Tailwind
  (hover + a `max-[992px]` variant), and a lucide-react `AlertCircle` instead
  of the icon font.
- **Countdown behaviour** — `js/snippet.js` config
  `{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}` → `new Date(0, -1, 35, 18, 0, 0)`;
  that is in the past, so the source falls back to `Date.now() + 35 d + 18 h`,
  and the same fallback must be kept so the demo never reads `00:00:00`. Ticks
  every 1000 ms; `days` is written unpadded while hours, minutes and seconds go
  through `('0'+n).slice(-2)`; the interval clears when the remaining time hits
  zero.
- **Modal behaviour (to re-implement in React)** — open: create the backdrop,
  set `.cl-modal-open` on `<body>` (+ `padding-right` equal to the scrollbar
  gap), `aria-modal="true"`, animate `cl-show` on overlay and backdrop, focus
  the first focusable control. Close: animate out, then remove the backdrop,
  restore `aria-hidden`, clear the body class/padding, return focus to the
  opener (150 ms teardown). Triggers: close button, `[data-dismiss="modal"]`,
  click outside the dialog (but NOT inside `.modal-subscribe`), and `Escape`;
  Tab cycles inside the open dialog.
- **Base type / fonts** — `body,html{font-family:Arial,sans-serif;
  font-size:15px; color:#666666; background-color:#fff}`; the visible type is
  entirely Montserrat (self-hosted woff2 in the source: Regular / Light /
  Black / Bold). Recreation: load Montserrat 300/400/700/900 from Google Fonts
  via `<link>` in `index.html`.
- **No framework, no CDN** — the snippet has zero runtime dependencies (its
  `README.md` says so); the stylesheet even carries a `:where(html) … all:
  revert` guard so a host page's reboot cannot leak in. The recreation is
  Tailwind 4 + React state only, and never copies the reboot/guard, the class
  names, the CSS file, the woff2 fonts, the FontAwesome subset, or the favicon.

## Source → React adaptation table

| Source | Recreation |
| --- | --- |
| `.bg-g1` gradient + `.size1` screen | `bg-[linear-gradient(-45deg,#ac32e4,#7918f2,#4801ff)]` + `bg-[#7918f2]` fallback on a `min-h-screen` shell |
| `.flex-col-c-sb` + empty `span` spacer + credit `span` | flex column `justify-between items-center` with an empty spacer element and the `Attribution` line |
| `.l1-txt1` / `.l1-txt2` headline pair | `Headline.tsx` (Montserrat-Black 50px caps + Montserrat-Light 30px) |
| `.cd100` countdown spans | `Countdown.tsx` with `useEffect` `setInterval(paint, 1000)` (padded h/m/s, unpadded days, past-target fallback, cleanup) |
| `.how-countdown.size2` tiles | `Countdown` tile: `bg-white rounded-[18px] size-[90px] mx-[18px] mb-[25px]` |
| `.how-btn::before` gradient hover | absolute `-z-10` gradient overlay, `opacity-0 → 100`, `transition-opacity duration-[400ms]`, parent `overflow-hidden rounded-[25px]` |
| `data-toggle="modal"` / `#subscribe` markup | `ModalTrigger` + React-state `SubscribeModal` (portal, scroll lock, focus trap, Escape/outside close, focus restore) |
| `.cl-fade` / `.cl-show` / dialog transform | `transition-opacity duration-150` on the overlay, `-translate-y-1/4 → translate-y-0 duration-300 ease-out` on the dialog, ~150 ms teardown |
| `.modal-subscribe .size4` card | `w-[686px] max-w-full rounded-[5px] bg-white px-[15px] pt-[54px] pb-[100px]` |
| `.how-btn2.where1` close button | lucide `X` button, absolute `-top-10 right-[5px]`, 26px, `text-white/50 hover:text-white`, `aria-label` |
| `.m1-txt1 .bor1` underlined heading | Montserrat-Black 24px `#333` caps with a `border-b-[3px] border-[#3a5dff]` on the word |
| `.wrap-input100` + `.focus-input100` | `SubscribeForm` controlled inputs (`h-[50px] border-2 border-[#e6e6e6] rounded-[25px] px-[30px]`) + focus-ring layer |
| FontAwesome `\f06a` bubble icon | lucide-react `AlertCircle` (`#c80000`, 18px, right 18px) |
| `@font-face` Montserrat woff2 ×4 | Google Fonts `<link>` Montserrat 300/400/700/900 |
| Demo credit line | `Attribution` → "Made with ♥ by Component Dock" linking componentdock.com |

## What the recreation must NOT carry over

- No `colorlib` / preview URL / source-slug / demo-title strings in `apps/eve`
  (provenance lives in this doc, the spec, TEMPLATES.md, and the PR), and
  specifically NOT the source credit line "@ 2017 … Designed by Colorlib".
- No copied assets: the favicon, the four Montserrat woff2 files, and the
  FontAwesome subset are all replaced (no favicon copy, Google Fonts, lucide
  icons).
- No source class names, no `.cl-*` Bootstrap lookalike CSS, no `all: revert`
  guard — the modal is rebuilt from React state + Tailwind utilities.
- Component Dock attribution (`https://www.componentdock.com/`) replaces the
  source credit line.

## Sibling comparison (same ColorLib "Uncategorized" coming-soon family)

| Slug | New name | Background | Centre piece | Countdown | Accent |
| --- | --- | --- | --- | --- | --- |
| `comingsoon_01` | `debut` | diagonal split: white form panel + photo panel | white form panel | 2×2 grid | green `#57b846` |
| `comingsoon_02` | `premiere` | cross-fading photo slideshow | four 155px translucent circles, pill controls | circles | `#846add` |
| `comingsoon_03` | `incoming` | single light photo under an `880px` translucent white card | frosted card | four dark `90×100` rectangles | `#846add` |
| `comingsoon_04` | **`eve`** | **pure `-45deg` gradient, no imagery** | **white caps headline over the gradient** | **four white `90×90` rounded squares** | **gradient `#ac32e4→#7918f2→#4801ff` + `#3a5dff`** |

Eve is the only one of the four with (a) no photographic layer, (b) an
outline/ghost hero button whose hover fills with the gradient, and (c) a
subscribe modal with two validated fields.
