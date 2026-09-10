# Waypoint — Implementation Notes

Source: ColorLib Coaching (https://colorlib.com/wp/template/coaching/)
Preview: https://preview.colorlib.com/theme/coaching/
New name: waypoint

## Section Order (1:1 fidelity)

1. **Header/Navbar** — "Waypoint." logo (dot in primary color), 7 nav links (Home, About, Our Training, Testimonials, Services, Blog, Contact), hamburger on mobile, sticky on scroll
2. **Hero/Cover** — navy bg (#373a6d), 80vh height, "I'm Professional" + typed text ("Business Speakers", "Life Coach"), subtitle, "Contact Me" warning button (transparent + white border)
3. **Hero Slider** — owl-carousel of 2 coaching images, overlaps hero via negative margin (-20%), has prev/next arrows
4. **About** — "Welcome To My Website", 2 description paragraphs (left col), 2 service cards with icons (right col: Means of Living, Transform Lives)
5. **Training** — bg-light (#ccc), "Life Coach Training" heading, centered description, owl-carousel of training cards (image + h3 + p), image hover zoom effect
6. **Testimonials** — "Happy Customers", owl-carousel of testimonial blocks: navy blockquote (#373a6d) with white italic Vollkorn text + speech-bubble triangle + rounded avatar + author name
7. **Services** — primary-colored bg, "Our Services" heading, owl-carousel of white service cards (icon + h3 + p)
8. **Blog** — "Our Blog", 2-column grid of 4 blog entries: image thumbnail (left, 190px flex) + title + date + description + "Read More.."
9. **Contact** — bg-light (#ccc), "Contact Me" heading, 3-column contact info (Address, Phone, Email), form (2 name inputs + email + textarea + "Send Message" btn-primary)
10. **Footer** — #333333 bg, 3 columns: About Coaching description, Quick Links (5 anchor links), Follow Us (FB, Twitter, IG, LinkedIn) + Newsletter input + Send button, copyright

## Design Token Notes

- Brand primary: `#373a6d` (navy/indigo) — hero bg, btn-primary, blockquote, nav active, focus borders
- Body text: `gray` (CSS default)
- Heading text: `#000`
- CTA accent: `#fd7e14` (orange — hero paragraph links)
- Footer: `#333333`
- Light bg override: `#ccc` (training, contact sections)
- Post meta: `#b3b3b3`
- Fonts: Quicksand (400/500/700) via Google Fonts + Vollkorn for blockquotes
- Button radius: 5px (Bootstrap default)
- Blockquote: navy bg, 7px radius, 20px box-shadow, 15px triangle
- Hero height: 80vh, min-height 400px
- Site section padding: 2.5em mobile, 5em desktop
- Site footer padding: 4em mobile, 8em desktop

## Implementation Tasks

1. Scaffold `apps/waypoint` from simplest existing app (copy structure, rename package)
2. Create `src/index.css` with Tailwind + `@theme` tokens:
   - `--color-brand: #373a6d`
   - `--color-brand-dark: #2a2d54`
   - `--color-accent: #fd7e14`
   - `--color-footer-bg: #333333`
   - `--color-light-bg: #ccc`
3. Load Quicksand + Vollkorn via Google Fonts `<link>` in `index.html`
4. Build components in order:
   - `Navbar.tsx` — sticky header, logo text + dot, 7 nav links, hamburger toggle
   - `Hero.tsx` — navy bg, 80vh, typed text (use typed.js or React equivalent), "Contact Me" button
   - `HeroSlider.tsx` — carousel of 2 hero images with prev/next navigation
   - `About.tsx` — 2-column: heading + paragraphs (left) + 2 service cards (right)
   - `Training.tsx` — bg-light, heading + description, carousel of training cards with hover zoom
   - `Testimonials.tsx` — carousel of blockquotes with navy bg + triangle + avatar + name
   - `Services.tsx` — primary bg, heading + description, carousel of white service cards
   - `Blog.tsx` — heading, 2-column grid of 4 blog entries
   - `Contact.tsx` — bg-light, heading, contact info cards, form
   - `Footer.tsx` — dark bg, 3 columns, social icons, newsletter, copyright + Component Dock link
5. Compose in `App.tsx` in section order
6. Write tests for each component (100% coverage)
7. Verify: `scripts/verify-app.sh waypoint`

## Fidelity Notes

- Typed animation: use a React typed-text library or simple CSS animation cycling words; strings: "Business Speakers", "Life Coach"
- Carousels: use a React carousel library (e.g. embla-carousel or splide) to replace Owl Carousel; 3 carousels total (hero slider, training, services) + 1 testimonials carousel
- Training card image hover: CSS `transform: scale(1.05)` with transition on hover
- Testimonial blockquote: triangle via CSS `:before` pseudo-element (border trick), navy bg, Vollkorn font
- Blog entries: flex layout with fixed-width image (190px) + text, stacked on mobile
- Hero slider: negative margin to overlap with hero (-20%)
- Placeholder images: `https://picsum.photos/seed/waypoint-hero-<1|2>/1200/600`, `https://picsum.photos/seed/waypoint-train-<1|2|3>/400/300`, etc.
- Social icons: lucide-react (Facebook, Twitter, Instagram, LinkedIn)
- Footer: MUST link `https://www.componentdock.com/` as "Component Dock"
