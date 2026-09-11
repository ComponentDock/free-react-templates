# AdLog — Tasks & Design Notes

## Source

- **ColorLib slug:** directoryads
- **Preview URL:** https://preview.colorlib.com/theme/directoryads/
- **Screenshot:** directoryads-free-template.jpg

## Section order (implementation sequence)

1. **Navbar** — "AdLog" logo + nav links + dark-mode toggle
2. **Hero** — "Welcome To AdLog" + search form (keyword, location, category) + trending tags
3. **Featured Ads** — carousel of listing cards (image, category, title, address, rating)
4. **Popular Categories** — 6 icon cards with names and listing counts
5. **Trending Today** — 2-column grid of listing cards
6. **Testimonials** — carousel of testimonial cards
7. **Blog** — 3 blog cards with images, dates, titles
8. **Footer** — About, Navigations, Social, Search + Component Dock link

## Design token reference (from css/style.css)

| Token              | Value                                   |
|--------------------|-----------------------------------------|
| Primary color      | #046df4 / #2f89fc (blue)               |
| Green accent       | #8bc34a                                 |
| Heading text       | #212529                                 |
| Body text          | #666666                                 |
| Light bg           | #f8f9fa / #edf0f5                       |
| Font               | Nanum Gothic (Google Fonts)             |
| Button style       | .btn-primary: blue, rounded             |
| Listing cards      | horizontal: image left, content right   |
| Category tags      | small colored labels                    |
| Star ratings       | yellow stars + review count             |
| Heart icons        | bookmark/favorite on listings           |

## Fidelity notes

- Hero: centered headline with search form below (keyword input, location
  input with map icon, category dropdown, search button). Trending search
  tags below the form.
- Featured ads: carousel of listing cards — horizontal layout with image on
  left, content on right (category tag, heart icon, title, address, star
  rating with review count).
- Popular categories: 6 cards in a grid, each with an icon, category name,
  and listing count number.
- Trending today: 2-column grid of listing cards (same layout as featured
  ads but in a grid).
- Testimonials: carousel of testimonial cards.
- Blog: 3 cards with background images, date, title, excerpt.
- Footer: dark bg, 3-column layout (About + Navigations + Follow Us
  social icons) + search input on right. Replace ColorLib attribution
  with ComponentDock link.
- Font: Nanum Gothic is a clean sans-serif — use it for body text.
- Primary blue (#046df4) is used for buttons, links, and accents.
- Star ratings: use yellow stars (text-warning class) with review counts.
- Heart/bookmark icons on each listing card.

## Components to reuse from packages/ui

- Button / ButtonLink (for CTA buttons, search button)
- Card (for listing cards, blog cards, category cards)
- Badge (for category tags, star ratings)
- cn (class merging utility)

## Images

All placeholder images: `https://picsum.photos/seed/adlog-<n>/<w>/<h>`
