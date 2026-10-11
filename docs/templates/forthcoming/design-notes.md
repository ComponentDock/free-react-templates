# Forthcoming — design notes (replication research)

Source: ColorLib **Coming Soon V08** —
https://colorlib.com/wp/template/comingsoon_08/ (source slug `comingsoon_08`;
ColorLib page HTTP 200, 109,310 B, `text/html; charset=UTF-8`, page title
"Coming Soon V08 - Free Website Template 2026 - Colorlib", description "The best
free coming soon website template with a 100% mobile-friendly layout, featuring
a countdown timer" — verified 2026-10-11). The theme preview
`https://preview.colorlib.com/theme/comingsoon_08/` returns **HTTP 404** (9 B,
`text/plain;charset=UTF-8`, verified 2026-10-11 — the same live-preview gap as
the rest of the `comingsoon_*` family), so the live preview DOM is unreachable
for this slug. Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_08.zip`
(HTTP 200, 510,048 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-8.jpg`
(HTTP 200, 24,353 B, AVIF, 1200×972).

Reference artifacts: `/tmp/cs08/cs08.zip`, extracted to
`/tmp/cs08/ex/comingsoon_08/` (`index.html` 3,057 B · `css/style.css` 11,247 B ·
`js/snippet.js` 3,069 B · `README.md` 1,260 B · `images/bg01.jpg` 1900×900,
225,163 B · `images/icons/favicon.ico` 32,038 B · `fonts/Poppins-Regular.woff2`
48,416 B · `fonts/Poppins-Light.woff2` 48,180 B · `fonts/Poppins-Bold.woff2`
48,144 B · `fonts/PlayfairDisplay-Regular.woff2` 61,612 B ·
`fonts/PlayfairDisplay-Italic.woff2` 65,124 B ·
`fonts/fontawesome-webfont-subset.woff2` 576 B), screenshot decoded to
`/tmp/cs08/coming-soon-8.png` (1200×972, source served as AVIF, decoded with
`avifdec`), ColorLib page saved to `/tmp/cs08/src.html`. Research date:
2026-10-11.

## Visual summary (from screenshot + source)

One full-viewport screen, and the darkest slug in the `comingsoon_*` family.
Behind everything is a PHOTOGRAPH — a dark green botanical macro (1900×900,
large leaf veins filling the frame, average colour `rgb(73,104,87)`, corners as
dark as `rgb(13,24,16)`) — covered by TWO overlay layers: a 90%-opacity
`#aa076b` → `#61045f` gradient (magenta-purple at the BOTTOM, deep plum at the
TOP) and, over that, a `rgba(0,0,0,0.2)` black scrim. The result reads as a
deep purple botanical texture: the leaf veins are clearly visible, the upper
third is dark plum, the lower half warms toward magenta-purple, and the whole
screen is a fifth darker than a single-pass wash would be.

Because the wrapper is `display:flex; flex-wrap:wrap; justify-content:center;
align-items:center` at `min-height:100vh` with `padding:55px 15px`, everything
is centred on both axes in a 790px column.

Down that column, top to bottom:

1. a 60px WHITE OUTLINE gift-card glyph (a rounded card with a bow — Material's
   "card_giftcard" icon, inlined as SVG in the source), centred, 23px below it;
2. the words "COMING SOON" — an `h3` in Poppins-Bold 48px uppercase white, the
   boldest and widest type on the page, 22px below;
3. one line of white SERIF type, Playfair Display Regular 25px — "Our website is
   under construction, follow us for update now!" — 67px below it (the large
   gap that separates the head from the clock);
4. the clock, inside a thin translucent RECTANGLE with SQUARE corners
   (`2px solid rgba(255,255,255,0.35)`, `padding:42px 50px 22px`): four 100px
   units — a big THIN Poppins-Light 70px number over a small ITALIC Playfair
   label — joined by three full-size colons at the same 70px as the numbers, so
   the clock reads `35 : 17 : 59 : 57` with "Days", "Hours", "Minutes",
   "Seconds" in italic serif beneath each number. At ≤768px the box shrinks to
   `max-width:340px` with `padding-left/right:15px` and centred margins;
5. one centred row 70px below the box: a 500px PILL-shaped e-mail field with a
   2px translucent-white border, a TRANSPARENT fill (the wash shows through) and
   a white "Email Address" placeholder, plus a 160px solid-blue `#4272d7` PILL
   button reading "Notify Me" in 15px white Poppins — two pills, 50px tall, 10px
   apart.

There is NO logo or wordmark, NO social row, NO nav bar, NO footer band. The
screen's only accent colour is brand blue `#4272d7` (the button, the focus
outline, and the button's label colour on hover) — everything else is the purple
wash plus white type.

