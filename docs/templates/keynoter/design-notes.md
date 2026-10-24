# Keynoter — design notes (replication of ColorLib "Summit")

Brief for the implementer. Source design: **Summit**
(`https://colorlib.com/wp/template/summit/`,
preview `https://preview.colorlib.com/theme/summit/`). New app name:
**Keynoter** (`apps/keynoter`, package `@free-react-templates/keynoter`, deploy
`keynoter.free.componentdock.com`). Spec:
`openspec/specs/template-keynoter/spec.md`. Task list:
`docs/templates/keynoter/tasks.md`.

Prep status: this design has **no app**. Rows **1193** and **1688** of
`TEMPLATES.md` say `[x]` but credit the `summit` app, whose spec names a
different ColorLib design (**Confer**, `theme/confer/`) — a false `[x]`
(`docs/row-multiplicity.md` §2 APP-WRONG-DESIGN, `row-excl / spec-excl` =
**1 / 52**). The implementer re-opens both rows on its branch and re-marks them
after merge. **Do not touch `apps/summit`.**

## What the reference is

A **conference / event** theme on a Bootstrap 4 grid + jQuery 3.3.1: Owl
Carousel 2 for the hero, slicknav for the mobile drawer, a hand-rolled search
overlay, `jquery.countdown` for the counter and a black preloader. Verified for
this prep: the slug-only preview is live (HTTP 200, **22,465 B**, sha256
`f1d4f1dd…`), `css/style.css` is **33,880 B** (sha256 `84fb598d…`), `js/main.js`
is **4,113 B** (sha256 `cf62540b…`), `theme/bootstrap/summit/` is **404** and
`/downloads/free/summit.zip` is **404** — there is no alias and no archive, so
the live preview is the only DOM/CSS reference.

**5,441px tall at 1440×900** (stable across reloads — the only motion is the
hero fade and the countdown numerals) and **10,232px at 390×844**, with
`scrollWidth === clientWidth` at both widths: the source has **no horizontal
overflow** to inherit.

## Screenshot analysis (TEMPLATES.md card image)

`https://colorlib.com/wp/wp-content/uploads/sites/2/summit-free-template.jpg` is
served as **AVIF** (58,772 B behind a `.jpg` name; 1200×946 decoded with PIL —
`vision_analyze` rejects the raw AVIF). It shows **the top fold only**:

- the transparent header band washed magenta-left → indigo-right, with a white
  lowercase-ish "The Summit / Conference" lockup at the left, five uppercase
  white nav items, five tiny white social glyphs and a solid indigo square with
  a magnifier at the right edge;
- the hero photograph of a conference crowd, **graded** magenta at the left edge
  (`#C91D67` sampled) through violet at the centre (`#85278C`) to indigo at the
  right (`#2C237C`);
- the white **36px date kicker** ("February 9TH - 15TH 2019" with superscript
  ordinals), the **100px** three-line UPPERCASE headline "SUMMIT / CONFERENCE /
  2019", the 36px venue line "World Trade Center, Gibraltar";
- the **vertical ring-dot rail** at the right edge (first dot pink = active,
  three white ones below);
- the first ~100px of the navy "Next Event" band.

Everything below that (speakers, workshop, talks, subscribe, footer) is **not in
the screenshot**; it was measured from the live render, so this brief and the
spec carry a band table with geometry instead of a screenshot guess.

## DOM skeleton (live preview, 1440×900)

