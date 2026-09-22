# Gymforge (ColorLib Gym) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gymforge`. Recreation name: **Gymforge** (NEW name —
> the ColorLib source keeps its name "Gym").

## Source mapping

- **ColorLib item:** "Gym" (TEMPLATES.md line 1853; section "## Fitness / Gym").
- **Source URL:** https://colorlib.com/wp/template/gym/
- **Preview URL:** https://preview.colorlib.com/theme/gym/
- **Preview CSS:** `css/main.css` (38,688 bytes) + `css/bootstrap.css`, `css/font-awesome.min.css`, `css/linearicons.css`
- **Fonts:** Poppins (Google Fonts), FontAwesome icons

## Reference research (done — do not redo)

### Screenshot analysis

Visual design: Dark overlay hero banner with large white headline text,
bold fitness aesthetic. Clean white sections alternate with light gray
(#f9f9ff) backgrounds. Pink/red (#f6214b) primary brand color used for
CTA buttons and the BMI calculator section. Dark feature area (#222)
creates contrast. Pricing cards have clean white backgrounds with
feature lists. Overall: professional gym/fitness theme, modern, clean
layout with strong color accents.

### Design tokens (live stylesheet + rendered page)

| Token | Value | Use |
| ----- | ----- | ----- |
| Primary brand | `#f6214b` | CTA buttons, BMI section bg, price button bg |
| Secondary | `#4cd3e3` | Brand area accent |
| Accent blue | `#38a4ff` | Feature area links |
| Light bg | `#f9f9ff` | Section alternate backgrounds |
| Dark bg | `#222` | Feature area background |
| Yellow | `#f4e700` | Accent highlight |
| Font | Poppins | Body text, headings |
| Button radius | 25px | Primary buttons (pill shape) |
| Overlay | `rgba(0, 0, 0, 0.5)` | Hero and CTA overlays |

### Section structure (from live preview DOM)

1. **Header** — Top bar (tagline, logo, phone) + sticky nav (Home, we offer, Top Course, Schedule, Trainer, Plan, Pages)
2. **Banner** — Full-screen hero with overlay bg, "Real Fitness Depends on Exercise" headline, tagline, CTA
3. **Offer** — "We care about what we offer" + 3 service cards (icons + text)
4. **Convert** — Pink bg (#f6214b), BMI calculator (height/weight inputs + calculate button)
5. **Top Courses** — "Top Courses That are open for Students" + 6 course cards (image, badge, name, price)
6. **Feature** — Dark bg (#222), 2 side-by-side blocks (image + text)
7. **Schedule** — "Schedule your Fitness Process" + weekly timetable table
8. **Team** — "Our Experienced Trainers" + 4 trainer cards (photo, social icons, name, role)
9. **Price** — "Choose the Perfect Plan for you" + 3 pricing cards (Standard £199, Business £399, Ultimate £499)
10. **Brand** — Row of 5 partner logos
11. **Call-to-Action** — Background image + overlay, "Huge Transaction in last Week", "Become a Member" button
12. **Footer** — 4 columns (About Us, Contact Us, Newsletter, social links)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/gymforge` from the simplest existing app, rename package to `@free-react-templates/gymforge`, add Poppins 400/500/600/700 Google Fonts `<link>` in index.html, set `public/CNAME` = `gymforge.free.componentdock.com` + `"homepage"`. Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library, 100% coverage): Header (top bar, logo, nav links, mobile menu toggle), Hero (overlay bg, headline, tagline), Offer (3 service cards), Convert (BMI form, inputs, calculate button, result display), TopCourses (6 cards, badges, prices), Feature (dark bg, 2 blocks), Schedule (table, rows), Team (4 cards, social links), Price (3 plans, features, buttons), Brand (5 logos), CTA (overlay, heading, button), Footer (4 columns, Component Dock credit).
3. [ ] Header component: top bar with tagline/phone, sticky nav with logo and links, mobile hamburger menu with slide-out.
4. [ ] Hero/Banner: full-screen section with background image placeholder, dark overlay, white headline text, tagline, CTA button.
5. [ ] Offer section: centered heading, 3-column grid of service cards with icons and text.
6. [ ] Convert section: pink background (#f6214b), BMI calculator with height/weight inputs, calculate button, result display.
7. [ ] Top Courses: heading, 6 course cards in 3-column grid, each with image, badge, title, price.
8. [ ] Feature section: dark background (#222), 2 side-by-side blocks with images and text.
9. [ ] Schedule section: heading, weekly timetable table with course names and times.
10. [ ] Team section: heading, 4 trainer cards in grid, each with photo, social links (lucide icons), name, role.
11. [ ] Price section: heading, 3 pricing cards (Standard/Business/Ultimate), each with price, features list, purchase button.
12. [ ] Brand section: row of 5 partner logo placeholders.
13. [ ] CTA section: background image, dark overlay, heading, description, "Become a Member" button.
14. [ ] Footer: 4-column layout (About Us, Contact Us, Newsletter, Component Dock credit).
15. [ ] Run `npm run verify:app -- gymforge` (typecheck → lint → vitest 100% → build) and fix until green.
16. [ ] Open PR `feat/template-gymforge` → merge immediately, PR description must include source URL, preview URL, token list, and what differs.
17. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1853 `[x]` + surge URL, `npm run readme:status`, push.
