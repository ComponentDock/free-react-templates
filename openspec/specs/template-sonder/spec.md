# Template: Sonder (Lifestyle Blog Template)

## Purpose

Sonder is a single-page lifestyle blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Philosophy" starter blog template (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Philosophy" — "A Starter Blog Template" for
  creative professionals and writers
  (source: https://colorlib.com/wp/template/philosophy/).
  TEMPLATES.md has **FOUR copies** of this item (lines 280, 1723, 2417,
  2989 — mark ALL of them `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/philosophy/
  (HTTP 200, 51 KB DOM, fetched 2026-08-08; the live DOM is the primary
  reference and matches the screenshot: dark header with featured posts,
  light masonry grid, white popular-posts strip, dark footer).
- **Screenshot:** `philosophy-free-lifestyle-blog-website-template.jpg`
  (1200×941, verified via browser vision). Matches the live DOM: dark
  charcoal header block with a featured-post layout (one large image post
  left, two stacked smaller posts right), below a light grey masonry blog
  grid of four+ cards (image posts + a text-only quote card), serif
  headlines, sans-serif body, small uppercase nav.
- **Section order (1:1):** Page header (logo + social icons + search +
  nav: Home, Categories ▾, Blog ▾, Styles, About, Contact) → Featured posts
  (1 big + 2 small image cards with category pill, title, author, date) →
  Masonry blog grid ("s-content", light grey `#f2f2f2`, mixed post formats:
  standard / quote / video / gallery / audio / link) + pagination → Popular
  posts + Tags ("s-extra", white) → Footer (Quick Links, Archives, Social,
  newsletter subscribe form, copyright + back-to-top).

### Featured posts (from live DOM)

- Big column: category pill "Music", title "What Your Music Preference Says
  About You and Your Personality.", author John Doe, December 29, 2037,
  avatar circle, background photo.
- Small column 1: category pill "Management", title "The Pomodoro Technique
  Really Works.", John Doe, December 27, 2037.
- Small column 2: category pill "LifeStyle", title "Throwback To The Good
  Old Days.", John Doe.

### Masonry grid (from live DOM)

- Post 1 (standard): "Just a Standard Format Post.", Dec 15, 2037, tags
  Design / Photography.
- Quote card: "Good design is making something intelligible and memorable.
  Great design is making something memorable and meaningful." — Esther
  Banks (styled as a large quotation).
- Post 3: "10 Interesting Facts About Caffeine." (Health, Cooking).
- Post 4: "No Sugar Oatmeal Cookies." (Health, Lifestyle).
- Additional entries: Key Benefits Of Family Photography, Workspace Design
  Trends and Ideas, Visiting Theme Parks Improves Your Health, etc.
- Pagination: Prev / 1 / 2 (current) / 3 / 4 / 5 / Next.

### Popular posts + tags (from live DOM)

- "Popular Posts" heading; 2-column mini cards: thumb + title + "By John
  Doe on Dec 19, 2037".
- "Tags" heading; tag cloud: Salad, Recipe, Places, Tips, Friends, Travel,
  Exercise, Reading, Running, Self-Help, Vacation (pill chips, `#e2e2e2`
  bg).

### Footer (from live DOM)

- Columns: Quick Links (Home, Blog, Styles, About, Contact, Privacy
  Policy), Archives (January, December, November, October, September,
  August), Social (Facebook, Instagram, Twitter, Pinterest, LinkedIn).
- "Our Newsletter" + short blurb + email input + "Send" submit (blue
  `#0054a5` button).
- Bottom bar: "© Copyright Sonder 2038" + "Site Template by Colorlib"
  (paraphrased) + back-to-top link.

## Design tokens (from preview css/main.min.css)

| Token          | Value                                                                                                                                    | Where                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Brand blue     | `#0054a5`                                                                                                                                | links, focus borders, primary button hover, subscribe submit button bg                         |
| Dark charcoal  | `#111` / `#151515` / `#19191b`                                                                                                           | pageheader bg (`#111` + diagonal repeating-linear-gradient lines), footer bg, featured overlay |
| Light grey     | `#f2f2f2`                                                                                                                                | masonry grid section bg (`s-content`)                                                          |
| White          | `#ffffff`                                                                                                                                | `s-extra` (popular posts + tags) bg, text on dark sections                                     |
| Ink / text     | `#000` (headings), `#767676` / `#727272` / `#656565` (meta/body)                                                                         | headings black; dates, authors, blurbs grey                                                    |
| Category pill  | cyan `#01aef0` bg, white text, uppercase bold 1.1rem, letter-spacing .2rem, padding 0 1.5rem                                             | featured + masonry entry category tags                                                         |
| Tag chips      | `#e2e2e2` bg, uppercase bold 1.3rem, letter-spacing .2rem, radius 3px                                                                    | tag cloud chips                                                                                |
| Highlight mark | `#ffd900` bg, `#000` text                                                                                                                | `<mark>` inline highlight (optional, decorative)                                               |
| Font family    | headings: `librebaskerville-bold` (serif); body/nav/buttons: `metropolis-*` (sans-serif: regular / medium / semibold / bold / extrabold) | h1–h6 serif; everything else sans                                                              |
| Buttons        | uppercase, letter-spacing .3rem, height 5.4rem, padding 0 3rem, border-radius 3px, border .2rem solid                                    | default bg `#c5c5c5` → hover `#b8b8b8`; primary bg `#000` white text → hover `#0054a5`         |
| Nav            | uppercase links, small; dropdown sub-menus (Categories, Blog)                                                                            | header nav                                                                                     |
| Section rhythm | ~96–120px vertical padding; row max-width ~1200px                                                                                        | all sections                                                                                   |
| Social icons   | brand icons (Facebook, X, Instagram, Pinterest, LinkedIn) — use inline SVG BrandIcon from packages/ui (lucide removed brand icons)       | header top bar + footer Social column                                                          |

## Recreation decisions

- Deliverable: single-page lifestyle blog — dark header (logo + socials +
  search + nav with two dropdowns), featured 3-post block, light masonry
  grid of mixed-format post cards with pagination, white popular-posts +
  tags strip, dark multi-column footer with newsletter form.
- Brand name "Sonder" replaces "Philosophy"; never use the word
  "Philosophy" as the brand.
- Post cards: standard format (image, date, title, excerpt, tags, author)
  and ONE quote card (large quotation styling) — matches the original
  masonry mix. Keep 6–8 cards in the grid.
- Photos → seeded picsum placeholders (`picsum.photos/seed/sonder-<n>/<w>/<h>`);
  featured images are large (e.g. 800×1000 big column, 800×500 small
  columns); no assets copied.
- Icons → lucide-react (Search, Menu, X, ArrowUp, Mail, Calendar, User);
  brand icons → inline SVG BrandIcon (Facebook, X/Twitter, Instagram,
  Pinterest, LinkedIn).
- Fonts: Google Fonts `<link>` — "Libre Baskerville" (serif, headings) +
  "Metropolis"-style fallback (use "Poppins" or system sans as the sans
  approximation; document the substitution in the PR).
- Nav dropdowns (Categories: Lifestyle/Health/Family/Management/Travel/Work;
  Blog: Video/Audio/Gallery/Standard) collapse into the mobile menu.
- Newsletter form: client-side validation + success state (no backend);
  blue `#0054a5` submit button.
- Pagination is decorative (Prev / 1…5 / Next buttons, current page 2
  styled); single-page app, links are anchors.
- Search: input with submit (decorative, filters nothing) or omit — keep
  the icon for fidelity.
- Skip link "Skip to main content" (already a convention).

## Requirements

### Requirement: Page header

The system SHALL render a dark page header with the brand, social icons, a
search control, and a navigation bar with dropdown sub-menus.

#### Scenario: Header content

- **GIVEN** the Sonder page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the wordmark "Sonder" on a dark charcoal
  background (`#111`)
- **AND** it SHALL show social icon links (Facebook, X, Instagram,
  Pinterest) with accessible names
- **AND** it SHALL show a search icon/input and a nav bar with links Home,
  Categories, Blog, Styles, About, Contact

#### Scenario: Dropdown menus

- **GIVEN** the nav bar is rendered
- **WHEN** the user activates "Categories"
- **THEN** a sub-menu SHALL open with Lifestyle, Health, Family,
  Management, Travel, and Work
- **AND** activating "Blog" SHALL open a sub-menu with Video Post, Audio
  Post, Gallery Post, and Standard Post

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** every nav link and sub-menu link SHALL be reachable
- **AND** the user SHALL be able to close the menu

### Requirement: Featured posts

The system SHALL render a featured block of three posts (one large, two
small) with category pills, titles, authors, and dates.

#### Scenario: Featured block

- **GIVEN** the page is rendered
- **WHEN** the featured section is displayed below the header
- **THEN** it SHALL show one large post card on the left with a background
  photo, a category pill (e.g. "Music"), a serif title, an author name, and
  a date
- **AND** it SHALL show two smaller post cards stacked on the right, each
  with a background photo, category pill, title, author, and date

### Requirement: Masonry blog grid

The system SHALL render a light-grey masonry-style grid of blog post cards
in mixed formats, followed by pagination.

#### Scenario: Grid cards

- **GIVEN** the blog grid section is displayed
- **WHEN** the cards are rendered
- **THEN** they SHALL appear in a masonry layout on a `#f2f2f2` background
- **AND** standard cards SHALL show an image, date, serif title, excerpt,
  and category tags
- **AND** at least one card SHALL be a quote card with a large quotation
  and attribution instead of an image

#### Scenario: Pagination

- **GIVEN** the grid is displayed
- **WHEN** the pagination bar is rendered
- **THEN** it SHALL show Prev, page numbers 1–5 with the current page
  highlighted, and Next

### Requirement: Popular posts and tags

The system SHALL render a white section with popular post mini-cards and a
tag cloud.

#### Scenario: Popular posts

- **GIVEN** the section is displayed
- **WHEN** the popular posts column is rendered
- **THEN** it SHALL carry the heading "Popular Posts"
- **AND** it SHALL show at least four mini-cards, each with a thumbnail, a
  title, and an author + date line

#### Scenario: Tag cloud

- **GIVEN** the section is displayed
- **WHEN** the tags column is rendered
- **THEN** it SHALL carry the heading "Tags"
- **AND** it SHALL show pill-shaped tag chips (e.g. Salad, Recipe, Travel,
  Reading, Running, Self-Help, Vacation)

### Requirement: Footer

The system SHALL render a dark footer with link columns, a newsletter
subscribe form, and a bottom bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show columns "Quick Links", "Archives" (month names),
  and "Social" (brand icon links)
- **AND** it SHALL show a "Our Newsletter" block with a blurb, an email
  input, and a `#0054a5` "Send" submit button

#### Scenario: Newsletter form validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email or an empty field
- **THEN** the form SHALL show a validation error and block submission
- **AND** submitting a valid email SHALL show a success state

#### Scenario: Bottom bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL show a copyright line "© Copyright Sonder 2038" and a
  paraphrased ColorLib credit link
- **AND** it SHALL show a back-to-top control

### Requirement: Page composition

The system SHALL compose all sections in a single page with a skip link, a
main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Sonder app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL start with a "Skip to main content" link
- **AND** the header SHALL be in the banner landmark, the sections in the
  main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Sonder — Lifestyle Blog Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh sonder` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Header: dark `#111` bg, wordmark "Sonder", social icons, search,
      nav with Home/Categories/Blog/Styles/About/Contact; both dropdowns
      open; mobile menu works
- [ ] Featured block: 1 big + 2 small cards with category pills, serif
      titles, author + date
- [ ] Masonry grid on `#f2f2f2`: mixed standard + quote cards, pagination
      with current page highlighted
- [ ] Popular posts (4+ mini-cards) + tag cloud chips on white `#fff`
- [ ] Footer: Quick Links / Archives / Social columns, newsletter form with
      validation + success state, `#0054a5` Send button, bottom bar with
      copyright + back-to-top
- [ ] Fidelity: section order 1:1, serif headings (Libre Baskerville),
      sans body, `#0054a5` brand blue, cyan `#01aef0` category pills,
      `#e2e2e2` tag chips, uppercase small-caps nav, picsum placeholders
      seeded `sonder-<n>`, no copied assets
- [ ] TEMPLATES.md: mark ALL FOUR copies (lines 280, 1723, 2417, 2989 —
      Philosophy) `[x]` and append the live surge URL to each
- [ ] `npm install` at root before committing (lockfile registers
      `apps/sonder`); `grep -c "free-react-templates/sonder"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-sonder.surge.sh"`
      in `apps/sonder/package.json`
- [ ] PR title: `feat: Sonder — lifestyle blog website template (ColorLib
  Philosophy)`; body includes the source URL, preview URL, tokens, and
      the four-copy TEMPLATES.md note
