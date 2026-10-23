# Signuprift — Implementation Tasks

Source design: **Signup Form 11** (`https://colorlib.com/wp/template/signup-form-11/`) → recreation name **signuprift**. Shipped at https://signuprift.free.componentdock.com.

Scope: A Signup Form template with card header, signup, terms agreement, login redirect and form validation sections. Recreation of ColorLib **Signup Form 11**

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/signuprift/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/signuprift/src/App.tsx`:

### 1. SignupCard
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sign Up #01 · Create Your Account · Terms Of Service · Sign Up · Sign In

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: More templates at Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/signuprift/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/signuprift/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] "Sign Up #01" title above card; [ ] Green circle icon with pencil at card top; [ ] "Create Your Account" heading centered; [ ] FULL NAME input with green uppercase label; [ ] EMAIL ADDRESS input with green uppercase label; [ ] PASSWORD input with green uppercase label and eye toggle; [ ] Password visibility toggle works (show/hide); [ ] Terms checkbox with "I Agree All Statements In Terms Of Service"; [ ] Full-width mint green "Sign Up" button; [ ] "I'm already a member! Sign In" text with green link; [ ] Form validation (required fields); [ ] Responsive: card adapts to mobile/desktop; [ ] Footer links to `https://www.componentdock.com/` ("Component Dock"); [ ] No ColorLib references in app code; [ ] 100% test coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/signuprift` ships on https://signuprift.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/signuprift/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/signuprift/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signuprift/public/CNAME` = `signuprift.free.componentdock.com`
  and the package `homepage` = `https://signuprift.free.componentdock.com`.
