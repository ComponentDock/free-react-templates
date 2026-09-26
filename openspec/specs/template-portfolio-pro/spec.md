# Template: PortfolioPro (Personal Portfolio / Resume)

## Purpose

Recreation of ColorLib's **Beckham** template (https://colorlib.com/wp/template/beckham/).
Preview: https://preview.colorlib.com/theme/beckham/

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.
Images: https://picsum.photos/seed/portfolio-pro-<n>/w/h placeholders.

## Design tokens (from preview CSS)

| Token              | Value                          | Notes                                              |
| ------------------ | ------------------------------ | -------------------------------------------------- |
| Font family        | `"Montserrat", sans-serif`    | Google Font, weights 300/400/700                   |
| Primary color      | `#79efb4` (mint green)        | Links, buttons, primary accents                    |
| Primary hover      | `#57eba1` / `#4bea9b`         | Hover / active button states                       |
| Accent / blue      | `#2f89fc`                     | Slider overlay, service icons, portfolio icon bg   |
| Body text          | `#212529`                     | Default body color                                 |
| Muted text         | `#6c757d`                     | Secondary text                                     |
| Footer background  | `#3c312e` (warm dark brown)   | `.ftco-bg-dark` footer section                     |
| Page background    | `#ffffff`                     | White page                                         |
| Button radius      | `0.25rem`                     | Slight rounding                                    |
| Portfolio icon bg  | `#2f89fc` (circle, 100px)     | Circular blue icon overlay on hover                |
| Heading weight     | `700`                         | All headings bold                                  |
| Section subtitle   | `uppercase`, `letter-spacing: 5px` | Small label above h2 headings              |
| Slider overlay     | `#2f89fc` with `opacity`      | Blue gradient overlay on hero images               |
| Overlay opacity    | `0` (transparent, image shows) | Slider has image backgrounds, not solid bg        |

## Section order (from live preview DOM)

1. **Navbar** — fixed top, logo (avatar image + name "Beckham Muff"), hamburger toggle, sidebar nav with numbered links (01 Home, 02 Resume, 03 Services, 04 Portfolio, 05 Blog, 06 Contact)
2. **Hero / Home Slider** — Owl Carousel with full-height slides. Each slide has:
   - Background image (full-screen)
   - Overlay (blue-tinted)
   - Centered text: "Hello! I'm" / "Beckham Muff" on slide 1; "I'm from Berlin" / "A Web Designer" on slide 2
   - Scroll-down indicator
3. **About Section** — split layout: left = author portrait image (full height), right = "About" heading (large faded text background), intro paragraph, "Checkout my resume" link, social icons (twitter/facebook/instagram), contact info (email, phone)
4. **Services Section** — heading "What I do" / "My services", 3-column grid, each card has:
   - Icon (layers, gears, code) in blue
   - List of service titles (UI/UX Design, Mobile App Design, etc.)
5. **Portfolio Section** — heading "Portfolio" / "Checkout a few of my works", alternating left/right layout:
   - Each item: image (left or right) + text panel (category label, title, description, "View Project" link)
   - 6 portfolio items alternating image/text sides
6. **Counter / Stats Section** — dark background, heading "Portfolio" / "I love to share my achievements", animated counters: Clients (420), Project done (890), Cups of coffee (1000)
7. **Footer** — dark warm brown (#3c312e), centered layout: social icons, "Contact Us" heading, email link, copyright with attribution

## Gherkin requirements

### Scenario: Navbar renders with logo and navigation links
- **Given** the page loads
- **Then** the navbar displays the logo (avatar image + name)
- **And** the navbar has a hamburger toggle for mobile
- **And** the sidebar nav lists 6 items with numbers: Home, Resume, Services, Portfolio, Blog, Contact

### Scenario: Hero slider displays slides with centered text
- **Given** the hero section is visible
- **Then** a full-height carousel shows background images with overlay
- **And** each slide has centered text (greeting + name/title)
- **And** a scroll-down indicator is visible at the bottom

### Scenario: About section shows split layout with author info
- **Given** the about section is in view
- **Then** a large faded "About" text appears as background
- **And** an author portrait image is displayed on the left
- **And** intro text, a resume link, social icons, and contact info appear on the right

### Scenario: Services section displays three service cards
- **Given** the services section is visible
- **Then** a heading "What I do" / "My services" is centered
- **And** three service cards are displayed in a row
- **And** each card has an icon and multiple service titles

### Scenario: Portfolio section shows alternating project items
- **Given** the portfolio section is in view
- **Then** the heading "Portfolio" / "Checkout a few of my works" is displayed
- **And** six project items are listed alternating left/right image layout
- **And** each item has an image, category label, title, description, and "View Project" link

### Scenario: Counter section displays animated stats
- **Given** the counter section is visible
- **Then** three stats are shown (Clients: 420, Projects: 890, Coffee: 1000)
- **And** numbers animate from 0 to their target values
- **And** the section has a dark background

### Scenario: Footer shows contact info and social links
- **Given** the footer is visible
- **Then** social icons (twitter, facebook, instagram) are displayed
- **And** "Contact Us" heading with email link is shown
- **And** a copyright line with "Component Dock" attribution link is present

## Verification checklist

- [ ] All sections match the original section order 1:1
- [ ] Design tokens: Montserrat font, #79efb4 primary, #2f89fc accent, #3c312e footer bg
- [ ] Hero slider: full-height with background images and blue overlay tint
- [ ] About section: split layout with author portrait and faded "About" background text
- [ ] Services: 3-column grid with icons in blue color
- [ ] Portfolio: alternating left/right layout with circular blue icon overlay on hover
- [ ] Counter: animated number counting with dark background
- [ ] Footer: warm dark brown background with social icons and contact info
- [ ] Footer links to https://www.componentdock.com/ (replacing Colorlib attribution)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage enforced
- [ ] All images use picsum.photos placeholders
