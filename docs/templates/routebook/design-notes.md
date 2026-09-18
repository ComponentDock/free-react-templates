# Routebook — Design Notes & Task Outline

**Source:** ColorLib Directing (slug: `directing`)
**Preview:** https://preview.colorlib.com/theme/directing/
**New name:** routebook

---

## Section Order (1:1 fidelity)

1. **Navbar** — Absolute/transparent, fixed on scroll with white bg + shadow
2. **Hero** — Full-width background image, centered heading, search form (2 dropdowns + button)
3. **Categories** — 5 icon+label items in a row, "Most Popular Categories"
4. **Most Searched / Listings** — Tabbed section with 6 food category tabs, listing cards per tab
5. **How It Works** — 3 step cards on #f9f9f9 gray bg
6. **Featured Locations** — 4 city image cards in grid
7. **Testimonials** — Background image, user quotes, decorative quote icon
8. **News / Blog** — 3 post cards with image, date, title
9. **Newsletter** — Email input + subscribe button on #f9f9f9 bg
10. **Footer** — Dark bg, about/address/social columns, Component Dock link

---

## Fidelity Notes

### Navbar
- Transparent over hero, becomes white fixed with shadow on scroll
- Logo left, nav links center-right, "Add Listing" red button + circular login icon right
- Mobile: hamburger menu (slicknav)

### Hero
- Full-width background image (`img/hero/hero-bg.jpg` → use picsum seed)
- Overlay for contrast
- Heading: "Discover The Best Services Near You" in white, Cairo font
- Search form: two select dropdowns (category, location) + red "Search" button
- Below: category tag pills

### Categories
- White background, centered "Most Popular Categories" heading
- 5 items in flex row: icon (flaticon style) + h5 label
- Items: Food & Drink, Restaurant, Hotels, Beauty & Spa, Shopping

### Most Searched / Listings
- Tabbed interface: 6 nav tabs with flaticon food icons
- Active tab shows 3 listing cards in a row
- Each card: image with set-bg, category tag (top-left), heart/bookmark btns (top-right)
- Below image: title, star rating (5 stars, orange #f09d17), price range, location text
- Tab content switches on click

### How It Works
- Light gray #f9f9f9 background
- Centered "How Does It Work" heading
- 3 cards with shadow, each: icon + title + description
- Steps: Explore Listing, Make Appointments, Get Services

### Featured Locations
- 4 city cards in 2x2 or 4-col grid
- Each: background image, city name overlay
- Cities: Washington D.C, Chicago, San Antonio, Los Angeles

### Testimonials
- Background image section
- Heading: "Trusted By Over 5000+ Users"
- Decorative large quote icon in brand color #f03250
- User testimonial cards with name

### News / Blog
- 3 post cards in row
- Each: image, date, title, short excerpt

### Newsletter
- #f9f9f9 background
- Heading: "Subscribe Newsletter"
- Email input + red "Subscribe" button

### Footer
- Dark background
- Columns: Logo/about, address, social links
- Component Dock attribution link

---

## Component Map

| Section | Component file |
|---------|---------------|
| Navbar | Navbar.tsx |
| Hero | Hero.tsx |
| Categories | Categories.tsx |
| Most Searched | MostSearched.tsx (tabs + listing cards) |
| How It Works | HowItWorks.tsx |
| Featured Locations | FeaturedLocations.tsx |
| Testimonials | Testimonials.tsx |
| News | NewsPost.tsx |
| Newsletter | Newsletter.tsx |
| Footer | Footer.tsx |

---

## Design Tokens (Tailwind @theme)

```css
@theme {
  --color-brand: #f03250;
  --color-brand-hover: #d42c46;
  --color-accent: #f09d17;
  --color-surface: #f9f9f9;
  --color-text-primary: #323232;
  --color-text-secondary: #707070;
}
```

Font: Cairo (Google Fonts) — add `<link>` in index.html.
