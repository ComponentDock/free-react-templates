# Rollscape — Implementation Tasks & Design Notes

**Source**: ColorLib Rolast (https://preview.colorlib.com/theme/rolast/)
**New name**: rollscape
**Stack**: React 19, Vite, Tailwind CSS 4, TypeScript

## Section Order (top to bottom)

1. Navbar
2. Hero / Search
3. Property Cards
4. Completed Cases (green banner)
5. How It Works
6. Team Agents
7. Location Gallery
8. Footer
9. Footer Bottom

## Component Breakdown

| # | Component          | File                        | Notes                                          |
|---|-------------------|-----------------------------|------------------------------------------------|
| 1 | Navbar             | src/components/Navbar.tsx   | Sticky, logo left, 5 nav links, phone CTA right. White bg. Mobile hamburger menu. |
| 2 | Hero               | src/components/Hero.tsx     | Full-width bg image with dark overlay. Headline + subtext. Tab toggle (Buy/Rent). Search form with Location, Property type, Bedroom selects, Search btn. |
| 3 | PropertyCards      | src/components/PropertyCards.tsx | Section heading "Searching for the Best Places?". 6 cards, 3-col grid. Each: img, title, location pin, beds/baths, price pill. |
| 4 | CompletedCases     | src/components/CompletedCases.tsx | Green (#0FB45F) full-width. Left: heading + text + "Browse Property" btn. Right: image carousel (2 items). Two-column split layout. |
| 5 | HowItWorks         | src/components/HowItWorks.tsx | 4 steps in row. Each: circular numbered icon + title + description. Centered heading. |
| 6 | TeamAgents         | src/components/TeamAgents.tsx | "Meet Our Agents" heading. Horizontal scroll/carousel. Agent card: photo, social overlay on hover, name, title. |
| 7 | LocationGallery    | src/components/LocationGallery.tsx | Full-width image carousel. Each slide: image + location label overlay + count. |
| 8 | Footer             | src/components/Footer.tsx   | Dark navy bg. 4-col: logo+social, About links, Services links, Newsletter form. |
| 9 | FooterBottom       | (part of Footer.tsx)        | Copyright line + Component Dock link. |

## Design Notes

### Color Palette
- Primary brand: #0FB45F (green) — buttons, accents, completed-cases bg
- Dark navy: #140C40 — footer bg, headings
- Body text: #646D77
- Section bg: #f7f7f7
- Footer text: #C2C5DB

### Typography
- Font: Prompt (Google Fonts), sans-serif
- Headings: bold, dark navy #140C40
- Body: regular weight, #646D77

### Buttons
- Pill shape: border-radius 25px
- Primary: green bg (#0FB45F), white text
- Hover: darken green

### Key Layout Patterns
- Hero: full-width with background image + dark overlay, content left-aligned
- Property cards: 3-col responsive grid (2 on tablet, 1 on mobile)
- Completed cases: two-column split (text left ~40%, carousel right ~60%), green bg
- How it works: 4-col centered icons, flex wrap on mobile
- Team agents: horizontal carousel with overlay on hover
- Location gallery: full-width carousel with overlay labels
- Footer: 4-column grid, responsive to 2-col then 1-col

### Images
- All placeholder images: picsum.photos with seed `rollscape-<n>`
- Hero: use a large real estate / cityscape image
- Property cards: 6 different property/building images
- Team: 4 agent portrait placeholders
- Location: 5 city/landscape images
- Completed cases: 2 gallery images

### Fidelity Notes
- The original uses Bootstrap grid classes — translate to Tailwind grid/flex
- Owl Carousel for team and location — use CSS scroll snap or simple carousel
- Tab toggle in hero: use React state (Buy/Rent), both show same form structure
- Social overlay on team cards: absolute positioned, appears on hover
- Numbered circles in How It Works: use brand green bg with white number
- Location labels: absolute positioned bottom-left on images with semi-transparent bg
