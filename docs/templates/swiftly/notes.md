# Swiftly — Design Notes

## Source

ColorLib "Easy" — https://preview.colorlib.com/theme/easy/

## Tokens

- Font: Montserrat (300, 400, 700)
- Brand: #ff6363 (coral), hover #ff7777
- Body bg: #f2f5f9
- Text: #000839
- Buttons: pill radius 30px, coral bg
- Nav: absolute positioned, white text on hero

## Layout

- Hero: full-width dark bg, left-aligned text + form, hero img below
- Logo bar: 4 cols, gray partner logos
- Features: 3x2 grid, centered title, icon + text cards
- Testimonials: split (4-col stats + 7-col carousel)
- Feature showcases: alternating left/right split (7+4 cols)
- Pricing: 3-col cards, middle one highlighted
- Blog: 4-col cards with image bg
- Footer: dark bg, about + social + nav columns

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/swiftly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swiftly/public/CNAME` = `swiftly.free.componentdock.com`
  and the package `homepage` = `https://swiftly.free.componentdock.com`.
