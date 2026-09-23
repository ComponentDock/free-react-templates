# Template: Splithaven (Login Form)

## Purpose

Splithaven is a single-page split-screen LOGIN FORM template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Login Form V01" free template (source:
https://colorlib.com/wp/template/login-form-01/), built under a
DIFFERENT name (**Splithaven** — split + haven, evoking the split-screen
layout and the secure entry it provides), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based split-screen login: full-viewport
height, left panel is a white-background form area (heading, subtext,
username/password fields with custom bordered fieldset, remember-me
checkbox, forgot-password link, full-width blue submit button) and right
panel is a full-bleed background image (city street scene). On
viewport < 992px the image stacks above the form at 500px height.
Font is Roboto (300 + 400). Primary color is Bootstrap blue #007bff.
Form inputs have no border; field groups use #efefef borders with 7px
radius at top/bottom of the fieldset wrapper. The checkbox uses a custom
indicator (#e6e6e6 unchecked, #007bff checked, 4px radius).

**WHAT MAKES SPLITHAVEN DISTINCT (signature behaviors):**

1. **50/50 split-screen full viewport.** `.half` is `d-lg-flex` with two
   equal halves, each `width: 50%`, `height: 100vh`. The right panel
   (`.bg`) holds a `background-image` with `cover` + `center`. On mobile
   (< 992px) the image collapses to 500px height and the form flows
   below. The recreation MUST match this exact breakpoint behavior.
2. **Bordered fieldset grouping with radius only at corners.** The
   username and password inputs are wrapped in `.form-group` divs with
   `border: 1px solid #efefef`, `padding: 15px`, NO `border-bottom`
   between them. The first group gets `border-top-left-radius: 7px;
   border-top-right-radius: 7px`; the last group gets bottom border
   AND `border-bottom-left-radius: 7px; border-bottom-right-radius: 7px`.
   The recreation MUST preserve this "fieldset card" visual — the two
   fields look like one bordered card with rounded corners only at the
   very top and very bottom.
3. **Borderless inputs with large font.** `.form-control` has `border: none;
   padding: 0; font-size: 20px; border-radius: 0`. On focus: `outline: none;
   box-shadow: none`. The label sits above at 12px #b3b3b3 with
   `margin-bottom: 0`. The recreation MUST NOT add Bootstrap-style
   focus rings or border changes.
4. **Custom checkbox indicator.** The "Remember me" checkbox uses a custom
   `.control__indicator` (20×20px, `background: #e6e6e6`, `border-radius: 4px`)
   that fills `#007bff` on check with a white icomoon checkmark glyph
   (the recreation should use a lucide-react Check icon). The label text
   is 14px #888. The checkbox defaults to checked.
5. **Full-width primary button.** `.btn-primary` is `btn-block` (100% width),
   height 54px, padding 30px horizontal, `background: #007bff`, `color: #fff`,
   no custom border-radius (Bootstrap default ~4px). The recreation MUST
   use the full width and 54px height.
6. **"Forgot Password" link right-aligned.** The remember-me row is a
   flex container: checkbox left, "Forgot Password" link right (`ml-auto`).
   The link is 14px, `color: #888`, underlined.

## Naming

The ColorLib source name "Login Form 01" is FORBIDDEN as the app
folder name. The new name is **splithaven** (`apps/splithaven`,
`@free-react-templates/splithaven`, `splithaven.free.componentdock.com`).

## Design reference (replication findings)

- **Original:** ColorLib "Login Form V01" — split-screen login form
  (source: https://colorlib.com/wp/template/login-form-01/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/bootstrap/login-form-01/
  (HTTP 200, HTML fetched + parsed; `css/style.css` ~3.6 KB parsed for
  tokens; vendor sheets: Bootstrap 5 (bundled), icomoon icon font;
  JS: jQuery 3.3.1, Popper, Bootstrap JS, Owl Carousel — only jQuery
  needed for basic form behavior, not required in React).
- **Screenshot analyzed:** `login-form-01.jpg` (1200×972, TEMPLATES.md
  line 2147) — confirmed via vision: split-screen layout, white left
  panel with "Login to Colorlib" heading, gray subtext, username/password
  fields in bordered card, checked blue "Remember me" checkbox, right-aligned
  "Forgot Password" link, full-width blue "Log In" button. Right panel
  is a city street photo (woman with backpack on red bike lane). Clean,
  minimal, professional login aesthetic: white + Bootstrap blue on a
  photographic backdrop.

### Design tokens extracted from preview CSS

| Token | Value | Source |
|-------|-------|--------|
| Font family | `"Roboto", sans-serif` | `body` style.css |
| Font weights used | 300 (paragraphs), 400 (headings/inputs) | style.css `p { font-weight: 300 }` |
| Primary / brand color | `#007bff` | Bootstrap `.btn-primary`, checkbox checked |
| Primary hover | `#0069d9` | Bootstrap `.btn-primary:hover` |
| Paragraph text color | `#b3b3b3` | style.css `p { color: #b3b3b3 }` |
| Link color | `#888` | style.css `.half a { color: #888 }` |
| Label color | `#b3b3b3` | style.css `.form-group label` |
| Form border color | `#efefef` | style.css `.form-group { border: 1px solid #efefef }` |
| Checkbox indicator bg (unchecked) | `#e6e6e6` | style.css `.control__indicator` |
| Checkbox indicator bg (checked) | `#007bff` | style.css `.control input:checked` |
| Checkbox indicator bg (hover+checked) | `#1a88ff` | style.css `.control:hover input:checked` |
| Checkbox indicator radius | `4px` | style.css `.control__indicator` |
| Form group radius (top) | `7px` | style.css `.form-group.first` |
| Form group radius (bottom) | `7px` | style.css `.form-group.last` |
| Button height | `54px` | style.css `.half .btn` |
| Button horizontal padding | `30px` | style.css `.half .btn` |
| Button radius | default Bootstrap (~4px) | Bootstrap `.btn` |
| Input font size | `20px` | style.css `.form-control { font-size: 20px }` |
| Body background | `#fff` | style.css `body { background-color: #fff }` |
| Forgot password font size | `14px` | style.css `.forgot-pass { font-size: 14px }` |
| Checkbox/caption font size | `14px` | style.css `.control { font-size: 14px }` |
| Section height | `100vh` | style.css `.half, .half .container > .row { height: 100vh }` |
| Image panel height (mobile) | `500px` | style.css `@media (max-width: 991.98px) .half .bg { height: 500px }` |
| Split ratio | 50% / 50% | style.css `.half .contents, .half .bg { width: 50% }` |

## Section order (1:1, from live preview DOM)

1. **Split container** (`div.d-lg-flex.half`) — full viewport height flex
   row on lg+, column on mobile.
2. **Background image panel** (`div.bg.order-1.order-md-2`) — right side
   on desktop (order-2 on md+, order-1 on mobile = shows first/above on
   mobile), `background-image: url('images/bg_1.jpg')`, `background-size: cover`,
   `background-position: center`. On mobile: height 500px. On desktop: 50% width.
3. **Form panel** (`div.contents.order-2.order-md-1`) — left side on desktop
   (order-1 on md+), right/below on mobile. Contains:
   - `div.container > div.row.align-items-center.justify-content-center` —
     vertically and horizontally centered content.
   - `div.col-md-7` — form column, max-width ~58% of the left panel.
   - **Heading:** `<h3>` "Login to `<strong>Colorlib</strong>`" — Roboto,
     h3 size (~1.75rem), default dark color, the brand name bold.
   - **Subtext:** `<p class="mb-4">` Lorem ipsum paragraph — #b3b3b3,
     Roboto 300, ~14px.
   - **Form** (`<form action="#" method="post">`):
     - **Username field** (`div.form-group.first`): `<label for="username">`
       "Username" (12px #b3b3b3, block, mb-0) + `<input type="text"
       class="form-control" placeholder="your-email@gmail.com" id="username">`
       (20px, no border, no border-radius).
     - **Password field** (`div.form-group.last.mb-3`): `<label for="password">`
       "Password" (same style) + `<input type="password" class="form-control"
       placeholder="Your Password" id="password">` (same style, mb-3 adds
       spacing below).
     - **Checkbox row** (`div.d-flex.mb-5.align-items-center`):
       - Left: custom checkbox (`.control.control--checkbox`): hidden input
         (checked by default), `.control__indicator` (20×20, #e6e6e6, 4px
         radius, fills #007bff with white check icon on check) + caption
         "Remember me" (14px #888).
       - Right (`span.ml-auto`): `<a href="#" class="forgot-pass">`
         "Forgot Password" (14px #888, underlined).
     - **Submit** (`input[type="submit"].btn.btn-block.btn-primary`): "Log In",
       54px height, 30px horizontal padding, 100% width, #007bff bg, #fff text.
4. **No footer.** The template is a single split-screen with no footer section.
   The recreation MUST add a minimal footer with Component Dock link
   per conventions.

## Gherkin requirements

```gherkin
Feature: Splithaven — Split-screen login form

  Background:
    Given the page is loaded at the root URL

  Scenario: Full-viewport split layout
    Then the split container fills 100vh
    And the left panel (form) occupies 50% width
    And the right panel (image) occupies 50% width

  Scenario: Background image panel
    Then the right panel shows a full-bleed background image
    And the image covers the panel without tiling
    And the image is centered

  Scenario: Heading displays correctly
    Then the heading reads "Login to" followed by a bold brand name
    And the heading uses Roboto font

  Scenario: Subtext paragraph
    Then a gray paragraph (#b3b3b3) appears below the heading
    And the paragraph uses Roboto 300 weight

  Scenario: Username field
    Then a "Username" label appears above the input in 12px gray
    And the input has placeholder "your-email@gmail.com"
    And the input has 20px font size
    And the input has no visible border

  Scenario: Password field
    Then a "Password" label appears above the input in 12px gray
    And the input type is password
    And the input has placeholder "Your Password"
    And the input has 20px font size
    And the input has no visible border

  Scenario: Form field grouping
    Then the username and password fields appear inside a bordered card
    And the card has 1px #efefef border
    And the card top corners have 7px border-radius
    And the card bottom corners have 7px border-radius
    And there is no visible border between the two fields

  Scenario: Remember me checkbox
    Then a "Remember me" checkbox appears checked by default
    And the checkbox indicator is 20×20px with 4px border-radius
    And the unchecked indicator color is #e6e6e6
    And the checked indicator color is #007bff

  Scenario: Forgot Password link
    Then a "Forgot Password" link appears right-aligned in the checkbox row
    And the link is 14px and color #888
    And the link is underlined

  Scenario: Submit button
    Then a "Log In" button spans the full width of the form column
    And the button height is 54px
    And the button background is #007bff
    And the button text is white

  Scenario: Mobile layout
    When the viewport width is less than 992px
    Then the background image panel stacks above the form
    And the image panel height is 500px
    And the form panel flows below

  Scenario: Footer
    Then a footer is present with a Component Dock link
    And the footer does not reference ColorLib

  Scenario: No ColorLib references in app code
    Then no file in apps/splithaven contains "colorlib" or "ColorLib"
```

## Verification checklist

- [ ] `openspec/specs/template-splithaven/spec.md` exists and is valid
- [ ] `apps/splithaven/` created with correct package name
- [ ] Split-screen layout: 50/50 on desktop, stacked on mobile
- [ ] Background image covers panel (placeholder via picsum.photos)
- [ ] Heading "Login to **BrandName**" renders correctly
- [ ] Subtext paragraph in #b3b3b3 Roboto 300
- [ ] Username and password fields in bordered card (7px radius top/bottom)
- [ ] Inputs are borderless, 20px font
- [ ] Custom checkbox: 20×20, 4px radius, #e6e6e6 → #007bff on check
- [ ] "Remember me" defaults to checked
- [ ] "Forgot Password" link right-aligned, 14px #888, underlined
- [ ] "Log In" button: full-width, 54px height, #007bff bg, white text
- [ ] Mobile (< 992px): image 500px above, form below
- [ ] Footer links to Component Dock (no ColorLib reference)
- [ ] No `colorlib` / `ColorLib` strings anywhere in `apps/splithaven/`
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
