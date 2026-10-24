# Lexon — Implementation Tasks

Source design: **Justlaw** (`https://colorlib.com/wp/template/justlaw/`) → recreation name **lexon**. Shipped at https://lexon.free.componentdock.com.

Scope: Lexon is a lawyer and legal-firm landing page with a consultation hero, practice areas, tabbed case studies, testimonials, team members and stats. It recreates the ColorLib **Justlaw** design (https://colorlib.com/wp/template/justlaw/).

## Component breakdown

Render order as composed in `apps/lexon/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky dark navbar with logo, navigation links (Home, Services, About, Case Studies, Blog), and a "Free Consultation" CTA button. A mobile hamburger menu SHALL toggle navigation on small screens.
- Scenario — Desktop navbar renders all links:
  - **GIVEN** the page loads on a desktop viewport
  - **WHEN** I look at the top navigation
  - **THEN** I see the logo "Lexon", five nav links, and a "Free Consultation" button
- Scenario — Mobile menu toggles on button click:
  - **GIVEN** the page loads on a mobile viewport
  - **WHEN** I tap the hamburger menu button
  - **THEN** the navigation links and consultation button become visible

### 2. Hero
- The template SHALL display a full-width hero with a background image, headline "We will fight for you like a friend", subtitle "Professional lawyers", and a red bottom bar with phone number and video play button.
- Scenario — Hero displays headline and contact info:
  - **GIVEN** the page loads
  - **WHEN** I look at the hero section
  - **THEN** I see the headline, subtitle, phone number, and a play button

### 3. LegalPractice
- The template SHALL display three practice area cards (Vehicle Accident, Health Law, Insurance Law) in a grid layout, each with an image, icon, title, and description.
- Scenario — Three practice areas are visible:
  - **GIVEN** the page loads
  - **WHEN** I scroll to the practice area section
  - **THEN** I see three cards with titles and descriptions

### 4. About
- The template SHALL display an "About Lexon" section with description text, counter stats (250+ Happy Clients, 920+ Winning Cases), and overlapping images.
- Scenario — About section shows stats:
  - **GIVEN** the page loads
  - **WHEN** I scroll to the about section
  - **THEN** I see the heading, description, and two counter stats

### 5. ConsultationForm
- The template SHALL display a contact form with Name, Phone, Practice Area select, Email, Message textarea, and Submit button over a dark background image.
- Scenario — Form renders all fields:
  - **GIVEN** the page loads
  - **WHEN** I scroll to the consultation form
  - **THEN** I see five input fields and a submit button
- Scenario — Form submission shows success message:
  - **GIVEN** I fill out all form fields
  - **WHEN** I click Submit Now
  - **THEN** a success message is displayed

### 6. CaseStudies
- The template SHALL display tabbed case studies (Vehicle Accident, Health Law, Insurance Law, Bankruptcy) with three case cards per tab showing image, tag, title, description, and read more link.
- Scenario — Default tab shows Vehicle Accident cases:
  - **GIVEN** the page loads
  - **WHEN** I scroll to case studies
  - **THEN** three Vehicle Accident cases are displayed
- Scenario — Clicking a tab switches the cases:
  - **GIVEN** the case studies section is visible
  - **WHEN** I click the "Health Law" tab
  - **THEN** three Health Law cases replace the Vehicle Accident cases

### 7. Testimonials
- The template SHALL display client testimonials with quotes, names, roles, and avatar images.
- Scenario — Testimonials render correctly:
  - **GIVEN** the page loads
  - **WHEN** I scroll to testimonials
  - **THEN** I see three testimonials with quotes and client names

### 8. Team
- The template SHALL display three team members with circular photos, names, and titles.
- Scenario — Team members are displayed:
  - **GIVEN** the page loads
  - **WHEN** I scroll to the team section
  - **THEN** I see three team member cards

### 9. CtaBanner
- The template SHALL display a red banner with "Get Your Answer In Just 5 Minutes" heading and a "Get Started" button.
- Scenario — CTA banner is visible:
  - **GIVEN** the page loads
  - **WHEN** I scroll to the CTA section
  - **THEN** I see the heading and a "Get Started" button

### 10. Footer
- The template SHALL display a 4-column footer (logo + description + social, Company links, Services links, Newsletter form) with a bottom bar linking to Component Dock.
- Scenario — Footer renders all columns:
  - **GIVEN** the page loads
  - **WHEN** I scroll to the footer
  - **THEN** I see four columns and a newsletter form
- Scenario — Footer links to Component Dock:
  - **GIVEN** the footer is visible
  - **WHEN** I look at the bottom bar
  - **THEN** I see a "Component Dock" link pointing to https://www.componentdock.com/

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/lexon/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/lexon/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/lexon` ships on https://lexon.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/lexon/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/lexon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lexon/public/CNAME` = `justlaw.free.componentdock.com`
  and the package `homepage` = `https://lexon.free.componentdock.com`.
