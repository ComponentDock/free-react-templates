# Hexcraft — Implementation Tasks

Source design: **Colorlib Wizard 2** (`https://colorlib.com/wp/template/colorlib-wizard-2/`) → recreation name **hexcraft**. Shipped at https://hexcraft.free.componentdock.com.

Scope: A multi-step online booking/reservation wizard template. Recreation of ColorLib's **Colorlib Wizard 2**.

## Component breakdown

Render order as composed in `apps/hexcraft/src/App.tsx`:

### 1. BookingWizard
- No dedicated spec block — hold this band to the design notes.

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/hexcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/hexcraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] 4-step wizard with smooth step transitions; [ ] Step indicator sidebar with gold active state and vertical line; [ ] Date picker inputs (check-in / check-out) in Steps 1 and 2; [ ] Dropdown selects for duration, room count, adult/child counts; [ ] Form inputs with bottom-border-only styling (transparent bg); [ ] Gold pill-shaped CTA buttons (border-radius 21px); [ ] Full-viewport background image with dark card overlay; [ ] "Your Reservation" heading in Bitter font, white, uppercase, bordered; [ ] Backward/forward navigation between steps; [ ] Step 4 confirmation summary with checkbox list; [ ] Responsive: stacks vertically on mobile (< 768px); [ ] No ColorLib references in app code (provenance only in spec); [ ] Footer links to https://www.componentdock.com/; [ ] Tests: 100% coverage (lines, functions, branches, statements); [ ] Typecheck passes, lint passes, build succeeds; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/hexcraft` ships on https://hexcraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/hexcraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/hexcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hexcraft/public/CNAME` = `hexcraft.free.componentdock.com`
  and the package `homepage` = `https://hexcraft.free.componentdock.com`.
