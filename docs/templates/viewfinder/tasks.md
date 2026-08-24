# Viewfinder — Replication Tasks & Design Notes

Source: ColorLib Photosen (`https://colorlib.com/wp/template/photosen/`)
Preview: `https://preview.colorlib.com/theme/photosen/`

## Section Structure & Order

1. **Navbar** (`Navbar.tsx`): Brand title, responsive navigation items with dropdown support, social links.
2. **Photo Grid** (`PhotoGrid.tsx` / `App.tsx`): 3-column fluid grid of photo cards with dark overlay info ("Nature", "Portrait", "People", etc.) and outline buttons.
3. **Footer** (`Footer.tsx`): Copyright and Component Dock branding link.

## Fidelity Notes

- Dark theme background (`bg-neutral-900 text-white`).
- Typography: Josefin Sans & Roboto Mono google fonts loaded via index.html.
- Buttons: White outline hover-fill pattern.
