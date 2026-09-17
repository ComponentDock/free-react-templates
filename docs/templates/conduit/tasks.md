# Conduit (ColorLib Contact Form V16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-conduit`. Recreation name: **Conduit** (NEW name —
> the ColorLib source keeps its name "Contact Form V16").

## Source mapping

- **ColorLib item:** "Contact Form V16" (TEMPLATES.md line 1431; section
  Contact Forms). The `wp/template/contact-form-v16/` slug appears in
  TEMPLATES.md at that line.
- **Source URL:** https://colorlib.com/wp/template/contact-form-v16/
- **Preview URL — UNREACHABLE (verified 2026-09-17):**
  `https://preview.colorlib.com/theme/contact-form-v16/` returns HTTP 404
  (9 bytes "Not Found"). Fallback to the screenshot analysis + ColorLib
  page description.
- **Screenshot:** `ContactFrom_v16.jpg` (1920×939, AVIF format).
  Reviewed visually via imagemagick conversion to PNG.

## Reference research (done — do not redo)

### Screenshot (ContactFrom_v16.jpg, 1920×939 AVIF)

Browsed visually after converting AVIF → PNG via ImageMagick.
Key observations:

1. **Full-page background:** Blurred photo of an office workspace
   (laptop, desk, chair visible) with a semi-transparent purple/violet
   overlay. The purple is the dominant brand color throughout.

2. **Top bar:** Horizontal bar spanning the viewport width. Left side
   has "Co." in white (sans-serif, medium weight). Right side has a
   "CONTACT US" button — purple background, white uppercase text,
   rounded corners, slight padding.

3. **Modal form card:** Centered on the page, white background,
   moderate box-shadow, rounded corners (~8–12px). Approximate
   max-width ~500px.
   - **Banner header:** Full-width image at the top of the card showing
     a modern glass office building. "CONTACT US" text overlaid in
     white, bold, uppercase, centered. Height ~120–150px.
   - **Close button:** Purple X icon, absolutely positioned top-right
     of the card (outside the banner).
   - **Form fields (4 fields):**
     - Name: person/user icon on left, "Matthew" as example placeholder
     - Email: envelope/mail icon on left, "matthew@example.com" placeholder
     - Phone: phone icon on left, "ex90" placeholder (shown in focused
       state with red/pink border and X clear button — validation error)
     - Message: chat/speech-bubble icon on left, "Your comments.."
       placeholder, textarea (multi-line, taller than other fields)
   - **Submit button:** "SEND NOW" in white uppercase text, purple
     background (~#8B5CF6), rounded-pill shape (high border-radius),
     centered below the fields.

4. **Design aesthetic:** Clean, modern, minimalist. Purple brand color
   is dominant. Fields have thin borders, clean spacing, and a
   left-icon + right-placeholder layout. The animation (described in
   the ColorLib page) involves field focus transitions.

### Design tokens (screenshot analysis)

| Token          | Value                                    | Notes                                           |
| -------------- | ---------------------------------------- | ----------------------------------------------- |
| Page bg        | Blurred workspace photo + purple overlay | Full-viewport, fixed/absolute                   |
| Overlay        | ~rgba(139,92,246,0.75)                  | Semi-transparent violet over blurred photo       |
| Brand primary  | ~#8B5CF6 (violet-500)                   | Buttons, accents, focus states                  |
| Brand darker   | ~#7C3AED (violet-600)                   | Hover states, darker accents                    |
| Card bg        | #FFFFFF                                  | Form card background                            |
| Card shadow    | ~0 4px 24px rgba(0,0,0,0.15)            | Modal elevation                                 |
| Card radius    | ~8–12px                                  | Corner rounding                                 |
| Input border   | ~#E5E7EB (gray-200)                     | Default field border                            |
| Focus border   | ~#8B5CF6 (brand)                         | Active/focused field                            |
| Error border   | ~#EF4444 (red-500)                       | Validation error (visible on phone field)       |
| Text primary   | ~#1F2937 (gray-800)                      | Headings, labels                                |
| Placeholder    | ~#9CA3AF (gray-400)                      | Input placeholder text                          |
| Button bg      | ~#8B5CF6 (brand)                         | Submit button                                   |
| Button text    | #FFFFFF                                   | Submit button text                              |
| Button radius  | ~24–30px (pill)                          | Rounded-pill shape                              |
| Icon color     | ~#9CA3AF (gray-400)                      | Field left icons                                |
| Font family    | Sans-serif (Inter/Poppins or system)     | All text                                        |
| Banner text    | White, bold, uppercase, ~24–28px         | "CONTACT US" overlay                            |

### Token uncertainty

Since the live preview is unreachable, these token values are estimated
from the screenshot. Implementers should:
1. Use the screenshot as the primary visual reference.
2. Default to Tailwind's violet palette (violet-500 `#8B5CF6`,
   violet-600 `#7C3AED`) for the brand color — it matches the visual.
