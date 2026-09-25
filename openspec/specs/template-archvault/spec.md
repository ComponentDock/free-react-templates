# Template: Archvault (Architecture / Interior Design)

## Purpose

Recreation of ColorLib "Archs" — an architecture/interior design onepage template with a full-width hero, video play button, team grid, pricing plans, testimonials carousel, project gallery, blog posts, services grid, and contact form.

- **Source slug:** `archs`
- **Preview URL:** https://preview.colorlib.com/theme/archs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/archs-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Architecture / Interior Design Onepage

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Colors

| Token             | Value                      | Usage                                                          |
| ----------------- | -------------------------- | -------------------------------------------------------------- |
| brand-primary     | `#ff5733`                  | Form focus border (the only accent color in CSS)               |
| heading-dark      | `#000`                     | All headings (h1-h6), text-black utility                       |
| body-text         | `gray`                     | Default paragraph text                                         |
| muted-text        | `#b3b3b3` / `#737373`     | Muted captions, dates, footer paragraph text                   |
| footer-heading    | `#fff`                     | Footer column headings                                         |
| footer-link       | `#999999`                  | Footer links, hover → white                                    |
| white             | `#fff`                     | Navbar text, hero text, button text, form backgrounds           |
| selection-bg      | `#000`                     | Text selection background                                      |
| selection-fg      | `#fff`                     | Text selection foreground                                      |
| border-light      | `#ced4da`                  | Border-top on footer, pricing card borders                     |
| bg-light          | `#ebeef0`                  | FAQ section bg, testimonial heading bg                         |
| footer-bg         | `#333333`                  | Site footer background                                         |
| btn-primary-bg    | `#fff` (Bootstrap default) | Primary button background (white text on dark/colored bg)      |
| btn-primary-hover | `transparent`              | Primary button hover → transparent with black text             |

### Typography

- **Font family:** Nunito Sans (via Cloudflare Fonts, weights 200–900); fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`
- **Body:** `1rem`, `line-height: 1.7`, `font-weight: 300`
- **Headings:** `color: #000` (black), bold weight
- **Section sub-title (`.sub-title`):** Small uppercase/accent text above headings — the "Learn To Know", "Meet Our Team", etc. labels
- **Navbar logo:** `font-weight: bold`, uppercase, white, 20px
- **Hero h1:** Uppercase, white, large (3rem+), centered on dark hero image

### Buttons & Shapes

