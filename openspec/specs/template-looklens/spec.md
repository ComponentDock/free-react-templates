# Template: LookLens (Photography Gallery)

## Purpose

Recreation of ColorLib **The Look** — a minimalist photography gallery template with dark aesthetic.

- **Source:** https://colorlib.com/wp/template/thelook/
- **Preview:** https://preview.colorlib.com/theme/thelook/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `looklens` (never reuse source name "thelook")

## Design Tokens

Extracted from `css/style.css` at preview.colorlib.com/theme/thelook/:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-dark` | `#081624` | Primary dark navy — backgrounds, text |
| `--white` | `#fff` | White — text on dark, accents |
| `--text-muted` | `#5c5c5c` | Gray — body text |
| `--text-light` | `#828282` | Light gray — secondary text |
| `--text-border` | `#c1c1c1` | Light gray — borders, dividers |
| `--text-dark` | `#515151` | Dark gray — headings |

### Fonts
| Token | Value | Usage |
|-------|-------|-------|
| `--font-body` | `"Lato", sans-serif` | All text (headings + body) |

### Border Radius
| Value | Usage |
|-------|-------|
| `0` | Most elements — sharp rectangular style |
| `60px` | Pill-shaped buttons |

### Layout
- Full-width dark background (#081624) throughout
- Minimal, clean aesthetic
- Generous whitespace/padding
- No accent colors — monochrome dark + white palette

## Section Structure (in page order)

1. **Navbar** — top nav with links: Home, Gallery, Artists, Shop, News, Contact. Logo/brand text.
2. **Hero Slider** — 3-slide carousel with dark background. Each slide: "The Look Gallery" heading, "John Doe" artist name, "Showcase 23 January - 14 February" subtitle, "Read More" CTA. Full-width with background images.
3. **Gallery** — quote section ("The camera makes you forget you're there...") + portfolio grid. 6 gallery items in a masonry/grid layout, each with: image, "Red Passion 2017" title, "Artist: John Doe" label, "view gallery" link.
4. **Blog** — "Latest from the blog" section. 2 blog cards, each with: category tag ("photography"), title, date, excerpt, "Read More" link.
5. **Contact/Footer** — "Get in touch" section with contact form (message input + "send message" button). Copyright notice with "Made with Component Dock" branding.

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Top navigation with links
  Given the page loads
  Then a navigation bar is visible at the top
  And it shows links: Home, Gallery, Artists, Shop, News, Contact

Scenario: Navbar remains visible on scroll
  Given the user scrolls down
  Then the navbar stays fixed at the top of the viewport
```

### Hero Slider
```gherkin
Scenario: Hero carousel displays 3 slides
  Given the page loads
  Then a full-width hero carousel is visible
  And slide 1 shows "The Look Gallery" heading and "John Doe" artist name
  And each slide shows "Showcase 23 January - 14 February" subtitle
  And each slide has a "Read More" CTA button

Scenario: Hero carousel auto-plays
  Given the hero is visible
  When 5 seconds pass
  Then the carousel advances to the next slide automatically
```

### Gallery
```gherkin
Scenario: Gallery section displays portfolio items
  Given the gallery section scrolls into view
  Then a quote heading is displayed at the top
  And 6 gallery items are shown in a grid
  And each item has a title "Red Passion 2017"
  And each item shows "Artist: John Doe"
  And each item has a "view gallery" link

Scenario: Gallery items respond to hover
  Given the gallery is visible
  When the user hovers over a gallery item
  Then a dark overlay with the title and artist name appears
```

### Blog
```gherkin
Scenario: Blog section shows 2 articles
  Given the blog section is in view
  Then the heading reads "Latest from the blog"
  And 2 blog cards are displayed
  And each card has a "photography" category tag
  And each card shows a title, date, and excerpt
  And each card has a "Read More" link
```

### Contact/Footer
```gherkin
Scenario: Contact section with form
  Given the contact section is in view
  Then the heading reads "Get in touch"
  And a text input for the message is visible
  And a "send message" button is present

Scenario: Footer displays copyright
  Given the footer is visible
  Then a copyright notice is shown
  And "Made with Component Dock" branding is present
```

## Verification Checklist

- [ ] Navbar: fixed positioning, nav links, responsive
- [ ] Hero: 3-slide carousel with auto-play, dark overlay, CTAs
- [ ] Gallery: 6 items in grid, hover overlay, title + artist + link
- [ ] Blog: 2 article cards with category, title, date, excerpt, CTA
- [ ] Contact: form with message input and send button
- [ ] Footer: copyright, Component Dock branding
- [ ] Design tokens: dark navy (#081624), Lato font, sharp edges + pill buttons
- [ ] Responsive: stacked layouts on mobile
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
