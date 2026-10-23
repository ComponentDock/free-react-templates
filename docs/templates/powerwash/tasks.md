# PowerWash — Implementation Notes

Source: ColorLib "Pressure Washing" (`pressurewashing`)
Preview: https://preview.colorlib.com/theme/pressurewashing/

## Section order (from live preview DOM)

1. Navbar (top bar + sticky nav)
2. Hero (parallax bg, headline, 2 CTAs)
3. About / Why Choose Us (split: image left, text right)
4. Stats Counter (4 animated numbers)
5. Services (8 cards on dark bg)
6. Before & After (tabbed interface)
7. Testimonials (carousel, light bg)
8. Free Consultation Form (parallax bg, form fields)
9. Footer (4 columns + copyright)

## Design tokens

- Brand blue: `#207dff` → use as Tailwind primary
- Accent yellow: `#ffd31d` → use for stars/highlights
- Button primary: `#007bff` (Bootstrap blue) → consider using brand blue instead
- Text dark: `#212529`
- Text muted: `#6c757d`
- Section bg light: `#f8f9fa`
- Overlay: black at ~50% opacity
- Font: system sans-serif stack (no custom fonts)
- Border radius: 0.25rem (Bootstrap default)
- All section backgrounds are either solid white, solid light gray, or parallax images with dark overlays

## Fidelity notes

### Navbar
- Top bar: phone + email on left, social icons (Twitter, Facebook, Instagram) on right
- Main nav: brand text "PowerWash" left, links right
- Sticky on scroll

### Hero
- Full-width background image with dark overlay
- Text right-aligned (col-md-6)
- Headline: "Professional Power Washing Services"
- Two buttons: "Get a Quote" (primary) + "Our Services" (outline/secondary)

### About / Why Choose Us
- 2-column: image left (col-md-5), text right (col-md-7)
- Heading "Why Choose Us?" with 4 bullet points
- Each point has a bold title + description

### Stats Counter
- Dark background section
- 4 columns: Years (50), Customers (8500), Products (20), Other stat (50)
- Animate from 0 on scroll into view

### Services
- Dark background image (parallax)
- White heading "Power Washing Services"
- 2x4 grid of service cards
- Each: icon (use lucide-react: Droplets, Home, Building, etc.) + heading + short description
- Services: House Washing, Roof Cleaning, Driveway Cleaning, Gutter Cleaning, Patio Cleaning, Building Cleaning, Concrete Cleaning, Sidewalk Cleaning

### Before & After
- White background
- Heading "Before & After Services"
- Tabbed: right side vertical nav pills, left side image panel
- Tabs: House Washing, Roof Cleaning, Driveway Cleaning, Gutter Cleaning, Patio Cleaning, Building Cleaning
- Use before/after placeholder images from picsum

### Testimonials
- Light gray background (`bg-light`)
- Heading "Happy Clients & Feedbacks"
- Carousel (can use simple CSS scroll-snap or state-based carousel)
- Each card: circular avatar, 5 gold stars, quote text, client name + role

### Consultation Form
- Parallax background image with dark overlay
- Heading "Free Consultation"
- Form: service dropdown, name input, email input, date picker, submit
- Button text: "Request A Quote"

### Footer
- 4 columns: brand+social, Latest News (2 posts), Quick Links, Newsletter
- Bottom bar: copyright + "Component Dock" link
- Copyright: "© 2026 All rights reserved | Made with Component Dock"

## Component plan

```
src/
  main.tsx
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    StatsCounter.tsx
    Services.tsx
    BeforeAfter.tsx
    Testimonials.tsx
    ConsultationForm.tsx
    Footer.tsx
  index.css
```
