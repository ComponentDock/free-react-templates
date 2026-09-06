# Poppy — Implementation Tasks & Design Notes

Recreation of ColorLib **Modal 10** (`https://colorlib.com/wp/template/modal-10/`).

## Design & Structure Notes

1. **Page Shell**: Full-viewport white background (`#fff`) with a centered heading ("Poppy") and a pill-shaped primary button ("Launch Poppy") that toggles the modal open via React state.
2. **Modal Overlay**: Semi-transparent dark overlay behind the modal when open. Clicking the overlay closes the modal.
3. **Modal Dialog**: Centered white card, `max-width: 500px`, no border, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`. No visible modal header border/padding — the header is a 230px image area with a gradient overlay.
4. **Gradient Header**: 230px-tall header area with a background image overlaid by a semi-transparent purple-to-blue gradient (`linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)` at `opacity: 0.3`). Close button (white ×) is absolute top-right at 40×40px.
5. **Modal Body (overlapping header)**: Uses `margin-top: -180px` to overlap the header. Contains:
   - "Newsletter" heading (h2, bold, white text)
   - Circular email icon (200×200px, `border-radius: 50%`, `rgba(255,255,255,0.2)` bg) with an SVG email icon inside
   - "Subscribe to our newsletter" subheading (h4, 18px, dark text)
   - Inline subscription form: text input (placeholder "Enter email address", `rgba(0,0,0,0.05)` bg, no border, border-radius 0) + submit button (130×52px, `#3e64ff` bg, white text, border-radius 0)
6. **Footer**: Standard footer with mandatory "Component Dock" link (`https://www.componentdock.com/`).

## Task Breakdown for Implementer

- [ ] Scaffold app `apps/poppy` (copy from simplest existing app, update package name to `@free-react-templates/poppy`, add `public/CNAME` with `poppy.free.componentdock.com`).
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Implement design tokens in `src/index.css` (`@theme`): brand blue `#3e64ff`, gradient colors `#dd00ff`/`#3e65ff`, icon circle bg `rgba(255,255,255,0.2)`, input bg `rgba(0,0,0,0.05)`, font Poppins.
- [ ] Build components: PageShell (heading + launch button), NewsletterModal (overlay + dialog + gradient header + close button + body with icon + form), Footer.
- [ ] Implement modal open/close state with keyboard support (Escape to close, focus trap).
- [ ] Write unit tests for all components with 100% coverage (`src/test/` or colocated `*.test.tsx`).
- [ ] Verify with `scripts/verify-app.sh poppy`.
- [ ] Build and register in workspace root (`npm install`).

## Design Token Notes

- **Font**: Poppins (Google Fonts / Cloudflare, weights 300–900). Load via `<link>` in index.html.
- **Brand primary**: `#3e64ff` — used for launch button, submit button, focus border.
- **Gradient**: `linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)` at `opacity: 0.3` — modal header overlay.
- **Body text**: `#212529` (Bootstrap default).
- **Button radius**: `40px` (pill shape for launch button).
- **Input bg**: `rgba(0,0,0,0.05)`, no border, `border-radius: 0`.
- **Submit button**: 130×52px, `#3e64ff`, white text, `border-radius: 0`.
- **Modal max-width**: `500px`.
- **Modal shadow**: `0px 10px 34px -15px rgba(0,0,0,0.24)`.
- **Modal header height**: `230px`.
- **Close button**: 40×40px, white, absolute top-right.
- **Icon circle**: 200×200px, `border-radius: 50%`, `rgba(255,255,255,0.2)` bg.
- **Body overlap**: `margin-top: -180px` on modal-body.

## Source Mapping

- ColorLib slug: `modal-10`
- ColorLib URL: `https://colorlib.com/wp/template/modal-10/`
- Live preview: `https://preview.colorlib.com/theme/bootstrap/modal-10/` (200 OK)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-10.jpg`
- New name: `poppy`
- Deploy URL: `https://poppy.free.componentdock.com`
