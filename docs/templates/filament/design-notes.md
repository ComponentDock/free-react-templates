# Filament — Implementation Notes

## Source Mapping

- ColorLib source: "Simples" → https://colorlib.com/wp/template/simples/
- Preview: https://preview.colorlib.com/theme/simples/
- New name: `filament`

## Section Order (from preview DOM)

1. **Header** — Logo + nav links (Home, Generic, Elements). Absolutely positioned over hero. Menu bar visible (hamburger on mobile).
2. **Hero Banner** — Full-screen gradient overlay (#f6d0c5 → #fbd2f6). Large white h1 "Brand new Simples" with text-shadow. Subtitle paragraph. "Explore Now" pill button (genric-btn primary-border circle).
3. **Features** — 4-column grid. Each column: lavender-pink icon (Linearicons), uppercase h2 label. Items: Easy Installation, Multiple Layouts, Free Updates, Fully Responsive.
4. **Core Feature (Carousel)** — Light bg (#f9f9ff). Left: subtitle "Core Feature", large h2 with bold spans, paragraph, "Learn More" primary button with arrow. Right: image carousel with box-shadow and prev/next triggers.
5. **Core Feature Bottom (Image + Text)** — Full-width container-fluid. Left: tall image (col-lg-6). Right: same heading/text/button pattern as section 4.
6. **Process Steps** — Gradient background (#f6d0c5 → #fbd2f6). 6 columns: icon, white dot, uppercase label with top border. Steps: Brainstorm, Discuss Ideas, Projections, Strategies, Seo Target, Awards.
7. **Service Carousel** — Dark overlay background (rgba(0,0,0,0.8) over bg image). Carousel with image-left + text-right slides. Each slide: h3, paragraph, "View Details" link in #fcd2ff. Prev/next triggers outside carousel.
8. **Newsletter** — Light bg (#f9f9ff). Centered heading "Subscribe for our Newsletter" with bold span. Email input (pill-shaped, white bg) + "Get Started" primary-btn pill.
9. **Contact** — White bg. Left: map placeholder (500px height). Right: form with name input, email input, textarea, "Send Message" primary-btn. Form inputs have border rgba(111,117,152,0.3).
10. **Footer** — Black bg (#000). 5 columns: Top Products, Company, Support, Projects (nav links), Quick Contact (text + phone/email). Social icons row (Facebook, Twitter, Dribbble, Behance) in dark circles. Footer-bottom with copyright linking to Component Dock.

## Design Token Summary for Tailwind @theme

```
--color-brand: #fcd2ff;
--color-brand-light: #fbd2f6;
--color-brand-warm: #f6d0c5;
--color-bg-light: #f9f9ff;
--color-bg-dark: #000;
--color-text-body: #777;
--color-text-heading: #222;
--color-text-white: #fff;
--color-footer-social-bg: #1e1e1e;
--font-family-heading: "Poppins", sans-serif;
--font-family-body: "Poppins", sans-serif;
--radius-button: 20px; /* pill shape */
```

## Component Breakdown

| Component | Files | Notes |
|-----------|-------|-------|
| Navbar | `src/components/Navbar.tsx` | Absolute positioned, logo + 3 links |
| Hero | `src/components/Hero.tsx` | Full-viewport gradient overlay, CTA button |
| Features | `src/components/Features.tsx` | 4-column grid, icon cards |
| CoreFeatureCarousel | `src/components/CoreFeatureCarousel.tsx` | Left text + right image carousel |
| CoreFeatureImage | `src/components/CoreFeatureImage.tsx` | Left image + right text (second core feature) |
| ProcessSteps | `src/components/ProcessSteps.tsx` | 6-step gradient section |
| ServiceCarousel | `src/components/ServiceCarousel.tsx` | Dark overlay carousel |
| Newsletter | `src/components/Newsletter.tsx` | Email signup form |
| Contact | `src/components/Contact.tsx` | Map placeholder + form |
| Footer | `src/components/Footer.tsx` | 5-column black footer with social icons |

## Fidelity Notes

- Gradient must match exactly: `linear-gradient(90deg, #f6d0c5, #fbd2f6)` — this gradient is the signature visual identity of the template
- Banner h1 uses very thin weight (200) and text-shadow `13px 15px 8px #f2c4d0`
- Button pill shape: `border-radius: 20px`, text uppercase, weight 500
- Service area uses `rgba(0,0,0,0.8)` overlay over background image
- Carousel shadows on core feature: `0px 21px 0px -10px #fbd2f480, 0px 33px 0px -16px #fbd2f480`
- Footer social icons: `#1e1e1e` background circles, `#777` icon color, hover `#fff`
- All placeholder images: `https://picsum.photos/seed/filament-<n>/<w>/<h>` with deterministic seeds
- No ColorLib references in any app file — provenance lives only in spec + TEMPLATES.md + PR
