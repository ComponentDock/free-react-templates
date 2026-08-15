# Template: Wainscot (Furniture / Interior — Bootstrap)

## Purpose

Wainscot is a single-page furniture & interior design website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tangre" furniture website template design (see TEMPLATES.md,
Bootstrap category, line 508 — duplicate row at line 1194, same template, one
app only), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Tangre" — free furniture & interior design website
  HTML template (page `<title>` "Tangre Furniture"; source:
  https://colorlib.com/wp/template/tangre/). Single page: top utility bar
  (phone + social icons + "GET FREE QUOTE"), white navbar with logo + nav
  (HOME / PORTFOLIO / ABOUT / BLOG / PAGES / CONTACT), full-bleed hero photo
  (light-blue wall paneling interior) with "Creativity Beyond Life" headline
  and a "Hire Us Now!" button, a "Latest News from all categories" 3-card
  strip, a dark `#222` offer area with a 4-stat counter row ("1.5K Happy
  Clients / 10 Years of Experience / 250 Professionals / 369 On Going Job")
  and "We can be your digital Problems Solution Partner" + "What we Offer" /
  "Get a free Quote" buttons, a "Our Recent Completed Projects" filterable
  gallery (All Categories / Branding / Image Manipulation / Creative Work /
  Web Design / Print Material) with 6 project cards, a photo-background
  testimonial carousel (Mark Alviro Wiens / Lina Harrington, "CEO at
  Google"), a "Latest From Our Blog" 4-card blog strip (date, title, excerpt,
  likes/comments), and a dark `#222` footer (Top Products links, Newsletter
  form, Instagram Feed thumbnails, copyright bar).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/tangre/` (fetched `/tmp/tangre-preview.html`,
  30,383 bytes) plus stylesheet `css/main.css` (`/tmp/tangre-main.css`, 67,761
  bytes) and the TEMPLATES.md screenshot (`tangre-free-template.jpg`, 1200×946,
  viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** clean, airy interior-design
  aesthetic. Top white utility bar with a phone number on the left, four
  social icons in the center, and a blue "GET FREE QUOTE" button on the right.
  White navbar below with a blue diamond logo mark (white cross inside) and
  uppercase nav links. Hero: full-bleed photo of a light-blue-paneled interior
  room with mid-century wooden cabinet, black sculpture and tripod floor lamp;
  large thin white "Creativity Beyond Life" text over the left side and a
  white "Hire Us Now!" button. Below the hero, a white section with a light
  grey serif-style section title "Latest News from all categories" and three
  image cards. Then a DARK `#222` section with big white stat numbers
  (1.5K / 10 / 250 / 369) + labels, a white heading "We can be your digital
  Problems Solution Partner", a white-bordered "What we Offer" button and a
  solid white "Get a free Quote" button. Then a white "Our Recent Completed
  Projects" section with filter tabs and a 3×2 grid of project cards (image +
  title). Then a photo-background testimonial carousel with white quote cards.
  Then "Latest From Our Blog" with four cards (small date, title, excerpt,
  like/comment counts). Dark `#222` footer with three columns (links,
  newsletter form with blue Subscribe button, Instagram feed grid) and a
  copyright bar. Primary brand blue `#3face4` used for buttons and accents.
  Body font: Poppins. Placeholder copy throughout the source (Lorem Ipsum) —
  paraphrase freely, keep the same content kinds (stats, project titles,
  blog posts, newsletter).

## Design tokens (from `css/main.css` of the live preview)

- **Brand blue:** `#3face4` — `.header-btn` "GET FREE QUOTE" button bg
  (white text), `.primary-btn` bg (white text), newsletter Subscribe button,
  accent/hover colors. Secondary bright blue `#4cd3e3` and link blue
  `#38a4ff` appear in the shared stylesheet (used in other templates) — the
  template's own accent is `#3face4`.
- **Dark ink:** `#222222` — `.offer-area` background, `.footer-area`
  background, `quote-btn` text color, headings.
- **Body text:** `#777777` — paragraphs, nav-adjacent text.
- **Light section bg:** `#f9f9ff` — alternate section background (subtle
  cool off-white); page base `#fff`.
- **Fonts:** `"Poppins", sans-serif` — body, nav, headings, buttons
  (weight 500 for buttons). Load via Google Fonts `<link>` in `index.html`
  (300/400/500/600/700).
- **Buttons (`.primary-btn`):** `line-height: 42px`, `padding: 0 30px`,
  `border-radius: 5px`, no border, white text, `font-weight: 500`,
  `display: inline-block`, 0.3s ease transition. In the hero
  (`.banner-content .primary-btn`) the button is inverted: `background:
#fff`, `color: #222222`. The offer section uses `.offer-btn`
  (`border: 1px solid #fff`, transparent bg, white text) and `.quote-btn`
  (`background: #fff`, `color: #222222`, `border: 1px solid #fff`).
- **Header (`.header-btn`):** `border: 1px solid transparent`,
  `background-color: #3face4`, white text.
- **Hero (`.home-banner-area`):** `background: url(../img/home-banner-bg.jpg)
no-repeat center; background-size: cover`. `.banner-content h1`:
  `font-size: 48px; line-height: 54px;` thin white text (Poppins 300).
- **Section rhythm:** `.section-gap { padding: 120px 0; }` — consistent
  120px vertical rhythm between sections.
- **Testimonials:** `.testimonial-area { background: url(../img/testimonial-bg.jpg)
no-repeat scroll center center; background-size: cover; position:
relative; }` — photo background with quote cards over it.
- **Footer:** `.footer-area { background-color: #222222; }` with a copyright
  bar reading "Copyright © <year> All rights reserved | This template is made
  with ♥ by Colorlib" — the credit is replaced with Component Dock (see
  Footer requirement).

