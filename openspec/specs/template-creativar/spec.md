# Template: Creativar (Personal Creative Portfolio)

## Purpose

Recreation of [ColorLib Evans](https://colorlib.com/wp/template/evans/) as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `evans`
- **Preview URL:** https://preview.colorlib.com/theme/evans/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/evans-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/creativar`
- **Deploy target:** `creativar.free.componentdock.com`

### Template Category

Personal creative portfolio / freelancer landing page. Split hero with full-screen background images, intro blurb with gold-highlighted text, services grid, full-width portfolio entries, and a dark footer.

## Design Tokens

Extracted from the live preview at https://preview.colorlib.com/theme/evans/ and its `css/style.css`.

### Colors

| Token             | Value        | Usage                                          |
| ----------------- | ------------ | ---------------------------------------------- |
| brand-accent      | `#fdcb6e`    | Gold/yellow — highlighted text, hover states, active-2 service card bg |
| dark-bg           | `#000000`    | Hero background, footer background             |
| dark-surface      | `#1e1e1e`    | Active service card bg (on desktop)            |
| light-gray        | `#b3b3b3`    | Custom button text, inactive carousel dots     |
| white             | `#ffffff`    | Hero VR text stroke, nav arrows bg, footer headings |
| text-primary      | `#212529`    | Body text color                                |
| text-muted        | `#6c757d`    | Secondary text, captions                       |

### Fonts

| Role            | Family                | Weights        | Source           |
| --------------- | --------------------- | -------------- | ---------------- |
| Body / Nav      | Poppins               | 400, 500, 600, 700, 900 | Google Fonts (Cloudflare CDN) |
| Headings (intro)| Lora                  | 400, 700       | Google Fonts (Cloudflare CDN) |
| Hero VR title   | Barlow Condensed      | 900             | Google Fonts (Cloudflare CDN) |

### Spacing & Layout

- Hero section: 750px height slider (responsive), two-column split (50/50)
- Services: 4-column grid (col-lg-3), 80px icon size, 80px 25px padding
- Portfolio: full-width image + text overlay entries, alternating left/right layout
- Footer: black bg, 7em vertical padding, 3-column layout

### Button Styling

- `.custom-btn`: uppercase, 12px, letter-spacing 3px, font-weight 700, no border-radius (text-link style), light gray `#b3b3b3` color
- Nav arrows: 60x60px, white bg, black text, hover → black bg + gold `#fdcb6e` text

### Animations

- Framer-motion-like entrance animations (via AOS in original, use CSS transitions or framer-motion in React)
- Hover transitions on service cards: 0.3s ease, bg → `#fdcb6e`
- Portfolio text reveal on hover (translateY + opacity)

## Section Order (1:1 fidelity)

1. **Navbar** — Dark bg, brand name "Creativar", links: About, Work, Contact. Transparent → dark on scroll.
2. **Hero** — Full-screen split layout: left half black with giant VR outline text "Creativar" (Barlow Condensed 900, transparent fill, white stroke), right half = background image slider (2 slides, 750px height).
3. **Intro** — Text block aligned right: "Web Designer, hobbyist writer, and the CEO & Founder of Creativar" with gold `#fdcb6e` highlight on key words. Short paragraph below.
4. **Services** — 4-column grid: Web Design, Web Development, Graphic Design, Writing. Each has a large icon, title, and address/description text. Hover → gold bg. Active card → dark bg (#1e1e1e). One card uses "active-2" (gold bg by default).
5. **Portfolio** — "Latest & Greatest" heading. Three full-width entries: each has a background image on one half and text (category tag, title, description, "View Portfolio" link) on the other half. Alternating image-left/image-right layout.
6. **Footer** — Black bg, multi-column: brand + description, quick links, newsletter/contact info, social icons. "Made with Component Dock" attribution.

## Gherkin Requirements

### Feature: Creativar — Personal Creative Portfolio

#### Scenario: Navbar renders with correct links
- GIVEN the user loads the page
- THEN a dark navbar is visible with the brand "Creativar"
- AND navigation links "About", "Work", and "Contact" are present

#### Scenario: Hero displays VR title text
- GIVEN the user loads the page
- THEN a large outline text "Creativar" is visible in the hero section
- AND the text uses Barlow Condensed font with transparent fill and white stroke

#### Scenario: Hero shows background images
- GIVEN the user loads the page
- THEN at least one background image is visible in the hero slider area
- AND the slider area has a height of approximately 750px

#### Scenario: Intro section shows highlighted text
- GIVEN the user scrolls to the intro section
- THEN the heading contains gold-highlighted (`#fdcb6e`) text for the brand name
- AND a descriptive paragraph is displayed below the heading

#### Scenario: Services grid shows 4 service cards
- GIVEN the user scrolls to the services section
- THEN 4 service cards are visible: Web Design, Web Development, Graphic Design, Writing
- AND each card has an icon, title, and description text

#### Scenario: Service card hover effect
- GIVEN the user hovers over a service card
- THEN the card background transitions to gold (`#fdcb6e`) with 0.3s ease

#### Scenario: Service card active state on desktop
- GIVEN the user views on desktop (≥992px)
- THEN one service card has a dark background (`#1e1e1e`) by default
- AND another service card has a gold background (`#fdcb6e`) by default

#### Scenario: Portfolio section displays 3 entries
- GIVEN the user scrolls to the portfolio section
- THEN 3 portfolio entries are visible
- AND each entry has a background image, category label, title, description, and "View Portfolio" link

#### Scenario: Portfolio entries alternate layout
- GIVEN the user views the portfolio section
- THEN the first entry has image on the left and text on the right
- AND subsequent entries alternate image/text positioning

#### Scenario: Portfolio hover reveals text
- GIVEN the user hovers over a portfolio entry
- THEN the text content animates into view (translateY + opacity transition)

#### Scenario: Footer renders with brand info
- GIVEN the user scrolls to the footer
- THEN a black footer is visible with the brand name
- AND navigation links, social icons, and contact info are present
- AND a "Made with Component Dock" attribution link is present

#### Scenario: Responsive layout on mobile
- GIVEN the user views on mobile (<768px)
- THEN the hero section stacks vertically
- AND the services grid stacks to single column
- AND the navbar collapses to a hamburger menu

## Verification Checklist

- [ ] Navbar: dark bg, transparent→dark scroll transition, hamburger on mobile
- [ ] Hero: VR outline text with Barlow Condensed, split layout, background images
- [ ] Intro: gold-highlighted heading, paragraph text
- [ ] Services: 4-column grid, icons, hover gold bg, active dark/gold cards
- [ ] Portfolio: 3 entries, alternating layout, hover text reveal
- [ ] Footer: black bg, columns, social links, Component Dock attribution
- [ ] Fonts: Poppins (body), Lora (headings), Barlow Condensed (hero VR)
- [ ] Colors: #fdcb6e accent, #000 dark, #1e1e1e surface, #b3b3b3 muted
- [ ] Responsive: mobile hamburger, stacked grids, full-width hero
- [ ] No ColorLib references in app code (provenance in spec only)
