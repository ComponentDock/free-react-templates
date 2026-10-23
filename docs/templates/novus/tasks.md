# Novus — Implementation Tasks

Source design: **03 Comming Soon** (`https://colorlib.com/wp/template/03-comming-soon/`) → recreation name **novus**. Shipped at https://novus.free.componentdock.com.

Scope: Recreation of ColorLib "Coming Soon V18" (https://colorlib.com/wp/template/03-comming-soon/). A centered coming soon page with countdown timer, email subscription form, and social media links on a dark gradient background.

## Component breakdown

Render order as composed in `apps/novus/src/App.tsx`:

### 1. Hero
- Users SHALL see a "We're Coming Soon" heading and descriptive paragraph on page load.
- Scenario — Page loads with hero content:
  - **WHEN** the page loads
  - **THEN** a heading "We're Coming Soon" is visible
  - **AND** a descriptive paragraph about the upcoming launch is visible
  - **AND** the Novus logo text is visible

### 2. Footer
- Users SHALL see a footer link to Component Dock.
- Scenario — Footer renders:
  - **WHEN** the page loads
  - **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is present

### Cross-cutting requirements

- **Countdown timer displays time remaining** — Users SHALL see a live countdown timer with Days, Hours, Minutes, and Seconds.
  - Scenario — Countdown shows remaining time: **WHEN** the page loads with a future target date; **THEN** the countdown timer shows Days, Hours, Minutes, and Seconds units; **AND** each unit displays a numeric value
  - Scenario — Countdown reaches zero: **WHEN** the target date is in the past; **THEN** all countdown units display "00"
  - Scenario — Countdown updates every second: **WHEN** one second elapses; **THEN** the seconds value decrements by one
- **Email subscription form allows sign-up** — Users SHALL be able to enter their email and subscribe for launch notifications.
  - Scenario — Email form renders: **WHEN** the page loads; **THEN** an email input field and "SUBSCRIBE" button are visible
  - Scenario — Successful subscription: **WHEN** the user enters a valid email and clicks SUBSCRIBE; **THEN** a thank-you confirmation message appears; **AND** the email form is replaced by the confirmation
  - Scenario — Form validation: **WHEN** the user clicks SUBSCRIBE without entering an email; **THEN** the browser's native validation prevents submission
- **Social media icons are displayed** — Users SHALL see social media icon links for Facebook, Twitter, Google+, Instagram, and Pinterest.
  - Scenario — Social icons render: **WHEN** the page loads; **THEN** Facebook, Twitter, Google+, Instagram, and Pinterest icons are visible; **AND** each icon has an aria-label for accessibility
- **Accessibility** — All interactive elements SHALL be accessible with proper ARIA attributes.
  - Scenario — Countdown timer accessibility: **WHEN** the countdown timer renders; **THEN** it has role="timer" and aria-label
  - Scenario — Email input accessibility: **WHEN** the email input renders; **THEN** it has an associated label or aria-label
  - Scenario — Social icon accessibility: **WHEN** a social icon renders; **THEN** it has an aria-label attribute
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/novus/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/novus/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/novus` ships on https://novus.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/novus/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/novus/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/novus/public/CNAME` = `novus.free.componentdock.com`
  and the package `homepage` = `https://novus.free.componentdock.com`.
