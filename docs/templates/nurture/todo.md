# Nurture — Design Notes & Implementation Tasks

## Source Mapping

| Aspect      | Value                                                                             |
| ----------- | --------------------------------------------------------------------------------- |
| ColorLib    | Lovecare                                                                          |
| Source URL  | https://colorlib.com/wp/template/lovecare/                                        |
| Preview URL | https://preview.colorlib.com/theme/lovecare/                                      |
| New name    | nurture                                                                           |
| App path    | apps/nurture                                                                      |
| Deploy URL  | https://nurture.free.componentdock.com                                            |
| Screenshot  | https://colorlib.com/wp/wp-content/uploads/sites/2/lovecare-colorlib-template.jpg |

## Design Research Notes

### Visual Design (from preview DOM + CSS)

The Lovecare template is a **warm charity/non-profit landing page** with these
distinctive visual traits:

1. **Warm gold palette** — The dominant brand color is a golden amber
   (`#d49a3a`) used for highlights, icons, progress bars, and call-to-action
   accents. This gives the template a warm, trustworthy, humanitarian feel.

2. **Deep teal secondary** — Teal (`#0a686e`, `#063c3f`) provides contrast
   in section backgrounds and the footer. The dark teal footer (`#042628`)
   creates a professional anchor.

3. **Parallax hero** — Full-viewport height hero with a dark brown overlay
   (`#39311d`), background image with `background-attachment: fixed`. Two CTAs:
   a filled blue primary button and a transparent secondary button.

4. **Handwritten accent font** — "Patrick Hand" is used for subheadings and
   decorative text, creating a personal, approachable charity feel alongside
   the clean "Poppins" body font.

5. **Rounded pill buttons** — All primary buttons use 40px border-radius
   (fully rounded/pill shape) with generous padding.

6. **Parallax stat counter** — A background image section with 4 animated
   statistics (donation totals, volunteer counts). Numbers animate on scroll.

7. **Cause cards with progress** — A horizontal carousel of cause cards, each
   showing a photo, title, donation progress bar, and goal amount.

8. **Warm off-white sections** — Uses `#f3f0eb` and `#e9e4db` for alternating
   section backgrounds instead of plain white.

9. **Volunteer profiles** — Grid of team member cards with photos, names,
   roles, and social icons.

10. **Testimonials with parallax** — Quote slider over a background image.

### Section Order (from DOM, top to bottom)

1. `nav.navbar` — Fixed top navigation
2. `section.hero-wrap.rellax` — Full-height hero parallax
3. `section.ftco-intro-wrap` — Fundraising counter + donation form
4. `section.ftco-section-counter.img` — Statistics counter (parallax)
5. `section.ftco-causes.ftco-section.bg-light` — Cause cards carousel
6. `section.ftco-image.img` — Full-width image break
7. `section.ftco-section` — Services / About (3-column grid)
8. `section.ftco-section.testimony-section.img` — Testimonials (parallax)
9. `section.ftco-section.ftco-no-pt` — CTA banner
10. `section.ftco-section` — Blog posts
11. `footer.ftco-footer.img` — Footer (dark, newsletter + links)

### CSS Token Extraction Summary

- **Primary gold:** `#d49a3a` (48 occurrences in stylesheet — heavily used)
- **Teal:** `#0a686e` / `#0a4f53` (section accents, links)
- **Dark teal sections:** `#063c3f` (counter section bg, CTA bg)
- **Hero dark:** `#39311d` (hero overlay)
- **Footer dark:** `#042628`
- **Cream backgrounds:** `#f3f0eb`, `#e9e4db`
- **Fonts:** Poppins (body), Patrick Hand (accent)
- **Button radius:** 40px (pill shape)
- **Card radius:** 0.25rem
- **Icon circles:** 50%

## Implementation Tasks

### Phase 1: Scaffold

- [ ] Create `apps/nurture/` from simplest existing app (e.g. copy `apps/aurora/` skeleton)
- [ ] Rename package to `@free-react-templates/nurture`
- [ ] Set `public/CNAME` to `nurture.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://nurture.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Update `index.html` with Google Fonts: Poppins + Patrick Hand
- [ ] Set up `src/index.css` with Tailwind `@theme` tokens for brand colors

### Phase 2: Components (in section order)

- [ ] `Navbar.tsx` — Fixed top nav, brand "Nurture", hamburger on mobile
- [ ] `Hero.tsx` — Full-height parallax hero, dark overlay, heading, two CTAs
- [ ] `IntroSection.tsx` — Fundraising counter + donation form (name, select, radios, submit)
- [ ] `StatsCounter.tsx` — 4 animated counters with parallax background
- [ ] `CausesSection.tsx` — Carousel of cause cards with progress bars
- [ ] `ImageBreak.tsx` — Full-width parallax image separator
- [ ] `ServicesSection.tsx` — 3-column services grid with icons
- [ ] `TestimonialsSection.tsx` — Quote slider with parallax background
- [ ] `CTABanner.tsx` — Dark teal CTA with volunteer button
- [ ] `BlogSection.tsx` — 3 recent blog post cards
- [ ] `Footer.tsx` — 4-column footer: brand, recent posts, contact, newsletter
- [ ] `App.tsx` — Compose all sections in order

### Phase 3: Testing

- [ ] Write tests for each component (TDD: red → green → refactor)
- [ ] Ensure 100% line/function/branch/statement coverage
- [ ] Run `scripts/verify-app.sh nurture` to confirm full gate

### Phase 4: Polish & Ship

- [ ] Verify responsive: 375px, 768px, 1200px+
- [ ] Verify parallax works on hero, counter, testimonials
- [ ] Verify counter animation on scroll
- [ ] Verify cause carousel navigation
- [ ] Verify testimonial slider
- [ ] Ensure footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Commit as `feat: add nurture (Lovecare charity template)`
- [ ] Open PR, merge immediately, deploy