Aesthetic: dramatic and botanical rather than flat or airy — a dark leaf
photograph under a two-layer purple wash, thin white ruled geometry (the clock
box, the field border), a heavy uppercase sans headline set against fine serif
italic labels, and exactly one bright blue call to action.

## Structure order (1:1 with the source DOM)

```
div.bg-img1.overlay1.size1.flex-w.flex-c-m.p-t-55.p-b-55.p-l-15.p-r-15
   [style="background-image:url(images/bg01.jpg)"]      ← washed, padded, centred screen (min-h-screen)
└─ div.wsize1                                            ← COLUMN (790px, max-width 100%)
   ├─ p.txt-center.p-b-23
   │  └─ i.zmdi.zmdi-card-giftcard.cl0.fs-60             ← ICON (60px white outline glyph)
   ├─ h3.l1-txt1.txt-center.p-b-22                        ← HEADING ("Coming Soon", uppercase via CSS)
   ├─ p.txt-center.m2-txt1.p-b-67                         ← SUBTITLE (Playfair 25px)
   ├─ div.flex-w.flex-sa-m.cd100.bor1.p-t-42.p-b-22.p-l-50.p-r-50.respon1   ← COUNTDOWN BOX
   │  ├─ div.flex-col-c-m.wsize2.m-b-20
   │  │  ├─ span.l1-txt2.p-b-4.days      "35"
   │  │  └─ span.m2-txt2                 "Days"
   │  ├─ span.l1-txt2.p-b-22             ":"
   │  ├─ div.flex-col-c-m.wsize2.m-b-20  (.hours "17" + "Hours")
   │  ├─ span.l1-txt2.p-b-22.respon2     ":"       ← the ONLY colon hidden at ≤768px
   │  ├─ div.flex-col-c-m.wsize2.m-b-20  (.minutes "50" + "Minutes")
   │  ├─ span.l1-txt2.p-b-22             ":"
   │  └─ div.flex-col-c-m.wsize2.m-b-20  (.seconds "39" + "Seconds")
   └─ form.flex-w.flex-c-m.contact100-form.validate-form.p-t-70              ← FORM ROW
      ├─ div.wrap-input100.validate-input.where1[data-validate="Email is required: ex@abc.xyz"]
      │  ├─ input.s1-txt1.placeholder0.input100[type=text][name=email][placeholder="Email Address"]
      │  └─ span.focus-input100
      └─ button.flex-c-m.s1-txt1.size2.how-btn.trans-04.where1   "Notify Me"
```

## Tokens (verified in `css/style.css`)

