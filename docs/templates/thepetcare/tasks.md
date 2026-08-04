# Thepetcare (Colorlib Thepetcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-thepetcare`.

## Design notes

- **Original:** ColorLib "Thepetcare" — free animal care website template
  (source: https://colorlib.com/wp/template/thepetcare/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/thepetcare/`
  (HTTP 200) + stylesheet `assets/css/style.css` (HTTP 200).
- **Structure observed (1:1, section order):**
  1. Header — nav (Home, Services, About, Blog, Contact) + "Get Quote".
  2. Hero — h1 "Saving Animals Changing Live", copy, "Our Services".
  3. About — "The Kind of Care Your Pets Deserve" + "Learn More".
  4. Services — "Our Pet Care Services": Pet Traning, Hygienic Care, Pet
     Treatment.
  5. Video block — "Play the video to see more".
  6. Quote/about — "Animals has come to mean so much in t live".
  7. Emergency band — "For Emergency care Just Call Us" + phone
     +10 (89) 837 3678 + "Learn More".
  8. Volunteer — "We looking for helping hand" + "Make a Donation".
  9. Footer — about, Navigation / Services / Subscribe newsletter columns.
- **Design tokens:** brand pink **#FF3E7E** (primary); navy
  **#140C40**/**#232F55**/**#023C5A** (headings/alt); headings
  **#415094**/**#023C5A**, muted **#999999**, light sections
  **#f9f9ff**/**#f0e9ff**; fonts **Fredoka One** (display) + **DM Sans**
  (body) via Google Fonts; filled rounded pink buttons.
- **Recreation name:** Thepetcare (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder
  `apps/thepetcare`, package `@free-react-templates/thepetcare`.
- **Design approach:** pink brand tokens in `@theme`
  (`--color-brand: #FF3E7E`, navy scale); seeded picsum placeholders
  `https://picsum.photos/seed/thepetcare-<n>/<w>/<h>`; lucide-react icons
  (GraduationCap for training, Droplets for hygienic care, Stethoscope for
  treatment); newsletter form with client-side validation; repo-standard
  Navbar (dark-mode toggle) and Footer chrome; social icons (Facebook,
  Twitter, Dribbble, Behance) inline SVG.
- Reuse `packages/ui` (Button, cn) — do NOT duplicate components.
- Base implementation on `apps/pawcare` (multi-section landing architecture
  with services/about/CTA/footer newsletter). NOTE: the earlier prep note
  suggested `apps/sage`, but sage does not exist on main; pawcare is the
  closest multi-section pet landing app.

## Tasks

- [x] Write `openspec/specs/template-thepetcare/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep); re-verified against the live preview (structure + tokens match
      1:1) during implementation.
- [x] Validate spec: `npm run spec:validate` (221 specs pass).
- [x] Create `apps/thepetcare` (copied `apps/pawcare`; renamed package to
      `@free-react-templates/thepetcare`).
- [x] TDD: tests first for Navbar, Hero, About, Services, Video block,
      Quote, Emergency, Volunteer, Footer, App composition; ran red (10
      failing files), then green.
- [x] Implement components (green) at 100% coverage — 13 tests, all
      thepetcare files at 100% lines/functions/branches/statements.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D) + append live Surge URL.
- [ ] Set `"homepage"` in `apps/thepetcare/package.json` to
      `https://free-react-templates-thepetcare.surge.sh` (bookkeeping, state
      D).
- [ ] Update README structure + `docs/ai-context.md` app list.
