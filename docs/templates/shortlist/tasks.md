# Shortlist — task outline

Recreation of the ColorLib **Card V13** design (`card-13`) at `apps/shortlist`. Spec is the authority:
`openspec/specs/template-shortlist/spec.md`. Design notes: `docs/templates/shortlist/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-13/` (the slug-only `theme/card-13/`
404s — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **single-screen job board band, not a site**: a head over four job cards on sage `#f4f6f3`,
> each card a company tile + posting age + bookmark toggle + role title + location row with a work-mode
> pill + skill chips + a hairline footer with the salary. The reference is **6,443 B of HTML, one
> 11,323 B stylesheet and one 1,291 B script**, with **4 anchors, 4 buttons, 0 forms, 0 images,
> 0 keyframes**. The risk is not a missing band — it is flattening the four things that make it read as
> a *job listing*: **the saved state that repaints the whole card**, **the head counter that is derived
> state**, **the footer pinned by `margin-top: auto`**, and **the 16 px-gap two-track grid whose floor is
> `min(100%, 380px)`**.
>
> Four numbers decide fidelity: card **512 × 253.84** at 1,440 (not 512 × 260, not a fixed height);
> **2 columns at viewport 808, 1 at 807**; the saved line on the head's row from **425** up and under it
> at **424**; chips **28.84** tall wrapping to two rows on the 4-chip cards at **360**.
>
> **There is exactly one behaviour:** `aria-pressed` on four bookmark buttons, a counter in the head and
> a `role="status"` sentence. No navigation, no form, no async, no animation beyond two CSS transitions.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/shortlist`; rename the package to
      `@free-react-templates/shortlist`
- [ ] `public/CNAME` = `shortlist.free.componentdock.com`; `"homepage"` =
      `https://shortlist.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/shortlist" package-lock.json` → 1)
- [ ] `index.html`: title, description, and one **Figtree** Google Fonts `<link>`
      (`family=Figtree:wght@400..800&display=swap` — verified 200, one variable face)
- [ ] **no** stub images: this design has **zero `<img>`** — the only "media" is a 44 px initials tile

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #f4f6f3`, `--color-ink: #13201a`, `--color-muted: #4b5a52`,
      `--color-line: #e3e8e4`, `--color-lime: #d9f99d`, `--color-lime-ink: #1a2e05`
- [ ] saved pair: `--color-saved: #fbfdf6`, `--color-saved-line: #a3c76a`
- [ ] pill pairs: `--color-hybrid: #e0f2fe` / `--color-hybrid-ink: #0c4a6e`,
      `--color-office: #f1f1ee` / `--color-office-ink: #3f3f3a`
- [ ] `--color-focus: #3f6212` — **not** the reference's `#65a30d`, which is 2.84:1 on the ground
- [ ] ground is a **sage grey**, not white and not warm paper; the cards are pure white against it
- [ ] base card type is **14.5 px / 1.45** — not `text-sm`, not `text-base`
- [ ] weights used: **400 / 500 / 600 / 700 / 800** only

## 2 — Shell and head

- [ ] `main`: `max-width: 1040px` (content box → 1072 px outer), `margin: 0 auto`,
      `padding: clamp(32px, 6vw, 72px) 16px`, `color: #13201a`; **no** `min-height`
- [ ] `h1` "Design & product roles" at `clamp(26px, 3.4vw, 36px)` / **800** / `−.02em` / `1.1`;
      measured **36 / 39.6 / 370.17 wide** at 1,440, floor **26 / 28.6** at 390 and 320, never wraps
- [ ] sub-line "128 open positions · updated today" — 15 px `#4b5a52`, **6 px** under the `h1`
      (a middle dot `·`, not a pipe)
- [ ] saved line `Saved jobs: <strong>1</strong>` — 15/500, bookmark glyph **18 × 18**
      `fill: #13201a`, in a `inline-flex items-center gap-1.5` group
- [ ] head wrapper: `flex flex-wrap items-end justify-between gap-3.5` (`gap: 14px`),
      `margin-bottom: 24px` — the saved line wraps under the title group below 425
- [ ] counter is **derived** (`savedIds.length`), never a second piece of state

## 3 — Grid

- [ ] `grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-4`
      (`gap: 16px`) — **no** breakpoint classes, no JS
- [ ] verify the switch: **2 columns at 808** with tracks exactly `380px 380px`; **1 at 807** at `775px`;
      `512px 512px` at 1,440
- [ ] verify the floor: at 320 the single track is **288** — a bare `minmax(380px,1fr)` overflows by 92
- [ ] **no** `h-*` on cards; grid stretch gives the 253.84 rows

## 4 — Card shell

- [ ] `article`: `flex flex-col`, `bg-white`, `border border-line` (`1px solid #e3e8e4`),
      `rounded-[18px]`, `px-5 pt-5 pb-[18px]`
- [ ] **no** resting shadow; hover: `border-[#b8c6bd]` + `shadow-[0_14px_30px_-22px_rgba(19,32,26,.5)]`,
      `transition-colors transition-shadow`
- [ ] saved: conditional `border-[#a3c76a] bg-[#fbfdf6]` from state — **never** CSS `:has()`
      (jsdom will not match it and the toggle test would silently pass on the wrong thing)
- [ ] nothing moves on hover: no `translate-y`, no `scale`

## 5 — Company head row

- [ ] row: `flex items-center gap-3`; tile `flex-none grid place-items-center h-11 w-11 rounded-xl
      text-base font-extrabold tracking-[-.02em] text-white`
- [ ] tile colours per job: `#0e7490`, `#7c3aed`, `#c2410c`, `#15803d`; initials `Td`, `Nv`, `Fs`, `Gp`
- [ ] tile is `aria-hidden="true"` — the company name is real text beside it
- [ ] company block `flex-1 min-w-0 leading-[1.3]`: name 14.5/700, age 13 px `#4b5a52`
- [ ] save button **40 × 40**, `rounded-xl`, `border border-line`, `bg-white`, glyph **19 × 19**
      `strokeWidth={2}`; `aria-pressed`, `aria-label="Save <title> at <company>"`
- [ ] pressed: `bg-[#13201a] text-[#d9f99d] border-[#13201a]`, glyph `fill="currentColor"`
- [ ] press feedback `active:scale-[.92]`, `transition-[background-color,border-color,transform]`
- [ ] `aria-label` flips to `Remove <title> from saved jobs` when pressed (reference defect 2)

## 6 — Title

- [ ] `h2` `mt-4 mb-2 text-[19px] font-bold leading-[1.3] tracking-[-.01em]`
- [ ] one `<a>` per card wrapping only the title text, `text-inherit no-underline`
- [ ] card-wide hit area: anchor `after:absolute after:inset-0 after:z-[1] after:rounded-[18px]`
      on a `relative` card; save button `relative z-[2]`
- [ ] title hover: `underline decoration-2 underline-offset-[3px]`
- [ ] **no** `href="#"` anywhere — real paths or `role="link"` buttons; tests assert the count is 0

## 7 — Location row and pills

- [ ] row: `flex flex-wrap items-center gap-2.5 text-[14.5px] text-muted`
- [ ] pin: `<MapPin size={16} strokeWidth={2} />` + **4 px** gap + city
- [ ] pill: `rounded-full px-[9px] py-[2px] text-[12.5px] font-bold`
- [ ] "Remote in EU" / "Fully remote" → `bg-[#d9f99d] text-[#1a2e05]`;
      "Hybrid · 2 days" → `bg-[#e0f2fe] text-[#0c4a6e]`; "On-site" → `bg-[#f1f1ee] text-[#3f3f3a]`
- [ ] the pill label is data (`mode.label`), the variant is `mode.variant` — no string sniffing in JSX

## 8 — Skill chips

- [ ] `<ul aria-label="Skills" className="mt-3.5 mb-[18px] flex list-none flex-wrap gap-1.5 p-0">`
      (i.e. `margin: 14px 0 18px`)
- [ ] `<li>` `rounded-lg border border-line px-2.5 py-1 text-[13px] font-medium text-[#2c3a33]`
      → **28.84** px tall at 1,440
- [ ] counts **3 / 4 / 3 / 3**; the 4-chip cards wrap to two rows at 360, all four at 320
- [ ] **not** interactive: no hover, no cursor, no tab stop

## 9 — Footer

- [ ] `mt-auto flex items-center justify-between gap-2.5 border-t border-line pt-3.5`
- [ ] pay: `<p className="text-[14.5px] text-muted"><strong className="text-base font-bold text-ink">€78k – €95k</strong> / year</p>`
- [ ] suffix is data — "/ year" or "/ hour" — never hard-coded
- [ ] contract type: `text-[13px] font-semibold text-muted`
- [ ] en dash **U+2013** with spaces; real `€`, `£`, `$` characters
- [ ] footer y **356.25** (row 1) / **626.09** (row 2) at 1,440 — proof `mt-auto` is doing the work

## 10 — Behaviour

- [ ] state: `const [saved, setSaved] = useState<string[]>(() => jobs.filter(j => j.initiallySaved).map(j => j.id))`
- [ ] `toggle(id)` adds/removes; card 2 (`Northvale Health`) ships saved so the counter starts at **1**
- [ ] counter: `<strong>{saved.length}</strong>`
- [ ] status: one `role="status"` element under the grid, `min-h-[1.5em] mt-4 text-sm font-semibold
      text-[#3f6212]`, empty on first render
- [ ] announcement text: `"<title> saved to your list."` / `"<title> removed from your list."`
- [ ] the sentence replaces the previous one (single element) — two cards clicked in a row do not stack
- [ ] `aria-pressed` and the label both follow state; **no** `document.querySelector` anywhere

## 11 — Tests (TDD, 100 % coverage)

- [ ] red first: `JobCard.test.tsx` — renders company, age, title, location, pill, chips, pay, contract
- [ ] `SaveButton.test.tsx` — `aria-pressed` false → true, label flips, glyph fills
- [ ] `App.test.tsx` — counter starts at "Saved jobs: 1"; click card 3 → "2" + the exact sentence;
      click card 2 off → "0" + the removal sentence; independent per card
- [ ] status element exists empty before any click, `role="status"`, one instance
- [ ] saved card gets the `#fbfdf6` / `#a3c76a` classes; unsaved does not (assert class, not `:has()`)
- [ ] `a[href="#"]` count is 0; focusable element count is 8; no `<img>`, no `<form>`
- [ ] chips are non-interactive (no `role`, not in the tab order)

## 12 — Docs, a11y and ship

- [ ] footer line linking `https://www.componentdock.com/` as "Component Dock"
- [ ] `prefers-reduced-motion: reduce` → `motion-reduce:transition-none motion-reduce:active:scale-100`
- [ ] focus ring **3 px at 2 px offset** in `#3f6212` on both the title anchor (via its `::after`) and the
      save button
- [ ] `grep -ri colorlib apps/shortlist` and `grep -ri 'card-13\|cl-card13' apps/shortlist` → no matches
- [ ] `npm run verify:app shortlist` green; `openspec validate template-shortlist --type spec` valid
- [ ] on ship: add the `Card 13` row under `## Bootstrap Cards (20)` (after the last card row present),
      flip nothing else, re-run `npm run readme:status`
