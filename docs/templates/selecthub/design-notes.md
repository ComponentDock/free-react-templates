# SelectHub — Implementation Notes

## Source

- ColorLib template: Multiselect 19
- URL: https://colorlib.com/wp/template/multiselect-19/
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-19/
- Description: "A modern and all-around free fancy multiselect snippet that you can employ for all sorts of content and a boost in UX."

## Structure Order

1. **Header** — centered heading "Multi-Select #9"
2. **Multi-Select Component** — Chosen.js-style dropdown with:
   - Trigger area (white card with shadow, shows placeholder or selected tags)
   - Embedded search input in trigger
   - Dropdown panel with scrollable category list
   - Tag chips (pill-shaped) with close buttons
3. **Footer** — Component Dock link

## Section-by-Section Fidelity Notes

### Heading
- Centered, Roboto font, font-size ~20px
- Text: "Multi-Select #9" — keep exact wording

### Multi-Select Component
- **Trigger**: White background, no visible border, rounded corners (4px), subtle shadow (0 1px 4px 0 rgba(0,0,0,0.1))
- **Placeholder**: "Select Categories" in muted gray (#999)
- **Tag chips**: Colored pill badges with close (×) button, padding ~7px 26px, no border, color varies by variant
- **Dropdown**: White background, rounded (4px), heavy shadow (0 15px 30px 0 rgba(0,0,0,0.2)), positioned below trigger with 3px margin
- **Search input**: 32px height, 14px font, inside the trigger area
- **Categories**: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- **Color variants**: 3 options (tan #e5e4cc, green #c7f0db, blue #d3f4ff) — default to one variant, allow switching

### Footer
- Standard Component Dock attribution link

## Design Tokens (from CSS)

| Token | Value |
|-------|-------|
| Font | Roboto (300, 400, 500) |
| Page background | #efefef |
| Body text | #b3b3b3 |
| Heading text | #444 |
| Border radius | 4px |
| Input shadow | 0 1px 4px 0 rgba(0,0,0,0.1) |
| Dropdown shadow | 0 15px 30px 0 rgba(0,0,0,0.2) |
| Tag bg (variant 1) | #e5e4cc |
| Tag bg (variant 2) | #c7f0db |
| Tag bg (variant 3) | #d3f4ff |

## TODO

- [ ] Create `apps/selecthub/` from a simple existing app
- [ ] Implement SelectHub component (multi-select with tag chips)
- [ ] Add color variant selector
- [ ] Implement search filtering
- [ ] Add close button (×) on tag chips
- [ ] Style per design tokens (Roboto, #efefef bg, shadows, border-radius)
- [ ] Add footer with Component Dock link
- [ ] Write Vitest tests (100% coverage)
- [ ] Run `npm run verify:app selecthub`
