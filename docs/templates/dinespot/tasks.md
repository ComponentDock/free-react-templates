# Dinespot (ColorLib Regform 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dinespot`. Recreation name: **Dinespot** (NEW name —
> the ColorLib source keeps its name "Colorlib Regform 13").

## Source mapping

- **ColorLib item:** "Colorlib Regform 13" (TEMPLATES.md line 2629).
  The `wp/template/colorlib-regform-13/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-13/
- **Preview URL — UNREACHABLE (verified 2026-09-27):** The naive
  `https://preview.colorlib.com/theme/colorlib-regform-13/` returns
  HTTP 404. Fallback: the screenshot image was analyzed visually.
- **Screenshot:** `colorlib-reg-form-13.jpg` (from TEMPLATES.md) —
  full-viewport browser frame showing the restaurant booking form with
  split-layout card (photo + dark form panel) on warm peach background.

## Reference research (done — do not redo)

### Screenshot (`colorlib-reg-form-13.jpg`)

Browsed visually 2026-09-27. Full-viewport browser frame:
- **Page background:** Solid warm peach/sand color (~#F5D5B5 or #F0C9A0)
  across the entire viewport.
- **Card:** Two-panel horizontal layout, centered:
  - **Left panel (~50%):** Full-height photograph of people dining at a
    restaurant (toasting with champagne, plates of food, warm ambient
    lighting, bokeh lights in background). Rounded corners on the left
    side of the card.
  - **Right panel (~50%):** Very dark (#1a1a1a or #222) background
    with white text. Contains all form elements.
- **Form title:** "Booking place for your dinner!" — white, bold,
  ~18–20px, left-aligned at top of dark panel.
- **Form fields (on dark background):**
  1. "Your name" — text input, white text, subtle bottom border.
  2. "Your phone number" — text input, same style.
  3. "Time" — select dropdown with chevron-down, bottom border.
  4. "Food" — select dropdown with chevron-down, bottom border.
  5. **"Select Your Dining Space"** — bold white subheading.
  6. **Person count circles:** Row of 5 circles (2, 4, 6, 8, 10).
     "4" is selected with tan/gold accent + "Person" label. Unselected:
     dark bg, light border, white number.
- **Submit button:** "Book now" — tan/gold (~#D4A76A), dark text,
  rounded (~8–10px), centered in dark panel.
- **Below button:** "Verify your booking info from your phone" — small
  white text, centered.
- **Card corners:** Rounded (~10–15px).
- **Aesthetic:** Warm, elegant, restaurant/dining theme. Dark form panel
  contrasts with warm peach background. Title font appears slightly
  decorative (possibly serif or stylized sans-serif).

### Design tokens (from screenshot)

| Token         | Value                                  | Use                                                                |
| ------------- | -------------------------------------- | ------------------------------------------------------------------ |
| Page bg       | `#F5D5B5` (approx, warm peach/sand)   | Solid warm background across entire viewport                       |
| Card left     | Photo (restaurant dining scene)        | Full-height image, rounded left corners                            |
| Card right    | `#1a1a1a` or `#222` (very dark)       | Form panel background, white text                                  |
| Brand         | `#D4A76A` (approx, tan/gold)           | Submit button bg, selected person circle accent                    |
| Ink           | `#ffffff`                              | Form text on dark panel (white)                                    |
| Ink dark      | `#1a1a1a` or `#333`                   | Submit button text (dark on tan/gold bg)                           |
| Border        | `rgba(255,255,255,0.3)` (approx)      | Input bottom borders on dark panel (subtle white)                  |
| Circle bg     | `#1a1a1a` or `#333`                   | Unselected person circle background                                |
| Circle border | `rgba(255,255,255,0.4)` (approx)      | Unselected circle border (subtle white)                            |
| Font title    | Decorative serif or stylized sans      | "Booking place for your dinner!" — may need a Google Font match   |
| Font body     | Clean sans-serif                       | Form fields, labels, buttons                                       |
| Card width    | ~900–1000px (two-panel)               | Split layout; responsive: stack vertically on mobile               |
| Card radius   | ~10–15px                               | Rounded corners on the card                                        |
| Btn radius    | ~8–10px                                | Submit button rounded corners                                      |
| Circle size   | ~50–60px                               | Person count circular buttons                                      |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/dinespot` from the simplest existing app
       (`cp -r apps/<simplest> apps/dinespot`), rename package to
       `@free-react-templates/dinespot`, add Google Fonts `<link>` in
       index.html (find a suitable decorative font for the title —
       e.g. Playfair Display or similar — plus a clean sans-serif for
       body), set `public/CNAME` = `dinespot.free.componentdock.com` +
       `"homepage"`. Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): PageShell (warm peach bg, two-panel
       card centered, responsive stacking), FormTitle ("Booking place
       for your dinner!" white bold), TextInput (2 fields: Your name,
       Your phone number — white text, bottom borders), SelectDropdown
       (2 fields: Time, Food — chevrons, options), PersonSubheading
       ("Select Your Dining Space" bold white), PersonCount (5 circles
       2/4/6/8/10, default selection, toggle, tan/gold selected state,
       "Person" label), SubmitButton ("Book now" tan/gold, centered),
       PhoneNote ("Verify your booking info from your phone" static
       text), Footer (Component Dock credit), App (landmarks, document
       title "Dinespot — Restaurant Booking Form").
3. [ ] Layout shell: warm peach page (`bg-[#F5D5B5]`), centered card
       (max-w ~950px, radius ~12px, shadow), two-panel flex layout
       (photo left 50%, dark form right 50%); responsive: stack
       vertically ≤768px.
4. [ ] Left panel: full-height restaurant photo using
       `picsum.photos/seed/dinespot-1/500/600` (or similar), object-cover,
       rounded left corners.
5. [ ] Dark form panel: `bg-[#1a1a1a]`, white text, padding, flex
       column layout.
6. [ ] Form title: "Booking place for your dinner!" — white, bold,
       decorative font (Playfair Display or similar), ~18–20px,
       left-aligned, bottom margin.
7. [ ] Text inputs: 2 fields (Your name, Your phone number) — white
       text, transparent bg, subtle bottom border (`border-b
       border-white/30`), no box border, full-width, padding.
8. [ ] Select dropdowns: 2 selects (Time, Food) — white text, chevron-down
       icon, bottom border, option lists with sensible restaurant
       defaults (time slots, cuisine types).
9. [ ] Person count selector: "Select Your Dining Space" subheading +
       row of 5 circular buttons (2, 4, 6, 8, 10). Default "4"
       selected (tan/gold border + "Person" label). Click toggles
       selection. Use radio-group semantics (`role="radiogroup"`).
10. [ ] Submit button: "Book now" — tan/gold bg (#D4A76A), dark text,
       rounded (~8–10px), centered, padding. Form submission shows
       success or console.log (no backend).
11. [ ] Phone note: "Verify your booking info from your phone" — small
       white/light text, centered below button, static.
12. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
13. [ ] Run `npm run verify:app -- dinespot` (typecheck → lint → vitest
       100% → build) and fix until green.
14. [ ] Open PR `feat/template-dinespot` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, screenshot reference, token list (warm
       peach bg, dark form panel, tan/gold accent, person-count
       circles, decorative title font), and what differs (renamed
       "Dinespot", picsum placeholder instead of ColorLib image,
       decorative Google Font for title, Component Dock footer).
15. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2629 `[x]` +
       surge URL (`https://dinespot.free.componentdock.com`),
       `npm run readme:status`, push.
