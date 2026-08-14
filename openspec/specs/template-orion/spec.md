# Template: Orion (One-Page Creative Business / Agency)

## Purpose

Orion is a one-page creative business/agency template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Oneder" template (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/oneder/
Live preview (analyzed for this spec): https://preview.colorlib.com/theme/oneder/

The original is a clean, flat, corporate one-pager: a full-viewport hero
photo with a dark overlay and centered uppercase headline, an "about the
brand" intro block, then alternating white/light-gray sections for team,
filterable portfolio, services, testimonials, pricing, FAQ, about
specialties, blog, contact form, and a dark footer. The brand color is a
Bootstrap-style blue (`#007bff`) used for section titles and pill buttons;
type is Work Sans; buttons are fully rounded (30px radius).

Orion lives in `apps/orion` and uses shared components from `packages/ui`
(Button, ButtonLink, cn). No ColorLib name or URL appears in any app file —
provenance lives only in this spec, TEMPLATES.md, and the PR.

## Design tokens (from the live preview DOM + `css/style.css`)

| Token            | Value                                                                 | Usage                                                            |
| ---------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Primary brand    | `#007bff` (blue)                                                      | `.btn-primary` background, `.section-title` color, focus accents |
| Primary hover    | `#000`                                                                | `.btn-primary:hover` background/border                           |
| Body text        | `#343a40` / `#212529` (dark gray/black)                               | body copy, card headings                                         |
| Muted text       | `#737373` / `#999999`                                                 | footer body/links                                                |
| Light section bg | `#f8f9fa`                                                             | `.bg-light` sections (services, pricing, contact)                |
| Footer bg        | `#333333`                                                             | `.site-footer` background                                        |
| Hero overlay     | `rgba(0, 0, 0, 0.4)`                                                  | `.site-blocks-cover.overlay:before` scrim over hero photo        |
| Font family      | `"Work Sans", system sans stack`                                      | all text; hero h1 weight 900                                     |
| Button shape     | `border-radius: 30px` (pill), `padding: 10px 30px`, `font-size: 16px` | primary CTAs                                                     |
| Section title    | `font-size: 40px`, `font-weight: 900`, color `#007bff`                | every section heading                                            |
| Hero h1          | `font-size: 3rem`, `font-weight: 900`, white, uppercase               | hero headline                                                    |

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site logo
"Orion", a link set (Home, About, Team, Pricing, FAQ, Portfolio, Services,
Testimonials, Blog, Contact), a "More Links" dropdown, and a mobile
slide-out menu; links SHALL smooth-scroll to their sections.

#### Scenario: Navbar content

- **GIVEN** the Orion page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Orion" as a logo link to the page root
- **AND** the navbar SHALL show links: Home, About, Team, Pricing, FAQ, Portfolio, Services, Testimonials, Blog, Contact
- **AND** the navbar SHALL show a "More Links" dropdown with placeholder links (e.g. Menu One, Menu Two, Menu Three)

#### Scenario: Smooth scroll navigation

- **GIVEN** the navbar is rendered
- **WHEN** the user activates a section link
- **THEN** the page SHALL scroll smoothly to the corresponding section
- **AND** the target section SHALL be identifiable by id

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user presses the menu toggle
- **THEN** a slide-out menu SHALL open with the same link set
- **AND** the toggle SHALL expose `aria-expanded` state and an `aria-label`

### Requirement: Hero section

The system SHALL render a full-viewport hero: a background photo with a dark
overlay, an uppercase white headline "I'm Creative One Page Template", and a
pill-shaped primary "Get In Touch" button scrolling to the contact section.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL fill the viewport height with a background image and a dark `rgba(0,0,0,0.4)` overlay
- **AND** it SHALL show a level-1 heading (uppercase, white, weight 900) — e.g. "I'm Creative One Page Template"
- **AND** it SHALL show a primary pill "Get In Touch" button that scrolls to the contact section

### Requirement: Intro / About brand block

