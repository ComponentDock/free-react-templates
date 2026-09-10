# Divine (Colorlib Wizard 5) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-divine`. Recreation name: **Divine** (NEW name —
> the ColorLIB source keeps its name "Colorlib Wizard 5").

## Source mapping

- **ColorLIB item**: "Colorlib Wizard 5" (TEMPLATES.md line 873; section
  "## Bootstrap Wizards (30)" at line 844). The
  `wp/template/colorlib-wizard-5/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL**: https://colorlib.com/wp/template/colorlib-wizard-5/
- **Preview URL — UNREACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/colorlib-wizard-5/` returns HTTP 404
  ("Not Found"). The naive preview URL does not resolve for this member.
  Fallback: screenshot analysis (see below). The Colorlib template page
  itself returns HTTP 200 and confirms: "A very flexible and extensible free
  4-step order template that you can integrate into any eCommerce website."
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`

## Reference research (done — do not redo)

### Screenshot (`colorlib-free-wizard-5.jpg`)

Browsed visually in the browser. Browser frame: Google Chrome on macOS.

- **Layout**: Split-screen design.
  - **Left side (~40%)**: solid flat warm peach/beige (`#e6d0b3` approx)
    full-viewport background. On a light blue geometric triangular platform
    rests an artistic arrangement: a tall sage-green floor lamp leaning left,
    a small yellow tripod table with two bird figurines, a grey modern
    watering can, and a large green palm frond. No photos of people.
  - **Right side (~60%)**: a large white rectangular card containing the
    "Billing Details" form, floating over the peach background.

- **Step indicator**: Below the "Billing Details" heading, a horizontal
  progress bar with four segments. Step 1 is filled with the peach accent
  color (the current/active step); steps 2, 3, and 4 are light grey
  (inactive/pending).

- **Form fields (Billing Details step, step 1)**:
  - First Name * (asterisk = required) and Last Name * — side by side in a
    two-column row.
  - Company Name — full-width, optional (no asterisk).
  - Country — dropdown select, currently showing "Viet Nam", required.
  - Address — full-width, placeholder "Street address", required.
  - Apartment, suite, unit etc. — full-width, placeholder
    "Apartment, suite, unit etc. (optional)", optional.
  - Town / City — full-width, required.

- **Input styling**: Subtle light grey borders; borderless/minimalist
  "until interacted" appearance.

- **"Next" button**: At the bottom right of the form card, rectangular,
  filled with the peach accent color, white text "Next" followed by a
  right-pointing arrow (`→`).

- **Aesthetic**: Minimalist, clean, modern. Card metaphor separating the
  form from the artistic background. Soft pastel color palette. Spacious
  layout with ample padding.

### Family shape (series context)

30-member "Bootstrap Wizards" family (`colorlib-wizard-1` … `-30`): all are
jQuery-Steps skeletons differing per member in layout, color scheme, and
field inventory. Divine (wizard-5) is the 5th member — a split-screen
layout with a peach/beige background and a 4-step billing/ordering process.
Sibling preps: Conjure (wizard-1, chain seed — cream/olive, 920px card,
dot nav), Banish (wizard-10, photo bg), Dispel (wizard-11, coral page,
square tile nav), Abjure (wizard-12, sky-blue page, pill card, hidden nav).
Divine's tokens are distinct — never assume tokens from siblings.

### Design tokens (from screenshot — preview 404)

| Token             | Value                          | Notes                                 |
| ----------------- | ------------------------------ | ------------------------------------- |
| Page bg           | `#e6d0b3` (approx warm peach)  | Soft pastel peach/beige, full viewport|
| Card bg           | `#ffffff` (pure white)         | Form card on the right side           |
| Accent / CTA      | `#faaca8` (dusty peach)        | Active step + "Next" button           |
| Text primary      | `#333333` (dark grey)          | Headings and labels                   |
| Text secondary    | `#999999` (light grey)         | Inactive step segments                |
| Input border      | `#e0e0e0` (subtle light grey)  | Minimal input field borders           |
| Font family       | `Poppins, sans-serif`          | Google Fonts                          |
| Border radius (card) | `8px`                       | Rounded card corners                  |
| Border radius (input/button) | `4px`                 | Slightly rounded inputs and buttons   |

### Picsum placeholder plan

**NONE on the form side.** The form card is a clean white card with text
fields only — no photos, no avatars, no imagery needed. The left side has an
artistic 3D render (lamp, tripod table, birds, watering can, palm frond) on
a peach background; this can be rendered with a solid background color and
optional placeholder or omitted per the "no copied assets" rule — use a
solid peach background or a deterministic `picsum.photos/seed/divine-N`
image if a visual is desired.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/divine` from the simplest existing app
       (`cp -r apps/<simplest> apps/divine`), rename package to
       `@free-react-templates/divine`, add Poppins Google Font
       `<link>` in index.html, set `public/CNAME` =
       `divine.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): 4-step wizard with Billing Details
       (step 1), step 2, step 3, step 4 (confirmation/submit); horizontal
       progress bar; required field validation; Next button with arrow icon;
       responsive layout; Footer (Component Dock credit).
3. [ ] Layout shell: split-screen with peach/beige (`#e6d0b3`) left side
       and white card on the right; card `8px` border radius.
4. [ ] Step indicator: horizontal 4-segment bar below the heading,
       peach accent for active/completed, grey for inactive.
5. [ ] Billing Details step (step 1): First/Last Name side by side,
       Company Name, Country dropdown, Address, Apartment, Town/City.
       "Next" button with right arrow icon at bottom right.
6. [ ] Steps 2–4 per the source structure (order details, shipping,
       confirmation).
7. [ ] Validation: required fields (asterisk-marked) block Next;
       optional fields (Company Name, Apartment) do not.
8. [ ] Back navigation preserves entered data.
9. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
10. [ ] Run `npm run verify:app -- divine` (typecheck -> lint -> vitest
       100% -> build) and fix until green.
11. [ ] Open PR `feat/template-divine` -> merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (noting 404 fallback to screenshot),
        token list (peach `#e6d0b3` page bg, white card, dusty peach
        `#faaca8` accent, Poppins font, 4-step progress bar, split-screen),
        and what differs (renamed "Divine", Poppins via Google Fonts,
        lucide icons, solid background or placeholder for the artistic side,
        preview unreachable — 404 — fallback to screenshot).
12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 873 `[x]` + surge
        URL (`https://divine.free.componentdock.com`), `npm run
        readme:status`, push.
