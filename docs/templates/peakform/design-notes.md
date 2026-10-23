# Peakform — Gym & Fitness Landing

## Task Outline

1. Scaffold app (copied from pump, renamed)
2. Write spec (openspec/specs/template-peakform/spec.md)
3. TDD: write tests for all 9 sections
4. Implement components to pass tests
5. Per-app verification gate
6. PR + merge

## Design Notes

- Recreation of ColorLib Ironmuscle
- Brand: #f23a2e red, Nunito Sans font
- 9 sections: Navbar, Hero, FeatureBlocks, About, FeaturedClasses, Schedule, Testimonials, Trainers, Footer
- Pill buttons, dark overlay schedule section
- Social icons via inline SVG (lucide-react has no brand icons)
- Images via picsum.photos seeded placeholders

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/peakform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/peakform/public/CNAME` = `peakform.free.componentdock.com`
  and the package `homepage` = `https://peakform.free.componentdock.com`.
