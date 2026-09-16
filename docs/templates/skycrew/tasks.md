# SkyCrew (ColorLib Constructioncompany) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-skycrew`. Recreation name: **SkyCrew** (NEW name —
> the ColorLib source keeps its name "Constructioncompany").

## Source mapping

- **ColorLib item:** "Constructioncompany" (TEMPLATES.md line 1346; section
  "## Construction Company (15)" — first unchecked item).
- **Source URL:** https://colorlib.com/wp/template/constructioncompany/
- **Preview URL — REACHABLE (verified 2026-09-16 by direct fetch):**
  **`https://preview.colorlib.com/theme/constructioncompany/`**
  (HTTP 200, title: "Construction Company - Professional Building Services").
- **Preview CSS:** `assets/css/style.css` (~98KB, single monolithic file).
  Also loads: `bootstrap.min.css`, `fontawesome.min.css`, `swiper-bundle.min.css`,
  `glightbox.min.css`, `aos.css`. Fonts loaded via Google Fonts `@import`:
  Barlow (200–900) and Teko (300–700). Font Awesome 6 for social icons
  → REPLACE with lucide-react.

## Reference research (done — do not redo)

### Screenshot (`constructioncompany-free-template.jpg`)

Browsed visually in the browser 2026-09-16. Aesthetic: professional construction
landing page with a full-height dark hero slider showing construction cranes at
sunset, dark navy-blue gradient overlay. The large headline "ADVANCED CONSTRUCTION"
is in bright orange Teko uppercase. Below: white content sections with large
ghost/stroke text behind headings, 3-column service cards with photos, a split
about section, a tabbed project gallery with 2-column grid, dark photo CTA section,
team member cards, testimonial carousel, blog cards, and a dark footer.
Color palette: orange brand `#ff5f13`, dark navy headings `#0b1c39`,
accent navy `#1f2b7b`, white/light-gray backgrounds.

### Design tokens (live stylesheet + rendered page, verified 2026-09-16)

| Token | Value | Use |
|-------|-------|-----|
| Brand orange | `#ff5f13` | Primary buttons, preloader ring, hover states, boxed-btn border |
| Brand orange hover | `#e25311` | Button hover fill (::before background) |
| Brand orange secondary | `#f27420` | Arrow button background |
| Heading color | `#0b1c39` / `#0e132a` | h1–h6 text, section headings |
| Accent navy | `#1f2b7b` | Links, secondary buttons, unordered-list bullets, primary-switch |
| Light navy | `#161e46` | white-btn text color, some link states |
| Body bg | `#fff` | Main content background |
| Gray bg | `#f7f7fd` | Alternate section backgrounds |
| Black bg | `#16161a` | Dark sections |
| Testimonial bg | `#f9fafc` | Testimonial section |
| Brand bg | `#f1f4fa` | Brand/counter section |
| Ghost text stroke | `1px #f6f7f8` | Behind section headings (-webkit-text-stroke) |
| Font — primary | Barlow 400/500/600/700/800/900 | Body text, nav, labels, paragraphs |
| Font — display | Teko 300/400/500/600/700 | Section headings, large display text |
| Button — primary `.btn` | bg `#ff5f13`, radius 5px, padding 25px 22px, uppercase, letter-spacing 1px | Primary CTAs, slide-in hover via ::before `#e25311` scaleX |
| Button — boxed `.boxed-btn` | bg `#fff`, text `#ff5f13`, 1px solid `#ff5f13`, radius 0, letter-spacing 3px | Secondary CTAs, hover fills orange |
| Button — white `.white-btn` | bg `#fff`, text `#161e46`, radius 0 | Alternate buttons, hover fills orange via scaleY |
| Button — hero | `.btn.hero-btn` with shadow `-8px 8px 0 #ca611b` | Hero CTA buttons |
| Overlay gradient | `linear-gradient(0deg, rgba(2,8,52,0.75) 0%, rgba(2,8,52,0.15) 100%)` | Hero dark overlay |
| Section padding | 120px top/bottom (`.section-padding`) | Standard section spacing |
| Scroll-to-top | `#ff5f13`, 50×50px, radius 50% | Scroll-to-top button |

### Section order (from HTML)

1. **Preloader** — spinning ring (orange `#ff5f13`), centered logo
2. **Header** — top info bar (phone, email, hours, social icons) + sticky nav bar
   (logo, main menu, "Contact Now" button)
