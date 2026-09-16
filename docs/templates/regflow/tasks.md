# Regflow (ColorLib Regform 23) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-regflow`. Recreation name: **Regflow** (NEW name —
> the ColorLib source keeps its name "Colorlib Regform 23").

## Source mapping

- **ColorLib item:** "Colorlib Regform 23" (TEMPLATES.md line 1403; section
  "## Contact Form (42)" at line 1402). The
  `wp/template/colorlib-regform-23/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-23/
- **Preview URL — UNREACHABLE (404 as of 2026-09-16):**
  `https://preview.colorlib.com/theme/colorlib-regform-23/` returns 404.
  The naive `/theme/` path does not exist for this template.
- **Actual demo URL — REACHABLE (verified 2026-09-16 by direct fetch):**
  **`https://colorlib.com/etc/regform/colorlib-regform-23/`**
  (HTTP 200, 1,769 bytes, 54 lines, `<title>RegistrationForm_v7 by Colorlib</title>`).
  This is a single-file form page — no framework, no JS beyond analytics.
- **Demo CSS:** `css/style.css` (4,997 bytes, 230 lines — ALL styles,
  hand-written, NO Bootstrap, NO jQuery). Fonts: local Montserrat
  (Regular, SemiBold, Bold @font-face) → **Google Fonts `<link>` (400,
  600, 700)** for React version. Icon font: Material Design Iconic Font
  (zmdi) → **Replace with lucide-react ArrowRight icon**.

## Reference research (done — do not redo)

### Live demo DOM analysis

The demo is a minimal single-page form — NO navbar, NO sections, NO footer
in the original. Structure:

```
<body>
  <div class="wrapper">          <!-- full-viewport, bg image, flex center -->
    <div class="inner">          <!-- card: #39459b bg, #0d99d7 10px border -->
      <form>
        <h3>Contact Us</h3>      <!-- uppercase, Montserrat Bold 45px -->
        <p>Lorem ipsum...</p>     <!-- centered, white text -->
        <label class="form-group">
          <input type="text">     <!-- Your Name -->
          <span>Your Name</span>  <!-- floating label, #00ade6 -->
          <span class="border"></span>  <!-- animated underline -->
        </label>
        <label class="form-group">
          <input type="text">     <!-- Your Mail -->
          <span>Your Mail</span>
          <span class="border"></span>
        </label>
        <label class="form-group">
          <textarea></textarea>   <!-- Your Message -->
          <span>Your Message</span>
          <span class="border"></span>
        </label>
        <button>Submit <i class="zmdi zmdi-arrow-right"></i></button>
      </form>
    </div>
  </div>
</body>
```

No footer in original — **add a minimal footer with Component Dock
attribution** per repo conventions (AGENTS.md rule 5).

### Screenshot analysis (`colorlib-reg-form-23.jpg`)

Preview image: a centered form card on a blurred/dark background image.
Blue-purple card with thick cyan border. White heading "CONTACT US" at
top, three form fields with cyan labels and underlines, a white-bordered
submit button at bottom. Minimal, flat, modern aesthetic. Color palette:
blue/cyan/white on a photographic background.

### Design tokens extracted from `css/style.css`

| Token | Value | Usage |
|-------|-------|-------|
| Card background | `#39459b` | `.inner` background |
| Card border | `#0d99d7` | `.inner` 10px solid border |
| Label color | `#00ade6` | `.form-group span` text color |
| Focus/valid border | `#fff` | `.form-control:focus/:valid` border-bottom |
| Button hover fill | `#2098D1` | `button:before` background (scaleX transition) |
| Body text | `#fff` | All text is white on blue background |
| Font family | Montserrat | Regular 400, SemiBold 600, Bold 700 |
| Card max-width | 758px | `.inner` max-width |
| Card padding | 77px 99px 87px | `.inner` padding (desktop) |
| Button size | 162×51px | `button` width/height |
| Button border | 2px solid #fff | `button` border |
| Mobile breakpoint | 767px | `@media (max-width: 767px)` |
| Mobile border | none | Card loses border on mobile |
| Mobile bg | `#39459b` | Wrapper becomes solid blue on mobile |

## Implementation task outline

### Phase 1: Scaffold

- [ ] Copy simplest existing app (e.g. a form template if one exists,
  otherwise any clean app) as `apps/regflow`
- [ ] Rename package to `@free-react-templates/regflow`
- [ ] Update `public/CNAME` to `regflow.free.componentdock.com`
- [ ] Update `homepage` in `package.json` to
  `https://regflow.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Components

- [ ] `FormWrapper.tsx` — Full-viewport flex container with background image
  (picsum.photos placeholder)
- [ ] `FormCard.tsx` — Centered card with #39459b bg, #0d99d7 border, shadow
- [ ] `FormField.tsx` — Reusable floating-label input/textarea with animated
  underline (scaleX transition on focus, translateY+scale label animation)
- [ ] `SubmitButton.tsx` — Centered button with ArrowRight icon, hover fill
  animation (scaleX from left), arrow shift on hover
- [ ] `Footer.tsx` — Minimal footer with Component Dock attribution (original
  has no footer — added per repo conventions)

### Phase 3: Composition + polish

- [ ] `App.tsx` — Compose wrapper > card > form > footer
- [ ] `index.css` — Tailwind entry + theme tokens (card colors, button colors)
- [ ] CSS animations: floating label (translateY + scale), underline (scaleX),
  button fill (scaleX), arrow shift (translateX)
- [ ] Verify responsive: card loses border/shadow on mobile, wrapper goes solid

### Phase 4: Testing

- [ ] Write tests for each component (TDD: RED → GREEN → REFACTOR)
- [ ] Test floating label animation triggers on focus
- [ ] Test form validation (required fields)
- [ ] Test button hover effect (CSS-only, verify class presence)
- [ ] Verify 100% coverage with `npm run test:coverage`
- [ ] Run typecheck + lint
- [ ] Build successfully

### Phase 5: Verification + deploy

- [ ] Run `scripts/verify-app.sh regflow` (FAST_MODE local gate)
- [ ] Commit, push, open PR, merge
- [ ] Verify Surge deployment at `regflow.free.componentdock.com`
