# Template: Chophouse (Restaurant)

## Purpose

Chophouse is a single-page restaurant TEMPLATE in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Steak" free
template (source: https://colorlib.com/wp/template/steak/), built under a
DIFFERENT name (**Chophouse**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + jQuery restaurant template with a parallax
hero, about section, services grid, tabbed menu, counter stats, news/events
cards, testimonials carousel, reservation form, and a 4-column footer. The
design uses Playfair Display serif headings, orange brand accents, and dark
hero overlays on food photography backgrounds.

**Source slug:** `steak`
**Preview URL:** https://preview.colorlib.com/theme/steak/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/steak-free-template.jpg

## Design tokens (live stylesheet `css/style.css`, verified 2026-09-28)

| Token            | Value                                  | Use                                                                   |
| ---------------- | -------------------------------------- | --------------------------------------------------------------------- |
| Font heading     | 'Playfair Display' 300/400/700        | Google Fonts `<link>`; all section headings, hero title               |
| Font body        | system sans-serif stack                | Body text, nav, buttons                                               |
| Brand orange     | `#e58405`                              | Accent color (headings, highlights)                                   |
| Brand orange alt | `#fba83b`                              | Button primary background + border (lighter orange-yellow)            |
| Brand red        | `#aa0719` / `#bd081d`                  | Dark red accent (footer link hovers, secondary accent)                |
| Dark overlay     | `#313137` at opacity 0.4              | Hero parallax overlay (`.cover-parallax-1.overlay-1:before`)          |
| Page bg          | `#fff`                                 | Default page background                                               |
| Light section bg | `#f8f9fa` (Bootstrap `bg-light`)      | Services, fun facts, testimonials sections                            |
| Body text        | `#212529`                              | Default text color                                                    |
| Muted text       | `#6c757d`                              | Secondary/muted text                                                  |
| Button radius    | `0.25rem` (4px)                        | `.btn` border-radius                                                  |
| Button primary   | bg `#fba83b`, text `#212529`          | `.btn-primary` orange CTA buttons                                     |
| Hero heading     | 80px line-height 1.2 (desktop)        | `.cover-parallax-1 .heading` (responsive: 50px on smaller screens)    |
| Header           | transparent (absolute), white bg when  | `.templateux-header` scrolled state                                   |
|                  | scrolled `.scrolled`                   |                                                                       |
| Section spacing  | 80px 0 (`.templateux-section`)        | Top/bottom padding for major sections                                 |

**Font import:** `@import url("https://fonts.googleapis.com/css?family=Playfair+Display:300,400,700")`

**Icon fonts in original:** Ionicons, Flaticon, icomoon — ALL to be replaced
with `lucide-react` icons. Do NOT ship icon font files.

## Sections (DOM order)

1. **Navbar** — Fixed/absolute header, transparent on hero, white `.scrolled`
   state. Logo left ("Steak" text), nav right: Home, Menu, Gallery, Contact,
   "Reserve Now" CTA button. Hamburger toggle on mobile.
2. **Hero** — Full-viewport parallax section (`.cover-parallax-1.overlay-1`),
   background image with dark overlay (`#313137` at 0.4). Centered content:
   large heading "Welcome To Steak Food & Restaurant" (Playfair Display 80px
   bold white), subtext paragraph, "Play Video" button. Scroll indicator
   arrow at bottom.
3. **About / Welcome** — Two-column layout: left = food image, right = heading
   "Welcome To Steak Food & Restaurant" + description paragraph + "Read More"
   button (`.btn-primary`). Section has no background (white).
4. **Services** — `bg-light` section. Heading "Restaurant Services" + intro
   paragraph. 3×2 grid of 6 service cards, each with icon + title + description:
   Noodles & Spaghetti, Big Hamburger, Chicken Leg, Vegetarian Food, Fried
   Chicken, Beef Steak & Rib.
5. **Menu** — White background. Heading "Our Menu" + intro paragraph. Three
   tabs: Breakfast, Lunch, Dinner. Each tab shows a 3-column grid of menu
   items with image + dish name (h5) + price (h6) + description text.
   Items: Salted Fried Chicken ($35.50), Italian Sauce Mushroom ($24.50),
   Fried Potato w/ Garlic ($14.50), etc. (~6 items visible per tab).
6. **Fun Facts** — `bg-light` section. Heading "Today's Fun Facts". Three
   counter stats in a row: "0 Japanese Noodles Sold", "0 Tasty Burgers Sold",
   "0 Fried Chicken Sold" (animated counters).
7. **News & Events** — White background. Heading "News & Events" + intro
   paragraph. 3-column grid of event cards, each with thumbnail image,
   title, date, comment count. Events: "Party At The Beach" (Jan 20, 2019,
   3 Comments), "Unlimited Drinks" (Jan 20, 2019, 3 Comments), "Party At
   The Beach" (Jan 20, 2019, 3 Comments).
8. **Testimonials** — `bg-light` section. Carousel/slider of testimonial
   cards with quote text + author name + title. Authors: John Doe (CEO,
   Founder), James Woodland, Rob Smith. Navigation arrows for carousel.
9. **Reservation** — White background. Heading "Reserve A Table" + intro
   paragraph. Two-column layout: left = opening hours (Mon–Fri 7AM–11AM
   Breakfast, 12PM–11PM Lunch/Dinner; Sat CLOSED; Sun same as weekdays)
   + phone number (+1 398 239 8483); right = reservation form with fields:
   Date, Time, Name, Phone, Email + submit button.
10. **Footer** — Dark background (`#16181b`). 4-column layout:
    - Col 1: "About Steak Restaurant" + description text
    - Col 2: "Quick Links" (Home, Menu, Gallery, Reservation, FAQ, Contact Us)
    - Col 3: "Support" (Call Us, About Us, Careers, Terms, Privacy)
    - Col 4: "Connect With Us" (social icons)
    Bottom: copyright line + "Component Dock" link.

## Gherkin requirements

### Feature: Chophouse Restaurant Template

  Scenario: Page loads with hero section visible
    Given the user visits the Chophouse page
    Then the hero section is visible with heading "Welcome To Steak Food & Restaurant"
    And the navigation bar shows links: Home, Menu, Gallery, Contact, Reserve Now
    And the "Reserve Now" button is styled as a primary CTA

  Scenario: Navigation becomes opaque on scroll
    Given the user is at the top of the page
    Then the header has a transparent background
    When the user scrolls down past the hero
    Then the header has a white background with shadow

  Scenario: Hero displays parallax background
    Given the user views the hero section
    Then a full-viewport background image is visible
    And a dark overlay covers the background
    And a "Play Video" button is centered on the hero

  Scenario: About section shows two-column layout
    Given the user scrolls to the About section
    Then an image is displayed on the left
    And the heading "Welcome To Steak Food & Restaurant" appears on the right
    And a "Read More" button is visible below the text

  Scenario: Services section displays 6 service cards
    Given the user scrolls to the Services section
    Then 6 service cards are visible in a 3-column grid
    And each card has an icon, title, and description
    And the section has a light grey background

  Scenario: Menu section has tabbed navigation
    Given the user scrolls to the Menu section
    Then three tabs are visible: Breakfast, Lunch, Dinner
    When the user clicks the "Lunch" tab
    Then the Lunch menu items are displayed
    And each item shows an image, name, price, and description
    When the user clicks the "Dinner" tab
    Then the Dinner menu items are displayed

  Scenario: Fun Facts section shows animated counters
    Given the user scrolls to the Fun Facts section
    Then 3 counter stats are visible
    And the counters animate from 0 to their target values
    And the section has a light grey background

  Scenario: News & Events displays event cards
    Given the user scrolls to the News & Events section
    Then 3 event cards are visible
    And each card has a thumbnail, title, date, and comment count

  Scenario: Testimonials carousel works
    Given the user scrolls to the Testimonials section
    Then a testimonial quote is visible with author name and title
    When the user clicks the next arrow
    Then the next testimonial is displayed
    And the section has a light grey background

  Scenario: Reservation form collects table booking details
    Given the user scrolls to the Reservation section
    Then the opening hours are displayed on the left
    And the phone number is visible
    And the reservation form has fields: Date, Time, Name, Phone, Email
    When the user fills all required fields and submits
    Then the form is submitted (no server — local state only)

  Scenario: Footer displays 4-column layout
    Given the user scrolls to the footer
    Then 4 columns are visible: About, Quick Links, Support, Connect
    And a copyright line with "Component Dock" link is at the bottom

## Verification checklist

- [ ] All 10 sections render in correct DOM order
- [ ] Navbar: transparent → white on scroll, all nav links present
- [ ] Hero: parallax bg, dark overlay, centered heading, Play Video button
- [ ] About: two-column (image left, text right), Read More button
- [ ] Services: bg-light, 6 cards in 3-col grid, icons via lucide-react
- [ ] Menu: 3 tabs (Breakfast/Lunch/Dinner), items with image/name/price
- [ ] Fun Facts: 3 animated counters, bg-light
- [ ] News & Events: 3 event cards with thumbnail/title/date/comments
- [ ] Testimonials: carousel with quote/author, prev/next navigation
- [ ] Reservation: hours + phone left, form right (Date/Time/Name/Phone/Email)
- [ ] Footer: 4 columns, dark bg (#16181b), Component Dock link
- [ ] Playfair Display font loaded via Google Fonts
- [ ] Brand orange (#fba83b) used for primary buttons
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] `public/CNAME` = `chophouse.free.componentdock.com`
- [ ] `package.json` homepage = `https://chophouse.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`
- [ ] Tests: 100% coverage (Vitest + Testing Library)
- [ ] `npm run verify:app -- chophouse` passes (typecheck + lint + test + build)
