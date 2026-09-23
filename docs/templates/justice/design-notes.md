# Justice — Design Notes (Thelawyer Recreation)

## Source
- **ColorLib template:** Thelawyer
- **Preview URL:** https://preview.colorlib.com/theme/thelawyer/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/thelawyer-free-template.jpg

## Section Order (1:1 from original)

1. **Header** — Sticky nav bar, logo "Justice" (left), nav links (center/right), phone CTA button (far right, blue bg)
2. **Hero** — Full-width background image (lawyer handshake), left-aligned text: subtitle "COMMITTED TO SUCCESS" (small, uppercase), h1 "Dont Feel Helpless We Fight for Justice", paragraph, "Learn About Us" dark button
3. **Practice Areas** — Section subtitle "OUR PRACTICING AREA", heading "Area of Practice That Can Help You To Win", 3-column grid of icon cards (white bg, thin border, icon centered, text below)
4. **Services** — Heading "Services", 3 image cards with thumbnail, title, description, "Learn More" link
5. **CTA Banner** — Dark background, heading "World's Leading Law Consultency Agency!", paragraph, CTA button
6. **Team** — Heading "Meet Our Dedicated Team Members", responsive grid of member cards (photo, name, role, social icons)
7. **Blog** — Heading "Lawyers news from around the world", 3-column grid of post cards (image, date, title, "Read More" button)
8. **Newsletter** — Dark background, heading, email input + submit button
9. **Footer** — Dark background, multi-column: logo + about text, quick links, practice area links, newsletter form, copyright, social icons

## Design Tokens (from preview + screenshot)

- **Primary blue:** `#2b4acb` (CTA buttons, accent lines, icon tints)
- **Dark bg:** `#2c2c2c` (footer, newsletter, CTA banner)
- **Page bg:** `#ffffff`
- **Text:** `#333` (primary), `#777` (secondary)
- **Font:** Poppins (Google Fonts)
- **Buttons:** Rounded rectangle, ~4px radius, solid fill
- **Cards:** White bg, 1px border, subtle shadow
- **Animations:** fadeInLeft on hero text elements

## Fidelity Notes

- The original uses Bootstrap 4 grid, jQuery, OwlCarousel, SlickNav, Magnific Popup
- The hero background image is a lawyer handshake photo (replace with picsum.photos placeholder)
- Practice area icons use Flaticon (replace with lucide-react equivalents)
- Footer has a newsletter signup form (keep the same layout)
- The "Want to Work" CTA section has a dark background spanning full width
- Header phone button is styled distinctly (blue bg, white text, rounded)
- Social icons in team section use Font Awesome (replace with lucide-react)

## Tasks

- [ ] Scaffold `apps/justice` from simplest existing app
- [ ] Set up `public/CNAME` and `homepage`
- [ ] Implement Header component (sticky nav)
- [ ] Implement Hero section (bg image, text overlay, CTA)
- [ ] Implement Practice Areas section (icon cards grid)
- [ ] Implement Services section (image cards)
- [ ] Implement CTA Banner section (dark bg, text, button)
- [ ] Implement Team section (responsive grid, social links)
- [ ] Implement Blog section (post cards grid)
- [ ] Implement Newsletter section (email form, dark bg)
- [ ] Implement Footer (multi-column, dark bg)
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck, lint, build, test:coverage
