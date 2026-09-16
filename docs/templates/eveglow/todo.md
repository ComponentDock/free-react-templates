# EveGlow — Implementation Notes

Source: ColorLib "06 Comming Soon" (slug: `06-comming-soon`)
Preview: https://colorlib.com/etc/cs/06-comming-soon.html
New name: `eveglow` (apps/eveglow)

## Section Order (single-page, top to bottom)

1. **Full-viewport hero** — background image with dark overlay (40% black)
2. **Title** — "Coming Soon" in Poppins, white, centered, 3.5em
3. **Description** — maintenance message, white, centered, max-width 500px
4. **Countdown timer** — 4 white circles (days/hours/mins/sec), pink numbers
5. **CTA button** — "NOTIFY US", pink pill (#F84982), outline on hover
6. **Social icons** — "Follow us for update" label + 5 colored circles
7. **Footer** — Component Dock branding only

## Component Breakdown

| Component      | File                    | Notes                                      |
| -------------- | ----------------------- | ------------------------------------------ |
| App            | `src/App.tsx`           | Composes all sections                      |
| Hero           | `src/components/Hero.tsx` | Background image + overlay + centered content |
| Countdown      | `src/components/Countdown.tsx` | 4 circular badges with live ticking |
| NotifyButton   | `src/components/NotifyButton.tsx` | Pink pill button, outline hover |
| SocialIcons    | `src/components/SocialIcons.tsx` | 5 brand-colored circles |
| Footer         | `src/components/Footer.tsx` | Component Dock link |

## Fidelity Notes

- **Background**: Use `picsum.photos/seed/eveglow-1/1920/1080` for the hero
  image (deterministic mountain-like landscape). Dark overlay via
  `bg-black/40` absolute overlay div.
- **Countdown**: Use `useEffect` + `setInterval` to tick every second. Target
  date configurable via prop or constant.
- **Vertical centering**: Original uses `display: table`. Use Tailwind's
  `flex items-center justify-center min-h-screen` for modern equivalent.
- **Box shadow**: Original has `2px 5px 30px rgba(0,0,0,.3)` on the content
  area. Omit in Tailwind version — it's a remnant of the original's edge-to-
  edge padding + shadow design; with full-viewport flex centering it adds
  nothing. (Decided: skip shadow for cleaner modern look.)
- **Social icons**: Use `lucide-react` icons. Map: Facebook → Facebook icon,
  Twitter → Twitter icon, Instagram → Instagram icon, Pinterest → MapPin or
  Heart icon. Google+ is defunct — replace with LinkedIn or skip.
- **Font loading**: Add Google Fonts `<link>` for Open Sans (400,600) and
  Poppins (500) in `index.html`.
- **No countdown plugin**: Original uses jQuery countdown plugin. Implement
  natively with React + setInterval.

## What Differs from Original

1. New name "EveGlow" (not "06 Comming Soon")
2. React 19 + Tailwind (not jQuery + custom CSS)
3. No Google+ icon (defunct service)
4. Placeholder image from picsum (not original mountain photo)
5. Footer links to Component Dock (not ColorLib)
6. No box-shadow on content area (cleaner modern look)
7. No table-based centering (flexbox instead)
