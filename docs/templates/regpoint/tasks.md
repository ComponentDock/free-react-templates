# Regpoint (ColorLib Regform 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-regpoint`. Recreation name: **Regpoint** (NEW name —
> the ColorLib source keeps its name "Colorlib Regform 12").

## Source mapping

- **ColorLib item:** "Colorlib Regform 12" (TEMPLATES.md line 2628).
  The `wp/template/colorlib-regform-12/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-12/
- **Preview URL — UNREACHABLE (verified 2026-09-27):** The naive
  `https://preview.colorlib.com/theme/colorlib-regform-12/` returns
  HTTP 404. Fallback: the ColorLib listing page was fetched successfully
  and the screenshot image was analyzed visually.
- **Screenshot:** `colorlib-reg-form-12.jpg` (from TEMPLATES.md) —
  full-viewport browser frame showing the education appointment form
  with background image and centered white card.

## Reference research (done — do not redo)

### Screenshot (`colorlib-reg-form-12.jpg`)

Browsed visually 2026-09-27. Full-viewport browser frame:
- **Background:** Photographic image of students/people studying at a
  table (headphones, notebooks, red scarf visible), with a dark
  semi-transparent overlay (~50–70% opacity). Fills entire viewport.
- **Card:** White, centered horizontally, ~600px wide, rounded corners
  (~10px), subtle drop shadow. Contains the entire form.
- **Title:** "EDUCATION APPOINTMENT FORM" — uppercase, bold, dark text
  (~18–20px), left-aligned at the top of the card.
- **Form fields (top to bottom):**
  1. "Title" — text input, light gray placeholder, thin border.
  2. "Your Name" — text input, same style.
  3. "Email" — text input, same style.
  4. "Phone number" — text input, same style.
  5. "Course Type" — select dropdown with chevron-down indicator.
  6. **"How would you like to be located ?"** — bold subheading text
     (not a field), ~14px, dark.
  7. "By phone" — select dropdown with chevron.
  8. "Hours : 8am 10pm" — select dropdown with chevron.
- **Checkbox:** "I agree to the Terms and Conditions" — small checkbox,
  "Terms and Conditions" is a blue link.
- **Submit button:** "Request an appointment" — blue/indigo background
  (~#5B6ABF), white text, rounded corners (~8–10px), left-aligned
  within the card. NOT full-width.
- **Below card:** Light gray section (#f5f5f5) — appears empty.
- **Aesthetic:** Clean, modern, minimal. No navbar, no sidebar. The
  background image provides all visual interest. Sans-serif font
  (likely Poppins or similar).

### Design tokens (from screenshot + ColorLib page meta colors)

| Token       | Value                                  | Use                                                                 |
| ----------- | -------------------------------------- | ------------------------------------------------------------------- |
| Page bg     | Photographic image + dark overlay      | Full-viewport; dark overlay ~50–70% opacity                         |
| Card        | `#fff`, ~600px, radius ~10px           | `margin: 0 auto`; subtle shadow; mobile: `calc(100% - 40px)`       |
| Brand       | `#5B6ABF` (approx)                     | Submit button bg (blue/indigo); "Terms" link color                  |
| Ink         | `#333` (approx)                        | Body text, labels, heading                                         |
| Placeholder | `#999` (approx)                        | Input placeholder text                                             |
| Border      | `#e0e0e0` (approx)                     | Input/select borders                                               |
| Bg-light    | `#f5f5f5` (approx)                     | Section below card (light gray)                                    |
| Font        | 'Poppins', sans-serif (approx)         | Clean sans-serif; heading bold, body regular                       |
| Card radius | ~10px                                   | Rounded corners on the card                                        |
| Btn radius  | ~8–10px                                 | Submit button rounded (NOT pill, NOT circle)                       |
| Input style | Bottom border or light full border      | Light gray border, no heavy shadow                                 |
| Select      | Native or styled chevron-down           | Course Type, By phone, Hours dropdowns                             |

**Note:** Colors marked "(approx)" are estimated from the screenshot
since the live preview was unreachable. The implementer should verify
against the actual ColorLib source CSS if obtainable, or use the
screenshot as the canonical reference.

### ColorLib page meta colors (from fetched listing page)

The ColorLib listing page for this template includes these hex colors in
its meta/theme CSS (not necessarily the template's own palette, but
informative):
- `#1a73e8` (Google blue) — likely page UI, not template
- `#6366f1` (indigo) — possibly the submit button color
- `#0f172a` (dark slate) — possibly heading text
- `#94a3b8` / `#64748b` (slate grays) — possibly placeholder/border

The implementer should prefer the screenshot's visual appearance over
these meta-page colors, as they may belong to the ColorLib site chrome
rather than the template itself.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/regpoint` from the simplest existing app
       (`cp -r apps/<simplest> apps/regpoint`), rename package to
       `@free-react-templates/regpoint`, add Poppins 400/500/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `regpoint.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): PageShell (full-viewport bg image with
       dark overlay, centered white card ~600px, responsive), FormTitle
       ("EDUCATION APPOINTMENT FORM" uppercase bold), TextInput (4
       fields: Title, Your Name, Email, Phone number — light borders,
       placeholders), SelectDropdown (3 fields: Course Type, By phone,
       Hours — chevron indicators, option lists), Subheading ("How
       would you like to be located ?" bold text between selects),
       TermsCheckbox (unchecked default, "Terms and Conditions" link),
       SubmitButton ("Request an appointment" blue/indigo, rounded),
       GraySection (light gray below card), Footer (Component Dock
       credit), App (landmarks, document title "Regpoint — Education
       Appointment Form").
3. [ ] Layout shell: full-viewport page with background image
       (picsum.photos seeded for regpoint, dark overlay via
       `bg-black/60` or similar), centered white card (max-w ~600px,
       radius ~10px, shadow, `mx-auto`); responsive: card
       `calc(100% - 40px)` ≤768px.
4. [ ] Form title: "EDUCATION APPOINTMENT FORM" — uppercase, bold,
       dark text, left-aligned at top of card with bottom margin.
5. [ ] Text input components: 4 fields in order (Title, Your Name,
       Email, Phone number). Each: light gray border or bottom-border,
       placeholder text in gray, full-width within card. Email field
       uses `type="email"` for native validation.
6. [ ] Select dropdown components: 3 selects in order (Course Type,
       By phone, Hours). Each: light border treatment, chevron-down
       indicator, option lists with sensible defaults.
7. [ ] Subheading: "How would you like to be located ?" — bold text
       element between Course Type and By phone selects, NOT an input.
8. [ ] Terms checkbox: checkbox input + label "I agree to the Terms
       and Conditions" with "Terms and Conditions" as a blue link
       (`href="#"` or placeholder).
9. [ ] Submit button: "Request an appointment" — blue/indigo bg
       (~#5B6ABF), white text, rounded corners (~8–10px), padding
       ~12px 24px, left-aligned within card. Form submission shows
       success state or console.log (no real backend).
10. [ ] Gray section: light gray (#f5f5f5) section below the
       background image area — may be empty or minimal.
11. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
12. [ ] Run `npm run verify:app -- regpoint` (typecheck → lint → vitest
       100% → build) and fix until green.
13. [ ] Open PR `feat/template-regpoint` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, screenshot reference, token list (photo bg
       with dark overlay, white card ~600px, blue/indigo button, Poppins
       font), and what differs (renamed "Regpoint", picsum placeholder
       instead of ColorLib image, Poppins via Google Fonts, Component
       Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2628 `[x]` +
       surge URL (`https://regpoint.free.componentdock.com`),
       `npm run readme:status`, push.
