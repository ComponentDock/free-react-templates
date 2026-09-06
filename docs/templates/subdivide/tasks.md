# Subdivide — Design Notes & Implementation Tasks

## Source
- ColorLib: Bootstrap Footer 06 (slug: `bootstrap-footer-06`)
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-06/
- Category: Footer Component

## Structure Order (Section-by-Section)

1. **Demo content area** (above footer) — light gray bg, centered heading "Footer #6" (70vh height placeholder)
2. **Footer — link columns** (centered, col-md-8):
   - 5 equal columns (col-sm-6 col-md):
     - **Discover:** Website editors, Online retail, Get started, Services
     - **About:** Contact, Services, Team
     - **Services:** Events, News, Awards
     - **Buy:** Where to Buy, Shop Online
     - **Help:** FAQ, Support, Knowledge Base
   - Each column: h3 heading (16px bold) + stacked nav links (14px, #777)
3. **Footer — divider** (full-width border-top)
4. **Footer — bottom bar** (3 sections):
   - Left (col-md-4): Social icons — Twitter, Facebook (inline, #ccc)
   - Center (col-md-4): Copyright text — "Subdivide © All Rights Reserved." (small, centered)
   - Right (col-md-4): App store links — Apple App Store, Google Play Store (inline, 13px, #ccc)

## Fidelity Notes

- **Fonts:** Poppins loaded via Google Fonts (weight 400, 500)
- **Icons:** Use `lucide-react` for social icons:
  - twitter → Twitter
  - facebook → Facebook
  - apple → Apple (for App Store link)
  - play → Play (for Google Store link)
- **Colors:** Footer bg white, text #777, accent/hover #4200ff, social #ccc
- **Layout:** Centered container (col-md-8) for link columns; full-width for bottom bar
- **Link style:** Vertical stacked lists (display: block), 14px, 10px margin-bottom
- **Social icons:** No background circles — plain text icons with 10px padding
- **App store links:** Icon + text (e.g. "App Store"), 13px, same color as social
- **Divider:** Simple border-top on a full-width col
- **Responsive:** 5 cols → stacked on mobile; bottom bar stacks

## Tasks

- [ ] Create `apps/subdivide/` workspace (copy simplest existing app)
- [ ] Rename package to `@free-react-templates/subdivide`
- [ ] Set up Tailwind v4 + theme tokens in `index.css`
- [ ] Create `Footer.tsx` component (main footer wrapper)
- [ ] Create `LinkColumns.tsx` component (5-column centered layout)
- [ ] Create `BottomBar.tsx` component (social + copyright + app links)
- [ ] Create `App.tsx` composing the demo layout
- [ ] Add Google Fonts link for Poppins in index.html
- [ ] Write tests (100% coverage) before implementation
- [ ] Verify: typecheck + lint + test:coverage + build pass
