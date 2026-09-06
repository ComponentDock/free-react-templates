# Signoff — Implementation Notes

## Source

- **ColorLib slug:** bootstrap-footer-09
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-09/
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-09/
- **Description:** An easy to use free responsive footer template based on Bootstrap Framework with a minimalist and clean look.

## Component Structure

```
src/
  App.tsx                  — composes PreviewHero + SignoffFooter
  components/
    PreviewHero.tsx        — 70vh centered "Footer #9" heading on light bg
    SignoffFooter.tsx      — the main footer component
  index.css                — Tailwind entry + @theme tokens
  main.tsx                 — entry point (excluded from coverage)
```

## Section Order (top-to-bottom)

1. **Preview Hero** — 70vh light gray area with centered "Footer #9" heading
2. **Footer — Site Logo** — centered, 2rem, bold 900, deep purple (#4200ff)
3. **Footer — Nav Links** — inline horizontal links: About, Services, Press, Careers, FAQ, Legal, Contact
4. **Footer — Social Section** — "Stay in touch" heading + 5 brand-colored icons
5. **Footer — Copyright** — centered, muted gray, "© Signoff. All Rights Reserved."
6. **Footer — Component Dock** — attribution link

## Design Token Notes

- Brand accent: deep purple `#4200ff` — use in `@theme` as `--color-brand`
- Social icons use platform-specific brand colors (not a single accent)
- Footer uses Poppins font family (not Roboto — body fallback)
- All anchor transitions: 0.3s ease
- Footer padding: 7rem 0 (generous vertical breathing room)

## Fidelity Notes

- Match the centered single-column layout (col-md-9 equivalent in Tailwind)
- Nav links are inline-block (horizontal), not stacked
- Social icons are inline-block with 10px padding each
- Copyright uses `<small>` element and muted gray (#999)
- No divider/border between sections — clean separation via spacing only
- The preview hero area (70vh, bg-light) is part of the template demo

## Implementation Tasks

- [ ] Create `apps/signoff/` workspace (copy simplest existing footer app)
- [ ] Rename package to `@free-react-templates/signoff`
- [ ] Create `src/components/PreviewHero.tsx`
- [ ] Create `src/components/SignoffFooter.tsx`
- [ ] Compose in `src/App.tsx`
- [ ] Add `@theme` tokens in `src/index.css` (brand: #4200ff)
- [ ] Load Poppins + Roboto via Google Fonts in `index.html`
- [ ] Write Vitest tests for PreviewHero and SignoffFooter
- [ ] Ensure 100% coverage
- [ ] Add `public/CNAME` with `signoff.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Run `scripts/verify-app.sh signoff`
- [ ] Commit and push

## Traps / Gotchas

- Social icon colors are per-platform, not a single accent — don't unify them
- Nav links are horizontal (inline-block), not vertical stacks
- Footer font is Poppins, not Roboto — body uses Roboto as fallback
- The "Stay in touch" heading is black, bold, 18px — not purple
- Copyright text uses `#999` not the brand color
