# Template: Unwrap (Portfolio / One-Page)

## Purpose

Unwrap is a one-page portfolio template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Unfold" free template
(source: https://colorlib.com/wp/template/unfold/), built under a DIFFERENT
name (**Unwrap**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a dark-themed single-page portfolio for creative professionals:
a full-bleed hero with background image, centered heading, a 9-item isotope
portfolio grid with hover overlays, client logo carousel (Swiper), about-me
section with portrait and CV download, 6 service cards, 4 animated skill
counters, a testimonial slider, a journal/blog grid, a contact form, and a
fixed-position dark footer. Navigation is a split layout (left links + center
logo + right links) that becomes fixed white on scroll. The accent color is
a vivid red (#D63447). The entire page is dark-themed (#000 body).

**Source URL:** https://colorlib.com/wp/template/unfold/
**Preview URL:** https://preview.colorlib.com/theme/unfold/

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and rendered DOM
(verified by direct fetch of the preview HTML + stylesheet).

| Token | Value | Use |
|-------|-------|-----|
| Page bg | `#000` (solid black) | `body` and `.unslate_co--site-inner` background |
| Text | `#fff` (white) | Body text, nav links, headings |
| Accent | `#D63447` (vivid red) | Logo period, active nav link, hover states, mobile menu hover |
| Footer bg | `#191919` | Fixed-position footer at bottom of page |
| Font (body) | Raleway 300/400/700 | Google Fonts; base 16px, line-height 30px, weight 300 |
| Font (headings) | Arimo 400 | Google Fonts; used for headings via CSS |
| Buttons | border-radius 30px (pill), uppercase, letter-spacing 0.1rem, font-weight 900, padding 15px 30px | `.btn` base; outline-pill variant uses 2px `rgba(255,255,255,0.5)` border |
| Nav (default) | Absolute, transparent bg, white text | Logo centered, links split left/right; font-size 14px |
| Nav (scrolled) | Fixed, white bg, black text, box-shadow | Logo and links turn black; active/hover links turn #D63447 |
| Hero | Full-width background image (`jarallax`), centered text | Heading "Unfold" large + subtitle; scroll indicator (mouse) at bottom |
| Portfolio grid | 3-col on lg, 2-col on sm/md; isotope-style items | Overlay on hover: semi-transparent bg + icon + title + category tags |
| Client logos | Swiper carousel, 4 logos (Google, Puma, PayPal, Adobe) | Grayscale, auto-scroll |
| Services | 6 cards in 3-col grid | SVG icon (45px) + title (h3) + paragraph; fade-up animation |
| Skills | 4 counters in 4-col grid | Large number (animated count-up) + percentage label + skill name |
| Testimonials | Swiper slider with prev/next arrows + pagination | Quote block + author photo + name + position |
| Journal | Asymmetric grid: 8-col large + 4-col small top row; three 4-col below | Overlay on hover with title + author + read time |
| Contact | 2-col: form left (name, email, textarea, send button) + address info right | Form uses outline-pill button; address shows email, phone, location |
| Footer | Logo, social links (Facebook, Twitter, Instagram, Dribbble, Behance), copyright | Dark bg #191919, centered content |

## Requirements

### Navbar

#### Scenario: Desktop navigation renders split layout

- **GIVEN** the page loads on a desktop viewport
- **THEN** the navbar displays with left links (Home, Portfolio, About, Services)
- **AND** right links (Skills, Testimonial, Journal, Contact)
- **AND** the logo "Unwrap." is centered between them
- **AND** the theme toggle button is visible on desktop

#### Scenario: Navbar becomes fixed on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar becomes fixed at the top with a white background
- **AND** nav links switch to dark text
- **AND** the active section link highlights in red (#D63447)

#### Scenario: Mobile hamburger menu opens

- **GIVEN** the page loads on a mobile viewport
- **THEN** a hamburger menu toggle is visible
- **AND** clicking it opens a slide-in mobile nav panel
- **AND** clicking close or a link closes the panel

### Hero

#### Scenario: Hero section displays background image and heading

- **GIVEN** the page loads
- **THEN** the hero shows a full-width background image
- **AND** the heading "Unwrap" is centered
- **AND** a subtitle describes the person
- **AND** a scroll-down mouse indicator is visible at the bottom

#### Scenario: Scroll indicator navigates to portfolio

- **GIVEN** the user clicks the scroll indicator
- **THEN** the page smoothly scrolls to the portfolio section

### Portfolio

#### Scenario: Portfolio grid renders 9 items

- **GIVEN** the portfolio section loads
- **THEN** 9 portfolio items are displayed in a 3-column grid on desktop
- **AND** each item has a thumbnail image, title, and category tags
- **AND** hovering an item reveals a semi-transparent overlay with a link icon

#### Scenario: Portfolio items link to detail or lightbox

- **GIVEN** the user clicks a portfolio item
- **THEN** it navigates to a detail page or opens a lightbox (simplified: links to #)

### Client Logos

#### Scenario: Logo carousel renders and auto-scrolls

- **GIVEN** the client logos section loads
- **THEN** 4 client logos are displayed in a horizontal carousel
- **AND** the carousel auto-plays through the logos

### About Me

#### Scenario: About section shows portrait and bio

- **GIVEN** the about section loads
- **THEN** a portrait image is displayed on the left (7-col)
- **AND** a heading "We can make it together" is shown on the right (4-col)
- **AND** two paragraphs of bio text are displayed
- **AND** a "Download my CV" pill button is visible

### Services

#### Scenario: Six service cards render in a grid

- **GIVEN** the services section loads
- **THEN** 6 service cards are displayed in a 3-column grid
- **AND** each card has an SVG icon, a title, and a description
- **AND** cards animate in with fade-up on scroll

### Skills

#### Scenario: Four skill counters render and animate

- **GIVEN** the skills section loads
- **THEN** 4 skill counters are displayed (WordPress 90%, HTML/CSS 99%, JavaScript 95%, Design 100%)
- **AND** each counter animates from 0 to its target number on scroll

### Testimonials

#### Scenario: Testimonial slider renders with navigation

- **GIVEN** the testimonials section loads
- **THEN** at least 2 testimonial slides are displayed
- **AND** each slide has a quote, author photo, name, and position
- **AND** prev/next arrows and pagination dots are visible

### Journal / Blog

#### Scenario: Blog grid renders posts

- **GIVEN** the journal section loads
- **THEN** at least 3 blog posts are displayed in an asymmetric grid
- **AND** the first post spans 8 columns (large) and the second spans 4 columns
- **AND** each post has a background image, title, author, and read time
- **AND** hovering a post reveals an overlay with the title

### Contact

#### Scenario: Contact form renders with fields

- **GIVEN** the contact section loads
- **THEN** a form with name, email, and message fields is displayed
- **AND** a "Send Message" pill button is present
- **AND** contact info (email, phone, address) is shown on the right

#### Scenario: Form submission is handled

- **GIVEN** the user fills in name, email, and message
- **AND** clicks "Send Message"
- **THEN** a success message is displayed (simplified: no real backend)

### Footer

#### Scenario: Footer displays branding and social links

- **GIVEN** the footer renders
- **THEN** the logo "Unwrap." is displayed
- **AND** social links (Facebook, Twitter, Instagram, Dribbble, Behance) are shown
- **AND** a copyright line with "Component Dock" credit links to componentdock.com

## Verification checklist

- [ ] All 10 sections render in correct order (navbar, hero, portfolio, logos, about, services, skills, testimonials, journal, contact, footer)
- [ ] Dark theme: #000 body, white text, #D63447 accent
- [ ] Raleway + Arimo fonts loaded via Google Fonts
- [ ] Pill-shaped buttons (border-radius 30px, uppercase, outline style)
- [ ] Navbar: split layout on desktop, hamburger on mobile, fixed on scroll
- [ ] Hero: background image, centered heading, scroll indicator
- [ ] Portfolio: 9-item grid with hover overlays
- [ ] Client logos: horizontal carousel
- [ ] About: portrait + bio + CV button
- [ ] Services: 6 cards with icons
- [ ] Skills: 4 animated counters
- [ ] Testimonials: slider with quotes and author info
- [ ] Journal: asymmetric blog grid with hover overlays
- [ ] Contact: form + address info
- [ ] Footer: logo, social links, Component Dock credit
- [ ] Mobile responsive (hamburger nav, stacked layouts)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] `npm run verify:app -- unwrap` passes (typecheck + lint + 100% coverage + build)
