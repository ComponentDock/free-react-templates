# Tengu — Design Notes & Implementation Outline

Source: ColorLib **Ronin** (slug: `ronin`)
Preview: https://preview.colorlib.com/theme/ronin/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ronin-free-template.jpg

## Section Order (top → bottom)

1. **Navbar** — Transparent header, logo left, nav links right (Home, About, Services, Pages ▾, Blog ▾, Contact)
2. **Hero / Banner** — Split layout: left = portrait image, right = "This is me" / name / bio / "Discover Now" CTA button
3. **Welcome / About** — "About Myself" heading, bio text, 3 stat counters ($2.5M, 1465, 3965), "Tools Expertness" progress bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%)
4. **Features / Services** — "offerings to my clients" heading, 3×2 grid of icon+title+description cards (Architecture, Interior Design, Concept Design × 2)
5. **Projects / Portfolio** — "Our Recent Completed Projects" heading, 3×2 grid of project cards with images and hover overlay
6. **Testimonials** — "Testimonials" heading, carousel/slider of quote cards (text + author + star rating)
7. **Blog** — "Latest Posts from Blog" heading, 3-column grid of blog post cards (image + title + date + read more)
8. **Footer** — Dark navy (#04091e) background, 3 columns: About Me, Newsletter (email input + subscribe), Follow Me (social icons)

## Fidelity Notes

### Navbar

- Transparent background, absolute positioned over hero
- Logo image left, nav links right (ml-auto)
- Text: 12px, uppercase, Roboto, 500 weight, color #222222
- Dropdown menus for "Pages" and "Blog" submenus
- Sticky on scroll (background changes)

### Hero

- Split 50/50: left = portrait image, right = text content
- Heading "This is me" in Roboto, name in Heebo bold
- CTA "Discover Now" button: gradient bg (#8490ff → #62bdfc), white text, 5px radius, 13px Roboto 500
- Banner has background image

### About

- Light background, centered "About Myself" heading (Heebo, 36px, #222222, uppercase)
- Bio paragraph in Roboto 16px, #777777
- 3 stat counters in a row, large numbers
- "Tools Expertness" subsection with 5 progress bars
- Skill bars: label + percentage, animated on scroll

### Features

- White background, centered heading
- 6 cards in 3×2 grid (col-lg-4 col-md-6)
- Each card: icon (flaticon), title (Heebo), description (Roboto, #777777)
- Light card borders or subtle shadow

### Projects

- Light background (#f9f9ff), centered heading
- 6 project cards in 3×2 grid
- Each card: project image with hover overlay effect (dark semi-transparent overlay with icon)
- Title links to project details

### Testimonials

- White background, centered heading
- Carousel/slider (owl-carousel style)
- Each slide: quote text, author name (Heebo, h4), 4.5 star rating
- Star icons in brand color or gold

### Blog

- White background, centered heading
- 3-column grid of blog cards
- Each card: featured image, title (Heebo), date, "Read More" link
- Subtle card shadows

### Footer

- Dark navy background (#04091e)
- 3 columns: About Me (text + copyright), Newsletter (email input + subscribe), Follow Me (social icons)
- Copyright links to Component Dock (NOT ColorLib)
- Social icons: Facebook, Twitter, Dribbble, Behance

## Design Tokens (extracted from CSS)

```
Brand primary: #8490ff (violet-blue)
Brand gradient: linear-gradient(to right, #8490ff, #62bdfc)
Text dark: #222222
Text body: #777777
Background white: #ffffff
Background light: #f9f9ff
Footer background: #04091e
Border: #eeeeee
Hover blue: #3898f8
Font heading: "Heebo", sans-serif (bold)
Font body: "Roboto", sans-serif (regular)
Button radius: 5px (CTA), 45px (newsletter subscribe)
Nav text: 12px, uppercase, Roboto, 500 weight
```

## Component Breakdown (suggested)

- `Navbar.tsx` — transparent sticky nav with dropdown menus
- `Hero.tsx` — split layout, image + text + CTA
- `About.tsx` — bio + stats + skill bars
- `Features.tsx` — 3×2 service card grid
- `Projects.tsx` — 3×2 portfolio grid with hover overlays
- `Testimonials.tsx` — carousel of quote cards
- `Blog.tsx` — 3-column blog post cards
- `Footer.tsx` — dark footer with 3 columns + Component Dock link
