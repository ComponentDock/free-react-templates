# Template: Signnoir (Signup Form)

## Purpose

Signnoir is a split-panel signup-form website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Signup Form 20" website template (source:
https://colorlib.com/wp/template/signup-form-20/ — demo title "Sign Up 10"),
built under a DIFFERENT name (Signnoir — "sign" + French "noir" (black), for
the template's dark charcoal page, black-and-white photographic left panel,
and black pill submit button; single lowercase word), per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `signup-form-20`
- **Source:** https://colorlib.com/wp/template/signup-form-20/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/bootstrap/signup-form-20/**
  (HTTP 200, 6,246 bytes, `<title>Sign Up 10</title>`)
  - NOTE: the naive `https://preview.colorlib.com/theme/signup-form-20/`
    returns 404 — this signup-form family lives under
    `theme/bootstrap/<slug>/` (same path as signup-form-13/14/16/18/19). Do
    not redo this lookup.
- **Preview CSS:** `css/style.css?v=f9414aa6` (20,296 bytes) —
  Bootstrap-derived `cl-*` base + hand-written template block starting at
  `.ftco-section` (char 14,984 of the file). Template overrides:
  `body` (Roboto, `#313131` page bg), `a` (`#6807f9`), `.ftco-section`,
  `.heading-section`, `.img`, `.wrap` (radius + shadow), `.cl-text-wrap`
  (+ `:after` black overlay, `.text` styles), `.login-wrap` (+ h3),
  `.cl-form-group label`, `.cl-form-control` (gray-fill overrides),
  `.social-wrap` (`.or` divider, `.social-media` icons), `.checkbox-wrap`
  (+ `.checkmark`), `.cl-btn`, `.cl-btn.cl-btn-secondary` (BLACK override
  of Bootstrap gray `#6c757d`).
- **Scripts:** none required (no eye-toggle — the password field is plain).
  Icons: inline FontAwesome SVGs for social brands only — **brand marks MUST
  be inline SVG** (lucide-react removed brand icons; precedent:
  template-airwave). Checkbox checkmark glyphs (`\f0c8`/`\f14a`) — REPLACE
  with a native/visually-styled checkbox; do not ship Font Awesome.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400, 500, 700)**
  in `index.html`; weights used: 300 (card h3), 400 (body), 500 (field
  labels), 700 (left-panel h2).
- **Assets:** `images/bg.jpg` = dark abstract black-and-white 3D-boxes
  photo (left panel) — use `https://picsum.photos/seed/signnoir-1/<w>/<h>`
  placeholder, never the source asset.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-20.jpg
  (served as AVIF, 1200×972; visually analyzed 2026-09-30 via downloaded
  file; matches the live preview).
- **TEMPLATES.md:** "## Signup Forms" section, line 2834
  (`- [ ] **Signup Form 20**`).

## Design tokens

