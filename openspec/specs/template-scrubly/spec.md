# Template: Scrubly (Cleaning Services)

## Purpose

Recreation of ColorLib's **Cleaning Company** template as a React 19 + Vite +
Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/cleaning-company/
- **Preview:** https://preview.colorlib.com/theme/cleaningcompany/ (note: slug is
  `cleaningcompany` without dash on ColorLib's preview server)
- **New name:** `scrubly` (apps/scrubly, @free-react-templates/scrubly)
- **Deploy:** https://scrubly.free.componentdock.com

## Design tokens (extracted from live preview DOM + CSS)

| Token              | Value                                      | Notes                                           |
| ------------------ | ------------------------------------------ | ----------------------------------------------- |
| Font family        | `"Roboto", sans-serif`                     | Weights: 300 (light), 400 (body), 500 (medium), 700 (bold) |
| Brand yellow       | `#f3e53d`                                  | Nav link hover/active, service icon color        |
| Primary blue       | `#007bff`                                  | Bootstrap primary, CTA buttons                   |
| Secondary blue     | `#2b98f0`                                  | Mobile nav links, dropdown hover, service icon hover bg |
| Dark text          | `#000000`                                  | Headings, nav items                              |
| Body text          | `#212529`                                  | Paragraphs (Bootstrap default)                   |
| Gray text          | `#6c757d`                                  | Secondary text, labels                           |
| White              | `#fff`                                     | Backgrounds, hero text, card bg                  |
| Dark bg            | `#343a40`                                  | Bootstrap dark, testimonial section              |
| Navbar bg (scrolled)| `#fff`                                    | White when sticky, transparent at top            |
| Hero overlay       | Semi-transparent dark (opacity ~0.7)       | Over hero background image                      |
| Button radius      | 0 (square) default, varies by component    | Bootstrap default no-radius                      |
| Button padding     | py-2 px-4 (primary), varies               | Bootstrap .btn classes                           |
| Section spacing    | ftco-section (Bootstrap section spacing)   | Generous vertical padding                       |

## Section structure (order from DOM)

1. **Top Bar** — white bg, 2-column row. Left: phone + email contact info
   (blue links). Right: social media icons (Facebook, Twitter, Instagram,
   Dribbble) in blue.

2. **Navbar** — transparent overlay at top (rgba white 20%), positioned absolute
   below top bar. "Cleaning" white + "company" yellow (#f3e53d). Nav links:
   Home, About, Services, Portfolio, Pricing, Blog, Contact. Active link yellow
   with underline animation. On scroll: becomes white bg, black text. Mobile:
   hamburger toggle.

3. **Hero** — full-width, background image (cleaning scene), dark overlay.
   Left-aligned content: subheading "Leave the house cleaning chores to us"
   (white, 18px, 0.7 opacity), h1 "Let us do the dirty work, so you don't
   have to." (white, bold), "LEARN MORE" button (blue bg #007bff, white text,
   square corners).

4. **Appointment Form** — floating white card overlapping hero bottom. 4-column
   row: Name input, Phone input, Select Services dropdown, Select Cleaners
   dropdown, "Make an Appointment" submit button (blue bg, full height of card).

5. **About Section** — no bg, 2-column no-gutters. Left: background image with
   business hours box (white bg, blue heading, schedule details) + emergency
   phone box (gray bg, white text). Right: "Welcome to Cleaning Company"
   subheading + h2 "Let's make you fresher than ever" + paragraph + counter
   stats (45 Years Experienced, 2342 Happy Customers, 30 Building Cleaned).

