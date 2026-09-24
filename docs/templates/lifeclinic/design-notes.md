# LifeClinic — Design Notes & Implementation Guide

Source: ColorLib **Medilife** (https://colorlib.com/wp/template/medilife/)
Preview: https://preview.colorlib.com/theme/medilife/
New name: `lifeclinic`

## Section Order (from live preview DOM)

1. **TopBar** — Dark navy (#081f3e) bar, welcome text + opening hours + phone
2. **Navbar** — Semi-transparent blue overlay, logo left, nav links right, red CTA button
3. **Hero** — Owl-carousel with background images, heading + paragraph + "Discover" CTA per slide
4. **Appointment Form** — Dark navy left panel with form (speciality/doctor dropdowns), contact info right
5. **About Us** — "We always put our patients first" heading + 4 service icons in 2x2 grid
6. **Cool Facts** — 4 stat counters in a row (5632 Blood donations, 23k Patients, 25 Specialities, 723 Doctors)
7. **Gallery** — Owl-carousel of gallery images with "See More +" overlay button
8. **Features** — Two-column: left image thumbnail, right heading + text + "View the services" link
9. **Blog** — "Latest News" heading, 3-column grid of blog cards with date overlay + comments count
10. **Emergency Helpline** — Full-width blue (#006cff) banner, phone number + 4 location cards (London, New Castle, Manchester, Bristol)
11. **Footer** — Dark navy (#020f20), 4-column: logo/social, latest news, contact form, newsletter

## Section-by-Section Fidelity Notes

### TopBar
- Dark navy bg (`#081f3e`), light gray text (`#b5b5b5`)
- "Welcome to **LifeClinic** template" — "LifeClinic" span in blue (`#006cff`)
- Right side: "Opening Hours : Monday to Saturday - 8am to 10pm Contact : **+12-823-611-8721**"
- Phone number also in blue (`#006cff`)
- Font size: 12-13px
- Height: 45px

### Navbar
- Default: semi-transparent blue `rgba(0,108,255,0.5)` background, height 110px
- Logo image on left
- Nav links: Home, Pages (dropdown), About Us, Services, News, Contact — ml-auto (right-aligned)
- CTA button: "For emergencies Click here" — red bg (`#ff0000`), white text, uppercase, 50px height
  - Hover: blue bg (`#006cff`) + white text
- Sticky: dark navy bg (`#081f3e`), height 80px, box-shadow
- Mobile: hamburger toggle at 999px breakpoint

### Hero
- Owl-carousel with 3 slides (all same content in demo)
- Each slide: background image with overlay
- Heading: "Medical Services that You can Trust 100%" (large, white)
- Paragraph: descriptive lorem text
- CTA link: "Discover" (underlined)
- Navigation arrows: dark navy boxes (`#081f3e`), 70x70px, centered vertically
  - Hover: blue (`#006cff`)
- Indicator dots at bottom, active dot is blue (`#006cff`)

### Appointment Form
- Split layout: dark navy left (`#081f3e`), white right
- Left panel: form with padding 60px 50px
  - Heading + subtext
  - Dropdowns: Speciality (5 options), Doctors (5 options)
  - Submit button: "Make an Appointment" in blue (`#006cff`)
- Right panel: contact info
  - Hours: "Mon - Sat 08:00 - 21:00", "Sunday CLOSED"
  - Phone: `0080 673 729 766`
  - Email: `contact@business.com`
  - Address: `Lamas Str, no 14-18, 41770 Miami`
  - "We always put our patients first" text + "View the services" link
- Form input borders: 2px solid `#536174`, transparent bg

### About Us
- White bg with section padding (100px top, 20px bottom)
- Left text area: "We always put our patients first" heading
  - Paragraph + "View the services +" link
- Right side: 2x2 grid of service items
  - Each: icon (colored) + title + paragraph
  - Services: The Best Doctors, Baby Nursery, Laboratory, Emergency Room

### Cool Facts
- Light bg (`#f5f7f9`)
- 4-column layout, each with large number + label + short text
- Stats: 5632 Blood donations, 23k Patients, 25 Specialities, 723 Doctors
- Numbers are large/prominent

### Gallery
- Owl-carousel of gallery images
- "See More +" button overlay
- Likely fullscreen or near-fullscreen image cards

### Features
- Two-column layout with padding
- Left column: thumbnail image
- Right column: "A new way to treat patients in a revolutionary facility" heading
  - Paragraphs + "View the services +" link

### Blog
- Light bg, section padding
- "Latest News" heading
- 3-column grid, 3 blog cards
- Each card: thumbnail image with date overlay (day number + month abbreviation)
  - Title, excerpt, "3 Comments" link, author info
- Blog post titles: "New drug release soon", "Free dental care", "Good news for the patients"

### Emergency Helpline
- Full-width blue bg (`#006cff`)
- "For Emergency calls" heading with phone icon
- Phone number: `+12-823-611-8721` (large, white)
- 4 location cards in a row: London, New Castle, Manchester, Bristol
  - Each: phone icon, phone number, email, address
  - All white text on blue bg

### Footer
- Dark navy bg (`#020f20`)
- 4 widget columns:
  1. Logo + social icons (4 links)
  2. "Latest News" — 3 blog post previews with thumbnail + title + date
  3. "Contact Form" — name/email/subject/message fields + submit
  4. "News Letter" — email input + subscribe button
- Bottom bar: copyright text ("All rights reserved | This template is made with by Colorlib")
  - Replace attribution with Component Dock link

## Key Implementation Notes

- **Carousel:** Use a React carousel library (e.g., Swiper) to replace Owl Carousel
- **Form:** Controlled inputs with TypeScript types for speciality/doctor dropdowns
- **Sticky header:** Intersection Observer or scroll event for navbar sticky transition
- **Counter animation:** Consider animated counters for the Cool Facts section
- **No ColorLib references:** Replace all ColorLib attribution with Component Dock in footer
- **Font:** Load Roboto from Google Fonts
- **Icons:** Use lucide-react for phone, email, map, calendar icons
