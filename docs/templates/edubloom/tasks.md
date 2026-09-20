# Edubloom — Implementation Tasks & Design Notes

**Source:** ColorLib Edusmart — https://colorlib.com/wp/template/edusmart/
**Preview:** https://preview.colorlib.com/theme/edusmart/
**New name:** edubloom (apps/edubloom, @free-react-templates/edubloom)

## Section Order (from preview DOM)

1. **Header** — Top bar (phone, email, login) + Navbar (Home, About, Pages dropdown, Blog dropdown, Contact, Search icon)
2. **Hero / Banner** — Dark overlay bg image, heading "We Rank the Best Courses on the Web", description, search form
3. **Features** — 3 feature cards (New Classes, Top Courses, Full E-Books) with gradient backgrounds
4. **Departments** — 6 department category cards with icons in a grid
5. **Popular Courses** — Course cards with thumbnail, title, price, mentor
6. **Facts** — Overlay background, "Facts that Make us Unique", 3 fact cards (Expert Mentors, 25000+ Courses, etc.)
7. **Testimonials** — Carousel with quote icon, name, stars, review text
8. **Registration** — Countdown timer (Days/Hours/Mins/Secs) + registration form (Name, Phone, Email)
9. **Events** — "Upcoming Events", event cards with thumbnail, date, title, description
10. **Footer** — 4 link columns (Top Products, Quick Links, Features, Resources) + Newsletter signup + social icons + Component Dock link

## Fidelity Notes

### Header
- Top bar: phone icon + number, email icon + email, "Login" link on right
- Navbar: transparent bg, Montserrat 600 12px uppercase, active/hover color #00aee0
- Dropdown menus: white bg, border-bottom separators, hover bg #00aee0 white text

### Hero
- Full-width banner with dark overlay (rgba(0,0,0,0.4)) on background image
- Left-aligned content (col-lg-6): h2 white 48px, p white 18px
- Search form: input + "Search" button with gradient primary-btn style

### Features
- 3 stacked cards to the right of hero, each with icon + title + description
- Gradient backgrounds: feature 1 = pink→orange, feature 2 = purple→magenta, feature 3 = cyan→teal
- Font: Montserrat 600 for headings

### Departments
- 6 cards in a responsive grid (col-lg-4 col-md-6)
- Each: icon image + h4 label
- Hover effect: gradient background

### Popular Courses
- Course cards with image, title, price badge (gradient bg), mentor name, description
- Price badges use gradient backgrounds matching the feature accent colors

### Facts
- Section background: dark overlay with gradient image
- 3 fact cards: icon image + h4 title + description text
- White text on dark background

### Testimonials
- OwlCarousel-style testimonial slider
- Each: quote icon image, h4 name, 5-star rating, review paragraph
- Carousel dot navigation

### Registration
- Gradient background (cyan→teal) for the section
- Left: countdown timer (Days/Hours/Mins/Secs in boxes) + "Register Now" heading
- Right: registration form card (Name, Phone, Email inputs + submit button)

### Events
- "Upcoming Events" heading, centered
- Event cards: 2-column layout, each with thumbnail image (left) + date/title/description (right)

### Footer
- Black background (#000000), white text
- 4 link columns + newsletter column (email input + subscribe button)
- Bottom bar: copyright text + social icon links (Facebook, Twitter, Dribbble, Behance)
- MUST include Component Dock link

## Component Breakdown (suggested)

| Component         | Source Section       | Notes                              |
| ----------------- | -------------------- | ---------------------------------- |
| TopBar            | Header top bar       | Phone, email, login link           |
| Navbar            | Main navigation      | Logo, links, dropdowns, search     |
| Hero              | Banner area          | Heading, description, search form  |
| Features          | Feature area         | 3 gradient feature cards           |
| Departments       | Department area      | 6 category cards in grid           |
| PopularCourses    | Popular courses area | Course cards with metadata         |
| Facts             | Fact area            | 3 fact cards, overlay bg           |
| Testimonials      | Testimonial area     | Carousel with quotes               |
| Registration      | Registration area    | Countdown + form                   |
| Events            | Events area          | Event cards with thumbnails        |
| Footer            | Footer               | Links, newsletter, social, CTA     |

## Design Tokens for Tailwind @theme

```css
@theme {
  --color-brand: #00aee0;
  --color-brand-light: #00fedc;
  --color-accent-pink: #e94086;
  --color-accent-orange: #e5925a;
  --color-accent-purple: #7349cc;
  --color-accent-magenta: #e163e4;
  --color-heading: #222222;
  --color-body: #777777;
  --color-bg-light: #f9f9f9;
  --color-footer-bg: #000000;
  --font-heading: "Montserrat", sans-serif;
  --font-body: "Crimson Text", serif;
}
```
