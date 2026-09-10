# Rinsero — Implementation Notes

Source: ColorLib Carwash (https://preview.colorlib.com/theme/carwash/)
New name: rinsero

## Task outline

1. Scaffold app: copy simplest existing app, rename to rinsero, update package.json + vite.config.ts + CNAME
2. Set up index.html with Google Fonts (Poppins + Work Sans via `<link>`)
3. Define Tailwind theme tokens in index.css (@theme block with brand colors)
4. Build components in order:
   a. Navbar.tsx — sticky header, logo, nav links, phone CTA button
   b. Hero.tsx — full-width image bg, gradient overlay, heading, animated subtitle, CTA
   c. Equipment.tsx — light blue bg, image + white card layout
   d. PricingCards.tsx — 3-column card grid with icons, prices, feature lists, outlined buttons
   e. Testimonials.tsx — blue gradient bg, carousel with quotes, author info
   f. Services.tsx — 4-column icon grid
   g. VideoSection.tsx — dark bg, play button, heading
   h. Footer.tsx — dark bg, 4 columns, contact/hours/nav/social, Component Dock link
   i. BackToTop.tsx — circular floating button
5. Compose in App.tsx
6. Write tests (TDD: test each component before or alongside implementation)
7. Run verify-app.sh rinsero — typecheck, lint, tests (100% coverage), build

## Section-by-section fidelity notes

### Navbar
- White background, sticky on scroll (use intersection observer or scroll listener)
- Logo left, nav center (uppercase, Work Sans 14px, nav link color #072366)
- Phone button right: gradient background (btn gradient), pill shape (border-radius 30px), white text, smartphone icon + number
- Mobile: hamburger menu

### Hero
- Background image from picsum with blue gradient overlay (rgba(1,10,68,0.8) → rgba(0,42,255,0.5))
- "Car Wash" in Poppins 124px/800 white, "Car" capitalized
- "& Detailing" animated subtitle: first copy is outline-only (text-stroke 2px white), second copy is solid white with clip-path animation
- Description paragraph: Poppins 20px, white, line-height 1.6
- "Our Services" CTA: .btn gradient pill, uppercase, 14px, letter-spacing normal

### Equipment
- Section bg: #EEF6FF
- Inner wrapper: image on left (7 cols), white card on right (offset 5 cols) with padding 85px 81px
- Heading: Work Sans, heading color #010A44
- "About Us" button: .btn gradient pill

### Pricing Cards
- 3 cards in a row, white bg, border #E7E6EB, padding 70px 0
- Card top: icon SVG, title, "Starting at"
- Card mid: price in #4C1E51, 32px
- Card bottom: feature list (16px, #717081), "Get Started" outlined button (border #007AFF, text #007AFF)
- Hover: button fills with gradient

### Testimonials
- Blue gradient background (linear-gradient to bottom: #1592e6 → #007aff → #10cafc)
- Carousel dot navigation
- Quote text in white, quotation marks icon (SVG)
- Author: circular avatar, name, role in white
- Decorative image on right side

### Services (Why Us)
- Section heading left-aligned (6 cols), 4 icon cards below
- Each card: SVG icon, h5 title, description paragraph
- Cards animate in with fadeInUp

### Video Section
- Background image (dark), centered content
- Green circular play button (linear-gradient #6fd66c → #48c1b9, 60px circle, border ripple animation)
- Heading and description in white, right-offset layout

### Footer
- Dark background image
- 4 columns: logo + contact, Opening hours, Navigation, Social icons
- Phone/email in #007AFF
- Social icons: circular, border, rotate on hover, fill #007AFF
- Bottom bar: "Made with ❤ by Component Dock" (replacing Colorlib attribution)

### Back to Top
- Fixed position, bottom-right (right: 31px, bottom: 18px)
- Circular 50px, #007AFF bg, white arrow icon
- Appears after scrolling (threshold ~300px)
