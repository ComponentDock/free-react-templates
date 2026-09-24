# MedPulse — Implementation Tasks & Design Notes

## Structure (component order)

1. `TopBar.tsx` — email, social icons, Book An Appointment pill button
2. `Header.tsx` — logo + phone + location row
3. `Navbar.tsx` — blue bg, green diagonal accent, uppercase nav links, mobile toggle
4. `Hero.tsx` — full-width bg image, dark overlay, headline, inline appointment form
5. `WelcomeServices.tsx` — bg-light, heading + 4 service cards (2-col grid) + appointment form panel
6. `AboutCounter.tsx` — 2-col: left image, right text + 2 CTA buttons
7. `IntroBanner.tsx` — parallax bg, blue overlay, right-aligned heading + white CTA
8. `Departments.tsx` — tabbed nav (left pills) + content panels with bg images
9. `Doctors.tsx` — 4 doctor cards in row: photo, name, specialty, social icons
10. `FactsStats.tsx` — parallax bg, green overlay, 4 counter stats
11. `Blog.tsx` — 3 blog cards: image, date, title, excerpt, read more
12. `Testimonials.tsx` — parallax bg, blue overlay, carousel with avatar + quote + stars
13. `Footer.tsx` — 5 columns (brand, departments, links, services, contact), newsletter, bottom bar with Component Dock link

## Design fidelity notes

### TopBar
- Background: `rgba(0,0,0,0.05)`, text color `#999999`
- Social icons: 35×35px white circles with `#299ADC` icon color
- "Book An Appointment" button: green `#3BC053`, pill-shaped (`border-radius: 50px`)

### Header
- 3-column layout: logo (col-4), phone (col-4), location (col-4)
- Logo uses flaticon health icon + bold text
- Phone/location text is 12px, light weight; labels in brand blue

### Navbar
- Background: `#299ADC` solid
- Green diagonal stripe accent via `::after` pseudo-element using CSS transform
- Nav links: white, 14px, uppercase, letter-spacing 2px, font-weight 500
- Active link: white background with brand blue text
- Mobile: hamburger toggles vertical menu

### Hero
- Background image with `opacity: 0.15` black overlay
- Height: 700px
- Headline: 60px, white, font-weight 700 (40px on mobile)
- Subtext: white at 80% opacity
- Appointment form: pill-shaped container (50px radius), white background, shadow `0px 24px 36px -11px rgba(0,0,0,0.09)`
- Green "Book Appointment" button: `#3BC053`, pill-shaped, hover transitions to brand blue

### Welcome/Services
- Background: `#F8F9FA` (light)
- Service icons: 80×80px white boxes with `#299ADC` icons (50px font)
- Service card title: 20px, font-weight 500, Roboto
- Appointment form: white background, inputs 54px height, border `rgba(0,0,0,0.1)`
- Form heading: 16px, uppercase, letter-spacing 3px, brand blue
- Submit button: green `#3BC053`

### About/Counter
- Left: full-height background image
- Right: description text + 2 CTA buttons
- Primary button: blue `#299ADC`
- Secondary button: green `#3BC053`, hover → transparent with green text
- Buttons: square corners (0px radius), shadow `0px 24px 36px -11px rgba(0,0,0,0.09)`

### Intro Banner
- Parallax background with blue overlay (`#299ADC` at 80% opacity)
- Heading: 40px, white, font-weight 800
- White pill button: white bg, black text, hover → black bg white text

### Departments
- Tab pills: left column, vertical, flaticon icons + labels
- Active tab: highlighted
- Content panels: background image with department details
- Tab content: service descriptions with bullet lists

### Doctors
- 4 cards in row
- Photo: full-width within card
- Name: centered, bold
- Specialty: centered, lighter text
- Social icons: small circular buttons (Twitter, Facebook, Google, Instagram)

### Facts/Stats
- Parallax background with green overlay (`#3BC053` at 80% opacity)
- 4 stat counters with numbers + labels
- White text

### Blog
- 3 cards in row
- Featured image at top
- Date stamp
- Title (h3)
- Short excerpt
- "Read more" link in brand blue

### Testimonials
- Parallax background with blue overlay (`#299ADC` at 80% opacity)
- Carousel/slider with avatar, name, quote text, star rating (Font Awesome stars)
- White text

### Footer
- Dark background
- 5 columns: brand + social, Departments list, Links list, Services list, Contact (address, phone, email)
- Newsletter: email input + submit button
- Bottom bar: copyright + "Made with Component Dock"

## Placeholder images

Use `https://picsum.photos/seed/medpulse-<n>/<w>/<h>` for:
- Hero bg: `medpulse-hero/1920/700`
- About image: `medpulse-about/600/400`
- Intro bg: `medpulse-intro/1920/400`
- Department tabs: `medpulse-dept-<n>/400/300`
- Doctor photos: `medpulse-doc-<n>/400/400`
- Facts bg: `medpulse-facts/1920/400`
- Blog images: `medpulse-blog-<n>/400/250`
- Testimonial bg: `medpulse-testi/1920/400`
