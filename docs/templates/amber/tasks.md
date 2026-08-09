# Amber (Colorlib The Barber) — Tasks & Design Notes

> Old-style prep (source-name folder) renamed by the implementer to the new
> name `amber` (git mv, matching the hipstyle → stylely pattern).

## Design notes

- **Original:** ColorLib "The Barber" — free barber shop website template
  (source: https://colorlib.com/wp/template/the-barber/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/thebarber/`
  (HTTP 200, 34.9KB — the `the-barber` preview slug returns "Not Found";
  the `thebarber` preview target hosts the rendered page) + stylesheet
  `css/style.css` (136.4KB). Full rendered DOM extracted; structure below is
  from the DOM + CSS tokens.
- **Structure observed (1:1):** header (logo + home/About/service/blog/blog
  single-blog/pages/elements/Contact + "Make an Appointment" CTA) → hero
  ("Best Barber in your Town" + "Professional Care" + Opening Hour panel:
  Mon-Fri 9.00-11.00, Sat 10.00-4.00) → about ("Experienced and Traditional
  Stylish Barber Shop" + blurb + "Learn More") → services ("our service"
  price cards: Men's Facial, Clean Cut, Close Shave, Razor Cut, Face
  Massage, Classic haircut, Haircut and shampoo, Hair treatment, Beard
  trimming, Beard and moustache — all $15) → gallery ("Our Gallery" photo
  tiles) → video band ("Watch the Video How we Work?" + play btn + "book
  now") → team ("Our Cutter Masters": Macau Wilium — Massage Master, Dan
  Jacky — Mens Cut, Luka Luka — Mens Cut, Rona Dana — Ladies Cut) → how to
  find us (Location, Call Us, Mail Us, Join With Us) → footer (address +
  Navigation + Newsletter form + "Make an Appointment" CTA + copyright).
- **Design tokens:** brand orange **#ff5e13** + gold **#BC9321** + dark
  brown **#4A3600**; light bgs **#f9f9ff** / lavender **#f0e9ff**; footer
  dark brown; headings **Playfair Display** (serif) + body **Roboto** via
  Google Fonts; orange/gold filled uppercase buttons.
- **Recreation name:** Amber (branch `feat/template-amber`; "Ember" was
  taken by the Error 404 4 prep, hence Amber). App folder `apps/amber`,
  package `@free-react-templates/amber`.
- **Design approach:** light theme with orange/gold accents; hero = seeded
  picsum photo + headline + Opening Hour panel; services with lucide icons;
  gallery with seeded photo tiles; video band with play button; team cards
  with initials avatars; find-us band with icon cards; footer with
  newsletter form; all images picsum-seeded
  (`picsum.photos/seed/amber-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/sienna` (the newest barber-shop template:
  dark-toggle Navbar, Hero, About, Video band, Team, Services, Footer with
  newsletter) — closest existing multi-section barber app; adapt sections
  to The Barber's 1:1 section order and tokens.

## Tasks

- [x] Write `openspec/specs/template-amber/spec.md` (Gherkin
      requirements + scenarios + replication findings) — renamed from the
      old source-name prep `template-the-barber` on main.
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/amber` (copy `apps/sienna`; rename package to
      `@free-react-templates/amber`).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Gallery, Video,
      Team, FindUs, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh amber` (typecheck → lint →
      100% coverage tests → build).
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D; 3 lines: 204, 509, 1198).
- [ ] Update README structure + `docs/ai-context.md` app list.
