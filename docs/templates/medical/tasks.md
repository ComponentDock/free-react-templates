# Medical (Colorlib Medical Wordpress Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-medical`.

## Design notes

- **Original:** ColorLib "Medical Wordpress Themes" — free medical website
  template (source: https://colorlib.com/wp/template/medical-wordpress-themes/).
- **Live preview DOM analyzed:** the official preview portal
  (`https://preview.colorlib.com/theme/medical-wordpress-themes/`) returns
  404; the live demo resolves at `https://preview.colorlib.com/theme/medical/`
  (HTTP 200, 34.7KB) + stylesheet `css/main.css` (69.5KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** banner ("We Care for Your Health Every
  Moment") → appointment ("Servicing Hours" / "Book an Appointment") →
  facilities ("Our Latest Facilities": 24/7 Emergency, Intensive Care,
  Family Planning) → services ("Our Offered Services": Cardiac Treatment,
  Routine Checkup, Departments) → team ("Our Consultants": Andy Florence)
  → feedback ("Enjoy our Client's Feedback": Fannie Rowe) → brands strip →
  blog ("Our Recent Blogs": "Portable Fashion for women", "Summer ware are
  coming") → footer (Top Products / Contact Us / Newsletter).
- **Design tokens:** brand green **#69be00** + dark **#222222** text; light
  **#f9f9ff** sections; font **Poppins** via Google Fonts; green filled
  uppercase buttons; FontAwesome icons (recreated with lucide-react).
- **Recreation name:** Medical. App folder `apps/medical`, package
  `@free-react-templates/medical`.
- **Design approach:** light theme with green accents; banner = seeded
  picsum photo + headline; appointment band; facilities cards; services
  with lucide icons; consultant cards with initials avatars; feedback band;
  blog cards with seeded photos; footer with link columns; all images
  picsum-seeded (`picsum.photos/seed/medical-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-medical` from latest origin/main.
- [ ] Mark Medical `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-medical/spec.md).
- [ ] Scaffold `apps/medical` (copy simplest multi-section app, rename package to `@free-react-templates/medical`).
- [ ] Write tests first (TDD, red phase): Navbar, banner, appointment,
      facilities, services, consultants, feedback, blog, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
