# Template: Drip (Coffee Shop / Cafe Template)

## Purpose

Drip is a single-page coffee-shop / cafe website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Coffee Blend" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Coffee Blend" — coffee shop / cafe website
  (Bootstrap 4 + owl carousel + animate.css + magnific-popup + AOS;
  fonts Poppins (300–700), Josefin Sans (400, 700), Great Vibes via Google
  Fonts; primary brand color `#78d5ef` light cyan-blue; dark sections with
  background images and overlays).
  (source: https://colorlib.com/wp/template/coffee-blend/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/coffee-blend/
  (HTTP 404 — preview unreachable). Fallback: GitHub source
  (Harneeetah/coffee-blend) HTML/PHP + compiled CSS, plus ColorLib page
  metadata and search result descriptions.
- **Screenshot analyzed:** `coffee-free-template-1.jpg` (1200×946, referenced
  in TEMPLATES.md): dark background with coffee imagery. The ColorLib page
  describes it as "a dark layout" — the template uses dark overlay sections
  (parallax backgrounds with dark overlays) alternating with white content
  areas. Aesthetic: warm, inviting coffee-shop vibe — light cyan-blue accent
  `#78d5ef` + dark backgrounds `#343a40`, white body, Work Sans body with
  Poppins headings, rounded Bootstrap 4 buttons, background-image parallax
  sections.
- **Section order (1:1, from the DOM of the home page):**
  1. **Navbar** — fixed top, transparent/dark, container-width. Logo left
     (text or image), nav links right: Home / About / Menu / Specialties /
     Blog / Contact / Cart icon. Hamburger menu on mobile. CTA button
     "Book a Table" or "Order Now" on right.
  2. **Hero Slider** (`section.home-slider`, owl-carousel): full-viewport
     slides with `background-image` + dark overlay `div.overlay`. Each slide:
     centered text — `span.subheading` ("Welcome"), `h1` large white heading
     ("The Best Coffee Testing Experience" / "Amazing Taste & Beautiful
     Place" / "Creamy Hot and Ready to Serve"), `p` subtitle, two buttons:
     "Order Now" (primary solid) + "View Menu" (white outline). 3 slides,
     auto-rotating carousel.
  3. **Intro / Contact Bar** (`section.ftco-intro`): dark-background strip
     with 3-column layout + "Book a Table" form on right. Left 3 columns:
     phone icon + number, location icon + address, clock icon + hours.
     Right side: reservation form with First Name, Last Name, Date, Time,
     Phone, Message, and "Appointment" submit button.
  4. **About** (`section.ftco-about`, `d-md-flex`): split layout — left half
     is a background-image (`images/about.jpg`), right half is text content
     with `span.subheading` ("Discover"), `h2` ("Our Story"), and paragraph
     text. Light background.
  5. **Services** (`section.ftco-services`): white background, 3-column grid
     with icon + heading + description. Three cards:
     - "Easy to Order" (flaticon-choices icon)
     - "Fastest Delivery" (flaticon-delivery-truck icon)
     - "Quality Coffee" (flaticon-coffee-bean icon)
  6. **Our Menu** (`section.ftco-section`): white background, split layout.
     Left side: heading "Our Menu" + description + "View Full Menu" button
     (primary outline). Right side: grid of menu items with images (2×2
     grid of food/drink cards with images, names, prices, short
     descriptions — e.g. "Coffee Capuccino").
  7. **Counter / Stats** (`section.ftco-counter`, `ftco-bg-dark`):
     full-width dark parallax section (`background-image: url(images/bg_2.jpg)`,
     `data-stellar-background-ratio="0.5"`). 4-column row of animated
     statistics counters (e.g. Happy Customers, Coffee Drinks, Staff
     Members, Awards Won) — number + label, white text on dark overlay.
  8. **Best Coffee Sellers** (`section.ftco-section`): white background,
     centered heading "Best Coffee Sellers" with description. Grid of 4
     product cards — each with image, title ("Coffee Capuccino"), price,
     and short description. Hover effects.
  9. **Gallery** (`section.ftco-gallery`): full-width row of 4 gallery
     images with hover overlay, linked to a gallery page. Images use
     `background-image` with dark overlay on hover showing a link icon.
  10. **Testimonials** (`section.ftco-testimony`, parallax bg): dark
      parallax section (`background-image: url(images/bg_1.jpg)`) with
      centered heading "Customers Says" + subtitle. Horizontal scroll/
      carousel of 5 testimonial cards — each with `blockquote` quote text,
      author photo, author name + position. Cards overlap slightly at
      bottom, creating a staggered layout.
  11. **Footer** (`footer.ftco-footer`, parallax bg image): dark overlay
      background. 4-column layout:
      - "About Us" + paragraph + social icons (Twitter, Facebook, Instagram)
      - "Recent Blog" + 2 blog post previews (thumbnail + title + meta
        with date/author/comments)
      - "Services" + link list (Cooked, Deliver, Quality Foods, Mixed)
      - "Have a Questions?" + address + phone + email
        Bottom: copyright bar with "Made with ❤ by Colorlib" (replaced with
        Component Dock link).

## Design tokens

- **Primary brand color:** `#78d5ef` (light cyan-blue)
- **Primary hover:** `#34c0e7` (darker cyan)
- **Dark background:** `#343a40` (Bootstrap dark)
- **Body text:** `#212529` (near-black)
- **Muted text:** `#6c757d` (gray)
- **White:** `#fff`
- **Light background:** `#f8f9fa` (Bootstrap light)
- **Font (body):** "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif
- **Font (headings / hero):** "Poppins", sans-serif (300, 400, 500, 600, 700)
- **Font (secondary headings):** "Josefin Sans", sans-serif (400, 700)
- **Font (decorative/script):** "Great Vibes" (cursive accents)
- **Button radius:** Bootstrap 4 default `0.25rem`
- **Button padding (hero):** `p-3 px-xl-4 py-xl-3` (~12px 16px, 20px on xl)
- **Section backgrounds:** alternates between white (`#fff`) and dark
  parallax (`background-image` with `div.overlay` at ~50% opacity black)
- **Parallax sections:** counter, testimonials, footer all use
  `data-stellar-background-ratio="0.5"` with dark overlay
- **Icons:** Font Awesome / Open Iconic / Flaticon icon fonts (replace with
  lucide-react in React version)

## Gherkin requirements

### Scenario: Navbar renders with correct navigation links

Given the page loads
Then a navigation bar is visible at the top
And it contains links: Home, About, Menu, Specialties, Blog, Contact
And a CTA button is present (e.g. "Book a Table" or "Order Now")
And a cart icon is visible

### Scenario: Hero slider displays 3 slides with CTAs

Given the page loads
Then a full-viewport hero slider is visible
And slide 1 shows heading "The Best Coffee Testing Experience"
And slide 2 shows heading "Amazing Taste & Beautiful Place"
And slide 3 shows heading "Creamy Hot and Ready to Serve"
And each slide has an "Order Now" button and a "View Menu" button
And slides auto-rotate via carousel

### Scenario: Intro contact bar displays info and reservation form

Given the page loads
Then a dark-background intro/contact strip is visible below the hero
And it shows phone number, address, and business hours
And a "Book a Table" form is present with fields: First Name, Last Name,
Date, Time, Phone, Message
And an "Appointment" submit button is present

### Scenario: About section shows split layout

Given the page loads
Then an "Our Story" section is visible
And it has a split layout: background image on one side, text on the other
And the heading reads "Discover" / "Our Story"

### Scenario: Services section shows 3 feature cards

Given the page loads
Then a services section is visible with 3 cards
And card 1 shows "Easy to Order" with an icon
And card 2 shows "Fastest Delivery" with an icon
And card 3 shows "Quality Coffee" with an icon

### Scenario: Menu section displays items in a grid

Given the page loads
Then a "Our Menu" section is visible
And it has a "View Full Menu" button
And menu items are shown in a grid with images, names, and prices

### Scenario: Counter section shows animated statistics

Given the page loads
Then a dark parallax counter section is visible
And it displays 4 statistics with animated counting numbers
And each statistic has a label (e.g. "Happy Customers", "Coffee Drinks")

### Scenario: Best Sellers section shows product cards

Given the page loads
Then a "Best Coffee Sellers" section is visible
And it displays 4 product cards with images, titles, and prices

### Scenario: Gallery section shows image grid with hover effects

Given the page loads
Then a gallery section is visible with 4 images in a row
And hovering an image shows a dark overlay with a link icon

### Scenario: Testimonials section shows customer quotes

Given the page loads
Then a "Customers Says" section is visible on a dark parallax background
And it displays testimonial cards with quote text, author photo, and
author name + position
And cards are arranged in a horizontal overlapping/staggered layout

### Scenario: Footer contains site info, blog previews, services, and contact

Given the page loads
Then a dark footer is visible
And it has 4 columns: About Us + social, Recent Blog (2 posts),
Services links, and contact info (address, phone, email)
And a copyright bar is present at the bottom
And the footer links to Component Dock

### Scenario: Mobile responsive layout

Given the page loads on a viewport < 768px
Then the navbar collapses to a hamburger menu
And split sections stack vertically
And the hero slider text is centered and appropriately sized
And the footer columns stack vertically

### Scenario: Dark theme sections use background-image with overlay

Given the counter, testimonials, and footer sections load
Then each uses a background image with a dark semi-transparent overlay
And text within these sections is white
And parallax scrolling effect is applied where supported

## Verification checklist

- [ ] All 11 sections render in correct order
- [ ] Hero slider auto-rotates between 3 slides
- [ ] Reservation form has all 6 fields + submit button
- [ ] Menu grid shows items with images, names, prices
- [ ] Counter numbers animate on scroll into view
- [ ] Gallery images have hover overlay effect
- [ ] Testimonials display with author photos
- [ ] Footer has 4 columns with correct content
- [ ] Footer links to Component Dock
- [ ] Responsive: hamburger nav on mobile, stacked layouts
- [ ] Brand color `#78d5ef` used consistently for primary actions
- [ ] No ColorLib references in app code (only in spec)
- [ ] Placeholder images use `picsum.photos` URLs
- [ ] All tests pass with 100% coverage
- [ ] Typecheck + lint + build pass
