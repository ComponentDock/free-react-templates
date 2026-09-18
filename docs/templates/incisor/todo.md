# Incisor — Implementation Todo

Source: ColorLib "Dento" → https://preview.colorlib.com/theme/dento/

## Tasks

- [ ] Copy simplest existing app → `apps/incisor`, rename package to `@free-react-templates/incisor`
- [ ] Update `public/CNAME` → `incisor.free.componentdock.com`
- [ ] Update `homepage` in `package.json` → `https://incisor.free.componentdock.com`
- [ ] Add `@source` injection in `vite.config.ts`
- [ ] Import Montserrat via `<link>` in `index.html`
- [ ] Create `src/components/TopHeader.tsx`
- [ ] Create `src/components/Navbar.tsx` (sticky, with Booking Now CTA)
- [ ] Create `src/components/Hero.tsx` (slider, 2 slides, overlay, CTAs)
- [ ] Create `src/components/AboutUs.tsx` (2-column, features)
- [ ] Create `src/components/Counters.tsx` (4 stat cards)
- [ ] Create `src/components/Services.tsx` (6 service cards)
- [ ] Create `src/components/Pricing.tsx` (table with 8+ rows)
- [ ] Create `src/components/Appointment.tsx` (form with 5 fields + schedule)
- [ ] Create `src/components/Dentist.tsx` (3 team cards)
- [ ] Create `src/components/Testimonials.tsx` (slider)
- [ ] Create `src/components/Blog.tsx` (3 blog cards)
- [ ] Create `src/components/Footer.tsx` (4 columns, newsletter, Component Dock link)
- [ ] Compose all sections in `src/App.tsx`
- [ ] Write `src/index.css` with Tailwind + `@theme` brand tokens
- [ ] Write tests for each component (100% coverage)
- [ ] Run `scripts/verify-app.sh incisor`
- [ ] Commit and push

## Design Notes

### Section Order
TopHeader → Navbar → Hero → AboutUs → Counters → Services → Pricing → Appointment → Dentist → Testimonials → Blog → Footer

### Fidelity Notes
- Hero: full-width slider with dark overlay, 2 alternating slides with same copy
- AboutUs: left image, right content with 4 feature icons (grid of 2x2)
- Counters: row of 4, each with icon + number + label
- Services: grid of 6 cards, each with SVG icon + title + short text
- Pricing: table layout (not cards), clean rows with alternating subtle bg
- Appointment: left form + right schedule display, form has select dropdown
- Dentist: 3 cards side by side, circular photo, name, role, social links (facebook/twitter/linkedin)
- Testimonials: carousel with avatar + quote text + name/role
- Blog: 3 cards in a row, image on top, content below with date + comment count
- Footer: dark bg (#333), 4 columns, newsletter input, social icons at bottom

### Color Token Mapping (Tailwind)
- `brand`: `#0891b2` → `bg-brand`, `text-brand`, `border-brand`
- `brand-hover`: `#0e7490`
- `bg-light`: `#f4f4f4` → `bg-[#f4f4f4]` or custom token
- `text-primary`: `#333`
- `text-secondary`: `#707070`
- Section heading underline: 2px solid `#0891b2`, width ~50px, centered

### Image Strategy
- Hero: `https://picsum.photos/seed/incisor-hero/1920/800`
- About Us: `https://picsum.photos/seed/incisor-about/600/400`
- Dentist 1-3: `https://picsum.photos/seed/incisor-dentist-1/300/300` (circular)
- Blog 1-3: `https://picsum.photos/seed/incisor-blog-1/400/250`
- Service icons: lucide-react (Smile, Heart, Stethoscope, etc.)
