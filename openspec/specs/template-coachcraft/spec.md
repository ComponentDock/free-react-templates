# Template: Coachcraft (Life Coaching / Consulting)

## Purpose

Recreation of ColorLib "Life Coaching" — a responsive coaching/life-coaching
website template with hero slider, services grid, animated statistics,
pricing plans, contact form, and Google Maps integration.

- **Source**: [ColorLib Life Coaching](https://colorlib.com/wp/template/life-coaching/)
- **Preview**: https://preview.colorlib.com/#life-coaching (unreachable — 404 as of 2026-09-16; falling back to screenshot)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoaching-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `coachcraft` (apps/coachcraft, `@free-react-templates/coachcraft`)

## Design tokens (extracted from screenshot + ColorLib page)

| Token            | Value                                | Source                             |
| ---------------- | ------------------------------------ | ---------------------------------- |
| Brand primary    | `#a3b627` (olive/yellow-green)       | Nav active state, CTA buttons      |
| Brand secondary  | `#8dd1d1` (light teal)               | Service icon circular backgrounds  |
| Background       | `#ffffff` (white)                     | Section backgrounds                |
| Top bar bg       | `#333333` (dark gray)                | Top bar background                 |
| Text primary     | `#333333` (dark)                      | Headings, body text                |
| Text secondary   | `#666666` (muted gray)               | Subheadings, descriptions          |
| Text light       | `#ffffff` (white)                     | Hero overlay text                  |
| Nav active bg    | `#a3b627` (olive green)              | Active nav link highlight          |
| Font headings    | `'Open Sans', sans-serif`            | Headings (bold weight)             |
| Font body        | `'Open Sans', sans-serif`            | Body paragraphs                    |
| Button radius    | `4px` (slightly rounded)             | CTA buttons                        |
| Button bg        | `#a3b627` (olive green)              | "MAKE AN APPOINTMENT" button       |
| Button text      | `#ffffff` (white)                     | Button label color                 |
| Hero overlay     | Semi-transparent dark gradient       | Over hero image                    |
| Icon circles     | `#8dd1d1` background, white icons    | Service section circular icons     |

## Sections (in order, from screenshot + ColorLib page description)

1. **Top Bar** — Dark gray background (#333333). Left: phone icon + phone number. Right: social media icons (Facebook, Twitter, Instagram, Google+). White text, small font.
2. **Navigation** — White background, sticky. Logo "LIFECOACH" left (text-based, "LIFE" normal weight, "COACH" bold). Nav links: HOME, ABOUT, SERVICES, STORIES, BLOG, CONTACT. Search icon far right. Active link has olive green (#a3b627) background highlight with white text.
3. **Hero Slider** — Full-width hero with background image + dark gradient overlay. Centered text: "IMPROVING THE WORLD" (olive green uppercase subtitle), "Restart your career to be successful" (large white heading). "CONNECT WITH US" button (white outlined, rounded corners). Carousel dots at bottom.
4. **Info Bar** — Light gray or white background below hero. Three columns: phone icon + phone number + address, clock icon + opening hours, and "MAKE AN APPOINTMENT" olive green button.
5. **Services** — White background. Centered heading "We can help you in different situations" with "WE OFFER SERVICES" olive green subtitle. 4-column grid of service cards: each has a teal circular icon background, title (Career & Business, Mental & Physical Care, People & Relationships, Life coaching), and description paragraph.
6. **Statistics** — (inferred from ColorLib description: "animated statistics") Counter section showing key numbers with animation on scroll.
7. **About / Content** — (inferred: "content loading on scroll") About section with text content and possibly team imagery.
8. **Pricing Plans** — (inferred from ColorLib description: "pricing plans") Pricing table/cards with plan tiers.
9. **Blog / Stories** — (inferred from nav link "STORIES") Blog post previews or testimonials.
10. **Contact Form + Google Maps** — (inferred from ColorLib description: "integrated contact form and Google Maps") Contact section with form fields and embedded map.
11. **Footer** — Dark background. Footer links, social media icons, copyright. "Component Dock" attribution link.

## Gherkin requirements

### Feature: Top Bar

```gherkin
Scenario: Top bar displays contact info and social links
  Given the user loads the page
  Then the top bar is visible with a dark background
  And a phone number is displayed on the left side
  And social media icons are displayed on the right side
  And the top bar text is white
```

### Feature: Navigation

```gherkin
Scenario: Navigation displays logo and links
  Given the user loads the page
  Then the navigation bar is visible with a white background
  And the logo text "coachcraft" is displayed on the left
  And navigation links are visible: "home", "about", "services", "stories", "blog", "contact"
  And a search icon is visible on the right

Scenario: Active navigation link is highlighted
  Given the user is on the homepage
  Then the "home" nav link has an olive green background highlight

Scenario: Mobile hamburger menu
  Given the viewport is narrow (mobile)
  Then the navigation collapses into a hamburger menu
  When the user taps the hamburger icon
  Then a mobile menu opens showing all navigation links
```

### Feature: Hero Slider

```gherkin
Scenario: Hero displays heading and CTA
  Given the user is on the homepage
  Then the hero section shows a background image with dark overlay
  And the subtitle "IMPROVING THE WORLD" is displayed in olive green uppercase
  And the heading "Restart your career to be successful" is displayed in white
  And a "CONNECT WITH US" button is visible with white outlined style

Scenario: Hero has carousel navigation
  Given the hero slider is visible
  Then carousel dots are displayed at the bottom
  And clicking a dot changes the hero slide
```

### Feature: Info Bar

```gherkin
Scenario: Info bar displays contact details and appointment CTA
  Given the user scrolls past the hero
  Then the info bar is visible
  And a phone number section shows an icon and phone number
  And an opening hours section shows an icon and schedule
  And a "MAKE AN APPOINTMENT" button is visible with olive green background
```

### Feature: Services Section

```gherkin
Scenario: Services section displays heading and cards
  Given the user scrolls to the services section
  Then the heading "We can help you in different situations" is visible
  And the subtitle "WE OFFER SERVICES" is displayed in olive green
  And four service cards are displayed in a row

Scenario: Each service card has icon, title, and description
  Given the services section is visible
  Then each card has a teal circular icon background
  And each card has a title (Career & Business, Mental & Physical Care, People & Relationships, Life coaching)
  And each card has a description paragraph
```

### Feature: Statistics Section

```gherkin
Scenario: Statistics display animated counters
  Given the user scrolls to the statistics section
  Then counter numbers animate from zero to their target values
  And each counter has a label underneath
```

### Feature: Pricing Plans

```gherkin
Scenario: Pricing section displays plan cards
  Given the user scrolls to the pricing section
  Then pricing plan cards are displayed
  And each card shows a plan name, price, and feature list
  And one plan is highlighted as recommended
```

### Feature: Contact Form

```gherkin
Scenario: Contact section displays form and map
  Given the user scrolls to the contact section
  Then a contact form is visible with input fields (name, email, subject, message)
  And a submit button is visible
  And a Google Maps embed is visible nearby
```

### Feature: Footer

```gherkin
Scenario: Footer displays branding and links
  Given the user scrolls to the bottom
  Then the footer has a dark background
  And social media icons are displayed
  And a "Component Dock" attribution link is visible
  And copyright information is displayed
```

## Verification checklist

- [ ] Top bar: dark bg, phone number, social icons, white text
- [ ] Navigation: white bg, logo text, all nav links, search icon, active state highlight
- [ ] Hero: full-width background image, dark overlay, subtitle, heading, CTA button, carousel dots
- [ ] Info bar: phone + address, opening hours, appointment button
- [ ] Services: heading + subtitle, 4 cards with teal icons, titles, descriptions
- [ ] Statistics: animated counters with labels
- [ ] Pricing: plan cards with pricing details
- [ ] Contact: form inputs + submit button + Google Maps embed
- [ ] Footer: dark bg, social icons, Component Dock link, copyright
- [ ] Responsive: mobile hamburger, stacked layout on small screens
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Tests: 100% coverage on all components
