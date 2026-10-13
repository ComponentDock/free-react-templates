# Template: Cashflow (Finance / Bookkeeping)

## Purpose

Recreation of ColorLib "Book Keeping" — a bookkeeping consulting agency
single-page template with top utility bar, hero carousel, about section,
stats counters, services grid, parallax CTA, testimonials, news/blog cards,
newsletter subscribe, and footer.

- **ColorLib source:** https://colorlib.com/wp/template/book-keeping/
- **Preview URL:** https://preview.colorlib.com/theme/bookkeeping/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `cashflow` (apps/cashflow, @free-react-templates/cashflow)

## Design tokens

Extracted from preview HTML/CSS at
https://preview.colorlib.com/theme/bookkeeping/css/style.css and
https://preview.colorlib.com/theme/bookkeeping/css/bootstrap.min.css.

| Token              | Value                                                  | Usage                                                          |
| ------------------ | ------------------------------------------------------ | -------------------------------------------------------------- |
| Font family        | `Muli` (weights 300, 400, 700, 900)                    | All text, loaded via Google Fonts                              |
| Primary / brand    | `#5577B4` (muted blue)                                 | Buttons, links, icon wrappers, active states, accent text      |
| Body text          | `#000`, `#212529`, `#25262a`, `#343a40`, `#555`        | Headings, body copy, muted text                                |
| Light backgrounds | `#f8f9fa` (Bootstrap light), `#f4f5f9`, `#fff`          | `.bg-light` sections, card bg, feature cards                   |
| Dark surfaces     | Footer background (dark charcoal/black), newsletter bg  | Footer, subscribe section overlay                              |
| Overlay            | `rgba(0,0,0,0.2)`, `rgba(0,0,0,0.6)`                   | Hero carousel, parallax CTA sections                           |
| Button radius     | Default Bootstrap (`border-radius: 4px`)                 | All buttons use `.btn-primary` style                           |
| Button bg         | `#5577B4`                                              | Primary CTA buttons                                            |
| Icon wrapper      | `#5577B4` bg, circular (`border-radius: 50%`)           | Service feature icons (circle bg with white SVG icon)          |
| Section padding   | ~80–100px vertical                                      | Standard ColorLib section rhythm                               |
| Caption text      | Small uppercase label above headings                    | Section labels (e.g. "About Us", "Our Services")              |
| Title underline   | Thin line below heading (CSS `:after` pseudo)           | `.title-with-line` for section headings                        |
| Muted text        | `#999999`                                              | Footer text, copyright                                         |

### Visual design (from screenshot)

The screenshot shows a macOS browser frame mockup containing the template:

- Thin light-gray utility bar at top with contact info (question mark icon,
  phone, email)
- White navbar with dark blue dollar-sign logo + "Book Keeping" text, nav
  links (Home, About, Services dropdown, Blog, Contact), circular dark-blue
  social icons (Facebook, Twitter, LinkedIn)
- Full-width hero carousel with warm golden-toned office photography
  (person using calculator), dark overlay, centered white headline
  "Book Keeping Consulting Agency" + subtitle + "Get Started" blue CTA button
- Two-column About section: left image, right heading with blue underline +
  body text + two-column bulleted list with blue arrow icons
- Stats counters row (32,594 clients / 25 years / 1,029 employees / 10,200
  coffees) on white background
- Services grid: 6 feature cards (3×2) on light gray bg, each with a
  circular blue icon + title + description + "Learn More" CTA
- Parallax CTA banner with warm photo background, dark overlay, centered
  headline "We Are Here To Help Grow Your Business" + CTA
- Testimonials section: dark overlay on photo bg, carousel of testimonial
  cards with circular person photo + name/role + quote text
- News/blog section: 3-column cards with thumbnail image, date badge (day +
  month), title, author, excerpt
- Newsletter subscribe: full-width section with background image, heading,
  email input + "Send" button (rounded)
- Footer: 4-column layout — logo + description, Solutions links, Services
  links, Contact links. Copyright bar at bottom.
- Overall aesthetic: professional, trustworthy finance theme — muted blue
  primary, warm photo overlays, clean white space, circular blue icon
  accents, Muli sans-serif font

## Section structure (top to bottom)

1. **Utility Bar** — Thin light-gray bar with contact info: question icon
   "Have a questions?", phone "10 20 123 456", email "info@mydomain.com".
   Hidden on mobile (`d-none d-lg-block`).

2. **Navbar** — White background, sticky on scroll. Logo (dollar-sign icon
   + "Cashflow" text). Nav links: Home, About, Services (dropdown:
   Investment Bonds, Investment Management, Financial Funds), Blog, Contact.
   Social icons: Facebook, Twitter, LinkedIn (circular dark blue).
   Hamburger menu on mobile.

3. **Hero Carousel** — Full-width slider (2 slides). Each slide: warm
   background image with dark overlay, centered white headline + subtitle +
   blue "Get Started" CTA button. Slides rotate automatically (Owl Carousel).

4. **About Us** — Two-column layout (image left, content right).
   Content: small "About Us" caption, heading with blue underline
   "Mindful Planning of Monetary Spending and Saving", body paragraph,
   two-column list of 5 bullet points each with blue arrow icons.

5. **Stats Counters** — 4-column row on white bg. Each stat: large bold
   number + label text below. Stats: Clients, Years of Experience,
   Employees, Cup of Coffees.

