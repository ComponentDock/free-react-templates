# Bankcraft — Implementation Guide

Source: ColorLib Banker (https://colorlib.com/wp/template/banker/)
Preview: https://preview.colorlib.com/theme/banker/

## Implementation tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/bolt)
- [ ] Rename package to @free-react-templates/bankcraft
- [ ] Set CNAME to bankcraft.free.componentdock.com
- [ ] Set homepage to https://bankcraft.free.componentdock.com
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Add Open Sans font via Google Fonts link in index.html
- [ ] Configure @theme tokens in index.css for brand colors

### Phase 2: Sections (top to bottom)
- [ ] Navbar.tsx — sticky header, logo with orange dot, nav links (Home, About with dropdown, Blog, Contact), social icons, mobile hamburger
- [ ] Hero.tsx — full-width banner, "Banking Solutions" headline, subtitle, 3 service cards
- [ ] MoneySavings.tsx — 4 feature cards in grid (icon + title + desc)
- [ ] AboutCta.tsx — split layout: large image left, "About Us" text + CTA button right
- [ ] Team.tsx — "Meet Team" heading, 8 member cards (photo, name, role) in 4-col grid
- [ ] Gallery.tsx — image gallery grid
- [ ] HowItWorks.tsx — 3 numbered steps (icon/number, title, description)
- [ ] Services.tsx — "Our Services" heading, 6 service cards in 2x3 grid
- [ ] Testimonials.tsx — "Happy Customers" heading, testimonial cards
- [ ] Pricing.tsx — 3-tier pricing cards (Basic, Premium[popular], Professional)
- [ ] Faq.tsx — accordion with 8 questions, toggle behavior
- [ ] BankLoanCta.tsx — split layout: image left, "Bank Loan" heading + CTA right
- [ ] Blog.tsx — "Our Blog" heading, 3 post cards (image, date, title, excerpt)
- [ ] Contact.tsx — "Contact Us" heading, form (name, email, subject, message, submit)
- [ ] Footer.tsx — dark bg, 3 columns (About, Quick Links, Follow Us), newsletter, Component Dock link

### Phase 3: Tests + Verification
- [ ] Write tests for each section component (Vitest + RTL)
- [ ] Ensure 100% coverage
- [ ] Run scripts/verify-app.sh bankcraft
- [ ] Build check
- [ ] Push and deploy

## Design notes

### Section order
1. Navbar (sticky, z-50)
2. Hero (full-width bg-image with dark overlay)
3. Money Savings (white bg, 4-col feature grid)
4. About Us CTA (white bg, 2-col split)
5. Team (white bg, 4-col member grid)
6. Gallery (white bg, image grid)
7. How It Works (white bg, 3-col numbered steps)
8. Services (light bg #f8f9fa, 6 cards in 2x3)
9. Testimonials (white bg, carousel or grid of cards)
10. Pricing (light bg #f8f9fa, 3 pricing cards)
11. FAQ (white bg, accordion)
12. Bank Loan CTA (white bg, 2-col split)
13. Blog (white bg, 3-col cards)
14. Contact (light bg #f8f9fa, form)
15. Footer (dark bg #343a40, 3 columns)

### Color palette for Tailwind @theme
- brand-primary: #fd7e14 (orange — buttons, accents, links)
- brand-secondary: #71bc42 (green — secondary accents)
- brand-dark: #343a40 (dark gray — footer, dark sections)
- brand-light: #f8f9fa (light section backgrounds)
- brand-alt-light: #eff1f3 (FAQ hover)

### Typography
- Font: Open Sans (300, 400, 700)
- Headings: 700 weight
- Body: 400 weight
- Light text: 300 weight

### Component patterns
- Buttons: pill-shaped (rounded-full or rounded-[30px]), bg brand-primary, text white
- Cards: white bg, subtle border, slight shadow on hover
- Section containers: max-w-7xl mx-auto px-4
- Icons: lucide-react equivalents for flaticon/icomoon icons
- Images: picsum.photos with seed based on template name

### Fidelity notes
- Match section order exactly as listed above
- Hero uses background image with dark overlay (picsum placeholder)
- Team section originally shows 8 members (2 rows of 4 on desktop)
- Gallery section: CSS grid with hover effects
- Pricing popular card has orange border accent
- FAQ uses click-to-toggle accordion (useState)
- Contact form: controlled inputs with basic validation
- Footer uses dark bg (#343a40) with white/light-gray text
- No ColorLib references anywhere in the app code
