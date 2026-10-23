# Template: Adspot (Classified Ads Marketplace)

## Purpose

Recreation of ColorLib "Classy Ads" — a classified ads / marketplace website template.

- **Source slug:** `classyads`
- **Preview URL:** https://preview.colorlib.com/theme/classyads/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/classyads-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Marketplace / Classified Ads

## Design Tokens

Extracted from the live preview CSS (`style.css`) and DOM analysis.

### Colors

| Token              | Value                           | Usage                                                                                                 |
| ------------------ | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| primary-teal       | `#30e3ca`                       | Accent underline on section headings, form focus border color                                         |
| primary-blue       | `#007bff`                       | Bootstrap default — CTA buttons, newsletter bg (`bg-primary`), "Post an Ad" button                    |
| black              | `#000`                          | Logo text, headings, bookmark hearts                                                                  |
| body-text          | `#4d4d4d`                       | Body paragraph text                                                                                   |
| white              | `#ffffff`                       | Page backgrounds (white sections), navbar bg, button text on primary bg                               |
| bg-light           | `#f8f9fa`                       | Light section backgrounds (categories, trending, blog)                                                |
| footer-bg          | `#333333`                       | Footer background                                                                                     |
| footer-text        | `#737373`                       | Footer paragraph text                                                                                 |
| footer-link        | `#999999`                       | Footer links, hover → white                                                                           |
| star-warning       | `#ffc107`                       | Star ratings (Bootstrap text-warning)                                                                 |
| overlay-dark       | `rgba(0,0,0,0.4-0.5)`          | Hero overlay, listing card overlays                                                                   |
| category-badge     | `#30e3ca`                       | Category label badge on listing items                                                                 |

### Typography

- **Font family:** `"Nanum Gothic", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Body:** `1rem`, `line-height: 1.7`, `font-weight: 400`
- **Headings (h1-h5):** Same font family, bold weights
- **Hero h1:** Large, centered, white on overlay
- **Section headings:** `font-weight: 700`, with teal underline accent via `.border-primary:after`
- **Logo:** "Classy" in black, "Ads" in primary-blue (`text-primary`)
- **Category card captions:** small, white on dark overlay
- **Category card numbers:** large, bold, white

### Buttons & Shapes

- **Primary CTA (Search, + Post an Ad):** Bootstrap `.btn-primary` (blue `#007bff`), `.rounded` (border-radius varies), white text
- **Newsletter Subscribe:** `.btn-white` on blue bg-primary
- **Popular-category cards:** `border-radius: 7px`, dark overlay bg, icon + caption + number
- **Nav active item:** `border-radius: 30px` pill shape
- **Hero search form:** `.rounded` inputs, flex row layout
- **Listing bookmark hearts:** icon-only, overlay on card image
- **Category badges:** pill-shaped (`border-radius: 30px`), teal bg, white text

### Section Backgrounds

- Navbar: solid white (`bg-white`)
- Hero: background image + dark overlay (AOS fade)
- Category Bar: light gray (`bg-light`)
- Featured Ads: light gray (`bg-light`)
- Popular Products: white
- Trending Today: light gray (`bg-light`)
- Testimonials: white (`bg-white`)
- Our Blog: light gray (`bg-light`)
- Newsletter: blue (`bg-primary` = Bootstrap blue)
- Footer: dark gray (`#333333`)

## Section Order (from live preview DOM)

