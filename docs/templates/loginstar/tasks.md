# Loginstar — Implementation Tasks

Source design: **Login Form V10** (`https://colorlib.com/wp/template/login-form-v10/`) → recreation name **loginstar**. Shipped at https://loginstar.free.componentdock.com.

Scope: Recreation of ColorLib Login Form V10 as Loginstar — a minimalist, centered login form on a plain white background. Ubuntu font family, lavender-purple brand color (#827ffe), full-width inputs with light gray backgrounds, a full-width purple submit button, "Remember me" checkbox, and "Forgot?" link.

## Component breakdown

Render order as composed in `apps/loginstar/src/App.tsx`:

### 1. LoginForm
- The template SHALL render a white card (390px wide, 10px border-radius) containing the login form, with 50px top padding and 90px bottom padding.
- Scenario — Card renders:
  - **WHEN** the user loads the page
  - **THEN** a white card with rounded corners is visible in the center of the viewport
  - **AND** the card width is approximately 390px

### 2. Footer
- The template SHALL include a footer (or link within the page) that links to https://www.componentdock.com/ with the text "Component Dock" or similar branding.
- Scenario — Footer link:
  - **WHEN** the user views the page
  - **THEN** a link to https://www.componentdock.com/ is visible somewhere on the page

### Cross-cutting requirements

- **Full-page centered layout** — The template SHALL render a full-page container with white/transparent background, centering the login card both vertically and horizontally with min-height 100vh and flexbox centering.
  - Scenario — Centered layout: **WHEN** the user loads the page; **THEN** the login card is centered vertically and horizontally on a plain background; **AND** the card takes up the full viewport height
- **Login form title** — The template SHALL display a "Login" heading (uppercase, Ubuntu Bold, 30px, color #403866) centered at the top of the form.
  - Scenario — Title renders: **WHEN** the user loads the page; **THEN** the text "LOGIN" is visible centered at the top of the card; **AND** the text is uppercase and dark purple (#403866)
- **Username input field** — The template SHALL render a full-width username input with light gray background (#e6e6e6), no visible border, "Username" placeholder in gray (#8f8fa1), 62px height, 3px border-radius, and Ubuntu Bold 18px text color #403866. On focus, a purple (#827ffe) border ring SHALL animate in with a scale transition.
  - Scenario — Username input renders: **WHEN** the user views the form; **THEN** a username input field is visible with gray background and "Username" placeholder
  - Scenario — Username focus effect: **WHEN** the user clicks/tabs into the username input; **THEN** a purple (#827ffe) border ring animates in around the input
- **Password input field** — The template SHALL render a full-width password input identical in styling to the username input, with "Password" placeholder text.
  - Scenario — Password input renders: **WHEN** the user views the form; **THEN** a password input field is visible below the username field with "Password" placeholder
  - Scenario — Password focus effect: **WHEN** the user clicks/tabs into the password input; **THEN** a purple (#827ffe) border ring animates in around the input
- **Remember me checkbox and Forgot link row** — The template SHALL render a row below the password field containing a "Remember me" checkbox (custom styled: 18px box, 2px solid #827ffe border, checkmark in #827ffe when checked) on the left, and a "Forgot?" link (Ubuntu Regular, 16px, color #827ffe) on the right, with space-between alignment.
  - Scenario — Checkbox and link row: **WHEN** the user views the form; **THEN** a "Remember me" checkbox is visible on the left; **AND** a "Forgot?" link in purple is visible on the right; **AND** both are vertically aligned on the same row
  - Scenario — Checkbox checked state: **WHEN** the user clicks the "Remember me" checkbox; **THEN** the checkbox shows a purple (#827ffe) checkmark
- **Login submit button** — The template SHALL render a full-width submit button (62px height, 3px border-radius) with purple background (#827ffe), white text (Ubuntu Bold, 16px, uppercase), centered content. On hover, the background SHALL transition to dark purple (#403866) over 0.4s.
  - Scenario — Button renders: **WHEN** the user views the form; **THEN** a full-width "LOGIN" button is visible in purple with white text
  - Scenario — Button hover: **WHEN** the user hovers over the login button; **THEN** the button background transitions from purple (#827ffe) to dark purple (#403866)
- **Form validation** — The template SHALL validate that both username and password fields are non-empty before allowing form submission. Empty fields SHALL display inline validation messages styled with red border (#c80000) and red text.
  - Scenario — Empty form submission: **WHEN** the user clicks "Login" with both fields empty; **THEN** validation messages appear for both fields
  - Scenario — Partial submission: **WHEN** the user clicks "Login" with only username filled; **THEN** a validation message appears for the password field only
- **Responsive design** — The template SHALL be fully responsive. On viewports narrower than 480px, the card width SHALL expand to fill available width with appropriate padding.
  - Scenario — Mobile layout: **WHEN** the user views the form on a mobile viewport (<480px); **THEN** the card fills the available width with horizontal padding; **AND** all form elements remain accessible and properly sized
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/loginstar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/loginstar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Card centered vertically and horizontally on full-viewport page; [ ] Card width ~390px with 10px border-radius on desktop; [ ] "LOGIN" title: uppercase, Ubuntu Bold, 30px, color #403866, centered; [ ] Username input: 62px height, #e6e6e6 bg, 3px radius, placeholder #8f8fa1; [ ] Password input: same styling as username; [ ] Focus ring: #827ffe border with scale animation on input focus; [ ] Remember me checkbox: custom styled, purple border + checkmark; [ ] "Forgot?" link: Ubuntu Regular 16px, color #827ffe, right-aligned; [ ] Login button: full-width, 62px height, #827ffe bg, white uppercase text, 3px radius; [ ] Button hover: transitions to #403866 over 0.4s; [ ] Form validation: red error messages for empty fields; [ ] Responsive: card fills width on mobile with padding; [ ] Footer links to componentdock.com; [ ] No ColorLib references in app code (provenance only in spec); [ ] Ubuntu font loaded via Google Fonts in index.html; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/loginstar` ships on https://loginstar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/loginstar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loginstar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginstar/public/CNAME` = `loginstar.free.componentdock.com`
  and the package `homepage` = `https://loginstar.free.componentdock.com`.