```
#preloder > .loader                        (fixed #000, 40px spinner)
header.header-section                      (absolute, 101px, over the hero)
  .container-fluid > .row.bg-overlay
    .header > .col-lg-12
      .logo > a[href="./index.html"] > img[160×39]
      .navigation.mobile-menu
        .main-menu > nav > ul > li×5 > a   (Home · Speakers · Tickets · Blog · Contact)
        .top-social > a×5 + a.search-btn[55×55]
      #mobile-menu-wrap                   (slicknav target; clones the above)
section.search-bar-wrap                   (fixed #073B4C, hidden; .active opens)
  .search-close
  .search-bar-table > .search-bar-tablecell > .search-bar-inner
    h2 "Search" + form > input[type=search] + button "Search"
div.hero-section
  .hero-items.owl-carousel
    .single-hero-item.set-bg×4            (data-setbg img/slider/bg-1..4.jpg)
      .container > .row > .col-lg-12
        span "February 9<sup>TH</sup> - 15<sup>TH</sup> 2019"
        h1 "Summit<br>Conference<br>2019"
        h2.f-bold "World Trade Center, Gibraltar"
    .owl-dots > .owl-dot×4                (vertical rail, right: 65px)
section.event-counter
  .col-lg-6 > .event-name > h2 "Next Event" + h4 "August 25, 2019 <span>Starting @ 09:00 AM</span>"
  .col-lg-6 > .countdown-timer#countdown > .cd-item×4 (span numeral + p label)
section.speaker-section.spad
  .section-title > h2 "Keynote Speakers"
  .col-lg-4×3 > .speakers-about > .speaker-img > img + .speaker-text > h3 (name + span role)
  a.primary-btn.speaker-btn "ALL SPEAKERS"
section.workshop-section
  .workshop-img.set-bg                  (absolute left, calc(50% - 108px), full height)
  .container > .row > .col-lg-6.offset-lg-6 > .workshop-text
    h4 "Workshops" + h2 "Learn from the most talented people." + p
    a.more-info.primary-btn "More Info" + a.buy-tickets.primary-btn "Buy Tickets"
section.speak-about.spad
  .section-title > h2 "We will speak about"
  .col-lg-4.col-md-6×6 > .speak-text > h2 (topic) + .speaker-name > h4 (name + span role)
section.subscribe-form.set-bg.spad      (data-setbg img/subs-bg.jpg)
  .section-title > h2 "Never miss another seminar" + p
  form.subs-form > input[type=email] + button.submit-btn "subscribe"
footer.footer-section
  .col-lg-3×4 > .company-widget / .event-widget / .links-widget / .contact-widget
    h4 + ul > li…
  .copyright-area > .copyright-text
    .copyright (year + heart + credit) · .footer-social (a×5) · .term "Terms and Conditions"
```

## CSS token reference (verbatim values from `css/style.css`)

