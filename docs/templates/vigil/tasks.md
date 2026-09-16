# Vigil — Implementation Tasks & Design Notes

## Source mapping

- ColorLib slug: `05-comming-soon`
- New name: `vigil`
- Preview URL: https://preview.colorlib.com/theme/05-comming-soon/ (404 — unreachable)
- Screenshot used as primary reference: https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-20.jpg
- CSS extracted from: https://colorlib.com/etc/cs/05-comming-soon/css/styles.css

## Structure (section order, top to bottom)

This is a single-page coming-soon template with NO navigation, NO header,
and NO footer navigation. The entire page is one full-screen section:

1. **Full-screen background** — misty forest image with dark overlay
2. **Centered content block** (vertically + horizontally centered):
   a. Heading: "Coming Soon" (bold, white, Poppins 3.5em)
   b. Description: maintenance message (white, Open Sans, max-width 500px)
   c. Countdown timer: 4 white circles (Days, Hours, Mins, Sec)
   d. CTA button: "NOTIFY US" pill button (pink #F84982)
3. **Social footer** (absolute bottom):
   a. "Follow us for update" label
   b. 5 colored circular social icons (Facebook, Twitter, Google+, Instagram, Pinterest)

## Component plan

| Component | Path | Notes |
|---|---|---|
| `VigilPage` | `src/App.tsx` | Root layout: 100vh flex, background image, overlay, centered content |
| `CountdownTimer` | `src/components/CountdownTimer.tsx` | 4 circles with Days/Hours/Mins/Sec; uses `useState` + `setInterval` |
| `SocialLinks` | `src/components/SocialLinks.tsx` | Row of 5 circular colored icons (use `lucide-react` icons) |

## Design token notes

- Brand color: `#F84982` (hot pink) — used for countdown numbers, CTA button
- Hover accent: `#E45F74` — link hover states
- Overlay: `rgba(0,0,0,0.4)` over background image
- Countdown circles: white bg, 90px × 90px, border-radius 100px
- Button: pill shape (border-radius 50px), pink fill, white text, 13px 35px padding
- Social icons: 35px circles with per-platform brand colors
- Outer wrapper: 30px padding (creates inset frame with inner shadow)

## Implementation steps

1. Scaffold app: copy simplest existing app, rename to `vigil`
2. Set up `index.css` with theme tokens (brand pink, overlay, etc.)
3. Build `VigilPage` layout: full-screen background + overlay + centered flex
4. Add heading + description (static text)
5. Build `CountdownTimer` component with 4 circles + live countdown logic
6. Build "NOTIFY US" CTA button
7. Build `SocialLinks` with colored circular icons
8. Add responsive breakpoints (767px, 479px)
9. Add footer link to Component Dock
10. Write tests (TDD): verify all sections render, countdown logic, hover states
11. Run per-app gate: `npm run verify:app vigil`
12. Commit, push, open PR, merge

## Fidelity notes

- The original uses jQuery countdown plugin — replace with React `useState`/`setInterval`
- The original uses Ionicons for social icons — replace with `lucide-react`
- Background image: use `https://picsum.photos/seed/vigil/1600/900` for misty landscape
- The outer wrapper padding (30px) creates an inset frame effect with the inner shadow
- The original has a typo "Comming Soon" — keep as "Coming Soon" (corrected)
