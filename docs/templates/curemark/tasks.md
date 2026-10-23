# Curemark — Implementation Tasks

Source design: **Medart** (`https://colorlib.com/wp/template/medart/`) → recreation name **curemark**. Shipped at https://curemark.free.componentdock.com.

Scope: Curemark is a full-page MEDICAL & HEALTHCARE landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Medart" free template (source: https://colorlib.com/wp/template/medart/), built under a DIFFERENT name (**Curemark**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

## Component breakdown

Render order as composed in `apps/curemark/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed-position navbar with the "Curemark" logo, navigation links (Home, About, Services, News, Contact), and an emergency CTA button showing a phone icon and phone number.
- Scenario — Desktop navbar renders all elements:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar SHALL display the "Curemark" logo text
  - **AND** navigation links for Home, About, Services, News, Contact SHALL be visible
  - **AND** an emergency CTA button with phone number SHALL be visible
- Scenario — Mobile hamburger toggle:
  - **WHEN** the page loads on a mobile viewport
  - **THEN** a hamburger menu button SHALL be visible
  - **AND** navigation links SHALL be hidden by default
  - **WHEN** the user clicks the hamburger button
  - **THEN** the mobile navigation menu SHALL become visible

### 2. HeroBanner
- The template SHALL display a full-width hero section with a background image, dark overlay, headline "The Best Medical Services", subtitle text, and a "Read More" gradient button.
- Scenario — Hero renders headline and CTA:
  - **WHEN** the hero section is rendered
  - **THEN** the heading "The Best Medical Services" SHALL be visible
  - **AND** a subtitle paragraph SHALL be visible
  - **AND** a "Read More" button with gradient background SHALL be present

### 3. InfoBoxes
- The template SHALL display a 3-column responsive layout with Opening Hours, Emergency contact, and an Appointment booking form.
- Scenario — Opening hours schedule:
  - **WHEN** the info boxes section is rendered
  - **THEN** "Opening Hours" heading SHALL be visible
  - **AND** a schedule list with Mon-Thu 8-19, Fri 8-18:30, Sat 9:30-17, Sun 9:30-15 SHALL be displayed
- Scenario — Emergency contact CTA:
  - **WHEN** the info boxes section is rendered
  - **THEN** "Emergency" heading SHALL be visible
  - **AND** a gradient CTA button with phone number SHALL be present
- Scenario — Appointment form:
  - **WHEN** the info boxes section is rendered
  - **THEN** "Make an Appointment" heading SHALL be visible
  - **AND** a form with department select, doctor select, name input, phone input, and submit button SHALL be present

### 4. Departments
- The template SHALL display a heading "Our Departments" followed by a responsive 3-column grid of 9 department cards, each with an icon, title, description, and "read more" link.
- Scenario — All 9 departments rendered:
  - **WHEN** the departments section is rendered
  - **THEN** the heading "Our Departments" SHALL be visible
  - **AND** 9 department cards SHALL be rendered
  - **AND** each card SHALL display an icon, title, description, and "read more" link
- Scenario — Department names:
  - **WHEN** the departments section is rendered
  - **THEN** the following departments SHALL be present: Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology, Orthopaedy, Pediatry, Ophthalmology

### 5. Testimonials
- The template SHALL display a "Patient's Testimonials" heading followed by testimonial cards with quote text, avatar image, name, and affiliation.
- Scenario — Testimonials rendered:
  - **WHEN** the testimonials section is rendered
  - **THEN** the heading "Patient's Testimonials" SHALL be visible
  - **AND** at least 3 testimonial cards SHALL be displayed
  - **AND** each card SHALL show a quote, avatar, name, and affiliation

### 6. News
- The template SHALL display a "The News" heading followed by 3 blog post cards with image, title, meta information (date, author, comments), and excerpt.
- Scenario — News cards rendered:
  - **WHEN** the news section is rendered
  - **THEN** the heading "The News" SHALL be visible
  - **AND** 3 blog post cards SHALL be displayed
  - **AND** each card SHALL show an image, title, date, author, comments count, and excerpt

### 7. Newsletter
- The template SHALL display a gradient-background newsletter section with a heading, email input, and subscribe button.
- Scenario — Newsletter form:
  - **WHEN** the newsletter section is rendered
  - **THEN** the heading "Subscribe to our newsletter" SHALL be visible
  - **AND** an email input SHALL be present
  - **AND** a "Subscribe" button SHALL be present
- Scenario — Successful subscription:
  - **WHEN** the user enters a valid email and clicks Subscribe
  - **THEN** a "Thank you for subscribing!" confirmation message SHALL be displayed

### 8. Footer
- The template SHALL display a 3-column footer with about section, contact information, and useful links. The footer MUST link https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer columns:
  - **WHEN** the footer is rendered
  - **THEN** an about section with logo and description SHALL be present
  - **AND** contact information (address, phone, email) SHALL be visible
  - **AND** useful links (Home, About, Departments, Contact, FAQ, Testimonials) SHALL be listed
- Scenario — Component Dock credit:
  - **WHEN** the footer is rendered
  - **THEN** a link to https://www.componentdock.com/ branded "Component Dock" SHALL be present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/curemark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/curemark/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/curemark` ships on https://curemark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/curemark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/curemark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/curemark/public/CNAME` = `curemark.free.componentdock.com`
  and the package `homepage` = `https://curemark.free.componentdock.com`.
