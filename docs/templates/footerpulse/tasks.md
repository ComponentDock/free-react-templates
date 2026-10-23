# FooterPulse — Tasks

## Completed

- [x] Spec written and validated
- [x] App scaffolded from footerwell
- [x] ContactCards component (3 colored cards: phone/email/address)
- [x] Footer component (nav columns + subscribe form + copyright bar)
- [x] Tests written (34 tests, 100% coverage)
- [x] Per-app gate passed (typecheck + lint + tests + build)

## Design Notes

- Fonts: Poppins (headings), Nunito Sans (body)
- Card colors: blue #6ea8fe, green #20c997, orange #fd7e14
- Dark footer: #3b3d41
- Icons: lucide-react (Phone, Mail, MapPin) + inline SVG social icons
- Original used Ionicons; replaced with lucide-react + inline SVG

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/footerpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerpulse/public/CNAME` = `footerpulse.free.componentdock.com`
  and the package `homepage` = `https://footerpulse.free.componentdock.com`.
