# Template: Strategos (Business / Consulting)

## Purpose

Strategos is a single-page BUSINESS / CONSULTING landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Victor" free template (source:
https://colorlib.com/wp/template/victor/), built under a DIFFERENT name
(**Strategos**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Source mapping:**

- ColorLib item: "Victor" — appears TWICE in TEMPLATES.md:
  - Line 635 (section "## Bootstrap 5 (89)")
  - Line 1219 (section "## Business (365)")
- Source URL: https://colorlib.com/wp/template/victor/
- Preview URL: https://preview.colorlib.com/theme/victor/ (REACHABLE,
  verified 2026-08-25 by direct fetch, 29,836 bytes HTML)

**WHAT THE ORIGINAL LOOKS LIKE (from live preview DOM + CSS analysis):**

A professional business consulting landing page with an orange brand
(`#FF6D21`) on a navy/dark blue gradient footer. The page uses Bootstrap 5
grid, "DM Sans" font, and features: transparent header with sticky behavior

- CTA buttons, full-width hero with background image + centered text +
  orange CTA button, 3-column client statistics section (image + heading +
  text), "Project us" accordion section (image left + 4-item Bootstrap
  accordion right), services section on gray background (2 service cards +
  sidebar image), parallax testimonial section with white card on background
  image, project showcase carousel (2-column split: image left + caption
  right), about/support section (text left + image right), and a 4-column
  footer with dark navy gradient, social links, and copyright bar.

## Design tokens (extracted from live preview CSS)

| Token           | Value                                              | Notes                                    |
| --------------- | -------------------------------------------------- | ---------------------------------------- |
| Brand primary   | `#FF6D21`                                          | Orange — buttons, accents, browse links  |
| Brand dark      | `#232F55`                                          | Navy — button hover, footer gradient end |
| Brand mid       | `#454e6d`                                          | Slate — footer gradient start, text      |
| Brand navy      | `#1f2b7b`                                          | Deep navy — accordion accents            |
| Text primary    | `#1f2b7b`                                          | Dark navy for headings                   |
| Text secondary  | `#454e6d`                                          | Slate for body text                      |
| Text muted      | `#A2A6B2`                                          | Footer text, light elements              |
| Page background | `#fbf9ff`                                          | Very light lavender/white                |
| Gray bg         | `#F8FAFC`                                          | Services section background              |
| White           | `#fff`                                             | Cards, emergency care card               |
| Font family     | `"DM Sans", sans-serif`                            | Global body + headings                   |
| Button radius   | `5px`                                              | .btn, .white-btn (slightly rounded)      |
| Card radius     | `10px`                                             | Emergency care card, project cards       |
| Section padding | `100px 0`                                          | Standard section-padding                 |
| Button hover    | `#232F55`                                          | .btn::before sweep from left             |
| White button    | `#fff` bg, `#FF6D21` text                          | .white-btn with orange sweep             |
| Footer gradient | `linear-gradient(45deg, #454e6d 0%, #232f55 100%)` | 45-degree navy gradient                  |
| Hero background | Image `h1_hero1.jpg`                               | Full-cover background image              |
| Parallax bg     | Image `section-bg1.jpg`                            | Emergency/testimonial section            |

## Section structure (from live preview DOM, order 1:1)

1. **Header** — transparent, sticky, logo left, nav (Home, About, Services,
   Portfolio, Blog+submenu, Contact) center, phone number + "Get Free
   Consultant" white button right. Mobile hamburger menu.
2. **Hero / Slider** — full-width background image, 2-column layout:
   left: h1 "Get the help you need, every step of the way" + p + orange
   "Get Started" button; right: hero shape image.
3. **Client Stats** — 3 equal columns, each: blockquote image + h2 heading
   ("Happier customers" / "Faster growth" / "Connected workflow") + short
   paragraph. Border-bottom separator.
