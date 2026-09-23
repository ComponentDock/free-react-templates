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
