# Merciful (ColorLib Salvation) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-merciful`. Recreation name: **Merciful** (NEW name —
> the ColorLib source keeps its name "Salvation").

## Source mapping

- **ColorLib item:** "Salvation" (TEMPLATES.md line 1305; section
  "## Nonprofit / Church (8)" at line 1296). The
  `wp/template/salvation/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/salvation/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/salvation/`
  (HTTP 200, Bootstrap 5 multi-page church template, `<title>Salvation
  - Church Website Template</title>`).
- **Preview CSS:** `css/style.css` (combined Bootstrap 4.5 + custom
  Salvation styles ~3000+ lines), plus `css/swiper-bundle.min.css`,
  `css/glightbox.min.css`, `css/aos.css`, `css/flaticon.css`.
  External: Font Awesome 7.1.0 CDN, Google Fonts Poppins 300–800.
  Scripts: Bootstrap 5, Swiper, GLightbox, AOS (animate-on-scroll),
  custom `js/main.js`.

## Reference research (done — do not redo)

### Screenshot (from TEMPLATES.md)

Church template with a full-width hero slider showing a dark overlay on
a church/worship background image, white text headlines ("Transform
Live" / "Total Surrender to God"), bold red "Become A Volunteer" CTA
button. Below: service cards on white, a red services block, an about
section with an interior church photo, a red counter bar, sermon entries
with photos, a dark-red testimony carousel, blog cards, events with
photos, a photo gallery grid, and a dark footer. Aesthetic: bold, warm,
church-themed, red accent throughout, Poppins typography, clean Bootstrap
grid.

### Section order (from fetched HTML, verified live)

1. Top bar (location + social)
2. Navbar (dark, brand "Salvation" → "Merciful", nav links, Donate CTA)
3. Hero slider (Swiper, 2 slides, navy overlay, centered text + CTA)
4. Services grid (3 cards + 1 red block, 8-col + 4-col layout)
5. About section (bg-light, 6+6 split: image + text)
6. Counter bar (bg-primary #ce0f3d, 4 animated stats)
7. Sermons (3 entries, alternating image/text, bg-light)
8. Testimony (bg #9e0c2f, carousel with avatars + quotes)
9. Blog (3 cards, 3-column grid)
10. Events (2 entries, image + text layout)
11. Gallery (4-col + 2-col grid, GLightbox)
12. Footer (dark #1a1a1a, 4 columns + copyright)

### Design tokens (live stylesheet + rendered page)

| Token               | Value                          | Use                                                                           |
| ------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| Brand               | `#ce0f3d`                      | Buttons, links, subheadings, services-block bg, counter bg, all accents       |
| Brand dark          | `#9e0c2f`                      | Testimony section background (darker red)                                     |
| Hero overlay        | `#00043c`                      | Dark navy overlay on hero slider images                                       |
| Bg light            | `#f4f4f4`                      | About section, sermon entries background                                      |
| Footer              | `#1a1a1a`                      | Footer background (very dark gray)                                            |
| Ink                 | `#40415e`                      | Body text                                                                     |
| White               | `#fff`                         | Hero text, button text, counter text                                          |
| Font                | 'Poppins', Arial, sans-serif   | Google Fonts 300–800; body base ~16px/1.6                                     |
| Btn radius          | `40px`                         | Pill-shaped buttons                                                           |
| Btn bg              | `#ce0f3d`                      | Primary button background                                                     |
| Navbar bg           | `#343a40` (Bootstrap dark)     | Dark navbar background                                                        |
| Topbar bg           | `#fff`                         | White top bar                                                                 |
| Services block bg   | `#ce0f3d`                      | Red accent block in services grid (white text)                                |

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph                     | Recreation                          |
| -------------------------------- | ----------------------------------- |
| `fas fa-map-marker-alt`          | lucide `MapPin`                     |
| `fas fa-bars`                    | lucide `Menu`                       |
| `fas fa-play`                    | lucide `Play`                       |
| `fas fa-download`                | lucide `Download`                   |
| `fas fa-quote-left`              | lucide `Quote`                      |
| `fas fa-comment`                 | lucide `MessageCircle`              |
| `fas fa-calendar`                | lucide `Calendar`                   |
| `fas fa-building`                | lucide `Building2`                  |
| `fas fa-heart`                   | lucide `Heart`                      |
| `fas fa-phone`                   | lucide `Phone`                      |
| `fas fa-paper-plane`             | lucide `Send`                       |
| `fab fa-facebook-f`              | lucide `Facebook` (or `Globe` alt)  |
| `fab fa-twitter`                 | lucide `Twitter` (or `Globe` alt)   |
| `fab fa-instagram`               | lucide `Instagram` (or `Globe` alt) |
| `flaticon-church`                | lucide `Church`                     |
| `flaticon-pray`                  | lucide `Hand`                       |
| `flaticon-love`                  | lucide `Heart`                      |
| Swiper prev/next arrows          | lucide `ChevronLeft` / `ChevronRight`|

Note: Font Awesome 7.1.0 CDN is used in the source. The recreation
SHALL NOT ship Font Awesome — use lucide-react icons instead. Flaticon
icons (church, pray, love) map to approximate lucide equivalents.

### Picsum placeholder plan

The template has MANY background images. Use picsum with deterministic
seeds:

| Section          | Placeholder seed pattern                       | Dimensions     |
| ---------------- | ---------------------------------------------- | -------------- |
| Hero slide 1     | `picsum.photos/seed/merciful-hero-1/1920/1080` | 1920×1080      |
| Hero slide 2     | `picsum.photos/seed/merciful-hero-2/1920/1080` | 1920×1080      |
| About image      | `picsum.photos/seed/merciful-about/800/600`    | 800×600        |
| Sermon 1         | `picsum.photos/seed/merciful-sermon-1/800/600` | 800×600        |
| Sermon 2         | `picsum.photos/seed/merciful-sermon-2/800/600` | 800×600        |
| Sermon 3         | `picsum.photos/seed/merciful-sermon-3/800/600` | 800×600        |
| Testimony avatars| `picsum.photos/seed/merciful-person-N/150/150` | 150×150 (×5)  |
| Blog cards       | `picsum.photos/seed/merciful-blog-N/800/500`   | 800×500 (×3)   |
| Event images     | `picsum.photos/seed/merciful-event-N/800/430`  | 800×430 (×2)   |
| Gallery images   | `picsum.photos/seed/merciful-gallery-N/600/600`| 600×600 (×6)   |

### Donation modal notes

The source has a Bootstrap modal (`#donateModal`) triggered by the
navbar "Donate" link. It contains a donation form with amount selection
and payment fields. The recreation should:
- Implement as a React modal (dialog element or headless UI)
- Include amount selection buttons (e.g. $25, $50, $100, Custom)
- Include optional name/email fields
- "Donate" submit button (mock — no real payment processing)
- Accessible: focus trap, Escape to close, aria-label on close button

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/merciful` from the simplest existing app
       (`cp -r apps/<simplest> apps/merciful`), rename package to
       `@free-react-templates/merciful`, add Poppins 400/500/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `merciful.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): TopBar (location + social icons),
       Navbar (brand, links, Donate CTA, mobile toggle, sticky),
       HeroSlider (2 slides, overlay, text, CTA, arrows, dots, auto-
       advance), ServicesGrid (3 cards + 1 red block), AboutSection
       (split layout, image + text + CTA), CounterBar (4 animated
       counters on scroll), SermonsSection (3 alternating entries),
       TestimonySection (carousel, avatars, quotes), BlogSection (3
       cards), EventsSection (2 entries), GallerySection (6+ images,
       lightbox), DonationModal (open/close, amount selection, form
       fields, Escape close), Footer (4 columns, Component Dock link),
       App (landmarks, document title "Merciful — Church").
3. [ ] Layout shell: Navbar (dark bg, brand, links, mobile toggle),
       main content area, footer. Set up smooth scroll behavior.
4. [ ] Top bar component: location text + social icons, full-width.
5. [ ] Hero section: Swiper-based slider with 2 slides, each having
       a picsum background image, dark navy overlay (`#00043c`),
       centered white text (h2 + h1 + paragraph), pill CTA button
       in brand red (`#ce0f3d`), navigation arrows + pagination dots.
6. [ ] Services grid: 8-col + 4-col layout. Left: 3 service cards
       (icon + title + subheading + paragraph). Right: full-height
       red block (`#ce0f3d`) with white quote text.
7. [ ] About section: bg-light (`#f4f4f4`), 6+6 split. Image left
       (picsum), text right with subheading, heading, paragraphs,
       "Learn More" button.
8. [ ] Counter bar: full-width `#ce0f3d` bg, heading left, 4 counters
       right (Members 1,005,000 / Pastors 65,000 / Donations 500,000 /
       Churches 50). Animate from 0 on scroll into view (intersection
       observer).
9. [ ] Sermons section: heading + subheading, 3 sermon entries in
       alternating layout (image/text swap). Each: title, speaker,
       categories, date, description, two buttons.
10. [ ] Testimony section: bg `#9e0c2f` with overlay, heading
       "Transform Lives", Swiper carousel of 4–5 testimonials
       (circular avatar, quote icon, text, name).
11. [ ] Blog section: heading + subheading, 3-column grid of blog
       cards (image, meta, heading, excerpt, "Read more" button).
12. [ ] Events section: heading + subheading, 2 event entries with
       image left + text right (title, schedule, location, venue,
       "More Details" button).
13. [ ] Gallery section: heading + subheading, 4-col + 2-col grid
       of picsum images with lightbox on click.
14. [ ] Donation modal: React dialog with amount selection, optional
       fields, mock submit, focus trap, Escape close.
15. [ ] Footer: dark `#1a1a1a`, 4-column layout (brand + social,
       Latest News, Quick Links, Contact), copyright with Component
       Dock link.
16. [ ] Run `npm run verify:app -- merciful` (typecheck → lint → vitest
       100% → build) and fix until green.
17. [ ] Open PR `feat/template-merciful` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL, token list (red `#ce0f3d` /
       dark-red `#9e0c2f` / navy overlay `#00043c`, Poppins, pill
       buttons, 40px radius), and what differs (renamed "Merciful",
       Poppins via Google Fonts, lucide icons — no Font Awesome,
       picsum placeholders, simplified donation modal, smooth scroll
       navigation, accessible semantics, Component Dock footer).
18. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1305 `[x]` +
       surge URL (`https://merciful.free.componentdock.com`),
       `npm run readme:status`, push.
