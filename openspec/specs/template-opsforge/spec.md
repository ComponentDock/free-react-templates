# Template: Opsforge (Digital Agency / Services)

## Purpose

Recreation of the ColorLib **Services** template as a React 19 + Vite + Tailwind 4 + TypeScript app.
- Source slug: `services`
- Preview URL: https://preview.colorlib.com/theme/services/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/services-free-template.jpg
- Stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- Package: `@free-react-templates/opsforge`
- Deploy: `opsforge.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

- **Brand color:** `#C2E54F` (lime/chartreuse — used for `.btn-primary`, accent underlines, section-title after pseudo-element, spinner, sticky nav active/hover color)
- **Body text:** `#666666`
- **Headings / nav text:** `#000000`
- **Hero subtext:** `#1a1a1a`
- **Background light:** `#f8f9fa` (Bootstrap bg-light), `#eff1f3` (dropdown hover)
- **Font family:** `"Jost", sans-serif` (weights 400, 700, 900 from Google Fonts)
- **Button shape:** `border-radius: 30px` (fully rounded pill), padding `10px 30px`, font-size 16px
- **Button hover:** background switches from `#C2E54F` to `#000000`, text stays white
- **Form inputs:** `border-radius: 30px`, height 43px, focus border-color `#C2E54F`
- **Section padding:** `2.5em 0` mobile, `7em 0` desktop
- **Section title underline:** `#C2E54F` bar via `::after` pseudo-element
- **Sticky navbar:** white background + box-shadow `4px 0 20px -5px rgba(0,0,0,0.1)`, border `1px solid transparent`
- **Logo:** bordered white box (4px solid #fff), becomes 4px solid #000 when sticky
- **Footer:** `bg-light`, 4-column grid: address, 3 link columns (Services/Resources/Templates), social icons

## Visual Design Notes (from screenshot reference)

The template is a clean, modern digital services/agency layout with:
- Full-viewport hero with background image and dark overlay, white heading text, centered CTA button in lime green
- White "About Us" section: left text, center image, right text (3-column)
- White "Services" section: 6 service cards in 2-column grid, each with SVG icon + title + description
- White "Projects" section: filter buttons (All/Web/Design/Brand) + 3-column image gallery grid (12 items, no gaps between images)
- Lime-green "Testimonials" section (`bg-primary`) with owl-carousel slider of 3 testimonials
- Light "Blog" section: 3-column blog cards with image, white content area, date, description, "Read More" link
- White "Contact" section: 2-column — left form (first name, full name, email, subject, message, send button), right side with 2 office locations (London, New York) with address/phone/email
- Light footer: 4-column layout with address, 3 link lists, social icons, copyright

## Gherkin Requirements

### Navbar
Scenario: Renders sticky navbar with site logo and navigation links
  Given the page loads
  Then a sticky header is displayed with logo "Opsforge" on the left
  And navigation links are: Home, About, Services, Projects, Blog, Contact
  And the navbar becomes sticky on scroll with white background and shadow
  And the logo has a bordered box style (4px solid border)

### Hero Section
Scenario: Renders full-viewport hero with background image and CTA
  Given the page loads
  Then a full-viewport hero section is displayed with background image
  And the heading reads "We Are Digital Services"
  And a subtitle paragraph is displayed below the heading
  And a CTA button labeled "Our Services" links to the services section
  And the button has pill shape (border-radius: 30px) and lime-green background

### About Section
Scenario: Renders About Us section with text-image-text layout
  Given the user scrolls to the About section
  Then the section title reads "About Us"
  And three columns are displayed: text on left, image in center, text on right
  And each text column contains two paragraphs of descriptive content

### Services Section
Scenario: Renders 6 service cards in a 2-column grid
  Given the user scrolls to the Services section
  Then the section title reads "Services" (centered)
  And 6 service cards are displayed in a 2-column grid
  And each card has an icon, a title, and a description paragraph
  And the services are: Content Marketing, Social Media Marketing, Brand & Logo Design, Social Media Advertising, Social Media Advertising, Web Design / Development

### Projects Section
Scenario: Renders filterable gallery with category buttons
  Given the user scrolls to the Projects section
  Then the section title reads "Projects" (centered)
  And filter buttons are displayed: All, Web, Design, Brand
  And "All" is the default active filter
  And 12 project images are displayed in a 3-column grid with no gaps
  And clicking a filter button shows only items matching that category
  And hovering an image shows a search icon overlay

### Testimonials Section
Scenario: Renders client testimonials in a carousel on lime-green background
  Given the user scrolls to the Testimonials section
  Then the section has a lime-green background
  And the section title reads "What Client Are Sayings" (white text, centered)
  And a carousel displays 3 testimonial slides
  And each slide has a quote and a cite with author name
  And the carousel auto-advances or allows manual navigation

### Blog Section
Scenario: Renders 3 blog post cards on light background
  Given the user scrolls to the Blog section
  Then the section has a light background
  And the section title reads "Blog Posts" (centered)
  And 3 blog cards are displayed in a 3-column grid
  And each card has a featured image, a white content area with title, date, description, and "Read More" link

### Contact Section
Scenario: Renders contact form with office locations
  Given the user scrolls to the Contact section
  Then the section title reads "Contact Form" (centered)
  And a form is displayed on the left with fields: First name, Full name, Email address, Subject, Message textarea
  And a "Send Message" button with pill shape is below the form
  And on the right, two office locations are listed (London, New York) with Address, Phone, Email for each

### Footer
Scenario: Renders light footer with columns and social icons
  Given the page footer
  Then the footer has a light background
  And four columns are displayed: address, Services links, Resources links, Templates links
  And social icons are displayed (Twitter, Facebook, Instagram, Dribbble, LinkedIn)
  And a copyright line with "Component Dock" link replaces the original attribution

## Verification Checklist

- [ ] Navbar renders with logo and all 6 nav links
- [ ] Navbar becomes sticky on scroll with shadow
- [ ] Hero section has full-viewport height with background image
- [ ] "Our Services" CTA button links to services section
- [ ] About section has 3-column layout (text, image, text)
- [ ] Services section shows 6 cards in 2-column grid
- [ ] Projects section has filter buttons and 12 images in 3-col grid
- [ ] Filter buttons correctly filter project images by category
- [ ] Testimonials carousel slides through 3 quotes
- [ ] Blog section shows 3 cards on light background
- [ ] Contact form has all 5 fields and Send Message button
- [ ] Contact section shows 2 office locations with details
- [ ] Footer has 4 columns, social icons, and Component Dock link
- [ ] All design tokens match: Jost font, #C2E54F brand color, 30px border-radius
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
