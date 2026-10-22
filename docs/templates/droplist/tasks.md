# Droplist — Implementation Tasks

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-droplist/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/dropdown-20/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> - **Token corrections** (live stylesheet — applied below, except on
>   hover/role lines that keep their own shade):
>   - `#0071bc` → **`#007bff`**
>
> **Spec caveat:** ⚠️ the demo's own `<title>` reads `Dropdown #8` though the path is `dropdown-20` — the host's titles are not reliable labels; the readings above are for the URL as fetched.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

> Recreation of ColorLib "Dropdown 20" — Multi-Section Category Dropdown

## Source

- **ColorLib slug:** dropdown-20
- **URL:** https://colorlib.com/wp/template/dropdown-20/
- **Preview:** 404 (unreachable) — use screenshot as primary reference
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-20.jpg

## Design Notes

### Structure (section order)

1. **Heading** — centered "Dropdown" title
2. **Dropdown trigger** — button that toggles the multi-section menu
3. **Multi-section dropdown menu** — contains:
   - Category headings (bold/uppercase)
   - Sub-category link lists under each heading
   - Visual dividers between sections
4. **Footer** — "Component Dock" attribution link

### Visual Design (from screenshot)

- Clean white background with subtle dropdown shadow
- Blue (#007bff) accent on the trigger button
- Poppins font throughout
- Dropdown menu has distinct sections separated by thin gray borders
- Sub-category items are simple text links with hover states
- Standard Bootstrap-style dropdown aesthetics

### Fidelity Notes

- Match section structure 1:1 (heading → trigger → dropdown → footer)
- Multi-section layout is the key differentiator from other dropdown snippets
- Each category section needs a clear heading + list of items
- Dropdown positioning: appears below the trigger button
- Shadow and borders give depth to the dropdown panel

## Task Checklist

- [ ] Copy simplest existing app (e.g. dropkit) as base
- [ ] Rename package to `@free-react-templates/droplist`
- [ ] Create `apps/droplist/src/App.tsx` composing sections
- [ ] Create `apps/droplist/src/components/DropdownTrigger.tsx`
- [ ] Create `apps/droplist/src/components/MultiSectionMenu.tsx`
- [ ] Create `apps/droplist/src/components/CategorySection.tsx`
- [ ] Create `apps/droplist/src/components/Footer.tsx`
- [ ] Add tests for each component (100% coverage)
- [ ] Run `npm install` at repo root to register workspace
- [ ] Run `scripts/verify-app.sh droplist`
- [ ] Update `TEMPLATES.md` with `[~]` then `[x]` marker
- [ ] Commit, push, PR, merge
