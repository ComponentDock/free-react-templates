# Signnoir — Design Notes

## Source
- ColorLib: Signup Form 20 ("Sign Up 10")
- URL: https://colorlib.com/wp/template/signup-form-20/
- Preview (LIVE): https://preview.colorlib.com/theme/bootstrap/signup-form-20/
  (naive `/theme/signup-form-20/` 404s — family lives under `/theme/bootstrap/`)
- Preview CSS: `css/style.css?v=f9414aa6` — tokens extracted; screenshot analyzed

## Structure order (top to bottom)
1. Page wrapper (dark charcoal #313131, full viewport, centered container, 7em vertical padding)
2. Page heading: "Sign Up #10" (28px, white, centered)
3. Wrap card (col-lg-10 centered; 5px radius, soft shadow, overflow hidden; flex at ≥768px)
4. Left panel — dark photo bg + black 50% overlay, bottom-aligned text:
   "Welcome to signup form" (bold 24px white) + "Far far away…" paragraph
5. Right panel (white) — "Create an account" (light h3, weight 300)
6. Form: Full Name → Email Address → Phone no. → Password → Website
   (labels LEFT in a 150px column, gray-fill inputs right)
7. Terms checkbox (checked by default, capitalized label)
8. Black pill button "Create an account" (inline-block, NOT full width)
9. Social block: "or" divider → "Signup with this services" → 3 circular brand icons
10. Footer line: "I'm already a member! Sign In" (violet link)

## Fidelity notes

### Page background
- Solid `#313131` dark charcoal, full viewport — NO gradient/image
- Generous vertical padding (`7em` ≈ 112px) around the centered card block
- Page heading "Sign Up #10" is WHITE 28px, centered, margin below (~3rem)
- The preview CSS has `body { min-width: 992px !important }` — a
  preview-environment desktop artifact. The stylesheet's own media queries
  prove the template is responsive. DO NOT replicate the min-width.

### Wrap card
- Centered in `col-lg-10`; `border-radius: 5px`; soft down-shadow
  `0px 10px 34px -15px rgba(0,0,0,0.24)`; `overflow: hidden`
- Flex ROW at ≥768px (`d-md-flex`); each panel 50% width at ≥992px;
  stacked (block) below 768px, panels full width

### Left panel (image + text)
- Photo background: `cover`, `no-repeat`, center center — inline
  `background-image: url(images/bg.jpg)` in source
- Placeholder: `https://picsum.photos/seed/signnoir-1/1200/900`
  (never the source asset; the source photo is a dark abstract
  black-and-white 3D-boxes scene — a dark picsum seed or grayscale
  treatment matches the mood)
- Overlay: solid `#000` at `opacity: .5` via `:after` (z-index -1),
  inset 0 — the photo renders heavily darkened, not black
- Text block bottom-aligned (`align-items: flex-end`), padding `1.5rem`
  (`p-4`) / `3rem` lg (`p-lg-5`)
- h2 "Welcome to signup form": weight 700, `#fff`, 24px, margin-bottom 1.5rem
- Paragraph: "Far far away, behind the word mountains, far from the
  countries Vokalia and Consonantia, there live the blind texts."
  — color `rgba(255,255,255,0.8)`, body line-height 1.8

### Right panel (form)
- White (`#fff`); h3 "Create an account": weight 300 (default h3 size),
  dark text, margin-bottom 1rem
- Field rows: `display: flex; align-items: center; width: 100%`
  - Label LEFT: width `150px` fixed, weight 500, 14px, `rgba(0,0,0,0.9)`,
    margin-bottom 0 — VISIBLE labels (source: Full Name / Email Address /
    Phone no. / Password / Website)
  - Input RIGHT: width `calc(100% - 150px)`, height `50px`,
    `background: rgba(0,0,0,0.03)`, `border: none`, radius `4px`,
    text `#000` 14px, padding `0 20px`, transition `.3s`
  - Placeholder: `rgba(0,0,0,0.3)`
  - Focus: no outline/shadow; fill darkens to `rgba(0,0,0,0.05)`;
    `border-color: #6807f9` is set but border is none → NOT visible
  - Placeholders: "Full Name" / "johndoe@email.com" / "+01" /
    "Password" (type password) / "Website"
  - A11y fix: the source's `for=` attributes point at missing ids —
    wire labels properly (htmlFor + id)

### Terms checkbox
- Row: custom `checkbox-wrap checkbox-primary` — 15px w400,
  `rgba(0,0,0,0.4)`, `text-transform: capitalize`,
  `padding-left: 30px`, margin-bottom 12px, wrapped in a `my-4` column
- Checkmark: FontAwesome square glyphs (unchecked `rgba(0,0,0,0.1)`,
  checked `#000`) — REPLACE with a native checkbox + styled check
  (lucide `Check` or pure-CSS checkmark); do not ship Font Awesome
- Source renders **checked by default**; text "I agree all statements in
  terms of service" (capitalize transform renders each word capitalized)

### Submit button
- `.cl-btn.cl-btn-secondary.submit` — pill radius `40px`, font 15px,
  `background: #000`, `border: 1px solid #000`, text `#fff`,
  `box-shadow: 0px 10px 19px -16px rgba(0,0,0,0.29)`, padding ~1rem (`p-3`)
- NOT full width — `display: inline-block` shrinkwraps the label; left-aligned
- Hover: `background: transparent`, text `#000`, border stays `#000`
  (outline-style hover — keep this inversion)
- `type="submit"`; triggers form submission

### Social block
- `.social-wrap`, text-align center
- "or" divider: relative span; `:after` 1px full-width line `#e6e6e6`
  behind (`z-index: -1`); span "or" has `background: #fff`,
  `padding: 0 20px` — a white gap in the line
- Caption: "Signup with this services" (source grammar — paraphrase OK,
  keep the same kind of line), centered, margin-bottom ~1rem
- Icons: 40×40 circles, `border: 1px solid rgba(0,0,0,0.05)`,
  transparent bg, glyph `#000` 16px, `margin-right: 10px`
  — Google, Facebook, Twitter
- Hover/focus: `background: #6807f9`, glyph `#fff`
- **Brand marks MUST be inline SVG** (lucide-react removed brand icons;
  precedent: template-airwave). Do NOT ship Font Awesome.

### Sign-in line
- Centered `p`, margin-top 1rem: "I'm already a member! " + "Sign In" link
- Link color `#6807f9`; base `a` transition `.3s all ease`

### Typography
- Roboto via Google Fonts `<link>` (300/400/500/700), fallback Arial/sans-serif
- Body 16px/400 gray, line-height 1.8; page heading 28px white;
  left h2 24px/700 white; card h3 weight 300; labels 14px/500;
  inputs 14px; button 15px/400

### Accent color
- `#6807f9` violet — links, "Sign In", social icon hover bg,
  (input focus border-color, invisible under border:none)

## Component outline
- `App.tsx` — page wrapper (dark bg, centered container, 7em padding)
- `components/PageHeading.tsx` — centered white 28px title
- `components/SignupWrap.tsx` — rounded/shadowed card + flex/stacked panels
- `components/WelcomePanel.tsx` — photo bg + black 50% overlay + bottom text
- `components/SignupForm.tsx` — 5 label-left rows + checkbox + black pill button
- `components/SocialSignup.tsx` — "or" divider + caption + 3 inline-SVG brand icons
- `components/MemberLine.tsx` — "I'm already a member! Sign In"
