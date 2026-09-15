# Benev — Design Notes

Recreation of ColorLib Charity Works (https://colorlib.com/wp/template/charity-works/).
Preview: https://preview.colorlib.com/theme/charityworks/

## Section structure (top → bottom)

1. **Header** — Top info bar (phone, email, language) + sticky nav (logo, links: Home, About, Latest Causes, Social Events, Blog; hamburger on mobile)
2. **Hero Slider** — Carousel with full-width bg images, h1 "Our Helping to the world." + paragraph + "Donate Now" CTA (green)
3. **Services** — 3-col grid on light blue bg (#f8fcff). Each card: green circle icon (90px) + heading + description. Hover: green bottom border animation
4. **About** — 2-col: left = images (large + small overlay), right = heading + mission text + "Learn More" CTA
5. **Causes/Cases** — 3-col grid on light blue bg. Image cards with hover overlay. Education, Food, Water
6. **Events** — Parallax bg + dark overlay. 3 event cards with date badge, icon, heading, CTA
7. **Team/Volunteers** — 4-col grid of volunteer cards (photo, name, role)
8. **Newsletter CTA** — Parallax bg. Centered heading + "Become A Volunteer" button
9. **Testimonials** — White bg. Slider with user quotes
10. **Blog** — 3-col grid of blog post cards (image, date, title, excerpt)
11. **Footer** — Dark bg, 3-col: Contact Info, Important Links, Newsletter. Copyright + Component Dock

## Design fidelity notes

- Brand color is `#09cc7f` (vibrant green). Use as primary in `@theme`.
- Hover/accent green: `#24ac75`. Use for hover states and button pseudo-elements.
- Headings are dark navy `#072366`, hero h1 is `#002d5b`.
- Body text is `#64676c` (medium gray).
- Font: Muli (Google Fonts) — used for ALL text (headings + body).
- Buttons: rectangular (0 border-radius), 27px 44px padding, green bg.
  Hover animation: green sweep left→right via `::before` pseudo-element.
- Service icons: 90px green circles with white icons inside.
- Service cards: white bg, 6px border-radius, hover animation fills green from bottom.
- Section backgrounds alternate: white → light blue (#f8fcff) → parallax image.
- Parallax sections (events, newsletter) use `background-attachment: fixed`.
- Cause cards: image with hover overlay effect.
- Hero uses carousel (OwlCarousel in original). Use embla-carousel-react or similar.
- Testimonials use a slider. Use a lightweight carousel library.
- Responsive: hamburger menu on mobile, single-column stacking for grids.

## Component outline

```
src/
  App.tsx              — compose all sections
  components/
    Header.tsx         — top info bar + sticky nav + hamburger
    HeroSlider.tsx     — carousel with slides, CTA
    Services.tsx       — 3-col service cards with icons
    About.tsx          — 2-col: images + mission text
    Causes.tsx         — 3-col cause cards with hover overlay
    Events.tsx         — parallax bg, 3 event cards
    Team.tsx           — 4-col volunteer cards
    NewsletterCta.tsx  — parallax bg, heading + CTA
    Testimonials.tsx   — slider with user quotes
    Blog.tsx           — 3-col blog post cards
    Footer.tsx         — 3-col footer + Component Dock
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template, rename package
- [ ] Set up index.css with Tailwind @theme tokens (brand #09cc7f, fonts)
- [ ] Add Google Fonts link (Muli) to index.html
- [ ] Implement Header with top info bar, sticky nav, mobile hamburger
- [ ] Implement HeroSlider with carousel, background images, CTA
- [ ] Implement Services section (3-col grid, green circle icons, hover effect)
- [ ] Implement About section (2-col, images + mission text + CTA)
- [ ] Implement Causes section (3-col grid, image cards with hover overlay)
- [ ] Implement Events section (parallax bg, 3 event cards)
- [ ] Implement Team section (4-col volunteer cards)
- [ ] Implement NewsletterCta (parallax bg, heading + volunteer button)
- [ ] Implement Testimonials slider
- [ ] Implement Blog section (3-col post cards)
- [ ] Implement Footer (3-column, contact/links/newsletter, Component Dock)
- [ ] Write tests for all components (Vitest + RTL, 100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
