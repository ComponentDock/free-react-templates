# PageDraft — Implementation Notes

Source: ColorLib PageOne (https://preview.colorlib.com/theme/pageone/)
New name: pagedraft

## Section order (fidelity notes)

1. **Navbar** — Sticky top. Logo left, links right. Hamburger on mobile with slide-in menu. White bg, subtle shadow on scroll. Use `packages/ui` nav patterns.
2. **Hero** — White bg. 80px bold heading (50px mobile). CTA button (brand pink). 6 service-category pill links in a row (Technology, Marketing, Product & Design, Strategic Consulting, Business Synergies, Fundraising).
3. **Service Categories** (section-1) — Below hero, pt-0. Row of category cards with short descriptions. Light bg.
4. **Services** (#services-section) — bg-light (#f8f9fa). "Services" heading + intro paragraph. 4-column grid: Graphic Design, Web Development, Branding, Iconography. Each card: icon (lucide-react), title, description.
5. **Process** (#process-section) — White bg. "Our Process" heading + intro. 6 numbered steps in 2 or 3-column layout. Pink number badges (0.25rem radius, brand pink bg, white text). Steps: Information Gathering, Planning, Design, Development, Testing and Delivery, Maintenance.
6. **Clients** (#clients-section) — Dark bg (#1d1d1d), white text. 5 client testimonials: Goldline, Foxhub, Ideaa, Nirastate, Treva. Each: circular avatar (50% radius), client name (brand pink), quote. Grid or carousel layout.
7. **Features** (section-5) — bg-light. "Features" heading + intro. 6-column grid: Illustration, 24/7 Support, Easy to Use, Web Development, Intuitive, Documentation. Each: icon (lucide-react), title, description.
8. **About** (#about-section) — White bg. Two-column: left = "Our Office" heading + 3 paragraphs, right = office image. Below: "Our Team" heading + 4 team member cards. Each card: circular photo (50% radius), name (link, brand pink on hover), role (muted text), description.
9. **Contact** (#contact-section) — 3 quick-contact items: address, phone, email. Each: circular icon badge (brand pink border, 50% radius), text. Below: embedded map placeholder.
10. **Footer** — bg #f8f9fa. 3-column: About (logo + description), Pages (Blog, About, Contact), Resources (Blog, Home). Bottom bar: copyright + Component Dock link (https://www.componentdock.com/).

## Design tokens for Tailwind @theme

```css
@theme {
  --color-brand: #ec1e64;
  --color-brand-hover: #ee3574;
  --color-dark-section: #1d1d1d;
  --color-light-section: #f8f9fa;
  --color-text-primary: #212529;
  --color-text-muted: #6c757d;
  --color-footer-text: #888;
}
```

Font: Poppins (Google Fonts via <link> in index.html).

## Component plan

- `src/components/Navbar.tsx` — sticky nav with mobile hamburger
- `src/components/Hero.tsx` — heading + CTA + category pills
- `src/components/ServiceCategories.tsx` — category cards below hero
- `src/components/Services.tsx` — 4-column service grid
- `src/components/Process.tsx` — 6 numbered steps
- `src/components/Clients.tsx` — testimonial cards on dark bg
- `src/components/Features.tsx` — 6-column feature grid
- `src/components/About.tsx` — office + team section
- `src/components/Contact.tsx` — quick-contact items
- `src/components/Footer.tsx` — 3-column footer with Component Dock link

## Implementation order

1. Scaffold app from simplest existing template (copy apps/onepage or similar)
2. Install Poppins font in index.html
3. Set up Tailwind @theme tokens in index.css
4. Build Navbar (sticky, mobile menu)
5. Build Hero (heading, CTA, pills)
6. Build ServiceCategories
7. Build Services grid
8. Build Process steps
9. Build Clients (dark section)
10. Build Features grid
11. Build About (office + team)
12. Build Contact
13. Build Footer with Component Dock link
14. Write tests for each component (100% coverage)
15. Run verify-app.sh, fix any issues
16. Commit, push, PR, merge

## Notes

- Use `picsum.photos/seed/pagedraft-<n>/<w>/<h>` for all placeholder images
- Use `lucide-react` for all icons
- No ColorLib references anywhere in app code
- Footer MUST link https://www.componentdock.com/
