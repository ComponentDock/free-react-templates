# Rosenook — Design Notes & Task Outline

**Source**: ColorLib Bootstrap Footer 13
**Preview**: https://preview.colorlib.com/theme/bft/bootstrap-footer-13/
**Slug**: bootstrap-footer-13
**New name**: rosenook

## Section Order (top → bottom)

1. **Footer section** (`footer.footer-03`) — the entire template IS the footer
   - Background: `#f8f1f1` (very light pink/rose)
   - Padding: `7em 0`
   - Font: Poppins, 14px base

2. **Main content row** — two halves (`col-md-6` each)
   - **Left half**: 3 link columns (Men / Women / Kids)
     - Each column: `col-md-4`
     - Heading: 14px, uppercase, 2px letter-spacing, weight 500, margin-bottom 30px
     - Links: `rgba(0,0,0,0.3)` color, `py-1 d-block` spacing
   - **Right half**: Social icons + Newsletter subscribe
     - "Follow Us" heading (same style as column headings)
     - 4 social icons: Twitter, Facebook, Instagram, LinkedIn
       - Circular: 40x40px, 50% radius
       - Background: `rgba(0,0,0,0.05)`
       - Icon color: `#f17e7e` (accent), white on hover
     - "Subscribe Us" heading (mt-5 spacing)
     - Subscribe form:
       - Input: 52px height, `rgba(0,0,0,0.05)` background, no border, square corners, 16px font
       - Button: 130x52px, `#f17e7e` background, white text, square corners
       - Both: `border-radius: 0`

3. **Bottom bar** (copyright row) — `row.mt-5.pt-4.border-top`
   - Thin top border separator
   - Left: copyright text with current year, `rgba(0,0,0,0.4)` color
   - Right: "Terms & Conditions" | "Privacy" links, right-aligned

## Fidelity Notes

- The ColorLib original uses Bootstrap 4 grid + Ionicons for social icons
- We use Tailwind CSS grid/flex + lucide-react for icons
- The original has a `ftco-section` demo header above the footer — this is NOT part of the footer template; skip it
- The original's subscribe button has no visible hover effect (just removes text-decoration)
- Font weights used in original: 300, 400, 500, 600, 700, 800, 900 (full Poppins family)
- Footer uses `ionicons` for social icons — map to lucide-react equivalents (Twitter→Twitter, Facebook→Facebook, Instagram→Instagram, Linkedin→Linkedin)

## Implementation Tasks

1. [ ] Scaffold `apps/rosenook` (copy simplest existing footer app, rename package)
2. [ ] Install Poppins font via Google Fonts `<link>` in `index.html`
3. [ ] Create `src/index.css` with Tailwind + `@theme` tokens for accent color `#f17e7e` and footer bg `#f8f1f1`
4. [ ] Build `src/components/Footer.tsx` — main footer container
5. [ ] Build `src/components/LinkColumns.tsx` — Men/Women/Kids column grid
6. [ ] Build `src/components/SocialIcons.tsx` — circular social icon row
7. [ ] Build `src/components/SubscribeForm.tsx` — email input + subscribe button
8. [ ] Build `src/components/BottomBar.tsx` — copyright + legal links
9. [ ] Compose in `src/App.tsx`
10. [ ] Write tests (Vitest + Testing Library) — 100% coverage
11. [ ] Run `scripts/verify-app.sh rosenook`
12. [ ] Commit and push

## Component Mapping (original → React)

| Original | React Component | Notes |
|----------|----------------|-------|
| `footer.footer-03` | `<Footer>` | Outer wrapper with bg color |
| `.col-md-6` (left) | `<LinkColumns>` | 3-column grid of nav links |
| `.col-md-6` (right) | `<SocialAndSubscribe>` | Social icons + form |
| `.ftco-footer-social` | `<SocialIcons>` | 4 circular icon links |
| `.subscribe-form` | `<SubscribeForm>` | Input + button |
| `.row.mt-5.pt-4.border-top` | `<BottomBar>` | Copyright + legal |

## Key Design Decisions

- Accent color `#f17e7e` is used for: links, social icons, subscribe button — a warm salmon/coral pink
- Footer bg `#f8f1f1` is a very faint pink, almost white — gives the feminine feel
- All corners are square (border-radius: 0) except social icon circles (50%)
- Social icon circles have a subtle semi-transparent dark background on default state
- The subscribe form uses a split layout: input (flex-grow) + fixed-width button