```css
html, body        { font-family: "Lato", sans-serif; }
h1,h2,h3,h4       { color: #111111; font-weight: 600; }
p                 { font-size: 16px; color: #484848; line-height: 30px; margin: 0 0 15px; }
.section-title    { margin-bottom: 88px; }
.section-title h2 { color: #272727; font-size: 60px; font-weight: 900; }
.spad             { padding: 100px 0; }          /* bands override below */
.primary-btn      { font-size: 18px; font-weight: 900; padding: 20px 45px; color: #fff;
                    background: #6063ED; letter-spacing: 1.5px; text-transform: uppercase;
                    border-radius: 6px; }
.submit-btn       { border: 1px solid #4ACA59; background: #4ACA59; color: #fff; font-size: 18px;
                    text-transform: uppercase; font-weight: 900; letter-spacing: 1.6px;
                    height: 62px; width: 200px; border-radius: 6px; }
#preloder         { position: fixed; inset: 0; background: #000; z-index: 999999; }
.loader           { width: 40px; height: 40px; border-radius: 60px; animation: loader .8s linear infinite; }
@keyframes loader { 0%{transform:rotate(0); border:4px solid #f44336;} 100%{transform:rotate(360deg); border:4px solid #f44336;} }

.header-section          { position: absolute; width: 100%; z-index: 99; }
.header-section .bg-overlay::after { background: linear-gradient(to right, #ff1a6b, #2a34d0); opacity: .75; }
.header                  { padding: 30px 0 17px 0; }
.header .logo            { float: left; margin-right: 178px; }        /* logo img 160×39 */
.header .main-menu ul li a       { color: #fff; font-size: 16px; font-weight: 900;
                                   padding: 15px 24px; text-transform: uppercase; }
.header .main-menu ul li a.active{ background: #6063ED; border-radius: 4px; }
.header .top-social a    { color: #fff; font-size: 18px; margin-left: 42px; }
.header .top-social a.search-btn { width: 55px; height: 55px; background: #6063ED;
                                   border-radius: 4px; line-height: 55px; margin-left: 25px; }

.search-bar-wrap         { position: fixed; width: 100%; height: 100%; background: #073B4C;
                           color: #fff; visibility: hidden; opacity: 0; transition: .3s; }
.search-bar-wrap.active  { visibility: visible; opacity: 1; z-index: 9999; }
.search-bar-inner        { max-width: 500px; margin: 0 auto; }
.search-bar-inner input  { border: 1px solid #ddd; padding: 12px; color: #333; width: 399px; }
.search-bar-inner button { height: 50px; background: #233EDE; border: 1px solid #233EDE;
                           color: #fff; width: 100px; margin-left: -3px; }

.hero-items .single-hero-item      { height: 976px; padding-top: 320px; }
.hero-items .single-hero-item span { color: #fff; font-size: 36px; font-weight: 400; margin-bottom: 10px; }
.hero-items .single-hero-item h1   { color: #fff; font-size: 100px; font-weight: 900;
                                     line-height: 100px; text-transform: uppercase; margin-bottom: 12px; }
.hero-items .single-hero-item h2   { color: #fff; font-size: 36px; font-weight: 700; }
.hero-items .owl-dot               { height: 11px; width: 11px; border: 3px solid #fff;
                                     display: block; margin-bottom: 10px; border-radius: 50%; }
.hero-items .owl-dot.active        { border-color: #ff1a6b; }
.hero-items .owl-dots              { position: absolute; right: 65px; bottom: 370px; }

.event-counter                   { background: #201D6D; padding: 55px 0; }
.event-counter .event-name h2    { color: #fff; font-size: 60px; font-weight: 900; margin-bottom: 11px; }
.event-counter .event-name h4    { color: #fff; font-size: 24px; font-weight: 400; }
.event-counter .event-name span  { font-size: 16px; background: #F21E7D; padding: 9px 11px 9px 15px;
                                   display: inline-block; margin-left: 12px; }
.event-counter .cd-item          { display: inline-block; margin-right: 60px; }
.event-counter .cd-item span     { color: #fff; font-size: 60px; font-weight: 900; margin-bottom: 6px; }
.event-counter .cd-item p        { color: #fff; font-size: 18px; font-weight: 400; }

.speaker-section          { padding-top: 85px; }        /* + .spad ⇒ 85px 0 100px */
.speakers-about           { margin-bottom: 65px; }
.speakers-about .speaker-img img { border-radius: 6px; min-width: 100%; }   /* 362×412 */
.speakers-about .speaker-text h3 { color: #272727; font-size: 30px; font-weight: 900; }
.speakers-about .speaker-text h3 span { font-size: 18px; font-weight: 400; display: block; margin-top: 10px; }

.workshop-section  { position: relative; background: #f3f3f3; margin-bottom: 85px; }
.workshop-img      { position: absolute; left: 0; top: 0; height: 100%; width: calc(50% - 108px); }
.workshop-text     { background: #f3f3f3; margin: 0 -15px; height: 100%;
                     padding-top: 185px; padding-bottom: 155px; }
.workshop-text h4  { color: #272727; font-size: 24px; font-weight: 700; margin-bottom: 17px; }
.workshop-text h2  { color: #272727; font-size: 60px; font-weight: 700; line-height: 72px; margin-bottom: 17px; }
.workshop-text .more-info   { padding: 20px 43px; margin-right: 27px; }
.workshop-text .buy-tickets { background: #4ACA59; padding: 20px 38px; }

.speak-about       { padding-top: 0; padding-bottom: 70px; }
.speak-text        { background: #f5f5f5; padding: 34px 18px 40px 35px; height: 520px;
                     position: relative; margin-bottom: 30px; transition: .3s; border-radius: 6px; }
.speak-text:after  { content: ""; position: absolute; inset: 0; border-radius: 6px; opacity: 0;
                     transition: .4s; background: linear-gradient(to right, #FB3ABE, #F149E3); }
.speak-text:hover:after { opacity: 1; }
.speak-text:hover h2, .speak-text:hover .speaker-name h4 { color: #fff; }
.speak-text h2             { color: #272727; font-size: 36px; font-weight: 900;
                             line-height: 50px; margin-bottom: 198px; position: relative; }
.speak-text .speaker-name  { position: absolute; left: 35px; bottom: 36px; }
.speak-text .speaker-name h4 { color: #272727; font-size: 24px; font-weight: 900; }
.speak-text .speaker-name h4 span { display: block; font-size: 18px; font-weight: 400; margin-top: 10px; }

.subscribe-form        { padding-top: 85px; }           /* .spad ⇒ 85px 0 100px, photo bg */
.subscribe-form .section-title h2 { color: #fff; margin-bottom: -60px; }
.subscribe-form p      { color: #fff; font-size: 18px; margin-bottom: 82px; }
.subs-form             { position: relative; }
.subs-form input       { border: 2px solid #F1F1F1; border-radius: 6px; background: transparent;
                         color: #fff; font-size: 18px; height: 62px; width: 830px; padding-left: 35px; }
.subs-form input::placeholder { color: #fff; font-style: italic; opacity: .35; }
.subs-form button      { position: absolute; top: 0; right: 63px; }

.footer-section        { background: #201D6D; color: #fff; padding-top: 80px; }
.company-widget h4, .event-widget h4, .links-widget h4, .contact-widget h4
                       { color: #fff; font-size: 24px; font-weight: 900; margin-bottom: 50px; }
.company-widget ul li, .event-widget ul li, .links-widget ul li
                       { color: #fff; font-size: 18px; list-style: none; margin-bottom: 24px; opacity: .5; }
.contact-widget ul li i  { color: #D51E7B; }
.contact-widget ul li span { margin-left: 33px; color: #fff; font-size: 16px; opacity: .5; }
.copyright-area        { padding: 25px 0; }
.copyright-area:after  { border-top: 1px solid #F21E7D; }
.copyright-text .copyright, .copyright-text .term { color: #fff; font-size: 14px; opacity: .5; }
.copyright-text .footer-social { margin-left: 258px; }

/* breakpoints */
@media (max-width: 1199px) { .workshop-text h2 { font-size: 53px } .subs-form input { width: 650px }
                             .cd-item { margin-right: 50px } }
@media (max-width: 991px)  { .workshop-img { position: relative; width: 100%; height: 700px }
                             .hero h1 { font-size: 80px } }
@media (max-width: 767px)  { .header .navigation { display: none }            /* slicknav takes over */
                             .single-hero-item { height: auto; padding: 200px 0 150px }
                             .single-hero-item h1 { font-size: 60px; line-height: 66px }
                             .section-title h2 { font-size: 48px } .workshop-img { height: 500px }
                             .workshop-text { padding-top: 100px } .workshop-text h2 { font-size: 53px }
                             .subs-form input { width: 100%; margin-bottom: 25px }
                             .subs-form button { top: 80px; left: 50%; margin-left: -100px }
                             .event-name { margin-bottom: 30px } .countdown-timer { text-align: center } }
@media (max-width: 479px)  { .single-hero-item h1 { font-size: 40px; line-height: 50px }
                             .single-hero-item h2 { font-size: 30px } .owl-dots { right: 20px }
                             .event-name h2 { font-size: 55px } .workshop-text h2 { font-size: 35px; line-height: 50px }
                             .workshop-text .more-info, .workshop-text .buy-tickets { padding: 20px 17px } }
```

