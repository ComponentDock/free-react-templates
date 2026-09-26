# Hewn — Implementation Outline

Source: ColorLib Clyde (https://preview.colorlib.com/theme/clyde/)
New name: hewn
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Section Order (matches source 1:1)

1. **Navbar** — transparent overlay, solid black on scroll, brand "Hewn." + 7 nav links (Home, About, Skills, Services, Projects, Blog, Contact)
2. **Hero** — full-width slider (Owl-carousel equivalent), 2-3 slides, each with bg image, black overlay, skewX(20deg) decorative element, headline + subheadline + CTA buttons
3. **Counter** — light bg (#f7f7f7), 4 stat items in a row: Projects Complete, Happy Clients, Cups of Coffee, Years Experienced (icon + number + label)
4. **About** — two-column: portrait image left, bio text right, "Hire me" + "Download CV" buttons
5. **Skills** — animated progress bars: CSS, HTML, jQuery, Photoshop, WordPress, SEO (percentage labels, animate on scroll)
6. **Services** — heading + 8 icon cards in 2x4 grid: Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO
7. **Hire-Me CTA** — dark full-width section, centered heading + description + Contact me button
8. **Projects** — image grid (3-col), hover overlay effect
9. **Testimonials** — carousel on sage-green (#b1b493) background, quote + name + role
10. **Blog** — 3-card grid: image, date, author, title, excerpt, "Learn more" link
11. **Contact** — form with name, email, subject, message fields + submit button
12. **Footer** — dark (#232931), 4-column: brand blurb, nav links, services list, contact info, copyright, Component Dock link

## Design Notes

### Colors
- Brand primary: #b1b493 (sage green) — used for testimonials bg, buttons
- Dark sections: #1d2124, #343a40
- Footer: #232931
- Light sections: #f7f7f7, #f8f9fa
- Text: #1a1a1a primary, #999999 secondary

### Typography
- Font: Poppins (Google Fonts) throughout
- Headings: bold, larger sizes
- Body: regular weight, 16px base

### Layout
- Hero: full-viewport height slider with skewed overlay accents
- Counter: horizontal flex row, 4 equal columns
- About: 2-column (image | text+buttons)
- Skills: vertical progress bars, one per skill
- Services: CSS Grid or flex, 2 rows x 4 cols
- Projects: 3-column image grid
- Testimonials: single-quote carousel (use embla-carousel or similar)
- Blog: 3-column card grid
- Contact: form + optional map area
- Footer: 4-column grid

### Interactions
- Navbar: scroll-triggered background change (IntersectionObserver or scroll listener)
- Skills bars: animate width on scroll into view
- Projects: hover overlay with opacity transition
- Testimonials: auto-playing carousel with manual nav

### Assets
- Hero images: use picsum.photos with seed "hewn-hero-1" etc.
- Author portrait: picsum.photos/seed/hewn-author/400/500
- Project images: picsum.photos/seed/hewn-proj-N/600/400
- Blog images: picsum.photos/seed/hewn-blog-N/600/400
- Icons: lucide-react (replace Font Awesome / Flaticon)
- No copied CSS/images from source

### Fidelity Priorities
1. Section order must match source exactly
2. Brand color #b1b493 must be the primary accent
3. Dark navbar → solid on scroll behavior
4. Skewed overlay decorative elements in hero
5. Animated skill progress bars
6. Testimonial carousel on colored background
7. 4-column footer layout
