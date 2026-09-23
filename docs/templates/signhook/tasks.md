# Signhook (ColorLib Login Form 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-signhook`. Recreation name: **Signhook** (NEW name —
> the ColorLib source keeps its name "Login Form V04").

## Source mapping

- **ColorLib item:** "Login Form 04" (TEMPLATES.md line 2150; section
  "## Login Form" family). The `wp/template/login-form-04/` slug appears
  in TEMPLATES.md at that line.
- **Source URL:** https://colorlib.com/wp/template/login-form-04/
- **Preview URL — UNREACHABLE (404 as of 2026-09-23):**
  `https://preview.colorlib.com/theme/login-form-04/` returns "Not Found".
  All reference data derived from the screenshot and ColorLib template page.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-04.jpg
  (1200×972 AVIF). Shows split-panel layout with kitchen image left,
  login card right.

## Reference research (done — do not redo)

### Screenshot analysis (login-form-04.jpg, 1200×972 AVIF)

Browsed visually. Layout: two-column split. Left ~35%: full-height lifestyle
photo (kitchen scene — white subway tile, wooden shelf, copper pot, vintage
clock, wire basket with eggs, white ceramic items). Right ~65%: light gray
(`~#f5f7fa`) background with a white card centered vertically and
horizontally.

Card contents (top to bottom):
- Heading: "Login to Colorlib" — ~24px, dark gray/black, centered,
  clean sans-serif font
- "Username" label — ~14px, dark, left-aligned
- Username input — white bg, light gray border, placeholder
  "your-email@gmail.com"
- "Password" label — same style as Username
- Password input — same style, placeholder "Your Password"
- Row: "Remember me" checkbox (checked state = orange `~#e8913a`) on
  left; "Forgot Password" text link on right (dark text)
- "Log In" button — full-width, orange (`~#e8913a`) background,
  white text, rounded corners (~4px), centered text

Card styling: white (`#fff`), generous rounded corners (~8px), subtle
box-shadow, generous internal padding (~40px).

Aesthetic: Modern, clean, minimal. Warm orange accent against cool gray.
The lifestyle image adds a homey, approachable feel. No decorative
elements beyond the photo — purely functional.

### Design tokens (from screenshot — preview unreachable)

| Token          | Value                    | Source/notes                                    |
| -------------- | ------------------------ | ----------------------------------------------- |
| Brand orange   | `~#e8913a`               | Button bg, checkbox checked — warm orange        |
| Page bg        | `~#f5f7fa`               | Right panel — very light cool gray               |
| Card bg        | `#fff`                   | Login form card                                  |
| Card shadow    | subtle (2px 4px 8px?)    | Soft drop shadow on card                         |
| Card radius    | `~8px`                   | Rounded corners                                  |
| Heading color  | `~#333`                  | Dark gray/black, ~24px                           |
| Label color    | `~#555`                  | Medium gray, ~14px                               |
| Input border   | `~#ddd`                  | Light gray, 1px solid                            |
| Placeholder    | `~#aaa`                  | Muted gray                                       |
| Button radius  | `~4px`                   | Slightly less than card radius                   |
| Font           | System sans-serif stack  | Clean, modern — Poppins or system fallback       |

### Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/signhook` from the simplest existing app
       (`cp -r apps/<simplest> apps/signhook`), rename package to
       `@free-react-templates/signhook`, add Google Fonts `<link>` if
       using Poppins (or use system stack), set `public/CNAME` =
       `signhook.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json (`npm install` at root).

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): SplitLayout (image left ~35%, card
       right on gray bg; responsive collapse <768px), LoginForm
       (heading "Login to ..."; Username field + label + placeholder;
       Password field + label + placeholder + type=password), Submit
       (empty username → error; empty password → error; both empty →
       two errors; valid creds → no error + form submits), RememberMe
       (checkbox toggles checked/unchecked, orange when checked),
       ForgotPassword (link present, clickable, no crash), Footer
       (Component Dock credit link), App (landmarks, document title
       "Signhook — Login Form").

3. [ ] Layout shell: split-panel with full-height image on the left
       (~35% width) and light gray (`bg-[#f5f7fa]`) right panel.
       Use `h-screen` for full viewport height. Image via
       `picsum.photos/seed/signhook-1/800/1200` (deterministic
       placeholder). Responsive: image stacks or hides on mobile
       (<768px), card takes full width.

4. [ ] Login card: white bg, ~8px rounded corners, subtle shadow
       (`shadow-md` or custom), centered vertically and horizontally
       on the right panel, generous padding (~40px). Max-width ~400px.

5. [ ] Form fields: Username (text input, label "Username",
       placeholder "your-email@gmail.com") and Password (password
       input, label "Password", placeholder "Your Password"). Style:
       full-width, light gray border (`border border-gray-300`),
       rounded (~4px), white bg, padding. Labels above inputs, dark
       gray, ~14px.

6. [ ] Remember me + Forgot Password row: flex row with space-between.
       Left: custom checkbox with orange (`#e8913a`) checked state +
       "Remember me" label. Right: "Forgot Password" text link (dark
       or brand color, no underline by default).

7. [ ] Submit button: full-width, orange bg (`bg-[#e8913a]`), white
       text, rounded (~4px), bold, ~48px height. Hover: slightly
       darker orange. Disabled state when form is invalid (optional —
       source doesn't show this explicitly).

8. [ ] Form validation: required fields for Username and Password.
       Show inline error messages below each field when empty on
       submit. Error text: red, ~12px. Fields get red border on error.

9. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/. Place at bottom of page or
       within the card below the button.

10. [ ] Run `npm run verify:app -- signhook` (typecheck → lint → vitest
       100% → build) and fix until green.

11. [ ] Open PR `feat/template-signhook` → merge immediately
       (`gh pr merge --squash --delete-branch`). PR description must
       include: source URL, screenshot reference (preview unreachable),
       token list (orange `#e8913a`, gray `#f5f7fa`, system sans-serif,
       split-panel layout, ~8px card radius), and what differs
       (renamed "Signhook", placeholder images, Component Dock footer,
       no ColorLib references in app code, accessible semantics,
       client-side validation).

12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2150 `[x]` +
       surge URL (`https://signhook.free.componentdock.com`),
       `npm run readme:status`, push.
