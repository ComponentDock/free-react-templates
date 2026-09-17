# Relaybox (ColorLib Contact Form V17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-relaybox`. Recreation name: **Relaybox** (NEW name —
> the ColorLib source keeps its name "Contact Form V17").

## Source mapping

- **ColorLib item:** "Contact Form V17" (TEMPLATES.md line 1432; section
  Contact Forms). The `wp/template/contact-form-v17/` slug appears in
  TEMPLATES.md at that line.
- **Source URL:** https://colorlib.com/wp/template/contact-form-v17/
- **Preview URL — UNREACHABLE (verified 2026-09-17):**
  `https://preview.colorlib.com/theme/contact-form-v17/` returns HTTP 404
  (9 bytes "Not Found"). Fallback to the screenshot analysis.
- **Screenshot:** `ContactFrom_v17.jpg` (1920×939, JPEG).
  Reviewed visually.

## Reference research (done — do not redo)

### Screenshot (ContactFrom_v17.jpg, 1920×939 JPEG)

Browsed visually. Key observations:

1. **Full-page background:** Light gray (#F5F5F5), clean and neutral.

2. **Two-column centered container:** Max-width ~960px, centered
   horizontally, with a subtle shadow. Split into:
   - **Left panel (~40% width):** Very dark background (near-black
     #1a1a2e or #2d2d3f) with a dark architectural photo overlay
     (building structural lines, dark blue-black tones). Contains
     three contact info blocks stacked vertically, each with a white
     icon on the left:
     - MapPin icon + "Address" (white heading) + address text
       (white, smaller)
     - Phone icon + "Lets Talk" (white heading) + phone number
       (green link #2ecc71)
     - Mail icon + "General Support" (white heading) + email
       (green link)
   - **Right panel (~60% width):** White background. Contains the
     contact form:
     - "Send Us A Message" heading (~24px, dark gray, regular weight)
     - "TELL US YOUR NAME *" — uppercase gray label (~11px), two
       side-by-side text inputs: "First name" | "Last name"
     - "ENTER YOUR EMAIL *" — uppercase gray label, full-width
       email input with "Eg. example@email.com" placeholder
     - "ENTER PHONE NUMBER" — uppercase gray label (no asterisk =
       optional), "Eg. +1 800 000000" placeholder
     - "MESSAGE *" — uppercase gray label, textarea with
       "Write us a message" placeholder
     - "SEND MESSAGE" button — green (#28a745) bg, white uppercase
       text, rounded (~4px), centered

3. **Design aesthetic:** Clean, corporate, professional. The green
   accent is the distinguishing color. The dark left panel with
   contact info is the key structural element. Labels are uppercase
   and small, giving a structured/formal feel.

### Design tokens (screenshot analysis)

| Token          | Value                                    | Notes                                           |
| -------------- | ---------------------------------------- | ----------------------------------------------- |
| Page bg        | ~#F5F5F5 (light gray)                    | Full-viewport background                        |
| Left panel bg  | ~#1a1a2e (dark navy/charcoal)            | Contact info panel                              |
| Left panel img | Dark architectural photo overlay         | Background image on left panel                  |
| Brand accent   | ~#28a745 (green)                         | Links + submit button                           |
| Link hover     | ~#218838 (darker green)                  | Hover state for green links                     |
| Card bg (right)| #FFFFFF                                  | Form panel background                           |
| Heading text   | ~#333333 (dark gray)                     | "Send Us A Message" heading                     |
| Label text     | ~#666666 (medium gray), uppercase        | Form field labels (small, ~11-12px)             |
| Input border   | ~#E5E7EB (light gray)                    | Field borders                                   |
| Input focus    | ~#28a745 (brand green) or #4A90D9       | Focus ring/border                               |
| Placeholder    | ~#999999                                 | Input placeholder text                          |
| Body text      | ~#333333                                 | Address, general text                           |
| Button bg      | ~#28a745 (green)                         | Submit button                                   |
| Button text    | #FFFFFF                                  | Submit button text                              |
| Button radius  | ~4px                                     | Slight rounding                                 |
| Button padding | ~10px 30px                               | Horizontal more than vertical                   |
| Font family    | Sans-serif (Open Sans or system)         | All text                                        |
| Icons          | White on dark panel, ~20px               | MapPin, Phone, Mail (lucide)                    |

### Token uncertainty

Since the live preview is unreachable, these token values are estimated
from the screenshot. Implementers should:
1. Use the screenshot as the primary visual reference.
2. Default to Tailwind's green palette (green-600 `#16a34a` or
   emerald-500 `#10b981`) for the accent — the screenshot shows a
   medium green. `#28a745` (Bootstrap success green) is closest.
3. Adjust hex values slightly if needed during visual QA against the
   screenshot.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/relaybox` from the simplest existing app,
       rename package to `@free-react-templates/relaybox`, add
       Google Fonts `<link>` in index.html (Open Sans 400/600/700),
       set `public/CNAME` = `relaybox.free.componentdock.com` +
       `"homepage"`. Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): PageLayout (light gray bg, centered
       two-column container), LeftPanel (dark bg, architectural image
       overlay, Address block with MapPin icon + text, LetsTalk block
       with Phone icon + green link, GeneralSupport block with Mail
       icon + green email link), RightPanel (white bg, heading,
       form), NameRow (two side-by-side fields under uppercase label),
       EmailField (email type, placeholder), PhoneField (text, optional),
       MessageField (textarea), SubmitButton ("SEND MESSAGE", green,
       centered), FormValidation (required field errors), SubmitSuccess
       (success state), Footer (Component Dock link), App (landmarks,
       document title "Relaybox — Contact Us").
3. [ ] Page layout: light gray bg (#F5F5F5), centered container
       (max-w-4xl, mx-auto), flex two-column (flex-row on desktop,
       flex-col on mobile ≤768px), min-h-screen with vertical centering.
4. [ ] Left panel: flex-1 (or w-2/5), dark bg (#1a1a2e), relative
       with a background image (picsum.photos placeholder for the
       architectural photo), overlay with bg-black/40 or similar for
       contrast. Padding ~40px. Three contact blocks stacked:
       - Each block: flex row with icon (lucide, white, ~20px) +
         text column (heading white semibold + detail text).
         Green links use `text-green-500` or custom #28a745.
5. [ ] Right panel: flex-1 (or w-3/5), bg-white, padding ~40px.
       "Send Us A Message" heading (text-2xl, font-semibold,
       text-gray-800, mb-6).
6. [ ] Form fields: each field has an uppercase label (text-xs,
       font-semibold, text-gray-500, uppercase, tracking-wide, mb-2)
       above a standard input (w-full, border border-gray-200,
       rounded, px-4 py-3, placeholder-gray-400, focus:border-green-500
       focus:ring-1 focus:ring-green-500 transition).
7. [ ] Name row: "TELL US YOUR NAME *" label, then a flex row with
       two equal-width inputs (flex-1 each, gap-4): "First name" and
       "Last name".
8. [ ] Email field: "ENTER YOUR EMAIL *" label, full-width email input.
9. [ ] Phone field: "ENTER PHONE NUMBER" label (no asterisk — optional),
       full-width text input.
10. [ ] Message field: "MESSAGE *" label, textarea (w-full, min-h-[120px],
        resize-y).
11. [ ] Submit button: "SEND MESSAGE" uppercase, bg-[#28a745], white
        text, rounded, py-3 px-8, mx-auto block, font-semibold,
        hover:bg-[#218838] transition. Centered below the form.
12. [ ] Form validation: required fields (first name, email, message)
        show error state (red border + error text) on submit when empty.
        Phone is optional. Use React state for validation.
13. [ ] Submit success: after valid submission, hide form, show
        success message (green check + "Thank you! Your message has
        been sent." or similar). No fake network call.
14. [ ] Footer: minimal Component Dock credit linking
        https://www.componentdock.com/.
15. [ ] Run `npm run verify:app -- relaybox` (typecheck → lint → vitest
        100% → build) and fix until green.
16. [ ] Open PR `feat/template-relaybox` → merge immediately
        (`gh pr merge --squash --delete-branch`). PR description must
        include: source URL, preview URL (404 — screenshot fallback),
        token list (dark left panel, green #28a745 accent, light gray
        bg, white form panel, uppercase labels), and what differs
        (renamed "Relaybox", Open Sans via Google Fonts, lucide icons,
        picsum placeholder images, Component Dock footer).
17. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1432 `[x]` +
        surge URL (`https://relaybox.free.componentdock.com`),
        `npm run readme:status`, push.

## Visual reference

Screenshot URL (JPEG): https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v17.jpg
Converted locally to `/tmp/cf17-screenshot.png` (1920×939 PNG).
Key visual elements to match:
- Light gray full-page background
- Centered two-column container (dark left + white right)
- Dark left panel with architectural photo + contact info blocks
- White right panel with "Send Us A Message" heading + form
- Uppercase gray labels, green accent color for links + button
- Clean, corporate, professional aesthetic
