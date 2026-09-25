# Template: Gustable (Food & Restaurant)

## Purpose

Recreation of ColorLib's **Eatwell** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page restaurant website.

- **Source:** https://colorlib.com/wp/template/eatwell/
- **Preview:** https://preview.colorlib.com/theme/eatwell/
- **New name:** `gustable` (from "gust" — taste/enjoyment)
- **Package:** `@free-react-templates/gustable`
- **Deploy target:** `gustable.free.componentdock.com`

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Primary brand color | `#FDA403` (amber/gold) | Prices, primary buttons, active nav links, accent text |
| Dark background | `#000` (black) | Scrolled navbar, hero overlay |
| Body text | `#222` (near-black) | Headings, body copy |
| Muted text | `#999999` | Subtitles, secondary labels |
| Light gray | `#b8b8b8` | Tertiary text |
| Border / secondary | `#ccc` | Secondary button border, dividers |
| Lighter gray | `#d4d4d4` | Subtle borders |
| Background light | `#f8f9fa` (Tailwind `bg-gray-50`) | Alternating section backgrounds |
| White | `#fff` | Card backgrounds, hero text |
| Heading font | `"Playfair Display", serif` | Hero heading, section titles, display-4 |
| Body font | `"Raleway", sans-serif` | Body copy, nav links, buttons |
| Button radius (default) | `4px` | `.btn` base |
| Button radius (primary) | `0px` | `.btn.btn-primary` — squared off |
| Button padding (lg) | `13px 40px` | `.btn.btn-lg` |
| Gallery image radius | `16px` | Gallery grid images |
| Avatar radius | `50%` | Chef profile photos |
| Navbar font | `13px`, uppercase, `letter-spacing: 0.2em` | `.nav-link` |
| Hero | Full viewport height (`100vh`), background image with dark overlay | `.site-cover` |

## Visual design (from screenshot)

The Eatwell screenshot shows:
- **Hero:** Full-screen dark overlay on a restaurant storefront photo, large serif heading "Welcome To EatWell" in white, subtitle in white, white-outlined "Reservation" button
- **About ("Our Story"):** White background, left-aligned serif heading "Welcome" with small caps subtitle "OUR STORY", body text, right side chef photo (circular crop)
- **Offers:** Light gray background, heading "Our Offer This Summer", grid of food items with images, names, prices in gold (`#FDA403`), descriptions
- **Menu:** White background, "Delicious Menu" heading, two-column layout with food items (name + gold price), left column food photos
- **News:** Light gray background, "News" heading, three blog cards with images and titles
- **Gallery:** White background, grid of food images with rounded corners (`16px`)
- **Contact:** Light gray background, two-column: left has contact form (name, email, message + submit), right has address info + map
- **Footer:** Dark background, brand name, copyright, social links

## Gherkin requirements

### Hero Section

```gherkin
Scenario: Hero displays full-viewport background image with overlay
  Given the user visits the page
  Then the hero section spans the full viewport height
  And a background image is displayed with a dark overlay
  And the heading "Welcome To Gustable" is shown in white serif font
  And the subtitle text is displayed in white below the heading
  And a "Reservation" button is displayed with white border and text

Scenario: Hero button navigates to reservation/contact section
  Given the user sees the hero section
  When the user clicks the "Reservation" button
  Then the page scrolls to the contact section
```

### Navigation Bar

```gherkin
Scenario: Navbar is transparent over hero
  Given the user is at the top of the page
  Then the navbar background is transparent
  And nav links are displayed in white uppercase text with letter spacing

Scenario: Navbar becomes solid on scroll
  Given the user scrolls past the hero
  Then the navbar background changes to black
  And nav links remain visible

Scenario: Navbar contains all section links
  Given the navbar is visible
  Then links for Home, About, Offer, Menu, News, Gallery, Contact are present
```

### About Section

```gherkin
Scenario: About section displays story and chef photo
  Given the user scrolls to the About section
  Then a "OUR STORY" subtitle is displayed in small caps
  And a serif heading "Welcome" is shown
  And body text describes the restaurant story
  And a chef profile photo is displayed on the right side
  And the section has a white background
```

### Offers Section

```gherkin
Scenario: Offers section displays food items in a grid
  Given the user scrolls to the Offers section
  Then a heading "Our Offer This Summer" is displayed
  And a lead paragraph describes the offers
  And food items are displayed in a responsive grid
  And each item shows an image, title, price in gold, and description
  And the section has a light gray background

Scenario: Each offer item shows pricing in brand color
  Given the offers grid is displayed
  Then each price is rendered in the primary gold color (#FDA403)
```

### Menu Section

```gherkin
Scenario: Menu section displays food items in two columns
  Given the user scrolls to the Menu section
  Then a heading "Delicious Menu" is displayed
  And menu items are displayed in a two-column layout
  And each item shows a food name and price in gold
  And food photos are shown alongside the menu items
  And the section has a white background
```

### News Section

```gherkin
Scenario: News section displays blog cards
  Given the user scrolls to the News section
  Then a heading "News" is displayed
  And three news/blog cards are shown in a row
  And each card has an image, title, and brief text
  And the section has a light gray background
```

### Gallery Section

```gherkin
Scenario: Gallery section displays food images in a grid
  Given the user scrolls to the Gallery section
  Then a heading "Gallery" is displayed
  And food images are displayed in a grid layout
  And images have rounded corners (16px radius)
  And images are clickable (lightbox or link)
  And the section has a white background
```

### Contact Section

```gherkin
Scenario: Contact section displays form and info
  Given the user scrolls to the Contact section
  Then a heading "Get In Touch" is displayed
  And a lead paragraph is shown
  And a contact form with Name, Email, and Message fields is displayed
  And a "Send Message" button is present
  And address/contact info is shown alongside the form
  And the section has a light gray background

Scenario: Contact form validates required fields
  Given the contact form is displayed
  When the user submits without filling Name
  Then an error message is shown for the Name field
```

### Footer

```gherkin
Scenario: Footer displays branding and links
  Given the user scrolls to the footer
  Then the template name "Gustable" is displayed
  And a copyright notice is shown
  And social media icon links are present
  And a link to Component Dock is present
```

## Verification checklist

- [ ] Hero section renders full-viewport with background image and dark overlay
- [ ] Navbar is transparent on hero, solid black on scroll
- [ ] All 7 nav links (Home, About, Offer, Menu, News, Gallery, Contact) present
- [ ] About section has "OUR STORY" subtitle, "Welcome" heading, chef photo
- [ ] Offers section shows food grid with images, titles, gold prices, descriptions
- [ ] Menu section shows two-column food items with names and gold prices
- [ ] News section shows three blog cards with images and titles
- [ ] Gallery section shows food images in a rounded-corner grid
- [ ] Contact section has form (Name, Email, Message) + info + map placeholder
- [ ] Footer has template name, copyright, social icons, Component Dock link
- [ ] Primary color `#FDA403` used for prices, buttons, accents
- [ ] Heading font is Playfair Display (serif), body font is Raleway (sans-serif)
- [ ] Buttons have 4px radius (primary buttons squared)
- [ ] Alternating white/light-gray section backgrounds
- [ ] 100% test coverage on all components
- [ ] No ColorLib references in app code (provenance only in spec)
