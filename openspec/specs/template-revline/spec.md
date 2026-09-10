# Template: Revline (Automotive / Garage Landing)

## Purpose

Recreation of ColorLib "Automotive" template.

- Source slug: `automotive`
- ColorLib page: https://colorlib.com/wp/template/automotive/
- Live preview: https://preview.colorlib.com/theme/automotive/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview stylesheet `css/style.css`)

| Token             | Value                                                          |
| ----------------- | ---------------------------------------------------------------- |
| Primary color     | `#5F67FF` (royal blue / indigo)                                |
| Primary hover     | `#4971FF` (slightly darker blue)                               |
| Body text         | `#727171` (muted gray)                                         |
| Heading text      | `#353535` (near-black) / `#111111` (dark)                      |
| Light background  | `#f7f7f7` (near-white)                                         |
| Dark background   | `#25282C` (charcoal — header top bar, copyright bar)           |
| Dark section bg   | `#353535` (mid-dark)                                           |
| Border/divider    | `rgba(255,255,255,0.1)` (on dark backgrounds)                  |
| Font family       | `"Public Sans", sans-serif`                                    |
| Body weight       | 400 (regular)                                                  |
| Body font-size    | 15px                                                           |
| Heading weight    | 700 (bold)                                                     |
| Button radius     | `2px` (very slight rounded corners)                            |
| Button padding    | `14px 25px 12px`                                               |
| Button bg         | `#5F67FF` (primary blue)                                       |
| Button text       | `#ffffff` (white)                                              |
| Hero h2 size      | `60px` (white, bold)                                           |
| Hero h2 span size | `40px` (white, regular weight, block display)                  |
| Hero subtext      | `24px` (white)                                                 |
| Section heading   | `40px`, `#353535`, weight 700                                  |
| Caption/subtitle  | `#727171`, regular weight, 15px                                |
| Product name      | `17px`, `#353535`                                              |
| Social icon radius| `50%` (circular)                                               |
| Carousel dots     | `#b5b5b5` inactive, `#353535` active, 50% radius              |
| Testimonial bg    | `#ffffff` (white)                                              |
| Counter stat bg   | parallax image with dark overlay                               |
| Footer top bar    | image background with dark overlay                             |
| Footer text bg    | dark (inherited from image bg)                                 |
| Copyright bar     | `#25282C` (solid charcoal)                                     |

## Visual design notes (from screenshot analysis)

- **Overall aesthetic**: Clean, professional, modern automotive garage landing. Balanced between authentic workshop photography and polished web design. Reliable, expert, customer-focused brand feel.
- **Header**: Two-tier header. Top utility bar (charcoal `#25282C`) with phone/hours on left, map link + social icons on right. Main nav bar (white bg) with logo left, horizontal nav links center (Home, Services, Shop, Pages dropdown, Blog), search/cart icons right. Active nav link gets a blue underline indicator.
- **Hero**: Full-width section with background image (mechanic working on engine) + dark semi-transparent overlay. Left-aligned text: small "Welcome To" subtitle, large bold "Auto-Motive Garage" headline (60px white), description subtext (24px white), and a royal blue "Our Services" CTA button with slight 2px radius.
- **Services ("What We Do?")**: Centered section heading, then a mixed 4-column grid alternating between icon+text cards (white bg, blue icons, title, description) and image cards (full photo). Services: Engine Overhaul, Power Steering, Oil Change, Upgrades Car.
- **Choose Us**: Split layout — large image left, content right offset. Bold section heading "We Have 20 Years Of Experience In Auto Car", description, checklist of 4 items with blue check icons, and "About Us" CTA button.
- **Products**: Centered heading "Our Products", 4-column grid of product cards. Each: product image with hover overlay (heart, eye, exchange icons), product name, price, and "+Add To Cart" link. Products: High Flow Fuel, Revolution Wheels, Tone Interior Kit, Matte Gunmetal — all $800.00.
- **Testimonials**: White background, carousel slider. Each item: quotation icon (blue), testimonial quote text (dark, 17px), with dot navigation.
- **Counter/Stats**: Parallax background image, dark overlay, white text. Section heading "About Our Statistics", 4 stat columns each with icon, large counter number (560+), and label (All Project, Project Completed, Customers Action, Awards Winner).
- **Latest News**: Light gray `#f7f7f7` background, 3-column blog cards. Each: image with author/date overlay, title, excerpt, "Continue Reading" link.
- **Footer**: Three-part footer. (1) CTA bar with dark image bg — 3 columns: Booking Repair/Appointment, Contact Us/phone, Location/map. (2) Dark text area — 4 columns: logo + about + Contact Us CTA, Quick Links, News items, Office address/contacts. (3) Copyright bar `#25282C` with social icons (circular, 50% radius).

