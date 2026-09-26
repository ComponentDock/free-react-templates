# Template: Calvex (Personal Portfolio)

## Purpose

Recreation of ColorLib "Calvin" — a personal portfolio / digital product designer
landing page with warm orange brand accent, hero with portrait, service cards,
portfolio gallery, skills progress bars, testimonials, and blog section.

- **Source:** https://colorlib.com/wp/template/calvin/
- **Preview:** https://preview.colorlib.com/theme/calvin/
- **New name:** `calvex`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

| Token            | Value                          | Notes                                 |
| ---------------- | ------------------------------ | ------------------------------------- |
| Primary brand    | `#FF8553`                      | Orange/coral — buttons, accents, links |
| Secondary brand  | `#FD8F5F`                      | Lighter orange — hover states          |
| Dark             | `#000000`                      | Headings, text, footer background     |
| Gray text        | `#7a8290`                      | Body text, section subtitles          |
| Light bg         | `#F8F8F8`                      | About section background              |
| Warm white       | `#FFFBF9`                      | Testimonial area background           |
| White            | `#FFFFFF`                      | Cards, header, hero area              |
| Font primary     | `"DM Sans", sans-serif`        | All headings and body                 |
| Font secondary   | `"Roboto Condensed", sans-serif` | Used in some secondary text         |
| Button primary   | bg gradient orange, color `#fff` | `.btn` — border-radius 25px         |
| Button white-outline | border white, color `#fff`   | `.border-btn` — border-radius 30px    |
| Button orange-outline | border `#FF8553`, color `#FF8553` | `.border-btn2` — border-radius 30px |
| Browse link      | color `#FF8553`, underline     | `.browse-btn` — underline on hover    |
| Section title    | 50px, weight 400, color `#000`  | `.section-tittle h2`                  |
| Hero heading     | 70px, weight 400, color `#fff`  | On dark background image              |
| Border radius    | 25–30px (buttons), 50% (avatars) | Rounded pill buttons               |

## Sections (in order)

### 1. Header
- Transparent header overlaying the hero.
- Logo left, horizontal menu right (Home, Work, Service, Blog dropdown, Contact).
- "Let's Talk" white outline button (`.border-btn`) right of nav.
- Desktop only; mobile uses hamburger menu.

### 2. Hero
- Full-width background image (cover, 950px height desktop).
- Left column: employee/person portrait image (327px circle-ish).
- Right column: hero caption — h1 "My name is Calvin. Digital Product Designer", subtitle "Head of design at Calvino".

### 3. About Info Bar
- Below hero, inside hero area.
- 3 info items in a row: "Design For" → "Web & Mobile", "Phone" → "+10 (67) 367-9034", "Drop your Message" → "calvino90@gmail.com" with email icon.

### 4. Services (My Experties)
- Section title: "My Experties" (left-aligned).
- 4 service cards in 2x2 grid (no gutters). Each card: SVG icon + h5 title "Strategy & Direction" + description paragraph + "Head of design at Calvino" browse link.
- All cards use the same content pattern (placeholder).

### 5. Gallery (My Works)
- Section title: "My Works" (left-aligned).
- 4 portfolio items in 2x2 grid. Each: background image + hover overlay with "Strategy & Direction" link.
- "More Work" orange outline button centered below.

### 6. About Me
- Split layout: left text, right skills.
- Left: heading "About Me" + 2 paragraphs.
- Right: 3 progress bars with labels and percentages:
  - User Interface Design: 60%
  - User Experience: 89%
  - Illustration: 95%

### 7. Brand Area
- Logo carousel/slider (owl-carousel) inside the About section.
- 6+ brand logos in a row, auto-scrolling.

