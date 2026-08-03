# Muscle (Colorlib Muscle) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-muscle`.

## Design notes

- **Original:** ColorLib "Muscle" — free gym website template
  (source: https://colorlib.com/wp/template/muscle/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/muscle/`
  (HTTP 200, 56.4KB) + stylesheet `css/style.css` (95.7KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Muscle + Home/Program/Coaches/
  Schedule/About/Blog/Contact) → hero slider ("Fuel Your Body Fitness",
  "Be One Of Us", "Challenge Yourself", "Get Your Body Fit") → services
  ("What We Do?": Analyze Your Goal, Work Hard On It, Improve Your
  Performance, Achieve Your Perfect Body) → counter band → about
  ("Welcome To Our Gym" + "Shape Your Body") → coaches ("Our Coaches":
  Mark Brook, Sarah Henderson, George Hump, Victor Hump) → classes
  ("Workout Classes": Body Building, Aerobic Classes, Weight Lifting, Yoga
  Classes) → pricing ("Membership Plans": One Day Training, Pay Every
  Month, 1 Year Membership — "Enjoy All The Features") → testimony
  ("Successful Stories") → blog ("Recent Blog": "Young Women Doing
  Abdominal") → appointment ("Book an Appointment") → gallery (Instagram
  tiles) → footer (About Us / Recent Blog / Services / "Have a
  Questions?").
- **Design tokens:** brand hot pink **#fd0054** + orange **#fd6b00** +
  dark **#212529** text; light **#f8f9fa**/`bg-light` bands; font **Work
  Sans** via Google Fonts; pink/orange filled buttons (`btn-primary`) +
  outline (`btn-custom`).
- **Recreation name:** Muscle. App folder `apps/muscle`, package
  `@free-react-templates/muscle`.
- **Design approach:** hero slider with seeded picsum photos + headlines;
  services with lucide icons; counter band; about split; coach cards with
  initials avatars; class cards; pricing cards; testimony band; blog cards
  with seeded photos; appointment band; gallery grid; footer with link
  columns; all images picsum-seeded (`picsum.photos/seed/muscle-N/w/h`);
  Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-muscle` from latest origin/main.
- [ ] Mark Muscle `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-muscle/spec.md).
- [ ] Scaffold `apps/muscle` (copy simplest multi-section app, rename package to `@free-react-templates/muscle`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, services, coaches,
      classes, pricing, testimony, blog, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Work Sans).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
