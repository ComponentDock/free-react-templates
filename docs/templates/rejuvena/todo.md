# Rejuvena — Implementation Todo & Design Notes

## Template Identity

- **New name:** Rejuvena
- **ColorLib source:** Aesthetic (slug: `aesthetic`)
- **Preview URL:** https://preview.colorlib.com/theme/aesthetic/
- **Source URL:** https://colorlib.com/wp/template/aesthetic/
- **Category:** Medical / Aesthetic

## Section Order (top to bottom)

1. Header (sticky nav — logo left, 6 nav links center, appointment button + dark-mode toggle right, hamburger mobile)
2. Hero Section (full-width background image, left-aligned text, teal subheading, dark heading, CTA button)
3. Consultation Section (2-col: booking form card left | welcome text + video thumbnail right)
4. Choose Us Section (4 feature items in a row with icons, centered title)
5. Services Section (dark bg image, 4 service cards in 2x2 grid, teal hover)
6. Team Section (3 doctor cards with circular photos and social links)
7. Gallery (4-column masonry grid of 7 images, teal hover overlay + lightbox)
8. Latest News (3 blog entry cards with title, author, date)
9. Footer (dark bg: logo + newsletter + social row, 4 link columns, Google Maps, copyright bar)
10. Appointment Modal (form with fields, triggered by header CTA)

## Design Token Reference

| Token            | Value                                     |
| ---------------- | ----------------------------------------- |
| Brand primary    | `#13a2b7` (teal)                          |
| Brand hover      | `#0e7989` (darker teal)                   |
| Text primary     | `#111111`                                 |
| Text body        | `#444444` / `#666666`                    |
| Background light | `#ffffff`                                 |
| Background dark  | `#121c1d` (footer)                        |
| Background off   | `#f2f7f8`                                 |
| Border subtle    | `#f2f2f2`                                 |
| Font             | Poppins (all weights)                     |
| Icon set         | FA 7 (solid/brands) + Flaticon           |
| Button radius    | 5px                                       |
| Card radius      | 5px                                       |
| Team photo       | 270px circle, 10px white border           |
| Gallery item     | 338px height (normal), 696px (large)      |
| Gallery overlay  | `rgba(19, 161, 183, 0.5)`                |
| Newsletter input | 50px height, 50px border-radius           |
| Social icon      | 50px circle, `rgba(255,255,255,0.1)` bg  |
| Section padding  | 100px top/bottom (spad)                   |

## Section-by-Section Fidelity Notes

