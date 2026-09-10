# Template: BizNode (Small Company / Creative Agency)

## Purpose

Recreation of the ColorLib **Bbs** template — a small company / creative agency
website template. This spec covers a React 19 + Vite + Tailwind 4 + TypeScript
implementation faithful to the original design.

- **Source slug:** `bbs`
- **ColorLib page:** https://colorlib.com/wp/template/bbs/
- **Live preview:** https://preview.colorlib.com/theme/bbs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bbs-free-small-company-website-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/biznode`
- **Deploy target:** `biznode.free.componentdock.com`

## Visual design notes

The template features a distinctive **two-part layout**:
- The hero section sits inside a constrained-width wrapper (68–75%) on a white
  page background, with a **purple/violet banner image** containing dark purple
  semi-transparent circles as background texture.
- Below that, the **featured area** is a clean white 2×2 grid of icon+text
  feature blocks.
- A **video area** uses a full-bleed background image (office/tech scene) with
  a dark overlay and centered headline + CTA.
- A **blog area** shows 3 equal-width cards with image thumbnails.
- A **story area** is a dark/colored section with white text headline.
- A **subscription/newsletter area** has a centered email input with gradient
  button.
- The **footer** has centered nav links, social icons, and a copyright line.

## Design tokens

Extracted from the live preview CSS (`main.css`) at
`https://preview.colorlib.com/theme/bbs/css/main.css`:

### Colors

| Token            | Value     | Usage                                              |
| ---------------- | --------- | -------------------------------------------------- |
| primary          | `#f58e9a` | Primary button base, link color                    |
| primary-hover    | `#fff`    | Button hover background                            |
| accent           | `#fbe44c` | Gradient end in primary-btn gradient               |
| gradient         | `linear-gradient(0deg, #f58e9a 0%, #fbe44c 100%)` | Button gradient background |
| text-heading     | `#222222` | Headings, feature titles, nav                       |
| text-body        | `#777777` | Body text, descriptions                             |
| white            | `#fff`    | Section backgrounds, button text (default)          |
| bg-light         | `#f9f9ff` | Default button background, subtle page tint         |
| bg-banner-purple | (image)   | Hero background — purple circles on dark purple     |
| success          | `#73fbaf` | Success button variant (not primary)                |
| info             | `#6382e6` | Info button variant (not primary)                   |
| danger           | `#e66686` | Danger/warning button variant (not primary)         |

### Typography

| Token     | Value                    | Usage                          |
| --------- | ------------------------ | ------------------------------ |
| font-body | `"Poppins", sans-serif`  | All text                       |
| weight-300 | 300                     | Body text (default)            |
| weight-500 | 500                     | Mid-weight elements            |
| weight-600 | 600                     | Semi-bold headings             |
| weight-900 | 900                     | Extra-bold feature headings    |
| font-size  | 14px (body)             | Base body text                 |

### Buttons

| Token          | Value    | Usage                               |
| -------------- | -------- | ----------------------------------- |
| border-radius  | 20px     | `.primary-btn` — pill-shaped        |
| padding        | 0 30px   | Horizontal padding                  |
| line-height    | 40px     | Button height                       |
| hover-text     | `#222222` | Text color on hover               |
| hover-bg       | `#fff`   | Background on hover (border stays)  |

### Layout

| Token                  | Value                      | Usage                          |
| ---------------------- | -------------------------- | ------------------------------ |
| wrapper-width          | 68.75% (75% ≥1200px)       | `.main-wrapper-first` (hero)   |
| full-width-wrapper     | 100%                       | `.main-wrapper` (rest of page) |
| banner-height          | 600px                      | Hero banner section            |
| container              | Bootstrap-like `.container`| Content centers                |

## Gherkin requirements

### Feature: BizNode — Small Company / Creative Agency Website

  Scenario: Page loads with header and navigation
    Given the user visits the BizNode homepage
    Then a header is visible with a logo on the left
    And navigation links "Home", "Generic", "Elements" are present
    And a hamburger menu icon is visible (mobile toggle)

  Scenario: Hero banner displays correctly
    Given the user visits the BizNode homepage
    Then a hero banner section is displayed
    And the heading reads "we're Creative" (stacked, uppercase)
    And a "Get Started" button with pill shape is centered below the heading
    And the banner background shows a purple circular pattern

  Scenario: Featured area shows four feature blocks
    Given the user scrolls to the featured area
    Then four feature blocks are displayed in a 2-column grid
    And each block has an icon, a heading, and a description paragraph
    And the feature headings are "Unlimited Colors", "Smart Security",
         "Endless Support", and a fourth feature
    And the section has a white background

  Scenario: Video area displays with background and overlay
    Given the user scrolls to the video area
    Then a full-width background image is displayed
    And a dark semi-transparent overlay covers the background
    And a heading "Liquid Crystals" and description text are centered
    And the section is visually distinct from adjacent sections

  Scenario: Blog area shows three blog cards
    Given the user scrolls to the blog area
    Then three blog cards are displayed side by side (3-column layout)
    And each card has an image thumbnail at the top
    And each card has a centered heading and description below
    And the card headings are "Ultimate pet lover", "Upcoming role model",
         and "Colors of Life"

  Scenario: Story area has dark background with white text
    Given the user scrolls to the story area
    Then a dark/colored background section is displayed
    And the heading "Crafting Our Experiences" is shown in white
    And a white paragraph of body text is below the heading

  Scenario: Subscription area accepts email signup
    Given the user scrolls to the subscription area
    Then a heading "Subscribe Newsletter" is centered
    And an email input field with placeholder "Email address" is shown
    And a "Get Started" gradient button is next to the input
    And the button has a pill shape (border-radius 20px)

  Scenario: Footer shows navigation and social links
    Given the user scrolls to the footer
    Then footer navigation links "Home", "Generic", "Elements" are present
    And social media icons (Facebook, Twitter, Dribbble, Behance) are displayed
    And a copyright line is shown at the bottom
    And the copyright links to Component Dock

  Scenario: Primary button gradient renders correctly
    Given the user hovers over the "Get Started" button
    Then the button background transitions from gradient to white
    And the text color transitions to dark (#222222)
    And the transition is smooth

  Scenario: Responsive layout adapts to mobile
    Given the user resizes the browser to mobile width (< 768px)
    Then the wrapper width expands to 97%
    And the hamburger menu becomes interactive
    And feature blocks stack vertically (single column)
    And blog cards stack vertically (single column)

## Verification checklist

- [ ] Header with logo + nav + hamburger renders
- [ ] Hero banner with purple background, "we're Creative" heading, "Get Started" CTA
- [ ] Featured area: 2×2 grid, 4 feature blocks with icons
- [ ] Video area: background image, dark overlay, centered text
- [ ] Blog area: 3 cards with thumbnails, centered titles
- [ ] Story area: dark background, "Crafting Our Experiences" heading
- [ ] Subscription area: email input + gradient "Get Started" button
- [ ] Footer: nav links, social icons, copyright linking Component Dock
- [ ] Primary button gradient (#f58e9a → #fbe44c), pill shape, hover state
- [ ] Poppins font family applied throughout
- [ ] Responsive layout (mobile, tablet, desktop breakpoints)
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` set to `biznode.free.componentdock.com`
- [ ] `homepage` in `package.json` set to `https://biznode.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
