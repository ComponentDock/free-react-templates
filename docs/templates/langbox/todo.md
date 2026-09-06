# LangBox — Implementation Tasks & Design Notes

## Template overview

- **New name:** langbox
- **ColorLib source:** Multiselect 03
- **Preview URL:** https://preview.colorlib.com/theme/multiselect-03/ (404 — fallback to https://preview.colorlib.com/theme/bootstrap/multiselect-03/)
- **Category:** Bootstrap Multiselect Dropdown
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Tasks

### Phase 1: Scaffold
- [ ] Copy simplest existing app (e.g. `apps/optpick`) as `apps/langbox`
- [ ] Rename package to `@free-react-templates/langbox`
- [ ] Update `public/CNAME` to `langbox.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://langbox.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Verify `grep -c "free-react-templates/langbox" package-lock.json` returns 1

### Phase 2: Components
- [ ] `src/App.tsx` — composes LangSelector + Footer
- [ ] `src/components/LangSelector.tsx` — multiselect dropdown component
  - Trigger button showing selected count / "All" default
  - Dropdown menu with 10 language options + "All"
  - Blue accent (#3e64ff) for selected items
  - Grey borders (#e6e6e6) between menu items
  - Click outside to close
  - Keyboard navigation (ArrowUp/Down, Space, Escape)
- [ ] `src/components/Footer.tsx` — Component Dock link
- [ ] `src/index.css` — Tailwind entry + theme tokens (brand: #3e64ff)

### Phase 3: Tests (TDD — RED first)
- [ ] `LangSelector.test.tsx` — render, open/close, select/deselect, Select All, keyboard nav, outside click
- [ ] `Footer.test.tsx` — renders Component Dock link

### Phase 4: Verification
- [ ] `scripts/verify-app.sh langbox` passes (typecheck + lint + tests + build)
- [ ] 100% coverage maintained

## Design notes (fidelity reference)

### Structure order (from original)
1. Section wrapper (centered, 7em vertical padding)
2. Heading row ("Select Language", centered)
3. Dropdown row (centered, max-width ~col-md-6 col-lg-4)
4. Semantic UI fluid selection dropdown with multi-select

### Section-by-section fidelity
- **Page layout:** White background, vertically centered content, Lato font
- **Heading:** "Select Language" text, 28px, font-weight 400, black color
- **Dropdown:** Semantic UI-style fluid selection dropdown, multi-select mode
  - Trigger: shows selected items or "All" as default
  - Menu: items separated by 1px #e6e6e6 top border
  - Active items: bold text in #3e64ff blue
  - Shadow on open: 0px 3px 19px -15px rgba(0,0,0,0.41)
  - Item font size: 13px, color: black, hover color: #3e64ff
- **Footer:** Component Dock link, simple text

### Differences from original
- React + Tailwind instead of Bootstrap + Semantic UI + jQuery
- No external CSS frameworks (Semantic UI) — custom dropdown in React
- Placeholder images not needed (this is a component, not a page)
- Lato font via Google Fonts link in index.html
