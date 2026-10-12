# Aisle — design notes (replication research)

Prep research for `apps/aisle`, the recreation of ColorLib **"Wedding2"**
(source slug `wedding2`, TEMPLATES.md line **3107**, `## Wedding` section). This
file is the raw evidence behind `openspec/specs/template-aisle/spec.md`.

Research date: **2026-10-12**. Preview was reachable — **the live DOM + its
stylesheets are the primary reference**; the TEMPLATES.md screenshot is the
secondary (visual) reference. No fallback was needed.

## 1. What was fetched

| Artifact                            | URL / command                                                                                  | Result                                                                 |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Preview HTML                        | `https://preview.colorlib.com/theme/wedding2/`                                                  | **HTTP 200**, 14,477 B, `text/html`, `<title>TITLE</title>`            |
| Preview HTML stability (re-checked 2026-10-12) | strip the injected `<style media="print">` `@font-face` block          | 🔎 **raw page digest is request-unstable** (the host reorders the injected font rules per request; 3 fetches → 3 digests at an identical **14,477 B**) — cite neither a raw hash nor the raw size as a handle: the raw byte count is request-signature-dependent too (re-measured 2026-10-12) — the host likewise appends an extra **361 B** Cloudflare Insights beacon `<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/…">` before `</body>` for some client signatures, so a fetch whose headers differ from a plain `curl -sS <url>` sees **14,838 B**. Canonical handle (strip the injected block **and** the beacon script) is **12,024 B**, sha256 `2fb91a18dc7f5ec5fecfdaa1fa5eafddfe109c7f0de6895e215d82bb88ca3c48` — byte-identical across `curl -sS`, `curl -A <chrome UA>` and `urllib` with a Chrome UA (3 profiles × 3 fetches, 2026-10-12), while a client that additionally sends `Accept`/`Accept-Language` gets a further **416 B** Cloudflare first-party Google-tag script (`google_tags_first_party` / `/s9cc/`) this handle does not strip; state the measurement basis (`curl -sS`) next to any such number |
| Main stylesheet                     | `https://preview.colorlib.com/theme/wedding2/01-homepage/css/styles.css`                        | **HTTP 200**, 12,286 B (saved `/tmp/wedding2-styles.css`)              |
| Responsive stylesheet               | `…/wedding2/01-homepage/css/responsive.css`                                                     | **HTTP 200**, 4,147 B                                                  |
| Other CSS the page loads (not used) | `common-css/bootstrap.css`, `common-css/font-icon.css`, `common-css/fluidbox.min.css`           | referenced only; the icon font is the source's own                    |
| Screenshot                          | `https://colorlib.com/wp/wp-content/uploads/sites/2/wedding2-free-template.jpg`                 | **HTTP 200**, 113,016 B, `image/avif` (despite `.jpg`) → `ffmpeg` → PNG, **1200×946** (re-measured 2026-10-12 with `PIL.Image.open().size` + `ffprobe`, 3 fetches, sha256 `c43cec3ac0d4536f1b660ca12783d35f579e77fe84c395d6dc23a603d8a30759`; the 892 the first conversion recorded was a conversion defect, not the file's size) |
| Live render                         | browser pass on the preview                                                                     | computed styles + `getBoundingClientRect`; **only viewport available was 780×437** |

Local copies: `/tmp/wedding2.html`, `/tmp/wedding2-styles.css`,
`/tmp/wedding2-responsive.css`, `/tmp/wedding2-shot.jpg`,
`/tmp/wedding2-shot.png`.

Scripts the source loads (never copied): `common-js/jquery-3.1.1.min.js`,
`common-js/tether.min.js`, `common-js/bootstrap.js`,
`common-js/jquery.countdown.min.js`, `common-js/jquery.fluidbox.min.js`,
`common-js/scripts.js`, **`https://maps.googleapis.com/maps/api/js?key=AIzaSy…&callback=initMap`**
plus Google Analytics `gtag.js` (`UA-23581568-13`). The API key and the
analytics id are the source's and must never appear in the recreation.

Fonts: the preview host injects `@font-face` rules through a
`<style media="print" onload="this.media='all'">` block that proxies Google
Fonts (`/cf-fonts/s/playball/5.2.8/…/normal.woff2`,
`/cf-fonts/s/bitter/5.2.10/…/normal.woff2`). Both families are **weight 400
only**, exactly as used: `Playball` (cursive) for `h1,h2,h3` and every script
accent, `Bitter` (serif) for `body`. `document.fonts` confirmed
`Playball-400-loaded` and `Bitter-400-loaded`, plus the source's icon font
`untitled-font-1`.

## 2. Screenshot (1200×946, browser-chrome mock of the top of the page)

- **Header, floating, no background:** the wordmark "Wedding" set in a white
  **cursive script** at the left; the menu at the right in small, thin,
  letter-spaced capitals — `HOME  OUR STORIES ▾  THER WEDDING  GELLERY  RSVP` —
  above a faint hairline across the full width.
- **Hero:** a full-bleed wedding photograph — a bride's hand in a cream lace
  sleeve with a diamond engagement ring resting on the groom's hand, a peach
  rose and greenery bouquet at the left, a tan leather watch on the groom's
  wrist — dimmed by a dark overlay.
- **Overlay type, centred, three registers:** a small **tie/bow glyph**; then
  `23 SETPEMBER 2017` in small letter-spaced serif capitals; then `Save The
  Date` in the **script face**; and finally the names set **very large** in the
  script face with a **rose heart glyph** between them.
- **Below the fold:** the white story band opens with "**Our Story**" in
  near-black script over a **faint concentric-circle pattern**, a small
  ornament (two thin grey rules flanking a rose star), and a narrow centred grey
  serif paragraph.
- Palette impression: photograph-driven white/neutral page, near-black body
  text, one warm **rose** accent for glyphs/icons/buttons, and a lighter second
  rose reserved for the newsletter submit button.

## 3. Section order and structure (1:1, from the live DOM)

Measured top offsets / heights in the live pass (**780×437** viewport, page
height ≈ 5,197 px). Desktop-intent values come from `styles.css`, since the
harness could not open a 1440 px window — treat the pixel widths below as
"at 780 px" and the em values as authoritative.

| # | Block (in DOM order)              | Measured top / height | Notes                                                        |
| - | --------------------------------- | --------------------- | ------------------------------------------------------------ |
| 1 | `header`                          | 20 / 66               | `position:absolute; top:20px; left:0; right:0; z-index:1000`  |
| 2 | `div.main-slider`                 | 0 / 437               | `height:100vh` → 437 at a 437 px viewport                     |
| 3 | `section.section.story-area`      | 437 / 447             | `padding:100px 0 70px` + ring-pattern `:after`                |
| 4 | `section.section.counter-area`    | 884 / 610             | photo band + scrim                                            |
| 5 | `section.section.w-details-area`  | 1,494 / 1,407         | the tallest block: 4 alternating cards on a spine             |
| 6 | `section.section.ceremony-area`   | 2,901 / 489           | photo band + scrim                                            |
| 7 | `section.section.galery-area`     | 3,390 / 756           | 6 tiles (2 rows) + outlined button                            |
| 8 | `section.contact-area`            | 4,146 / 562           | 50/50 split; `.contact-wrapper` and `.map-area` both 383×562  |
| 9 | `footer`                          | 4,708 / 489           | `padding-top:70px` + ring-pattern `:after`                    |

### 3.1 `header`

```html
<header>
  <div class="container">
    <a class="logo" href="#"><img src="images/logo-white.png" …></a>
    <div class="menu-nav-icon" data-nav-menu="#main-menu"><i class="icon icon-bars"></i></div>
    <ul class="main-menu visible-on-click" id="main-menu">
      <li><a href="index.html">HOME</a></li>
      <li class="drop-down"><a href="#!">OUR STORIES<i class="icon icon-caret-down"></i></a>
        <!-- `#!` is jQuery's dead anchor: no element carries id="!" and the page
             holds no in-page anchors at all (every href is `#`, `#!` or a file link) -->
        <ul class="drop-down-menu">
          <li><a href="#">FEATURED</a></li>
          <li><a href="#">ABOUT</a></li>
          <li class="drop-down"><a href="#!">CATEGORIES<i class="icon icon-caret-right"></i></a>
            <ul class="drop-down-menu drop-down-inner">… FEATURED / ABOUT / CATEGORIES …</ul>
          </li>
        </ul>
      </li>
      <li><a href="03-regular-page.html">THER WEDDING</a></li>
      <li><a href="#">GELLERY</a></li>
      <li><a href="02-rsvp.html">RSVP</a></li>
    </ul>
  </div>
</header>
```

CSS: `header{position:absolute; left:0; right:0; top:20px; z-index:1000;
font-size:.95em; border-bottom:1px solid rgba(255,255,255,.2); color:#fff}`;
`header .logo{margin:5px 0 20px; height:40px}`;
`header .main-menu{font-weight:500; float:right; margin:0 -15px}`;
`header .main-menu > li > a{height:50px; line-height:46px; padding:0 15px;
border:2px solid transparent; border-radius:2px; background:transparent}`;
hover → `border-color:#E45F74`; `li.drop-down > ul.drop-down-menu{display:none;
position:absolute; top:50px; left:0; min-width:200px; box-shadow:0 3px 10px
rgba(0,0,0,.3); background:#333}` with `li{display:block; border-top:1px solid
#444}` and `li > a{display:block; padding:15px 20px}`; the inner submenu opens at
`left:100%`.

Measured nav link: **15.2 px / 500**, white, `line-height:46px`, 50 px tall,
80 px wide. Text is uppercase **by markup**, `text-transform` is `none`.

Source typos to correct: `SETPEMBER` (hero), `THER WEDDING` and `GELLERY` (nav).
The recreation uses a clean five-item nav with working in-page anchors.

### 3.2 `div.main-slider` (hero)

```html
<div class="main-slider">
  <div class="display-table center-text"><div class="display-table-cell">
    <div class="slider-content">
      <i class="small-icon icon icon-tie"></i>
      <h5 class="date">23 SETPEMBER 2017</h5>
      <h3 class="pre-title">Save The Date</h3>
      <h1 class="title">Jenny <i class="icon icon-heart"></i> Mark</h1>
    </div>
  </div></div>
</div>
```

CSS: `.main-slider{height:100vh; position:relative; z-index:1;
background-image:url(../../images/slider-1-1600x900.jpg); background-size:cover;
color:#fff}`; `.main-slider:after{content:''; position:absolute; top:0; bottom:0;
left:0; right:0; z-index:-1; background:rgba(0,0,0,.3)}`;
`.display-table{display:table; height:100%; width:100%}`,
`.display-table-cell{display:table-cell; vertical-align:middle}`;
`.slider-content i.small-icon{font-size:2.5em}`;
`.slider-content .date{margin:10px 0 0}`;
`.slider-content .title i{transform:translateY(10px); font-size:.8em;
color:#E45F74}`.

Measured: `h1.title` **64 px Playball** white (`5em`, `line-height:1`), 765 px
wide in the centred column; `h3.pre-title` **32 px Playball**
(`line-height:48px`); `h5.date` **19.2 px Bitter**.

### 3.3 `section.section.story-area.center-text`

```html
<div class="col-sm-10">
  <div class="heading"><h2 class="title">Our Story</h2>
    <span class="heading-bottom"><i class="icon icon-star"></i></span></div>
  <p class="desc margin-bottom">Every bride and groom wants an incomparable wedding
  combined with fantasy and style. We create stunning, one-of-a-kind events …</p>
</div>
```

CSS: `.section{padding:100px 0 70px}`;
`.story-area:after{content:''; position:absolute; top:0; bottom:0; left:0;
right:0; z-index:-1; opacity:.8; background:url(../../images/Background_Circle.png)}`;
`.section .heading{padding-bottom:40px}`;
`.section .heading .heading-bottom{margin-top:20px; display:inline-block;
width:160px; height:20px; line-height:20px; position:relative}` with `.icon`
absolutely centred and `:before`/`:after` drawing `1px` `#aaa` rules of 60 px
each side; `.section .heading .icon{font-size:18px; margin-top:20px;
color:#E45F74}`.

Measured: story `h2` **48 px Playball** `#333` (`line-height:52.8px`);
`p.desc` **16.8 px Bitter `#555`**, `line-height:26.88px`, 570 px wide.

### 3.4 `section.section.counter-area.center-text`

```html
<h2 class="title">Don't miss it!</h2>
<span class="heading-bottom"><i class="color-white icon icon-star"></i></span>
<div class="remaining-time"><div id="clock"></div></div>
```

CSS: `.counter-area{background-image:url(../../images/counter-1-1600x600.jpg);
background-size:cover; color:#fff}` + `:after{background:rgba(0,0,0,.3)}`;
`.remaining-time … {position:relative; display:inline-block; margin:0 20px;
margin-bottom:30px; height:120px; width:120px; padding-top:25px;
border-radius:100px; border:1px solid #fff}` with `.title{font-size:3em;
line-height:1; display:block}` inside each cell.

`jquery.countdown` rendered exactly four `.time-sec` cells — measured
**120×120 px each** — with the text `00 days`, `00 hours`, `00 minutes`,
`00 seconds`. All zeros because the source's target date (2017-09-23) has long
passed: **the reference's countdown is permanently dead**, so the recreation must
supply its own future date.

### 3.5 `section.section.w-details-area.center-text`

```html
<div class="wedding-details margin-bottom">
  <div class="w-detail right"><i class="icon icon-ciurclke"></i>
    <h4 class="title">CEREMONY</h4><p>Look at the most passionate ceremony ever.…</p></div>
  <div class="w-detail left"><i class="icon icon-wine-glass"></i>
    <h4 class="title">TOAST &amp; DINNER</h4><p>…same sentence…</p></div>
  <div class="w-detail right"><i class="icon icon-cake"></i>
    <h4 class="title">WEDDING CAKE</h4><p>…same sentence…</p></div>
  <div class="w-detail left"><i class="icon icon-camera"></i>
    <h4 class="title">PHOTOGRAPHY</h4><p>…same sentence…</p></div>
</div>
```

CSS: `.wedding-details:after{content:''; position:absolute; top:0; bottom:0;
left:50%; margin-left:-.5px; width:1px; background:#ccc}`;
`.w-detail{width:50%; padding:0 50px; margin-bottom:30px; position:relative;
clear:both; margin-top:-40px}`; `.w-detail.right{text-align:left; float:right}`,
`.w-detail.left{text-align:right; float:left}`;
`.w-detail:after{content:''; position:absolute; top:0; height:18px; width:18px;
border-radius:20px; z-index:1; border:1px solid #aaa; background:#fff}` (the
right cards pin it with `margin-left:-9px`, the left ones `margin-right:-9px`);
`.w-detail .icon{font-size:3.5em; line-height:1; color:#E45F74}`.

Measured: four cards, 285 px wide each at 780 px, tops **1,734 / 1,980 / 2,263 /
2,545**; icons **56 px `#E45F74`**; `h4` **24 px Bitter `#333`**. The source
repeats one lorem sentence in all four cards — the recreation writes four
distinct short blurbs of the same kind.

### 3.6 `section.section.ceremony-area.center-text`

CSS identical treatment to the countdown band (same photo asset
`counter-1-1600x600.jpg`, same `rgba(0,0,0,.3)` scrim, `color:#fff`), with:

```html
<h2 class="title">Wedding &amp; Ceremonies</h2>
<p class="desc">We assist our clients in creating memorable, magical celebrations …</p>
<a class="border-btn" href="#">LEARN MORE</a>
```

`.border-btn` is white, `0.9em` (measured 14.4 px), `padding-bottom:5px`,
`position:relative`; its underline is two absolutely positioned 2 px bars at the
bottom edge, both `background:#E45F74`, the `:before` starting at
`transform:translateX(-130%)` so it slides across the label on hover.

### 3.7 `section.section.galery-area.center-text`

```html
<div class="image-gallery"><div class="row">
  <div class="col-md-4 col-sm-6"><a href="images/gallery-1-600x400.jpg" data-fluidbox>
    <img class="margin-bottom" src="images/gallery-1-600x400.jpg" alt="Gallery Image"></a></div>
  … gallery-2 .. gallery-5, then gallery-1 again (six tiles, five distinct photos) …
</div></div>
<a class="btn-2 margin-bottom gallery-btn" href="#">VIEW ALL GALLERY</a>
```

CSS: `.galery-area .gallery-btn{margin-top:30px}`;
`.btn-2{font-size:.9em; padding:15px 30px; border-radius:1px; letter-spacing:2px;
border:1px solid #E45F74}` → hover `background:#E45F74; color:#fff`.
Measured: six tiles of 240 px width at 780 px (2 rows at tops 3,630 / 3,800);
`.btn-2` **226×46**, 14.4 px, `letter-spacing:2px`, `#333` label.
Lightbox = `jquery.fluidbox` with the `#flavorOverlay` `rgba(0,0,0,.8)` overlay.

### 3.8 `section.contact-area`

```html
<section class="contact-area">
  <div class="contact-wrapper section float-left"><div class="container"><div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-10">
      <div class="heading"><h3 class="title">Contact Us</h3></div>
      <div class="margin-bottom">
        <p>On the 25 September 2017</p>
        <p>Join us as we celebrate life and love.</p>
        <a class="phone" href="tel:784-412-0646">784-412-0646</a>
        <p>14 Baria street 133/2, New York City, US</p>
      </div>
    </div>
  </div></div></div>
  <div class="map-area"><div id="map" style="height:100%;"></div></div>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSy…&callback=initMap"></script>
</section>
```

CSS: `.contact-area{position:relative; overflow:hidden; box-shadow:1px 10px 40px
rgba(0,0,0,.4)}`; `.contact-area .contact-wrapper{width:50%}`;
`.contact-area .map-area{width:50%; position:absolute; top:0; bottom:0; right:0}`;
`.contact-area .phone{margin:10px 0; font-size:2em; color:#E45F74}`.

Measured: wrapper 383×562, map area 383×562; `h3.title` **32 px Playball**
`#333`; phone **48 px `#E45F74`**. **The map rendered an empty shell** — `#map`
held only two empty divs and there were **zero iframes** — and the tile URL
carries the source's API key, so the recreation ships a static, styled map
placeholder instead of any third-party embed.

### 3.9 `footer`

```html
<footer><div class="container center-text">
  <div class="logo-wrapper"><a class="logo"><img src="images/logo-black.png" …></a></div>
  <div class="newsletter">
    <h4 class="title">RECEIVE NEWS IN YOUR EMAIL</h4>
    <p>Join our mailing list to receive news and announcements</p>
    <div class="email-area"><form>
      <input class="email-input" type="text" placeholder="Your Email">
      <button class="submit-btn" type="submit">…</button>
    </form></div>
  </div>
  <ul class="social-icons">heart · twitter · instagram · pinterest · tripadvisor</ul>
  <ul class="footer-links">HOME · OUR STORIES · THE WEDDING · GALLERY · CONTACT</ul>
  <p class="copyright">Copyright ©<script>document.write(new Date().getFullYear());</script>
    All rights reserved | … by <a href="https://colorlib.com">Colorlib</a></p>
</div></footer>
```

CSS: `footer{position:relative; z-index:1; padding-top:70px}` with
`footer:after{… z-index:-1; opacity:.8; background:url(../../images/Background_Circle.png)}`;
`footer .newsletter .email-area{position:relative; width:400px; height:55px;
margin:20px auto}`; `footer .email-area .email-input{position:absolute;

top:0; bottom:0; left:0; width:100%; border:0; outline:0; border-radius:100px;
padding:0 70px 0 25px; transition:all .2s; box-shadow:1px 10px 30px
rgba(0,0,0,.2)}` → focus `box-shadow:1px 15px 30px rgba(0,0,0,.3)`;
`footer .email-area .submit-btn{position:absolute; right:0; height:55px;
width:55px; line-height:55px; border-radius:100px; background:#E55D73;
color:#fff}` → hover `background:#000; color:#E55D73`;
`footer .copyright{padding:20px 0 30px}`.

Measured: footer 489 px tall; `h4` **24 px Bitter**; input **400×55**; submit
**55×55**; social glyphs **17.6 px**; footer links **16 px**; `.copyright`
**16.8 px `#555`**. The placeholder "Your Email" is a `placeholder` only (no
label) and the input is `type="text"` — the recreation uses a real label and
`type="email"`.

## 4. Design tokens (extracted)

### 4.1 Colour census (`01-homepage/css/styles.css`, by frequency)

`#fff` (14) · **`#E45F74`** (14) · `#aaa` (3) · **`#E55D73`** (2) · `#444` (2) ·
`#333` (2) · `#ccc` (1) · `#555` (1) · `#000` (1) — plus function colours:
`rgba(0,0,0,.3)` (hero/countdown/ceremony scrims and the dropdown shadow),
`rgba(0,0,0,.4)` (contact band `1px 10px 40px`), `rgba(0,0,0,.2)` →
`rgba(0,0,0,.3)` (newsletter pill shadow), `rgba(255,255,255,.2)` (header
hairline), `rgba(255,255,255,.1)` (mobile header hairline), `rgba(0,0,0,.8)`
(lightbox overlay).

Where the rose lands: `.btn` fill (`1px solid #E45F74; background:#E45F74`,
hover invert to `color:#E45F74; background:none`), `.btn-2` border + hover fill,
`.border-btn:before/:after` underline bars, `.section .heading .icon` (18 px
ornament), `.w-detail .icon` (3.5 em), `.contact-area .phone` (2 em),
`header .main-menu > li > a:hover{border-color:#E45F74}`,
`.slider-content .title i{color:#E45F74}`, and the footer email glyph. `#E55D73`
appears only on the newsletter submit button (and its hover glyph colour).

### 4.2 Typography

`body{font-size:16px; font-family:'Bitter', serif; font-weight:400; color:#333}`
with `-webkit-font-smoothing:antialiased`; `h1,h2,h3{font-family:'Playball',
cursive}`; sizes `h1 5em / h2 3.5em / h3 2.5em / h4 1.5em / h5 1.2em / h6 .9em
(letter-spacing:1px)`. Buttons carry `letter-spacing:2px`. Measured base sizes:
`h1` 64 px, `h2` 48 px, `h3` 32 px, `h4` 24 px, `p.desc` 16.8 px,
`.copyright` 16.8 px.

### 4.3 Shape, spacing, motion

`border-radius:1px` on both buttons, `2px` on nav items, `20px` on the 18 px
timeline dots, `100px` on the countdown circles and the newsletter pill/submit.
`.section{padding:100px 0 70px}`, `.heading{padding-bottom:40px}`,
`.heading-bottom{margin-top:20px}`, `.w-detail{margin-top:-40px}`,
`.gallery-btn{margin-top:30px}`. Transitions are `all .2s`/`.3s`; the dropdown
reveals with `full-opacity-anim .2s`.

### 4.4 Backgrounds

Every band is flat white except the ones that carry imagery:
`slider-1-1600x900.jpg` (hero), `counter-1-1600x600.jpg` (countdown **and**
ceremony — the same asset twice, both under `rgba(0,0,0,.3)`), and
`Background_Circle.png` used as a **pattern overlay at `opacity:.8`** in the
story band and the footer. No gradients and no solid colour bands exist on this
page — the "rose" only ever appears in type, icons and buttons.

## 5. Live-render deltas (things that differ from reading the CSS alone)

1. **Countdown is dead** — all four circles show `00`, because the source's
   target date is 2017-09-23.
2. **Map is an empty keyed embed** — `#map` had no iframe and no content; the
   Google Maps script carries the source's API key (`AIzaSy…`). Not reused.
3. **`.btn` is never used on this page** (0 elements) — only `.btn-2` (gallery)
   and `.border-btn` (ceremony).
4. **The hero is `100vh`** and the header floats over it at `top:20px` with
   `position:absolute` — the header reserves no layout space.
5. **Only the 780×437 viewport** was available in the harness, so the `.section`
   widths above are 780 px measurements; heading sizes are `em`-derived and
   therefore viewport-independent.
6. **The gallery reuses one photo** (`gallery-1`) for its sixth tile — five
   distinct photos across six slots.
7. **Browser chrome in the screenshot** shows a blank address bar
   (`Search or enter website name`), not a URL — the screenshot identifies the
   design by content only, which is why the live preview was used as the primary
   reference.
8. **The source page has no in-page anchors at all** — its **22** href anchors are
   all dead or dead-ending: **`#` ×20** (the logo, the GELLERY item, the dropdown
   rows and the footer/gallery links) and jQuery's **`#!` ×2** (the OUR STORIES
   and CATEGORIES `.drop-down` togglers — no element carries `id="!"`, and the
   live DOM's whole id set is `clock` · `main-menu` · `map`). The remaining
   hrefs leave or drop files: `index.html` (the page itself), the theme's other
   pages (`03-regular-page.html`, `02-rsvp.html`), the lightbox photo links
   (`images/gallery-*.jpg` ×6), the `tel:` link and the ColorLib credit. So the
   recreation's five-item nav is **ours to name** — treat the source's `#!`
   togglers as dead, never as anchors to copy (verified against the live DOM's
   id set, 2026-10-12).

## 6. Breakpoint ladder (`responsive.css`)

- **≤1200 px** — empty.
- **≤992 px** — `h1 4em`, `h2 3em`, `h3 2em`.
- **≤767 px** — `p{line-height:1.4}`; `h1 3em / h2 2.5em / h3 1.8em / h4 1.5em /
  h5 1.2em`; `.section{padding:50px 0 20px}`; `.heading{padding-bottom:20px}`;
  `.heading-bottom{margin-top:10px}`; `header{top:0; border-bottom:1px solid
  rgba(255,255,255,.1)}`; `.logo{margin:10px 0; height:40px}`;
  `ul.main-menu{text-align:left; display:none; float:none; clear:both;
  max-height:400px; overflow:auto; border-top:1px solid #ccc; background:#333}`
  with rows `display:block; float:none; border-bottom:1px solid #444` and links
  `display:block; border:0; line-height:1; height:auto; padding:15px;
  background:none`; nested levels indented 25/35 px; `.menu-nav-icon{display:
  inline-block; float:right}`; the timeline flattens
  (`.wedding-details{margin-left:15px; overflow:visible}`,
  `.wedding-details:after{left:0; margin-left:0}`,
  `.w-detail{width:100%; padding:0 0 0 30px; margin:0 0 30px}`,
  `.w-detail.left, .w-detail.right{text-align:left; float:none}` and their dots
  at `left:0; margin-left:-9px`); the contact block stacks
  (`.contact-wrapper{width:100%; float:none!important}`,
  `.map-area{height:400px; width:100%; position:static}`);
  `.gallery-btn{margin-top:10px}`; `footer ul>li>a{padding:10px 7px}`;
  `footer .newsletter .email-area{width:90%}`.
- **≤479 px** — `body{font-size:14px}`.
- **≤359 px / ≤290 px** — empty.

## 7. Sibling comparison (uniqueness evidence)

- The rose `#E45F74` appears in five other prepped specs — **dawn, eveglow,
  imminence, signal, vigil** — but in every one of them it is only an incidental
  `a:hover` link colour on a Poppins "coming soon" page. Here it is the
  **primary brand colour** (icons, glyphs, buttons, nav hover border, ornament,
  phone link).
- **No spec in the repo uses `Playball`** (grep, 2026-10-12), and `Bitter`
  appears only in conjury / hexcraft / staybook / stayhaven (booking-wizard and
  hotel pages, paired with Poppins).
- Wedding siblings are all visually distinct: **altar** (Wedding) teal
  `#53fff0` / violet `#ca2fff` / lilac `#8e96f8`, **matrimony** (Wed) navy
  `#0b1c39` + red `#ff2828`, **affiance** (Twohearts) pink `#d291bc`/`#cb7fb1`,
  **betrothal** (Dreamwed) amber `#d48f4c`, **trousseau** (Honey) `#ff2f92`,
  **paperie** (Invits) purple `#800098` + gold `#e09513`, **celebrant**
  (Wedding Officiant) sage `#cae8d5`, **wedlock** (Wordpress Wedding Themes)
  `#E74923`/`#D60058`, **troth** (Wordpress Wedding Themes) pink `#ec4899`, **espousal**
  `#f67e7d`/`#fddddc`.
- No sibling combines: a floating script wordmark header with a two-level
  dropdown, a `100vh` clasped-hands hero with a script names line and rose
  heart, a ring-patterned story band with a two-rule + star ornament, a
  four-circle outlined countdown on a photo band, a negative-margin alternating
  spine timeline, a two-bar animated rose underline CTA, a six-tile lightbox
  gallery, and a 50/50 contact split with a pill-plus-circle newsletter footer.

## 8. Name decision

**`aisle`** — the walking aisle of a wedding, i.e. the moment this template is
built around. Single lowercase word, kebab-safe, no collision with `ls apps/`
(1,669 folders), no `openspec/specs/template-aisle/`, no `docs/templates/aisle/`
and no TEMPLATES.md template name (all verified 2026-10-12). Wedding-family names
already used by other recreations: altar, matrimony, affiance, betrothal,
celebrant, trousseau, paperie, wedlock, nuptia, nuptials, troth, espousal.
Rejected source-derived choices: `wedding2`, `weddingofficiant`, `wedlock`
(taken), `veil` (the featured theme name inside the Wedlock research, would be
confusing).

## 9. Implementation reminders derived from this research

- Rebuild the ring pattern and both logos ourselves; never copy
  `Background_Circle.png`, `logo-white.png`, `logo-black.png`, the five gallery
  photos or the two band photos.
- Ship a **real** countdown with a future date, and a **static** map
  placeholder — the reference's countdown is dead and its map needs a key.
- Keep the negative-margin spine timeline and the alternating `text-align`
  flip: they are the design's signature, not an accident.
- Correct the source's typos, its unrendered `<title>TITLE</title>` and its
  script-written copyright year; keep the year live instead.
- No `colorlib.com`, no `maps.googleapis.com`, no `gtag`, no `UA-` id anywhere
  in `apps/aisle`; the footer links `https://www.componentdock.com/`.

## 10. Prep re-verification (2026-10-12, image-facts axis)

- The TEMPLATES.md thumbnail's pixel size was re-measured with `curl -sS` +
  `PIL.Image.open().size` and `ffprobe`: **1200×946** (113,016 B, `image/avif`,
  3 fetches byte-identical, sha256
  `c43cec3ac0d4536f1b660ca12783d35f579e77fe84c395d6dc23a603d8a30759`). The
  prep previously stated 1200×892 in four places (spec ×2, this file ×2,
  `tasks.md`); both figures describe the same fetch, so the earlier number was
  a conversion artifact, not a different file. Corrected. The other nine open
  items' thumbnails were measured the same way and every one matches the size
  its prep states.
- The image-delivery layer was measured on the live page and is **unnamed in
  this prep**, deliberately recorded here rather than added as requirements
  (it is delivery mechanics, not layout): the reference lazy-loads 6 of its 8
  `<img>` (`loading="lazy" decoding="async"`), leaves the header wordmark and
  the first gallery tile eager (`fetchpriority="high" decoding="sync"`), and
  paints the hero, both CTA bands and the map as CSS `background-image` (no
  `srcset`, `<picture>` or modern-format layer anywhere on this theme). Our
  recreation keeps seeded `picsum` photos with `loading="lazy"` below the
  first tile (already required by the spec's gallery scenario).
