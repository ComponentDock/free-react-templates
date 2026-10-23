# Pulse — Tasks (ColorLib "Saita", digital agency)

> Prep artifact for `apps/pulse`. Source mapping lives here and in
> `openspec/specs/template-pulse/spec.md` — never in app code.
> Corrected 2026-10-23: this brief previously named "Colorlib Error 404 V16",
> the wrong source (that design is `apps/scarlet`). The app was built from
> Saita; the brief now matches the shipped app.

## Source

- **ColorLib template:** Saita — https://colorlib.com/wp/template/saita/
- **Slug:** `saita`
- **Preview:** https://preview.colorlib.com/theme/saita/ (analyzed 2026-10-23)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/saita-colorlib-template.jpg
- **Recreation name:** Pulse → `apps/pulse`, package
  `@free-react-templates/pulse`, deploy `pulse.free.componentdock.com`.

## Tasks

- [x] Replication research: preview DOM, stylesheet tokens, screenshot review
      — findings recorded in the spec's "Design reference" section.
- [x] `openspec/specs/template-pulse/spec.md` (Gherkin per section).
- [x] Scaffold `apps/pulse` (copy `apps/airy`-class app; rename package,
      `public/CNAME`, `homepage`).
- [x] Sections: Navbar, Hero, About (3 capabilities + 3 skill bars), Counters,
      Services (8), Portfolio (8 projects, 6 filters), Team (4), Pricing (3),
      Testimonials (2, carousel), Blog (3), CTA banner, Footer (4 columns).
- [x] Shared UI from `packages/ui` (Button, ButtonLink, cn); `lucide-react`
      icons; `picsum.photos` placeholders seeded `pulse-*`.
- [x] Tests colocated per component; coverage 100% on changed code.
- [x] Component Dock footer credit (`https://www.componentdock.com/`); no
      source provenance in app files.
- [ ] A11y follow-ups captured in the spec's "Known gaps" (progressbar roles,
      `aria-pressed` on filters, reduced-motion for counters) — owned by a
      later sweep, not this brief.
- [ ] Bookkeeping: `TEMPLATES.md` rows 623 + 1158 already `[x]`; README
      status regenerated.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the
  page's last band — SHALL link [Component Dock](https://www.componentdock.com/).
  That is the only attribution line the recreation carries.
- **Provenance ban.** No file under `apps/pulse/` may carry a `colorlib.com`
  URL or the source template's name — code, comments, CSS, markup, metadata
  and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pulse/public/CNAME` =
  `pulse.free.componentdock.com`; package `homepage` =
  `https://pulse.free.componentdock.com`.
