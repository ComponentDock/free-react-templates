# Mesmerize (ColorLib Wizard 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-mesmerize`. Recreation name: **Mesmerize** (NEW
> name — the ColorLib source keeps its name "Colorlib Wizard 17").

## Source mapping

- **ColorLib item:** "Colorlib Wizard 17" (TEMPLATES.md line 854; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-17/` slug appears exactly ONCE in
  TEMPLATES.md (verified `grep -c` = 1 — no dup rows to reconcile).
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-17/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch +
  browser):**
  **`https://colorlib.com/etc/bwiz/colorlib-wizard-17/index.html`**
  (HTTP 200, 4,220 bytes, 98 lines, `<title>Sign Up Form</title>`).
  **The naive `https://preview.colorlib.com/theme/colorlib-wizard-17/`
  returns 404** — the whole 30-member wizard family lives under
  `colorlib.com/etc/bwiz/colorlib-wizard-<n>/index.html`. Do not redo
  this lookup.
- **Stylesheets:** `css/style.css` (15,961 B, 433 lines — ALL custom CSS,
  SCSS-compiled) + zmdi icon font (eye `\f2c9` / eye-off `\f2cb` →
  lucide Eye/EyeOff, do NOT ship). Fonts: local Poppins 300–900, Muli
  400/800, Montserrat 300–900 @font-face → **Google Fonts `<link>`:
  Poppins 400;500;700, Montserrat 700;800, Muli 400;800** (others loaded
  by the CSS are unused by the demo).
- **Scripts:** jQuery, jquery.validate + additional-methods (LOADED but
  NEVER initialized — no gating), jquery.steps (fade, labels
  Previous/Next/Finish, empty h3 titles → step nav hidden),
  `js/main.js` (815 B — steps init + password toggle handler +
  `alert('Sumited')` on finish).

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-17.jpg`, 1200×972 AVIF) + live page

Browsed visually in the browser 2026-08-18 (live page rendered client-side
by jQuery Steps; screenshot matches). Visual: split-screen layout — LEFT: a
stark WHITE panel with "AuCreative" (purple "Au" + dark "Creative"),
bold headline "Sign up now to try undraw 30 days for free", smaller grey
subtext, and a FLAT VECTOR illustration of a person (blue shirt) with
crossed arms next to a large tablet displaying a dashboard with blue and
purple bar charts. RIGHT: a solid LAVENDER panel with a small purple
uppercase "STEP 1 / 4" top right, a minimalist input center-stage (grey
floating label above a thin grey underline — no box border), and a solid
PURPLE "Next" button (white text) bottom right — a white "Previous"
appears on later steps. The dark `#222` page background frames the card.
Aesthetic: modern, minimal, airy — a SaaS-style split onboarding screen;
the family's periwinkle counterpart to Beguile's (w16) teal. **Exactly
ONE illustration (the left-panel vector) — everything else is CSS + the
zmdi icon font.** No navbar, no footer content in the source.

### Live-computed confirmations (fetch + browser, 2026-08-18)

- body: `#222`, Poppins 13px/1.6, `#222`, 400; `.main` padding 50px 0.
- `.container`: 1400px, `margin: 0 auto`, bg `#efeeff`; ≤992px
  `calc(100% - 40px)`.
- `.signup-content`: flex (side-by-side panels).
- `.signup-desc` (LEFT): 495px, `#fff`; content padding 45px 55px; h2
  Muli 800 27px `#222` padding-bottom 65px, span `#7c7cdd`; `p.title`
  bold padding-bottom 7px; `p.desc` `#999` line-height 1.92
  padding-bottom 330px; `.signup-img` padding-bottom 43px.
- `.signup-form-conent` (RIGHT): 905px; `.signup-form` padding 55px 110px.
- Inputs: block, width 100%, border none + bottom 1px `#bfbfbf`, Poppins
  bold 24px, padding 30px 0 5px, transparent bg, focus no
  outline/shadow; label absolute left 0 top 25px 24px bold `#888`; focus
  or `:valid` → top −7px, 14px, 500.
- `.field-icon`: 24px, float right, margin-top −37px, z-index 2.
- `.step-current`: absolute right 0 top 0, Montserrat 800 uppercase
  `#7c7cdd` ("STEP X / 4").
- `.steps`: `display: none` (NO step tabs rendered).
- `.content`: padding 340px 0 315px 0; `.content h3` display none.
- Buttons 140×50; `.actions` flex-end, li margin-left 20px; Next/Finish
  `#7c7cdd` + white, Montserrat bold 13px; Previous `#fff` + `#999`;
  `.disabled` display none (step 1). No border-radius in source CSS;
  rendered button shows slight rounding (~4px) — match visually.
- Steps: `transitionEffect: fade`; h3 titles EMPTY; `titleTemplate`.
- Breakpoints: ≤992 container fluid + form padding 55px 30px + left panel
  465px + img 100%; ≤768 panels stack column full width; ≤480 action
  buttons 100px.
- Password inputs: **type=text in source HTML** (visible by default);
  toggle flips type password↔text + zmdi-eye ↔ zmdi-eye-off.

## Build order (implementation outline)

1. **Scaffold + tokens:** copy the simplest existing app (`apps/<name>`),
   rename package to `@free-react-templates/mesmerize`, CNAME/homepage
   `https://mesmerize.free.componentdock.com`, `npm install` at root so
   the lockfile registers the workspace. `index.css` `@theme` tokens from
   the spec's Design tokens table (`--color-accent #7c7cdd`, page/panel/
   card/ink/muted/label/line); Google Fonts Poppins 400;500;700 +
   Montserrat 700;800 + Muli 400;800 in `index.html`.
