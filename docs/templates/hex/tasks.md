# Hex (ColorLib Wizard 23) — Tasks & Design Notes

> Prep stream output (stream 3). Implementer: branch `feat/template-hex`,
> app `apps/hex`, package `@free-react-templates/hex`, deploy
> `hex.free.componentdock.com`. Full requirements + Gherkin scenarios in
> `openspec/specs/template-hex/spec.md`.

## Design notes

- **Original:** ColorLib "Colorlib Wizard 23" — free three-step account-signup
  wizard (About → Personal → Payment).
- **Live preview URL 404s:** `https://preview.colorlib.com/theme/colorlib-wizard-23/`
  (known wizard-family pattern — the demos live under
  `colorlib.com/etc/bwiz/`, never on preview.colorlib.com; do NOT re-probe the
  naive URL). **Real demo (HTTP 200):**
  `https://colorlib.com/etc/bwiz/colorlib-wizard-23/index.html`
  (`<title>Wizard-v3</title>`). Token source: `css/style.css` (14.9 KB —
  shared wizard-family CSS with unused rules for h4/#checkbox/pay-1-label
  variants; ignore those), behavior source: `js/main.js` (1.3 KB).
- **Screenshot** (`colorlib-free-wizard-23.jpg`, 1200×972) matches the live
  demo: pink/magenta → mint/cyan mesh gradient background, white rounded card,
  "Sign Up Your User Account" heading, 3 circular icon step indicators (1
  cyan + 2 grey, About/Personal/Payment), underlined floating-label inputs,
  cyan "Next Step" button. Note: one vision pass hallucinated a 4th
  "Confirm" step — the demo DOM is authoritative: exactly 3 steps, and the
  summary lives INSIDE step 3 below the payment fields. No conflicts.
- **Recreation name:** Hex (magic/wizard theme naming, consistent with the
  sibling wizard preps — Conjure, Conjury, Banish, Dispel, Abjure, Bewitch,
  Enthrall, Spellbind, Beguile, Mesmerize, Incant, Stepwise, Enchant,
  Grimoire, Rune; "hex" is a spell; no collision with `apps/`,
  `openspec/specs/`, or `docs/templates/`).

## Structure order (1:1 with the jquery-steps demo)

1. **Background:** full-bleed mesh gradient (source used a JPEG,
   `images/wizard-v3.jpg` 1400×1042, `background-size: cover`; recreate in
   CSS — do NOT copy the image). Sampled stops: top-left `#fc8fa2`, top-mid
   `#efcbfb`, top-right `#9ae7f9`, center `#edaaf1`, mid-left `#ff4f98`,
   mid-right `#54f5e6`, bottom-left `#39b6f8`, bottom-mid `#19d9ee`,
   bottom-right `#00f3dd`. CSS approximation:
   `linear-gradient(135deg, #fc8fa2, #edaaf1 35%, #54f5e6 70%, #00f3dd)`.
   Different family from wizard-22 (Rune: purple→yellow) — this one is
   pink→cyan and matches the cyan brand.
2. **Card** (`.wizard-v3-content`): white, width 780px (90% ≤575px),
   border-radius 10px, box-shadow `0 8px 20px rgba(0,0,0,0.15)`, margin
   110px 0 (180px 20px ≤1199px); font Roboto. Single full-width column — NO
   left photo panel (that was wizard-22's layout).
3. **Header** (`.wizard-header`): h3 "Sign Up Your User Account" (#333, 32px,
   w700, padding 13px 0 10px) + p "Fill all form field to go next step" (fix
   grammar → "Fill all form fields to go to the next step"; #666, 18px,
   w400). Header padding 40px 0 20px / 40px 20px 20px ≤575px.
4. **Step indicator** (`.steps`): 3 items, ul padding-left 108px (0 ≤991px),
   margin-bottom 33px. Circles 60px radius 50% (40px + 20px icon ≤575px):
   inactive `#ccc` white icon, done/current `#24c1e8`; icons User / Lock /
   CreditCard (lucide; source zmdi-account/lock/card). Connectors 108×2px
   `#e5e5e5` pseudo-elements before each circle except the first and after
   the last; the connector leading INTO a done circle turns `#24c1e8`. Labels
   below circles: "About" / "Personal" / "Payment", #999 18px w400 (12px
   ≤575px), done → #333. Circles are CLICKABLE jump links (enableAllSteps)
   with accessible names ("Step 1: About").
5. **Content panel** (`.form-register .content`): margin 0 20px, shadow
   `0 3px 10px rgba(0,0,0,0.15)`, radius 5px, inner padding 35px 55px 55px
   (35px 30px 60px ≤575px). Section h3: 22px w700 #333 (padding-bottom 18px;
   13px for step 1; 5px for step 3).
