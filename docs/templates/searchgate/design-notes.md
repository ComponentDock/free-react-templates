# SearchGate — Prep Notes

**Source:** ColorLib Search Form V5 (`colorlib-search-5`)
**Preview:** https://colorlib.com/etc/searchf/colorlib-search-5/
**New name:** SearchGate
**Spec:** openspec/specs/template-searchgate/spec.md

---

## Structure Order

1. Full-viewport container with background image
2. Centered heading ("WHAT ARE YOU LOOKING FOR?")
3. Search form (max-width 790px, centered)
   - Black rectangular search input (no border-radius, no border)
   - Magnifying glass SVG button (absolutely positioned, right side)
4. Suggestion tag row below search bar

---

## Section-by-Section Fidelity Notes

### Background
- Full-viewport, `background-size: cover`, `background-position: center`
- Use `https://picsum.photos/seed/searchgate/1920/1080` as placeholder
- Original uses `Searchs_005.png` (fashion photo: woman in white dress on stairs)

### Heading
- Text: "WHAT ARE YOU LOOKING FOR?"
- Font: Poppins, weight 800, 36px, white (#fff), uppercase
- Centered, margin-bottom 50px
- Use `<legend>` or equivalent centered heading element

### Search Bar
- Black (#000) background, no border, no border-radius (sharp corners)
- Min-height 70px, padding: 10px 70px 6.25px 32px
- White text input, 18px font, placeholder "Type to search."
- Search icon button: 70px wide, absolute right, gray (#ccc) SVG magnifying glass, white on hover
- SVG is 40×40px

### Suggestion Tags
- 5 items: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
- Font: Helvetica (fall back to sans-serif), 14px, white
- Line-height 32px, margin-right 35px, margin-bottom 10px
- No background/border — plain text links with spacing

---

## Key Differences from SearchHub (Search 4)

| Feature         | SearchHub (V4)            | SearchGate (V5)            |
|-----------------|---------------------------|----------------------------|
| Search bar bg   | White (#fff)              | Black (#000)               |
| Border-radius   | 34px (pill)               | 0 (sharp/square)          |
| Input text      | #666666 (dark gray)       | #ffffff (white)            |
| Search icon     | #333 → #000 on hover     | #ccc → #fff on hover      |
| Placeholder     | Browser default           | White on black bg          |

---

## Implementation Tasks

- [ ] Copy simplest search-form app as base
- [ ] Rename package to @free-react-templates/searchgate
- [ ] Create public/CNAME with searchgate.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Add Poppins font via Google Fonts in index.html
- [ ] Build full-viewport background section with placeholder image
- [ ] Add heading with correct typography
- [ ] Build black rectangular search input
- [ ] Add magnifying glass SVG button with hover effect
- [ ] Add suggestion tags row
- [ ] Write tests (100% coverage required)
- [ ] Update footer with Component Dock link
- [ ] Verify: typecheck + lint + test:coverage + build pass
