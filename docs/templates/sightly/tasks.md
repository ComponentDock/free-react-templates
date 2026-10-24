# Expo — Implementation Tasks

Source design: **Expo** (`https://colorlib.com/wp/template/expo/`) → recreation name **expo**. Shipped at https://expo.free.componentdock.com.

Scope: Expo is an SEO / digital marketing landing page. It recreates the ColorLib **Expo** design (https://colorlib.com/wp/template/expo/, preview: https://preview.colorlib.com/theme/expo/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/expo/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/expo/src/App.tsx`:

### 1. Navbar

- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Expo

### 2. Hero

- No dedicated spec block — hold this band to the design notes.
- Anchors: Build audience and grow your brand · Explore Us

### 3. Brands

- No dedicated spec block — hold this band to the design notes.
- Anchors: Trusted by over 3,000 world&apos;s leading companies

### 4. About

- No dedicated spec block — hold this band to the design notes.
- Anchors: We take a steps to build a successful business · Explore Us

### 5. Features

- No dedicated spec block — hold this band to the design notes.
- Anchors: How we can help

### 6. ProjectUs

- No dedicated spec block — hold this band to the design notes.
- Anchors: We are here to help you for better solutions

### 7. Pricing

- No dedicated spec block — hold this band to the design notes.
- Anchors: Affordable pricing plan · Get Started Now

### 8. CallToAction

- No dedicated spec block — hold this band to the design notes.
- Anchors: Let&apos;s talk about your project · Start Talking

### 9. Footer

- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Facebook · Twitter · LinkedIn

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/expo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/expo/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/expo` ships on https://expo.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/expo/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/expo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/expo/public/CNAME` = `expo.free.componentdock.com`
  and the package `homepage` = `https://expo.free.componentdock.com`.
