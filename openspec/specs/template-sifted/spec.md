# Template: Sifted (Bakery / Cakes)

## Purpose

Recreation of the ColorLib "Cakes" template for a bakery / cake shop landing page.

- **Source**: https://colorlib.com/wp/template/cakes/
- **Preview**: https://preview.colorlib.com/theme/cakes/
- **New name**: `sifted` (apps/sifted, @free-react-templates/sifted)
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Design tokens extracted from live preview CSS** (see below)

## Design Tokens

### Colors

| Token            | Value     | Usage                                          |
| ---------------- | --------- | ---------------------------------------------- |
| brand-primary    | `#F04506` | Buttons, links, accents, section label spans   |
| brand-dark       | `#d83e06` | Gradient end on primary buttons                |
| hero-heading     | `#1A1A1A` | Hero paragraph text                            |
| text-primary     | `#000000` | Headings (h1-h6)                               |
| text-secondary   | `#5E5E5E` | Body copy, footer text, nav links              |
| card-bg          | `#FFF5F2` | Product item card backgrounds                  |
| footer-bg        | `#FFF7F3` | Footer wrapper background                      |
| white            | `#FFFFFF` | Page background, button text on primary        |

### Fonts

| Role         | Font Family     | Weights        | Fallback               |
| ------------ | --------------- | -------------- | ---------------------- |
| Body         | DM Sans         | 400, 500       | sans-serif             |
| Headings     | Quicksand       | 400, 600, 700  | sans-serif             |
| Decorative   | Lobster         | 400            | cursive (hero watermark) |

### Button Styles

- **Primary `.btn`**: `border-radius: 30px`, gradient `linear-gradient(to left, #F04506, #d83e06, #F04506)`, `box-shadow: 0px 17px 27px rgba(240,69,6,0.27)`, `padding: 13px 37px`, `font-family: Quicksand`, white text, background-size 200% with sliding animation on hover.
- **Header CTA `.header-btn2`**: Box-shadow removed, otherwise same `.btn` style.
- **Card order button `.order-btn`**: Same `.btn` gradient style, `font-size: 18px`.

### Section Backgrounds

- Page: `#FFFFFF`
- Hero: Background image (`h1_hero1.png` — a cake photo), `background-size: cover`
- Popular items cards: `#FFF5F2` with `border-radius: 0 0 60px 0` (bottom-right corner)
- Services: White, with decorative animated shape (`services-shape.png`)
- Video: Background image (`video-bg.png`), dark overlay
- Testimonials: White
- Instagram: White with image carousel
- Footer: `#FFF7F3` warm off-white

### Spacing

- Section padding: `120px` top/bottom (`.section-padding`), `110px` (`.section-padding40`)
- Footer top padding: `120px`, bottom: `20px`

## Section Structure (from live DOM, order preserved)

1. **Header** — Sticky logo + nav (Home, Product, About, Blog dropdown, Contact) + phone number + "Order Online" CTA
2. **Hero Slider** — Full-width background image, "Delicious" watermark text (Lobster, huge, low opacity), h1 "Delicious Cake For Everyone", paragraph, "Explore Menu" button
3. **Popular Items** — "Most Popular" label, "Our Exclusive Cakes" heading, 3-card carousel (Chocolate, Sweetheart, Blackforest) each with image, title, description, "$20 | Order Now" button
4. **About** — Split layout: left image, right text ("Fresh & Delicious" label, "A Simple Way to Eating Delicious" heading, paragraph, "Our Story" button)
5. **Services** — "Our Features" label, "Quality is Our First Priority" heading, 3-column grid with icon + title + description, decorative shape
6. **Video** — Dark background image with YouTube play button (popup-video)
7. **Testimonials** — "Testimonial" label, "What Customers Say" heading, carousel of customer quotes with avatar, name, role
8. **Instagram** — Horizontal image strip (6 images) with Instagram icon overlay on hover
9. **Footer** — 4-column: logo + description + social icons | Quick Links | Cake types | Contact info + phone; bottom bar with copyright + Component Dock link

