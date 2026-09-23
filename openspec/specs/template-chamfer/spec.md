# Template: Chamfer (Interior Design & Architecture)

## Purpose

Chamfer is a warm interior-design studio landing template in the
free-react-templates monorepo. It is a React recreation of the ColorLib free
"Theinterior" template, built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/theinterior/
Preview URL: https://preview.colorlib.com/theme/theinterior/
New name: `chamfer` (apps/chamfer, @free-react-templates/chamfer)

## Design reference (replication findings)

### Original

ColorLib "Theinterior" — interior design studio landing page
(`<title>Interior Design HTML-5 Template</title>`). A warm, editorial one-pager
with dark section backgrounds, red accent color, and a full-bleed photo hero.
The template uses Bootstrap 4 grid, owl-carousel slider, slick gallery, and
wow.js scroll animations. The aesthetic is industrial-chic: dark muted navy
section backgrounds, bold red call-to-action buttons, and condensed sans-serif
typography.

### Screenshot analysis

The preview screenshot shows:

- Full-width hero with a large interior photo background and dark semi-transparent
  overlay; large white condensed heading on the left half
- Dark navy section with three feature columns below the hero
- A large background-image banner section with a text block and full-width red button
- Three service cards in a row with icon images and descriptions
- A masonry-like photo gallery grid (varying column widths) with hover overlay
- Team member grid with circular or rectangular photos
- Testimonial carousel with centered quote text
- Brand logo carousel (greyscale partner logos)
- Dark CTA banner with bold heading and contact button
- Two-column blog section with date/meta badges
- Dark footer with logo, addresses, Instagram grid, social icons

### CSS tokens extracted

**Fonts:**

- Headings (h1–h6): `"Barlow Condensed", sans-serif` (weight 500)
- Body/paragraph: `"Barlow", sans-serif` (weight 400)
- Both loaded via Google Fonts: `Barlow+Condensed:200,300,400,500,600,700,800` and `Barlow:300,400,500,600,700`

**Brand colors:**

| Token         | Hex                 | Usage                                   |
| ------------- | ------------------- | --------------------------------------- |
| brand-red     | `#ff1313`           | Primary buttons, scroll-to-top, accents |
| dark-navy     | `#16161a`           | `.black-bg`, dark section backgrounds   |
| deep-charcoal | `#0b1416`           | `.btn-black` (CTA banner)               |
| body-text     | `#10285d`           | Paragraph text color                    |
| link-gray     | `#635c5c`           | Anchor default color                    |
| heading-white | `#fff`              | Headings on dark backgrounds            |
| overlay-dark  | `rgba(0,12,32,0.8)` | Hero and banner overlay                 |
| muted-gray    | `#7e7e7e`           | Secondary text                          |
| light-bg      | `#f7f7f7`           | `.body-bg` light sections               |
| gold-accent   | `#dca73a`           | Decorative / icon accent                |
| medium-gray   | `#717b9b`           | Tertiary text                           |
| dark-text     | `#383838`           | Dark heading text                       |

**Button styling:**

- `.btn`: background `#ff1313`, uppercase, `font-family: "Barlow Condensed"`,
  `border-radius: 0px`, `padding: 27px 44px`, `letter-spacing: 1px`, `font-size: 16px`
- Hover: white background slides in via `scaleX(0)→scaleX(1)` transition (cubic-bezier)
- `.btn-black`: background `#0b1416`, used for CTA banner
- `.boxed-btn`: white bg, red text/border, hover fills red
- `.header-btn`: extra padding `30px 53px`

**Section backgrounds:**

- Hero: full-bleed image with dark overlay
- Our Info: `data-background` image (dark)
- Professional Services: `data-background` image (dark)
- Testimonials: white/light background
- Blog: white/light background
- CTA Banner: white bg
- Footer: `.footer-bg` dark background
- Body: `.body-bg` = `#f7f7f7`

**Scroll-to-top:**

- Red circle (`border-radius: 50%`), background `#ff1313`, fixed bottom-right

## Section order (from preview DOM)

1. **Header/Navbar** — transparent, sticky; logo left, nav center (Home, About, Services, Gallery, Blog, Contact), "Contact Us" button right; mobile hamburger
2. **Hero/Slider** — owl-carousel with 2 slides; full-width image + dark overlay; heading "Modern Interior & Design" on left half; video play icon
3. **Our Info** — dark background image section; 3 columns each with title + description (Clean and Services / Clean and Modern)
4. **Professional Services** — full-width background-image banner + text block ("We will create modern and first class interior") + "Discover More About Us" full-width red button
5. **Services** — "Best Interior Services" heading; 3 service cards (Lighting, Interior Design, Office Decoration) with icon images and descriptions
6. **Gallery** — masonry grid of 6 project images with hover overlay showing project name + arrow icon
7. **Team** — 3 team members with photos, names ("Jhon Sunsa"), roles ("Creative director")
8. **Testimonial** — owl-carousel with 2 testimonials; centered quote, logo image, founder name
9. **Brand Area** — carousel of 5–6 partner/client logos
10. **CTA Banner** — "Are you Searching For a First-Class Consultant?" + "Contact Us" black button
11. **Blog** — "Our recent news"; 2 blog cards with image, date badge, meta, title, "Read more" link
12. **Footer** — dark; logo + description + phone; 2 address columns (New York, Japan); Instagram feed (6 images); social links (Twitter, Facebook, Globe, Instagram); copyright

