# Contactwave — Implementation Tasks

Source design: **Contact Form V5** (`https://colorlib.com/wp/template/contact-form-v5/`) → recreation name **contactwave**. Shipped at https://contactwave.free.componentdock.com.

Scope: ContactWave is a free, advanced contact form template that recreates the ColorLib "Contact Form V5" design. It features floating labels, a budget range slider, product type radio selection, and client-side validation — all built with React, Tailwind CSS, and TypeScript.

## Component breakdown

Render order as composed in `apps/contactwave/src/App.tsx`:

### 1. ContactForm
- The app SHALL display a "Contact Us" heading centered at the top of the form card.
- Scenario — Heading is visible on load:
  - **WHEN** the app loads
  - **THEN** I should see a "Contact Us" heading

### 2. Footer
- The app SHALL render a footer with a link to https://www.componentdock.com/.
- Scenario — Footer link is present:
  - **WHEN** the app loads
  - **THEN** I should see a footer with a link to componentdock.com
  - **AND** the link should open in a new tab

### Cross-cutting requirements

- **Renders all form fields** — The app SHALL render form fields for Full Name, Email, Phone, Needed Services, Product Type (radio group), Budget (range slider), and Message.
  - Scenario — All form fields are present: **WHEN** the app loads; **THEN** I should see a "Full Name" text input; **AND** I should see an "Email" text input; **AND** I should see a "Phone" text input; **AND** I should see a "Needed Services" select dropdown; **AND** I should see a product type radio group with three options; **AND** I should see a budget range slider; **AND** I should see a "Message" textarea
- **Validates required fields on submit** — The app SHALL validate required fields and display error messages when the form is submitted with empty fields.
  - Scenario — Shows validation errors for empty form: **WHEN** I click the "Submit" button without filling any fields; **THEN** I should see validation errors for Full Name, Email, Services, Product Type, and Message
  - Scenario — Shows email validation error for invalid email: **WHEN** I enter "notanemail" in the Email field and submit; **THEN** I should see "Invalid email address" error
  - Scenario — Clears validation error when user types: **WHEN** I submit the form with an empty Full Name field; **AND** I start typing in the Full Name field; **THEN** the validation error for Full Name should disappear
- **Submits the form successfully** — The app SHALL show a success message when all required fields are filled with valid data.
  - Scenario — Successful form submission: **WHEN** I fill in all required fields with valid data; **AND** I click the "Submit" button; **THEN** I should see a "Thank you!" message; **AND** I should see "Your message has been sent"
  - Scenario — Reset after submission: **WHEN** I submit the form successfully; **AND** I click "Send another message"; **THEN** the form should reset to its initial state
- **Budget slider interaction** — The app SHALL allow users to adjust the budget using a range slider.
  - Scenario — Slider displays initial value: **WHEN** the app loads; **THEN** the budget slider should display "$2,500 – $5,000"
  - Scenario — Slider value changes on interaction: **WHEN** I change the budget slider to 5000; **THEN** the slider value should update to 5000
- **Page title** — The app SHALL set the page title to "ContactWave — Contact Form Template" on mount.
  - Scenario — Title is set on load: **WHEN** the app loads; **THEN** the page title should be "ContactWave — Contact Form Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/contactwave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/contactwave/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; Use floating labels (label moves up when input is focused or has value); Budget range slider: HTML `<input type="range">` with custom styling; Radio group: styled radio buttons with labels; Validation: client-side with visual feedback (red text, green checkmark); No external assets — use picsum.photos for any placeholder imagery; Footer links to https://www.componentdock.com/ branded as "Component Dock"; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/contactwave` ships on https://contactwave.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/contactwave/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/contactwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactwave/public/CNAME` = `contactwave.free.componentdock.com`
  and the package `homepage` = `https://contactwave.free.componentdock.com`.
