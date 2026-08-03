# Vitality (Colorlib Vitality) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-vitality`.

## Design notes (replication findings)

- **Original:** ColorLib "Vitality" — medical / healthcare website template
  (source: https://colorlib.com/wp/template/vitality/).
- **Preview UNREACHABLE (fallback used):**
  - `https://preview.colorlib.com/theme/vitality/` → HTTP 404.
  - `vitality` is NOT in `preview.colorlib.com/assets/js/products.js`
    (49 demo entries, no vitality) → no `<slug>-colorlib.pages.dev` demo.
  - Fallback per `docs/replication.md`: TEMPLATES.md screenshot
    (`vitality-template-1770211473540.jpg`, fetched OK, AVIF) + official
    ColorLib description (fetched OK). Section map below is derived from
    the documented feature set + healthcare-vertical convention. RE-VERIFY
    against the live preview during implementation; adjust spec if it
    diverges. Say so in the PR description.
- **Official description (ColorLib):** "Healthcare decisions demand trust,
  and trust starts with professional presentation. Vitality establishes
  medical credibility through doctor credentials, specialty certifications,
  and real patient success stories. The appointment scheduler reduces phone
  call volume while HIPAA-conscious design principles guide the entire
  patient journey." Category: Health & Fitness (Astro); Astro 6 + Tailwind
  CSS 4.x; dark mode; mobile-first.
- **Documented feature set (ColorLib page):**
  1. Online appointment booking with department selection.
  2. Doctor profiles with credentials and specializations.
  3. Medical services with detailed descriptions.
  4. Emergency contact section with hotline.
  5. Patient testimonials and success stories.
  6. Insurance and payment information.
- **Expected structure (from feature set — confirm against preview):**
  1. Sticky navbar: logo + Services, Doctors, Departments, About, Contact +
     "Book Appointment"; dark-mode toggle.
  2. Hero: credibility headline + blurb + "Book Appointment" / "Our
     Services".
  3. Departments/services grid with descriptions.
  4. Doctors: profile cards with credentials and specializations.
  5. Emergency contact band with hotline.
  6. Testimonials: patient success stories.
  7. Insurance / payment information.
  8. Appointment booking form with department selection.
  9. Footer: contact details + link columns + copyright.
- **Design tokens (to confirm against live preview):**
  - Brand color: medical teal (#0d9488) or blue (#2563eb) — verify.
  - Font: Manrope or Inter — verify.
  - Shapes: rounded cards, pill buttons; dark mode documented.
- **Recreation name:** Vitality (kept — matches ColorLib name). App folder
  `apps/vitality`, package `@free-react-templates/vitality`.
- **Recreation approach (once preview confirmed):** seeded picsum
  placeholders (`picsum.photos/seed/vitality-<n>/<w>/<h>`); lucide-react
  icons (Stethoscope, HeartPulse, CalendarCheck, Phone, Mail, MapPin, Clock,
  Star, ChevronDown, Ambulance, ShieldCheck, Building2); font via Google
  Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-vitality/spec.md` (Gherkin requirements + scenarios from the documented feature set; preview unreachable —
      re-verify at implementation time).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Re-fetch preview at implementation time; update spec section map if
      the live DOM differs from the documented feature set.
- [ ] Create `apps/vitality` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/vitality`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-vitality`, open PR (source template, preview URL
      status, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
