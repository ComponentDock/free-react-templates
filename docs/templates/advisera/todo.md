# Advisera — Prep Notes

## Source

- **ColorLib:** Cellon — https://colorlib.com/wp/template/cellon/
- **Preview:** https://preview.colorlib.com/theme/cellon/
- **Category:** Consulting company

## Section Order (implement in this sequence)

1. **Navbar** — sticky top bar, logo left, nav links right, hamburger for mobile
2. **Banner/Hero** — fullscreen two-col: image left, text+CTA right
3. **Video** — dark overlay, play icon center, headline + subtext
4. **About** — two-col: text + View More button left, image right
5. **Features** — three blog-style cards in a grid
6. **Counters** — four stat boxes in a row (animated count-up)
7. **FAQ** — accordion with 3 expandable questions
8. **Contact** — form left (name/email/subject/message), info right (services + contact)
9. **Footer** — copyright, social icons, links

## Fidelity Notes

- **Font:** Poppins (Google Fonts) — match the clean geometric sans-serif feel
- **Brand green:** #6cbb23 — use as @theme primary, for CTA buttons and accent text
- **Buttons:** pill shape (rounded-full), green fill for primary, green border for secondary
- **Headings:** #222, bold, Poppins
- **Body text:** #777, Poppins, lighter weight
- **Section backgrounds:** white for most, #f9f9ff for counters/alternate, #edf3fd or #f0f8e9 as needed
- **Hero:** generous whitespace, two equal columns, image has no border
- **Video section:** dark overlay (rgba(0,0,0,0.5) or similar), play button centered
- **Cards:** clean white background, subtle border or shadow
- **Footer:** simple, bottom-aligned, copyright + social icons
- **Contact form:** standard inputs with borders, green "Send Message" button
- **FAQ:** accordion with plus/minus toggle, smooth expand animation
- **Mobile:** hamburger nav, stacked columns, touch-friendly spacing
- **No images copied** — use picsum.photos/seed/advisera-n/ for placeholders

## Token Summary

| Token | Tailwind @theme | CSS source |
|---|---|---|
| brand | --color-brand: #6cbb23 | .genric-btn.primary background |
| heading | --color-heading: #222 | h1–h6 color |
| body | --color-body: #777 | body color |
| bg-alt | --color-bg-alt: #f9f9ff | .button-area background |
| font | font-family: "Poppins" | body font-family |

## Implementer Notes

- Copy `apps/abjure` (simplest existing app) as starting scaffold
- Rename package to `@free-react-templates/advisera`
- Run `npm install` at root to register workspace in lockfile
- Verify with `scripts/verify-app.sh advisera` before push
