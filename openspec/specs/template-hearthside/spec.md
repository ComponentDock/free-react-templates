# Template: Hearthside (Restaurant)

## Purpose

Recreation of the ColorLib **Eatery** restaurant template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source**: [ColorLib Eatery](https://colorlib.com/wp/template/eatery/)
- **Preview**: https://preview.colorlib.com/theme/eatery/
- **Category**: Restaurant / Food / Dining
- **New name**: `hearthside` (apps/hearthside, @free-react-templates/hearthside)
- **Deploy target**: https://hearthside.free.componentdock.com

### Template description

A warm, food-focused restaurant website with a dark navbar, full-screen hero slider, icon-driven feature categories, a special dishes carousel with overlaid price badges, a two-column menu layout, testimonials, newsletter signup, and a dark footer with contact/hours info. The overall aesthetic is dark-elegant with red accent, sharp-edged buttons, and large decorative watermark headings.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/eatery/:

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand color | `#cf1d16` | Deep red — used on CTAs, price badges, decorative heading bars, active carousel dots, dropdown hover |
| Hover accent | `#e9362f` | Slightly brighter red for `btn-primary:hover` |
| Navbar background | `#000` (mobile) / transparent (desktop) | Black on mobile; transparent overlay on hero |
| Footer background | `#111` (approx) | Dark footer section |
| Body text color | `#868e96` | Muted gray |
| Heading color | `#000` | Black headings |
| Font family | `"Open Sans", Arial, sans-serif` | Loaded via Google Fonts, weights 300/400/700/800 |
| Body font size | `15px` | Line-height 1.8 |
| Button border-radius | `0px` | Sharp square buttons |
| Button text-transform | `uppercase` | All buttons uppercase with `.2em` letter-spacing |
| Button border-width | `2px` | Including `.btn-primary` |
| Dropdown radius | `4px` | Small rounded dropdowns |
| Circular elements | `50%` | Price badge circle, testimonial author avatar, footer social icons |
| Footer social icon hover | `16px` | Slightly rounded on hover |
| Decorative heading bar | `80px × 2px`, color `#cf1d16` | 2px red line above section headings (via `:before` pseudo) |
| Back-text watermark | `#f7f7f7` | Large 200px decorative text behind headings |
| Back-text-dark (bg-light sections) | `#e3e3e3` | Same watermark on light backgrounds |
| Hero overlay | `rgba(0,0,0,0.2)` | Semi-transparent black overlay on hero images |
| Section bg-light | Bootstrap `.bg-light` | `#f8f9fa` for alternating sections |
| Testimonial quote font | `20px`, color `#000` | Author info: `#cccccc` |

## Section Structure (order)

1. **Navbar** — absolute-positioned, dark, brand left, nav links center-right, "Contact Us" CTA button (red bg)
2. **Hero Slider** — full-viewport (`100vh`, min 700px), background image, centered text (h1 + paragraph + "Get Started" outline button), multiple slides
3. **Features** — 4-column grid, icon + title + description (Drinks, Sea Foods, Cup Coffees, Fresh Salad), `bg-light`
4. **Special Dishes** — horizontal carousel of dish images with overlaid text (price badge in red circle + dish name), dark overlay on hover
5. **Our Menu** — 2-column grid of menu items, each row has text + background image, alternating layout (text left/image right or vice versa), `bg-light`
6. **Testimonials** — 3-column grid of blockquote cards with author photo (circle) + name + title
7. **Newsletter** — centered subscribe form with email input + "Subscribe" button (primary red), `bg-light`
8. **Footer** — dark background, 3 content columns (About Us + social icons, Opening Hours + Contact Info, Quick Links), copyright bar

## Gherkin Requirements

```gherkin
Feature: Hearthside Restaurant Template

  Background:
    Given the user visits https://hearthside.free.componentdock.com
    Then the page loads successfully

  Scenario: Navbar renders with brand and navigation
    Then the navbar displays brand text "Hearthside"
    And the navbar contains links: Home, Recipes, Services (dropdown), About, News
    And the navbar contains a "Contact Us" button styled with primary red background
    And the Services dropdown contains: Catering, Birthday Party, Wedding Party
    And the navbar is transparent on desktop overlaying the hero

  Scenario: Hero slider displays full-screen slides
    Then the hero slider occupies full viewport height
    And each slide has a background image with dark overlay
    And each slide displays a centered headline and description paragraph
    And each slide has a "Get Started" white outline button
    And the slider supports multiple slides (at least 2)

  Scenario: Features section displays 4 category icons
    Then a features section appears on light background
    And it contains 4 feature items in a grid
    And each feature has an icon, a title, and a description
    And the titles are: Drinks, Sea Foods, Cup Coffees, Fresh Salad

  Scenario: Special Dishes carousel shows dish cards
    Then a "Special Dishes" section appears with decorative back-text watermark
    And the section heading has a red decorative bar above it
    And a carousel of dish images is displayed
    And each dish card has a dark overlay with price badge (red circle) and dish name
    And at least 4 dishes are shown
    And the price badge uses a circular shape with red background

  Scenario: Our Menu section displays items in 2-column grid
    Then an "Our Menu" section appears on light background
    And menu items are laid out in a 2-column grid
    And each item shows a dish name, description, and price
    And each item includes a background image
    And items alternate text/image positioning between rows

  Scenario: Testimonials section displays 3 testimonial cards
    Then a "Testimonial" section appears
    And 3 testimonial blockquotes are displayed in columns
    And each testimonial has a quote, author photo (circular), author name, and role
    And the author photo uses 50% border-radius

  Scenario: Newsletter section has email subscription form
    Then a newsletter section appears on light background
    And an email input field is displayed
    And a "Subscribe" button appears (primary red style)
    And the form spans the full container width

  Scenario: Footer renders with all content blocks
    Then the footer has a dark background
    And it contains "About Us" text and social media icon links (Twitter, Facebook, LinkedIn, Instagram)
    And it shows "Opening Hours" (Sunday-Thursday, 5AM-10PM)
    And it shows "Contact Info" (address, telephone, email)
    And it shows "Quick Links" (About, Terms of Use, Disclaimers, Contact)
    And the footer links to https://www.componentdock.com/ (branded "Component Dock")

  Scenario: Design token fidelity
    Then the primary brand color is #cf1d16
    And the font family is "Open Sans", Arial, sans-serif
    And buttons have 0px border-radius (sharp corners)
    And buttons are uppercase with letter-spacing 0.2em
    And section headings use black (#000) color at 50px font-size
    And decorative heading bars are 80px wide and 2px tall in brand red

  Scenario: Responsive behavior
    Then the navbar collapses to a hamburger menu on mobile
    And the features grid stacks vertically on mobile
    And the menu section stacks to single column on mobile
    And the testimonials stack vertically on mobile
    And the footer columns stack on mobile

  Scenario: Accessibility
    Then all interactive elements have appropriate aria attributes
    And the navbar toggle has aria-label "Toggle navigation"
    And semantic HTML elements are used (header, nav, section, footer)
    And images have alt text
    And the form has proper labels or placeholders
```

## Verification Checklist

- [ ] Navbar: brand text, nav links, dropdown, CTA button, transparent on desktop
- [ ] Hero slider: full-viewport, background images, centered text, outline button, multi-slide
- [ ] Features: 4 icons in grid, light background, correct titles
- [ ] Special Dishes: carousel, overlay text, red price badge, decorative heading
- [ ] Our Menu: 2-column layout, alternating text/image, prices
- [ ] Testimonials: 3 columns, blockquotes, circular author photos
- [ ] Newsletter: email input, subscribe button, light background
- [ ] Footer: dark bg, 4 content blocks, social icons, copyright
- [ ] Design tokens: #cf1d16 primary, Open Sans font, square buttons, uppercase
- [ ] Footer links to Component Dock (no ColorLib references in app code)
- [ ] Deploy target: hearthside.free.componentdock.com
