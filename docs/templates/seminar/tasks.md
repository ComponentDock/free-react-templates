# Seminar (ColorLib "Workshop") — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/seminar`
> (<https://seminar.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifact for the PREP stream; implementation ships on `feat/template-seminar`.
>
> **Re-synced 2026-10-22.** This brief previously carried the **Forge** prep's body
> (ColorLib "Craft", a light creative-agency landing) — a different design — while
> `openspec/specs/template-seminar/spec.md` has always described ColorLib
> **Workshop**. The body below now mirrors that spec. The design shipped as
> **`apps/seminar`** (`TEMPLATES.md` rows **1693** and **2104**, both `[x]`, dup
> rows of the same `workshop` slug — do not re-claim), so the checked tasks are
> **verified facts about the shipped app**, not a fresh implementation claim.

## Design notes (replication findings)

- **Original:** ColorLib "Workshop" — conference / workshop event landing page
  (source: `https://colorlib.com/wp/template/workshop/`; slug `workshop`).
- **Preview:** `https://preview.colorlib.com/theme/workshop/` — the token block in
  the spec was extracted from this theme's stylesheet.
- **Visual design:** dark, tech-flavoured event landing. Charcoal `#232531` page,
  `#1b1d24` footer, light-grey body text `#cfcfd1`, red-orange accent `#ff5733`
  with a `#c70039 → #ff5733` gradient. **Roboto Mono** throughout, which is what
  makes the page read as a workshop/schedule rather than a corporate site.
  Section headings are white with a short gradient underline; buttons are
  uppercase with `0.2em` letter-spacing and **no border-radius** (the sharp
  corners are part of the design — do not round them).
- **Structure (spec order — 1:1 with the preview):**
  1. **Navbar** — brand "Seminar" (white with the orange accent). Home, About,
     Speakers, Schedule, News + a "Buy Tickets" CTA.
  2. **Hero** — full-width photo with dark overlay; "Conference 2024" eyebrow,
     "Web Design Conference 2024" headline, "September 6th-7th, Portland, Oregon",
     gradient "Buy Tickets".
  3. **Speakers** — 4 cards in an alternating image/text layout (photo, name,
     role, bio, socials).
  4. **Programs** — schedule timeline: time + session title + speaker, border rows.
  5. **Sponsors** — 6 logo placeholders in a 3-column grid + "Be a Sponsor".
  6. **News** — 3 blog cards (image, title, author, excerpt) + "More Blog Posts".
  7. **Footer** — `#1b1d24`, 3 columns (About Event / Quick Links / Connect with
     Us) + the mandatory Component Dock link.
- **Recreation name:** **Seminar** (differs from the ColorLib source name).
  App folder `apps/seminar`, package `@free-react-templates/seminar`,
  `public/CNAME` = `seminar.free.componentdock.com`.
- **Recreation approach:** photos → seeded picsum placeholders
  (`https://picsum.photos/seed/seminar-<n>/<w>/<h>`); icons → `lucide-react`;
  Roboto Mono via a Google Fonts `<link>`; brand colours in Tailwind `@theme`;
  no source assets copied; no ColorLib reference in any app file (provenance
  lives in this brief, the spec, TEMPLATES.md and the PR only).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, `cn`) and register
  `injectUiSource()` in `vite.config.ts`.

## Tasks

Implementation (verified in the shipped app, 2026-10-22):

- [x] `openspec/specs/template-seminar/spec.md` written and valid
      (`npm run spec:validate`).
- [x] App workspace created: `apps/seminar`, package
      `@free-react-templates/seminar`, `"homepage"` =
      `https://seminar.free.componentdock.com`.
- [x] `apps/seminar/public/CNAME` = `seminar.free.componentdock.com`.
- [x] Components: `Navbar`, `Hero`, `Speakers`, `Programs`, `Sponsors`, `News`,
      `Footer` — each with a co-located `*.test.tsx` (100% coverage enforced by
      `npm run test:coverage`).
- [x] Footer carries the Component Dock link (`apps/seminar/src/components/Footer.tsx`).
- [x] No ColorLib reference in any app file.

Standing gates (re-run after any change to this app):

- [ ] `scripts/verify-app.sh seminar` — typecheck + lint + 100% coverage +
      build (FAST_MODE per-app gate).
- [ ] `npm run spec:validate` still passes for `template-seminar`.
- [ ] Visual diff against `https://preview.colorlib.com/theme/workshop/`:
      section order, the `#232531` / `#ff5733` / `#c70039` palette, Roboto Mono,
      square (un-rounded) uppercase buttons, the gradient heading underline.
- [ ] Deploy check: `https://seminar.free.componentdock.com` answers HTTPS 200
      with a valid certificate (a 301 alone proves nothing).
