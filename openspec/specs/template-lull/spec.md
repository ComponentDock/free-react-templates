# OpenSpec Specification: Template `lull` (Hospitality / Hotel Booking)

## Purpose

Recreation of ColorLib **Unwind** (`https://colorlib.com/wp/template/unwind/`, preview: `https://preview.colorlib.com/theme/unwind/`).
A luxury hotel booking and hospitality website template built with Vite, React 19, Tailwind CSS 4, and TypeScript.
Designed for hotels, resorts, hospitality agencies, and bed-and-breakfasts.

## Design Tokens

- **Brand Colors**:
  - Primary / Gold Accent: `#c5a880` (`bg-[#c5a880]`, `text-[#c5a880]`)
  - Dark Charcoal / Text: `#222222` / `#1a1a1a`
  - Light Background: `#f8f8f8` (`bg-neutral-50`)
  - White: `#ffffff`
- **Typography**:
  - Headings: Serif (`Old Standard TT` / serif fallback)
  - Body: Sans-serif (`Nunito` / `sans-serif`)
- **Buttons**:
  - Primary: Solid gold (`#c5a880`), uppercase tracking, sharp/crisp rectangle (`rounded-none`).
  - Outline: White border and text with transparent fill.
- **Sections**:
  - Navbar, Hero, Booking Form Bar, About Us, Services Grid, Promo Banner, Featured Rooms, Tour Video, Restaurant & Bar Menu, Testimonials Carousel, Recent Blog Grid, Footer (linking Component Dock).

---

## Requirements & Scenarios

### Requirement 1: Navigation & Header

- The header must display the logo "LULL HOTEL BOOKING" and navigation links: Home, About, Rooms, Resto & Bar, Blog, Contact.
- Scenarios:
  - Scenario: User views header and clicks nav links.

### Requirement 2: Hero Section & Booking Bar

- Hero features a full-width background image with dark overlay, subtitle "ENJOY YOUR WONDERFUL HOLIDAYS...", headline "Most Relaxing Place", and CTA buttons "TAKE A TOUR" and "LEARN MORE".
- Interactive booking bar widget with inputs for Check-In, Check-Out, Room type dropdown, Guest count dropdown, and "CHECK AVAILABILITY" button.
- Scenarios:
  - Scenario: User selects check-in/out dates and submits availability check.

### Requirement 3: About Section

- Heading "Lull A Hotel Booking Agency", description paragraph, and "BOOK YOUR ROOM NOW" action link.
- Scenarios:
  - Scenario: User reads agency overview and triggers booking prompt.

### Requirement 4: Services Grid

- 6 key hotel services with icons and titles: Free Wifi, Easy Booking, Restaurant, Swimming Pool, Beauty & Health, Help & Support.
- Scenarios:
  - Scenario: User inspects available hotel amenities.

### Requirement 5: Featured Rooms

- Grid of featured accommodations (Suite Room, Family Room, Deluxe Room) with image, description, price, and "BOOK NOW" action.
- Scenarios:
  - Scenario: User browses available rooms and selects one for booking.

### Requirement 6: Restaurant & Bar Menu

- Grid showcasing popular dishes (Grilled Beef with potatoes, Ultimate Overload, Ham & Pineapple) with prices and descriptions.
- Scenarios:
  - Scenario: Guest reviews dining options.

### Requirement 7: Testimonials & Blog

- Guest reviews carousel ("Happy Guests") and recent blog posts grid ("Best Hotel Near Beach") with comments and dates.
- Scenarios:
  - Scenario: User reads guest feedback and travel blog updates.

### Requirement 8: Footer

- Footer columns with about summary, social links, service links, quick links, contact info (phone, email), and mandatory link to `https://www.componentdock.com/` ("Component Dock").
- Scenarios:
  - Scenario: User checks footer links and finds Component Dock attribution.

---

## Verification Checklist

- [ ] TypeScript strict check passes (`npm run typecheck` or per-app gate).
- [ ] Tailwind CSS 4 compiles without error (`@theme` tokens configured).
- [ ] All 1:1 sections rendered cleanly with responsive layouts.
- [ ] 100% test coverage maintained (`npm run test:coverage`).
- [ ] Footer links to `https://www.componentdock.com/`.
- [ ] CNAME configured as `lull.free.componentdock.com`.
