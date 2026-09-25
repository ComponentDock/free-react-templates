# Craftly — Implementation Tasks

Source: ColorLib Create → https://preview.colorlib.com/theme/create/

## Section Order (match original 1:1)

1. TopBar — dark bar with phone, email, social icons
2. Navbar — white, sticky, "Craftly." logo (teal dot), nav links with About dropdown
3. Hero — dark bg image, "We Love To Build [typed]" headline, "Watch Video" pill CTA
4. Services — 3-column grid (01-Innovate, 02-Create, 03-Scale) with checkmark lists
5. Portfolio — "Our Works" heading, 6-item image grid (3-col), hover overlay
6. FeaturesBand — black bg, image left, 4 features right (Strategy, Web Dev, Art Direction, Copywriting)
7. Testimonials — heading, carousel with quotes
8. Blog — "Recent Posts", 3 post cards (image, title, meta, excerpt, link)
9. Contact — "Contact Us" heading, form (First Name, Last Name, Email, Subject, Message, Send), address card
10. CTABanner — teal (#32dbc6) bg, "Let's Get Started"
11. Footer — dark (#333333), About Us, Features links, Follow Us social, newsletter form, copyright + Component Dock link

## Design Notes

- **Font:** Quicksand (Google Fonts, weights 300–900)
- **Brand primary:** #32dbc6 (teal) — buttons, links, checkmarks, CTA banner
- **Dark backgrounds:** #000 (hero, features band), #333333 (footer)
- **Buttons:** pill-shaped (border-radius 30px), 15px 30px padding, 12px uppercase, letter-spacing .1em
- **Form inputs:** pill-shaped (border-radius 30px, height 43px)
- **Sections:** standard padding 5em 0 (desktop), 2.5em 0 (mobile)
- **Hero:** background image with dark overlay, typed.js animation (replace with a React typed-text component or CSS animation)
- **Portfolio grid:** hover overlay with semi-transparent dark bg, white text
- **Features band:** black bg, Material-style icons (use lucide-react equivalents)
- **Blog cards:** image top, text bottom, standard card layout
- **Footer:** dark bg, newsletter form with transparent input + border

## Fidelity Notes

- Match section order exactly as listed above
- Navbar has dropdown on "About" — use a simple hover/JS dropdown (no library needed)
- Hero typed animation: cycle through ["Web Apps", "WordPress", "Mobile Apps"] — implement with React state + setInterval or a small typed-text component
- Portfolio hover: opacity transition on hover to reveal overlay
- Features band: image on left (5/12 cols), features on right (7/12 cols split into two columns)
- Testimonials: carousel — can use a simple React carousel with state for prev/next
- Contact form: basic form with no external validation library needed (just basic required field checks)
- All placeholder images: use https://picsum.photos/seed/craftly-N/ format
