# Template: Timbercraft (Woodworking / Carpentry)

## Purpose

Recreation of ColorLib's **Woodwork** carpentry/woodworking company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/woodwork/
- **Preview (analyzed):** https://preview.colorlib.com/theme/woodwork/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/woodwork-colorlib-template.jpg
- **Package:** `@free-react-templates/timbercraft`
- **Surge target:** `https://timbercraft.free.componentdock.com`

## Design Tokens

Extracted from the preview's `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand / primary | `#bfb332` | Buttons, accent text, hover states |
| Dark | `#111111` | Headings, strong text, header bg |
| Text body | `#333333` (inferred from Bootstrap defaults) | Paragraphs |
| Font family (body) | `Josefin Sans, sans-serif` | Global body text |
| Font family (heading) | `Rajdhani, sans-serif` | Headings, button text |
| Button radius | `60px` (pill shape) | `.primary-btn` elements |
| Button style | padding, white text, bg `#bfb332` | Primary CTA |
| Border button | transparent bg, dark text, 1px border | `.border-btn` variant |
| Hero bg | dark (`#000` or `#111111`) | Hero slider background |
| Testimonial quote | `#bfb332` color on quote icon | Opening quote marks |

## Section Structure (order from preview DOM)

1. **Header** — logo image, nav links: Home, About, Pages (dropdown), Services (dropdown), Blog (dropdown), Contact, hamburger for mobile
2. **Hero Slider** — 2-slide carousel with background images, centered text: heading "New construction remodeling, additions", "Contact us" button (pill-shaped, brand color)
3. **About** — 2-column: left = 3 images (1 large + 2 small stacked); right = "About woodworking" span + "30 years of woodworking experience" heading + paragraph + 3 counter stats (1800+ Projects, 1200+ Clients, 150+ Awards)
4. **Services** — full-width carousel of 4 service cards: Design Solutions, Exterior Design, Moldings & Trim, Office Furniture. Each: bg image + text overlay with title
5. **Testimonials** — slider with quote icon, paragraph, author name + location, 5-star rating
6. **Portfolio** — 3-column grid of project images with text overlay: title + location pin
7. **Choose Us** — "Why choose us?" heading + 3 feature items: Highly Professional Staff, Using Latest Mechanical System, Certified Material in a Timely. Each: icon bg shape + title + paragraph
8. **Footer** — 2-column: left = logo + description + contact info (address, phone, email); right = embedded Google Map. Copyright line + social links (Facebook, Twitter, Instagram, YouTube)

## Gherkin Requirements

### Feature: Header

Scenario: Logo and navigation display
  Given the user is on any page
  Then the logo image is visible in the header
  And navigation links "Home", "About", "Services", "Blog", "Contact" are visible

Scenario: Mobile hamburger menu
  Given the viewport is mobile width (< 768px)
  Then a hamburger menu icon is visible
  And clicking it opens a slide-in mobile menu

### Feature: Hero Slider

Scenario: Hero slider displays
  Given the user lands on the page
  Then a hero slider with 2 slides is shown
  And the heading "New construction remodeling, additions" is displayed
  And a "Contact us" pill-shaped button is visible

Scenario: Hero auto-slides
  Given the hero slider is loaded
  Then slides advance automatically at regular intervals

### Feature: About Section

Scenario: About content displays
  Given the user scrolls past the hero
  Then "About woodworking" label and "30 years of woodworking experience" heading are shown
  And a descriptive paragraph is visible
  And 3 images are displayed on the left

Scenario: Counter stats display
  Given the about section is visible
  Then 3 counter stats are shown: "1800+ Projects", "1200+ Clients", "150+ Awards"

### Feature: Services

Scenario: Service cards display
  Given the user scrolls to the services section
  Then 4 service cards appear in a carousel
  And each has a background image and title overlay
  And services are: Design Solutions, Exterior Design, Moldings & Trim, Office Furniture

### Feature: Testimonials

Scenario: Testimonial slider displays
  Given the user scrolls to testimonials
  Then a testimonial slider shows quote icon, paragraph, author name + location
  And 5-star rating is displayed for each testimonial

### Feature: Portfolio

Scenario: Portfolio grid displays
  Given the user scrolls to the portfolio section
  Then 3 project images are displayed in a row
  And each has a text overlay with project title and location

### Feature: Choose Us

Scenario: Why choose us section displays
  Given the user scrolls to the choose us section
  Then "Why choose us?" heading is shown
  And "High quality is the standard" subheading is displayed
  And 3 feature items appear: "Highly professional staff", "Using latest mechanical system", "Certified material in a timely"
  And a "Contact us" border button is present

### Feature: Footer

Scenario: Footer layout
  Given the user scrolls to the footer
  Then logo, description, and contact info (address, phone, email) are shown
  And a Google Map embed is visible
  And copyright line with social links (Facebook, Twitter, Instagram, YouTube) is at the bottom

Scenario: Footer links to Component Dock
  Given the footer is visible
  Then a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification Checklist

- [ ] All sections present in correct order matching preview DOM
- [ ] Brand color `#bfb332` applied to buttons and accent elements
- [ ] Fonts Josefin Sans (body) and Rajdhani (headings) applied
- [ ] Buttons have pill shape (border-radius 60px)
- [ ] Hero has 2-slide carousel with dark bg
- [ ] About section has 3 images + text + 3 counter stats
- [ ] Services carousel with 4 cards
- [ ] Testimonials with quote icons, ratings, author info
- [ ] Portfolio grid with 3 images + text overlays
- [ ] Choose Us section with 3 feature items
- [ ] Footer has contact info, map, social links
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders (deterministic seeds)
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] 100% test coverage
