# Propstack — Implementation Tasks

Source design: **Stated** (`https://colorlib.com/wp/template/stated/`) → recreation name **propstack**. Shipped at https://propstack.free.componentdock.com.

Scope: Recreation of ColorLib "Stated" (https://colorlib.com/wp/template/stated/) as a React 19 + Tailwind CSS 4 + TypeScript template named **Propstack**. A clean, professional real estate website with property listings, agent profiles, and contact form.

## Component breakdown

Render order as composed in `apps/propstack/src/App.tsx`:

### 1. Navbar
- Users SHALL see a sticky navbar with the "Propstack." logo and navigation links (Home, Properties, Agents, About, News, Contact). The navbar SHALL be responsive with a mobile hamburger menu.
- Scenario — Desktop navbar:
  - **GIVEN** the page loads
  - **WHEN** the user views the navbar
  - **THEN** the logo "Propstack." and all navigation links are visible
- Scenario — Mobile menu toggle:
  - **GIVEN** the navbar is displayed on a mobile viewport
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile menu opens with all navigation links

### 2. Hero
- Users SHALL see a full-width hero section with a background image, a heading "Buy and sell real estate properties", and a descriptive paragraph.
- Scenario — Hero content:
  - **GIVEN** the page loads
  - **WHEN** the hero section is visible
  - **THEN** the heading and subtext are displayed

### 3. HowItWorks
- Users SHALL see a "How It Works" section with 3 columns: Find Property, Buy Property, Make Investment, each with an icon and description.
- Scenario — Three steps displayed:
  - **GIVEN** the How It Works section is visible
  - **WHEN** the user views it
  - **THEN** 3 steps are displayed with icons and text

### 4. Properties
- Users SHALL see a "Properties" section with property cards showing price, beds, baths, sqft, and address. A "View All Property Listings" button SHALL be displayed.
- Scenario — Property cards:
  - **GIVEN** the Properties section is visible
  - **WHEN** the user views it
  - **THEN** at least 1 property card with price, beds, baths, sqft is displayed

### 5. Agents
- Users SHALL see an "Agents" section with agent cards showing avatar, name, and social media icons.
- Scenario — Agent cards:
  - **GIVEN** the Agents section is visible
  - **WHEN** the user views it
  - **THEN** at least 1 agent card with name and social links is displayed

### 6. About
- Users SHALL see an "About Us" section with a heading and descriptive text about the agency.
- Scenario — About content:
  - **GIVEN** the About section is visible
  - **WHEN** the user views it
  - **THEN** a heading and descriptive text are displayed

### 7. News
- Users SHALL see a "News" section with blog post cards showing image, date, title, and excerpt.
- Scenario — Blog cards:
  - **GIVEN** the News section is visible
  - **WHEN** the user views it
  - **THEN** at least 1 blog card with title and date is displayed

### 8. Contact
- Users SHALL see a "Get In Touch" section with a contact form (name, email, subject, message fields and submit button) and contact info.
- Scenario — Contact form:
  - **GIVEN** the Contact section is visible
  - **WHEN** the user fills in the form and clicks submit
  - **THEN** a thank-you message is displayed

### 9. Footer
- Users SHALL see a dark footer with about text, quick links, newsletter subscription form, and a link to https://www.componentdock.com/ branded "Component Dock".
- Scenario — Footer links:
  - **GIVEN** the footer is visible
  - **WHEN** the user views it
  - **THEN** a link to https://www.componentdock.com/ is present with "Component Dock" text

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/propstack/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/propstack/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/propstack` ships on https://propstack.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/propstack/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/propstack/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propstack/public/CNAME` = `propstack.free.componentdock.com`
  and the package `homepage` = `https://propstack.free.componentdock.com`.
