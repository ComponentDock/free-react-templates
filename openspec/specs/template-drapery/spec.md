# Template: Drapery (Fashion Boutique)
<!-- prep-status: shipped-as=bespoke -->
> **SHIPPED-UNDER** — the ColorLib `fashion` design this prep describes already
> ships as `apps/bespoke` (<https://bespoke.free.componentdock.com>).
> Do not scaffold `apps/drapery`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bespoke/spec.md`.

## Reference identity — catalog URL collision (measured 2026-10-24)

This entry's **row and its demo directory disagree**, and the disagreement is
ColorLib's, not a slug-only 404. `TEMPLATES.md` line 1709 shows a **bold
green→yellow gradient** fashion page; `https://preview.colorlib.com/theme/fashion/`
now serves the *newer sibling* — the coral `Fashion.` page that
`/wp/template/fashion-2/` publishes. Measured chain (all fetched 2026-10-24,
Chrome/124 UA, `curl -4`):

| Fact | Reading |
| --- | --- |
| demo dir | `theme/fashion/` HTTP **200**, **26,584 B** (`index.html` also 200, same size — a no-op link, never a 404) |
| theme sheet | `css/style.css` **29,430 B**, sha256 `75499322b02a2b2d…` |
| sheet census | `#ff6363` ×30 · `#000000` ×17 · `#ffffff` ×11 · `#efefef` ×5 · `#f8f9fa` ×4 · `#a09b9b` ×3 · `#ff7777` ×2 |
| faces | `"Lato", sans-serif` ×3 · `"Playfair Display", serif` ×2 |
| radii | `50%` ×7 · `4px` ×2 · `30px` ×1 (the pill) |
| live copy | `Fashion .` wordmark; hero carousel "Fashion Presents" / "Creative Design" / "Modern Fashion"; Collections Minimal $29 · Collecta $21 · Nine8 $38 · Hut $49; "A Fashion Boutique"; testimonials Adam Aderson / Lukas Devlin / Kayla Bryant; three "Blog Posts" cards; no `<input>` on the page (0) |
| `/wp/template/fashion-2/` | title "Fashion – Free Apparel Store Website Template 2026"; featured image `fashion-free-template.jpg` (the coral page); Preview button `#fashion` → this same dir |
| `/wp/template/fashion/` | title "Fashion – Free Apparel & Fashion Website Template"; featured image `fashion-bold-free-fashion-website-template.jpg` (1200×967, 75,891 B; 768×619 crop 31,712 B — the bold page); Preview buttons `#catalog-141306` **and** `#fashion` → this same dir |
| catalog map (1,961 entries) | two keys resolve here: `fashion` → `details` `/wp/template/fashion-2/` (its `img` field is `ashion-free-template.jpg`, a typo of the *Ashion* file — a catalog data bug, not a fashion thumbnail) and `catalog-141306` → `details` `/wp/template/fashion/` |
| bold variant reachability | **no live demo and no archive**: `theme/fashion-bold/`, `theme/fashion-2/`, `theme/fashion2/`, `theme/fashion-couple/`, `theme/couplefashion/`, `theme/bootstrap/fashion/`, `etc/fashion/`, `colorlib.com/etc/fashion/index.html` and `downloads/free/fashion.zip` are all **404** |

Two entries, one demo directory, and the directory can only serve one design: the
2026 rebuild. So the sheet is authoritative for *the page that exists* and the
row thumbnail is a retired variant with no reachable DOM or stylesheet.

**Consequence for the implementer:** build the design the demo serves (the coral
`Fashion.` page). That is what `apps/bespoke` ships and what the token table below
measures. Do **not** reproduce the row thumbnail: it has no CSS to measure, and a
second app built from this reference duplicates the thin sibling's design
(documented duplicate, not a defect).

## Purpose

Recreation of ColorLib "Fashion" — a fashion boutique / shop landing page template.

- **ColorLib source:** https://colorlib.com/wp/template/fashion/
- **Live preview:** https://preview.colorlib.com/theme/fashion/ — serves the 2026 rebuild of this directory (coral `Fashion.` page); see §Reference identity
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fashion-bold-free-fashion-website-template.jpg — the bold variant, a retired design with no reachable demo
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `drapery` (never reuse the source name "fashion")

## Design Tokens (extracted from live preview CSS)

| Token                       | Value                                    | Notes                                                  |
| --------------------------- | ---------------------------------------- | ------------------------------------------------------ |
| Brand / Accent              | `#ff6363`                                | Coral-red — links, CTAs, primary color, dots           |
| Accent hover                | `#ff7777`                                | Lighter coral — button hover state                     |
| Text headings               | `#000000`                                | Pure black — h1-h6, widget titles                      |
| Body text                   | `#303030` (implied from Lato default)   | Dark gray — paragraphs                                 |
| Muted text                  | `#a09b9b`                                | Gray — testimonials, descriptions                      |
| Background (body)           | `#ffffff`                                | White                                                  |
| Background (testimonial)    | `#ffffff`                                | White — centered card layout                           |
| Border / divider            | `#efefef`                                | Light gray — section separators                        |
| Font — Headings             | `"Playfair Display"`                     | serif, weights 400-700 — editorial luxury feel         |
| Font — Body                 | `"Lato"`                                 | sans-serif, weights 400-900 — clean and readable       |
| Button primary              | `#ff6363` bg, white text                | Rounded 30px (pill), Lato font                         |
| Button hover                | `#ff7777` bg                             | Lighter coral, pill shape                              |
| Social icons                | `#000000` base, `#ff6363` hover         | Black default, coral on hover                          |
| Scroll-to-top               | `#ff6363` circle, rounded 50%           | White icon inside                                     |
| Navbar                       | White bg, `#000000` text                | Sticky on scroll, clean sans-serif                     |
| Logo                         | Black text + `#ff6363` dot              | "Drapery" + coral period                               |
| Hero heading                | Playfair Display, bold, `#000000`       | Large size, paired with carousel                      |
| Section title (heading-2)   | Lato 12px uppercase, `#000000`          | Blog section sub-heading                               |
| Line-top decoration         | Top border line `#efefef`               | Under h3 elements in sections                          |
| Product card name           | Playfair Display, `#000000`             | Bold, centered                                         |
| Product card price          | Bold, `#000000`                         | Below product name                                     |

### Thumbnail-sampled values — the row's own screenshot (retired bold variant)

No stylesheet exists for this variant (all prefixes and the archive 404, see
§Reference identity), so these are **pixel samples**, not CSS declarations:
`fashion-bold-free-fashion-website-template.jpg` 1200×967, 75,891 B, AVIF served
for a `.jpg` name, decoded with PIL. Coordinates are screenshot pixels and the
page is shown inside a 1200 px window frame.

| Sampled role | Value | Where it was read |
| --- | --- | --- |
| Hero band ramp (left → right) | `#8dfe72` → `#9af66d` → `#a7ef67` → `#b2ea62` → `#bbe35c` → `#c6de56` → `#d1d751` → `#d9d14a` → `#e5ca44` → `#eec33e` | row `y=70`, `x=60…1050`, ten stops; endpoints are the design's two grounds |
| Pill button gradient | `#6f1dfa` → `#851aec` → `#a823d4` → `#c41fcc` → `#e81eb0` (purple → pink, left to right) | pill row `y=448`, `x=235…355` |
| Pill geometry | 117 × 29 px at 1200 px width, fully rounded (radius = height ÷ 2 ≈ 14 px), white label "SEE DETAILS" + arrow glyph | measured bbox `x 236…352` |
| Wordmark gradient | `#6b00ff` → `#c41acf` (purple → magenta), "ML." monogram | logo block `x 238…272`, `y 58…88` |
| Hero display face | white, ultra-bold wide grotesque, two lines, cap heights 30 px / 28 px ("FASHION" / "FOR COUPLE") | rows `246…275`, `306…333` |
| Hero body copy | thin, light, letter-spaced, white at soft-opacity over the ramp | paragraph band `y 350…405` |
| Page ground | `#ffffff` | `x=600, y=640` |
| Section heading | `#000000`, bold sans, ~19 px caps on white | "Latest Fashion Trends", bbox `x 464…735`, `y 690…708` |

Font substitution delta: the variant's display face cannot be read from a
thumbnail and no sheet attests it — the closest loadable Google families for this
look are **Poppins 700/800** (display) and **Poppins 300 / Raleway 300** (body).
Record the substitution if the retired variant is ever built; the shipped design
in the table above uses Lato + Playfair Display.

## Section Structure (in order)

1. **Navbar** — Sticky top nav with brand "Drapery" (left, black + coral dot), nav links (Home, Dropdown with nested menus, Inner Page, Contact Us), hamburger on mobile. White background.

2. **Hero Section** — Split layout: left column has figure-2 image (fashion photo) + "Learn more" link with coral accent; right column has carousel with owl pagination (1 of 0), three rotating headings ("Fashion Presents", "Creative Design", "Modern Fashion"), description paragraph, carousel of fashion images with prev/next arrows (coral-colored SVG arrows). AOS fade-up animations.

3. **Collections** — "Collections" heading with line-top decoration, prev/next links. 4-column product carousel: each card has product image, category name (Minimal, Collecta, Nine8, Hut), and price ($29). Hover: image zoom/scale effect. 8 products total (duplicated for carousel).

4. **A Fashion Boutique** — Two-column section: left side has "A Fashion Boutique" heading + descriptive paragraph about the brand; right side has two stacked fashion images (figure-2 style). AOS animations.

5. **Testimonials** — "Testimonials" heading centered, line-top decoration. Three testimonial cards in a row: each has circular avatar (70px, 50% border-radius), quote paragraph, customer name (Adam Aderson, Lukas Devlin, Kayla Bryant). Centered layout, max-width 500px per card.

6. **Blog Posts** — "Blog Posts" heading, "BLOG POSTS" uppercase sub-heading (12px Lato). Four blog post cards in a responsive grid: each has thumbnail image, title link, date, excerpt text. Cards separated by top border line (1px #efefef). Blog posts use media layout (image left, text right on desktop).

7. **Footer** — Two-column layout: left has "About" paragraph + "Connect with us" social icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn); right has "Navigations" heading with 3 columns of links (Home/Services/Work/Process/About Us, Press/Blog/Contact/Support/Privacy, Privacy/FAQ/Careers/Process/About Us). Copyright bar at bottom. Component Dock link per convention. Light background (white).

## Requirements

### Requirement: Navbar displays correctly

Users SHALL see a sticky navbar with the brand name "Drapery" and navigation links that becomes fixed on scroll.

#### Scenario: Navbar renders with all elements

- **WHEN** the page loads
- **THEN** the brand name "Drapery" with a coral dot is visible
- **AND** navigation links "Home", "Dropdown", "Inner Page", "Contact Us" are present
- **AND** the navbar has a white background

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls past the hero section
- **THEN** the navbar remains fixed at the top of the viewport
- **AND** the background remains white

#### Scenario: Mobile menu toggle works

- **WHEN** the user is on a mobile viewport
- **THEN** a hamburger menu button is visible
- **AND** clicking it opens the mobile navigation menu
- **AND** clicking a link closes the menu

### Requirement: Hero section renders with carousel

Users SHALL see a split hero section with a fashion image on the left and a text carousel on the right.

#### Scenario: Hero displays first slide

- **WHEN** the page loads
- **THEN** the hero section is visible with a fashion image
- **AND** the heading "Fashion Presents" is displayed
- **AND** a description paragraph is visible
- **AND** prev/next carousel arrows are present

#### Scenario: Hero carousel advances

- **WHEN** the user clicks the next arrow
- **THEN** the heading changes to "Creative Design"
- **AND** the image changes to the next slide

#### Scenario: Hero carousel loops

- **WHEN** the carousel is on the last slide and the user clicks next
- **THEN** the carousel wraps to the first slide

### Requirement: Collections section displays products

Users SHALL see a product carousel with fashion items, each showing an image, name, and price.

#### Scenario: Collections renders products

- **WHEN** the user scrolls to the Collections section
- **THEN** the heading "Collections" is visible with prev/next navigation
- **AND** product cards are displayed with images, names, and prices

#### Scenario: Collections carousel navigation works

- **WHEN** the user clicks the "Next" link
- **THEN** the carousel scrolls to show more products

#### Scenario: Product card hover effect

- **WHEN** the user hovers over a product card
- **THEN** the product image scales up slightly

### Requirement: About / Boutique section renders

Users SHALL see a two-column section about the fashion boutique with descriptive text and images.

#### Scenario: Boutique section displays content

- **WHEN** the user scrolls to the boutique section
- **THEN** the heading "A Fashion Boutique" is visible
- **AND** a descriptive paragraph is present
- **AND** fashion images are displayed alongside the text

### Requirement: Testimonials section displays

Users SHALL see a testimonials section with customer quotes and avatars.

#### Scenario: Testimonials render correctly

- **WHEN** the user scrolls to the testimonials section
- **THEN** the heading "Testimonials" is visible
- **AND** three testimonial cards are displayed
- **AND** each card shows a circular avatar, quote, and customer name

#### Scenario: Testimonial names match design

- **WHEN** the testimonials are visible
- **THEN** the names "Adam Aderson", "Lukas Devlin", and "Kayla Bryant" are shown

### Requirement: Blog Posts section renders

Users SHALL see a blog section with four post cards in a responsive grid.

#### Scenario: Blog posts display correctly

- **WHEN** the user scrolls to the blog section
- **THEN** the heading "Blog Posts" is visible
- **AND** four blog post cards are displayed in a grid
- **AND** each card has a thumbnail image, title, date, and excerpt

#### Scenario: Blog post hover effect

- **WHEN** the user hovers over a blog post title
- **THEN** the title color changes to coral (#ff6363)

### Requirement: Footer renders correctly

Users SHALL see a footer with about text, social links, navigation columns, and a Component Dock link.

#### Scenario: Footer displays all sections

- **WHEN** the user scrolls to the footer
- **THEN** an "About" section with descriptive text is visible
- **AND** a "Connect with us" section with social icons is present
- **AND** a "Navigations" section with link columns is displayed
- **AND** a copyright bar is visible at the bottom

#### Scenario: Footer social icons work

- **WHEN** the user hovers over a social icon
- **THEN** the icon color changes to coral (#ff6363)

#### Scenario: Footer includes Component Dock

- **WHEN** the footer is rendered
- **THEN** a link to "Component Dock" (https://www.componentdock.com/) is present

## Verification checklist

- [ ] Navbar sticky behavior works on scroll
- [ ] Hero carousel auto-advances and responds to prev/next
- [ ] Collections carousel navigates products
- [ ] Product cards have hover scale effect
- [ ] About/Boutique section has correct layout
- [ ] Testimonials display 3 cards with avatars
- [ ] Blog posts grid is responsive (4→2→1 columns)
- [ ] Blog post titles turn coral on hover
- [ ] Footer has all sections: About, Connect, Navigations, Copyright
- [ ] Footer links to Component Dock
- [ ] All AOS animations trigger on scroll
- [ ] Mobile menu opens/closes properly
- [ ] Responsive breakpoints: 768px, 1024px
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code (only in spec/docs)