3. Adjust hex values slightly if needed during visual QA against the
   screenshot. The exact values are not critical as long as the visual
   impression matches.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/conduit` from the simplest existing app,
       rename package to `@free-react-templates/conduit`, add
       Google Fonts `<link>` in index.html (Inter 400/500/600/700),
       set `public/CNAME` = `conduit.free.componentdock.com` +
       `"homepage"`. Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Background (blurred photo + purple
       overlay), TopBar ("Co." logo, "CONTACT US" CTA), ModalCard
       (centered, white bg, shadow, rounded), BannerHeader (image +
       "CONTACT US" text overlay), CloseButton (X icon, dismisses
       card), NameField (User icon, "Name" placeholder, text input),
       EmailField (Mail icon, "Email" placeholder, email type),
       PhoneField (Phone icon, "Phone" placeholder, text input),
       MessageField (MessageSquare icon, "Your comments.." placeholder,
       textarea), SubmitButton ("SEND NOW", purple, rounded-pill),
       FormValidation (required field errors, red borders), SubmitSuccess
       (success state after valid submission), Footer (Component Dock
       link), App (landmarks, document title "Conduit — Contact Us").
3. [ ] Background layer: full-viewport fixed background with a
       placeholder workspace image from picsum.photos and a purple
       semi-transparent overlay (purple bg + opacity, or a gradient
       overlay div). Use `bg-cover bg-center fixed` + overlay div
       with `bg-violet-500/75`.
4. [ ] Top bar: horizontal flex row, `justify-between`, full width,
       padding, `z-10` above the background. Left: "Co." text
       (white, font-semibold, text-xl). Right: "CONTACT US" button
       (bg-violet-500, white text, px-4 py-2, rounded-lg, uppercase,
       text-sm font-semibold).
5. [ ] Modal card: centered with `mx-auto`, max-w-md (~500px),
       bg-white, rounded-xl, shadow-lg, overflow-hidden. Flex column
       layout. z-10 above background.
6. [ ] Banner header: full-width image section with a placeholder
       architecture/office photo from picsum.photos. Overlay text
       "CONTACT US" centered (white, bold, uppercase, text-xl tracking-wide).
       Height ~140px with object-cover.
7. [ ] Close button: absolute top-right of card, p-2, text-violet-500,
       hover:text-violet-700. Renders an X (lucide `X` icon).
       onClick sets a `dismissed` state that hides the card.
8. [ ] Form fields component: reusable `FormField` with icon prop
       (lucide component), placeholder, type, and optional error state.
       Layout: flex row with icon on left (text-gray-400), input
       filling remaining space. Bottom border style (border-b
       border-gray-200, focus:border-violet-500 transition). Error
       state: border-red-500 + optional error text.
9. [ ] Four fields in order: Name (User icon, text), Email (Mail icon,
       email), Phone (Phone icon, text), Message (MessageSquare icon,
       textarea with min-h-[100px]).
10. [ ] Submit button: "SEND NOW" uppercase, bg-violet-500, white text,
        rounded-full (pill), py-3 px-8, mx-auto block, font-semibold,
        hover:bg-violet-600 transition. Full width on mobile.
11. [ ] Form validation: required fields (name, email) show red border
        + error text on submit attempt when empty. Email field validates
        format. Phone and message are optional. Use React state for
        validation (no external form library needed for 4 fields).
12. [ ] Submit success state: after valid submission, hide the form,
        show a success message (green check + "Thank you! We'll be in
        touch soon." or similar). No fake network call — instant state
        transition.
13. [ ] Footer: minimal Component Dock credit linking
        https://www.componentdock.com/.
14. [ ] Run `npm run verify:app -- conduit` (typecheck → lint → vitest
        100% → build) and fix until green.
15. [ ] Open PR `feat/template-conduit` → merge immediately
        (`gh pr merge --squash --delete-branch`). PR description must
        include: source URL, preview URL (404 — screenshot fallback),
        token list (violet #8B5CF6, white card, pill button, sans-serif
        font, blurred background), and what differs (renamed "Conduit",
        Inter via Google Fonts, lucide icons, picsum placeholder images,
        purple overlay over blurred photo, Component Dock footer).
16. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1431 `[x]` +
        surge URL (`https://conduit.free.componentdock.com`),
        `npm run readme:status`, push.

## Visual reference

Screenshot URL (AVIF): https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v16.jpg
Converted locally to `/tmp/cf16-screenshot.png` (1920×939 PNG).
Key visual elements to match:
- Purple-over-blurred-photo full-page background
- Centered white modal card with banner image header
- 4 form fields with left icons and clean borders
- Purple pill-shaped "SEND NOW" button
- Minimal, modern, clean aesthetic
