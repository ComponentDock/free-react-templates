# Wrenchly — Design Notes & Implementation Outline

## Source
- ColorLib "Autorepair": https://colorlib.com/wp/template/autorepair/
- Preview: https://preview.colorlib.com/theme/autorepair/
- Category: Business (TEMPLATES.md line 900)

## Section order (must match 1:1)

1. **Top Bar** — Address (721 New York NY 10016), Phone ((+01) 123 456 7890),
   Social icons (Facebook, Twitter, Instagram, Dribbble).
2. **Navbar** — Dark bg, "Wrenchly" brand, menu (Home, About, Services,
   Projects, Blog, Contact), search input, dark-mode toggle, hamburger on mobile.
3. **Hero** — Background image with dark overlay, heading "Make your car last
   longer", "Book an appointment" CTA button. Owl-carousel style slider.
4. **Intro CTA Bar** — Wrench icon, "Are you ready? Let's repair it now!",
   amber "Book an Appointment" button.
5. **Services** — "Our car services" heading, 6 cards in 3x2 grid:
   Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, Car Maintenance.
   Each has circular icon container, heading, description, "Read more" link.
6. **Stats/Counter** — "We help more than 45 years serving customer car" +
   4 counters: 45 Years, 8500 Projects, 2342 Customers, 30 Awards.
7. **Appointment** — Dark bg image, "Free Consultation" heading, form with
   name/service/date/phone/message + "Make an Appointment" button.
8. **Testimonials** — "Happy Clients & Feedbacks", carousel of testimonial
   cards with quote icon, text, author photo + name + position.
9. **Blog** — "Latest news from our blog", 3 cards with image, author info,
   date, title.
10. **Pricing** — "Pricing" heading, 4 cards (First PMS $78.98, Engine
    Diagnostics $83.75, Tow Truck $85.00, Oil Change) with "Get Started".
11. **Work/Portfolio** — 4 image cards with dark overlay text.
12. **Footer** — 4-column: brand+desc+social, Services list, Contact info,
    Business Hours. Copyright + Component Dock link.

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | #064acb | Links, hover states, dark buttons |
| Brand accent | #f79f24 | CTA buttons, amber highlights, intro bar |
| Dark bg | #000000 | Hero overlays, navbar, appointment bg |
| Light bg | #e6e6e6 | Alternating sections |
| Text | #000000 | Headings |
| Muted text | #b3b3b3 | Secondary text |
| Font | Poppins | Weights 400–700, Google Fonts |
| Button shape | 4px radius | .btn-secondary, .btn-custom |
| Icon circles | 50% radius | Service icon containers |
| Animations | ftco-animate | Scroll-reveal effects |

## Implementation tasks

### 1. Project scaffold
- Copy simplest existing app to apps/wrenchly
- Rename package to @free-react-templates/wrenchly
- Set up vite.config.ts with injectUiSource()
- Set public/CNAME to wrenchly.free.componentdock.com
- Set homepage in package.json to https://wrenchly.free.componentdock.com

### 2. Components (src/components/)
- [ ] TopBar.tsx — address, phone, social icons
- [ ] Navbar.tsx — dark nav, brand, menu links, search, dark-mode toggle
- [ ] Hero.tsx — background image, heading, subtitle, CTA button
- [ ] IntroBar.tsx — icon, "Are you ready?" heading, amber CTA
- [ ] Services.tsx — 6 service cards in 3x2 grid with icons
- [ ] Stats.tsx — heading + 4 counter cards
- [ ] AppointmentForm.tsx — dark bg, heading, form fields, submit button
- [ ] Testimonials.tsx — carousel of testimonial cards
- [ ] Blog.tsx — 3 blog post cards
- [ ] Pricing.tsx — 4 pricing cards with "Get Started"
- [ ] Portfolio.tsx — 4 image cards with overlay
- [ ] Footer.tsx — 4-column layout, copyright, Component Dock link

### 3. App.tsx
- Compose all sections in order: TopBar → Navbar → Hero → IntroBar →
  Services → Stats → AppointmentForm → Testimonials → Blog → Pricing →
  Portfolio → Footer

### 4. Styling (src/index.css)
- Tailwind v4 theme tokens (@theme)
- Poppins via Google Fonts link in index.html
- Brand colors: --color-primary: #064acb, --color-accent: #f79f24
- Dark mode: .dark class on html element

### 5. Tests (TDD)
- One describe per component
- Gherkin-style scenario tests matching spec scenarios
- 100% coverage enforced

### 6. Deployment prep
- npm run readme:status at root
- Verify: scripts/verify-app.sh wrenchly