## Section structure (in page order)

1. **HeaderTopBar** — charcoal bar with phone + hours left, map link + social icons right
2. **Navbar** — logo left, nav links (Home, Services, Shop, Pages dropdown, Blog), search + cart icons right, mobile hamburger
3. **Hero** — full-width background image + overlay, left-aligned h2 with span, subtext, blue CTA button
4. **Services** — section heading "What We Do?", 4 service items alternating icon+text and image cards
5. **ChooseUs** — split: image left, heading + checklist + CTA button right
6. **Products** — section heading "Our Products", 4-column product card grid with hover actions
7. **Testimonials** — white bg, carousel of quote cards with quotation icon + text + dot nav
8. **CounterStats** — parallax image bg, heading "About Our Statistics", 4 stat columns with icon + number + label
9. **LatestNews** — light gray bg, heading "Latest News", 3-column blog cards (image, date, title, excerpt, link)
10. **Footer** — 3-part: CTA bar (3 columns: appointment, phone, location), text area (4 columns: about, links, news, address), copyright bar with social icons

## Gherkin scenarios

### HeaderTopBar

```gherkin
Scenario: Header top bar shows contact info
  Given the page is loaded
  Then the top bar displays phone number "(+123) 4567-7890-123"
  And the top bar displays hours "Mon-Sat: 10:00 - 16:00 / Sunday Close"
  And a "Find us on map" link is visible
  And social icons (Facebook, Twitter, Vimeo, Pinterest) are displayed

Scenario: Header top bar is dark themed
  Given the page is loaded
  Then the header top bar has a dark charcoal background
  And the text is white
  And the icon accents are primary blue (#5F67FF)
```

### Navbar

```gherkin
Scenario: Logo is visible
  Given the page is loaded
  Then the logo is visible in the top-left of the main nav area

Scenario: Navigation links are present
  Given the page is loaded
  Then the navbar contains links for "Home", "Services", "Shop", "Pages", "Blog"

Scenario: Pages link has dropdown submenu
  Given the page is loaded
  When I hover over the "Pages" nav link
  Then a dropdown appears with "About Us", "Services Details", "Shop Details", "Blog Details", "Contact"

Scenario: Search and cart icons are visible
  Given the page is loaded
  Then a search icon and a cart icon are visible in the top-right of the navbar

Scenario: Active nav link has blue underline
  Given the page is loaded
  When "Home" is the active page
  Then the "Home" link has a primary blue underline indicator
```

### Hero

```gherkin
Scenario: Hero displays welcome heading
  Given the page is loaded
  Then the hero section shows "Welcome To" in small text
  And the hero shows a large bold headline below it
  And a description subtext paragraph is visible

Scenario: Hero has a CTA button
  Given the page is loaded
  Then a primary blue "Our Services" button is visible in the hero section

Scenario: Hero has background image with overlay
  Given the page is loaded
  Then the hero section displays a full-width background image
  And the text is white and readable against the dark overlay
```

### Services

```gherkin
Scenario: Services section heading is visible
  Given the page is loaded
  When I scroll to the services section
  Then the heading "What We Do?" is displayed with a subtitle

Scenario: Four services are displayed
  Given the page is loaded
  When I scroll to the services section
  Then 4 service items are shown in a grid layout
  And each service has a title and description text

Scenario: Services alternate between icon and image cards
  Given the page is loaded
  When I scroll to the services section
  Then each service item shows either an icon or a photo
  And the items alternate between the two styles
```

### ChooseUs

