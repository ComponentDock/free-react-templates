# Template: Latitude (Real Estate Agency)

## Purpose

Recreation of ColorLib "South" — a real estate agency template.
- **Source slug:** south
- **Preview URL:** https://preview.colorlib.com/theme/south/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/south-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** latitude (never reuse "south" in app code or folder name)

## Design Tokens

Extracted from https://preview.colorlib.com/theme/south/style.css:

| Token | Value | Usage |
|---|---|---|
| font-family | `"Open Sans", sans-serif` | Body + headings |
| brand-primary | `#947054` | Warm brown/taupe — buttons, accent, tag border, links, price hover |
| text-heading | `#323232` | h1–h6 color |
| text-body | `#7d7d7d` | p, footer text, author info |
| text-dark | `#000000` | Button hover bg, CTA overlay, search bar bg |
| white | `#ffffff` | Button text, tag text, CTA text |
| bg-light | `#f1f6f8` | Editor/agent section background |
| bg-section | `#f5f7f9` | Subtle section background |
| border-card | `#e1dddd` | Property card border |
| meta-text | `#838383` | Property meta icons text |
| footer-bg | `#111113` | Copyright bar |
| btn-radius | `0` (square) | All buttons — sharp corners, uppercase |
| btn-height | `50px` | Primary CTA height |
| btn-min-width | `170px` | Primary CTA min-width |
| overlay-cta | `rgba(0,0,0,0.5)` | CTA parallax overlay |
| overlay-footer | gradient | Footer overlay over background image |

## Gherkin Requirements

### Header

Scenario: Top header bar displays contact info
  Given the page loads
  Then a top header bar shows an email address and phone number
  And the bar uses light text on a neutral background

Scenario: Main navigation shows logo and menu
  Given the page loads
  Then a sticky main header contains the logo
  And navigation links: Home, About Us, Properties, Blog, Contact
  And a search icon/button is visible

Scenario: Mobile hamburger menu toggles
  Given the viewport is narrow
  When the user taps the hamburger icon
  Then the navigation drawer opens
  And tapping close hides the drawer

### Hero

Scenario: Hero carousel displays slides
  Given the page loads
  Then a full-width hero carousel shows background images
  And each slide has a centered headline (e.g. "Find your home")
  And slides auto-advance on a timer

Scenario: Hero headline is prominent
  Given any hero slide is visible
  Then the headline is large, white, centered vertically

### Advanced Search

Scenario: Search form displays filters
  Given the page loads
  Then an advanced search area appears below the hero
  And it contains: keyword input, city dropdown, category dropdown, offer dropdown, listing dropdown, bedrooms dropdown, bathrooms dropdown, space range slider, distance range slider, type dropdown, action dropdown

Scenario: Search form submits
  Given the user selects filter options
  When the user clicks "Search"
  Then the form triggers a search action (prevent default in SPA)

### Featured Properties

Scenario: Property cards display in grid
  Given the page loads
  Then 6 property cards appear in a 3-column grid
  And each card shows: thumbnail image, "For Sale" tag, price, title, location, description, meta icons (new, bathroom, garage, space)

Scenario: Property card hover effect
  Given a property card is visible
  When the user hovers over it
  Then the card gains a subtle shadow
  And the "For Sale" tag background turns black
  And the price background turns brand-primary

### Call to Action

Scenario: CTA section displays with parallax
  Given the page scrolls to the CTA
  Then a full-width parallax section appears
  And it has a dark overlay on a background image
  And white text: heading "Are you looking for a place to rent?", subtitle, "Search" button

### Testimonials

Scenario: Testimonials carousel shows slides
  Given the page loads
  Then a testimonials carousel appears
  And each slide has: heading, quote paragraph, author photo, author name, role
  And the active slide is full scale, inactive slides are scaled down

Scenario: Testimonials navigation arrows work
  Given the testimonials are visible
  When the user clicks prev/next arrows
  Then the carousel advances to the next/previous slide

### Agent / Editor Section

Scenario: Agent section displays in split layout
  Given the page loads
  Then a split section shows agent content on the left, agent photo on the right
  And the left side has: agent icon, name "jeremy Scott", role "Realtor", bio paragraph, phone, email, signature image

### Footer

Scenario: Footer has 4-column layout
  Given the page loads
  Then a dark footer with background image overlay shows 4 columns:
  | Column | Content |
  | About Us | Image, logo, paragraph |
  | Hours | Weekly hours list, contact info |
  | Useful Links | Tag cloud of navigation links |
  | Featured Properties | Small property image carousel |

Scenario: Footer copyright bar
  Given the page loads
  Then a dark copyright bar sits at the bottom
  And it replaces Colorlib attribution with "Made with Component Dock" linking https://www.componentdock.com/

## Verification Checklist

- [ ] New name "latitude" used everywhere in app code (no "south" references)
- [ ] Footer links https://www.componentdock.com/ ("Component Dock")
- [ ] public/CNAME contains latitude.free.componentdock.com
- [ ] homepage in package.json is https://latitude.free.componentdock.com
- [ ] Brand color #947054 used as Tailwind theme token
- [ ] Open Sans font loaded via Google Fonts link
- [ ] All sections match original order: header → hero → search → properties → CTA → testimonials → agent → footer
- [ ] Property cards: 3-column grid, tag, price, location, meta icons
- [ ] CTA: parallax bg, dark overlay, white text, brand button
- [ ] Testimonials: carousel with scaled inactive slides
- [ ] Agent section: 50/50 split, bio + contact info + signature
- [ ] Footer: 4 columns with gradient overlay on bg image
- [ ] No Colorlib references in app code
- [ ] Placeholder images via picsum.photos/seed/latitude-N/W/H
- [ ] 100% test coverage (Vitest + Testing Library)
