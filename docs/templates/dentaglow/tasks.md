# Dentaglow — Implementation Tasks & Design Notes

## Source mapping
- **ColorLib slug:** dento
- **Preview URL:** https://preview.colorlib.com/theme/dento/
- **New name:** dentaglow
- **Category:** Dental Clinic

## Section order (1:1 fidelity)

1. **Header** — Sticky white header
   - Top bar: address + email + social icons (Facebook, Twitter, LinkedIn, Pinterest)
   - Main nav: logo "Dentaglow", links (Home, About, Service, Pricing, Blog, Contact), dark mode toggle, "Booking Now" CTA button
   - Mobile: hamburger menu with dropdown support
   - Font: Montserrat, nav links uppercase

2. **Hero / Welcome Slider** — Full-width image slider
   - Background images with dark gradient overlay (`bg-gradient-overlay`)
   - Heading: "We Believe Everyone Should Have Easy Access To Great Dental Care"
   - Subtext about dental opportunities
   - Two CTA buttons: "Get Started" (teal primary) + "Contact Us" (white outline)
   - Swiper.js carousel with dots/arrows

3. **About Us** — White background, section-padding-100-0
   - Heading: "About Us"
   - 3 skill bars with percentage animation: Experience Dentist, Modern Equipment, Friendly Staff
   - 4 stat counters: 20 Years, 700+ Patients, 120 Certificate, 40+ Awards
   - Use barfiller animation or similar

4. **CTA** — Teal background section
   - Heading with description text
   - Two buttons (primary + secondary)
   - Short section, transition element

5. **Services** — Dark overlay background (`bg-img bg-gradient-overlay jarallax`)
   - Heading: "Our Services" (white text)
   - 6 service cards with icon + title: Teeth Whitening, Missing Teeth, Cosmetic Dentistry, Examination, Teeth Pain, plus one more
   - Video play button area below cards (`dento-video-area`)

6. **Pricing Table** — White background, section-padding-100
   - Heading: "Pricing" (centered)
   - Responsive table with columns: Service Names, Stage, Price
   - 10 rows: Teeth Whitening at home ($115), at clinic ($100), Ceramic crowns ($99), Remove crowns ($50), Gum recession ($400), Consultation ($35), Remove old inlay ($99), Overlay whitening ($170), Porcelain crown ($499), Implant ($600)
   - "Read More" button

7. **Appointment / Booking** — Dark overlay background (`bg-img bg-gradient-overlay jarallax`)
   - Heading: "Book an Appointment" (centered, white)
   - Form fields: patient name, phone, email, date of birth, appointment date, message
   - Form styling: transparent bg (`rgba(0,0,0,0.3)`), white text, italic, no border
   - Submit/confirm button

8. **Dentist Team** — White background, section-padding-100-0
   - Heading: "Our Dentist" (centered)
   - 3 dentist cards in row
   - Each: photo (full-width), name, specialty ("Implant Expert")
   - Hover: social links appear (white circles with teal icons)
   - Overlay: `dentist-info bg-gradient-overlay` at bottom

9. **Testimonials** — Dark overlay background (`bg-img bg-gradient-overlay jarallax`)
   - Carousel/swiper with testimonial slides
   - Each: avatar, quote text
   - Navigation arrows (hidden, appear on hover)

10. **Blog** — White background, section-padding-100-0
    - Heading: "Blog" (centered)
    - 3 blog cards in row
    - Each: image, date badge, title, excerpt text, comments count
    - "Read More" link

11. **Footer** — Dark overlay background (`bg-img bg-gradient-overlay`)
    - 4 columns:
      - Contact info (address, phone, email)
      - Opening hours (Mon-Wed 8-18, Thu-Fri 8-17, Sat 9-17, Sun 10-17, Holiday Closed)
      - Quick links (About, FAQs, Contact, Policy, News, Advisors, Careers, Dentist, Services, Legals)
      - Newsletter form (email input + submit)
    - Social icons row
    - Copyright bar with "Component Dock" link

## Design tokens (for Tailwind @theme)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#0891b2` | Buttons, accents, links, icons |
| `--color-primary-hover` | `#0e7490` | Button hover, active states |
| `--color-secondary` | `#0f766e` | Secondary accents |
| `--color-dark` | `#1e293b` | Section overlays, dark backgrounds |
| `--color-darker` | `#0f172a` | Footer, deepest dark |
| `--color-light` | `#f8f9fa` | Body bg, light section bg |
| `--color-heading` | `#212529` | Headings |
| `--color-body` | `#576a7d` | Body text |
| `--font-family` | `Montserrat` | All text (Google Fonts, weights 300-700) |
| `--btn-radius` | `0.5rem` | Button border-radius |
| `--btn-min-width` | `170px` | Button minimum width |
| `--section-padding` | `100px` | Top/bottom section spacing |

## Component checklist

- [ ] Navbar (responsive, sticky, dark mode toggle, booking button)
- [ ] HeroSlider (Swiper, bg images, overlay, CTAs)
- [ ] AboutUs (skill bars, stat counters)
- [ ] CTASection (teal bg, heading, buttons)
- [ ] Services (6 cards, video area)
- [ ] PricingTable (responsive table, 10 rows)
- [ ] AppointmentForm (transparent fields, booking form)
- [ ] DentistTeam (3 cards, hover social)
- [ ] Testimonials (carousel, avatars)
- [ ] Blog (3 cards, date badges)
- [ ] Footer (4 columns, hours, newsletter, social, copyright)
