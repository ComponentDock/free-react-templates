# QuestBox (ColorLib Search Form Bar 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-questbox`. Recreation name: **QuestBox** (NEW name —
> the ColorLib source keeps its name "Search Form Bar 20").

## Source mapping

- **ColorLib item:** "Search Form Bar 20" (TEMPLATES.md line 2777; section
  "## Search Form Bar" at the Search Form Bar block).
- **Source URL:** https://colorlib.com/wp/template/search-form-bar-20/
- **Preview URL — UNREACHABLE (404 at prep time):** `https://preview.colorlib.com/theme/search-form-bar-20/` returned 404. Fallback: screenshot only.
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-20.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Light Overlay Search

## Reference research (done — do not redo)

### Screenshot analysis (search-form-bar-20.jpg)

Browsed visually. Design is a full-viewport light overlay with a white search strip at the top:

- **Light overlay:** Very light gray/near-white (#f5f5f5) background covering the entire viewport. Minimal, clean, airy feel. No dark background like SearchFlow (Bar 18).
- **White search strip:** Full-width white strip at the top of the viewport (~50px height). Contains a left-aligned search bar with "Type keyword and hit enter..." placeholder text.
- **Search bar:** White background, light gray border, slightly rounded corners (~4px, NOT pill-shaped). Input is ~500px wide.
- **Close button:** Gray "X" in the top-right corner of the viewport.
- **Instructional text:** Below the search strip, centered muted gray text: "Please click the search icon Q toggle button top right." — indicates a search icon toggle in the header.
- **Typography:** Poppins (sans-serif), clean and modern.
- **Aesthetic:** Very minimal — light, airy, focus-on-search. The light overlay creates an unobtrusive search experience.

### Key differences from other Search Form Bar variants

- SearchFlow (Bar 18): Full-screen dark gray overlay (#757575) with white search strip, squared-off search bar, blue Search button
- QuestBox (Bar 20): Full-screen light overlay (#f5f5f5) with white search strip, no visible Search button (Enter to search), instructional message about search icon toggle
- QuestBox is lighter and more minimal than SearchFlow — no dark overlay, no explicit Search button

### Search icon toggle behavior

The screenshot indicates a search icon toggle button in the header (top-right corner) that opens/closes the search overlay. This is a pattern where:
1. Default state: header with navigation + search icon
2. Click search icon: overlay opens with search bar
3. Click X or press Escape: overlay closes
4. Click search icon again: overlay reopens

## Implementation tasks

### 1. Scaffold app folder
- [ ] Create `apps/questbox/` (copy from simplest existing search app, e.g. `apps/searchflow/`)
- [ ] Rename package to `@free-react-templates/questbox`
- [ ] Update `public/CNAME` to `questbox.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://questbox.free.componentdock.com`

### 2. Component structure
- [ ] `src/App.tsx` — main layout composing Header + Overlay + SearchBar + Footer
- [ ] `src/components/Header.tsx` — header with nav links and search icon toggle
- [ ] `src/components/SearchOverlay.tsx` — full-viewport light gray background overlay
- [ ] `src/components/SearchStrip.tsx` — white top strip containing search form
- [ ] `src/components/SearchForm.tsx` — input with "Type keyword and hit enter..." placeholder
- [ ] `src/components/CloseButton.tsx` — X button, top-right corner
- [ ] `src/components/InstructionMessage.tsx` — centered muted gray instructional text
- [ ] `src/components/Footer.tsx` — Component Dock link

### 3. Design tokens & styling
- [ ] `src/index.css` — Tailwind v4 theme tokens: overlay light gray (#f5f5f5), Poppins font
- [ ] Overlay: bg-[#f5f5f5], fixed position, full viewport
- [ ] Header: white bg, nav links + search icon toggle in top-right
- [ ] Search strip: white bg, full width, fixed at top
- [ ] Search bar: white bg, light gray border, slightly rounded (rounded, not rounded-full)
- [ ] Close button: gray (#999999), top-right, hover darkens to #333333
- [ ] Instruction message: muted gray (#999999), centered below search bar

### 4. Interactions
- [ ] Search icon toggle opens/closes overlay
- [ ] Close button dismisses overlay, shows "Search closed" message
- [ ] Escape key closes overlay
- [ ] Search submit via Enter key: capture query, log to console (placeholder)
- [ ] Overlay displays on page load (or via toggle)

### 5. Testing (TDD)
- [ ] Overlay renders full viewport with light gray background
- [ ] White search strip renders at top
- [ ] Close button displays in top-right, hover darkens
- [ ] Close button dismisses overlay
- [ ] Search input accepts text, shows placeholder "Type keyword and hit enter..."
- [ ] Enter key triggers search submit
- [ ] Instructional message displays below search bar
- [ ] Search icon toggle opens/closes overlay
- [ ] Escape key closes overlay
- [ ] Footer renders Component Dock link
- [ ] 100% coverage maintained

### 6. Verification
- [ ] Run `scripts/verify-app.sh questbox`
- [ ] Confirm no ColorLib references in app code
- [ ] Confirm footer links to Component Dock
