# Template: Studioforge (Creative Digital Agency)

## Purpose

Recreation of **ColorLib "Ilene Berg"** — a fullscreen creative digital agency / portfolio template.

- **Source slug:** `ilene-berg`
- **ColorLib page:** https://colorlib.com/wp/template/ilene-berg/
- **Live preview:** https://preview.colorlib.com/theme/ilene-berg/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens

| Token | Value | Source |
|---|---|---|
| Brand purple | `#8560f6` | Selection highlight, primary button bg, bold/italic text accent, banner overlay |
| Pink accent | `#f3487f` | Service area background, heart icon in footer |
| Yellow accent | `#f9c400` | Newsletter/subscription area bg, footer link color, social icon hover |
| Teal accent | `#5dd1e3` | Projects section background |
| Footer bg | `#4e5375` | Footer background, dark blue-grey |
| History section bg | `#f2f5f7` | Light grey |
| Body text | `#777777` | Paragraph text, links default |
| Headings | `#222222` | All h1–h6 |
| White | `#fff` | Banner text, service cards, button text |
| Font family | `"Poppins", sans-serif` | All text |
| Button radius | `20px` (pill shape) | `.primary-btn` border-radius |
| Button uppercase | `text-transform: uppercase` | All primary buttons |
| Banner heading | `60px`, weight 100 | Banner h1, light/hero weight |
| Section padding | `100px 0` | Standard section-gap |
| Service card top height | `260px` | White top area of service cards |

## Section structure (order from live preview DOM)

1. **Header** — Logo (left) + nav links (Home, Generic, Elements) + hamburger menu icon (hidden nav, toggle). Transparent over banner.
2. **Banner** — Fullscreen with background image, purple overlay (`rgba(132,96,246,0.8)`), centered white heading ("No Need to find, This is the place on web"), subtext paragraph, pill-shaped "Get Started" CTA button with arrow.
3. **History** — "Glorious History" heading centered, tabbed content panel (History / Mission / Vision tabs with icons lnr-map, lnr-bullhorn, lnr-sun) alongside a thumbnail image. Light grey background (`#f2f5f7`).
4. **Service Area** — 4-column grid of service cards on pink background (`#f3487f`). Cards alternate layout: columns 1 & 3 have icon+title on top (white bg), description on bottom; columns 2 & 4 are reversed. Services: Software, Wordpress, Front End, UX Design. Each card has a Linearicons icon.
5. **Experience** — "Beautiful Experiences" heading centered, 2+1 column layout: two image thumbnails on left, vector content (heading + subhead + paragraph + "View Details" white-bg button) on right. White background.
6. **Projects** — "Some Projects" heading (white text), project carousel cards with 8/4 column split (image left, text content right). Teal background (`#5dd1e3`). Carousel with multiple slides.
7. **Contact** — "Keep in Touch" heading centered, 2-column form: name input, email input (side by side), full-width textarea, "Send Message" button (white-bg variant with arrow). White background.
8. **Newsletter/Subscription** — "Together, Let's Make this happen" heading (white text), email input field with pill shape (bg `#f9f9ff`), "Get Started" white-bg button positioned inside input. Yellow background (`#f9c400`).
9. **Footer** — Dark blue-grey background (`#4e5375`). 4 columns: About Agency links, Navigation Links × 2, Instafeed (8 thumbnail images in 4×2 grid). Footer bottom: copyright text, social icons (Facebook, Twitter, Dribbble, Behance) with yellow hover.

## Gherkin scenarios

```gherkin
Feature: Studioforge — Creative Digital Agency Template

  Background:
    Given the Studioforge app is loaded

  Scenario: Header renders with logo and navigation
    Then a header with logo image is visible
    And navigation links "Home", "Generic", "Elements" are present
    And a hamburger menu icon is visible

  Scenario: Banner displays fullscreen hero
    Given the banner section is visible
    Then a heading "No Need to find" is displayed in white text
    And a subtext paragraph is displayed below the heading
    And a "Get Started" pill button with arrow icon is displayed
    And the banner has a purple overlay

  Scenario: History section shows tabbed content
    Given the history section is visible
    Then a "Glorious History" heading is displayed
    And three tabs are present: "History", "Mission", "Vision"
    And the "History" tab is active by default
    When the user clicks the "Mission" tab
    Then the Mission tab content is displayed
    And the History tab content is hidden

  Scenario: Service area shows four services in colored section
    Given the service area is visible
    Then four service cards are displayed in a row
    And the services are: "Software", "Wordpress", "Front End", "UX Design"
    And the section background is pink

  Scenario: Experience section shows images and content
    Given the experience section is visible
    Then a "Beautiful Experiences" heading is displayed
    And two thumbnail images are visible on the left
    And a "Vector Illustration" content block is on the right
    And a "View Details" white button is present

  Scenario: Projects section shows carousel on teal background
    Given the projects section is visible
    Then a "Some Projects" heading is displayed in white
    And project carousel slides are visible
    And the section background is teal

  Scenario: Contact form renders with inputs and submit
    Given the contact section is visible
    Then a "Keep in Touch" heading is displayed
    And a name input field is present
    And an email input field is present
    And a message textarea is present
    And a "Send Message" button is present

  Scenario: Newsletter subscription section
    Given the newsletter section is visible
    Then a "Together, Let's Make this happen" heading is displayed in white
    And an email input field is present
    And a "Get Started" button is present
    And the section background is yellow

  Scenario: Footer renders with links and social icons
    Given the footer is visible
    Then footer columns with navigation links are displayed
    And social media icons are present (Facebook, Twitter, Dribbble, Behance)
    And a copyright text is displayed
    And a "Component Dock" attribution link is present
```

## Verification checklist

- [ ] Header with logo + nav + hamburger toggle
- [ ] Fullscreen banner with purple overlay + hero text + CTA pill button
- [ ] History section with tabbed content (3 tabs) + thumbnail image, grey bg
- [ ] Service area: 4-column grid on pink bg, alternating card layouts
- [ ] Experience section: images + text content + white button
- [ ] Projects carousel on teal background, white text
- [ ] Contact form: name, email, textarea, send button
- [ ] Newsletter section: yellow bg, email input, CTA button
- [ ] Footer: dark blue-grey bg, 4-column layout, social icons, copyright
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Poppins font loaded via Google Fonts link
- [ ] Design tokens in index.css @theme
- [ ] Tailwind classes used throughout (cn() for variants)
- [ ] All sections responsive (mobile-first)