The system SHALL render, below the hero headline, a two-column intro block:
an "About Orion" section title (uppercase, blue), a sub-headline ("For the
next great business"), short copy, a second "Get In Touch" button, and a
supporting image in the left column.

#### Scenario: Intro block

- **GIVEN** the hero is displayed
- **WHEN** the intro block is visible
- **THEN** it SHALL show the section title "About Orion" in the primary blue, uppercase
- **AND** it SHALL show a sub-headline and one short paragraph of placeholder copy
- **AND** it SHALL show a primary pill "Get In Touch" button
- **AND** it SHALL show a two-column layout with an image beside the text on wide screens

### Requirement: Team section

The system SHALL render a "Our Team" section with a 4-column grid of eight
member cards, each with a photo, name, and role (e.g. "Product Manager").

#### Scenario: Team grid

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the section title "Our Team" in the primary blue
- **AND** it SHALL render eight member cards
- **AND** each card SHALL show a photo, a member name, and a role label

### Requirement: Portfolio section

The system SHALL render a "Portfolio" section with filter buttons (All, Web,
Design, Brand) and a responsive grid of portfolio items whose visibility
changes with the active filter.

#### Scenario: Portfolio filter

- **GIVEN** the portfolio section is rendered
- **WHEN** the user selects a filter (All, Web, Design, or Brand)
- **THEN** the grid SHALL show only the items matching that category
- **AND** the "All" filter SHALL show every item
- **AND** the active filter button SHALL be visually marked active

#### Scenario: Portfolio items

- **GIVEN** the portfolio grid is rendered
- **WHEN** all items are shown
- **THEN** each item SHALL display an image and be clickable/expandable (e.g. opens a lightbox or links to the item)
- **AND** the grid SHALL be responsive (1/2/3 columns by viewport)

### Requirement: Services section

The system SHALL render a light-background "Our Services" section with six
cards, each with an icon, a title (Business Consulting, Market Analysis,
User Monitoring, Insurance Consulting, Financial Investment, Financial
Management), short copy, and a "Learn More" link.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Our Services" in the primary blue on a light (`#f8f9fa`) background
- **AND** it SHALL render six service cards
- **AND** each card SHALL show an icon, a title, short copy, and a "Learn More" link

### Requirement: Testimonials section

The system SHALL render a "Testimonials" section as a carousel of at least
three quotes, each with the quote text, a photo, and the author's name.

#### Scenario: Testimonial carousel

- **GIVEN** the testimonials section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Testimonials" in the primary blue
- **AND** it SHALL show one quote at a time with the quote, author photo, and author name
- **AND** the user SHALL be able to advance to the next/previous testimonial

### Requirement: Pricing section

The system SHALL render a light-background "Pricing" section with three plan
cards (Basic $47/year, Premium $200/year, Professional $750/year), each with
feature copy and a "Buy Now" pill button.

#### Scenario: Pricing plans

- **GIVEN** the pricing section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Pricing" in the primary blue on a light background
- **AND** it SHALL render three plan cards with name, price (per year), short feature list, and a "Buy Now" button

### Requirement: FAQ section

The system SHALL render a "Frequently Ask Questions" accordion with at least
four questions (e.g. "Can I accept both Paypal and Stripe?", "What available
is refund period?", "Where are you from?", "What is your opening time?"),
each expandable to reveal an answer.

#### Scenario: FAQ accordion

- **GIVEN** the FAQ section is rendered
- **WHEN** the user activates a question
- **THEN** the answer for that question SHALL expand
- **AND** activating a second question SHALL collapse the first (accordion behavior)
- **AND** each toggle SHALL expose `aria-expanded`

### Requirement: About specialties section

The system SHALL render an "About"-style section with two specialty items
("Web & Mobile Specialties", "Intuitive Thinkers"), each with copy and a
"Learn More" link.

#### Scenario: Specialties

- **GIVEN** the page is rendered
- **WHEN** the about specialties section is displayed
- **THEN** it SHALL render two items, each with a title, short copy, and a "Learn More" link

### Requirement: Blog section

The system SHALL render an "Our Blog" section with three post cards, each
with an image, meta line (author, date, category), post title, excerpt, and
a "Continue Reading..." link.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Our Blog" in the primary blue
- **AND** it SHALL render three post cards
- **AND** each card SHALL show an image, meta (author · date · category), title, excerpt, and a "Continue Reading..." link

### Requirement: Contact section

The system SHALL render a light-background "Contact Us" section with contact
details (address, phone, email) and a contact form with fields for first
name, last name, email, subject, and message, submitted via a "Send Message"
pill button with validation and an accessible success/error state.

#### Scenario: Contact details

- **GIVEN** the contact section is rendered
- **WHEN** the section is displayed
- **THEN** it SHALL show the section title "Contact Us" in the primary blue
- **AND** it SHALL show an address, a phone number, and an email address

#### Scenario: Contact form validation

- **GIVEN** the contact form is rendered
- **WHEN** the user submits with empty required fields or an invalid email
- **THEN** per-field validation messages SHALL be shown
- **AND** the form SHALL NOT submit until valid

#### Scenario: Successful submission

- **GIVEN** the contact form is rendered
- **WHEN** the user fills all fields validly and submits
- **THEN** the form SHALL show a success confirmation (no network dependency — local state only)

### Requirement: Footer

The system SHALL render a dark footer (`#333333`) with four columns: an
About Us blurb, Quick Links (About, Services, Testimonials, Contact), social
links (Facebook, Twitter/X, Instagram, LinkedIn), and a Subscribe Newsletter
form (email input + send button); the bottom bar SHALL carry the copyright
line and a link to https://www.componentdock.com/ ("Component Dock").

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the four columns (About, Quick Links, Follow Us, Subscribe Newsletter)
- **AND** the social links SHALL be icon links with accessible labels
- **AND** the newsletter form SHALL have an email input and a submit button

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **WHEN** the bottom bar is displayed
- **THEN** it SHALL show the copyright line
- **AND** it SHALL link to https://www.componentdock.com/ branded "Component Dock"

### Requirement: Page composition

The system SHALL compose all sections in the source order (hero+intro, team,
portfolio, services, testimonials, pricing, FAQ, about, blog, contact,
footer) with the navbar in the banner landmark, content in the main
landmark, and the footer in the contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Orion app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL render sections in the source order above
- **AND** the document title SHALL be "Orion — One Page Template"

## Verification checklist

- [ ] `npm run spec:validate`
- [ ] `bash scripts/verify-app.sh orion` (typecheck + lint + 100% coverage tests + build)
- [ ] Screenshot review: sections and order, `#007bff` brand, Work Sans, pill buttons, dark `#333333` footer
- [ ] TEMPLATES.md bookkeeping on merge: `[ ]` Oneder → `[x]` with `apps/orion` (implementer task)
