# Healio — Prep Notes

## Source
- ColorLib template: Health
- Slug: `health`
- Preview: https://preview.colorlib.com/theme/health/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/health-free-template.jpg

## Section Order (implementation sequence)

1. **TopBar** — horizontal flex, dark bg, logo left, quick links + phone right
2. **Navbar** — sticky, teal (#32c69a) bg, nav links left, search input right
3. **Hero** — full-width bg image, text overlay (heading, subtitle, CTA button)
4. **InfoBoxes** — 3-column grid, each: image + title + text + button, #f4f8fb bg
5. **CtaBanner** — bg image with dark overlay, heading + teal CTA button
6. **Services** — 2×3 grid of icon boxes, #f4f8fb bg, section title
7. **Departments** — horizontal scroll/carousel of department cards (image + title)
8. **Faq** — section title + subtitle (accordion items if content available)
9. **LatestNews** — 3-column blog cards (image + title + date + comments)
10. **Footer** — dark gray bg, 3 columns (about, contact form, hours), bottom nav bar

## Fidelity Notes

- The original uses Bootstrap 4 grid + custom CSS. Replace with Tailwind utilities.
- OwlCarousel is used for the departments slider — use CSS scroll-snap or a simple carousel component instead.
- Background images: use placeholder images from picsum.photos with medical-themed seeds.
- Icons: use lucide-react for service icons (heart, stethoscope, microscope, tooth, scissors, brain).
- The hero section uses a large photo of a female doctor — use a medical-themed placeholder.
- The top bar is separate from the sticky nav — two distinct header zones.
- The CTA banner has a background image with a dark semi-transparent overlay.
- Footer contact form is decorative in the original — include form fields but wire up validation.
- No border-radius on any buttons — keep them perfectly rectangular.
- Letter-spacing on buttons is 0.2em — use Tailwind tracking-[0.2em].
- Montserrat font loaded via Google Fonts link in index.html.
