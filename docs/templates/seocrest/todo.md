# SeoCrest — Task Outline & Design Notes

Source: ColorLib "Seos" — https://colorlib.com/wp/template/seos/
Preview: https://preview.colorlib.com/theme/seos/
New name: seocrest (packages/ui shared components used where possible)

## Section Build Order

1. **index.css** — Tailwind @theme tokens (brand-primary #ff5c97, brand-secondary #2b4b80, brand-accent #4043bc, brand-dark #ec4683, text-primary #707b8e, bg-light #f9f9ff, border-light #f0e9ff). Import Poppins from Google Fonts in index.html.

2. **Navbar.tsx** — Transparent header, logo left, nav links center, "Contact Us" button right. Becomes sticky on scroll (white bg + shadow). Mobile hamburger menu.

3. **Hero.tsx** — Two-column: left has h1 "We Collect High Quality Leads" + paragraph + pink CTA button; right has placeholder illustration (picsum or SVG). Plus-shape decorative elements (CSS pseudo-elements or SVG).

4. **Services.tsx** — "What We Do" section. 3-column card grid (Link Building, Content Marketing, On-Page SEO). Each card: lucide-react icon, title, description, "get started" link with arrow. Cards have 6px radius, hover shadow.

5. **WeCreate.tsx** — Full-width section with background image/gradient overlay. Heading + paragraph + "Contact Us" button. Use picsum.photos for background.

6. **GeneratingCustomers.tsx** — "Generating New Customers Via Online Mode" heading. 4-column grid: All Sizes Business, Awesome Results, Keep you in the Loop, Significant ROI. Each: icon + title + description.

7. **Pricing.tsx** — "Choose Your Very Best Pricing Plan" heading. 3 pricing cards ($5, $20, $30). Each lists features with checkmarks. Middle card can have slight emphasis.

8. **Portfolio.tsx** — "Visit Some Of Our Awesome Stuffs" heading. 4-item grid with picsum.photos images, title overlay, category label. Hover darkens image.

9. **Testimonials.tsx** — "What Client Say About Us" heading. Carousel/slider with quote text, author name, role. Dark purple background area (#4043bc or similar).

10. **Blog.tsx** — "Tips and Tricks From Our Experts" heading. 3-column cards: image + title + "Continue Reading" link + date. Simple card layout with bottom border on hover.

11. **CTA.tsx** — "Have project in mind?" full-width section. Gradient background (linear-gradient from #ff5c97 to #7b40c0). White text, "Contact Us" button.

12. **Footer.tsx** — Dark background, 4-column layout: About (logo + text + social icons), Quick Links, Newsletter (email input + subscribe), Follow Us (social icons). Bottom bar: copyright + Component Dock link.

13. **App.tsx** — Compose all sections in order.

## Fidelity Notes

- **Color palette:** Pink (#ff5c97) is the dominant brand color; dark blue (#2b4b80) for headings; purple (#4043bc) for accents. Gradient CTA uses pink→purple.
- **Typography:** Poppins at various weights (400 body, 500-700 headings). Hero heading is 65px bold. Section titles are 50px bold.
- **Buttons:** Primary buttons are 5px radius, 30px 44px padding, letter-spacing 3px, uppercase. Header button uses #4043bc background. "Contact Us" uses #ff5c97.
- **Cards:** Service cards have 6px border-radius, hover box-shadow transition.
- **Layout:** Bootstrap-style 12-column grid approximated with Tailwind grid/flex. Sections have generous padding (120px top/bottom).
- **Decorative elements:** Plus-shape icons near hero, curved shapes on service section sides. These can be simplified with CSS or SVG.
- **Sticky header:** Becomes white with box-shadow on scroll, reduces padding.
- **Portfolio hover:** Dark overlay on image hover.
- **Testimonials:** Carousel-style, can use a simple auto-rotating state with dots navigation.
