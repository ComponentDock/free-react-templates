# Palladium — Prep Notes

**Source:** ColorLib "Whitespace" — https://colorlib.com/wp/template/whitespace/
**Preview:** https://preview.colorlib.com/theme/whitespace/
**Screenshot:** TEMPLATES.md line 2578 (`whitespace-free-template.jpg`)

## Section implementation order

1. **Navbar** — dark bg (`#1d2124`), Poppins font, brand "Palladium" left, 6 nav links right. Sticky. Mobile toggler. Simple component, no dependencies.

2. **Hero** — split flexbox layout. Left: dark bg, white text, "WELCOME" subheading with `#ecc503` underline pseudo-element, h1, h2, yellow CTA button (`.btn-custom` style — rectangular with yellow pseudo-block behind). Right: full-height background image (picsum). Two subcomponents or one with flex children.

3. **About/Services List** — white bg, two-column layout. Left: text-right content with "PROVIDING" subheading + heading + 4 service items (icon circle + title + description). Right: photo. Services: Market Research, Financial Services, Online Marketing, 24/7 Support. Use lucide-react icons for the circles.

4. **Services Grid** — 4-column grid on white. Cards: circle icon, title, description. Services: Business Strategy, Data Analysis, Graphic Design, Creative. Responsive: 2-col on md, 1-col on sm.

5. **Counter/Stats** — parallax background image, dark overlay. Left: "SOME" subheading + "Interesting Facts" heading (white text). Right: 4 stat blocks with animated counters (use `data-number` pattern — implement with simple count-up animation).

6. **Projects** — "PROJECTS" subheading + heading + description. 2×3 grid of project cards. Each: background image, dark overlay on hover, arrow CTA button, title + category. Use `picsum.photos/seed/palladium-proj-N` for 6 images.

7. **Testimonials** — carousel of cards. Each: circular user photo, quote icon, testimonial text, name, role. Implement with simple state-based carousel (prev/next buttons) — no external dependency.

8. **Blog/Case Study** — "OUR LATEST UPDATE" subheading + "Case Study" heading. 3 blog cards: background image, meta row (date, author, comment count), title. Use `picsum.photos/seed/palladium-blog-N`.

9. **Pricing** — light gray (`#f8f9fa`) bg. "PRICING PLANS" subheading + heading. 4 pricing cards: Free ($0), Startup ($19), Premium ($49), Enterprise ($99). Each: plan name, price, description, CTA button, feature list. First card solid blue button, others outline.

10. **Partners** — 5 partner logos in a flex row. Use placeholder gray logos or lucide-react icons styled as partner logos.

11. **Footer** — dark bg (`#1d2124`). 4 columns: brand + social icons, Useful Links, Quick Links, Contact Us. Copyright bar at bottom. Must include Component Dock link.

## Design notes

- **Color palette:** Dark `#1d2124` (hero, footer, navbar), white `#fff` (content), light gray `#f8f9fa` (pricing), yellow `#ecc503` (accent/buttons), blue `#4ac7ea` (logo/brand).
- **Typography:** Poppins (Google Fonts) for everything. Weights: 300, 400, 500, 600, 700.
- **Button style:** Hero CTA is rectangular (no border-radius) with a yellow pseudo-element block behind it. Other buttons use Bootstrap-style rounded (border-radius 0.25rem) or pills (30px).
- **Spacing:** Sections use ~80px vertical padding. Use Tailwind `py-20` or similar.
- **Icons:** lucide-react for service icons, social icons. Circle backgrounds with light gray or brand color.
- **Images:** All placeholder via `picsum.photos/seed/palladium-<section>-<n>/<w>/<h>`.
- **Responsive:** Mobile-first. Navbar collapses to hamburger. Hero stacks vertically. Grid goes 2-col → 1-col. Pricing cards stack.

## Fidelity checklist

- [x] Preview DOM fetched and analyzed
- [x] CSS tokens extracted (colors, fonts, radii, spacing)
- [x] Screenshot reviewed for visual design
- [x] Section order documented 1:1
- [x] All content types captured (headings, CTAs, cards, carousel, pricing tiers)
- [ ] Spec validated with `npm run spec:validate` (implementer task)
