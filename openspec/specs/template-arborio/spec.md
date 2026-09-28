# Template: Arborio (Restaurant Landing)

## Purpose

Arborio is a single-page restaurant landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Risotto" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a restaurant page with orange (#f36700) accents: a dual-layer
header (top bar with logo + social links, bottom bar with nav + CTA + contact
info), a full-screen parallax hero ("Welcome To Risotto Restaurant"), an
About section with embedded gallery slider, a tabbed Menu section with dish
cards and prices, a Reservation section with form + opening hours, an Events
section with 2-column event cards, a Contact section with map overlay, and a
dark footer with nav links. Arborio recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Risotto" — free restaurant website template
  (source: https://colorlib.com/wp/template/risotto/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/risotto/`
  (HTTP 200) + stylesheet `css/style.css`. The rendered DOM is the reference
  below; the TEMPLATES.md screenshot confirms the visual design (parallax hero,
  orange accents, dark footer, gallery slider).
- **Design tokens:**
  - Brand color: `#f36700` (orange) — CTA buttons, active nav, sub-titles,
    title underline, event date badges, social link hover, contact icons,
    footer link hover
  - Body text color: `#969696` (medium grey)
  - Header/title color: `#151515` (near-black)
  - Grey backgrounds: `#F9F9F9` (bottom nav bar), `#ECECEC` (borders, input borders)
  - Footer background: `#151515` (dark)
  - Fonts: Quicksand (headings — weights 400/700), Cabin (body — weight 400),
    Dancing Script (cursive decorative — section titles + hero h1)
  - Buttons: `border-radius: 40px`, `background: #f36700`, white text,
    uppercase, bold, `padding: 15px 30px`, hover opacity 0.8
  - Inputs: `border: 2px solid #ECECEC`, `border-radius: 40px`, transparent bg,
    height 40px; textarea border-radius 20px
  - Social nav links: circular (border-radius 50%), 40×40px, `border: 1px solid #ECECEC`,
    hover fills with brand orange
  - Overlay on parallax: `opacity: 0.7`, `background-color: #000`
  - Section spacing: `padding-top: 80px`, `padding-bottom: 80px`
  - Title underline: 15px wide, 2px tall, `background-color: #f36700`

## Visual design (from TEMPLATES.md screenshot)

The TEMPLATES.md screenshot shows a warm, elegant restaurant page with:
- A full-width dark parallax hero with centered white text and an orange CTA button
- An About section with a text block and an image gallery slider (mixed single
  and stacked images in an owl-carousel layout)
- A Menu section with tabbed navigation (Dinner/Drinks/Lunch/Dessert) over a
  dark parallax background, listing dishes in a 2-column grid with name + price
- A Reservation section with a form (2-column fields) alongside an opening
  hours list, over a background image
- An Events section with 2-column cards, each featuring a small image, an
  orange date badge with triangular cutout, time, title, and description
- A Contact section with a map taking up the left half and contact details on the right
- A dark footer with copyright left and nav links right

## Section order (implementation order)

1. Navbar — dual-layer: top bar (logo + social icons) + bottom bar (nav links + CTA button + contact info)
2. Hero — full-screen parallax background, centered headline in Dancing Script, subtext, orange CTA button
3. About — section header ("About Us" / "The Risotto Restaurant"), 2-column text (5/7 split), gallery owl-carousel
4. Menu — parallax bg with overlay, tab nav (Dinner/Drinks/Lunch/Dessert), 2-column dish cards (name + price + description)
5. Reservation — background image, 2-column form (Name/Phone/Date/Email/Guests/Time) + opening hours list, CTA button
6. Events — 4 event cards in 2-column grid, each with image, orange date badge (triangular cutout), time, title, description
7. Contact — map (left 50%) + contact details (right, offset), section header, social links
8. Footer — dark background, copyright left, nav links right

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Top nav displays logo and social links
  Given the user loads the page
  Then the top nav contains a logo link and three social media icon links

Scenario: Bottom nav shows navigation links and CTA
  Given the user loads the page
  Then the bottom nav shows links for Home, About, Menu, Reservation, Gallery, Events, Contact
  And a "Reserve" CTA button is visible
  And contact info (phone + address) is visible on the right

Scenario: Bottom nav becomes sticky on scroll
  Given the user scrolls past the hero
  Then the bottom nav sticks to the top with a shadow
```

### Hero
```gherkin
Scenario: Hero displays welcome message and CTA
  Given the user views the hero section
  Then a heading "Welcome To" is visible
  And a descriptive paragraph is visible below the heading
  And a "Discover Menu" button is visible

Scenario: Hero is full-screen with parallax background
  Given the user loads the page
  Then the hero section fills the full viewport height
  And a dark overlay covers the background image
```

### About
```gherkin
Scenario: About section shows intro text and gallery
  Given the user scrolls to the About section
  Then a section header with subtitle "About Us" and title is visible
  And a welcome paragraph is displayed on the left (5-column)
  And a description paragraph is displayed on the right (7-column)
  And an image gallery slider is rendered below with multiple gallery items

Scenario: Title has decorative orange underline
  Given the About section title is rendered
  Then it has a short orange underline accent below it
```

### Menu
```gherkin
Scenario: Menu section shows tabbed dish listing
  Given the user scrolls to the Menu section
  Then a section header with subtitle "Discover" and title "Our Menu" is visible
  And tab buttons for Dinner, Drinks, Lunch, Dessert are displayed
  And the Dinner tab is active by default
  And dishes are listed in a 2-column grid with name, price, and description

Scenario: Menu section has parallax background with overlay
  Given the Menu section is rendered
  Then it has a dark parallax background image with overlay
  And the title text is white

Scenario: Tab switching changes visible dishes
  Given the Dinner tab is active
  When the user clicks the Drinks tab
  Then the Drinks dishes become visible
  And the Dinner dishes are hidden
```

### Reservation
```gherkin
Scenario: Reservation form collects booking details
  Given the user scrolls to the Reservation section
  Then a form with fields for Name, Phone, Date, Email, Number of Guests, Time is visible
  And a "Book Now" button is displayed
  And opening hours are listed on the right side

Scenario: Opening hours show weekly schedule
  Given the Opening Time panel is rendered
  Then days Sunday through Saturday are listed with hours
  And "Closed" is shown for Friday and Saturday
```

### Events
```gherkin
Scenario: Events section displays upcoming events
  Given the user scrolls to the Events section
  Then a section header with subtitle "Special Event" and title "Upcoming Event" is visible
  And 4 event cards are displayed in a 2-column grid

Scenario: Each event card shows date, time, title, and description
  Given an event card is rendered
  Then it displays an image with an orange date badge overlay
  And the badge shows a date (day + month)
  And a time range is shown below the image
  And a title and description paragraph are visible
```

### Contact
```gherkin
Scenario: Contact section shows map and details
  Given the user scrolls to the Contact section
  Then a map placeholder occupies the left 50%
  And contact details are displayed on the right (offset)
  And the section header shows "Contact Us" / "Get In Touch"
  And phone, address, and email are listed
  And social media follow links are shown

Scenario: Contact section header has no center alignment
  Given the Contact section header is rendered
  Then the subtitle and title are left-aligned (not centered)
```

### Footer
```gherkin
Scenario: Footer shows copyright and navigation
  Given the user scrolls to the footer
  Then a copyright line is displayed on the left
  And navigation links (Home, About, Menu, Reservation, Gallery, Events, Contact) are on the right
  And the footer has a dark background

Scenario: Footer links match the main nav
  Given the footer is rendered
  Then the footer nav links are uppercase
  And they have the same labels as the bottom nav
```

## Verification checklist

- [ ] Spec reviewed: section order matches live preview DOM
- [ ] Design tokens extracted: brand `#f36700`, body `#969696`, headers `#151515`, fonts Quicksand/Cabin/Dancing Script
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] Placeholder images use https://picsum.photos/seed/arborio-<n>/<w>/<h>
- [ ] Google Fonts loaded via <link> in index.html (Quicksand, Cabin, Dancing Script)
- [ ] Icons from lucide-react (no Font Awesome)
- [ ] All sections recreate the original structure 1:1
- [ ] Spec committed to openspec/specs/template-arborio/spec.md
- [ ] Design notes committed to docs/templates/arborio/