6. **Services Grid** — Light gray background. Centered section heading
   "What We Do" with "Our Services" caption. 6 feature cards in 3×2 grid:
   Growth Business, Lifetime Support, Advanced Accounting, Investment Bonds,
   Investment Management, Money Calculations. Each card: circular blue
   icon wrapper with SVG icon, title, description paragraph, blue
   "Learn More" button.

7. **Parallax CTA** — Full-width banner with background photo + dark overlay.
   Centered white headline "We Are Here To Help Grow Your Business" +
   subtitle + blue "Get Started" button.

8. **Testimonials** — Dark overlay on background photo. Centered section
   heading "Happy Clients" with "Testimonials" caption (white text).
   Owl Carousel of testimonial cards: circular person photo, name + role,
   quote paragraph.

9. **News / Blog** — White background. Section heading "Latest News &
   Updates" with "News" caption + description. 3-column card grid:
   thumbnail image with date badge overlay (day + month), article title,
   author byline, excerpt paragraph.

10. **Newsletter Subscribe** — Full-width section with background photo +
    dark overlay. Heading "Subscribe to us!" + subtitle. Inline form:
    email text input + "Send" button (rounded).

11. **Footer** — Dark background. 4-column layout:
    - Logo + short description + "Learn More" link
    - "Solutions" column: 5 links
    - "Services" column: 5 links
    - "Contact" column: 5 links

    Copyright bar at bottom. Footer links to Component Dock.

## Requirements

### Feature: Cashflow Template — Bookkeeping Consulting Agency

#### Scenario: Utility bar renders contact information

- **GIVEN** the user loads the Cashflow homepage
- **THEN** a thin utility bar should display at the top
- **AND** it should show a phone number, email address, and question icon
- **AND** it should be hidden on viewports smaller than lg breakpoint

#### Scenario: Navbar renders with logo, links, and social icons

- **GIVEN** the user loads the Cashflow homepage
- **THEN** the navbar should display the Cashflow logo on the left
- **AND** navigation links should include Home, About, Services, Blog, Contact
- **AND** Services should have a dropdown with Investment Bonds, Investment Management, Financial Funds
- **AND** circular social icons (Facebook, Twitter, LinkedIn) should appear on the right
- **AND** the navbar should become sticky on scroll

#### Scenario: Hero carousel displays slides with CTA

- **GIVEN** the user loads the Cashflow homepage
- **THEN** a full-width hero carousel should render
- **AND** each slide should show a background image with dark overlay
- **AND** each slide should have a centered white headline, subtitle, and blue CTA button
- **AND** slides should auto-rotate

#### Scenario: About Us section shows two-column layout

- **GIVEN** the user loads the Cashflow homepage
- **THEN** the About Us section should show an image on the left column
- **AND** the right column should have an "About Us" caption
- **AND** a heading with a blue underline decoration
- **AND** body text and two-column bullet list with arrow icons

#### Scenario: Stats counters display four metrics

- **GIVEN** the user loads the Cashflow homepage
- **THEN** four stat counters should render in a single row
- **AND** each counter should show a large number and a label below

#### Scenario: Services grid shows six feature cards

- **GIVEN** the user loads the Cashflow homepage
- **THEN** a "What We Do" section heading should display with caption
- **AND** six service cards should render in a 3×2 grid
- **AND** each card should have a circular blue icon, title, description, and "Learn More" button

#### Scenario: Parallax CTA banner renders

- **GIVEN** the user loads the Cashflow homepage
- **THEN** a full-width parallax banner should display
- **AND** it should have a background image with dark overlay
- **AND** a centered white headline + subtitle + blue CTA button

#### Scenario: Testimonials carousel renders

- **GIVEN** the user loads the Cashflow homepage
- **THEN** a testimonials section should display with dark photo background
- **AND** a carousel of testimonial cards should render
- **AND** each card should have a circular person photo, name, role, and quote

#### Scenario: News section shows three blog cards

- **GIVEN** the user loads the Cashflow homepage
- **THEN** three news cards should render in a row
- **AND** each card should have a thumbnail image with date badge overlay
- **AND** a title, author byline, and excerpt paragraph

#### Scenario: Newsletter subscribe form renders

- **GIVEN** the user loads the Cashflow homepage
- **THEN** a newsletter section should display with background photo + overlay
- **AND** an inline form with email input and "Send" button should render

#### Scenario: Footer renders four-column layout

- **GIVEN** the user loads the Cashflow homepage
- **THEN** the footer should have a dark background
- **AND** four columns: logo+description, Solutions, Services, Contact
- **AND** a copyright bar at the bottom linking Component Dock

## Verification checklist

- [ ] Font `Muli` loaded via Google Fonts link in index.html
- [ ] Brand color `#5577B4` used for buttons, links, icon wrappers, accent text
- [ ] Navbar is sticky on scroll, white background
- [ ] Hero carousel has 2 slides with auto-rotation
- [ ] About section has two-column layout with blue underline heading
- [ ] Stats row has 4 counters
- [ ] Services grid shows 6 cards in 3×2 layout on light-gray background
- [ ] Parallax CTA has background image + dark overlay
- [ ] Testimonials carousel with person photos and quotes
- [ ] News section shows 3 cards with date badges
- [ ] Newsletter form with email input + send button
- [ ] Footer has 4-column dark layout + Component Dock link
- [ ] No references to ColorLib anywhere in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images use `https://picsum.photos/seed/cashflow-<n>/<w>/<h>`
- [ ] All images have appropriate alt text
- [ ] Responsive: utility bar hidden on mobile, hamburger menu, stacked columns
