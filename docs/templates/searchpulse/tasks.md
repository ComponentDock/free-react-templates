# SearchPulse (ColorLib Search Form Bar 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-searchpulse`. Recreation name: **SearchPulse** (NEW name —
> the ColorLib source keeps its name "Search Form Bar 17").

## Source mapping

- **ColorLib item:** "Search Form Bar 17" (TEMPLATES.md line 2774; section
  "## Search Form Bars (20+)" at the Search Form Bar block).
- **Source URL:** https://colorlib.com/wp/template/search-form-bar-17/
- **Preview URL — UNREACHABLE (404 at prep time):** `https://preview.colorlib.com/theme/search-form-bar-17/` returned 404. Fallback: screenshot only.
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-17.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Navbar Search Toggle

## Reference research (done — do not redo)

### Screenshot analysis (search-form-bar-17.jpg)

Browsed visually. Design is a clean, minimal navbar with search toggle:

- **Navbar:** White background, ~64px height. Left: blue "Brand" text (bold, ~22px). Right: blue nav links "Home", "About", "Contact" with ~20px gap, followed by a search icon (magnifying glass).
- **Search panel:** Slides down below navbar when search icon clicked. Light gray (#f5f5f5) background. Contains a centered white pill-shaped search bar (~600px max-width) with "Search..." placeholder, a blue "Search" button (pill shape, #4a8cf7), and an "X" close button in the top-right.
- **Body:** White background. Centered gray text: "Please click the search icon toggle button top right."
- **Colors:** Primary blue (#4a8cf7) for brand, links, buttons. White for navbar and search bar. Light gray (#f5f5f5) for search panel. Gray (#999999) for close button and placeholder text.
- **Typography:** Poppins (sans-serif), clean and modern.
- **Aesthetic:** Flat, minimal, professional. No gradients, no shadows (except subtle on search bar border). Focus is on the search toggle interaction.

### Key differences from SearchSnap (Search Form Bar 14)

- SearchSnap is a full-screen overlay; SearchPulse is a navbar dropdown panel.
- SearchPulse has an actual navbar with brand + nav links; SearchSnap is just the search bar.
- SearchPulse has a light gray panel background; SearchSnap has a light gray full-page overlay.
- SearchPulse has an informational text message below; SearchSnap has nothing.

## Implementation tasks

### 1. Scaffold app folder
- [ ] Create `apps/searchpulse/` (copy from simplest existing search app, e.g. `apps/searchsnap/`)
- [ ] Rename package to `@free-react-templates/searchpulse`
- [ ] Update `public/CNAME` to `searchpulse.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to `https://searchpulse.free.componentdock.com`

### 2. Component structure
- [ ] `src/App.tsx` — main layout composing Navbar + SearchPanel + Body
- [ ] `src/components/Navbar.tsx` — brand text + nav links + search icon toggle
- [ ] `src/components/SearchPanel.tsx` — dropdown panel with search form + close button
- [ ] `src/components/SearchForm.tsx` — pill-shaped input + Search button
- [ ] `src/components/Footer.tsx` — Component Dock link

### 3. Design tokens & styling
- [ ] `src/index.css` — Tailwind v4 theme tokens: brand blue (#4a8cf7), panel gray (#f5f5f5), Poppins font
- [ ] Navbar: white bg, flex row, brand left, nav links + icon right
- [ ] Search panel: bg-gray-100, slide-down animation, centered search bar
- [ ] Search bar: white bg, pill border-radius (rounded-full), gray border
- [ ] Search button: bg-blue-500 (#4a8cf7), white text, pill shape
- [ ] Close button: gray, top-right of panel, hover darkens
- [ ] Info text: centered, muted gray

### 4. Interactions
- [ ] Search icon toggles panel visibility (useState boolean)
- [ ] Close button hides panel
- [ ] Search submit: capture query, log to console (placeholder)
- [ ] Enter key in input triggers same submit

### 5. Testing (TDD)
- [ ] Navbar renders brand + nav links + search icon
- [ ] Search icon toggles panel open/closed
- [ ] Close button closes panel
- [ ] Search input accepts text, shows placeholder
- [ ] Search button triggers submit
- [ ] Enter key triggers submit
- [ ] Info text renders when panel closed
- [ ] Footer renders Component Dock link
- [ ] 100% coverage maintained

### 6. Verification
- [ ] Run `scripts/verify-app.sh searchpulse`
- [ ] Confirm no ColorLib references in app code
- [ ] Confirm footer links to Component Dock