2. **Components (suggested files under `src/components/`):**
   - `Wizard.tsx` — the step engine (current step state, fade
     transition, step registry, Previous/Next/Finish actions). Labelled
     region + `aria-current` per step. NO validation gating.
   - `BrandPanel.tsx` — left white panel: logo ("Mesmerize" with first
     3 chars accented), headline (paraphrased, no "unDraw" reference),
     subtext, and the flat vector illustration (inline SVG, below).
   - `SignupIllustration.tsx` — hand-rolled flat SVG illustration in
     the source's style: person + tablet with a bar-chart dashboard in
     blues/purples (source is vector; a photo placeholder would break
     the flat aesthetic).
   - `FloatingField.tsx` — bottom-border-only input + floating label
     (float on focus / non-empty value, stays floated after typing,
     returns when emptied+blurred) — reusable for all four steps.
   - `PasswordField.tsx` — FloatingField + eye toggle button (lucide
     Eye/EyeOff, `aria-label` "Show/Hide password"), starts MASKED.
   - `StepIndicator.tsx` — "STEP X / 4" (Montserrat 800 uppercase,
     accent color, top right of the form panel).
   - `Success.tsx` — inline confirmation replacing the form on finish.
   - `Footer.tsx` — Component Dock credit link.
3. **State:** keep typed values per step (lift to Wizard or keep forms
   mounted with `hidden`); when stepping back, values persist (floating
   labels must reflect non-empty values on return).
4. **Shell:** dark `#222` body, `.main` 50px padding, 1400px `#efeeff`
   container, flex two panels, responsive stacking ≤768.

## Section-by-section fidelity notes

- **Logo:** source splits "Au"+"Creative" (span accent). Recreation
  splits the NEW name: "Mes" (accent) + "merize" (`#222`). Keep Muli 800
  27px.
- **Copy:** source headline/subtext are unDraw-style marketing copy
  ("try undraw 30 days for free", "MIT licensed illustrations...").
  Paraphrase to the same KIND (headline + one-line value prop) without
  the brand reference — e.g. "Sign up now to try our illustration
  library 30 days for free" / "Beautiful, free illustrations for every
  project you can imagine and create". Document in the PR.
- **Buttons:** "Previous" white/grey + "Next" purple; on step 4 the
  right button reads "Finish" (source labels). Previous hidden on step 1.
- **No gating:** do NOT add validation — the source loads jquery.validate
  but never initializes it; verified live that Next advances with empty
  required fields. Keep `required` OFF or inert; no error states.
- **Password visibility:** source starts VISIBLE (type=text, toggle
  masks). Recreation starts MASKED (type=password) with the same toggle —
  documented usability deviation.
- **Illustration:** source PNG is a flat vector scene (person + tablet
  dashboard, blue/purple bars). Recreate as an inline SVG component —
  do NOT use a picsum photo (breaks the flat aesthetic). Lucide can
  compose pieces (Monitor, BarChart3, Users), or hand-draw the scene.
- **Step titles:** h3s are EMPTY in the source and the nav is hidden —
  do not invent step names; the only indicator is "STEP X / 4".
- **Finish:** inline success message, NO alert, NO fake network.
- **Focus rings:** source removes outlines; recreation adds visible
  focus-visible rings (a11y improvement, documented).

## Picsum plan

NONE — this template has no photographic imagery. The only image is the
left-panel flat VECTOR illustration, recreated as inline SVG. (Family
note: Beguile/w16 needed a photo-bg plan; Mesmerize does not.)
