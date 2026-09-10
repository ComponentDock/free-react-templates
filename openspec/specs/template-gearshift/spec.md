# Template: Gearshift (Car Rental)

## Purpose

Recreation of ColorLib **Autoroad** — a car rental website template.
- **Source:** https://colorlib.com/wp/template/autoroad/
- **Preview:** https://preview.colorlib.com/theme/autoroad/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/gearshift`
- **Deploy:** `gearshift.free.componentdock.com`

## Design tokens (extracted from live preview)

| Token | Value | Source |
|-------|-------|--------|
| Brand color | `#fc983c` (orange) | `.btn.btn-primary`, `.bg-primary`, `.services .icon`, `.price-wrap .rate` |
| Font family | `"Poppins", Arial, sans-serif` | HTML `<link>` + inline CSS |
| Button border-radius | `3px` (general), `0` (form submit) | `.btn { border-radius: 3px }`, `.request-form .form-control.btn { border-radius: 0 }` |
| Primary button | bg `#fc983c`, text `#fff`, hover → transparent bg + `#fc983c` text | `.btn.btn-primary` |
| Black button | bg `#000`, text `#fff` | `.btn.btn-black` |
| Outline black button | transparent bg, `#ebebeb` border, `#000` text, hover → `#fc983c` bg + `#fff` text | `.btn.btn-black.btn-outline-black` |
| Body text | `#212529` | Bootstrap default |
| Hero overlay | dark semi-transparent black | `.hero-wrap .overlay` |
| Hero heading | white, `60px`, weight `200` (light) | `.slider-text h1` |
| Request form | white bg, `5px` border-radius, box-shadow `0px 10px 31px -21px rgba(0,0,0,0.33)` | `.request-form` |
| Form input border-radius | `0` (sharp corners) | `.request-form .form-control { border-radius: 0px }` |
| Form labels | `12px`, uppercase, weight `600`, color `#000` | `.request-form label.label` |
| Search bar form | `50px` height, border `#ebebeb`, border-radius `0` | `.search-property-1 .form-control` |
| Search bar icon | `#fc983c` | `.search-property-1 .form-group .icon` |
| Services icon | `#fc983c` background circle | `.services .icon` |
| Services section bg | parallax image with dark overlay | `.services-section.img { background-image }` + `.overlay` |
| How-it-works section | heading-section-white (white text on parallax bg) | `.heading-section.heading-section-white` |
| Car card price | `#fc983c` rate, white price-wrap with shadow | `.car-wrap .price-wrap .rate` |
| Footer bg | `#000` (black) | `.ftco-footer { background: #000 }` |
| Footer dark variant | `#3c312e` (dark brown) | `.ftco-bg-dark { background: #3c312e }` |
| Footer heading | white | `.ftco-footer .ftco-heading-2` |
| Footer link | white, hover → `#fc983c` | `.ftco-footer a`, `.ftco-footer a:hover` |
| Social icon circle | `border-radius: 50%`, hover → `#fc983c` bg | `.ftco-footer-social li a` |
| Testimonial carousel | user photo circle, centered text | `.testimony-wrap` |
| Blog card meta | small text, icon for comment count | `.blog-entry .meta` |
| Blog heading link | hover → `#fc983c` | `.blog-entry .text .heading a:hover` |

## Section structure (from live DOM)

1. **Navbar** — dark bg, brand "Gearshift", nav links: Home, About, Pricing, Our Fleet, Blog, Contact
2. **Hero** — full-width bg image, overlay, headline "Now it's easy to rent a car", subtext, video play icon (circular `#fc983c` bg), booking form (right side): pick-up location, drop-off location, pick-up date, drop-off date, pick-up time, "Search Vehicle" button
3. **Search filter bar** — horizontal dropdowns: Select Model, Select Brand, Year Model, Price Limit, "Search" button (full-width, `#fc983c` bg)
4. **Our Services** — 4-column cards: 24/7 Support, Locations, Reservation, Rental Cars (icon + title + description)
5. **Choose Your Fleet** — 4-column grid of car cards, each: bg image, price overlay (white card, `#fc983c` rate), car name, brand label, "Book now" + "Details" outline buttons
6. **How It Works** — parallax bg image, dark overlay, white text, 4 steps: Pick Destination, Select Term, Choose A Car, Enjoy The Ride (icon circles + heading + description)
7. **Testimonials** — carousel, centered: circular user photo, quote text, name, position
8. **About Us** — split layout (50/50): image left, text right with heading "Choose A Perfect Car", description paragraphs, "Search Vehicle" CTA button
9. **Blog** — 3-column blog cards: bg image, meta (date, author, comment count), heading link, excerpt
10. **Footer** — dark bg (`#000`), 4 columns: About (description + social icons), Information links, Customer Support links, Contact info (address, phone, email), copyright line

