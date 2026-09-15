# Waymark — Implementation Notes

Source: ColorLib Tour (https://preview.colorlib.com/theme/tour/)
New name: waymark

## Section order (top to bottom)

1. Navbar — fixed top, logo left, links right, hamburger on mobile
2. Hero Slider — full-width image slider, 4 slides, each with bg image + subtitle + title + CTA
3. Reservation Search — yellow (#FFDD00) bg, 4 tabs (Flight/Hotel/Car/Cruises), search fields + Book Now
4. Services — 4-column card grid (icon + title + description)
5. Blog — 3-column entry cards (image + date + category + title + excerpt)
6. Intro/Sale Banner — full-width parallax, dark overlay, "45% Off Sale" + 2 CTAs
7. Hotels — light grey bg, 4-column hotel cards (image + price + reviews + name + location)
8. Testimonials — carousel, 3 items (quote + author + location), light grey bg
9. Newsletter Subscribe — full-width parallax, dark overlay, email input + subscribe button
10. Footer — dark navy bg, 5 columns, copyright + Component Dock link

## Component breakdown

```
src/
  main.tsx          — entry (excluded from coverage)
  App.tsx           — composes all sections in order
  index.css         — Tailwind entry + @theme tokens
  components/
    Navbar.tsx      — fixed nav, mobile hamburger toggle
    HeroSlider.tsx  — 4-slide carousel with auto-advance
    ReservationSearch.tsx — tabbed search form (Flight/Hotel/Car/Cruises)
    Services.tsx    — 4 service cards
    Blog.tsx        — 3 blog entry cards
    IntroBanner.tsx — parallax sale banner with 2 CTAs
    Hotels.tsx      — 4 hotel cards with price/reviews
    Testimonials.tsx — carousel with 3 testimonials
    Newsletter.tsx  — email subscribe form over parallax bg
    Footer.tsx      — 5-column footer + Component Dock link
```

## Fidelity notes per section

### Navbar
- Logo text: "Waymark" (was "Tour")
- Nav items: Home, Tours, Destination, Cruises, Hotels, Services, Blog, About, Contact
- Fixed position, transparent on hero, solid on scroll (JS scroll listener)
- Mobile: hamburger icon toggles slide-down menu

### Hero Slider
- 4 slides with full-width background images (picsum.photos/seed/waymark-1 through 4)
- Each slide: subtitle ("2 Days Tour"), title ("Amazing Maldives Tour"), CTA button
- Auto-advance every 5s, manual next/prev arrows
- Consider using CSS transitions or a simple React state timer

### Reservation Search
- Yellow (#FFDD00) background section
- 4 tabs with pill-style active indicator
- Flight tab: Where, Check-in, Check-out, Guest (1-5+), Book Now
- Hotel tab: Where, Check-in, Check-out, Guest (1-5+), Book Now
- Car Rent tab: Where, Start Date, Return Date
- Cruises tab: Where, Start Date, Category dropdown (Suite/Super Deluxe/Balcony/Economy/Luxury)
- Subtitle: "Book Your Trip", title: "Book Now"
- "Best Price Online" text near CTA

### Services
- Section heading: subtitle "Explore our most travel agency", title "Our Travel Agency"
- 4 cards in a row: Amazing Travel, Our Cruises, Book Your Trip, Nice Support
- Each card: lucide-react icon + h3 title + paragraph description
- Icons: compass (travel), ship (cruises), calendar-check (book trip), headset (support)

### Blog
- Section heading: "Recent Blog"
- Intro text: lorem ipsum about travel
- 3 cards: each with image (picsum), date ("Feb 22, 2018"), category ("Activities"), title, excerpt
- Cards have hover effect (slight lift or shadow)

### Intro / Sale Banner
- Full-width parallax background image with rgba(0,0,0,0.7) overlay
- Subtitle: "45% Off Sale", title: "Experience the Best Trip Ever"
- Body text: lorem ipsum
- Two CTA buttons: "Book Now" (primary black) and "Read more" (outline/secondary)

### Hotels
- Light grey (#f2f2f2) background
- Section heading: subtitle "We love to tell our successful...", title "Recommended Hotels"
- 4 hotel cards: image (picsum), price badge ("$120 /night"), review count ("545 Reviews"), hotel name ("Hotel Edison"), location ("New York, USA"), description
- Cards are white with slight shadow

### Testimonials
- Light grey background (colorlib-light-grey class)
- Section title: "Our Satisfied Guests says"
- Carousel with 3 items, each: quote text, author name, location
- Testimonials: Alysha Myers (Miami), James Fisher (New York), Jacob Webb (Athens)
- Dot/arrow navigation for carousel

### Newsletter Subscribe
- Full-width parallax background with rgba(0,0,0,0.7) overlay
- Title: "Sign Up for a Newsletter"
- Subtitle: "Sign up for our mailing list to get latest updates and offers."
- Email input + "Subscribe" button (black bg, rounded)

### Footer
- Dark navy (#2C2E3E) background
- 5 columns:
  1. "Waymark" agency info + social media icons
  2. "Book Now" links (Flight, Hotels, Tour, Car Rent, Beach & Resorts, Cruises)
  3. "Top Deals" / Hotels list
  4. "Blog Post" links
  5. "Contact Information" (address, phone, email)
- Bottom: copyright + "Component Dock" attribution link
- Footer text color: rgba(255,255,255,0.5)

## Design token CSS (for index.css @theme)

```css
@theme {
  --color-brand: #FFDD00;
  --color-brand-hover: #ffe01a;
  --color-accent: #00BBF0;
  --color-dark: #2C2E3E;
  --color-surface: #f2f2f2;
  --color-overlay: rgba(0, 0, 0, 0.7);
}
```

## Key implementation details

- Font: Quicksand from Google Fonts (link in index.html)
- Buttons: pill shape (border-radius: 30px), black bg (#000) default, yellow (#FFDD00) hover
- Parallax sections: use CSS `background-attachment: fixed` or a lightweight JS approach
- Slider: simple React state-based carousel (no heavy library needed)
- Tabs: controlled component with active state
- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- All images: `https://picsum.photos/seed/waymark-<n>/<width>/<height>`
- No ColorLib references in app code
- Footer MUST link https://www.componentdock.com/
