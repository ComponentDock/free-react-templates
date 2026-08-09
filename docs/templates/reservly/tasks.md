# Reservly (ColorLib Booking Form V1) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V1"
> (https://colorlib.com/wp/template/colorlib-booking-1/) under the NEW name
> **Reservly** (a reservation), per the monorepo naming mandate (never reuse
> the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V1" — "the best free
  reservation form template based on Bootstrap Framework for travel
  destinations with date pickers for check-in/out" (ColorLib meta
  description). TEMPLATES.md category: **Booking Forms (22)**. The
  recreation brands itself **Reservly**.
- **Reference status:** the official preview
  `https://preview.colorlib.com/theme/colorlib-booking-1/` returns 404; no
  `<slug>-colorlib.pages.dev` mirror exists for this classic template
  (products.js only covers new Astro-era demos); Wayback Machine has no
  snapshot (CDX empty). **Screenshot-only reference** (docs/replication.md
  fallback): `colorlib-booking-1.jpg` (HTTP 200), analyzed in-browser
  2026-08-09. Where the screenshot does not show a part of the page
  (navbar/footer), structure is inferred from the classic ColorLib Booking
  template family — implementer: keep those parts minimal.
- **Visual design (screenshot):** full-viewport hero on a mountain-lake
  photo with a translucent blue wash. Left: white floating card (drop
  shadow) with the reservation form — "Your Destination" input (placeholder
  "Enter a destination or hotel name"), Check in / Check out date fields
  side-by-side, Rooms/Adults/Children steppers (1/1/0) with minus/plus
  buttons, and a full-width rectangular blue "Check availability" button.
  Right: bold uppercase white headline "MAKE YOUR RESERVATION" + short
  lorem paragraph. Inputs are light grey `#f4f4f4` on the white card;
  labels small uppercase medium grey. Clean Bootstrap 4 era design —
  rectangular controls, no pills.
- **Structure (1:1):** one-page form-demo template:
  1. Navbar (dark `#343a40`, "Reservly" logo wordmark, few anchor links,
     phone link; not visible in screenshot — inferred, keep minimal).
  2. Hero (min-height full viewport, photo + blue overlay): left form card,
     right headline + blurb.
  3. Footer (dark, brand + copyright; inferred, keep minimal).
- **Design tokens (screenshot, Bootstrap-4-era conventions):**
  - Brand: **#007bff** (Bootstrap primary blue) for the Check availability
    button; hover `#0069d9`.
  - Neutrals: `#ffffff` card, `#f4f4f4` inputs, `#212529` body text,
    `#6c757d` labels, `#343a40` dark navbar/footer.
  - Hero overlay: translucent blue over photo (`bg-blue-900/40`-ish).
  - Fonts: **Roboto** (400/500/700) via Google Fonts; headline bold
    uppercase.
  - Shapes: rectangular (~4px radius) inputs + button; button full card
    width.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/reservly-<n>/<w>/<h>`, hero `reservly-1/1920/1080`);
  lucide-react icons (MapPin, Calendar, CalendarDays, Users, Minus, Plus,
  Phone, Mail); Roboto via Google Fonts; repo-standard Navbar + Footer
  chrome; native `<input type="date">` for the date pickers (no
  dependency); rename "Booking" → "Reservly" everywhere (logo, headline,
  copyright).
- "Check availability" (original demo is static): validate required fields
  (destination, dates) and reveal a summary line with destination, dates,
  and guest counts. Keep the summary/validation logic in a pure exported
  function for easy 100%-coverage tests.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — apps MUST import
  these from `packages/ui` or knip/CI deploy fails.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/reservly`
      (package `@free-react-templates/reservly`), wire the Tailwind v4
      theme tokens per the spec (primary `#007bff`, dark `#343a40`,
      input-bg `#f4f4f4`).
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Sections in order: navbar → hero (form card + headline) → footer.
- [ ] Navbar: dark background, "Reservly" wordmark, anchor links (Home,
      About, Contact), phone link; mobile-friendly (simple collapse or
      hidden links on narrow viewport).
- [ ] Hero: full-viewport photo (`picsum.photos/seed/reservly-1/1920/1080`) + blue overlay; grid 2 cols on desktop (form card | text), stacked on
      mobile.
- [ ] Form card: white, shadow, "Your Destination" required input with the
      exact placeholder, Check in / Check out native date inputs with
      check-out ≥ check-in validation.
- [ ] Steppers: Rooms/Adults (min 1) and Children (min 0) with minus/plus
      buttons; disabled-minus state at minimum; accessible labels.
- [ ] Check availability: full-width rectangular blue button; on click
      validates, shows per-field messages when missing, else a summary line
      (destination, dates, guests).
- [ ] Footer: dark, brand + copyright line, contentinfo landmark.
- [ ] Document title "Reservly — Book Your Stay"; landmarks
      banner/main/contentinfo; skip-to-content link per repo convention.
- [ ] `scripts/verify-app.sh reservly` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge; PR description
      must state the preview-404 → screenshot-only reference fallback.
