# Template: BlankCanvas (Portfolio / Business)

## Purpose

Recreation of the ColorLib **Whitespace** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source**: [ColorLib Whitespace](https://colorlib.com/wp/template/whitespace/)
- **Preview URL**: https://preview.colorlib.com/theme/whitespace/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category**: Portfolio (TEMPLATES.md line 2578)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| `--brand-primary` | `#fcd307` | Testimonial section background, accent highlights |
| `--brand-dark` | `#000000` | Hero section background |
| `--brand-footer` | `#141313` | Footer background |
| `--brand-text` | `#4d4d4d` | Body text default |
| `--brand-heading` | `#000000` | Headings |
| `--font-heading` | `"Poppins", sans-serif` | All headings |
| `--font-body` | `"Work Sans", sans-serif` | Body text |
| `--radius-button` | `30px` | Pill-shaped CTA buttons |
| `--radius-card` | `4px` | Card border radius |
| `--radius-icon` | `50%` | Circular icon wrappers |

### Color palette summary

- Hero: pure black (`#000`) background, white text
- Testimonials: bright yellow (`#fcd307`) background
- Pricing "bg-light": light gray (`#f8f9fa`)
- Footer: very dark (`#141313`), white text
- Button: brand yellow (`#fcd307`) with dark text, pill shape (radius 30px)

## Section Structure (top → bottom)

1. **Navbar** — Fixed dark (`bg-dark`) navbar with logo text ("Whitespace" → "BlankCanvas"), hamburger on mobile. Links: Home, About, Work, Pricing, Blog, Contact.
2. **Hero** — Full-width black background, large heading "We Help to Build You the Product", subtext "Business Solution", pill-shaped CTA "Get in touch". Height ~750px, centered content.
3. **What We Can Do** — 4-column feature grid. Each card: icon (from Flaticon/ionicons), title (e.g. "Market Research", "Financial Services", "Online Marketing", "24/7 Support"), short paragraph description.
4. **Services Grid** — 2×4 grid of service items. Left side: image placeholder. Right side: numbered service items with icon, title, description (e.g. "Business Strategy", "Data Analysis", "Graphic Design", "Creative").
5. **Counter / Interesting Facts** — Dark overlay section with 4 animated counters: Done Works, Happy Customers, Coffee, Work Hours. Numbers count up on scroll.
6. **Projects Carousel** — "Recents Projects" heading, owl-carousel style horizontal scroll of project thumbnails. Each shows image + overlay with category labels ("Branding & Illustration Design", "Web Design").
7. **Testimonials** — Yellow (`#fcd307`) background, "My satisfied customer says" heading. Carousel of testimonial cards: avatar, quote text, name, role.
8. **Case Study / Blog** — 3-column blog cards. Each: image, date, author, comment count, title, short excerpt. "Our latest update" heading.
9. **Pricing** — 4-tier pricing cards on light gray bg. Tiers: Free ($0), Startup ($19), Premium ($49), Pro ($99). Each card: price, feature list (Bandwidth, Storage, Overages), "Get Started" CTA.
10. **Partner Logos** — Horizontal row of grayscale partner/client logos.
11. **Footer** — Dark (`#141313`) footer. 4-column layout: logo + tagline, Useful Links, Quick Links, Contact info (address, phone, email). Bottom copyright bar with social icons. **MUST include Component Dock link** (replaces any ColorLib attribution).

## Gherkin Requirements

### Scenario: Navbar renders and is responsive
- Given the user is on the landing page
- Then a fixed dark navbar is visible with the logo "BlankCanvas"
- And navigation links: Home, About, Work, Pricing, Blog, Contact
- When the viewport is below lg breakpoint
- Then a hamburger toggle appears
- And clicking it expands/collapses the nav menu

### Scenario: Hero section displays correctly
- Given the user scrolls to the top of the page
- Then a full-width black hero section is visible
- And a heading "We Help to Build You the Product" is displayed
- And a subtext "Business Solution" is shown
- And a pill-shaped yellow CTA button "Get in touch" is visible
- When the user clicks the CTA button
- Then the page scrolls to the contact section

### Scenario: What We Can Do section shows 4 service cards
- Given the user scrolls to the "What We Can Do for You" section
- Then 4 service cards are displayed in a row
- And each card has an icon, title, and description paragraph

### Scenario: Services grid shows 8 service items
- Given the user scrolls to the services section
- Then a grid layout displays 8 service items
- And each item has an icon, title, and description

### Scenario: Counter section animates on scroll
- Given the user scrolls to the "Interesting Facts" section
- Then 4 counter values are displayed: Done Works, Happy Customers, Coffee, Work Hours
- And the numbers animate from 0 to their target values

### Scenario: Projects carousel is interactive
- Given the user scrolls to the "Recents Projects" section
- Then project thumbnails are displayed in a horizontal carousel
- And each thumbnail shows an image with overlay category labels
- When the user navigates the carousel
- Then different project thumbnails slide into view

### Scenario: Testimonials section displays customer quotes
- Given the user scrolls to the "My satisfied customer says" section
- Then a yellow background section is visible
- And testimonial cards display avatar, quote, name, and role
- And the carousel auto-rotates between testimonials

### Scenario: Case Study section shows blog cards
- Given the user scrolls to the "Case Study" section
- Then 3 blog cards are displayed
- And each card shows: image, date, author, comment count, title, excerpt

### Scenario: Pricing section shows 4 tiers
- Given the user scrolls to the "Our Best Pricing" section
- Then 4 pricing cards are displayed: Free, Startup, Premium, Pro
- And each card shows the price, feature list, and a "Get Started" CTA button
- And the Free tier is highlighted or styled differently

### Scenario: Partner logos section renders
- Given the user scrolls to the partner section
- Then a row of partner logos is displayed

### Scenario: Footer contains required links
- Given the user scrolls to the footer
- Then a dark footer section is visible
- And the logo "BlankCanvas" is displayed
- And "Useful Links" and "Quick Links" columns are present
- And contact information (address, phone, email) is shown
- And a "Made with Component Dock" link pointing to `https://www.componentdock.com/` is present

### Scenario: Responsive layout
- Given the user views the page on a mobile device (width < 768px)
- Then sections stack vertically
- And the navbar collapses to a hamburger menu
- And pricing cards stack vertically
- And the footer columns stack vertically

## Verification Checklist

- [ ] All 11 sections render in correct order
- [ ] Navbar is sticky/fixed with responsive hamburger
- [ ] Hero has black bg, white text, yellow pill CTA
- [ ] 4 "What We Can Do" cards with icons
- [ ] 8-item services grid
- [ ] Counter section with animated numbers
- [ ] Projects carousel with image thumbnails + overlays
- [ ] Yellow testimonial section with carousel
- [ ] 3 blog/case study cards
- [ ] 4 pricing tiers with correct prices
- [ ] Partner logo row
- [ ] Dark footer with Component Dock link
- [ ] Responsive at mobile/tablet/desktop
- [ ] Fonts: Poppins (headings), Work Sans (body)
- [ ] Brand color #fcd307 used for testimonials and CTAs
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `blankcanvas.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
