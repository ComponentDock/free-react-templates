# StepForge — Design Notes

- **Source slug:** `colorlib-wizard-26`
- **ColorLib name:** Colorlib Wizard 26 (demo heading "Form Booking Wizard")
- **Listing:** https://colorlib.com/wp/template/colorlib-wizard-26/
- **Preview:** `https://preview.colorlib.com/theme/colorlib-wizard-26/` answers
  **HTTP 404** (9 B) — this family has no `/theme/` demo. The authoritative live
  artefact is the free bundle:
  `https://preview.colorlib.com/downloads/free/colorlib-wizard-26.zip`
  (HTTP 200, 273,754 B, sha256 `be99691663f0521e…`, fetched 2026-10-24).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-26.jpg
  (1,200 × 972)
- **New name:** stepforge · **Category:** Bootstrap wizards / multi-step form
- **Spec:** `openspec/specs/template-stepforge/spec.md`
- **App:** `apps/stepforge/` (StepIndicator · PersonalInfoStep · BookingStep ·
  ConfirmStep · FormActions · Footer)

Rewrite status: this brief replaced a **Colorlib Wizard 25** description on
2026-10-24 — the neighbouring sibling, wrong design (Wizard 25 is a restaurant
booking form with a photo half, script tagline and Raleway/Satisfy type). Its
`todo.md` in this folder carried the same wrong claim and has been removed.
Docs-source drift caught it (`scripts/verify-docs-source.py`, `DOCS-STALE`
`brief=colorlib-wizard-25`); the spec, the `TEMPLATES.md` row (`line 866`) and the
shipped app all recreate `colorlib-wizard-26`. Values below re-measured today.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `downloads/free/colorlib-wizard-26.zip` | 273,754 | `be99691663f0521e…` |
| `colorlib-wizard-26/index.html` | 9,737 | `9875b7f48d94a370…` |
| `colorlib-wizard-26/css/style.css` | 14,751 | `eb2d2f82511550d4…` |
| `fonts/OpenSans-{Regular,SemiBold,Bold}.woff2` | self-hosted, three weights | — |

The page holds **1** `<form>`, **6** inputs (name, surname, phone, e-mail,
address + the wizard's hidden fields), **5** `<select>` (the date of birth's
day/month/year plus booking fields), **1** `<img>` (the step icon sprite) and **6**
anchors — all of them step controls (`#form-total-h-0..2`, `#previous`, `#next`,
`#finish`). There is no navbar, no hero and no footer: the wizard *is* the page.
A `README.md` ships inside the bundle.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Page ground | `#383a4f` (deep navy-violet) | `body` background |
| Form panel | `#525575` | `.form-register .body` / field panel — a lighter navy, semi-opaque over the page |
| Brand accent (teal) | `#55e8d5` (4) | active step number bed, `.steps li.current`, focus underline, heading rule |
| Button teal | `#43ccba`, hover `#32998b` | `#next` / `#finish` fills |
| Step inactive | `#cccccc` (2) | `.steps li` number tiles |
| Paper | `#fff` (16) | step tiles, active label text, select beds |
| Field ink | `#666` (2) · `#333` | labels and values |
| Typeface | `'Open Sans', sans-serif` (self-hosted 400/600/700) | 6 `font-family` declarations |
| Radii | `5px` (15 declarations — buttons, inputs, selects) · `10px` (10 — step tiles, card corners) | radii census |
| Title | `h1` "Form Booking Wizard" — white, centred, on the navy ground above the card | page markup |

Palette census, most-used first: `#fff` ×16, `#55e8d5` ×4, `#ccc` ×2, `#666` ×2,
`#43ccba`, `#32998b`, `#383a4f`, `#333`. **Two navies, one teal, white tiles** —
no photography anywhere.

## Visual design (from the TEMPLATES.md screenshot)

A flat navy-violet page (`#2f3146`–`#393a4e` sampled, sheet says `#383a4f`) with
the centred white bold title `Form Booking Wizard` floating near the top. Below
it one wide rounded card (≈10px) holding a **three-tile step bar**: tile 1 is
white with a **teal number block** on its left and dark `Personal Info` label;
tiles 2 and 3 are white with grey `#ccc` number blocks and grey labels. Under the
bar the form body sits on `#525575`: left-aligned bold white `Personal Info`
heading with a small `1/3` counter on the right, then fields rendered as **white
underlined inputs on the navy panel** (First Name, Last Name, Phone Number,
E-Mail side by side; a `Date of Birth:` label with three white select pills —
day, month, year), an `Address Location` line, and a centred **teal `Next`**
button (5px radius). No shadows, no borders, no icons except the step numerals.

