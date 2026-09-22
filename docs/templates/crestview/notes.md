# Crestview — Implementation Notes

## Source
- ColorLib Radisson: https://colorlib.com/wp/template/radisson/
- Preview: https://preview.colorlib.com/theme/radisson/

## Structure Order (implement in this order)

1. **TopBar** — thin info bar with phone number + currency/language dropdowns
2. **Navbar** — sticky header, white bg, logo left, nav links center-right, hamburger mobile
3. **Hero** — full-width parallax background, dark gradient overlay, centered "Welcome to" + hotel name (120px Playfair Display), subtext, play button
4. **BookingForm** — white card overlapping hero, 4-col grid: check-in date, check-out date, total guests, coupon code + "Check Availability" button
5. **AboutSection** — centered text with decorative title, CTA button, video embed below (parallax bg + play overlay)
6. **RoomsSection** — split layout: room image left, owl-carousel right showing room cards with price, name, amenities list, "Book Now" button
7. **Testimonials** — light blue bg, quote icon, carousel with star ratings, author name, thumbnail gallery nav
8. **BlogSection** — 3-col card grid with image, category tag, date/comments meta, heading, excerpt
9. **Footer** — dark bg, 4-col: about, quick links, newsletter, instagram grid, bottom bar with copyright + socials

## Design Fidelity Notes

### Fonts
- Headings: Playfair Display (serif) — load via Google Fonts `<link>`
- Body: Roboto (sans-serif) — load via Google Fonts `<link>`
- Both are critical to the aesthetic — Playfair Display gives luxury feel, Roboto provides clean readability

### Colors
- Primary blue: #4d8eff — used for nav active, links, buttons, category tags
- Dark: #000000 — banner area overlay background
- Light bg: #f1f9ff — used for about section, testimonials, blog area
- Text dark: #222222 — headings
- Text body: #777777 — paragraphs
- Border/divider: #eeeeee — section borders, input borders

### Buttons
- Sharp rectangular (border-radius: 0px) — NOT rounded
- Primary: solid #4d8eff bg, white text
- Hover: darker shade on bg
- Some buttons are outline-style (transparent bg, border)
- "Check Availability" and "Book Now" are primary CTA

### Layout
- Bootstrap-based 12-column grid
- Sections use `section_gap` padding (vertical spacing)
- Hero is full-width with parallax scroll effect
- Booking form is a floating card (white, shadow) positioned over the hero
- Rooms: 50/50 split — image left, carousel right
- Testimonials and Blog share the same light blue (#f1f9ff) background

### Key Visual Patterns
- Decorative title treatment: small uppercase subtitle above main heading
- Video play buttons: circular with icon
- Star ratings use Font Awesome gold stars
- Testimonial thumbnails: small circular images for navigation
- Instagram feed: 8-image grid in footer
- Newsletter: inline email + submit button

## Placeholder Images
- Hero background: `https://picsum.photos/seed/crestview-hero/1920/1080`
- Room images: `https://picsum.photos/seed/crestview-room-{1-5}/600/400`
- Blog images: `https://picsum.photos/seed/crestview-blog-{1-3}/400/300`
- Video thumbnail: `https://picsum.photos/seed/crestview-video/1200/600`
- Testimonial avatars: `https://picsum.photos/seed/crestview-testi-{1-4}/100/100`
- Instagram grid: `https://picsum.photos/seed/crestview-insta-{1-8}/150/150`

## Implementation Gotchas

1. **Parallax effect**: Use CSS `background-attachment: fixed` or a lightweight JS scroll handler. Consider `framer-motion` for performance, but keep bundle small.
2. **Date inputs**: HTML5 `<input type="date">` works. No need for datepicker library.
3. **Rooms carousel**: Use the shared carousel component or build a simple swipeable card list. Avoid owl-carousel jQuery dependency.
4. **Video popup**: Use a modal/lightbox for the video play button. Consider `react-player` for YouTube embed.
5. **Sticky navbar**: Use `position: sticky` with `top: 0` + `z-index` + transition bg on scroll.
