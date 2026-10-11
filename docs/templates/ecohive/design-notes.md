# Ecohive — design notes

Recreation of ColorLib **Ecohosting** (`ecohosting`).
Preview: https://preview.colorlib.com/theme/ecohosting/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ecohosting-free-template.jpg

## Visual design

- **Shell:** deep-plum/aubergine dark page (`#2d0a31`) with magenta accents — a
  "premium hosting" mood. Two light off-white bands (`#f9f9ff`) break up the
  darkness for the two content splits.
- **Hero:** left-aligned copy over the plum; large bold white H1, muted lavender
  paragraph, magenta gradient pill CTA. Right column: isometric server-stack
  illustration (violet/magenta), decorative orbit rings + circuit lines. Render
  this as a placeholder image (picsum) or a lightweight CSS/SVG composition.
- **Buttons:** pill shape, Poppins 15px/600, white text over a
  `#7346d6 → #a136b8` gradient; hover sweeps to solid `#f067ff`. Pricing cards
  use an *outline* pill (`1px solid #f067ff`, radius 30px, uppercase).

## Section order & fidelity notes

1. **Header** (`header-area header-transparent`) — leaf wordmark + nav
   (Home, Packages, Help, Blog, Contact) + "Sign Up" gradient pill + "Sign In".
   Transparent, floats over the hero; sticky on scroll. Nav hover = magenta text
   + magenta underline sweep.
2. **Hero** (`slider-area slider-bg`) — carousel of slides; `hero__caption` on
   the left (eyebrow `#9f78ff`, `h1` white, paragraph `#a5a7c5`, CTA), `hero__img`
   on the right. Keep the eyebrow/heading/paragraph/CTA structure.
3. **Domain search** (`domain-search-area section-bg1`) — left title + sub-copy,
   right pill search bar (globe leading icon, magenta circular submit), centered
   TLD price chips row. Dark bg `#2d0a31`.
4. **Features** (`team-area section-padding40 section-bg1`) — centered white
   title "Most amazing features" + 6 cards (`single-cat`: outlined violet icon,
   `h5` caption, muted blurb). 3-col desktop grid.
5. **Pricing** (`pricing-card-area`) — dark band (painted via `:before`/`:after`)
   with the white cards overlapping; title "Choose plan which fit for you";
   3 tiers: Shared Hosting $2.95/mo, Dedicated Hosting $89.99/mo, Cloud Hosting
   $14.99/mo; each with intro line, price (`card-mid` divider), feature list and
   outline pill button.
6. **About — Global server location** (`about-area1 section-padding40`) — light
   band; image left, text right (`section-tittle2` ink heading `#4c1e51`).
7. **About — Dedicated support** (`about-area1 pb-bottom`) — light band; text
   left, image right (mirrored).
8. **FAQ** (`ask-questions section-bg1`) — dark; centered title + accordion of
   the three source questions.
9. **Testimonial** (`testimonial-area section-bg1`) — dark; plum card
   (`#4c1e51`, radius 12, padding ~70/100) with a white quote, 68×68 initials
   avatar, name + role.
10. **Footer** (`footer-wrappr` / `footer-area footer-padding`) — dark; wordmark,
    newsletter email form, Company / Products / Support link columns, social
    icons, copyright bar. Must link https://www.componentdock.com/.

## Tokens quick card

| Token | Value |
| --- | --- |
| brand (dark shell) | `#2d0a31` |
| accent (magenta) | `#f067ff` |
| accent strong | `#a838bf` |
| gradient | `#7346d6 → #a136b8` (to bottom) |
| hero eyebrow | `#9f78ff` |
| muted on dark | `#a5a7c5` |
| light surface | `#f9f9ff` / `#f9fafc` |
| ink (light-band heading) | `#4c1e51` |
| ink eyebrow | `#140c40` |
| body on light | `#3b4855` / `#636a8a` |
| feature index | `#6785ff` |
| heading/nav font | Poppins |
| body font | Open Sans |
| pricing card | `#fff`, radius 8, shadow `0 8px 26px rgba(67,40,124,.08)` |
| outline pill button | `1px solid #f067ff`, radius 30 |

## Placeholders / assets

- All images: `https://picsum.photos/seed/ecohive-<n>/<w>/<h>` (n = 1..k, in
  source order). Icons via `lucide-react`. Fonts via `<link>` in `index.html`.
- Never copy ColorLib images, SVGs, fonts or CSS.
