# Enchant (ColorLib Wizard 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-enchant`.

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Wizard 20" — a three-step sign-up wizard
  form (source: https://colorlib.com/wp/template/colorlib-wizard-20/).
  TEMPLATES.md line 858, single copy (`grep -c
'wp/template/colorlib-wizard-20/'` = 1).
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
  (HTTP 200, ~3.7 KB HTML, `<title>Sign Up Form</title>`). **The
  preview.colorlib.com URL is 404 for this template** — the wizard demos live
  under colorlib.com/etc/bwiz/. Stylesheet `css/style.css` (~17.6 KB) parsed
  for tokens; `js/main.js` (~0.6 KB) shows jquery-steps init with
  `transitionEffect: fade`, titleTemplate `0#index#` (01/02/03), labels
  Previous/Next/Submit, `onFinished: alert('Sumited')` — no validation rules
  configured. Stack is jQuery + jquery-steps — recreate all wizard behavior
  client-side in React (no jQuery).
- **Screenshot:** `colorlib-free-wizard-20.jpg` (1200×972, verified in the
  browser): full-screen slate-blue→purple diagonal gradient; centered white
  rounded card; three circles above the card (01 active gradient, 02/03
  grey) with connector lines; "CREATE YOUR ACCOUNT" bold uppercase heading;
  three bordered inputs; gradient "Next" button at the card bottom. Matches
  the live demo.
- **New name:** Enchant — single lowercase word on the wizard/magic theme of
  the sibling wizard preps (Conjure, Conjury, Banish, Dispel, Abjure,
  Bewitch, Enthrall, Spellbind, Beguile, Mesmerize, Incant, Stepwise). NOT
  "colorlib-wizard-20" — never reuse the source name.

## Structure (1:1, section order — from the live DOM)

1. **Shell** — full-page `#2b5876 → #4e4376` gradient (deep slate-blue →
   deep purple), centered white card (330px wide, 10px radius, shadow
   `0 5px 9.5px rgba(0,0,0,.1)`), generous vertical padding (~270px source →
   `py-24 md:py-40`).
2. **Progress bar (above the card)** — 3 circles (44px, 3px white border,
   50% radius) numbered 01/02/03 with 12px bold white labels
   (Account Setup / Social Profiles / Personal Details); active circle =
   brand gradient + 16px number; inactive = `#ebebeb` fill, `#999999`
   number; white 8px connector line behind the circles. Circles/labels
   clickable to jump to a reached step (jquery-steps disables future steps
   until reached).
3. **Step 1 — Account Setup** — heading "Create your account" (fix source
   typo "Creat") + stacked inputs: Email ("Eg: aucreative@gmail.com"),
   Password, Confirm Password.
4. **Step 2 — Social Profiles** — heading "Social profiles" + Twitter,
   Facebook, Google Plus inputs.
5. **Step 3 — Personal Details** — heading "Personal Details" + Your name,
   Phone, Address inputs.
6. **Action bar** — Previous + Next/Submit, both identical brand-gradient
   pills (120×40, 5px radius, hover `#090909`), centered at the card bottom;
   Previous hidden on step 1; primary reads "Next" then "Submit" on the last
   step → in-page success state (source shows `alert('Sumited')`).
   No validation in the source — Next advances unconditionally.

## Implementation tasks (for the implementer)

- [ ] Scaffold `apps/enchant` (copy simplest existing app; package
      `@free-react-templates/enchant`; `public/CNAME` =
      `enchant.free.componentdock.com`; homepage
      `https://enchant.free.componentdock.com`; run `npm install` at root so
      the lockfile registers the workspace).
- [ ] `index.html`: Poppins Google Fonts link; title "Enchant".
- [ ] `src/index.css`: `@theme` tokens — brand gradient stops (`#a1c4fd`,
      `#2b5876`, `#4e4376`), `--font-sans: "Poppins"`; gradient utility
      classes for background, active circle, buttons, focus border.
- [ ] Components: - `Wizard` — owns current step state, navigation (next/prev), success
      state after final submit; renders progress bar + step content +
      action bar. - `ProgressBar` — 3 circles with numbers/labels + connector line,
      active/completed states, `aria-current`. - `SetupStep` — heading + Email/Password/Confirm Password inputs. - `SocialsStep` — heading + Twitter/Facebook/Google Plus inputs. - `DetailsStep` — heading + Your name/Phone/Address inputs. - Inputs styled per tokens (40px, 1px `#ebebeb`, 5px radius, gradient
      border on focus, placeholder `#999`).
- [ ] No page validation (matches source demo); Next advances unconditionally,
      values preserved when navigating back.
- [ ] Footer line linking https://www.componentdock.com/ ("Component Dock").
- [ ] Accessible names: the source has no visible labels — use visible or
      aria-labels matching each placeholder's purpose.
- [ ] Icons (if needed): lucide-react — no material icon font.
- [ ] Tests (Vitest + Testing Library, 100% coverage): step navigation,
      previous hidden on step 1, value preservation, success state,
      accessibility queries by label.
- [ ] Per-app gate: `npm run verify:app enchant` (or `scripts/verify-app.sh
  enchant`).
- [ ] PR `feat/template-enchant` → merge immediately; no ColorLib strings in
      app code; provenance only in spec/TEMPLATES.md/PR.