3. **Hero slider** — full-height swiper with dark overlay, Teko headlines
   ("ADVANCED CONSTRUCTION"), subtitle, CTA
4. **Services** — "Our Services" heading with ghost text, 3 image cards with
   service names + descriptions + "Read More"
5. **About** — "Who we are" / "About us" split (left: heading + text + "Read More" +
   "1994 Since" badge; right: image + overlay caption)
6. **Projects** — "Our Projects" / "Gallery" heading with ghost text, tabbed filter
   (Show all / Interior / Recent / Big building / Park), 2-column card grid
7. **CTA** — "Let's talk with us" dark photo background, chat icon, text,
   "Contact Us" button
8. **Counter** — 3 counters (34 / 76 / 08) with "Machinery" and "Tools" labels
9. **Team** — "Our team" / "Experts" heading, 3 team cards (photo + role + name)
10. **Testimonials** — "Testimonial" / "Feedback" heading, carousel with
    quote icon, text, author name + role
11. **Blog** — "Latest News" / "Our Blog" heading, 2-3 blog cards with
    date badge, category, title, "Read more"
12. **Footer** — logo, newsletter signup, Quick Links, Contact info, copyright
    (→ Component Dock)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/skycrew` from the simplest existing app, rename package
       to `@free-react-templates/skycrew`, add Barlow + Teko Google Fonts
       `<link>` in index.html, set `public/CNAME` = `skycrew.free.componentdock.com`
       + `"homepage"`. Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (top info bar + sticky nav + mobile menu toggle),
       HeroSlider (2 slides, fade transition, headline, CTA), Services (3 cards,
       heading with ghost text), About (split layout, heading, text, badge),
       ProjectGallery (5 tabs, filtering, card grid), CTA (dark bg, chat icon,
       button), Counter (3 animated counters), Team (3 member cards),
       Testimonials (carousel, quote icon, author), Blog (2-3 cards with
       date/category), Footer (newsletter form, links, contact, copyright),
       App (landmarks, document title "SkyCrew — Construction Services").
3. [ ] Navbar: top info bar with phone/email/hours + social icons (lucide),
       sticky bottom bar with logo text "SkyCrew" + nav links + "Contact Now"
       orange CTA button. Mobile hamburger toggle with aria-expanded.
4. [ ] Hero slider: full-height background images (picsum.photos seeded),
       dark overlay gradient, Teko uppercase headline "ADVANCED CONSTRUCTION"
       (70px desktop, 40px mobile), subtitle with orange line accent, "OUR
       SERVICES" link. Implement fade transition between slides.
5. [ ] Services: "Our Services" heading (Teko 70px) with ghost text span
       behind (stroke `#f6f7f8`, transparent fill), 3 cards with picsum
       images, service name, description, "Read More" link.
6. [ ] About: "Who we are" / "About us" split — left: heading with ghost text,
       paragraph, "Read More" link, "1994 Since" badge; right: picsum image
       with overlay caption.
7. [ ] Projects: "Our Projects" heading with ghost text, 5 tab buttons
       (Show all active by default), filter gallery of project cards
       (picsum images, title, category, hover overlay).
8. [ ] CTA: dark photo background, chat icon, "Let's talk with us" heading,
       description text, "Contact Us" orange button.
9. [ ] Counter: 3 counters (34, 76, 08) with "Machinery" and "Tools" labels,
       animate on scroll (use IntersectionObserver).
10. [ ] Team: "Our team" / "Experts" heading, 3 team cards with picsum photos,
        role and name.
11. [ ] Testimonials: "Testimonial" / "Feedback" heading, carousel with orange
        quote icon, testimonial text, author name + role.
12. [ ] Blog: "Latest News" / "Our Blog" heading, 2-3 blog cards with date
        badge (day + month), category tag, title, "Read more" link.
13. [ ] Footer: dark bg, logo, newsletter signup (email input + button),
        Quick Links (About, Services, Projects, Contact Us), Contact info
        (address, phone, cell), copyright linking to Component Dock.
14. [ ] Run `npm run verify:app -- skycrew` (typecheck → lint → vitest
        100% → build) and fix until green.
15. [ ] Open PR `feat/template-skycrew` → merge immediately.
