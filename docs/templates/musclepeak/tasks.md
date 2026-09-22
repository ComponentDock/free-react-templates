# Musclepeak (ColorLib Zacson) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-musclepeak`. Recreation name: **Musclepeak** (NEW name —
> the ColorLib source keeps its name "Zacson").

## Source mapping

- **ColorLib item:** "Zacson" (TEMPLATES.md line 1897; section "## Gym (20)" near line 1875).
- **Source URL:** https://colorlib.com/wp/template/zacson/
- **Preview URL:** https://preview.colorlib.com/theme/zacson/ (REACHABLE, 36KB HTML, 10 CSS files)
- **Preview CSS:** `assets/css/style.css` (177KB) + Bootstrap + OwlCarousel2 + SlickNav + Flaticon + Gijgo (datepicker) + animate + Magnific Popup + FontAwesome + Themify Icons
- **Fonts:** 'Oswald' (headings) + 'Roboto Condensed' (body) — Google Fonts
- **Stack:** Bootstrap 4 grid + custom CSS + OwlCarousel2 + Gijgo datepicker

## Reference research (done — do not redo)

### Screenshot analysis

Dark-themed gym trainer personal page. Hero section has a full-height background image with dark red gradient overlay, white "Gym Trainer" heading, and red CTA. Training categories section on dark background with 2 cards. Gallery has a masonry grid of fitness images. Pricing section has 3 cards on light background. About section has text + image. Blog section has 3 cards. Footer is dark with contact info.

### Section order (from DOM)

1. Header — transparent, logo, nav links, Contact me button
2. Hero — slider with bg image, greeting, "Gym Trainer" heading, "My Courses" CTA
3. Training Categories — 2 cards (Personal training, Group training) on dark bg
4. Gallery — masonry grid of gym images with overlay titles
5. Pricing — 3 cards with duration, price, features, "Join Now" button
6. About Me — split: text + CTA left, image right
7. Blog — 3 post cards with category tags
8. Footer — contact info, nav links, copyright

### Design tokens (from style.css, verified via curl)

| Token | Value | Use |
|-------|-------|-----|
| Font headings | 'Oswald', sans-serif | Section titles, headings |
| Font body | 'Roboto Condensed', sans-serif | Body text, descriptions |
| Primary brand | #f04e3c / #f44a40 | CTA buttons, links, highlights |
| Dark red | #950101 | Gradient start |
| Dark red mid | #630102 | Gradient middle |
| Dark red deep | #3d0302 | Gradient end |
| Dark bg | #111111 | Dark sections, training categories |
| Body text | #555555, #777777 | Headings, body copy |
| Muted text | #999999 | Secondary text |
| Light bg | #f9f9ff, #fbf9ff | Very light purple tint sections |
| Alt light bg | #f7f7f7, #eeeeee | Section variations |
| White | #ffffff | Card backgrounds, text on dark |
| Gradient | linear-gradient(to bottom, #950101, #630102, #3d0302) | Hero, dark section overlays |
| Button primary | #f04e3c bg, white text | Main CTAs |
| Button border | transparent with border | Outline buttons |
| Overlay | rgba(0,0,0,0.3), rgba(0,0,0,0.5) | Image overlays |

### Icon mapping (lucide-react)

| Source icon | Recreation |
|-------------|-----------|
| FontAwesome social | lucide-react: Facebook, Twitter, Instagram |
| Flaticon gym icons | lucide-react: Dumbbell, Users, Image, DollarSign, BookOpen, MapPin, Phone, Mail |
| Menu | lucide-react: Menu |
| Chevron | lucide-react: ChevronRight |
| Play button | lucide-react: Play |

### Picsum placeholder plan

- Hero background: `https://picsum.photos/seed/musclepeak-hero/1920/1080`
- Training category images: `https://picsum.photos/seed/musclepeak-train-1/600/400` etc. (2 images)
- Gallery images: `https://picsum.photos/seed/musclepeak-gallery-1/400/400` etc. (6 images)
- About image: `https://picsum.photos/seed/musclepeak-about/600/500`
- Blog images: `https://picsum.photos/seed/musclepeak-blog-1/400/300` etc. (3 posts)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/musclepeak` from the simplest existing app, rename package to `@free-react-templates/musclepeak`, add Oswald 400/500/700 + Roboto Condensed 400/700 Google Fonts `<link>` in index.html, set `public/CNAME` = `musclepeak.free.componentdock.com` + `"homepage"`. Register workspace in package-lock.json.
2. [ ] Write spec-traceable test suite FIRST (Vitest + Testing Library, 100% coverage): Header (logo, nav links, contact button), Hero (greeting, heading, CTA), TrainingCategories (2 cards with titles, descriptions, buttons), Gallery (masonry grid with overlay titles), Pricing (heading, 3 cards with prices, features, join buttons), About (heading, text, CTA), Blog (heading, 3 cards with categories), Footer (contact info, componentdock link), App (composition, document title).
3. [ ] Layout shell: install Oswald + Roboto Condensed via Google Fonts, set up Tailwind theme tokens (#f04e3c primary, #950101 dark red, #111111 dark bg, #f9f9ff light bg), base styles.
4. [ ] Header: transparent sticky header with logo, nav links, "Contact me" button, hamburger mobile menu.
5. [ ] Hero section: full-height bg image, dark red gradient overlay, "Hi This is Musclepeak" greeting, "Gym Trainer" heading, "My Courses" border button.
6. [ ] Training Categories: 2 cards on #111111 dark bg (Personal training, Group training) with images, descriptions, "View Courses" buttons.
7. [ ] Gallery: masonry grid of fitness images with hover overlay and "Muscle gaining" titles.
8. [ ] Pricing: 3 pricing cards on light bg with duration, price ($30/m), feature lists, "Join Now" border buttons.
9. [ ] About Me: split layout with text + "My Courses" button left, image right.
10. [ ] Blog: 3 post cards with images, "Gym & Fitness" category tags, titles.
11. [ ] Footer: dark bg, contact info (location, phone, email), nav links, copyright with Component Dock link.
12. [ ] Run `npm run verify:app -- musclepeak` (typecheck → lint → vitest 100% → build) and fix until green.
13. [ ] Open PR `feat/template-musclepeak` → merge immediately. PR description: source URL, preview URL, token list, what differs.
14. [ ] Bookkeeping: mark TEMPLATES.md line 1897 `[x]` + surge URL, `npm run readme:status`, push.
