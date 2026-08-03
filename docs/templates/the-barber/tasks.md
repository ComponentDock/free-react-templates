# The Barber (Colorlib The Barber) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-the-barber`.

## Design notes

- **Original:** ColorLib "The Barber" — free barber shop website template
  (source: https://colorlib.com/wp/template/the-barber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/thebarber/`
  (HTTP 200, 34.9KB — the `the-barber` preview slug returns "Not Found";
  the `thebarber` preview target hosts the rendered page) + stylesheet
  `css/style.css` (136.4KB). Full rendered DOM extracted; structure below is
  from the DOM + CSS tokens.
- **Structure observed (1:1):** header (logo + home/About/service/blog/blog
  single-blog/pages/elements/Contact) → hero ("Best Barber in your Town" +
  "Experienced and Traditional Stylish Barber Shop" + Opening Hour panel) →
  services ("our service" cards) → gallery ("Our Gallery" photo tiles) →
  video band ("Watch the Video How we Work?" + play btn) → team ("Our
  Cutter Masters": Macau Wilium, Dan Jacky, Luka Luka, Rona Dana) → how to
  find us (Location, Call Us, Mail Us, Join With Us) → footer (address +
  Navigation + Newsletter form + "Make an Appointment" CTA + copyright).
- **Design tokens:** brand orange **#ff5e13** + gold **#BC9321** + dark
  brown **#4A3600**; light bgs **#f9f9ff** / lavender **#f0e9ff**; footer
  dark brown; headings **Playfair Display** (serif) + body **Roboto** via
  Google Fonts; orange/gold filled uppercase buttons.
- **Recreation name:** The Barber. App folder `apps/the-barber`, package
  `@free-react-templates/the-barber`.
- **Design approach:** light theme with orange/gold accents; hero = seeded
  picsum photo + headline + Opening Hour panel; services with lucide icons;
  gallery with seeded photo tiles; video band with play button; team cards
  with initials avatars; find-us band with icon cards; footer with
  newsletter form; all images picsum-seeded
  (`picsum.photos/seed/the-barber-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-the-barber/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/the-barber` (copy `apps/aurora`; rename package to
      `@free-react-templates/the-barber`).
- [ ] TDD: tests first for Navbar, Hero, Services, Gallery, Video, Team,
      FindUs, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
