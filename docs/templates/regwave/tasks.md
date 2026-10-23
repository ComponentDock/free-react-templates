# Regwave — Tasks

## Completed

- [x] Fetch and analyze ColorLib Reg Form V30 preview
- [x] Extract design tokens from CSS
- [x] Write spec (openspec/specs/template-regwave/spec.md)
- [x] Scaffold app (apps/regwave)
- [x] Implement RegistrationCard component
- [x] Implement Footer component
- [x] Write tests (14 tests, 100% coverage)
- [x] Per-app gate verification (typecheck + lint + tests + build)
- [x] Spec validation

## Design Notes

- Source: Colorlib Reg Form V30 (https://colorlib.com/etc/regform/colorlib-regform-30/)
- Two-column card: left blue info panel + right white form panel
- Brand blue: #3786bd, Background: #75e2e9
- Font: Open Sans (Google Fonts)
- Asymmetric border-radius on inputs and buttons (5px top-left + bottom-right)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regwave/public/CNAME` = `regwave.free.componentdock.com`
  and the package `homepage` = `https://regwave.free.componentdock.com`.
