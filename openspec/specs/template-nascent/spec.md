# Template: Nascent (Startup Landing Page)

## Purpose

Recreation of ColorLib "Thestartup" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page startup landing site.

- **Source:** https://colorlib.com/wp/template/thestartup/
- **Preview:** https://preview.colorlib.com/theme/thestartup/
- **Category:** Startup / SaaS landing page
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/thestartup-free-template.jpg

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

| Token | Value | Notes |
|---|---|---|
| `brand` | `#FF9100` | Primary orange — buttons, accents, hovers, CTA backgrounds |
| `brand-dark` | `#df7e00` | Gradient endpoint for orange button background |
| `hero-bg` | `#FFDDB5` | Light peach/tan — hero section background |
| `dark-purple` | `#2D0A31` | Deep plum — testimonial section background |
| `black` | `#000000` | Footer background |
| `body-text` | `#5E5E5E` | Paragraph text |
| `heading-color` | `#000000` | h1–h6 text |
| `font-heading` | `"Josefin Sans", sans-serif` | All headings |
| `font-body` | `"Roboto", sans-serif` | Body text, paragraphs |
| `button-radius` | `5px` | `.btn` border-radius |
| `card-radius` | `0` | Cards have sharp edges (no border-radius) |
| `section-padding` | `120px top / 100px bottom` | `.section-padding` |

## Section Structure (in order)

1. **Navbar** — sticky header, logo left, nav links (Home, About, Services, Blog dropdown, Contact), orange gradient "Join Us" CTA button right. White background on sticky.
2. **Hero** — split layout: left caption (tagline, heading, subtext, "Explore Us" button), right hero image. Background `#FFDDB5`. Orange tagline text, dark heading, dark paragraph.
3. **Services** — section title + description, 3 service cards in a row (icon, title, description, "Let's Talk" underline link).
4. **About** — split: left image, right content with "Our Philosophy" heading, two paragraphs, author attribution (CEO name + title).
5. **Pricing** — centered title + subtitle, 3 pricing cards (price, description, feature list, "Get Started Now" button). Middle card is active/highlighted.
6. **Features (Accordion)** — left column: title + 4 accordion items; right column: image. Collapsible content panels.
7. **Testimonials** — parallax background section (`#2D0A31`), carousel with testimonial quote, body text, founder name + role. Dot pagination.
8. **Blog** — centered title, 3 blog cards in a carousel (image with category badge, title, excerpt).
9. **Footer** — dark background (`#000`), 4-column: logo + social icons, Navigation links, Services links, Contact info. Bottom bar with copyright (links to Component Dock).

## Gherkin Scenarios

### Navbar
```gherkin
Scenario: Navbar renders with logo and navigation links
  Given the user loads the page
  Then a navigation bar is visible at the top
  And the logo is displayed on the left
  And nav links "Home", "About", "Services", "Blog", "Contact" are shown
  And a "Join Us" CTA button is displayed

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls down
  Then the navbar remains fixed at the top
  And the background turns white
```

### Hero
```gherkin
Scenario: Hero section displays headline and image
  Given the user is on the landing page
  Then a tagline "We are new but doing great" is displayed in orange
  And a heading "We give the power back to the user" is visible
  And a subtext paragraph is shown
  And an "Explore Us" button is present
  And a hero image is displayed on the right side

Scenario: Hero section uses peach background
  Given the hero section is rendered
  Then the background color is #FFDDB5
```

### Services
```gherkin
Scenario: Services section shows three service cards
  Given the user scrolls to the services section
  Then a heading "Services we provide" is visible
  And three service cards are displayed
  And each card has an icon, title, description, and "Let's Talk" link
```

### About
```gherkin
Scenario: About section displays philosophy content
  Given the user scrolls to the about section
  Then "Our Philosophy" heading is visible
  And two paragraphs of description are shown
  And an author attribution with CEO name is displayed
  And an image is shown alongside the text
```

### Pricing
```gherkin
Scenario: Pricing section shows three plans
  Given the user scrolls to the pricing section
  Then an "Affordable pricing plan" heading is shown
  And three pricing cards are displayed
  And each card has a price, description, feature list, and "Get Started Now" button
  And the middle card is visually highlighted as active
```

### Features (Accordion)
```gherkin
Scenario: Features accordion shows collapsible items
  Given the user scrolls to the features section
  Then a section heading is displayed
  And four accordion items are shown
  And clicking an accordion header toggles its content
  And one item is expanded by default
  And an image is shown in the right column
```

### Testimonials
```gherkin
Scenario: Testimonials section shows quote carousel
  Given the user scrolls to the testimonials section
  Then the background is dark purple (#2D0A31)
  And a testimonial quote is displayed
  And the founder name and role are shown
  And dot pagination controls are present
```

### Blog
```gherkin
Scenario: Blog section shows latest posts carousel
  Given the user scrolls to the blog section
  Then an "Our latest blog" heading is visible
  And three blog cards are displayed
  And each card has an image, category badge, title, and excerpt
```

### Footer
```gherkin
Scenario: Footer renders with four columns
  Given the user scrolls to the footer
  Then the background is black (#000)
  And a logo and social icons are displayed
  And Navigation, Services, and Contact columns are shown
  And the bottom bar links to Component Dock
```

## Verification Checklist

- [ ] Navbar renders with all 5 nav links + "Join Us" CTA
- [ ] Navbar sticks on scroll with white background
- [ ] Hero uses #FFDDB5 background, split layout, orange tagline, heading, CTA
- [ ] Services shows 3 cards with icon, title, description, link
- [ ] About section has split layout with image + philosophy text + author
- [ ] Pricing shows 3 cards, middle highlighted, feature lists, CTA buttons
- [ ] Features accordion works (expand/collapse, default open item)
- [ ] Testimonials carousel on dark purple background with dot pagination
- [ ] Blog carousel shows 3 cards with image, badge, title, excerpt
- [ ] Footer has 4-column layout, black background, Component Dock link
- [ ] All buttons use brand orange (#FF9100)
- [ ] Heading font: Josefin Sans; body font: Roboto
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] `public/CNAME` contains `nascent.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://nascent.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
