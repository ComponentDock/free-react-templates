# Template: Buzzline (Call Center / Customer Support)

## Purpose

Recreation of the ColorLib "Callcenter" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page call center / customer support template.

- **Source:** ColorLib Callcenter — https://colorlib.com/wp/template/callcenter/
- **Live preview:** https://preview.colorlib.com/theme/callcenter/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/callcenter-free-call-center-website-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/buzzline`
- **Deploy target:** `buzzline.free.componentdock.com`
- **Footer:** Must link `https://www.componentdock.com/` branded as "Component Dock"

## Design tokens (extracted from preview CSS)

| Token              | Value                                           | Notes                                                     |
| ------------------ | ----------------------------------------------- | --------------------------------------------------------- |
| Brand primary      | `#8490ff` (periwinkle blue/violet)              | Primary buttons, nav active state, links, accent color    |
| Gradient primary   | `linear-gradient(0deg, #62bdfc 0%, #8490ff)`    | Used on primary-btn bg, testimonial overlay, service hover |
| Selection bg       | `#8490ff`                                       | `::selection` background                                  |
| Text dark          | `#222`                                          | Headings (h1–h6), footer background                       |
| Body text          | `#777`                                          | Paragraph text                                            |
| Heading weight     | 600                                              | All h1–h6                                                 |
| Light bg           | `#f9f9ff`                                       | Brand area, form inputs, default-select, blockquote bg    |
| White bg           | `#fff`                                          | Header, features, facts section                           |
| Footer bg          | `#222`                                          | Dark footer background                                    |
| Social btn bg      | `#111111`                                       | Footer social icon buttons                                |
| Font family        | `"Poppins", sans-serif`                         | Body + headings (loaded via Cloudflare Fonts)             |
| Button radius      | 25px (pill)                                     | `.primary-btn` — fully rounded pill shape                 |
| Button shadow      | `-21.213px 21.213px 30px 0px rgba(158,158,158,0.3)` | Header scrolled shadow                          |
| Banner overlay     | `rgba(0,0,0,0.9)` on `.banner-area .overlay`    | Dark overlay on hero background image                     |
| Testimonial overlay| Gradient `#62bdfc → #8490ff` at 0.9 opacity     | Colorful overlay on testimonial section bg                |
| Service overlay    | `rgba(0,0,0,0.7)`                               | Dark overlay on services section bg                       |
| Offer card shadow  | `0px 0px 40px 0px rgba(132,144,255,0.2)`       | Subtle blue glow on offered-service cards                 |
| Fact number gradient| `-webkit-background-clip: text` with `#62bdfc → #8490ff` | Gradient text fill on stat counters              |
| Section padding    | 120px 0 (`.section-gap`)                        | Consistent vertical rhythm                                |

## Page structure (section order, from DOM analysis)

1. **Navbar** — Fixed top, white bg, logo (blue four-point star + "Buzzline") left, nav links (Home, Feature, We Offer, About, Contact), mobile hamburger toggle
2. **Hero/Banner** — Full-screen bg image with dark overlay (0.9 opacity), right-aligned content: subtitle "DISCOVER THE COLORFUL WORLD" (uppercase, letter-spaced), headline "Efficiency Booster" (large serif-ish 60px bold), paragraph, "Discover Now" CTA button (pill-shaped, gradient primary)
3. **Features** — 3-column grid on white bg: Online Support (headset icon), 24/7 Round the Clock (clock icon), Handling All Issues (wrench icon) — each with colored line-art icon, title, description
4. **Testimonials** — Bg image with gradient overlay (`#62bdfc → #8490ff`), heading "Why Choose Us Your Fitness Builder" + subtitle, carousel of testimonial cards (user photo, quote text, author name, role)
5. **Offered Services** — Heading "Our Offered Services", split layout: left has 6 icon boxes (3×2 grid, white cards with blue shadow), right has "Content Synchronization" text + paragraph + "View Details" CTA
6. **Facts/Stats** — 5-column counter row on white bg: Projects Completed (2536), Really Happy Clients (6784), Total Tasks Completed (1059), Cups of Coffee Taken (2239), In House Professionals (435) — numbers rendered with gradient text fill
7. **Services** — Dark bg image with overlay, heading "Some Awesomeness that should share", 6 service cards in 3×2 grid: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews — each with Linearicons icon, title, description
8. **Info/About** — Split layout: left image, right text "Responsible Customer Support" + paragraph + "Learn More" CTA button with arrow icon
9. **About/Video** — Split layout: left text "We Believe that Interior beautifies the Total Architecture" + paragraph + "See Details" CTA, right video bg with play button overlay
10. **Brand Logos** — 5 grayscale client/partner logos in a row on light bg (`#f9f9ff`), colorize on hover
11. **Contact** — Heading "If you need, Just drop us a line", form with name, email, subject, message fields + "Send Message" CTA button
12. **Footer** — Dark bg (`#222`): 4 columns (About Us, Contact Us with phone numbers, Newsletter with email input, Social icons), copyright bar with Component Dock link

## Gherkin requirements

### Feature: Navbar

- Scenario: Navbar displays logo and navigation
  - Given the page loads
  - Then a fixed white navbar is visible at the top
  - And the logo shows a blue icon with the text "Buzzline"
  - And navigation links include Home, Feature, We Offer, About, Contact