## Section order (as the reference renders)

1. **Page title** — `h1` "Form Booking Wizard" on the navy ground.
2. **Wizard card** — `.form-register`.
3. **Step bar** — three `h2` tiles: `1 Personal Info` · `2 Booking` ·
   `3 Confirm` (the `h2` wraps a number block and a label; the active tile
   carries the teal block).
4. **Step 1 body — `Personal Info`** (`.body.current`, `h3`, `1/3` counter):
   First Name · Last Name · Phone Number · E-Mail · `Date of Birth:` (three
   selects: day, month, year) · Address Location · `Next`.
5. **Step 2 body — `Booking Infomation`** (source's spelling): the booking
   selects (service/branch/date/time fields) · `Back` · `Next`.
6. **Step 3 body — `Comfirm Details`** (source's spelling): read-only summary rows
   of everything entered · `Back` · `Confirm`.
7. **Footer** — the reference has none; the app appends the Component Dock
   footer.

## Section-by-section fidelity notes

**Page + title.** One flat colour, one centred title. The card is the only
elevated object and its shadow is minimal; radius 10px.

**Step bar.** Three equal tiles in a row, `10px` radius, white ground. Each tile
is `[number block][label]`; the active tile's block is teal `#55e8d5` and its
number is white, inactive blocks are `#ccc` with dark numerals. The labels are the
`h2` text (`Personal Info`, `Booking`, `Confirm`) — do not add icons.

**Step 1.** Two-column field grid (`First Name | Last Name`, then
`Phone Number | E-Mail`), then `Date of Birth:` on its own line with three
`select` pills (day, month, year), then a full-width `Address Location` line. The
`1/3` counter sits right-aligned on the heading row. Fields have **no boxes** —
a single white underline under each value; labels are small, white, uppercase-ish
weight 400.

**Step 2.** Same panel skin: label + select rows for the booking details, all
with the white 5px-radius select beds. Wireframe copy ("Booking Infomation") is
part of the design's charm — keep the same kind of content, fix the spelling in
the recreation.

**Step 3.** A read-only summary — label on the left, value on the right, one row
per field — then the `Confirm` button. No new inputs.

**Actions.** `Next` / `Confirm` are centred, teal `#43ccba`, white text, 5px
radius, ~44px tall, hover `#32998b`. `Back` is the same shape in the muted navy
(`#525575`-family) so it never competes with the forward action.

**Footer.** The source has none. The recreation appends the Component Dock
footer; it is the only band the sheet does not describe.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `h1` on `body` | page title on navy | page shell + title |
| `.steps li` ×3 | number tile + label, `.current` teal | `StepIndicator` (active index state) |
| `.body.current` step 1 | 4 inputs + 3 dob selects + address | `PersonalInfoStep` (controlled form state) |
| step 2 | booking selects | `BookingStep` |
| step 3 | read-only summary | `ConfirmStep` |
| `#previous` / `#next` / `#finish` | step controls | `FormActions` (back / next / confirm handlers) |
| — | no footer | `Footer` with Component Dock credit |

## Placeholder images / fonts

No photography in the design — the visual is colour and type only. **Open Sans**
(400/600/700) from Google Fonts via `<link>` (the bundle self-hosts the same three
weights). The step numerals are plain text, not images.

## App deltas (as shipped in `apps/stepforge/`)

- Tokens match the sheet exactly: `--color-brand-navy: #383a4f`,
  `--color-brand-form: #525575`, `--color-brand-accent: #55e8d5`,
  `--color-brand-button: #43ccba`, hover `#32998b`, inactive `#cccccc`.
- The step bodies are split into three components with their own validation
  state; the source advances unconditionally. `Next` is disabled until the step's
  required fields are filled — a deliberate improvement, recorded here so the
  fidelity delta is explicit.
- The source's misspellings ("Booking Infomation", "Comfirm Details") are
  corrected in the app.
- No `?v=`/CDN assets are loaded: the app has no third-party JS, and the wizard's
  progress is pure React state.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Provenance ban.** No file under `apps/stepforge/` may name the source
  designer, carry a `colorlib.com` URL, or reuse the source template's name —
  code, comments, CSS, markup, metadata and filenames included (AGENTS.md
  rule 5).
- **Deploy identity.** `apps/stepforge/public/CNAME` =
  `stepforge.free.componentdock.com` and the package `homepage` =
  `https://stepforge.free.componentdock.com`.