(extracted from the live preview stylesheet + verified against the
screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", Arial, sans-serif` (Google Fonts 300/400/500/700) | body 16px |
| Body line-height | `1.8` | |
| Page background | `#313131` (dark charcoal) | body rule — full viewport |
| Body text color | `gray` | |
| Page heading | 28px, `#fff`, centered | `.heading-section` ("Sign Up #10") |
| Link / accent color | `#6807f9` (violet) | `a` rule + "Sign In" link + input focus border-color + social-icon hover bg |
| Link transition | `.3s all ease` | |
| Section padding | `7em 0` | `.ftco-section` |
| Wrap (`.wrap`) | width 100%, `display: block` (flex at ≥768px via `d-md-flex`), `overflow: hidden`, `border-radius: 5px`, `box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)`, relative | inside `col-lg-10` centered row |
| Left panel (`.cl-text-wrap`) | 100% width below 992px, `50%` at ≥992px; position relative, z-index 0; padding `1.5rem` (`p-4`) / `3rem` lg (`p-lg-5`); `align-items: flex-end` (text bottom-aligned) | flex row partner |
| Left panel overlay | `:after` solid `#000`, `opacity: .5`, inset 0, `z-index: -1` | dark tint over the photo |
| Left panel photo | `background-size: cover`, no-repeat, center center | `img` utility; inline `background-image: url(images/bg.jpg)` |
| Left panel text | color `rgba(255,255,255,0.8)` | |
| Left panel h2 | weight 700, `#fff`, 24px | "Welcome to signup form" |
| Left panel paragraph | body color (rgba(255,255,255,0.8) inherited) | "Far far away, behind the word mountains…" |
| Right panel (`.login-wrap`) | 100% below 992px, `50%` at ≥992px; `background: #fff` | white form panel |
| Card h3 | weight 300 (inherits h3 size ≈1.75rem), default `#000` | "Create an account" |
| Field row (`.cl-form-group`) | flex row, `align-items: center`, width 100% | label LEFT + input RIGHT on the same line |
| Field label | width `150px` (`.label`), weight 500, 14px, `rgba(0,0,0,0.9)`, margin-bottom 0 | VISIBLE labels left of inputs |
| Inputs (`.cl-form-control`) | width `calc(100% - 150px)`, height `50px`, `background: rgba(0,0,0,0.03)`, `border: none`, `border-radius: 4px`, no shadow, text `#000` 14px, padding `0 20px`, transition `.3s` | light-gray fill, 4px radius (NOT pills) |
| Input placeholder | `rgba(0,0,0,0.3)` | |
| Input focus | outline none, no shadow, `border-color: #6807f9` (no visible border — border:none), `background: rgba(0,0,0,0.05)` (slightly darker fill) | |
| Checkbox row | `checkbox-wrap checkbox-primary`: block, `padding-left: 30px`, cursor pointer, 15px w400, `color: rgba(0,0,0,0.4)`, `text-transform: capitalize`, `margin-bottom: 12px` | wrapped in `cl-my-4` col |
| Checkmark | custom square glyph (FontAwesome `\f0c8` unchecked `rgba(0,0,0,0.1)` 18px; checked `\f14a` `#000`) | REPLACE with native checkbox + styled check (lucide `Check` / CSS); source renders **checked by default** |
| Checkbox text | "I agree all statements in terms of service" (capitalize transform → "I Agree All Statements In Terms Of Service") | |
| Button (`.cl-btn`) | `display: inline-block` (NOT full width — shrinkwraps label), pill `border-radius: 40px`, font-size 15px, no box-shadow base, cursor pointer | |
| Button padding | `cl-p-3` (≈1rem) on the `.submit` button | |
| Button secondary (source's "primary-looking" black button) | `background: #000 !important`, `border: 1px solid #000 !important`, text `#fff !important`, `box-shadow: 0px 10px 19px -16px rgba(0,0,0,0.29) !important` | "Create an account" |
| Button hover | `background: transparent`, text `#000`, border stays `#000` | outline-style hover (source CSS) |
| "or" divider | `.or` relative; `:after` 1px full-width line `#e6e6e6` behind (`z-index: -1`); `span` bg `#fff`, `padding: 0 20px` | centered |
| Social caption | "Signup with this services" (source grammar — paraphrase OK, keep same kind of line), `cl-mb-3 cl-text-center` | |
| Social icons | 40×40px circles, `border: 1px solid rgba(0,0,0,0.05)`, `border-radius: 50%`, transparent bg, glyph `#000` 16px, `margin-right: 10px` | Google, Facebook, Twitter — brand marks as inline SVG |
| Social icon hover/focus | `background: #6807f9`, glyph `#fff` | |
| Footer line | `p` `cl-mt-4` centered, body color; `a` "Sign In" → `#6807f9` | "I'm already a member! Sign In" |

Note: the preview CSS contains `body { min-width: 992px !important }` — a
ColorLib preview-environment desktop artifact. The stylesheet's own media
queries (flex row at ≥768px, 50/50 panels at ≥992px) prove the template is
responsive; DO NOT replicate `min-width: 992px` in the app.

## Section structure (from the live DOM)

1. Page section — dark charcoal `#313131` background, `7em` vertical
   padding, centered column (max-width ~1140px container)
2. Page heading row — "Sign Up #10", 28px, white, centered
   (`.heading-section` in `col-md-6`), margin below
3. Wrap row — centered `col-lg-10`; `.wrap` (5px radius, soft shadow,
   overflow hidden; flex at ≥768px, stacked below)
   a. Left panel (`.cl-text-wrap.img`) — dark photo background (cover,
      center) + solid-black 50% overlay; text block bottom-aligned,
      padding 1.5rem/3rem: h2 "Welcome to signup form" (700, 24px, white)
      + paragraph "Far far away, behind the word mountains, far from the
      countries Vokalia and Consonantia, there live the blind texts."
   b. Right panel (`.login-wrap`, white) — h3 "Create an account"
      (weight 300)
      - Form (`form.signup-form`), five label-left rows:
        Full Name (placeholder "Full Name") → Email Address
        (placeholder "johndoe@email.com") → Phone no. (placeholder "+01")
        → Password (type="password", placeholder "Password") → Website
        (placeholder "Website")
      - Checkbox row — square check (checked) + "I agree all statements in
        terms of service"
      - Submit — black pill "Create an account" (inline-block, not full
        width, left-aligned)
      - Social block — "or" divider line, "Signup with this services",
        three circular brand icons (Google / Facebook / Twitter)
      - Footer line — "I'm already a member! Sign In" ("Sign In" = `#6807f9`
        link)

No navbar; no other sections — single split-panel template.

## Gherkin requirements

### Scenario: Page renders with dark background and white heading
```
Given the user visits the Signnoir signup page
Then the page background is dark charcoal (#313131)
And a "Sign Up #10"-style page heading is displayed
And the heading is 28px, white (#fff), and centered
And the page uses Roboto loaded from Google Fonts
```

### Scenario: Split wrap layout
```
Given the page renders on a desktop viewport (width ≥ 992px)
Then a centered rounded card (5px radius, soft shadow) is displayed
And the card contains a left image panel and a right white form panel
And the two panels each occupy 50% of the card width
When the user views the page below 768px
Then the panels stack vertically (image panel above the form panel)
And each panel spans the full card width
```

### Scenario: Left photo panel with overlay and welcome text
```
Given the split card is visible
Then the left panel shows a dark photographic background (cover, centered)
And a solid black overlay at 50% opacity tints the photo
And the welcome text is bottom-aligned within the panel
And a bold 24px white heading "Welcome to signup form" is displayed
And a paragraph below it reads the "Far far away…" blind-texts copy
And the text color is rgba(255,255,255,0.8)
```

### Scenario: Right form panel heading
```
Given the split card is visible
Then the right panel has a white background
And "Create an account" is displayed as a weight-300 heading
```

### Scenario: Form fields render with labels to the left
```
Given the signup form is visible
Then a text input with placeholder "Full Name" is displayed under a "Full Name" label
And a text input with placeholder "johndoe@email.com" is displayed under an "Email Address" label
And a text input with placeholder "+01" is displayed under a "Phone no." label
And a password input with placeholder "Password" is displayed under a "Password" label
And a text input with placeholder "Website" is displayed under a "Website" label
And each label sits to the LEFT of its input on the same row
And labels are 14px, weight 500, rgba(0,0,0,0.9), in a 150px-wide column
And each input is 50px tall, 4px radius, filled rgba(0,0,0,0.03), borderless
And each input's width is calc(100% - 150px)
And placeholders are rgba(0,0,0,0.3)
```

### Scenario: Terms checkbox
```
Given the form is visible
Then a checkbox row is displayed below the fields
And the checkbox is CHECKED by default
And the label text "I agree all statements in terms of service" is rendered capitalized
And the label color is rgba(0,0,0,0.4) at 15px
When the user clicks the checkbox
Then the checked state toggles
```

### Scenario: Submit button behavior
```
Given the form is visible
Then a black pill button "Create an account" is displayed
And the button is NOT full width (it shrinkwraps its label) and is left-aligned
And the button uses #000 background, #000 border, and white 15px text
And the button has radius 40px and a soft down-shadow
When the user hovers the button
Then the background becomes transparent and the text becomes #000
When the user clicks "Create an account"
Then the form submission is triggered
```

### Scenario: Social sign-up block
```
Given the form is visible
Then an "or" divider line is displayed below the button
And the line is #e6e6e6 with the word "or" in a white gap at its center
And a "Signup with this services" caption is displayed below the divider
And three circular 40px social icon links are displayed (Google, Facebook, Twitter)
And each circle has a 1px rgba(0,0,0,0.05) border and a #000 glyph
When the user hovers or focuses a social icon
Then its background becomes #6807f9 and its glyph becomes #fff
```

### Scenario: Sign-in footer line
```
Given the form is visible
Then "I'm already a member!" text is shown below the social icons
And "Sign In" appears as a clickable #6807f9 link
```

### Scenario: Responsive layout
```
Given the user views the page on a mobile viewport (width < 768px)
Then the image panel stacks above the form panel
And both panels span the full card width
And the dark charcoal background still fills the viewport
And the form fields keep their label-left rows (source keeps the 150px label column at all sizes)
```

### Scenario: Accessibility
```
Given the form is rendered
Then every input has an associated visible label (wired via htmlFor/id — the source's dangling for= attributes must be fixed)
And the checkbox is a native checkbox input
And the social icon links have accessible names (aria-label) and focus-visible states
And the submit button has type="submit"
And interactive elements have focus-visible states
```

### Scenario: Brand icons are inline SVG
```
Given the social icons are rendered
Then the Google, Facebook, and Twitter marks are inline SVG
And no Font Awesome stylesheet or glyph font is shipped
And no lucide-react brand icons are used (lucide-react removed brand icons)
```

## Verification checklist

- [ ] Page background `#313131`, Roboto via Google Fonts (300/400/500/700) in index.html
- [ ] Centered white 28px page heading above the card ("Sign Up #10" or paraphrase)
- [ ] Wrap: `col-lg-10` centered, 5px radius, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`, overflow hidden
- [ ] Left panel: picsum placeholder photo (deterministic seed), solid-black 50% overlay, bottom-aligned text, padding 1.5rem/3rem lg
- [ ] Left panel h2 "Welcome to signup form" (700, 24px, white) + "Far far away…" paragraph (rgba(255,255,255,0.8))
- [ ] Right panel white, "Create an account" h3 weight 300
- [ ] Five label-left field rows: Full Name / Email Address (johndoe@email.com) / Phone no. (+01) / Password / Website — 150px label column, 50px gray-fill inputs (4px radius, calc(100% - 150px) width), rgba(0,0,0,0.3) placeholders
- [ ] Focus darkens input fill to rgba(0,0,0,0.05), no ring (source behavior)
- [ ] Terms checkbox checked by default, capitalized label, native input + styled check (no Font Awesome)
- [ ] Black pill button "Create an account" (radius 40px, inline-block NOT full width, white 15px text, soft shadow); hover → transparent bg + black text
- [ ] "or" divider (#e6e6e6 line, white-gap span) + "Signup with this services" caption
- [ ] Three 40px circular social icons (Google/Facebook/Twitter as inline SVG), hover/focus bg `#6807f9` + white glyph
- [ ] "I'm already a member! Sign In" line — "Sign In" in `#6807f9`
- [ ] Brand tokens in `@theme` (page bg `#313131`, accent `#6807f9`, overlay black, wrap shadow, input fill)
- [ ] Responsive: panels stack below 768px, 50/50 at ≥992px; NO `min-width: 992px` on body
- [ ] Placeholder image from picsum.photos (deterministic seed `signnoir-1`)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
