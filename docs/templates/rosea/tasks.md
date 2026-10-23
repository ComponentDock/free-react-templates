# Rosea — Implementation Tasks

Source design: **Signup Form 17** (`https://colorlib.com/wp/template/signup-form-17/`) → recreation name **rosea**. Shipped at https://rosea.free.componentdock.com.

Scope: An Account Signup Card template with page wrapper, page title, card container, avatar, card heading and form sections. Recreation of ColorLib **Signup Form 17** (`https://colorlib.com/wp/template/signup-form-17/`).

## Component breakdown

Render order as composed in `apps/rosea/src/App.tsx`:

### 1. SignupCard
- The form SHALL render three fields — Full Name, Email Address, and Password — each with an uppercase bold label above a pill-shaped transparent input (radius 40px, height 52px, white/10 border) and the placeholders "John Doe", "johndoe@gmail.com", and "Password".
- Scenario — Form fields render:
  - **GIVEN** the signup form is visible
  - **THEN** a "FULL NAME" label and input SHALL be displayed
  - **AND** an "EMAIL ADDRESS" label and input SHALL be displayed below
  - **AND** a "PASSWORD" label and input SHALL be displayed below email
  - **AND** all inputs SHALL be pill-shaped with transparent dark backgrounds
- Scenario — Accessibility:
  - **GIVEN** the form is rendered
  - **THEN** all inputs SHALL have associated labels via htmlFor/id
  - **AND** the submit button SHALL have type="submit"

### 2. Footer
- The page SHALL include a footer line linking to `https://www.componentdock.com/` with link text mentioning "Component Dock" (opens in a new tab).
- Scenario — Footer renders:
  - **GIVEN** the page is rendered
  - **THEN** a footer line SHALL link to https://www.componentdock.com/
  - **AND** the link text SHALL mention "Component Dock"

### Cross-cutting requirements

- **Centered card on pink page** — The system SHALL render a full-viewport page with a soft pink background (`#f2d6eb`) and center a dark slate card (`#3c3d47`, radius 10px, ~450px max width) both horizontally and vertically.
  - Scenario — Page renders centered card: **GIVEN** the user visits the Rosea signup page; **THEN** a soft pink background SHALL fill the viewport; **AND** the "Sign Up #07" title SHALL be displayed above the card; **AND** a dark slate card SHALL be centered on the page
  - Scenario — Responsive layout: **GIVEN** the user views the page on a mobile viewport (width < 768px); **THEN** the card SHALL remain centered with reduced padding; **AND** all form fields SHALL remain full width
- **Avatar and card heading** — The card SHALL display a 100px circular avatar image at its top center and a "Create Your Account" heading (22px, font-weight 300, white) below it.
  - Scenario — Avatar and heading display: **GIVEN** the card is visible; **THEN** a circular avatar image SHALL be shown at the top center of the card; **AND** "Create Your Account" SHALL be displayed as a light-weight white heading below it
- **Password visibility toggle** — The password field SHALL include an eye toggle button inside the input that switches the input type between "password" and "text" and updates its accessible label between "Show password" and "Hide password".
  - Scenario — Password toggle works: **GIVEN** the password field is visible; **THEN** an eye icon button SHALL be displayed on the right side of the password input; **AND** the password input SHALL have type "password"; **WHEN** the user clicks the eye button; **THEN** the password input SHALL have type "text"; **AND** the button's accessible label SHALL change to "Hide password"; **WHEN** the user clicks the button again; **THEN** the password input SHALL have type "password"
- **Sign Up submit behavior** — The form SHALL include a full-width mint pill button ("Sign Up") that inverts to a transparent background with mint text on hover, and submitting the form SHALL be prevented (no page navigation) with entered values retained.
  - Scenario — Submit prevents navigation: **GIVEN** the form is visible; **THEN** a full-width mint pill button "Sign Up" SHALL be displayed; **WHEN** the user fills the fields and clicks "Sign Up"; **THEN** the form submission SHALL be prevented (no page navigation); **AND** the entered values SHALL remain in the fields
- **Sign-in link** — The card SHALL show "I'm already a member!" in gray below the button with a clickable mint-green "Sign In" link.
  - Scenario — Sign-in link renders: **GIVEN** the form is visible; **THEN** "I'm already a member!" text SHALL be shown below the button; **AND** "Sign In" SHALL appear as a clickable mint-green link
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/rosea/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/rosea/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Soft pink `#f2d6eb` page background, content vertically centered; [ ] "Sign Up #07" title above the card; [ ] Dark slate `#3c3d47` card, radius 10px, ~450px max width, subtle shadow; [ ] 100px circular avatar at top center of card; [ ] "Create Your Account" heading, weight 300, white; [ ] Pill inputs (radius 40px, height 52px, transparent, white/10 border); [ ] Uppercase 12px bold labels with letter-spacing; [ ] Password eye toggle switches input type + aria-label; [ ] Mint `#01d28e` pill "Sign Up" button, inverts on hover; [ ] "I'm already a member! Sign In" line with mint link; [ ] Footer links to https://www.componentdock.com/ ("Component Dock"); [ ] Lato font via Google Fonts `<link>` in index.html; [ ] Avatar placeholder via `picsum.photos` seed `rosea`; [ ] Icons from `lucide-react` (Eye/EyeOff); [ ] No ColorLib references in app code; [ ] 100% test coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/rosea` ships on https://rosea.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/rosea/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rosea/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rosea/public/CNAME` = `rosea.free.componentdock.com`
  and the package `homepage` = `https://rosea.free.componentdock.com`.
