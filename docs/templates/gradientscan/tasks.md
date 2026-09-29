# GradientScan (ColorLib Search Form Bar 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gradientscan`. Recreation name: **GradientScan**
> (NEW name — the ColorLib source keeps its name "Search Form/Bar 04").

## Source mapping

- **ColorLib item:** "Search Form/Bar 04" (TEMPLATES.md line 2761; section
  "## Search Form & Bar Templates").
- **Source URL:** https://colorlib.com/wp/template/search-form-bar-04/
- **Preview URL — UNREACHABLE at the naive path:**
  `https://preview.colorlib.com/theme/search-form-bar-04/` returns 404.
  **Actual preview:** `https://preview.colorlib.com/theme/bootstrap/search-form-bar-04/`
  (HTTP 200, 1,933 bytes, 77 lines, `<title>Search Form/Bar 04</title>`).
  Stylesheet: `css/style.css` (5,812 bytes, 323 lines — all hand-written
  styles, NO Bootstrap framework, NO build step).
- **Preview CSS:** `css/style.css` — self-contained snippet stylesheet with
  `:where(html) :is(...)` reset, local Roboto @font-face (overridden by
  Poppins in body rule), and all component styles. No external dependencies.

## Reference research (done — do not redo)

### Screenshot (`search-form-bar-04.jpg`, 1200×972)

The TEMPLATES.md screenshot (and ColorLib page) show a simple page: vivid
purple-to-magenta horizontal gradient filling the viewport, a centered white
pill-shaped search form with a circular gradient search button at top-right,
and a white heading above the form. The design is minimal — one section, one
form, no navigation, no imagery, no footer beyond the source attribution.

### Design tokens (live stylesheet + rendered page)

| Token            | Value                                  | Use                                                                 |
| ---------------- | -------------------------------------- | ------------------------------------------------------------------- |
| Page bg          | `linear-gradient(to right, #3e2bcc 0%, #c643e0 100%)` | full viewport, horizontal purple → magenta                  |
| Font family      | `"Poppins", Arial, sans-serif`         | body base 16px, line-height 1.8, weight 400                        |
| Heading          | 28px, `#fff`, Poppins 400              | centered above form, margin-bottom 3rem                            |
| Body text color  | `gray`                                 | default text color (overridden by specific elements)                |
| Form bg          | `#fff`                                 | white pill container                                                |
| Form radius      | 40px                                   | pill shape                                                          |
| Form shadow      | `0px 5px 20px -12px rgba(0,0,0,0.34)` | soft shadow beneath the pill                                        |
| Input height     | 50px                                   | search input field                                                  |
| Input bg         | `#fff`                                 | white background                                                    |
| Input color      | `#000`                                 | black text                                                          |
| Input font-size  | 14px                                   | input text                                                          |
| Input radius     | 2px                                    | subtle rounding (mostly hidden by parent 40px)                       |
| Input border     | none                                   | no visible border                                                   |
| Input placeholder| `rgba(0,0,0,0.7)`                     | 70% black placeholder text                                          |
| Input padding    | `0 15px 0 20px`                       | 20px left (text start), 15px right (room for button)                |
| Search button    | 46×46px, radius 50%                   | circular gradient button                                            |
| Button bg        | `linear-gradient(to right, #3e2bcc 0%, #c643e0 100%)` | same gradient as page                                |
| Button icon      | `#fff`                                 | white search/magnifier icon                                         |
| Button position  | absolute, `top: 2px; right: 2px`      | inside form container, top-right                                    |
| Button shadow    | none                                   | flat, no shadow on the button                                       |
| Section padding  | `7em 0`                                | vertical spacing around the content                                 |
| Container max-w  | 960px (at 992px+ breakpoint)          | centered content width                                               |

### Icon mapping (lucide-react)

| Source glyph                  | Recreation              |
| ----------------------------- | ----------------------- |
| `fa fa-search` (SVG magnifier)| lucide `Search`         |

### Picsum placeholder plan

**NONE.** The template has a solid gradient background with zero photos or
imagery. Everything is CSS + lucide icon. Do not invent photos the source lacks.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/gradientscan` from the simplest existing app
       (`cp -r apps/<simplest> apps/gradientscan`), rename package to
       `@free-react-templates/gradientscan`, add Poppins 400 Google Fonts
       `<link>` in index.html, set `public/CNAME` =
       `gradientscan.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage):
       - GradientPage (gradient background renders correctly, centered
         content, vertical padding)
       - Heading (text "GradientScan", white color, Poppins font, bottom
         margin)
       - SearchForm (pill shape with 40px radius, white bg, shadow,
         form submission prevention)
       - SearchInput (50px height, white bg, no border, placeholder
         "Search...", 20px left padding, accessible label)
       - SearchButton (46×46px circle, gradient bg, white icon, aria-label,
         positioned top-right)
       - Footer (Component Dock link present, correct href)
       - App (landmarks, document title "GradientScan — Search Bar")

3. [ ] Layout shell: full-viewport gradient background
       (`bg-gradient-to-r from-[#3e2bcc] to-[#c643e0]`), centered content
       container (max-w ~960px, mx-auto), section padding 7em 0.

4. [ ] Heading: "GradientScan" text, white, 28px, Poppins 400,
       text-center, mb-12 (≈3rem).

5. [ ] Search form component:
       - Outer container: white bg, rounded-full (40px), soft shadow
         (`shadow-[0px_5px_20px_-12px_rgba(0,0,0,0.34)]`), relative
         positioning, overflow-hidden.
       - Inner layout: flex row or grid — input fills remaining space
         (pr-12 to clear button), button absolute top-right.
       - Input: h-12 (50px), bg-white, text-black, text-sm (14px),
         rounded-sm (2px), no border, placeholder "Search...",
         pl-5 (20px), pr-4 (15px), aria-label="Search".
       - Button: 46×46px circle, absolute top-0.5 right-0.5, same
         gradient bg, flex items-center justify-center, white Search
         icon from lucide-react, aria-label="Submit search", type="button"
         (prevent form submit on click).

6. [ ] Form behavior: preventDefault on form submit (onSubmit handler),
       no state management needed for a static demo (or add simple
       console.log for submit).

7. [ ] Footer: minimal Component Dock credit, white text on gradient bg,
       linking https://www.componentdock.com/.

8. [ ] Run `npm run verify:app -- gradientscan` (typecheck → lint → vitest
       100% → build) and fix until green.

9. [ ] Open PR `feat/template-gradientscan` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (the `/theme/bootstrap/` one),
       token list (gradient #3e2bcc → #c643e0, Poppins, pill form 40px
       radius, circular gradient button), and what differs (renamed
       "GradientScan", Poppins via Google Fonts, lucide Search icon,
       accessible form semantics, Component Dock footer).

10. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2761 `[x]` +
        surge URL (`https://gradientscan.free.componentdock.com`),
        `npm run readme:status`, push.
