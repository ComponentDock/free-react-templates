# WellCare — Template Replication Notes

**Source:** ColorLib Medicare  
**Preview:** https://preview.colorlib.com/theme/medicare/  
**Spec:** openspec/specs/template-wellcare/spec.md

## Implementation Todo

### Phase 1: Scaffold
- [ ] Copy simplest existing app (e.g. `apps/aurora`) as base
- [ ] Rename package to `@free-react-templates/wellcare`
- [ ] Update `public/CNAME` to `wellcare.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://wellcare.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Design Tokens (index.css)
- [ ] Set `@theme` block with brand colors:
  - `--color-brand`: `#3c97e8`
  - `--color-accent`: `#69cb6a`
  - `--color-accent-hover`: `#7cd27d`
  - `--color-dropdown`: `#314355`
  - `--color-footer`: `#252525`
  - `--color-body`: `#666666`
- [ ] Add Google Fonts link for Poppins (weights 300, 400, 500, 600, 700) in `index.html`

### Phase 3: Components (section by section)

#### Navbar.tsx
- Top bar: logo (stethoscope icon from lucide-react + "Well" blue + "Care" green), phone info, address
- Nav bar: blue background (#3c97e8), white text links (Home, Doctors, Services, Departments, Blog, Contact)
- Green pill CTA "Make an Appointment" with calendar icon (border-radius 30px)
- Mobile: hamburger menu toggle

#### Hero.tsx
- Full-width image slider/carousel (use simple state-based slider or CSS)
- Dark overlay (`bg-black/20`)
- White text: doctor name (h1, font-weight 300), subtitle (h2), description (h2)
- Green pill CTA button "Make an Appointment"
- Dot indicators at bottom
- Use picsum.photos for slide backgrounds

#### IntroCards.tsx
- 4-column grid (2 on tablet, 1 on mobile)
- Each card: blue background (vary shades slightly), white text, large icon (lucide-react), title, description, "Read more" link
- Items: Medical Counseling, Qualified Doctors, Rehabilitation Center, Emergency Services

#### AboutSection.tsx
- 2-column layout: left image, right heading + accordion
- Accordion: 3 panels — "Why choose us?", "What we do?", "Offer Services"
- First panel expanded by default
- Panel expand/collapse with animation

#### AppointmentCta.tsx
- Centered text "Make an appointment"
- Green outlined pill button "Book an Appointment" with calendar icon

#### ServicesGrid.tsx
- "Our Services" heading centered
- 2x3 grid of 6 service items
- Each: icon (lucide-react), title, description
- Items: Qualified Doctors, Medical Counseling, Emergency Services, Blood Bank, Operation Theater, Free Medicine

#### ChooseUsSection.tsx
- Split layout: left half parallax image (use picsum.photos), right half content
- "What Makes Us Best?" heading
- 4 features in 2x2 grid: Qualified Doctors, Free Consultation, Online Enrollment, Modern Facilities
- Each feature: icon + title + description

#### DoctorsSection.tsx
- "Well Experienced Doctors" heading centered
- 4 doctor cards in a row (2 on tablet, 1 on mobile)
- Each: circular/rectangular photo (picsum.photos), name, specialty, social icons (Facebook, Twitter, LinkedIn, Instagram)
- Doctors: Dr. Beatrice Prior (Dental Hygienist), Dr. Edward Dughlas (Orthopedic Surgeon), Dr. Peter Parker (Health Care), Dr. Liza Thomas (Patient Services Manager)

#### CounterSection.tsx
- Parallax background with dark overlay
- 4 stats in a row (2 on mobile)
- Each: icon, animated number, label
- Stats: Satisfied Customer (3297), Hospitals (378), Qualified Doctor (400), Departments (30)
- Animate on scroll into viewport

#### BlogSection.tsx
- "Recent blog" heading centered
- 3 blog cards in a row
- Each: background image (picsum.photos) with date overlay (day + month), title, excerpt, "Read more" link with arrow

#### RegisterCtaSection.tsx
- Parallax background with dark overlay
- "We offer Free Consultation" heading
- "By Dr. Beatrice Prior" subheading
- Countdown timer (days, hours, minutes, seconds)
- "Limited offer, Hurry Up!" text
- Green pill "Book an Appointment" button

#### TestimonialsSection.tsx
- Light gray (whitesmoke) background
- "What our patients says" heading centered
- Carousel of testimonials
- Each: circular avatar (picsum.photos), name, quoted text, 5-star rating
- At least 3-4 testimonials

#### Footer.tsx
- Dark background (#252525)
- 4 columns: brand description, navigation links, service links, contact form
- Contact form: Name, Email, Message fields + "Send Message" green button
- Copyright line + Component Dock link (https://www.componentdock.com/)

### Phase 4: App.tsx Composition
- [ ] Assemble all sections in order: Navbar → Hero → IntroCards → About → AppointmentCta → Services → ChooseUs → Doctors → Counter → Blog → RegisterCta → Testimonials → Footer
- [ ] Verify all imports resolve

### Phase 5: Tests + Coverage
- [ ] Write tests for each component (TDD per AGENTS.md)
- [ ] Ensure 100% lines/functions/branches/statements coverage
- [ ] Run `npm run verify:app wellcare` to pass local gate

### Phase 6: Deploy
- [ ] Commit as `docs: prep WellCare (ColorLib Medicare) spec + research`
- [ ] Push to main
- [ ] (Implementer will handle: feat branch, PR, merge, Surge deploy)

## Fidelity Notes

### Layout fidelity
- Match 1:1 section order from the original
- The hero is a carousel with 4 slides (not just a static image) — keep as carousel
- The intro cards section sits directly below the hero, overlapping slightly at the top
- The About section uses Bootstrap-style accordion (convert to stateful React accordion)
- The Choose Us section uses a full-width split layout with parallax
- The Counter and Register sections use `background-attachment: fixed` for parallax

### Design fidelity
- Use pill-shaped buttons (border-radius: 30px) everywhere
- The nav bar has a specific blue (#3c97e8) that matches the intro-grid cards
- Green accent (#69cb6a) is used sparingly: logo suffix, hover states, CTA buttons, star ratings
- The accordion has a clean white-on-white style with subtle borders
- Doctor cards have social media icon rows (use lucide-react)
- The footer contact form uses transparent inputs with gray borders

### Images
- Hero slides: use `picsum.photos/seed/wellcare-slide-<n>/1920/800` (4 slides)
- About image: `picsum.photos/seed/wellcare-about/600/400`
- Choose Us parallax: `picsum.photos/seed/wellcare-features/1200/600`
- Doctor photos: `picsum.photos/seed/wellcare-doc-<n>/300/300` (4 doctors)
- Blog images: `picsum.photos/seed/wellcare-blog-<n>/400/250` (3 posts)
- Testimonial avatars: `picsum.photos/seed/wellcare-test-<n>/100/100` (3-4)
- Register parallax: `picsum.photos/seed/wellcare-register/1920/600`

### Accessibility
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `<label htmlFor>` on all form fields
- `aria-label` on icon-only controls
- `aria-expanded` on accordion triggers
- Focus-visible rings on interactive elements
- Alt text on all images (descriptive, not empty)
