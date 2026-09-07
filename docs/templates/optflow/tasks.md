# OptFlow — Implementation Tasks & Design Notes

## Source
- **ColorLib slug:** `multiselect-20`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/
- **New name:** `optflow`

## Structure order (top to bottom)
1. Page wrapper (centered, light gray `#efefef` background, `7rem` vertical padding)
2. Heading: "Multi-Select Showcase (Limit 5)" — centered, h2, `20px`, Roboto
3. Three multi-select dropdown sections stacked vertically, each in a `col-md-5` centered row with `mb-3` spacing

## Section-by-section fidelity notes

### 1. Page wrapper
- Full-viewport light gray background `#efefef`
- Content area centered with `7rem` top/bottom padding
- Use Tailwind: `bg-[#efefef] py-28 min-h-screen flex items-center justify-center`

### 2. Heading
- Text: "Multi-Select Showcase (Limit 5)" — paraphrase of original "Multi-Select #10 (Limit to 5)"
- Centered, `text-center`, `text-xl`, `font-roboto`
- Use `<h2>` semantic element

### 3. Multi-select components (×3)
- Three instances of a custom `MultiSelect` component
- Each wrapped in a color variant container
- Color variants applied via Tailwind background on selected tags:
  - Variant 1 (cream): tag bg `#e5e4cc`
  - Variant 2 (green): tag bg `#c7f0db`
  - Variant 3 (blue): tag bg `#d3f4ff`
- Options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- Max selections: 5 per dropdown
- Placeholder: "Select Categories"

### MultiSelect component design
- **Container:** border-radius 4px, box-shadow `0 1px 4px rgba(0,0,0,0.1)`, white background
- **Selected tags:** rounded (border-radius 3px), colored background per variant, close button on right
- **Search input:** height 32px, font-size 14px, borderless
- **Dropdown:** border-radius 4px, box-shadow `0 15px 30px rgba(0,0,0,0.2)`, white background
- **Active/highlighted:** border `#5897fb`, highlight bg `#3875d7`

### Footer
- Must link to https://www.componentdock.com/ (branded as "Component Dock")
- Simple centered footer text

## Implementation approach
1. Create `apps/optflow/` from simplest existing app (e.g., multibox or multichip)
2. Build `MultiSelect` component in `src/components/MultiSelect.tsx`
3. Build `App.tsx` with heading + three MultiSelect instances
4. Wire up selection limit (5 max) with visual feedback
5. Apply color variants via props
6. Add search/filter functionality
7. Write tests for: rendering, selection, deselection, limit enforcement, search, accessibility
8. Ensure 100% test coverage
