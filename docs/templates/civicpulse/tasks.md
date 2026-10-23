# Civicpulse — Implementation Tasks

Source design: **Politics** (`https://colorlib.com/wp/template/politics/`) → recreation name **civicpulse**. Shipped at https://civicpulse.free.componentdock.com.

Scope: Civicpulse is a political/party landing template with a top bar, navbar, hero, countdown, services, about band, gallery, stat counters and feedback.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/civicpulse/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/civicpulse/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Civic · Pulse · Donate Now

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Don't look further, This is our Leader · Support Our Party · Get Started

### 4. Countdown
- No dedicated spec block — hold this band to the design notes.
- Anchors: Election is knocking at door

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Services · What we Offer to our Supporters

### 6. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Who We Are · Who we are to Serve the nation · Learn More

### 7. Gallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Gallery · Our Gallery Archive

### 8. Counter
- No dedicated spec block — hold this band to the design notes.

### 9. Feedback
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video · Testimonials · What People Say About Us

### 10. Brands
- No dedicated spec block — hold this band to the design notes.

### 11. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Blog · Latest From Our Blog

### 12. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: alert · Top Products · Newsletter · Subscribe to get updates · Thanks for subscribing! · Your Email Address

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/civicpulse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/civicpulse/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/civicpulse` ships on https://civicpulse.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/civicpulse/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/civicpulse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/civicpulse/public/CNAME` = `civicpulse.free.componentdock.com`
  and the package `homepage` = `https://civicpulse.free.componentdock.com`.
