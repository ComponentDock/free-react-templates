# Formdesk — Implementation Tasks

Source design: **Contact Form V18** (`https://colorlib.com/wp/template/contact-form-v18/`) → recreation name **formdesk**. Shipped at https://formdesk.free.componentdock.com.

Scope: A split-screen contact page with a lifestyle desk-photo on the left and a clean contact form with dropdown on the right. It also includes finished with social media icons. Recreation of ColorLib **Contact Form V18**.

## Component breakdown

Render order as composed in `apps/formdesk/src/App.tsx`:

### 1. ContactForm
- The right column SHALL display a contact form titled "Send Us A Message".
- Scenario — Form heading:
  - **WHEN** I view the form
  - **THEN** a heading "Send Us A Message" SHALL be displayed at the top in
- Scenario — Full name field:
  - **WHEN** I view the form
  - **THEN** a text input SHALL be displayed under the label "FULL NAME" with
- Scenario — Email address field:
  - **WHEN** I view the form
  - **THEN** an email input SHALL be displayed under the label "EMAIL ADDRESS"
- Scenario — Service dropdown:
  - **WHEN** I view the form
  - **THEN** a select/dropdown SHALL be displayed under the label "WHAT DO YOU
- Scenario — Dropdown highlight:
  - **WHEN** I open the dropdown
  - **THEN** the currently focused option SHALL be highlighted with the brand

### 2. SocialIcons
- Below the form, social media icons SHALL be displayed.
- Scenario — Social icons displayed:
  - **WHEN** I scroll below the submit button
  - **THEN** three social media icons SHALL be displayed: Facebook, Twitter,
- Scenario — Social icon colors:
  - **WHEN** I view the social icons
  - **THEN** Facebook SHALL be blue (`#3b5998`), Twitter SHALL be light blue

### 3. Footer
- The page footer SHALL link to Component Dock.
- Scenario — Footer link:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"

### Cross-cutting requirements

- **Split-screen layout** — The page SHALL render a two-column layout with a full-height photo on the left and a contact form on the right.
  - Scenario — Two-column layout: **WHEN** I visit the FormDesk page; **THEN** a left column (full-height desk photo) and a right column (white
  - Scenario — Left column photo: **WHEN** I view the left column; **THEN** it SHALL display a full-height lifestyle desk photograph (laptop,
  - Scenario — Right column background: **WHEN** I view the right column; **THEN** it SHALL have a white background
- **Submit button** — The form SHALL have a blue/indigo submit button.
  - Scenario — Submit button displayed: **WHEN** I view the form; **THEN** a "SEND" button SHALL be displayed at the bottom of the form with
  - Scenario — Submit button hover: **WHEN** I hover over the submit button; **THEN** the button SHALL show a hover state (darker shade or shadow)
  - Scenario — Form submission: **WHEN** I fill all fields and click "SEND"; **THEN** the form SHALL submit (or show a success state)
- **Responsive layout** — The page SHALL stack the two columns vertically on mobile devices.
  - Scenario — Mobile layout: **WHEN** I view the page on a mobile device (viewport < 768px); **THEN** the two columns SHALL stack vertically with the photo on top and
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formdesk/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formdesk/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Two-column layout with desk photo on left, form on right; [ ] Full-height lifestyle photo (laptop, coffee, notebook, phone); [ ] "Send Us A Message" heading; [ ] Full Name input with placeholder; [ ] Email Address input with placeholder; [ ] Service dropdown with "UI/UX Design", "eCommerce Bussiness", "Online Services"; [ ] "SEND" button with indigo-blue background; [ ] Social media icons (Facebook, Twitter, Instagram) in colored circles; [ ] Footer with Component Dock link; [ ] Responsive: columns stack on mobile; [ ] No ColorLib references in app code; [ ] `packages/ui` components reused where possible; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formdesk` ships on https://formdesk.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formdesk/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formdesk/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formdesk/public/CNAME` = `formdesk.free.componentdock.com`
  and the package `homepage` = `https://formdesk.free.componentdock.com`.
