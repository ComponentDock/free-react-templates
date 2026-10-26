# Proofmark — task outline

Recreation of the ColorLib **Alert V07** design (`alert-07`) at `apps/proofmark`. Spec is the authority:
`openspec/specs/template-proofmark/spec.md`. Design notes: `docs/templates/proofmark/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-07/` (the slug-only `theme/alert-07/`
and `theme/bb/alert-07/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work
ships.

> This is **one card with a form and an error summary**, not a page: no nav, no hero, no bands, **0 images**,
> 4 form controls, 1 submit button, 1 dialog, and the whole script is **3,809 B** of vanilla JS that has to
> become a derived-state form.
>
> The risk is not a missing section — it is the six things a port flattens: the card is **`content-box`**
> (`max-width: 560` = **640 outer**, exactly `vw − 32` below 658, and it keeps *growing* with the padding up
> to 640 at 800); a failing field is **20 px indented behind a 4 px red rule** (inner width 560 → 540), which
> is real layout, not a colour; the **summary must be arithmetic** and the reference's is stale the moment
> you correct a field; the **success banner must not survive an edit**; the **focus ring is 1.64 : 1** and
> needs an ink component; and there is **exactly one motion rule** in the whole sheet.
>
> Five numbers decide fidelity: card **640 × 929.73** at (400, 72); summary **160.69**; form **515.25**;
> rows **80 / 108.5 / 136.25 / 52.5**; button **237 × 50**.
>
> The reference's defects are **not** to be reproduced: a summary that keeps "There are 3 problems" after
> the email is fixed, a banner that stays after an edit, `role="alert"` on content present at load,
> `role="status"` + `.focus()` double-announcing, a 1.64 : 1 amber focus ring, a dead `#house-rules`
> fragment, dead `.cl-icon`, a README advertising an `images/` directory that does not exist, and a
> screenshot that is a macOS browser mock-up.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/proofmark`; package `@free-react-templates/proofmark`
- [ ] `public/CNAME` = `proofmark.free.componentdock.com`; `"homepage"` = `https://proofmark.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace (`grep -c free-react-templates/proofmark package-lock.json` ≥ 1)
- [ ] Public Sans via one `<link>`: `https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&display=swap`
- [ ] `@theme` tokens: `ink #1b1d1f`, `muted #555b61`, `error #c0182e`, `error-hover #9d0f22`,
      `error-wash #fff5f6`, `focus #ffbf47`, `brand #1f5c4a`, `brand-hover #17493a`,
      `brand-press #0f3328`, `brand-ink #123a2f`, `brand-wash #e9f4ef`, `paper #fff`,
      `ground #f3f1ec`, `hairline #e0ddd4`

## 2. Static composition (tests first)

- [ ] `<main>` wrapper: flex centre, `min-h-screen`, `padding: clamp(24px,6vw,72px) 16px`, ground `#f3f1ec`
- [ ] card `<section aria-labelledby>`: `w-full max-w-[560px]`, **`box-sizing: content-box`**,
      `p-[clamp(22px,5vw,40px)]`, radius 6, white, the two-part shadow
- [ ] `CardHeader`: step line (`14/600` muted, `·` separator, `mb-1.5`), `h1`
      (`clamp(26px,5vw,32px)/800`, `tracking-[-.02em]`, `leading-[1.15]`), intro (`16/400` muted, `my-2.5 mb-6`)
- [ ] `ErrorSummary`: 3 px `#c0182e` border, `#fff5f6` wash, radius 6, `px-5 py-[18px]`, `mb-7`;
      22 px circle-`!` SVG in `currentColor`; count line `19/800` with `gap-2.5`; `<ul>` `pl-8`;
      items `my-1`, links `16/600` red, `underline underline-offset-[3px]`, hover `#9d0f22` + 2 px thickness
- [ ] `FieldRow` ×4 in a `grid gap-[22px]` form with `noValidate`
- [ ] `SiteFooter` with the Component Dock link

## 3. Form state (the actual work)

- [ ] typed field descriptors: `name` (required), `email` (format), `password` (min 10, with a hint),
      `terms` (checked); rules `required` / `email` / `min10` / `checked`
- [ ] validate **on submit only**; on keystroke, a field that is already failing clears the moment it passes
- [ ] `errors: Record<FieldId, boolean>` drives **both** the row class and the summary
- [ ] summary derived every render: count = failing fields, `There is 1 problem …` / `There are {n} problems …`,
      hidden at zero (defect 1)
- [ ] first failed submit → summary `role="alert"`, `tabIndex={-1}`, `.focus()`, `document.title` prefixed `Error: `
- [ ] summary link → `preventDefault`, `scrollIntoView({block:'center'})`, then `focus({preventScroll:true})`
- [ ] clean submit → banner `16/600` on `#e9f4ef` behind a 6 px brand bar with the **first name only**;
      focused once; **no** `role="status"` alongside (defect 4)
- [ ] any edit clears the banner (defect 2)
- [ ] house-rules trigger is a `<button type="button">` opening a native `<dialog>` (3 rules + Close,
      `Escape`, focus returns) (defect 6)

## 4. Fidelity pass

- [ ] failing row: `pl-4` + `border-l-4 border-error`; label/input/message shift +20 px; input border colour
      only (`2px`, `#1b1d1f` → `#c0182e`), height stays 50
- [ ] message `15/700` red, `margin: 0`, `line-height: 1.5`; hint `14.5/400` muted above the input,
      `-2px 0 2px`
- [ ] checkbox `24 × 24`, `accent-color: #1f5c4a`, label `16/500`, grid `auto 1fr` + `gap-x-3`, message
      `col-span-2`
- [ ] button: `px-[22px] py-[13px]`, radius 4, `#1f5c4a`, `shadow-[0_3px_0_#0f3328]`, hover `#17493a`,
      `active:translate-y-0.5 active:shadow-[0_1px_0_#0f3328]`, `motion-reduce:active:translate-y-0`
- [ ] focus: amber 3 px ring **plus** a 2 px ink ring on every control (defect 5)
- [ ] assert the stacks: card `80+21+6+36.8+82+160.69+28+515.25`; summary `3+18+24.69+10+80+4+18+3`;
      rows `80 / 108.5 / 136.25 / 52.5`; button `237 × 50`

## 5. Responsive + gates

- [ ] card outer: `vw − 32` ≤ 657, `560 + 2p` 658 → 799, 640 ≥ 800 (no plateau)
- [ ] title 2 lines ≤ 351 / 1 line ≥ 352 with the port's copy — re-measure, then record
- [ ] document 988 @ 300, 940 @ 320, 900 from 333, 1074 @ 1440
- [ ] `scrollX` 0 at 300 / 320 / 360 / 390 / 440 / 560 / 640 / 768 / 820
- [ ] `npm run verify:app proofmark` green (100 % coverage)
- [ ] `TEMPLATES.md`: add `Alert 07` as the 7th row of `## Bootstrap Alerts (12)` between
      `## Bootstrap Accordions` and `## Bootstrap Buttons`, grammar `[colorlib] · [proofmark] · ![preview]`
- [ ] deploy, then `curl -I https://proofmark.free.componentdock.com` → 200, `ssl_verify_result=0`
