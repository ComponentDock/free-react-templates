# Template: SoleShine (E-Commerce Shoe Store)

## Purpose

Recreation of ColorLib's **Solestyle** shoe store template as a modern React component.

- **Source:** [colorlib.com/wp/template/solestyle/](https://colorlib.com/wp/template/solestyle/)
- **Preview:** [preview.colorlib.com/theme/solestyle/](https://preview.colorlib.com/theme/solestyle/)
- **Source slug:** `solestyle`
- **New name:** `soleshine` (never reuse ColorLib source name)
- **Package:** `@free-react-templates/soleshine`
- **Deploy URL:** `https://soleshine.free.componentdock.com`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** E-Commerce / Shoe Store

## Design Tokens

Extracted from the live preview CSS (`Base.LD3yxqgO.css`) and HTML:

| Token              | Value                          | Notes                                    |
| ------------------ | ------------------------------ | ---------------------------------------- |
| Brand / primary    | `#f97316` (orange-500)         | Buttons, badges, accents                 |
| Primary 600        | `#ea580c`                      | Gradient from-color, hover               |
| Primary 700        | `#c2410c`                      | Gradient to-color                        |
| Font body          | `Inter`                        | Google Fonts, default sans-serif         |
| Font display       | `Outfit`                       | Headings, hero text (`.font-display`)    |
| Hero bg            | `#030712` (gray-950)           | Near-black full-screen hero              |
| Hero gradient      | `gray-900 → gray-950 → primary-950` | Subtle dark gradient overlay        |
| Hero blur orbs     | `primary-500/10`, `primary-600/10` | Decorative glow circles (blur-[100px]) |
| Category card bg   | gradient overlay (`gray-900 → transparent`) | Dark-to-top overlay on images  |
| Featured card bg   | white                          | Product cards on white                   |
| Featured section   | `gray-50`                      | Light gray background                    |
| New Arrivals bg    | `gray-950`                     | Dark section for new arrivals            |
| Product card bg    | `gray-800`                     | Dark cards in dark section               |
| Trust badges bg    | `white`                        | Light section with icons                 |
| Review section bg  | `gray-950`                     | Dark section with testimonials           |
| CTA section bg     | `gray-950` with primary glow   | Final CTA with orange gradient orb       |
| Rounded corners    | `rounded-xl`, `rounded-2xl`, `rounded-3xl` | Generous radius              |
| Button radius      | `rounded-xl`                   | Primary CTAs                             |
| Sale badge         | `rounded-full` + orange bg     | Animated pulse badge on hero             |
| Announcement bar   | `bg-gradient-to-r from-primary-600 to-primary-500` | Top orange banner           |
| Rating stars       | `text-yellow-400`              | Star ratings on products                 |
| Price strikethrough| `text-gray-500 line-through`   | Original price                           |
| Price current      | `text-gray-900 font-bold`      | Sale/current price                       |
| Success badge      | `bg-green-500/20 text-green-500` | Trust/verification indicators          |

### Visual Design

- Full-width dark hero (~90vh) with large white headline "Step Into / Your Best" and floating shoe image with parallax
- Animated sale badge (orange circle, pulse animation) floating on hero
- Floating glass cards (white/10 bg, backdrop-blur) on left/right sides with stats
- "Shop by Category" section: 6-column grid of category cards (Running, Sneakers, Basketball, Casual, Boots, Sandals) with dark overlay images
- "Featured Collection" section on gray-50: 6 product cards (4/3 aspect ratio images) with ratings, prices, add-to-cart buttons
- Trust badges row: 4 icons with labels (Free Shipping, 60-Day Returns, Size Guarantee, Secure Checkout)
- "New Arrivals" dark section: product cards with image hover effect showing quick-view overlay
- "What Our Customers Say" review section with star ratings and testimonial quotes
- "Ready to Step Up Your Game?" CTA with newsletter signup and glowing primary orb
- Dark footer with links and Component Dock attribution

## Requirements

### Requirement: Top announcement banner

The template SHALL render a top announcement banner with gradient orange background.

#### Scenario: Announcement banner renders

- **WHEN** the page loads
- **THEN** a gradient banner from orange-600 to orange-500 is visible at the top
- **AND** the banner has white text on a centered small-font line

### Requirement: Navbar with logo and navigation

The template SHALL render a responsive navbar with brand logo, navigation links, and utility icons.

#### Scenario: Navbar renders with brand

- **WHEN** the page loads
- **THEN** the navbar displays the brand name/logo
- **AND** navigation links are visible (Shop, Categories, New Arrivals, Sale, Contact)
- **AND** utility icons are present (search, account, cart)

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile hamburger icon on a small screen
- **THEN** a mobile navigation drawer opens
- **AND** all navigation links are accessible

#### Scenario: Navbar scrolls to solid background

- **WHEN** the user scrolls past the hero
- **THEN** the navbar gains a solid white/95% opacity background with shadow

### Requirement: Hero section

The template SHALL render a full-viewport dark hero with headline, subtext, CTA buttons, and floating product image.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the hero section is visible
- **THEN** the headline reads "Step Into Your Best"
- **AND** there are two CTA buttons ("Shop Now" primary, "View Collection" secondary/outline)
- **AND** the background is near-black (gray-950) with gradient overlay

#### Scenario: Hero displays floating shoe image

- **WHEN** the hero renders
- **THEN** a shoe product image is displayed with a floating animation
- **AND** decorative glass stat cards appear on left and right sides
- **AND** an orange circular sale badge is visible

#### Scenario: Hero trust stats

- **WHEN** the hero renders
- **THEN** stats are displayed below the CTAs (e.g., "50K+ Happy Customers", "10K+ Products")

### Requirement: Shop by Category section

The template SHALL render a category grid with labeled image cards.

#### Scenario: Category section renders 6 categories

- **WHEN** the Shop by Category section is visible
- **THEN** a heading "Shop by Category" is displayed
- **AND** 6 category cards are shown in a responsive grid (Running, Sneakers, Basketball, Casual, Boots, Sandals)
- **AND** each card has an overlay with category name

#### Scenario: Category card hover effect

- **WHEN** the user hovers over a category card
- **THEN** the overlay opacity increases and the category content shifts up

### Requirement: Featured Collection section

The template SHALL render a product grid on a light gray background.

#### Scenario: Featured products render

- **WHEN** the Featured Collection section is visible
- **THEN** a heading "Featured Collection" is displayed
- **AND** 6 product cards are shown in a 2/3-column responsive grid
- **AND** each card has an image (4/3 aspect ratio), product name, star rating, price, and add-to-cart button

#### Scenario: Product card interaction

- **WHEN** the user hovers over a product card
- **THEN** the card lifts with a shadow effect (translateY(-4px))
- **AND** a quick-view overlay appears on the image

### Requirement: Trust badges section

The template SHALL render a row of trust/shipping benefit badges.

#### Scenario: Trust badges render

- **WHEN** the trust badges section is visible
- **THEN** 4 badges are displayed in a row (Free Shipping, 60-Day Returns, Size Guarantee, Secure Checkout)
- **AND** each badge has an icon and text label

### Requirement: New Arrivals section

The template SHALL render new arrival products on a dark background.

#### Scenario: New arrivals render

- **WHEN** the New Arrivals section is visible
- **THEN** a heading "New Arrivals" is displayed on dark background (gray-950)
- **AND** product cards are shown with image, name, rating, price, and sale badge if applicable
- **AND** products have an image hover effect showing quick-view actions

### Requirement: Customer reviews section

The template SHALL render customer testimonials with star ratings.

#### Scenario: Reviews section renders

- **WHEN** the reviews section is visible
- **THEN** a heading "What Our Customers Say" is displayed
- **AND** at least 3 review cards are shown with star ratings and testimonial text
- **AND** reviewer name/avatar is displayed

### Requirement: Newsletter CTA section

The template SHALL render a final call-to-action with newsletter signup.

#### Scenario: CTA section renders

- **WHEN** the CTA section is visible
- **THEN** a heading "Ready to Step Up Your Game?" is displayed
- **AND** a "Join the Stride Club" message with email input and subscribe button is shown
- **AND** the section has a dark background with an orange glow orb decoration

### Requirement: Footer with Component Dock link

The template SHALL render a footer with navigation links and Component Dock attribution.

#### Scenario: Footer renders

- **WHEN** the footer is visible
- **THEN** navigation links are present
- **AND** a link to `https://www.componentdock.com/` branded as "Component Dock" is displayed

### Requirement: Dark mode support

The template SHALL support dark/light mode toggle via Tailwind dark: utilities.

#### Scenario: Dark mode toggle

- **WHEN** the user activates dark mode
- **THEN** all sections render with dark color scheme
- **AND** the toggle switch is functional and persists the choice

## Verification checklist

- [ ] All sections render and match the original section order
- [ ] Design tokens (orange primary, Inter/Outfit fonts, rounded-xl buttons) match
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Category cards have hover overlay effect
- [ ] Product cards have hover lift and quick-view overlay
- [ ] Floating shoe animation plays in hero
- [ ] Sale badge pulse animation works
- [ ] Navbar scrolls to solid background
- [ ] Mobile menu opens/closes correctly
- [ ] Dark mode toggle works across all sections
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (spec only)
- [ ] Placeholder images use picsum.photos
