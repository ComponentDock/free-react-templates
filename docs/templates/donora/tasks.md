# Donora (ColorLib Cause) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-donora`.

## Design notes (replication findings)

- **Original:** ColorLib "Cause" — charity/fundraising template, Charity
  category (source: https://colorlib.com/wp/template/cause/). TEMPLATES.md
  has TWO copies of this item (lines 358 and 1252 — mark ALL when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/cause/ (HTTP 200,
  full rendered DOM, 41.5 KB; page title "Cause Charity"). Stylesheets:
  `css/linearicons.css`, `css/font-awesome.min.css`, `css/bootstrap.css`,
  `css/owl.carousel.css` + `css/main.css` (main, 65.4 KB). Fonts: Google
  Fonts **Playfair Display** (serif, all headings) + **Roboto** (body,
  16px/1.625em weight 500).
- **Screenshot:** `cause-free-template-1.jpg` (1200×946, viewed in browser)
  — clean modern minimalist split hero: white left half with big serif
  headline "New way to give back", body copy, circular green play button
  ("Watch our intro video"); right half = photo of a boy running in a grassy
  field with a semi-transparent white donation box overlaid ("Enter Monthly
  Donation Amount", input 125.00 USD, white "Donate Now"). Green leaf logo +
  "Cause" serif top-left, nav links top-right (HOME/ABOUT/CAUSES/EVENTS/
  BLOG/PAGES/CONTACT). Carousel arrows below hero; centered "Our Major
  Causes" serif title. The demo brands itself "Cause"; recreation uses the
  NEW name **Donora**.
- **Visual design (from DOM + CSS tokens + screenshot):** bright, friendly,
  green-led charity aesthetic. Brand primary vivid green `#61c524`
  (buttons/progress bars/hover), mint secondary `#46dbb7`; rainbow accent
  palette per card/box: orange `#f9a22b`, cyan `#4cd3e3`, yellow `#f4e700`,
  red `#f44a40`, blue `#38a4ff`, purple `#a978e0`, pink `#e66686`. White
  page, `#f9f9ff` section bands, dark navy `#04091e` footer. Serif black
  headings, grey `#777777` Roboto body. 0-radius rectangular buttons; white
  cards with `#eeeeee` 1px borders.
- **Structure (1:1, section order):**
  1. Header `#header` (fixed, `padding: 14px 0`; `#222222` bg on mobile
     ≤1024px): logo left; nav right — Home (`.menu-active`), About, Causes,
     Events, Blog (dropdown: Blog Home, Blog Single), Pages (dropdown:
     Donation, Event Details, Elements), Contact.
  2. Banner `.home-banner-area` (white):
     - Left `.header-left` (`col-lg-5`): h1 60px "New way to give back",
       paragraph, `.vdo-section` play icon + "Watch our intro video"
       (black 14px link).
     - Right `.header-right` (`col-lg-7`): `owl-banner` carousel (2× same
       hero image) + `.form-wrap` overlay (absolute, `rgba(255,255,255,0.3)`
       bg, `padding: 40px`, width 54%): "Enter Monthly Donation Amount" +
       amount input (placeholder "125.00", USD) + white "Donate Now".
  3. Causes Area `.causes-area.section-gap` — centered `.section-title`
     (`padding-bottom: 95px`): h2 36px "Our Major Causes" + paragraph; row
     of 3 `.single-cause` cards (`1px #eeeeee` border):
     - `.top` (`padding: 30px`): image (`.thumb`, `margin-bottom: 30px`),
       h3 title, `.text` paragraph.
     - `.middle`: progress bar `aria-valuenow="75"` (bar1 orange, bar2
       green, bar3 purple) + stats: 76% Funded / $7,689 Pledged / 29 Days
       Remaining (h5 numbers + 12px labels).
     - `.bottom` (`padding: 30px`, flex space-between): `offwhite` "View
       Details" + green "Donate Here".
  4. Collection Area `.collection-area.section-gap` (bg `#f9f9ff`): left h2
     36px "Experience How your Donation Reach Over Years" + paragraph; 4
     `.collection-box` cards (white, `padding: 20px`, centered): USD small,
     h3 36px amount with per-year accent (2015 orange `#f9a22b`, 2016 dark,
     2017 green `#61c524`, 2018 purple `#a978e0`), arrow-up icon, year.
     Values 21 M / 15 M / 23 M / 25 M.
  5. Condition Area `.condition-area.section-gap`: left `owl-condition`
     carousel (2× image), right `.condition-right` (`offset-lg-1 col-lg-5`):
     h2 36px "New way to give back" + 2 paragraphs + 4-item bullet list.
  6. Donation Area `.donation-area.section-gap-top` — cover bg image
     `donation-bg.jpg`, centered `col-lg-5`: h1 36px white "Donate to help
     People Around the World" + white paragraph; `.text-wrap`
     `margin-bottom: 250px`.
  7. Donation Form Area `.donation-form-area.section-gap-bottom` —
     `margin-top: -170px` (overlap above); `.donation-box` (`padding: 50px`,
     white, shadow `0 20px 50px rgba(153,153,153,0.2)`, `col-lg-6`): amount
     input (placeholder "$20.00", `#f9f9ff` bg, 1px `#dddddd` border, USD),
     two `.donation-type` radio boxes (`1px #dddddd` border, `padding: 20px`;
     Playfair "One Time" / "Ongoing" + caption), full-width green "Donate
     Now".
  8. Brand Area `.brand-area.section-gap-bottom`: `owl-brand` logo strip —
     5 brand logos centered.
  9. Event Area `.event-area.section-gap-bottom`: left `.event-left`
     (`col-lg-5`): h1 36px "Upcoming Events" + paragraph + 3
     `.single-event` blocks (bg `#f9f9ff`, `padding: 30px 40px`,
     `margin-top: 45px`; date "12th September, 2018" + h4 title link);
     right `.event-right` (`offset-lg-1 col-lg-6`): `owl-event` carousel
     (3× image).
  10. Footer `.footer-area.section-gap` (bg `#04091e`, 3 columns):
      - `col-lg-5` About Us: h6 18px 600 white + paragraph + copyright line.
      - `col-lg-5` Newsletter: h6 + "Stay update with our latest" + email
        input + arrow submit button.
      - `col-lg-2` Follow Us: h6 + "Let us be social" + 4 social icons
        (Facebook, Twitter, Dribbble, Behance).
- **Design tokens (from `css/main.css`):**
  - Primary green `#61c524` (`.primary-btn` bg, hover border/text,
    `.progress-bar2`, `.color3`); secondary mint `#46dbb7`.
  - Accents: orange `#f9a22b` (`.color1`, `.progress-bar1`), cyan
    `#4cd3e3`, yellow `#f4e700`, red `#f44a40`, blue `#38a4ff`, purple
    `#a978e0` (`.color4`, `.progress-bar3`), pink `#e66686`.
  - Bg: white page; `#f9f9ff` bands (collection, single-event) + form
    fields; `#eeeeee` card borders; `#dddddd` form borders; footer
    `#04091e`; hero overlay `rgba(255,255,255,0.3)`.
  - Text: headings Playfair Display `#000000`; body Roboto `#777777`
    16px/1.625em 500; white on green/dark/image.
  - Buttons `.primary-btn`: green bg, white 14px 500 text,
    `line-height: 47px`, `padding: 0 35px`, 0 radius; hover = transparent +
    green border/text; `.white` variant white bg black text.
  - Rhythm: `.section-gap` `padding: 150px 0` (60px ≤991px); section-title
    `padding-bottom: 95px`; h1/h2 36px (hero h1 60px); h3 30px.
- **Recreation decisions:** picsum placeholders (`picsum.photos/seed/donora-<n>`);
  lucide-react icons (Play, ArrowUp, ArrowRight, socials; Behance as inline
  SVG or omit); Google Fonts Playfair Display + Roboto; brand green in
  `@theme`; carousels → simple index slider (prev/next + dots) — no Owl
  dependency; no assets copied.

## Implementation tasks

1. **Scaffold** — `apps/donora` from the simplest existing app (copy folder,
   rename package to `@free-react-templates/donora`); `npm install` at root;
   `vite.config.ts` with `injectUiSource()`.
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #61c524`,
   `--color-mint: #46dbb7`, accents (orange `#f9a22b`, purple `#a978e0`,
   cyan `#4cd3e3`, yellow `#f4e700`, red `#f44a40`, blue `#38a4ff`, pink
   `#e66686`), `--color-ink: #04091e`, fonts Playfair Display (display) +
   Roboto (sans).
3. **Components** (TDD, 100% coverage):
   - `Navbar.tsx` — fixed header, logo "Donora", nav links (Home active),
     dark-mode toggle.
   - `Hero.tsx` — split hero: headline/paragraph/play-link left; image +
     overlaid donation box (amount input + USD + Donate Now) right.
   - `CauseCard.tsx` + `Causes.tsx` — section title + 3 cards (image, title,
     text, 75% progress bar with per-card accent, stats row, 2 buttons).
   - `Collection.tsx` — heading + 4 year boxes with per-year accent colors.
   - `Condition.tsx` — image slider left + heading/paragraphs/bullets right.
   - `DonationCta.tsx` + `DonationForm.tsx` — image band with white heading;
     overlapping card (amount input, One Time / Ongoing radios, Donate Now).
   - `BrandStrip.tsx` — 5 logo placeholders.
   - `Events.tsx` — heading + 3 event entries + image slider right.
   - `Footer.tsx` — 3 columns (About, Newsletter w/ submit, Follow Us
     socials), dark navy bg.
4. **App.tsx** — compose in reference order; document title "Donora —
   Charity Template".
5. **Verify** — `scripts/verify-app.sh donora` (typecheck + lint + 100%
   coverage + build); spec Gherkin scenarios → Vitest scenario tests.
6. **Ship** — PR `feat/template-donora`; after merge mark BOTH TEMPLATES.md
   Cause lines (358, 1252) `[x]` + Surge URL + homepage; `npm run
readme:status`.
