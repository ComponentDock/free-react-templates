# Boostly — Design Notes & Implementation Todo

Source: ColorLib Thestartup
Preview: https://preview.colorlib.com/theme/thestartup/

## Section Order (fidelity-first)

1. Navbar
2. Hero (split: text left / image right)
3. Services (3-col grid)
4. About / Philosophy (split: image left / text right)
5. Pricing Cards (3 cards, middle active)
6. Features Accordion (text left / image right)
7. Testimonials (dark bg carousel)
8. Blog (3-card grid / carousel)
9. Footer (4-col, dark)

## Design Token Notes

- Brand orange: `#FF9100` — used for ALL interactive elements (buttons, links hover, dropdowns, scroll-to-top, category badges)
- Hero bg: `#FFDDB5` (light peach) — full-width behind the hero split
- Dark section bg: `#2D0A31` (deep purple) — testimonials only
- Footer: `#000` (black)
- Heading font: Josefin Sans (300–700), body: Roboto (400)
- Primary buttons: `border-radius: 5px`, orange bg, white text, black wipe-on-hover animation (scaleX)
- Header "Join Us" button: gradient orange, 4px radius
- Section padding: 120px top / 100px bottom

## Fidelity Notes per Section

### Navbar
- Sticky on scroll, white background appears when sticky
- Logo left, nav links right (Home, About, Services, Blog with dropdown, Contact)
- "Join Us" button in nav, orange gradient
- Mobile: hamburger menu, slicknav integration

### Hero
- Split layout: left 35% text, right 50% image
- Tagline in orange uppercase (14px, 700 weight)
- Headline: 60px Josefin Sans 700, black
- Paragraph: 20px Roboto, black
- CTA "Explore Us" button: orange, 5px radius, black wipe hover
- Background: `#FFDDB5` full-width

### Services
- 3-col equal grid (col-lg-4)
- Each card: SVG icon (60x60ish), h5 title, short p, "Let's Talk" uppercase link with black underline that turns orange on hover
- Section header: "Services we provide" with descriptive paragraph opposite

### About / Philosophy
- Split: image left (50%), text right (50%)
- "Our Philosophy" heading
- Two paragraphs of body text
- CEO attribution at bottom (name + role, styled as footer-tittles)

### Pricing Cards
- 3 cards, equal width (col-xl-4)
- Each: plan name header (span), price ($ + amount), description, 4-item ul, "Get Started Now" CTA
- Middle card: `.active` class — likely highlighted border/shadow
- All cards text-centered

### Features Accordion
- Left 60%: section title + Bootstrap accordion (4 items)
- Right 40%: image
- Accordion: expand/collapse, one open at a time (data-parent)
- Headings are clickable links that toggle collapse

### Testimonials
- Full-width dark purple `#2D0A31` bg with cover image
- Carousel/slider with dot indicators
- Each slide: quoted heading, paragraph, founder name + role
- Text aligned right (col-xl-7 pushed right)

### Blog
- 3-column card grid
- Each card: image with category badge overlay (e.g. "Urban" in orange), h3 title, p excerpt
- Carousel/slider on desktop, card hover: orange shadow

### Footer
- Dark `#000` background
- 4 columns: brand (logo + description + social icons), Navigation links, Services links, Contact (address + phone)
- Bottom bar: copyright with heart icon + Colorlib credit (replaced with ComponentDock)
- Social: Twitter, Facebook, LinkedIn, Pinterest icons

## Component Breakdown (suggested)

- `Navbar.tsx` — sticky nav, mobile hamburger
- `Hero.tsx` — split layout hero
- `Services.tsx` — 3 service cards
- `About.tsx` — split about/philosophy section
- `Pricing.tsx` — 3 pricing cards
- `FeaturesAccordion.tsx` — accordion with image
- `Testimonials.tsx` — dark carousel testimonials
- `Blog.tsx` — 3 blog cards
- `Footer.tsx` — 4-column dark footer

## Placeholder Images

- Hero image: `https://picsum.photos/seed/boostly-hero/800/750`
- About image: `https://picsum.photos/seed/boostly-about/600/700`
- Features image: `https://picsum.photos/seed/boostly-features/500/600`
- Blog 1: `https://picsum.photos/seed/boostly-blog1/400/300`
- Blog 2: `https://picsum.photos/seed/boostly-blog2/400/300`
- Blog 3: `https://picsum.photos/seed/boostly-blog3/400/300`

## TODO

- [ ] Create app scaffold (copy simplest existing app, rename package)
- [ ] Implement Navbar with sticky behavior + mobile menu
- [ ] Implement Hero split layout
- [ ] Implement Services 3-card grid
- [ ] Implement About / Philosophy split section
- [ ] Implement Pricing 3-card section
- [ ] Implement Features Accordion
- [ ] Implement Testimonials dark carousel
- [ ] Implement Blog 3-card section
- [ ] Implement Footer 4-column dark
- [ ] Write tests for all components (100% coverage)
- [ ] Verify responsive behavior
- [ ] Run full gate (typecheck + lint + test:coverage + build)
