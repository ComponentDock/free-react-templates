# Template: Credium (Finance / Loan Company)

## Purpose

Recreation of [ColorLib Credit](https://colorlib.com/wp/template/credit/) — a loan and credit company HTML template, converted to React 19 + Vite + Tailwind CSS 4 + TypeScript.

Preview URL: https://preview.colorlib.com/theme/credit/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/credit-free-template.jpg

Stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict) · lucide-react for icons.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/credit/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ffbb38` (gold/amber) | Section heading underlines, tooltip bg, accents, slider indicators |
| Brand secondary | `#003679` (navy blue) | Navbar bg, hero overlay, CTA section bg, footer bg, links |
| Text dark | `#212121` | Body text |
| Text muted | `#838383` | Subtext, metadata |
| Light bg | `#f1f7f9` | `.bg-gray` sections (miscellaneous area) |
| White | `#ffffff` | Card/slide backgrounds, CTA text on dark |
| Font heading | `Montserrat` (Google Fonts) | Headings, nav links, button text |
| Font body | `Open Sans` (Google Fonts) | Paragraphs, small text |
| Button radius | `5px` (standard) / `30px` (pill) | CTA buttons rounded-pill, form buttons standard |
| Section padding | `100px` vertical | Consistent section spacing |
| Card radius | `5px` | Feature cards, news cards |

## Requirements

### Header

#### Scenario: Top header displays contact info

- **GIVEN** the page loads
- **THEN** the top header shows an address, email, and placeholder icon
- **AND** the top header has a light gray background (#f2f4f6)

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the user scrolls down
- **THEN** the navbar sticks to the top of the viewport
- **AND** the navbar displays the logo and navigation links
- **AND** navigation links include Home, About Us, Services, Blog, Contact

### Hero Slider

#### Scenario: Hero section shows a full-width image slider

- **GIVEN** the page loads
- **THEN** the hero section displays a full-width background image slider
- **AND** each slide has a dark overlay (#000000 with opacity 0.61)
- **AND** each slide shows a headline ("2 years interest")
- **AND** each slide shows descriptive paragraph text
- **AND** slider indicators (circle dots) are visible at the bottom
- **AND** indicators use brand gold (#ffbb38) for active state

#### Scenario: Hero slider auto-plays between slides

- **GIVEN** the hero slider is displayed
- **WHEN** no user interaction occurs
- **THEN** the slider transitions between slides automatically

### Features Section

#### Scenario: Features section displays four loan highlights

- **GIVEN** the user scrolls to the features section
- **THEN** four feature items are displayed in a row
- **AND** the section heading reads "Our Loans" with a gold underline
- **AND** subheading reads "Take look at our"
- **AND** features include: "We take care of you", "No documents needed", "Fast & easy loans"
- **AND** each feature item has a background image thumbnail

#### Scenario: Feature items animate on scroll

- **GIVEN** the user scrolls to the features section
- **THEN** each feature item fades in with a staggered delay

### CTA 1 (Stats / Statement)

#### Scenario: CTA section displays on dark navy background

- **GIVEN** the user scrolls past the features
- **THEN** a dark navy (#003679) section is displayed
- **AND** the heading reads "Helping small businesses like yours"
- **AND** subheading reads "Bold design and beyond"
- **AND** descriptive paragraph text is shown
- **AND** there are three stats/counters displayed
- **AND** a "Read More" button is visible

#### Scenario: CTA section has white text on dark background

- **GIVEN** the CTA section is visible
- **THEN** all text in the section is white
- **AND** the gold accent color is used for emphasis

### CTA 2 (Services Summary)

#### Scenario: Second CTA displays service summary

- **GIVEN** the user scrolls to the second CTA
- **THEN** a light background section is shown
- **AND** a heading reads "Our services"
- **AND** the text reads "Are you in need for a loan? Get in touch with us."
- **AND** a "Read More" link or button is visible

### Services Section

#### Scenario: Services section displays six service cards

- **GIVEN** the user scrolls to the services section
- **THEN** six service items are displayed in a grid
- **AND** each service has a title and description
- **AND** services include: "All the loans", "Easy and fast answer", "No additional papers", "Secure financial services", "Good investments", "Accumulation goals"
- **AND** each service item animates in on scroll

#### Scenario: Service icons use circular brand styling

- **GIVEN** the services section is visible
- **THEN** each service icon container is circular
- **AND** uses brand navy (#003679) as icon background

### Miscellaneous Area (Contact + News)

#### Scenario: Miscellaneous section displays on light gray background

- **GIVEN** the user scrolls to the miscellaneous section
- **THEN** the background is light gray (#f1f7f9)
- **AND** three columns are displayed side by side

#### Scenario: Ad/CTA column is present

- **GIVEN** the miscellaneous section is visible
- **THEN** the left column contains a promotional area or CTA

#### Scenario: Contact form column is present

- **GIVEN** the miscellaneous section is visible
- **THEN** the center column has heading "Get in touch"
- **AND** a contact form is displayed with name, email, subject, message fields
- **AND** a submit button is present

#### Scenario: Latest news column shows recent posts

- **GIVEN** the miscellaneous section is visible
- **THEN** the right column has heading "The news"
- **AND** three news items are listed
- **AND** each news item shows a date, title, and author

### Newsletter Section

#### Scenario: Newsletter section has a parallax background image

- **GIVEN** the user scrolls to the newsletter section
- **THEN** a full-width background image is displayed with parallax effect
- **AND** the heading reads "Subscribe to our newsletter"
- **AND** an email input field is shown
- **AND** a "Subscribe" button is present
- **AND** text overlay reads descriptive paragraph

#### Scenario: Newsletter form is functional

- **GIVEN** the newsletter section is visible
- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form accepts the input

### Footer

#### Scenario: Footer has four columns of links

- **GIVEN** the user scrolls to the footer
- **THEN** four columns are displayed
- **AND** column headings are: "About Us", "Solutions", "Our Loans", "Latest News"
- **AND** each column contains a list of navigation links

#### Scenario: Latest News column shows blog post titles

- **GIVEN** the footer is visible
- **THEN** the "Latest News" column shows three blog post titles

#### Scenario: Copyright bar is displayed at the bottom

- **GIVEN** the footer is visible
- **THEN** a copyright area is shown at the very bottom
- **AND** it includes the site name and a link to Component Dock

## Verification checklist

- [ ] Header: top contact bar + sticky navbar with logo and nav links
- [ ] Hero: full-width image slider with dark overlay, headlines, indicators
- [ ] Features: 4-column layout with image thumbnails, heading with gold underline
- [ ] CTA 1: dark navy bg, stats/counters, white text, "Read More" button
- [ ] CTA 2: light bg, service summary text, "Read More" link
- [ ] Services: 6 service cards with icons in circular containers
- [ ] Miscellaneous: 3-column layout (ad + contact form + latest news) on gray bg
- [ ] Newsletter: parallax bg image, email input, subscribe button
- [ ] Footer: 4-column link lists + copyright bar with Component Dock link
- [ ] Design tokens match: #ffbb38 primary, #003679 secondary, Montserrat + Open Sans fonts
- [ ] All sections animate on scroll (fade-in)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via picsum.photos/seed/credium-<n>
- [ ] Footer links to https://www.componentdock.com/
