# Template: Craftfolio (Personal Portfolio)

## Purpose

Recreation of ColorLib **Beckham** template as a single-page React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** ColorLib Beckham
- **ColorLib URL:** https://colorlib.com/wp/template/beckham/
- **Preview URL:** https://preview.colorlib.com/theme/beckham/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Description:** Personal portfolio / freelancer resume template with side navigation, hero slider, about section with author portrait, services, portfolio showcase, stats counters, and dark footer.

## Design Tokens (extracted from preview CSS)

### Colors
- **Primary brand (links, accents):** `#79efb4` (green/teal — from CSS `--primary`)
- **Secondary accent (progress bars, service icons, counter numbers):** `#2f89fc` (blue)
- **Body text:** `#6c757d` (gray)
- **Headings:** inherit (white on dark, dark on light)
- **Footer background:** `#121212` (very dark gray/near-black)
- **Dark section background (ftco-bg-dark):** `#3c312e` (dark brown)
- **Body background:** `#fff` (white)
- **Overlay on slider:** semi-transparent black (default overlay class)
- **Footer social icon circles:** `rgba(255, 255, 255, 0.05)`
- **Footer text/links:** `rgba(255, 255, 255, 0.5)`

### Typography
- **Font family:** `"Poppins", sans-serif` (loaded via @font-face in HTML head)
- **Weights used:** 300 (light), 400 (regular body), 500 (headings), 700 (bold headings, footer h2)
- **Base font size:** 1rem (16px)
- **Line height:** 1.5 (body)
- **Heading section span:** `text-transform: uppercase`, `letter-spacing: 5px`
- **Heading section h2:** `font-weight: 700`, `font-size: 40px`
- **Service heading:** `font-size: 22px`
- **Counter number:** `font-size: 180px` (responsive: 80px on mobile), color `#2f89fc`
- **Counter label:** `font-size: 18px`, `text-transform: uppercase`, `letter-spacing: .1em`
- **Footer font-size:** 16px

### Buttons & Links
- **Primary link color:** `#79efb4` (green/teal)
- **Link hover color:** `#35e78e`
- **Footer link hover:** `#fff`
- **No explicit button styles** — uses text links (e.g., "Checkout my resume", "View Project")

### Borders & Radii
- **Social link circles:** `border-radius: 50%`, size 60px
- **Progress bar:** `border-radius: 30px`
- **Progress bar dot:** `border-radius: 50%`, 10px
- **About author image:** `border-radius: 50%`
- **Form control:** `border-radius: 0px` (square)
- **Section padding:** `.ftco-section { padding: 7em 0 }`

### Section Backgrounds
- **Hero slider:** full-height background images with dark overlay
- **About section:** white background, left column = author portrait (bg image), right = text content
- **Services:** white, centered heading, 3 icon service blocks
- **Portfolio:** alternating image-text rows (6 portfolio items), images with parallax scroll effect
- **Counters:** dark section `#3c312e` bg, large blue numbers
- **Footer:** very dark `#121212`, centered social icons, centered contact info

## Gherkin Requirements

### Feature: Craftfolio — Personal Portfolio Landing Page

#### Scenario: Side navigation drawer with author image
- Given the page loads
- Then a side navigation drawer is accessible via hamburger toggle
- And the drawer shows the author's portrait image as background
- And navigation links are listed: Home (01), Resume (02), Services (03), Portfolio (04), Blog (05), Contact (06)
- And the "Home" item is marked as active

#### Scenario: Header bar with author name and logo
- Given the page loads
- Then a fixed header bar is displayed
- And the author's name "Beckham Muff" appears as the logo with a small portrait image prefix
- And a hamburger menu toggle is visible on the right

#### Scenario: Hero slider displays two slides
- Given the page loads
- Then a full-height hero slider is displayed
- And slide 1 shows "Hello! I'm" subtitle and "Beckham Muff" heading
- And slide 2 shows "I'm from Berlin" subtitle and "A Web Designer" heading
- And both slides have a dark overlay background with a background image

