# SearchFlare — Design Notes

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-searchflare/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/search-form-bar-03/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> - **Do not build** these screenshot samples — the live sheet paints
>   no such colour; take the spec's live palette instead:
>   `#e74c3c`.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

## Source

- ColorLib: Search Form Bar 03
- URL: https://colorlib.com/wp/template/search-form-bar-03/
- Preview: 404 (unreachable)
- Reference: screenshot only

## Structure order

1. Page container — full viewport, light/white background, flex column centered
2. Heading — "Search Form/Bar #03", dark text, sans-serif, centered
3. Search bar container — horizontal flex, centered, max-width ~400px
   3a. Circular search button — coral/red, 40px circle, white magnifying glass icon
   3b. Text input — pill-shaped, "Search..." placeholder, fills remaining width
4. Footer — Component Dock link

## Fidelity notes

- The original is extremely minimal: just a heading + search bar widget
- No complex sections, no multi-column layout, no cards/grids
- The circular button is the distinctive design element — must be perfectly round
- The coral/red color (#e74c3c or similar) is the accent
- The input has a rounded pill shape (border-radius ~20-25px)
- Placeholder text is "Search..." in light gray
- The overall vibe is clean and minimal — don't add extra elements

## Implementation approach

1. Single page component with centered layout
2. Use Tailwind for all styling (circular button via rounded-full)
3. Lucide React for the magnifying glass icon
4. picsum.photos for any placeholder if needed (unlikely for this minimal template)
5. Standard footer with Component Dock link
