# Hairsalone (Colorlib Hairsalone) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-hairsalone`.

## Design notes

- **Original:** ColorLib "Hairsalone" — free barber shop website template
  (source: https://colorlib.com/wp/template/hairsalone/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hairsalone/`
  (HTTP 200, 27.6KB) + stylesheet `assets/css/style.css` (70.4KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/Services/About/Blog/Blog
  Details/Element/Contact) → hero slider ("Good Look Guaranteed" +
  "Experienced and traditional stylish barber shop" + Book An Appointment /
  About Us; slide 2 "Connect with your dream style" + copy) → about (framed
  photo + copy) → categories → services ("Our Services": Stylish hair cut,
  Cut & hair style, Color & hair wash) → pricing ("Pricing List": Stylish
  hair cut, Hair color, Wedding style, Hair straight) → team ("Expert Team":
  Marvin Gardens, Tara Zona + social) → footer (logo + blurb, Useful Links:
  Design & creatives / Telecommunication / Restaurant / Programing /
  Architecture, Contact us: 78/A, Green lane, Kings road, NYC-1989 ·
  finlone@gmail.com · +10 (87) 728 2870, social, copyright).
- **Design tokens:** brand hot pink **#FF4495**; navy headings **#00044A** /
  **#140C40**; light bgs **#f9f9ff** + lavender **#f0e9ff**; footer dark
  navy; headings **Rufina** (serif) + body **Karla** (sans) via Google
  Fonts; pink filled uppercase buttons.
- **Recreation name:** Hairsalone. App folder `apps/hairsalone`, package
  `@free-react-templates/hairsalone`.
- **Design approach:** light theme with pink accents and navy headings; hero
  = seeded picsum photo + headline + dual CTAs; about split with framed
  photo; services with lucide icons; pricing as priced rows; team cards with
  initials avatars + social icons; footer with contact details; all images
  picsum-seeded (`picsum.photos/seed/hairsalone-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [x] Write `openspec/specs/template-hairsalone/spec.md` (Gherkin
      requirements + scenarios + replication findings) — DONE on main (this
      prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hairsalone` (copy `apps/aurora`; rename package to
      `@free-react-templates/hairsalone`).
- [ ] TDD: tests first for Navbar, Hero, About, Services, Pricing, Team,
      Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
