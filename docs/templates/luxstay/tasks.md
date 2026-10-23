# LuxStay — Implementation TODO & Design Notes

**Source:** ColorLib "Luxehotel" — https://colorlib.com/wp/template/luxehotel/
**Preview:** https://preview.colorlib.com/theme/luxehotel/
**New name:** LuxStay (apps/luxstay)

## Section implementation order

1. **Project scaffold** — copy simplest existing app, rename package to
   `@free-react-templates/luxstay`, update vite.config.ts, index.html
   (add Google Fonts: Poppins + Playfair Display), index.css (Tailwind
   theme tokens: brand-blue, accent-orange, gold-star, dark-purple)

2. **TopBar** — Simple flex row: left = site URL text, right = phone +
   social icon links. Grey background `#f5f5f5`. Responsive: hide phone
   on mobile.

3. **Navbar** — Sticky nav: "LuxStay" logo (Playfair Display, uppercase,
   24px), right-aligned menu items. Rooms dropdown with dark bg. Hamburger
   toggle on mobile. Use cn() for active state styling.

4. **HeroSlider** — Full-width slider (min-height 650px) with 4 slides.
   Each slide: background image (picsum.photos/seed/luxstay-slide-N),
   dark overlay, centered white text (h2 sub + h1 main), two CTA
   buttons. Implement as a simple CSS-only or React state slider (no
   external carousel lib unless already in packages/ui).

5. **ReservationBar** — Dark purple `#302939` bar with form: Check-in,
   Check-out (date inputs), Adults, Children (select dropdowns), Search
   button. Overlaps hero with negative margin. White labels, transparent
   inputs with white borders.

6. **Services** — White bg, centered heading (5 gold stars + h2 +
   description). 4-column grid of service cards: circular icon container
   (120px, grey bg, brand blue icon via lucide-react) + h3 + paragraph.
   Items: 24/7 Front Desk, Spa Suites, Transfer Services, Restaurant &
   Bar.

7. **RoomsCarousel** — Light grey `#fafafa` bg. Centered heading (5 gold
   stars + h2 + description). Horizontal scrollable or carousel of room
   cards. Each card: background image (300px), white desc card with
   star rating, room type h3, price (Playfair Display, blue), features
   checklist, "Book now!" pill button. 6 rooms. "View all rooms" link.

8. **DiningBar** — Orange `#F96D00` full-width inner container. Centered
   heading. Split layout: left = tabbed menu (Mains/Desserts/Drinks)
   with circular food thumbnails + dish names + prices; right = cover
   image. Tab switching via React state.

9. **Blog** — White bg. Centered heading. Flex layout: left = video
   thumbnail with circular play button overlay; right = 3 blog post
   entries with circular thumbnail + date + title + category. "View all
   blog post" link.

10. **Testimonials** — Light grey `#fafafa` bg. Centered heading (3 gold
    stars). 3-column cards: circular user photo (120px), name, subtitle,
    blockquote. White card with box-shadow.

11. **Newsletter** — Background image (picsum.photos/seed/luxstay-news)
    with dark overlay. Centered heading (5 gold stars). Email input +
    "Subscribe" button (brand blue).

12. **Footer** — 4-column layout: (1) Brand + description + social icons,
    (2) Quick Links, (3) Recent Blog Posts, (4) Contact Info. Copyright
    line with Component Dock link. No ColorLib attribution.

13. **BackToTop** — Fixed bottom-right button, appears on scroll > 200px,
    smooth scroll to top.

## Fidelity notes

- **Section order must match exactly:** TopBar → Nav → HeroSlider →
  ReservationBar → Services → Rooms → Dining → Blog → Testimonials →
  Newsletter → Footer → BackToTop
- **Typography:** Playfair Display for all h1-h6 headings and price
  displays; Poppins for body text, nav, buttons, labels
- **Color palette:** #4586FF (primary blue), #F96D00 (accent orange),
  #F7AF1D (gold stars), #302939 (reservation bar), #fafafa (light grey
  sections), #000 (headings), #595959 (body text)
- **Button styles:** Pill shape (radius 30px) for booking/CTA buttons;
  uppercase text with letter-spacing on hero buttons
- **Circular elements:** Service icons (120px, grey bg), user photos
  (120px), blog thumbnails (90px), menu item images (all radius 50%)
- **Reservation bar:** Must overlap hero with negative top margin, dark
  purple background, transparent form fields with white borders
- **Dining section:** Orange background covers the full-width inner
  container; tabs have active = white text, inactive = orange text
- **No external carousel libraries** — use simple React state + CSS
  transform or check packages/ui for existing carousel component
- **Placeholder images:** Use picsum.photos/seed/luxstay-N/W/H for all
  images (hero slides, room images, food thumbnails, blog images, user
  photos, dining cover)
- **Fonts:** Load via Google Fonts `<link>` in index.html; do NOT copy
  font files locally
