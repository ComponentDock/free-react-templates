# Formblush — Implementation Tasks

Source design: **Colorlib Regform 24** (`https://colorlib.com/wp/template/colorlib-regform-24/`) → recreation name **formblush**. Shipped at https://formblush.free.componentdock.com.

Scope: A free sign-up form template with a split-screen layout featuring a decorative photo on the left and a pink form panel on the right. Recreation of ColorLib **Regform 24**.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/formblush/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/formblush/src/App.tsx`:

### 1. SignUpForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sign up with Facebook · Sign up with Instagram · Sign up with Twitter · Sign up with Tumblr

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: More templates at Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formblush/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formblush/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Spec validated with `npm run spec:validate`; [ ] All tokens match the ColorLib screenshot; [ ] Section order matches: photo (left) + form (right) in split layout; [ ] Font families: Poppins (body/inputs), Pacifico (heading); [ ] Brand pink #f5a0b0 used for form panel background; [ ] White pill-shaped submit button with pink text; [ ] Social icons in pink-bordered circles; [ ] Responsive: stacks vertically on mobile; [ ] Footer links to Component Dock; [ ] No ColorLib references in app code; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formblush` ships on https://formblush.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formblush/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formblush/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formblush/public/CNAME` = `formblush.free.componentdock.com`
  and the package `homepage` = `https://formblush.free.componentdock.com`.
