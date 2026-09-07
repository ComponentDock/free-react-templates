# Grove — Implementation Tasks

Source: Colorlib Buri (restaurant/food Bootstrap template)
New name: `grove`
Preview: https://preview.colorlib.com/theme/buri/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/buri-free-template.jpg

## Structure order (matching original)

1. **Navbar** — Logo left, nav links (Home, About, Menu, Blog with dropdown, Pages with dropdown, Contact), social icons right (Facebook, Instagram)
2. **HeroBanner** — Full-width background image (1080px), subtitle "Expensive but the best", heading "Modern restaurant in center of the city", "book a table" CTA button
3. **AboutSection** — Subtitle "about us", heading "Delicious food provider since 1990", two text paragraphs, "learn More" button (black bg), image right side; margin-top: -250px overlaps hero
4. **FoodMenu** — Subtitle "Popular Menu", heading "Delicious Food Menu", 2-column grid of 6 food items (thumbnail + name + description + price)
5. **VideoSection** — Dark background image overlay, centered play button (YouTube popup icon)
6. **Testimonials** — Subtitle "Testimonials", heading "What they said", owl carousel of 6 reviews (quote text + avatar + name + 5 stars)
7. **ContactSection** — Background image, "Contact Us" heading, address, hours, reservation phone + email
8. **Footer** — Dark bg (#1c1a18): logo + phone + email + social icons, Quick Links column, Newsletter signup form, copyright with Component Dock link

## Design notes

- Font: Montserrat (body, 400) + Playfair Display (headings, 700) via Google Fonts
- Primary accent: `#d6ad86` (warm gold/bronze) — used for section subtitles, btn_1, social icons, nav links
- Hover accent: `#ffb830` (amber/orange) — button hover state
- Headings: `#2c3033` (dark near-black), body: `#555555`, muted: `#999999`
- Footer bg: `#1c1a18` (very dark brown)
- Banner height: 1080px with background image
- Video section: 550px with background image overlay
- btn_1: `#d6ad86` bg, white text, padding 23px 60px, 14px font, 4px border-radius
- btn_3: `#000` bg, white text, padding 14px 37.5px, 15px font
- Both buttons: 0.5s transition, hover → `#ffb830`
- Food menu: 2-col grid, 140px top padding, 90px bottom padding
- About section overlaps hero by -250px margin-top
- Newsletter input border: `1px solid #fdcb9e` (warm peach)
- Social icons: Facebook + Instagram, gold `#d6ad86` color
- Review stars: `#ffb830` (amber)
- Section subtitle color: `#d6ad86` (gold)
- Mobile (<768px): hamburger nav, stacked columns, single-col food grid
- Original uses owl.carousel for testimonials — React implementation uses CSS scroll-snap or Swiper

## Fidelity notes (from live preview)

- Preview URL `https://preview.colorlib.com/theme/buri/` was reachable at prep time
- HTML structure parsed directly from preview DOM
- CSS tokens extracted from `css/style.css` on the preview server
- Banner uses `background-image: url(../img/banner_bg.png)` — replace with picsum.photos
- Video section uses `background-image: url(../img/intro_video_bg.png)` — replace with gradient or dark placeholder
- Contact section uses `background-image: url(../img/contact_bg.png)` — replace with picsum.photos
- Food item images use `img/food_menu/single_food_*.png` — replace with picsum.photos
- Client avatars use `img/client/client_*.png` — replace with picsum.photos
- About image uses `img/about.png` — replace with picsum.photos
- Logo uses `img/logo.png` — replace with text-based logo or SVG
- Original uses jQuery + Bootstrap JS for carousel and dropdowns — React will use state management
- Footer copyright links to Colorlib — MUST be replaced with Component Dock link

## Tasks

- [ ] Copy simplest existing app as scaffold
- [ ] Rename package to `@free-react-templates/grove`
- [ ] Set up `public/CNAME` (`grove.free.componentdock.com`) and `homepage` in package.json
- [ ] Set up Google Fonts (Montserrat + Playfair Display) in index.html
- [ ] Implement Navbar (logo, nav links, hamburger for mobile, social icons)
- [ ] Implement HeroBanner (full-width bg image, subtitle, heading, CTA button)
- [ ] Implement AboutSection (subtitle, heading, paragraphs, button, image; -250px overlap)
- [ ] Implement FoodMenu (2-column grid, 6 items with images, names, descriptions, prices)
- [ ] Implement VideoSection (dark bg overlay, centered play button)
- [ ] Implement Testimonials (subtitle, heading, carousel of 6 reviews with avatars + stars)
- [ ] Implement ContactSection (bg image, heading, address, hours, phone, email)
- [ ] Implement Footer (dark bg, logo/phone/email/social, quick links, newsletter form, copyright)
- [ ] Add responsive layout (mobile hamburger, stacked columns, single-col menu)
- [ ] Add hover transitions (0.5s on all buttons, gold → amber)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh grove`
