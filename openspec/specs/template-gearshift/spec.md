# Template: Gearshift (Automotive Services)

## Purpose

Recreation of ColorLib "Automotive" — an automotive garage/repair services website.
- **Source:** https://colorlib.com/wp/template/automotive/
- **Preview:** https://preview.colorlib.com/theme/automotive/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| Font family | "Public Sans", sans-serif | Google Fonts, geometric sans-serif |
| Brand primary | #5F67FF | Blue-violet purple — buttons, active nav, accents |
| Brand secondary | #2C85AE | Teal — service icons, secondary highlights |
| Brand accent | #3EAFF0 | Light blue — icon accents |
| Dark bg top bar | #25282C | Header top utility bar |
| Dark bg sections | #353535 | Counter/CTA section background |
| Dark bg footer | #25282C | Footer background |
| Body text | #111111 / #333 | Headings / body copy |
| Muted text | #6e6e6e / #999 | Descriptions, meta |
| Light bg | #f7f7f7 | Services/products alternating sections |
| White bg | #ffffff | Default, testimonial section |
| Red accent | #DC4438 | Alert/decorative |
| Button radius | 2px | `.primary-btn` — slightly rounded square |
| Button padding | 14px 25px 12px | Bold 700 weight, 15px font |
| Section spacing | spad class | ~70px vertical padding per section |

## Section Structure (order from live preview)

1. **Header — Top Bar** (dark #25282C bg, white text): phone, hours, map link, social icons
2. **Header — Main Nav** (white bg): logo (gear icon + "Automotive"), nav links (Home active with #5F67FF underline), search + cart icons
3. **Hero** (full-width background image, dark overlay): "Welcome To" subheading, "Auto-Motive Garage" h2 (60px white bold), lorem paragraph, "Our Services" primary-btn
4. **Services** (white bg): section title "What We Do?", 3-column grid alternating text+icon blocks and image blocks — Engine Overhaul, Power Steering, etc. with #2C85AE thin-line icons
5. **Choose Us** (white bg): left image, right text with bullet points and CTA primary-btn
6. **Products** (white bg, #f7f7f7 alt): product cards grid
7. **Counter** (dark #353535 bg, spad): stat counters (projects completed, clients, awards, etc.)
8. **Latest / Blog** (white bg): section title, blog cards grid (image, date, title, excerpt)
9. **Testimonial** (white bg, owl-carousel): testimonial slider with client name, role, quote, avatar
10. **Footer** (dark #25282C bg): about text + button, quick links widget, recent news widget, address widget with social icons, copyright bar with social links

## Gherkin Requirements

### Scenario: Header renders with contact info and navigation
- GIVEN the user visits the page
- WHEN the header loads
- THEN a dark top bar displays phone, hours, map link, and social icons
- AND a white nav bar shows the logo, nav links (Home, Services, Shop, Pages, Blog), search icon, and cart icon

### Scenario: Hero banner displays with CTA
- GIVEN the user views the hero section
- WHEN the page loads
- THEN a full-width background image is shown with a dark overlay
- AND "Welcome To" subheading appears above the main heading
- AND "Auto-Motive Garage" heading is displayed in 60px white bold text
- AND a "Our Services" primary button links to the services section

### Scenario: Services grid shows service items
- GIVEN the user scrolls to the services section
- WHEN the section is visible
- THEN a centered "What We Do?" heading appears
- AND a responsive grid shows alternating text/icon blocks and image blocks
- AND each text block has a colored icon, bold title, and description paragraph

### Scenario: Choose Us section displays with CTA
- GIVEN the user scrolls to the choose us section
- WHEN the section is visible
- THEN an image is shown on one side
- AND text with feature points appears on the other side
- AND a primary CTA button is displayed

### Scenario: Products grid shows product cards
- GIVEN the user scrolls to the products section
- WHEN the section is visible
- THEN a grid of product cards is rendered
- AND each card has an image, title, and price/action

### Scenario: Counter section shows statistics
- GIVEN the user scrolls to the counter section
- WHEN the section is visible
- THEN a dark background section displays stat counters
- AND each counter shows a number and label

### Scenario: Latest blog section shows posts
- GIVEN the user scrolls to the blog section
- WHEN the section is visible
- THEN a grid of blog post cards is rendered
- AND each card has an image, date, title, and excerpt

### Scenario: Testimonial carousel renders
- GIVEN the user scrolls to the testimonial section
- WHEN the section is visible
- THEN a slider/carousel displays testimonial items
- AND each item has a quote, client name, role, and avatar

### Scenario: Footer renders with widgets
- GIVEN the user scrolls to the footer
- WHEN the footer loads
- THEN a dark background section displays about text, quick links, recent news, and address
- AND social icons are shown in the copyright bar
- AND a "Component Dock" link is present

### Scenario: Responsive layout adapts
- GIVEN the user views on mobile (width < 768px)
- WHEN the page renders
- THEN the header collapses to a hamburger menu
- AND grids stack to single-column
- AND the hero text size reduces

## Verification Checklist

- [ ] Spec matches preview DOM section order (1:1)
- [ ] Brand color #5F67FF used for primary buttons and active nav
- [ ] Font "Public Sans" loaded via Google Fonts
- [ ] Button radius 2px on primary buttons
- [ ] Dark top bar (#25282C) with contact info
- [ ] White nav bar with logo + links + icons
- [ ] Hero with background image, dark overlay, heading, CTA
- [ ] Services grid with alternating icon/image blocks
- [ ] Choose Us split layout with image + text + CTA
- [ ] Products grid section
- [ ] Counter section with dark bg and stats
- [ ] Blog/Latest section with card grid
- [ ] Testimonial carousel
- [ ] Dark footer with widgets and copyright
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
