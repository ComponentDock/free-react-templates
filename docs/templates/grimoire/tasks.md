# Grimoire (ColorLib Wizard 21) — Tasks & Design Notes

> Prep stream output (stream 3). Implementer: branch `feat/template-grimoire`,
> app `apps/grimoire`, package `@free-react-templates/grimoire`, deploy
> `grimoire.free.componentdock.com`. Full requirements + Gherkin scenarios in
> `openspec/specs/template-grimoire/spec.md`.

## Design notes

- **Original:** ColorLib "Colorlib Wizard 21" — free multi-step account +
  payment + confirmation wizard (catalog blurb: "The best free account and
  payment details template with confirmation that you can quickly integrate
  into your application.").
- **Live preview URL 404s:** `https://preview.colorlib.com/theme/colorlib-wizard-21/`
  (also `/theme/bootstrap/colorlib-wizard-21/`). **Real demo (HTTP 200):**
  `https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html`
  (`<title>Wizard-v1</title>`). Token source: `css/style.css` (11.7 KB),
  behavior source: `js/main.js` (2.1 KB). This is the same hosting pattern as
  the sibling Colorlib Wizard 20 → Enchant prep — wizard demos live under
  `colorlib.com/etc/bwiz/`, never on preview.colorlib.com.
- **Screenshot** (`colorlib-free-wizard-21.jpg`, 1200×972) matches the live
  demo: purple→blue→peach mesh gradient background, white rounded card,
  3 step circles, bright-blue form block with darker fields, green arrow
  button. Image and DOM agree — no conflicts.
- **Recreation name:** Grimoire (magic/wizard theme naming, consistent with
  the sibling wizard preps; "Ember"-style clashes checked — no collision with
  `apps/`, `openspec/specs/`, or `docs/templates/`).

## Structure order (1:1 with the jquery-steps demo)

1. **Background:** full-bleed mesh gradient (source used a JPEG with
   `background-size: cover`; recreate in CSS — do NOT copy the image).
   Sampled gradient stops: top-left `#8e6ff1`, top-right `#b27cd0`, center
   `#e08f7e`, bottom-left `#f3e29c`, bottom-right `#e59d75`. A good CSS
   approximation:
   `linear-gradient(135deg, #8e6ff1 0%, #b27cd0 35%, #e5b17f 60%, #f3e779 85%, #db6480)`.
2. **Card** (`.wizard-v1-content`): white, max-width 851px, border-radius
   10px, box-shadow `0 8px 20px rgba(0,0,0,0.15)`, centered with flex; font
   Raleway.
3. **Progress bar** (`.steps`): 3 × 50px circles (User / CreditCard / Receipt
   icons from lucide-react). Inactive `#ccc`; current+done `#6eba2a`; current
   gets shadow `0 5px 18px rgba(0,0,0,0.2)`; 6px `#e5e5e5` connector bar
   between circles; "Step N" (`#666`, w400) + label (`#333`, w600) under each
   circle; 3px `#ccc` underline under the current step.
4. **Step 1 — Account Information:** content block `#359bfa` (radius 5px,
   padding ≈ 32px 115px 23px 75px → collapses to 75px at ≤1199px, 30px at
   ≤575px). Fields: Username* (full width) → Email Address* (full width,
   email pattern `[^@]+@[^@]+\.[a-zA-Z]{2,6}`) → Password* + Confirm
   Password* (side by side). Inputs: `#2f8be0`, radius 5px, padding 13px
   25px, white text 16px, placeholder `rgba(255,255,255,0.6)`. Labels white
   16px w500 above fields.
5. **Step 2 — Payment Information:** Card Type select (option list in spec) →
   Card Number + CVC side by side → Expiry Month + Expiry Year selects side
   by side. Selects styled like inputs + chevron indicator (source used a PNG
   sprite — use lucide `ChevronDown`); select options render white-surfaced
   with black text.
6. **Step 3 — Confirm Your Details:** heading "Confirm Details" + summary
   panel `#2f8be0` (radius 5px, padding 24px 26px 31px) with a semantic
   `<table>`: label cells `rgba(255,255,255,0.6)`, value cells `#fff`, 18px
   row spacing. Rows: Username, Email Address, Card Type, Card Number, CVC,
   Expiry Month, Expiry Year.
7. **Actions** (`.actions`, space-between): Previous = transparent, grey
   "Back" text, hidden (opacity 0 + disabled) on step 1; Next/Submit = 50px
   circle `#6eba2a` (hover `#5fa125`), shadow `0 3px 15px rgba(0,0,0,0.19)`,
   white `ArrowRight` icon.
8. **Success state:** source had no backend (`action="#"`, no onFinished) →
   show an in-page green success panel after the final submit (same decision
   as Enchant).

## Section-by-section fidelity notes

- **Progress bar:** jquery-steps animates a fade transition (500ms) between
  steps and re-renders the current step only. Recreate with Framer Motion
  fade or a CSS opacity transition; keep mounted state so values persist.
- **Validation:** source rules = username/email/password required,
  confirm == password; messages "Please provide a username" (grammar fixed),
  "Please provide an email", "Please provide a password", "Please enter the
  same password". Payment fields are NOT validated in the source — spec
  recommends marking them required via zod (repo convention) as a documented
  divergence; either way they must echo into the summary.
- **Copy typos fixed:** Infomation → Information (×2), Comfirm → Confirm (×2),
  "Please provide an username" → "Please provide a username". Placeholders:
  Username / Your Email / Password / Confirm Password /
  ex: 489050625008xxxx / xxx / Select Credit Card Type / Expiry Month /
  Expiry Year.
- **Responsive:** ≤1199px card padding 75px; ≤991px all columns stack
  full-width; ≤575px padding 30px + shorter connector bars (65px).
- **Assets:** no images, no font files — Raleway via Google Fonts `<link>`,
  icons from lucide-react, gradient in pure CSS. No ColorLib strings in
  `apps/*`. Footer: "Made with Component Dock" → https://www.componentdock.com/.

## Task checklist (implementation order)

- [ ] Scaffold app from simplest existing template (e.g. `apps/amber`);
      rename package, set CNAME/homepage, run `npm install` at root
- [ ] `src/index.css`: theme tokens (`--color-brand: #6eba2a`,
      `--color-brand-hover: #5fa125`, `--color-form: #359bfa`,
      `--color-field: #2f8be0`, surface/ink tokens), Raleway font link
- [ ] `Background.tsx` — mesh gradient + centered layout shell
- [ ] `ProgressSteps.tsx` — 3 circles + icons + connectors + labels,
      active/done state logic
- [ ] `AccountStep.tsx` — step 1 fields + zod validation + per-field errors
- [ ] `PaymentStep.tsx` — step 2 selects/inputs + chevrons
- [ ] `ConfirmStep.tsx` — summary table echoing all values
- [ ] `Wizard.tsx` — step state machine, fade transitions, Back/Next,
      Back hidden on step 1, submit → success panel
- [ ] `Footer.tsx` — Component Dock attribution
- [ ] Tests colocated per component; 100% coverage; `npm run spec:validate`
- [ ] PR: `feat: add Grimoire (ColorLib Wizard 21 recreation)` → merge
      immediately — description must cite source, real demo URL, tokens,
      and the preview-404 fallback note

## Reference files (fetched at prep time, /tmp/wizard21/)

- `preview.html` — 404 probe result
- `template-page.html` — catalog page (meta description confirms purpose)
- `demo.html` — live demo DOM (7.4 KB)
- `style.css` — all design tokens (11.7 KB)
- `main.js` — validation + steps wiring (2.1 KB)
- `bg.jpg` — background mesh gradient (sampled for CSS stops)
- `screenshot.png` — TEMPLATES.md screenshot converted for analysis
