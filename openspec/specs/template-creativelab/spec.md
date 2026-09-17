# Template: Creativelab (Creative Agency category)

## Purpose

Recreation of ColorLib **Creative Agency** (`https://colorlib.com/wp/template/creative-agency/`), built as a modern creative agency landing page using React 19, Tailwind CSS 4, and TypeScript.

- **Source Slug**: `creative-agency`
- **Preview URL**: `https://preview.colorlib.com/theme/creative-agency/`
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).
- **Assigned App Name**: `creativelab` (folder: `apps/creativelab`, deployed at `creativelab.free.componentdock.com`).

## Design tokens

- **Brand Colors**:
  - Primary (Blue): `#6195FF` — used for buttons, links, hover states, interactive accents
  - Text Dark: `#10161A` — headings, dark text
  - Text Muted: `#868F9B` — body text, secondary text
  - Text Price: `#354052` — pricing section text
  - Background Light: `#FAFAFA` — `.bg-grey` sections (Portfolio, Why Choose Us, Blog)
  - Background Dark: `#1C1D21` — `.bg-dark` (footer, dark overlay panels)
  - White: `#FFF` — button text, number values, testimonial text
  - Overlay: dark semi-transparent over background images (hero, numbers, testimonial sections)
- **Typography**:
  - Body Font: `'Varela Round', sans-serif` — body copy, general text
  - Heading Font: `'Montserrat', sans-serif` — headings, titles, nav
  - Section Headings: `text-center`, centered within `.section-header`
- **Button Styles & Shapes**:
  - All buttons: `border-radius: 3px`, `padding: 10px 35px`, `text-transform: uppercase`, `font-weight: 700`
  - `.main-btn`: solid `#6195FF` bg, white text; hover: bg white, text `#10161A`
  - `.white-btn`: white bg, dark text; hover: bg transparent, blue text
  - `.outline-btn`: transparent bg, blue text, blue border; hover: solid blue bg, white text
- **Section Backgrounds**:
  - Hero (`#home`): full-width background image with dark overlay
  - About (`#about`): white/light
  - Portfolio (`#portfolio`): light grey `#FAFAFA`
  - Services (`#service`): white/light
  - Why Choose Us (`#features`): light grey `#FAFAFA`
  - Numbers (`#numbers`): background image with dark overlay
  - Pricing (`#pricing`): white/light
  - Testimonial (`#testimonial`): background image with dark overlay
  - Team (`#team`): white/light
  - Blog (`#blog`): light grey `#FAFAFA`
  - Contact (`#contact`): white/light
  - Footer (`#footer`): dark `#1C1D21`

## Section structure (from live preview DOM)

1. **Navbar** — transparent over hero, logo + nav links (Home, About, Portfolio, Services, Prices, Team, Blog, Contact)
2. **Hero** — full-width background image with dark overlay, heading "We Are Creative Agency", paragraph, two CTA buttons (Get Started! / Learn more)
3. **About** — "Welcome to Website", 3-column grid: Fully Customizable / Awesome Features / Fully Responsive, each with icon + title + description + "Read more" link
4. **Portfolio** — "Featured Works", 6-item grid (3×2) with hover overlay showing category + title + link/lightbox icons
5. **Services** — "What we offer", 6-item grid (3×2): App Development, Graphic Design, Creative Idea, Marketing, Awesome Support, Brand Design
6. **Why Choose Us** — 2-column: left = title + paragraph + 4 checkmark features; right = Owl Carousel image slider
7. **Numbers** — 4-column counter row over background image: Happy clients (451), Awards won (12), Cups of Coffee (154K), Projects completed (45)
8. **Pricing** — "Pricing Table", 3-column cards: Basic ($9/mo), Silver ($19/mo), Gold ($39/mo) each with features list + "Purchase now" button
9. **Testimonial** — Owl Carousel over background image: avatar + name + role + quote text
10. **Team** — "Our Team", 3-column cards: photo with social overlay (FB/Google+/Twitter) + name + role
11. **Blog** — "Recents news", 3-column cards: image + meta (author, date, comments) + title + excerpt + "Read more"
12. **Contact** — "Get in touch", 3 info columns (Phone, Email, Address) + contact form (Name, Email, Subject, Message + Send message button)
13. **Footer** — dark bg, logo, social icons (FB, Twitter, Google+, Instagram, LinkedIn, YouTube), copyright

