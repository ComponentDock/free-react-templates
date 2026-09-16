# Gloria — Implementation Tasks & Design Notes

## Source
- ColorLib slug: `spring`
- Preview: https://preview.colorlib.com/theme/spring/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/spring-free-template.jpg
- Category: Church (22 items in TEMPLATES.md)

## Section order (matches original 1:1)

1. **Navbar** — Dark bg, brand "Gloria", social icons (top-right), hamburger on mobile, 7 nav links
2. **Hero** — Full-screen bg image (`bg_1.jpg`), dark overlay, centered headline + subheading + 2 CTA buttons
3. **Upcoming Events Intro** — Bg image (`bg_4.jpg`), overlay, 2-column: left (calendar icon + heading + event quote), right (countdown timer + CTA)
4. **Daily Verse** — Light bg, centered Bible icon + scripture block + attribution
5. **Church Services** — White bg, centered heading, 2 columns × 3 items each (icon + title + desc), left-col items have icon-right, right-col items have icon-left
6. **Sermon for Today** — Light bg, heading, split layout: left = image, right = sermon title/meta/description + 2 action buttons
7. **About / Counters** — White bg, 2-col: left = 2 stacked image panels (Sunday Services, Announcement), right = heading + description + 4 stat counters (2×2 grid)
8. **Testimony** — Bg image (`bg_3.jpg`), overlay, heading, carousel of 5 testimonies (avatar + quote + name + position)
9. **Upcoming Events Detail** — White bg, 2-col: left = 2 event cards (image + text + "Read more"), right sidebar = Recent Sermons (featured card + 2 list items)
10. **Blog** — Light bg, heading, 3 blog cards (image + date overlay + title + excerpt)
11. **Footer** — Dark bg, 4 columns (brand + social, About links, Connect links, Service Hours), Component Dock link

## Design notes

- **Brand color `#c7b198`** is warm tan/beige — use as primary in `@theme` (Tailwind v4)
- **Secondary `#b59877`** for hover states
- **Fonts**: Poppins (headings, Google Fonts), Raleway (body, Google Fonts), Crimson Text (verse/accent, Google Fonts)
- **Overlays**: dark semi-transparent on bg-image sections (hero, intro, testimony)
- **Counter section**: animated number counters (use React state + useEffect with requestAnimationFrame or simple interval)
- **Testimony carousel**: implement with a simple auto-scrolling carousel or manual slide navigation
- **Blog cards**: date badge overlays on top-left of each card image
- **No parallax**: original uses `stellar-background-ratio` (jQuery plugin) — skip, use static bg images
- **No AOS/scroll animations**: replace with simple CSS transitions or Tailwind animation utilities
- **Images**: use `https://picsum.photos/seed/gloria-<n>/<w>/<h>` for deterministic placeholders
- **Footer**: 4 columns — Brand+social, About links, Connect links, Service hours

## Component list

- `Navbar.tsx`
- `Hero.tsx`
- `UpcomingEventsIntro.tsx`
- `DailyVerse.tsx`
- `ChurchServices.tsx`
- `SermonToday.tsx`
- `AboutCounters.tsx`
- `Testimony.tsx`
- `UpcomingEventsDetail.tsx`
- `Blog.tsx`
- `Footer.tsx`