### 8. Testimonial
- Section title: "Client Testimonial" (centered).
- Carousel with 2 slides. Each: quote text + founder avatar + name "Jacson Miller" + role "Designer @Colorlib".
- Background: warm white (#FFFBF9).

### 9. Blog (Latest News)
- Section title: "Latest News" (left-aligned).
- 3 blog cards in carousel. Each: image + "Tips" badge + date/author ("12 March | by Alan") + title "The Best SPA Salons For Your Relaxation".
- Background: `#fbf9ff` (very light purple tint).

### 10. Footer
- Two-part footer:
  - **Footer top (Want To Work):** Logo + description + social icons (Twitter, Facebook, Pinterest, Globe, Instagram) + "Let's Talk" button + "Download CV" white outline button. Dark background.
  - **Footer bottom:** Copyright with Component Dock link + duplicate nav links (Home, Work, Service, Blog, Contact).

## Gherkin Scenarios

### Header
```gherkin
Scenario: Transparent header overlays hero
  Given I view the page
  Then the header is transparent and overlays the hero area
  And I see the logo, nav links, and "Let's Talk" button

Scenario: Nav has correct links
  Given I view the header
  Then the nav contains Home, Work, Service, Blog, Contact
  And Blog has a dropdown with Blog, Blog Details, Elements
```

### Hero
```gherkin
Scenario: Hero displays name and role
  Given I view the hero section
  Then I see "My name is Calvin. Digital Product Designer"
  And I see "Head of design at Calvino" subtitle
  And I see a portrait image on the left

Scenario: Hero has background image
  Given I view the hero section
  Then it has a full-width background image covering the area
```

### About Info Bar
```gherkin
Scenario: Info bar shows contact details
  Given I view the info bar below the hero
  Then I see "Design For" → "Web & Mobile"
  And I see "Phone" → "+10 (67) 367-9034"
  And I see "Drop your Message" → "calvino90@gmail.com"
```

### Services
```gherkin
Scenario: Services display in 2x2 grid
  Given I view the services section
  Then I see 4 service cards in a 2x2 grid
  And each card has an icon, title "Strategy & Direction", and description

Scenario: Services section has left-aligned title
  Given I view the services section
  Then I see "My Experties" left-aligned above the cards
```

### Gallery
```gherkin
Scenario: Gallery shows portfolio items
  Given I view the gallery section
  Then I see 4 portfolio items in a 2x2 grid
  And each item has a background image with hover overlay

Scenario: Gallery has More Work button
  Given I view the gallery section
  Then I see an orange outline "More Work" button centered below
```

### About Me
```gherkin
Scenario: About Me shows text and skills
  Given I view the about section
  Then I see "About Me" heading with paragraphs on the left
  And 3 progress bars on the right: UI Design 60%, UX 89%, Illustration 95%

Scenario: About Me has brand carousel below
  Given I view the about section
  Then I see a row of brand logos below the content
```

### Testimonial
```gherkin
Scenario: Testimonial shows quote and author
  Given I view the testimonial section
  Then I see "Client Testimonial" centered heading
  And a carousel with quote text and author "Jacson Miller" / "Designer @Colorlib"
  And the background is warm white (#FFFBF9)
```

### Blog
```gherkin
Scenario: Blog shows latest news cards
  Given I view the blog section
  Then I see "Latest News" heading
  And 3 blog cards with images, "Tips" badge, date/author, and title

Scenario: Blog has purple-tinted background
  Given I view the blog section
  Then the background is #fbf9ff
```

### Footer
```gherkin
Scenario: Footer has two parts
  Given I view the footer
  Then I see a top section with logo, social icons, and CTA buttons
  And a bottom section with copyright and nav links

Scenario: Footer copyright links Component Dock
  Given I view the footer bottom
  Then I see copyright linking to componentdock.com
```

## Verification Checklist

- [ ] Header: transparent overlay, logo, nav with dropdowns, "Let's Talk" button
- [ ] Hero: background image, portrait, heading with name + role
- [ ] About Info Bar: 3 contact info items in a row
- [ ] Services: 2x2 grid, 4 cards with icons, titles, descriptions, browse links
- [ ] Gallery: 2x2 grid, 4 items with hover overlay, "More Work" button
- [ ] About Me: text + skills progress bars (60%, 89%, 95%)
- [ ] Brand Area: logo carousel below About Me
- [ ] Testimonial: carousel with quotes, author avatar, warm white background
- [ ] Blog: 3 cards with images, badges, dates, purple-tinted background
- [ ] Footer: dark top with logo/social/CTAs, bottom with copyright + nav
- [ ] Colors match tokens: #FF8553 orange, #000 black, #F8F8F8 light, #FFFBF9 warm
- [ ] Font: DM Sans used throughout
- [ ] Buttons: rounded pill shape (25-30px radius)
- [ ] Responsive: mobile hamburger, stacked columns, full-width hero on small screens