## Gherkin Requirements

### Header

```gherkin
Scenario: Logo and navigation render
  Given the user loads the page
  Then the logo is visible in the top-left
  And the navigation links "Home", "Product", "About", "Blog", "Contact" are visible

Scenario: Phone number and Order Online button render
  Given the user loads the page
  Then the phone number "+10 (56) 745 3095" is displayed
  And the "Order Online" button is visible in the header

Scenario: Blog dropdown shows submenu on hover
  Given the user hovers over "Blog" in the navigation
  Then a submenu with "Blog", "Blog Details", "Element" links appears

Scenario: Header becomes sticky on scroll
  Given the user scrolls down past the header
  Then the header sticks to the top with a white background and subtle shadow
```

### Hero

```gherkin
Scenario: Hero section displays headline and CTA
  Given the user loads the page
  Then the hero section displays "Delicious Cake For Everyone" heading
  And the "Explore Menu" button is visible
  And a decorative "Delicious" watermark text appears in Lobster font

Scenario: Hero has background image
  Given the user loads the page
  Then the hero section has a full-width cake background image
```

### Popular Items

```gherkin
Scenario: Popular items section shows cake cards
  Given the user scrolls to the popular items section
  Then the heading "Our Exclusive Cakes" is visible
  And 3 cake cards are displayed (Chocolate, Sweetheart, Blackforest)

Scenario: Each cake card has image, title, description, and order button
  Given the user views a cake card
  Then it shows a cake image, the cake name, a short description
  And a "$20 | Order Now" button

Scenario: Cake cards have rounded bottom-right corners and light peach background
  Given the user views a cake card
  Then the card background is #FFF5F2
  And the bottom-right corner has border-radius of 60px
```

### About

```gherkin
Scenario: About section shows split layout
  Given the user scrolls to the about section
  Then an image appears on the left
  And text content appears on the right with "Fresh & Delicious" label
  And the heading "A Simple Way to Eating Delicious" is displayed
  And the "Our Story" button is visible
```

### Services

```gherkin
Scenario: Services section shows 3 feature cards
  Given the user scrolls to the services section
  Then the heading "Quality is Our First Priority" is visible
  And 3 service cards each display an icon, title, and description
```

### Video

```gherkin
Scenario: Video section has play button
  Given the user scrolls to the video section
  Then a dark background image is displayed
  And a play button icon is centered on the section
```

### Testimonials

```gherkin
Scenario: Testimonials carousel shows customer quotes
  Given the user scrolls to the testimonials section
  Then the heading "What Customers Say" is visible
  And customer testimonial cards display a quote, avatar image, name, and role
```

### Instagram

```gherkin
Scenario: Instagram image strip renders
  Given the user scrolls to the Instagram section
  Then a horizontal strip of 6 images is displayed
  And hovering an image reveals an Instagram icon overlay
```

### Footer

```gherkin
Scenario: Footer has 4 columns
  Given the user scrolls to the footer
  Then the footer shows logo, description, and social icons in column 1
  And "Quick Links" with Home/About/Services/Blog/Contact in column 2
  And cake type links in column 3
  And contact info with phone number in column 4

Scenario: Footer bottom has Component Dock link
  Given the user scrolls to the footer bottom
  Then the copyright line contains a link to "https://www.componentdock.com/"
```

## Verification Checklist

- [ ] Section order matches the original 1:1 (Header → Hero → Popular → About → Services → Video → Testimonials → Instagram → Footer)
- [ ] Brand color #F04506 used for all CTAs, links, and accent spans
- [ ] Fonts: DM Sans body, Quicksand headings, Lobster decorative
- [ ] Buttons have 30px border-radius (pill shape)
- [ ] Product cards have #FFF5F2 background with 60px bottom-right border-radius
- [ ] Footer background is #FFF7F3
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeScript strict mode, no `any` types
- [ ] All interactive elements are keyboard accessible
