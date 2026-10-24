# Visage — Implementation Tasks

Source design: **Vcard2** (`https://colorlib.com/wp/template/vcard2/`) →
recreation name **visage**. Shipped at https://visage.free.componentdock.com.

Scope: a personal vCard / CV rendered as one SPA — square tab bar with eight
panels, a sidebar with a portrait and a navy "General Information" block, and one
visible content panel at a time. The source is eight pages; the recreation is one
page with tab state.

## Component breakdown

Render order as composed in `apps/visage/src/App.tsx`:

### 1. Header
- `Visage` wordmark, eight square tab tiles (About, Skills, Services, Experience,
  Education, Portfolio, Testimonials, Contact), `Available for freelance work`
  pill with a download glyph.
- Scenario — tabs: **WHEN** the page loads; **THEN** eight tab labels are visible
  and `About` is active.
- Scenario — switching: **WHEN** the user activates `Skills`; **THEN** the Skills
  panel is shown and `Skills` is the active tab.

### 2. Sidebar
- Portrait, "General Information" heading, six icon+text rows, social row.
- Scenario — info rows: **WHEN** the page loads; **THEN** name, location and
  date-of-birth rows are visible in the sidebar.

### 3. AboutPanel
- Role kicker, `h1` name, `Description` subheading, paragraph, two progress
  rings with captions.
- Scenario — panel content: **WHEN** `About` is active; **THEN** the name, a
  description paragraph and two progress rings render.

### 4. SkillsPanel
- Skill rows/bars for the same set the source lists.

### 5. ServicesPanel
- Icon cards describing offered services.

### 6. ExperiencePanel / 7. EducationPanel
- Timeline-style rows: role/degree, organisation, dates.

### 8. PortfolioPanel
- Image grid (square tiles, no captions).

### 9. TestimonialsPanel
- Client quotes with name and role.

### 10. ContactPanel
- Contact rows (email, phone, address, socials) — **no form**, matching the
  source markup.

### 11. Footer
- Component Dock credit + copyright.
- Scenario — Component Dock link: **WHEN** the page loads; **THEN** the footer
  contains a link to "https://www.componentdock.com/" labelled "Component Dock".

### Cross-cutting requirements

- **Page title** — "Visage — Personal CV".
- **Design tokens** — indigo `#8583e1`, navy `#100f3a`, body `#a5a5a5`,
  paragraphs `#838393`, highlight `#ffa07f`; `Montserrat` 300–900; **no border
  radius anywhere**; `h1` 48px, `h2` 36px.
- **Provenance** — no file under `apps/visage/` may contain "ColorLib", a
  colorlib.com URL, or the source template's name; the footer credits Component
  Dock instead.

## Verification

- [x] `apps/visage` ships on https://visage.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Eight square tabs with indigo active state; sidebar portrait + navy info
      panel; square corners throughout
- [x] Panels switch without a page reload and keep the active-tab highlight
- [x] No source-designer name, source URL or source template name under
      `apps/visage/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link Component Dock
  (`https://www.componentdock.com/`).
- **Provenance ban.** No `colorlib.com` URL, designer name or source template
  name under `apps/visage/` (AGENTS.md rule 5).
- **Deploy identity.** `public/CNAME` = `visage.free.componentdock.com`, package
  `homepage` = `https://visage.free.componentdock.com`.
