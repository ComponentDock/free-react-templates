# Template: Revault (Automotive / Garage)

## Purpose

Recreation of ColorLib "AutoMotive" template.

- **Source slug:** `automotive`
- **Preview URL:** https://preview.colorlib.com/theme/automotive/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/automotive-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) at
https://preview.colorlib.com/theme/automotive/css/style.css.

| Token                 | Value                                                                                          | Usage                                               |
| --------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Font family           | `"Public Sans", sans-serif`                                                                    | Body + headings (weights 400–900)                   |
| Brand color           | `#5F67FF`                                                                                      | Primary buttons, accent links, icon color in header |
| Dark bg               | `#25282C`                                                                                      | Header top bar background                           |
| Heading color         | `#353535`                                                                                      | Section titles, headings                            |
| Body text             | `#727171`                                                                                      | Paragraph text, subtext                             |
| Light bg              | `#f7f7f7`                                                                                      | Alternating section backgrounds                     |
| Black                 | `#000000`                                                                                      | Page preloader background                           |
| Red accent            | `#DC4438`                                                                                      | Loader animation                                    |
| Blue accents          | `#2C85AE`, `#3EAFF0`, `#324975`, `#4971FF`                                                     | Accent elements, counter icons                      |
| Button style          | Flat, no border-radius, `#5F67FF` bg, white text, padding `14px 25px 12px`, `font-weight: 700` | `.primary-btn` and `.site-btn` (2px radius variant) |
| Section padding       | `100px` top/bottom (`.spad` class)                                                             | All major content sections                          |
| Border-radius general | `2px` (buttons), `50%` (search close), `60px` (loader)                                         |                                                     |

### Visual Design Notes (from screenshot + DOM)

- **Aesthetic:** Professional auto garage / automotive shop — dark industrial with
  clean layout. Dark header top bar with white text and blue icon accents.
- **Hero:** Full-width background image with centered headline "Welcome To
  Auto-Motive Garage", subtitle, and a flat blue CTA button.
- **Services section:** 4 service items in an alternating layout — icon+text on
  one side, image on the other, creating a checkerboard pattern (image-text-image-
  text arrangement across columns).
- **Choose Us:** Split layout — large image on left, text + checklist with check
  marks on right, "20 Years Experience" headline, CTA button.
- **Products:** 4-column product card grid, each card has an image with hover
  overlay (heart/eye/swap icons), product name, price, and "Add To Cart" link.
- **Testimonials:** Dark carousel/slider with quotation mark icon and customer
  quote text.
- **Counter/Stats:** Background image section with 4 stat counters (icon + number
  - label) — All Projects, Completed, Customers, Awards.
- **Latest News/Blog:** 3-column blog cards — each with image overlay (author
  name + date), title, excerpt, and "Continue Reading" link.
- **Footer Top:** 3-column call-to-action row — Booking Appointment, Phone
  Number, Find Us On Map, each with an icon.
- **Footer Main:** 4-column — About text, Quick Links, News list, Office address.
- **Footer Copyright:** Dark bar with copyright text and social icons.

## Gherkin Requirements

### Section: Header Top Bar

```gherkin
Scenario: Top bar displays contact info and social links
  Given the user loads the page
  Then the top bar shows a phone number "(+123) 4567-7890-123"
  And shows hours "Mon-Sat: 10:00 - 16:00 / Sunday Close"
  And shows a "Find us on map" link
  And shows 4 social icon links (Facebook, Twitter, Vimeo, Pinterest)
```

### Section: Navigation Header

```gherkin
Scenario: Main nav has correct links
  Given the user loads the page
  Then the header shows a logo image
  And the nav contains links: Home, Services, Shop, Pages (with dropdown), Blog
  And a search icon and cart icon are visible in the header right area

Scenario: Pages dropdown shows sub-links
  Given the user hovers over or clicks "Pages" in the nav
  Then a dropdown appears with: About Us, Services Details, Shop Details, Blog Details, Contact
```