| Element            | Source rule                                                | Value                                                                                                                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| screen wrapper     | `.bg-img1.size1.overlay1.flex-w.flex-c-m.p-t-55.p-b-55.p-l-15.p-r-15` | `width:100%`, `min-height:100vh`, photo `cover`/centre/no-repeat, `display:flex; flex-wrap:wrap; justify-content:center; align-items:center`, `padding:55px 15px`                                                                                  |
| wash layer         | `.overlay1::before`                                        | `background:#61045f; background:linear-gradient(bottom,#aa076b,#61045f); opacity:0.9` (legacy `bottom` ⇒ modern `to top`)                                                                                                                                    |
| scrim layer        | `.overlay1::after`                                         | `background:rgba(0,0,0,0.2)`, full-size, `z-index:-1`, painted AFTER the wash (a second darkening layer)                                                                                                                                                    |
| column             | `.wsize1`                                                  | `max-width:100%`, `width:790px`                                                                                                                                                                                                                              |
| glyph line         | `.txt-center.p-b-23`                                       | 23px below; glyph `i.zmdi.card-giftcard.cl0.fs-60` = `color:#fff`, `font-size:60px`, `.cl-icon{height:1em; width:auto; fill:currentColor; display:inline-block}`                                                                                            |
| heading            | `.l1-txt1.txt-center.p-b-22`                               | Poppins-Bold 48px, `#fff`, `line-height:1.2`, `text-transform:uppercase`, centred, 22px below                                                                                                                                                                |
| subtitle           | `.m2-txt1.txt-center.p-b-67`                               | PlayfairDisplay-Regular 25px, `#fff`, `line-height:1.2`, centred, 67px below                                                                                                                                                                                 |
| clock box          | `.flex-w.flex-sa-m.cd100.bor1.p-t-42.p-b-22.p-l-50.p-r-50` | wrap, `justify-content:space-around`, `align-items:center`; `.bor1{border:2px solid rgba(255,255,255,0.35)}`; `padding:42px 50px 22px`                                                                                                                        |
| clock box (mobile) | `.respon1` @≤768px                                         | `padding-left:15px; padding-right:15px; max-width:340px; margin:0 auto`                                                                                                                                                                                      |
| clock unit         | `.flex-col-c-m.wsize2.m-b-20`                              | column, both axes centred, `width:100px`, 20px below                                                                                                                                                                                                         |
| digit              | `.l1-txt2.p-b-4`                                           | Poppins-Light 70px, `#fff`, `line-height:1`, 4px below                                                                                                                                                                                                       |
| colon              | `.l1-txt2.p-b-22`                                          | same 70px Poppins-Light `#fff`; 22px below; the 2nd also `.respon2{display:none}` @≤768px                                                                                                                                                                    |
| label              | `.m2-txt2`                                                 | PlayfairDisplay-Italic 18px, `#fff`, `line-height:1`, sentence case (no `text-transform`)                                                                                                                                                                    |
| form row           | `.contact100-form.flex-w.flex-c-m.validate-form.p-t-70`    | `width:100%`, wrap, centred, `padding-top:70px`                                                                                                                                                                                                              |
| field well         | `.wrap-input100.validate-input.where1`                     | `width:500px`, `max-width:calc(100% - 10px)`, `position:relative`, `height:50px`, `background:transparent`, `border:2px solid rgba(255,255,255,0.5)`, `border-radius:25px`; `.where1{margin:20px 5px 0px 5px}`                                               |
| field input        | `input.input100.s1-txt1.placeholder0`                      | `display:block; width:100%; background:transparent; height:100%; padding:0 38px 0 38px`; text Poppins-Regular 15px `#fff` `line-height:1.2`; placeholder `#fff` (all 4 vendor variants)                                                                      |
| focus ring         | `.focus-input100` → `.input100:focus + .focus-input100`    | `width/height:calc(100% + 4px)`, `top:-2px; left:-2px`, `border:2px solid #4272d7`, `border-radius:25px`, `visibility:hidden; opacity:0`, `transform:scaleX(1.1) scaleY(1.2)`, `transition:all 0.4s` → visible/`opacity:1`/`scale(1)` on focus              |
| button             | `.size2.flex-c-m.s1-txt1.how-btn.trans-04.where1`          | `min-width:160px`, `height:50px`, `padding:0 20px`, `background:#4272d7`, `border-radius:25px`, label Poppins-Regular 15px `#fff`, `transition:all .4s`, `margin:20px 5px 0px 5px`                                                                          |
| button hover       | `.how-btn:hover`                                           | `background-color:#fff; color:#4272d7`                                                                                                                                                                                                                       |
| validation bubble  | `.alert-validate::before`                                  | `background:#fff`, `border:1px solid #c80000`, `border-radius:15px`, `padding:4px 25px 4px 10px`, `max-width:70%`, right 12px, `translateY(-50%)`, Poppins-Regular 14px/1.4 `#c80000`, `visibility:hidden; opacity:0; transition:opacity .4s`                |
| bubble icon        | `.alert-validate::after`                                   | `content:"\f071"` FontAwesome (warning TRIANGLE), 14px `#c80000`, right 18px ⇒ lucide `AlertTriangle`                                                                                                                                                        |
| bubble visibility  | `.alert-validate:hover:before`, `@media (max-width:992px)` | shown on hover; ALWAYS shown ≤992px; cleared on field focus                                                                                                                                                                                                  |
| base type          | `body,html`                                                | `font-family:Arial,sans-serif; font-size:15px; color:#666666; background:#fff` (all visible type is Poppins or Playfair Display)                                                                                                                            |
| fonts              | `@font-face` ×5 (+ FontAwesome subset)                     | Poppins-Light (300), Poppins-Regular (400), Poppins-Bold (700), PlayfairDisplay-Regular (400), PlayfairDisplay-Italic (italic 400) — NO Aldrich/mono face                                                                                                   |

## Behaviour (`js/snippet.js`)

