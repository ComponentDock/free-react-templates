# Amberline — design notes (replication of ColorLib Buildream)

Brief for the implementer. Source design: **Buildream**
(`https://colorlib.com/wp/template/buildream/`,
preview `https://preview.colorlib.com/theme/buildream/`). New app name:
**Amberline** (`apps/amberline`, package `@free-react-templates/amberline`,
deploy `amberline.free.componentdock.com`). Spec:
`openspec/specs/template-amberline/spec.md`.

Prep status: this design has **no app**. Rows **553** and **1339** of
`TEMPLATES.md` say `[x]` but credit `mortar`, which recreates ColorLib **Grunt**
— a false `[x]` (`docs/row-multiplicity.md` §2). The implementer re-opens both
rows on its branch and re-marks them after merge. Do not touch `mortar`.

## What the reference is

A single-page construction-company theme (Bootstrap 5.3.8 + Swiper 14 +
PhotoSwipe 5 + AOS + Font Awesome 7, no jQuery). 14 bands, 11,489px tall at
1440×1000, 21,292px at 390×844. **Zero `<img>` elements** — every image is a
CSS `background-image`, so the recreation should use background-positioned divs
(or `<img>` with `object-cover`, but keep the same crops: portraits anchored to
`top center`, hero `center center` fixed).

The whole character comes from three devices, in this order of importance:

1. **Amber `#ffa62b` on charcoal `#3d424a`**, with white as the third colour and
   `#363b42` one step darker for the top bar and footer.
2. **Skewed parallelograms at `skew(20deg)`** — the wordmark block bleeds right,
   the active nav item is a skewed amber slab, the CTA band's amber half is a
   skewed sheet. Anywhere the design wants emphasis, it skews.
3. **Square geometry** — buttons, inputs, pricing cards and accordion headers
   are all `border-radius: 0`. Only cards (4px), the video thumb and newsletter
   input/button (5px), social squares (2px), the "Most Popular" pill (20px) and
   avatars/play button (50%) are rounded. Getting this wrong (rounded buttons)
   destroys the look.

## Section-by-section fidelity notes

Order and measured geometry at 1440×1000 are in the spec's table. Per band:

1. **Top bar** (48px, `#363b42`): "Call us:" amber bold 600 + number in
   `#6e6e6e`; right side: amber "Email us:" + address, then three 40×40
   `rgba(255,255,255,0.05)` squares with `#a66000` glyphs. 14px type. Keeps
   rendering on mobile (wraps).
2. **Navbar** (91px, `#3d424a`): brand is a 147×91 **amber block**, text 22px/800
   `#3d424a`; its `::after` is a 100px-wide amber parallelogram at `right:-20px`,
   `skew(20deg)` — that is what visually extends the block past the logo. Links
   14px/500 UPPERCASE, `rgba(255,255,255,0.7)`, `padding: 32px 25px`; active item
   gets a `skew(20deg)` amber `::before` covering its inset. Burger below 992px
   (source uses Bootstrap collapse; in React use a controlled button with
   `aria-expanded`).
3. **Hero** (100vh, starts at y=139 — **below** the header, not under it):
   fixed-attachment cover photo, `#3d424a` wash at 0.6, centred in `col-lg-9`.
   Eyebrow "Since 1982": 16px/700, `letter-spacing: 2px`, UPPERCASE,
   `rgba(255,255,255,0.9)`, short dashes either side (the source draws them with
   `:before/:after`). `h1` 60px/700, UPPERCASE, `letter-spacing: 3px`, white,
   one phrase in amber. Two buttons 53px tall, `padding: 16px 24px`, 12px/700
   UPPERCASE `letter-spacing: 1px`: amber (charcoal text) + charcoal (white
   text), each with a trailing arrow glyph. Not a slider.
4. **About**: 128px padding, `col-md-6` + `col-md-6`. Photo stretched to the
   column with a **rotated −90° strip** anchored `bottom: 107px; right: -107px`
   (`#3d424a`, `padding: 30px`): 54px amber crane icon, amber "38", white
   "Years of experience" — text reads bottom-to-top. Right column: eyebrow
   "Welcome to us", `h2` 54px/500, paragraph, `h3` "We Can Help You", then
   2×2 white mini-cards (308px wide, `padding: 25px`, 60px amber line icon,
   20px/500 title, two-line grey paragraph).
