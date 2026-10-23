# PropSearch — Design Notes

## Source Analysis

Downloaded the ColorLib search-form-bar-07.zip and analyzed the HTML/CSS.

### Layout

- Single centered section with generous padding (7em top/bottom)
- White form container on #fafafa background
- Heading centered above the form
- Form fields laid out in a row (4 inputs + button) on desktop, stacked on mobile

### Typography

- Font: Poppins (Google Fonts), weights 300-600
- Heading: 28px, normal weight, black color
- Labels: 12px, uppercase, bold, pink (#ff62a5), letter-spacing 1px
- Inputs: 14px, Poppins font, transparent background

### Colors

- Background: #fafafa
- Brand: #ff62a5 (pink) — used for labels, links, button
- Button hover: black background with white text
- Input border: rgba(0,0,0,0.05) — very subtle
- Placeholder text: black

### Form Fields

1. Location — text input with magnifying glass icon (right-aligned)
2. Property Type — select dropdown with chevron icon
3. Property Status — select dropdown with chevron icon
4. Price Limit — select dropdown with chevron icon
5. Search button — full-width pink CTA

### Button Details

- Background: #ff62a5
- Text: "Search Availability" (uppercase, 14px, font-weight 500)
- Subtitle: "Best Price Guaranteed!" (14px, capitalize, white)
- Hover: black background, white text

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/propsearch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propsearch/public/CNAME` = `propsearch.free.componentdock.com`
  and the package `homepage` = `https://propsearch.free.componentdock.com`.
