# Querygate (Colorlib Search 1) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-querygate`. Recreation name: **Querygate** (NEW name —
> the ColorLib source keeps its name "Colorlib Search 1").

## Source mapping

- **ColorLib item:** "Colorlib Search 1" (TEMPLATES.md line 2733; section
  "## Search Form Bar (45)" at line 2731). The
  `wp/template/colorlib-search-1/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows; close-string matches for search-form-10..17
  are prefix substrings, not duplicates).
- **Source URL:** https://colorlib.com/wp/template/colorlib-search-1/
- **Preview URL — UNREACHABLE (verified 2026-09-28):**
  `https://preview.colorlib.com/theme/colorlib-search-1/` returns 404.
  Falling back to screenshot as sole reference.
- **Screenshot:** `colorlib-search-form-1.jpg` — analyzed 2026-09-28.
  Shows a full-viewport hero with a harbor/cityscape background photo,
  a dark semi-transparent overlay, a large white heading "Discover the
  Amazing City", and a horizontal search bar with two inputs and a
  blue button.

## Reference research (done — do not redo)

### Screenshot (`colorlib-search-form-1.jpg`)

Browsed visually 2026-09-28. Full-viewport hero: scenic harbor photo with
boats, Mediterranean-style buildings, and water. Dark semi-transparent
overlay covers the image. Large white heading "Discover the Amazing City"
centered in the upper portion. Below the heading: a dark semi-transparent
horizontal search bar containing two white-background input fields
("What are you looking for?" and "location") with a blue "Search" button
on the right. The button has slightly rounded corners. No navigation bar,
no additional sections, no footer visible. Clean, minimal, single-section
design. Aesthetic: travel/exploration theme, photographic hero, search
as the primary call-to-action.

### Family shape (series context)

45-member "Search Form Bar" family (`colorlib-search-1` … `-45`): all are
search form landing pages with varying layouts, colors, and field
combinations. **Querygate (search-1)** is the FIRST member: a simple
full-viewport hero with a two-field search bar (keyword + location) and
a scenic photo background. Later members may have different field
combinations, background treatments, or multi-section layouts. Do not
assume tokens from siblings.

### Design tokens (screenshot reference — preview unreachable)

| Token         | Value                                    | Use                                                     |
| ------------- | ---------------------------------------- | ------------------------------------------------------- |
| Page bg       | Scenic photo (harbor/cityscape)          | Full-viewport background image, covers entire hero      |
| Overlay       | `rgba(0,0,0,0.4–0.5)` dark semi-transparent | Sits between bg image and text/form content           |
| Heading       | White `#ffffff`, large (~48–56px), bold | Centered, "Discover the Amazing City"                   |
| Search bar bg | `rgba(0,0,0,0.6)` dark semi-transparent | Horizontal bar container holding inputs + button       |
| Input bg      | `#ffffff` white                         | Both input fields have white backgrounds               |
| Input text    | `#333` or `#666` grey                   | Placeholder text color                                 |
| Input border  | `#ddd` light grey                       | Subtle borders on input fields                         |
| Button bg     | `#4a7cda` or `#5b9bd5` blue             | "Search" button, slightly rounded corners (4–6px)      |
| Button text   | `#ffffff` white                          | Button label                                           |
| Button radius | 4–6px                                    | Slightly rounded corners on the Search button          |
| Font          | System/Bootstrap default (sans-serif)    | Use system sans-serif stack                            |
| Search bar radius | ~4px or 0                             | Minimal rounding on the search bar container           |

### Picsum placeholder plan

One background image: `https://picsum.photos/seed/querygate-hero/1920/1080`
for the full-viewport hero background. Use a landscape/nature photo seed
to approximate the scenic harbor feel.

### Icon mapping (lucide)

No icons needed — the template has no visible icons in the screenshot.
The "Search" button is text-only.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/querygate` from the simplest existing app
       (`cp -r apps/<simplest> apps/querygate`), rename package to
       `@free-react-templates/querygate`, add sans-serif Google Font
       `<link>` in index.html if needed, set `public/CNAME` =
       `querygate.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Hero (full-viewport, background image,
       dark overlay), Heading (white, centered, "Discover the Amazing
       City"), SearchBar (dark semi-transparent bg, two inputs side by
       side, blue button), InputKeyword (placeholder "What are you
       looking for?", accepts text), InputLocation (placeholder
       "location", accepts text), SearchButton (blue bg, white text,
       clickable), Responsive (stacks on mobile), Footer (Component
       Dock link), App (landmarks, document title "Querygate — Search
       Form Hero").
3. [ ] Hero section: full-viewport (`h-screen w-full`), background image
       via picsum (`bg-[url(...)] bg-cover bg-center`), dark overlay
       (`bg-black/50` absolute inset-0), flex column center for content.
4. [ ] Heading: large white bold text (`text-4xl md:text-5xl font-bold
       text-white text-center`), positioned in the upper-center of the
       hero.
5. [ ] Search bar: horizontal flex container with dark semi-transparent
       background (`bg-black/60 rounded p-4`), two flex-1 input fields
       (white bg, grey border, placeholder text), blue button
       (`bg-blue-500 hover:bg-blue-600 text-white rounded px-6 py-3`).
       Stack vertically on mobile.
6. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
7. [ ] Run `npm run verify:app -- querygate` (typecheck → lint → vitest
       100% → build) and fix until green.
8. [ ] Open PR `feat/template-querygate` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (404 — screenshot fallback),
       token list, and what differs (renamed "Querygate", picsum
       placeholder instead of real harbor photo, system sans-serif
       font, Component Dock footer, accessible semantics + focus
       rings).
9. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2733 `[x]` +
       surge URL (`https://querygate.free.componentdock.com`),
       `npm run readme:status`, push.
