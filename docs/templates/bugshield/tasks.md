# BugShield — Implementation Tasks

Template: BugShield (ColorLib PestControl)
Source: https://colorlib.com/wp/template/pestcontrol/
Preview: https://preview.colorlib.com/theme/pestcontrol/
New name: bugshield
App folder: apps/bugshield

## Section-by-section implementation order

### 1. Scaffold & theme
- [ ] Copy simplest existing app as base, rename package to `@free-react-templates/bugshield`
- [ ] Set up `index.css` with `@theme` tokens: `--color-brand: #d7553b`, `--color-brand-secondary: #1c6ab8`
- [ ] Link Lato font in `index.html` (Google Fonts)
- [ ] Create `vite.config.ts` with `injectUiSource()` helper

### 2. Header / Navbar
- [ ] Top bar: address, hours, phone, social icons (facebook, twitter, instagram, linkedin)
- [ ] Main header: logo, nav links (Home, Services, Pages, Blog, Contact), search icon, "Appointment" pill button
- [ ] Pages dropdown (About, Services Details, Blog Details)
- [ ] Mobile offcanvas menu with logo, nav, address, phone, social icons, Appointment button

### 3. Hero Slider
- [ ] Full-width background image slider (owl-carousel style → CSS carousel or Swiper)
- [ ] Slide content: "Pest Control" label (#d7553b), h2 "Keep your House clean & Safe", p "Trusted. Experienced. Dedicated.", "Learn More" button (#1c6ab8)
- [ ] Dark overlay on slides
- [ ] Navigation dots/arrows

### 4. Appointment Form
- [ ] White box overlapping hero, heading "Ready To Appointment"
- [ ] Service dropdown (Choose Services, Ant, Spider)
- [ ] Inputs: Your Name, Your Phone, Email Address
- [ ] "Appointment" submit button

### 5. About Section
- [ ] Two-column layout: text left, images right
- [ ] Heading: "Welcome to the Pest Control Services Company"
- [ ] "How Does It Work?" blurb + "Services We Offers" list (4 items with bug icons)
- [ ] "About Us" button
- [ ] Image collage: 1 large + 2 small picsum placeholders

### 6. Services Section
- [ ] Centered section title "Our Services" + subtitle
- [ ] 4x2 grid of service cards (8 total)
- [ ] Each card: icon, pest name, description
- [ ] Card styling: white bg, box-shadow, centered content

### 7. Choose Us Section
- [ ] Three-column layout: text | image | features
- [ ] Heading: "Why People Choose Pest Control"
- [ ] Description + "Read More" button
- [ ] 3 feature items with icons: Comfortable Price, Safe And Clean, Friendly Customer Service

### 8. Counter Section
- [ ] Blue background (#1c6ab8)
- [ ] 4 stat columns with icons: 50+ Years, 1254+ Clients, 2000+ Customers, 42+ Awards
- [ ] Animated number count-up

### 9. Testimonials Section
- [ ] Heading "Testimonials" left-aligned
- [ ] Rating widget: 4.7 stars, "3000 Rating"
- [ ] Carousel of testimonial quotes with author names

### 10. Call To Action
- [ ] Full-width background image with dark overlay
- [ ] Text: "Have Any Question?" + "Call Us: (+800) 1234 56781" + description
- [ ] Right-side image of person

### 11. Latest Blog Posts
- [ ] Section title "Latest Blog Post" + subtitle
- [ ] 1 large featured post (image, date, heading, excerpt, "Read More")
- [ ] 3 small posts (image, date, title, excerpt) in right column

### 12. Footer
- [ ] Dark bg (#222222), 4 columns
- [ ] Col 1: logo, description, phone, "Request An Appointment" button
- [ ] Col 2: Useful Links
- [ ] Col 3: Our Services links
- [ ] Col 4: Contact Us (address, fax, email, hours)
- [ ] Copyright bar: copyright text + social icons (facebook, twitter, linkedin, pinterest)
- [ ] Footer includes ComponentDock link (mandatory)

## Design notes

### Fidelity priorities
- Match section order exactly 1:1 (12 sections from header to footer)
- Brand color #d7553b is the defining visual element — every primary button and hero label
- Secondary blue #1c6ab8 ties together hero CTA, form, counters, and ratings
- Pill-shaped buttons (border-radius 60px) are distinctive
- The overlapping appointment form over the hero is a signature layout pattern
- Services section is a dense 4x2 grid (8 items), unusual for landing pages

### Accessibility
- All form inputs need labels
- Social icons need aria-labels
- Carousel needs keyboard navigation
- Color contrast: #d7553b on white = 4.6:1 (passes AA), white on #d7553b = same
- White text on #1c6ab8 = 4.8:1 (passes AA)

### Performance
- Lazy-load below-fold images (services, blog, about images)
- Use CSS transitions for hero slider instead of heavy JS library
- Use IntersectionObserver for counter animation
