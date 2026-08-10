# Creeds (ColorLib "Faith") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-creeds` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Faith" — church website template
  (source: https://colorlib.com/wp/template/faith/). Listed in TEMPLATES.md
  (Church section, line 391; duplicates at lines 1263 and 1294 — mark EVERY
  copy `[x]` when done).
- **Live preview:** https://preview.colorlib.com/theme/faith/ — reachable
  (HTTP 200). HTML saved at `/tmp/faith.html` (29.2 KB), stylesheet at
  `/tmp/faith.css` (62 KB, `css/style.css`). Screenshot
  `faith-free-template.jpg` (1200×946) reviewed via browser vision: dark
  church-interior hero with white centered text, cyan "Get Started" button,
  bright cyan countdown band with big white timer numbers, white nav.
- **Brand:** "Faith Church Multi" — modern clean church landing. Demo brand
  "Faith".
- **Fonts:** Poppins (headings 600/700 — 60px hero h1, 36px timer numbers
  600; body 400; buttons 500 14px uppercase). Single Google Fonts `<link>`.

### Design tokens

| Token       | Value                 | Used for                                                       |
| ----------- | --------------------- | -------------------------------------------------------------- |
| brand-cyan  | `#00c8e6`             | primary accent: countdown band, feature cards, CTAs, subscribe |
| dark        | `#04091e`             | alternating feature cards, footer, overlay base                |
| overlay     | `rgba(4,9,30,0.8)`    | hero + donate photo band overlay                               |
| section bg  | `#f9f9ff`             | sermons area                                                   |
| heading     | `#222222`             | headings, nav text, outline button text                        |
| body        | `#777777`             | paragraphs, meta, timer labels                                 |
| cyan-light  | `#4cd3e3`             | secondary accent                                               |
| blue        | `#38a4ff` / `#52c5fd` | secondary accent                                               |
| yellow      | `#f4e700`             | secondary accent                                               |
| red         | `#f44a40` / `#f54940` | secondary accent (sparse)                                      |
| outline-brd | `#eeeeee`             | outline button border                                          |

### Buttons

- **Primary CTA (`.btn_hover_two`):** solid `#00c8e6` bg, white text, square
  corners (`border-radius: 0`), `padding: 4px 35px`, Poppins 500 14px
  uppercase; hover → transparent bg, cyan text. Used for hero "Get Started",
  donate "Donate Now".
- **Outline (`.btn_hover`):** `#222222` text, 1px `#eeeeee` border, square,
  same sizing; hover → `#00c8e6` bg + white text. Used for hero "Donate Now",
  about "Read Full Story", event "View Details".
- **View (`.view_btn`):** white bg; hover → `#222222` bg + border. Used for
  feature "View Details".
- **Subscribe (`.sub-btn`):** `#00c8e6` bg, white 300-weight text, square,
  `line-height: 34px`, `padding: 4px 11px 0`, absolutely positioned inside
  the newsletter email input.

### Section-by-section fidelity notes (in DOM order)

1. **Top bar** (`header_top`): thin white strip. "My Account" (lucide `User`)
   - "Donate Now" + social icons (Twitter/Facebook inline SVG).
2. **Nav** (`.main_menu`): white bar. Logo = `image/Logo.png` (cross icon +
   "Faith" wordmark) → recreate as lucide `Cross` + "Creeds" styled text.
   Uppercase links: HOME · MINISTRIES · SERMONS · EVENT · PAGES · BLOG ·
   CONTACT (source misspells "Minisrtries" — fix it). Search icon
   (`lnr-magnifier` → lucide `Search`) right. Inner pages (about-us, blog,
   blog-single, contact, donation, elements, event, event-details, gallery,
   ministries, sermons) NOT recreated — dead anchors `#` ok. Mobile:
   hamburger + stacked panel.
3. **Hero** (`banner_area d-flex text-center`): `min-height: 680px`, bg =
   `linear-gradient(to right, rgba(4,9,30,0.8), rgba(4,9,30,0.8)), url(banner.jpg)`
   cover. Centered white: eyebrow h6 "Who Created Us" (14px uppercase,
   letter-spacing 1.4px), h1 "Keep faith always" (60px/60px 700, padding
   8px 0 20px), short paragraph, CTAs "Get Started" (primary) + "Donate Now"
   (outline).
4. **Countdown** (`event_date_area`): `background: #00c8e6; padding: 100px
0`. Left: h3 "Spreading the faith to all" + "5th may, 2018, Saturday,
   09.00 am to 05.00 pm". Right: h4 "Our Next Event Starts in" + `.timer`
   strip `rgba(255,255,255,0.3)`, `padding: 27px 0`, 4 equal columns
   (`width: calc(100%/4)`): number Poppins 600 36px/45px white, label 14px
   capitalize. LIVE countdown → fixed future date, never negative.
5. **About** (`about_area section_gap`): image left, text right
   (`padding-right: 70px`): h2 "Welcome to Faith Church" (paraphrase brand →
   "Welcome to Creeds Church"), 2 paragraphs (`padding: 15px 0 25px`),
   "Read Full Story" outline link.
6. **Features** (`features_area`): 4 cards, `padding: 73px 45px 80px 60px`,
   white text; odd = `#00c8e6`, even = `#04091e`; `border-left: 1px solid
#fff` between. Each: lucide icon, h3 title (Spreading Light to world ·
   Spreading Peace to world · Spread Happyness to world · Spreading Light to
   world — paraphrase the 4th), paragraph, "View Details" (white bg, dark
   hover).
7. **Sermons** (`sermons_work_area section_gap`, `background: #f9f9ff`):
   centered h2 "Sermons This Week" + lorem; `.sermons_slider` owl-carousel
   (3 slides: image + content: title, paragraph, meta, "View More Details").
   Recreate as static 3-card responsive row.
8. **Donate** (`donate_area`): `padding: 110px 0`, bg =
   `linear-gradient(to right, rgba(4,9,30,0.8), rgba(4,9,30,0.8)), url(donate.jpg)`
   cover, centered white: h2 "Your donation can save many lives" +
   paragraph + form: h3 "How much would you like to donate?" + amount input
   - "Donate Now" (primary). Validate amount: error on empty/invalid,
     success + reset on valid.
9. **Events** (`event_blog_area section_gap`): centered h2 "Upcoming Events"
   - lorem; 3 `.event_post` cards: title (Spreading Peace to world · Spread
     Happyness to world · Spreading Light to world), date "Saturday, 5th may,
     2018" (lucide `Calendar`), venue "Rocky beach Church, Santa monica, Los
     Angeles, USA" (lucide `MapPin`), "View Details" outline link.
10. **Footer** (`footer-area`, `background: #04091e`): 4 `.single-footer-widget`
    columns — (1) "About Agency": logo + paragraph; (2) "Navigation Links":
    Home · Feature · Services · Portfolio · Team · Pricing · Blog · Contact;
    (3) "Newsletter": short line + email input + absolute cyan subscribe
    button (validate like donate form); (4) "InstaFeed": 8-thumbnail flex
    grid (`image/instagram/Image-01..08.jpg`). Bottom bar: "© 2026 Creeds.
    All rights reserved." + reworded "Made with ❤" (no ColorLib credit) +
    social icons.

## Task outline (implementer)

1. `apps/creeds` — copy simplest existing app, rename package
   `@free-react-templates/creeds`, register in lockfile (`npm install` at
   root), keep `injectUiSource()` in `vite.config.ts`.
2. `@theme` tokens in `src/index.css` (see Design tokens table); Poppins
   `<link>` in `index.html`; document title "Creeds — Church Template".
3. Components: `TopBar`, `Navbar` (scroll-transparent optional — source is a
   static white bar; keep static), `Hero`, `Countdown` (live timer hook +
   fake-timer tests), `About`, `Features`, `Sermons`, `Donate` (form
   validation), `Events`, `Footer` (newsletter form validation).
4. Tests first (red) per component, 100% coverage incl. countdown ticking
   (vi.useFakeTimers + act), form validation paths.
5. `scripts/verify-app.sh creeds` green; visual check vs
   https://preview.colorlib.com/theme/faith/ and the screenshot.
6. PR: source ColorLib "Faith", preview URL, tokens, differences
   (name/placeholders/paraphrased copy). Mark TEMPLATES.md lines 391, 1263,
   1294 `[x]` + surge URL + homepage + `npm run readme:status`.
