# PortfolioCove — Implementation Notes

Source: ColorLib "Po Portfolio" (https://colorlib.com/wp/template/po-portfolio/)
Preview: https://preview.colorlib.com/theme/po-portfolio/ (unreachable — screenshot only)

## Section order (top to bottom)

1. **Sidebar** — fixed left, white bg, "Po." logo + hamburger
2. **Breadcrumb** — "Home / Portfolio" top of main
3. **Portfolio Grid** — 4-col image grid, square cards, light gray bg
4. **Footer** — minimal, links to Component Dock

## Fidelity notes

- The original has a **fixed left sidebar** with brand + hamburger. This is the
  defining layout feature. Replicate with `fixed left-0 top-0 h-screen` and
  a `ml-20` (or similar) on the main content area.
- "Po." logo is bold sans-serif, large (~24px), dark text.
- Hamburger icon: three thin horizontal lines, dark gray. Use lucide-react
  `Menu` icon or custom SVG.
- Breadcrumb: small, light gray (#999), "Home" is a link, "/" separator,
  "Portfolio" is plain text.
- Portfolio grid: CSS Grid, 4 columns on desktop, `gap: 24px`.
  Each cell: light gray (#f5f5f5) background, centered image (object-fit: cover
  or contain), square aspect ratio (1:1).
- Images: use `https://picsum.photos/seed/portfoliocove-<n>/400/400` for
  deterministic placeholders.
- No visible footer in screenshot — add a minimal footer with Component Dock
  link per conventions.
- Responsive: 4→2→1 columns at breakpoints.
- No hover effects visible — keep it simple.

## Component breakdown

- `Sidebar.tsx` — fixed left, brand + hamburger
- `Breadcrumb.tsx` — nav breadcrumb
- `PortfolioGrid.tsx` — responsive CSS Grid of image cards
- `PortfolioCard.tsx` — single image card (gray bg + image)
- `Footer.tsx` — minimal footer