### Section: Hero

```gherkin
Scenario: Hero displays welcome message and CTA
  Given the user loads the page
  Then the hero shows a background image
  And the headline reads "Welcome To" (small) above "Auto-Motive Garage" (large)
  And a subtitle paragraph is shown
  And a "Our Services" CTA button is visible
```

### Section: Services

```gherkin
Scenario: Services section shows 4 service items
  Given the user loads the page
  Then the services section displays a title "What We Do?"
  And 4 services are shown: Engine Overhaul, Power Steering, Oil change, Upgrades Car
  And each service has an icon image, title, and description text
  And services alternate between text-left/image-right and text-right/image-left layout
```

### Section: Choose Us

```gherkin
Scenario: Choose us shows experience claims
  Given the user loads the page
  Then the choose-us section has a large image on the left side
  And text on the right with headline "We Have 20 Years Of Experience In Auto Car"
  And 4 checkmark list items are shown
  And an "About Us" CTA button is visible
```

### Section: Products

```gherkin
Scenario: Products grid shows 4 product cards
  Given the user loads the page
  Then the products section displays a title "Our Products"
  And 4 product cards are shown in a grid
  And each card has an image, product name, price ($800.00), and "+Add To Cart" link
  And each card has hover overlay icons (heart, eye, exchange)

Scenario: Product names are displayed correctly
  Given the user views the products section
  Then the product names are: High Flow Fuel, Revolution Wheels, Tone Interior Kit, Matte Gunmetal
```

### Section: Testimonials

```gherkin
Scenario: Testimonials carousel shows quotes
  Given the user loads the page
  Then a testimonial carousel is displayed
  And each slide shows a quotation mark icon and a customer quote paragraph
```

### Section: Counter / Statistics

```gherkin
Scenario: Statistics section shows 4 counters
  Given the user loads the page
  Then the counter section displays a title "About Our Statistics"
  And 4 counter items are shown: All Project (560+), Project Completed (560+), Customers Action (560+), Awards Winner (560+)
  And each counter has an icon image above the number
```

### Section: Latest News / Blog

```gherkin
Scenario: Blog section shows 3 articles
  Given the user loads the page
  Then the latest news section displays a title "Latest News"
  And 3 blog cards are shown
  And each card has a background image with author/date overlay, title, excerpt, and "Continue Reading" link
```

### Section: Footer

```gherkin
Scenario: Footer top shows 3 CTA items
  Given the user loads the page
  Then the footer top row shows 3 items: Booking Repair / Appointment, Contact / Phone Number, Find Us On Map

Scenario: Footer main shows 4 columns
  Given the user loads the page
  Then the footer shows 4 columns: About text, Quick Links, News items, Office Address
  And the copyright bar at the bottom shows "All rights reserved" text
  And social media icons are shown in the copyright area

Scenario: Footer links to Component Dock
  Given the user loads the page
  Then the footer contains a link to https://www.componentdock.com/
```

## Verification Checklist

- [ ] All sections present in correct order: Header Top → Header Nav → Hero → Services → Choose Us → Products → Testimonials → Counter → Latest News → Footer Top → Footer Main → Footer Copyright
- [ ] Font: Public Sans (loaded via Google Fonts)
- [ ] Brand color #5F67FF used for primary buttons and accent elements
- [ ] Dark header top bar (#25282C) with white text
- [ ] Flat primary buttons with no border-radius (2px on site-btn variant)
- [ ] 4-column product grid with hover overlays
- [ ] Alternating image/text layout in services section
- [ ] Split image+text layout in Choose Us section
- [ ] Testimonial carousel/slider
- [ ] Background image counter/statistics section
- [ ] 3-column blog cards
- [ ] Footer with 3 CTA items + 4-column main + copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app source code
- [ ] Placeholder images use picsum.photos
- [ ] All interactive elements are accessible (semantic HTML, aria labels)
- [ ] Responsive: stacks to single column on mobile
