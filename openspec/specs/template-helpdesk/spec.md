# Template: Helpdesk (Customer Support / Call Center)
<!-- prep-status: shipped-as=dialpad -->
> **SHIPPED-UNDER** — the ColorLib `callcenter` design this prep describes already
> ships as `apps/dialpad` (<https://dialpad.free.componentdock.com>).
> Do not scaffold `apps/helpdesk`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-dialpad/spec.md`.

## Purpose

Recreation of ColorLib "Callcenter" template.
- Source: https://colorlib.com/wp/template/callcenter/
- Preview: https://preview.colorlib.com/theme/callcenter/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- Package: `@free-react-templates/helpdesk`
- Deploy target: `helpdesk.free.componentdock.com`

## Design tokens

Extracted from the live preview CSS (`css/main.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Poppins", sans-serif` | Google Fonts, weights 300–700 |
| Primary brand | `#8490ff` | Blue-violet; used for nav active, links, buttons, accents |
| Secondary brand | `#62bdfc` | Sky blue; gradient partner with primary |
| Primary gradient | `linear-gradient(0deg, #62bdfc 0%, #8490ff 100%)` | Buttons, overlays, fact counters |
| Body text | `#777` | font-weight 300, font-size 14px, line-height 1.625em |
| Headings | `#222` | font-weight 600, line-height 1.2em |
| Light bg | `#f9f9ff` | Inputs, blockquotes, brand area, switches |
| Footer bg | `#222` | Dark footer, white headings, #8490ff links |
| Selection | `background: #8490ff; color: #fff` | |
| Primary button | border-radius 25px, gradient bg, white text, uppercase, padding 0 30px/60px, font-weight 500 | Hover: transparent bg with #222 border for header-btn |
| Header button | Transparent bg, 1px solid transparent border, white text; hover → #222 border/bg/text | |
| Accent colors (icons) | Green `#5ec375`, Yellow `#f2c94c` | Feature icon accents |
| Section padding | 120px 0 (`.section-gap`) | |

### Visual design notes (from screenshot analysis)

- **Aesthetic**: Minimal, modern, professional yet approachable. Watercolor brush-stroke motif in blues adds a creative "colorful world" tie-in to the brand tagline.
- **Hero**: White background with blue watercolor brush stroke spanning the width. Cutout photo of a customer service agent (left), headline + subtext + CTA button on the right side.
- **Features**: 3-column layout with playful cartoon-style illustrated icons, white background.
- **Testimonials**: Dark overlay on a background image, carousel of user cards with avatars.
- **Offered Services**: 3×2 grid of service icons on left, text description + CTA on right. White card boxes with subtle blue box-shadow.
- **Facts/Stats**: 5-column counter row with gradient text (blue → blue-violet).
- **Services**: 6 service cards in 3×2 grid over a dark photo background with overlay.
- **Info**: Split layout — left image, right text with headline + CTA.
- **About/Video**: Split layout — left headline + text, right video thumbnail with dark overlay + play button.
- **Brand logos**: 5 grayscale logos, full color on hover.
- **Contact**: Form with name, email, subject, message + send button.
- **Footer**: Dark (#222) with 3 columns (About, Contact+phone numbers, Newsletter), bottom bar with copyright + social icons.

## Requirements

### Navbar

Feature: Fixed navbar with logo and navigation

#### Scenario: Logo displays with left blue accent border

- **GIVEN** the page loads
- **WHEN** I look at the header
- **THEN** a text-based logo "Helpdesk" is visible on the left
- **AND** it has a 4px left border in #8490ff

#### Scenario: Navigation links are uppercase and reactive

- **GIVEN** the page loads
- **WHEN** I view the navigation menu
- **THEN** links "Home", "Feature", "We Offer", "About", "Contact" are visible
- **AND** each link is uppercase and 12px font
- **WHEN** I hover over a link
- **THEN** its color changes to #8490ff
- **WHEN** the page scrolls down
- **THEN** the header gains a box-shadow

#### Scenario: Mobile menu toggle

- **GIVEN** I am on a viewport width below 800px
- **WHEN** I click the mobile hamburger icon
- **THEN** a dark slide-in sidebar appears with nav links
- **AND** the hamburger icon color is #8490ff

### Hero / Banner

Feature: Hero banner section

#### Scenario: Hero displays with blue brush stroke and agent photo

- **GIVEN** the page loads
- **WHEN** I look at the hero section
- **THEN** there is a white background with a blue watercolor brush stroke graphic
- **AND** a subtitle "DISCOVER THE COLORFUL WORLD" is displayed in uppercase
- **AND** a heading "Efficiency Booster" is displayed at 60px / 700 weight
- **AND** body lorem ipsum text is shown below the heading
- **AND** a "DISCOVER NOW" button is visible with gradient background and 25px border-radius

#### Scenario: Hero CTA button hover

- **GIVEN** I hover over the hero "Discover Now" button
- **THEN** the button becomes transparent with a #222 border
- **AND** the text color changes to #222

#### Scenario: Hero responsive

- **GIVEN** I am on a viewport below 768px
- **WHEN** I view the hero section
- **THEN** the heading font size reduces to 36px
- **AND** the section height is 700px

### Features

Feature: Three-column feature highlights

#### Scenario: Features display three items

- **GIVEN** I scroll to the features section
- **THEN** three feature cards are visible in a row
- **AND** each card contains an illustrated icon, a heading, and body text
- **AND** the headings are "Online Support", "24/7 Round the Clock", "Handling All Issues"

#### Scenario: Feature cards responsive

- **GIVEN** I am on a viewport below 800px
- **WHEN** I view the features section
- **THEN** each feature card stacks vertically with bottom margin

### Testimonials

Feature: Testimonial carousel

#### Scenario: Testimonials section has overlay background

- **GIVEN** I scroll to the testimonial section
- **THEN** the section has a background image with a gradient overlay (#8490ff at 90% opacity)
- **AND** the heading "Why Choose Us Your Fitness Builder" is white text

#### Scenario: Testimonial cards show user info

- **GIVEN** I view the testimonial carousel
- **THEN** each card shows a user avatar image, testimonial text, user name, and title
- **AND** the user name becomes #8490ff on hover

### Offered Services

Feature: Services offered section

#### Scenario: Offered services displays icon grid and description

- **GIVEN** I scroll to the offered services section
- **THEN** a heading "Our Offered Services" is displayed in white text
- **AND** a 3×2 grid of service icon cards is shown on the left
- **AND** a text block with heading "Content Synchronization" is shown on the right
- **AND** a "VIEW DETAILS" button is visible with gradient background

#### Scenario: Service icon card hover

- **GIVEN** I hover over a service icon card
- **THEN** it gains a 2px solid #6a9ddc border
- **AND** the box-shadow changes

#### Scenario: Service icon card responsive

- **GIVEN** I am on a viewport below 800px
- **WHEN** I view the service icon grid
- **THEN** each card stacks with bottom margin

### Facts / Stats

Feature: Statistics counter row

#### Scenario: Stats display with gradient numbers

- **GIVEN** I scroll to the facts section
- **THEN** five stat items are visible in a row
- **AND** each has a large gradient number (blue → blue-violet) and a label
- **AND** the values are "2536 Projects Completed", "6784 Really Happy Clients", "1059 Total Tasks Completed", "2239 Cups of Coffee Taken", "435 In House Professionals"

#### Scenario: Stats responsive

- **GIVEN** I am on a viewport below 800px
- **WHEN** I view the facts section
- **THEN** each stat stacks vertically with bottom margin

### Services (Dark section)

Feature: Services grid on dark background

#### Scenario: Services section has dark photo background

- **GIVEN** I scroll to the services section
- **THEN** the section has a dark photo background with a 70% black overlay
- **AND** a heading "Some Awesomeness that should share" is displayed in white
- **AND** a subtext "Who are in extremely love with eco friendly system." is shown in white

#### Scenario: Service cards display with icons

- **GIVEN** I view the services grid
- **THEN** six service cards are shown in a 3×2 grid
- **AND** each card has a Linearicons icon, a white heading, and white body text
- **AND** the services are "Expert Technicians", "Professional Service", "Great Support", "Technical Skills", "Highly Recomended", "Positive Reviews"

#### Scenario: Service card hover

- **GIVEN** I hover over a service card
- **THEN** the card gains a shadow effect

### Info / About Split

Feature: Information split layout

#### Scenario: Info section displays image and text side by side

- **GIVEN** I scroll to the info section
- **THEN** a full-width image is shown on the left half
- **AND** a text block is shown on the right half
- **AND** the heading is "Responsible Customer Support" at large size
- **AND** a "LEARN MORE" primary button is visible

#### Scenario: About section with video

- **GIVEN** I scroll to the about section
- **THEN** the left side shows a heading "We Believe that Interior beautifies the Total Architecture"
- **AND** a paragraph of text is displayed below
- **AND** a "SEE DETAILS" primary button is visible
- **AND** the right side shows a video thumbnail with a dark overlay (#8490ff at 84% opacity) and a play button

### Brand Logos

Feature: Client/brand logo row

#### Scenario: Brand logos display in grayscale

- **GIVEN** I scroll to the brand section
- **THEN** five logo images are displayed in a row
- **AND** each logo is displayed in grayscale by default
- **WHEN** I hover over a logo
- **THEN** it transitions to full color

### Contact Form

Feature: Contact form section

#### Scenario: Contact form displays heading and form fields

- **GIVEN** I scroll to the contact section
- **THEN** a heading "If you need, Just drop us a line" is displayed centered
- **AND** subtext "Who are in extremely love with eco friendly system." is shown

#### Scenario: Form fields are functional

- **GIVEN** I view the contact form
- **THEN** four fields are visible: name (text), email (email), subject (text), message (textarea)
- **AND** all fields have light gray (#f9f9ff) background
- **AND** a "SEND MESSAGE" primary button is visible below the textarea

#### Scenario: Form validates required fields

- **GIVEN** I leave all fields empty
- **WHEN** I click "Send Message"
- **THEN** the browser validation prevents submission

### Footer

Feature: Dark footer with newsletter

#### Scenario: Footer displays three columns

- **GIVEN** I view the footer
- **THEN** the background is #222
- **AND** an "About Us" column with lorem text is visible
- **AND** a "Contact Us" column with phone numbers in #8490ff is visible
- **AND** a "Newsletter" column with email input and arrow button is visible

#### Scenario: Footer bottom bar

- **GIVEN** I view the footer bottom
- **THEN** a copyright line is displayed with "Component Dock" link
- **AND** social icons (Facebook, Twitter, Dribbble, Behance) are shown on the right
- **AND** social icon backgrounds are #111, turning #8490ff on hover

#### Scenario: Newsletter form

- **GIVEN** I view the newsletter form
- **THEN** an email input with rounded white border is displayed
- **AND** a rounded submit button with #8490ff background is shown

## Verification checklist

- [ ] All sections present in correct order matching the original
- [ ] Font loaded: Poppins via Google Fonts
- [ ] Primary color #8490ff used for nav active, links, accents
- [ ] Gradient #62bdfc → #8490ff on buttons and overlay backgrounds
- [ ] Hero: brush-stroke aesthetic, agent photo placeholder, headline, CTA
- [ ] Features: 3-column with illustrated icons
- [ ] Testimonials: carousel with avatars over dark overlay
- [ ] Offered services: icon grid + text split, hover border effect
- [ ] Facts: 5 stats with gradient text
- [ ] Services: 6 cards over dark photo background with overlay
- [ ] Info/About: two split sections with images and CTAs
- [ ] Brand logos: grayscale → color on hover
- [ ] Contact form: name, email, subject, message fields + submit
- [ ] Footer: dark bg, 3 columns, newsletter, social icons, copyright links to Component Dock
- [ ] Responsive: mobile nav, stacked layouts below 768px/800px
- [ ] No ColorLib references in app code — provenance only in spec
- [ ] Footer links to https://www.componentdock.com/ branded as "Component Dock"

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/callcenter/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#5ec375` — nearest `#73fbaf` (d=83)
- `#f2c94c` — nearest `#f09359` (d=56)
<!-- live-palette-unverified:end -->
