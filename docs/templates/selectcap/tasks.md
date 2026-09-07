# SelectCap — Implementation Tasks

## Source

- ColorLib: multiselect-17
- Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-17/
- Type: Bootstrap multi-select component with max-selection limit

## Design notes

### Structure order

1. Page wrapper — light gray background (#efefef), centered content with 7rem vertical padding
2. Centered heading — "Multi-Select #7 (Limit to 7 selection)", 20px font
3. Multi-select dropdown — centered in col-md-5 equivalent
   - Checkbox-style items with green check marks (#8cba51)
   - 50 US state options
   - Max 7 selections enforced
4. No footer in original (component-only demo) — add Component Dock footer per conventions

### Fidelity notes

- Original uses Bootstrap-select plugin (jQuery-based). React recreation should use a custom or library-based multi-select that mimics the same behavior.
- Check marks appear before each option text; selected items have green text.
- Dropdown has scrollable list when options overflow viewport.
- The "form-control" class gives the select a Bootstrap-styled border/shadow.
- No hero section, no nav, no footer in original — just the component demo.

### Key differences from original

- Original is jQuery + Bootstrap-select; recreation is React + Tailwind
- Adding Component Dock footer (required by conventions)
- Using placeholder images via picsum if any images are needed
- Font: use Roboto via Google Fonts link in index.html

## Tasks

- [ ] Set up app scaffold (copy minimal existing app, rename package)
- [ ] Create MultiSelect component with:
  - Dropdown trigger button showing selected count or placeholder
  - Dropdown menu with checkbox-style items
  - Green (#8cba51) check marks and selected text
  - Max 7 selection limit enforcement
  - Scrollable dropdown when list is long
- [ ] Create App.tsx composing heading + MultiSelect
- [ ] Add Component Dock footer
- [ ] Style with Tailwind matching original tokens
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck, lint, test:coverage, build
