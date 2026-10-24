# Mercy — Charity & Nonprofit Template

> **SHIPPED** — this prep's design shipped as `apps/mercy`
> (<https://mercy.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib "Unicare"

- Preview: https://preview.colorlib.com/theme/unicare/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unicare-free-template.jpg

## Design Notes

Nonprofit/charity landing page with:

- Full-height hero with background image + dark overlay
- Donation form (split layout with welcome text + stats)
- 4-column service cards with colored headers
- Cause cards with progress bars
- Testimonial carousel (dark section)
- Blog cards grid
- Volunteer/team member grid
- Coral (#fd645b) brand color for CTAs
- Montserrat font family

## Tasks

- [x] Spec written
- [ ] App scaffold created
- [ ] Components implemented (TopBar, Navbar, Hero, AboutDonation, Services, Causes, Testimonials, Blog, Volunteers, CtaBanner, Footer)
- [ ] Tests written with 100% coverage
- [ ] Per-app gate passes (verify-app.sh mercy)
- [ ] PR created and merged
- [ ] Bookkeeping complete (TEMPLATES.md [x], homepage, CNAME, readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/mercy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/mercy/public/CNAME` = `mercy.free.componentdock.com`
  and the package `homepage` = `https://mercy.free.componentdock.com`.
