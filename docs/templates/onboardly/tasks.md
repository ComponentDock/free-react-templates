# Onboardly — Implementation Tasks

Source design: **Colorlib Wizard 20** (`https://colorlib.com/wp/template/colorlib-wizard-20/`) → recreation name **onboardly**. Shipped at https://onboardly.free.componentdock.com.

Scope: Onboardly is a multi-step wizard form page with a footer. It recreates the ColorLib **Colorlib Wizard 20** design (https://colorlib.com/wp/template/colorlib-wizard-20/, preview: https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/onboardly/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/onboardly/src/App.tsx`:

### 1. StepIndicator
- No dedicated spec block — hold this band to the design notes.
- Anchors: Wizard steps

### 2. AccountStep
- No dedicated spec block — hold this band to the design notes.
- Anchors: email · password · confirmPassword

### 3. SocialStep
- No dedicated spec block — hold this band to the design notes.
- Anchors: twitter · facebook · google

### 4. PersonalStep
- No dedicated spec block — hold this band to the design notes.
- Anchors: name · phone · address

### 5. FormActions
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous

### 6. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/onboardly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/onboardly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/onboardly` ships on https://onboardly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/onboardly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/onboardly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/onboardly/public/CNAME` = `onboardly.free.componentdock.com`
  and the package `homepage` = `https://onboardly.free.componentdock.com`.
