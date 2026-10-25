# Template: Placecraft (Directory / Listings)
<!-- prep-status: shipped-as=spotlight -->
> **SHIPPED-UNDER** — the ColorLib `listed2` design this prep describes already
> ships as `apps/spotlight` (<https://spotlight.free.componentdock.com>).
> Do not scaffold `apps/placecraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-spotlight/spec.md`.

## Purpose

Recreation of ColorLib's **Listed2** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/listed2/
- **Preview:** https://preview.colorlib.com/theme/listed2/ — measured 2026-10-24:
  200, 28,515 B, `<title>Listed — Colorlib Website Template`
- **Package:** `@free-react-templates/placecraft`
- **Deploy target:** `placecraft.free.componentdock.com`

A local business directory / listings template with a hero search bar,
category grid, listing cards, testimonials, blog posts, FAQ accordion, and
a newsletter CTA.
- **Source design:** ColorLib "Listed2" — https://colorlib.com/wp/template/listed2/

## Reference identity (measured 2026-10-24)

The ColorLib catalogue keys TWO posts to one demo directory. Measured from
`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`
(633,990 B, 1,961 entries):

| key | `details` | `img` | catalogue `url` |
| --- | --- | --- | --- |
| `listed` | `/wp/template/listed/` (Business) | `listed-free-template-1-768x605.jpg` | `theme/listed/` |
| `listed2` | `/wp/template/listed2/` (Business) | `listed2-free-template-768x605.jpg` | `theme/listed/` — **wrong: a copy of the sibling's** |

`colorlibPreviewAliases` carries no `listed2` entry, so the alias map does not
explain it: the `url` field is simply the sibling's value. This is a catalogue
DATA bug, not a missing demo — unlike the magazine / law-firm / music groups,
where the intended design had no directory at all.

| URL | status | bytes | `<title>` | design |
| --- | --- | --- | --- | --- |
| `theme/listed/` | 200 | 23,918 | Colorlib Listed Directory Template | the sibling `listed` post — Raleway + Playfair Display, Bootstrap-blue CTAs, "Find your perfect place." → `placeboard` |
| `theme/listed2/` | 200 | 28,515 | Listed — Colorlib Website Template | **Listed2** — Quicksand, `#7971ea`, "Find Nearby Appartments" → this prep |
| `theme/listing/` | 200 | 39,079 | Listing — Discover Great Local Places in New York | a third, unrelated design (no theme sheet) |

Archives: `downloads/free/listed.zip` and `listed2.zip` both 404 → the live
previews are the sole DOM/CSS reference.

### Why the former TOKEN-UNVERIFIED verdict was false

`scripts/fix-live-tokens-palette.py` resolves a spec's demo through the
catalogue's `url`, so for this key it measured Listed2's claims against the
**Listed** palette. Against the right page both claims are painted:
`#7971ea` ×19 and `#8bc34a` ×1 in `css/style.css` (25,557 B, sha256
`b5f8e0a3d24e…`). The block at the end of this file now records that, and no
claim in this spec is a screenshot sample.

Measured geometry (1440 px, `theme/listed2/`, document 5,662 px): header 73 ·
hero 900 (image + overlay) · Most Visited Places 598 · Popular Categories 478 ·
Why Us 624 · Testimonials 636 (`#f8f9fa`) · Our Blog 900 · FAQ 562 · CTA 248
(`#7971ea`) · footer 642 (`#333333`). Counts: 6 `.popular-category`,
3 `.listing-item`, 8 testimonial blocks, 4 FAQ items, 5 nav items, 61 anchors,
2 forms — hero search (text "What are you looking for?" + "Location" +
category `<select>` + submit, no `action`) and newsletter ("Enter Email" +
button, `action="#"`).

Two copy facts the section list must respect: **"How To List Your Property" is
the title of the two Our Blog cards** (`h2.font-size-regular` inside
`div.h-entry`), not a section of its own; the three "Sticky Band" `h2`
occurrences are the Most Visited Places card titles. The base
`.btn { border-radius: 0 }` holds, but the hero Search button is a **pill**:
`.form-search-wrap .btn { border-radius: 30px; padding: 10px 30px }` — computed
radius `30px` — as are nav items and the category badge (`30px`).

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token                | Value                        | Notes                                      |
|----------------------|------------------------------|--------------------------------------------|
| brand-primary        | `#7971ea`                    | Purple/violet — buttons, active states, links |
| text-color           | `#4d4d4d`                    | Body text                                  |
| heading-color        | `#000`                       | Headings                                   |
| footer-bg            | `#333333`                    | Dark footer background                     |
| footer-text          | `#737373`                    | Footer paragraph text                      |
| footer-link          | `#999999`                    | Footer links                               |
| light-section-bg     | `#f4f5f9` / `bg-light`      | Testimonials section background            |
| success-checkmark    | `#8bc34a`                    | Green checkmark icons in "Why Us" list     |
| border-color         | `#edf0f5`                    | Light borders, dividers                    |
| form-focus-border    | `#7971ea`                    | Input focus ring                           |
| hero-overlay         | `rgba(0,0,0,0.6)`           | Dark overlay on hero image                 |
| font-family          | Quicksand, sans-serif        | Loaded via Google Fonts (weights 300–700)  |
| button-radius        | `0`                          | Base `.btn` only — the hero Search CTA overrides to `30px` |
| search-btn-radius    | `30px`                       | `.form-search-wrap .btn` (measured computed `30px`) |
| nav-pill-radius      | `30px`                       | Active/hover nav item, category badge, search wrap |
| nav-dropdown-border  | `#7971ea` (top)              | 2px solid top border on dropdown           |


<!-- heading-role-tokens: listed2/ink/template-placecraft -->
**Heading-ink role (measured 2026-10-25):** the `heading-color` row states `#000000`, which is declared by no rule in this page's stylesheets and appears in no inline style or style attribute. The rendered headings paint rgb(255, 255, 255) x10, rgb(121, 113, 234) x6, rgb(77, 77, 77) x3; the most-painted heading colour is `rgb(255, 255, 255)`.
<!-- /heading-role-tokens -->

## Requirements

### 1. Navbar

Header with logo text ("Placecraft") on the left, horizontal nav links on the
right: Home, Listings, About (dropdown: The Company, The Leadership,
Philosophy, Careers), Blog, Contact. Active item gets a purple pill background.
Mobile: hamburger menu toggle.

#### Scenario: Navbar renders all navigation links

- **GIVEN** the page loads
- **THEN** the navbar displays "Placecraft" as the logo
- **AND** the nav contains links: "Home", "Listings", "About", "Blog", "Contact"

#### Scenario: About link shows dropdown on hover

- **GIVEN** the navbar is visible
- **WHEN** the user hovers over "About"
- **THEN** a dropdown appears with "The Company", "The Leadership", "Philosophy", "Careers"

#### Scenario: Active nav item has pill highlight

- **GIVEN** the user is on the Home page
- **THEN** the "Home" link has a purple pill background

#### Scenario: Mobile menu toggle is visible on small screens

- **GIVEN** the viewport is below xl breakpoint
- **THEN** a hamburger menu button is visible
- **AND** clicking it opens the mobile nav drawer

### 2. Hero section

Full-width cover image with dark overlay. Centered content:
- Headline: "Find Nearby [typed-words]" (typed animation cycling categories)
- Subtitle: "Explore top-rated attractions, activities and more!"
- Search form row: What (text input), Location (text input with map icon),
  Category (dropdown: All Categories, Apartment, Restaurant, Eat & Drink,
  Events, Fitness, Others), Search button (primary, square).

#### Scenario: Hero displays headline and subtitle

- **GIVEN** the page loads
- **THEN** the hero section shows "Find Nearby" as the headline
- **AND** a subtitle reads "Explore top-rated attractions, activities and more!"

#### Scenario: Search form has four fields

- **GIVEN** the hero section is visible
- **THEN** a text input with placeholder "What are you looking for?" is shown
- **AND** a text input with placeholder "Location" is shown
- **AND** a select dropdown with category options is shown
- **AND** a "Search" submit button is shown

#### Scenario: Search form submit

- **GIVEN** the search form is filled
- **WHEN** the user clicks "Search"
- **THEN** the form submission is triggered

### 3. Most Visited Places

Section heading "Most Visited Places" with subtitle. 3-column grid of listing
cards. Each card: image thumbnail, heart/bookmark icon overlay, category tag
badge, location title, address text.

#### Scenario: Listing cards render

- **GIVEN** the Most Visited Places section is visible
- **THEN** 3 listing cards are displayed in a grid

#### Scenario: Each listing card shows image and details

- **GIVEN** a listing card
- **THEN** it contains an image
- **AND** a category badge (e.g. "Stores", "Restaurants", "Events")
- **AND** a title link
- **AND** an address line

#### Scenario: Listing card has bookmark icon

- **GIVEN** a listing card
- **THEN** a heart/bookmark icon is visible for bookmarking

### 4. Popular Categories

Section heading "Popular Categories" with subtitle. 6-column grid of category
cards. Each card: icon, uppercase label, item count number. Categories:
Appartments, Events, Fitness, Department Store, Restaurants, Other.

#### Scenario: Category cards render

- **GIVEN** the Popular Categories section is visible
- **THEN** 6 category cards are displayed

#### Scenario: Each category card shows icon, label, and count

- **GIVEN** a category card
- **THEN** it contains an icon
- **AND** an uppercase caption label
- **AND** a numeric count

### 5. Why Us

Two-column layout: left = image, right = heading "Why Us", two paragraphs of
text, and a bulleted checkmark list (green check icons) with 3 items.

#### Scenario: Why Us section renders split layout

- **GIVEN** the Why Us section is visible
- **THEN** an image is shown on the left
- **AND** "Why Us" heading appears on the right
- **AND** a checkmark list with 3 items is displayed

#### Scenario: Checkmarks are green

- **GIVEN** the checkmark list
- **THEN** each check icon is green (#8bc34a)

### 6. Testimonials

Light background section. Heading "Testimonials". Carousel/slider with
testimonial cards. Each: person photo (circular or rounded), name, blockquote
with double quotes.

#### Scenario: Testimonials section renders carousel

- **GIVEN** the Testimonials section is visible
- **THEN** a carousel of testimonial cards is shown

#### Scenario: Each testimonial card has photo, name, and quote

- **GIVEN** a testimonial card
- **THEN** it displays a person photo
- **AND** a person name
- **AND** a blockquote with quotation marks

### 7. Our Blog

Section heading "Our Blog" with subtitle "See Our Daily News & Updates".
2-column grid of blog post cards. Each: image, title link, meta line (author,
date, category), excerpt paragraph.

#### Scenario: Blog posts render

- **GIVEN** the Our Blog section is visible
- **THEN** 2 blog post cards are displayed

#### Scenario: Each blog card shows image, title, meta, and excerpt

- **GIVEN** a blog card
- **THEN** it contains an image
- **AND** a title link
- **AND** a meta line with author and date
- **AND** a text excerpt

### 8. FAQ Accordion

Section heading "Frequently Ask Question" with subtitle. Centered column with
4 accordion items. Each: bordered rounded card with question link that expands
to show an answer paragraph.

#### Scenario: FAQ items render

- **GIVEN** the FAQ section is visible
- **THEN** 4 accordion items are displayed

#### Scenario: Clicking a question expands its answer

- **GIVEN** the FAQ section
- **WHEN** the user clicks a question
- **THEN** the corresponding answer paragraph becomes visible

#### Scenario: Clicking another question collapses the previous

- **GIVEN** one FAQ answer is open
- **WHEN** the user clicks a different question
- **THEN** the previous answer collapses
- **AND** the new answer expands

### 9. CTA Banner

Full-width primary-colored (#7971ea) background. Centered text: heading "Let's
get started. Create your account", subtitle, and a white outlined "Sign Up"
button.

#### Scenario: CTA banner renders

- **GIVEN** the CTA section is visible
- **THEN** it has a purple (#7971ea) background
- **AND** displays "Let's get started. Create your account"
- **AND** a "Sign Up" button with white outline style

### 10. Footer

Dark background (#333333). 4-column layout: Quick Links, Products, Features,
Follow Us (social icons: Facebook, Twitter, Instagram, LinkedIn). Right side:
Newsletter subscription form (email input + Send button). Bottom: copyright
line with "Made with ❤️ by Component Dock" link to componentdock.com.

#### Scenario: Footer renders column links

- **GIVEN** the footer is visible
- **THEN** columns show "Quick Links", "Products", "Features", "Follow Us"
- **AND** each column has a list of link items

#### Scenario: Footer has newsletter form

- **GIVEN** the footer
- **THEN** an email input with placeholder "Enter Email" is shown
- **AND** a "Send" button is next to it

#### Scenario: Footer has Component Dock attribution

- **GIVEN** the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** it is labeled "Component Dock"

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar matches: logo text, 5 nav links, About dropdown with 4 items
- [ ] Hero: headline, subtitle, search form with 4 inputs (what, location, category select, search button)
- [ ] Most Visited Places: 3 listing cards with image, category badge, title, address
- [ ] Popular Categories: 6 category cards with icon, label, count
- [ ] Why Us: image + text + 3-item green checkmark list
- [ ] Testimonials: carousel with 4 testimonial cards
- [ ] Our Blog: 2 blog post cards with image, title, meta, excerpt
- [ ] FAQ: 4 accordion items, expand/collapse behavior
- [ ] CTA: purple background, heading, outlined Sign Up button
- [ ] Footer: 4 link columns, newsletter form, Component Dock link
- [ ] Brand color #7971ea used consistently (buttons, active states, links)
- [ ] Font Quicksand applied throughout
- [ ] Square button corners base (`.btn` radius 0); hero Search CTA pill (30px)
- [ ] Pill-shaped nav active items (border-radius: 30px)
- [ ] Dark footer (#333333) with correct text colors
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile hamburger, stacked layouts on small screens

<!-- live-palette-unverified:start -->
**TOKEN-VERIFIED (2026-10-24, supersedes the 2026-10-23 TOKEN-UNVERIFIED verdict)** — that
verdict measured this design against the *sibling* page: the catalogue's `listed2`
entry carries `url: theme/listed/` (the `listed` post's directory), and the
LIVE-PALETTE fixer resolves demos through the catalogue URL. Measured against the
row's own page, both claims are painted by
`https://preview.colorlib.com/theme/listed2/css/style.css` (25,557 B, sha256
`b5f8e0a3d24e…`): `#7971ea` ×19 declarations, `#8bc34a` ×1. No claim in this spec
is a screenshot sample. See §Reference identity.
<!-- live-palette-unverified:end -->
