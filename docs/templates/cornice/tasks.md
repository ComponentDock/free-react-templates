# Cornice — Implementation Tasks & Design Notes

**Source:** ColorLib "Complex" — https://colorlib.com/wp/template/complex/
**Preview:** https://preview.colorlib.com/theme/complex/
**New name:** cornice

## Section implementation order

### 1. Scaffold (copy from simplest existing app)

- Copy `apps/glissade` or similar minimal app as template
- Rename package to `@free-react-templates/cornice`
- Update `public/CNAME` → `cornice.free.componentdock.com`
- Update `vite.config.ts` with `injectUiSource()`
- Add Poppins font to `index.html` via Google Fonts `<link>`
- Set `@theme` tokens in `index.css`:
  - `--color-brand: #F7B633`
  - `--color-brand-hover: #f8bf4c`
  - `--color-dark: #1E2022`
  - `--color-dark-surface: #252525`

### 2. Navbar

- Sticky transparent navbar that becomes solid on scroll (use `IntersectionObserver` or scroll listener)
- Logo text "Cornice" in bold white
- Nav links: Home (active with yellow underline), Projects (dropdown on hover), Services, Blog, About, Contact
- Mobile: hamburger toggle, collapsible menu

### 3. Hero Carousel

- Full-viewport height section
- Auto-rotating carousel with 4 slides
- Each slide: dark background image (use `picsum.photos/seed/cornice-hero-1/1920/1080` etc.), dark overlay (`rgba(0,0,0,0.5)`), centered white headline + subtext
- Carousel dots at bottom for manual navigation
- Implement as custom carousel (no external deps) — useState for active index + setInterval

### 4. Service Tabs

- Horizontal tab bar below hero, overlapping slightly (negative margin)
- Semi-transparent white background (`rgba(255,255,255,0.8)`)
- 4 tabs with lucide-react icons: Draft (Planning & Design), HardHat (General Constructing), Users (Construction Management), Building (Building Modeling)
- Active tab: white solid background
- Tab content: 2-column — left = image, right = description + bulleted list
- State: useState for active tab index

### 5. Services Grid

- 6 cards in responsive 3-col grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- Each card: white bg, rounded shadow, yellow icon (lucide-react), uppercase title, description
- Services: General Constructing, Building Modeling, Design Build, Construction Services, Pre-Construction Design, Construction Management

### 6. Counter Section

- Parallax-like background (use CSS `background-attachment: fixed` on desktop, static on mobile)
- Dark overlay
- 4 counters in a row: Projects (1539), Employees (3653), Constructor (5987), Partners (3999)
- Each: white icon (lucide-react), animated count-up number, label
- Implement count-up with `useEffect` + `requestAnimationFrame` on intersection observer

### 7. Projects Gallery

- Heading "Our Projects" centered with subtitle
- Asymmetric grid (CSS grid with named areas or explicit column spans):
  - Row 1: 1fr 2fr → col-4 + col-8
  - Row 2: 1fr 1fr → col-6 + col-6
  - Row 3: 2fr 1fr → col-8 + col-4
- Each card: background image (picsum.photos), hover overlay with search icon, title below
- Projects: Apartment Interior Design, Office Space, Condo Building, Kitchen Interior, Commercial Building, Hotel Building

### 8. About / Team Section

- Full-width section with parallax dark background image
- Split layout: flex or grid 50/50
- Left: 2x2 grid of team members — background image with name + role overlay at bottom
  - Ian Moore (Electrician), Jack Clark (Engineer), Kiven Lewis (Architect), Charles Scott (Assistant Engineer)
  - Images: picsum.photos/seed/cornice-team-{1,2,3,4}/400/400
- Right: description paragraph + 3-panel accordion (Who we are, What we do, Why Choose us)
  - Accordion: useState for open panel index, default open = 0

### 9. Testimonials

- Heading "Client Says:" centered
- Carousel with 3 items: avatar (circular image) + name + blockquote
- Clients: Andrew Field, Mark Bubble, Adam Smith
- Simple carousel with dots or prev/next arrows
- Images: picsum.photos/seed/cornice-client-{1,2,3}/100/100

### 10. Newsletter

- Dark background with gradient/image overlay
- Heading "Subscribe Newsletter", subtitle
- Email input + "Subscribe Now" button (golden yellow, rounded)
- Form: handleSubmit with basic email validation (no external form lib needed)

### 11. Footer

- Contact info bar (3 columns: address, email/website, phone) on dark background
- 4-column main footer:
  - About Cornice: paragraph + social icons (Twitter, Facebook, LinkedIn, Dribbble via lucide-react)
  - Information: link list with check icons
  - Instagram: 6 thumbnail images in 3x2 grid
  - Contact Info: address, phone, email
- Copyright bar: "All rights reserved | Made with Component Dock" linking to componentdock.com
- All footer links should be "#" (non-functional)

## Fidelity notes

- Original uses Bootstrap grid + jQuery Flexslider + Owl Carousel. In React: replace with CSS Grid/Flexbox + custom carousel components
- Original uses icomoon + flaticon icons. In React: replace with lucide-react equivalents
- Original uses Bootstrap tabs + accordion. In React: custom components with useState
- Original uses Stellar parallax. In React: CSS `background-attachment: fixed` (simpler, works well enough)
- Original navbar sticky behavior: implement via scroll listener adding/removing a CSS class
- The hero carousel in original has 4 slides with different background images — use picsum.photos with different seeds for each
- Yellow accent (#F7B633) is used consistently for: active nav underline, tab active state, service card icons, counter icons, newsletter button
- Footer copyright must link to componentdock.com (not Colorlib)
- No references to Colorlib in the app code
