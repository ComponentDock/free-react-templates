# Oathmark — Implementation Notes

Source: ColorLib Notary (https://colorlib.com/wp/template/notary/)
Preview: https://preview.colorlib.com/theme/notary/

## Section Order (must match original 1:1)

1. Navbar (sticky, brand + links, dropdown for Practice Areas, mobile hamburger)
2. Hero (dark overlay bg image, split: left headline/subtitle + right appointment form)
3. Practice Areas (light bg, 6 cards in 3-col grid, icon + title + blurb)
4. About / Attorney (2 images left, headline + CTA right)
5. Testimonials (light bg, 3 cards: avatar, name, role, blockquote)
6. Legal Solutions (3-col: image, text + checklist, accordion FAQ)
7. Footer (dark image bg, About Us + social, 4 link columns, copyright)

## Design Tokens (extracted from preview CSS)

- Heading font: Playfair Display (serif) — use Google Fonts link
- Body font: Roboto (sans-serif) — use Google Fonts link
- Brand green: #71bc42 — use in @theme as `--color-brand`
- Hero overlay: #364d59 — dark semi-transparent overlay
- Light section bg: #f8f9fa — Tailwind `bg-gray-50` or custom
- Accent peach: #fee2b3 — icon wrap background
- Button: pill shape (border-radius 50%), bg #71bc42
- Card radius: 7px
- Footer: background-image dark overlay style

## Component Structure

```
apps/oathmark/
  src/
    main.tsx
    App.tsx
    index.css          (Tailwind entry + @theme tokens)
    components/
      Navbar.tsx       (sticky, logo, links, dropdown, mobile toggle)
      Hero.tsx         (overlay bg, headline, appointment form)
      PracticeAreas.tsx (6 cards grid)
      About.tsx        (images + text + CTA)
      Testimonials.tsx (3 quote cards)
      LegalSolutions.tsx (image + text + accordion)
      Footer.tsx       (dark bg, columns, social, copyright)
    test/
      setup.ts
```

## Fidelity Notes

- Hero overlay uses CSS pseudo-element (::before) with rgba(0,0,0,0.2) on original; use Tailwind overlay utility or custom class
- Practice area icons use Flaticon CSS classes; replace with lucide-react equivalents
- Accordion uses Bootstrap collapse; implement with React state + transition
- Date picker on appointment form is Bootstrap datepicker; use a simple date input or a lightweight React date picker
- Footer uses background-image with dark overlay; replicate with Tailwind bg-cover + overlay
- Social icons use icomoon; replace with lucide-react (Facebook, Instagram, Twitter, Linkedin)
- All placeholder images → picsum.photos with deterministic seeds
- Navbar dropdown: CSS hover + JS toggle for mobile; simple React state

## TODO

- [ ] Create app scaffold (copy simplest existing app, rename package)
- [ ] Implement Navbar.tsx (sticky, dropdown, mobile toggle)
- [ ] Implement Hero.tsx (overlay, form, validation)
- [ ] Implement PracticeAreas.tsx (6 cards)
- [ ] Implement About.tsx (images + CTA)
- [ ] Implement Testimonials.tsx (3 cards)
- [ ] Implement LegalSolutions.tsx (text + checklist + accordion)
- [ ] Implement Footer.tsx (columns, social, copyright)
- [ ] Wire App.tsx to compose all sections
- [ ] Write tests for all components (100% coverage)
- [ ] Run verify-app.sh, fix any issues
- [ ] Commit, push, open PR, merge

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/oathmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/oathmark/public/CNAME` = `oathmark.free.componentdock.com`
  and the package `homepage` = `https://oathmark.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Read from `https://preview.colorlib.com/theme/notary/` (HTTP 200, 31,181 B,
title `Notary — Free Website Template by Colorlib`) — theme layer
`css/style.css` (18,248 B) plus its **compiled** `css/bootstrap.min.css`
(34,158 B, Bootstrap 4.3.1), which is where the button colour lives.

| Token | Reference | App (`apps/oathmark`) |
| ----- | --------- | --------------------- |
| Brand / CTA | `#fee2b3` peach (15: `.site-navbar` band, `.btn-primary` fill, active menu, form focus) | `--color-accent: #fee2b3` — present but secondary |
| Primary in app | — | `--color-brand: #71bc42` — the reference green appears **once**, as `.ul-check.success li:before` (a list tick) |
| CTA hover | `#fed48d` / border `#fdcf81` / ring `rgba(221,198,158,0.5)` | — |
| Ink | `#364d59` (body 300, Playfair headings 300) | `--color-hero-overlay: #364d59` — it is text, not an overlay |
| Hero scrim | `rgba(0,0,0,0.2)` | — |
| Light band | `#f8f9fa` (5) | `--color-bg-light: #f8f9fa` ✓ |
| Type | Playfair Display headings / Roboto body | same pair ✓ |
| Hero H1 | 50px, `<strong>` 900, white via bootstrap `.text-white !important` | — |
| Radius | `.btn` 0.25rem, accordion 4px, circles 50% — **no pills** | pill buttons |

Section order measured: peach absolute navbar → 100vh photo hero + white
appointment card → practicing/area cards → testimonial band → accordion →
photo footer.
