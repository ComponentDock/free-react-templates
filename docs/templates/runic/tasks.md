# Runic (Colorlib Wizard 6) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-runic`. Recreation name: **Runic** (NEW name —
> the ColorLIB source keeps its name "Colorlib Wizard 6").

## Source mapping

- **ColorLIB item**: "Colorlib Wizard 6" (TEMPLATES.md line 874; section
  "## Bootstrap Wizards (30)" at line 846). The
  `wp/template/colorlib-wizard-6/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL**: https://colorlib.com/wp/template/colorlib-wizard-6/
- **Preview URL — UNREACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/colorlib-wizard-6/` returns HTTP 404
  ("Not Found"). The naive preview URL does not resolve for this member.
  Fallback: screenshot analysis (see below). The Colorlib template page
  itself may confirm the description.
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg`

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-6.jpg`)

Browsed visually in the browser. Browser frame: macOS-style window.

- **Layout**: Centered card design on gradient background.
  - **Full page background**: Soft pastel vertical gradient — muted light blue
    at top, transitioning to soft lavender in the middle, then warm light pink
    at the bottom. Calming and gentle.
  - **Decorative header**: Large, semi-transparent, stylized bubbly text
    reading "TELL US ABOUT YOURS" at the top above the form card. Thick,
    rounded, bubbly display font in a light white/grey tone that blends with
    the gradient. Serves as decorative theming, not functional text.

- **Main form card**: Large, centered, rounded-corner off-white/very light grey
  card. Subtle drop shadow giving depth. Large soft rounded edges (high border
  radius ~24px), matching the friendly design language.

- **Step indicators**: Below the white card, centered, 3 small circular progress
  indicators. First circle is filled solid white (active/step 1). Remaining two
  are empty outlined dark grey circles (upcoming steps).

- **Profile picture section** (left side of form): Circular profile image
  placeholder with soft light purple/lavender border containing a sample
  portrait. Below: "CHOOSE PICTURE" text link in uppercase dark grey with a
  small camera icon.

- **Form fields** (all pill-shaped rounded rectangles):
  - Layout (stacked):
    - First Name (right of profile picture)
    - Last Name (right of profile picture)
    - Team Name (right of profile picture)
    - Email (full width, below the group)
    - Create a Password (full width)
  - Each field has a small circular dot to its left:
    - Empty outlined circle = pending/inactive field
    - Filled solid pink/lavender circle = active/current field
  - In the screenshot, EMAIL has the filled dot (active)
  - Input styling: pill shape, very light grey background, uppercase placeholder
    text, no visible border, dark grey text.

- **Action button**: "CONTINUE →" — pill-shaped rounded rectangle, soft light
  blue periwinkle background, white uppercase text with right-arrow (→) to
  indicate progression. Subtle soft shadow. Left-aligned below form fields.

- **Typography**: Clean, modern geometric sans-serif (Montserrat-like), all
  uppercase, consistent medium weight. Decorative header uses thick, rounded,
  bubbly display font (Bubblegum Sans or similar).

