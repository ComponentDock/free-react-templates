# Template: Litigate (Law Firm Landing Page)

## Purpose

Recreation of the ColorLib **Whisper** template
(preview: https://preview.colorlib.com/theme/whisper/,
source: https://colorlib.com/wp/template/whisper/).

A single-page law firm website with dark hero banner, stat counters,
practice areas grid, attorney flip cards, free consultation form,
client testimonials, image gallery, newsletter parallax, and footer.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary / accent | `#eac15a` | Gold — buttons, icons, links, highlights |
| Dark background | `#2c2f3a` | Services, attorney, testimony sections |
| Darker background | `#16181d` | Alternating service cards, consultation overlay |
| Footer background | `#222831` | Footer area |
| Dark warm | `#3c312e` | Alternate dark bg (`.ftco-bg-dark`) |
| Light background | `#f8f9fa` | `.bg-light` sections, counter cards |
| White | `#fff` | Text on dark, practice area hover, form bg |
| Text dark | `#212529` | Body text |
| Hero overlay | `#000000` opacity 0.5 | Dark overlay on hero background image |
| Primary button | `#eac15a` bg, white text, border-radius 3px | Hover: transparent bg, gold text/border |
| Font body | Poppins (Google Fonts) | Weights 300–800 |
| Font accent | Lora (Google Fonts, serif) | Italic for slider text, breadcrumbs |
| Button radius | 3px | All buttons |
| Practice area icon | Circular 130×130px, gold bg, border-radius 50% | Hover inverts to white bg |
| Form control | height 52px, border-radius 5px, white bg | Focus: black border |

## Section structure (DOM order)

1. **Navbar** — Dark bg, sticky. Brand "Whisper" left, nav links right (Home, About Us, Practice Areas, Attorneys, Blog, Contact). Mobile hamburger toggle.
2. **Hero** — Full-screen background image with dark overlay (opacity 0.5). Slider text: italic subheading "We are here to help!", h1 headline, gold accent text, CTA button.
3. **Services / Stats Counter** — Split layout: left = video thumbnail with play button overlay; right = "Fun Facts" heading, stat counters (clients, cases, staff, etc.), description text.
4. **About / Practice Areas** — Light bg. Heading: "Practice Areas". Grid of circular icon cards (gold bg, white icon). Each: icon, title, link. ~5-6 practice areas.
5. **Attorneys** — Dark bg (#2c2f3a). Heading: "Our Legal Attorneys". 4-column grid of flip cards: front = background image + name + role; back = quote + small avatar + name.
6. **Free Consultation** — Split layout: left = background image with dark overlay + gold border accent + logo/icon; right = form (name, email, subject, textarea, submit button).
7. **Testimonials / Happy Clients** — Dark bg. Carousel of testimonial cards: circular avatar, quote icon, review text, name, role. Owl carousel style.
8. **Blog / Recent** — Light bg. Heading: "Recent Blog". 3-column grid of blog cards: image, date, title, short excerpt, read more link.
9. **Gallery** — Full-width 4-column image grid. Each: background image, Instagram icon overlay on hover (gold bg, white icon).
10. **Newsletter / Parallax** — Dark bg with parallax background image. Heading: "Subscribe to our Newsletter". Email input + submit button.
11. **Footer** — Dark bg (#222831). Multi-column: About text, Practice Areas links, Business Hours, Contact info (address, phone, email). Copyright line with Component Dock link.

## Gherkin scenarios

### Navbar
- **Scenario: Navbar renders with brand and nav links**
  - Given the page loads
  - Then the navbar displays brand "Litigate"
  - And nav links: Home, About Us, Practice Areas, Attorneys, Blog, Contact

- **Scenario: Navbar is sticky on scroll**
  - Given the user scrolls past the hero
  - Then the navbar remains fixed at the top

### Hero
- **Scenario: Hero shows headline with accent text**
  - Given the page loads
  - Then the hero displays italic subheading
  - And an h1 headline
  - And a gold CTA button

- **Scenario: Hero is full-screen with dark overlay**
  - Given the page loads on desktop
  - Then the hero occupies full viewport height
  - And a dark overlay covers the background image

### Services / Stats
- **Scenario: Stats section shows counters and video**
  - Given the user scrolls to the stats section
  - Then a video thumbnail with play button is visible on the left
  - And stat counters are displayed on the right
  - And a "Fun Facts" heading is visible

### Practice Areas
- **Scenario: Practice areas grid shows circular icon cards**
  - Given the user scrolls to practice areas
  - Then at least 4 practice area cards are visible
  - And each card has a circular gold icon, title, and link

- **Scenario: Practice area icon inverts on hover**
  - Given a practice area card is visible
  - When the user hovers over it
  - Then the icon background changes from gold to white

### Attorneys
- **Scenario: Attorney cards display flip animation**
  - Given the user scrolls to the attorneys section
  - Then 4 attorney cards are visible
  - And each card shows name and role on the front
  - And a quote + avatar on the back (revealed on hover/click)

### Free Consultation
- **Scenario: Consultation form has all fields**
  - Given the user scrolls to the consultation section
  - Then a name input, email input, subject input, message textarea, and submit button are visible

- **Scenario: Form is presentational**
  - Given the consultation form is visible
  - When the user fills in all fields and clicks submit
  - Then no navigation occurs (SPA behavior)

### Testimonials
- **Scenario: Testimonials carousel shows client reviews**
  - Given the user scrolls to the testimonials section
  - Then at least 3 testimonial cards are visible
  - And each card shows an avatar, quote, name, and role

### Blog
- **Scenario: Blog section shows 3 recent posts**
  - Given the user scrolls to the blog section
  - Then 3 blog cards are visible
  - And each card shows an image, date, title, excerpt, and read more link

### Gallery
- **Scenario: Gallery shows 4-column image grid**
  - Given the user scrolls to the gallery
  - Then 4 gallery images are visible in a row
  - And hovering reveals an Instagram icon overlay

### Newsletter
- **Scenario: Newsletter has email input and submit**
  - Given the user scrolls to the newsletter section
  - Then an email input and submit button are visible
  - And the section has a parallax background

### Footer
- **Scenario: Footer displays multi-column layout**
  - Given the user scrolls to the footer
  - Then About, Practice Areas, Business Hours, and Contact columns are visible

- **Scenario: Footer links to Component Dock**
  - Given the footer renders
  - Then a link to https://www.componentdock.com/ is present

## Verification checklist

- [ ] Navbar sticky on scroll with dark bg
- [ ] Hero full-screen with dark overlay + gold accents
- [ ] Primary buttons: gold (#eac15a) bg, white text, radius 3px
- [ ] Poppins + Lora fonts loaded via Google Fonts
- [ ] Stats counter section with video thumbnail
- [ ] Practice areas: circular gold icons, invert on hover
- [ ] Attorneys: flip cards with front/back content
- [ ] Free consultation: split layout, form on right
- [ ] Testimonials: carousel with avatars and quotes
- [ ] Blog: 3-column card grid
- [ ] Gallery: 4-column images with hover icon overlay
- [ ] Newsletter: parallax bg, email input + submit
- [ ] Footer: multi-column with business hours, contact, Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive layout (mobile breakpoints)
