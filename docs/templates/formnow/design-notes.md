# Formnow — Design Notes & Task Outline

<!-- doc-token-reverify:2026-10-22 -->

> **Tokens re-verified against the live sheet (2026-10-22).** The rows below are the values the reference's own stylesheet paints, quoted with the rule that paints them; the sentence further down that carries the older value is a **screenshot approximation and is superseded** where the two differ.  CSS values are canonical over screenshots (`docs/replication.md`), so build the sheet's value.
>
> Live reference: <https://preview.colorlib.com/theme/bootstrap/contact-form-13/>
>
> | brief says | live sheet paints | evidence |
> | --- | --- | --- |
> | `#c5cc5a` | `#ccda46` | `a{color: #ccda46}` |
>
> If the quoted rule belongs to a different ROLE than the line you are building (a footer link's red is not a CTA's fill), read the sheet's own rule for your role instead of substituting across roles.

<!-- /doc-token-reverify -->

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-formnow/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://preview.colorlib.com/theme/bootstrap/contact-form-13/` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> - **Do not build** these screenshot samples — the live sheet paints
>   no such colour; take the spec's live palette instead:
>   `#5b9bd5`, `#7dd8c0`, `#c5cc5a`.
>
> **Spec caveat:** ⚠️ the demo's own `<title>` reads `Contact Form #3` though the path is `contact-form-13` — the host's titles are not reliable labels; the readings above are for the URL as fetched.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

Source: ColorLib Contact Form 13
Preview: https://preview.colorlib.com/theme/contact-form-13/ (404 — design from screenshot)

## Section order (top to bottom)

1. **Gradient background** — full-page blue-to-teal
2. **Two-column content** (overlaid on gradient)
   - Left: contact info + two location blocks
   - Right: white form card
3. **Footer** — Component Dock link

## Structure details

### Page background
- Full-page gradient: blue (#5B9BD5) → teal (#7DD8C0)
- Use Tailwind `bg-gradient-to-r from-[#5B9BD5] to-[#7DD8C0]`

### Left column (~45%, on gradient)
- "Contact Info" heading: white serif (Playfair Display), ~28px
- Paragraph: white text, lorem ipsum
- Two location blocks side by side (~50/50):
  - **London** (bold white heading)
    - Building icon + address
    - Phone icon + phone number
    - Mail icon + email
  - **New York** (bold white heading)
    - Building icon + address
    - Phone icon + phone number
    - Mail icon + email
  - All text and icons white on gradient

### Right column (~55%)
- White card, rounded corners (~5px), subtle box shadow
- "SEND US A MESSAGE" heading: uppercase, letter-spaced, gray, ~14px
- Form with labels above bordered inputs:
  - Name (label + bordered input)
  - Email (label + bordered input)
  - Message (label + bordered textarea, tall)
- "Send Message" button: full width, olive bg (#C5CC5A), white text

## Fidelity notes

- Match the blue-to-teal gradient background
- Match the white form card overlaid on gradient
- Match the two location blocks (London + New York) side by side
- Match the olive/yellow-green button: #C5CC5A
- Match the uppercase letter-spaced form heading
- Match the labels above bordered inputs
- Match the typography: Playfair Display for "Contact Info", Poppins for rest

## Component plan

- `src/App.tsx` — compose page (gradient bg container)
- `src/components/ContactInfo.tsx` — heading + paragraph + two locations
- `src/components/LocationBlock.tsx` — city name + 3 info items
- `src/components/ContactCard.tsx` — white card wrapper
- `src/components/ContactForm.tsx` — labeled inputs + full-width olive button

## Tasks

- [ ] Scaffold app from template-starter
- [ ] Install Google Fonts (Playfair Display + Poppins) in index.html
- [ ] Create gradient background container
- [ ] Create ContactInfo (heading + paragraph + two locations)
- [ ] Create LocationBlock (city + address, phone, email)
- [ ] Create ContactCard (white card with shadow)
- [ ] Create ContactForm (labeled inputs + full-width olive button)
- [ ] Style with Tailwind: gradient, olive, fonts, responsive
- [ ] Add responsive stacking for mobile
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + open PR
