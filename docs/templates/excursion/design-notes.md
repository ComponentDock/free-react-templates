# Excursion — Design Notes

Recreation of ColorLib Travello (https://colorlib.com/wp/template/travello/).
Preview: https://preview.colorlib.com/theme/travello/

## Section structure (top → bottom)

1. **Header** — Fixed top bar, transparent over hero, darkens on scroll.
   Logo "Excursion" (Oswald) left, nav center-left, phone right.
   Social sidebar (6 icons) fixed right edge. Hamburger for mobile.
2. **Hero Slider** — Swiper, 3 slides, full-width bg image per slide.
   Centered heading (Oswald 100px white). Page-nav dots right side.
3. **Search** — Floating form over hero, glass-morphism container.
   Title bar "Search for your trip" + 4 inputs + pill CTA button.
4. **Intro** — 3-column features with SVG icons, on white bg with
   decorative background image. Bottom border separator.
5. **Destinations** — 3×2 grid of destination cards. Each: image
   (16px radius), optional badge, title, subtitle, price.
6. **Why Choose Us** — Parallax bg image. 3 white cards with image,
   overlapping icon circle, title, paragraph. Hover lift.
7. **Featured Tours** — Swiper carousel of tour cards. Image + badge +
   duration, location + rating, title, description, price, CTA link.
8. **Testimonials** — Parallax bg image. Swiper slider with italic
   quotes (30px), author name + role.
9. **Instagram Feed** — 6-column image grid with Instagram icon overlay.
10. **News** — 2-col: left = 3 blog posts (image + date + title +
    category + excerpt); right = promo sidebar card with diagonal overlays.
11. **Footer** — Parallax bg image. Newsletter form (glass-morphism
    inputs, pill button). 3 contact items (icon + text). Copyright.

## Design fidelity notes

- Brand color is `#1a1a2e` (dark navy). Use as primary in `@theme`.
- Accent blue is `#3b82f6` for links, focus rings, hover states.
- Muted text color is `#64748b` for subtitles, captions, descriptions.
- Fonts: Oswald (headings, logo, buttons, nav, section subtitles) +
  Open Sans (body paragraphs, newsletter subtitle).
  Load via Google Fonts `<link>` in index.html.
- Buttons are pill-shaped (border-radius: 24px), 52px tall, dark navy
  bg (`#1a1a2e`), hover: `#292948` with translateY(-2px) lift.
- Cards (destinations, why, tour) have 16px border-radius and shadow.
  Hover: translateY(-4px) with deeper shadow.
- Search form uses glass-morphism: `rgba(255,255,255,0.26)` bg,
  12px radius. Title bar has top 10px radius.
- Section subtitles: Oswald 12px, uppercase, letter-spacing 0.2em,
  color `#64748b`.
- Hero slider: Oswald 100px white heading, no subtext.
  Use Swiper (already a dep) for carousel.
- Parallax sections (Why, Testimonials, Instagram?, Footer): use
  CSS `background-attachment: fixed` or a lightweight React solution.
- Featured Tours carousel: use Swiper with pagination dots.
- Instagram feed: 6 equal-width columns, image + icon overlay on hover.
- Newsletter: glass-morphism inputs (`rgba(255,255,255,0.15)` bg),
  pill submit button (`rgba(255,255,255,0.2)` bg).
- Responsive: hamburger menu on mobile, single-column stacking.
  Grids collapse to 1-2 columns. Hero heading scales down.
- Hero height: 834px desktop, 586px without slider.
- Placeholder images: use `https://picsum.photos/seed/excursion-<n>/<w>/<h>`
  with deterministic seeds per section.

## Component outline

```
src/
  App.tsx            — compose all sections
  components/
    Header.tsx       — fixed logo + nav + phone + social sidebar
    HeroSlider.tsx   — Swiper carousel, bg images, headings, page nav
    SearchForm.tsx   — trip search: 4 inputs + CTA, glass-morphism
    IntroFeatures.tsx — 3-column icons + titles
    Destinations.tsx — 3×2 grid of destination cards
    WhyChooseUs.tsx  — parallax bg, 3 feature cards with icon circles
    FeaturedTours.tsx — Swiper carousel of tour cards
    Testimonials.tsx — parallax bg, Swiper quotes
    InstagramFeed.tsx — 6-image grid with hover overlay
    LatestNews.tsx   — 3 blog posts + sidebar promo card
    Footer.tsx       — newsletter form + contact items + copyright
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template, rename package
- [ ] Set up index.css with Tailwind @theme tokens (brand #1a1a2e, accent #3b82f6, fonts)
- [ ] Add Google Fonts (Oswald + Open Sans) to index.html
- [ ] Implement Header.tsx (fixed, scroll effect, nav, social sidebar, hamburger)
- [ ] Implement HeroSlider.tsx (Swiper with 3 slides, page-nav dots)
- [ ] Implement SearchForm.tsx (floating glass-morphism form)
- [ ] Implement IntroFeatures.tsx (3-column feature cards)
- [ ] Implement Destinations.tsx (3×2 grid, cards with badges/prices)
- [ ] Implement WhyChooseUs.tsx (parallax bg, 3 cards, icon circles)
- [ ] Implement FeaturedTours.tsx (Swiper carousel, tour cards)
- [ ] Implement Testimonials.tsx (parallax bg, Swiper quotes)
- [ ] Implement InstagramFeed.tsx (6-image grid, hover overlay)
- [ ] Implement LatestNews.tsx (2-col: posts + sidebar promo)
- [ ] Implement Footer.tsx (newsletter form, 3 contact items, copyright w/ Component Dock)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for every component (Vitest + Testing Library)
- [ ] Verify 100% coverage, typecheck, lint, build
