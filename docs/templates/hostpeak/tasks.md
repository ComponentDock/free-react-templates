# Hostpeak — Implementation Tasks

Source design: **Lorahost** (`https://colorlib.com/wp/template/lorahost/`) → recreation name **hostpeak**. Shipped at https://hostpeak.free.componentdock.com.

Scope: Hostpeak is a web hosting landing template. It recreates the ColorLib **Lorahost** design (https://colorlib.com/wp/template/lorahost/, preview: https://preview.colorlib.com/theme/lorahost/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/hostpeak/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/hostpeak/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle navigation · Hostpeak · Live Chat · Login

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Smart Company With Perfect Space · Powerful Web Hosting · Get Started

### 3. DomainSearch
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search Your Domain Now! · Search

### 4. BrandLogos
- No dedicated spec block — hold this band to the design notes.
- Anchors: Trusted by 12,000+ Happy Customers Worldwide

### 5. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Choose Your Own Virtual Space

### 6. Pricing
- No dedicated spec block — hold this band to the design notes.
- Anchors: Popular Pricing Package · Select Plan

### 7. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: High Quality Service

### 8. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe To Get Our Newsletter · Subscribe

### 9. DedicatedServer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Dedicated

### 10. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Happy Customer Says

### 11. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe · Facebook · Twitter · LinkedIn

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/hostpeak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/hostpeak/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/hostpeak` ships on https://hostpeak.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/hostpeak/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/hostpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hostpeak/public/CNAME` = `hostpeak.free.componentdock.com`
  and the package `homepage` = `https://hostpeak.free.componentdock.com`.
