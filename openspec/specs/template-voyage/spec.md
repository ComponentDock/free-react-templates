# Template: Voyage (Travel & Tourism Landing Page)

## Purpose

A Bootstrap 5 template with hero section, about section, destinations carousel, faq accordion and blog / recent posts sections. Recreation of ColorLib Passport (`https://colorlib.com/wp/template/passport/`, preview: `https://preview.colorlib.com/theme/passport/`) as a modern React 19 + Tailwind CSS 4 travel and tourism landing template (`@free-react-templates/voyage`).

## Design Tokens

- **Primary Brand Color**: Warm Orange `#fc8621` (Tailwind `orange-500` / custom primary)
- **Text Color**: Dark Charcoal `#212529` (Tailwind `gray-900`)
- **Background Light**: Off-white `#f8f9fa` (Tailwind `gray-50`)
- **Typography**:
  - Headings: `"Playfair Display"`, serif (`font-weight: 700`)
  - Body: `"Open Sans"`, sans-serif
- **Button Radius**: Fully rounded pill shape (`rounded-full`, `border-radius: 30px`)
- **Hero Treatment**: Full-width immersive travel background with dark overlay, bold serif typography, and floating destination badge.

## Requirements

### Requirement: Navigation Bar

The navbar SHALL display the brand logo ("Voyage"), navigation links (Home, About Us, Services, Blog, Contact Us), and a CTA button ("Contact Us"), with a responsive mobile menu toggle.

#### Scenario: User views navigation on desktop

- **WHEN** the user loads the Voyage template on a desktop viewport
- **THEN** all top navigation links and the contact CTA are visible and functional

#### Scenario: User toggles mobile menu

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links visible

### Requirement: Hero Section

The hero section SHALL display an immersive travel banner with a headline ("It is Better to Travel Well Than to Arrive"), a "Watch Video" trigger button, and a background image.

#### Scenario: User views the hero banner

- **WHEN** the user is at the top of the page
- **THEN** the bold headline, watch video button, and background image are clearly displayed over the travel imagery

### Requirement: About Section

The about section SHALL display "Explore All Corners of The World With Us" heading, paired with split image collages and descriptive copy.

#### Scenario: User scrolls to About Us

- **WHEN** the user scrolls past the hero
- **THEN** the heading, editorial paragraphs, and split feature images render correctly with a "Read more" action link

### Requirement: Destinations Carousel

The destinations section SHALL display "We Provide Top Destinations" heading with featured travel packages showing thumbnail images, destination names, locations, and pricing badges.

#### Scenario: User inspects top destinations

- **WHEN** the user reaches the destinations section
- **THEN** destination cards display clear pricing tags and location details with navigation controls

#### Scenario: User navigates destination pages

- **WHEN** the user clicks the next/previous arrows or pagination dots
- **THEN** the carousel shows the corresponding set of destination cards

### Requirement: Testimonials Section

The testimonials section SHALL display "Happy Customer" heading with traveler feedback including quotes, star ratings, and author details.

#### Scenario: User views customer reviews

- **WHEN** the user views the testimonial section
- **THEN** traveler quotes, star ratings, and author details are displayed

### Requirement: FAQ Accordion

The FAQ section SHALL display "Frequently Asked Questions" heading with an expandable/collapsible accordion for each question.

#### Scenario: User interacts with FAQ accordion

- **WHEN** the user clicks an FAQ question header
- **THEN** the accordion item expands to show the answer and collapses previously opened items

### Requirement: Blog / Recent Posts

The blog section SHALL display "Recent Posts" heading with a grid of four blog cards showing post dates, thumbnail images, titles, and "Read More" links.

#### Scenario: User browses recent blog posts

- **WHEN** the user scrolls to the blog section
- **THEN** four blog cards display properly with dates, titles, and read more links

### Requirement: Call to Action Banner

The CTA banner SHALL display "Begin your adventurous journey here" heading with a prominent "Get started" button on an orange background.

#### Scenario: User views the final CTA banner

- **WHEN** the user reaches the bottom CTA
- **THEN** the engaging prompt and get started button invite conversion

### Requirement: Footer

The footer SHALL display a multi-column layout containing About summary, Connect social links, Quick links, Company info, Contact details, and mandatory Component Dock attribution.

#### Scenario: User scrolls to the footer

- **WHEN** the user reaches the bottom of the page
- **THEN** all columns and the "Made with Component Dock" credit are displayed

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/voyage/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/voyage/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] TypeScript strict typecheck passes (`npm run typecheck`)
- [ ] ESLint clean (`npm run lint`)
- [ ] Vitest unit tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Component Dock attribution link present in footer
- [ ] CNAME and homepage configured correctly for `<name>.free.componentdock.com`
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
