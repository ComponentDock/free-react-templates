# Hireflow — Implementation Tasks

Source design: **Joblisting** (`https://colorlib.com/wp/template/joblisting/`) → recreation name **hireflow**. Shipped at https://hireflow.free.componentdock.com.

Scope: Recreation of ColorLib "Joblisting" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a job listing / recruitment platform landing page with a hero search, features grid, popular job posts carousel, featured categories, recent job listings, CTA banner, app download section, and footer.

## Component breakdown

Render order as composed in `apps/hireflow/src/App.tsx`:

### 1. Navbar
- The template SHALL display a sticky navbar with logo, navigation links (Home, About Us, Category, Price, Blog, Contact), and Signup/Login pill buttons. The navbar SHALL be responsive with a mobile menu toggle.
- Scenario — Desktop navbar renders all navigation links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the HireFlow logo, six navigation links, and Signup/Login buttons
- Scenario — Mobile menu toggles on button click:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu expands with all links visible

### 2. Hero
- The template SHALL display a full-width hero banner with a purple gradient overlay, a headline showing "1500+ Jobs posted last week", and a search form with text input, location dropdown, category dropdown, and search button.
- Scenario — Hero headline displays job count:
  - **WHEN** the hero section renders
  - **THEN** the headline "1500+ Jobs posted last week" is displayed
- Scenario — Search form prevents default submission:
  - **WHEN** the user clicks the Search button
  - **THEN** the form does not navigate away (preventDefault)

### 3. Features
- The template SHALL display four feature cards (Searching, Applying, Security, Notifications) each with an icon, title, and description.
- Scenario — All four features render:
  - **WHEN** the features section renders
  - **THEN** four cards are displayed with titles Searching, Applying, Security, and Notifications

### 4. PopularPosts
- The template SHALL display a grid of job post cards, each with a thumbnail image, title, location, description, and "View Job Post" button.
- Scenario — Job post cards render with details:
  - **WHEN** the popular posts section renders
  - **THEN** at least four job post cards are displayed with titles and locations

### 5. Categories
- The template SHALL display six category cards (Accounting, Development, Technology, Media & News, Medical, Marketing) with icons and labels.
- Scenario — All six categories render:
  - **WHEN** the categories section renders
  - **THEN** six category cards are displayed with their names

### 6. RecentJobs
- The template SHALL display recent job listing cards with job title, company, location, type, salary, and "Apply Now" button.
- Scenario — Job listings render with details:
  - **WHEN** the recent jobs section renders
  - **THEN** four job listings are displayed with titles, companies, and Apply Now buttons

### 7. CtaBanner
- The template SHALL display a call-to-action banner with purple gradient background, headline "Join us today without any hesitation", and two buttons: "I am a Candidate" and "Request Free Demo".
- Scenario — CTA section renders headline and buttons:
  - **WHEN** the CTA section renders
  - **THEN** the headline and both CTA buttons are visible

### 8. DownloadApp
- The template SHALL display a download section with a phone mockup image, headline "Download the HireFlow App Today!", description text, and App Store / Play Store download buttons.
- Scenario — Download section renders store buttons:
  - **WHEN** the download section renders
  - **THEN** App Store and Play Store download buttons are visible

### 9. Footer
- The template SHALL display a footer with Top Products links, Newsletter signup form, social media icons, and copyright text linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** the footer renders
  - **THEN** the copyright text contains a link to https://www.componentdock.com/ labeled "Component Dock"
- Scenario — Newsletter form prevents default submission:
  - **WHEN** the user clicks the Subscribe button in the newsletter form
  - **THEN** the form does not navigate away (preventDefault)

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/hireflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/hireflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/hireflow` ships on https://hireflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/hireflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/hireflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hireflow/public/CNAME` = `hireflow.free.componentdock.com`
  and the package `homepage` = `https://hireflow.free.componentdock.com`.
