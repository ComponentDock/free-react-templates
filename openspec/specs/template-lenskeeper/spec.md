# Template: Lenskeeper (Photography)

## Purpose

Recreation of ColorLib "Photography" template as a React 19 + Vite + Tailwind 4 + TypeScript app. Portfolio/photography personal site with hero carousel, about section, photo gallery grid, call-to-action, blog section, contact form, and footer.

- **Source:** [ColorLib Photography](https://colorlib.com/wp/template/photography/)
- **Preview URL:** https://preview.colorlib.com/theme/photography/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **Screenshots:** `https://colorlib.com/wp/wp-content/uploads/sites/2/photography-free-photography-website-template.jpg` (AVIF format, analyzed via live preview DOM + CSS)

## Design tokens

Extracted from `https://preview.colorlib.com/theme/photography/css/main.css`:

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#7a77ff` | Primary button background gradient start, accent color |
| `brand-green` | `#8cfe86` | Primary button gradient end |
| `dark-bg` | `#222222` | Gallery section background, footer background, heading text color |
| `light-bg` | `#f9f9ff` | Alternate section backgrounds (About section) |
| `white` | `#ffffff` | Primary section backgrounds (Blog, Contact) |
| `text-dark` | `#222222` | Heading text |
| `text-body` | `#777777` | Body/paragraph text |
| `text-white` | `#ffffff` | Text on dark backgrounds |
| `cyan` | `#4cd3e3` | Accent color |
| `blue` | `#38a4ff` | Accent color |
| `yellow` | `#f4e700` | Accent color |
| `red` | `#f44a40` | Accent color |
| `pink` | `#e66686` | Accent color |
| `purple` | `#a367e7` | Accent color |
| `orange` | `#f09359` | Accent color |
| `green` | `#73fbaf` | Accent color |
| `border-gray` | `#656463` | Input borders |

### Gradient

- Primary button + call-to-area: `linear-gradient(0deg, #7a77ff 0%, #8cfe86 100%)`

### Typography

- **Font family:** `"Poppins", sans-serif` (loaded via Google Fonts)
- **Headings:** h1/h2/h3/h4/h5/h6 use Poppins, color #222222, line-height 1.2em

### Buttons

- **Primary button (`.primary-btn`):** pill shape (border-radius: 25px), gradient background (#7a77ff → #8cfe86), white text, padding 12px 30px/60px, uppercase text
- **White outline button (`.btn-white`):** border 1px solid #777, color #222, font-weight 500, uppercase text, padding 12px 30px

### Section spacing

- `.section-gap` used for consistent vertical padding between sections

## Gherkin requirements

### Navbar

Scenario: Transparent overlay navbar
  - The navbar is absolutely positioned over the hero carousel
  - It contains the site logo/name on the left
  - It contains navigation links: Home, About Me, Gallery, Blog, Contact
  - Links use smooth scroll to their respective section IDs (#home, #about, #gallery, #blog, #contact)
  - The navbar is transparent (no background) by default, overlaying the carousel

### Hero / Banner Carousel

Scenario: Full-height image carousel with captions
  - The hero section is a full-viewport-height image carousel (Bootstrap-style)
  - Each slide has a background image covering the full slide
  - Each slide has a centered caption with an h2 heading ("Wildlife Photography") and a subtitle paragraph
  - The carousel auto-plays between 3 slides
  - Previous/Next navigation arrows are present
  - Carousel indicators (dots) are present

### About Section

Scenario: Split layout with image and text
  - The section sits on a light background (#f9f9ff)
  - Left column: a portrait/about image (img-fluid)
  - Right column: heading "We Believe that Interior beautifies the" (h1), a paragraph of descriptive text, and a "Hire me now" primary button with arrow icon
  - The layout is a 50/50 two-column split on desktop, stacked on mobile

### Gallery Section

Scenario: Dark background photo grid
  - The section has a dark background (#222222) with white text
  - Centered heading: "My Recent Photos" (h1, white)
  - Centered subtitle paragraph
  - Photo grid uses a 4-column masonry/column layout (.gal class with CSS columns)
  - 10+ photos displayed as clickable image thumbnails
  - Images have padding between them (7px vertical)

### Call-to-Action Section

Scenario: Gradient background CTA bar
  - The section has the brand gradient background (linear-gradient #7a77ff → #8cfe86)
  - Left side: heading "Not sure about my charge?" (h1, uppercase)
  - Right side: "Donate Now" white outline button (.btn-white)
  - Layout is 9/3 column split

### Blog Section

Scenario: 3-column blog card grid
  - Centered heading: "Our Recent Blogs" (h1)
  - Centered subtitle paragraph
  - 3 blog cards in a row (col-lg-4)
  - Each card has: featured image, h4 title (linked), paragraph excerpt, author row with avatar + name + date + heart count + comment count
  - Cards are evenly spaced with consistent styling

### Contact Section

Scenario: Split layout with image and contact form
  - Left column: contact image (img-fluid, full width)
  - Right column: heading "Send me Message" (h1), subtitle paragraph, form with name input, email input, textarea (message), and "confirm booking" primary button with arrow
  - The form has no visible borders on inputs (transparent background, #656463 border)
  - Layout is a split on desktop, stacked on mobile

### Footer

Scenario: Dark footer with copyright and social links
  - Dark background (#222222)
  - Left: copyright text with dynamic year ("Copyright © [year] All rights reserved")
  - Right: social media icon links (Facebook, Twitter, Dribbble, Behance)
  - Social icons have dark round (#111111) background containers
  - Footer links to Component Dock (replacing original Colorlib attribution)

## Verification checklist

- [ ] App folder: `apps/lenskeeper`
- [ ] Package: `@free-react-templates/lenskeeper`
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] `public/CNAME` contains `lenskeeper.free.componentdock.com`
- [ ] `homepage` in package.json: `https://lenskeeper.free.componentdock.com`
- [ ] `npm install` run at root to register workspace in package-lock.json
- [ ] `vite.config.ts` registers `injectUiSource()` for Tailwind v4.3
- [ ] Design tokens applied via `@theme` in `index.css`
- [ ] All sections match original structure and order 1:1
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Conventional commit: `feat: add Lenskeeper template (ColorLib Photography)`