6. **Step 1 — About:** "Account Information:"; four full-width floating-label
   inputs, each `label.form-row-inner` wrapping input + `.label` span +
   `.border` span: Email Address, Username, Password (type=password), Confirm
   Password (source typo "Comfirm Password" fixed). Floating-label style:
   transparent box, bottom border 2px `#e5e5e5`, on focus/valid → `#24c1e8`
   - label color `#24c1e8`; input text 18px w700 #333; label 16px w400 #666.
     Source `.border` span is green `#6bc734` (typing accent) — optional.
7. **Step 2 — Personal:** "Personal Information:"; First Name + Last Name
   side by side (50/50); Gender* radios (Male checked / Female, plain browser
   radios in source); Date of Birth* — Day/Month/Year selects (Day 16…19,
   Month Feb…May, Year 2013…2017, disabled placeholder options), 17.5% width
   each + 20px gap (stacked 100% ≤575px), chevron via lucide ChevronDown,
   focus underline cyan; Phone Number + Address full-width floating-label
   inputs (Address uses form-holder-1).
8. **Step 3 — Payment:** "Payment Information:"; payment-method boxes
   (190×95px, 1px #e5e5e5 border, icon on top + label: Credit Card with
   CreditCard icon, checked by default; Paypal with Wallet icon; selected →
   no border + shadow `0 3px 10px rgba(0,0,0,0.15)`; radios hidden, label
   clickable); Holder Name (full width); Card Number + CVC side by side;
   Expiry Date — Month/Year selects (same option lists as DOB); then the
   **summary table** (fullname/email/phone/user/gender/address rows echoed
   live, Card Type static "Credit Card"; th #666 16px 30% width, td #333
   16px, 1px #e5e5e5 top row borders).
9. **Actions** (`.actions`): flex row, padding 0 20px, margin 30px 0;
   Previous (grey #999 → hover #666, margin-left 60.9% desktop / 0 ≤991px) +
   Next Step→Submit (cyan #24c1e8 → hover #1d97b5); buttons 140×45px (120px
   ≤575px), radius 3px, white 16px text.
10. **Success state:** source form action="#" with no onFinished handler —
    recreate as an in-page success panel replacing the card content (same
    precedent as Enchant/Grimoire/Rune).

## Known divergences (document in the PR)

- Typo fixes: "Comfirm Password" → "Confirm Password"; subtitle grammar.
- Source has ZERO validation (onStepChanging returns true always) — add zod
  per-field validation per repo convention (required, email format, password
  ≥ 8 chars, confirm match, card/CVC format).
- Datepicker wired in main.js targets a select that doesn't exist — DOB is
  plain selects; no calendar picker needed.
- Payment card icons are PNGs in source — use lucide CreditCard/Wallet.
- Background JPEG → pure CSS gradient; Roboto TTF files → Google Fonts link.
- Submit → in-page success state.

## Task checklist (implementation order)

- [ ] Scaffold app from the simplest existing template (e.g. `apps/amber`);
      rename package, set CNAME/homepage, run `npm install` at root
- [ ] `src/index.css`: theme tokens (`--color-brand: #24c1e8`,
      `--color-brand-hover: #1d97b5`, `--color-circle: #ccc`,
      `--color-border: #e5e5e5`, surface/ink tokens), Roboto font link
- [ ] `Background.tsx` — mesh gradient + centered layout shell
- [ ] `Header.tsx` — heading + subtitle
- [ ] `ProgressSteps.tsx` — 3 icon circles + connectors + clickable jump
      navigation + active/done state logic
- [ ] `FloatingInput.tsx` — reusable floating-label input (label lift on
      focus/filled, cyan underline, error state)
- [ ] `AboutStep.tsx` — step 1 fields + zod validation + per-field errors
- [ ] `PersonalStep.tsx` — names, gender radios, DOB selects, phone, address
- [ ] `PaymentStep.tsx` — payment boxes, holder/card/cvc, expiry selects,
      live summary table
- [ ] `Wizard.tsx` — step state machine, fade transitions, Previous + Next/
      Submit label swap, submit → success panel
- [ ] `Footer.tsx` — Component Dock attribution
- [ ] Tests colocated per component; 100% coverage; `npm run spec:validate`
- [ ] PR: `feat: add Hex (ColorLib Wizard 23 recreation)` → merge
      immediately — description must cite source, real demo URL, tokens, and
      the preview-404 fallback note

## Reference files (fetched at prep time, /tmp/prep-w23/)

- `demo.html` — live demo DOM (10.9 KB, `<title>Wizard-v3</title>`)
- `style.css` — all design tokens (14.9 KB, parsed for tokens + media queries)
- `main.js` — steps + (dead) datepicker wiring (1.3 KB)
- `roboto.css` — Roboto @font-face (local TTFs; use Google Fonts 400/700)
- `bg.jpg` — background mesh gradient (1400×1042, sampled for CSS stops)
- screenshot analysis — vision pass on `colorlib-free-wizard-23.jpg`
