# Yogapulse (ColorLib Zogin) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-yogapulse`. Recreation name: **Yogapulse** (NEW name —
> the ColorLib source keeps its name "Zogin").

## Source mapping

- **ColorLib item:** "Zogin" (TEMPLATES.md line 1898; section "## Gym (20)" near line 1875).
- **Source URL:** https://colorlib.com/wp/template/zogin/
- **Preview URL:** https://preview.colorlib.com/theme/zogin/ (REACHABLE, 36KB HTML, 8 CSS files)
- **Preview CSS:** `css/style.css` (48KB) + Bootstrap + Font Awesome + Elegant Icons + Nice Select + Barfiller + OwlCarousel2 + SlickNav
- **Font:** 'DM Sans' — Google Fonts (single font family for all text)
- **Stack:** Bootstrap 4 grid + custom CSS + OwlCarousel2 + Barfiller (progress bars)

## Reference research (done — do not redo)

### Screenshot analysis

Light-themed yoga studio landing page with deep navy blue (#263246) as primary brand color. Hero section has full-width background images with dark overlay, white text, and blue CTA button. About section has split layout with images and text. Services section shows 6 yoga practice cards. "Why Choose Us" has animated counters. Course cards show upcoming classes. Gallery has image grid. Instructor cards. Appointment form. Testimonials carousel. Footer is light with contact info.

### Section order (from DOM)

1. Header — top bar (phone, email, hours) + logo + nav + "Join Us" button
2. Hero — slider with bg images, "Welcome to Yogapulse", heading, "Discover More" CTA
3. About — split: image gallery left, text + quote + "More About Us" right
4. Services — 6 yoga practice cards (Asana, Meditation, Mudra, Bandhas, Philosophy, Pranayama)
5. Choose Us — text + animated counters (2146 Students, Years, Branches, Staff)
6. Upcoming Courses — 3 course cards with dates, instructor, "Join Now" button
7. Gallery — image grid
8. Instructors — 4 instructor cards with photos, names, roles
9. Appointment — heading + form with Submit button
10. Testimonials — carousel with reviews, trainer names
11. Footer — hours, inspiration links, about links, contact info, copyright

### Design tokens (from style.css, verified via curl)

| Token | Value | Use |
|-------|-------|-----|
| Font | 'DM Sans', sans-serif | All text (single family) |
| Primary brand | #263246 | Headings, dark sections, primary buttons |
| Secondary | #5768AD | Links, highlights, button hover |
| Gold accent | #F5C136 | Star ratings, highlights |
| Body text | #111111, #1C1C1C, #222222 | Headings, body copy |
| Muted text | #6E7580, #999999, #9B9EA3 | Secondary text |
| Light bg | #f5f5f5, #f5f6fa | Section backgrounds |
| White | #ffffff | Card backgrounds, text on dark |
| Button primary | #263246 bg, white text, radius 50px | Main CTAs (pill) |
| Button outline | transparent with border | Secondary buttons |
| Button hover | #5768AD | Hover state |
| Overlay | rgba(0,0,0,0.5) | Hero, image overlays |
| Card radius | 10px, 20px | Card corners |
| Icon circles | 50% radius | Social/feature icons |

### Icon mapping (lucide-react)

| Source icon | Recreation |
|-------------|-----------|
| Font Awesome social | lucide-react: Facebook, Twitter, Instagram |
| Elegant Icons | lucide-react equivalents |
| Yoga practice icons | lucide-react: Flower2, Brain, Hand, Heart, BookOpen, Wind |
| Menu | lucide-react: Menu |
| Clock | lucide-react: Clock |
| Phone | lucide-react: Phone |
| Mail | lucide-react: Mail |
| MapPin | lucide-react: MapPin |
| Calendar | lucide-react: Calendar |
| User | lucide-react: User |
| Star | lucide-react: Star |

### Picsum placeholder plan

- Hero backgrounds: `https://picsum.photos/seed/yogapulse-hero-1/1920/900` etc. (2 slides)
- About images: `https://picsum.photos/seed/yogapulse-about-1/400/300` etc. (3 images)
- Course images: `https://picsum.photos/seed/yogapulse-course-1/400/300` etc. (3 courses)
- Gallery images: `https://picsum.photos/seed/yogapulse-gallery-1/400/400` etc. (6 images)
- Instructor photos: `https://picsum.photos/seed/yogapulse-instructor-1/400/500` etc. (4 instructors)
- Appointment bg: `https://picsum.photos/seed/yogapulse-appointment/1920/600`

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/yogapulse` from the simplest existing app, rename package to `@free-react-templates/yogapulse`, add DM Sans 400/500/700 Google Fonts `<link>` in index.html, set `public/CNAME` = `yogapulse.free.componentdock.com` + `"homepage"`. Register workspace in package-lock.json.
2. [ ] Write spec-traceable test suite FIRST (Vitest + Testing Library, 100% coverage): Header (top bar, nav links, join button), Hero (slider, subtitle, heading, CTA), About (heading, quote, images, CTA), Services (6 practice cards), ChooseUs (heading, counters), Courses (heading, 3 cards, join buttons), Gallery (heading, images), Instructors (heading, 4 cards), Appointment (heading, submit), Testimonials (carousel, trainer name), Footer (contact, hours, componentdock link), App (composition, document title).
3. [ ] Layout shell: install DM Sans via Google Fonts, set up Tailwind theme tokens (#263246 primary, #5768AD secondary, #F5C136 gold, #f5f6fa light bg), base styles.
4. [ ] Header: top bar (phone, email, hours) + navbar (logo, nav links, "Join Us" pill button), offcanvas mobile menu.
5. [ ] Hero section: full-width slider with bg images, dark overlay, "Welcome to Yogapulse" subtitle, heading, "Discover More" pill button.
6. [ ] About section: split layout with image gallery left, text + quote + "More About Us" button right.
7. [ ] Services section: 6 yoga practice cards (Asana, Meditation, Mudra, Bandhas, Philosophy, Pranayama) with icons.
8. [ ] Choose Us section: text + 4 animated counters (2146 Students, Years, Branches, Staff).
9. [ ] Upcoming Courses: 3 course cards with dates, duration, instructor, "Join Now" button.
10. [ ] Gallery: image grid of yoga photos.
11. [ ] Instructors: 4 instructor cards with photos, names, "Yoga Trainer" subtitle.
12. [ ] Appointment: heading + form with submit button.
13. [ ] Testimonials: carousel with review text, trainer name and role.
14. [ ] Footer: business hours, inspiration links, about links, contact info, copyright with Component Dock link.
15. [ ] Run `npm run verify:app -- yogapulse` (typecheck → lint → vitest 100% → build) and fix until green.
16. [ ] Open PR `feat/template-yogapulse` → merge immediately. PR description: source URL, preview URL, token list, what differs.
17. [ ] Bookkeeping: mark TEMPLATES.md line 1898 `[x]` + surge URL, `npm run readme:status`, push.
