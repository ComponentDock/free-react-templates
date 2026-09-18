# Template: PhotoLux (Photography / Personal Portfolio)

## Purpose

Recreation of ColorLib **Credo** — a photographer/personal portfolio template.

- **Source:** https://colorlib.com/wp/template/credo/
- **Preview:** https://preview.colorlib.com/theme/credo/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `photolux` (never reuse source name "credo")
- **Package:** `@free-react-templates/photolux`
- **Surge target:** `photolux.free.componentdock.com`

## Design tokens (extracted from preview)

| Token | Value |
|-------|-------|
| **Brand color** | `#fab95b` (golden amber) |
| **Dark color** | `#000000` (black) |
| **Light background** | `#eff1f3` (light gray) |
| **Section alt background** | `#f7f7f7` |
| **White** | `#ffffff` |
| **Text dark** | `#212529` |
| **Text muted** | `#666666` / `#888888` / `#999999` |
| **Font family** | Nunito (weights 300, 400, 700) via Google Fonts |
| **Button radius** | 30px (pill shape) |
| **Button padding** | 10px 30px |
| **Button primary** | black bg, white text |
| **Progress bar radius** | 4px |
| **Social circle** | 50% radius, pill shape |
| **Card radius** | 2px / 4px |

### Visual notes from screenshot/preview

- Clean, minimal photographer portfolio with dark hero overlay on a full-width cover image.
- Centered logo ("Credo") in the header with navigation links split on both sides.
- Hero has a large portrait photo on the right, text + CTA button on the left over a dark semi-transparent overlay.
- Services section: light gray background (`#eff1f3`), 2×2 grid with numbered/icon service cards.
- About section: two-column — left has image + paragraphs, right has animated progress bars.
- Portfolio section: masonry-style 3-column photo grid with hover overlay + search icon.
- Testimonials: carousel/slider on brand color (#fab95b) background, blockquotes with citations.
- Blog section: light background, 3-column card layout (image + white content area + title, date, excerpt, read more link).
- Contact section: brand color (#fab95b) background, form with dark send button.
- Footer: light background, 4-column layout (brand/address, Services, Resources, Quick Links, social icons), copyright with heart icon.

## Requirements (Gherkin)

### Scenario: Navbar renders with centered logo and split nav links
- **Given** the page loads
- **When** the user views the header
- **Then** the logo "PhotoLux" is centered between two sets of navigation links
- **And** left nav links are: Home, About, Services
- **And** right nav links are: Photography, Blog, Contact
- **And** all nav links are scroll anchors to their respective sections

### Scenario: Hero section displays portrait and intro
- **Given** the page loads
- **When** the user views the hero section
- **Then** a heading "I'm [Name]" is displayed
- **And** a subtitle line shows role and secondary role separated by a pipe
- **And** introductory paragraph text is shown
- **And** a "Contact Me" CTA button links to the contact section
- **And** a portrait image appears on the right side (or below on mobile)
- **And** the section has a dark overlay background

### Scenario: Services section shows service cards
- **Given** the page loads
- **When** the user scrolls to the services section
- **Then** a "Services" heading is centered at the top
- **And** four service cards are displayed in a 2×2 grid
- **And** each card has an icon, title, and description paragraph
- **And** the section background is light gray

### Scenario: About section shows progress bars
- **Given** the page loads
- **When** the user scrolls to the about section
- **Then** an "About Me" heading is displayed
- **And** a portrait/photo image appears on the left column
- **And** biographical text paragraphs appear below the image
- **And** the right column shows skill labels with progress bars
- **And** each progress bar has a skill name, percentage label, and filled bar

### Scenario: Photography portfolio displays image grid
- **Given** the page loads
- **When** the user scrolls to the photography section
- **Then** a "My Photography" heading is centered
- **And** a 3-column masonry-style grid of images is displayed
- **And** each image has a hover overlay with a search icon
- **And** clicking an image opens a lightbox/fancybox

### Scenario: Testimonials carousel shows client quotes
- **Given** the page loads
- **When** the user scrolls to the testimonials section
- **Then** a "What Clients Are Saying" heading is displayed on brand color background
- **And** a carousel shows blockquotes with client quotes
- **And** each quote includes a cite with the client name
- **And** the carousel auto-plays and is navigable

### Scenario: Blog posts section displays post cards
- **Given** the page loads
- **When** the user scrolls to the blog section
- **Then** a "Blog Posts" heading is centered
- **And** three blog post cards are displayed in a 3-column layout
- **And** each card has a featured image, title, date, excerpt, and "Read More" link
- **And** the section background is light

### Scenario: Contact form collects user messages
- **Given** the page loads
- **When** the user scrolls to the contact section
- **Then** a "Say Hello" heading is displayed on brand color background
- **And** a form with first name, full name, email, subject, and message fields is shown
- **And** a "Send Message" button submits the form
- **And** form inputs have placeholder text

### Scenario: Footer displays brand info and links
- **Given** the page loads
- **When** the user scrolls to the footer
- **Then** the brand name and address are shown in the first column
- **And** Services, Resources, and Quick Links columns each show a list of links
- **And** social media icons (Twitter, Facebook, Instagram, Dribbble, LinkedIn) are shown
- **And** a copyright line includes a link to Component Dock

### Scenario: Navigation scrolls to sections smoothly
- **Given** the page loads
- **When** the user clicks a nav link (e.g., "About")
- **Then** the page smooth-scrolls to the corresponding section
- **And** the active nav link updates based on scroll position

### Scenario: Mobile responsive layout
- **Given** the page loads on a mobile viewport
- **When** the user views the page
- **Then** the navbar collapses into a hamburger menu
- **And** the hero portrait stacks below the text
- **And** service cards stack into a single column
- **And** the portfolio grid adjusts to fewer columns
- **And** the footer columns stack vertically

## Verification checklist

- [ ] All sections match the original's structure and order 1:1
- [ ] Brand color `#fab95b` is used as the primary accent
- [ ] Font is Nunito (Google Fonts, weights 300/400/700)
- [ ] Buttons are pill-shaped (30px radius)
- [ ] Navbar is centered logo with split links
- [ ] Hero has dark overlay + portrait + CTA
- [ ] Services: 2×2 grid with icons
- [ ] About: progress bars with skill percentages
- [ ] Portfolio: masonry grid with hover overlay
- [ ] Testimonials: carousel on brand background
- [ ] Blog: 3-column cards with read more
- [ ] Contact: form on brand background
- [ ] Footer: 4-column layout with social icons + Component Dock link
- [ ] Mobile responsive (hamburger, stacked layouts)
- [ ] Smooth scroll navigation
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] `npm run verify:app photolux` passes
