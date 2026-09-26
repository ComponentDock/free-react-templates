# Template: Satinflow (Portfolio / Personal)

## Purpose

Satinflow is a single-page personal portfolio template in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Satner" free template (source:
https://colorlib.com/wp/template/satner/, preview:
https://preview.colorlib.com/theme/satner/), built under a DIFFERENT name
(**Satinflow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based personal portfolio with a fixed navbar, a
full-width banner hero with split layout (text left, portrait illustration right),
an about section, brand logos carousel, services grid, filterable portfolio grid,
testimonials carousel, newsletter signup, and a simple centered footer with social
links. The design uses a blue-to-purple gradient (#4458dc → #854fee) as the
signature brand accent throughout (CTAs, hover states, newsletter, footer links),
clean white and very-light-lavender (#fcf8ff) section backgrounds, Rubik headings
+ Roboto body, and rounded (5px radius) buttons with gradient fill + box-shadow.

**WHAT MAKES SATINFLOW DISTINCT (signature behaviors):**

1. **Gradient-accent personal portfolio.** The primary gradient `linear-gradient(90deg, #4458dc 0%, #854fee 100%)` is the dominant accent across the entire page — used in primary buttons (with double-border transparent trick + radial gradient), hover states, active nav links, newsletter submit button, footer links, and testimonial hover shadow tint. The body background is a subtle textured image (dots pattern) on white.
2. **Split hero with illustration.** The hero area has a full-width background image with a 7-col text block (greeting "Hello", name "I am [Name]", role/title, two CTAs: solid "Hire Me" + outlined "Get CV") and a 5-col portrait illustration on the right (hidden on mobile). The hero has generous top padding (~150px) and the banner_content text is uppercase, with an animated underline decoration on the h3 via `:after` pseudo-element.
3. **Brand logos grid.** A 3×3 grid of greyscale client/partner logos in bordered boxes (170×100px, 1px #eee border), centered in a 6-col container. On hover, the border changes to the purple accent. These are static (no carousel behavior despite being called "brand area").
4. **4-column services grid.** Four feature cards (#f9f9fd background) in a row, each with an icon image, uppercase title, and short description. On hover, the card lifts with a purple-tinted shadow (`box-shadow: 0px 15px 30px rgba(77, 87, 222, 0.3)`) and background turns white.
5. **Filterable portfolio.** A filter bar (All | Popular | Latest | Following) with active state using the gradient. 3-column grid of portfolio items, each with an image, dark overlay on hover, and a centered cross icon that fades in. Below each image: uppercase title + category text. Items are tagged by category class for JS filtering.
6. **Testimonials carousel.** Owl-carousel of testimonial cards, each with a 4-col photo (rounded 5px) + 8-col text (name uppercase + quote). Cards have generous padding (50px 55px) and soft shadow (`0px 15px 30px rgba(221, 221, 221, 0.3)`). On hover the shadow shifts to purple tint. Auto-sliding carousel.
7. **Newsletter section with background image.** Full-width section with a background image, white text, centered heading "GET UPDATE FROM ANYWHERE", description, and a subscription form (380px transparent input with white border + white "Get Started" button). The button uses a white background with gradient text on hover.
8. **Centered minimal footer.** Light lavender (#fcf8ff) background, centered logo image, "Follow Me" heading, four social icons (Facebook, Twitter, Dribbble, Behance) in grey (#788489) that turn purple on hover, and a copyright line. No columns, no complex layout — just stacked centered elements.

## Naming

The ColorLib source name "Satner" is FORBIDDEN as the app name.

- **New name:** `satinflow`
- **App folder:** `apps/satinflow`
- **Package:** `@free-react-templates/satinflow`
- **Surge domain:** `satinflow.free.componentdock.com`
- **Source:** ColorLib Satner → https://colorlib.com/wp/template/satner/
- **Preview analyzed:** https://preview.colorlib.com/theme/satner/

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `brand-gradient` | `linear-gradient(90deg, #4458dc 0%, #854fee 100%)` | Primary buttons, hover states, active nav, newsletter button, footer links |
| `brand-blue` | `#4458dc` | Gradient start, active nav link color |
| `brand-purple` | `#854fee` | Gradient end, footer link hover, testimonial hover shadow |
| `brand-purple-rgb` | `118, 85, 225` | Shadow tint `rgba(118, 85, 225, 0.3)` |
| `brand-blue-rgb` | `77, 87, 222` | Feature card hover shadow `rgba(77, 87, 222, 0.3)` |
| `heading-font` | `"Rubik", sans-serif` | All headings (h1–h6), nav links, buttons, brand titles |
| `body-font` | `"Roboto", sans-serif` | Body text, paragraphs, form inputs |
| `text-dark` | `#000000` | Headings, nav links, portfolio titles |
| `text-body` | `#777777` | Body paragraphs, descriptions |
| `text-white` | `#ffffff` | Hero buttons, newsletter text |
| `bg-white` | `#ffffff` | Header, feature cards (hover), nav background |
| `bg-light-lavender` | `#fcf8ff` | Footer background |
| `bg-feature` | `#f9f9fd` | Feature cards default background |
| `border-light` | `#eeeeee` | Brand boxes, dropdown borders |
| `social-icon` | `#788489` | Footer social icons default |
| `btn-radius` | `5px` | Buttons, portfolio images, testimonial photos |
| `section-gap` | `200px 0` (desktop) / `80px 0` (tablet) | Standard section vertical padding |
| `newsletter-bg` | `url(../img/subscribe-bg.png)` | Newsletter background image (replaced with gradient or solid) |

### Button styling

- Primary `.primary_btn`: gradient fill (`#4458dc` → `#854fee`), white text, 5px radius, `box-shadow: 0px 10px 30px rgba(118, 85, 225, 0.3)`, uppercase Rubik 500 14px, 46px line-height, padding 0 42px. On hover: white bg with purple border (`2px solid #854fee`), dark text, no shadow.
- Transparent variant `.primary_btn.tr-bg`: white bg, dark text, no shadow. On hover: gradient fill + shadow.
- Newsletter submit: white bg button, text uses gradient via background-clip.

## Section Structure (implementation order)

1. **Navbar** — fixed/absolute top, logo left, nav links right (Home, About, Services, Portfolio, Contact). No dropdowns in the single-page version. Sticky on scroll with shadow.
2. **Hero** — full-width background image (or gradient fallback), split: 7-col text (greeting, name, role, 2 CTA buttons) + 5-col portrait illustration. Hidden portrait on mobile.
3. **About** — split: 5-col image left + offset 5-col text right (heading, paragraphs, Download CV button). Section gap padding.
4. **Brand Logos** — centered 6-col grid of 9 logo boxes (3×3), bordered, greyscale. Section gap bottom.
5. **Services** — section title ("Service Offers"), subtitle, 4-column feature cards (icon, title, description) with hover lift effect.
6. **Portfolio** — section title ("Quality Work / Recently Done Project"), filter tabs, 3-column grid of portfolio items with overlay + icon on hover, title + category below.
7. **Testimonials** — section title ("Client Say About Me"), subtitle, carousel of testimonial cards (photo 4-col + text 8-col). Auto-slide.
8. **Newsletter** — full-width bg, centered white text heading, description, email input + submit button. Background image replaced with gradient or solid dark.
9. **Footer** — centered logo, "Follow Me" heading, social icons row, copyright line with Component Dock link. Light lavender background.

## Gherkin Requirements

### Feature: Satinflow Portfolio Template

  Scenario: Page renders all sections in correct order
    Given the user navigates to the Satinflow homepage
    Then the following sections are visible in order:
      | section      |
      | Navbar       |
      | Hero         |
      | About        |
      | Brand Logos  |
      | Services     |
      | Portfolio    |
      | Testimonials |
      | Newsletter   |
      | Footer       |

  Scenario: Navbar displays correct links
    Given the user is on the Satinflow homepage
    Then the navbar contains links for "Home", "About", "Services", "Portfolio", "Contact"
    And the navbar logo is visible on the left

  Scenario: Hero section displays greeting and CTAs
    Given the user views the hero section
    Then a greeting text "Hello" is displayed
    And a name heading is displayed
    And a role/title subtitle is displayed
    And two call-to-action buttons are visible: "Hire Me" and "Get CV"

  Scenario: Hero section layout on desktop
    Given the user views the hero section on a desktop viewport
    Then the text content occupies the left portion
    And a portrait illustration occupies the right portion

  Scenario: Hero section layout on mobile
    Given the user views the hero section on a mobile viewport
    Then the portrait illustration is hidden
    And the text content is full-width

  Scenario: About section displays introduction
    Given the user views the about section
    Then an introduction image is displayed on the left
    And a heading "Let's Introduce about myself" is displayed on the right
    And descriptive paragraphs are visible
    And a "Download CV" button is displayed

  Scenario: Brand logos section displays partner logos
    Given the user views the brand logos section
    Then 9 logo boxes are displayed in a 3-column grid
    And each logo box has a light border
    And hovering a logo box highlights the border with the brand purple color

  Scenario: Services section displays 4 feature cards
    Given the user views the services section
    Then 4 feature cards are displayed in a row
    And each card has an icon, a title, and a description
    And hovering a card applies a purple-tinted shadow and white background

  Scenario: Portfolio section displays filterable grid
    Given the user views the portfolio section
    Then filter tabs are displayed: "All", "Popular", "Latest", "Following"
    And a 3-column grid of portfolio items is visible
    And each item has an image with an overlay
    And hovering an item reveals a centered icon

  Scenario: Testimonials section displays carousel
    Given the user views the testimonials section
    Then a carousel of testimonial cards is displayed
    And each card has a client photo on the left and text on the right
    And the carousel auto-slides between testimonials

  Scenario: Newsletter section displays subscription form
    Given the user views the newsletter section
    Then a heading "Get Update From Anywhere" is displayed
    And an email input field is visible
    And a "Get Started" submit button is visible

  Scenario: Footer displays social links and copyright
    Given the user views the footer
    Then the logo is centered at the top
    And a "Follow Me" heading is displayed
    And social icons for Facebook, Twitter, Dribbble, and Behance are visible
    And a copyright line with a link to "Component Dock" is displayed

  Scenario: Brand gradient is applied to primary buttons
    Given the user views any primary button
    Then the button background uses a blue-to-purple gradient
    And the button has a 5px border radius
    And the button text is uppercase and white

  Scenario: Responsive breakpoints
    Given the user resizes the viewport to tablet width
    Then section padding reduces from 200px to 80px
    And the services grid stacks to 2 columns
    And the portfolio grid stacks to 2 columns

  Scenario: Responsive breakpoints mobile
    Given the user resizes the viewport to mobile width
    Then the navbar collapses to a hamburger menu
    And the hero portrait is hidden
    And the services grid stacks to 1 column
    And the portfolio grid stacks to 1 column
    And the newsletter input width reduces

## Verification Checklist

- [ ] All 9 sections render in the correct order
- [ ] Navbar is fixed/sticky with shadow on scroll
- [ ] Hero split layout works (text left, illustration right) on desktop
- [ ] Hero portrait hidden on mobile, text full-width
- [ ] About section has image left, text right layout
- [ ] Brand logos render as 3×3 grid with bordered boxes
- [ ] Brand logo hover highlights border in purple
- [ ] Services section has 4 cards with icons, titles, descriptions
- [ ] Feature card hover applies purple shadow + white bg
- [ ] Portfolio filter tabs work (All, Popular, Latest, Following)
- [ ] Portfolio items show overlay + icon on hover
- [ ] Testimonials carousel auto-slides
- [ ] Newsletter section has background, white text, email input + button
- [ ] Footer is centered with logo, social icons, copyright
- [ ] Footer links to Component Dock
- [ ] Primary buttons use gradient (#4458dc → #854fee) with 5px radius
- [ ] Transparent button variant works (white bg → gradient on hover)
- [ ] Fonts: Rubik for headings, Roboto for body
- [ ] Section spacing: 200px desktop, 80px tablet
- [ ] Responsive: all sections adapt at tablet/mobile breakpoints
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] 100% test coverage on all new components
