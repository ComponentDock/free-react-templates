# SeekNova — Design Notes & Task Outline

**Source:** ColorLib Colorlib Search 6 (`colorlib-search-6`)
**Preview:** https://colorlib.com/etc/searchf/colorlib-search-6/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-6.jpg

## Section Order

1. Full-viewport search hero (single section — no navbar, no footer in the
   original; footer added per ComponentDock convention)

## Structure Notes

### Search Hero (`.s006` equivalent)

- `min-h-screen` flex container, centered both axes
- Background: full-viewport cover image (`picsum.photos/seed/seeknova-hero/1920/1080`)
- Max-width 790px form centered inside
- `p-4` (15px) container padding

### Heading

- `<legend>` equivalent → use `<h1>` or `<p>` with Poppins 800 italic
- Text: "What are you looking for?"
- Color: white, font-size 36px, text-align center, margin-bottom ~59px

### Search Input

- Pill-shaped: `rounded-full` (border-radius 34px), white background, no border
- Height: `h-[70px]` desktop, `h-[50px]` mobile (via `max-md:`)
- Padding: `py-2.5 pl-[70px] pr-8` (left padding clears the icon column)
- Font: 18px, color `#666`
- Placeholder color: `#ccc`
- No focus ring / no box-shadow on focus

### Search Icon

- Magnifying-glass SVG, 30×30px (26×26 mobile)
- Positioned absolutely inside the input, left side, vertically centered
- Fill: `#ccc`, transitions to `#666` on hover (0.2s ease-out)
- Width of icon column: 70px (absolute left: 0, flex center)

### Category Suggestion Pills

- Horizontal flex-wrap row below the input
- 5 pills: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
- Each: `bg-black/60 text-white text-sm px-4 h-8 rounded-2xl mr-2.5 mb-2.5`
  (border-radius 16px, Helvetica 14px, line-height 32px)
- Font: Helvetica (use system sans-serif stack as fallback)

## Fidelity Notes

- The original uses a `<form>` with `<fieldset>` and `<legend>` for semantics.
  In React, use a `<form>` with a visually-hidden `<label>` or a `<h1>` for
  the heading, and keep the form element for submit handling.
- The background image is a fashion photo with teal/mint tones and confetti.
  Use a picsum.photos placeholder with a teal-ish seed.
- No footer in the original — add ComponentDock footer per convention.
- The `<span>` suggestion items are clickable in the original (they filter
  the search). Implement as button elements with click handlers that set the
  input value.

## Implementation Tasks

1. Create `apps/seeknova/` — copy from simplest existing search-form app
2. Create `src/components/SearchHero.tsx` — main search section
3. Create `src/App.tsx` — compose SearchHero + Footer
4. Add background image via `picsum.photos` placeholder
5. Style with Tailwind: pill input, icon positioning, suggestion pills
6. Add responsive breakpoints (mobile input height, icon size)
7. Wire up form submit + suggestion pill click handlers
8. Add `public/CNAME`, update `package.json` homepage
9. Write tests (100% coverage) for:
   - SearchHero renders heading, input, icon, pills
   - Input accepts text
   - Form fires submit
   - Suggestion pills set input value on click
   - Responsive layout at mobile breakpoint
10. Run `npm run verify:app seeknova` — typecheck + lint + tests + build
