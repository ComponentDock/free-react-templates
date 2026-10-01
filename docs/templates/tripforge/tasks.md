# Tripforge — implementation tasks

Recreation of ColorLib "Direngine" (Travel). Spec:
`openspec/specs/template-tripforge/spec.md`. New name: **tripforge**
(source slug `direngine` — never reuse it in app files).

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/tripforge`
- [ ] Rename package to `@free-react-templates/tripforge`; set
      `"homepage": "https://tripforge.free.componentdock.com"`
- [ ] `public/CNAME` = `tripforge.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/tripforge`
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins 300/400/500/600/700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: coral `#f85959`, teal `#2ebdc4`,
      mint `#68e5b2`, footer `#222831`, light bg `#f8f9fa`, body `#4d4d4d`,
      muted `#6c757d`, price `#2f89fc`, border `#e6e6e6`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — transparent over hero; bold "tripforge" + coral dot;
      links Home/About/Tour/Hotels/Blog/Contact; "Add listing" outline
      pill (hover fills coral); scrolled → solid dark bg (React state);
      mobile hamburger (lucide Menu/X, `aria-expanded`)
- [ ] `Hero.tsx` — picsum `tripforge-hero` cover, subtle teal→mint
      gradient overlay; h1 "Explore / your amazing city" (bold first
      line); subtext; `SearchForm` (keyword input + Where select with
      chevron + coral Search pill); "Or browse the highlights" + 4 chips
      (UtensilsCrossed/Building2/MapPin/ShoppingBag, white radius-2 pills)
- [ ] `ServicesStrip.tsx` — `#f8f9fa` bg, container `-mt-[120px]`
      overlapping hero; 4 white cards (shadow `0 2px 5px rgba(0,0,0,0.03)`),
      60px coral lucide icons (BadgeCheck/HeartHandshake/Compass/
      Headphones), 20px headings, grey blurbs; hover → coral bg + white
      content
- [ ] `FeaturedDestinations.tsx` — subheading "Featured" + h2; React-state
      slider of 5–6 tiles (picsum `tripforge-dest-1..6`): image + hover
      60px white circle w/ coral Search icon; h3 + "15 Listing"
- [ ] `TourPackages.tsx` — `#f8f9fa`; subheading "Special Offers" + h2;
      responsive grid of 5 cards (picsum `tripforge-tour-1..5`): hover
      circle, h3, coral Star×4+StarOff + "Rating", price `$200` in
      `#2f89fc`, blurb, "2 days 3 nights" chip, divider, bottom row
      (MapPin "San Franciso, CA" + "Discover" link)
- [ ] `CounterStats.tsx` — picsum `tripforge-band` bg + dark overlay;
      white "Some fun facts" (40px) + subheading; 4 counters
      (100000/40000/87000/56400) with IntersectionObserver count-up
      (reduced-motion → final value)
- [ ] `HotelsGrid.tsx` — `#f8f9fa`; subheading + h2; 5 cards (picsum
      `tripforge-hotel-1..5`): hover circle, "Hotel, Italy", stars +
      Rating, `$40 /night` price block, blurb, divider, "Book Now" link
- [ ] `WhyChooseUs.tsx` — `#f8f9fa`, two columns: left copy ("Best
      Directory Website" / "Why Choose Us?" + 2 paragraphs + outline pill
      "Read more"); right testimonials carousel ("Our Guests Says"): white
      cards, 100px round picsum `tripforge-quote-1..3` + 40px coral quote
      circle badge, text + name; stacks on mobile
- [ ] `RestaurantsGrid.tsx` — subheading + h2; 4-col grid of 4 cards
      (picsum `tripforge-rest-1..4`): "Luxury Restaurant", stars + Rating,
      blurb, MapPin + Discover row
- [ ] `TipsArticles.tsx` — `#f8f9fa`; subheading "Recent Blog" + h2;
      4 blog cards (picsum `tripforge-blog-1..4`, 250px cover image):
      grey tag chip, h3 title, meta row (date · Admin · MessageCircle
      count)
- [ ] `Newsletter.tsx` — teal→mint gradient band (-45deg); centered white
      "Subscribe to our Newsletter" (fix original's "Subcribe" typo);
      bordered form (outer radius 0, pill transparent input, left-border
      Subscribe submit); success/error states per repo conventions
- [ ] `Footer.tsx` — `#222831`, 4 columns: brand + blurb + social
      (inline-SVG Twitter/Facebook/Instagram in 50px translucent circles
      — lucide has NO brand icons); "Information" links; "Customer
      Support" links; "Have a Questions?" contact list; Component Dock
      link (`https://www.componentdock.com/`)

## Conventions + gates

- [ ] Shared `Card`-style helpers via `packages/ui` + `cn()`; zod +
      react-hook-form patterns for the subscribe form
- [ ] All links in-page anchors / "#"; no ColorLib strings anywhere in
      `apps/tripforge`; footer MUST link Component Dock
- [ ] TDD: tests per component mirroring spec scenarios; 100% coverage
- [ ] `scripts/verify-app.sh tripforge` green; regenerate README status
- [ ] Bookkeeping (implementer): `[~]` claim → implement → `[x]` + surge
      URL + homepage + `npm run readme:status`
