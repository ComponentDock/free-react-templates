# Rune (ColorLib Wizard 22) — Tasks & Design Notes

> Prep stream output (stream 3). Implementer: branch `feat/template-rune`,
> app `apps/rune`, package `@free-react-templates/rune`, deploy
> `rune.free.componentdock.com`. Full requirements + Gherkin scenarios in
> `openspec/specs/template-rune/spec.md`.

## Design notes

- **Original:** ColorLib "Colorlib Wizard 22" — free multi-step travel-booking
  wizard (personal details → travel details → confirmation).
- **Live preview URL 404s:** `https://preview.colorlib.com/theme/colorlib-wizard-22/`
  (known wizard-family pattern — the demos live under
  `colorlib.com/etc/bwiz/`, never on preview.colorlib.com; do NOT re-probe the
  naive URL). **Real demo (HTTP 200):**
  `https://colorlib.com/etc/bwiz/colorlib-wizard-22/index.html`
  (`<title>Wizard-v2</title>`). Token source: `css/style.css` (9.0 KB),
  behavior source: `js/main.js` (1.3 KB).
- **Screenshot** (`colorlib-free-wizard-22.jpg`, 1200×972) matches the live
  demo: purple/blue → yellow/orange mesh gradient background, white rounded
  card, left Japan-street photo panel, "Form Wizard" heading, 3 step circles
  (1 blue + 2 grey), 2×2 bordered inputs, blue "Next Step" button. Image and
  DOM agree — no conflicts.
