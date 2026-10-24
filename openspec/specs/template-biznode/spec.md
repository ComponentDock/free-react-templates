# Template: BizNode (Small Company / Creative Agency)
<!-- prep-status: shipped-as=crux -->
> **SHIPPED-UNDER** — the ColorLib `bbs` design this prep describes already
> ships as `apps/crux` (<https://crux.free.componentdock.com>).
> Do not scaffold `apps/biznode`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-crux/spec.md`.

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
| Surface (measured) | `#7034db` | paints it ×7 — `background-color` on `.story-area`; main.css (32,491 B, sha256 7d110e90fc67) · <https://preview.colorlib.com/theme/bbs/> |

## Requirements

### Feature: BizNode — Small Company / Creative Agency Website

#### Scenario: Page loads with header and navigation

- **GIVEN** the user visits the BizNode homepage
- **THEN** a header is visible with a logo on the left
- **AND** navigation links "Home", "Generic", "Elements" are present
- **AND** a hamburger menu icon is visible (mobile toggle)

#### Scenario: Hero banner displays correctly

- **GIVEN** the user visits the BizNode homepage
- **THEN** a hero banner section is displayed
- **AND** the heading reads "we're Creative" (stacked, uppercase)
- **AND** a "Get Started" button with pill shape is centered below the heading
- **AND** the banner background shows a purple circular pattern

#### Scenario: Featured area shows four feature blocks

- **GIVEN** the user scrolls to the featured area
- **THEN** four feature blocks are displayed in a 2-column grid
- **AND** each block has an icon, a heading, and a description paragraph
- **AND** the feature headings are "Unlimited Colors", "Smart Security",
         "Endless Support", and a fourth feature
- **AND** the section has a white background

#### Scenario: Video area displays with background and overlay

- **GIVEN** the user scrolls to the video area
- **THEN** a full-width background image is displayed
- **AND** a dark semi-transparent overlay covers the background
- **AND** a heading "Liquid Crystals" and description text are centered
- **AND** the section is visually distinct from adjacent sections

#### Scenario: Blog area shows three blog cards

- **GIVEN** the user scrolls to the blog area
- **THEN** three blog cards are displayed side by side (3-column layout)
- **AND** each card has an image thumbnail at the top
- **AND** each card has a centered heading and description below
- **AND** the card headings are "Ultimate pet lover", "Upcoming role model",
- **AND** "Colors of Life"

#### Scenario: Story area has dark background with white text

- **GIVEN** the user scrolls to the story area
- **THEN** a dark/colored background section is displayed
- **AND** the heading "Crafting Our Experiences" is shown in white
- **AND** a white paragraph of body text is below the heading

#### Scenario: Subscription area accepts email signup

- **GIVEN** the user scrolls to the subscription area
- **THEN** a heading "Subscribe Newsletter" is centered
- **AND** an email input field with placeholder "Email address" is shown
- **AND** a "Get Started" gradient button is next to the input
- **AND** the button has a pill shape (border-radius 20px)

#### Scenario: Footer shows navigation and social links

- **GIVEN** the user scrolls to the footer
- **THEN** footer navigation links "Home", "Generic", "Elements" are present
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance) are displayed
- **AND** a copyright line is shown at the bottom
- **AND** the copyright links to Component Dock

#### Scenario: Primary button gradient renders correctly

- **GIVEN** the user hovers over the "Get Started" button
- **THEN** the button background transitions from gradient to white
- **AND** the text color transitions to dark (#222222)
- **AND** the transition is smooth

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** the user resizes the browser to mobile width (< 768px)
- **THEN** the wrapper width expands to 97%
- **AND** the hamburger menu becomes interactive
- **AND** feature blocks stack vertically (single column)
- **AND** blog cards stack vertically (single column)

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