## Band table (measured live, 1440×900 unless noted)

| # | band | top | height | fill |
|---|---|---|---|---|
| 1 | header (absolute, overlays hero) | 0 | 101 | transparent + `#ff1a6b → #2a34d0` @ .75 wash behind the bar |
| 2 | hero carousel | 0 | 976 | pre-graded crowd photo per slide (`cover`, top centre) |
| 3 | event counter | 976 | 241 | `#201D6D`, `padding: 55px 0` |
| 4 | speakers | 1,217 | 978 | `#fff`, `85px 0 100px` |
| 5 | workshop | 2,195 | 784 | `#f3f3f3`, `margin-bottom: 85px` |
| 6 | talks ("We will speak about") | 3,064 | 1,330 | `#fff`, `0 0 70px` |
| 7 | subscribe | 4,394 | 519 | purple photo (`img/subs-bg.jpg` 1920×525) |
| 8 | footer (incl. copyright bar) | 4,913 | 528 | `#201D6D`, `padding-top: 80px` |

At **390×844**: 101 / 702 / 526 / 2,147 / 1,185 / 3,573 / 646 / 1,367 →
document **10,232px**. At **1024** the workshop `h2` steps to 53px and the
subscribe field to 650px; below 992 the workshop photo reflows (700px tall at
768–991, 500px at ≤767).

## Section-by-section fidelity notes

**Header.** The bar is *not* a solid colour: it is transparent over the hero,
and only the `.bg-overlay` row carries the magenta→indigo gradient at
`opacity: .75` — which is why the hero photo still shows through the bar. In
React: `absolute inset-x-0 top-0 z-30` with
`bg-[linear-gradient(to_right,#ff1a6b,#2a34d0)]/75` on an inner row. The logo is
an image in the source; recreate it as a two-line text lockup ("Keynoter" /
"Conference") or an inline SVG — **never** the source PNG. Nav items butt
together (`margin-right: -5px`), so the pill reads as one continuous strip; keep
24px horizontal padding. The search square is the only square 55px control.

