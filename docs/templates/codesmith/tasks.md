# Codesmith — Implementation Tasks & Design Notes

ColorLib source: Martin
Preview: https://preview.colorlib.com/theme/martin/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/martin-free-template.jpg
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Structure Order (top to bottom)

1. **Navbar** — Fixed transparent header with logo ("C.") + hamburger menu
2. **Hero** — Full-viewport carousel: 3/4 image + 1/4 yellow panel with
   headline + "Hire me now" CTA; social links on left edge
3. **Services** — "What I Do" heading + 3-column card grid (Explore/Create/Learn)
4. **Work/Case** — "Work" heading + horizontal carousel of image+description pairs
5. **Subscribe** — Text block + "Read my resume" link + newsletter form
6. **Footer** — Deep blue (#002bdc), two columns (Lets Talk / Info) + copyright

## Section-by-Section Fidelity Notes

### Navbar
- Logo: single letter "C." in white, left-aligned
- Hamburger: three-line icon, right-aligned; toggles full-screen nav overlay
- Nav overlay: rgba(0,43,220,0.9) background, centered vertical nav links
- Links: Home, About, Services, Work, Blog, Contact (white text, yellow active)
- On mobile: overlay covers full screen, scales page behind with 0.4 alpha

### Hero
- Full viewport height (100vh), split layout
- Left 75%: large background image (dark/moody photo)
- Right 25%: yellow (#ffdd00) panel with white text
- Headline: "I'm <Name>, a developer from Berlin." (h2, dark text on yellow)
- CTA: "Hire me now" with arrow icon, white pill button
- Social links: vertical list on far left edge (Twitter, Facebook, Instagram, Dribbble)
- Carousel: Owl Carousel-style with prev/next arrows (black circles → yellow on hover)
- 2 slides in original; recreate with at least 2

### Services ("What I Do")
- Section label: "What I Do" (span, gray)
- Heading: "Strategy, design and a bit of magic" (h2)
- 3 equal columns, each with:
  - Circular icon (magnifying glass / layers / lightbulb) — use lucide-react
  - Title link (h3): Explore / Create / Learn
  - Sub-items list (h4): 3 items each
- Background: #f7f7f7 (page default)

### Work/Case
- Section label: "Work" (span, gray)
- Heading: "Happy spending my time to this projects" (h2)
- White background (.colorlib-bg-white)
- Carousel of work items, each item = 50/50 split:
  - Left: background image (case-img)
  - Right: tag pills, title, description, "See details" button (btn-primary = #ffdd00)
- 3 items in original; recreate with at least 3
- Use picsum.photos/seed/codesmith-work-* for images

### Subscribe
- Semi-transparent overlay on page background
- Text block: two paragraphs of introductory copy
- "Read my resume here" link with document icon
- Heading: "Subscribe Newsletter"
- Subtitle: "Subscribe our newsletter and get latest update"
- Form: email input (#e0e0e0 bg, 4px radius) + "Subscribe Now" button (#ffdd00, 30px radius)
- Full-width, centered layout

### Footer
- Background: deep blue (#002bdc)
- Left column: "Lets Talk" heading, description, "Tell us about your project" CTA
  (yellow #ffdd00 bg, 2px radius)
- Right column: "Info" heading, email/phone/address, social icon links
- Copyright bar at bottom: centered, dark bg
- Footer MUST link to https://www.componentdock.com/ ("Component Dock")
- Replace Colorlib attribution with Component Dock

## Design Tokens for Tailwind @theme

```css
@theme {
  --color-brand-yellow: #ffdd00;
  --color-brand-blue: #002bdc;
  --color-page-bg: #f7f7f7;
  --color-text: #1a1a1a;
  --color-heading: rgba(0,0,0,0.8);
  --color-nav-overlay: rgba(0,43,220,0.9);
  --color-selection: #b7c2c2;
  --color-input-bg: #e0e0e0;
  --font-family-body: "Poppins", Arial, sans-serif;
}
```

## Component Map

| Section      | Component File         | Notes                                    |
| ------------ | ---------------------- | ---------------------------------------- |
| Navbar       | Navbar.tsx             | Fixed, transparent, hamburger toggle     |
| Hero         | Hero.tsx               | Carousel with Owl-style dots/arrows      |
| Services     | Services.tsx           | 3-column grid, icon + list               |
| Work         | Work.tsx               | Carousel of image+desc items             |
| Subscribe    | Subscribe.tsx          | Text + newsletter form                   |
| Footer       | Footer.tsx             | 2-col, blue bg, Component Dock link      |

## Testing Notes

- Navbar: toggle opens/closes overlay, nav links close overlay
- Hero: carousel cycles, CTA visible, social links present
- Services: 3 cards render with correct titles
- Work: carousel items render with images and descriptions
- Subscribe: form renders, email input accepts text
- Footer: contact info visible, Component Dock link present
- Responsive: all sections stack on mobile
