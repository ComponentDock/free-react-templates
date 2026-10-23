# Template: Indiglow (Business / Corporate)
<!-- prep-status: shipped-as=azureline -->
> **SHIPPED-UNDER** — the ColorLib `blueline` design this prep describes already
> ships as `apps/azureline` (<https://azureline.free.componentdock.com>).
> Do not scaffold `apps/indiglow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-azureline/spec.md`.

## Purpose

Recreation of ColorLib "Blueline" — a fullscreen business/corporate single-page website template.

- **Source slug:** `blueline`
- **ColorLib URL:** https://colorlib.com/wp/template/blueline/
- **Preview URL:** https://preview.colorlib.com/theme/blueline/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/blueline-free-fullscreen-business-website-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New name:** `indiglow` (apps/indiglow, @free-react-templates/indiglow)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/blueline/css/main.css` and preview DOM analysis.

### Colors

| Token           | Value     | Usage                                                          |
| --------------- | --------- | -------------------------------------------------------------- |
| Brand primary   | `#2954c9` | Buttons, links, accents, ordered list numbers                  |
| Gradient start  | `#3c50ca` | Primary-btn gradient top, p1-gradient-bg                       |
| Gradient end    | `#77d5f7` | Primary-btn gradient bottom, selection highlight, footer links |
| Body background | `#f9f9ff` | Light lavender page background, input backgrounds              |
| Text body       | `#777777` | Body paragraphs, input placeholders                            |
| Headings        | `#222222` | All h1–h6 elements                                             |
| Service area bg | `#000000` | Left half of services section                                  |
| Footer bg       | `#000000` | Footer background                                              |
| White           | `#FFFFFF` | Service right panel, subscription bg, video border             |

### Typography

| Property                                                    | Value                                 |
| ----------------------------------------------------------- | ------------------------------------- |
| Font family                                                 | `"Poppins", sans-serif`               |
| Body weight                                                 | 300                                   |
| Body size                                                   | 14px                                  |
| Body line-height                                            | 1.5em (base) / 1.65em (body override) |
| h1 size                                                     | 36px (banner h1 = 124px desktop)      |
| h2 size                                                     | 30px                                  |
| h3 size                                                     | 24px                                  |
| h4 size                                                     | 18px                                  |
| Heading weight                                              | 600                                   |
| Banner h1 weight                                            | 300, letter-spacing 25px, text-shadow |
| Light headings (video, services, latest-work, subscription) | weight 200                            |
| Bold spans in light headings                                | weight 600                            |

### Buttons

| Property                | Value                                             |
| ----------------------- | ------------------------------------------------- |
| `.primary-btn` shape    | Pill (border-radius: 20px via `.circle` modifier) |
| `.primary-btn` gradient | `linear-gradient(0deg, #3c50ca, #77d5f7)`         |
| `.primary-btn` text     | Uppercase, weight 500, white text in span         |
| Default button          | bg #f9f9ff, border transparent                    |

### Layout / Spacing

| Property                    | Value                                       |
| --------------------------- | ------------------------------------------- |
| Container                   | Bootstrap-style, max-width ~1140px          |
| Feature area padding-bottom | 200px                                       |
| Section gaps                | 120px (`.section-gap`)                      |
| Feature number font-size    | 48px                                        |
| Feature h2                  | 18px, uppercase, letter-spacing 1.25px      |
| Video embed                 | 20px solid #f3f3f3 border, min-height 450px |
| Service cards               | 40px 50px padding, 1px border #eeeeee80     |
| Contact form padding        | 0 70px                                      |
| Newsletter input            | border-radius 25px, line-height 50px        |

### Section Backgrounds

| Section                 | Background                                                          |
| ----------------------- | ------------------------------------------------------------------- |
| Banner/Hero             | Background image (header-bg.jpg), cover, centered                   |
| Features                | White (#fff)                                                        |
| Video area              | Background image (video-bg.jpg) with dark overlay (rgba(0,0,0,0.5)) |
| Services left           | Black (#000)                                                        |
| Services right          | White (#fff)                                                        |
| Latest Works            | White/light                                                         |
| Newsletter/Subscription | White (#fff)                                                        |
| Contact                 | Split — left image, right white form                                |
| Footer                  | Black (#000)                                                        |

## Requirements

### Section 1: Navbar

Feature: Navbar

#### Scenario: Desktop navbar visibility

- **GIVEN** the viewport is wider than 768px
- **WHEN** the page loads
- **THEN** the navbar is visible with logo on the left and navigation links on the right
- **AND** the navigation links include "Home", "Generic", "Elements"

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is narrower than 768px
- **WHEN** the page loads
- **THEN** a hamburger menu icon is visible
- **AND** the navigation links are hidden

#### Scenario: Navbar scrolls with page

- **GIVEN** the user scrolls down from the hero
- **THEN** the navbar scrolls out of view (absolute positioned, not fixed)

### Section 2: Hero Banner

Feature: Hero Banner

#### Scenario: Full-screen hero on desktop

- **GIVEN** the viewport is wider than 991px
- **WHEN** the page loads
- **THEN** the hero banner fills the full viewport height
- **AND** a background image is displayed covering the entire banner area
- **AND** the text "Introducing" appears as a subtitle (uppercase, weight 200)
- **AND** the template name appears as a large heading (124px, weight 300, text-shadow)

#### Scenario: Hero scales on mobile

- **GIVEN** the viewport is narrower than 768px
- **WHEN** the page loads
- **THEN** the hero banner height is reduced to approximately 600px
- **AND** the heading font size reduces to 20px

#### Scenario: Hero center alignment

- **WHEN** the hero banner renders
- **THEN** all content is centered both horizontally and vertically

### Section 3: Features

Feature: Features Section

#### Scenario: Three-column feature layout

- **GIVEN** the viewport is wider than 991px
- **WHEN** the features section is visible
- **THEN** there are exactly 3 feature cards in a row
- **AND** each card has a large gradient number (01, 02, 03) on the left
- **AND** each card has an uppercase title and description paragraph on the right

#### Scenario: Feature number styling

- **WHEN** the features section is visible
- **THEN** the numbers use a gradient text effect (blue #3c50ca to cyan #77d5f7)
- **AND** the numbers are 48px font size with text-shadow

#### Scenario: Feature section background

- **WHEN** the features section renders
- **THEN** the background is white (#fff)

### Section 4: Video

Feature: Video Section

#### Scenario: Video embed display

- **WHEN** the video section is visible
- **THEN** a video thumbnail is displayed with a dark overlay (rgba(0,0,0,0.5))
- **AND** the video frame has a thick light border (20px solid #f3f3f3)
- **AND** a centered play button icon overlays the thumbnail

#### Scenario: Video text content

- **WHEN** the video section is visible
- **THEN** a heading appears below the video with mixed weight (light + bold spans)
- **AND** a paragraph of descriptive text follows below the heading

### Section 5: Services

Feature: Services Section

#### Scenario: Split layout

- **GIVEN** the viewport is wider than 768px
- **WHEN** the services section is visible
- **THEN** the left half has a black background with white text
- **AND** the left half contains "Services" and "We Offered" headings
- **AND** the right half has a white background with 4 service cards in a 2x2 grid

#### Scenario: Service cards

- **WHEN** the services section is visible
- **THEN** each service card has an icon, uppercase title, and description
- **AND** the cards are separated by subtle borders (#eeeeee80)

#### Scenario: Mobile layout

- **GIVEN** the viewport is narrower than 768px
- **WHEN** the services section renders
- **THEN** the left black panel stacks above the service cards with vertical padding

### Section 6: Latest Works

Feature: Latest Works Section

#### Scenario: Slider display

- **WHEN** the latest works section is visible
- **THEN** a heading "Some Of our Latest Works" appears with bold "Latest Works" span
- **AND** a subtitle text is shown below the heading
- **AND** an image carousel/slider displays work samples
- **AND** previous/next navigation arrows are visible

#### Scenario: Carousel image styling

- **WHEN** the carousel renders
- **THEN** inactive images have reduced opacity (0.5)
- **AND** the active image has full opacity with a white border (20px solid #fff)

### Section 7: Newsletter / Subscription

Feature: Newsletter Section

#### Scenario: Subscription form display

- **WHEN** the newsletter section is visible
- **THEN** a centered heading "Subscribe for our Newsletter" appears (light weight, bold "Newsletter")
- **AND** a subtitle "We won't send any kind of spam" is shown
- **AND** an email input field with rounded styling (border-radius 25px) is displayed
- **AND** a gradient "Get Started" button is positioned at the right end of the input

#### Scenario: Newsletter background

- **WHEN** the newsletter section renders
- **THEN** the background is white (#fff)

### Section 8: Contact

Feature: Contact Section

#### Scenario: Split contact layout

- **GIVEN** the viewport is wider than 768px
- **WHEN** the contact section is visible
- **THEN** the left column displays a contact image
- **AND** the right column displays a contact form

#### Scenario: Contact form fields

- **WHEN** the contact form renders
- **THEN** it contains name input, email input, and message textarea
- **AND** a "Send Message" gradient button is displayed below the fields
- **AND** inputs have placeholder text and transparent background with border

#### Scenario: Mobile contact layout

- **GIVEN** the viewport is narrower than 768px
- **WHEN** the contact section renders
- **THEN** the image stacks above the form vertically

### Section 9: Footer

Feature: Footer

#### Scenario: Footer display

- **WHEN** the footer is visible
- **THEN** the background is black (#000)
- **AND** a copyright line is displayed with white text
- **AND** the footer links (heart icon and "Component Dock" link) use accent blue (#77d5f7)

#### Scenario: Footer social icons

- **WHEN** the footer renders
- **THEN** social media icons are displayed in a row (Facebook, Twitter, Dribbble, Behance)
- **AND** each icon has a dark background (#1e1e1e) with gray icon color (#777)
- **AND** on hover the icon turns white

## Verification checklist

- [x] App folder `apps/indiglow` created with correct package name `@free-react-templates/indiglow` — superseded: shipped as `apps/azureline`
- [ ] `public/CNAME` contains `indiglow.free.componentdock.com`
- [ ] `package.json` homepage is `https://indiglow.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/` (Component Dock) — NOT ColorLib
- [ ] No references to `colorlib.com` or `preview.colorlib.com` in any app source file
- [ ] Design tokens match: Poppins font, brand blue #2954c9, gradient #3c50ca→#77d5f7
- [ ] Pill-shaped gradient buttons (border-radius 20px)
- [ ] Black service area (left) + white service cards (right)
- [ ] Black footer with accent-blue links and social icons
- [ ] 9 sections in correct order: Navbar → Hero → Features → Video → Services → Latest Works → Newsletter → Contact → Footer
- [ ] Responsive: mobile hamburger menu, stacked layouts below 768px
- [ ] TDD: tests written first, 100% coverage
- [ ] `npm install` run at repo root so lockfile registers the new workspace
- [ ] `npm run spec:validate` passes
- [ ] No ColorLib provenance in app files (only in spec + TEMPLATES.md)
- [ ] Placeholder images via `https://picsum.photos/seed/indiglow-<n>/<w>/<h>`
- [ ] Google Fonts Poppins loaded via `<link>` in index.html
- [ ] Icons from `lucide-react`
