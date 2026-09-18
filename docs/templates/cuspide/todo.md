# Cuspide — Design Notes & Tasks

Source: ColorLib "Dente" (https://colorlib.com/wp/template/dente/)
Preview: https://preview.colorlib.com/theme/dente/

## Section order (1:1 with original)

1. **Top bar** — Social icons (Twitter, Facebook, LinkedIn, Instagram) on left, email + phone on right. Light/white background.
2. **Navbar** — "Cuspide" logo on left, nav links: Home (dropdown), About Us, Patients (dropdown), News, Services, Contact. Transparent overlay on hero (desktop), white with shadow on scroll.
3. **Hero parallax** — Full-width background image with parallax (`background-attachment: fixed`). Subtitle: "We Priority Your". Heading: "Your New Smile" ("New Smile" in bold/900 weight).
4. **Service feature strip** — 3 cards positioned over hero bottom: Periodontology, Tooth Whitening, Preventative Care. Semi-transparent dark overlay bg (`rgba(0,0,0,0.5)`). Each has a Flaticon dental icon + heading + short description.
5. **Image + feature grid** — Split layout: left = image, right = 2×2 grid of feature items (Tooth Whitening, Stethoscope, First Aid Kit, Tooth Pliers). Active items get box-shadow.
6. **Appointment form** — Warm beige background (`#ece8d9`). Heading: "Online Appointment Request Form" with `text-black`. White form card with shadow. Fields: First Name, Last Name, Date, Email, Treatment Needed (select), Notes (textarea), Send button.
7. **Promo countdown bar** — Bootstrap `bg-primary` (blue), white text: "Promo For Tooth Cleaning from ~~$140.00~~ now **$50.00**". Countdown timer below.
8. **Services section** — Warm beige bg (`#ece8d9`). "Our Services" heading (uppercase, weight 300, bold 900). 6 service cards in 3×2 grid: Tooth Whitening, Stethoscope, Dentist Chair, Tooth Pliers, First Aid Kit, Dentist Tools. Each has icon + heading + description.
9. **Video / Success stories** — Split: left = "Success Stories" heading + paragraphs; right = background image with centered play button (popup-vimeo).
10. **Testimonials** — Warm beige bg. "People Says" heading. 3 testimonial cards in a row: circular avatar image (140px, border-radius 50%), quote text, person name. Active card has white bg + box-shadow.
11. **Footer** — Dark charcoal bg (`#333333`). 3 columns: Navigation links, Recent News (3 items with thumbnails), Subscribe Newsletter (email input + Send button + social icons). Copyright bar at bottom.

## Fidelity notes

- **Brand red #f23a2e** — The primary accent color. Used for btn-primary, link hover color, video play button, and active feature accents. This is the most distinctive color element.
- **Nunito Sans font** — Clean, rounded sans-serif. Weights 200–900. Very dental/medical appropriate (soft, approachable).
- **Warm beige #ece8d9** — Used as the section background for appointment, services, and testimonials. Gives a warm, calming feel distinct from typical medical white.
- **Service feature strip** — Semi-transparent dark overlay cards positioned over the hero bottom using absolute positioning + translateY(-100%). Very distinctive visual treatment.
- **Heading style** — `.site-heading` uses font-weight 300 (light), uppercase, letter-spacing. Strong/bold uses weight 900. This light+bold contrast is characteristic.
- **Play button** — Circular, white bg, brand red `#f23a2e` icon on hover, centered on image. Uses popup-vimeo for video modal.
- **Testimonial avatars** — Circular (border-radius 50%), max-width 140px. Active card gets white bg + box-shadow.
- **Dark footer** — Charcoal `#333333` with white headings, `#999999` links, `#737373` body text.
- **Parallax hero** — Background image with `background-attachment: fixed` (or `data-stellar-background-ratio="0.5"` for jQuery Stellar).
- Use `picsum.photos/seed/cuspide-<n>/<w>/<h>` for placeholder images (deterministic).
- Icons: use `lucide-react` instead of Flaticon icomoon fonts.

## Implementation tasks

- [ ] Scaffold `apps/cuspide` from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html with Google Fonts (Nunito Sans)
- [ ] Create index.css with Tailwind + custom tokens (@theme for brand red #f23a2e, beige #ece8d9, charcoal #333333)
- [ ] Implement TopBar component (social icons, contact info)
- [ ] Implement Navbar component (transparent overlay on hero, sticky on scroll, dropdowns)
- [ ] Implement HeroParallax component (background image, parallax, subtitle + heading)
- [ ] Implement ServiceFeatureStrip component (3 cards, dark overlay, positioned over hero)
- [ ] Implement ImageFeatureGrid component (split: image left, 2×2 features right)
- [ ] Implement AppointmentForm component (beige bg, white card, form fields)
- [ ] Implement PromoCountdown component (blue bg, discount text, countdown timer)
- [ ] Implement ServicesSection component (beige bg, 3×2 grid, 6 service cards)
- [ ] Implement VideoStories component (split layout, play button, video popup)
- [ ] Implement Testimonials component (beige bg, 3 circular avatar cards)
- [ ] Implement Footer component (dark charcoal, 3 columns, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Set public/CNAME, package name @free-react-templates/cuspide