1. **`.validate-form`** — on submit, the fields
   (`.validate-input .input100, .validate-input input, .validate-input textarea`)
   are each checked: `type=email` or `name=email` must match
   `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (trimmed), other fields must be non-empty.
   A failure adds `.alert-validate` to the closest `.validate-input` and calls
   `preventDefault()`. The class is removed on `focus`. There is NO success path
   (a valid submit reloads the demo page), so the React recreation shows a state
   confirmation and never navigates.
2. **Countdown** — config
   `{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}}`:
   `end = new Date(0, -1, 35, 18, 0, 0)` is always in the past, so the fallback
   `end = Date.now() + 35*864e5 + 18*36e5` runs → the demo never reads zeros.
   `paint()` writes `r.d` RAW into `.days` and `pad(r.h|m|s)` (2 digits) into
   `.hours|.minutes|.seconds`, leaving the three colon spans untouched; it runs
   once immediately, then every 1000 ms, and `clearInterval`s when the remaining
   time reaches 0. Targets already containing a `.flip-clock-wrapper` are
   skipped.

## Deviations from the reference (deliberate)

| #   | Deviation                                                                                     | Why                                                                                                                |
| --- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1   | Component Dock attribution line under the form                                                | Monorepo rule: every footer/near-footer must link https://www.componentdock.com/ (the source has no credit at all)  |
| 2   | lucide-react `Gift` (60px, white, stroke) instead of the inlined zmdi "card_giftcard" SVG      | Never copy assets; the glyph SVG is part of the source markup, and lucide has no `GiftCard` icon in this version    |
| 3   | `https://picsum.photos/seed/forthcoming-bg/1900/900` instead of `images/bg01.jpg`              | Never copy assets; deterministic placeholder at the source's 1900×900 ratio                                         |
| 4   | Google Fonts `<link>` for Poppins (300/400/700) + Playfair Display (400 + italic 400)          | Never copy font files                                                                                               |
| 5   | lucide-react `AlertTriangle` instead of the FontAwesome `\f071` glyph                          | Never copy icon fonts                                                                                               |
| 6   | React state confirmation on a valid submit                                                     | The source has no success path (it reloads the page)                                                                |
| 7   | No favicon copied; the app uses the monorepo default                                           | Never copy assets (`images/icons/favicon.ico`, 32,038 B)                                                            |

## Fidelity risks / gotchas

- **TWO overlay layers.** `.overlay1::before` (90% gradient) is not enough on its
  own: `.overlay1::after` adds `rgba(0,0,0,0.2)` ON TOP of it, both at
  `z-index:-1` under the content. Rendering only one heavier gradient gives the
  wrong tone (and the wrong contrast behind the white type).
- **Wash direction.** `linear-gradient(bottom, #aa076b, #61045f)` puts MAGENTA
  `#aa076b` at the BOTTOM; the legacy `bottom` keyword means "starting at the
  bottom" ⇒ modern `to top`. Writing `to bottom, #61045f, #aa076b` inverts the
  screen.
- **This wrapper IS padded and centred** (`padding:55px 15px` + flex both axes,
  `min-height:100vh`), unlike the V07 sibling where the padded box is a child.
- **The reference photo is GREEN, not purple** (average `rgb(73,104,87)`): all of
  the purple is the wash + scrim. When picking the picsum placeholder, the tone
  will differ — keep the wash/scrim proportions so white type stays legible.
- **The clock box has SQUARE corners** (`2px solid rgba(255,255,255,0.35)`, no
  radius) while the form pills have 25px radii — do not round the box, and do not
  square the pills.
- **The separator is a real, full-size colon** (Poppins-Light 70px, 22px below),
  not a dot, not a gap, not a divider. Exactly three of them, and only the
  SECOND carries `.respon2` ⇒ `display:none` at ≤768px.
- **Digits are Poppins-Light 70px (thin), labels are Playfair-Display ITALIC
  18px in sentence case.** No bold, no uppercase, no lining the labels up as
  small caps.
- **Days are NOT zero-padded** (`.days` gets the raw `r.d`) while
  hours/minutes/seconds are two digits. Do not "fix" it.
- **The field is a PILL with a transparent fill** (`border-radius:25px`,
  `border:2px solid rgba(255,255,255,0.5)`), the only rounded field in the
  family — and the wash shows through it, so the border must carry the shape.
- **`.where1{margin:20px 5px 0px 5px}` is on BOTH the well and the button**: the
  2×5px is the entire gap between the two pills, and the `20px` top margin is the
  gap under the clock box's own 70px padding (`p-t-70` on the form).
- **The focus state is a blue OUTLINE that scales in**, not a blurred
  box-shadow bloom: `2px solid #4272d7`, `calc(100% + 4px)` box offset `-2px`,
  `scaleX(1.1) scaleY(1.2)` → `scale(1)` over `all .4s`.
- **Button hover inverts colours** (fill → `#fff`, label → `#4272d7`) — the label
  colour must change too, or the button vanishes on hover.
- **Bubble radius is 15px with 14px type and the triangle `\f071`** — the V07
  sibling uses `rounded-none`/15px, V06 uses a 16px radius with `\f06a`
  (`AlertCircle`). Use `AlertTriangle` here.
- **No navbar/social/footer exists** in this slug — do not import the
  Navbar/Socials patterns from its siblings.
- Screenshot is AVIF — decode with `avifdec` before viewing (or use the browser).
