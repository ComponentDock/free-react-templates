# Dogger (Colorlib Dogger) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Implementation ships on
> `feat/template-dogger`.

## Design notes (replication findings)

- **Original:** ColorLib "Dogger" — dog care website template
  (source: https://colorlib.com/wp/template/dogger/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dogger/
  (HTTP 200; full rendered DOM + `css/style.css` (28KB) + `bootstrap.min.css`
  extracted; screenshot reference `dogger-free-template.jpg` in TEMPLATES.md).
- **Visual design (from DOM + CSS tokens):** clean dog-care landing —
  **sage-green** brand color (`#a2c0be`) on white / `#f8f9fa` light sections,
  dark `#333333` footer, "Open Sans" typography (Vollkorn serif italic for
  testimonial quotes), pill buttons (radius 30px), brand-green trainers and
  pricing bands, FAQ accordion with circular toggles.
- **Structure (1:1, section order):**
  1. Sticky navbar (`site-navbar js-sticky-header`): brand "dogger" + links
     Home, About, Trainers, Pricing, FAQ, Testimonials, Gallery, Blog,
     Services, Contact.
  2. Hero (`site-blocks-cover bg-light`, full viewport, min 600px): h1
     "We Care For Your Dog" (4rem black) + "We always try to provide your dog
     the best services." + dog illustration right.
  3. Welcome block: "Welcome to Dogger Pet Care" + 3 alternating rows:
     "Love & Care", "Fearsome", "Beautiful" (image + h2 + text + "Read More").
  4. About (`#about-section`): "About Us" + lead + muted paragraph + video
     thumbnail image.
  5. Trainers (`site-section bg-primary`, `#trainers-section`): "Our
     Trainers" + Jessica White, Valerie Elash, Alicia Jones.
  6. Pricing (`#pricing-section`): "Pricing Table" + Basic $47 / Premium $250
     / Professional $850 (5 features each + "Buy Now").
  7. FAQ (`#faq-section`): "Frequently Ask Questions" + 4-question accordion.
  8. Testimonials (`bg-light`, `#testimonials-section`): "Happy Customers" +
     4 green quote cards (Ricky Fisher, Ken Davis, Mellisa Griffin, Robert
     Steward).
  9. Gallery (`#gallery-section`): "Photo Gallery" + 6 photos.
  10. Blog (`#blog-section`): "Dogger Blog" + 4 post cards (date, title,
      excerpt, "Read more").
  11. Services (`#services-section`): "Our Services" + Dog Checkup, Dog
      Dermatology, For Strong Teeth, Dog First Aid, Dog Dryer, Expert
      Veterinarian.
  12. Contact (`#contact-section`): "Contact Form" (fname, lname, email,
      subject, message, "Send Message") + "Contact Us" (address, phone,
      email).
  13. Footer (`#333333`): About Us / Quick Links / Follow Us / Subscribe
      Newsletter + copyright.
- **Design tokens:**
  - Brand: **#a2c0be** (sage green; `--primary`, `.btn-primary`, nav
    active/hover, trainers + pricing bg, testimonial quote bg, accordion open
    toggle, form focus border).
  - On-brand text: body **#567876**, headings **#405a58**.
  - Light sections: **#f8f9fa** (`bg-light` — bootstrap `!important`).
  - Footer: **#333333**, body `#737373`, links `#999999` → white hover.
  - Hero: h1 4rem `#000`, subtitle `#999999` 1.2rem weight 300.
  - Fonts: **Open Sans** (body+headings), **Vollkorn** (testimonial quotes),
    Google Fonts.
  - Buttons: radius 30px, padding 10px 30px; `.btn-primary` brand → hover
    `#000`; `.btn-dark` for submit.
  - Forms: 43px height, radius 5px, focus border `#a2c0be`.
  - Sections: 2.5em 0 (mobile) / 5em 0 (desktop); footer 4em/8em.
- **Recreation name:** Dogger (kept — matches ColorLib name). App folder
  `apps/dogger`, package `@free-react-templates/dogger`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/dogger-<n>/<w>/<h>`); lucide-react icons (PawPrint,
  ChevronDown, Mail, MapPin, Phone, ArrowRight, HeartPulse, Stethoscope,
  Syringe, Wind, ShieldCheck, CalendarDays); brand social icons → inline SVG;
  Open Sans + Vollkorn via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; FAQ as lightweight React accordion
  (aria-expanded + rotating chevron).
- Reuse `packages/ui` (Button, cn).

## Tasks

- [x] Write `openspec/specs/template-dogger/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/dogger` (copy the simplest existing app — e.g. Breed;
      rename package to `@free-react-templates/dogger`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-dogger`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
