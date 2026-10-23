# Template: Drainwell (Plumbing Services)

## Purpose

Drainwell is a single-page plumbing services website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Plumber" free template (source:
https://colorlib.com/wp/template/plumber/, preview:
https://preview.colorlib.com/theme/plumber/), built under a DIFFERENT name
(**Drainwell**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap-based single-page site with 11 sections: fixed
navbar, fullscreen hero banner with dark overlay, quote/split section, 3
service cards with hexagon icons, feature cards with side image, stat
counters, video section, CTA band, testimonial carousel, contact form with
map, and a dark footer with newsletter. Font is Poppins (100–700). Brand
color is `#f53f51` (coral red). The design is professional, clean, and
contrasts a dark navy footer/CTA/hero with white content sections.

**Replication reference:**
- Source: ColorLib "Plumber" → https://colorlib.com/wp/template/plumber/
- Preview: https://preview.colorlib.com/theme/plumber/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/plumber-free-template.jpg

## Design Tokens

| Token               | Value                    | Usage                                  |
|---------------------|--------------------------|----------------------------------------|
| Font family         | "Poppins", sans-serif    | All text (body weight 300, headings 600) |
| Primary brand       | `#f53f51`                | Buttons, accents, links, counters      |
| Body text           | `#777777`                | Paragraphs, descriptions               |
| Heading text        | `#222222`                | All headings h1–h6                     |
| Light background    | `#f9f9ff`                | Section backgrounds, inputs, cards     |
| Dark background     | `#04091e`                | Footer, CTA, banner overlay base       |
| Banner overlay      | `rgba(4,9,30,0.9)`      | Hero image dark overlay                |
| Video overlay       | `rgba(4,9,30,0.75)`     | Video section overlay                  |
| Button radius       | `50px` (pill)            | Primary CTA buttons                    |
| Card border         | `1px solid #eee`         | Testimonial cards                      |
| Card radius         | `10px`                   | Counter cards, testimonial cards       |
| Section padding     | `120px` (section-gap)    | Standard section vertical spacing      |
| Counter shadow      | `rgba(245,63,81,0.3)`   | Counter card box-shadow                |
| Feature shadow      | `rgba(157,157,157,0.2)` | Feature card hover shadow              |
| Icon hexagon border | `#A7A7A7`               | Service hexagon icons (default)        |
| Icon hexagon hover  | `#f53f51` bg + white    | Service hexagon icons (hover)          |
| Surface (measured) | `#4cd3e3` | paints it ×7 — `background` on `.genric-btn.success`; main.css (29,643 B, sha256 6023c7741260) · <https://preview.colorlib.com/theme/plumber/> |

## Section Structure (order from preview)

1. **Header/Navbar** — Fixed top, transparent initially → dark `rgba(0,0,0,0.8)` on scroll. Logo left, nav links right: Home, Services, Features, Testimonial, Contact, Pages dropdown. Mobile hamburger toggle.
2. **Hero Banner** — Fullscreen (`100vh`), background image with dark overlay `rgba(4,9,30,0.9)`. Left-aligned white text: h1 "We're your plumber", paragraph lorem, CTA pill button.
3. **Quote/Split Section** — Two columns: left h2 with colored span words ("Plumbing", "Nowhere"), right paragraph text.
4. **Services (3 cards)** — 3-column grid. Each card: hexagon icon (lnr-magic-wand, lnr-rocket, lnr-bug), h4 title (Maintenance, Residential Service, Commercial Service), paragraph. Centered text.
5. **Features** — Split layout: left half is a full-height image, right half has title + 4 feature cards stacked vertically (Multiple Layouts, Clean Coding, Endless Features, Fully Customizable). Cards are white with hover shadow.
6. **Counter Stats** — 4-column grid of rounded white cards with red number + label: 2536 Happy Clients, 6784 Total Projects, 1059 Cups Coffee, 12239 Tickets Submitted.
7. **Video Section** — Background image + dark overlay, centered text "Explore ourself in a new way", play button icon, CTA link.
8. **Call to Action** — Dark navy bg, centered white heading "Got Impressed to our features", paragraph, white CTA pill button.
9. **Testimonials** — Carousel with cards: quote icon, text, divider, author info (name, role). White cards with light border.
10. **Contact** — Dark navy background with map placeholder + contact form (Name, Email, Subject inputs, Message textarea, "Send Message" submit button).
11. **Footer** — Dark navy bg. Three columns: About Us (text), Newsletter (email input), Follow Us (social icons). Copyright bar at bottom.

## Requirements

### Feature: Drainwell template behaviour

#### Scenario: Navbar renders with correct links and scroll behavior

- **GIVEN** the page loads
- **THEN** the navbar displays links: Home, Services, Features, Testimonial, Contact
- **AND** the navbar is fixed at the top
- **WHEN** the user scrolls down
- **THEN** the navbar background transitions to dark

#### Scenario: Hero banner displays with CTA

- **GIVEN** the page loads
- **THEN** the hero section shows a fullscreen banner with dark overlay
- **AND** the heading reads "We're your plumber"
- **AND** a CTA pill button is visible

#### Scenario: Quote section shows split layout

- **GIVEN** the page loads
- **THEN** the quote section has two columns
- **AND** the left column shows a heading with highlighted words
- **AND** the right column shows descriptive paragraph text

#### Scenario: Services section displays 3 service cards

- **GIVEN** the page loads
- **THEN** 3 service cards are visible
- **AND** each card has a hexagon icon, title, and description
- **WHEN** the user hovers a hexagon icon
- **THEN** it fills with the brand color and turns white

#### Scenario: Features section shows image + cards

- **GIVEN** the page loads
- **THEN** the features section has a split layout
- **AND** the left side shows an image
- **AND** the right side shows 4 feature cards
- **WHEN** the user hovers a feature card
- **THEN** a subtle shadow appears

#### Scenario: Counter section displays stats

- **GIVEN** the page loads
- **THEN** 4 stat cards are visible with numbers and labels
- **AND** each card has rounded corners and a red-tinted shadow

#### Scenario: Video section shows play button

- **GIVEN** the page loads
- **THEN** the video section shows a dark overlay on a background image
- **AND** a play button icon is centered
- **AND** a "Watch Video" link is visible

#### Scenario: CTA section renders

- **GIVEN** the page loads
- **THEN** the CTA section has a dark navy background
- **AND** white text heading and paragraph are visible
- **AND** a white pill CTA button is displayed

#### Scenario: Testimonials carousel works

- **GIVEN** the page loads
- **THEN** testimonial cards are visible in a carousel
- **AND** each card shows quote text, author name, and role
- **AND** carousel navigation dots are present

#### Scenario: Contact form renders and validates

- **GIVEN** the page loads
- **THEN** the contact section shows a form with Name, Email, Subject, Message fields
- **AND** a "Send Message" button
- **WHEN** the user submits an empty form
- **THEN** form validation prevents submission

#### Scenario: Footer renders with newsletter and social links

- **GIVEN** the page loads
- **THEN** the footer shows About Us text, Newsletter signup, and social icons
- **AND** the footer links to https://www.componentdock.com/
- **AND** a copyright notice is displayed

## Verification checklist

- [ ] All 11 sections render in correct order matching the original preview
- [ ] Font: Poppins loaded via Google Fonts / CDN
- [ ] Brand color `#f53f51` applied to buttons, accents, links
- [ ] Hero banner: fullscreen dark overlay, white heading, CTA button
- [ ] Quote section: two-column split layout
- [ ] Services: 3 cards with hexagon icons, hover state
- [ ] Features: side image + 4 stacked cards with hover shadow
- [ ] Counters: 4 stat cards, red numbers, rounded shadow cards
- [ ] Video section: dark overlay, centered content, play icon
- [ ] CTA band: dark navy background, white text + button
- [ ] Testimonials: carousel with cards, navigation dots
- [ ] Contact: form with 4 fields + submit button
- [ ] Footer: dark navy, 3 columns, newsletter input, social links
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in any app code (provenance only in spec)
- [ ] 100% test coverage on all components
