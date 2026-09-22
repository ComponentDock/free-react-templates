# Casamora — Implementation Tasks & Design Notes

## Template Identity
- **New name:** Casamora
- **ColorLib source:** Casahotel (`casahotel`)
- **Preview URL:** https://preview.colorlib.com/theme/casahotel/
- **Package:** `@free-react-templates/casamora`

## Structure Order (section-by-section)

| # | Section | Component Name | Key Notes |
|---|---------|---------------|-----------|
| 1 | Navbar | `Navbar.tsx` | Transparent on hero, white on scroll. Hamburger → full-screen overlay. Playfair Display italic logo. |
| 2 | Hero | `Hero.tsx` | Full-width parallax bg image, dark overlay, centered heading. Mouse scroll indicator at bottom. |
| 3 | Booking Form | `BookingForm.tsx` | `bg-light`. 4-column horizontal form: check-in, check-out, adults, children. Pill orange CTA. |
| 4 | About | `About.tsx` | Two columns: text (left) + image (right). Heading "Welcome to Casamora" (italic "to"). Read More + See video links. |
| 5 | Great Offers | `RoomOffers.tsx` | `bg-light`. Two side-by-side cards with image + text. Second card reversed. Price in orange display-4. "View All Rooms" CTA. |
| 6 | Gallery | `Gallery.tsx` | Horizontal image carousel. 7+ images. "View More Photos" link below. |
| 7 | Testimonials | `Testimonials.tsx` | Carousel of testimonial cards. Circular author photos. Blockquote + author name. |
| 8 | Events | `Events.tsx` | `bg-light`. 3-column grid. Image + date meta + title link per card. |
| 9 | CTA Banner | `CtaBanner.tsx` | Top border. Two columns: text left, "Reserve Now" button right. |
| 10 | Footer | `Footer.tsx` | Dark bg `#1a1a1a`. 4-column: links, links, contact info, newsletter. Copyright + social row. |

## Design Token Mapping

| Original | Tailwind Class / Token |
|----------|----------------------|
| `#fd7e14` orange | `--color-brand: #fd7e14` in `@theme` |
| `#6c757d` gray | `text-gray-500` |
| `#1a1a1a` footer bg | `bg-[#1a1a1a]` |
| `#f8f9fa` light bg | `bg-gray-50` or `bg-light` |
| `border-radius: 50px` | `rounded-full` on buttons |
| `Mukta Mahee` | Google Fonts `<link>` in index.html |
| `Playfair Display` | Google Fonts `<link>` in index.html |
| `rgba(0,0,0,0.45)` overlay | `bg-black/45` on hero overlay |

## Fidelity Notes

- **Hero:** Original uses `data-stellar-background-ratio="0.5"` for parallax. Use CSS `background-attachment: fixed` or a scroll-based effect.
- **Booking form:** Original uses Bootstrap datepicker + ionicons calendar icons. Use native date inputs or a React date picker + Lucide Calendar icon.
- **Gallery slider:** Original uses OwlCarousel. Use a simple CSS scroll-snap carousel or a lightweight React carousel.
- **Testimonial slider:** Original uses OwlCarousel. Use CSS-based carousel or auto-rotating component.
- **Hamburger menu:** Original toggles a full-screen overlay with `site-navbar` class. Replicate with a React-controlled overlay state.
- **Icons:** Original uses Ionicons + Font Awesome. Replace all with Lucide React icons.
- **Images:** Use `https://picsum.photos/seed/casamora-<n>/<w>/<h>` for all placeholder images.
- **Footer:** Original links to ColorLib — replace with ComponentDock link.

## Source References
- **HTML structure:** Fetched from https://preview.colorlib.com/theme/casahotel/ (471 lines)
- **CSS tokens:** Extracted from `css/style.css` (827 lines) — brand orange `#fd7e14`, Mukta Mahee + Playfair Display fonts, pill buttons
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/casahotel-free-template.jpg (from TEMPLATES.md)
