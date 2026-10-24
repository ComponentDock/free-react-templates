# Template: Inception (Creative Agency Onepage)
<!-- prep-status: shipped-as=forgehub -->
> **SHIPPED-UNDER** — the ColorLib `create` design this prep describes already
> ships as `apps/forgehub` (<https://forgehub.free.componentdock.com>).
> Do not scaffold `apps/inception`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-forgehub/spec.md`.

## Purpose

Recreation of [ColorLib "Create"](https://colorlib.com/wp/template/create/) — a creative agency one-page website template.
Preview URL: https://preview.colorlib.com/theme/create/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
Deploy: `https://inception.free.componentdock.com`

## Design Tokens

| Token                  | Value / Description                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Brand teal             | `#32dbc6` — primary accent for buttons, links, active nav, headings, checkmarks, CTA banner                                         |
| Body background        | `#fff` (white)                                                                                                                       |
| Alternate section bg   | `#edf0f5` / `#f4f5f9` (very light blue-gray)                                                                                        |
| Top bar bg             | `#000` (black)                                                                                                                       |
| Navbar bg              | `#fff` (white), sticky header                                                                                                        |
| Navbar text            | `#000` (black), active/hover `#32dbc6`                                                                                               |
| Logo accent            | `#32dbc6` dot after brand name                                                                                                       |
| Hero overlay           | Dark overlay on background image                                                                                                     |
| Hero heading           | `#fff`, font-size 3rem (48px), font-weight 400                                                                                       |
| Section headings       | `#000` (black), font-size ~3rem on desktop, site-section-heading class                                                               |
| Body text              | Dark gray (Bootstrap default)                                                                                                        |
| Heading icons          | `#32dbc6` (text-primary) for numbered box headings (Innovate, Create, Scale)                                                         |
| Checkmarks             | `#32dbc6` for `.ul-check.primary li:before`                                                                                          |
| Cards / boxes          | `#fff` background                                                                                                                    |
| Blog meta              | `#999` (gray)                                                                                                                        |
| Footer bg              | `#333333` (dark charcoal)                                                                                                            |
| Footer headings        | `#fff` (white)                                                                                                                       |
| Footer body text       | `#737373`                                                                                                                            |
| Footer links           | `#999999` (gray), hover `#fff`                                                                                                       |
| CTA banner             | `#32dbc6` background, white text                                                                                                     |
| Font — primary         | `'Quicksand', sans-serif` (Google Fonts, weights 300–900)                                                                            |
| Font — icons           | `icomoon` (icon font)                                                                                                                |
| Button (.btn-primary)  | `#32dbc6` bg, white text, `.btn-md` (padding 15px 30px, font-size 12px, uppercase, letter-spacing .1em)                             |
| Button border-radius   | `30px` (rounded pill)                                                                                                                |
| Avatar shapes          | `border-radius: 50%` (circular) for team member photos                                                                               |
| Scroll-to-top          | N/A (not present in original)                                                                                                        |
| Form inputs            | Standard Bootstrap form-control (bordered)                                                                                           |
| Contact form card      | `#fff` bg, `.p-5` padding                                                                                                            |

### CSS reference

Extracted from `https://preview.colorlib.com/theme/create/css/style.css` (see replication notes below).

## Requirements

### Top Bar

Feature: Top Bar

#### Scenario: Renders contact info and social icons

- **GIVEN** the page loads
- **THEN** a dark top bar is displayed above the navbar
- **AND** phone number "+1 234 5678 9101" is shown
- **AND** email "info@yourdomain.com" is shown
- **AND** social icons (Facebook, Twitter, Instagram, LinkedIn) are visible on the right

#### Scenario: Hidden on small screens

- **GIVEN** the viewport width is less than 768px
- **THEN** the top bar is hidden

### Navbar

Feature: Navbar

#### Scenario: Renders brand and navigation links

- **GIVEN** the page loads
- **THEN** the navbar displays the brand "inception" with a teal dot accent
- **AND** navigation links are visible: Home, Work, Services, About, Blog, Contact
- **AND** the navbar is sticky on scroll

#### Scenario: Active link highlight

- **GIVEN** the user is viewing the page
- **WHEN** the user scrolls to the "Work" section
- **THEN** the "Work" nav link is highlighted in teal (#32dbc6)

#### Scenario: Mobile hamburger toggle

- **GIVEN** the viewport width is less than 1200px
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu expands/collapses

#### Scenario: About dropdown

- **GIVEN** the viewport width is >= 1200px
- **WHEN** the user hovers over "About"
- **THEN** a dropdown shows "Specialties" and "Our Team" links

### Hero

Feature: Hero Section

#### Scenario: Full-viewport background image with overlay

- **GIVEN** the page loads
- **THEN** a full-viewport hero section is displayed
- **AND** a background image covers the section with a dark overlay

#### Scenario: Hero content

- **THEN** a heading "We Love To Build" is visible with rotating typed text
- **AND** the typed words cycle through "Web Apps", "WordPress", "Mobile Apps"
- **AND** a "Watch Video" button is displayed (primary teal, rounded pill)

#### Scenario: Video CTA

- **GIVEN** the hero section is visible
- **WHEN** the user clicks "Watch Video"
- **THEN** a video modal/lightbox opens

### Numbered Boxes (Innovate / Create / Scale)

Feature: Numbered Boxes Section

#### Scenario: Three numbered columns

- **GIVEN** the page loads
- **THEN** three boxes are displayed in a row: "01. Innovate", "02. Create", "03. Scale"

#### Scenario: Box content

- **THEN** each box has a large faded number behind the heading
- **AND** each heading is in teal (#32dbc6)
- **AND** each box has a paragraph description
- **AND** each box has a checklist of 3 items with teal checkmarks

#### Scenario: Checklist styling

- **GIVEN** a numbered box is displayed
- **THEN** checklist items have a teal (#32dbc6) checkmark icon before each item

### Work / Portfolio

Feature: Work Section

#### Scenario: Section heading

- **GIVEN** the page loads
- **THEN** the "Our Works" heading is displayed centered

#### Scenario: Portfolio grid

- **THEN** a 3-column grid of portfolio images is shown
- **AND** each image has an overlay with a title and category label
- **AND** images open in a lightbox when clicked

#### Scenario: Responsive layout

- **GIVEN** the viewport width is less than 768px
- **THEN** portfolio items stack in a single column

### Services

Feature: Services Section

#### Scenario: Section heading

- **GIVEN** the page loads
- **THEN** the "Our Services" heading is displayed centered

#### Scenario: Service items

- **THEN** multiple service items are displayed in a 3-column grid
- **AND** each service has a teal icon, title, description, and "Learn More" link

#### Scenario: Service icons

- **GIVEN** a service item is displayed
- **THEN** the icon is rendered in teal (#32dbc6)

### About Us

Feature: About Us Section

#### Scenario: Layout

- **GIVEN** the page loads
- **THEN** the "About Us" heading is visible
- **AND** an image is displayed on the right side
- **AND** text content is on the left side

#### Scenario: Specialty items

- **GIVEN** the About section is visible
- **THEN** specialty sub-items are listed (e.g. "Web & Mobile Specialties")
- **AND** each has a teal icon, title, description, and "Learn More" link

### Team

Feature: Team Section

#### Scenario: Section heading

- **GIVEN** the page loads
- **THEN** the "Our Team" heading is displayed centered
- **AND** a bottom border separates this section

#### Scenario: Team member cards

- **THEN** 3 team member cards are displayed in a row
- **AND** each card has a circular avatar image (50% width)
- **AND** each card shows the member name and position title
- **AND** each card has social media icon links (Facebook, Twitter, LinkedIn, Instagram)

#### Scenario: Responsive layout

- **GIVEN** the viewport width is less than 768px
- **THEN** team member cards stack vertically

### Blog

Feature: Blog Section

#### Scenario: Section heading

- **GIVEN** the page loads
- **THEN** the "Blog" heading is displayed centered

#### Scenario: Blog posts

- **THEN** 3 blog post cards are displayed in a row
- **AND** each post has a featured image, title, meta info (author, date, category), excerpt, and "Continue Reading..." link

#### Scenario: Responsive layout

- **GIVEN** the viewport width is less than 768px
- **THEN** blog post cards stack vertically

### Contact Us

Feature: Contact Section

#### Scenario: Section heading

- **GIVEN** the page loads
- **THEN** the "Contact Us" heading is displayed centered on a light background

#### Scenario: Contact form

- **THEN** a form is displayed with fields: First Name, Last Name, Email, Subject, Message
- **AND** a "Send Message" button is shown (primary teal, rounded pill)

#### Scenario: Contact info card

- **THEN** an info card is displayed to the right of the form
- **AND** it shows Address, Phone, and Email Address

### CTA Banner

Feature: CTA Banner

#### Scenario: "Let's Get Started" banner

- **GIVEN** the contact section is visible
- **THEN** a full-width teal (#32dbc6) banner is displayed below the contact section
- **AND** the text "Let's Get Started" is shown in white

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the page loads
- **THEN** a dark (#333333) footer is displayed
- **AND** it has columns: About Us text, Features links, Follow Us social icons, Subscribe Newsletter form

#### Scenario: Newsletter subscribe

- **THEN** an email input with "Enter Email" placeholder is shown
- **AND** a "Send" button (primary teal) is adjacent to the input

#### Scenario: Copyright

- **THEN** a copyright notice is shown at the bottom
- **AND** a link to Component Dock replaces ColorLib

## Verification checklist

- [ ] All sections render in order: top bar → navbar → hero → numbered boxes → work → services → about → team → blog → contact → CTA → footer
- [ ] Teal (#32dbc6) is the only brand accent color
- [ ] Quicksand font loaded from Google Fonts
- [ ] Navbar is sticky, white background, with teal active state
- [ ] Hero has full-viewport background image with dark overlay and typed text animation
- [ ] Portfolio section has 6 images in 3-column grid with overlay titles
- [ ] Team section shows 3 members with circular avatars
- [ ] Contact form has all 5 fields (F name, L name, email, subject, message)
- [ ] Footer is dark (#333333) with newsletter subscribe form
- [ ] CTA banner "Let's Get Started" spans full width in teal
- [ ] Mobile responsive: hamburger nav, stacked columns
- [ ] All links point to "#" or internal anchors (no external references)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` contains `inception.free.componentdock.com`
- [ ] `package.json` homepage is `https://inception.free.componentdock.com`
