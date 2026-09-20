# Lingo — Implementation Tasks

Source: ColorLib "Lingua" (https://colorlib.com/wp/template/lingua/)
Preview: https://preview.colorlib.com/theme/lingua/
New name: Lingo (`apps/lingo`, `@free-react-templates/lingo`)

## Structure order (top to bottom)

1. Header (top bar + nav + search + hamburger)
2. Hero (dark bg, headline, CTA)
3. Courses (3 cards, 3-col grid)
4. Instructors (3 cards, circular photos)
5. Register (taupe bg, form, countdown)
6. Events (3 cards, date badges)
7. Blog (split: 6 categories left + featured post right)
8. Footer (newsletter, 3 columns, copyright, Component Dock link)

## Task breakdown

- [ ] Scaffold app from simplest existing app (copy + rename)
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Add Google Fonts (Poppins + Montserrat) to `index.html`
- [ ] Set up `src/index.css` with Tailwind `@theme` tokens:
  - brand-primary: #2e21df (indigo)
  - brand-secondary: #937c6f (taupe)
  - brand-accent: #f9cf0e (golden)
  - dark-bg: #252525
  - dark-alt: #232323
  - light-bg: #f1f1f1

### Components (in section order)

- [ ] `Header.tsx` — top bar (phone, language dropdown, social icons) + main nav (6 links) + search icon + hamburger
- [ ] `Hero.tsx` — dark background image, centered headline "Learn Languages Easily", subtitle, CTA "get started"
- [ ] `Courses.tsx` — section title "Our Courses", 3-col grid, each card: image, title, instructor+language, description, students, stars, badge
- [ ] `Instructors.tsx` — section title "Meet Our Team", 3-col grid, each card: circular photo, name, "Teacher", bio, social icons
- [ ] `Register.tsx` — taupe bg (#937c6f), title "Courses For Free", 4-column form (name, email, phone, subject), countdown timer area
- [ ] `Events.tsx` — section title "Upcoming Events", 3-col grid, each card: image, date badge (day/month), title, category tag
- [ ] `Blog.tsx` — split layout: left (title + 6 category cards), right (featured post with image + tag + title + desc)
- [ ] `Footer.tsx` — newsletter (logo + subscribe input), 3 columns (About, Support, Privacy), copyright bar, Component Dock link

### App composition

- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point (excluded from coverage)

### Testing (TDD)

- [ ] Write tests for each component (one `describe` per component)
- [ ] Coverage must be 100% lines/functions/branches/statements
- [ ] Query by role/text, not class names
- [ ] Test mobile responsiveness (hamburger menu toggle, stacked grids)

### Finalization

- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Run `scripts/verify-app.sh lingo` (typecheck + lint + tests + build)
- [ ] Update `TEMPLATES.md`: `[~]` → `[x]` with surge URL + homepage
- [ ] Commit as `feat: add Lingo template (ColorLib Lingua)`
- [ ] Open PR, squash merge, delete branch