## Gherkin scenarios

### Feature: Gearshift — Car Rental Template

#### Scenario: Navbar renders all navigation links
  Given the user loads the Gearshift homepage
  Then the navbar displays the brand "Gearshift"
  And navigation links "Home", "About", "Pricing", "Our Fleet", "Blog", "Contact" are visible

#### Scenario: Hero section displays booking form
  Given the user loads the homepage
  Then the hero section shows the headline about renting a car
  And a booking form with pick-up location, drop-off location, dates, and time fields is visible
  And the "Search Vehicle" button is rendered in brand orange

#### Scenario: Search filter bar shows dropdown filters
  Given the user scrolls to the search filter section
  Then dropdowns for Model, Brand, Year, and Price Limit are visible
  And a "Search" button is displayed with brand orange background

#### Scenario: Services section displays four service cards
  Given the user scrolls to the services section
  Then 4 service cards are rendered: 24/7 Support, Locations, Reservation, Rental Cars
  And each card has an icon, title, and short description

#### Scenario: Fleet section displays car cards in grid
  Given the user scrolls to the car fleet section
  Then car cards are displayed in a 4-column grid
  And each card shows a car image, price with "From" and "/Day" labels, car name, and brand
  And each card has "Book now" and "Details" buttons

#### Scenario: How It Works section shows workflow steps
  Given the user scrolls to the workflow section
  Then 4 steps are displayed: Pick Destination, Select Term, Choose A Car, Enjoy The Ride
  And each step has an icon, heading, and description text
  And the section has a parallax background image with dark overlay

#### Scenario: Testimonials carousel renders customer reviews
  Given the user scrolls to the testimonials section
  Then a carousel of testimonials is displayed
  And each testimonial shows a circular user photo, quote, name, and position

#### Scenario: About section shows split layout with CTA
  Given the user scrolls to the about section
  Then a split layout with image on left and text on right is displayed
  And the heading "Choose A Perfect Car" is shown
  And a "Search Vehicle" CTA button is present in brand orange

#### Scenario: Blog section displays three blog cards
  Given the user scrolls to the blog section
  Then 3 blog cards are displayed in a 3-column layout
  And each card shows an image, meta info (date, author, comments), heading, and excerpt

#### Scenario: Footer displays four columns with links
  Given the user scrolls to the footer
  Then the footer has a dark background
  And 4 columns are visible: About (with social icons), Information links, Customer Support links, Contact info
  And the copyright line includes a link to Component Dock

#### Scenario: Brand color is applied consistently
  Given any interactive element (buttons, icons, links)
  Then the brand orange `#fc983c` is used for primary CTA buttons
  And hover states transition from filled to outlined with orange text/border

#### Scenario: Responsive layout collapses to single column
  Given the user views on a mobile viewport
  Then the navbar collapses to a hamburger menu
  And car cards stack vertically
  And the hero booking form stacks below the headline
  And the about section stacks image above text

## Verification checklist

- [ ] All 10 sections present and in correct order
- [ ] Brand color `#fc983c` used consistently (buttons, icons, accents)
- [ ] Font is Poppins (loaded via Google Fonts in `index.html`)
- [ ] Hero has background image, dark overlay, booking form with all fields
- [ ] Search filter bar has 4 dropdowns + search button
- [ ] Services section has 4 cards with icons
- [ ] Fleet section has 8 car cards in 4-col grid with price overlays
- [ ] How It Works has parallax bg, dark overlay, 4 steps in white text
- [ ] Testimonials carousel with circular photos
- [ ] About section has 50/50 split layout with CTA button
- [ ] Blog section has 3 cards with image, meta, heading, excerpt
- [ ] Footer is dark bg with 4 columns + social icons + copyright
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `gearshift.free.componentdock.com`
- [ ] `package.json` homepage set to `https://gearshift.free.componentdock.com`
- [ ] Placeholder images use `picsum.photos/seed/gearshift-*`
- [ ] All sections use `cn()` from `packages/ui` for class composition
- [ ] TypeScript strict mode, no `any` types
- [ ] 100% test coverage (lines, functions, branches, statements)
