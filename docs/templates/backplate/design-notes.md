# Backplate — Design Notes & Implementation Tasks

**Source:** ColorLib Bootstrap Footer V08
**Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-08/
**Preview DOM analyzed:** Yes (HTML + CSS extracted)
**Screenshot analyzed:** Yes (fallback, design tokens confirmed via CSS)

---

## Structure (top to bottom)

1. **Footer section** — full-width, dark background image with overlay
   - Container with 5-column grid (Bootstrap `row` → Tailwind grid)
   - Column 1: Logo + About paragraph
   - Column 2: "Discover" link list
   - Column 3: "About" link list
   - Column 4: "Help" link list
   - Column 5: "Follow Us" social icons (inline)
2. **Copyright bar** — centered text, top border separator

## Section-by-section fidelity notes

### Footer container
- Background: use a placeholder image (`https://picsum.photos/seed/backplate-footer/1920/800`) with a `rgba(0,0,0,0.7)` overlay via a `::before` pseudo-element or absolute-positioned div
- Padding: `7rem 0` (approx `py-28` in Tailwind)
- Text color: `#777` throughout

### Column 1: Logo + About
- Logo text: large white text (1.5rem, `text-white text-xl`)
- About paragraph: gray text, below logo
- Use `mb-4` spacing below logo

### Columns 2-4: Link lists
- Each column has a heading (`h3`): white, bold, 16px
- Heading `margin-bottom: 30px`
- Link items: `mb-2` spacing, gray (#999) default, white on hover
- Use `list-none` (no bullets)
- Links: Home, About Us, Portfolio, Services, Contact | Clients, Team, Career, Testimonials, Journal | Privacy Policy, Terms & Conditions, Partners

### Column 5: Social icons
- "Follow Us" heading same style as link columns
- Icons: inline-block, `padding: 7px`, gray default, white hover
- Icons: Instagram, Twitter, Facebook, Pinterest, Dribbble
- Use `lucide-react` icons: `Instagram`, `Twitter`, `Facebook`, `Pin`, `Dribbble`

### Copyright bar
- Top border: `1px solid #595959`
- Centered text, `mt-5 pt-5` spacing
- Text: "© 2019—2020 All Rights Reserved." (use current year)

## Design tokens for Tailwind @theme

```css
@theme {
  --color-backplate-text: #777777;
  --color-backplate-heading: #ffffff;
  --color-backplate-link: #999999;
  --color-backplate-link-hover: #ffffff;
  --color-backplate-border: #595959;
  --color-backplate-overlay: rgba(0, 0, 0, 0.7);
  --color-backplate-accent: #e42c64;
  --font-family-footer: "Poppins", sans-serif;
  --font-family-body: "Roboto", sans-serif;
}
```

## Implementation tasks

1. [ ] Create `apps/backplate/` folder (copy simplest existing footer app)
2. [ ] Rename package to `@free-react-templates/backplate`
3. [ ] Set up `vite.config.ts` with `injectUiSource()`
4. [ ] Create `src/components/Footer.tsx` — the main footer component
5. [ ] Create `src/App.tsx` — compose footer only (no content demo area)
6. [ ] Add `public/CNAME` with `backplate.free.componentdock.com`
7. [ ] Set `homepage` in `package.json` to `https://backplate.free.componentdock.com`
8. [ ] Add footer link to `https://www.componentdock.com/` (branded as "Component Dock")
9. [ ] Add Poppins + Roboto fonts via `<link>` in `index.html`
10. [ ] Write Vitest tests for Footer (100% coverage)
11. [ ] Run `scripts/verify-app.sh backplate` (typecheck + lint + tests + build)
12. [ ] Commit as `feat: add backplate template (ColorLib bootstrap-footer-08)`
