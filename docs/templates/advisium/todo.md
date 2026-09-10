# Advisium — Implementation Todo

Recreation of ColorLib **Consulto** template.

- Source: https://colorlib.com/wp/template/consulto/
- Preview: https://preview.colorlib.com/theme/consulto/
- Design category: Business consulting / corporate services

## Section Order (from source)

1. **Navbar** — Sticky header with logo, nav links (Home, About, Services, Pages, Blog, Contact). Transparent over hero, solid on scroll.
2. **Hero / Slider** — Full-width background image with overlay. Heading "Business Consulting", subtitle, coral gradient CTA button "Explore Services".
3. **Services** — 4 icon cards in a row (Business Consulting, Media Planning, Professional HR, Media Planning). White background, each with icon, title, description, "Make Appointment" link.
4. **About / Philosophy** — Split layout (image left, text right). Heading "Our Philosophy", CEO quote attribution.
5. **Process / Solutions** — 4 numbered step cards. Heading "Creative solutions from experts". Counter "900+".
6. **Testimonials** — Dark background image, slider with testimonial quotes, author name/role. At least 2 entries.
7. **Team** — 4 member cards (photo, name, role). Heading "Our Consultants". Members: Jacika Chouhan, Dirluba Jahan, Michel Frade, Kalisha Milano.
8. **Office Environment** — Full-width dark background photo. Heading "Office Environment", descriptive text.
9. **CTA / Contact** — Dark background image. "Need a consulting services?" heading, "Make an Appointment" button, phone number.
10. **Blog / Case Studies** — 4 cards in a row. Heading "Some great stuffs we have done". Each: image, title, excerpt, category "Urban".
11. **Footer** — Dark navy background. 4 columns: About text, Our Solutions links, Company links, Contact Us info. Newsletter signup. Copyright.

## Design Notes

### Colors

- Brand accent: `#FD8F5F` (coral/orange) — buttons, icons, highlights
- Brand accent alt: `#FF9F67` (lighter coral) — button gradient
- Heading: `#010A44` (dark navy) — h1-h6
- Section heading: `#072366` (deep blue) — h2
- Primary button: `#140C40` (very dark navy)
- Body text: `#646D77` / `#777`
- Light bg: `#f7f7f7` / `#fbf9ff`
- Footer bg: `#1D2547`

### Typography

- Headings: `"Raleway", sans-serif`
- Body: `"Muli", sans-serif`
- h1: 60px, bold, line-height 1.1
- h2: 40px, bold

### Buttons

- `.btn`: coral gradient (`#FF9F67` → `#ec8b53`), rounded 30px, 16px 40px padding, white text, 18px font
- `.genric-btn.primary`: solid `#140C40` navy, 20px border-radius circle variant
- Hover: gradient slides left-to-right

### Layout

- Section padding: 120px top/bottom
- Flexbox-based split layouts
- Cards with subtle shadows and hover transitions

### Background Images

- Hero: background image with overlay
- Testimonials: dark section background
- Office: dark section background
- CTA: dark section background
- Process cards: white with shadow
