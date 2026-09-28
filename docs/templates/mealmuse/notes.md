# MealMuse — Implementation Notes

## Template Source
- **ColorLib slug:** luto
- **Preview URL:** https://preview.colorlib.com/theme/luto/
- **New name:** mealmuse
- **Category:** Restaurant

## Section Order & Fidelity Notes

### 1. Navbar (`Navbar.tsx`)
- Transparent header over hero, absolute positioned
- Logo: cutlery icon (lucide `UtensilsCrossed`) + "MealMuse" text in dark pill badge
- Desktop: horizontal nav links (Home, Menu, Specialties, Reservation, Blog, About, Contact)
- Mobile: hamburger toggle → full-screen slide-in overlay (dark background `rgba(0,0,0,0.8)`)

### 2. Hero Slider (`Hero.tsx`)
- 4 slides with food background images (use picsum.photos)
- Each slide: dark overlay (`bg-black/50`), cutlery icon, H1 headline, paragraph, pill CTA "Book a table"
- Mouse scroll indicator at bottom center
- Auto-rotation with dots or simple interval
- Min height ~750px (Tailwind `min-h-[750px]`)

### 3. Info Bar (`InfoBar.tsx`)
- 4-column grid on `bg-[#302939]` background
- Columns: Address (MapPin icon), Opening Time (Clock icon), Phone (Phone icon), Email (Mail icon)
- White icons, white headings, muted white text (`text-white/60`)
- Padding: `py-10`

### 4. About Section (`About.tsx`)
- Light grey background (`bg-gray-50`)
- Left (5 cols): "Welcome to MealMuse" span + H2 heading + paragraph
- Right (7 cols): 2 food images in a 2x1 grid with rounded corners
- Section padding: `py-28`

### 5. Featured Dishes (`FeaturedDishes.tsx`)
- Used twice (sections 5 and 7) — reuse component with different data
- Heading: cutlery icon + "Our Delicious Specialties" + subtitle
- 3-column grid of dish cards: background image with hover scale effect, dish name below
- Card height: `h-[400px]`, overflow hidden

### 6. Parallax Video CTA (`VideoCta.tsx`)
- Full-width parallax background (`bg-fixed bg-center bg-cover`)
- Dark overlay
- Right-aligned white box (`bg-white/95`) with padding: H2 + paragraph + outline play button
- Play button: outline style, play icon (lucide `Play`), "Watch Video"

### 7. Testimonials (`Testimonials.tsx`)
- Parallax background with dark overlay
- H2 "Our Customer Says" centered in white
- Carousel/slider of blockquote cards: quote text + "— Author" attribution
- Use simple auto-rotating carousel (CSS-only or minimal JS)

### 8. Full Menu (`FullMenu.tsx`)
- Section with negative top margin to overlap previous section (`-mt-[13em]` equivalent)
- White background (`bg-[#FBFBFB]`)
- Tabbed interface: Main | Desserts | Drinks
- Each tab shows 2-column list of menu items
- Each item: thumbnail image + price badge (orange bg) + dish name + category tags
- Tabs use `role="tablist"` / `role="tab"` / `role="tabpanel"` for accessibility

### 9. Reservation (`Reservation.tsx`)
- Parallax background with dark overlay
- H2 "Make A Reservation"
- Form: 2-column grid with fields: Fullname, Email, Phone, Date (with calendar icon), Time (dropdown), Number of Guests
- Submit button: full width, square corners (`rounded-none`), orange bg

### 10. Footer (`Footer.tsx`)
- Dark background (`bg-[#303030]`)
- 4-column layout:
  - Col 1: Brand name + description + social icons (FB, Twitter, Google+, Dribbble in orange)
  - Col 2: "Latest Blog" — 3 entries with thumbnail + date + title
  - Col 3: "Instagram" — 2x2 image grid (images half-width, ~120px tall)
  - Col 4: "Newsletter" — email input + square "Subscribe" button
- Copyright bar: "© [year] All rights reserved | Made with ♥ by Component Dock"

## Component Map
```
src/
  main.tsx
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    InfoBar.tsx
    About.tsx
    FeaturedDishes.tsx
    VideoCta.tsx
    Testimonials.tsx
    FullMenu.tsx
    Reservation.tsx
    Footer.tsx
  index.css (Tailwind entry + @theme tokens)
  test/
    setup.ts
```

## Design Tokens for Tailwind `@theme`
```css
@theme {
  --color-brand: #FF6107;
  --color-brand-hover: #ff7121;
  --color-surface: #FBFBFB;
  --color-text: #7d7d7d;
  --color-heading: #404044;
  --color-dark-bar: #302939;
  --color-dark-footer: #303030;
  --color-overlay: rgba(0,0,0,0.5);
}
```

## Key Decisions
- Hero slider: use simple interval-based rotation (no heavy carousel lib)
- Parallax: CSS `background-attachment: fixed` — works on desktop, graceful degrade on mobile
- Tabbed menu: React state for active tab, accessible ARIA roles
- Testimonials: simple CSS auto-scrolling carousel or fade transition
- No external dependencies beyond React/Vite/Tailwind (lucide-react for icons)
- All images: picsum.photos deterministic seeds (`/seed/mealmuse-1/400/400` etc.)
