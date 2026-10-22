# Template: Wideshot (Creative Digital Agency)
<!-- prep-status: shipped-as=lumina -->
> **SHIPPED-UNDER** — the ColorLib `ilene-berg` design this prep describes already
> ships as `apps/lumina` (<https://lumina.free.componentdock.com>).
> Do not scaffold `apps/wideshot`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lumina/spec.md`.

## Purpose

Recreation of ColorLib "Ilene Berg" as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source**: https://colorlib.com/wp/template/ilene-berg/
- **Preview**: https://preview.colorlib.com/theme/ilene-berg/
- **Stack**: Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)
- **Category**: Creative Digital Agency / Portfolio

## Section Structure (from live preview DOM)

1. **Header** — fixed/absolute top bar with logo left, nav links right (Home, Generic, Elements), hamburger menu icon
2. **Banner (Hero)** — fullscreen section with background image, purple overlay (`rgba(132,96,246,0.8)`), centered white heading + subtext + CTA button
3. **History** — light gray background (`#f2f5f7`), section title "Glorious History", tabbed interface (History / Mission / Vision) with left thumbnail image
4. **Services** — pink background (`#f3487f`), 4-column grid of service cards (Software, Wordpress, Front End, UX Design), alternating top/bottom layout with hover flip effect
5. **Experience** — white background, "Beautiful Experiences" title, 2-column layout: left side two stacked images, right side "Vector Illustration" text block with CTA button
6. **Projects** — teal background (`#5dd1e3`), "Some Projects" title, carousel of project items (8-col image + 4-col text per item)
7. **Contact** — white background, "Keep in Touch" title, form with name + email inputs, textarea, send button
8. **Newsletter/Subscription** — yellow background (`#f9c400`), "Together, Let's Make this happen" title, email input + Get Started button
9. **Footer** — dark blue-gray background (`#4e5375`), 4-column layout: About Agency links, two Navigation Links columns, Instafeed grid; bottom bar with copyright + social icons (Facebook, Twitter, Dribbble, Behance)

## Design Tokens (extracted from preview CSS)

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Brand Primary | `#8460f6` | Selection, banner overlay, button hover, footer link hover |
| Brand Accent (alt) | `#8560f6` | Inline bold/italic, white-bg button text |
| Text Body | `#777777` | Body text, links, descriptions |
| Text Heading | `#222222` | h1–h6, .h1–.h6 |
| Service Area BG | `#f3487f` | Services section background, service icon color |
| Service Bottom BG | `#6f7598` | Service card bottom half |
| Projects BG | `#5dd1e3` | Projects section background |
| Newsletter BG | `#f9c400` | Newsletter/subscription section |
| History BG | `#f2f5f7` | History section background |
| Footer BG | `#4e5375` | Footer background |
| Overlay BG | `rgba(132,96,246,0.8)` | Banner hero overlay |
| White | `#fff` | Card tops, button backgrounds, text on dark |
| Light Gray BG | `#f9f9ff` | Alternating section tint |
| Border Light | `#eee` | Button border, dividers |

### Typography

| Property | Value |
|----------|-------|
| Font Family | `"Poppins", sans-serif` |
| Body Weight | `300` |
| Heading Weight | `500` |
| Body Size | `14px` |
| h1 | `36px` |
| h2 | `30px` |
| h3 | `24px` |
| h4 | `18px` |
| h5 | `16px` |
| h6 | `14px` |
| Line Height | `1.5em` |

### Buttons

| Property | Value |
|----------|-------|
| Primary Button | `border-radius: 20px`, transparent bg, white border, white text |
| Primary Hover | margin-right transition (arrow slides right) |
| White-bg Variant | white bg, `#eee` border, `#8460f6` text, hover fills brand color |
| Padding | `0 30px`, line-height `40px` |

### Layout

| Property | Value |
|----------|-------|
| Max Width | `1280px` (container) |
| Section Padding | `100px 0` (`.section-gap`) |
| Service Card Height | `260px` top + `260px` bottom |
| Banner Height | `100vh` (fullscreen), mobile `600px` |

## Requirements

### Feature: Wideshot Creative Agency Template

#### Scenario: Header renders with logo and navigation

- **GIVEN** the user loads the page
- **WHEN** the header area is visible
- **THEN** the logo is displayed on the left
- **AND** navigation links (Home, Generic, Elements) are visible on the right
- **AND** a hamburger menu icon is present

#### Scenario: Hero banner displays fullscreen with overlay

- **GIVEN** the user loads the page
- **WHEN** the banner section is visible
- **THEN** it occupies the full viewport height
- **AND** a semi-transparent purple overlay is applied over the background image
- **AND** a white heading "No Need to find, This is the place on web" is centered
- **AND** a subtitle paragraph is displayed below the heading
- **AND** a "Get Started" CTA button with arrow icon is shown

#### Scenario: History section has tabbed content

- **GIVEN** the user scrolls to the history section
- **WHEN** the section is visible
- **THEN** a "Glorious History" title is centered
- **AND** a thumbnail image appears on the left (col-4)
- **AND** three tabs appear: History, Mission, Vision
- **AND** the History tab is active by default showing content
- **AND** clicking Mission tab switches to mission content
- **AND** clicking Vision tab switches to vision content

#### Scenario: Services section shows 4 service cards on pink background

- **GIVEN** the user scrolls to the services section
- **WHEN** the section is visible
- **THEN** the background is pink (#f3487f)
- **AND** four service cards are displayed in a row (col-md-3 each)
- **AND** each card has an icon on top, title, and description
- **AND** the services are: Software, Wordpress, Front End, UX Design
- **AND** alternating cards have top/bottom layout (flip order)
- **AND** hovering a card flips the layout with color transition

#### Scenario: Experience section shows images with text

- **GIVEN** the user scrolls to the experience section
- **WHEN** the section is visible
- **THEN** "Beautiful Experiences" title is centered
- **AND** two thumbnail images appear on the left (col-3 each)
- **AND** a "Vector Illustration" text block with heading, subheading, description, and "View Details" button appears on the right (col-6)

#### Scenario: Projects carousel displays on teal background

- **GIVEN** the user scrolls to the projects section
- **WHEN** the section is visible
- **THEN** the background is teal (#5dd1e3)
- **AND** "Some Projects" title is white and centered
- **AND** a carousel shows project items
- **AND** each item has a large image (col-8) and text content (col-4)
- **AND** each item shows a title and description paragraph

#### Scenario: Contact form accepts user input

- **GIVEN** the user scrolls to the contact section
- **WHEN** the section is visible
- **THEN** "Keep in Touch" title is centered
- **AND** a name input field is displayed
- **AND** an email input field is displayed
- **AND** a message textarea is displayed
- **AND** a "Send Message" button with white background is shown
- **AND** form fields are required

#### Scenario: Newsletter subscription section on yellow background

- **GIVEN** the user scrolls to the newsletter section
- **WHEN** the section is visible
- **THEN** the background is yellow (#f9c400)
- **AND** "Together, Let's Make this happen" title is white and centered
- **AND** an email input field is displayed
- **AND** a "Get Started" button with white background is shown

#### Scenario: Footer displays with 4-column layout

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** the background is dark blue-gray (#4e5375)
- **AND** four columns are displayed: About Agency, two Navigation Links columns, Instafeed
- **AND** footer links are white with purple hover
- **AND** an Instafeed grid shows 8 thumbnail images (2x4)
- **AND** a bottom bar has copyright text with heart icon and social links (Facebook, Twitter, Dribbble, Behance)
- **AND** the footer links to https://www.componentdock.com/

#### Scenario: Responsive behavior on mobile

- **GIVEN** the user views the page on a mobile device (≤767px)
- **WHEN** the page loads
- **THEN** the banner height is set to 600px
- **AND** the service cards stack vertically
- **AND** the project carousel items stack vertically
- **AND** the footer columns stack vertically

## Verification Checklist

- [ ] Header renders with logo and nav links
- [ ] Hero banner is fullscreen with purple overlay and centered content
- [ ] History section has working tabbed interface (History/Mission/Vision)
- [ ] Services section has 4 cards on pink background with hover effects
- [ ] Experience section has images + text layout
- [ ] Projects section has carousel on teal background
- [ ] Contact form has name, email, message fields with validation
- [ ] Newsletter section has yellow background with email + CTA
- [ ] Footer has 4-column layout with social links
- [ ] Footer links to https://www.componentdock.com/
- [ ] All design tokens match: Poppins font, #8460f6 brand, section bg colors
- [ ] Responsive layout works on mobile
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] `npm run spec:validate` passes
