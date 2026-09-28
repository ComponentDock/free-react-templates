# Chophouse (ColorLib Steak) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-chophouse`. Recreation name: **Chophouse** (NEW name
> — the ColorLib source keeps its name "Steak").

## Source mapping

- **ColorLib item:** "Steak" (TEMPLATES.md line 2701).
- **Source URL:** https://colorlib.com/wp/template/steak/
- **Preview URL:** https://preview.colorlib.com/theme/steak/ (verified reachable 2026-09-28, HTTP 200).
- **Preview CSS:** `css/style.css` (143,959 bytes) — Bootstrap 4 base + custom template styles. Google Fonts `Playfair Display` (300,400,700). Icon fonts: Ionicons, Flaticon, icomoon — all to be replaced with `lucide-react`.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/steak-free-template.jpg

## Reference research (done — do not redo)

### Screenshot visual description

Browsed via live preview and screenshot reference 2026-09-28. The template
is a full-page restaurant design with:
- Dark parallax hero with food photo background and centered white heading
- Clean white about section with a food image on the left
- Light grey services section with 6 icon cards in a grid
- Tabbed menu section with food photos, dish names, and prices
- Animated counter stats on light grey background
- News/event cards with thumbnails
- Testimonial carousel with quotes
- Reservation section with opening hours and a booking form
- Dark footer with 4 columns of links

