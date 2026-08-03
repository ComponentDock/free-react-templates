# Hound (Breed) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-hound`.

## Design notes

- **Original:** ColorLib "Breed" — free dog-breeds website template
  (source: https://colorlib.com/wp/template/breed/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/breed/`
  (HTTP 200) + `css/style.css`.
- **Structure observed (1:1):** navbar → hero slider ("We Love Pets" /
  "Care for dogs", "Get Started" + "Download" buttons) → intro ("It's a Dog
  Life") → about ("Every Dog Needs A Good Owner") → team (Mellisa Howard,
  Mike Richardson, Charles White, Laura Smith) → "Dog Breed Collections"
  (German Shepherd, Labrador, Bulldog, Rottweiler, Beagle, Golden
  Retriever) → "Recent Blog Post" (3 cards, "Read more") → footer (About
  The Breed / Contact Info / Quick Links).
- **Design tokens:** brand yellow **#ffc107** (+ **#ffce3a**), text
  **#262626**, light bg **#f8f9fa**, muted **#868e96**; font **Open Sans**
  via Google Fonts; white outline + yellow primary buttons.
- **Recreation name:** Hound (dog-focused). App folder `apps/hound`,
  package `@free-react-templates/hound`.
- **Design approach:** full multi-section landing page; `@theme` tokens for
  the yellow palette; seeded picsum placeholders; lucide-react icons;
  repo-standard Navbar (dark-mode toggle) + Footer; social icons (GitHub,
  X, LinkedIn) inline SVG; reuse packages/ui (Button, ButtonLink, Card,
  Badge, cn).
- Base implementation on `apps/aurora` (multi-section landing app) — adapt
  sections to the Breed structure above.

## Tasks

- [ ] Write `openspec/specs/template-hound/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hound` (copy `apps/aurora`; rename package to
      `@free-react-templates/hound`).
- [ ] TDD: tests first for Navbar, Hero, Intro, About, Team, Breeds, Blog,
      Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
