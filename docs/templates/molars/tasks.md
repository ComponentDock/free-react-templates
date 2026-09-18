# Molars — Prep Notes

## Source Template

- **ColorLib Name:** Dentures
- **ColorLib Slug:** dentures
- **Preview URL:** https://preview.colorlib.com/theme/dentures/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dentures-free-template.jpg

## Design Tokens Extracted

| Token          | Value                   | Source                                |
| -------------- | ----------------------- | ------------------------------------- |
| Font           | Raleway 300/400/600/700 | `style.css` body font-family          |
| Brand color    | `#12cad6` (teal)        | `.btn-primary`, `.form-control:focus` |
| Body text      | `#4d4d4d`               | `body { color }`                      |
| Button radius  | 0 (square)              | `.btn { border-radius: 0 }`           |
| Footer bg      | `#333333`               | `.site-footer { background }`         |
| Footer text    | `#737373`               | `.site-footer p { color }`            |
| Footer link    | `#999999`               | `.site-footer a { color }`            |
| Footer heading | `#fff`                  | `.site-footer h2,h3,h4 { color }`     |

## Section Structure (from preview DOM)

1. **Navbar** — Logo "Dentures" → "Molars", nav: Home, About, Services, Testimonials, Contact
2. **Hero** — Background image overlay, play button, "Dental Clinic for Everyone", subtitle, 2 CTAs
3. **Features** — 3x2 grid: Periodontology, Tooth Whitening, Preventative Care, Stethoscope → General Checkup, First Aid Kit → First Aid Treatment, Tooth Brace → Tooth Alignment
4. **FreeQuote** — Split: form (name, email, message, submit) left; hero image right
5. **Testimonials** — 4 customer cards: Chad Hawkins, Ayisha Atherton, Riccardo Gilliam, Jasleen Dunkley
6. **WhyChooseUs** — Split: image left; "Why Choose us" heading + 3 features (Fast Support, Happy Customers, 24/7 Support)
7. **Team** — 3 members with photo, name, specialty, social links, bio
8. **Footer** — Navigation links, Recent News (3 items), Newsletter (email + Send), Follow Us (social), Copyright + Component Dock

## Key Differences from Source

- New name: "Molars" (was "Dentures")
- No ColorLib assets copied — uses picsum.photos seeded placeholders
- Social icons use first letter (lucide-react removed brand icons)
- Footer links to Component Dock instead of ColorLib attribution
- Raleway font loaded via Google Fonts
