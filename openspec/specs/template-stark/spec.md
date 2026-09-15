# Template: Stark (Business / Agency)

## Purpose

Stark is a multi-section single-page BUSINESS AGENCY template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Whitespace" free template (source:
https://colorlib.com/wp/template/whitespace/), built under a DIFFERENT
name (**Stark**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 multi-page agency template with a dark
split-hero, services grid, parallax stats counter, project gallery,
testimonial carousel, blog/case-study cards, 4-tier pricing table,
partner logos row, and a dark footer. The recreation consolidates it
into a single-page React app matching section order 1:1.

**Source slug:** `whitespace`
**Preview URL (verified reachable):** https://preview.colorlib.com/theme/whitespace/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg

## Design Tokens

### Colors
- **Primary / brand:** `#78d5ef` (sky-blue/cyan — used for buttons, links, accents)
- **Primary hover:** `#56caeb` / `#4ac7ea` (darker cyan shades)
- **Body text:** `#212529` (near-black)
- **Muted text:** `#6c757d` (grey)
- **Hero background:** `#000000` (solid black — split left panel)
- **Hero right panel:** video/image background (use picsum placeholder)
- **Counter / parallax section:** background image with dark overlay
- **Pricing section background:** `#f8f9fa` (light grey, Bootstrap `bg-light`)
- **Footer background:** `#141313` (very dark grey/near-black)
- **Footer text:** `#fff` (white)
- **Navbar:** dark bg (`#343a40` Bootstrap dark)

### Typography
- **Font family:** "Poppins" (Google Fonts, weights 300–900)
- **Body fallback:** "Work Sans", system-ui stack (from Bootstrap)
- **Subheadings:** 14px, font-weight 600, uppercase, letter-spacing 3px, color `#78d5ef`
- **H1 hero:** large, white, bold
- **H2 section headings:** bold, dark text
- **H3 service/card headings:** bold

### Buttons
- **Primary (solid):** bg `#78d5ef`, color `#212529`, no border-radius (square/0)
- **Primary hover:** bg `#56caeb`
- **Outline variant:** bg transparent, border `#78d5ef`, color `#78d5ef`
- **Custom hero button (.btn-custom):** white text, bottom border accent, no radius

### Layout
- **Hero:** 750px height, split layout — 20% left (solid black, white text) + 80% right (full-bleed image/video)
- **Sections:** Bootstrap container + row/col grid, 6em vertical padding
- **Partner row:** 5 equal-width logo columns
- **Footer:** 4-column grid on dark bg

## Gherkin Requirements

### Scenario: Navbar renders with brand and navigation links
- **Given** the page has loaded
- **When** I look at the navigation bar
- **Then** I see the brand name "Stark"
- **And** I see navigation links: Home, About, Work, Pricing, Blog, Contact
- **And** the navbar has a dark background
- **And** the brand text is white and bold

### Scenario: Hero section displays split layout with CTA
- **Given** the page has loaded
- **When** I look at the hero section
- **Then** I see a split layout with a dark left panel and image right panel
- **And** the left panel shows a subheading "Welcome" in uppercase cyan
- **And** the left panel shows heading "We Help to Build You the Product"
- **And** the left panel shows subheading "Business Solution"
- **And** I see a "Get in touch" call-to-action button

### Scenario: Services section shows four service cards
- **Given** the page has loaded
- **When** I scroll to the "What We Can Do for You" section
- **Then** I see a subheading "Providing" in uppercase cyan
- **And** I see four service items: Market Research, Financial Services, Online Marketing, 24/7 Support
- **And** each service has an icon and description text

### Scenario: Additional services grid displays four items
- **Given** the page has loaded
- **When** I scroll to the services grid section
- **Then** I see four service cards in a grid layout
- **And** the cards show: Business Strategy, Data Analysis, Graphic Design, Creative
- **And** each card has a circular icon and a heading

### Scenario: Counter section displays statistics with parallax background
- **Given** the page has loaded
- **When** I scroll to the "Interesting Facts" section
- **Then** I see a parallax background image
- **And** I see the subheading "Some" in uppercase
- **And** I see the heading "Interesting Facts"
- **And** I see four statistics: 2000 Done Works, 300 Happy Customers, 100 Coffee, 1000 Work Hours
- **And** the statistics have large white numbers and white label text

### Scenario: Projects section displays a grid of recent projects
- **Given** the page has loaded
- **When** I scroll to the "Recent Projects" section
- **Then** I see a subheading "Projects" in uppercase cyan
- **And** I see the heading "Recent Projects"
- **And** I see a grid of 6 project cards with images
- **And** each project card shows "Branding & Illustration Design" as the title

### Scenario: Testimonials section shows a carousel of customer quotes
- **Given** the page has loaded
- **When** I scroll to the testimonials section
- **Then** I see the heading "My satisfied customer says"
- **And** I see a carousel of testimonial slides
- **And** each slide shows a quote text, customer name, and avatar

### Scenario: Case Study section displays blog-style cards
- **Given** the page has loaded
- **When** I scroll to the "Case Study" section
- **Then** I see the heading "Case Study"
- **And** I see a description paragraph
- **And** I see 3 blog-style cards with image, date, author, comment count, and title

### Scenario: Pricing section shows four pricing tiers
- **Given** the page has loaded
- **When** I scroll to the pricing section
- **Then** I see the heading "Our Best Pricing"
- **And** I see 4 pricing cards: Free ($0), Startup ($19), Premium ($49), Pro ($79)
- **And** each card shows a price, description, feature list, and a "Get Started" button
- **And** the Free tier button is solid primary style
- **And** the other tiers use outline button style

### Scenario: Partner logos row displays five logos
- **Given** the page has loaded
- **When** I scroll to the partner section
- **Then** I see a row of 5 partner logo images
- **And** the logos are evenly spaced in a horizontal row

### Scenario: Footer renders with four columns and social links
- **Given** the page has loaded
- **When** I scroll to the footer
- **Then** I see a dark background footer
- **And** I see the brand name "Stark" with a description paragraph
- **And** I see social media icon links (Twitter, Facebook, Instagram)
- **And** I see a "Useful Links" column with Home, About, Work, Pricing, Blog
- **And** I see a "Quick Links" column with About Us, Practice Areas, Appointment, Terms & Conditions, FAQ
- **And** I see a "Have a Questions?" column with address, phone, and email
- **And** the footer links to `https://www.componentdock.com/` branded as "Component Dock"

### Scenario: Page uses Poppins font from Google Fonts
- **Given** the page has loaded
- **When** I inspect the rendered text
- **Then** the primary font is "Poppins" from Google Fonts
- **And** subheadings are uppercase, 14px, 600 weight, with 3px letter-spacing

### Scenario: All interactive elements are accessible
- **Given** the page has loaded
- **When** I navigate using keyboard only
- **Then** all links and buttons are focusable
- **And** the mobile menu toggle has an aria-label
- **And** images have descriptive alt text

## Verification Checklist

- [ ] Spec covers every visible section from the original Whitespace template
- [ ] Design tokens match the original CSS (colors, fonts, spacing)
- [ ] Section order matches the original 1:1
- [ ] New name "Stark" does NOT appear in ColorLib's original
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images use `https://picsum.photos/seed/stark-<n>/<w>/<h>`
- [ ] Google Fonts loaded via `<link>` in index.html (Poppins)
- [ ] Icons from lucide-react (replacing original flaticon/ionicons)
