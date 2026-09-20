# BrightPath — Tasks

## Spec

- [x] Research ColorLib Edusmart preview (DOM + CSS tokens)
- [x] Write spec.md with Gherkin scenarios

## Implementation

- [x] Scaffold apps/brightpath (copy eduforge, rename package)
- [x] Configure vite.config.ts with injectUiSource()
- [x] Configure vitest.config.ts, tsconfig.json, index.html
- [x] Set up index.css with brand tokens (brand #00aee0, Crimson Text + Montserrat)
- [x] Implement Navbar (top bar + main nav + mobile toggle)
- [x] Implement Hero (gradient banner + search form)
- [x] Implement Features (3 gradient-icon features)
- [x] Implement Departments (staggered grid + description + CTA)
- [x] Implement PopularCourses (4 cards with images, authors, prices)
- [x] Implement Facts (dark overlay, 6 stat cards)
- [x] Implement Testimonials (cards + thumbnail strip)
- [x] Implement Registration (countdown timer + form)
- [x] Implement Events (2 event cards)
- [x] Implement Footer (5 columns + newsletter + social + Component Dock link)

## Tests

- [x] Navbar.test.tsx (7 tests)
- [x] Hero.test.tsx (4 tests)
- [x] Features.test.tsx (2 tests)
- [x] Departments.test.tsx (4 tests)
- [x] PopularCourses.test.tsx (5 tests)
- [x] Facts.test.tsx (3 tests)
- [x] Testimonials.test.tsx (2 tests)
- [x] Registration.test.tsx (8 tests — countdown branches + form submit)
- [x] Events.test.tsx (4 tests)
- [x] Footer.test.tsx (7 tests — including newsletter form submit)
- [x] App.test.tsx (2 tests)

## Verification

- [x] Typecheck passes (tsc --noEmit)
- [x] Lint passes (oxlint)
- [x] 100% coverage (statements, branches, functions, lines)
- [x] Build succeeds (vite build)
- [x] npm install — package-lock.json updated

## Bookkeeping

- [ ] Commit + push branch
- [ ] PR + merge
- [ ] TEMPLATES.md [~] → [x] + surge URL
- [ ] Set homepage in package.json
- [ ] Run readme:status