- **Primary CTA (`.btn-primary`):** White bg (#fff), dark text, `rounded-0` (square/sharp corners), `border-width: 2px`. On hover: transparent bg, black text.
- **Pricing cards:** `rounded` border container, white bg, centered text
- **Form controls:** Height 47px, focus border `#ff5733`
- **All buttons:** `rounded-0` (square/sharp corners) — the signature look

### Section Backgrounds

1. **Top bar:** Transparent/white text on dark hero image background
2. **Navbar:** Transparent overlay on hero, white text
3. **Hero:** Full-width background image with dark semi-transparent overlay, centered play button (video link)
4. **Features strip:** White bg, 3-column icon+text cards, border-bottom
5. **About Us:** White bg, 2-column (image left, text right with check list)
6. **Our Team:** White bg, 3x2 grid of team member cards with social overlay
7. **Pricing:** White bg, 3-column pricing cards with border
8. **FAQ:** White bg, 2-column (image left, accordion right)
9. **Testimonials:** White bg, owl-carousel slider with images + quotes
10. **Projects:** White bg, 3x2 grid gallery with lightbox links
11. **Blog/News:** White bg, 3-column post cards + "View All Posts" CTA
12. **Services:** White bg, 3x2 grid of icon+text service cards
13. **Contact:** Light gray bg (`bg-light`), full-width form with white bg container
14. **Footer:** Dark gray bg (`#333333`), 3-column (About + nav, Recent News, Newsletter + social), copyright bar

## Section Structure (page order)

1. **Top Bar** — social icons (Twitter, Facebook, LinkedIn, Instagram) left, email + phone right, on hero bg
2. **Navbar** — "ARCHS" logo left, nav links right (Home, About Us ▾, Projects, News, Services, Contact); dropdown under About Us (Team, Pricing, FAQ)
3. **Hero** — full-width background image, dark overlay, centered play button (video), "INTERIOR DESIGN" uppercase heading, italic subtitle
4. **Features Strip** — 3 columns: Innovative Structure, Architectural, Interior Design — each with icon + title + description, border-bottom
5. **About Us** — 2-column: large image left, "Learn To Know" subtitle + "About Us" heading + paragraphs + checklist (4 items) + "Read More About Us" CTA button
6. **Our Team** — centered subtitle "Meet Our Team" + heading "Our Team" + description; 3×2 grid of team member cards (image, name, role, social overlay on hover, description)
7. **Pricing** — centered subtitle "Pricing" + heading "Choose Your Plan"; 3 pricing cards (Starter $30/yr, Professional $72/yr, Enterprise $130/yr) each with feature list and "Buy Now" button
8. **FAQ** — 2-column: image left, accordion right with 5 FAQ items; subtitle "Ask Us, We Are Happy To Answer"
9. **Testimonials** — centered subtitle "Happy Clients" + heading "Testimonials"; owl-carousel of 4 testimonial slides (image, name, role, quote)
10. **Projects** — centered subtitle "Awesome Projects" + heading "Our Projects"; 3×2 project gallery grid with lightbox, project name + category
11. **Blog/News** — centered subtitle "News & Update" + heading "Our Blog Posts"; 3 blog post cards (image, date, title) + "View All Posts" CTA
12. **Services** — centered subtitle "Services" + heading "Our Services"; 3×2 grid of service cards (icon + title + description)
13. **Contact** — centered subtitle "Get In Touch" + heading "Contact Us"; full-width form with Full Name, Email, Message fields + "Send Message" button
14. **Footer** — dark bg (#333333), 3-column: About Us text + Navigation links; Recent News (3 items with thumbnails); Subscribe Newsletter + Follow Us social icons; copyright bar

## Gherkin Requirements

### Navbar
- **Scenario: Logo and navigation render** — Given the page loads, Then the logo "Archvault" is visible, And nav links (Home, About, Projects, News, Services, Contact) are visible
- **Scenario: Navbar is sticky** — Given the user scrolls down, Then the navbar sticks to the top of the viewport
- **Scenario: Mobile hamburger menu** — Given the viewport is below lg, Then a hamburger icon is visible, And clicking it toggles the mobile menu

### Hero
- **Scenario: Hero renders** — Given the page loads, Then a full-width hero image is displayed with dark overlay
- **Scenario: Hero heading visible** — Given the hero renders, Then "INTERIOR DESIGN" heading is centered and uppercase
- **Scenario: Play button** — Given the hero renders, Then a play icon button is centered above the heading

### Features Strip
- **Scenario: Three features display** — Given the features section renders, Then three feature cards are shown (Innovative Structure, Architectural, Interior Design)
- **Scenario: Each feature has icon and text** — Given a feature card renders, Then an icon and title and description paragraph are visible

### About Us
- **Scenario: About section renders** — Given the about section renders, Then a large image is on the left and text content on the right
- **Scenario: Checklist items** — Given the about section renders, Then 4 checklist items are visible
- **Scenario: CTA button** — Given the about section renders, Then a "Read More About Us" button is visible

### Our Team
- **Scenario: Team grid renders** — Given the team section renders, Then 6 team member cards are displayed in a 3-column grid
- **Scenario: Team member info** — Given a team card renders, Then a photo, name, role, social icons, and description are visible
- **Scenario: Social overlay on hover** — Given the user hovers a team card, Then social icons overlay the image

### Pricing
- **Scenario: Three pricing plans** — Given the pricing section renders, Then Starter ($30), Professional ($72), and Enterprise ($130) cards are displayed
- **Scenario: Pricing feature list** — Given a pricing card renders, Then a list of features with checkmarks and strikethrough for unavailable is shown
- **Scenario: Buy Now button** — Given a pricing card renders, Then a "Buy Now" button is visible

### FAQ
- **Scenario: FAQ accordion renders** — Given the FAQ section renders, Then 5 accordion items are displayed
- **Scenario: Accordion toggle** — Given a FAQ item is collapsed, When the user clicks the question, Then the answer expands
- **Scenario: Accordion collapse** — Given a FAQ item is expanded, When the user clicks the question, Then the answer collapses

### Testimonials
- **Scenario: Testimonials carousel renders** — Given the testimonials section renders, Then a carousel with testimonial slides is visible
- **Scenario: Testimonial content** — Given a testimonial slide renders, Then an image, name, role, and quote are displayed

### Projects
- **Scenario: Project gallery renders** — Given the projects section renders, Then 6 project cards are displayed in a 3-column grid
- **Scenario: Project card content** — Given a project card renders, Then an image, project name, and category label are visible
- **Scenario: Lightbox link** — Given a project card renders, Then the image links to a lightbox/gallery view

### Blog/News
- **Scenario: Blog posts render** — Given the news section renders, Then 3 blog post cards are displayed
- **Scenario: Post card content** — Given a post card renders, Then an image, date, and title are visible
- **Scenario: View All Posts button** — Given the news section renders, Then a "View All Posts" button is visible

### Services
- **Scenario: Services grid renders** — Given the services section renders, Then 6 service cards are displayed in a 3-column grid
- **Scenario: Service card content** — Given a service card renders, Then an icon, title, and description are visible

### Contact
- **Scenario: Contact form renders** — Given the contact section renders, Then a form with Full Name, Email, and Message fields is visible
- **Scenario: Submit button** — Given the contact form renders, Then a "Send Message" button is visible
- **Scenario: Form validation** — Given the user submits with empty fields, Then validation errors are shown

### Footer
- **Scenario: Footer renders** — Given the footer renders, Then About Us text, Navigation links, Recent News items, Newsletter form, and social icons are visible
- **Scenario: Newsletter input** — Given the footer renders, Then an email input + Send button are visible
- **Scenario: Component Dock link** — Given the footer renders, Then a link to componentdock.com is present

## Verification Checklist

- [ ] All sections render in the correct page order
- [ ] Navbar is sticky on scroll
- [ ] Hero has dark overlay, centered heading, play button
- [ ] Features strip shows 3 cards with icons
- [ ] About section: image left, checklist, CTA button
- [ ] Team grid: 6 members with social overlays
- [ ] Pricing: 3 plan cards with feature lists
- [ ] FAQ accordion toggles correctly
- [ ] Testimonials carousel slides
- [ ] Projects gallery: 6 items with lightbox
- [ ] Blog: 3 posts + View All button
- [ ] Services: 6 cards with icons
- [ ] Contact form with validation
- [ ] Footer: 3-column layout, newsletter, social, Component Dock link
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains archvault.free.componentdock.com
- [ ] package.json homepage set to https://archvault.free.componentdock.com
