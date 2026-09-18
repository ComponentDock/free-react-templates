# Formward (ColorLib Contact Form 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-formward`. Recreation name: **Formward** (NEW name —
> the ColorLib source keeps its name "Contact Form 15").

## Source mapping

- **ColorLib item:** "Contact Form 15" (TEMPLATES.md line 1418). Source URL:
  https://colorlib.com/wp/template/contact-form-15/
- **Preview URL — UNREACHABLE (verified 2026-09-17):**
  `https://preview.colorlib.com/theme/contact-form-15/` → HTTP 404.
  `https://colorlib.com/etc/contact-form-15/index.html` → 404.
  **Fallback to TEMPLATES.md screenshot** as the sole visual reference.
- **Screenshot:** `contact-form-15.jpg` (1200×972 AVIF), viewed 2026-09-17
  via vision_analyze after AVIF→PNG conversion.

## Reference research (done — do not redo)

### Screenshot analysis

Browsed visually 2026-09-17. The screenshot shows a clean, minimal page:

- **Background:** solid white or near-white, no photo, no gradient, no texture.
- **Top section (two columns):**
  - Left: "NEW YORK" heading (bold, uppercase, sans-serif ~24px, near-black)
    with address "9757 Aspen Lane South" / "Richmond Hill, NY 11419" in
    regular-weight body text below.
  - Right: "CONTACT INFO" heading (same style) with "T: +1 (291) 939 9321"
    and "E: info@mywebsite.com" below.
- **Form section:**
  - "MESSAGE US" heading (bold, uppercase, sans-serif ~28px, near-black)
    below the info columns.
  - Two side-by-side inputs: "Your name" (left) and "Email" (right), each
    ~50% width, with thin grey underline-only borders (no background, no
    box, just bottom border).
  - Full-width textarea: "Write your message" with same underline treatment.
  - "Send Message" button: solid black background, white text, rectangular
    with minimal border-radius, in normal document flow.
- **Font:** Poppins (geometric sans-serif matching the bold uppercase headings
  and regular body text style visible in the screenshot).
- **Overall aesthetic:** Stark monochromatic minimalism — black text, white
  background, grey underlines. No imagery, no colors, no shadows, no
  decorative elements. Very clean and modern.
- **NO picsum placeholders needed** (no photos anywhere in the design).

### Design tokens (from screenshot analysis, no live CSS available)

| Token       | Value                                | Use                                                                   |
| ----------- | ------------------------------------ | --------------------------------------------------------------------- |
| Page bg     | Solid `#ffffff` or `#f9f9f9`         | No photo/gradient; clean white page                                   |
| Heading ink | `#111111` or `#000000`              | Bold uppercase headings (NEW YORK, CONTACT INFO, MESSAGE US)          |
| Body ink    | `#333333` or `#222222`              | Paragraph text, input text, labels                                    |
| Label grey  | `#999999` or `#aaaaaa`              | Placeholder text in form fields                                       |
| Line grey   | `#cccccc` or `#dddddd`              | Underline border on inputs/textarea (1px bottom only)                 |
| Button bg   | `#000000`                           | Solid black Send Message button                                       |
| Button text | `#ffffff`                           | White button text                                                     |
| Button radius| ~2–4px (near-rectangular)          | Minimal rounding on the black button                                  |
| Font        | 'Poppins' 400/600/700               | Google Fonts; headings 600/700 uppercase, body 400                    |

### Picsum placeholder plan

**NONE.** The design is entirely text-based with a white background and no
photos. All content is form fields, headings, and text. The implementer
should NOT add any placeholder images the source lacks.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/formward` from the simplest existing app
       (`cp -r apps/<simplest> apps/formward`), rename package to
       `@free-react-templates/formward`, add Poppins 400/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `formward.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): PageShell (white bg, centered container,
       Poppins font), InfoHeader (two columns: address left, contact right,
       bold uppercase headings, body text below), FormHeading ("MESSAGE US"
       bold uppercase), ContactForm (name + email side-by-side inputs with
       underline borders, textarea full-width, underline borders),
       SendButton (solid black, white text, rectangular, hover state),
       FormValidation (empty fields flagged on submit, success message on
       valid submit, fields cleared, no network), Footer (Component Dock),
       App (landmarks, document title "Formward — Contact Form").
3. [ ] Layout shell: white/near-white page, centered max-width container
       (~800px), Poppins font, vertical spacing between sections.
4. [ ] InfoHeader: two-column flex/grid layout — left column with "NEW YORK"
       heading + address lines, right column with "CONTACT INFO" heading +
       phone/email lines. Responsive: stacks at ≤768px.
5. [ ] Contact form: "MESSAGE US" heading, two side-by-side text inputs
       (name ~50%, email ~50%), full-width textarea (~120px min-height),
       all with underline-only borders (1px solid #cccccc bottom only,
       no bg). Labels/placeholders in light grey.
6. [ ] Send Message button: solid black bg, white text, ~12px 24px padding,
       ~2–4px radius, in normal flow below textarea. Hover → dark grey.
7. [ ] Form state: controlled inputs, validation on submit (empty required
       fields show error), success message on valid submit, clear fields.
8. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
9. [ ] Run `npm run verify:app -- formward` (typecheck → lint → vitest
       100% → build) and fix until green.
10. [ ] Open PR `feat/template-formward` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (404 — fallback to screenshot),
        token list (white page, black button, Poppins, underline inputs),
        and what differs (renamed "Formward", Poppins via Google Fonts,
        no picsum needed, mock form submission, accessible semantics,
        Component Dock footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1418 `[x]` + surge
        URL (`https://formward.free.componentdock.com`), `npm run
    readme:status`, push.