- **Recreation name:** Rune (magic/wizard theme naming, consistent with the
  sibling wizard preps — Conjure, Conjury, Banish, Dispel, Abjure, Bewitch,
  Enthrall, Spellbind, Beguile, Mesmerize, Incant, Stepwise, Enchant,
  Grimoire; no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/`).

## Structure order (1:1 with the jquery-steps demo)

1. **Background:** full-bleed mesh gradient (source used a JPEG,
   `images/wizard-v2-bg.jpg`, with `background-size: cover`; recreate in CSS —
   do NOT copy the image — it is the same gradient family as Grimoire).
   Sampled stops: top-left `#8778ef`, top-right `#c088d3`, center `#e08f7e`,
   bottom-left `#f3e29c`, bottom-right `#e69c77`. CSS approximation:
   `linear-gradient(135deg, #8778ef, #c088d3 35%, #e08f7e 60%, #f3e29c 85%, #e69c77)`.
2. **Card** (`.wizard-v2-content`): white, max-width 993px, border-radius
   10px, box-shadow `0 8px 20px rgba(0,0,0,0.15)`, margin 180px 0, flex row;
   font Muli. Outer corners rounded on the card; the photo panel gets its own
   left-side radius.
3. **Left photo panel** (`.wizard-image`): 66.61% of card width, cover photo.
   Source photo: Japan street scene (wooden buildings, stone street, umbrella
   figure). Use a picsum portrait image screened for a street/travel subject
   (verified travel/street IDs: 1036 Himalayan village, 1055 coastal village,
   1015 fjord; verify the chosen seed's subject with the pixel metric +
   browser before pinning it in code/tests).
4. **Header** (`.wizard-header`): h3 "Form Wizard" (#333, 36px, w800) + p
   "Nostrud exercitation commodo consequat." (#666, 16px, w600, margin 6px 0
   26px).
5. **Step progress** (`.steps`): 3 × 45px circles with white numbers
   (18px w600); inactive `#ccc`; current+done `#56a3f2`; 30px × 2px `#e5e5e5`
   connector after each circle except the last; 30px gap. Circles are
   CLICKABLE jump links (`enableAllSteps: true` in source) with accessible
   names ("Step 1", "Step 2", "Step 3").
6. **Step 1 — Personal details:** two `form-row`s of 50/50 flex: First Name |
   Last Name; Phone Number | Email. Inputs: 1px `#e5e5e5` border, radius 5px,
   padding 14px 15px, 16px #333 w600, placeholder #666 16px. NO labels in the
   source (associate via aria-label for a11y in the React version).
7. **Step 2 — Travel details:** Travel Location select (full-width
   form-holder-2; options: Choose A Location disabled / United States /
   United Kingdom / Viet Nam) + chevron; Date input (datepicker, placeholder
   "15 / Jan / 2018", chevron trigger at right) + Time select (7:00am -
   18:00pm selected / 9:00am - 21:00pm / 10:00am - 22:00pm / 12:00am -
   24:00pm) side by side. Selects: transparent bg, #666 text, chevron
   absolutely positioned (right 6–12%, top ~27%, 19px).
8. **Step 3 — Confirmation:** `.table-responsive` wrapper (1px #e5e5e5
   border, radius 5px, padding 22px 26px 16px, margin-bottom 35px) with a
   semantic `<table>`: th #666 15px w600, td #333 18px w700, 18px row
   spacing. Rows: Full Name / Phone / Email / Travel Location / Date / Time.
   Seed defaults (source demo): Benjamin Harrison, +1 888-999-2222, example
   email, Tokyo Japan, 15 Jan, 2018, 7:00am - 18:00pm.
9. **Actions** (`.actions`): square 160×50px buttons, radius 5px, `#56a3f2`
   (hover `#4582bf`), white 16px w600; label "Next Step" (→ "Submit" on the
   last step). Previous is `display:none` in the source CSS (`li:first-child`).
10. **Success state:** source had no backend (`action="#"`, no onFinished) →
    show an in-page success panel after the final submit (same decision as
    Enchant/Grimoire).

## Section-by-section fidelity notes

- **Navigation model:** jquery-steps `transitionEffect: "fade"` (500ms),
  `autoFocus: true`, `enableAllSteps: true`. Recreate with a React step
  state machine + CSS opacity fade; keep all step content mounted so values
  persist across jumps.
- **Summary copy:** `onStepChanging` copies field values into the summary
  cells on EVERY step change (even moving 2→1→3). In React, simply derive the
  summary from live state — no copy-on-change needed; values always current.
- **Validation:** source has NONE (no jquery.validate; `onStepChanging`
  returns true unconditionally; empty fields flow to the summary). Spec
  recommends zod validation (required + email format) as a documented
  divergence per the repo form convention; the flow must still work with all
  fields filled.
- **Date picker:** source uses jQuery UI (dateFormat `MM - DD - yy`, showOn
  both, chevron trigger). React options: styled native `<input type="date">`
  with the chevron trigger button (simplest + accessible), or a custom
  calendar popover; either must be keyboard-accessible and echo the picked
  date into the summary ("15 Jan, 2018" display style).
- **Copy:** keep the source placeholders and options verbatim (they are
  clean; no typos to fix). Email link in the source summary is Cloudflare
  mailscrambled — render a plain email value instead.
- **Responsive:** ≤1199px → form padding 40px (card margin 180px 20px);
  ≤991px → rows stack column, holders 100% width; ≤575px → form padding
  40px 20px, photo panel hidden, summary rows block-stack (th on its own
  line above td).
- **Assets:** no images, no font files — Muli via Google Fonts `<link>`
  (`css2?family=Muli:wght@300;400;600;800&display=swap`, HTTP 200 verified),
  icons from lucide-react (ChevronDown etc.), gradient in pure CSS. No
  ColorLib strings in `apps/*`. Footer: "Made with Component Dock" →
  https://www.componentdock.com/.

## Task checklist (implementation order)

- [ ] Scaffold app from the simplest existing template (e.g. `apps/amber`);
      rename package, set CNAME/homepage, run `npm install` at root
- [ ] `src/index.css`: theme tokens (`--color-brand: #56a3f2`,
      `--color-brand-hover: #4582bf`, `--color-circle: #ccc`,
      `--color-border: #e5e5e5`, surface/ink tokens), Muli font link
- [ ] `Background.tsx` — mesh gradient + centered layout shell
- [ ] `PhotoPanel.tsx` — left travel photo panel (hidden ≤575px) — verify the
      picsum seed subject before pinning
- [ ] `ProgressSteps.tsx` — 3 numbered circles + connectors + clickable jump
      navigation + active/done state logic
- [ ] `PersonalStep.tsx` — step 1 inputs + zod validation + per-field errors
- [ ] `TravelStep.tsx` — location/time selects + chevrons + date picker
- [ ] `ConfirmStep.tsx` — summary table echoing live values
- [ ] `Wizard.tsx` — step state machine, fade transitions, Next/Submit (label
      swap), Previous hidden, submit → success panel
- [ ] `Footer.tsx` — Component Dock attribution
- [ ] Tests colocated per component; 100% coverage; `npm run spec:validate`
- [ ] PR: `feat: add Rune (ColorLib Wizard 22 recreation)` → merge
      immediately — description must cite source, real demo URL, tokens, and
      the preview-404 fallback note

## Reference files (fetched at prep time, /tmp/wizard22/)

- `w22.html` — live demo DOM (5.3 KB, `<title>Wizard-v2</title>`)
- `style.css` — all design tokens (9.0 KB, all 374 lines parsed)
- `main.js` — steps + datepicker wiring (1.3 KB)
- `muli.css` — Muli @font-face weights (400/600/800 + italics)
- `bg.jpg` — background mesh gradient (sampled for CSS stops)
- `panel.jpg` — left-panel street photo (347×492, sampled)
- screenshot analysis — vision pass on `colorlib-free-wizard-22.jpg`
