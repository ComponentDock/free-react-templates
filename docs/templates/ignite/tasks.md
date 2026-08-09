# Ignite (ColorLib Youthconnect) — Implementation Tasks

Recreation of https://colorlib.com/wp/template/youthconnect/ under the new
name **Ignite** (brand: **Ignite Youth**). Full spec:
`openspec/specs/template-ignite/spec.md`.

## Stack

Vite + React 19 + Tailwind CSS 4 + TypeScript (strict) · Vitest + Testing
Library, 100% coverage enforced · shared UI from `packages/ui` (Button,
ButtonLink, Badge, Card, cn).

## Reference

- Live demo DOM: https://youthconnect-colorlib.pages.dev/
  (preview.colorlib.com/theme/youthconnect/ is 404 — Astro category, demos
  live on `<slug>-colorlib.pages.dev`).
- Screenshot: TEMPLATES.md row `youthconnect-template-1770211452999.jpg`.
- Stylesheet tokens: `/_astro/Base.DGxUKMky.css` (cyan #06b6d4, navy
  #080716/#0f0d24, orange #f97316, Bebas Neue + Plus Jakarta Sans, pill
  buttons, rounded-2xl cards).

## Build order (tests first, TDD)

1. Scaffold app: copy the simplest existing app, rename package to
   `@free-react-templates/ignite`; keep `injectUiSource()` in
   `vite.config.ts`; run `npm install` at root so `package-lock.json`
   registers the workspace (deploy CI runs `npm ci`).
2. Theme tokens in `src/index.css` `@theme`: `--color-primary-*` (cyan
   scale #06b6d4 family), `--color-navy-*` (#080716, #0f0d24, #1e1b4b),
   `--color-accent-*` (orange #f97316), `--font-display` Bebas Neue,
   body Plus Jakarta Sans. Add Google Fonts `<link>` in `index.html`.
3. Components (one file each, colocated tests):
   - `Navbar.tsx` — sticky, dark over hero → white/80 backdrop-blur when
     scrolled; logo icon + "Ignite Youth"; links Events/Groups/Watch/
     About/Parents; phone icon; orange "I'm New" pill; dark-mode toggle;
     mobile hamburger menu. Dead-anchor links are fine (same-kind as
     source `/events` etc.).
   - `Hero.tsx` — min-h-screen, dark navy overlay over seeded photo,
     badge "Wednesdays at 6:30 PM" (+ orange dot), H1 "Rise Higher"
     with cyan→orange `bg-gradient-to-r` clip-text, blurb, cyan pill
     "Join Us Wednesday" + outline pill "Watch Latest Message",
     translucent dark stats band: 300+ Students Weekly · 25 Small
     Groups · 12 Leaders.
   - `Events.tsx` — heading + "View All Events"; featured cards (Elevate
     Night — "Every Wednesday · 6:30 PM - 8:30 PM" + Learn More; Summer
     Camp 2025) with orange "Featured" badge; smaller cards City Serve
     Day / Spring Retreat / Worship Night with date + "Register Now";
     category badge colors (orange/green/purple).
   - `SmallGroups.tsx` — heading + blurb, filter chips (Guys/Girls/
     Co-ed), 4 cards (The Forge, Bloom, Foundation, Band of Brothers),
     "Find Your Group" button.
   - `Content.tsx` — heading + "View All"; 4 media cards with type badge
     (Video/Podcast/Devotional) + duration + title.
   - `Leaders.tsx` — heading + blurb, 4 profile cards (seeded avatar,
     name, role, blurb, Instagram handle), volunteer CTA card ("Want to
     Make a Difference?" + "Become a Volunteer").
   - `Testimonials.tsx` — heading + quote cards (quote, name, grade,
     avatar).
   - `Cta.tsx` — navy band, "Don't Miss Out", blurb, "Plan Your Visit"
     (cyan) + "Contact Us" (outline).
   - `Footer.tsx` — service times (Elevate Night 6:30 PM Wednesdays, MS
     Hangout 9:00 AM Sundays, HS Connect 11:00 AM Sundays), blurb,
     Get Involved / Resources / Connect columns, contact email +
     phone, copyright.
4. Compose in `App.tsx` in the exact order: Navbar → Hero → Events →
   SmallGroups → Content → Leaders → Testimonials → Cta → Footer.
5. Dark mode: `.dark` variants on every section (navy-950/900 dark
   backgrounds mirror the source's dark treatment).
6. Verify: `npm run verify:app ignite` (typecheck + lint + 100% coverage
   - build). Full gate runs in CI on merge + nightly.

## Fidelity notes

- Copy is fine to paraphrase but keep the same KIND (badge + gradient
  headline + blurb + 2 CTAs; event name + schedule + blurb + link; leader
  name + role + blurb + handle; quote + name + grade).
- Photos → `https://picsum.photos/seed/ignite-<n>/<w>/<h>` (people/group
  shots for hero + leaders; anything for cards). Never copy source images.
- Icons from `lucide-react`: Flame (logo), CalendarDays, Clock, Users,
  Play, Mic, BookOpen, Star, ArrowRight, Phone, MapPin, Heart, Instagram,
  Youtube, Music2, Mail, ChevronDown.
- The source links to `/events`, `/groups`, `/media`, `/about`,
  `/parents` — in a single-page recreation keep same-kind anchor links;
  dead anchors are acceptable (mirrors source).
- Brand rename: "Elevate Youth" → "Ignite Youth"; "RISE HIGHER" headline
  can stay same-kind (or brand-adjacent) — keep the cyan→orange gradient
  treatment.

## Definition of done

- Spec scenarios all covered by tests; coverage 100% lines/functions/
  branches/statements.
- `npm run verify:app ignite` green; lockfile registers the workspace.
- PR to main: `feat: Ignite — youth ministry template (ColorLib
Youthconnect) (#N)`; merge immediately with `--squash --delete-branch`.
- TEMPLATES.md: mark Youthconnect `[x]` with surge URL + homepage; run
  `npm run readme:status`; commit `chore: mark <name> (Youthconnect) as
deployed`.
