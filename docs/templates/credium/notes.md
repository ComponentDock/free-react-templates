# Credium — Design Notes & Implementation Outline

## Source

- ColorLib template: Credit
- ColorLib URL: https://colorlib.com/wp/template/credit/
- Preview: https://preview.colorlib.com/theme/credit/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/credit-free-template.jpg

## Design Tokens (from preview CSS)

- **Primary brand:** `#ffbb38` (gold/amber) — accents, heading underlines, active indicators, tooltip bg
- **Secondary/dark:** `#003679` (navy blue) — navbar, hero overlay, CTA bg, footer bg, icons
- **Text dark:** `#212121`
- **Text muted:** `#838383`
- **Light bg:** `#f1f7f9` — miscellaneous area background
- **Heading font:** Montserrat (Google Fonts, weights 400/500/600/700)
- **Body font:** Open Sans (Google Fonts, weights 400/600)
- **Button radius:** `5px` (standard), `30px` (pill/CSS class `btn rounded-pill`)
- **Border radius (cards):** `5px`
- **Section padding:** `100px` vertical (class `section-padding-100-0`)
- **Box shadow on buttons:** `0 0 24px rgba(0,0,0,0.2)` (active states)

## Section Structure (in order)

1. **Header Area**
   - `top-header-area` — light gray (#f2f4f6) bar with address + email + icons
   - `credit-main-menu` (#sticker) — sticky navbar, logo left, nav links right
   - Nav: Home, About Us, Services, Blog, Contact
   - Mobile hamburger toggler with cross close

2. **Hero Slider** (`hero-area`)
   - Owl-carousel with 3 slides
   - Each slide: full-width bg image, dark overlay (`rgba(0,0,0,0.61)`), centered text
   - Headline: "2 years interest" (large, bold)
   - Paragraph: lorem-style description
   - Dot indicators at bottom (gold active)
   - Container: col-lg-9 centered

3. **Features** (`features-area section-padding-100-0`)
   - Section heading: "Take look at our" (small) + "Our Loans" (h2, gold underline bar)
   - 4 feature cards in a row:
     - Each has a background image thumbnail (col-lg-3)
     - Title + short description
     - Items: "We take care of you", "No documents needed", "Fast & easy loans"
     - CTA: "Discover" button
   - fadeInUp animation with staggered delays (100ms, 300ms, 500ms, 700ms)

4. **CTA 1** (`cta-area`, dark navy bg)
   - Dark navy (#003679) background with semi-transparent overlay
   - White section heading: "Bold design and beyond" (small) + "Helping small businesses like yours" (h2)
   - 3 stats/counters: `single-skils-area` items (e.g. "resource", "Read More")
   - All text white, gold accent

5. **CTA 2** (`cta-2-area`, light bg)
   - White/light background
   - Heading: "Our services" (gold underline)
   - Paragraph: "Are you in need for a loan? Get in touch with us."
   - "Read More" link/button

6. **Services** (`services-area section-padding-100-0`)
   - Section heading: "Take look at our" + "Our services" (gold underline)
   - 6 service items in a row/grid:
     - Each: circular icon container (navy bg) + title + description
     - Services: "All the loans", "Easy and fast answer", "No additional papers", "Secure financial services", "Good investments", "Accumulation goals"
   - fadeInUp with staggered delays

7. **Miscellaneous** (`miscellaneous-area bg-gray`)
   - Light gray (#f1f7f9) background
   - 3-column layout:
     - Left: Ad/promo area (image or CTA block)
     - Center: "Get in touch" — contact form (name, email, subject, message, submit)
     - Right: "The news" — 3 news items (date, title, author name + date)

8. **Newsletter** (`newsletter-area section-padding-100 bg-img jarallax`)
   - Full-width parallax background image
   - Dark overlay for readability
   - Heading: "Subscribe to our newsletter"
   - Paragraph: descriptive text
   - Email input + "Subscribe" button

9. **Footer** (`footer-area section-padding-100-0`)
   - 4-column layout:
     - "About Us": Homepage, About Us, Services & Offers, Portfolio, The News
     - "Solutions": Our Loans, Trading & Commerce, Banking & Private Equity, Industrial & Factory, Financial Solutions
     - "Our Loans": (same links as Solutions)
     - "Latest News": 3 blog post titles with dates
   - `copywrite-area`: copyright text + Colorlib link (replace with Component Dock)

## Fidelity Notes

- The hero uses Owl Carousel — replace with a React carousel (e.g. simple CSS slider or a lightweight React carousel lib)
- Jarallax parallax effect — use CSS `background-attachment: fixed` or IntersectionObserver
- The preloader (lds-ellipsis) can be simplified or removed for the React version
- All lorem text is placeholder — keep the same structure/tone but can be paraphrased
- Images: use `https://picsum.photos/seed/credium-<n>/<w>/<h>` for deterministic placeholders
- Icons: use `lucide-react` instead of the original image icons
- Font loading: Google Fonts `<link>` in `index.html` for Montserrat + Open Sans

## Implementation Order

1. Header (top bar + sticky navbar)
2. Hero slider
3. Features section
4. CTA 1 (dark navy stats)
5. CTA 2 (service summary)
6. Services grid
7. Miscellaneous (ad + contact form + news)
8. Newsletter
9. Footer
10. Animations (scroll-triggered fadeInUp)
