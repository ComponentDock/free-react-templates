# Hostera (ColorLib Lorahost) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hostera`. Recreation name: **Hostera** (NEW name —
> the ColorLib source keeps its name "Lorahost").

## Source mapping

- **ColorLib item:** "Lorahost" (TEMPLATES.md line 1088)
- **Source URL:** https://colorlib.com/wp/template/lorahost/
- **Preview URL:** https://preview.colorlib.com/theme/lorahost/
- **Preview CSS:** css/style.css (31 KB — Bootstrap 4 + custom styles)
- **Fonts:** Google Fonts — Roboto (body), Lato (headings)
- **Original stack:** Bootstrap 4, jQuery 3.2.1, Owl Carousel, Themify Icons

## Section structure (order from original HTML)

1. **Navbar** — transparent overlay on hero, sticky on scroll with #7676ff bg
2. **Hero Banner** — background image + gradient overlay, centered text, CTA
3. **Domain Search** — gray bg, search input + domain extension checkboxes
4. **Client Logo Carousel** — "Trusted by 12,000+" heading, 5 logos in Owl Carousel
5. **Features Grid** — 3x2 grid, 6 cards (Secured Server, Backup Facility, Easy To Customize, Free Domain Transfer, Live Chat Support, + intro text card)
6. **Pricing Table** — dark gradient bg, 3 cards (Normal $45.80, Premium $65.80, Ultimate $75.80)
7. **Services Grid** — 3x2 grid, 6 cards (SSD Cloud Hosting, Free Domain Transfer, Best Hosting Service, Strong Backup, Email Service, Data Analysis)
8. **Newsletter / Subscribe** — gray bg, email input + subscribe button
9. **Dedicated Server** — text left + server image right (side-by-side)
10. **Testimonials** — carousel with avatar, quote, name, title
11. **Footer** — dark bg (#0c112a), 4 columns (About, Contact, Links, Newsletter), social icons, copyright

## Design token notes

- **Brand gradient:** `linear-gradient(to right, #2926ac, #6128be)` — used on hero overlay (::after), buttons, pricing bg overlay
- **Brand primary:** `#1e1859` — headings, body text highlights, hover states
- **Navbar sticky:** `#7676ff` (light indigo/periwinkle)
- **Section backgrounds:** light sections use `#f9f9ff`, dark sections use gradient overlay on bg image
- **Card shadows:** `0px 20px 20px 0px rgba(40,25,114,0.1)` on hover
- **Footer:** `#0c112a` very dark navy, border-top `#333333`
- **Fonts:** Roboto 300/400/500 (body), Lato 300/400/700/900 (headings)
- **Buttons:** pill shape (border-radius 30px), gradient bg, white text, hover to `#1e1859`

## Implementation tasks

- [ ] Scaffold `apps/hostera` from existing template (copy simplest app, rename package)
- [ ] Set up Google Fonts links in `index.html` (Roboto + Lato)
- [ ] Define Tailwind theme tokens in `index.css` (@theme block with brand colors)
- [ ] Build Navbar component (transparent, sticky on scroll)
- [ ] Build Hero section (gradient overlay, centered text, CTA)
- [ ] Build DomainSearch component (input, checkboxes, search button)
- [ ] Build LogoCarousel component (5 logos, auto-scroll)
- [ ] Build Features grid (3x2, icon cards)
- [ ] Build Pricing section (3 cards on dark bg)
- [ ] Build Services grid (3x2, icon cards)
- [ ] Build Newsletter section (email input, subscribe button)
- [ ] Build DedicatedServer section (text + image side-by-side)
- [ ] Build Testimonials carousel (avatar, quote, name)
- [ ] Build Footer (4 columns, dark bg, social icons, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh and gate checks
