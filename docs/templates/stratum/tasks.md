# Stratum — Implementation Tasks & Design Notes

## Source

- **ColorLib**: Unearth
- **Slug**: `unearth`
- **Preview**: `https://preview.colorlib.com/theme/unearth/`
- **Category**: Mining / Industrial Company Landing Page

## Section Order (fidelity)

1. **Top Bar** — Gradient background (purple→rose→orange), email + phone left, social links (Twitter, Instagram) right
2. **Navbar** — Sticky, logo "Stratum" left, nav links right (Home, Services, About Us dropdown [Team, Pricing, FAQ], Press, Testimonials, Blog, Contact), hamburger on mobile
3. **Hero Slider** — 2-slide carousel with full-viewport background images, centered headline, subtext, "Get in touch" outline-white button
4. **Services** — 2 alternating image-text blocks: "Land & Property" (image left, text right) + "Surface Mining" (image right, text left) with orange checkmark lists
5. **Features Grid** — 6 cards in 3-col grid on light bg, each with orange flaticon icon, title, description
6. **About / Video** — Dark bg, video thumbnail with play button overlay, 4 stat counters (30+ years, 300+ engineers, 2000+ employees, 1500+ golds)
7. **Team** — 6 team member cards in 3-col grid: circular photo, name, role, 3 social icon buttons
8. **Pricing** — 3 cards (Basic $47, Premium $200, Professional $750) on light bg, checkmark feature lists, "Buy Now" buttons
9. **FAQ** — "Frequently Ask Questions" title (orange), 8 Q&A items in 2-column layout
10. **Press** — Left heading "Press", right 3 articles with date + title + description
11. **Testimonials** — Carousel of testimonial cards: blockquote, circular photo, name; light bg
12. **Blog** — 2 blog cards in 2-col: image, title, date/author, description, "Read More" link
13. **Contact** — Light bg, form (first name, last name, email, textarea, "Send Message"), sidebar text + "Get Started" button
14. **Footer** — Gradient bg (purple→rose→orange): About Us text, Features links, Newsletter form, Social icons, copyright + Component Dock link

## Fidelity Notes

- **Fonts**: Load `Rubik` (300,400,700) and `Oswald` (400,700) via Google Fonts `<link>` in index.html
- **Primary orange**: `#ff8b00` — headings, icons, checkmarks, buttons, social hover, active states
- **Gradient**: `linear-gradient(to right, #7a5e86, #a75e67, #f77b2e)` — top bar + footer
- **Body text**: `#939393`, line-height 1.7
- **Headings**: Oswald, uppercase, `#000`
- **Hero images**: `https://picsum.photos/seed/stratum-hero-1/1920/1080` and `https://picsum.photos/seed/stratum-hero-2/1920/1080`
- **Service images**: `https://picsum.photos/seed/stratum-service-1/800/500` and `https://picsum.photos/seed/stratum-service-2/800/500`
- **Video thumbnail**: `https://picsum.photos/seed/stratum-video/1200/600`
- **Team photos**: `https://picsum.photos/seed/stratum-team-n/130/130` (n=1–6)
- **Blog images**: `https://picsum.photos/seed/stratum-blog-n/800/500` (n=1–2)
- **Testimonial photos**: `https://picsum.photos/seed/stratum-testimonial-n/60/60` (n=1–4)
- **Icons**: Use `lucide-react` (Pickaxe for mining, Gem for gold, Truck for wagon, Factory for refinery, Anvil not available → Hammer, FlaskConical for crucible; Facebook/Twitter/Instagram for social; Play for video; Check/X for pricing)
- **No carousel JS**: Use CSS scroll-snap or overflow-x-auto for hero slider and testimonials
- **Hero slider**: Use React state for slide index with auto-advance interval, or CSS-only approach
- **About section counters**: Simple static numbers (no animation needed, or use a basic counter hook)
- **Dropdown**: Use React state for hover/click toggle, positioned absolutely
- **Responsive**: Hero stacks, services stack, features go 2→1 col, team goes 2→1 col, pricing stacks, FAQ goes 1 col, blog goes 1 col
- **Footer MUST link**: `https://www.componentdock.com/` with "Component Dock" text
- **No ColorLib references** in app code — only in spec and TEMPLATES.md

## Tasks

- [ ] Create `apps/stratum/` with Vite + React 19 + Tailwind 4 + TypeScript
- [ ] Set up package.json (`@free-react-templates/stratum`), public/CNAME, vite.config.ts with `injectUiSource()`
- [ ] Load Rubik + Oswald fonts via Google Fonts link in index.html
- [ ] Define Tailwind theme tokens in index.css (primary-orange, gradient colors, fonts)
- [ ] Implement TopBar component (gradient bg, email, phone, social links)
- [ ] Implement Navbar component (sticky, logo, nav links with dropdown, hamburger)
- [ ] Implement HeroSlider component (2-slide carousel with bg images, headlines, CTA)
- [ ] Implement ServicesSection component (2 alternating image-text blocks with check lists)
- [ ] Implement FeaturesGrid component (6 feature cards with icons)
- [ ] Implement AboutSection component (video thumbnail + 4 stat counters, dark bg)
- [ ] Implement TeamSection component (6 team member cards with social buttons)
- [ ] Implement PricingSection component (3 pricing cards with feature lists)
- [ ] Implement FAQSection component (8 Q&A items in 2 columns)
- [ ] Implement PressSection component (3 press articles)
- [ ] Implement TestimonialsSection component (carousel of testimonial cards)
- [ ] Implement BlogSection component (2 blog cards)
- [ ] Implement ContactSection component (form + sidebar text)
- [ ] Implement Footer component (gradient bg, about, features, newsletter, social, Component Dock)
- [ ] Compose all sections in App.tsx
- [ ] Style everything with Tailwind using design tokens from spec
- [ ] Add responsive styles
- [ ] Write tests with Vitest + Testing Library (100% coverage)
- [ ] Run `npm run spec:validate` and `scripts/verify-app.sh stratum`
- [ ] Commit as `feat: add stratum template (ColorLib unearth)`

## Component Structure

```
apps/stratum/
  src/
    main.tsx
    App.tsx
    components/
      TopBar.tsx               — Gradient top bar with contact info + social
      Navbar.tsx               — Sticky navbar with dropdown
      HeroSlider.tsx           — 2-slide carousel with bg images
      ServicesSection.tsx      — 2 alternating image-text blocks
      FeatureBlock.tsx         — Single service block (image + text + check list)
      FeaturesGrid.tsx         — 6 feature cards grid
      FeatureCard.tsx          — Single feature card
      AboutSection.tsx         — Video thumbnail + stat counters (dark bg)
      TeamSection.tsx          — 6 team member cards
      TeamMemberCard.tsx       — Single team card
      PricingSection.tsx       — 3 pricing cards
      PricingCard.tsx          — Single pricing card
      FAQSection.tsx           — 8 Q&A items in 2 columns
      PressSection.tsx         — 3 press articles
      TestimonialsSection.tsx  — Carousel of testimonials
      TestimonialCard.tsx      — Single testimonial card
      BlogSection.tsx          — 2 blog cards
      BlogCard.tsx             — Single blog card
      ContactSection.tsx       — Contact form + sidebar
      Footer.tsx               — Gradient footer with newsletter + social
    index.css
    test/
      setup.ts
  public/
    CNAME (stratum.free.componentdock.com)
  package.json
  vite.config.ts
  tsconfig.json
```