1. **Navbar** — White bg, "ClassyAds" logo (Ads in blue), nav links: Home, Ads, About (dropdown: The Company, The Leadership, Philosophy, Careers), Blog, Contact, Log In, Register, "+ Post an Ad" pill button (blue bg)
2. **Hero** — Full-width bg image, dark overlay, centered content: h1 "Largest Classifieds In The World", subtitle, search form (What + Location + Category dropdown + Search button)
3. **Category Bar** — Light bg, 6 category cards in a row: Real Estate (3,921), Books & Magazines (398), Furniture (1,229), Electronics (32,891), Cars & Vehicles (29,221), Other (219) — each with icon, caption, count
4. **Featured Ads** — Light bg, "Featured Ads" heading, owl-carousel of listing cards (image + category badge + heart bookmark + title + address + star rating + review count)
5. **Popular Products** — White bg, "Popular Products" heading, 5 listing items (image + heart bookmark + category badge overlay + title + address)
6. **Trending Today** — Light bg, "Trending Today" heading, 2-column grid of listing cards (mixed vertical/horizontal layouts, star ratings)
7. **Testimonials** — White bg, "Testimonials" heading, owl-carousel with profile photo + name + blockquote
8. **Our Blog** — Light bg, "Our Blog" heading, 3-column blog cards (image + title + author/date/category meta + excerpt), "View All Posts" button
9. **Newsletter** — Blue bg-primary, "Newsletter" heading + description + email input + "Subscribe" button
10. **Footer** — Dark gray (#333) bg, About text + Navigations links + Follow Us social icons + Search form + copyright

## Requirements

### Feature: Adspot Classified Ads Template

#### Scenario: Navbar renders with correct brand and links

- **GIVEN** the Adspot page loads
- **THEN** the navbar displays the brand "Classy" with "Ads" in accent color
- **AND** the navbar contains links: Home, Ads, About, Blog, Contact
- **AND** there are Log In and Register links
- **AND** a "+ Post an Ad" call-to-action button is visible

#### Scenario: Hero section renders search functionality

- **GIVEN** the page loads
- **THEN** the hero displays the headline "Largest Classifieds In The World"
- **AND** a subtitle "You can buy, sell anything you want." is shown
- **AND** a search form is visible with fields: What, Location, Category dropdown
- **AND** a "Search" button is present

#### Scenario: Category bar displays 6 categories with counts

- **GIVEN** the page loads
- **THEN** 6 category cards are displayed in a row
- **AND** each category card shows an icon, name, and listing count
- **AND** the categories are: Real Estate, Books & Magazines, Furniture, Electronics, Cars & Vehicles, Other

#### Scenario: Featured Ads carousel shows listing cards

- **GIVEN** the page loads
- **THEN** a "Featured Ads" section is visible
- **AND** listing cards are displayed in a carousel
- **AND** each card has an image, category badge, title, address, and star rating

#### Scenario: Popular Products section shows listing grid

- **GIVEN** the page loads
- **THEN** a "Popular Products" heading is displayed
- **AND** 5 listing items are shown in a responsive grid
- **AND** each item has an image, category badge, title, and address

#### Scenario: Trending Today section shows listings

- **GIVEN** the page loads
- **THEN** a "Trending Today" heading is displayed
- **AND** listing cards are shown in a 2-column layout
- **AND** each card has an image, category badge, title, address, and star rating

#### Scenario: Testimonials carousel displays reviews

- **GIVEN** the page loads
- **THEN** a "Testimonials" heading is displayed
- **AND** customer testimonials are shown in a carousel
- **AND** each testimonial has a profile photo, name, and quote

#### Scenario: Blog section shows 3 articles

- **GIVEN** the page loads
- **THEN** a "Our Blog" heading is displayed
- **AND** 3 blog cards are shown in a row
- **AND** each card has an image, title, author, date, category, and excerpt
- **AND** a "View All Posts" button is visible

#### Scenario: Newsletter section captures email subscriptions

- **GIVEN** the page loads
- **THEN** a newsletter section is visible with blue background
- **AND** an email input field is present
- **AND** a "Subscribe" button is displayed

#### Scenario: Footer displays navigation and social links

- **GIVEN** the page loads
- **THEN** the footer shows About, Navigations, and Follow Us sections
- **AND** social media icon links are present (Facebook, Twitter, Instagram, LinkedIn)
- **AND** a search form is in the footer
- **AND** a copyright notice is displayed

#### Scenario: All sections render on mobile viewport

- **GIVEN** the page is viewed on a 375px wide viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero search form stacks vertically
- **AND** category cards stack in a grid
- **AND** listing cards stack vertically
- **AND** the footer columns stack vertically

## Verification checklist

- [ ] Navbar: white bg, brand with accent color, all links, CTA button
- [ ] Hero: background image, dark overlay, headline, subtitle, search form with 4 fields
- [ ] Categories: 6 cards with icons, names, counts in responsive row
- [ ] Featured Ads: carousel with listing cards (image, category, title, address, stars)
- [ ] Popular Products: heading, 5 listing items in grid
- [ ] Trending Today: heading, listing cards in 2-col layout
- [ ] Testimonials: carousel with photos, names, quotes
- [ ] Blog: 3 blog cards with image, title, meta, excerpt, "View All Posts" button
- [ ] Newsletter: blue bg, email input, subscribe button
- [ ] Footer: dark bg, About/Navigations/Social/Search, copyright
- [ ] Mobile responsive: hamburger nav, stacked layouts
- [ ] Color tokens: teal (#30e3ca) accent, blue (#007bff) primary, dark (#333) footer
- [ ] Font: Nanum Gothic via Google Fonts
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