- Scenario: Navbar has scroll shadow effect
  - Given the page loads
  - When the user scrolls down
  - Then the navbar gains a box-shadow effect

### Feature: Hero Banner

- Scenario: Hero displays headline and CTA
  - Given the user is on the home section
  - Then a full-screen hero with background image and dark overlay is displayed
  - And the subtitle "DISCOVER THE COLORFUL WORLD" is shown in uppercase letters
  - And the headline "Efficiency Booster" is displayed in large bold text
  - And a "Discover Now" pill-shaped gradient CTA button is present

### Feature: Features Section

- Scenario: Three feature cards display
  - Given the user scrolls to the features section
  - Then three feature columns are shown: Online Support, 24/7 Round the Clock, Handling All Issues
  - And each feature has a colored line-art icon, title, and description text

### Feature: Testimonials Section

- Scenario: Testimonials carousel displays
  - Given the user scrolls to the testimonials section
  - Then a section with gradient overlay bg is displayed
  - And the heading "Why Choose Us Your Fitness Builder" is shown
  - And a carousel of testimonial cards is present
  - And each card shows a user photo, quote text, author name, and role

### Feature: Offered Services Section

- Scenario: Offered services grid and description display
  - Given the user scrolls to the offered services section
  - Then the heading "Our Offered Services" is shown
  - And 6 icon boxes are displayed in a 3×2 grid on the left
  - And "Content Synchronization" text with description and "View Details" CTA is on the right

### Feature: Facts/Stats Section

- Scenario: Counter statistics display
  - Given the user scrolls to the facts section
  - Then 5 stat counters are shown in a row
  - And each counter has a number (rendered with gradient text) and a label
  - And the stats include: Projects Completed, Really Happy Clients, Total Tasks Completed, Cups of Coffee Taken, In House Professionals

### Feature: Services Section

- Scenario: Six service cards display on dark background
  - Given the user scrolls to the services section
  - Then a dark background section with overlay is displayed
  - And the heading "Some Awesomeness that should share" is shown
  - And 6 service cards are displayed: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
  - And each card has a Linearicons icon, title, and description

### Feature: Info/About Section

- Scenario: About info section with image and text
  - Given the user scrolls to the info section
  - Then a split layout is displayed: image left, text right
  - And the heading "Responsible Customer Support" is shown
  - And a "Learn More" CTA button with arrow icon is present

### Feature: About/Video Section

- Scenario: About section with video background
  - Given the user scrolls to the about section
  - Then a split layout is displayed: text left, video bg right
  - And the heading about interior/architecture is shown
  - And a play button overlay is present on the video area
  - And a "See Details" CTA button is present

### Feature: Brand Logos Section

- Scenario: Client logos display in grayscale
  - Given the user scrolls to the brand section
  - Then 5 partner/client logos are shown in a row
  - And logos are displayed in grayscale by default
  - And logos colorize on hover

### Feature: Contact Section

- Scenario: Contact form displays
  - Given the user scrolls to the contact section
  - Then the heading "If you need, Just drop us a line" is shown
  - And a form with name, email, subject, and message fields is displayed
  - And a "Send Message" CTA button is present

### Feature: Footer

- Scenario: Footer with columns and newsletter
  - Given the user scrolls to the footer
  - Then a dark background (`#222`) footer is displayed
  - And four columns show: About Us, Contact Us (with phone numbers), Newsletter (with email input), Social icons
  - And a copyright bar with Component Dock link is present

### Feature: Responsiveness

- Scenario: Mobile navigation toggle
  - Given the viewport is under 768px
  - Then a hamburger menu toggle is visible
  - And clicking it opens a slide-in mobile nav with dark background

## Verification checklist

- [ ] Navbar: fixed, white bg, logo (blue star + "Buzzline"), nav links (Home, Feature, We Offer, About, Contact), scroll shadow
- [ ] Hero: full-screen bg image, dark overlay (0.9), "DISCOVER THE COLORFUL WORLD" subtitle, "Efficiency Booster" headline, "Discover Now" pill CTA
- [ ] Features: 3 columns (Online Support, 24/7 Round the Clock, Handling All Issues), colored line-art icons, titles, descriptions
- [ ] Testimonials: gradient overlay bg, heading, carousel with user photos, quotes, author names/roles
- [ ] Offered Services: heading, 6 icon boxes (3×2), "Content Synchronization" text, "View Details" CTA
- [ ] Facts: 5 counters (2536, 6784, 1059, 2239, 435) with gradient text fill
- [ ] Services: dark bg image with overlay, heading, 6 service cards with Linearicons icons
- [ ] Info/About: split layout, image left, "Responsible Customer Support" text right, "Learn More" CTA
- [ ] About/Video: split layout, text left, video bg right with play button, "See Details" CTA
- [ ] Brand Logos: 5 grayscale logos, colorize on hover, light bg
- [ ] Contact: heading, form (name, email, subject, message), "Send Message" CTA
- [ ] Footer: dark bg #222, 4 columns (About Us, Contact Us, Newsletter, Social), copyright with Component Dock link
- [ ] Typography: Poppins font family
- [ ] Color tokens: primary #8490ff, gradient #62bdfc→#8490ff, dark #222, body #777, light #f9f9ff
- [ ] Button styles: pill-shaped (25px radius), gradient primary background
- [ ] Responsive: mobile nav, stacking columns
- [ ] No ColorLib references in app code
