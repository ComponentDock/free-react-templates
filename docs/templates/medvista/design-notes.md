# Medvista — Design Notes & Implementation Guide

Source: ColorLib **Mediplus** (https://colorlib.com/wp/template/mediplus/)
Preview: https://preview.colorlib.com/theme/mediplus/
New name: `medvista`

## Section Order (from live preview DOM)

1. **TopBar** — Black bar, phone + email + Sign Up/Sign In links
2. **Navbar** — Dark sticky nav, brand left, links right, "Appointment" CTA button
3. **Hero** — Full-height (700px) background image, dark overlay, left-aligned text: subheading + h1 + paragraph + CTA button
4. **About** — Two-column: left image, right heading + text + 2 buttons (primary + secondary)
5. **Services** — Light bg, two-column: left 2x2 service cards with icons + right "Free Consultation" form
6. **CTA Banner** — Full-width parallax bg, dark overlay, centered white heading + text + white outline button
7. **Departments** — Full-width, asymmetric: left tall image (1/3) + right 3x3 department card grid (2/3)
8. **Doctors** — 4-column doctor cards: photo, name, specialty (uppercase blue), description, social links, "Book now" button
9. **Blog** — Light bg, 3x2 blog cards: image, meta, title, excerpt, "Read more" button
10. **Testimonials** — Full-width parallax bg, dark overlay, carousel of testimonial cards
11. **Contact** — Heading + 4 info boxes + contact form + Google Map embed
12. **Footer** — Full-width parallax bg, dark overlay, multi-column widgets, social links, copyright + Component Dock link

## Section-by-Section Fidelity Notes

### TopBar
- Black bg (`#000`), white text, absolute positioned over hero
- Phone icon (lucide: Phone), email icon (lucide: Send)
- Sign Up / Sign In links on right
- Hidden on mobile (<992px)

### Navbar
- Brand: "Medvista" (replace "Mediplus")
- Nav links: Home, About, Department, Doctors, Blog, Contact
- CTA button "Appointment" — coral (#fe5f55) border, white text, hover → blue (#207dff) bg
- Becomes sticky dark (#000) on scroll
- Mobile: hamburger toggle, vertical nav

### Hero
- Full-height bg image with dark overlay
- Subheading: "Welcome to Medvista" (uppercase, 12px, letter-spacing: 2px)
- Heading: "We are here for your Care" (large, white)
- Paragraph: descriptive text
- Button: "Make an appointment" (primary: #007bff)
- Text left-aligned in left half (col-md-6)

### About
- Left col: background image (use picsum)
- Right col: heading "We Are Medvista A Medical Clinic" (span brand color)
- Two paragraphs
- Two buttons side by side: "Make an appointment" (primary) + "Contact us" (secondary)

### Services
- Light bg (#f8f9fa)
- Left side (col-md-7): heading "Our Services" + 2x2 grid
- Each service: coral (#fe5f55) lucide icon + h3 title + paragraph
- Services: Emergency Services, Qualified Doctors, Outdoors Checkup, 24 Hours Service
- Right side (col-md-5): white card "Free Consultation" form
- Form fields: First Name, Last Name, Service select, Phone, Date, Time, Message
- Submit: "Appointment" button (secondary)

### CTA Banner
- Full-width parallax bg image with dark overlay
- Heading: "Your Health is Our Priority" (50px, 800 weight, white)
- Paragraph below
- Button: "Search Places" (white bg, white border, black text; hover → black border, white text)

### Departments
- Full-width container-fluid, no gutters
- Left (col-md-4): tall background image
- Right (col-md-8): 3-col grid, 3 rows = 9 department cards
- Each card: blue (#207dff) stethoscope icon + h3 department name + short description
- Departments: Neurology, Surgical, Dental, Ophthalmology, Cardiology, Traumatology, Nuclear Magnetic, X-ray, Cardiology (2nd)
- Hover: bg → #207dff, text/icon → white
- Cards separated by subtle border (1px rgba(0,0,0,0.1))

### Doctors
- Container-fluid with px-5
- Centered heading + subtitle
- 4-column grid (col-md-6 col-lg-3)
- Each card: photo (300px height), name (24px, 500 weight), specialty (uppercase, blue, letter-spacing 3px), faded description, social links, "Book now" button
- Social: Twitter, Facebook, Google+, Instagram (use lucide equivalents)
- Hover: image overlay transitions, description area reveals

### Blog
- Light bg (#f8f9fa)
- Heading: "Gets Every Single Updates Here"
- 3-column, 2 rows = 6 cards
- Each: image, meta row (date, author, comment count), h3 title, paragraph, "Read more" button
- Image hover: scale transition

### Testimonials
- Full-width parallax bg with dark overlay
- Subheading: "Read testimonials"
- Heading: "Our Patient Says"
- Carousel (use simple CSS scroll or basic carousel, no owl-carousel dependency)
- Each card: circular user photo, quote icon, testimonial text, name, role

### Contact
- Heading: "Contact Us"
- 4 info boxes (col-md-6 col-lg-3): map-marker + address, phone + number, email + address, globe + website
- Each box: light bg (#f8f9fa), centered icon + text
- Contact form: bg-light, fields: Name, Email, Subject, Message
- Submit: "Send Message" button
- Full-width Google Map embed below

### Footer
- Full-width parallax bg with dark overlay
- Multiple widget columns with headings
- Social links list (Twitter, Facebook, Google+, Instagram)
- Copyright line
- Footer MUST link https://www.componentdock.com/ ("Component Dock")

## Asset Mapping

| Original | React replacement |
| --- | --- |
| images/bg_3.jpg (hero) | `https://picsum.photos/seed/medvista-hero/1920/700` |
| images/about.jpg | `https://picsum.photos/seed/medvista-about/600/400` |
| images/bg_2.jpg (CTA) | `https://picsum.photos/seed/medvista-cta/1920/600` |
| images/dept-1.jpg | `https://picsum.photos/seed/medvista-dept/600/900` |
| images/doc-1.jpg through doc-4.jpg | `https://picsum.photos/seed/medvista-doc-N/400/300` |
| images/image_1.jpg through image_6.jpg | `https://picsum.photos/seed/medvista-blog-N/400/250` |
| images/person_1.jpg through person_3.jpg | `https://picsum.photos/seed/medvista-testi-N/200/200` |
| images/footer-bg.jpg | `https://picsum.photos/seed/medvista-footer/1920/400` |
| flaticon-* icons | lucide-react equivalents (Ambulance, Stethoscope, Clock, HeartPulse, etc.) |
| Font: Poppins | Google Fonts `<link>` in index.html |
| Bootstrap 4 | Tailwind CSS 4 (utility classes) |
| Owl Carousel | Simple CSS scroll-snap or minimal carousel component |
