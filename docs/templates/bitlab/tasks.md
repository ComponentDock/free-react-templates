# Bitlab (ColorLib Digilab) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bitlab`. Recreation name: **Bitlab** (NEW name —
> the ColorLib source keeps its name "Digilab").

## Source mapping

- **ColorLib item:** "Digilab" (TEMPLATES.md line 976; section "## D" at line 969).
- **Source URL:** https://colorlib.com/wp/template/digilab/
- **Preview URL — REACHABLE (verified 2026-09-11 by direct fetch):**
  **`https://preview.colorlib.com/theme/digilab/`**
  (HTTP 200, 60,854 bytes — the homepage; loads css/style.css 323KB).
- **Preview CSS:** `css/style.css` (323,774 bytes — includes Bootstrap 5,
  animate.css, AOS, GLightbox, Swiper). Also loads: `css/swiper-bundle.min.css`,
  `css/animate.css`, `css/glightbox.min.css`, `css/aos.css`, `css/flaticon.css`,
  `css/icomoon.css`. Font: **Nunito Sans** via Google Fonts.
- **Note:** This is a single-page template focused on homepage. The preview
  contains all sections inline.

## Reference research (done — do not redo)

### Screenshot (digilab-free-template.jpg, 55KB AVIF)

The screenshot image is an AVIF file showing the template preview. Based on
the live DOM analysis, the design features: dark navbar, hero with split
layout (text left, image right), green (#31de79) accent color throughout,
vertical tabbed services section, project carousel, about section with counter,
green stats bar, process steps, client logos, FAQ, testimonials with circular
avatars, blog cards with date badges, contact form, dark footer.

### Design tokens (live homepage stylesheet + rendered page, verified 2026-09-11)

| Token            | Value                                                 | Use                                                                   |
| ---------------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| Font primary     | 'Nunito Sans', Arial, sans-serif                      | Body text, paragraphs, inputs, general UI                             |
| Brand green      | `#31de79`                                             | Primary accent (buttons, active states, stats bg, subheadings)        |
| Lime green       | `#a0f669`                                             | Button gradient start, secondary green                                |
| Green gradient   | `linear-gradient(135deg, #9ff669 0%, #31de79 100%)`   | Primary button background                                             |
| Dark bg          | `#000000`                                             | Navbar background                                                     |
| Dark charcoal    | `#232931`                                             | Footer background                                                     |
| Brown            | `#3c312e`                                             | Secondary dark accent                                                 |
| White            | `#fff`                                                | Text on dark, button text, section backgrounds                        |
| Light gray       | `#f2f2f2`                                             | Services, projects, blog section backgrounds                          |
| Off-white        | `#f8f9fa`                                             | Body default, contact form bg                                         |
| Warm gray        | `#e6e6e6`                                             | Dividers, borders                                                     |
| Button style     | Green gradient, white text, px-5 py-3                  | Bold, hover: green text + green border                                |
| Section title    | 'Nunito Sans', weight 700, centered                    | Headings with green subheading label                                  |
| Counter box      | Green bg (#31de79), white text, 48px number             | "20 Years" in about section                                           |
| Testimonial      | Circular avatar (bg-image), quote icon, name, position  | Swiper carousel with dots                                             |
| Blog card        | Bg-image top, text bottom with date badge               | Day/Month/Year layout, "Read More" CTA                                |

## Section order (from live homepage DOM)

1. **Navbar** — dark fixed-top, logo left, nav center, CTA right
2. **Hero Slider** — swiper, 2 slides, split (text left / image right)
3. **Services** — vertical pills tabs (7 items) + tab content
4. **Parallax Image** — full-width bg image with text overlay
5. **Projects** — swiper carousel of project cards
6. **About/Counter** — split: image left, text + counter right
7. **Stats Bar** — green bg, 4 animated counters
8. **Process** — 4 steps: Discovery, Planning, Execution, Result
9. **Clients** — 6 placeholder logos
10. **FAQ** — accordion with 4+ items
11. **Testimony** — swiper carousel, dark bg, circular avatars
12. **Blog** — 3 blog cards with date badges
13. **Contact** — 4 info cards + form (Name, Email, Subject, Message)
14. **Footer** — dark bg, 4 columns, social icons, copyright

## Implementation tasks (for implementer)

### Phase 1: Scaffold

- [ ] Create `apps/bitlab/` by copying the simplest existing app
- [ ] Rename package to `@free-react-templates/bitlab`
- [ ] Set up `public/CNAME` with `bitlab.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://bitlab.free.componentdock.com`
- [ ] Update `vite.config.ts` with `injectUiSource()`
- [ ] Configure `index.html` with Nunito Sans Google Font link
- [ ] Set up Tailwind theme tokens in `index.css`:
      brand green `#31de79`, lime `#a0f669`, dark `#232931`

### Phase 2: Components (in order)

- [ ] `Navbar.tsx` — dark fixed-top, logo (green+white), nav links, hamburger
      toggler, CTA button
- [ ] `HeroSlider.tsx` — Swiper with 2 slides, split layout, overlay,
      subheading, heading, paragraph, CTA button
- [ ] `Services.tsx` — vertical pill tabs (7 items with lucide-react icons),
      tab content panel with icon/title/description/CTA
- [ ] `ParallaxImage.tsx` — full-width section with bg-image placeholder
      (picsum.photos), dark overlay, text overlay
- [ ] `Projects.tsx` — section title, Swiper carousel of project cards
      (picsum.photos images, title, category)
- [ ] `About.tsx` — split layout: image left (picsum.photos), text right
      with subheading, heading, paragraphs, animated counter box
- [ ] `StatsBar.tsx` — green bg, 4 stat counters with scroll-triggered
      animation (500, 850, 20, 100)
- [ ] `Process.tsx` — 4 columns: step number, lucide icon, title,
      description (Discovery, Planning, Execution, Result)
- [ ] `Clients.tsx` — section title, 6 placeholder SVG logo slots
- [ ] `FAQ.tsx` — section title, accordion (4+ items) with first open
- [ ] `Testimonials.tsx` — dark bg, title "Happy Clients", Swiper carousel
      with circular avatar, quote icon, text, name, position
- [ ] `Blog.tsx` — section title, 3 blog cards (picsum.photos images,
      date badge, title, excerpt, CTA, author metadata)
- [ ] `Contact.tsx` — 4 info cards (lucide icons), contact form with
      Name/Email/Subject/Message fields
- [ ] `Footer.tsx` — dark bg, 4 columns (About+social, Links, Services,
      Newsletter), copyright bar with Component Dock link
- [ ] `App.tsx` — compose all sections in order

### Phase 3: Testing (TDD)

- [ ] Write tests for each component before/during implementation
- [ ] Ensure 100% line/function/branch/statement coverage
- [ ] Test responsive behavior at 767px breakpoint
- [ ] Test tab switching in Services
- [ ] Test accordion interaction in FAQ
- [ ] Test form validation in Contact

### Phase 4: Polish

- [ ] AOS scroll animations on sections (fade-in, slide-up)
- [ ] Swiper configuration for hero, projects, testimonials
- [ ] Smooth scroll for nav anchor links
- [ ] Counter animation (count-up on scroll into view)
- [ ] Responsive hamburger menu toggle
- [ ] Visual diff against live preview
- [ ] Run `npm run verify:app -- bitlab`

## Fidelity notes

- The original uses Bootstrap 5 pill tabs for services — implement with
  React state + Tailwind classes, not Bootstrap JS
- The original uses Swiper for hero, projects, and testimonials — use
  the `swiper` npm package (already in the monorepo)
- The original uses flaticon/icomoon icon fonts — replace with
  `lucide-react` equivalents
- The original uses AOS (Animate On Scroll) — can use AOS library or
  CSS animations with Intersection Observer
- Parallax image section can use CSS `background-attachment: fixed` or
  a lightweight parallax library
- The animated counters need an intersection observer + requestAnimationFrame
  count-up effect
- All placeholder images should use `https://picsum.photos/seed/bitlab-N/W/H`
  pattern for deterministic placeholders
