# Template: Havenly (Adoption / Foster Care)
<!-- prep-status: shipped-as=giveaid -->
> **SHIPPED-UNDER** — the ColorLib `adopted` design this prep describes already
> ships as `apps/giveaid` (<https://giveaid.free.componentdock.com>).
> Do not scaffold `apps/havenly`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-giveaid/spec.md`.

## Purpose

Recreation of ColorLib "Adopted" — an adoption/foster care template with warm
earth-tone palette, full-width hero slider, children's carousel, accordion
steps, featured stories grid, and newsletter signup.

- **Source:** https://colorlib.com/wp/template/adopted/
- **Preview:** https://preview.colorlib.com/theme/adopted/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `havenly` (apps/havenly, @free-react-templates/havenly)

## Design tokens

| Token | Value | Usage |
| --- | --- | --- |
| Primary warm red | `#bc5148` | Button backgrounds, CTA accents |
| Hover red | `#ca746d` | Button hover state |
| Accent gold | `#f4b214` | Loader spinner, decorative accents |
| Body text | `#495057` | Secondary text |
| Muted text | `#868e96` | Light muted text |
| Light background | `#f8f9fa` | `bg-light` sections |
| Border gray | `#dee2e6` | Section borders |
| White | `#fff` | Body background, hero text |
| Black | `#000` | Headings, dark slide text |
| Font body | Open Sans, sans-serif | Body text, paragraphs |
| Font cursive | Sacramento, cursive | Decorative child names |
| Button | Bootstrap primary (red), 2px border, white text | CTA buttons |
| Button outline | #bc5148 border, red text | Secondary CTAs |
| Loader | Gold (#f4b214) spinner circle | Page loader |

## Requirements

### 1. Top Bar

- Social media links (Twitter, Facebook, Instagram, LinkedIn) on the left
- "Sponsor" button and "Login" CTA on the right
- Light background bar above the navbar

#### Scenario: Top bar

- **GIVEN** the page loads
- **WHEN** the top bar renders
- **THEN** 4 social media icons are displayed on the left
- **AND** "Sponsor" and "Login" buttons are on the right

### 2. Navbar

- Brand "Havenly" on the left
- Nav links: Home, Adoption (dropdown: Adoption, Waiting Children, How to Adopt), Success Stories, About, Contact
- Bootstrap expandable navbar with hamburger on mobile
- Light background (`bg-light`)

#### Scenario: Desktop navbar

- **GIVEN** the viewport width is ≥ 768px
- **WHEN** the navbar renders
- **THEN** the brand "Havenly" is visible on the left
- **AND** 5 nav links are displayed to the right
- **AND** the Adoption link has a dropdown menu

#### Scenario: Mobile navbar

- **GIVEN** the viewport width is < 768px
- **WHEN** the hamburger is clicked
- **THEN** the navbar collapses and shows nav items vertically

### 3. Hero Slider

- Full-width owl-carousel slider
- 2 slides with background images
- Each slide: child name in Sacramento cursive font, headline ("Needs a Caring/Loving Parents"), description paragraph, CTA button ("Adopt Her/Him Now!")
- Dark overlay on first slide, white text on second
- Height: 100vh - 117px (min 700px)

#### Scenario: Hero slide content

- **GIVEN** the hero slider renders
- **WHEN** the page loads
- **THEN** the first slide shows a child's name in cursive
- **AND** a headline "Needs a Caring Parents" is displayed
- **AND** a description paragraph is shown
- **AND** an "Adopt Her Now!" button is visible

#### Scenario: Hero slide navigation

- **GIVEN** the hero slider is active
- **WHEN** navigation arrows are clicked
- **THEN** the next slide is shown with different child info

### 4. Steps to Adopt (About Section)

- White background section
- Left column: SVG illustration of parent-child figures + description paragraph + "Adopt a child now" outline button
- Right column: "Steps to adopt & foster a child" heading + 7-item accordion:
  1. Getting Started
  2. Envisioning your family
  3. Getting approved
  4. Being matched with a child
  5. Receiving a placement
  6. Finalizing an adoption
  7. State information

#### Scenario: Steps section

- **GIVEN** the steps section is in view
- **WHEN** the section renders
- **THEN** an SVG illustration is displayed on the left
- **AND** an accordion with 7 steps is shown on the right
- **AND** each step has a title and expandable description

#### Scenario: Accordion interaction

- **GIVEN** the steps accordion is displayed
- **WHEN** a step title is clicked
- **THEN** that step's description expands and becomes visible
- **AND** other steps collapse

### 5. Waiting Children (Carousel)

- Light gray background section
- Centered heading "Waiting Children" + description + "Find More Waiting Children" primary button
- Carousel of 5 children cards (image + name + age)
- Children: Edward (14), Mellisa (6), Mark (12), Jessa (13), Ben (14)

#### Scenario: Waiting children carousel

- **GIVEN** the waiting children section is in view
- **WHEN** the section renders
- **THEN** a heading "Waiting Children" is displayed
- **AND** a carousel shows child cards with photos, names, and ages
- **AND** a "Find More Waiting Children" button is visible

### 6. Featured Stories (Grid)

- White background with top border
- Centered heading "Featured Stories"
- 3-column grid of story cards (no gutters)
- Each card: link overlay with date, title, plus icon, and background image
- Stories: "Being loved has taught me how to love", "Becoming a perfect parent out of imperfect", "Home sweet home"

#### Scenario: Featured stories grid

- **GIVEN** the featured stories section is in view
- **WHEN** the section renders
- **THEN** 3 story cards are displayed in a row
- **AND** each card has a date, title, and background image
- **AND** a plus icon overlay appears on hover

### 7. Newsletter Signup

- Light gray background section
- Heading "Get News & Updates"
- Form with: name input, email input, "Subscribe" primary button (3-column row)

#### Scenario: Newsletter form

- **GIVEN** the newsletter section is in view
- **WHEN** the section renders
- **THEN** a heading "Get News & Updates" is displayed
- **AND** a name input field is shown
- **AND** an email input field is shown
- **AND** a "Subscribe" button is displayed

### 8. Footer

- Dark background
- 4-column layout: About (text + "Learn More" link), Contact & Address (address, phone, email), Quick Links (7 links), Social (Twitter, Facebook, LinkedIn, Instagram)
- Copyright text centered at bottom
- Must link to https://www.componentdock.com/

#### Scenario: Footer content

- **GIVEN** the page footer is in view
- **WHEN** the footer renders
- **THEN** an "About" column with text is shown
- **AND** a "Contact & Address" column with details is shown
- **AND** a "Quick Links" column with navigation links is shown
- **AND** a "Social" column with icon links is shown
- **AND** copyright text is centered at the bottom
- **AND** a link to ComponentDock is present

### 9. Page Loader

- Full-screen overlay with gold (#f4b214) spinning circle
- Disappears when page is loaded

#### Scenario: Page loader

- **GIVEN** the page is loading
- **WHEN** the loader is visible
- **THEN** a full-screen overlay with a spinning gold circle is shown
- **AND** the loader disappears once the page finishes loading

## Verification checklist

- [ ] Top bar renders with social links and Sponsor/Login buttons
- [ ] Navbar renders with brand, links, and Adoption dropdown
- [ ] Hero slider shows 2 slides with child names, headlines, CTAs
- [ ] Steps section has SVG illustration and 7-step accordion
- [ ] Accordion expands/collapses correctly
- [ ] Waiting children carousel shows 5 children with photos
- [ ] Featured stories grid shows 3 story cards
- [ ] Newsletter form has name, email inputs and Subscribe button
- [ ] Footer has 4 columns with About, Contact, Links, Social
- [ ] Footer links to https://www.componentdock.com/
- [ ] Page loader shows gold spinner on load
- [ ] Warm red brand (#bc5148) used on CTAs and accents
- [ ] Sacramento cursive font used for child names in hero
- [ ] Responsive: mobile hamburger, stacked columns
- [ ] Placeholder images via picsum.photos/seed/havenly-*
- [ ] No ColorLib references in app code