- **Overall aesthetic**: Minimalist, soft, and approachable. Designed for
  user/team onboarding — feels non-intimidating and warm. Key distinguishing
  traits: soft rounded geometry, pastel gradient, clear multi-step signaling,
  personalization prompt (profile picture), focused field indicator.

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`): all are
jQuery-Steps skeletons differing per member in layout, color scheme, and
field inventory. Runic (wizard-6) is the 6th member — a centered-card layout
with pastel gradient background and a 3-step user onboarding process with
profile picture upload. Sibling preps: Divine (wizard-5, split-screen, peach
bg, 4-step billing). Runic's tokens are distinct — never assume tokens from
siblings.

### Design tokens (from screenshot — preview 404)

| Token                  | Value                                       | Notes                                           |
| ---------------------- | ------------------------------------------- | ----------------------------------------------- |
| Page bg                | Pastel gradient (blue → lavender → pink)    | Full viewport, soft vertical gradient           |
| Card bg                | `#ffffff` (pure white)                      | Centered form card with drop shadow             |
| Accent / CTA           | `#a8b5f0` (light blue periwinkle)           | "CONTINUE →" button background                  |
| Active step dot        | `#f0a8d0` (pink/lavender)                  | Filled circle for active field/step             |
| Step dot inactive      | `#333333` (dark grey outline)              | Outlined circle for pending steps               |
| Text primary           | `#333333` (dark grey)                       | Form labels, field text                         |
| Input background       | `#f5f5f5` (very light grey)                 | Pill-shaped input bg, no border                 |
| Profile pic border     | `#d4b8e8` (lavender)                        | Circular avatar border                          |
| Font family (form)     | `Montserrat, sans-serif`                    | Google Fonts, uppercase, medium weight          |
| Font family (display)  | `Bubblegum Sans, sans-serif` (or similar)   | Decorative header, bubbly display               |
| Border radius (card)   | `24px`                                      | Large soft rounded corners                      |
| Border radius (inputs) | `50px` (pill)                               | Fully rounded pill shapes                       |
| Drop shadow (card)     | `0 8px 32px rgba(0,0,0,0.10)` (approx)     | Subtle depth from gradient background           |

### Picsum placeholder plan

**Profile picture only.** The circular avatar placeholder needs a deterministic
placeholder: `https://picsum.photos/seed/runic-avatar/200/200`. All other
imagery is just the pastel gradient background (no copied assets needed —
CSS gradient handles it). The decorative header text is pure HTML/CSS.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/runic` from the simplest existing app
       (`cp -r apps/<simplest> apps/runic`), rename package to
       `@free-react-templates/runic`, add Montserrat + Bubblegum Sans
       Google Font `<link>`s in index.html, set `public/CNAME` =
       `runic.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): 3-step onboarding wizard; profile picture
       upload; dot-based step indicators; active field dot indicator;
       pill-shaped inputs; "CONTINUE →" button; required field validation;
       responsive layout; Footer (Component Dock credit).
3. [ ] Layout shell: full-viewport pastel gradient background (blue →
       lavender → pink), centered white card with `24px` border radius
       and drop shadow.
4. [ ] Decorative header: "TELL US ABOUT YOURS" in large semi-transparent
       Bubblegum Sans font above the card.
5. [ ] Profile picture section: circular avatar placeholder with lavender
       border, "CHOOSE PICTURE" link with camera icon below.
6. [ ] Form fields: pill-shaped inputs for First Name, Last Name, Team
       Name, Email, Create a Password. Uppercase placeholder text, light
       grey background, no border.
7. [ ] Active field indicator: small dot to left of each field, filled
       pink/lavender for the focused field, outlined for others.
8. [ ] Step indicators: 3 dot circles below the card. First filled
       (active), remaining outlined. Update on step change.
9. [ ] "CONTINUE →" button: pill-shaped, periwinkle blue background,
       white text with right-arrow icon.
10. [ ] 3-step wizard logic: forward/back navigation, data preservation
       on back, validation on required fields, completion state on step 3.
11. [ ] Footer: minimal Component Dock credit linking
        https://www.componentdock.com/.
12. [ ] Run `npm run verify:app -- runic` (typecheck -> lint -> vitest
        100% -> build) and fix until green.
13. [ ] Open PR `feat/template-runic` -> merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (noting 404 fallback to screenshot),
        token list (pastel gradient bg, white card, periwinkle accent,
        Montserrat + Bubblegum Sans fonts, 3-step dot nav, pill inputs),
        and what differs (renamed "Runic", Google Fonts, lucide icons,
        preview unreachable — 404 — fallback to screenshot).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 874 `[x]` + surge
        URL (`https://runic.free.componentdock.com`), `npm run
        readme:status`, push.