6. **Services** — white bg, centered header ("How We Works"), 6-item grid
   (3×2). Each: circular icon (yellow #f3e53d, hover → blue bg #2b98f0),
   title h3, description, "Read more" link. Services: Office, Pool, Carpet,
   Kitchen, Garden, Window Cleaning.

7. **Team** — white bg, left sidebar (heading + "View All Staff" button) +
   3 staff cards. Each card: photo bg image, name h3, role span, social icons
   (Twitter, Facebook, Google, Instagram).

8. **Testimonials** — dark bg (ftco-bg-dark), centered header ("Happy Customer"
   subheading), owl-carousel with testimonial cards. Each: quote icon, user
   photo circle, name + role, quote paragraph.

9. **Portfolio/Projects** — white bg, centered header ("Our Project"), 8-item
   grid (4×2). Each: background image with overlay expand button, project name
   (House, Window, Pool, Office, Carpet, Garden, Carpet, Pool Cleaning).

10. **Blog** — white bg, centered header ("Latest News"), 3-column cards. Each:
    background image, author row (photo + name + date), title, excerpt.

11. **Footer** — dark bg. Multi-column: company info + social, links, newsletter
    form, copyright + Colorlib credit (replaced with Component Dock).

## Requirements

### Top Bar

#### Scenario: Top bar shows contact info and social links

- **GIVEN** the page is loaded
- **THEN** the top bar displays a phone number and email address on the left
- **AND** social media icons are displayed on the right

### Navbar

#### Scenario: Navbar shows brand and navigation links

- **GIVEN** the page is loaded
- **THEN** the brand "Scrubly" is visible
- **AND** nav links "Home", "About", "Services", "Portfolio", "Pricing", "Blog", "Contact" are shown

#### Scenario: Navbar becomes opaque on scroll

- **GIVEN** the page is loaded
- **WHEN** the user scrolls down
- **THEN** the navbar background changes from transparent to white
- **AND** nav link text changes from white to dark

### Hero

#### Scenario: Hero displays headline and CTA

- **GIVEN** the hero section is visible
- **THEN** the subheading "Leave the house cleaning chores to us" is displayed
- **AND** the headline is prominently shown
- **AND** a "Learn More" button with blue background is visible

#### Scenario: Hero has dark overlay on background image

- **GIVEN** the hero section is visible
- **THEN** a dark semi-transparent overlay covers the background image

### Appointment Form

#### Scenario: Appointment form shows input fields and submit

- **GIVEN** the appointment form is visible
- **THEN** input fields for Name and Phone are displayed
- **AND** dropdowns for Select Services and Select Cleaners are shown
- **AND** a "Make an Appointment" blue submit button is visible

### About Section

#### Scenario: About section shows business hours and welcome text

- **GIVEN** the about section is visible
- **THEN** business hours are displayed in a card
- **AND** the heading "Let's make you fresher than ever" is shown
- **AND** counter stats (years, customers, buildings) are displayed

#### Scenario: About section shows emergency contact

- **GIVEN** the about section is visible
- **THEN** an emergency phone number is displayed

### Services

#### Scenario: Services section shows 6 service items

- **GIVEN** the services section is visible
- **THEN** the header "How We Works" is displayed
- **AND** 6 service items are shown in a grid
- **AND** each item has an icon, title, and description

#### Scenario: Service icon changes color on hover

- **GIVEN** the services section is visible
- **WHEN** the user hovers over a service item
- **THEN** the icon background changes to blue
- **AND** the icon color changes to white

### Team

#### Scenario: Team section shows staff members

- **GIVEN** the team section is visible
- **THEN** the header "Our Team" is displayed
- **AND** 3 staff member cards are shown
- **AND** each card has a photo, name, role, and social icons

### Testimonials

#### Scenario: Testimonials show customer reviews

- **GIVEN** the testimonials section is visible
- **THEN** the header "Happy Customer" is displayed on a dark background
- **AND** a carousel of testimonial cards is shown
- **AND** each card has a user photo, name, role, and quote

### Portfolio

#### Scenario: Portfolio shows cleaning project images

- **GIVEN** the portfolio section is visible
- **THEN** the header "Our Project" is displayed
- **AND** 8 project images are shown in a grid
- **AND** each image has an expand button overlay

### Blog

#### Scenario: Blog section shows latest news

- **GIVEN** the blog section is visible
- **THEN** the header "Latest News" is displayed
- **AND** 3 blog cards are shown
- **AND** each card has a thumbnail, author info, and title

### Footer

#### Scenario: Footer shows company info and newsletter

- **GIVEN** the footer is visible
- **THEN** company description and social links are displayed
- **AND** navigation link columns are shown
- **AND** a newsletter email input and send button are visible

#### Scenario: Footer includes Component Dock attribution

- **GIVEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Top bar: contact info + social icons
- [ ] Navbar: transparent → white on scroll, brand with yellow accent
- [ ] Hero: full-width bg image, dark overlay, left-aligned text + blue CTA
- [ ] Appointment form: floating white card with 4 inputs + submit
- [ ] About: 2-column, business hours card, emergency contact, counters
- [ ] Services: 6 items grid, icon color change on hover
- [ ] Team: 3 staff cards with social links
- [ ] Testimonials: dark bg, carousel with user cards
- [ ] Portfolio: 8-item image grid with overlay expand
- [ ] Blog: 3-column cards with author info
- [ ] Footer: dark bg, newsletter form, Component Dock link
- [ ] All design tokens match (Roboto font, #f3e53d yellow, #007bff blue)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to https://www.componentdock.com/
