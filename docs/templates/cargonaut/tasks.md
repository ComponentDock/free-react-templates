# Tasks & Design Notes: Cargonaut (Logistico)

## Overview

Recreation of ColorLib **Logistico** (`https://colorlib.com/wp/template/logistico/`, live demo
`https://preview.colorlib.com/theme/logistico/`, page title **"Transportion"**) as **Cargonaut** —
a ten-band freight landing page.
Spec: `openspec/specs/template-cargonaut/spec.md`
Brief with measured tokens and document order: `docs/templates/cargonaut/design-notes.md`
TEMPLATES.md: row **2966** (`## Logistics (2)`)
Shipped: https://cargonaut.free.componentdock.com

Row 2966 previously read `[x] … [logistico]`, but `apps/logistico` renders ColorLib
**Thelogistico**'s copy (`docs/spec-row-mismatch.md` → `ROW-POINTER`, 19 exclusive hits vs 1);
Thelogistico already ships as `logistix`, so `apps/logistico` is a surplus duplicate (`UNLINKED`)
and the Logistico design had never been built. The row was a false `[x]`; this run re-claims it.

## Section order & architecture

| #   | file                              | band                                                                                                                    | status |
| --- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | `src/components/Header.tsx`       | sticky top bar (email · phone · Get Free Quote) + main bar (wordmark, 5 nav links, `Pages` dropdown, mobile disclosure) | [x]    |
| 2   | `src/components/Hero.tsx`         | 700px photograph under a navy 50% wash; kicker, `h1`, `Our Services` CTA                                                | [x]    |
| 3   | `src/components/Pillars.tsx`      | three transport pillars with lucide icons                                                                               | [x]    |
| 4   | `src/components/Services.tsx`     | `#f5fbff` band, "Services We Offer", four image cards in a 2×2 grid                                                     | [x]    |
| 5   | `src/components/SecureBanner.tsx` | photograph + navy 70% wash, "100% secure and safe", phone CTA                                                           | [x]    |
| 6   | `src/components/WhyChoose.tsx`    | two columns: photo + heading, intro, three ticked reasons, outline `About Us`                                           | [x]    |
| 7   | `src/components/Counters.tsx`     | navy strip, four counters with orange suffix                                                                            | [x]    |
| 8   | `src/components/Testimonials.tsx` | white 10px card over a photo, prev/next with wrap                                                                       | [x]    |
| 9   | `src/components/Estimate.tsx`     | `#001d38` band, intro + phone CTA + six-field quote form with validation                                                | [x]    |
| 10  | `src/components/Locations.tsx`    | address + contact cards nested in the estimate band                                                                     | [x]    |
| 11  | `src/components/Footer.tsx`       | four columns (Services · Company · Industries · Subscribe) + Component Dock credit                                      | [x]    |
| —   | `src/data.ts`                     | nav, pillars, services, counters, reasons, testimonials, form option lists, footer columns                              | [x]    |
| —   | `src/index.css`                   | `@theme` tokens (brand `#ff3414`, navy `#001d38`, service `#f5fbff`, body `#596672`, Poppins)                           | [x]    |

## Verification

- `bash scripts/verify-app.sh cargonaut` — typecheck, oxlint, 29 tests, **100%** statements /
  branches / functions / lines (83 / 20 / 39 / 80), production build.
- `npm run spec:validate` — 3,232 specs, 0 failures.
- Lockfile: `grep -c "free-react-templates/cargonaut" package-lock.json` → 2 (workspace registered
  by `npm install` at the root, required by the deploy Action's `npm ci`).
- `public/CNAME` = `cargonaut.free.componentdock.com`; `homepage` matches.

## Interaction decisions

- **Mobile menu** is the only header state: a disclosure button (`aria-expanded`,
  `aria-controls`) that closes on any link activation.
- **`Pages` dropdown** is CSS-only (`group-hover`, `group-focus-within`) — no state, no outside
  click handler, so keyboard focus alone opens it.
- **Testimonial stepper** keeps a single index in state and wraps with
  `(current + step + length) % length`; the avatar seed is derived from the index so each slide
  gets its own placeholder.
- **Estimate form** validates during submit (name + contact number required), never inside an
  effect; success and error are mutually exclusive (`sent` / `error`).
- **Subscribe form** uses one `status` union (`idle | error | done`) so the alert and the
  confirmation can never both render.
- No `IntersectionObserver`, no `Date.now()` in render, no `setState` from an effect — the
  oxlint react-compiler rules stay clean without fallbacks.

## Follow-ups (not this run)

- `apps/logistico` is now the fourth surplus duplicate (`UNLINKED`, alongside `spark`,
  `givehope`, `stride`); removing those apps is a separate cleanup.
- `bellows` (`BOTH-STALE` → accordion-01) and `cirrus` (`UNRESOLVED`) remain in
  `docs/spec-row-mismatch.md`.
