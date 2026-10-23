# Cairn — Tasks & Design Notes

## Source

- ColorLib Bootstrap Footer 05: https://colorlib.com/wp/template/bootstrap-footer-05/
- Preview: https://preview.colorlib.com/theme/bootstrap-footer-05/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-05.jpg

## Design Notes

- Clean white footer (#fff) with blue accent (#3e64ff)
- Email subscribe form (grey input #e6e6e6, 45px tall)
- Horizontal nav links centered (Features, Blog, Pricing, Services)
- Social icons right-aligned (Twitter, Instagram, Facebook, Pinterest)
- Divider #efefef between top and bottom sections
- Bottom bar: legal links (left) | logo (center, 30px/900 weight) | copyright (right)
- Poppins font family
- Responsive: stacks vertically on mobile

## Tokens

- Brand/accent: #3e64ff (blue)
- Background: #fff
- Text: #777
- Input bg: #e6e6e6
- Divider: #efefef
- Placeholder: #b3b3b3
- Font: Poppins

## Implementation

- Component: Footer.tsx (single component with subscribe form, nav, social, bottom bar)
- Tests: 22 tests, 100% coverage
- App: App.tsx with placeholder content area + Footer

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cairn/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cairn/public/CNAME` = `cairn.free.componentdock.com`
  and the package `homepage` = `https://cairn.free.componentdock.com`.
