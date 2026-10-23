# Clarity — Implementation Tasks

Source design: **Coaching** (`https://colorlib.com/wp/template/coaching/`) → recreation name **clarity**. Shipped at https://clarity.free.componentdock.com.

Scope: Clarity is a single-page professional coaching website template in the free-react-templates monorepo.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/clarity/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/clarity/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Main navigation · Mobile navigation

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: I&apos;m Professional · Contact Me

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome To My Website

### 4. Training
- No dedicated spec block — hold this band to the design notes.
- Anchors: Life Coach Training

### 5. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Happy Customers

### 6. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Services

### 7. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Blog · Read More..

### 8. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact Me · Address · Phone · Email Address · Thank you for your message! We&apos;ll get back to you soon. · Send Message

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Clarity · Quick Links · Follow Us · Subscribe Newsletter · Send · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/clarity/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/clarity/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/clarity` ships on https://clarity.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/clarity/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/clarity/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clarity/public/CNAME` = `clarity.free.componentdock.com`
  and the package `homepage` = `https://clarity.free.componentdock.com`.
