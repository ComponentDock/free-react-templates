# Template: Refuge

> Recreation of ColorLib "Funder" (https://colorlib.com/wp/template/funder/)

## Source Design

- **Original:** Funder — Insurance Agency Website Template
- **Preview:** https://preview.colorlib.com/theme/funder/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/funder-free-template.jpg

## Design Tokens

- **Fonts:** Oswald (headings, bold uppercase) + Work Sans (body, 300/400/700)
- **Brand color:** `#2563eb` (blue-600) — primary buttons, CTA banner, feature icons
- **Dark headings:** `#1a202c` (gray-900)
- **Light backgrounds:** `#f8fafc` (slate-50), `#f1f5f9` (slate-100)
- **Muted text:** `#64748b` (slate-500)
- **Footer bg:** `#1a202c` (dark)
- **CTA banner bg:** `#2563eb` (blue)

## Sections (in order)

1. **Navbar** — Logo "REFUGE", nav links (Home, Insurance dropdown, Services, Blog, About, Contact), "Get A Quote" button
2. **Hero** — Two-slide carousel with background images, headline + subtitle overlay
3. **Products** — "Insurance Coverage" heading, 3 insurance cards (Home, Auto, Travel) with image + text + "Learn More" button
4. **About** — "We Are Trusted Agency Company", large image + 2-column description
5. **Split Feature (left)** — Background image left, text right ("Why Choose Us")
6. **Split Feature (right)** — Background image right, text left ("Why Choose Us")
7. **Features** — 4-column cards (24/7 Support, Trusted People, 12 Years Experience, Join With Us) with lucide-react icons
8. **Impact** — Image + text with CTA ("Thousands of Houses Damage Each Year")
9. **Founders** — 2 team members with circular photos, names, titles, bios
10. **Testimonials** — Carousel of testimonial cards with photos + quotes
11. **CTA Banner** — Blue background, headline + "Contact Us" button
12. **Footer** — About text, Quick Menu links, Insurance links, Social icons, Component Dock link

## Scenarios

### Navbar

- renders logo text "REFUGE"
- renders nav links (Home, Insurance, Services, Blog, About, Contact)
- renders "Get A Quote" CTA button
- mobile toggle shows/hides mobile menu

### Hero

- renders hero section with headline and subtitle
- navigates between slides

### Products

- renders section heading "Insurance Coverage"
- renders 3 insurance cards (Home, Auto, Travel)
- each card has title, description, and "Learn More" button

### About

- renders "We Are Trusted Agency Company" heading
- renders descriptive paragraphs

### Split Features

- renders two split-image sections with text

### Features

- renders 4 feature cards with icons and titles

### Impact

- renders heading and CTA button

### Founders

- renders 2 founder profiles with names and titles

### Testimonials

- renders testimonial quotes

### CTA Banner

- renders headline and "Contact Us" button

### Footer

- links to componentdock.com
- renders Quick Menu and Insurance columns
- renders social icons
