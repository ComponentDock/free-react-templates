# Imminent — design notes (replication research)

Source: ColorLib **Coming Soon V07** —
https://colorlib.com/wp/template/comingsoon_07/ (source slug `comingsoon_07`;
ColorLib page HTTP 200, 109,360 B, verified 2026-10-11). The theme preview
`https://preview.colorlib.com/theme/comingsoon_07/` returns **HTTP 404** (9 B,
`text/plain;charset=UTF-8`, verified 2026-10-11 — the same live-preview gap as the
rest of the `comingsoon_*` family), so the live preview DOM is unreachable for
this slug. Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_07.zip`
(HTTP 200, 295,754 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-7.jpg`
(HTTP 200, 22,560 B, AVIF, 1200×972).

Reference artifacts: `/tmp/cs07.zip`, extracted to
`/tmp/cs07/ex/comingsoon_07/` (`index.html` 4,962 B · `css/style.css` 11,990 B ·
`js/snippet.js` 3,069 B · `README.md` 1,260 B · `images/bg01.jpg` 1900×900,
185,088 B · `images/icons/logo.png` 91×29, 1,639 B · `images/icons/favicon.ico`
32,038 B · `fonts/Poppins-Regular.woff2` 48,416 B · `fonts/Poppins-Bold.woff2`
48,144 B · `fonts/fontawesome-webfont-subset.woff2` 576 B), screenshot decoded to
`/tmp/coming-soon-7.png` (1200×972, source served as AVIF, decoded with
`avifdec`). Research date: 2026-10-11.

## Visual summary (from screenshot + source)

One full-viewport screen. Behind everything is a PHOTOGRAPH — a softly blurred
office / co-working interior (desks, glass partitions, hanging pendant lights,
1900×900) — covered by a strong two-stop gradient overlay at 90% opacity:
violet-blue `#7579ff` at the TOP edge easing to saturated magenta-purple
`#b224ef` at the BOTTOM. The blur means the photo reads as texture: you are
aware of a bright interior behind the wash, but nothing in it competes with the
type. This is the family's only magenta/purple screen (the series' earlier
balloon-photo slug is blue→green).

In the top-left corner sits a small white wordmark (the source uses a 91×29 PNG
reading "UNO." with a full stop); in the top-right, three ROUND WHITE SOCIAL
DISCS (facebook, twitter, youtube) — 36×36, solid white fill, 50% radius, small
grey glyphs — the only filled social buttons in the family, which elsewhere uses
square outlined buttons.

Centred in the upper-middle of the screen, on a 700px column: a single 36px
white sentence, "Our website is **Coming Soon**, follow us for update now!",
where only the words "Coming Soon" are bold — the line is one paragraph, not an
eyebrow plus a headline. Directly beneath it, one centred row: a white,
SQUARE-cornered e-mail field reading "Email Address" (490px) flush against a
green "Subscribe" button (min 170px) — both 50px tall, no gap, no radius. Under
that, a small pale-grey two-line note: "And don't worry, we hate spam too! You
can unsubcribe at anytime."

In the lower third, after a large 116px gap, four thin white circles (155px,
1px `rgba(255,255,255,0.3)` outlines) sit evenly spaced in a row, each holding a
BIG white number (Poppins-Bold 40px) over a small white word (Poppins-Regular
12px): "35 Days", "17 Hours", "59 Minutes", "57 Seconds". These are rings, not
cards — there is no fill, no flip, no colon, no dots.

Overall aesthetic: photographic and soft rather than flat — a blurred interior
under a magenta→indigo wash, white type throughout, exactly one saturated accent
(the green Subscribe button, which is also the social hover and — unusually — the
colour of TEXT TYPED INTO THE E-MAIL FIELD). No nav bar, no scrolling sections,
no footer band.

## Structure order (1:1 with the source DOM)

