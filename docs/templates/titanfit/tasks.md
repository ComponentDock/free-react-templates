# TitanFit (ColorLib Ironmuscle) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-titanfit`. Recreation name: **TitanFit** (NEW name —
> the ColorLib source keeps its name "Ironmuscle").

## Source mapping

- **ColorLib item:** "Ironmuscle" (TEMPLATES.md line 1862; section
  "## Fitness (37)" in the fitness/gym category).
- **Source URL:** https://colorlib.com/wp/template/ironmuscle/
- **Preview URL:** https://preview.colorlib.com/theme/ironmuscle/ (verified reachable; HTTP 200, 642 lines HTML)
- **Preview CSS:** `css/style.css` (hand-written, Bootstrap-based) + `css/bootstrap.min.css`, `css/owl.carousel.min.css`, `css/aos.css`, `css/animate.css`, `css/magnific-popup.css`
- **Fonts:** Nunito Sans (Google Fonts, weights 300/400/700) — primary body font. Roboto Mono referenced in CSS stack but not visually used — skip.

## Reference research (done — do not redo)

### Screenshot (`ironmuscle-free-template.jpg`)

The template screenshot shows a gym/fitness landing page with a dark, high-contrast aesthetic. The navbar is solid red (#f23a2e) with white text. The hero section features a dark background image with bold white centered text. Below are four feature blocks (Yoga, Weight Lifting, Boxing, Running) in a row with alternating light backgrounds. An about section with text left and image right follows. The schedule section has a dark overlay background with white tabbed content. Testimonials and trainers sections follow. The footer is dark with multiple columns.

### Design tokens (live stylesheet + rendered page, verified 2026-09-22)

| Token       | Value                                  | Use                                                                                         |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Primary     | `#f23a2e`                              | Navbar bg, buttons, form focus, accents                                                      |
| Black       | `#000`                                 | Headings, bold text, `.text-black` utility                                                   |
| White       | `#fff`                                 | Card surfaces, navbar text, schedule row bg                                                  |
| Body text   | `#4d4d4d`                              | Default paragraph text                                                                       |
| Dark text   | `#25262a`                              | Section headings                                                                             |
| Light bg    | `#f8f9fa`                              | Alternating section backgrounds                                                              |
| Border      | `#edf0f5`                              | Dropdown borders                                                                             |
| Overlay     | `rgba(0,0,0,0.4)`                     | Hero/schedule background overlay                                                             |
| Font        | Nunito Sans 300/400/700               | Google Fonts `<link>`; body 0.9rem, line-height 1.7                                          |
| Button pill | border-radius 30px, #f23a2e bg, #fff text | Primary CTAs; hover shadow `0 5px 20px -7px rgba(0,0,0,0.9)`                          |
| Navbar      | `#f23a2e` solid bg, white text        | Sticky, z-index 99; logo 26px font-weight 200; nav links uppercase 15px letter-spacing 0.05em |
| Section pad | 3em mobile / 7em desktop              | `.site-section` padding                                                                      |
| Footer pad  | 4em                                   | `.site-footer` padding                                                                       |
| Hero        | bg-image + parallax + dark overlay    | `data-stellar-background-ratio="0.5"`, `rgba(0,0,0,0.4)` overlay                            |
| Schedule    | bg-image + overlay + white text       | Same hero-style bg with tabbed content                                                       |
| Trainers    | 3-col grid, hover overlay             | `.block-trainer` with `.block-trainer-overlay` on hover, social icon links                   |
| Testimonials| owl-carousel, circular avatars        | `rounded-circle` images, flex layout                                                         |
| Dropdown    | white bg, `#edf0f5` borders           | Arrow-top variant; smooth 0.2s transition                                                    |

### Section structure (from live HTML, in page order)

1. **TopBar** — social icons (Twitter, Facebook, LinkedIn, Instagram) left; email + phone right; light bg, small font
2. **Navbar** — `#f23a2e` bg, logo "TitanFit" (Fit bold), nav: Home, Classes (dropdown: Running, Yoga, Boxing, Weight Lifting), Services, About, Contact; hamburger on mobile
3. **HeroSlider** — owl-carousel, 2 slides, bg images with parallax + dark overlay, centered white headline ("Get In Shape & Be Healthy", "Build Your Body Strong")
4. **FeatureBlocks** — 4-col grid (Yoga, Weight Lifting, Boxing, Running), flaticon icons, alternating bg-light, heading + lorem description
5. **About** — left: "All About Our Gym" heading + text + bullet list + "Read More" pill button; right: image
6. **FeaturedClasses** — owl-carousel, cards with image + title + description + instructor; bg-light section; "Featured Class" heading
7. **Schedule** — overlay bg image, "Schedule" heading, day tabs (Sunday–Friday), rows: class name | time | instructor | "Join Now" pill button
8. **Testimonials** — owl-carousel, flex cards with circular avatar + name/title + blockquote; "Testimonials" heading
9. **Trainers** — 3-col grid, 6 trainer cards, hover overlay with name + description + social icons; bg-light section; "Experts Trainer" heading
10. **Footer** — 3-column: About (text + Read More), Quick Menu (links), Contact Info (address + phone) + Social Icons (Facebook, Twitter, Instagram, Vimeo); copyright with Component Dock link

### Icon mapping (lucide — replace all flaticon/icomoon glyphs)

| Source glyph                    | Recreation              |
| ------------------------------- | ----------------------- |
| `flaticon-padmasana` (Yoga)     | lucide `Dumbbell`       |
| `flaticon-weight` (Weight)      | lucide `Dumbbell`       |
| `flaticon-boxing-gloves`        | lucide `Swords`         |
| `flaticon-running`              | lucide `Footprints`     |
| `icon-twitter`                  | lucide `Twitter`        |
| `icon-facebook`                 | lucide `Facebook`       |
| `icon-linkedin`                 | lucide `Linkedin`       |
| `icon-instagram`                | lucide `Instagram`      |
| `icon-envelope`                 | lucide `Mail`           |
| `icon-phone`                    | lucide `Phone`          |
| `icon-person`                   | lucide `User`           |
| `icon-clock-o`                  | lucide `Clock`          |
| `icon-menu`                     | lucide `Menu`           |
| `icon-close2`                   | lucide `X`              |
| `icon-heart`                    | lucide `Heart`          |
| `icon-vimeo`                    | lucide `Vimeo` (probe — may not exist; use custom SVG if needed) |

### Picsum placeholder plan

| Image slot       | Seed                       | Size        |
| ---------------- | -------------------------- | ----------- |
| Hero slide 1     | `titanfit-hero-1`          | 1920×1080   |
| Hero slide 2     | `titanfit-hero-2`          | 1920×1080   |
| About image      | `titanfit-about`           | 800×600     |
| Class card 1     | `titanfit-class-1`         | 600×400     |
| Class card 2     | `titanfit-class-2`         | 600×400     |
| Testimonial 1-4  | `titanfit-person-1`..`-4`  | 200×200     |
| Trainer 1-6      | `titanfit-trainer-1`..`-6` | 600×700     |
| Schedule bg      | `titanfit-schedule`        | 1920×800    |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/titanfit` from the simplest existing app
       (`cp -r apps/<simplest> apps/titanfit`), rename package to
       `@free-react-templates/titanfit`, add Nunito Sans 300/400/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `titanfit.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): TopBar (social icons, email, phone,
       mobile hide), Navbar (sticky, red bg, logo, nav links, dropdown
       on hover, hamburger on mobile), HeroSlider (carousel, bg images,
       overlay, headlines, auto-rotate), FeatureBlocks (4 blocks,
       icons, titles, alternating bg), About (heading, text, bullets,
       pill button, image), FeaturedClasses (carousel, cards with
       instructor), Schedule (tabs, day switching, class rows, join
       buttons), Testimonials (carousel, avatars, quotes), Trainers
       (grid, hover overlay, social icons), Footer (columns, Component
       Dock link), App (landmarks, title).