## Requirements

### Requirement: Top utility bar

The system SHALL render a thin white top bar above the navbar with a phone
number on the left (icon + "012-6532-568-9746"), four social icon links in
the center (Facebook, Twitter, Dribbble, Behance style glyphs — use inline
SVG brand icons), and a brand-blue "GET FREE QUOTE" button on the right
(`#3face4` background, white text, small padding, uppercase). On mobile the
bar SHALL hide the social icons and keep phone + CTA, or collapse as needed
to stay usable.

#### Scenario: Utility bar content

- **GIVEN** the page is rendered
- **WHEN** the top utility bar is inspected
- **THEN** it shows the phone number, the social icon links, and a "GET FREE
  QUOTE" button

#### Scenario: Phone link

- **GIVEN** the utility bar is rendered
- **WHEN** the phone number is inspected
- **THEN** it is a `tel:` link whose href is computed at runtime from a
  spaced display string (never a literal `tel:+<digits>` in source)

### Requirement: Navbar

The system SHALL render a white navbar below the utility bar with the brand
logo on the left (a blue diamond mark with a white cross — recreated as an
inline SVG/wordmark for "Wainscot", no image asset copy) and a right-aligned
nav with uppercase links HOME, PORTFOLIO, ABOUT, BLOG (with dropdown), PAGES
(with dropdown), CONTACT (dark text, hover brand blue). On mobile a hamburger
SHALL open a responsive menu with the same links.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the navbar is inspected
- **THEN** it shows the Wainscot logo and the nav links HOME / PORTFOLIO /
  ABOUT / BLOG / PAGES / CONTACT

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a responsive menu with the nav links is shown and the close
  control dismisses it

### Requirement: Hero section

The system SHALL render a full-bleed hero with a cover photo of a modern
interior (placeholder image — an airy light-blue-paneled room, subject
verified via the picsum seed), a large thin white headline "Creativity
Beyond Life" (Poppins 300, 48px/54px, left-aligned over the photo) and a
white "Hire Us Now!" button (`background: #fff`, dark text, 5px radius,
42px line-height).

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** it is inspected
- **THEN** it shows the "Creativity Beyond Life" headline and a "Hire Us
  Now!" button

### Requirement: Latest news strip

The system SHALL render a white section titled "Latest News from all
categories" (large section heading + one-line lorem subtext) with three
cards in a row, each with a photo, a title (h4) and a short paragraph.
Source titles: "Addiction Whit Gambling", "Headset No Longer Wired", "Life
Advice Looking At Window" — paraphrase to interior/furniture-flavored titles
keeping the same card structure.

#### Scenario: News cards

- **GIVEN** the latest news section is rendered
- **WHEN** it is inspected
- **THEN** it shows three cards, each with an image, a title, and a
  paragraph, under the heading "Latest News from all categories"

### Requirement: Offer area with stats

The system SHALL render a dark (`#222`) section containing: a 4-column stat
row — "1.5K Happy Clients", "10 Years of Experience", "250 Professionals",
"369 On Going Job" (large white numbers + labels) — followed by the heading
"We can be your digital Problems Solution Partner" (white), a short
paragraph (grey), and two buttons: "What we Offer" (transparent bg, 1px
white border, white text) and "Get a free Quote" (solid white bg, dark
text).

#### Scenario: Stats row

- **GIVEN** the offer area is rendered
- **WHEN** it is inspected
- **THEN** it shows the four stats 1.5K Happy Clients / 10 Years of
  Experience / 250 Professionals / 369 On Going Job

#### Scenario: Offer actions

- **GIVEN** the offer area is rendered
- **WHEN** the action buttons are inspected
- **THEN** it shows "What we Offer" (outlined) and "Get a free Quote"
  (solid) buttons

### Requirement: Completed projects gallery

The system SHALL render a white section titled "Our Recent Completed
Projects" with a one-line subtext and a filter tab row: All Categories /
Branding / Image Manipulation / Creative Work / Web Design / Print Material.
Below the tabs a 3-column grid (2 rows) of six project cards, each with a
cover image and a title. Source titles: "3D Helmet Design", "2D Vinyl
Design", "Creative Poster Design", "Embosed Logo Design", "3D Disposable
Bottle", "3D Logo Design" — paraphrase to design-work titles while keeping
six cards. Filter tabs are presentational (clicking may filter visually or
be non-functional; implement a simple active-state toggle).