**Hero.** Two things matter: the **duotone** and the **typographic stack**. The
source's photos are already graded (sample the JPEG corners: `#D11053` left,
`#323BBE` right), so a grayscale picsum photo plus
`linear-gradient(to right, #ff1a6b, #2a34d0)` at ~.75 lands on the same pixels —
verified: at (60,700) the live page is `rgb(201,29,103)`, centre
`rgb(136,41,141)`, right `rgb(44,35,124)`. The kicker uses `sup` for the
ordinals ("9TH", "15TH") at 36px; the `h1` is 100/100/900 uppercase over three
explicit line breaks and measured 300px tall; the venue sits 12px under it. The
dot rail is a *vertical* list (the CSS sets `.owl-dot { display: block }`),
11px rings with a 3px border, 10px apart, at `right: 65px`, `bottom: 370px`
(measured y = 522 inside the 976px band) — emulate with a flex-column of
buttons, not a horizontal row.

**Counter.** `2019/12/25` is in the past, so the live band shows **00 00 00 00**
— the source's own defect. The recreation must show a real countdown. The time
pill is a `span` inside the date `h4` and wraps to a second line at 1440
(measured `h4` height 37px, two lines) — allow the wrap. Cell spacing is 60px
(50px at ≤1199, 54px at ≤767).

**Speakers.** Photos are **duotone-graded in the asset** (corners `#F77AB4` /
`#8D8DE3`) — same CSS-overlay approach as the hero, slightly lighter (≈.55).
Two of the three names are identical ("Jessica Doe" twice) and all three roles
differ; the recreation must use three distinct names AND roles. Cards are
362 wide (a 3-up grid inside the 1,140px container), portrait 362×412 (ratio
≈0.878, i.e. not square), 22px below the photo, card bottom margin 65px.

**Workshop.** The photo is *absolutely* positioned inside the section at
`width: calc(50% - 108px)` and full height, so the grey text panel begins at the
50% mark and bleeds into the gutters (`margin: 0 -15px`). At 1440 that is a
612px photo and a 588px text column at x = 720. Implement with a two-column
grid (`grid-cols-[calc(50%-108px)_1fr]`) plus a full-bleed image cell, and
switch to a stacked layout at ≤767 (`relative` photo, 500px tall, text
`padding-top: 100px`). The two CTAs are different colours: indigo More Info
(200×67) and green Buy Tickets (206×67), 27px apart, both 67px tall.

