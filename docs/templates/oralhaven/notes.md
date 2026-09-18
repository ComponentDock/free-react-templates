# OralHaven — Implementation Notes

Source: ColorLib "Dentist" — https://colorlib.com/wp/template/dentist/
Preview: https://preview.colorlib.com/theme/dentist/
New name: oralhaven (apps/oralhaven, @free-react-templates/oralhaven)

## Section order (top → bottom)

1. **Header** — Fixed top nav bar (logo left, links center, social right)
2. **Banner / Hero** — Full-width bg-image + dark overlay, centered text + CTA
3. **Opening Hours** — White card overlapping banner (-100px margin), schedule table
4. **Services** — 4-column grid of service cards (image + title + desc)
5. **About** — Dark navy split layout (image left, text right, 2 sub-cards)
6. **Testimonials** — Carousel of testimonial cards (avatar, quote, name, role)
7. **Team** — 4-column grid on #f9f9ff bg, hover gradient overlay
8. **Features** — 6 items, 2-column layout with green icons
9. **Appointment** — Dark navy split layout with contact form
10. **Blog** — 3-column grid of blog post cards
11. **Footer** — Dark navy 3-column (links, contact, newsletter), copyright bar

## Design tokens (quick reference)

- Font: Poppins (300–700)
- Brand green: #67bc00
- Gradient: linear-gradient(0deg, #ade600, #62b900)
- Dark navy: #04091e
- Off-white bg: #f9f9ff
- Body text: #777, headings: #222
- Primary button: green gradient, border-radius 25px, white text

## Fidelity notes

- Banner overlay: rgba(4,9,30,0.85) — match exact opacity
- Opening hours card: box-shadow 0px 10px 30px rgba(0,0,0,0.05), border-radius 10px
- About/Appointment: dark navy bg with ::after pseudo-image left (48% width)
- Team hover: opacity transition 0.5s, gradient overlay #ade600→#62b900
- Footer newsletter: white input, green subscribe button (border-radius 25px)
- Footer widget h3: green gradient text (background-clip: text)
- Testimonial cards: border 1px solid #eee, radius 10px, hover bg white + green h4

## Component list

- Navbar (logo, nav links, social icons)
- Banner (heading, subtitle, paragraph, CTA button)
- OpeningHours (heading, status indicator, schedule rows)
- Services (4 service cards)
- About (heading, paragraph, 2 feature sub-cards with icons)
- Testimonials (heading, carousel, testimonial cards)
- Team (4 team member cards with hover overlay)
- Features (6 feature items with icons)
- Appointment (form with name, email, phone, message fields)
- Blog (3 blog post cards with date badges)
- Footer (3 columns: links, contact, newsletter + copyright bar)
