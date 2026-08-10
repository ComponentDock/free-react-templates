# Ivy (ColorLib Fox) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ivy`.

## Design notes (replication findings)

- **Original:** ColorLib "Fox" — free responsive Bootstrap 5 university /
  education website template (source: https://colorlib.com/wp/template/fox/).
  TEMPLATES.md has TWO copies (line 403 — Bootstrap category, line 1640 —
  Education category; mark BOTH `[x]` when done). Both rows use the CORRECT
  screenshot `fox-free-template.jpg`.
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/fox/`
  returns HTTP 200 (curl + browser, 2026-08-11). Title: "Fox University -
  Free Bootstrap 5 Template by Colorlib". This is a FULL-fidelity reference
  (unlike dead-preview templates): section order, copy, buttons, forms all
  taken from the live DOM. Stylesheet `css/style.css` (335 KB) provides the
  `--fox-*` token set.
- **Visual design:** corporate-academic — white page with `bg-light`
  alternation, deep navy `#0d1128` navbar, vivid orange `#fd5f00` CTAs,
  white top bar, photo-heavy sections with gradient overlays, rounded-xl
  white cards with soft shadows, purple `#5d50c6` accents (quote icon +
  footer Subscribe). Demo brands itself "Fox. University" → recreation:
  **Ivy. University**.

## Design tokens (from the live stylesheet `:root` + rules)

| Token            | Value                                                                                                             | Where                                                                |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Brand orange     | `#fd5f00` (`--fox-primary`)                                                                                       | CTAs, icon chips, date badges, active nav, underlines, gallery icons |
| Orange hover     | `#e55500` (`--fox-primary-hover`)                                                                                 | button hover bg, social hover                                        |
| Orange tint      | `rgba(253,95,0,0.1)` / `0.05`                                                                                     | subtle backgrounds                                                   |
| Deep navy        | `#0d1128` (`--fox-dark`)                                                                                          | navbar, services darken cards, gradient partner                      |
| Navy lighter     | `#1a1f3a`                                                                                                         | —                                                                    |
| Mustard gold     | `#fda638`                                                                                                         | footer wordmark accent span                                          |
| Purple           | `#5d50c6`                                                                                                         | testimonial quote icon, footer Subscribe button                      |
| Footer bg        | `#1a1a1a`                                                                                                         | footer                                                               |
| Consult gradient | `linear-gradient(45deg, #fd6100 0%, #0d1128 100%)`                                                                | Request A Quote overlay                                              |
| Counter gradient | `linear-gradient(135deg, rgba(13,17,40,0.95), rgba(253,95,0,0.85))`                                               | counter section overlay                                              |
| Font             | `"Poppins", Arial, sans-serif`                                                                                    | Google Fonts Poppins `<link>` in index.html                          |
| Radii            | sm .375rem · md .5rem · lg .75rem (buttons) · xl 1rem (cards) · full 9999px                                       | —                                                                    |
| Buttons          | radius .75rem, 2px solid border, white text, shadow-sm; hover translateY(-2px) + `0 4px 14px rgba(253,95,0,0.25)` | `.btn.btn-primary`                                                   |
| Cards            | white bg, radius-xl, `--fox-shadow-md`                                                                            | course / staff / blog / event                                        |
| Glass navbar     | `rgba(255,255,255,0.8)` + `blur(10px)`                                                                            | scrolled navbar state (optional polish)                              |
| Section rhythm   | centered col-md-8 heading blocks, `bg-light` on Teachers + Blog sections                                          | —                                                                    |

## Tasks (implementation order)

1. Scaffold `apps/ivy` (copy the simplest existing app; package
   `@free-react-templates/ivy`; `vite.config.ts` with `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/ivy" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-primary: #fd5f00`,
   `--color-primary-hover: #e55500`, `--color-navy: #0d1128`,
   `--color-gold: #fda638`, `--color-purple: #5d50c6`,
   `--font-sans: 'Poppins', sans-serif`; Google Fonts Poppins `<link>` in
   `index.html`.
4. `TopBar.tsx` — white strip: "Ivy. University" wordmark left (navy text,
   orange accent on "University" or a dot); contact toppers with orange
   icons (lucide Phone/Clock/MapPin — e.g. "Call Us: + 1235 2355 98");
   orange "Apply now" ButtonLink right. Hide contact toppers on small
   screens (keep brand + CTA).
5. `Navbar.tsx` — dark navy `#0d1128` bar: links Home / About / Programs /
   Courses / Admissions / Contact (white, hover/active orange); right search
   input + icon button (lucide Search); mobile hamburger (lucide Menu,
   aria-expanded) opening the same links. Optional: glass background on
   scroll.
6. `HeroSlider.tsx` — 600px hero carousel: TWO slides, each a full-bleed
   photo (`picsum.photos/seed/ivy-1/<1600x600>`-class) with dark gradient
   overlay, h1 white ("Education Needs Complete Solution" / "University,
   College School Education"), Duden copy, orange "Contact Us" button;
   pager (1 / 2) + prev/next or dots. Auto-advance optional; test the
   slide-swap logic.
7. `ServicesStrip.tsx` — 4 full-width cards (grid-cols-1 md:grid-cols-4):
   alternating `bg-primary` / `bg-navy`; white circular icon chip (lucide
   GraduationCap / BookOpen / Library / Trophy), white title, muted-white
   blurb; cards: Certified Teachers, Special Education, Book & Library,
   Sport Clubs.
8. `WhatWeOffer.tsx` — split: LEFT framed photo (picsum `ivy-5` ~600×600,
   orange-tinted border/frame), RIGHT "What We Offer" h2 + Duden copy + 6
   feature rows (2-col grid on md): orange circular icon + title + blurb —
   Safety First, Regular Classes, Certified Teachers, Sufficient
   Classrooms, Creative Lessons, Sports Facilities.
9. `CounterVideo.tsx` — bg photo under navy→orange gradient overlay:
   grid 2-col — LEFT video thumbnail (rounded-xl, picsum) with white
   circular play button (orange triangle via lucide Play); RIGHT "Ivy
   University" h2 (white) + copy. Below: 4 counters — 18 Certified
   Teachers, 401 Students, 30 Courses, 50 Awards Won (white numbers,
   animate on mount optional). Play button opens the Vimeo URL
   (https://vimeo.com/45830194) in a new tab (or a simple modal).
10. `Courses.tsx` — centered "Our Courses" heading + copy; 4 cards
    (grid-cols-1 md:grid-cols-4): photo (picsum), meta row with orange
    icons (User "Mr. Khan", "10 seats", Calendar "4 Years" — use lucide
    User/Users, CalendarDays), h3 "Electric Engineering" (hover orange),
    blurb, orange "Apply now" button.
11. `Teachers.tsx` — `bg-light` section: centered "Certified Teachers"
    heading + copy; 4 staff cards: photo (rounded-t-xl, bottom dark
    gradient), name (Bianca Wilson / Mitch Parker / Stella Smith / Monshe
    Henderson), "Teacher" position in orange, orange social icon row.
12. `QuoteForm.tsx` — section over consult gradient (orange→navy 45deg):
    white "Request A Quote" heading + copy; form: First Name, Last Name,
    course select, Phone, Message textarea, "Request A Quote" submit;
    zod validation, per-field errors, no submit until valid.
13. `Events.tsx` — centered "Upcoming Events" heading + copy; 3 cards:
    orange date badge (radius-md — day "15" + month "MAR"), time "10:00 AM
    - 4:00 PM", title (Spring Open House / Research Symposium / Alumni
      Networking Night), blurb, "Learn More" link.
14. `BlogSection.tsx` — `bg-light`: centered "Recent Blog" heading + copy;
    3 cards: photo with orange date block (day 26 / month June / year
    2032), meta (Admin, comments), title "Skills To Develop Your Child
    Memory", blurb, "Read more" link (dark → orange hover).
15. `Testimonials.tsx` — centered "Student Says About Us" heading + copy;
    carousel of cards: circular avatar, purple `#5d50c6` quote icon
    (lucide Quote), quote text, dark name, orange position; dots (active
    orange). Show 1 card at a time with prev/next or autoplay.
16. `GalleryStrip.tsx` — row of photo tiles (grid-cols-2 md:grid-cols-4),
    each with orange circular instagram icon (lucide Instagram) overlay;
    tiles are decorative links.
17. `Footer.tsx` — `#1a1a1a` bg, 5 widgets:
    - Have a Questions? — address + phone + email with orange icons
    - Recent Blog — 2 mini posts (thumb + title + date)
    - Quick Links — nav list with orange arrow icons (lucide ChevronRight)
    - Subscribe Us! — email input (white/10 bg) + purple `#5d50c6`
      "Subscribe" button (zod validation + success message)
    - Connect With Us — social icon row (inline SVG)
      Widget h2s white with orange underline (`::after` or border-b);
      copyright bar: muted text + "made with ♥ by Colorlib" credit.
18. `App.tsx` — compose TopBar + Navbar + main (HeroSlider, ServicesStrip,
    WhatWeOffer, CounterVideo, Courses, Teachers, QuoteForm, Events,
    BlogSection, Testimonials, GalleryStrip) + Footer; document title
    "Ivy — University Template".
19. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements. Watch the
    duplicate-link trap (topbar Apply now + navbar + mobile menu all render
    links — `getAllByRole('link')` + index); decorative images `alt=""`
    have no `img` role — query with `container.querySelectorAll('img')`.
20. Run `scripts/verify-app.sh ivy` (typecheck + lint + coverage tests +
    build) until green.
21. Update TEMPLATES.md lines 403 AND 1640: `[ ]` → `[x]` (BOTH copies)
    with surge URL + homepage after deploy; `npm run readme:status`;
    commit `feat: Ivy — university template (ColorLib Fox)`; PR → main →
    merge immediately.

## Fidelity gotchas

- **Preview is LIVE** — use it as the ground truth. The section order and
  copy above were read from the actual rendered DOM
  (`https://preview.colorlib.com/theme/fox/`); do not improvise section
  order.
- **Brand orange is `#fd5f00`** (from `--fox-primary` in `:root`), NOT a
  bootstrap orange. Hover `#e55500`. The old bootstrap-blue `#0d6efd`
  entries in the CSS are Bootstrap's own defaults — ignore them; the
  template's accent is orange.
- **Purple `#5d50c6`** appears exactly twice: testimonial quote icon and
  footer Subscribe button. Don't spread it further.
- **Services cards alternate** `bg-primary` (orange) and `bg-darken`
  (navy `#0d1128`) — 4 cards, so it's orange/navy/orange/navy.
- **Buttons**: radius 0.75rem (NOT pill), 2px border, hover lifts -2px with
  an orange glow shadow. Keep that treatment on all `.btn-primary` CTAs.
- **Vimeo popup**: the reference opens a Vimeo lightbox — in the recreation
  open the URL in a new tab or a tiny modal; no external video embed needed.
- **Counter labels order** (from DOM): 18 Certified Teachers · 401 Students
  · 30 Courses · 50 Awards Won — keep this exact order + values.
- **Two `bg-light` sections** (Teachers, Blog) — alternate white / light
  gray per the reference for the section rhythm.
- **Dup rows:** TWO TEMPLATES.md copies (403 Bootstrap, 1640 Education) —
  BOTH must be marked `[x]`; both already point at the correct screenshot.
- Poppins via Google Fonts; icons from lucide-react (brand glyphs like the
  flaticon teacher/reading icons are recreated with lucide equivalents).
