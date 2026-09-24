# Airtime — Task Outline

## Implementation tasks (for implementers)

### Setup
- [ ] Copy simplest existing app (e.g. `apps/abjure`) as base for `apps/airtime`
- [ ] Rename package to `@free-react-templates/airtime`
- [ ] Update `public/CNAME` to `airtime.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://airtime.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Components
- [ ] `Navbar.tsx` — sticky dark nav with logo, links, dark mode toggle, CTA button
- [ ] `Hero.tsx` — badge, heading (two-tone), subtext, two CTA buttons, platform pills
- [ ] `StatsBar.tsx` (dark) — 4-column metric display, white numbers
- [ ] `Divider.tsx` — angled/diagonal SVG or clip-path transition
- [ ] `StatsSection.tsx` (light) — 4-column metric display, red numbers
- [ ] `FeaturedEpisodes.tsx` — responsive card grid with episode data
- [ ] `Newsletter.tsx` — email input + subscribe button
- [ ] `Footer.tsx` — multi-column footer with Component Dock link
- [ ] `App.tsx` — compose all sections in order

### Styling
- [ ] `index.css` — Tailwind entry + `@theme` tokens (brand-primary, bg-dark, etc.)
- [ ] Dark mode: `dark:` utilities, toggle logic on `<html>` element
- [ ] All buttons: `rounded-full` pill shape
- [ ] Responsive breakpoints: mobile hamburger, stacked stats, single-col cards

### Testing (TDD — write tests first)
- [ ] Navbar: renders logo, nav links, dark mode toggle, Listen Now button
- [ ] Hero: renders badge, heading, subtext, both CTAs, platform pills
- [ ] Dark stats bar: renders 4 stat values and labels
- [ ] Light stats section: renders 4 stat values and labels
- [ ] Featured episodes: renders card grid
- [ ] Newsletter: renders email input and subscribe button, validates email
- [ ] Footer: renders logo, nav links, social icons, Component Dock link
- [ ] Dark mode toggle: switches theme class
- [ ] 100% line/function/branch/statement coverage

### Verification
- [ ] `scripts/verify-app.sh airtime` passes (typecheck + lint + tests + build)
- [ ] Visual comparison with screenshot matches section order and design tokens
- [ ] No ColorLib references in `apps/airtime/` code
- [ ] Footer links to `https://www.componentdock.com/`
