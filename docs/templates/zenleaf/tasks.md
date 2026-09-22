# Zenleaf (ColorLib Yogabest) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-zenleaf`. Recreation name: **Zenleaf** (NEW name —
> the ColorLib source keeps its name "Yogabest").

## Source mapping

- **ColorLib item:** "Yogabest" (TEMPLATES.md line 1892; section "## Gym (20)" near line 1875).
- **Source URL:** https://colorlib.com/wp/template/yogabest/
- **Preview URL:** https://preview.colorlib.com/theme/yogabest/ (REACHABLE, 44KB HTML, 7 CSS files)
- **Preview CSS:** `css/style.css` (82KB) + animate.css + OwlCarousel2 + Magnific Popup + Flaticon
- **Fonts:** 'Oswald' (headings) + 'Roboto' (body) — Google Fonts
- **Stack:** Bootstrap 4 grid + custom CSS + OwlCarousel2 + Magnific Popup for video

## Reference research (done — do not redo)

### Screenshot analysis

Light-themed yoga studio landing page with a green (#6cae22) accent color scheme. Hero section has a full-height yoga background image with dark overlay, white text, and green CTA. Services section has 3 icon cards on light background. About section has a split layout with background image and quote. Services-2 alternates images with text. Counter section has 4 animated stats. Classes section shows 3 class cards. Testimonials carousel. Schedule calendar with tabs. Trainer cards. Blog posts. Footer is dark with contact info.

### Section order (from DOM)

1. Header — top bar (phone, email, social) + navbar (logo, nav links)
2. Hero — full-height bg image, overlay, "Welcome to Zenleaf", "Yoga Enhances Your Life", CTA
3. Services (3 cards) — Outdoor, Experienced, Happy (icons + descriptions)
4. About — split: bg image + year badge left, quote + text + video right
5. Services-2 — alternating image/text: Body & Mind Balance, Healthy Daily Life, Improves flexibility
6. Counter — 4 stats: Yoga Classes, Yoga Conducted, Years of Experienced, Happy Customers
7. Classes — 3 cards: Private & Group Lessons, Yoga for Pregnant, Yoga for Beginners
8. Testimonials — heading + owl-carousel of testimonial cards
9. Schedule — tabbed calendar (October/November 2020) with training sessions
10. Trainers — 4 trainer cards (Elizabeth Nelson, Scarlett Torres, Victoria Wright, Stella Perry)
11. Blog — 3 recent post cards with dates
12. Footer — logo, recent blog, explore links, contact info, copyright

### Design tokens (from style.css, verified via curl)

| Token | Value | Use |
|-------|-------|-----|
| Font headings | 'Oswald', sans-serif | Section titles, headings |
| Font body | 'Roboto', sans-serif | Body text, descriptions |
| Primary brand | #6cae22 | CTA buttons, links, accents, highlights |
| Secondary | #9acb56 | Lighter green, hover states, gradients |
| Light green | #d5f1b6 | Subtle green backgrounds |
| Dark bg | #141b25 | Hero overlay, dark sections |
| Dark forest | #1d2e09 | Deep green-dark backgrounds |
| Body text | #000000, #333 | Headings, body copy |
| Muted text | #999 | Secondary text |
| Light bg | #f3f2ee | Warm off-white sections |
| Alt light bg | #f7f7f7, #e6e6e6 | Section variations |
| White | #ffffff | Card backgrounds, text on dark |
| Gradient | linear-gradient(to bottom, #9acb56 0%, transparent 71%) | Section accent overlays |
| Button primary | #6cae22 bg, white text | Main CTAs |
| Button hover | #9acb56 | Hover state |
| Overlay | rgba(0,0,0,0.5) | Hero, image overlays |

### Icon mapping (lucide-react)

| Source icon | Recreation |
|-------------|-----------|
| Font Awesome social | lucide-react: Facebook, Twitter, Instagram, Dribbble |
| Flaticon yoga icons | lucide-react: Flower2, Sun, Smile, Heart, etc. |
| Menu bars | lucide-react: Menu |
| Calendar | lucide-react: Calendar |
| Clock | lucide-react: Clock |
| User | lucide-react: User |
| Play button | lucide-react: Play |
| Chevron right | lucide-react: ChevronRight |
| Map pin | lucide-react: MapPin |
| Phone | lucide-react: Phone |
| Mail | lucide-react: Mail |

### Picsum placeholder plan

- Hero background: `https://picsum.photos/seed/zenleaf-hero/1920/1080`
- About image: `https://picsum.photos/seed/zenleaf-about/800/600`
- Service-2 images: `https://picsum.photos/seed/zenleaf-svc-1/600/400` etc. (3 images)
- Class images: `https://picsum.photos/seed/zenleaf-class-1/400/300` etc. (3 classes)
- Trainer photos: `https://picsum.photos/seed/zenleaf-trainer-1/400/500` etc. (4 trainers)
- Blog images: `https://picsum.photos/seed/zenleaf-blog-1/400/300` etc. (3 posts)
- Testimonial avatars: `https://picsum.photos/seed/zenleaf-avatar-1/100/100` etc.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/zenleaf` from the simplest existing app, rename package to `@free-react-templates/zenleaf`, add Oswald 400/500/700 + Roboto 400/500/700 Google Fonts `<link>` in index.html, set `public/CNAME` = `zenleaf.free.componentdock.com` + `"homepage"`. Register workspace in package-lock.json.
2. [ ] Write spec-traceable test suite FIRST (Vitest + Testing Library, 100% coverage): Header (top bar, nav links, social, hamburger), Hero (subtitle, heading, CTA), Services (3 cards), About (heading, year badge, video link), Services2 (heading, 3 items), Counter (4 stats), Classes (heading, 3 class cards), Testimonials (heading, carousel), Schedule (heading, tabs), Trainers (heading, 4 cards), Blog (heading, 3 cards), Footer (contact, componentdock link), App (composition, document title).
3. [ ] Layout shell: install Oswald + Roboto via Google Fonts, set up Tailwind theme tokens (#6cae22 primary, #9acb56 secondary, #141b25 dark, #f3f2ee light), base styles.
4. [ ] Header: top bar (dark bg, phone, email, social icons) + navbar (logo, nav links, hamburger mobile menu).
5. [ ] Hero section: full-height bg image, dark overlay, "Welcome to Zenleaf" subtitle, "Yoga Enhances Your Life" heading, description, green CTA button.
6. [ ] Services section: 3 icon cards on light #f7f7f7 bg (Outdoor, Experienced, Happy) with icons and descriptions.
7. [ ] About section: split layout with bg image + year badge left, quote + text + video play button right.
8. [ ] Services-2 section: alternating image/text layout with 3 items (Body & Mind Balance, Healthy Daily Life, Improves flexibility).
9. [ ] Counter section: 4 animated stat counters (Yoga Classes, Yoga Conducted, Years of Experienced, Happy Customers).
10. [ ] Classes section: 3 class cards with images, instructor, schedule, and lesson links.
11. [ ] Testimonials section: heading + owl-carousel of testimonial cards with avatars, names, positions.
12. [ ] Schedule section: heading + tabbed calendar (October/November 2020) with training sessions.
13. [ ] Trainers section: 4 trainer cards with photos, names, and "Owner / Head Coach" subtitle.
14. [ ] Blog section: 3 recent post cards with images, dates, titles, excerpts.
15. [ ] Footer: dark bg, logo, recent blog, explore links, contact info, copyright with Component Dock link.
16. [ ] Run `npm run verify:app -- zenleaf` (typecheck → lint → vitest 100% → build) and fix until green.
17. [ ] Open PR `feat/template-zenleaf` → merge immediately. PR description: source URL, preview URL, token list, what differs.
18. [ ] Bookkeeping: mark TEMPLATES.md line 1892 `[x]` + surge URL, `npm run readme:status`, push.
