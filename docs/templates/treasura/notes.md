# Treasura — Implementation Notes

## Source mapping

| Field | Value |
|-------|-------|
| ColorLib source | Banker |
| Source slug | `banker` |
| Preview URL | https://preview.colorlib.com/theme/banker/ |
| ColorLib page | https://colorlib.com/wp/template/banker/ |
| New name | **Treasura** |
| App path | `apps/treasura` |
| Spec path | `openspec/specs/template-treasura/spec.md` |

## Section order (top to bottom)

1. **Navbar** — Logo "Treasura." (orange dot), links: Home, About, Blog,
   Contact, social icons. Sticky: transparent on hero → white bg on scroll.
2. **Hero** — Full-viewport (100vh) background image with warm-beige overlay
   (`rgba(184,178,166,0.7)`), 3-slide text carousel ("Banking Solutions",
   "Financing Solutions", "Savings Accounts"), mouse-scroll indicator.
3. **Features** — 3 icon cards in a row: Money Savings, Online Shoppings,
   Credit/Debit Cards. Centered, each with icon above title + blurb.
4. **About** — Split layout: left = image with circle background decoration
   (`#f8f9fa`, radius 50%), right = "Amortization Computation" heading +
   green check list (`#71bc42`) + email input + "Submit Email" button.
5. **Team** — "Meet Team" heading + 4-column grid of team member cards
   (8 total). Each card: photo with social overlay on hover, name, position.
6. **Gallery** — "Gallery" heading + filter buttons (All/Events/Party/
   Holidays) + 4-column grid of images with hover search icon.
7. **How It Works** — Split layout: left = image carousel (3 images),
   right = numbered steps (01/02/03) with titles, descriptions, and
   "Learn More" buttons. Carousel + step text sync.
8. **Services** — "Our Services" heading + 3-column grid of 6 service cards.
   Each: icon, title, blurb, "Learn More" link. Light background.
9. **Testimonials** — "Happy Customers" heading + carousel of 4 testimonials.
   Each: blockquote, avatar, name. Fade transitions.
10. **Pricing** — "Pricing" heading + 3 cards: Basic ($47), Premium ($200,
    popular), Professional. Each: price, feature checklist (strikethrough
    for inactive), "Buy Now" button. Light background.
11. **Blog** — "Blog" heading + 2-3 article cards (image, title, date, excerpt).
12. **FAQ** — "Frequently Ask Questions" heading + accordion items.
13. **Contact** — "Contact Us" heading + form (name, email, subject, message)
    + contact info sidebar.
14. **Footer** — Dark bg (`#343a40`), 3-4 column layout: Treasura branding,
    Quick Links, Services, Newsletter. Component Dock attribution.

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#fd7e14` | Buttons, links, accents, dropdown border |
| `--color-body-text` | `gray` | Body paragraph text |
| `--color-heading` | `#000` | Headings (.text-black) |
| `--color-footer-bg` | `#343a40` | Footer background |
| `--color-footer-text` | `rgba(255,255,255,0.7)` | Footer paragraphs |
| `--color-hero-overlay` | `rgba(184,178,166,0.7)` | Hero image overlay |
| `--color-check` | `#71bc42` | Green check list icons |
| `--color-circle-bg` | `#f8f9fa` | About section circle decoration |
| `--font-family` | `"Open Sans", sans-serif` | All text |
| `--btn-radius` | `30px` | Pill-shaped buttons |
| `--btn-padding` | `10px 30px` | Button padding |
| `--section-padding` | `8em 0` (desktop) / `2.5em 0` (mobile) | Section spacing |
| `--form-height` | `43px` | Form input height |
| `--form-radius` | `30px` | Form input border radius |
| `--hero-height` | `100vh` | Hero viewport height |
| `--hero-min` | `600px` | Hero minimum height |

## Component architecture

### App.tsx
Composes all section components in order. No routing needed — single page.

### Component files
- `src/components/Navbar.tsx` — sticky navbar with scroll detection, hamburger
  for mobile. Uses `cn()` for class variants.
- `src/components/Hero.tsx` — text carousel with fade transitions. State-driven
  (no external carousel lib). Mouse-scroll indicator.
- `src/components/Features.tsx` — static 3-card row with icon + title + blurb.
- `src/components/About.tsx` — split layout: image with circle CSS decoration
  + heading + checklist + email form.
- `src/components/Team.tsx` — grid of member cards with hover social overlay.
- `src/components/Gallery.tsx` — filter state drives visible images. 4 filter
  buttons, 4-column image grid.
- `src/components/HowItWorks.tsx` — split layout: image carousel synced with
  numbered step text. Prev/next arrows.
- `src/components/Services.tsx` — 3-column grid of 6 service cards.
- `src/components/Testimonials.tsx` — carousel of quotes with fade transitions.
- `src/components/Pricing.tsx` — 3 pricing cards, Premium highlighted.
- `src/components/Blog.tsx` — 2-3 article preview cards.
- `src/components/Faq.tsx` — accordion items with toggle state.
- `src/components/Contact.tsx` — form + contact info layout.
- `src/components/Footer.tsx` — dark footer with columns + Component Dock link.

## Fidelity notes

- **Pill buttons** are essential: all buttons and form inputs use
  `border-radius: 30px`. This is the signature visual element.
- **Orange `#fd7e14`** is Bootstrap's text-primary — it must be the brand
  color everywhere (links, buttons, active states, dropdown borders, focus
  rings, pricing popular highlight).
- **Warm-beige hero overlay** (`rgba(184,178,166,0.7)`) gives the hero its
  distinctive warm tone — not a generic dark overlay.
- **Circle decoration** on the About image (`#f8f9fa` pseudo-element, 300px
  diameter, positioned bottom-right) is a subtle but recognizable detail.
- **Green check marks** (`#71bc42`) in the About checklist — use check
  icon from lucide-react.
- **Team social overlay** on hover: semi-transparent overlay with social
  icon links (Facebook, Twitter, LinkedIn, Instagram).
- **Gallery filter** uses client-side state, not a library. Active button
  gets `btn-primary active` class.
- **Pricing popular card** has a `.pricing-popular` modifier — add
  visual emphasis (border or shadow).
- **AOS-like animations** — use framer-motion or intersection observer for
  fade-up on scroll (don't use the AOS library).
- **Sticky navbar**: transparent → white transition on scroll is critical.
  Logo and link colors flip.
- **Footer MUST link** to https://www.componentdock.com/ ("Made with
  Component Dock").

## Placeholder images

Use `https://picsum.photos/seed/treasura-<n>/<w>/<h>`:
- Hero background: `treasura-hero-1/1920/1080`
- About image: `treasura-about-1/600/400`
- Team members: `treasura-team-<1-8>/400/400`
- Gallery images: `treasura-gallery-<1-12>/400/400`
- How It Works images: `treasura-how-<1-3>/600/400`
- Blog images: `treasura-blog-<1-3>/600/300`
- Testimonial avatars: `treasura-avatar-<1-4>/200/200`
