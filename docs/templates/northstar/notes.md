# Northstar — Implementation Notes

Source: ColorLib Coach (https://preview.colorlib.com/theme/coach/)
New name: `northstar` | Package: `@free-react-templates/northstar`

## Section Implementation Order

1. **Navbar** — Sticky top nav with smooth-scroll. Logo: "Northstar" with a blue dot (`text-primary`). Menu items with dropdowns (About, More Links). Use `lucide-react` icons. Mobile hamburger with slide-in menu. Use `group` + state for dropdown hover/click.

2. **Hero** — Full-width image slider. Use `picsum.photos/seed/northstar-hero-N/1920/1080` for 3 images. Auto-cycle with `useEffect` + interval (5s). Dark overlay `bg-black/40`. Heading overlay: "We are" in smaller text, main heading below. CTA button.

3. **About** — Centered content section. Heading: "Hey there, I'm John The Founder". Three paragraphs of bio text. "Learn More" primary button. Generous padding.

4. **Training** — Gray bg section. Centered heading + description. Horizontal scrolling carousel of cards: each has image (`picsum.photos`), title, description. Use CSS `overflow-x-auto` + snap, or a simple React carousel state.

5. **Services** — White bg. Centered heading + description. Icon cards in a row/grid: each has a large icon (lucide-react: Award, Target, FileCheck, TrendingUp), title, description. Same layout pattern as training but icon-based.

6. **Gallery** — Full-width. Centered heading + description. 4-column responsive grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`). 12 images via `picsum.photos/seed/northstar-gal-N/400/300`. Click opens a lightbox modal (simple React state + backdrop).

7. **Testimonials** — Centered heading "Happy Customers". Carousel of testimonials: blockquote text, circular avatar (`picsum.photos/seed/northstar-person-N/200/200` with `rounded-full`), name. Auto-cycle or manual arrows.

8. **Blog** — Centered heading + description. 2-column grid of 4 entries. Each: horizontal card layout — image left (`picsum.photos/seed/northstar-blog-N/400/300` with `rounded`), text right (title, date span, excerpt, "Read More" link).

9. **Contact** — Gray bg. Centered heading "Contact Us". 3-column info row: Address, Phone, Email (each with lucide icon). Below: form with 2-column First Name fields, Email, Message textarea, "Send Message" button (full-width on mobile).

10. **Footer** — Dark bg (`bg-[#212529]`). 3-column: About Us (description), Quick Links (smooth-scroll list), Follow Us (social icons: Facebook, Twitter, Instagram, LinkedIn via lucide-react) + Subscribe Newsletter (email input + Send button). Copyright bar with Component Dock link.

## Design Notes

- **Primary blue:** `#037ef3` — use as Tailwind custom color in `@theme`.
- **Logo:** "Northstar" text with a `.` in primary blue (like original "Coach.").
- **Font loading:** Playfair Display (700) for display headings, Open Sans (400, 600, 700) for body/UI — via Google Fonts `<link>` in `index.html`.
- **Gray sections:** `bg-[#eff1f3]` for alternating backgrounds.
- **Carousel:** Keep simple — CSS scroll-snap or state-based index cycling. No external carousel library.
- **Gallery lightbox:** Simple React modal with backdrop click to close. No fancybox dependency.
- **Testimonial avatars:** `rounded-full` with fixed size, centered.
- **Blog cards:** Horizontal flex layout on lg+, stacked on mobile.
- **Contact form:** Controlled inputs with basic validation. No server submission.
- **Icons:** All `lucide-react` replacing original icofont/flaticon set.
- **Images:** All `picsum.photos/seed/northstar-*` for deterministic placeholders.
