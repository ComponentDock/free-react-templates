# Washbay — Implementation TODO

Source: ColorLib "Carwash" — https://colorlib.com/wp/template/carwash/
Preview: https://preview.colorlib.com/theme/carwash/
New name: washbay

## Section order (top → bottom)

1. **Header / Navbar** — white background, sticky on scroll. Logo (car icon + "Car Wash"). Uppercase nav links (Home, About, Services, Blog, Contact). Rounded blue gradient phone CTA button on right. Hamburger on mobile.
2. **Hero Slider** — full-width slider (Slick) with car washing background images. Blue gradient overlay (left-to-right: `rgba(1,10,68,0.8)` → `rgba(0,42,255,0.5)`). "Car Wash" in Poppins 124px bold white + "& Detailing" with clip-path animation. Subtitle text. "OUR SERVICES" rounded blue gradient CTA button. Dot-style navigation.
3. **About / Equipment** — `#EEF6FF` light blue background. Left: detailer photo. Right: white card overlapping photo (`margin-top: -100px`) with "We have the latest equipment" heading, body text, "ABOUT US" outlined button.
4. **Pricing Cards** — "We offer best services to our customer" heading. 3-column cards: Car Wash ($50), Detailing ($100), Full Wash ($200). White cards with `#E7E6EB` border, icon, name, price (purple `#4C1E51`), feature list, outlined blue "GET STARTED" button. Hover fills button with gradient.
5. **Testimonials** — Blue gradient background (`#1592e6` → `#007AFF` → `#10cafc`). Client photo carousel (Owl Carousel) + quote marks + testimonial text + author name/role.
6. **Service Categories** — "Why take our services?" heading. 4-column grid: Car Wash 100% Without Detergents, Efficient Surface Drying Machines, We Have an Application, Safe Lacquer Protection. Each with icon + description.
7. **Video CTA** — Full-width background image. "Your Car Will Look As Your New One" white heading. Circular green play button (`#6fd66c`) with pulsing border animation.
8. **Footer** — Dark background (via `section-bg2` + `footer-bg.png`). Logo + description, phone/email in `#007AFF`, opening hours (Mon-Fri/Sat/Sun), navigation links, social icons. ComponentDock link.

## Component plan

| Component          | Notes                                                          |
| ------------------ | -------------------------------------------------------------- |
| `Navbar.tsx`       | White header, sticky, phone CTA button, hamburger on mobile    |
| `Hero.tsx`         | Slider with gradient overlay, animated headline, CTA button   |
| `Equipment.tsx`    | Overlapping photo + white card on light blue background        |
| `PricingCards.tsx`  | 3 pricing tiers with icons, features, outlined buttons        |
| `Testimonials.tsx` | Blue gradient BG, client photos, quotes, author info           |
| `Categories.tsx`   | 4-column service items with icons                              |
| `VideoCTA.tsx`     | Background image, heading, green play button                   |
| `Footer.tsx`       | Dark footer with contact, hours, nav, social, ComponentDock    |

## Design notes

- **Fonts**: Poppins (body, 16px) + Work Sans (headings, 500 weight) — Google Fonts
- **Brand blue**: `#007AFF` — use in `@theme` as `--color-brand`
- **Gradient blue**: `linear-gradient(to right, #0BC6FF, #0d80f3)` — for buttons
- **Hero overlay**: left-to-right gradient `rgba(1,10,68,0.8)` → `rgba(0,42,255,0.5)`
- **Light blue BG**: `#EEF6FF` — equipment section
- **Card border**: `#E7E6EB`
- **Buttons**: pill-shaped (`border-radius: 30px`), blue gradient fill on hover
- **Animated headline**: "Detailing" uses CSS `clip-path` animation (wave reveal)
- **Play button**: green gradient (`#6fd66c` → `#48c1b9`), circular, pulsing border
- **Images**: `https://picsum.photos/seed/washbay-<n>/<w>/<h>`
- **Icons**: `lucide-react` — Car, Droplets, Sparkles, Shield, Phone, Clock, Play, MapPin, Mail, Star, Award
