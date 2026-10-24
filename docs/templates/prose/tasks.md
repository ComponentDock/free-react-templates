# Tasks & Design Notes: Prose (Author)

> **SHIPPED** — this prep's design shipped as `apps/prose`
> (<https://prose.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Overview

Recreation of ColorLib **Author** (`https://colorlib.com/wp/template/author/`, live demo
`https://preview.colorlib.com/theme/author/`) as **Prose** — a one-page book-launch site: hero with
a book illustration, publisher strip, "About The Book", four counters, a chapter reader, three
services, reviews, an author biography, contact and a black footer.

Spec: `openspec/specs/template-prose/spec.md` (rewritten 2026-10-24; it previously recorded ColorLib
"Blogger" — see `docs/spec-row-mismatch.md`).
Brief with measured tokens and the fidelity-delta table: `docs/templates/prose/design-notes.md`.

Row note: `TEMPLATES.md` line **2291** (`## One Page (91)`) links `author` and `prose`; the spec now
records the same slug, so row and spec agree.

## Section order & architecture

| # | file | band | status |
| --- | --- | --- | --- |
| 0 | `src/components/Navbar.tsx` | fixed bar, "Prose." wordmark, 7 in-page links, mobile toggle | [x] |
| 1 | `src/components/Hero.tsx` | eyebrow, h1, blurb, "Buy Now For $22.78" pill, cover | [x] |
| 2 | `src/components/Partners.tsx` | five publisher marks | [x] |
| 3 | `src/components/AboutBook.tsx` | "About The Book" + three features | [x] |
| 4 | `src/components/Stats.tsx` | four counters, one-shot count-up | [x] |
| 5 | `src/components/Chapters.tsx` | chapter index + panel swap | [x] |
| 6 | `src/components/Services.tsx` | three service cards | [x] |
| 7 | `src/components/Testimonials.tsx` | three quoted reviews | [x] |
| 8 | — | **"My Other Books"** eight-cover grid | [ ] not shipped |
| 9 | `src/components/AuthorBio.tsx` | portrait, name, bio, contact rows | [x] |
| 10 | `src/components/Contact.tsx` | four info cards + form + confirmation | [x] |
| 11 | `src/components/Footer.tsx` | four columns, socials, Component Dock credit | [x] |
| 12 | `src/index.css` | `@theme`: accent `#17b978`, navy `#263b5e`, Raleway/Open Sans | [x] |

## Tasks

- [x] Spec rewritten to the measured Author reference; Requirements aligned to the app
- [x] Brief (`design-notes.md`) rewritten with measured tokens + document order + delta table
- [x] Hero eyebrow, headline and CTA copy as the reference ships them
- [x] Publisher strip as five marks (text substitution for the logo images — assets are never copied)
- [x] Four counters that run once on 30% visibility and do not replay
- [x] Chapter reader with a sidebar index and a current-entry highlight
- [x] Three services, three reviews, author bio with location/phone/email rows
- [x] Contact cards + form; submit prevents navigation and confirms
- [x] Footer credit to Component Dock
- [x] No source-site name, domain or URL anywhere under `apps/prose/`
- [ ] **My Other Books band** — eight 330px covers in a 4-col grid, overlay going `0 → .5` on hover
      with title + category. `apps/pageturn/src/components/MyBooks.tsx` and
      `apps/penman/src/components/MyBooks.tsx` are working in-house references for the same design.
      Add the band and restore the nav entry, then run `bash scripts/verify-app.sh prose`
- [ ] **Epigraph chapter** — the reference index runs `#page-1`…`#page-8` (Epigraph is the eighth);
      the app ships seven panels
- [ ] **Skin parity** — navbar light/transparent over the hero (currently navy), hero ground white
      with the illustration at 60% right (currently navy gradient), 40px-radius uppercase CTA pill
      (currently 4px, sentence case), testimonial band as a photo under a `#17b978` wash with the
      five-slide carousel (currently navy, 20% photo, static 3-card grid), footer ground `#000000`
      (currently `#1a2a42`), contact field skin 52px/`#fff`/5px radius with a black focus border
- [ ] **Author bio parity** — six-row info list (Name, Date of birth, Address, Zip code, Email,
      Phone) with 130px 600-weight labels, plus the 120-book "View All Books" pill over the portrait
- [ ] Contact map panel — the reference puts a Google map in the left half beside the form; record
      the omission in the PR when it is deliberately kept out
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app
      change (`bash scripts/verify-app.sh prose`)
