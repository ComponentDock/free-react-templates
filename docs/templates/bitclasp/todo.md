# BitClasp — Replication Notes & Implementation Todo

Source: ColorLib Bitcoin (https://preview.colorlib.com/theme/bitcoin/)

## Section-by-Section Fidelity Notes

### Navbar
- Fixed position, transparent initially, rgba(34,34,34,0.9) on scroll
- Logo text with 4px solid #f78f3d left border + 3px left padding
- Nav: Home, Convert, Features, Pricing, Blog, Pages (dropdown)
- Mobile: hamburger toggle → slide-in left drawer at 800px breakpoint
- Font: 12px, uppercase, weight 400, white text

### Hero / Banner
- Full-screen height (fullscreen d-flex align-items-center justify-content-start)
- Background image with overlay-bg class: background-color rgba(4,9,30,0.85)
- h5 label: "Currently Purchase Rate", uppercase, white, 400 weight, letter-spacing 3px
- h1: 100px desktop / 45px tablet / 36px mobile, uppercase, white, weight 700
- Subtext: white paragraph, pt-20 pb-20
- Button: solid #f78f3d, border-radius 3px (square), uppercase, hover → transparent with white border

### Currency Converter
- Negative margin-top: -105px (overlaps hero), z-index: 2
- Background: gradient (linear-gradient(0deg, #f3c400, #f88845))
- h1 white, centered
- Subtitle white, centered
- Form: two groups of 3 inputs each + image column (icon) between
- Inputs: transparent bg, white text, border-color #f9c065, border-radius 0
- Button: white bg, dark text (#222), square corners, uppercase, hover → transparent with white border

### Simple Services
- 3-column layout (col-lg-4)
- Each: icon + title (h4 with pt-30 pb-20)
- Icons: likely font-awesome or line-icons
- Centered text, no special background

### About Us
- Dark background: #222
- 50/50 split: left (image carousel) + right (text)
- Owl Carousel for images with arrow navigation
- White headings and text on dark bg
- Carousel arrows: white by default, #f78f3d on hover

### Features (Why Choose Us)
- Centered h1 heading
- 6 feature cards: col-lg-4 col-md-6 (2 rows of 3)
- Each card: icon (Linearicons class lnr-*) + h4 title
- Icons: lnr-user, lnr-license, lnr-phone, lnr-rocket, lnr-diamond, lnr-bubble
- Hover: title turns #f78f3d
- Padding: 30px per card

### Stats (Ups and Downs)
- Light bg: #f9f9ff
- 50/50: image left + text right
- h1: "Ups and Downs"
- CTA button with gradient, hover → #f78f3d border, transparent bg

### Call to Action
- Gradient background (same gold-to-orange)
- Centered white text
- h1: "Huge Transaction in last Week"
- Subtext paragraph (white)
- Button: white bg, dark text, hover → transparent with dark border

### Pricing
- 3 cards side by side (col-lg-4)
- Each card: top (#fbfcff) + bottom (#f9f9ff)
- Top: title (e.g. "01 Bitcoin"), border-bottom 1px solid #eee
- Bottom: price h1 (60px, weight 300), paragraph, "Get Started" button
- Price button: #222 bg, hover → gradient (#f3c400→#f88845)
- Card hover: bottom gets gradient bg
- Border: 1px solid #eee

### Blog
- Centered heading
- 3 blog cards (col-lg-4)
- Each: thumbnail image + h4 title + author (avatar + name)
- Hover: title turns #f78f3d
- Author: d-flex flex-row with img-fluid avatar + meta div

### Footer
- Dark bg: #04091e
- 4 columns: About Us, Top Products (link list), Newsletter (input + button)
- Newsletter: input bg #1e2235, border-radius 20px, button #f78f3d border-radius 57px
- Bottom: copyright + social icons
- Social bg: #111, hover: #f78f3d
- Social icons: Facebook, Twitter, Dribbble, Behance (Font Awesome)
- **Must replace Colorlib link with Component Dock link**

## Implementation Todo

- [ ] 1. Scaffold app: copy simplest existing app, rename to bitclasp
- [ ] 2. Set up Poppins font via Google Fonts link in index.html
- [ ] 3. Define Tailwind @theme tokens in index.css (brand-accent #f78f3d, gradient colors, deep-bg, dark-bg, etc.)
- [ ] 4. Build Navbar component (fixed, scroll handler, mobile drawer)
- [ ] 5. Build Hero component (full-screen, overlay, responsive h1, CTA button)
- [ ] 6. Build CurrencyConverter component (gradient bg, form fields, icon, button)
- [ ] 7. Build SimpleServices component (3-column icon cards)
- [   ] 8. Build AboutUs component (dark bg, carousel placeholder, text right)
- [ ] 9. Build Features component (6-card grid, Linearicons)
- [ ] 10. Build Stats component (light bg, image left, text right)
- [ ] 11. Build CallToAction component (gradient bg, centered text)
- [ ] 12. Build Pricing component (3 cards with hover effects)
- [ ] 13. Build Blog component (3 cards, thumbnails, authors)
- [ ] 14. Build Footer component (4 columns, newsletter, social, Component Dock link)
- [ ] 15. Compose all sections in App.tsx in correct order
- [ ] 16. Write tests for each component (100% coverage)
- [ ] 17. Set up vite.config.ts with injectUiSource()
- [ ] 18. Set up CNAME and homepage
- [ ] 19. Run verify-app.sh bitclasp
- [ ] 20. Commit, push, open PR, merge
