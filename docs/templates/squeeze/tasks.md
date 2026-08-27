# Squeeze Tasks & Design Notes (Accordion 16 recreation)

## Source Reference

- ColorLib Template: Accordion 16 (`https://colorlib.com/wp/template/accordion-16/`)
- Live Preview: `https://preview.colorlib.com/theme/bac/accordion-16/`
- Assigned Name: `squeeze` (`apps/squeeze`)

## Design & Structure Notes

1. **Layout**: Centered container with heading followed by a vertical stack of pill-shaped accordion items (`rounded-[40px]`).
2. **Tokens**:
   - Brand Green: `#72c02c`
   - Backgrounds: Page `#efefef`, Items `#f9f9f9`, Buttons `#ffffff`
   - Font: Roboto
3. **Sections**:
   - Header title
   - Accordion list (FAQ items with collapsible bodies, custom plus/minus toggle icons)
   - Component Dock footer link (`https://www.componentdock.com/`)

## Implementation Todo List for Implementer

- [ ] Scaffold `apps/squeeze` (copy from simplest template or bootstrap Vite+React+Tailwind 4 workspace)
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Configure `public/CNAME` with `squeeze.free.componentdock.com`
- [ ] Write unit tests for Accordion component matching spec scenarios (100% coverage)
- [ ] Implement Navbar/Header, Accordion section, and Component Dock footer
- [ ] Run per-app verification (`scripts/verify-app.sh squeeze`)
