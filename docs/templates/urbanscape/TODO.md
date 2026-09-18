# Urbanscape — Implementation TODO

Source: ColorLib CityListing (https://colorlib.com/wp/template/citylisting/)
Preview: https://preview.colorlib.com/theme/citylisting/

## Section Order (top → bottom)

1. **Navbar** — transparent, sticky on scroll. Logo left, nav center (Home, About, Categories, Listing, Page, Blog, Contact), "+ add Listing" pill button (red), "Sign in or Register" right.
2. **Hero** — full-width background image with dark gradient overlay. Script subheading "Explore the city" in gold, large heading "Discover Great Places" in white. Search form: text input + category dropdown (pill shape) + red "Search" button.
3. **Popular Locations** — section padding, subheading "Most visited places" in script font, heading "Popular Locations". 3-column grid × 2 rows = 6 location cards. Each card: image, city name, gold location count badge.
4. **How It Works** — light background (#fafafa). Subheading "Easy to explore", heading "How It Works". 3-column: icon circle + step title + description. Steps: Choose a Category, What You Want, Go Out & Explore.
5. **Featured Categories** — white background. Subheading + heading "Featured Categories". 4-column grid. Each: circular icon, category title, description, "View Details" link in gold. Categories: Hotel, Night Life, Culture Place, Restaurant.
6. **Stats / Info** — two-column layout. Left: heading + description paragraph. Right: two icon+text feature items ("Great places in the world", "Biggest category listing").
7. **Testimonials** — dark background. Subheading "Our client testimonials", heading "What our client say". Carousel with: quote text, circular founder photo, founder name, role. Slick-style prev/next arrows.
8. **Newsletter** — dark background. Subheading "Subscribe out newsletter", heading "Subscribe For Newsletter". Email input + gold "Send Now" button.
9. **Blog** — light background. Subheading "Our blog", heading "News and tips". 3-column cards: image, category tag, title, date/author line.
10. **Footer** — dark background. 4 columns: Logo + about text, Quick Links, Categories, Download App + social icons. Bottom bar: copyright + Component Dock link.

## Design Notes

### Colors
- Brand gold: `#c6a16e` — CTAs, links, badges, script text color
- Accent red: `#e6373d` — search button, add-listing button
- Dark navy: `#0b1c39` — headings
- Body text: `#506172` / `#635c5c`
- Muted: `#868c98` — footer, secondary text
- Light bg: `#fafafa` — alternating sections
- White: `#fff`

### Typography
- Headings: "Josefin Sans", sans-serif
- Script/decorative subheadings: "Great Vibes", cursive
- Body alternate: "Barlow", sans-serif

### Buttons
- Pill shape: `border-radius: 50px` (search bar, add-listing, nav CTA)
- Standard buttons: `border-radius: 5px`
- Search/add-listing: red (#e6373d) background, white text
- Gold CTAs: #c6a16e background, white text

### Images
- Hero: cinematic coastal city (use `https://picsum.photos/seed/urbanscape-hero/1920/900`)
- Location cards: 6 different city images (`picsum.photos/seed/urbanscape-loc-N/`)
- Blog cards: 3 images (`picsum.photos/seed/urbanscape-blog-N/`)
- Testimonial founder: circular portrait (`picsum.photos/seed/urbanscape-founder/`)
- Category icons: use `lucide-react` (Hotel→Building2, Night Life→Wine, Culture→Landmark, Restaurant→UtensilsCrossed)
- How It Works icons: `lucide-react` (List, Target, Compass)

### Layout
- Hero: full-width, min-height ~600px, search bar centered
- Locations: 3-col grid on desktop, 2-col tablet, 1-col mobile
- How It Works: 3-col equal, centered text
- Featured Categories: 4-col desktop, 2-col tablet, 1-col mobile
- Stats: 2-col split (text left, features right)
- Blog: 3-col desktop, 1-col mobile
- Footer: 4-col desktop, 2-col tablet, 1-col mobile

## Component Structure

```
src/
  main.tsx          (excluded from coverage)
  App.tsx           (composes all sections)
  index.css         (Tailwind entry + @theme tokens)
  components/
    Navbar.tsx
    Hero.tsx
    PopularLocations.tsx
    HowItWorks.tsx
    FeaturedCategories.tsx
    StatsInfo.tsx
    Testimonials.tsx
    Newsletter.tsx
    Blog.tsx
    Footer.tsx
  test/
    setup.ts
```

## Implementation Steps

1. Copy simplest existing app as starter, rename package to `@free-react-templates/urbanscape`
2. Set up `index.css` with `@theme` tokens (brand gold, accent red, fonts)
3. Add Google Fonts link for Josefin Sans, Great Vibes, Barlow in `index.html`
4. Build Navbar component (transparent, sticky)
5. Build Hero component (background image, search form)
6. Build PopularLocations component (6-card grid)
7. Build HowItWorks component (3 steps with icons)
8. Build FeaturedCategories component (4-card grid)
9. Build StatsInfo component (2-column layout)
10. Build Testimonials component (carousel with arrows)
11. Build Newsletter component (dark bg, form)
12. Build Blog component (3-card grid)
13. Build Footer component (4-column, social, Component Dock)
14. Write tests for each component (100% coverage)
15. Run `scripts/verify-app.sh urbanscape` to confirm gates pass
