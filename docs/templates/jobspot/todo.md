# JobSpot — Implementation Notes

Source: ColorLib JobPro (https://colorlib.com/wp/template/jobpro/)
Preview: https://preview.colorlib.com/theme/jobpro/

## Section order (must match 1:1)

1. Navbar
2. Hero
3. Job Search Bar
4. Services (4 columns)
5. Categories (carousel)
6. Featured Jobs (list)
7. CTA Banner
8. Testimonials (carousel)
9. Latest Candidates (carousel)
10. Recent Blog (4-column grid)
11. Newsletter (parallax)
12. Footer

## Component breakdown

| Component | File | Notes |
|---|---|---|
| Navbar | `src/components/Navbar.tsx` | Dark bg, brand left, nav links + green CTA right. Hamburger on mobile (state toggle). |
| Hero | `src/components/Hero.tsx` | Full-height bg image via picsum, dark overlay, centered text, two CTA buttons. |
| JobSearchBar | `src/components/JobSearchBar.tsx` | Dark bg section. Two tabs ("Find a Job" / "Find a Candidate") with pill nav. Form fields: keyword input, location/category/salary selects. |
| Services | `src/components/Services.tsx` | 4-column grid. Each: icon (lucide-react), heading, paragraph. |
| Categories | `src/components/Categories.tsx` | Carousel of category cards. Each: icon, name, open position count. Use CSS scroll-snap or simple flex with overflow-x-auto. |
| FeaturedJobs | `src/components/FeaturedJobs.tsx` | List of job cards. Each: type badge, title, company, location, category tag, date, salary, "Apply" button, heart icon. |
| CtaBanner | `src/components/CtaBanner.tsx` | Centered text + secondary button. Simple section. |
| Testimonials | `src/components/Testimonials.tsx` | Dark bg image + overlay. Carousel of quote cards with avatar, name, position. |
| Candidates | `src/components/Candidates.tsx` | Carousel of profile cards. Each: photo, name, location, bio. |
| RecentBlog | `src/components/RecentBlog.tsx` | 4-column grid. Each: thumbnail, meta (date, author, comments), title, excerpt. |
| Newsletter | `src/components/Newsletter.tsx` | Parallax bg. Email input + subscribe button. |
| Footer | `src/components/Footer.tsx` | Dark bg. 5 columns: brand+social, Employers, Candidate, Account, Contact. Copyright bar. Links to componentdock.com. |

## Design fidelity notes

- **Colors:** Primary blue `#007bff`, secondary green `#91c235` (CTA accent), dark bg `#1d2124` / `#171717`. Use these as Tailwind theme tokens.
- **Font:** "Source Sans Pro" via Google Fonts `<link>` in `index.html`. All text inherits this font.
- **Buttons:** Bootstrap-style with `border-radius: 0.25rem`. Primary = blue bg, secondary = green bg. No pill/rounded buttons.
- **Section rhythm:** `6em 0` vertical padding (use `py-24` in Tailwind).
- **Overlays:** Hero + Testimonials use dark image backgrounds with semi-transparent dark overlay (`bg-black/50` or similar).
- **Carousels:** Original uses Owl Carousel. For React, use CSS scroll-snap or a lightweight carousel. Do NOT install heavy carousel libraries — prefer CSS scroll-snap with overflow-x-auto and snap points.
- **Job cards:** Horizontal layout on desktop (info left, actions right). Stacked on mobile. Subtle border or shadow.
- **Blog cards:** Equal-height grid with `align-self-stretch`. Thumbnail images via picsum.photos.
- **Candidate/Testimonial cards:** Circular avatar images. Carousel layout.
- **Newsletter form:** Inline input + button. Simple form, no validation needed (just visual).

## Image strategy

All images via `https://picsum.photos/seed/<jobspot-variant>/<width>/<height>`:
- Hero bg: `seed/jobspot-hero/1920/1080`
- Testimonial bg: `seed/jobspot-testi/1920/800`
- Blog thumbnails: `seed/jobspot-blog-1/400/300`, etc.
- Candidate avatars: `seed/jobspot-cand-1/200/200`, etc.
- Category icons: lucide-react (no images needed)

## Pitfalls

1. The search bar tabs use Bootstrap pill nav pattern — implement with controlled state, not URL routing.
2. Categories carousel: original uses Owl Carousel with auto-scroll. CSS scroll-snap is a clean alternative. Do NOT add `swiper` or `embla` as a dependency.
3. Footer "JobSpot." brand text must NOT reference "JobPro" or ColorLib.
4. The hero job count is a static number in the original — keep it static, no animation needed.
5. The newsletter "Subscribe" button is styled differently from primary buttons — it uses a plain background, not `btn-primary`.
