# InnerGlow — Implementation Notes

**Source:** ColorLib Ahana (https://colorlib.com/wp/template/ahana/)
**Preview:** https://preview.colorlib.com/theme/ahana/
**New name:** innerglow

## Section order (top to bottom)

1. **Navbar** — Top info bar (address, phone, hours, language dropdown) + main nav with logo left, nav links right. Transparent overlay on hero.
2. **Hero Section** — Full-width coral-to-peach gradient background, yoga pose imagery, "YOGA" watermark text, headline + subtext + "Register now" CTA. Social icons sidebar. Slider dots on right.
3. **About Section** — Section title ("Welcome to InnerGlow"), tagline, 2-column layout: image left, 3 feature items (icon + heading + description) right. "Explore More" CTA button.
4. **Classes Section** — Section title ("Popular Classes"), carousel of class cards. Each card: image, class name, schedule, time, description, trainer avatar + name + role, "Book Now" button.
5. **Trainers Section** — Section title ("Our Trainers"), carousel of trainer profiles. Each: photo, name, role, bio text, social icons row.
6. **Testimonial Section** — Coral-to-peach gradient overlay on background image. Carousel of testimonials: avatar, quote text, name, role.
7. **Events Section** — Section title ("Upcoming Events"), 2-column: video thumbnail with play button left, 3 event items right (image, event name, host, date, location).
8. **Pricing Section** — Section title ("Pricing plans"), 4 pricing cards in a row: Beginner ($59), Intermediate ($99), Advanced ($159), Professional ($199). Each: plan name, price, "Per month", feature list, "Get Started" button (outline style).
9. **Sign-up / Contact Section** — 2-column: Google Maps embed left, contact form right (First Name, Last Name, Email, Phone, Message, "Get Started" button).
10. **Gallery Section** — Horizontal image slider, Instagram hover overlay on each image.
11. **Footer** — Dark background, 4 columns: About (logo + contact info), Company links, About Us links, Open Hours + newsletter form. Bottom bar: social icons + copyright.

## Design notes

### Colors
- Brand gradient: `#f65d5d` (coral) → `#fdb07d` (peach), angle 145deg
- Used for: hero background, review overlay, button fills, accent elements
- Button outline variant: white background with gradient border, gradient text on hover
- Body text: `#666666`, headings: `#333333`
- Section backgrounds: white (`#fff`) for most sections, gradient overlay for hero/reviews

### Typography
- Body: Open Sans (400, 400i, 600, 600i, 700, 700i)
- Headings h2/h3: Playfair Display (400, 400i, 700) — serif, elegant
- Section titles: 38px, Playfair Display, uppercase, letter-spacing
- Body text: 15px, line-height 1.8

### Button styles
- Primary: gradient fill, pill-shaped (50px radius), white text, 16px/600 weight, uppercase, letter-spacing 1px
- White variant: white bg, coral text
- Outline gradient: gradient border, gradient text, hover fills with gradient
- All have hover transitions (0.4s)

### Layout
- Max container: 1200px
- Section padding: 110px top / 105px bottom
- Bootstrap-like grid (col-lg-3/6, col-sm-6, etc.)
- Carousels for classes, trainers, testimonials (owl-carousel in original — use a React carousel library)

### Footer specifics
- 4-column grid: col-lg-3 (about), col-lg-3 (company links), col-lg-2 (about us), col-lg-4 (open times + newsletter)
- Newsletter form in footer: email input + submit button
- Social icons row in footer bottom
- Copyright line at bottom
- Must include Component Dock link: `https://www.componentdock.com/`
