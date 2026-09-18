# Template: Vexly (Software Landing Page)

## Purpose

Vexly is a single-page software/SaaS landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Parason" free
template (source: https://colorlib.com/wp/template/parason/, preview:
https://preview.colorlib.com/theme/parason/), built under a DIFFERENT name
(**Vexly**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based software landing page with a dark indigo
hero, feature cards, about section, offer grid, pricing table, testimonial
carousel, client logos, and a dark multi-column footer. The design language
is clean corporate with deep indigo (`#21146a`) as the primary brand color,
lavender-tinted section backgrounds (`#faf9ff`), Rajdhani headings, and
Roboto body text. Cards and pricing use no border-radius (square edges)
while buttons use pill-shaped 30px radius.

**WHAT MAKES VEXLY DISTINCT (signature behaviors):**

1. **Dark indigo hero with split layout.** The hero section has a `#22195b`
   dark indigo background with a two-column layout: left column holds a
   hero illustration/image (absolutely positioned on large screens), right
   column holds the headline + paragraph + CTA button. The header navbar
   overlays the hero transparently (absolute positioned) and transitions
   to a fixed bright indigo (`#412fb3`) bar on scroll.

2. **Lavender-tinted card sections.** Feature cards and offer cards use
   `#faf9ff` (bg-magnolia) backgrounds with no border-radius, square edges,
   and a hover effect that shifts to white with a purple-tinted shadow
   (`rgba(33,20,106,0.1)`). This lavender tint is a recurring brand motif.

3. **Three-column feature cards + 2x2 offer grid.** The "Awesome Soft
   Feature" section has 3 equal-width feature cards (Unique Design, Business
   Solution, Customer Support) with Themify icons. The "Features We Offer"
   section has a 2x2 grid of offer cards (Easy To Manage, Analytics Tool,
   Professionals Tools, Ready Content) with similar styling. Both use
   center-aligned text on mobile, left-aligned on desktop.

4. **Three-tier pricing with straight edges.** Pricing cards use
   `border-radius: 3px` (nearly square), `#faf9ff` background, a hover
   shadow + brand color fill on the CTA button. Each card has a header
   (name + description + large price), a feature list with check/close
   icons, and a "Buy Now" button footer.

5. **Testimonial carousel with offset avatar.** Testimonials are in an
   owl-carousel style layout with a 120×120px circular avatar that overlaps
   the testimonial card (positioned `top: 30px`, z-index above the card).
   The card has a white background with centered text.

6. **Grayscale client logos with hover reveal.** Client logos are rendered
   at 20% opacity with `grayscale(100%)` filter, transitioning to full
   opacity and no filter on hover.

## Design Tokens

Extracted from the live preview CSS (`css/style.css` at
https://preview.colorlib.com/theme/parason/):

### Colors

| Token                | Value     | Usage                                              |
| ---------------------- | --------- | -------------------------------------------------- |
| Brand primary         | `#21146a` | Icons, buttons, links, hover states, dropdown hover |
| Hero background       | `#22195b` | `.hero-banner` dark indigo background              |
| Section bg (magnolia) | `#faf9ff` | `.bg-magnolia`, feature cards, pricing, testimonials |
| Heading text          | `#3a414e` | All h1–h5 elements                                |
| Body text             | `#797979` | Body text, footer links, general paragraph text    |
| Footer background     | `#0e1424` | `.footer-area` very dark navy                      |
| Fixed navbar bg       | `#412fb3` | Bright indigo when navbar is scrolled/fixed        |
| Error/close           | `#f81c1c` | Pricing invalid features close icon                |
| Border light          | `#ebebeb` | Pricing card header border, general dividers       |

### Fonts

| Token       | Family                           | Weights         | Usage              |
| ----------- | -------------------------------- | --------------- | ------------------ |
| Headings    | `"Rajdhani", sans-serif`         | 400, 600, 700   | All h1–h5 elements |
| Body        | `"Roboto", sans-serif`           | 400, 500, 700   | Body text, buttons |

### Buttons

| Class               | Style                                                            |
| ------------------- | ---------------------------------------------------------------- |
| `.button` (default) | White bg, `#3a414e` text, `border-radius: 30px`, `10px 24px` padding (pill shape) |
| `.button.bg`        | White bg, used in header (on dark hero)                          |
| `.button-light`     | Transparent bg, `#21146a` border + text, hover fills brand      |
| `.button-blog`      | `1px solid #21146a`, `border-radius: 4px`, uppercase             |
| `.button-postComment` | Solid `#21146a`, `border-radius: 4px`, white text              |

### Spacing

| Class                    | Mobile    | Desktop (≥1200px) |
| ------------------------ | --------- | ------------------ |
| `.section-margin`        | `60px 0`  | `135px 0`         |
| `.section-padding`       | `60px 0`  | `135px 0`         |
| `.section-padding--small`| `60px 0`  | `100px 0`         |
| `.pb-85px`               | `45px`    | `85px`            |

### Shadows

- Card hover: `0px 10px 20px 0px rgba(33,20,106,0.1)`
- Pricing hover: `0px 20px 25.5px 4.5px rgba(33,20,106,0.1)`
- Fixed navbar: `0px 3px 16px 0px rgba(0,0,0,0.1)`
- Dropdown: `0px 10px 30px 0px rgba(0,0,0,0.4)`

## Section Structure (from live preview)

The template is a single-page layout with these sections in order:

1. **Header/Navbar** — Transparent overlay on hero, logo left, nav links
   center (Home, Feature, Price, Pages dropdown, Contact), "Sign up" button
   right. Becomes fixed + solid indigo on scroll.
2. **Hero Banner** — Dark indigo `#22195b` background, two-column split:
   left = hero illustration, right = h1 "Advanced software made simple" +
   paragraph + "Get Started" button (`.button.bg`).
3. **Awesome Soft Feature** — Section heading + 3 feature cards in a row.
   Each card: icon (Themify), title, subtitle paragraph. Cards have
   `#faf9ff` bg, no border-radius, hover shadow.
4. **About / Digital Entertainment Revolution** — `#faf9ff` bg
   (`.bg-magnolia`), two-column: left = heading + paragraph + "Know More"
   button (`.button-light`), right = about illustration image.
5. **Features We Offer** — Section heading + 2×2 grid of offer cards.
   Each card: icon, title, description. Same card style as features.
6. **Pricing** — Three pricing cards (Basic $25, Standard $45, Ultimate $65)
   with feature checklist (check icons green, close icons red), "Buy Now"
   button (`.button-light`).
7. **Client Says Me (Testimonials)** — `#faf9ff` bg, carousel of
   testimonial items. Each: 120×120 circular avatar + name + role +
   italic quote text.
8. **Client Logos** — Grayscale logos at 20% opacity, hover to full color.
9. **Footer** — Dark `#0e1424` bg, 5 columns (Top Products, Quick Links,
   Features, Resources, Newsletter with email input + subscribe button),
   copyright line + social icons row.

## Gherkin Requirements

### Feature: Header/Navbar

```gherkin
Scenario: Transparent navbar overlays hero
  Given the user is at the top of the page
  Then the navbar background should be transparent
  And the nav links should be white text

Scenario: Navbar becomes fixed on scroll
  Given the user scrolls down past the hero
  Then the navbar should become fixed at the top
  And the background should change to indigo #412fb3
  And the navbar should have a box shadow

Scenario: Navigation links include Home, Feature, Price, Pages, Contact
  Given the navbar is visible
  Then there should be 5 navigation links
  And "Home" should be active by default
  And "Pages" should be a dropdown with Blog and Blog Details sub-items

Scenario: Sign up button appears in the navbar right area
  Given the navbar is visible
  Then a "Sign up" button should be visible on the right side
```

### Feature: Hero Banner

```gherkin
Scenario: Hero displays split layout with headline and CTA
  Given the hero banner is visible
  Then the background should be dark indigo #22195b
  And a headline "Advanced software made simple" should be visible in white
  And a descriptive paragraph should be visible in white
  And a "Get Started" button should be visible

Scenario: Hero image displays on the left side
  Given the screen is desktop width (≥992px)
  Then the hero illustration should be visible on the left column
  And the text content should be on the right column
```

### Feature: Awesome Soft Feature Section

```gherkin
Scenario: Three feature cards are displayed
  Given the feature section is in view
  Then there should be 3 feature cards in a row
  And each card should have an icon, title, and subtitle
  And the cards should have a #faf9ff background

Scenario: Feature cards respond to hover
  Given the user hovers over a feature card
  Then the card background should change to white
  And a subtle purple shadow should appear
```

### Feature: About Section

```gherkin
Scenario: About section shows content and image side by side
  Given the about section is in view
  Then the background should be #faf9ff (magnolia)
  And a heading "Leading the Digital Entertainment Revolution" should be visible
  And a paragraph and "Know More" button should be on the left
  And an illustration image should be on the right
```

### Feature: Features We Offer Section

```gherkin
Scenario: Four offer cards in a 2x2 grid
  Given the offer section is in view
  Then there should be 4 offer cards
  And they should be arranged in a 2-column by 2-row grid
  And each card should have an icon, title, and description
  And the cards should have a #faf9ff background with no border radius

Scenario: Offer cards respond to hover
  Given the user hovers over an offer card
  Then the card should gain a purple-tinted shadow
```

### Feature: Pricing Section

```gherkin
Scenario: Three pricing tiers displayed
  Given the pricing section is in view
  Then there should be 3 pricing cards
  And each card should show a tier name, description, and price
  And each card should have a feature list with check and close icons
  And each card should have a "Buy Now" button

Scenario: Pricing cards have straight edges
  Given a pricing card is rendered
  Then the card border radius should be approximately 3px (nearly square)
  And the background should be #faf9ff

Scenario: Hovering a pricing card fills the CTA button
  Given the user hovers over a pricing card
  Then the card should gain a purple shadow
  And the "Buy Now" button should change to solid #21146a with white text
```

### Feature: Testimonials Section

```gherkin
Scenario: Testimonials displayed as carousel items
  Given the testimonials section is in view
  Then the background should be #faf9ff
  And testimonial items should show a circular avatar, name, role, and quote
  And the avatar should be 120x120px and overlap the card from above

Scenario: Testimonials are centered with italic quote text
  Given a testimonial item is rendered
  Then the content should be centered
  And the quote text should be italicized
```

### Feature: Client Logos Section

```gherkin
Scenario: Client logos are displayed in grayscale
  Given the client logos section is in view
  Then 5 client logo images should be displayed
  And they should be rendered at 20% opacity with grayscale filter

Scenario: Client logos reveal on hover
  Given the user hovers over a client logo
  Then the logo should transition to full opacity
  And the grayscale filter should be removed
```

### Feature: Footer

```gherkin
Scenario: Footer has five content columns
  Given the footer is visible
  Then the background should be #0e1424 (dark navy)
  And there should be columns for Top Products, Quick Links, Features, Resources, and Newsletter
  And each non-Newsletter column should have 4 link items

Scenario: Newsletter column has email input and subscribe button
  Given the Newsletter column is visible
  Then an email input field should be visible
  And a "subscribe" button should be next to the input

Scenario: Footer bottom has copyright and social icons
  Given the footer bottom is visible
  Then a copyright line should be visible
  And social icon links (Facebook, Twitter, Dribbble, Behance) should be visible
  And the footer MUST link https://www.componentdock.com/
```

## Verification Checklist

- [ ] Header/Navbar: transparent on hero, fixed indigo on scroll, nav links
      with dropdown, Sign up button
- [ ] Hero: dark indigo bg, split layout, headline + paragraph + CTA
- [ ] Feature section: 3 cards with icons, #faf9ff bg, hover shadow
- [ ] About section: magnolia bg, two-column layout, heading + text + button + image
- [ ] Offer section: 2x2 grid of 4 cards with icons, same card style
- [ ] Pricing: 3 tier cards, square edges, check/close icons, hover fills CTA
- [ ] Testimonials: carousel, overlapping circular avatar, centered italic text
- [ ] Client logos: grayscale → color on hover
- [ ] Footer: dark bg, 5 columns, newsletter input, social icons, ComponentDock link
- [ ] Design tokens match: #21146a brand, #22195b hero, #faf9ff sections, Rajdhani headings, Roboto body
- [ ] Pill-shaped buttons (30px radius) throughout
- [ ] Responsive: mobile single-column, desktop multi-column
- [ ] No reference to ColorLib in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
