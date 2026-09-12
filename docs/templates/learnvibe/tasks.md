# LearnVibe — Implementation Tasks & Design Notes

## Source reference
- **ColorLib template:** Etrain (slug: `etrain`)
- **Preview URL:** https://preview.colorlib.com/theme/etrain/
- **New name:** learnvibe

## Section order (top to bottom)

1. **Navbar** — Sticky top, logo left, nav links center-right, Login button (lg+). Mobile hamburger with collapsible menu.
2. **Hero/Banner** — Full-width section (880px height desktop), left-aligned text with headline, subtext, two CTA buttons (gradient pill + outline pill). Background: decorative image via picsum.
3. **Features** — 4-column grid: intro text + 3 feature cards. Cards have light borders, icon circles with gradient on hover, centered text.
4. **About/Learning** — 2-column: left = image with decorative background, right = "About us" label, heading, paragraph, bullet list with icons, CTA button.
5. **Member Counter** — Full-width gradient band (orange-red to gold), 4 stat counters with count-up animation. White text.
6. **Featured Courses** — "Featured Courses" heading with coral underline. 3-column grid of course cards. Each: image top, bordered text area with category badge (coral), level badge, price (coral), title, description, duration+enrolled meta, instructor info + star rating.
7. **Platform Features** — 2-column (reversed from About): left = text with heading, paragraph, 2 sub-feature items (icon circles with pinkish/peachy backgrounds), right = image.
8. **Testimonials** — Carousel/swiper. Each slide: testimonial text + name/title + circular avatar. Multi-slide visible on desktop. Pagination dots.
9. **Blog** — "Latest from Our Blog" heading. 3-column blog cards: image top, category tag (coral), title, description, comments + likes meta.
10. **Footer** — 3-column: logo + description, Newsletter (email input + social icons), Contact info. Light gray bg.
11. **Copyright** — Centered text, top border, Component Dock attribution.

## Design token mapping to Tailwind

```css
@theme {
  --color-brand-primary: #ee390f;
  --color-brand-secondary: #f9b700;
  --color-brand-accent: #ff663b;
  --color-heading: #0c2e60;
  --color-text-body: #888888;
  --color-text-muted: #556172;
  --color-bg-light: #f7f7f7;
  --color-border-light: #edeff2;
}
```

Fonts loaded via Google Fonts `<link>` in index.html:
- Poppins (300–800) for headings
- Roboto (300–500) for body

## Fidelity notes

- **Section order:** Matches 1:1 from preview.
- **Button styles:** 3 distinct styles — btn_1 (gradient pill), btn_2 (outline pill), btn_4 (coral rectangle). Map to Tailwind classes with inline gradient for btn_1, border + rounded-full for btn_2.
- **Counter gradient:** Use CSS `bg-gradient-to-t from-brand-primary to-brand-secondary`.
- **Course cards:** Bordered bottom section, image overflow, coral price float-right.
- **Testimonials:** Use a simple auto-playing carousel (CSS scroll-snap or lightweight swiper). Not full Swiper.js dependency — prefer CSS-based solution.
- **Feature cards:** 1px border, icon centered in 70px circle, text below. Hover changes border to coral + icon gradient.
- **Advance feature icons:** Circular backgrounds — `#fdeae5` (pinkish) and `#fff0e0` (peachy). Use Tailwind `bg-[#fdeae5] rounded-full`.
- **Section title underline:** Pseudo-element `::after` — 80px × 2px, `#ff663b`, centered. Implement as a small div or CSS pseudo-element under h2.
- **Footer newsletter input:** Inline with subscribe button, bordered input group.
- **Icons:** Map themify icons to lucide-react equivalents:
  - `ti-pencil-alt` → `Pencil`
  - `ti-ruler-pencil` → `Ruler`
  - `ti-layers` → `Layers`
  - `ti-new-window` → `ExternalLink`
  - `ti-light-bulb` → `Lightbulb`
  - `ti-timer` → `Clock`
  - `ti-user` → `User`
  - `ti-comments` → `MessageCircle`
  - `ti-heart` → `Heart`
  - `ti-stamp` → `Award`
  - `ti-facebook` → `Facebook`
  - `ti-twitter-alt` → `Twitter`
  - `ti-instagram` → `Instagram`
  - `ti-email` → `Mail`
  - `ti-angle-right` → `ChevronRight`

## Implementation notes

- Copy `apps/aurora` or the simplest existing app as base, rename to `learnvibe`.
- `packages/ui` components: use `cn()` for class composition, `Button`/`ButtonLink` where applicable.
- No images copied from ColorLib — use `picsum.photos/seed/learnvibe-N/W/H` for deterministic placeholders.
- Counter animation: implement with `IntersectionObserver` + requestAnimationFrame count-up.
- Testimonials: CSS-only scroll-snap carousel preferred over Swiper.js dependency.
