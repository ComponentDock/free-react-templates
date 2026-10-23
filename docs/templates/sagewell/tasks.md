# Sagewell — Implementation Tasks

Source design: **Wiser** (`https://colorlib.com/wp/template/wiser/`) → recreation name **sagewell**. Shipped at https://sagewell.free.componentdock.com.

Scope: Sagewell is a single-page education landing template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/sagewell/src/App.tsx`:

### 1. Navbar
- Sagewell SHALL render a top bar with contact info and login/register links, a sticky main navigation with Home, Courses, Blog (dropdown), Pages (dropdown), Contact, and an Apply Now CTA button. Mobile view SHALL show a hamburger menu toggle.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the Sagewell logo, Home, Courses, Blog, Pages, Contact links, and an Apply Now button
- Scenario — Mobile menu toggles open and closed:
  - **WHEN** the user clicks the hamburger menu button
  - **THEN** the mobile navigation panel opens with all nav links and Apply Now
  - **WHEN** the user clicks a mobile nav link
  - **THEN** the mobile menu closes
- Scenario — Dropdown menus appear on hover:
  - **WHEN** the user hovers over Blog or Pages
  - **THEN** a dropdown menu appears with sub-links

### 2. Hero
- Sagewell SHALL render a full-width hero section with a background image, gradient overlay, headline text "Boost up your skills with a new way of learning.", and two CTA buttons (Get Started, Take a Tour).
- Scenario — Hero renders headline and buttons:
  - **WHEN** the page loads
  - **THEN** the hero section displays the headline and two CTA buttons

### 3. Services
- Sagewell SHALL render a services strip with 3 icon+text service badges ("Scholarship Available") on a light background.
- Scenario — Services displays three items:
  - **WHEN** the page loads
  - **THEN** the services section shows 3 service items each with an icon, title, and subtitle

### 4. Programs
- Sagewell SHALL render a "Popular Programs" section with 4 tabs (Graduate, Postgraduate, PhD Scholarships, Training) and 3 program cards per tab.
- Scenario — Default tab shows Graduate programs:
  - **WHEN** the page loads
  - **THEN** the Graduate tab is active and shows 3 program cards
- Scenario — Clicking a tab switches visible programs:
  - **WHEN** the user clicks a different tab
  - **THEN** the program cards update to show that tab's programs

### 5. Events
- Sagewell SHALL render a "Recent Events" section with 3 event items, each showing a date badge, title, and metadata (time, date, location).
- Scenario — Events renders all three events:
  - **WHEN** the page loads
  - **THEN** 3 event items are displayed with date, time, and location info

### 6. AdmissionForm
- Sagewell SHALL render an "Apply for Admission" form on a dark background with fields for First Name, Last Name, Phone, Email, Message, and an Apply Now submit button.
- Scenario — Form renders all fields:
  - **WHEN** the page loads
  - **THEN** the admission form shows all 5 input fields and a submit button
- Scenario — Form accepts user input:
  - **WHEN** the user types in the form fields
  - **THEN** the field values update accordingly

### 7. News
- Sagewell SHALL render a "Recent News" section with 2 blog post cards, each showing an image, badge, title, date, and comment count.
- Scenario — News renders two posts:
  - **WHEN** the page loads
  - **THEN** 2 blog post cards are displayed with badges, dates, and comment counts

### 8. Footer
- Sagewell SHALL render a footer with a newsletter signup form, social media icons, 4 link columns (About Us, Campus, Study, Support), and a copyright line linking to https://www.componentdock.com/ (branded "Component Dock").
- Scenario — Footer renders newsletter and social links:
  - **WHEN** the page loads
  - **THEN** the footer shows the newsletter form, social media icons, and 4 link columns
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** the copyright area contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sagewell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sagewell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sagewell` ships on https://sagewell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sagewell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sagewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sagewell/public/CNAME` = `sagewell.free.componentdock.com`
  and the package `homepage` = `https://sagewell.free.componentdock.com`.
