# Portfolius — Implementation Tasks & Design Notes

Recreation of ColorLib "Clyde" personal portfolio/CV template.
Source: https://colorlib.com/wp/template/clyde/
Preview: https://preview.colorlib.com/theme/clyde/

## Task list

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/resume` or `apps/cvfolio`)
- [ ] Rename package to `@free-react-templates/portfolius`
- [ ] Set `public/CNAME` to `portfolius.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://portfolius.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Clean out any ColorLib references from copied code

### Phase 2: Theme & tokens
- [ ] Set `@theme` in `src/index.css` with brand tokens:
  - `--color-brand: #b1b493` (olive/sage green)
  - `--color-primary: #007bff` (blue accent for progress bars)
  - Background: white + `#f7f7f7` light gray alternating
  - Font: Poppins (Google Fonts link in `index.html`)
- [ ] Create base layout in `src/App.tsx` composing all section components

### Phase 3: Components (section by section)
1. **Navbar.tsx** — Dark navbar, brand "Portfolio" left, 7 nav links right, sticky + solid-on-scroll
2. **Hero.tsx** — Full-width slider (2 slides), portrait image right, text left with 2 CTA buttons
3. **StatsCounter.tsx** — 4-column grid, animated count-up on scroll, olive circular icons
4. **About.tsx** — 2-column: portrait left with overlay, personal info list + interests row right
5. **Skills.tsx** — 3-column circular progress cards (CSS-based), percentage + weekly/monthly deltas
6. **Services.tsx** — 2 rows × 4 white cards, olive circular icon + title + description
7. **HireMe.tsx** — Olive green (#b1b493) full-width banner, portrait right, "Contact me" button
8. **Projects.tsx** — 4-column image grid, dark overlay + hover text (title + category)
9. **Testimonials.tsx** — Olive green section, carousel of quote cards with avatar + name + position
10. **Blog.tsx** — 3-column cards: image + meta (date, author, comments) + title + excerpt
11. **Contact.tsx** — 2-column: form (name, email, subject, message, submit) left, info sidebar right
12. **Footer.tsx** — 4-column dark footer + social icons + copyright + Component Dock link

### Phase 4: Tests & coverage
- [ ] Write Vitest + RTL tests for each component (100% coverage target)
- [ ] Verify with `npm run test:coverage` — all green, 100% lines/functions/branches/statements

### Phase 5: Verification
- [ ] `npm run verify:app portfolius` (typecheck + lint + tests + build)
- [ ] Visual review: screenshot comparison with original
- [ ] Responsive check: mobile / tablet / desktop
- [ ] Footer contains Component Dock link

## Design notes

### Color usage map
| Section          | Background       | Text color  | Accent     |
|------------------|------------------|-------------|------------|
| Navbar           | #1a1a2e (dark)   | white       | olive on active |
| Hero             | white + portrait | black       | olive name highlight |
| Stats            | #f7f7f7          | black       | olive icons |
| About            | white            | black       | olive links |
| Skills           | #f7f7f7          | black       | olive progress bars |
| Services         | white            | black       | olive icons |
| Hire Me          | #b1b493          | white       | white button |
| Projects         | white            | white (overlay) | olive hover |
| Testimonials     | #b1b493          | white       | quote icon |
| Blog             | #f7f7f7          | black       | olive links |
| Contact          | white            | black       | olive submit btn |
| Footer           | dark (#222)      | white/light | olive accents |

### Responsive breakpoints
- Desktop: full multi-column layouts as designed
- Tablet (< 1024px): 2-column grids where original has 4
- Mobile (< 768px): single column, hamburger nav

### Key fidelity points
- The hero is a slider with 2 slides — implement with CSS or simple state toggle
- Stats use animated count-up (IntersectionObserver + requestAnimationFrame)
- Skills use CSS circular progress bars (conic-gradient or SVG circles)
- Projects use hover overlay effect (dark semi-transparent bg + text)
- Testimonials use auto-playing carousel
- Hire-me section is a distinct olive green banner — key visual element
- All icons use lucide-react (replacing Font Awesome / Flaticon originals)
- Images use picsum.photos with deterministic seeds per slot
