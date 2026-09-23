# Passwell (ColorLib Login Form 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-passwell`. Recreation name: **Passwell** (NEW name —
> the ColorLib source keeps its name "Login Form 03").

## Source mapping

- **ColorLib item:** "Login Form 03" (TEMPLATES.md line 2149; section
  "## Login Forms (18)" at ~line 2143). The
  `wp/template/login-form-03/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/login-form-03/
- **Preview URL — REACHABLE (verified by direct fetch):**
  The naive `https://preview.colorlib.com/theme/login-form-03/` returns
  404. The REAL preview is:
  **`https://preview.colorlib.com/theme/bootstrap/login-form-03/`**
  (HTTP 200, 11,333 bytes HTML, `<title>Login #3</title>`).
- **Preview CSS:** `css/style.css` (3,274 bytes, 152 lines — ALL custom
  styling) + `css/bootstrap.min.css` (Bootstrap 4). Font: **Roboto**
  via Cloudflare @font-face (weights 300, 400) — use Google Fonts `<link>`.
  Icon font: `fonts/icomoon/style.css` (checkbox glyph — REPLACE with
  lucide or native checkbox styling).

## Reference research (done — do not redo)

### Screenshot (login-form-03.jpg, 1200×972 AVIF)

Viewed via vision tool. Top ~30%: lifestyle/kitchen photograph (white
tiles, wooden shelf, white pot, vintage kitchen scale) spanning full
width. Below: large light-gray (#f6f7fc) area with a centered white
card. Card shows "Login to Colorlib" (dark text, centered), "Username"
label above a light-gray input box, "Password" label above a matching
input, row with orange-checked "Remember me" checkbox (left) and "Forgot
Password" link (right), full-width orange "Log In" button at bottom.
Card has subtle shadow. Image bleeds above card via negative margin
overlap. Aesthetic: clean, minimal, modern, warm orange accent on
neutral gray/white.

### Live DOM structure (from fetched HTML + CSS)

```
body (font: Roboto, bg: #fff, 14px, #b3b3b3)
  div.half (height: 100vh, min-height: 700px)
    div.bg.order-1.order-md-2 (bg-image: kitchen photo, h: 200px, cover)
    div.contents.order-2.order-md-1 (bg: #f6f7fc)
      div.container
        div.row.align-items-center.justify-content-center
          div.col-md-6
            div.form-block (bg: #fff, padding: 40px, margin-top: -300px)
              div.text-center.mb-5
                h3 "Login to <strong>Colorlib</strong>"
              form
                div.form-group.first
                  label[for=username] "Username"
                  input.form-control#username[type=text]
                    placeholder="your-email@gmail.com"
                div.form-group.last.mb-3
                  label[for=password] "Password"
                  input.form-control#password[type=password]
                    placeholder="Your Password"
                div.d-sm-flex.mb-5.align-items-center
                  label.control.control--checkbox
                    span.caption "Remember me"
                    input[type=checkbox] (checked)
                    div.control__indicator (20×20, radius 4px)
                  span.ml-auto
                    a.forgot-pass "Forgot Password" (#888, underline)
                input.submit.btn.btn-block.btn-primary[value="Log In"]
                  (h: 54px, bg: #fb771a)
```

### Key CSS tokens extracted

- Font: Roboto 300/400 (Google Fonts)
- Page bg (body): #fff (but overridden by .half .contents: #f6f7fc)
- Card (.form-block): #fff, padding 40px, margin-top -300px
- Inputs: bg #efefef, no border, radius 4px, h 54px
- Button: bg #fb771a, hover #fb8633, h 54px
- Links/captions: #888
- Checkbox unchecked: #e6e6e6 (20×20, radius 4px)
- Checkbox checked: #fb771a
- Image panel (.half .bg): 200px height, cover, center
- Viewport: 100vh, min 700px

## Implementation tasks

### 1. Scaffold app
- [ ] Create `apps/passwell/` from simplest existing login app (copy
      structure, rename package to `@free-react-templates/passwell`)
- [ ] Set `public/CNAME` → `passwell.free.componentdock.com`
- [ ] Set `"homepage"` in package.json
- [ ] Add Google Fonts `<link>` for Roboto (300, 400) in `index.html`

### 2. Layout components
- [ ] `SplitLayout.tsx` — full-viewport split: left image panel (200px
      height, bg-image with picsum placeholder) + right content panel
      (#f6f7fc)
- [ ] `FormCard.tsx` — centered white card with -300px margin-top,
      padding 40px (25px mobile)

### 3. Form components
- [ ] `LoginForm.tsx` — composes title, fields, checkbox row, submit
- [ ] Username input (text, placeholder, #efefef bg, radius 4px, h 54px)
- [ ] Password input (password type, same styling)
- [ ] Custom checkbox "Remember me" (checked default, #fb771a when checked,
      #e6e6e6 unchecked, 20×20, radius 4px)
- [ ] "Forgot Password" link (#888, underlined, font-size 14px, href="#")
- [ ] "Log In" submit button (full-width, #fb771a, white text, h 54px,
      hover #fb8633)

### 4. Styling (Tailwind theme)
- [ ] Define `@theme` tokens in `index.css`:
      `--color-brand: #fb771a`, `--color-brand-hover: #fb8633`,
      `--color-input-bg: #efefef`, `--color-page: #f6f7fc`
- [ ] Match input height (54px), radius (4px), no border
- [ ] Match button height (54px), full width, orange bg
- [ ] Responsive: stack at ≤992px, card padding 25px

### 5. Footer
- [ ] Add Component Dock attribution footer (link to
      https://www.componentdock.com/)

### 6. Tests (TDD — write first)
- [ ] SplitLayout renders with image panel and content panel
- [ ] FormCard renders centered with correct background
- [ ] LoginForm renders username, password, checkbox, link, button
- [ ] Checkbox toggles checked state with correct colors
- [ ] Submit button hover changes color
- [ ] Form prevents default submit
- [ ] Responsive layout stacks at narrow viewport
- [ ] Accessibility: labels, aria, focus-visible

### 7. Verification
- [ ] `npm run verify:app -- passwell` green
- [ ] Visual diff vs preview
- [ ] Responsive check at 992px

## Design notes

### Structure order (top to bottom)
1. Background image panel (left on desktop, top on mobile)
2. Content panel (right on desktop, below on mobile)
3. Form card (centered, overlapping image via negative margin)
4. Title → Username → Password → [Checkbox + Link] → Submit

### Section-by-section fidelity notes
- **Image panel:** Use picsum placeholder (`/seed/passwell-kitchen/`).
  Height 200px, cover, center. The original uses a kitchen photo;
  keep the warm/lifestyle aesthetic.
- **Content panel:** Solid #f6f7fc. No gradient, no pattern.
- **Form card:** White (#fff), 40px padding (25px mobile), margin-top
  -300px creates the overlap effect. No visible shadow in the CSS
  (Bootstrap may add subtle shadow via card class — verify).
- **Title:** h3 "Login to **Passwell**" (centered, bold brand).
  Source uses "Colorlib" — replace with "Passwell".
- **Inputs:** Borderless, #efefef bg, 4px radius, 54px height.
  Focus removes outline/shadow (source behavior).
- **Checkbox:** Custom-styled, not native appearance. The source uses
  icomoon font for the checkmark — replace with a simple SVG/CSS
  checkmark or lucide icon.
- **Button:** Full-width (#fb771a orange), 54px height, white text.
  Hover: #fb8633. No border-radius beyond Bootstrap default (~4px).
