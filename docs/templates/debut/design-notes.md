# Debut — design notes (replication research)

Source: ColorLib **Coming Soon 1** —
https://colorlib.com/wp/template/comingsoon_01/ (source slug
`comingsoon_01`). Theme preview `https://preview.colorlib.com/theme/
comingsoon_01/` returns **HTTP 404** (verified 2026-10-11); the ColorLib
template page exposes only `https://preview.colorlib.com/#comingsoon_01` and a
downloadable source zip. Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_01.zip` (HTTP 200,
448,688 B, 18 entries) as the DOM/CSS reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-1.jpg`.
Reference artifacts: `/tmp/cs01.zip`, extracted to `/tmp/cs01x/comingsoon_01/`
(`index.html` 5,077 B · `css/style.css` 12,745 B · `js/snippet.js` 3,970 B),
screenshot converted to `/tmp/cs01.png`. Research date: 2026-10-11.

## Visual summary (from screenshot)

A single full-viewport coming-soon screen, split diagonally. A white panel on
the left (with a generous left margin) holds a small "CO." logo top-left, a
two-line charcoal headline ("Our website is **Coming Soon**, follow us for
update now!"), two rounded gray-bordered inputs ("Your Name", "Email
Address"), a full-width green "Subscribe" button, a small gray spam note, and
three round social buttons (blue/light-blue/red) pinned to the bottom-left.
The right side (the majority of the width) is a full-height night-sky desert
photograph — cactus silhouettes against a starry sky — under a heavy black
wash, clipped from the white panel by a straight diagonal edge. Centred on the
photo is a 2×2 grid of four thin, translucent white circles, each with a large
white number and a small uppercase label under it (Days / Hours / Minutes /
Seconds). Overall aesthetic: minimal, one green accent, photographic,
countdown-forward.

## Structure order (1:1 with the source DOM)

The reference is one screen, not a scrolling page:

1. Page wrapper `.size1.bg0` (white, min-height 100vh)
2. Photo panel `.flex-c-m.bg-img1.size2.where1.overlay1.where2.respon2`
   (absolute right, 71% width, full height; `background-image: bg01.jpg`;
   `::before` overlay `rgba(0,0,0,0.8)`; `::after` white `skewX(156deg)` wedge)
   1. Countdown grid `.wsize2.flex-w.flex-c-m.cd100.js-tilt` (max-width 380px)
      → four `.flex-col-c-m.size6.bor2` circles (number `.l2-txt1` + label
      `.s2-txt4`): Days · Hours · Minutes · Seconds
3. Form panel `.size3.flex-col-sb.flex-w.p-l-75.p-r-75.p-t-45.p-b-45.respon1`
   (white, max-width 650px, min-height 100vh, space-between column)
   1. `.wrap-pic1` logo (`images/icons/logo.png` = "CO.")
   2. `.p-t-50.p-b-60` block: `p.m1-txt1` headline (with `span.m1-txt2`
      "Coming Soon"); `form.contact100-form.validate-form` (name + email
      `.wrap-input100.validate-input` rows, each `input.input100` +
      `span.focus-input100`); `.w-full` `button.…s2-txt2.size4.bg1.bor1.hov1`
      "Subscribe"; `p.s2-txt3` spam note
   3. `.flex-w` social row: three `a.flex-c-m.size5.bg3|bg4|bg5.how1` circles
4. `js/snippet.js` — countdown (`{D:35,h:18,m:0,s:0}`, DOM starts
   35/17/50/39), form validation, `js-tilt`

## Section-by-section fidelity notes

- **Layout / split** — `.size1` `min-height:100vh`. The photo panel is
  `position:absolute; top:0; right:0; z-index:-1; width:71%; height:100%` and
  `.where2{padding:50px 50px 150px 320px}` centres the countdown away from the
  left edge. The white form panel `.size3` is `max-width:650px;
  min-height:100vh`, `justify-content:space-between`, padding `45px 75px`
  (`respon1`: ≤1600px max-width 38%; ≤1200px padding 30px; ≤992px becomes a
  centered 650px column with `position:relative` below the photo). Recreation:
  Tailwind flex split with a pinned right photo column; stacks below `lg`.
- **Diagonal divider** — `.overlay1::after` is a `10000px`-wide white block
  anchored `right:100%`, `transform:skewX(156deg)`, `transform-origin:bottom
  right`, sitting above the `rgba(0,0,0,0.8)` `::before` overlay. Recreation:
  an SVG/clip-path or a rotated white block along the photo panel's left edge
  (and a matching top edge when stacked).
- **Photo** — source `images/bg01.jpg` (night desert). Recreation:
  `picsum.photos/seed/debut-hero/<w>/<h>` (deterministic), `object-cover`,
  with a `bg-black/80` overlay.
- **Countdown** — `.size6{155px}` + `.bor2{1px solid rgba(255,255,255,0.3);
  border-radius:50%}`. Number `.l2-txt1`: Lato-Bold 40px/1 white; label
  `.s2-txt4`: Lato-Regular 12px/1 white uppercase. Source updates each second
  via `js/snippet.js` (config `D:35` days, `h:18` hours; DOM shows
  35/17/50/39). Recreation: React `useEffect` `setInterval(1000)` toward a
  fixed future date (e.g. now + 35 days), zero-pad h/m/s (source
  `('0'+n).slice(-2)`), clear on unmount.
- **Tilt** — `.js-tilt` gets a small 3D pointer-tilt from `js/snippet.js`
  (tilt.js-like). Recreation: a lightweight React `onMouseMove` transform on
  the countdown grid; disable under `prefers-reduced-motion`.
- **Logo** — source `images/icons/logo.png` is the "CO." wordmark (with a
  green dot). Recreation: a "debut." text wordmark with a green `#57b846`
  dot — the source image is never copied.
- **Headline** — `p.m1-txt1` "Our website is `span.m1-txt2`Coming Soon`/span`,
  follow us for update now!" Poppins-Regular 24px/1.5 `#555555`; the span is
  Poppins-Bold same size. Recreation: same kind of copy, bold accent on the
  keyword; Poppins via Google Fonts.
- **Inputs** — `.wrap-input100`: `width:100%; height:50px; border:2px solid
  #e6e6e6; border-radius:5px; background:#fff`; `input.input100{padding:0
  22px}`, text `.s2-txt1` Lato-Bold 15px `#555555`, placeholder `.placeholder0`
  `#999999`. `.focus-input100` is an absolutely-positioned 2px `#57b846` ring
  (radius 5px, `width/height calc(100%+4px)`, `top/left:-2px`) hidden then
  revealed on `input:focus` scaling from `scaleX(1.1) scaleY(1.2)` to
  `scale(1)` over `.4s`. Recreation: Tailwind `focus:ring-2 focus:ring-[#57b846]`
  (or a peer-driven ring span) with a `.4s` transition.
- **Button** — `.size4{width:100%;height:50px}` `.bor1{border-radius:5px}`
  `.bg1{#57b846}` `.hov1:hover{#555555}` `.s2-txt2` Lato-Bold 15px white.
  Recreation: full-width button, `#57b846` → `#555555` hover, radius 5px.
- **Note** — `p.s2-txt3` Lato-Regular 14px `#999999`: "And don't worry, we
  hate spam too! You can unsubcribe at anytime." [sic] — paraphrase, fix the
  typo ("unsubscribe").
- **Socials** — `.size5{36px}` `.how1{border-radius:50%; font-size:22px;
  color:#fff}`; fills `.bg3{#3b5998}` Facebook, `.bg4{#1da1f2}` Twitter,
  `.bg5{#cd201f}` YouTube; `:hover{background:#555555}`. Icons are FontAwesome
  (`fa-facebook`, `fa-twitter`, `fa-youtube-play`, inline SVG in the zip) —
  recreation uses lucide-react `Facebook` / `Twitter` / `Youtube`.
- **Validation** — `.alert-validate::before{content:attr(data-validate); …
  border:1px solid #c80000; color:#c80000; font-family:Poppins-Regular;
  font-size:14px; border-radius:2px}` + `::after` FontAwesome `\f12a` warning.
  Recreation: a red `#c80000` bubble above the field with a lucide
  `AlertCircle`; message from `data-validate` ("Name is required",
  "Email is required: ex@abc.xyz") — paraphrase to clean text.
- **Attribution** — the source has none (it is a snippet); the monorepo rule
  requires a Component Dock link. Add "Made with ♥ by
  [Component Dock](https://www.componentdock.com/)" (e.g. in the form panel's
  bottom area or a slim footer line).

## Tokens cheat-sheet (verified)

| Token | Value |
| --- | --- |
| brand (green) | `#57b846` |
| hover (gray) | `#555555` |
| headline | `#555555` (Poppins 24px) |
| input text | `#555555` (Lato-Bold 15px) |
| muted / placeholder | `#999999` |
| base body text | `#666666` (reboot `#212529`) |
| input border | `#e6e6e6` (2px, radius 5px) |
| error red | `#c80000` |
| overlay | `rgba(0,0,0,0.8)` |
| Facebook / Twitter / YouTube | `#3b5998` / `#1da1f2` / `#cd201f` |
| font family | Poppins (headline) + Lato (body) |
| radii | 5px (inputs, button), 50% (socials, countdown) |
| countdown circle | 155px, `1px solid rgba(255,255,255,0.3)` |
| countdown number / label | Lato-Bold 40px / Lato-Regular 12px uppercase, white |
| social button | 36px circle, 22px icon |
| photo panel | 71% width, full height, absolute right |
| form panel | max-width 650px, min-height 100vh, padding 45px 75px |
| transition | `all .4s` |

## Deviations (document in the PR)

- **Preview unreachable** (`theme/comingsoon_01/` → 404): the reference is the
  official source zip (`…/downloads/free/comingsoon_01.zip`) + screenshot, as
  noted above.
- Demo brand "Coming Soon 1" and the "CO." logo are replaced (wordmark
  "debut.").
- Placeholder images (`picsum.photos/seed/debut-*`), lucide-react icons,
  Google-fonts Poppins + Lato — no assets, font files, or CSS copied.
- The source is a framework-free self-contained snippet (its own Bootstrap-4
  style reboot + namespaced utilities); the recreation is Tailwind 4 + React
  state. jQuery/tilt.js → React; FontAwesome glyphs → lucide-react.
- Source fixes notes as needed: fix the "unsubcribe" typo; clean validation
  copy.

## Prep status (re-verified)

This prep re-creates files that were dropped from `main` by the implementer
bookkeeping commit `02ae6a323` ("chore: alpinora bookkeeping …", which deleted
`openspec/specs/template-debut/` and `docs/templates/debut/`). Nothing about
the template changed: TEMPLATES.md line 3032 is still `- [ ]`, `apps/debut`
does not exist, and no spec on `main` referenced `comingsoon_01`.

Re-verification on 2026-10-11 (fresh clone of the reference, `/tmp/cs01v/`):

- `https://preview.colorlib.com/theme/comingsoon_01/` → **HTTP 404** (unchanged)
- `https://preview.colorlib.com/downloads/free/comingsoon_01.zip` → **HTTP
  200**, 448,688 B, extracted to `/tmp/cs01v/x/comingsoon_01/` (`index.html`
  5,168 B · `css/style.css` 12,745 B · `js/snippet.js` · `images/bg01.jpg`)
- Screenshot `coming-soon-1.jpg` served as AVIF, converted with ImageMagick to
  `/tmp/cs01v/shot.png` and reviewed visually — confirms the split layout
  (white form panel + starry-desert photo panel, diagonal edge, 2×2 countdown
  circles 35/17/59/57, "CO." logo, green Subscribe button, three round socials)
- Tokens re-extracted from `css/style.css`: `#57b846` (brand), `#555555`
  (hover/headline/input text), `#999999` (muted/placeholder), `#e6e6e6`
  (input border), `#c80000` (validation), `rgba(0,0,0,0.8)` (overlay),
  `#3b5998`/`#1da1f2`/`#cd201f` (socials); `.size3{max-width:650px;
  min-height:100vh}`, `.size2{width:71%}`, `.size6{155px}` +
  `.bor2{1px solid rgba(255,255,255,0.3); border-radius:50%}`,
  `.overlay1::after{skewX(156deg)}` — all identical to the tables above.
