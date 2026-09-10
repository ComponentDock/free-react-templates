# CruiseCraft — Implementation Notes

Source: ColorLib "Carrentals" (https://preview.colorlib.com/theme/carrentals/)
New name: cruisecraft

## Design notes

### Section order (from live preview)

1. **Navbar** — sticky, logo left, 6 links right, mobile hamburger
2. **Hero** — bg-image, centered heading, trip-form (pickup/dropoff locations + dates)
3. **How It Works** — 3 steps in a row: Select car → Fill up form → Payment
4. **Promo Banner** — heading + description text, bg-light
5. **Car Listings** — 6 cards, 2-col grid, image + name + price + desc + button
6. **Features** — 6 feature items, 2-col grid, icon + title + desc
7. **Testimonials** — 3 cards, quote + name + role, bg-light
8. **CTA** — heading + button, bg-primary (#0779e4)
9. **Footer** — 4 columns (About, Quick Links, Resources, Support, Company), dark bg

### Fidelity notes

- Brand blue `#0779e4` is used pervasively: links, buttons, CTA bg, accents
- Text color is `#364d59` (dark teal), not pure black
- Font: Roboto 400/700/900
- Buttons: `.btn-primary` = blue bg, white text; `.btn-white` = white bg, blue text
- Sections alternate white / light (#f8f9fa) / brand-blue bg
- Step icons in the "How it Works" section use circle outlines
- Car listing cards show price prominently
- Feature items use a custom `listing-feature` layout (icon left, text right)
- Testimonials use the `testimonial-2` pattern (3 cards side by side)

### Component plan

- `Navbar.tsx` — sticky nav, logo, links, mobile toggle
- `Hero.tsx` — bg image, heading, TripForm component
- `TripForm.tsx` — 4-field form (pickup loc, dropoff loc, dates)
- `HowItWorks.tsx` — 3 StepCard components
- `StepCard.tsx` — icon circle + number + title
- `PromoBanner.tsx` — heading + description, bg-light
- `CarListings.tsx` — 2-col grid of CarCard components
- `CarCard.tsx` — image, name, price, description, button
- `Features.tsx` — 2-col grid of FeatureItem components
- `FeatureItem.tsx` — icon + title + description
- `Testimonials.tsx` — 3 TestimonialCard components, bg-light
- `TestimonialCard.tsx` — quote, name, role
- `CtaSection.tsx` — heading + button, brand-blue bg
- `Footer.tsx` — 4+ columns, dark bg, Component Dock link

### Placeholder images

- Hero bg: `https://picsum.photos/seed/cruisecraft-hero/1920/800`
- Car images: `https://picsum.photos/seed/cruisecraft-car-<n>/600/400` (n=1..6)
- Icons: lucide-react (Car, CreditCard, CheckCircle, Fuel, Settings, Shield, etc.)
