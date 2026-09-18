# FormGate (ColorLib Contact Form 09) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-formgate`. Recreation name: **FormGate** (NEW name —
> the ColorLib source keeps its name "Contact Form 09").

## Source mapping

- **ColorLib item:** "Contact Form 09" (TEMPLATES.md line 1412; section
  "## Contact Forms (40)" at line 1399).
- **Source URL:** https://colorlib.com/wp/template/contact-form-09/
- **Preview URL — UNREACHABLE (404):** https://preview.colorlib.com/theme/contact-form-09/
  Returns HTTP 404. Design tokens extracted entirely from screenshot analysis.

## Reference research (done — do not redo)

### Screenshot (`contact-form-09.jpg`, 1200×972 AVIF)

Browsed visually (image converted to JPEG for analysis). Layout (top to bottom):

1. **Header**: "Contact Form #09" centered white heading on near-black background.
2. **Contact info row**: Three columns, centered, each with:
   - Circular tan/gold icon (60px, 50% radius)
   - Bold tan/gold label ("Address:", "Phone:", "Email:")
   - White/light gray value text
   - Left: location pin → "198 West 21th Street, Suite 721 New York NY 10016"
   - Center: phone icon → "+ 1235 2355 98"
   - Right: paper plane icon → "info@yoursite.com"
3. **Form heading**: "Get in touch with us" centered white text
4. **Form**: Four stacked full-width fields:
   - Name (text input)
   - Email (text input)
   - Subject (text input)
   - Message (textarea, taller)
   - All have dark gray background (~#222), no visible border, light placeholder text
5. **Submit button**: Full-width "SEND MESSAGE", tan/gold background, dark uppercase text, rectangular (no border-radius)
6. **Footer**: Minimal, links to Component Dock

**Aesthetic**: Dark, minimal, elegant. Near-black background with tan/gold accent. No decorative images or parallax — purely form-focused. Clean sans-serif typography.

### Design tokens (screenshot analysis — preview was 404)

| Token       | Value                                  | Use                                                        |
| ----------- | -------------------------------------- | ---------------------------------------------------------- |
| Page bg     | `#1a1a1a` (near-black)                | Full-viewport solid dark background                        |
| Brand       | `#c9a96e` (tan/gold)                  | Icon circles, button background, label accent              |
| Ink         | `#ffffff` (white)                      | Headings, body text                                        |
| Muted       | `#aaaaaa` (light gray)                | Secondary info values                                      |
| Input bg    | `#222222` (dark gray)                 | Form field backgrounds                                     |
| Placeholder | `#999999`                             | Input placeholder labels                                   |
| Button text | `#1a1a1a` (dark)                      | "SEND MESSAGE" label                                       |
| Font        | 'Open Sans' 400/600/700               | Sans-serif via Google Fonts                                |
| Icons       | Circular 60px, 50% radius             | tan/gold bg + white lucide icon                            |
| Button      | Full-width, rectangular (no radius)   | tan/gold bg, dark uppercase text, ~50px height             |
| Inputs      | Full-width, borderless, dark bg        | ~50px height, left-aligned placeholder                     |
| Textarea    | Full-width, borderless, dark bg        | Min 120px tall                                             |

### Icon mapping (lucide)

| Source glyph    | Recreation         |
| --------------- | ------------------ |
| Location pin    | lucide `MapPin`    |
| Phone           | lucide `Phone`     |
| Paper plane     | lucide `Send`      |

No other brand icons needed. No social media links.

### Picsum placeholder plan

**NONE.** This template has no decorative images — solid dark background, circular
icon elements only, form fields. Everything is CSS + lucide icons.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/formgate` from the simplest existing app
       (`cp -r apps/<simplest> apps/formgate`), rename package to
       `@free-react-templates/formgate`, add Open Sans 400/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `formgate.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Page (dark bg, centered content, title
       heading), ContactInfo (three columns, circular icons, labels +
       values), FormSection ("Get in touch" heading, four fields with
       placeholders, textarea min-height, SEND MESSAGE button, form
       submission), Footer (Component Dock link). App (landmarks,
       document title "FormGate — Contact").
3. [ ] Layout shell: near-black `#1a1a1a` full-viewport bg, centered
       content container (max-w ~800px, px padding), vertical flex
       layout with sections.
4. [ ] Title section: centered white heading "FormGate" (or similar
       template name), large font size (~36px), white, margin-top for
       spacing.
5. [ ] Contact info row: flex row with three equal columns, centered.
       Each column: circular 60px icon container (tan/gold bg, white
       lucide icon), bold tan/gold label, white/gray value text below.
       Responsive: stack vertically on mobile.
6. [ ] Form section: "Get in touch with us" heading (white, centered),
       four stacked form fields (Name, Email, Subject, Message textarea).
       Fields: dark gray bg, no border, white text, placeholder in gray,
       full width, ~50px height (textarea taller).
7. [ ] Submit button: full-width, tan/gold bg, dark uppercase "SEND
       MESSAGE" text, rectangular (no border-radius), ~50px height.
8. [ ] Footer: minimal Component Dock credit linking
       https://www.componentdock.com/.
9. [ ] Run `npm run verify:app -- formgate` (typecheck → lint → vitest
       100% → build) and fix until green.
10. [ ] Open PR `feat/template-formgate` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL (404), token list (near-black
        `#1a1a1a`, tan/gold `#c9a96e`, Open Sans, 60px circular icons,
        rectangular button), and what differs (renamed "FormGate", Open
        Sans via Google Fonts, lucide icons — MapPin/Phone/Send, NO
        picsum needed, Component Dock footer).
11. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1412 `[x]` + surge
        URL (`https://formgate.free.componentdock.com`), `npm run
        readme:status`, push.