```gherkin
Scenario: Choose Us section shows experience heading
  Given the page is loaded
  When I scroll to the Choose Us section
  Then a heading about years of experience is displayed

Scenario: Choose Us has a checklist
  Given the page is loaded
  When I scroll to the Choose Us section
  Then 4 checklist items are shown with checkmark icons
  And each item has descriptive text

Scenario: Choose Us has CTA button
  Given the page is loaded
  When I scroll to the Choose Us section
  Then an "About Us" primary button is visible
```

### Products

```gherkin
Scenario: Products section heading is visible
  Given the page is loaded
  When I scroll to the products section
  Then the heading "Our Products" is displayed with a subtitle

Scenario: Four product cards are displayed
  Given the page is loaded
  When I scroll to the products section
  Then 4 product cards are shown in a grid
  And each card has a product image, name, price, and "Add To Cart" link

Scenario: Product cards show hover actions
  Given the page is loaded
  When I hover over a product card image
  Then overlay action icons (heart, eye, exchange) appear
```

### Testimonials

```gherkin
Scenario: Testimonials section is present
  Given the page is loaded
  When I scroll to the testimonials section
  Then a carousel of testimonial items is visible

Scenario: Testimonial items show quote icon and text
  Given the page is loaded
  When I scroll to the testimonials section
  Then each testimonial shows a quotation icon
  And each testimonial has quote text

Scenario: Testimonial carousel has dot navigation
  Given the page is loaded
  When I scroll to the testimonials section
  Then dot navigation indicators are visible below the quotes
```

### CounterStats

```gherkin
Scenario: Counter section shows statistics heading
  Given the page is loaded
  When I scroll to the counter section
  Then the heading "About Our Statistics" is displayed in white text

Scenario: Four statistics are displayed
  Given the page is loaded
  When I scroll to the counter section
  Then 4 stat items are shown in a row
  And each item has an icon, a large number, and a label

Scenario: Counter section has parallax background
  Given the page is loaded
  Then the counter section has a background image with a dark overlay
  And the text is white
```

### LatestNews

```gherkin
Scenario: Latest News heading is visible
  Given the page is loaded
  When I scroll to the latest news section
  Then the heading "Latest News" is displayed with a subtitle

Scenario: Three blog cards are displayed
  Given the page is loaded
  When I scroll to the latest news section
  Then 3 blog cards are shown in a row
  And each card has an image, author/date, title, excerpt, and "Continue Reading" link

Scenario: Blog cards have author and date overlay
  Given the page is loaded
  When I scroll to the latest news section
  Then each blog card image has an author name and date overlay
```

### Footer

```gherkin
Scenario: Footer CTA bar shows 3 items
  Given the page is loaded
  When I scroll to the footer
  Then a CTA bar shows "Booking Repair / Appointment", "Contact Us Now! / phone number", and "Location / Find us on map"

Scenario: Footer text area shows 4 columns
  Given the page is loaded
  When I scroll to the footer text area
  Then 4 columns are visible: About (logo + description + Contact Us button), Quick Links, News items, and Office address

Scenario: Copyright bar is present
  Given the page is loaded
  When I scroll to the footer copyright area
  Then a copyright line is displayed
  And social icons (Facebook, Twitter, Vimeo, Pinterest) are shown
  And the copyright bar links to Component Dock
```

## Verification checklist

- [ ] Section order matches original exactly (10 sections)
- [ ] Primary color `#5F67FF` used consistently for buttons, icons, accents
- [ ] Font is Public Sans via Google Fonts
- [ ] Hero background image with dark overlay, white text, blue CTA
- [ ] Services section alternates icon+text and image cards (4 services)
- [ ] Choose Us split layout: image left, checklist + CTA right
- [ ] Products grid (4 cards) with hover action overlay
- [ ] Testimonials carousel with dot navigation
- [ ] Counter stats with parallax background and 4 stat columns
- [ ] Latest News (3 blog cards) with author/date overlay
- [ ] Footer: CTA bar → 4-column text area → copyright bar
- [ ] Footer copyright links to Component Dock
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos placeholders
- [ ] Responsive layout for all sections
- [ ] No external dependencies beyond React/Vite/Tailwind/lucide-react
