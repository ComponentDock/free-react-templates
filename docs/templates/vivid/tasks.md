# Vivid — Prep Notes

**Source:** ColorLib Breed2 — https://colorlib.com/wp/template/breed2/
**Preview:** https://preview.colorlib.com/theme/breed2/
**New name:** vivid
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (from preview DOM)

1. Navbar
2. Hero / Banner (split: text left, portrait + gradient blob right)
3. Statistics (3 metric cards)
4. About (heading + text + image)
5. Services (3 service cards with icons)
6. Testimonials (carousel)
7. Portfolio (6-item grid with hover overlay)
8. Blog (3 post cards)
9. Brands / Footer

## Design tokens (extracted from css/style.css)

- Brand gradient: linear-gradient(90deg, #1345e6 0%, #ed239f 100%)
- Font: Roboto (Google Fonts)
- Body text: #797979
- Headings: #05364d (dark navy)
- Primary button: gradient bg, white text, border-radius: 5px, bg-size 200% (slide hover)
- Tag/label bg: rgba(237, 35, 159, 0.6), border-radius: 5px
- Stats numbers: gradient text (background-clip: text)
- Section padding: 140px 0 desktop, 80px 0 mobile
- Card border-radius: 5px
- Blog date badge: border-radius: 12px
- Newsletter input: border-radius: 36px

## Section-by-section fidelity notes

### Navbar
- Logo on left with gradient-styled icon
- Nav links: Home, About, Portfolio, Services, Blog, Contact
- Fixed on scroll (navbar_fixed class)
- Mobile: hamburger collapse menu

### Hero / Banner
- Split layout: left = greeting + name + subtitle + social icons + CTA
- Right: large organic blob with gradient + texture, portrait overlapping
- Social icons: Facebook, Twitter, Instagram, LinkedIn, Vimeo
- CTA: "SEE MY WORK" gradient button

### Statistics
- 3 white cards with rounded corners and shadow
- Each: gradient number + label text
- Responsive: stack on mobile

### About
- Heading "About Me" with gradient underline accent
- Body paragraph text
- Image/illustration on the side
- Section padding: 140px 0

### Services
- Heading "What Service We Offer For You"
- 3 service items: Web Development, UX/UI Design, WP Developing
- Each with icon, title, and description

### Testimonials
- Heading "Honourable Client Says About Me"
- Carousel of testimonial cards
- Client name, role, quote text
- Dot/arrow navigation

### Portfolio
- Heading "Check Our Recent Client Work"
- 6-item grid (3x2 or responsive)
- Each: image + hover overlay with title
- Placeholder images via picsum.photos

### Blog
- Heading "Latest Story From Our Blog"
- 3 blog cards
- Each: image, date badge (12px radius), title, excerpt

### Footer / Brands
- Brand logos row (placeholder images)
- Copyright text
- Link to https://www.componentdock.com/

## Implementation notes

- Copy simplest existing app as scaffold (e.g. apps/abjure or similar small template)
- Rename package to @free-react-templates/vivid
- Add Roboto Google Font link to index.html
- Use Tailwind @theme for brand gradient tokens
- All placeholder images: picsum.photos/seed/vivid-<n>/<w>/<h>
- Icons from lucide-react (replace Font Awesome)
- No ColorLib references anywhere in app code