### Header / Navbar
- Sticky navbar with logo "Aesthetic" on the left (use text logo with placeholder icon)
- 6 nav links: Home, Pages, Doctor, Services, Blog, Contact
- "Pages" may have a dropdown in the original
- "Appointment" button with teal (#13a2b7) bg on the right
- Dark-mode toggle (moon icon) next to the button
- Hamburger menu on mobile (canvas__open class)
- Off-canvas mobile menu with logo, contact info, social links

### Hero Section
- Full-width section with background image (use picsum.photos/seed/rejuvena-hero/1920x800)
- `.spad` padding (100px top/bottom)
- Left-aligned text block (col-lg-6)
- Uppercase teal (#13a2b7) subheading: "Eiusmod tempor incididunt" (Poppins 500, 15px)
- Large dark (#111111) heading: "Take the world's best quality Treatment" (Poppins 700, 48px, line-height 60px)
- Teal "Contact us" button with normal-btn style (teal bg, white text, 5px radius)

### Consultation Section
- 2-column layout inside a container
- **Left column (col-lg-4):** White card with box-shadow, 50px padding
  - Section title: "REQUEST FOR YOUR" (uppercase teal span) + "Consultation" (h2)
  - Form: Name input, Email input, Date input with calendar icon, Type of service dropdown, "Book appointment" button
  - Inputs: 50px height, 5px radius, `#f2f2f2` border, `#666666` placeholder color
- **Right column (col-lg-8):** Welcome text area
  - Subheading: "Welcome to Aesthetic" (uppercase teal)
  - Heading: "Find Best Doctors With AESTHETIC" (bold part in teal #13a2b7)
  - Body text: 30 years experience paragraph
  - Video thumbnail: background image with teal (#13a2b7) circular play button (50px)
  - Bottom border divider (`#f2f2f2`)

### Choose Us Section
- White background, `.spad` padding (100px)
- Centered section title: "Why choose us?" (uppercase span) + "Offer for you" (h2)
- 4 items in a row (col-lg-3 each)
- Each: icon image, h5 title (20px, #111111, 600 weight), short paragraph
- Items: Advanced equipment, Qualified doctors, Certified services, Emergency care
- Use lucide-react icons (Activity, Stethoscope, ShieldCheck, Siren or similar)

### Services Section
- Dark background image (use picsum.photos/seed/rejuvena-services/1920x600)
- `.spad` padding
- Left title: "Our services" (uppercase teal span) + "Offer for you" (h2 in white)
- Right-aligned teal "Contact us" button
- 4 service cards in 2x2 grid (col-lg-6 each)
- Each card: white bg, 5px radius, 30px padding, left-floating teal icon (40px, 70px with Flaticon-style icon), title (h5, 20px), description
- On hover: card bg turns teal (#13a2b7), text turns white, icon turns white
- Service names: Body procedures, Facial Procedures, Breast procedures, Skin care & Beauty
- Use lucide-react icons (Heart, Sparkles, Activity, Flower2 or similar)

### Team Section
- White background, `.spad` padding
- Centered title: "Our Team" (uppercase span) + "Our Expert Doctors" (h2)
- 3 team cards in a row (col-lg-4 each)
- Each: circular photo (270px, 10px white border, box-shadow), name (h5), specialty "Plastic surgeon" (teal #0e7989 text), 4 social icon links (Facebook, Twitter, Instagram, LinkedIn)
- Use picsum.photos/seed/rejuvena-team-{1-3}/270x270
- On hover: photo border turns teal (#13a2b7)

### Gallery Section
- No padding (full-width)
- 4-column masonry-like layout using float/grid
- 7 items: 6 regular (338px height), 1 large (696px height, 4th position)
- Each: background image, teal overlay (rgba(19, 161, 183, 0.5)) on hover
- Magnifying glass icon appears on hover (white, 30px, opacity 0→1)
- Click opens lightbox (use a React lightbox library or simple modal)
- Use picsum.photos/seed/rejuvena-gallery-{1-7}/400x338 (and 400x696 for the large one)

### Latest News Section
- White background, `.spad` padding
- Left title: "Our News" (uppercase span) + "Skin care tips" (h2)
- Right-aligned "View all news" teal button
- 3 blog cards in a row (col-lg-4 each)
- Each: white card with box-shadow, 30px padding, title (h5 with link), short excerpt, meta list (author avatar 30px circle + name, date)
- Title links darken on hover with underline
- Blog titles: "Here's how you can get a natural glow this party season", "Get better skin with these top 10 tips for skin care", "8 Ways to Save Your Skin if You Exercise Outside This Winter"
- Use picsum.photos/seed/rejuvena-blog-author/30x30 for author avatars

### Footer
- Dark background (#121c1d), 40px top padding
- **Footer top row:** container with 3 columns
  - Logo image (col-lg-4): use text logo "Rejuvena" styled like original
  - Newsletter form (col-lg-4): email input (transparent bg, teal #13a2b7 border, 50px height, 50px radius, white placeholder text) + "Subscribe" button (teal bg, 0 50px 50px 0 radius)
  - Social icons (col-lg-4): 4 circles (50px, rgba(255,255,255,0.1) bg, white text, 50% radius)
- Border divider: `1px solid rgba(255,255,255,0.1)`
- **Footer widgets:** 4 columns
  - Company (col-lg-2): About Us, Departments, Find a Doctor, FAQ, News
  - Quick links (col-lg-2): Facial Fillers, Breast Surgery, Body Lifts, Face & Neck, Fat Reduction
  - Contact Us (col-lg-4): address + phone + email with FA icons
  - Map (col-lg-4): Google Maps iframe (or placeholder)
- Widget titles: white, 20px, 600 weight
- Widget links: `#c4c4c4`, 14px, 300 weight
- **Copyright bar:** bottom border `rgba(255,255,255,0.1)`, left: copyright text, right: All Rights Reserved | Terms & Use | Privacy Policy
- Footer MUST link to https://www.componentdock.com/

### Appointment Modal
- Bootstrap modal triggered by header "Appointment" button
- Title: "Book an Appointment"
- Form fields: Name, Email, Date (with flatpickr or native date), Phone, Service (dropdown), Doctor (dropdown), Notes (textarea)
- Checkbox: "I agree to the Privacy Policy terms"
- Submit button
- Close with X button or clicking outside

## Notes for Implementer

- The original uses `data-setbg` JS to set background images — in React, use inline `style={{ backgroundImage: ... }}` or Tailwind `bg-[url(...)]`
- The gallery uses CSS float for masonry — in React, use CSS grid with `grid-template-rows` or a simple flex layout
- The consultation form's custom select wrapper needs a custom dropdown component or native select
- The video thumbnail uses GLightbox — in React, use a simple modal or react-player
- The appointment modal uses Bootstrap JS — implement as a React controlled modal
- The dark-mode toggle needs a React context or state to toggle `.dark` class on `<html>`
- Footer social icons use Font Awesome brands — replace with lucide-react equivalents
- All placeholder images should use deterministic picsum.photos URLs with seed based on "rejuvena"
