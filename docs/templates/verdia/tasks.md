# Verdia (ColorLib "Medical") — Tasks & Design Notes

> **Reference identity (measured 2026-10-24).** The `theme/medical/` page these
> notes were built from is **post `medical-2`** (og `medical-free-template.jpg`,
> rows 1864 / 2246, `apps/medlink`), not the `medical` post named above: "We Care
> for Your Health Every Moment" + Servicing Hours + Book an Appointment +
> Facilities / Services / Consultants / Feedback / Blogs, `#69be00` x67, Poppins.
> The `medical` row (2245) thumbnail — cyan "WE ARE THE TEAM OF EXCELLENCE",
> `medical-free-clean-health-website-template.jpg` — has **no live demo** (10
> prefixes 404, both archives 404), so the section order and tokens below are the
> `medical-2` reference and the row pointer is a row mismatch. The app still
> matches what it was built from. Authority:
> `openspec/specs/template-verdia/spec.md`.

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation shipped; the app was renamed to `verdia` on 2026-10-24j
> (`feat/rename-medical-verdia`).

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
- **Recreation name:** **Verdia** (renamed 2026-10-24j from `medical`, which
  reused the source slug — AGENTS.md rule 5). App folder `apps/verdia`, package
  `@free-react-templates/verdia`.
- **Design approach:** light theme with green accents; banner = seeded
  picsum photo + headline; appointment band; facilities cards; services
  with lucide icons; consultant cards with initials avatars; feedback band;
  blog cards with seeded photos; footer with link columns; all images
  picsum-seeded (`picsum.photos/seed/verdia-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-verdia` from latest origin/main.
- [ ] Mark the row `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-verdia/spec.md).
- [ ] Scaffold `apps/verdia` (copy simplest multi-section app, rename package to `@free-react-templates/verdia`).
- [ ] Write tests first (TDD, red phase): Navbar, banner, appointment,
      facilities, services, consultants, feedback, blog, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/verdia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/verdia/public/CNAME` = `verdia.free.componentdock.com`
  and the package `homepage` = `https://verdia.free.componentdock.com`.
