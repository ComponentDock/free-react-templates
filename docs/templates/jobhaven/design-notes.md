# JobHaven — Implementation Notes

**Source:** ColorLib Joblisting — https://preview.colorlib.com/theme/joblisting/
**New name:** jobhaven
**Preview analyzed:** 2026-09-18

## Section order (top to bottom)

1. **Navbar** — sticky header, logo left, nav links center-right, Signup/Login buttons far right
2. **Hero Banner** — full-width dark overlay on background image, centered headline "1500+ Jobs posted last week", search form (keyword input + area/category dropdowns + search button), search-by-tags line
3. **Feature Highlights** — 4 cards in a row (Searching, Applying, Security, Notifications), white background, centered text
4. **Popular Job Posts Carousel** — horizontal carousel of job cards with thumbnail + "view job post" overlay button + title + location + description
5. **Featured Job Categories** — section heading + subtitle, 6 circular icon cards in a grid (Accounting, Development, Technology, Media & News, Medical, Government)
6. **Job Listings + Sidebar** — two-column layout:
   - Left (col-8): filter tabs (Recent, Full Time, Intern, Part Time), job post cards with thumbnail + skill tags + title + company + description + nature + location + salary + apply button, "Load More" button
   - Right sidebar (col-4): Jobs by Location list, Top Rated Jobs carousel, Jobs by Category list, Career Advice Blog cards
7. **Call to Action** — centered heading + description + two CTA buttons (I am a Candidate, Request Free Demo), section-gap background
8. **App Download** — two-column: phone mockup left, heading + description + App Store / Play Store buttons right
9. **Footer** — dark background, 4 columns: Top Products links, Newsletter form, Instagram feed (8 thumbnails), social icons; bottom bar with copyright + Component Dock link

## Design token mapping to Tailwind

| Token             | Tailwind usage                         |
| ----------------- | -------------------------------------- |
| `#49e4fa` primary | `bg-cyan-400` or custom `brand` in `@theme` |
| `#222` text       | `text-gray-900`                        |
| `#777` secondary  | `text-gray-500`                        |
| `#f9f9ff` bg      | `bg-slate-50` or custom `section-bg`   |
| Poppins font      | Google Fonts `<link>` in `index.html`  |
| `3px` button r    | `rounded` (0.25rem)                    |
| `20px` pill r     | `rounded-full`                         |
| `8px` card r      | `rounded-lg`                           |
| Tag colors        | Map to Tailwind colors or custom `@theme` vars |

## Fidelity notes

- The hero uses a parallax-style background image with a dark overlay div. Use `bg-cover bg-center` with a `bg-black/50` overlay.
- The search form uses Bootstrap-style grid (col-lg-4/3/3/2). In Tailwind, use `grid grid-cols-2 lg:grid-cols-10 gap-4` or flex with proportional widths.
- The popular-post carousel and top-rated sidebar carousel are Owl Carousel in the original. Use CSS scroll-snap or a lightweight React carousel.
- The featured category icons are circular images (o1.png–o6.png). Use `picsum.photos` placeholders with `rounded-full`.
- Job listing skill tags use distinct background colors (Art=#f44a40, Media=#f4e700, Design=#38a4ff). Map to custom Tailwind colors.
- The download section has a phone mockup image on the left. Use a placeholder or omit the mockup.
- The footer background is dark (`#222`). Use `bg-gray-900`.
- Instagram feed thumbnails (i1–i8) are square. Use `picsum.photos` with `rounded`.
- All Linearicons (lnr-*) and Font Awesome (fa-*) icons should be replaced with lucide-react equivalents.

## Component list

1. `Navbar.tsx` — sticky, logo, nav links, Signup/Login buttons, mobile menu
2. `Hero.tsx` — background image, overlay, headline, search form, tags line
3. `Features.tsx` — 4 feature cards
4. `PopularPosts.tsx` — carousel of job post cards
5. `FeaturedCategories.tsx` — heading, subtitle, 6 category icons
6. `JobListings.tsx` — filter tabs, job post cards, Load More button
7. `Sidebar.tsx` — Jobs by Location, Top Rated carousel, Jobs by Category, Blog cards
8. `CallToAction.tsx` — heading, description, two buttons
9. `AppDownload.tsx` — phone mockup, heading, store buttons
10. `Footer.tsx` — 4-column footer, copyright, Component Dock link
