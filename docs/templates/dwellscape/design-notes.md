# Dwellscape — Design Notes & Task Outline

**Source:** ColorLib Rehomes  
**Preview:** https://preview.colorlib.com/theme/rehomes/  
**Stack:** React 19 + Vite + Tailwind 4 + TypeScript  

## Section Order (fidelity to original)

1. **TopHeader** — Contact info bar (email, phone) + social icons (FB, Twitter, LinkedIn, IG).  
   - Dark slate bg (#2a303b area), white text.  
   - Used `#111014` or `#2a303b` bg with light text.
2. **Navbar** — Logo left, horizontal nav (Home, Pages dropdown), "Contact Us" button right.  
   - Transparent bg over hero, sticky on scroll with shadow.  
   - Button: brand green #92c800 bg, white text, border-radius 2px.
3. **Hero / WelcomeMap** — Full-width Google Maps embed (or parallax dark bg image).  
   - `welcome-area` with iframe covering the viewport height.  
   - Overlay darker for text readability.
4. **SearchForm** — Dark background (#2a303b), 6 filter dropdowns (Location, Type, City, Bedrooms, Bathrooms),  
   - Price slider, Size slider, green Search button (#92c800).  
   - Border-radius 2px on inputs and button. Form-control border #e5e5e5.
5. **PropertyListings** — "Top New In NewYork" heading (span "NewYork" in green).  
   - 6 property cards in 3×2 grid (col-lg-4).  
   - Each: thumb image (hover scale 1.2), address h4, seller, details row (sqft, garage, baths),  
   - Price badge area (rent: #1bb1e8, sale: #f26522, default: dark #2a303b, hover → #92c800 white text).  
   - Border-radius 5px on thumbs.
6. **WhyChooseUs** — Light gray bg (#f5f8fa).  
   - Heading: "Why Choose Us?" with "Why" span in green.  
   - 3 cards in row (col-lg-4): icon (lucide: search, building, credit-card), h5 title, paragraph.  
   - Content: "Find Your Home", "Transportation support", "Save Your Money".
7. **CategoriesByProperty** — "Categories By Property" heading (span "Property" in green).  
   - 3 large image cards with `bg-gradient-overlay` (dark gradient on hover).  
   - Each: image bg, category name link, "25 Properties" text.  
   - Border-radius 5px.
8. **CallToAction** — Parallax background image with dark overlay (jarallax effect).  
   - Headline: "Download app & join now!" in white, 48px.  
   - Supporting text below.  
   - Outline button: transparent bg, 2px solid #92c800, white text, hover → filled green.
9. **BlogSection** — "Latest News" heading (span "News" in green).  
   - 3 post cards in 3-col grid (col-lg-4).  
   - Each: thumb image (hover scale), post title link (turns #92c800 on hover),  
   - Post meta: author, date, comments count in gray (#636a76).
10. **PartnerLogos** — Horizontal carousel (owl-carousel) of 5 partner logo images.  
    - Clickable logos, auto-slide.
11. **Footer** — Dark background image with `bg-overlay-2` overlay.  
    - 4 widget columns: Logo + about text, Get Info (contact details), Property Cities (nav links), Newsletter (email input + green submit button).  
    - Bottom footer bar: copyright + Component Dock link.

## Token Cheat Sheet

| Element | Tailwind class reference |
|---------|------------------------|
| Brand button | `bg-[#92c800] text-white rounded-sm hover:bg-white hover:text-[#92c800]` |
| Dark section bg | `bg-[#2a303b]` |
| Light section bg | `bg-[#f5f8fa]` |
| Heading color | `text-[#2a303b]` |
| Heading span | `text-[#92c800]` |
| Body text | `text-[#555962]` |
| Meta text | `text-[#636a76]` |
| Card radius | `rounded-md` (5px) |
| Button border-radius | `rounded-sm` (2px) |
| Badge rent | `bg-[#1bb1e8] text-white` |
| Badge sale | `bg-[#f26522] text-white` |
| Footer overlay | `bg-black/60` or custom overlay |

## Implementation Tasks

- [ ] Scaffold `apps/dwellscape` from simplest existing app (e.g. `apps/abjure`)
- [ ] Rename package to `@free-react-templates/dwellscape`
- [ ] Create `public/CNAME` with `dwellscape.free.componentdock.com`
- [ ] Add Lato font via Google Fonts `<link>` in `index.html`
- [ ] Build `src/components/TopHeader.tsx`
- [ ] Build `src/components/Navbar.tsx` (with dropdown menu)
- [ ] Build `src/components/HeroMap.tsx` (map embed or parallax bg)
- [ ] Build `src/components/SearchForm.tsx` (6 filters, 2 sliders, green button)
- [ ] Build `src/components/PropertyListings.tsx` (6 cards, 3-col grid)
- [ ] Build `src/components/WhyChooseUs.tsx` (3 feature cards)
- [ ] Build `src/components/CategoriesByProperty.tsx` (3 overlay cards)
- [ ] Build `src/components/CallToAction.tsx` (parallax bg, CTA)
- [ ] Build `src/components/BlogSection.tsx` (3 post cards)
- [ ] Build `src/components/PartnerLogos.tsx` (logo carousel)
- [ ] Build `src/components/Footer.tsx` (4 columns, newsletter, Component Dock link)
- [ ] Compose all sections in `src/App.tsx`
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Run `scripts/verify-app.sh dwellscape` to confirm pass
