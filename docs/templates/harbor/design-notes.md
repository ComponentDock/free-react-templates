# Harbor — design notes (section-by-section fidelity)

Recreation of ColorLib **"Deerhost"** (source slug `deerhost`,
https://colorlib.com/wp/template/deerhost/) under the NEW name **harbor**
(`apps/harbor`, `@free-react-templates/harbor`).

Reference used (research date 2026-10-11):
- Live preview DOM: `https://preview.colorlib.com/theme/deerhost/` — HTTP 200,
  42,673 B, `text/html; charset=utf-8` → saved `/tmp/deerhost/index.html`.
- Main stylesheet: `https://preview.colorlib.com/theme/deerhost/css/style.min.css?v=3.0.0`
  — HTTP 200, 59,190 B → saved `/tmp/deerhost/style.min.css`.
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/deerhost-free-template.jpg`
  — HTTP 200, 105,827 B, **1200×946** JPEG → saved `/tmp/deerhost/shot.jpg`,
  reviewed visually.

The live preview was reachable, so no fallback was needed; the screenshot was
used to corroborate the visual design (colours, hero composition, scallop
divider).

## Global tokens (from the source stylesheet)

- **Brand:** `#4c57d6` (periwinkle indigo) — used on every button, link, icon
  accent, price line and eyebrow; hover/darker `#3d47c4`.
- **Navy:** `#120851` — hero base, normal header bg, the pricing price band,
  and the base of all card shadows (`#12085126` / `#12085133` / `#1208511a`).
  Footer two-tone halves `#0b052f` (left of the top band) and `#0e0739` (right);
  header info hairline `#252163`.
- **Text:** `#111` (headings/body on light), `#444` (secondary, pricing list),
  `#666` (muted), `#c4c4c4` (footer muted links).
- **Surfaces:** `#fff` (page + cards), `#eeeffb` (services band), `#f5f5f5` /
  `#f2f2f2` (alt / secondary button).
- **Font:** `Montserrat, sans-serif` on `body`, weights `400` (body), `500`
  (price lines/eyebrows), `700` (headings, buttons, prices). Load
  `Montserrat:wght@400;500;700` from Google Fonts.
- **Buttons:** pill (`border-radius:50px`). Primary `.primary-btn`:
  `font-size:15px; padding:14px 30px 12px; background:#4c57d6; color:#fff;
  text-transform:uppercase; font-weight:700`. Search `.site-btn`:
  `font-size:14px; padding:13px 30px 12px`. Secondary: `background:#f2f2f2;
  color:#111`.
- **Section rhythm:** `.spad` = `padding-top:100px; padding-bottom:100px`;
  section title `margin-bottom:70px`, centered, `font-weight:700;
  text-transform:uppercase; color:#111`, with a small (~83px wide, 13px tall)
  centered underline accent below it.
- **Radii:** `50px` (buttons/inputs/pills), `10px` (cards + price band). Nothing
  else rounded.

## Section-by-section notes (order matters — match 1:1)

### 1. Header (`header-section`)
Source: `position:absolute; left:0; top:0; width:100%; z-index:9` → overlays the
hero (the hero's navy shows through; no separate header background on the home
page). Two rows:
- **Info strip** (`.header__info`, `padding:10px 0; border-bottom:1px solid
  #252163`): left = phone + email (`li 13px #fff`, `margin-right:25px`, small
  accent icons); right = "Live chat" and "Login / Register".
- **Nav row**: wordmark left; horizontal uppercase menu right with items Home ·
  About · Hosting · **Pages ▸** (dropdown: Pricing, Blog Details, 404) · News ·
  Contact; the current item carries a thin underline.
Recreation: build the app's own wordmark (never the source logo image) and the
same link set; the dropdown and mobile menu must be keyboard operable with
`aria-expanded`.

### 2. Hero (`section.hero-section`)
- Full-width navy band (`#120851` base + a set-bg cover image the app supplies),
  header floats over it.
- A **2-slide** loop carousel (`owl-carousel`, `dots:true`, `animateIn:fadeIn`,
  `animateOut:fadeOut`, `smartSpeed:1200`, `autoplay:true`); both slides share
  one background image and one right-column illustration.
- Each slide is a 6/6 split: **left** text column (eyebrow `h5` → big bold white
  uppercase `h1`/`h2` (~2 lines) → periwinkle pill CTA), **right** illustration
  column. Slide 1: "Starting At Only $2.80/month" / "Welcome to the best hosting
  company" / "Get started now". Slide 2: "Free Domain For The First Year" /
  "Fast, secure cloud hosting for every site" / "Compare plans".
- Right illustration in the source is an isometric city-server SVG
  (`img/hero/hero-right.svg`, 590×618) on a faint cyan circuit pattern. The
  recreation must supply its OWN illustration/placeholder — never that SVG.
- **Three dot indicators** centred near the hero's bottom.
- **Cloud-scallop divider:** the hero's lower edge is a white scalloped wave
  transitioning into the white page. Reproduce as the app's own SVG.

### 3. Register domain (`section.register-domain.spad`)
- White band. Centered uppercase title (e.g. "Register your domain now!") with
  the small periwinkle zig-zag/underline accent.
- **Pill search form:** text input (`height:54px; border:2px solid #4c57d6;
  border-radius:50px; padding-left:20px; placeholder #111`), an extension
  control rendered as a `.com ▾` selector (options `.com/.net/.org/.us/.in`), and
  a periwinkle pill "Search" submit button (`.site-btn`). All controls labelled.
- **TLD price row:** inline `li`s `#4c57d6 / 700 / 20px` (TLD token) with the
  price in `#111` `span`, ~62px right margin.
- Short centered grey blurb under the row.
- Behaviour: submit validates (source input `pattern`
  `[A-Za-z0-9][A-Za-z0-9-]{0,62}(\.[A-Za-z]{2,})?`) and writes a result into a
  polite live region (source `#domain-results` `aria-live="polite"`); no page
  navigation.

### 4. Services (`section.services-section.spad`, bg `#eeeffb`)
- Centered uppercase title (e.g. "Choose the right hosting solution").
- Six white cards (`col-lg-4` → 3/row; 2/row at md/sm): `background:#fff;
  padding:40px 45px 20px 40px; border-radius:10px; box-shadow:0 0 10px
  #12085126; transition:all .3s`; hover `box-shadow:0 8px 30px #12085133`.
- Each card: `h5` title (`20px/#111/700`), periwinkle price line (`span
  15px/#4c57d6/500`), blurb. Six offerings: Shared Hosting ($2.80), WordPress
  Hosting ($4.20), Dedicated Hosting ($79.00), SSL Certificate (free), Web
  Hosting ($3.90), Cloud Server ($12.00) — paraphrase copy.

### 5. Pricing (`section.pricing-section.spad`)
- Left-centered uppercase title (`.normal-title`, left-aligned) + right-aligned
  **Monthly/Yearly pill toggle** (`.pricing__swipe-btn`: `border:1px solid
  #4c57d6; border-radius:50px; height:52px; width:266px`; active label
  `background:#4c57d6; color:#fff`; labels `15px/#444/700 uppercase`; radios
  visually hidden; `:focus-within` ring). Real `role="radiogroup"` +
  `aria-label="Billing period"`.
- Two plan sets: `.monthly__plans` (Started $15.90, Business $25.90, Premium
  $35.90, Dedicated $45.90) and `.yearly__plans` ($150/$250/$350/$450).
- Card: `background:#fff; padding:22px 20px 20px; box-shadow:0 0 10px
  #1208511a; margin-bottom:40px`; hover deeper shadow. `h4` tier name
  (`#111/700`), **navy price band** `h3` (`background:#120851; color:#fff;
  font-weight:700; padding:24px 0 20px; border-radius:10px; margin:0 -30px`;
  `/ month` suffix `16px/400`), 7-item list (`li 14px/#444; line-height:40px`),
  secondary "Choose plan" button. Hover: band → `#4c57d6`, button →
  `#4c57d6`/white.

### 6. Achievement (`section.achievement-section.spad.set-bg`)
- Full-width **set-bg cover photograph** (`background-position:top center`) with
  `padding-bottom:450px` (the tall tail is what the next band overlaps). Use a
  picsum placeholder (`https://picsum.photos/seed/harbor-achievement/1920/900`).
- Four centred items (`col-lg-3`): accent icon (`40px #4c57d6`), big white bold
  number, uppercase white label. Source: 2468 Clients · Domains · Server ·
  Installs. Counter animates up over ~4s (`data-countup data-duration="4"`).

### 7. Work band (`section.work-section.spad`)
- **Overlaps the achievement band:** `margin-top:-405px; position:relative;
  z-index:9; border-top:1px solid #62677d; padding-bottom:0`. Renders over the
  bottom of the achievement photo band.
- White centered uppercase title (e.g. "How to build your website online
  today?"), `margin-bottom:70px`.
- Two `col-lg-6` items (`.work__item`, `text-align:center`): large accent icon
  (`53px #4c57d6`), small periwinkle uppercase eyebrow (`span 14px #4c57d6`),
  bold `h3`, paragraph, pill "Read More". Topics: website builder + online store.

### 8. Choose-plan CTA (`section.choose-plan-section.spad`)
- `col-lg-6` illustration (~570×501, the app's own) beside a text block.
- Text: bold `h3` (e.g. "Up to 70% discount with free domain registration
  included!"), six-item checklist (`li 16px/500 #111; line-height:40px`, accent
  check glyph `margin-right:5px #4c57d6`), periwinkle pill CTA. Items: free
  domain, free email, disk space, free website builder, free marketing tools,
  1-click WordPress.

### 9. Footer (`footer.footer-section`)
- **Top band** (`.footer__top`): two-tone navy via `::before` (left 50%,
  `#0b052f`) and `::after` (right 50%, `#0e0739`); left "Need Help? Call us" with
  a periwinkle phone; right "Join Now…" heading + "Log in" / "Sign Up" pills.
- **Text area** (`.footer__text.set-bg`, own background): wordmark + blurb, four
  social icons in a row (Facebook, X, YouTube, Instagram — `lucide-react` with
  `aria-label`s; source uses FontAwesome), then link columns: **Company** (Our
  Company, About Us, Press & Media, News / Blogs, Careers), **Hosting** (Web
  Hosting, Reseller Hosting, VPS Hosting, Dedicated Servers, Cloud Hosting), and
  **Contact Us** (address + two phones + email; `li 14px/#c4c4c4` with periwinkle
  icon).
- Bottom line: copyright + the **Component Dock** link
  (`https://www.componentdock.com/`) — the source's Colorlib credit is replaced.

## Responsive notes
- Breakpoints mirror the source's Bootstrap grid: `col-lg-*` ≥992px, `col-md-*`
  ≥768px, `col-sm-*` ≥576px. Services 3→2 per row; pricing stacks; hero collapses
  to a single column (illustration below text); nav collapses to an accessible
  toggle; the work band's `-405px` overlap is reduced so nothing clips.
- Keep `.spad` vertical rhythm consistent; no horizontal scroll at 320px.

## Copy & asset rules
- Paraphrase all copy — keep the same *kind* of content (eyebrow + headline +
  CTA, card title + price + blurb, tier + price + feature list), never the source
  strings verbatim in app files.
- No ColorLib/`deerhost` string anywhere in `apps/harbor` (comments included).
- No copied assets: photos from `https://picsum.photos/seed/harbor-<n>/<w>/<h>`,
  icons from `lucide-react`, own logo/illustrations; never the source's
  `img/**`, `hero-right.svg`, `choose-plan.svg`, `footer-bg.svg`, `line.png`,
  favicon or CSS.
