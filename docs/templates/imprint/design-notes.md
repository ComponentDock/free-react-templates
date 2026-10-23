# Imprint — Design Notes

> Recreation of ColorLib Evans (https://colorlib.com/wp/template/evans/)

## Visual Design

- Dark hero with full-viewport height, background image with overlay
- Large vertical brand text "Imprint" rotated 90° on the right side
- Golden yellow accent color (#fdcb6e) used throughout
- Alternating left/right portfolio entries
- Dark footer with 3-column layout

## Fonts

- **Poppins** — body text, navigation, descriptions
- **Barlow Condensed** — brand name, large display headings
- **Lora** — serif accents, category labels, italic text

## Layout

- Hero: full viewport, centered content, vertical brand text
- Intro: max-width container, right-aligned text block
- Services: 4-column grid, each with icon + title + description
- Portfolio: alternating image-left/image-right layout, full-width entries
- Footer: 3-column grid, centered "Made with" line

## CSS Tokens (extracted from preview)

- Brand: `#fdcb6e` (golden yellow)
- Dark: `#1d2124`, `#1e1e1e`
- Light: `#f7f7f7`, `#f8f9fa`
- Button: border 1px solid #fdcb6e, color #fdcb6e, hover fill

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/imprint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/imprint/public/CNAME` = `imprint.free.componentdock.com`
  and the package `homepage` = `https://imprint.free.componentdock.com`.
