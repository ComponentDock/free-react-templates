# Template: Silhouette (Apparel Store Landing)

Recreation of ColorLib "Fashion 2" (https://colorlib.com/wp/template/fashion-2/).

**Reference (re-verified 2026-10-24s).** The preview IS reachable — the earlier
"preview unreachable / inferred from description" note was a slug-only 404, not
a dead demo. The demo directory is `https://preview.colorlib.com/theme/fashion/`
(HTTP 200, 26,584 B), whose theme sheet `css/style.css` is 29,430 B, sha256
`75499322b02a2b2d…`. The preview host's own catalog map keys this demo as
`fashion` → `theme/fashion/`, and the row's screenshot
(`fashion-free-template.jpg`) renders the same page: `Fashion.` wordmark, serif
hero, coral accents. There is no `theme/fashion-2/`, `theme/fashion2/` or
`theme/bootstrap/fashion-2/` (all 404) — probe the catalog before assuming a
demo is dead.

Note on the sibling row: the *other* ColorLib fashion entry in `TEMPLATES.md`
(the bold green→yellow gradient design) is a different page — this spec's
reference is the coral "Fashion." design only.

## Purpose

A single-page apparel store landing template with hero, product grid, about section,
testimonials, blog posts, and footer. Minimalist fashion aesthetic: Lato body +
Playfair Display headings, coral `#ff6363` accent on white, hairline column rules.

## Source structure (live DOM, in order)

1. `nav.site-nav` — `Fashion.` wordmark (span-styled dot), links: Home, Dropdown
   (Menu One/Two, Sub Menu One–Three), Menu Three, Inner Page, Contact Us;
   `site-mobile-menu` panel for mobile.
2. `section-1` hero — lorem blurb, a `1 of 0` owl counter, three stacked `h1`
   lines ("Fashion Presents" / "Creative Design" / "Modern Fashion"), lorem
   blurb, "Learn more" link under the image collage.
3. `section-4` — "Collections" carousel (`Prev`/`Next`), four products repeated
   twice for the loop: Minimal $29, Collecta $21, Nine8 $38, Hut $49.
4. `section-2` — "A Fashion Boutique" split band (text + "Learn more" link,
   figure image).
5. `site-section.rounded` — "Testimonials" carousel: Adam Aderson, Lukas Devlin,
   Kayla Bryant.
6. `section-3` — "Blog Posts": three cards, each with a date ("May 17th, 2020"),
   title and excerpt.
7. Footer — three columns (About, Connect with us, Navigations) plus a copyright
   bar.

The live page has **no form and no `<input>`** (`document.forms.length === 0`):
there is no newsletter in this design. The newsletter requirement below is a
documented recreation addition, not a fidelity item.

## Requirements

### Requirement: Navbar with mobile toggle

The template SHALL display a sticky top navigation bar with the brand logo "Silhouette"
and links to Home, About, Collections, Blog, and Contact sections. On mobile, a
hamburger button SHALL toggle the mobile menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the logo "Silhouette" and links to Home, About, Collections, Blog, Contact

#### Scenario: Mobile menu toggles on button click

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile menu opens showing all navigation links
- **AND** the button label changes to "Close menu"

#### Scenario: Mobile menu closes when link clicked

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with CTA

The template SHALL display a hero section with a headline "Define Your Own Style",
descriptive subtext about fashion trends, and a "Shop Now" CTA button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero section displays the headline, descriptive text, and a "Shop Now" button

#### Scenario: Hero displays fashion image

- **WHEN** the page loads
- **THEN** the hero section shows a fashion model image

### Requirement: Products grid

The template SHALL display a 4-column grid of 8 product cards, each with an image,
product name, and price.

#### Scenario: All 8 products render

- **WHEN** the page loads
- **THEN** 8 product cards are displayed with names and prices

#### Scenario: Product cards have images

- **WHEN** the page loads
- **THEN** each product card shows an image with the product name as alt text

### Requirement: About section with features

The template SHALL display a split layout about section with an image on the left
and a feature list on the right. The source band (`section-2`) is headed
"A Fashion Boutique" and carries a short blurb plus a "Learn more" link; the
recreation renders the same band plus three feature items with lucide-react
icons (additive, documented below).

#### Scenario: About section renders heading and features

- **WHEN** the page loads
- **THEN** the about section shows its heading, a blurb, a "Learn more" link and 3 feature items

#### Scenario: About section displays image

- **WHEN** the page loads
- **THEN** the about section shows a design process image

### Requirement: Testimonials section

The template SHALL display 3 testimonials with quote text, author name, and role.

#### Scenario: All 3 testimonials render

- **WHEN** the page loads
- **THEN** 3 blockquotes are displayed with author names and roles

#### Scenario: Section heading renders

- **WHEN** the page loads
- **THEN** the section shows "What People Say" heading

### Requirement: Blog section

The template SHALL display a 3-column grid of blog post cards with image, date,
title, and excerpt.

#### Scenario: All 3 blog posts render

- **WHEN** the page loads
- **THEN** 3 article cards are displayed with titles and dates

#### Scenario: Blog posts have images

- **WHEN** the page loads
- **THEN** each blog card shows an image with the post title as alt text

### Requirement: Newsletter signup (recreation addition)

The source page ships no form at all, so this section is an intentional
recreation addition: the template SHALL display a newsletter band with an email
input and subscribe button whose default submission is prevented.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** an email input with placeholder "Enter your email" and a "Subscribe" button are shown

#### Scenario: Form submission is prevented

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the page does not reload and the input retains its value

### Requirement: Footer with Component Dock link

The template SHALL display a 3-column footer with About text, Quick Links, and
Contact information. The bottom bar SHALL show the copyright year and a link to
Component Dock.

#### Scenario: Footer renders with dynamic year

- **WHEN** the page loads
- **THEN** the footer shows the current year in the copyright notice

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

#### Scenario: Footer shows 3-column layout

- **WHEN** the page loads
- **THEN** the footer displays Quick Links and Contact sections

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/silhouette/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/silhouette/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Design tokens

Measured from the live sheet — `theme/fashion/css/style.css` (29,430 B, sha256
`75499322b02a2b2d…`), preview `https://preview.colorlib.com/theme/fashion/`
(HTTP 200, 26,584 B), re-read 2026-10-24s. Every value is the sheet's literal.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| **Brand coral — the design's lead** | `#ff6363` | **30 declarations** — `a`, `a:hover`, `.text-primary`, `a.text-primary`, nav `li.active > a`, `.site-mobile-menu` active links, `.dropdown` active |
| `brand-hover` | `#ff7777` | 2 declarations — `.btn.btn-primary:hover` background + border |
| Ink | `#000000` | 17 declarations — `::selection`, headings, nav links; `h1` labels are 100 px at desktop (`section-1 … text-wrap h1`) |
| Surface | `#ffffff` | 11 declarations — `body{background}` |
| Muted body copy | `#a09b9b` | `.section-1 p`, `.section-2 p`, `.section-3 p` |
| Hairlines | `#efefef` | 5 declarations — `.lines-wrap` fixed column rules (three vertical 1 px lines behind the page) |
| Off-white band | `#f8f9fa`, `#f9f9f9` | testimonial band, accordion item |
| **Fonts** | Body `"Lato", sans-serif` 14 px; headings `"Playfair Display", serif` | `body` rule; `h1…h4` rule |
| Radii | `30px` (pill buttons), `4px`, `50%` (owl dots / controls) | `.btn` / `.control__indicator` |

**Prep correction (2026-10-24s).** The earlier block's palette — green `#6DAB3C`,
lavender `#B97EBB`, charcoal `#1a1a2e`, `#f7f7f7` — occurs **nowhere** in the
sheet (0 matches each); it was inferred from the description, not measured. The
real design is coral-on-white with hairline column rules and no dark sections.
The shipped app currently paints the invented palette, so this is recorded as
app debt (see `docs/app-live-tokens.md`), not as a design choice.

## Coverage target: 100% lines/functions/branches/statements

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with mobile toggle — the navbar shows the logo "Silhouette" and links to Home, About, Collections, Blog, Contact
- [x] Hero section with CTA — the hero section displays the headline, descriptive text, and a "Shop Now" button
- [ ] Products grid — 8 product cards are displayed with names and prices
- [x] About section with features — the about section shows "Crafted with Intention" heading and 3 features
- [ ] Testimonials section — 3 blockquotes are displayed with author names and roles
- [ ] Blog section — 3 article cards are displayed with titles and dates
- [x] Newsletter signup — an email input with placeholder "Enter your email" and a "Subscribe" button are shown
