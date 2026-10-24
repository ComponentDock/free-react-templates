# Template: Chophouse (Restaurant)
<!-- prep-status: shipped-as=smokehouse -->
> **SHIPPED-UNDER** — the ColorLib `steak` design this prep describes already
> ships as `apps/smokehouse` (<https://smokehouse.free.componentdock.com>).
> Do not scaffold `apps/chophouse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-smokehouse/spec.md`.

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

## Requirements

### Feature: Chophouse Restaurant Template

#### Scenario: Page loads with hero section visible

- **GIVEN** the user visits the Chophouse page
- **THEN** the hero section is visible with heading "Welcome To Steak Food & Restaurant"
- **AND** the navigation bar shows links: Home, Menu, Gallery, Contact, Reserve Now
- **AND** the "Reserve Now" button is styled as a primary CTA

#### Scenario: Navigation becomes opaque on scroll

- **GIVEN** the user is at the top of the page
- **THEN** the header has a transparent background
- **WHEN** the user scrolls down past the hero
- **THEN** the header has a white background with shadow

#### Scenario: Hero displays parallax background

- **GIVEN** the user views the hero section
- **THEN** a full-viewport background image is visible
- **AND** a dark overlay covers the background
- **AND** a "Play Video" button is centered on the hero

#### Scenario: About section shows two-column layout

- **GIVEN** the user scrolls to the About section
- **THEN** an image is displayed on the left
- **AND** the heading "Welcome To Steak Food & Restaurant" appears on the right
- **AND** a "Read More" button is visible below the text

#### Scenario: Services section displays 6 service cards

- **GIVEN** the user scrolls to the Services section
- **THEN** 6 service cards are visible in a 3-column grid
- **AND** each card has an icon, title, and description
- **AND** the section has a light grey background

#### Scenario: Menu section has tabbed navigation

- **GIVEN** the user scrolls to the Menu section
- **THEN** three tabs are visible: Breakfast, Lunch, Dinner
- **WHEN** the user clicks the "Lunch" tab
- **THEN** the Lunch menu items are displayed
- **AND** each item shows an image, name, price, and description
- **WHEN** the user clicks the "Dinner" tab
- **THEN** the Dinner menu items are displayed

#### Scenario: Fun Facts section shows animated counters

- **GIVEN** the user scrolls to the Fun Facts section
- **THEN** 3 counter stats are visible
- **AND** the counters animate from 0 to their target values
- **AND** the section has a light grey background

#### Scenario: News & Events displays event cards

- **GIVEN** the user scrolls to the News & Events section
- **THEN** 3 event cards are visible
- **AND** each card has a thumbnail, title, date, and comment count

#### Scenario: Testimonials carousel works

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a testimonial quote is visible with author name and title
- **WHEN** the user clicks the next arrow
- **THEN** the next testimonial is displayed
- **AND** the section has a light grey background

#### Scenario: Reservation form collects table booking details

- **GIVEN** the user scrolls to the Reservation section
- **THEN** the opening hours are displayed on the left
- **AND** the phone number is visible
- **AND** the reservation form has fields: Date, Time, Name, Phone, Email
- **WHEN** the user fills all required fields and submits
- **THEN** the form is submitted (no server — local state only)

#### Scenario: Footer displays 4-column layout

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are visible: About, Quick Links, Support, Connect
- **AND** a copyright line with "Component Dock" link is at the bottom

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