3. [ ] Layout shell: TopBar + Navbar (red `#f23a2e` bg, sticky, z-99,
       logo, nav links, hamburger on mobile), Footer (3-column grid,
       Component Dock link).
4. [ ] HeroSlider: owl-carousel replacement (use a simple React
       carousel or framer-motion), bg images with dark overlay
       (`rgba(0,0,0,0.4)`), parallax effect, centered white headlines,
       auto-rotation.
5. [ ] FeatureBlocks: 4-column grid (col-lg-3), flaticon icons →
       lucide, alternating `bg-light`, heading + description per block.
6. [ ] About: left column with heading, text, bullet list, pill
       button; right column with image; responsive stacking.
7. [ ] FeaturedClasses: carousel with class cards, image + title +
       description + instructor, bg-light section.
8. [ ] Schedule: overlay bg image, tabbed day switching (controlled
       component), class rows (name, time, instructor, pill button),
       white row backgrounds.
9. [ ] Testimonials: carousel with circular avatars, flex layout,
       name/title, blockquotes.
10. [ ] Trainers: 3-column grid, 6 trainer cards, hover overlay with
        social icons, bg-light section.
11. [ ] Run `npm run verify:app -- titanfit` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-titanfit` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#f23a2e primary,
        Nunito Sans, pill buttons, parallax heroes, schedule tabs,
        trainer hover overlays), and what differs (renamed "TitanFit",
        Nunito Sans via Google Fonts, lucide icons, picsum placeholders,
        Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1862 `[x]` +
        surge URL (`https://titanfit.free.componentdock.com`), `npm run
        readme:status`, push.