#### Scenario: Project grid

- **GIVEN** the projects section is rendered
- **WHEN** it is inspected
- **THEN** it shows the filter tabs and six project cards with images and
  titles

#### Scenario: Filter tabs

- **GIVEN** the projects section is rendered
- **WHEN** a filter tab is activated
- **THEN** the active tab receives a highlighted/active state

### Requirement: Testimonials

The system SHALL render a photo-background testimonial section with a
carousel of quote cards. Each card shows a quote paragraph ("Accessories
Here you can find the best computer accessory for your laptop, monitor,
printer, scanner, speaker, projector, hardware." — paraphrase), the
person's name (e.g. "Mark Alviro Wiens"), and their role ("CEO at Google" —
paraphrase to a plausible role). The carousel SHALL cycle through at least
two testimonials with previous/next controls (or auto-advance with manual
dots); implement one accessible carousel pattern.

#### Scenario: Testimonial cards

- **GIVEN** the testimonial section is rendered
- **WHEN** it is inspected
- **THEN** it shows at least one quote card with a quote, a name, and a role

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the next/previous control is activated
- **THEN** the visible testimonial changes to the next/previous one

### Requirement: Blog strip

The system SHALL render a white section titled "Latest From Our Blog" with a
one-line subtext and four blog cards in a row. Each card has a small date
line ("10 Jan 2018"), a title (h4), a short excerpt, and a like/comment
count line ("15 Likes" / "02 Comments" with icons). Source titles: "Cooking
Perfect Fried Rice in minutes", "Secret of making Heart Shaped eggs", "How
to check steak if it is tender or not", "Addiction When Gambling Becomes A
Problem" — paraphrase to interior/furniture blog post titles.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** it is inspected
- **THEN** it shows four cards, each with a date, a title, an excerpt, and
  like/comment counts, under the heading "Latest From Our Blog"

### Requirement: Footer

The system SHALL render a dark (`#222`) footer with three columns: "Top
Products" (links: Managed Website, Manage Reputation, Power Tools, Marketing
Service), "Newsletter" (subtext "You can trust us. we only send promo
offers, not a single spam." + an email input + a brand-blue "Subscribe"
button; a valid submission SHALL show a success state, no backend), and
"Instagram Feed" (a grid of 8 thumbnail images). Below the columns a
copyright bar SHALL read "Copyright © <year> All rights reserved | This
template is made with ♥ by Component Dock" where "Component Dock" links
https://www.componentdock.com/ (replacing the source's Colorlib credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the Top Products links, the Newsletter form, and the
  Instagram feed grid

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** a valid email is submitted
- **THEN** a success confirmation is shown in place of the form

#### Scenario: Component Dock credit

- **GIVEN** the footer is rendered
- **WHEN** the copyright line is inspected
- **THEN** it contains a link to https://www.componentdock.com/ labeled
  "Component Dock"

## Verification checklist

- [ ] `openspec/specs/template-wainscot/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/wainscot`, package `@free-react-templates/wainscot`,
      no ColorLib references in app code (grep for colorlib/Tangre in apps/wainscot)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh wainscot`
- [ ] Section order matches the source: utility bar → navbar → hero →
      latest news → offer (stats + partner blurb) → projects → testimonials →
      blog → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #3face4`,
      `--color-ink: #222222`, `--color-body: #777777`,
      `--color-surface: #f9f9ff`; Poppins Google Fonts link in `index.html`
- [ ] Utility bar: phone tel: link (runtime-computed href), 4 social icons
      (inline SVG), brand-blue GET FREE QUOTE button
- [ ] Navbar: blue diamond logo mark, 6 uppercase links, mobile hamburger
      menu
- [ ] Hero: full-bleed interior photo, "Creativity Beyond Life" (Poppins
      300 white), white "Hire Us Now!" button
- [ ] Latest news: 3 image cards under "Latest News from all categories"
- [ ] Offer: `#222` bg, 4 stats (1.5K/10/250/369), "We can be your digital
      Problems Solution Partner", What we Offer (outlined) + Get a free
      Quote (solid) buttons
- [ ] Projects: 6 filter tabs + 6 cards with active-tab state
- [ ] Testimonials: photo bg, carousel with ≥2 quotes (name + role),
      next/prev controls
- [ ] Blog: 4 cards (date, title, excerpt, likes/comments)
- [ ] Footer: `#222`, 3 columns (links, newsletter form with success state,
      instagram grid), Component Dock credit
- [ ] Placeholder images via `https://picsum.photos/seed/wainscot-<n>/<w>/<h>`
      (hero seed subject-verified); icons from `lucide-react` + inline SVG
      for brand icons
- [ ] PR description: source template, preview URL, design tokens, diffs
      (name, placeholder images, paraphrased copy, newsletter no backend +
      validation)