## Requirements

### Requirement: Header renders navigation and CTA

The header SHALL display a logo, navigation links (Home, About, Services, Gallery, Blog, Contact), and a "Contact Us" button.

#### Scenario: Header renders navigation and CTA

- **WHEN** the header is visible
- **THEN** it contains a logo and navigation links
- **AND** a "Contact Us" call-to-action button is present

### Requirement: Hero slider displays with dark overlay

The hero section SHALL show a full-width background image with dark overlay, a welcome subheading, and the heading "Modern Interior & Design".

#### Scenario: Hero slider displays with dark overlay

- **WHEN** the hero section is visible
- **THEN** a full-width background image with dark overlay is shown
- **AND** the heading "Modern Interior & Design" is displayed
- **AND** a video play icon is present

### Requirement: Our Info shows three feature columns

The Our Info section SHALL display three columns with titles and descriptions on a dark background.

#### Scenario: Our Info shows three feature columns

- **WHEN** the Our Info section is visible
- **THEN** three columns are displayed side by side
- **AND** each column has a title and description

### Requirement: Professional Services banner with CTA

The Professional Services section SHALL show a background image, heading, and "Discover More About Us" button.

#### Scenario: Professional Services banner with CTA

- **WHEN** the Professional Services section is visible
- **THEN** the heading "We will create modern and first class interior" is displayed
- **AND** a "Discover More About Us" button is shown

### Requirement: Services grid shows three service cards

The Services section SHALL display three cards (Lighting, Interior Design, Office Decoration) with icons and descriptions.

#### Scenario: Services grid shows three service cards

- **WHEN** the Services section is visible
- **THEN** three service cards are displayed in a row
- **AND** each card has an icon, title, and description

### Requirement: Gallery shows masonry image grid

The Gallery section SHALL display six project images in a masonry-like grid with hover overlays.

#### Scenario: Gallery shows masonry image grid

- **WHEN** the Gallery section is visible
- **THEN** six project images are displayed in a grid
- **AND** hovering shows a project name overlay and arrow icon

### Requirement: Team section shows three members

The Team section SHALL display three team members with photos, names, and roles.

#### Scenario: Team section shows three members

- **WHEN** the Team section is visible
- **THEN** three team member cards are displayed
- **AND** each card has a photo, name, and role title

### Requirement: Testimonial carousel displays quotes

The Testimonial section SHALL display a carousel with quotes, dot navigation, and previous/next controls.

#### Scenario: Testimonial carousel displays quotes

- **WHEN** the Testimonial section is visible
- **THEN** a testimonial carousel is present with dot navigation
- **AND** each slide shows a quote and founder name

### Requirement: Brand logos carousel

The Brand Area section SHALL display a row of greyscale partner logos.

#### Scenario: Brand logos carousel

- **WHEN** the Brand Area section is visible
- **THEN** a carousel of partner logos is displayed

### Requirement: CTA banner with contact action

The CTA Banner section SHALL display a heading and "Contact Us" button.

#### Scenario: CTA banner with contact action

- **WHEN** the CTA Banner section is visible
- **THEN** the heading "Are you Searching For a First-Class Consultant?" is displayed
- **AND** a "Contact Us" button is present

### Requirement: Blog section shows recent posts

The Blog section SHALL display two blog post cards with image, date, author, metadata, and "Read more" link.

#### Scenario: Blog section shows recent posts

- **WHEN** the Blog section is visible
- **THEN** two blog post cards are displayed
- **AND** each card has an image, date, title, and "Read more" link

### Requirement: Footer renders contact info and Component Dock link

The footer SHALL display logo, description, addresses, Instagram feed, social links, and Component Dock attribution.

#### Scenario: Footer renders contact info and social links

- **WHEN** the footer is visible
- **THEN** it contains the logo and company description
- **AND** two address columns are displayed
- **AND** social media icon links are present
- **AND** the copyright text includes "Component Dock"

### Requirement: Scroll-to-top button

The page SHALL show a circular red scroll-to-top button when scrolled down.

#### Scenario: Scroll-to-top button

- **WHEN** the page is scrolled down
- **THEN** a circular red scroll-to-top button appears in the bottom-right
- **AND** clicking it scrolls the page to the top

## Verification checklist

- [ ] Header renders with transparent background over hero
- [ ] Logo and navigation links are present and functional
- [ ] Hero slider cycles between slides with dark overlay
- [ ] "Welcome" subheading and main heading are displayed
- [ ] Video play icon is present in hero
- [ ] Our Info section shows 3 feature columns on dark background
- [ ] Professional Services section has background image + text + CTA
- [ ] Services section shows 3 cards (Lighting, Interior Design, Office Decoration)
- [ ] Gallery shows 6 images in masonry grid with hover overlay
- [ ] Team section shows 3 members with photos, names, roles
- [ ] Testimonial carousel cycles with dot navigation
- [ ] Brand Area shows partner logo carousel
- [ ] CTA Banner displays heading and Contact Us button
- [ ] Blog section shows 2 posts with metadata
- [ ] Footer shows logo, description, addresses, Instagram, social icons
- [ ] Footer copyright includes "Component Dock"
- [ ] Scroll-to-top button appears and works
- [ ] Design tokens match: brand-red #ff1313, dark-navy #16161a, Barlow + Barlow Condensed fonts
- [ ] Buttons are square (border-radius 0) with uppercase text
- [ ] All placeholder images use picsum.photos