#### Scenario: About section with portrait and bio
- Given the page loads
- Then an about section appears with a portrait image on the left (parallax scroll)
- And "About" heading is displayed in bold
- And "Hi! I'm Beckham Muff" subheading is shown
- And a bio paragraph is displayed
- And a "Checkout my resume" link is visible
- And social media icons (Twitter, Facebook, Instagram) are shown
- And contact info (email, phone) is displayed

#### Scenario: Services section with three service blocks
- Given the page loads
- Then a services section with "What i do" span and "My services" heading is visible
- And three service blocks are displayed in a row
- Block 1: icon (layers), services: UI/UX Design, Mobile App Design, Responsive Design
- Block 2: icon (gears), services: Product Strategy, Design Sprints, UX Strategy
- Block 3: icon (code), services: HTML/CSS, Prototyping, User Testing
- And service icons are colored #2f89fc (blue)

#### Scenario: Portfolio section with six project items
- Given the page loads
- Then a portfolio section with "Portfolio" span and "Checkout a few of my works" heading is visible
- And six portfolio items are displayed in alternating layout (image left/text right, then reversed)
- Each item has: category label (e.g., "Illustration"), project title, description, and "View Project" link
- And each item has a background image with parallax scroll effect
- And a search icon overlay appears on hover over the image

#### Scenario: Stats counter section with three metrics
- Given the page loads
- Then a dark background counter section is visible
- And the heading "I love to share my achievements" is displayed
- And three counter items are shown: "Clients" (420), "Project done" (890), "Cups of coffee" (1000)
- And counter numbers are large (#2f89fc blue) with labels in uppercase

#### Scenario: Footer with social icons and contact
- Given the page loads
- Then a very dark footer (#121212) is displayed
- And social media icons (Twitter, Facebook, Instagram) are centered in circular containers
- And "Contact Us" heading with email link "info@email.com" is shown
- And the copyright bar at the bottom shows "Component Dock" link

#### Scenario: Scroll progress bar
- Given the page loads and user scrolls
- Then a progress bar at the top of the page fills as the user scrolls down

#### Scenario: Responsive behavior
- Given the page is viewed on mobile
- Then the side navigation becomes a hamburger toggle
- And the header simplifies
- And portfolio items stack vertically
- And counter numbers reduce to 80px font size

#### Scenario: Scroll animations (AOS)
- Given sections enter the viewport
- Then elements animate in (fade/slide) via the AOS library
- And elements have `.ftco-animate` class for animation triggers

## Verification Checklist

- [ ] All sections render in the correct order matching the original
- [ ] Design tokens (colors, fonts, radii) match the extracted values
- [ ] Poppins font loaded via Google Fonts
- [ ] Primary green (#79efb4) used for links and accents
- [ ] Secondary blue (#2f89fc) used for service icons and counter numbers
- [ ] Side navigation drawer with author portrait and numbered menu items
- [ ] Fixed header with author name/logo and hamburger toggle
- [ ] Hero slider with two full-height slides (parallax background + overlay)
- [ ] About section with left portrait (parallax) and right text content
- [ ] Services section with 3 icon blocks (layers, gears, code)
- [ ] Portfolio section with 6 alternating image+text items
- [ ] Counter section with dark bg and 3 large blue numbers
- [ ] Footer: dark bg, centered social circles, contact info, copyright with Component Dock link
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] Footer does NOT reference ColorLib
- [ ] No ColorLib references anywhere in app code (spec-only provenance)
- [ ] Responsive: mobile hamburger, stacked layouts, reduced font sizes
- [ ] 100% test coverage
- [ ] Vite config has `injectUiSource()` helper
- [ ] CNAME: `craftfolio.free.componentdock.com`
- [ ] Homepage: `https://craftfolio.free.componentdock.com`
