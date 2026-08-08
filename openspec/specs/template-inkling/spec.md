# Template: Inkling (Blog / Magazine)

## Purpose

Inkling is a single-page blog/magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Readit" template
(see TEMPLATES.md), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Readit" — a Bootstrap 4 blog/magazine layout:
  dark navbar, full-height hero with a photo + magenta→amber gradient overlay,
  a vertical list of large image+text blog post rows, circular pagination, and
  a dark footer with latest-news and contact widgets
  (source: https://colorlib.com/wp/template/readit/).
  TEMPLATES.md has ONE copy of this item (line 282 — mark it `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/readit/
  (HTTP 200, 25.8 KB DOM, fetched 2026-08-08). The live DOM is the primary
  reference and matches the screenshot.
- **Preview CSS:** `https://preview.colorlib.com/theme/readit/css/style.css`
  (65.9 KB, classic FTCO Bootstrap 4 stylesheet; tokens extracted below).
- **Screenshot:** `readit-free-template.jpg` (1200×946, verified via browser
  vision). Matches the live DOM: hero with a diagonal magenta (`#f200ff`) →
  amber (`#ffba42`) gradient overlay over a photo of a smiling woman with a
  tablet (blended, translucent), small white "Hello! Welcome to" subheading,
  huge bold white "Readit blog" headline, white paragraph copy, amber scroll
  chevron bottom-left; first blog row shows a large rectangular image left
  (vintage car crashing through a wall) with an uppercase light-grey category
  label ("ILLUSTRATION"), bold dark title "Build a website in minutes with
  Adobe Templates", faint grey meta below; dark nav bar top with Home /
  Articles / Team / Contact right-aligned.
- **Section order (1:1):** Navbar (dark, brand + right nav + toggler) → Hero
  (full-height bg image + gradient overlay, subheading, h1, paragraph, scroll
  mouse indicator) → Blog list (9 `.case` rows: image left col-xl-8, text
  right col-xl-4 — category label, big title, tag links, share icons,
  meta date + read time) → Pagination (circular 1 2 3 4 5) → Footer (dark
  `#222831`: logo + blurb, Latest News widget, Information links, Have a
  Questions? contact widget, copyright bar).

### Navbar (from live DOM)

- `nav.ftco_navbar.bg-dark.ftco-navbar-light` — dark transparent bar over the
  hero; brand "Readit." (`navbar-brand`, Poppins 26px weight 900) with the
  "it" letters styled in brand yellow (`i { font-style: normal; color:
#ffd369 }`).
- Right-aligned nav: Home (active), Articles, Team, Contact — 18px,
  `rgba(255,255,255,0.8)`, padding `.9rem 20px`; hover + active `#ffd369`.
- Toggler: "Menu" text + icon, uppercase, letter-spacing .1em.
- On scroll (`.scrolled`): becomes `position: fixed` white bar with shadow,
  links turn black, active stays `#ffd369`.

### Hero (from live DOM)

- `.hero-wrap.js-fullheight` with `background-image: url('images/bg_1.jpg')`,
  cover, top center; overlay div `opacity: .8` with
  `linear-gradient(45deg, #f200ff 0%, #ffba42 100%)` (magenta → amber).
- `.slider-text`: subheading "Hello! Welcome to" (18px, white) above
  `h1` "Readit blog" (10vw, white, weight 700, Poppins, line-height 1.2;
  `<span>` in `#ffd369`), paragraph (18px, `rgba(255,255,255,0.9)`):
  "Far far away, behind the word mountains, far from the countries Vokalia
  and Consonantia, there live the blind texts. Separated they live in
  Bookmarksgrove right at the coast of the Semantics, a large language ocean."
- Scroll indicator: `.mouse` / `.mouse-icon` / `.mouse-wheel` (bordered mouse
  shape with animated wheel dot, yellow).

### Blog list (from live DOM)

- `.ftco-section` with 9 `.case` rows (live DOM; screenshot shows the first
  row). Each row: `div.row` → `col-md-6 col-lg-6 col-xl-8 d-flex` (image:
  `a.img.w-100`, height 400px, `background-image` style) +
  `col-md-6 col-lg-6 col-xl-4 d-flex` (text).
- Text column: `.subheading` uppercase category (14px, weight 500,
  `rgba(0,0,0,0.2)`) — "Illustration" / "Application" / "Design"; `h2` title
  (40px, weight 700, black) "Build a website in minutes with Adobe Templates";
  tag links; `.media-social` share icon row (50×50 squares,
  `rgba(0,0,0,0.05)` bg, radius 4px, `opacity: 0` → `1` on row hover, icon
  hover bg `#ffd369`); `.meta p` (12px, `rgba(0,0,0,0.2)`): date
  "11/13/2019" + "12 min read".
- Hover: title dims to `rgba(0,0,0,0.5)`, meta links turn black, share icons
  fade in.

### Pagination (from live DOM)

- `.block-27` centered: circular links 40×40, `border: 1px solid #e6e6e6`,
  gray text, radius 50%; active page: `background: #ffd369`, white text,
  transparent border. Pages: ‹ 1 2 3 4 5 ›.

### Footer (from live DOM)

- `.ftco-footer.ftco-bg-dark` — `background: #222831`, padding `5em 0 3em`.
- Logo "Readit." 34px weight 800 white, "it" span yellow; blurb paragraph
  (Far far away…); social icon links.
- "Latest News" widget: 2 posts — 80×80 rounded image + heading 16px
  `rgba(255,255,255,0.7)` "Even the all-powerful Pointing has no control
  about", meta 11px yellow: "Oct. 16, 2019 · Admin · 19".
- "Information" widget: Home / About / Articles / Contact links (white,
  hover yellow).
- "Have a Questions?" widget: 203 Fake St. Mountain View, San Francisco,
  California, USA; +2 392 3929 210; info@yourdomain.com.
- Copyright bar: "Copyright © <year> All rights reserved | This template is
  made with ♥ by Colorlib".

## Design tokens (from preview CSS `css/style.css` + DOM)

| Token            | Value                                                                                                                        | Where                                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Brand yellow     | `#ffd369`                                                                                                                    | brand "it" span, nav hover/active, btn-primary, media-social hover, pagination active, footer logo span + link hover, latest-news meta |
| Gradient magenta | `#f200ff`                                                                                                                    | hero overlay gradient start (45deg, opacity .8)                                                                                        |
| Gradient amber   | `#ffba42`                                                                                                                    | hero overlay gradient end; scroll indicator                                                                                            |
| Footer bg        | `#222831` (dark slate)                                                                                                       | footer, `ftco-bg-dark`                                                                                                                 |
| White            | `#ffffff`                                                                                                                    | hero h1/subheading, btn-primary text, footer text/links                                                                                |
| Text black       | `#000000`                                                                                                                    | case h2 titles; scrolled nav links                                                                                                     |
| Muted text       | `rgba(0,0,0,0.2)` (category + meta), `rgba(0,0,0,0.5)` (title hover)                                                         | blog rows                                                                                                                              |
| Hero copy        | `rgba(255,255,255,0.9)` (p), nav links `rgba(255,255,255,0.8)`, footer `rgba(255,255,255,0.7)`                               | hero, navbar, footer                                                                                                                   |
| Border           | `#e6e6e6` (pagination), gray `#6c757d` (pagination text)                                                                     | pagination circles                                                                                                                     |
| Font family      | `'Poppins', Arial, sans-serif` (Google Fonts `/cf-fonts/s/poppins`, weights 300–900)                                         | whole template                                                                                                                         |
| Buttons          | `border-radius: 3px`; primary = `#ffd369` bg + white text, hover = transparent bg + `#ffd369` text                           | btn-primary (used in footer subscribe)                                                                                                 |
| Blog image       | height 400px, cover, `background-image` style (replaces with picsum)                                                         | each `.case` row                                                                                                                       |
| Share icons      | 50×50, `rgba(0,0,0,0.05)` bg, radius 4px, hover `#ffd369`; `opacity:0` → 1 on row hover                                      | blog rows                                                                                                                              |
| Pagination       | 40×40 circles, 1px `#e6e6e6` border, radius 50%, active `#ffd369` bg                                                         | `.block-27`                                                                                                                            |
| Latest-news img  | 80×80 rounded                                                                                                                | footer widget                                                                                                                          |
| Container        | max-width 1210px                                                                                                             | whole template                                                                                                                         |
| Icons            | lucide-react equivalents (Menu, MousePointer/ChevronDown, Calendar, Clock, Share2, MapPin, Phone, Mail, Heart, social icons) | navbar, hero, meta, share, contact                                                                                                     |

## Recreation decisions

- Deliverable: single-page blog/magazine landing — dark navbar (transparent
  over hero → white fixed on scroll), full-height hero with photo +
  magenta→amber gradient overlay, 9 alternating image/text blog rows,
  circular pagination, dark footer with 4 widgets.
- Brand name "Inkling" replaces "Readit"; never use "Readit" or "Colorlib" as
  the brand. Wordmark: "Inkling" in Poppins 900 with the trailing "g" (or an
  accent dot) in brand yellow.
- The multi-page links (Articles / Team / Contact pages, per-post pages) are
  decorative anchors to `#` — single-page deliverable, note it in the PR.
- Photos → seeded picsum placeholders (`picsum.photos/seed/inkling-<n>/<w>/<h>`):
  hero bg 1600×900, blog row images 800×600 (400px tall crop), latest-news
  80×80; no assets copied.
- Icons → lucide-react (Menu, ChevronDown, Calendar, Clock, Share2, MapPin,
  Phone, Mail, Heart, ArrowLeft, ArrowRight, Twitter/X, Facebook, Instagram,
  Linkedin). Brand social icons are NOT in lucide-react — inline SVG if exact
  brand icons are needed, else generic icons.
- Fonts: Google Fonts `<link>` — "Poppins" (300/400/500/600/700/800/900).
- Newsletter/subscribe form (footer "Subscribe" btn-primary): client-side
  only, no backend. All links decorative anchors.
- Skip link "Skip to main content" (existing convention).
- Scroll behavior: navbar `scrolled` state (fixed white bar + shadow) via
  scroll listener; mouse scroll indicator animation via CSS keyframes.

## Requirements

### Requirement: Page header

The system SHALL render a dark navbar with the brand, a right-aligned
navigation bar, and a mobile menu toggler.

#### Scenario: Navbar content

- **GIVEN** the Inkling page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the wordmark "Inkling" with an accent on the
  last letter in brand yellow
- **AND** it SHALL show a nav bar with links Home, Articles, Team, and Contact
  on the right
- **AND** Home SHALL be the active link
- **AND** on small screens a "Menu" toggler SHALL open a collapsible menu with
  the same links

#### Scenario: Scrolled navbar

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar transitions
- **THEN** the navbar SHALL become a fixed white bar with a shadow
- **AND** the links SHALL turn black while the active link stays brand yellow

### Requirement: Hero

The system SHALL render a full-height hero with a background photo, a
magenta-to-amber gradient overlay, a subheading, a large headline, a
paragraph, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-height background image with a
  `#f200ff` → `#ffba42` diagonal gradient overlay at 80% opacity
- **AND** it SHALL show the subheading "Hello! Welcome to"
- **AND** it SHALL show the headline "Inkling blog" in white bold Poppins with
  one word in brand yellow
- **AND** it SHALL show the paragraph "Far far away, behind the word
  mountains…" in near-white text
- **AND** it SHALL show a mouse-shaped scroll indicator at the bottom

### Requirement: Blog list

The system SHALL render a vertical list of blog post rows, each with a large
image and a text column.

#### Scenario: Blog row content

- **GIVEN** the blog section is displayed
- **WHEN** the rows render
- **THEN** the section SHALL show nine blog rows
- **AND** each row SHALL have a large image on the left (400px tall) and text
  on the right
- **AND** each text column SHALL show an uppercase category label
  (Illustration / Application / Design), a bold 40px title, and meta with a
  date and a read time
- **AND** hovering a row SHALL dim the title, darken the meta links, and fade
  in the share-icon row
- **AND** each share icon SHALL turn brand yellow on hover

### Requirement: Pagination

The system SHALL render circular pagination controls below the blog list.

#### Scenario: Pagination display

- **GIVEN** the blog section is scrolled to the bottom
- **WHEN** the pagination renders
- **THEN** it SHALL show circular page controls (previous, 1–5, next) with a
  `#e6e6e6` border
- **AND** the active page SHALL have a brand-yellow background with white text

### Requirement: Footer

The system SHALL render a dark footer with a logo and blurb, a latest-news
widget, an information column, a contact widget, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page scrolls to it
- **THEN** the footer SHALL appear on a `#222831` background
- **AND** it SHALL show the "Inkling" logo with a yellow accent, a blurb
  paragraph, and social links
- **AND** the "Latest News" widget SHALL show two posts, each with a small
  rounded image, a heading, and yellow meta (date · author · comments)
- **AND** the "Information" widget SHALL show links Home, About, Articles,
  and Contact
- **AND** the "Have a Questions?" widget SHALL show an address, a phone
  number, and an email
- **AND** the bottom bar SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a skip link, a
main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Inkling app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL start with a "Skip to main content" link
- **AND** the header SHALL be in the banner landmark, the sections in the
  main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Inkling — Blog Magazine Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh inkling` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Navbar: dark bar over hero, "Inkling" wordmark with yellow accent,
      right nav Home/Articles/Team/Contact (Home active), Menu toggler on
      mobile; fixed white bar + black links + yellow active after scroll
- [ ] Hero: full-height, bg photo + `#f200ff`→`#ffba42` 45deg gradient
      overlay (opacity .8), "Hello! Welcome to", "Inkling blog" (yellow
      accent word), near-white paragraph, mouse scroll indicator
- [ ] Blog list: 9 rows, image left (400px) + text right; uppercase category,
      40px bold title, meta (date + read time); hover dims title + fades in
      share icons (yellow hover)
- [ ] Pagination: circular controls, `#e6e6e6` borders, active page
      yellow/white
- [ ] Footer on `#222831`: logo + blurb + socials, Latest News (2 posts,
      80×80 rounded img, yellow meta), Information links, Have a Questions?
      (address/phone/email), copyright bar
- [ ] Fidelity: section order 1:1, `#ffd369` brand yellow, Poppins,
      `#f200ff`→`#ffba42` hero gradient, `#222831` footer, picsum
      placeholders seeded `inkling-<n>`, no copied assets
- [ ] TEMPLATES.md: mark the Readit copy (line 282) `[x]` and append the live
      surge URL
- [ ] `npm install` at root before committing (lockfile registers
      `apps/inkling`); `grep -c "free-react-templates/inkling"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-inkling.surge.sh"`
      in `apps/inkling/package.json`
- [ ] PR title: `feat: Inkling — blog magazine website template (ColorLib
    Readit)`; body includes the source URL, preview URL, tokens, and the
      single-copy TEMPLATES.md note
