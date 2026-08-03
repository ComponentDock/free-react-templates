# Doglife (Colorlib Doglife) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-doglife`.

## Design notes

- **Original:** ColorLib "Doglife" — free dog-care website template
  (source: https://colorlib.com/wp/template/doglife/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/doglife/`
  (HTTP 200) + stylesheet `css/style.css` (HTTP 200) — both reachable, so the
  preview portal is the reference.
- **Structure observed (1:1, section order):**
  1. Sticky navbar — "DogLife." site name; links Home, About, Doctor,
     Pricing, Blog, Services, Contact.
  2. Hero (`site-blocks-cover bg-light`) — h1 "We Love Dogs", lorem copy,
     burgundy "Get In Touch" button, dog image.
  3. Welcome — h2 "Welcome To Our Website", copy + image + "Read More".
  4. Highlights (`bg-light`) — "Happy Pets" and "Modern Equipment" columns
     with green-check (`#71bc42`) feature lists + images; then "Meet Jean
     Smith Our Dog Veterenarian" portrait block.
  5. Pricing Table — Basic $50/yr, Premium $100/yr, Professional $200/yr;
     feature lists; "Buy Now" (btn-secondary on Basic, btn-primary on the
     other two).
  6. Frequently Ask Questions — accordion, four items (lorem questions).
  7. Happy Customers (`bg-light`) — testimonials: Ricky Fisher, Ken Davis,
     Mellisa Griffin, Robert Steward (photo, name, quote).
  8. Blog — "Dogger Blog" heading (recreated as "Doglife Blog"); four
     entries: image, meta, title, excerpt, "Read More".
  9. Our Services — six `icon-paw` blocks: Dog Checkup, Dog Dermatology, For
     Strong Teeth, Dog First Aid, Dog Dryer, Expert Veterinarian.
  10. Contact — "Contact Form" (First Name, Last Name, Email, Subject,
      Message) + "Contact Us" (Address: Melbourne St, South Birbane 4101
      Austraila · Phone: +(000) 123 4567 89 · Email: info@yourdomain.com).
  11. Footer (`site-footer`, bg `#9c2c2c`) — About Us, Quick Links, Follow
      Us (social), Subscribe Newsletter; bottom copyright bar.
- **Design tokens:** brand burgundy **#9c2c2c** (buttons/`text-primary`/icons/
  footer bg; hover **#000**), feature-check green **#71bc42** (light sections)
  or **#9c2c2c** (primary lists); text **#212529**/**#343a40**, muted
  **#999999**/**#b3b3b3**, light sections **#f8f9fa**; fonts **Vollkorn**
  (serif display) + **Open Sans** (body) via Google Fonts; filled rounded
  buttons.
- **Recreation name:** Doglife (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/doglife`,
  package `@free-react-templates/doglife`.
- **Design approach:** burgundy brand tokens in `@theme`
  (`--color-brand: #9c2c2c`, hover `#000`); light/white section alternation
  matching the original; Paw (lucide) icons for the six service blocks;
  seeded picsum placeholders `https://picsum.photos/seed/doglife-<n>/<w>/<h>`;
  contact form with client-side validation (zod, matching other templates);
  repo-standard Navbar (dark-mode toggle) and Footer chrome; social icons
  (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sage` (same author/sibling design, closest
  structure: navbar, hero, highlights, pricing, FAQ, testimonials, footer).

## Tasks

- [ ] Write `openspec/specs/template-doglife/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/doglife` (copy `apps/sage`; rename package to
      `@free-react-templates/doglife`).
- [ ] TDD: tests first for Navbar, Hero, Welcome, Highlights (Happy Pets /
      Modern Equipment / Meet Jean Smith), Pricing, FAQ, Testimonials, Blog,
      Services, Contact form, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
