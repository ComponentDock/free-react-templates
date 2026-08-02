# Guardian (Colorlib Thepetcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-guardian`.

## Design notes (replication findings)

- **Original:** ColorLib "Thepetcare" — pet care / animal welfare services
  (source: https://colorlib.com/wp/template/thepetcare/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/thepetcare/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (62.6KB) extracted).
- **Visual design (from DOM + CSS tokens):** animal-welfare landing with a
  **pink** brand (`#FF3E7E`, hover `#eb3773`), dark navy (`#140C40`) footer,
  "Fredoka One" display headings over "DM Sans" body text, photo cards for
  services, an emergency-care band with hours, testimonials, and a
  volunteer/donation CTA.
- **Structure (1:1, section order):**
  1. Top bar: address `78/A, Green lane, NYC` + phone `+10 (78) 367 3674`.
  2. Navbar: logo + links Home, Services, About, Blog, Contact + **Get
     Quote** button (demo has Blog Details/Elements extras).
  3. Hero: h1 "Saving Animals Changing Live", blurb, **Our Services**
     button.
  4. About: h2 "The Kind of Care Your Pets Deserve" (+ owner image).
  5. Services: "Our Pet Care Services" + 4 photo cards — **Pet Traning,
     Hygienic Care, Pet Treatment, Pet Traning** — title + blurb.
  6. Video band: "Play the video / to see more" (play-button thumbnail).
  7. About 2 (`about-area2 section-img-bg2`): "Animals has come to mean so
     much in t live" + two paragraphs + **Learn More**.
  8. Emergency CTA: "For Emergency care Just Call Us" + hours
     (Mon – Fri 9.00-6.00 · Sat – Sun 2.30-7.00) + phone `+10 (89) 837
3678`.
  9. Testimonials: quote + **Pete Sariya — Happy dog owner** (carousel of
     2 slides in original).
  10. Volunteer CTA: "We looking for helping hand" + blurb + **Learn
      More** + **Make a Donation** buttons.
  11. Footer: blurb ("Seddo eiusmod tempor…") + **Navigation** links (Home,
      About, Services, Blog, Contact), **Services** links (Pet Care, Pet
      Treatment, Pet Training, Hygienic Care), **Subscribe newsletter**
      ("Subscribe our newsletter to get updates about our services and
      offers." + email input + arrow button), social icons (facebook,
      instagram, linkedin, youtube) + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#FF3E7E`** (`.btn` bg; hover `#eb3773`).
  - Dark navy `#140C40` (footer); light bgs `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"DM Sans"** (body) + **"Fredoka One"** (display headings)
    (Google Fonts via `<link>`).
  - Buttons: pink bg, white text, capitalized, 5px radius.
- **Recreation name:** Guardian (animal-welfare themed, distinct from
  "Thepetcare" and all existing names). App folder `apps/guardian`, package
  `@free-react-templates/guardian`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/guardian-<n>/<w>/<h>`); lucide-react icons (replaces
  FontAwesome/themify); DM Sans + Fredoka One via Google Fonts; forms prevent
  default (no backend); pink primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-guardian/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/guardian` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/guardian`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-guardian`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
