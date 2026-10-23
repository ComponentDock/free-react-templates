# Bokeh — Implementation Tasks

Source design: **Pentax** (`https://colorlib.com/wp/template/pentax/`) → recreation name **bokeh**. Shipped at https://bokeh.free.componentdock.com.

Scope: Bokeh is a single-page photography portfolio template with a full-bleed hero, a filterable-style portfolio gallery, service cards, three pricing packages, an about block and client testimonials.

## Component breakdown

Render order as composed in `apps/bokeh/src/App.tsx`:

### 1. Navbar
- The page SHALL open with a navbar (brand mark, section links, mobile toggle with `aria-expanded`) above a full-bleed photographic hero.
- Scenario — Visitor opens the page:
  - **WHEN** the page loads
  - **THEN** the navbar and hero image are visible with a single h1
  - **AND** the mobile toggle reports `aria-expanded="false"` while closed

### 2. Hero
- The page SHALL open with a navbar (brand mark, section links, mobile toggle with `aria-expanded`) above a full-bleed photographic hero.
- Scenario — Visitor opens the page:
  - **WHEN** the page loads
  - **THEN** the navbar and hero image are visible with a single h1
  - **AND** the mobile toggle reports `aria-expanded="false"` while closed

### 3. Portfolio
- The portfolio section SHALL present the studio's work as an image grid with five filter buttons — `all`, `wedding`, `motion`, `portrait`, `fashion` — where the active filter is visually distinguished and the grid shows only items whose category matches it (`all` shows everything).
- Scenario — Visitor filters the portfolio:
  - **WHEN** the visitor activates the `fashion` filter
  - **THEN** only fashion-categorised items remain in the grid and the
- Scenario — Visitor returns to all work:
  - **WHEN** the visitor activates `all`
  - **THEN** every portfolio item is rendered again

### 4. Services
- The page SHALL render service cards (including `Event Coverage` and `Fashion Shot`) and three pricing packages priced at 76, 86 and 96.
- Scenario — Visitor compares packages:
  - **WHEN** the visitor reaches the pricing section
  - **THEN** three cards are visible showing `$76`, `$86` and `$96`
  - **AND** each card lists its included features and a CTA

### 5. Pricing
- The page SHALL render service cards (including `Event Coverage` and `Fashion Shot`) and three pricing packages priced at 76, 86 and 96.
- Scenario — Visitor compares packages:
  - **WHEN** the visitor reaches the pricing section
  - **THEN** three cards are visible showing `$76`, `$86` and `$96`
  - **AND** each card lists its included features and a CTA

### 6. About
- The page SHALL include an about block and a testimonial section whose cards carry a quote, a client name (e.g. `Emma Davis`) and a role (e.g. `Fashion Designer`, `Bride`).
- Scenario — Visitor reads testimonials:
  - **WHEN** the visitor scrolls to the testimonials section
  - **THEN** each card shows the quote, client name and role
  - **AND** decorative icons are `aria-hidden`

### 7. Testimonials
- The page SHALL include an about block and a testimonial section whose cards carry a quote, a client name (e.g. `Emma Davis`) and a role (e.g. `Fashion Designer`, `Bride`).
- Scenario — Visitor reads testimonials:
  - **WHEN** the visitor scrolls to the testimonials section
  - **THEN** each card shows the quote, client name and role
  - **AND** decorative icons are `aria-hidden`

### 8. Footer
- The footer SHALL link `https://www.componentdock.com/` and expose the studio's social links with accessible names.
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor reaches the footer
  - **THEN** a link named `Component Dock` points at

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/bokeh/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/bokeh/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/bokeh`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/bokeh`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/bokeh`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `bokeh.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/bokeh` ships on https://bokeh.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/bokeh/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/bokeh/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bokeh/public/CNAME` = `bokeh.free.componentdock.com`
  and the package `homepage` = `https://bokeh.free.componentdock.com`.
