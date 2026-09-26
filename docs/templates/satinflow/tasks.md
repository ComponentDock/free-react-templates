# Satinflow — Implementation Tasks & Design Notes

## Source
- ColorLib: Satner → https://colorlib.com/wp/template/satner/
- Preview: https://preview.colorlib.com/theme/satner/
- New name: satinflow

## Design Tokens Captured
- Brand gradient: linear-gradient(90deg, #4458dc 0%, #854fee 100%)
- Heading font: Rubik (500, 700)
- Body font: Roboto (400)
- Text: #000000 (headings), #777777 (body)
- Button radius: 5px
- Feature card bg: #f9f9fd
- Footer bg: #fcf8ff (light lavender)
- Social icon color: #788489
- Brand box border: #eeeeee
- Section gap: 200px desktop / 80px tablet

## Section Order & Fidelity Notes

### 1. Navbar
- Absolute positioned, transparent bg over hero
- Logo left, nav links right (Home, About, Services, Portfolio, Contact)
- Sticky on scroll with shadow
- Links: uppercase, Rubik 500 14px, black → blue (#4458dc) on hover/active
- No dropdowns in single-page version
- Mobile: hamburger toggle

### 2. Hero
- Full-width background image (use gradient or solid fallback)
- Split: 7-col text left, 5-col illustration right
- Text: "Hello" (h3, 40px), "I am [Name]" (h1, uppercase), role (h5, uppercase)
- h3 has animated underline via :after pseudo-element
- Two CTA buttons: solid "Hire Me" + outlined "Get CV"
- Solid button: gradient bg, white text, 5px radius, box-shadow purple
- Outlined button: white bg, dark text, no shadow; hover → gradient
- Portrait hidden on mobile (< 992px)

### 3. About
- Split: 5-col image left + offset 5-col text right
- Heading: "Let's Introduce about myself" (uppercase, 36px)
- Two paragraphs of body text
- "Download CV" primary button
- Section gap padding (200px)

### 4. Brand Logos
- Centered 6-col container with 9 logo boxes (3×3 grid)
- Each box: 170×100px, 1px #eee border, centered image
- On hover: border changes to purple (#854fee)
- Section gap bottom padding

### 5. Services
- Section title: "Service Offers" (centered, uppercase, 36px)
- Subtitle text below
- 4 feature cards in a row (col-lg-3)
- Each card: #f9f9fd bg, 45px 25px padding, centered
- Icon image (35px margin-bottom) + title (20px uppercase) + description
- Hover: white bg + purple shadow (rgba(77, 87, 222, 0.3))

### 6. Portfolio
- Section title: "Quality Work / Recently Done Project"
- Filter tabs: All, Popular, Latest, Following (gradient active state)
- 3-column grid of portfolio items
- Each: image with dark overlay, centered cross icon (fades in on hover)
- Below image: uppercase title + category text
- Items tagged by category for filtering

### 7. Testimonials
- Section title: "Client Say About Me" (centered)
- Subtitle text
- Owl-carousel of cards
- Each card: 4-col photo (5px rounded) + 8-col text (name uppercase + quote)
- Card: 50px 55px padding, soft shadow (rgba(221, 221, 221, 0.3))
- Hover: shadow shifts to purple tint
- Auto-sliding

### 8. Newsletter
- Full-width section with background image (use gradient fallback)
- Centered white text
- Heading: "GET UPDATE FROM ANYWHERE" (uppercase, bold)
- Description paragraph
- Subscription form: 380px transparent input (white border, 5px radius) + "Get Started" button
- Button: white bg, gradient text via background-clip

### 9. Footer
- Light lavender bg (#fcf8ff)
- Centered layout (no columns)
- Logo image centered
- "Follow Me" heading (20px uppercase)
- Social icons row: Facebook, Twitter, Dribbble, Behance
- Icons: #788489, 22px, hover → #854fee
- Copyright line with Component Dock link

## Implementation Tasks

- [ ] Create app scaffold: `apps/satinflow/` (copy simplest existing app, rename package)
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind entry + theme tokens (brand gradient, fonts)
- [ ] Add Google Fonts link (Rubik + Roboto) to index.html
- [ ] Implement Navbar component (fixed, sticky, hamburger on mobile)
- [ ] Implement Hero component (split layout, background, CTAs)
- [ ] Implement About component (split layout, image + text)
- [ ] Implement BrandLogos component (3×3 grid, hover effect)
- [ ] Implement Services component (4 cards, hover lift)
- [ ] Implement Portfolio component (filter tabs, grid, overlay)
- [ ] Implement Testimonials component (carousel, cards)
- [ ] Implement Newsletter component (bg, form, input + button)
- [ ] Implement Footer component (centered, social icons, copyright)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Verify: typecheck, lint, test:coverage, build
- [ ] Update TEMPLATES.md (mark [~] → [x] when merged)
