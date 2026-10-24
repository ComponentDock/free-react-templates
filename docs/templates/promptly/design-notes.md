# Promptly — Design Notes & Implementation Todo
<!-- prep-status: shipped-as=popup -->
> **SHIPPED-UNDER** — the ColorLib `modal-11` design this prep describes already
> ships as `apps/popup` (<https://popup.free.componentdock.com>).
> Do not scaffold `apps/promptly`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-popup/spec.md`.

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/bootstrap/modal-11/` answers HTTP 200
> (2,363 B; `style.css` 15,042 B, sha256 `f1b411267894`). Any "preview 404 /
> design from screenshot" note further down is **superseded**: take CSS
> values from the live sheet (`docs/replication.md`); the screenshot stays
> the layout target.

Source: ColorLib Modal 11
Preview: https://preview.colorlib.com/theme/modal-11/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-11.jpg
Description: "Free Minimal Text Modal — the best responsive and free minimal
text modal you can use to share any type of text or message in a clean pop-up."

> NOTE: Preview returned 404 at research time (2026-09-06). Design tokens
> are inferred from ColorLib modal series conventions and the page description.

## Structure Order (top to bottom)

1. **Full-page section** — white background, centered vertically
   - Heading: "Promptly" (h1 or h2, Poppins font, font-weight 400–500)
   - Description: brief tagline text
   - Launch button: "Launch Modal" (theme `.cl-btn`, square, border-radius 0)

2. **Modal overlay** — semi-transparent dark backdrop (`rgba(0, 0, 0, 0.5)`)

3. **Modal dialog** — max-width ~500px, centered, no border, white bg, drop shadow
   - **Close button** — absolute top-right, `×` character or X icon
   - **Modal body** — clean padding, centered text
     - Heading (h2 or h3, bold, dark text)
     - Paragraph text (clean line-height, `rgba(0, 0, 0, 0.8)` or similar)
     - (No form — this is a TEXT modal, not a form modal)

4. **Footer** — simple footer with Component Dock link

## Section-by-Section Fidelity Notes

### Full-page section

- White `.ftco-section` fills viewport
- Centered layout (Bootstrap justify-content-center, text-center)
- Heading is Poppins font, light/regular weight
- Button is the theme's `.cl-btn` — `border-radius:0`, square (not a 40 px pill)
- Button color: `#007bff` or `#3e64ff` (consistent with modal series)

### Modal dialog

- Standard Bootstrap `.modal-dialog-centered` for vertical centering
- Custom `.modal-content`: no border, white bg, box-shadow
- Box shadow: `0px 10px 34px -15px rgba(0, 0, 0, 0.24)` (series standard)
- The "minimal text" nature means NO form, NO icons, NO images — just clean
  typography: a heading + body text, possibly with a close/dismiss action

### Modal body

- Clean padding (likely 30-40px)
- Heading: bold, dark, possibly 24px
- Body text: regular weight, slightly muted, 16px, good line-height (1.6)
- The key visual is the MINIMALISM — no decorative elements, just text

### Close button

- Top-right corner of modal
- `×` character or Lucide X icon
- Color: `rgba(0, 0, 0, 0.5)` hover → `rgba(0, 0, 0, 0.8)`

### Footer

- Simple, minimal footer
- "Made with Component Dock" or similar, linking to componentdock.com

## Implementation Todo

1. [ ] Create app scaffold: copy simplest existing modal app (bellpush or modalize)
2. [ ] Rename package to `@free-react-templates/promptly`
3. [ ] Update `public/CNAME` to `promptly.free.componentdock.com`
4. [ ] Update `package.json` homepage to `https://promptly.free.componentdock.com`
5. [ ] Create `LaunchSection.tsx` — centered heading + description + button
6. [ ] Create `TextModal.tsx` — minimal text modal with heading + paragraph
7. [ ] Create `Footer.tsx` — Component Dock link
8. [ ] Compose in `App.tsx` — state management for modal open/close
9. [ ] Add keyboard support: Escape to close, focus trap, focus restore
10. [ ] Add dark mode support via Tailwind dark: utilities
11. [ ] Write tests (Vitest + Testing Library) — 100% coverage
12. [ ] Verify: `scripts/verify-app.sh promptly`
13. [ ] Update `npm run readme:status` after merge
