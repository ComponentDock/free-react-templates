# RegNoir (Colorlib Regform 3) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-regnoir`. Recreation name: **RegNoir** (NEW name —
> the ColorLib source keeps its name "Colorlib Regform 3").

## Source mapping

- **ColorLib item:** "Colorlib Regform 3" (TEMPLATES.md line 2645; second
  unchecked item in the Regform section). The
  `wp/template/colorlib-regform-3/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-3/
- **Preview URL — UNREACHABLE (404 at time of prep 2026-09-28):**
  `https://preview.colorlib.com/theme/colorlib-regform-3/` returns 404.
  Fell back to screenshot analysis as the primary reference.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-3.jpg
  (1200x972 AVIF — converted to PNG and analyzed visually)
- **Category:** Registration Form Templates (ColorLib breadcrumb)
- **Description:** "A simple free event registration template. Plain HTML
  and CSS that works with Bootstrap 4, 5 and 6 or on its own."

## Reference research (done — do not redo)

### Screenshot analysis (`colorlib-reg-form-3.jpg`, 1200x972 AVIF)

Browsed visually via image analysis. The template is a SINGLE-PAGE event
registration form with a split-screen card layout on a gradient background:

**Overall layout:**
- Full-viewport purple/lavender gradient background (top: deeper purple
  ~#9b59b6, bottom: lighter pink/lavender ~#d4a5d4)
- Centered card (~800px wide, ~450px tall) with subtle shadow and rounded
  corners (~8-12px)
- Card split: left 50% = photograph, right 50% = dark form panel

**Left side (image):**
- Dramatic photograph filling the entire left half
- Shows a woman in a wide-brimmed hat surrounded by pink/magenta smoke
- Fashion/music festival aesthetic — moody, artistic
- Use picsum.photos with a fashion/portrait seed for placeholder

**Right side (form panel):**
- Near-black background (~#1a1a2e)
- "Registration Info" heading — white, serif/display font, centered at top
- Form fields stacked vertically, each with:
  - White label text above (sans-serif, ~14px)
  - Input with dark background, white text, gray underline bottom border
  - Fields in order: Name, Birthdate (date picker with calendar icon),
    Gender (dropdown with chevron), Email, Phone
- "Submit" button at bottom:
  - Green/olive background (~#7cb342)
  - Pill shape (high border-radius ~25px)
  - White text, centered
  - Padding ~12px 40px

**Below card:**
- Gradient continues to bottom of viewport
- No visible footer section in the screenshot (footer is Component Dock credit)

### Design tokens (screenshot analysis)

| Token          | Value                              | Notes                                                    |
| -------------- | ---------------------------------- | -------------------------------------------------------- |
| Page bg        | Purple gradient                    | Top ~#9b59b6, bottom ~#d4a5d4, vertical                 |
| Card           | Centered, shadow, rounded ~8-12px  | Split-screen: image left, form right                     |
| Form panel     | ~#1a1a2e (near-black)              | Dark background for form section                         |
| Heading        | White, serif/display               | "Registration Info" — decorative, centered               |
| Labels         | White, sans-serif ~14px            | Field labels above inputs                                |
| Input text     | White                              | On dark background                                       |
| Input borders  | Gray underline ~#444               | Bottom border only                                       |
| Button bg      | ~#7cb342 (green/olive)             | Pill-shaped, high radius                                 |
| Button text    | White                              | Submit button label                                      |
| Button shape   | Pill (~25px radius)                | Rounded green                                            |
| Card shadow    | Subtle drop shadow                 | Elevation effect                                         |

**Note:** All hex values are approximate from visual screenshot analysis.
The preview URL was unreachable (404). Implementer should match visual
appearance closely rather than strict pixel-perfect hex matching.

### Family context

This is a standalone event registration form — simple, single-page, split-
screen design. Key distinguishing features:
1. Purple/lavender gradient background (unique among regform templates)
2. Split-screen card with dramatic photograph on left
3. Dark (near-black) form panel on right
4. Underline-style form fields (no box borders)
5. Green pill-shaped submit button (distinctive accent color)
6. Serif/display heading font
7. Moody, fashion/event aesthetic

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/regnoir` from the simplest existing app
       (`cp -r apps/<simplest> apps/regnoir`), rename package to
       `@free-react-templates/regnoir`, add Google Fonts `<link>` in
       index.html (serif/display font for heading + sans-serif for body),
       set `public/CNAME` = `regnoir.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (gradient background, centered card,
       split layout), RegistrationForm (5 fields: name, birthdate, gender,
       email, phone; underline-style borders), SubmitButton (green pill,
       click triggers submission), ImagePanel (placeholder photograph),
       Footer (Component Dock credit).
3. [ ] Layout shell: purple/lavender gradient page (top ~#9b59b6 to
       bottom ~#d4a5d4), centered card (max-w ~800px, shadow, rounded
       corners ~10px), split flex layout: image left 50%, form right 50%;
       responsive: stack vertically on mobile (<768px).
4. [ ] Image panel: left half of card, placeholder photograph from
       picsum.photos (fashion/portrait themed seed), object-cover to
       fill the panel.
5. [ ] Registration form section: dark ~#1a1a2e background, "Registration
       Info" heading in white serif font (centered), 5 stacked form fields
       with underline-style borders (bottom border only, gray ~#444),
       white text on dark background. Fields: Name (text), Birthdate
       (date picker), Gender (select dropdown with chevron), Email (text),
       Phone (text/tel).
6. [ ] Submit button: green ~#7cb342 background, white text, pill shape
       (~25px border-radius), centered below fields, click handler for
       form submission.
7. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
8. [ ] Run `npm run verify:app -- regnoir` (typecheck → lint → vitest
       100% → build) and fix until green.
9. [ ] Open PR `feat/template-regnoir` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (404 — screenshot fallback),
       token list (purple gradient ~#9b59b6-#d4a5d4, dark panel ~#1a1a2e,
       green button ~#7cb342, serif heading), and what differs (renamed
       "RegNoir", picsum placeholder for fashion photo, Google Fonts,
       lucide icons, Component Dock footer).
10. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2645 `[x]` +
       surge URL (`https://regnoir.free.componentdock.com`), `npm run
       readme:status`, push.
