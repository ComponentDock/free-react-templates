# FormCraft (ColorLib Contact Form 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-formcraft`. Recreation name: **FormCraft** (NEW name —
> the ColorLib source keeps its name "Contact Form 20").

## Source mapping

- **ColorLib item:** "Contact Form 20" (TEMPLATES.md line 1423; section
  "## Contact Forms (40)" at line 1399).
- **Source URL:** https://colorlib.com/wp/template/contact-form-20/
- **Preview URL — UNREACHABLE (404):** https://preview.colorlib.com/theme/contact-form-20/
  Returns HTTP 404. Design tokens extracted entirely from screenshot analysis.

## Reference research (done — do not redo)

### Screenshot (`contact-form-20.jpg`, AVIF format, 6KB)

Browsed visually (image converted to PNG for analysis). Layout (top to bottom):

1. **Page background**: Light gray (#f5f5f5), full viewport.
2. **White card**: Centered horizontally, subtle shadow, ~600-700px wide.
3. **Heading**: "Let's Talk" in dark gray (#333), large sans-serif font,
   centered at the top of the card.
4. **Name + Email row**: Two columns side by side:
   - Left: "Name *" label (gray, uppercase) above text input "Your name"
   - Right: "Email *" label (gray, uppercase) above text input "Your email"
   - Both have underline-only bottom border
5. **Subject field**: Full-width, "Subject" label (gray, uppercase), input
   "Your subject", underline-only border
6. **Message textarea**: Full-width, "Message *" label (gray, uppercase),
   textarea "Write your message", underline-only border, resize handle
   visible at bottom-right
7. **SEND MESSAGE button**: Blue/periwinkle background (~#5B6ABF), white
   uppercase text, pill shape (fully rounded corners), centered, medium size

**Aesthetic**: Ultra-clean, minimal, professional. No images, no icons, no
decoration — just the form on a gray background with a centered card. The blue
pill button is the single pop of color. Clean sans-serif typography throughout.

### Design tokens (screenshot analysis — preview was 404)

| Token       | Value                                  | Use                                                |
| ----------- | -------------------------------------- | -------------------------------------------------- |
| Page bg     | `#f5f5f5` (light gray)                 | Full-viewport solid background                     |
| Brand       | `#5B6ABF` (periwinkle/blue)            | SEND MESSAGE button background                     |
| Heading     | `#333333` (dark gray)                  | "Let's Talk" heading                               |
| Label       | `#999999` (gray)                       | Uppercase field labels                             |
| Input text  | `#333333` (dark gray)                  | User-typed text                                    |
| Input border| `#dddddd` (light gray)                 | Bottom-border only (underline style)               |
| Card bg     | `#ffffff` (white)                      | Form card surface                                  |
| Card shadow | Subtle box-shadow                      | Slight elevation                                   |
| Button text | `#ffffff` (white)                      | "SEND MESSAGE" label                               |
| Button radius| ~50px (pill)                          | Fully rounded corners                              |
| Font        | Poppins (sans-serif)                   | Clean sans-serif via Google Fonts                  |
| Inputs      | Underline style, no full border        | Bottom-border only, ~48px height                   |
| Textarea    | Full-width, underline border           | Min ~120px tall, resize handle visible             |

### Picsum placeholder plan

**NONE.** This template has no decorative images — solid gray background,
white card, form fields only. Everything is CSS + HTML form elements.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/formcraft` from the simplest existing app
       (`cp -r apps/<simplest> apps/formcraft`), rename package to
       `@free-react-templates/formcraft`, add Poppins 400/500/600
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `formcraft.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Page (gray bg, centered card with
       shadow), FormHeading ("Let's Talk"), NameEmailRow (two columns,
       underline inputs), SubjectField (full-width), MessageTextarea
       (full-width, min-height), SubmitButton (blue pill, uppercase),
       Footer (Component Dock link). App (landmarks, document title
       "FormCraft — Contact").
3. [ ] Layout shell: light gray #f5f5f5 full-viewport bg, centered
       white card (~600-700px wide, subtle shadow, ~40px internal
       padding), vertical flex layout.
4. [ ] Heading: "Let's Talk" centered at top of card, dark gray
       (#333), large font size (~28-32px).
5. [ ] Name + Email row: flex row, two equal columns. Each: gray
       uppercase label ("Name *", "Email *"), underline-style text
       input (bottom border only, no full border). Responsive: stack
       vertically on mobile.
6. [ ] Subject field: full-width, gray uppercase label "Subject",
       underline-style text input.
7. [ ] Message textarea: full-width, gray uppercase label "Message *",
       underline-style textarea, min-height ~120px, resize handle
       visible.
8. [ ] Submit button: centered "SEND MESSAGE", blue/periwellow bg
       (#5B6ABF), white uppercase text, pill shape (border-radius
       ~50px), ~48px height. Prevents default form submission.
9. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
10. [ ] Run `npm run verify:app -- formcraft` (typecheck → lint → vitest
       100% → build) and fix until green.
11. [ ] Open PR `feat/template-formcraft` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL (404), token list (light gray
       #f5f5f5, periwinkle #5B6ABF, Poppins, pill button, underline
       inputs), and what differs (renamed "FormCraft", Poppins via
       Google Fonts, NO picsum needed, Component Dock footer).
12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1423 `[x]` +
       surge URL (`https://formcraft.free.componentdock.com`),
       `npm run readme:status`, push.
