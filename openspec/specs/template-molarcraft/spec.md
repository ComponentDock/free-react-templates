# Template: Molarcraft (Dental Practice)
<!-- prep-status: shipped-as=dentalink -->
> **SHIPPED-UNDER** — the ColorLib `dentist` design this prep describes already
> ships as `apps/dentalink` (<https://dentalink.free.componentdock.com>).
> Do not scaffold `apps/molarcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-dentalink/spec.md`.

## Purpose

Molarcraft is a single-page DENTAL PRACTICE landing page in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Dentist" free template (source:
https://colorlib.com/wp/template/dentist/), built under a DIFFERENT name
(**Molarcraft**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap 4 dental clinic site with Poppins font, a
green (`#67bc00`) brand palette with a bright gradient (`#ade600` →
`#62b900`), dark navy sections (`#04091e`), and light grey backgrounds
(`#f9f9ff`). It uses Linearicons icon font and Font Awesome. The design
is clean and modern with a floating "Opening Hours" card overlapping
the hero, split-section "About" and "Appointment" areas, and a
newsletter footer.

## Design tokens

| Token            | Value                              | Source                         |
|------------------|------------------------------------|--------------------------------|
| Brand green      | `#67bc00`                          | `.genric-btn.primary`, selection|
| Gradient         | `linear-gradient(0deg, #ade600, #62b900)` | Nav, primary-btn, footer hover, team overlay |
| Dark navy        | `#04091e`                          | `.appoinment-area`, banner overlay |
| Overlay          | `rgba(4,9,30,0.85)`                | `.banner-area .overlay-bg`     |
| Light background | `#f9f9ff`                          | `.open-hour-wrap`, `.team-area` |
| Body text        | `#777`                             | `body` color                   |
| Headings         | `#222`                             | `h1–h6` color                  |
| Font family      | `"Poppins", sans-serif`            | `body`, headings               |
| Primary button   | Rounded pill (25px radius), gradient bg, white text, no border | `.primary-btn` |
| Open-now dot     | 10×10px circle, `#67bc00`         | `.open-hour-wrap .circle`      |
| Appointment form | Transparent bg, `#ccc` text, `#505362` border, no radius | `.appoinment-area .form-control` |
| Team hover       | Gradient overlay, 0→0.85 opacity transition | `.team-area .thumb div` |

## Section structure (order from preview DOM)

| #  | Section class        | Description                                        |
|----|----------------------|----------------------------------------------------|
| 1  | `header`             | Top bar (phone + email links) + nav menu + social icons; green gradient background |
| 2  | `banner-area`        | Fullscreen hero with dark overlay, background image; headline "Authentic Dental Service", subtext, green "Get Started" pill CTA |
| 3  | `open-hour-area`     | Floating card overlapping hero (margin-top: -100px, white bg, rounded 10px, box-shadow); "Opening Hours" title, "We are open Now" badge with green dot, Mon-Fri/Sat/Sun schedule |
| 4  | `service-area`       | 4-column grid of service cards: image + title + description |
| 5  | `home-about-area`    | Split section: left = image, right = dark bg with white heading "Who we are to Serve the nation", text, 2 icon-feature boxes (Expert Services, Great Support) |
| 6  | `testomial-area`     | Testimonials carousel: circular avatar images, quote text, name + role |
| 7  | `team-area`          | 4 team member cards on light bg; hover reveals gradient overlay with name + role |
| 8  | `feature-area`       | 2×3 grid of features: icon + title + description |
| 9  | `appoinment-area`    | Dark navy split: left = background image via ::after pseudo, right = appointment form (Patient Name, Phone, Email, DOB, Appointment Date, Message, "Confirm booking" button) |
| 10 | `blog-area`          | 4-column blog cards: image, date, title, excerpt, likes + comments meta |
| 11 | `footer-area`        | 4-column footer: Top Products links, Contact Us (address + phone), Newsletter (email input + Subscribe button), Copyright + social icons |

## Requirements

### Feature: Molarcraft template behaviour

**Background**
- **GIVEN** the user opens Molarcraft on a desktop browser
- **THEN** the page loads with Poppins font from Google Fonts
- **AND** all sections render in the correct order (1–11)

#### Scenario: Header navigation

- **GIVEN** the page has loaded
- **WHEN** the user views the top bar
- **THEN** the left side shows a logo placeholder
- **AND** the right side shows phone number "+953 012 3654 896" and email link
- **AND** a green gradient navigation bar contains links: Home, About, Services, Opening Hour, Blog (with dropdown), Pricing, Elements, Contact
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance) are displayed in the nav

#### Scenario: Hero banner

- **GIVEN** the user scrolls to the top of the page
- **WHEN** the hero section is visible
- **THEN** a fullscreen background image is displayed with a dark navy overlay (85% opacity)
- **AND** the headline reads "Authentic Dental Service" in white, 48px bold
- **AND** a subheadline reads "Don't look further, This is your Dentist" in white uppercase with letter-spacing
- **AND** a green gradient "Get Started" pill button is centered below the text

#### Scenario: Opening Hours floating card

- **GIVEN** the user scrolls past the hero
- **WHEN** the opening hours card enters view
- **THEN** a white card with 10px border-radius and box-shadow overlaps the hero section
- **AND** the card displays "Opening Hours" title and "We are open Now" badge with a green circle dot
- **AND** the schedule shows: Monday-Friday 10:00am to 05:00pm, Saturday 12:00am to 03:00pm, Sunday closed

#### Scenario: Services grid

- **GIVEN** the user scrolls to the services section
- **WHEN** the services section is visible
- **THEN** 4 service cards are displayed in a row
- **AND** each card has an image, a linked title, and a short description
- **AND** the section heading reads "What we Offer to our Customers"

#### Scenario: About section

- **GIVEN** the user scrolls to the about section
- **WHEN** the about section is visible
- **THEN** a split layout shows an image on the left and a dark background on the right
- **AND** the right side displays "Who we are to Serve the nation" in white
- **AND** 2 feature boxes show "Expert Services" and "Great Support" with linearicons icons

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the testimonials section is visible
- **THEN** a carousel displays testimonial cards with circular avatar images
- **AND** each card shows a quote, a name, and a role
- **AND** the carousel auto-rotates through testimonials

#### Scenario: Team section

- **GIVEN** the user scrolls to the team section
- **WHEN** the team section is visible
- **THEN** 4 team member cards are displayed on a light #f9f9ff background
- **AND** hovering a card reveals a green gradient overlay with the member's name and role

#### Scenario: Features grid

- **GIVEN** the user scrolls to the features section
- **WHEN** the features section is visible
- **THEN** a 2-column × 3-row grid shows 6 features
- **AND** each feature has an icon (lucide-react), title, and description
- **AND** the section heading reads "Features that make us unique"

#### Scenario: Appointment form

- **GIVEN** the user scrolls to the appointment section
- **WHEN** the appointment section is visible
- **THEN** a dark navy (#04091e) split section shows a background image on the left
- **AND** the right side displays a form with fields: Patient Name, Phone, Email, Date of Birth, Appointment Date, Message textarea
- **AND** the form has a "Confirm booking" button with no border-radius and transparent background
- **AND** the form fields have #ccc text color and #505362 borders on transparent background

#### Scenario: Blog section

- **GIVEN** the user scrolls to the blog section
- **WHEN** the blog section is visible
- **THEN** 4 blog cards are displayed in a row
- **AND** each card has an image, a date, a linked title, an excerpt, and a likes/comments meta row

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** 4 columns display: Top Products (links), Contact Us (address + phone numbers), Newsletter (email input + Subscribe button), Copyright line + social icons
- **AND** the footer copyright links to Component Dock (not Colorlib)

#### Scenario: Newsletter subscription

- **GIVEN** the user views the newsletter area in the footer
- **WHEN** they enter an email and click Subscribe
- **THEN** the form attempts subscription (visual only in this recreation)

#### Scenario: Responsive layout

- **GIVEN** the user resizes the browser to mobile width (< 768px)
- **WHEN** any section is visible
- **THEN** the hero text reduces to 25px
- **AND** the service, team, features, and blog grids stack to single column
- **AND** the appointment section stacks vertically (image hidden, form full width)
- **AND** the navigation converts to a hamburger menu

## Verification checklist

- [ ] Poppins font loads from Google Fonts (weights 300, 400, 500, 600, 700)
- [ ] Brand green (#67bc00) used for primary buttons, selection, dots
- [ ] Gradient (#ade600 → #62b900) applied to nav bar, primary buttons, team hover overlay
- [ ] Hero section: fullscreen with dark overlay, white text, green pill CTA
- [ ] Opening Hours card: floats over hero with -100px margin-top
- [ ] Services: 4-card grid with images from picsum.photos
- [ ] About: split layout with dark right side
- [ ] Testimonials: carousel with circular avatars
- [ ] Team: 4 cards on #f9f9ff background with gradient hover overlay
- [ ] Features: 2×3 grid with lucide-react icons
- [ ] Appointment: dark navy split with form, transparent inputs
- [ ] Blog: 4-card grid with images, dates, meta
- [ ] Footer: 4 columns, newsletter form, copyright links to Component Dock
- [ ] All images use picsum.photos/seed/molarcraft-n placeholders
- [ ] No references to Colorlib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive at mobile breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app molarcraft` passes