## Gherkin Requirements & Scenarios

### Feature: Creativelab Creative Agency Landing Page

#### Scenario: Navigation bar
- **Given** the user visits the Creativelab landing page
- **Then** they should see a transparent navbar with logo and links: Home, About, Portfolio, Services, Prices, Team, Blog, Contact
- **And** the navbar becomes opaque on scroll

#### Scenario: Hero section
- **Given** the user lands on the page
- **Then** they should see a full-width background image with dark overlay
- **And** the heading "We Are Creative Agency"
- **And** a paragraph describing the agency
- **And** two CTA buttons: "Get Started!" (white) and "Learn more" (blue)

#### Scenario: About section
- **Given** the user scrolls to the About section
- **Then** they should see a centered heading "Welcome to Website"
- **And** three feature cards: Fully Customizable, Awesome Features, Fully Responsive
- **And** each card has an icon, title, description, and "Read more" link

#### Scenario: Portfolio section
- **Given** the user scrolls to the Portfolio section
- **Then** they should see "Featured Works" heading
- **And** a 3-column × 2-row grid of 6 portfolio items
- **And** each item shows an image with hover overlay containing category, title, and action icons

#### Scenario: Services section
- **Given** the user scrolls to the Services section
- **Then** they should see "What we offer" heading
- **And** a 3-column × 2-row grid of 6 service cards (App Development, Graphic Design, Creative Idea, Marketing, Awesome Support, Brand Design)
- **And** each card has an icon, title, and description

#### Scenario: Why Choose Us section
- **Given** the user scrolls to the Why Choose Us section
- **Then** they should see a 2-column layout
- **And** the left column has a heading, paragraph, and 4 checkmark feature items
- **And** the right column has an image slider

#### Scenario: Numbers/Stats section
- **Given** the user scrolls to the Numbers section
- **Then** they should see a background image with dark overlay
- **And** 4 stat columns: Happy clients (451), Awards won (12), Cups of Coffee (154K), Projects completed (45)
- **And** each stat has an icon, number, and label

#### Scenario: Pricing section
- **Given** the user scrolls to the Pricing section
- **Then** they should see "Pricing Table" heading
- **And** 3 pricing cards: Basic ($9/mo), Silver ($19/mo), Gold ($39/mo)
- **And** each card has a title, price, feature list, and "Purchase now" outline button

#### Scenario: Testimonial section
- **Given** the user scrolls to the Testimonial section
- **Then** they should see a background image with dark overlay
- **And** a carousel of testimonials with avatar, name, role, and quote

#### Scenario: Team section
- **Given** the user scrolls to the Team section
- **Then** they should see "Our Team" heading
- **And** 3 team member cards with photo, social overlay on hover, name, and role

#### Scenario: Blog section
- **Given** the user scrolls to the Blog section
- **Then** they should see "Recents news" heading
- **And** 3 blog post cards with image, meta (author, date, comments), title, excerpt, and "Read more" link

#### Scenario: Contact section
- **Given** the user scrolls to the Contact section
- **Then** they should see "Get in touch" heading
- **And** 3 info columns: Phone, Email, Address
- **And** a contact form with Name, Email, Subject, Message fields and "Send message" button

#### Scenario: Footer
- **Given** the user scrolls to the bottom
- **Then** they should see a dark footer with logo, social media icons, and copyright text
- **And** a "Made with Component Dock" / "More templates at Component Dock" link

## Verification Checklist

- [ ] App folder created at `apps/creativelab` with valid `package.json` (`@free-react-templates/creativelab`)
- [ ] `vite.config.ts` includes `injectUiSource()` helper
- [ ] `public/CNAME` contains `creativelab.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` (branded as "Component Dock")
- [ ] All 13 sections rendered matching spec and 1:1 design tokens
- [ ] Vitest tests passing with 100% coverage (`npm run test:coverage`)
- [ ] Per-app verification passes (`scripts/verify-app.sh creativelab`)
