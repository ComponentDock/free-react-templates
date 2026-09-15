# Template: Lifegift (Charity / Nonprofit Template)

## Purpose

Lifegift is a single-page charity / nonprofit website template in the
free-react-templates monorepo. It is a React recreation of the ColorLib free
"Charilife" website template design, built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Charilife" — charity / donation website template
  (source: https://colorlib.com/wp/template/charilife/).
- **Preview URL:** https://preview.colorlib.com/theme/charilife/
  (HTTP 200, ~41.4 KB rendered DOM, title "Charilife — ColorLib Website Template").
  Stylesheets: `css/main.css` (50 KB) + `css/bootstrap.css` + owl.carousel /
  magnific-popup / font-awesome / themify-icons / nice-select / flaticon.
  Fonts via Google Fonts in the head: **Lora** (headings/display, serif) +
  **Roboto** (body, sans-serif). jQuery + Bootstrap JS drive the sticky navbar,
  mobile slide-in menu, hero banner, video popup, and countdown timers.
- **Screenshot:** `charilife-free-template-1.jpg` (TEMPLATES.md line 1256) —
  dark-themed charity template with hero banner, about section, features,
  popular causes with progress bars, volunteer CTA, upcoming events with
  countdown timers, blog posts, Instagram grid, and newsletter/footer.
- **Visual design (from DOM + CSS tokens):** clean charity aesthetic with a
  dark header/hero, white/light-grey page body. **Brand red/coral `#ff573d`**
  (primary CTA buttons, hover accents, overlays, active states — 54 usages
  in CSS). Dark navy `#15181d` (header background, text, footer — 27 usages).
  Light lavender backgrounds `#f0e9ff` / `#f9f9ff` / `#fbf9ff` (alternating
  section backgrounds). Muted greys `#999999` / `#666` / `#888888` (body
  text, meta). Teal accent `#4cd3e3` (secondary accent). Blue accent `#38a4ff`.
  Yellow accent `#f4e700`. Red accent `#f44a40`. Light grey backgrounds `#f1f1f1`
  / `#ececec`. **Roboto** 16px body with **Lora** serif display headings; buttons
  have 3–5px border-radius (default), 20px for `.circle` variant; counters/events
  have dark card backgrounds; popular cause cards use white bg with progress
  bars. The demo brands itself "Charilife"; recreation uses the NEW name **Lifegift**.

## Design tokens

| Token              | Value                    | Usage                                     |
| ------------------ | ------------------------ | ----------------------------------------- |
| brand-primary      | `#ff573d`                | CTA buttons, links, hover states, accents |
| dark-bg            | `#15181d`                | Navbar, hero overlay, footer              |
| body-bg            | `#ffffff` / `#f9f9ff`    | Page body, alternating sections           |
| section-alt-bg     | `#f0e9ff`                | Alternating lavender section backgrounds  |
| text-primary       | `#15181d`                | Headings, strong text                     |
| text-body          | `#666` / `#999999`       | Body text, meta, secondary text           |
| accent-teal        | `#4cd3e3`                | Secondary accents                         |
| accent-blue        | `#38a4ff`                | Info accents                              |
| accent-yellow      | `#f4e700`                | Highlight accents                         |
| accent-red         | `#f44a40`                | Alert/urgent accents                      |
| surface-light      | `#f1f1f1` / `#ececec`    | Card backgrounds, dividers                |
| font-heading       | `"Lora", serif`           | Display headings (h1–h4)                  |
| font-body          | `"Roboto", sans-serif`    | Body text, UI elements                    |
| btn-radius         | `3px` (default)          | Standard buttons                          |
| btn-radius-circle  | `20px`                   | `.circle` button variant                  |
| img-radius         | `50%`                    | Circular avatars                          |

## Gherkin scenarios

### Header / Navigation

```gherkin
Scenario: Top navbar displays logo and navigation links
  Given the visitor is on the Lifegift homepage
  Then the navbar shall display the "Lifegift" logo on the left
  And the navbar shall contain navigation links: Home, About, Pages, Events, Blog, Contact
  And the navbar shall be sticky on scroll (position: fixed after scroll threshold)

Scenario: Mobile hamburger menu opens slide-in navigation
  Given the visitor is on a mobile viewport (< 768px)
  When the visitor taps the hamburger icon
  Then a slide-in navigation panel shall appear from the left
  And the panel shall contain the same navigation links as the desktop navbar
```

### Hero / Banner

```gherkin
Scenario: Hero section displays headline and CTA
  Given the visitor is on the Lifegift homepage
  Then the hero section shall display the headline "Save the African children"
  And the hero section shall display the subheading "More charity. More better life."
  And the hero section shall have a dark overlay on a background image
  And the hero section shall contain a CTA button

Scenario: Hero section is full-width with dark overlay
  Given the visitor is on the Lifegift homepage
  Then the hero section shall span the full viewport width
  And the hero section shall have a dark semi-transparent overlay
  And the hero height shall be approximately 80vh on desktop
```

### About Section

```gherkin
Scenario: About section displays organization info
  Given the visitor scrolls to the About section
  Then the section title shall read "We Are A Non-profit Organization"
  And the section shall contain descriptive text about the charity
  And the section shall have a light background (`#f9f9ff`)

Scenario: About section includes video popup
  Given the visitor is on the About section
  Then there shall be a video play button overlaying a thumbnail image
  And clicking the play button shall open a video popup (magnific-popup)
```

### Features Section

```gherkin
Scenario: Features section shows three ways to help
  Given the visitor scrolls to the Features section
  Then the section title shall read "How Could You Help"
  And three feature items shall be displayed in a row:
    | Feature            |
    | Give Donation      |
    | Give Inspiration   |
    | Become Volunteer   |
  And each feature shall have an icon, title, and description

Scenario: Features section has alternating background
  Given the visitor views the Features section
  Then the section background shall be light grey (`#ececec`)
```

### Popular Causes Section

```gherkin
Scenario: Popular causes section shows three cause cards
  Given the visitor scrolls to the Popular Causes section
  Then the section title shall read "Popular Causes"
  And three cause cards shall be displayed in a row
  And each cause card shall have: an image, a progress bar, title, description, and action link
  And each progress bar shall show a percentage (raised vs. goal)

Scenario: Cause cards have hover effect
  Given the visitor hovers over a cause card
  Then the card image shall zoom slightly (scale transform)
```

### Volunteer CTA Section

```gherkin
Scenario: Volunteer CTA section encourages participation
  Given the visitor scrolls to the Volunteer CTA section
  Then the section shall display "Volunteer Needed At Your Area"
  And the section shall have a dark overlay on a background image
  And the section shall contain a CTA button
```

### Upcoming Events Section

```gherkin
Scenario: Events section shows upcoming events with countdown
  Given the visitor scrolls to the Upcoming Events section
  Then the section title shall read "Upcoming Event"
  And at least three event cards shall be displayed
  And each event card shall have: a title, description, and countdown timer
  And each countdown timer shall show days, hours, minutes

Scenario: Event cards have dark background
  Given the visitor views an event card
  Then the card background shall be dark (`#15181d`)
  And the card text shall be white/light
```

### Blog Section

```gherkin
Scenario: Blog section shows latest posts
  Given the visitor scrolls to the Blog section
  Then the section title shall read "Latest From Our Blog"
  And three blog post cards shall be displayed in a row
  And each blog card shall have: an image, date/category meta, title, excerpt, and "Read More" link

Scenario: Blog cards have consistent layout
  Given the visitor views a blog card
  Then the card shall have a white background
  And the card shall have a bottom date badge
```

### Instagram / Social Section

```gherkin
Scenario: Instagram section shows image grid
  Given the visitor scrolls to the Instagram section
  Then the section title shall read "Follow Us"
  And a grid of Instagram-style images shall be displayed
  And each image shall have a hover overlay with an Instagram icon
```

### Newsletter Section

```gherkin
Scenario: Newsletter section captures email subscriptions
  Given the visitor scrolls to the Newsletter section
  Then the section shall display "Subscribe Now And Receive The Weekly Newsletter"
  And the section shall contain an email input field
  And the section shall contain a subscribe button
```

### Footer

```gherkin
Scenario: Footer displays contact info and links
  Given the visitor scrolls to the footer
  Then the footer shall display "About Us" column with description
  And the footer shall display "Quick Links" column with navigation links
  And the footer shall display "Contact Us" column with address, phone, email
  And the footer shall display social media icon links
  And the footer shall contain a "Made with Component Dock" / "Component Dock" link

Scenario: Footer has dark background
  Given the visitor views the footer
  Then the footer background shall be dark (`#15181d`)
  And the footer text shall be white/light
```

### Responsive behavior

```gherkin
Scenario: Template is responsive on mobile
  Given the visitor is on a mobile viewport (< 768px)
  Then the navbar shall collapse to a hamburger menu
  And multi-column sections shall stack to single column
  And the hero text shall be centered and resized for mobile
  And event countdowns and blog cards shall stack vertically
```

## Verification checklist

- [ ] Header: sticky navbar with logo + nav links + mobile hamburger
- [ ] Hero: full-width dark overlay, headline, subheading, CTA button
- [ ] About: section title, description, video popup thumbnail
- [ ] Features: three-column grid (Give Donation / Give Inspiration / Become Volunteer)
- [ ] Popular Causes: three cause cards with progress bars
- [ ] Volunteer CTA: dark overlay section with headline + CTA button
- [ ] Events: event cards with countdown timers (days, hours, minutes)
- [ ] Blog: three blog cards with images, meta, title, excerpt, "Read More"
- [ ] Instagram: image grid with hover overlays
- [ ] Newsletter: email input + subscribe button
- [ ] Footer: three-column layout, social icons, Component Dock link
- [ ] Responsive: mobile hamburger menu, stacked columns, adjusted typography
- [ ] Design tokens: brand red `#ff573d`, dark `#15181d`, Lora + Roboto fonts
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
