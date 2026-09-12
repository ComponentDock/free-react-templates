# Signalwave — Prep Notes & Design Fidelity Guide

## Source

- **ColorLib template:** Fastnet (slug: `fastnet`)
- **Preview:** `https://preview.colorlib.com/theme/fastnet/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/fastnet-free-template.jpg`

## Section order (from live DOM)

1. **Header** — Top bar (phone, email, social icons) + sticky nav (logo, links)
2. **Hero Slider** — Full-width image carousel, 2 identical slides, dark overlay, headline + description + "View Packages" CTA
3. **About** — Split layout: image left, text right; heading + two paragraphs + "View Packages" button
4. **Services** — 4 centered cards in a row (icon + title + description): Perfect in Coverage, Live Call Support, Secured Payment, 1 Gbps Data Rate
5. **Pricing** — 3 cards (Single/Half/Full): plan name, description, price ($20/$25/$29), feature list, "View Packages" button
6. **Testimonials** — Split layout: left has heading + slider with 2 testimonial cards (quote + name + role), right has an image
7. **Blog** — 3-column grid of blog cards (image + title + date)
8. **Footer** — Dark background (#11141b): 4 columns (brand info + phone, Our Support links, Quick Links, Newsletter signup), social icons, copyright, bottom bar

## Fidelity notes

### Header
- Top bar: dark bg, phone number + email on left, social icons (Twitter, Facebook, LinkedIn, Google+)
- Main nav: white bg, logo left, links right (Home, About, Package, Features, Blog, Contact)
- Sticky on scroll with shadow

### Hero Slider
- Full-width, dark overlay on image
- Heading: "Don't suffer the buffer, get super internet." (h1, white)
- Description: lorem ipsum placeholder
- CTA: "View Packages" red pill button (#ff3e3f bg, white text)
- Slider auto-advances; original uses owl carousel

### About Section
- Split: image left (~50%), text right
- Heading: "We listen and work together for Great experience."
- Two lorem paragraphs
- Red "View Packages" button

### Services Section
- 4 cards in a row (col-3 each)
- Each: icon (flaticon), title (h4), short description
- White background, subtle border or shadow
- Icons: coverage shield, phone support, payment lock, speed gauge

### Pricing Section
- 3 cards side by side
- Highlighted middle card (Half Package) may have slightly different styling
- Each card: plan name, subtitle description, price with "/mo", 5 features with check marks, "View Packages" button
- Background: #fafafa section bg, white cards

### Testimonials
- Split: left side has heading + testimonial slider, right side has image
- 2 testimonials with quote text, name ("Jhon Smith"), role ("Gym Trainer")
- Slider with prev/next dots

### Blog
- 3-column grid
- Each card: image top, title below, date below title
- Cards have subtle hover effects

### Footer
- Dark background (#11141b)
- 4 columns: (1) Brand + phone + email, (2) Our Support links, (3) Quick Links, (4) Newsletter signup
- Social icons row
- Copyright line at bottom
- Bottom bar slightly lighter dark (#101720)

## Design tokens (extracted from CSS)

- **Font:** Muli (Google Fonts), sans-serif
- **Primary red:** #ff3e3f (buttons, accents, links)
- **Navy:** #072366 (headings, feature list text)
- **Body text:** #464d65
- **Muted text:** #635c5c, #838a9b
- **Footer bg:** #11141b
- **Card bg:** #fafafa, #ffffff
- **Button radius:** pill (50px)
- **Card radius:** ~4-8px

## Implementation checklist

- [ ] Copy simplest existing app as base (e.g. apps/aurora or similar ISP template)
- [ ] Rename package to @free-react-templates/signalwave
- [ ] Set up Muli font in index.html via Google Fonts link
- [ ] Configure Tailwind theme tokens in index.css
- [ ] Build Header component (top bar + sticky nav)
- [ ] Build HeroSlider component (image carousel with overlay)
- [ ] Build About section (split layout)
- [ ] Build Services section (4 icon cards)
- [ ] Build Pricing section (3 tier cards)
- [ ] Build Testimonials section (slider + image)
- [ ] Build Blog section (3-column card grid)
- [ ] Build Footer (4-column dark footer with newsletter)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh signalwave
- [ ] Update TEMPLATES.md: [~] → [x]