```
div.bg-img1.size1.overlay1               [style="background-image:url(images/bg01.jpg)"]
└─ div.size1.p-l-15.p-r-15.p-t-30.p-b-50            ← padded screen box (min-h-screen)
   ├─ div.flex-w.flex-sb-m.p-l-75.p-r-60.p-b-165.respon1     ← TOP BAR
   │  ├─ div.wrappic1.m-r-30.m-t-10.m-b-10 > a[href="#"] > img(logo)
   │  └─ div.flex-w.m-t-10.m-b-10
   │     ├─ a.size4.flex-c-m.how-social.trans-04.m-r-5.m-b-3.m-t-3 > i.fa-facebook
   │     ├─ a.size4.flex-c-m.how-social.trans-04.m-r-5.m-b-3.m-t-3 > i.fa-twitter
   │     └─ a.size4.flex-c-m.how-social.trans-04.m-r-5.m-b-3.m-t-3 > i.fa-youtube-play
   ├─ div.wsize1.m-lr-auto                            ← CONTENT COLUMN (700px, centred)
   │  ├─ p.txt-center.l1-txt1.p-b-60
   │  │     "Our website is " + span.l1-txt2("Coming Soon") + ", follow us for update now!"
   │  ├─ form.w-full.flex-w.flex-c-m.validate-form
   │  │  ├─ div.wrap-input100.validate-input.m-b-20[data-validate="Valid email is required: ex@abc.xyz"]
   │  │  │  ├─ input.input100.placeholder0.m1-txt1[type=text][name=email][placeholder="Email Address"]
   │  │  │  └─ span.focus-input100
   │  │  └─ button.flex-c-m.size3.m1-txt2.how-btn1.trans-04.m-b-20   "Subscribe"
   │  └─ p.txt-center.s1-txt1.p-t-5                  ← spam note
   └─ div.flex-w.flex-c-m.cd100.wsize1.m-lr-auto.p-t-116     ← COUNTDOWN
      ├─ div.flex-col-c-m.size2.bor1.m-l-10.m-r-10.m-b-15
      │  ├─ span.l1-txt3.p-b-9.days        "35"        → .hours "17"
      │  └─ span.s1-txt2                   "Days"      → "Hours"
      ├─ …hours ring  (span.l1-txt3.p-b-9.hours + span.s1-txt2 "Hours")
      ├─ …minutes ring (span.l1-txt3.p-b-9.minutes + span.s1-txt2 "Minutes")
      └─ …seconds ring (span.l1-txt3.p-b-9.seconds + span.s1-txt2 "Seconds")
```

## Tokens (verified in `css/style.css`)

