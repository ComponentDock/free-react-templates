# Frosted (ColorLib Cakes) — Tasks & Design Notes

## Design notes

- **Original:** ColorLib "Cakes" — free cake/bakery shop website template
  (source: https://colorlib.com/wp/template/cakes/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cakes/`
  (HTTP 200, ~30KB HTML) + stylesheet `assets/css/style.css` (~60KB).
  Full rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (logo + home/product/about/blog
  [submenu]/contact + phone + "Order Online" CTA) → hero slider (background
  image, decorative "Delicious" Lobster cursive watermark, "Delicious Cake
  For Everyone" heading, paragraph, "Explore Menu" pill button, animated
  hero shape) → popular items ("Most Popular" subtitle, "Our Exclusive
  Cakes" heading, 3-column carousel: Chocolate, Sweetheart, Blackforest +
  duplicate Chocolate — each with image, name, description, "$20 | Order
  Now" button; card bg #FFF5F2, border-radius 0 0 60px 0) → about
  ("Fresh & Delicious" subtitle, "A Simple Way to Eating Delicious"
  heading, paragraph, "Our Story" outlined button, image left / text
  right 6/5 split) → features ("Our Features" subtitle, "Quality is Our
  First Priority" heading, 3-column icon cards; original uses leftover
  pet-boarding copy — recreation needs cake-appropriate copy; bounce-
  animated decorative shape) → video area (full-width bg image, centered
  YouTube play button popup) → testimonials ("Testimonial" subtitle,
  "What Customers Say" heading, carousel of cards: quote, circular
  founder image, name, role) → instagram gallery (6-image horizontal
  strip, hover overlay with Instagram icon) → footer (warm off-white
  bg #FFF7F3, 4-col: logo+desc+social, Quick Links, cake types,
  Contact Us; footer-bottom copyright with heart icon).
- **Design tokens:** brand orange-red **#F04506** (+ darker **#d83e06** for
  gradient); headings **#000**; body text **#5E5E5E**; card bg **#FFF5F2**;
  footer bg **#FFF7F3**; fonts: **DM Sans** (body), **Quicksand** (headings),
  **Lobster** (decorative) via Google Fonts; buttons: pill 30px radius,
  gradient bg, white text, box-shadow 0px 17px 27px rgba(240,69,6,0.27);
  outlined buttons: transparent bg, 1px solid #F04506, uppercase,
  letter-spacing 3px; product cards: 60px bottom-right radius, 40px
  on image container; section padding 110-120px; footer social icons
  #F04506 22px; back-to-top #F04506 circle 50px.
- **Recreation name:** Frosted (app folder `apps/frosted`, package
  `@free-react-templates/frosted`). "Frosted" evokes bakery/frosting
  without reusing the ColorLib source name.
- **Design approach:** warm bakery aesthetic; hero = seeded picsum photo
  - Lobster cursive "Delicious" watermark + headline + "Explore Menu"
    pill button; product cards with peach bg + asymmetric radius; about
    split layout; features with lucide icons (cake-appropriate: CakeSlice,
    Heart, Star or similar); video area with play button; testimonials
    with initials avatars; instagram strip with seeded photos; footer with
    multi-column layout; all images picsum-seeded
    (`picsum.photos/seed/frosted-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on an existing multi-section food/landing template
  (e.g. `apps/gastronome` or `apps/bistro` if they exist, otherwise the
  closest landing-page app) — adapt sections to Frosted's 1:1 section
  order and tokens.

## Tasks

- [x] Write `openspec/specs/template-frosted/spec.md` (Gherkin
      requirements + scenarios + replication findings).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/frosted` (copy closest app; rename package to
      `@free-react-templates/frosted`).
- [ ] TDD: tests first for Navbar, Hero, PopularItems, About, Features,
      Video, Testimonials, InstagramGallery, Footer, App composition;
      run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh frosted` (typecheck → lint →
      100% coverage tests → build).
