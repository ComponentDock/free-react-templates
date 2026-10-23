# Craftwork — Implementation Notes

Source: ColorLib "Design" — https://preview.colorlib.com/theme/design/
New name: craftwork
Spec: openspec/specs/template-craftwork/spec.md

## Section order (top → bottom)

1. **Navbar** — fixed/sticky, logo left, nav links center, CTA button right, mobile hamburger
2. **Hero** — two-column: left = headline + paragraph + button + 2 feature icons; right = image + overlaid dark navy quote block
3. **Achievements** — 4 stat cards (number + heading + description) in a row
4. **How It Works** — centered subtitle + heading, then 3 columns (icon + step title + description) with curved dashed SVG arrows between them
5. **Services** — two-column: left = subtitle + heading + text + checklist + button; right = image with dotted background
6. **Testimonials** — carousel/slider with avatar image, blockquote, author name and role
7. **Blog Entries** — centered subtitle + heading, then 5 post cards (date + title link + description) in responsive grid
8. **Footer** — two-column: left = About text + social icons; right = 3 columns of navigation links; copyright row at bottom

## Fidelity notes

- **Hero quote overlay**: absolute-positioned dark navy (#000839) block at bottom-left of hero image, contains blockquote + author. Must overlap the image.
- **Feature icons**: blue circle (#1264fa, 40×40px) behind each icon via ::before pseudo-element. Use lucide-react icons as replacement for flaticon originals.
- **How It Works SVG arrows**: curved dashed (#979797) SVG paths between steps. Replace with inline SVG or dashed curved CSS lines. Hidden on mobile.
- **Services dotted background**: decorative dotted PNG behind image. Can use CSS background pattern or skip — focus on layout.
- **Blog cards**: asymmetric border-radius (20px except bottom-left = 0). Hover lifts -5px with shadow. Gray (#f8f9fa) section background.
- **Testimonial carousel**: horizontal scroll or CSS-based carousel. Multiple testimonials with same structure.
- **Footer social icons**: use lucide-react equivalents (Facebook, Twitter, Instagram, Dribbble, LinkedIn).
- **Footer links**: 3 columns of navigation lists — map to plausible links.
- **CTA button in nav**: pill border + brand color on hover. "Free Templates" → "More Templates" pointing to Component Dock.

## Placeholder images

- Hero image: `https://picsum.photos/seed/craftwork-hero/800/600`
- Services image: `https://picsum.photos/seed/craftwork-service/600/700`
- Testimonial avatars: `https://picsum.photos/seed/craftwork-person-1/80/80`, `person-2`, `person-3`

## Component mapping

| ColorLib class        | React component     | Notes                    |
| --------------------- | ------------------- | ------------------------ |
| `.hero`               | Hero.tsx            | Two-col with quote overlay |
| `.achievements`       | Achievements.tsx    | 4 stat cards             |
| `.how-it-works`       | HowItWorks.tsx      | 3 steps + SVG arrows     |
| `.services-section`   | Services.tsx        | Two-col, gray bg         |
| `.testimonial-section`| Testimonials.tsx    | Carousel                 |
| `.blog-entries-section`| BlogEntries.tsx    | 5 post cards             |
| `.site-footer`        | Footer.tsx          | 3-col nav + social       |
| `.site-nav`           | Navbar.tsx          | Sticky nav + mobile      |