Aesthetic: warm, professional restaurant theme. Playfair Display serif
headings give an upscale feel. Orange (#fba83b) accent buttons against
white sections. Dark hero (#313137 overlay) creates contrast. Overall
palette is white/dark/orange — classic steakhouse branding.

### Design tokens (live stylesheet + rendered page, verified 2026-09-28)

| Token            | Value                                  | Source CSS                                                  |
| ---------------- | -------------------------------------- | ----------------------------------------------------------- |
| Heading font     | 'Playfair Display' 300/400/700        | `@import url("https://fonts.googleapis.com/css?family=Playfair+Display:300,400,700")` |
| Body font        | system sans-serif (-apple-system, ...) | Bootstrap 4 default                                         |
| Brand orange     | `#e58405`                              | Accent in various selectors                                 |
| Button orange    | `#fba83b`                              | `.btn-primary { background-color: #fba83b; border-color: #fba83b }` |
| Button text      | `#212529`                              | `.btn-primary { color: #212529 }`                           |
| Button radius    | `0.25rem` (4px)                        | `.btn { border-radius: 0.25rem }`                           |
| Dark overlay     | `#313137` at 0.4 opacity              | `.cover-parallax-1.overlay-1:before { background: #313137; opacity: .4 }` |
| Hero heading     | 80px bold white (50px mobile)         | `.cover-parallax-1 .heading`                                |
| Header bg (scrolled) | `#fff`                            | `.templateux-header.scrolled { background: #fff }`          |
| Section bg light | `#f8f9fa` (Bootstrap bg-light)        | `.bg-light` on services, fun facts, testimonials            |
| Body text        | `#212529`                              | Bootstrap default                                           |
| Muted text       | `#6c757d`                              | Bootstrap text-muted                                        |
| Footer bg        | `#16181b`                              | Dark section background                                     |

### Section structure (DOM order, verified from live HTML)

1. **Navbar** — `templateux-header` (absolute, transparent, `.scrolled` → white).
   Logo text "Steak" left. Nav links: Home, Menu, Gallery, Contact. "Reserve Now"
   CTA button. Hamburger toggle on mobile.

2. **Hero** — `cover-parallax-1 overlay-1` — full-viewport parallax with dark
   overlay (`#313137` @ 0.4). Background image `images/slider-1.jpg`. Centered:
   h3 "Welcome To Steak Food & Restaurant" + paragraph + "Play Video" `.btn-primary`.
   Scroll indicator arrow at bottom.

3. **About** — Two-column row: left = `col-lg-5` with food image (`images/about-image-1.png`),
   right = `col-lg-7` with heading "Welcome To Steak Food & Restaurant", description
   paragraph, "Read More" `.btn-primary` button.

4. **Services** — `templateux-section bg-light`. Heading "Restaurant Services" +
   intro paragraph. 3×2 grid (`col-md-6 col-lg-4`) of 6 service cards
   (`.block-icon-1`): icon + h3 title + description. Items: Noodles & Spaghetti,
   Big Hamburger, Chicken Leg, Vegetarian Food, Fried Chicken, Beef Steak & Rib.

5. **Menu** — `templateux-section` (white). Heading "Our Menu" + intro paragraph.
   Three tabs: Breakfast, Lunch, Dinner. 3-col grid of menu items: image + h5 name
   + h6 price + description paragraph. Items repeat across tabs with different
   prices. ~6 visible items per tab.

6. **Fun Facts** — `templateux-section bg-light`. Heading "Today's Fun Facts".
   3 counters: "Japanese Noodles Sold", "Tasty Burgers Sold", "Fried Chicken Sold"
   (all show 0, animated on scroll).

7. **News & Events** — `templateux-section` (white). Heading "News & Events" +
   intro paragraph. 3-column grid of event cards (`.block-thumbnail-1`): thumbnail
   image + h2 title + date + comment count. Events: "Party At The Beach",
   "Unlimited Drinks", "Party At The Beach" (repeated).

8. **Testimonials** — `templateux-section bg-light`. Carousel of testimonial items:
   quote text (h3 author name + subtitle title). Authors: John Doe (CEO, Founder),
   James Woodland, Rob Smith. Prev/next navigation arrows.

9. **Reservation** — `templateux-section` (white). Heading "Reserve A Table" +
   intro paragraph. Two-column: left = opening hours table (Mon–Fri 7AM–11AM
   Breakfast, 12PM–11PM Lunch/Dinner; Sat CLOSED; Sun same as weekdays) + phone
   (+1 398 239 8483); right = form with Date, Time, Name, Phone, Email inputs +
   submit button.

10. **Footer** — Dark bg (`#16181b`). 4 columns: About (logo + description),
    Quick Links (Home, Menu, Gallery, Reservation, FAQ, Contact Us), Support
    (Call Us, About Us, Careers, Terms, Privacy), Connect With Us (social icons).
    Copyright line + Component Dock attribution at bottom.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/chophouse` from the simplest existing app
       (`cp -r apps/<simplest> apps/chophouse`), rename package to
       `@free-react-templates/chophouse`, add Playfair Display 300/400/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `chophouse.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json (`npm install` at repo root).

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (logo text, nav links, scroll behavior,
       hamburger on mobile), Hero (heading, background image, Play Video
       button, scroll indicator), About (two-column, heading, description,
       Read More button), Services (6 cards with icon + title + description,
       bg-light), Menu (3 tabs, item grid, dish name + price + description),
       Fun Facts (3 counters), News & Events (3 event cards with image +
       title + date + comments), Testimonials (carousel with prev/next,
       quote + author), Reservation (hours display, phone, form fields +
       submit), Footer (4 columns, Component Dock link), App (landmarks,
       document title "Chophouse — Restaurant").

3. [ ] Navbar component: absolute positioning, transparent → white on scroll
       (IntersectionObserver or scroll listener). Logo text. Nav links.
       "Reserve Now" primary CTA button. Hamburger menu on mobile (slide or
       dropdown). Smooth scroll to section anchors.

4. [ ] Hero section: full-viewport height, background image with
       `object-fit: cover`, dark overlay (`#313137` at 0.4 opacity via
       pseudo-element or absolute div). Centered Playfair Display heading
       (80px bold white, responsive to 50px). Subtext paragraph. "Play Video"
       `.btn-primary` button. Scroll indicator (animated chevron-down icon).

5. [ ] About section: two-column grid (`col-lg-5` / `col-lg-7` equivalent).
       Left: food image (picsum placeholder). Right: heading, description
       paragraph, "Read More" `.btn-primary` button.

6. [ ] Services section: `bg-light` background. Section heading "Restaurant
       Services" + intro paragraph. 3-column responsive grid (3×2 = 6 cards).
       Each card: icon (lucide-react) + h3 title + description. Cards:
       Utensils/Noodles, Beef/Hamburger, Drumstick/Chicken Leg, Leaf/Vegetarian,
       Flame/Fried Chicken, Beef/Steak Rib.

7. [ ] Menu section: section heading "Our Menu" + intro paragraph. Three
       tab buttons: Breakfast, Lunch, Dinner. Active tab styling (orange
       underline or fill). 3-column grid of menu items per tab. Each item:
       food image (picsum), h5 name, h6 price (bold, orange or dark),
       description paragraph. Tab switching via React state.

8. [ ] Fun Facts section: `bg-light` background. Section heading "Today's
       Fun Facts". Three counters in a row with animated number counting
       (use IntersectionObserver to trigger on scroll-into-view). Counters:
       "Japanese Noodles Sold", "Tasty Burgers Sold", "Fried Chicken Sold".
       Format: large number + label below.

9. [ ] News & Events section: section heading "News & Events" + intro
       paragraph. 3-column grid of event cards. Each card: thumbnail image
       (picsum), h2 title, date string, comment count. Cards link to `#`
       (no real pages).

10. [ ] Testimonials section: `bg-light` background. Carousel/slider with
        prev/next arrow buttons. Each slide: quote paragraph (styled with
        quotation marks), h3 author name, subtitle (CEO, Founder, etc.).
        Implement carousel with React state (current index, next/prev
        handlers). 3 slides total.

11. [ ] Reservation section: two-column layout. Left column: "Time Open"
        heading + opening hours table (styled list) + phone number with
        phone icon. Right column: "Reservation Form" heading + form with
        Date (input type=date), Time (input type=time), Name (text),
        Phone (tel), Email (email) + submit button. Form is local state
        only (no server submission — show confirmation alert or toast).

12. [ ] Footer component: dark bg (`#16181b` or Tailwind `bg-[#16181b]`).
        4-column responsive grid: About (logo + description), Quick Links
        (list of anchor links), Support (list), Connect With Us (social
        icons via lucide-react: Facebook, Twitter, Instagram). Bottom bar:
        copyright text + "Component Dock" link to
        https://www.componentdock.com/.

13. [ ] Run `npm run verify:app -- chophouse` (typecheck → lint → vitest
        100% → build) and fix until green.

14. [ ] Open PR `feat/template-chophouse` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (Playfair Display,
        orange `#fba83b` buttons, dark overlay `#313137`, light sections
        `#f8f9fa`, dark footer `#16181b`), and what differs (renamed
        "Chophouse", lucide icons replacing Ionicons/Flaticon/icomoon,
        picsum placeholders for food images, form is local state only,
        Component Dock footer).

15. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2701 `[x]` + surge
        URL (`https://chophouse.free.componentdock.com`), `npm run
        readme:status`, push.

## Picsum placeholder plan

The template has multiple food images that need placeholders:

| Section  | Original source               | Picsum seed                             | Size      |
| -------- | ----------------------------- | --------------------------------------- | --------- |
| Hero     | `images/slider-1.jpg`         | `https://picsum.photos/seed/chophouse-hero/1920/1080` | 1920×1080 |
| About    | `images/about-image-1.png`    | `https://picsum.photos/seed/chophouse-about/600/400` | 600×400   |
| Menu (×6) | `images/menu_1.jpg` etc.    | `https://picsum.photos/seed/chophouse-menu-1/400/300` through `-6` | 400×300 |
| News (×3) | `images/thumb-1.jpg` etc.   | `https://picsum.photos/seed/chophouse-news-1/400/300` through `-3` | 400×300 |

## Icon mapping (lucide-react)

| Source icon family           | Recreation (lucide-react)    |
| ---------------------------- | ---------------------------- |
| Ionicons (various)           | Context-appropriate lucide icons |
| Flaticon (service icons)     | `Utensils`, `Beef`, `Drumstick`, `Leaf`, `Flame`, `Cookie` |
| icomoon (navigation)         | `Menu`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `Phone`, `Mail`, `Facebook`, `Twitter`, `Instagram` |
| Play button                  | `Play`                       |
| Scroll indicator             | `ChevronDown`                |
