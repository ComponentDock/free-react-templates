# Template: Directory (Real Estate / Directory)

## Purpose

Recreation of ColorLib "Listed" — a travel/destination directory template.
- **Source:** https://colorlib.com/wp/template/listed/
- **Preview:** https://preview.colorlib.com/theme/listed/
- **New name:** `directory`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Real Estate (directory / listing / travel destinations)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Body font | `"Raleway", arial, sans-serif` | All body text |
| Heading font | `"Playfair Display", times, serif` | All headings (h1-h6) |
| Body font-size | `16px` | Base text |
| Body color | `#6c757d` | Paragraph / muted text |
| Text color | `#000` | Headings, footer text |
| White | `#fff` | Hero text, button text |
| Black | `#000` | CTA button background |
| Primary blue | `#007bff` | Bootstrap primary (buttons, links) |
| Hover blue | `#3395ff` | Button hover state |
| Light gray | `#f2f2f2` | Footer background |
| Border gray | `#e6e6e6` | Dividers |
| Mid gray | `#ccc` | Borders |
| Hero overlay | `rgba(0, 0, 0, 0.5)` | Dark overlay on hero background |
| Button padding | `12px 30px` | All buttons |
| Button border-radius | `0` | Square corners |
| Hero min-height | `750px` | Hero section |
| Cover section height | `500px` | Parallax cover sections |

### Visual Notes from Screenshot

The original template shows:
- Dark, moody travel aesthetic with large background images
- Black/white/gray palette with Bootstrap blue accents
- Square (no-radius) buttons — "Get Started" is black
- Overlay dark treatment on hero and cover images
- Destination cards with hover-to-reveal dark overlay and white text
- Location pin icons (ionicons) on destination cards
- Light gray footer with contact info, links, and blog entries

## Section Structure (top to bottom)

1. **Navbar** — Logo text "Directory", nav links (Home, Destinations, Places, Blog, About, Contact), search button
2. **Hero** — Full-width background image with dark overlay, centered headline "Find your perfect place." + subtitle "Discover & connect with great places around the world." + "Location Search" button (black, square)
3. **Featured Destinations** — Section heading "Top Destinations" with subtitle text, 3-column grid of destination cards (image background, dark overlay, location icon + place name + "Visit This Place" link). Cards: Stockton Beach, Trogir, Desert
4. **Top Destinations Grid** — 6-column row of smaller destination cards (image thumbnails with location pin icon + place name). Places: Taj Mahal, Eiffel Tower, Opera House, etc.
5. **Section Cover** — Full-width parallax background image with centered promotional content "Get 10% off On Your Next Travel"
6. **More Featured Destinations** — Section heading "More Featured Destinations", 3-column grid of destination cards (same style as Featured Destinations)
7. **Footer** — Light gray (#f2f2f2) background, 4-column layout: About (text + contact info with icons), Links (nav list), Latest Blog (2 entries with dates), Newsletter (email input + subscribe button)

## Gherkin Requirements

### Scenario: Navbar displays correctly
```gherkin
Given the page loads
Then the navbar shows the "Directory" logo text
And the navbar contains navigation links: Home, Destinations, Places, Blog, About, Contact
And the navbar contains a search button
```

### Scenario: Hero section renders
```gherkin
Given the page loads
Then the hero section displays a full-width background image
And the hero shows the headline "Find your perfect place."
And the hero shows the subtitle "Discover & connect with great places around the world."
And the hero contains a "Location Search" button styled with black background and square corners
```

### Scenario: Featured Destinations grid displays
```gherkin
Given the page loads
Then the "Top Destinations" section shows a heading and subtitle text
And 3 destination cards are displayed in a row
And each card has a background image with a dark overlay
And each card shows a location pin icon, place name, and "Visit This Place" link
And cards respond to hover with visual feedback
```

### Scenario: Top Destinations row displays
```gherkin
Given the page loads
Then a row of 6 smaller destination thumbnails is shown
And each thumbnail shows a location pin icon and place name
```

### Scenario: Section Cover parallax displays
```gherkin
Given the page loads
Then a full-width cover section appears with a background image
And the cover section shows "Get 10% off On Your Next Travel" centered
```

### Scenario: More Featured Destinations grid displays
```gherkin
Given the page loads
Then the "More Featured Destinations" section shows a heading
And 3 destination cards are displayed (same style as Top Destinations)
```

### Scenario: Footer renders
```gherkin
Given the page loads
Then the footer has a light gray background (#f2f2f2)
And the footer contains 4 columns: About, Links, Latest Blog, Newsletter
And the About column shows contact info with location, phone, and email icons
And the footer contains a Component Dock attribution link
```

### Scenario: Responsive layout
```gherkin
Given the page is viewed on a mobile device
Then the navbar collapses into a hamburger menu
And the destination grids stack to 1 column
And the footer columns stack vertically
```

## Verification Checklist

- [ ] Fonts: Raleway for body, Playfair Display for headings
- [ ] Brand colors: #000 (black CTA), #007bff (primary blue), #3395ff (hover)
- [ ] Square buttons (border-radius: 0) with padding 12px 30px
- [ ] Hero: full-width background image, dark overlay, centered content, min-height 750px
- [ ] Featured Destinations: 3-column grid, image cards with dark overlay on hover
- [ ] Top Destinations: 6-column row of thumbnails
- [ ] Section Cover: parallax background image with centered text
- [ ] More Featured Destinations: 3-column grid (same as Featured)
- [ ] Footer: light gray background, 4-column layout, contact info with icons
- [ ] Footer includes Component Dock attribution link
- [ ] No references to ColorLib in app code
- [ ] Responsive: stacks on mobile, hamburger nav
- [ ] Placeholder images via picsum.photos
- [ ] Icons from lucide-react (replacing ionicons)
- [ ] 100% test coverage
