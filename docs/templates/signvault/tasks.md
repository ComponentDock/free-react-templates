# Signvault — Implementation Tasks

Source design: **Signup Form 15** (`https://colorlib.com/wp/template/signup-form-15/`) → recreation name **signvault**. Shipped at https://signvault.free.componentdock.com.

Scope: Recreation of ColorLib **Signup Form 15** (`https://colorlib.com/wp/template/signup-form-15/`). Preview: `https://preview.colorlib.com/theme/signup-form-15/` (unreachable at time of prep; design derived from TEMPLATES.md screenshot). Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/signvault/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/signvault/src/App.tsx`:

### 1. SignupCard
- No dedicated spec block — hold this band to the design notes.
- Anchors: Full Name · Email Address · Password · Confirm Password

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/signvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/signvault/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Card is centered on light gray (#f5f5f5) background; [ ] Card has white background, 16px border-radius, subtle shadow; [ ] "Sign Up" heading is left-aligned inside card; [ ] Full Name input with "John Doe" placeholder; [ ] Email Address input with "johndoe@gmail.com" placeholder; [ ] Password input with "Password" placeholder; [ ] Confirm Password input with "Confirm Password" placeholder; [ ] Floating labels appear above inputs on focus/fill; [ ] Input focus border changes to brand red (#e32249); [ ] Circular 56×56px red submit button with white icon; [ ] Submit button overlaps card bottom-right edge; [ ] Wave/swoosh decoration at card bottom in light gray; [ ] "Already have an account? Sign In" text below card; [ ] "Sign In" link is red (#e32249), underlined; [ ] Brand red (#e32249) used consistently (button, link, focus); [ ] Font is Poppins (Google Fonts); [ ] Responsive: card takes full width on mobile; [ ] No ColorLib references in app code; [ ] Footer links to componentdock.com; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/signvault` ships on https://signvault.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/signvault/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/signvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signvault/public/CNAME` = `signvault.free.componentdock.com`
  and the package `homepage` = `https://signvault.free.componentdock.com`.