**Talks.** Six fixed-height (520px) cards; the topic `h2` has a 198px bottom
margin precisely so the byline can be pinned at `bottom: 36px` — keep the
card height fixed and the byline absolute, or the grid rows will jump. The
hover flood is a `::after` gradient (`#FB3ABE → #F149E3`) behind the text
(z-index 2 on the copy, 0 on the overlay), 0.4s. Reproduce it on
`:hover` **and** `:focus-within`; the longest topic ("Before you can master
design, you must first master the fundamentals.") takes five lines at 362px and
must not clip.

**Subscribe.** The heading's `margin-bottom: -60px` pulls the paragraph onto the
heading's own gap — reproduce with a tighter `h2` margin (`mb-0`) plus a 20px
gap rather than a negative margin, and record it as an intentional normalisation.
The field is 830×62 with a 2px `#F1F1F1` border on a transparent fill (the photo
shows through) and the button is pinned `right: 63px` — which overlaps the field's
right end by design. Do it with flex + `gap` instead so 992–1199 (field 650px) and
≤767 (stacked) stay clean.

**Footer.** Four 294px columns on a `#201D6D` fill; headings 24px/900 with a
50px bottom margin; list items 18px/400 white at `.5` opacity (not a grey hex —
use `text-white/50`). The contact rows use pink glyphs (`#D51E7B`) and a
33px-indented value at 16px. The copyright bar is separated by a
`1px #F21E7D` rule via a pseudo-element (not a border on the bar, because the
rule spans the full viewport while the text does not). Replace the ColorLib
credit with "Component Dock" linking `https://www.componentdock.com/`.

## Source → React adaptation table

| Source construct | React adaptation |
|---|---|
| jQuery + Owl Carousel (`.hero-items.owl-carousel`, loop, fade, 1.2s) | `useState` slide index + `setInterval` (1200ms) + CSS opacity transition; dot buttons with `aria-label`; pause on hover/`prefers-reduced-motion` |
| `data-setbg` + `$('.set-bg').each(...)` injecting `background-image` | Tailwind arbitrary `bg-[url(...)]` / inline `style={{backgroundImage}}` — no JS background setter |
| slicknav auto-generated mobile drawer | Hand-written `<nav aria-expanded>` drawer with focus trap and Escape handling |
| `.search-trigger` / `.search-close` + `.active` class | `openSearch` state, `role="dialog"`, autofocus, Escape, body-scroll lock |
| `jquery.countdown("2019/12/25")` (expired → zeros) | `NEXT_EVENT` ISO constant + `useEffect` interval computing D/H/M/S, zero-padded, cleaned up on unmount |
| 4 slides cloned into 8 DOM nodes by Owl | One slide array, one `h1` (active only), inactive slides `aria-hidden` |
| Font Awesome 4 / Flaticon glyphs (social, search, phone, envelope, pin) | `lucide-react` icons (`Search`, `MapPin`, `Phone`, `Mail`, brand glyphs as `<svg>` or text labels) |
| `img/logo.png`, speaker/product JPEGs, `subs-bg.jpg`, `bg-1..4.jpg` | Text/SVG wordmark + `https://picsum.photos/seed/keynoter-<n>/<w>/<h>` under CSS gradient washes |
| `.speak-text:hover:after` gradient overlay | `after:` pseudo-element utilities + `group-hover`/`group-focus-within`, text colour transitions |
| Bootstrap 4 `.col-lg-4` grid | Tailwind `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |

## Inner-page inventory (not built, recorded so nothing is invented)

All measured for this prep:

| page | status | size | content |
|---|---|---|---|
| `index.html` | 200 | 22,465 B | byte-identical to the directory URL (no-op link) |
| `speakers.html` | 200 | 20,309 B | page banner "Speakers"; "Special Guests" band of 3 cards; `call-to-area` "Save your spot today!"; "All Speakers" band with **6** cards |
| `tickets.html` | 200 | 18,481 B | page banner "Tickets"; three pricing tiers — **One Day Pass $190**, **Full Pass $290**, **Investor Pack $590**; a `.hurry-up` band "Hurry up, save your spot!" with a **second countdown** (`#countdown-2`) showing W/D/H/M/S |
| `blog.html` | 200 | 19,344 B | page banner "Blog"; one featured article + five list items (lorem titles) |
| `contact.html` | 200 | 14,334 B | page banner "Contact"; `.contact-section` "Get in Touch" form; "Contact Info" block |
| `elements.html` | 200 | 27,543 B | component sheet: buttons, accordions, tabs, loaders, milestone counters |
| `about.html`, `single.html`, `services.html`, `gallery.html`, `pricing.html`, `schedule.html`, `speakers-grid.html` | 404 | 9 B | do not exist |

The single-page build maps the four nav links to in-page anchors
(`#speakers`, `#workshops`, `#talks`, `#contact`); the tickets/blog content is
**not** part of this build and must not be silently invented.

## Anchor census (measured, attributed)

**21 authored anchors**: `./index.html` ×2 (logo lockup + Home — a no-op, never a
404), `speakers.html`/`tickets.html`/`blog.html`/`contact.html` ×1 each, 14 dead
`href="#"` (5 header social glyphs, the 55×55 search trigger, 3 band CTAs
"ALL SPEAKERS"/"More Info"/"Buy Tickets", 5 footer social glyphs), and 1
`https://colorlib.com` credit. The live DOM reports **33** because slicknav
clones 12 of them into the drawer (a 0×0 `slicknav_btn` + 5 nav + 5 social + 1
search). Nothing 404s. The React app ships **zero** `href="#"`.

## Documented deltas (recap)

1. Countdown shows a real future date instead of the source's expired zeros.
2. Hero kicker and counter date aligned on one event.
3. Four nav links → four in-page anchors.
4. 14 dead anchors → real targets / buttons with labels.
5. Subscribe field + button laid out with flex (no absolute overlap).
6. Duotone comes from a CSS gradient over neutral photos, not copied JPEGs.
7. Source typos fixed ("Usefull Links", "Your E-main Address",
   "The Summit Confference").
8. One `h1` only; inactive slide copy is not exposed as headings.
9. Talk topics demoted `h2` → `h3` (same 36px size) for a coherent outline.
10. Preloader never traps a hydrated page.

## Font delivery (why the spec prescribes an explicit Lato link)

`css/style.css` declares `"Lato", sans-serif` and loads **no** webfont; the
preview host injects self-hosted Lato 100/300/400/700/900 via
`/cf-fonts/s/lato/5.2.7/…` (confirmed: `[...document.fonts]` lists nine Lato
faces, 400/700/900 loaded). A machine without either falls back to the UA sans
(this container has no Lato in fontconfig). Ship Lato explicitly:
`https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap`
(HTTP 200, verified with a browser UA).
