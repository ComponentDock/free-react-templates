# Pamper (Colorlib Leopet) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-pamper`.

## Design notes (replication findings)

- **Original:** ColorLib "Leopet" — pet care & adoption charity
  (source: https://colorlib.com/wp/template/leopet/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/leopet/
  (HTTP 200, full rendered DOM + `css/style.css` (155KB) extracted).
- **Visual design (from DOM + CSS tokens):** fresh pet-welfare aesthetic with
  a **teal** brand color (`#53C9BB`) on white/light sections (`#fbf9ff`),
  coral (`#FF5B5B`) hover accents, rounded image cards with icon bubbles, and
  a Quicksand (rounded geometric) font throughout.
- **Structure (1:1, section order):**
  1. Top bar (`header_area`): phone `+02 213 - 256 (365)` + **Become a
     Volunteer** button; navbar links Home, About, Services, Gallery, Blog,
     Contact (demo also has Pages/Elements dropdowns).
  2. Hero (`banner_part`): kicker "Welcome to Leopet", h1 "Give your pet Best
     Care", **OUR SERVICES** button.
  3. About (`about_part`): h2 "We care your pet / As you care" + lorem
     paragraph + **About Us** button (image side).
  4. Services (`service_part services_bg`): "We Provide Best Services" + 3
     cards — **Pet Surgeries, Pet Adoption, Pet Care** — each with an icon
     and lorem blurb.
  5. Adopt counter (`abopt_number_counter`): "We need your help Adopt Us" +
     counters **590+ Pets Available**, **300+ Happy Clients** + **Browse
     Now** button.
  6. Testimonials (`client_review`): 3 customer quotes attributed to
     "Jon Miller".
  7. Volunteer (`about_part`): "Become a Volunteer / To help them" + lorem +
     **read more** link (volunteer image side).
  8. Footer (`footer_area`): **Subscribe Newsletter** widget ("We strictly
     follow the State Board's sanitary and disinfection guidelines." +
     email + subscribe), **Menu** links, **contact** (phone
     `10 983 456 3669`, `reserve@manicure.com`), **Address** (700, Green
     lane, New York, USA + Get Direction), **Opening Hour** (Mon-Fri
     9.00-6.00 · Sat-Sun Closed), social icons + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Primary **teal `#53C9BB`** (`.btn_1`, accents, section highlights).
  - Hover/accent **coral `#FF5B5B`** (`.btn_1:hover`).
  - Font: **"Quicksand", sans-serif** (Google Fonts via `<link>`).
  - Light section bg `#fbf9ff`; white cards with rounded corners.
  - Buttons: uppercase, white text on teal; hover flips to coral.
- **Recreation name:** Pamper (pet-care themed, distinct from "Leopet" and
  all existing names). App folder `apps/pamper`, package
  `@free-react-templates/pamper`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/pamper-<n>/<w>/<h>`); lucide-react icons (replaces
  flaticon/themify); Quicksand via Google Fonts; counters as static stats
  (no animation dependency); forms prevent default (no backend); teal
  primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-pamper/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/pamper` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/pamper`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-pamper`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
