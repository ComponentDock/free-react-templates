# Rimarc — Implementation Task Outline

**Source:** ColorLib "Thebasketball"
**Preview:** https://preview.colorlib.com/theme/thebasketball/
**Stack:** React 19 + Vite + Tailwind 4 + TypeScript

## Section implementation order

1. **Navbar** — Fixed top nav with logo, section links, "Book tickets" red CTA
2. **Hero** — Full-width slider/carousel with background images, headline, countdown timer, CTA
3. **Latest Match** — Two-team matchup display with logos and score
4. **Team** — Grid of player cards with background photos, names, "View portfolio" buttons
5. **Statistics** — Tabbed stat view with carousel of player stat cards + league table
6. **Latest Videos** — Video carousel with thumbnail, play overlay, title
7. **Product** — Tabbed product grid with "Add to cart" buttons
8. **Footer** — 3-column widget layout + copyright + Component Dock link

## Fidelity notes

### Navbar
- Oswald font, uppercase text, letter-spacing 3px
- "Book tickets" is a solid red (#e02529) button, no border-radius
- Nav links: Home, Team, Statistics, Latest Videos, Shop, Contact
- Background: dark (#100303 or transparent on hero)

### Hero
- Full-viewport height, background images (use picsum placeholder)
- Headline in large Oswald, white text
- Countdown timer: 4 number blocks (days/hours/minutes/seconds) with labels
- Red CTA button: "Book tickets"
- Supports slider/carousel for multiple slides

### Latest Match
- Dark background (#111111)
- Two team logos side by side with team names
- Match score/status displayed between them
- Section title "Latest results"

### Team
- Dark background (#100303)
- Section heading "Team"
- 2-column grid of player cards
- Each card: background photo (picsum), name overlay, position
- "View portfolio" outlined button (transparent bg, #e02529 border)

### Statistics
- Dark background
- Tabbed navigation for stat categories
- Carousel slider of player stat cards
- Each card: player photo (picsum), name, point total
- Also: league table view with team standings (W/L/points)

### Latest Videos
- Dark background
- Carousel of video thumbnails
- Play button overlay on each
- Video title below thumbnail

### Product
- Dark background (#211E1E or #2F2C2C)
- Tabbed groups of products (multiple carousels)
- Each product: image, name, price
- "Add to cart" button per product

### Footer
- Darkest background (#100303)
- 3 widget columns: About text, Recent Posts, Contact
- Copyright line
- Component Dock link: https://www.componentdock.com/

## Design token summary for Tailwind

```css
@theme {
  --color-brand: #e02529;
  --color-dark: #100303;
  --color-section: #111111;
  --color-card: #211E1E;
}
```

- Font families: Oswald (headings), Roboto (body) via Google Fonts link
- No border-radius on primary buttons
- Button letter-spacing: 3px
- White text on all dark backgrounds
