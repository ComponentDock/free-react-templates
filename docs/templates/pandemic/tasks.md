# Pandemic — Implementation Tasks

Source design: **Covid** (`https://colorlib.com/wp/template/covid/`) → recreation name **pandemic**. Shipped at https://pandemic.free.componentdock.com.

Scope: Pandemic is a single-page health information template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Covid" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/pandemic/src/App.tsx`:

### 1. Navbar
- The system SHALL render a sticky top navigation bar with the site name "Pandemic" and links to all major sections, with a hamburger toggle for mobile viewports.
- Scenario — Navbar content on desktop:
  - **GIVEN** the page is loaded on a desktop viewport
  - **THEN** the nav shows the logo text "Pandemic"
  - **AND** navigation links are visible: "Home", "Prevention", "Protect Yourself", "Symptoms", "News", "About", "Contact"
- Scenario — Mobile hamburger menu toggle:
  - **GIVEN** the viewport is narrow (mobile)
  - **WHEN** the user taps the hamburger icon (aria-label "Open menu")
  - **THEN** a mobile menu opens with all navigation links
  - **AND** the hamburger icon changes to "Close menu"
- Scenario — Mobile menu closes on link click:
  - **GIVEN** the mobile menu is open
  - **WHEN** the user taps a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The system SHALL render a hero section with a purple-tinted background, curved bottom-right corner, heading, subtitle, and CTA button.
- Scenario — Hero content:
  - **GIVEN** the user is on the homepage
  - **THEN** the hero shows heading "Stay Safe. Stay Home."
  - **AND** a subtitle is visible below the heading
  - **AND** a "How to prevent" purple pill button is visible
- Scenario — Hero has curved bottom-right shape:
  - **GIVEN** the hero section is visible
  - **THEN** the bottom-right corner has a curved border-radius (50%)

### 3. Statistics
- The system SHALL render a dark-background section with 3 stat cards showing pandemic statistics.
- Scenario — Statistics display 3 key numbers:
  - **GIVEN** the user scrolls to the statistics section
  - **THEN** 3 stat cards are visible
  - **AND** each card shows an icon, a number, and a label
  - **AND** the numbers are: 14,112,077 (Total Cases), 595,685 (Deaths), 8,397,665 (Recovered)

### 4. WhatIsCovid
- No dedicated spec block — hold this band to the design notes.
- Anchors: What is Coronavirus?

### 5. Prevention
- The system SHALL render a prevention section with 4 prevention items.
- Scenario — Prevention section shows 4 tips:
  - **GIVEN** the user scrolls to the prevention section
  - **THEN** 4 prevention items are displayed with icons
  - **AND** the items are: Stay at home, Wear facemask, Keep social distancing, Wash your hands

### 6. ProtectYourself
- The system SHALL render a two-column do/avoid list section.
- Scenario — Protection section shows do/avoid lists:
  - **GIVEN** the user scrolls to the protection section
  - **THEN** two lists are visible: "You should do" and "You should avoid"
  - **AND** the "do" list includes: Stay at home, Wear a mask in public, Use hand sanitizer, Disinfect your home regularly, Wash your hands frequently
  - **AND** the "avoid" list includes: Avoid infected people, Avoid touching animals, Avoid handshaking, Avoid contaminated surfaces, Don't touch your face

### 7. Symptoms
- The system SHALL render a symptoms section with 4 symptom cards.
- Scenario — Symptoms section shows 4 cards:
  - **GIVEN** the user scrolls to the symptoms section
  - **THEN** 4 symptom cards are visible with icons
  - **AND** the symptoms are: High Fever, Cough, Sore Throat, Headache

### 8. News
- The system SHALL render a news section with 3 blog post cards.
- Scenario — Blog section displays 3 article cards:
  - **GIVEN** the user scrolls to the news section
  - **THEN** 3 blog post cards are visible
  - **AND** each card has an image, title, excerpt, and "Read more" link

### 9. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About

### 10. Footer
- The system SHALL render a dark 4-column footer with a Component Dock attribution link.
- Scenario — Footer displays 4-column layout:
  - **GIVEN** the user scrolls to the footer
  - **THEN** 4 columns are visible: About, Quick Links, Helpful Links, Resources
  - **AND** the copyright line includes a link to Component Dock (https://www.componentdock.com/)

### Cross-cutting requirements

- **What is Coronavirus section** — The system SHALL render an information section with 4 tip cards about coronavirus.
  - Scenario — Info section shows prevention tips: **GIVEN** the user scrolls to the "What is Coronavirus?" section; **THEN** 4 tip cards are visible with icons; **AND** the tips are: Protection, Prevention, Treatments, Symptoms
- **App structure** — The system SHALL render all sections in order within semantic landmarks.
  - Scenario — App composes all sections: **GIVEN** the page loads; **THEN** the document title is "Pandemic — Health Information Template"; **AND** a navigation landmark is present; **AND** a main landmark contains all content sections; **AND** a contentinfo landmark (footer) is present
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pandemic/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pandemic/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pandemic` ships on https://pandemic.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pandemic/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pandemic/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pandemic/public/CNAME` = `pandemic.free.componentdock.com`
  and the package `homepage` = `https://pandemic.free.componentdock.com`.
