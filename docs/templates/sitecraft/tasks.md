# Sitecraft — Tasks & Design Notes

## Template: Sitecraft

- Source: ColorLib "Complex" (https://colorlib.com/wp/template/complex/)
- Brand color: #F7B633 (golden amber)
- Font: Poppins (Google Fonts)
- Type: Construction company landing page

## Components to build

- [x] Navbar (logo, nav links, sticky)
- [x] Hero (background image, heading, subheading, dark overlay)
- [x] ServicesTabs (3 tabs with panel content)
- [x] ServicesGrid (6 service cards with icons)
- [x] Counters (4 stat counters with parallax)
- [x] ProjectGallery (6 project cards, asymmetric grid)
- [x] TeamSection (4 members + accordion)
- [x] Testimonials (3 client quotes)
- [x] Newsletter (email form)
- [x] Footer (contact bar, 4-column grid, copyright)

## Design tokens extracted from original CSS

- Brand: #F7B633 (links, hovers, active states, button backgrounds)
- Body: gray text on whitesmoke (#f5f5f5)
- Headings: #000 (black)
- Nav: white text on transparent, brand on active
- Buttons: brand background, white text, 4px radius
- Font: Poppins 300/400/500/600/700

## Notes

- Original uses Bootstrap grid, FlexSlider, Owl Carousel, Stellar parallax
- React version uses Tailwind grid/flex, no carousel library (static testimonials)
- Parallax approximated with `bg-fixed` Tailwind class
- Tabs implemented with state, no external library
- Counters use simple static display (no animation dependency)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sitecraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sitecraft/public/CNAME` = `sitecraft.free.componentdock.com`
  and the package `homepage` = `https://sitecraft.free.componentdock.com`.
