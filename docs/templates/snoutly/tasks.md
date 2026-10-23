# Snoutly (Colorlib Snoutly) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-snoutly`.

## Design notes

- **Original:** ColorLib "Leopet" — free pet care website template
  (source: https://colorlib.com/wp/template/leopet/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/leopet/`
  (HTTP 200) + stylesheet `css/style.css` (HTTP 200).
- **Structure observed (1:1, section order):**
  1. Header — nav (Home, About, Services, Gallery, Blog, Contact) +
     "Become a Volunteer" button.
  2. Banner — h5 "Welcome to Snoutly", h1 "Give your pet Best Care",
     "Our Services" + "Become a Volunteer" buttons.
  3. About — "We care your pet As you care", copy, "About Us"/"Browse Now"
     buttons, image.
  4. Services (`services_bg`) — "We Provide Best Services"; Pet Surgeries,
     Pet Adoption, Pet Care (icon + copy + "read more").
  5. Adopt/counters — "We need your help Adopt Us" + counters (590+, 300+).
  6. Testimonials — three customer quotes.
  7. Volunteer — "Become a Volunteer To help them" + CTA.
  8. Footer — "Subscribe Newsletter" (email), Menu / Contact / Address /
     Opening Hour columns, bottom bar.
- **Design tokens:** brand teal **#53C9BB** (primary), accent red
  **#FF5B5B**, headings purple **#415094**, muted **#999999**, light
  backgrounds **#f9f9ff** / **#f0e9ff**; font **Quicksand** via Google Fonts;
  filled rounded teal buttons.
- **Recreation name:** Snoutly (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/snoutly`,
  package `@free-react-templates/snoutly`.
- **Design approach:** teal brand tokens in `@theme`
  (`--color-brand: #53C9BB`, `#415094` heading purple); seeded picsum
  placeholders `https://picsum.photos/seed/snoutly-<n>/<w>/<h>`; lucide-react
  icons (PawPrint, HeartPulse, Home for services); stat counters as static
  numbers; newsletter form with client-side validation (zod); repo-standard
  Navbar (dark-mode toggle) and Footer chrome; social icons (GitHub, X,
  LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sage` (multi-section landing architecture with
  services/testimonials/footer newsletter).

## Tasks

- [ ] Write `openspec/specs/template-snoutly/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/snoutly` (copy `apps/sage`; rename package to
      `@free-react-templates/snoutly`).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Adoption counters,
      Testimonials, Volunteer, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/snoutly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/snoutly/public/CNAME` = `snoutly.free.componentdock.com`
  and the package `homepage` = `https://snoutly.free.componentdock.com`.
