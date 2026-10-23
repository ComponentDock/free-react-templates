# Havenshore — Task Outline

Recreation of ColorLib "Ochean de View" (hotel/resort landing).

## Steps

1. [x] Replication research — preview DOM, CSS tokens, screenshot
2. [x] Spec — openspec/specs/template-havenshore/spec.md
3. [ ] Scaffold — copy amber, rename, configure CNAME/homepage/injectUiSource
4. [ ] Tests — App.test.tsx + component tests (100% coverage)
5. [ ] Implementation — 11 components matching original section order
6. [ ] Verify — scripts/verify-app.sh havenshore
7. [ ] PR + merge + bookkeeping

## Design Notes

- Brand palette: olive-sage #85856D, dark #16161a, heading #3C3A34, body #94817E
- Fonts: Cormorant Garamond (display) + Raleway (body) via Google Fonts
- Button primary: sage #B8B8A0 with hover invert
- Sections: transparent navbar → hero bg → booking form → video → gallery → pampering → features → divider → testimonials → instagram → footer

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/havenshore/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/havenshore/public/CNAME` = `havenshore.free.componentdock.com`
  and the package `homepage` = `https://havenshore.free.componentdock.com`.
