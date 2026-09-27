# Regzen (Colorlib Regform 29) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-regzen`. Recreation name: **Regzen** (NEW name —
> the ColorLib source keeps its name "Colorlib Regform 29").

## Source mapping

- **ColorLib item:** "Colorlib Regform 29" (TEMPLATES.md line 2644; first
  unchecked item in the Regform section). The
  `wp/template/colorlib-regform-29/` slug appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-29/
- **Preview URL — UNREACHABLE (404 at time of prep 2026-09-28):**
  `https://preview.colorlib.com/theme/colorlib-regform-29/` returns 404.
  Fell back to screenshot analysis as the primary reference.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-29.jpg
  (1200x972 AVIF — converted to PNG and analyzed visually)
- **Category:** Registration Form Templates (ColorLib breadcrumb)

## Reference research (done — do not redo)

### Screenshot analysis (`colorlib-reg-form-29.jpg`, 1200x972 AVIF)

Browsed visually via image analysis. The template is a SINGLE-PAGE ticket
booking form with a split-screen card layout:

**Overall layout:**
- Full-viewport muted teal/blue background (~#a8c8d4)
- Centered white card (roughly 800-900px wide, 500px tall)
- Card split: left 50% = form, right 50% = image carousel
- Below the card: white section (footer area)

**Left side (form):**
- "Booking Tickets" heading — dark navy, bold, with a dark navy left-border accent (3-4px)
- Description paragraph: "Orci ac auctor augue mauris augue neque gravida in hendrerit gravida rutrum." (gray text)
- Form fields in a 2-column grid:
  - Row 1: FULL NAME (text input) | YOUR EMAIL (text input)
  - Row 2: PERSON (number spinner, default "1") | DATE (date picker, "8/9/2018") | TICKET TYPE (dropdown, "VIP")
- Price display: "$20.00" (large, bold, dark navy) + "/ VIP Person" (gray)
- Checkbox: "By booking, you agree to the Terms of Service" (link in blue)
- "BUY NOW" button: dark navy background (#1a365d), white text, rectangular with slight radius

**Right side (image carousel):**
- Top: Large museum interior photo (spiral staircase looking down)
- Bottom-left: Small artifact photo (stone lion/guardian figure)
- Bottom-right: Navigation arrows (< >) in gray
- Images are gallery/museum content appropriate for ticket booking

**Below card:**
- White section, appears to be a simple footer area

### Design tokens (screenshot analysis)

| Token          | Value                         | Notes                                                    |
| -------------- | ----------------------------- | -------------------------------------------------------- |
| Page bg        | `~#a8c8d4` (muted teal)      | Solid, no gradient, full viewport                        |
| Card           | `#ffffff`                     | White, centered, subtle shadow                           |
| Heading        | `~#1a365d` (dark navy)        | Bold, left-border accent 3-4px                           |
| Body text      | `~#666666` (gray)             | Description, labels                                      |
| Labels         | Uppercase, ~12px              | Small caps style for field labels                        |
| Input bg       | `#ffffff`                     | White inputs with light gray borders                     |
| Input border   | `~#e0e0e0`                    | Light gray                                               |
| Price          | `~#1a365d` bold               | "$20.00" large + "/ VIP Person" gray                     |
| Button         | `~#1a365d` bg, `#fff` text   | Dark navy, rectangular, slight radius ~4px               |
| Link           | `~#2563eb` (blue)             | "Terms of Service"                                       |
| Carousel nav   | Gray `< >` arrows             | Left/right navigation                                    |
| Heading font   | Serif/display                 | "Booking Tickets" appears serif-style                    |
| Body font      | Sans-serif                    | Standard sans for form elements                          |

**Note:** All hex values are approximate from visual screenshot analysis.
The preview URL was unreachable (404). Implementer should match visual
appearance closely rather than strict pixel-perfect hex matching.

### Family context

This is a standalone registration/booking form — not part of a numbered
wizard family. It is a split-screen card design (form left, images right)
targeting galleries, museums, and exhibition venues. The key distinguishing
features are:
1. Split-screen card (form + image carousel) on teal background
2. Ticket booking fields (person count, date, ticket type dropdown)
3. Dynamic price display
4. Image carousel with navigation arrows
5. Terms of Service checkbox
6. Museum/gallery imagery theme

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/regzen` from the simplest existing app
       (`cp -r apps/<simplest> apps/regzen`), rename package to
       `@free-react-templates/regzen`, add Google Fonts `<link>` in
       index.html (pick appropriate serif + sans-serif fonts), set
       `public/CNAME` = `regzen.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): App (teal background, centered card,
       split layout), BookingForm (5 fields: name, email, person, date,
       ticket type; default values; validation), PriceDisplay (shows
       "$20.00 / VIP Person" by default, updates on ticket type change),
       TermsCheckbox (checkbox + "Terms of Service" link), BuyNowButton
       (click triggers submission), ImageCarousel (displays images,
       left/right arrows navigate), Footer (Component Dock credit).
3. [ ] Layout shell: solid muted teal `~#a8c8d4` page, centered white
       card (max-w ~900px, shadow, split flex layout: form left 50%,
       images right 50%); responsive: stack vertically on mobile
       (<768px).
4. [ ] Booking form section: "Booking Tickets" heading with dark navy
       left-border accent, description paragraph, 2-column grid of form
       fields (Full Name, Email in row 1; Person number, Date picker,
       Ticket Type dropdown in row 2), price display below fields.
5. [ ] Image carousel: display museum/gallery placeholder images
       (picsum.photos with gallery-themed seeds), left/right chevron
       navigation arrows, basic carousel state (current index, next/prev).
6. [ ] Terms of Service section: checkbox + label text with clickable
       "Terms of Service" link.
7. [ ] Buy Now button: dark navy `~#1a365d` background, white text,
       rectangular with slight radius, click handler.
8. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
9. [ ] Run `npm run verify:app -- regzen` (typecheck → lint → vitest
       100% → build) and fix until green.
10. [ ] Open PR `feat/template-regzen` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (404 — screenshot fallback),
       token list (teal `~#a8c8d4`, dark navy `~#1a365d`, split card,
       image carousel), and what differs (renamed "Regzen", picsum
       placeholders for museum images, Google Fonts, lucide icons,
       Component Dock footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2644 `[x]` +
       surge URL (`https://regzen.free.componentdock.com`), `npm run
       readme:status`, push.