5. **Wordmarks** (`bg-light`, no bottom padding, 434px): eyebrow + `h2`
   "Companies We Work With" + six **text** wordmarks, muted, one row. The source
   ships no logo images — keep them as text; do not add fake image logos.
6. **Amber CTA band** (244px): fixed photo, amber `::after` at
   `width: 50%; left: -50px; skew(20deg); opacity: .9`. Left content:
   `rgba(255,255,255,.8)` small line, `h2` **40px/400 `#3d424a`**, amber square
   button 276×68 (`padding: 24px 48px`). ≤991px: overlay full width, no skew,
   button charcoal/white.
7. **Services** (1,219px): centred eyebrow "What We Do" + `h2` "Services"; left
   `services` photo column (half width, full row height), right three stacked
   cards `padding: 30px; margin-bottom: 20px` — **charcoal (#3d424a), amber
   (#ffa62b), white** in that order, each 60px icon + 26px/500 title +
   paragraph + `.btn-custom` chip (13px/700 UPPERCASE, `4px 10px`,
   `border-radius: 2px`). The source's chip is `rgba(255,255,255,.1)` with white
   text, which is nearly invisible on the white third card — use amber text on
   that one (recorded as an accepted deviation).
8. **Video CTA** (770px): left 636×400 thumbnail (radius 5px) with an 80px amber
   circular play control (white glyph); right eyebrow "Watch our story", `h2`
   "Building Dreams Into Reality Since 1982", paragraph, four amber-check rows
   (16px, 8px padding), amber square button. Play opens a dialog — no third
   party request before the click.
9. **Counters** (266px): photo band + `#3d424a` at 0.8, `padding: 96px 0`, four
   columns: 60px amber crane + 40px/700 amber number (3,000 · 320 · 1,000 · 587)
   over UPPERCASE 16px `rgba(255,255,255,.9)` captions. Count-up on reveal, final
   value during render when `IntersectionObserver` is missing.
10. **Team** (984px): eyebrow "Team & Staff" + `h2` "Qualified Engineers"; four
    cards, portrait 306×420, white card radius 4px + soft shadow, centred
    20px padding, name 20px/500 `#3d424a`, role 14px/500 UPPERCASE. Hover (and
    `:focus-within`) flips the card amber, name white, and fades in three 40px
    charcoal circular socials at the photo's bottom-left (7px gaps).
11. **Gallery** (1,117px): centred eyebrow "Portfolio" + `h2` "Projects";
    full-bleed `g-0` grid, six 480×340 tiles, two rows of three. Hover: `#000` at
    0.3, amber 50×50 zoom square top-right, caption slides from `-50px` to 0
    (UPPERCASE 600 category + white title). PhotoSwipe lightbox → in React build
    an accessible dialog. Captions must be visible without hover on touch.
12. **Pricing** (1,052px): eyebrow "Our Pricing" + `h2` "Pricing & Packages";
    four cards `padding: 40px 0`, radius 0, white, soft shadow; plan name
    14px/700 UPPERCASE `letter-spacing: 1px`; `$` 24px `#6e6e6e` + amount
    50px/600 **`#a66000`**; six feature rows (14px, `10px 20px`, 1px
    `rgba(0,0,0,.05)` rules, amber check / grey cross + `#757575` line-through);
    60%-width amber button. Third card featured: 2px amber border,
    `scale(1.02)` (off ≤991px), amber "Most Popular" pill (`top:-12px`,
    radius 20px, 12px/700 UPPERCASE).
13. **Testimonials** (765px, `bg-light`): eyebrow "Testimonial" + `h2` "Happy
    Clients"; five slides, three visible (410px each), white card
    `padding: 35px 30px 30px`, 80px round avatar with a 30px amber quote badge
    bottom-right, name 20px/600 UPPERCASE `#3d424a`, role 13px UPPERCASE
    `#a66000`, quote. Pagination = 30×2px bars, `#ddd`, active amber, square,
    centred 3em below.
14. **Blog** (923px, `bg-light`, no top padding): eyebrow "Our Blog" + `h2`
    "Recent Blog"; three cards 416px, white, radius 4px, shadow; cover photo with
    a 69×93 `#3d424a` date tile bottom-left (day 30px white, month UPPERCASE);
    body `padding: 30px`, UPPERCASE 13px meta with amber icons, 24px/400 title,
    excerpt.
15. **Appointment** (733px): fixed photo + **white overlay 0.9**. Left = white
    form card (`padding: 50px 50px 50px 0`): amber UPPERCASE eyebrow, `h2`
    "Request a quote" 24px/600, labelled name/email (row), subject `select`
    (six options), 7-row textarea, amber "Send message". Inputs white, 50px,
    radius 2px, 1px `rgba(0,0,0,.1)` border → amber on focus. Right (visually
    last, `order-lg-last` in source): eyebrow "Frequently asked questions", `h2`
    "You Want To Ask Something From Us?", paragraph, 3-item accordion — closed
    header white 18px/600 `#212529` `16px 20px` radius 0, open header **amber**
    with charcoal text, body 16px.
16. **Newsletter** (199px): full-bleed `#ffa62b`, `padding: 60px 0`; `h3`
    28px/700 `#212529` + support line left; right form 526px = white input
    (53px, radius 5px, `16px 20px`, no border) + **charcoal `#212529`** button
    131×53 (white UPPERCASE 12px/700, `letter-spacing: 1px`, radius 5px).
17. **Footer** (706px, `#363b42`, `padding-top: 112px`): wordmark + blurb +
    three 40×40 square socials (radius 2px, `rgba(255,255,255,.05)`, amber
    glyphs); "Recent posts" (3 × 80×80 thumb + 16px/500 white title + amber-icon
    meta); "Quick links" (6 links, amber chevrons); "Have a question?"
    (address / phone / email with amber pin / phone / send glyphs); centred 13px
    bottom line. **Replace the ColorLib credit with the Component Dock link.**

## Type and rhythm cheatsheet

- Poppins 400/500/600/700/800 via Google Fonts `<link>`; body 16px/1.8 `#6e6e6e`
  on `#f8f8f8`.
- `h2` 54px/500/lh 1.4 `rgba(0,0,0,0.8)` (40px ≤991px); hero `h1` 60px/700
  UPPERCASE 3px tracking (40px mobile, 45px ≤575); card titles 20–26px/500;
  blog titles 24px/400; eyebrows 16px/600 `#a66000` (hero eyebrow is white and
  UPPERCASE).
- Bands 128px top/bottom (96px ≤575); counters 96px; newsletter 60px; footer 112px.
- Container 1320px; gallery uses the full-bleed variant.

## Placeholder assets

Deterministic `https://picsum.photos/seed/amberline-<n>/<w>/<h>`, keeping the
source's aspect ratios and crops:

| slot | size | seeds |
|---|---|---|
| hero | 1920×1080 (fixed, cover) | amberline-hero |
| about photo | 800×900 | amberline-about |
| services photo | 800×1000 | amberline-services |
| video thumb | 636×400 | amberline-video |
| counter band | 1920×600 | amberline-counter |
| team portraits ×4 | 306×420 | amberline-team-1..4 |
| gallery ×6 | 960×680 (tile 480×340) | amberline-work-1..6 |
| blog ×3 | 832×500 | amberline-blog-1..3 |
| footer thumbs ×3 | 80×80 | amberline-post-1..3 |
| avatars ×5 | 80×80 | amberline-person-1..5 |
| CTA band | 1920×600 | amberline-cta |
| appointment band | 1920×800 | amberline-appointment |

Icons: `lucide-react` (crane/construction, building, layers, headphones/consult,
ruler, play, check, chevron, map-pin, phone, send, quote, search, user,
message-circle, arrow-right, twitter/facebook/instagram via lucide brand-ish
equivalents).

## Copy

Source copy is lorem ipsum plus real section labels. Write genuine construction
copy: services (construction / infrastructure / architecture), stats, four
engineers with roles, six projects with categories, four plans with six
inclusions each, five client quotes, three dated posts, three FAQ answers, and
the quote-form subject list. Keep the eyebrow + short-claim skeleton, and never
name the source brand — the app is Amberline.

## Known deviations to record in the PR

- Brand renamed Amberline; all ColorLib strings removed from `apps/`.
- Services card 3 chip gets amber text (source's translucent-white chip is
  invisible on white).
- Gallery captions are always visible below `md` (hover-only in the source).
- Lightbox and video player implemented as accessible React dialogs; no vendor
  JS.
- AOS reveals reimplemented with `IntersectionObserver` (no dependency).
- Footer credit → Component Dock.