4. **Project Us / Accordion** — centered section title + 2-column layout:
   left: about image; right: 4-item Bootstrap accordion ("Starts the
   automated process" / "The automated process starts" / "Automated process
   starts" / "Process the automated magic") with expandable content.
5. **Services** — gray background, asymmetric layout: left 8-col with
   section title "Improved Digital Experience" + description + 2 service
   cards (icon + h5 title + bullet list + "Learn More" link); right 3-col:
   sidebar image.
6. **Emergency Care / Testimonial** — parallax background image, right-aligned
   white card with message icon + quote text + author name/role.
7. **Project Showcase** — centered title "Handpicked by Victor" + carousel
   of 2-column split cards: left image + right caption (logo icon + h3 +
   description + "View Project" link).
8. **About / Support** — 2-column: left text with section title "Professional
   who works to help with your business" + paragraph + orange "Get Started"
   button; right: support image.
9. **Footer** — 4-column: logo + description + social icons | Services links
   | Navigation links | Contact info. Dark navy gradient background.
   Copyright bar with Colorlib attribution (replaced with Component Dock).

## Gherkin requirements

### Scenario: Header navigation

Given the user loads the page
Then the header shows a logo, navigation links, and CTA buttons
And the header becomes sticky on scroll
And a mobile hamburger menu appears on small screens

### Scenario: Hero section

Given the user views the hero
Then a full-width background image is displayed
And an h1 headline, descriptive paragraph, and "Get Started" button are
visible
And the button uses the brand orange color

### Scenario: Client statistics

Given the user scrolls past the hero
Then 3 client statistic cards are displayed in a row
And each card has an image, heading, and short description

### Scenario: Accordion / Project section

Given the user reaches the project section
Then a section title and description are shown centered
And an image appears on the left
And 4 accordion items appear on the right
And clicking an accordion header expands its content
And only one accordion item is expanded at a time

### Scenario: Services section

Given the user reaches the services area
Then the section has a gray background
And a section title "Improved Digital Experience" is displayed
And 2 service cards are shown with icon, title, bullet list, and link
And a sidebar image appears on the right

### Scenario: Testimonial / Emergency care

Given the user reaches the testimonial section
Then a parallax background image is displayed
And a white card with a quote, author name, and role is shown

### Scenario: Project showcase carousel

Given the user reaches the project showcase
Then the section title "Handpicked by [BrandName]" is centered
And split cards show image on left and caption on right
And each caption has a logo icon, heading, description, and "View Project"
link

### Scenario: About / Support section

Given the user reaches the about section
Then text content with heading and description is on the left
And an orange "Get Started" button is below the text
And an image is on the right

### Scenario: Footer

Given the user reaches the footer
Then a 4-column layout shows logo+social, services, navigation, contact
And the footer uses a dark navy gradient background
And social icons are displayed (Facebook, Instagram, LinkedIn, YouTube)
And a copyright bar with Component Dock attribution is at the bottom

### Scenario: Responsive behavior

Given the user views on mobile
Then the header collapses to a hamburger menu
And multi-column layouts stack vertically
And the accordion and carousel adapt to single-column

## Verification checklist

- [ ] All 9 sections present in correct order
- [ ] Header: sticky on scroll, transparent → solid transition
- [ ] Hero: background image, centered text, orange CTA
- [ ] Client stats: 3 columns with images, headings, descriptions
- [ ] Accordion: 4 items, expand/collapse, only one open at a time
- [ ] Services: gray bg, 2 cards with icons + bullets + links, sidebar image
- [ ] Testimonial: parallax bg, white card with quote
- [ ] Project showcase: split cards with images and captions
- [ ] About: text + button left, image right
- [ ] Footer: 4-column, gradient bg, social links, Component Dock link
- [ ] Responsive: hamburger menu, stacking columns, mobile-friendly
- [ ] Design tokens: #FF6D21 orange, DM Sans font, 5px button radius
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME = strategos.free.componentdock.com
- [ ] homepage = https://strategos.free.componentdock.com