| Element           | Source rule                                                | Value                                                                                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| washed wrapper    | `.bg-img1.size1.overlay1`                                  | `width:100%`, `min-height:100vh`, photo `cover`/centre/no-repeat, NO padding                                                                                                                                                                 |
| wash layer        | `.overlay1::before`                                        | `background:#7579ff; background:linear-gradient(bottom,#b224ef,#7579ff); opacity:0.9` (legacy `bottom` ⇒ modern `to top`)                                                                                                                    |
| padded box        | `.size1.p-l-15.p-r-15.p-t-30.p-b-50`                       | `min-height:100vh`, `padding:30px 15px 50px`                                                                                                                                                                                                 |
| top bar           | `.flex-w.flex-sb-m.p-l-75.p-r-60.p-b-165`                  | wrap, space-between, items-centre, `padding:0 60px 165px 75px`                                                                                                                                                                               |
| top bar (mobile)  | `.respon1` @≤576px                                         | `padding: 0 0px 65px 5px`                                                                                                                                                                                                                    |
| wordmark wrapper  | `.wrappic1.m-r-30.m-t-10.m-b-10`                           | `display:block; flex-grow:1; margin-right:30px`; `img{max-width:100%}`                                                                                                                                                                       |
| social button     | `.size4.flex-c-m.how-social.trans-04.m-r-5.m-b-3.m-t-3`    | `36×36`, `background:#fff`, `border-radius:50%`, icon `#999999` 18px, `transition:all .4s`                                                                                                                                                   |
| social hover      | `.how-social:hover`                                        | `background:#57b846; color:#fff`                                                                                                                                                                                                             |
| content column    | `.wsize1.m-lr-auto`                                        | `max-width:700px`, `margin-left/right:auto`                                                                                                                                                                                                  |
| copy line         | `.l1-txt1.txt-center.p-b-60`                               | Poppins-Regular 36px, `#fff`, `line-height:1.333333`, 60px below                                                                                                                                                                             |
| bold run          | `.l1-txt2` (inline span)                                   | Poppins-Bold 36px, `#fff`, `line-height:1.333333`                                                                                                                                                                                            |
| form row          | `.w-full.flex-w.flex-c-m.validate-form`                    | 100% wide, wrap, centred                                                                                                                                                                                                                     |
| field well        | `.wrap-input100.validate-input.m-b-20`                     | `position:relative`, `width:490px`, `max-width:100%`, 20px below                                                                                                                                                                             |
| e-mail field      | `.input100.placeholder0.m1-txt1`                           | `background:#fff`, `height:50px`, `padding:0 25px`, NO radius; text Poppins-Regular 16px `#57b846`; placeholder `#999999`                                                                                                                    |
| focus ring        | `.focus-input100` + `#anim-shadow`                         | absolute full-size, `color:rgba(87,184,70,0.6)`, `.5s ease-in-out` → `box-shadow:0 0 80px 30px; opacity:0`                                                                                                                                   |
| subscribe button  | `.size3.flex-c-m.m1-txt2.how-btn1.trans-04.m-b-20`         | `min-width:170px`, `height:50px`, `padding:0 20px`, `background:#57b846`, Poppins-Regular 16px `#fff`, `transition:all .4s`                                                                                                                  |
| button hover      | `.how-btn1:hover` + `.how-btn1::before`                    | fill → `transparent`; overlay `linear-gradient(top,#b224ef,#7579ff)` (⇒ `to bottom`) at `opacity:0 → 1` over `.4s`                                                                                                                           |
| spam note         | `.s1-txt1.txt-center.p-t-5`                                | Poppins-Regular 12px, `#e5e5e5`, `line-height:1.333333`, 5px above                                                                                                                                                                           |
| countdown row     | `.flex-w.flex-c-m.cd100.wsize1.m-lr-auto.p-t-116`          | wrap, centred, 700px, `padding-top:116px`                                                                                                                                                                                                    |
| countdown ring    | `.flex-col-c-m.size2.bor1.m-l-10.m-r-10.m-b-15`            | `155×155`, `border:1px solid rgba(255,255,255,0.3)`, `border-radius:50%`, column centred, 10px sides / 15px bottom                                                                                                                           |
| digit             | `.l1-txt3.p-b-9`                                           | Poppins-Bold 40px, `#fff`, `line-height:1`, 9px below                                                                                                                                                                                        |
| label             | `.s1-txt2`                                                 | Poppins-Regular 12px, `#fff`, `line-height:1`                                                                                                                                                                                                |
| validation bubble | `.alert-validate::before`                                  | `background:#fff`, `border:1px solid #c80000`, `border-radius:0px`, `padding:5px 30px 6px 10px`, `max-width:70%`, right 12px, `translateY(-50%)`, Poppins-Regular 15px/1.4 `#c80000`, `visibility:hidden; opacity:0; transition:opacity .4s` |
| bubble icon       | `.alert-validate::after`                                   | `content:"\f071"` FontAwesome (warning TRIANGLE), 16px `#c80000`, right 18px ⇒ lucide `AlertTriangle`                                                                                                                                        |
| bubble visibility | `.alert-validate:hover:before`, `@media (max-width:992px)` | shown on hover; ALWAYS shown ≤992px; cleared on field focus                                                                                                                                                                                  |
| base type         | `body,html`                                                | `font-family:Arial,sans-serif; font-size:15px; color:#666666; background:#fff` (all visible type is Poppins)                                                                                                                                 |
| fonts             | `@font-face` ×2                                            | Poppins-Regular (400), Poppins-Bold (700) — NO Aldrich/mono in this slug                                                                                                                                                                     |

