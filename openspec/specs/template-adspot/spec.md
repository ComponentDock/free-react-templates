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

## Gherkin Requirements

### Feature: Adspot Classified Ads Template

```gherkin
Scenario: Navbar renders with correct brand and links
  Given the Adspot page loads
  Then the navbar displays the brand "Classy" with "Ads" in accent color
  And the navbar contains links: Home, Ads, About, Blog, Contact
  And there are Log In and Register links
  And a "+ Post an Ad" call-to-action button is visible

Scenario: Hero section renders search functionality
  Given the page loads
  Then the hero displays the headline "Largest Classifieds In The World"
  And a subtitle "You can buy, sell anything you want." is shown
  And a search form is visible with fields: What, Location, Category dropdown
  And a "Search" button is present

Scenario: Category bar displays 6 categories with counts
  Given the page loads
  Then 6 category cards are displayed in a row
  And each category card shows an icon, name, and listing count
  And the categories are: Real Estate, Books & Magazines, Furniture, Electronics, Cars & Vehicles, Other

Scenario: Featured Ads carousel shows listing cards
  Given the page loads
  Then a "Featured Ads" section is visible
  And listing cards are displayed in a carousel
  And each card has an image, category badge, title, address, and star rating

Scenario: Popular Products section shows listing grid
  Given the page loads
  Then a "Popular Products" heading is displayed
  And 5 listing items are shown in a responsive grid
  And each item has an image, category badge, title, and address

Scenario: Trending Today section shows listings
  Given the page loads
  Then a "Trending Today" heading is displayed
  And listing cards are shown in a 2-column layout
  And each card has an image, category badge, title, address, and star rating

Scenario: Testimonials carousel displays reviews
  Given the page loads
  Then a "Testimonials" heading is displayed
  And customer testimonials are shown in a carousel
  And each testimonial has a profile photo, name, and quote

Scenario: Blog section shows 3 articles
  Given the page loads
  Then a "Our Blog" heading is displayed
  And 3 blog cards are shown in a row
  And each card has an image, title, author, date, category, and excerpt
  And a "View All Posts" button is visible

Scenario: Newsletter section captures email subscriptions
  Given the page loads
  Then a newsletter section is visible with blue background
  And an email input field is present
  And a "Subscribe" button is displayed

Scenario: Footer displays navigation and social links
  Given the page loads
  Then the footer shows About, Navigations, and Follow Us sections
  And social media icon links are present (Facebook, Twitter, Instagram, LinkedIn)
  And a search form is in the footer
  And a copyright notice is displayed

Scenario: All sections render on mobile viewport
  Given the page is viewed on a 375px wide viewport
  Then the navbar collapses to a hamburger menu
  And the hero search form stacks vertically
  And category cards stack in a grid
  And listing cards stack vertically
  And the footer columns stack vertically
```

## Verification Checklist

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