## Behaviour (`js/snippet.js`)

1. **`.validate-form`** — on submit, each field is checked: `type=email` or
   `name=email` must match `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (trimmed), other
   fields must be non-empty. A failure adds `.alert-validate` to the closest
   `.validate-input` and calls `preventDefault()`. The class is removed on
   `focus`. There is NO success path (a valid submit reloads the demo page), so
   the React recreation shows a state confirmation and never navigates.
2. **Countdown** — config
   `{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}}`:
   `end = new Date(0, -1, 35, 18, 0, 0)` is always in the past, so the fallback
   `end = Date.now() + 35*864e5 + 18*36e5` runs → the demo never reads zeros.
   `paint()` writes `r.d` RAW into `.days` and `pad(r.h|m|s)` (2 digits) into
   `.hours|.minutes|.seconds`; it runs once immediately, then every 1000 ms, and
   `clearInterval`s when the remaining time reaches 0. Targets already
   containing a `.flip-clock-wrapper` are skipped.

## Deviations from the reference (deliberate)

| #   | Deviation                                                                      | Why                                                                                                                |
| --- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 1   | Component Dock attribution line under the spam note                            | Monorepo rule: every footer/near-footer must link https://www.componentdock.com/ (the source has no credit at all) |
| 2   | Original text wordmark instead of `images/icons/logo.png` ("UNO.")             | Never copy assets; the name is different anyway                                                                    |
| 3   | `https://picsum.photos/seed/imminent-bg/1900/900` instead of `images/bg01.jpg` | Never copy assets; deterministic placeholder at the source's 1900×900 ratio                                        |
| 4   | Google Fonts `<link>` for Poppins instead of the bundled woff2 files           | Never copy font files                                                                                              |
| 5   | lucide-react `AlertTriangle` instead of the FontAwesome `\f071` glyph          | Never copy icon fonts                                                                                              |
| 6   | React state confirmation on a valid submit                                     | The source has no success path (it reloads the page)                                                               |

## Fidelity risks / gotchas

- **The wash wrapper has NO padding** — unlike the series' earlier balloon-photo
  slug (which carries `p-t-24` on the washed wrapper). Here the padded,
  `min-h-screen` box is the
  FIRST CHILD. Getting this wrong shifts every vertical gap on the screen.
- **Wash direction is inverted vs its sibling**: `linear-gradient(bottom,
#b224ef, #7579ff)` = `#b224ef` at the BOTTOM. Do not write
  `to bottom, #7579ff, #b224ef`; the screenshot's magenta is at the bottom.
- **The form is ONE row of a 490px field + a 170px button**, both 50px, no gap,
  no radius, centred — NOT a full-width stacked form. The button's own
  `min-width:170px` is what gives it its width.
- **The field's typed text is brand green `#57b846`** (`.m1-txt1`), not grey —
  easy to miss on the screenshot because the field is empty there.
- **Days are NOT zero-padded** in this slug (`.days` gets the raw `r.d`), while
  hours/minutes/seconds are. Do not "fix" it to two digits.
- **The countdown is rings, not cards/clocks**: no fill, no colon, no flip, no
  dots, no split-flap animation to mimic — only the numbers change.
- **Bubble radius is 0px and the glyph is a triangle (`\f071`)** — the sibling
  slug uses a 16px radius and `\f06a`. Use `AlertTriangle`, not `AlertCircle`.
- **Button hover inverts to a gradient**, not a flat colour: green fill →
  `transparent` with a magenta→indigo (`to bottom`) overlay fading in over
  `.4s`; the label must stay white and legible the whole time.
- **The social buttons are filled white discs with grey glyphs**, the only such
  treatment in the family (elsewhere: transparent fills, white outlines, white
  glyphs on a coloured wash).
- Screenshot is AVIF — decode with `avifdec` before viewing (or use the browser).
