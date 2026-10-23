# Vitaflow — Implementation Tasks

Source design: **Healthcoach** (`https://colorlib.com/wp/template/healthcoach/`) → recreation name **vitaflow**. Shipped at https://vitaflow.free.componentdock.com.

Scope: A free, production-ready React recreation of the ColorLib "Healthcoach" health coaching landing template. Provides a hero carousel, services showcase, consultation form, testimonials, pricing plans, blog cards, and a branded footer — all rebuilt with React 19, Tailwind CSS 4, and TypeScript under the name "Vitaflow".

## Component breakdown

Render order as composed in `apps/vitaflow/src/App.tsx`:

### 1. TopBar
- The template SHALL display a top bar with phone number, email address, and social media icon links.
- Scenario — Renders contact information:
  - **WHEN** the TopBar component mounts
  - **THEN** the phone number "+00 1234 567" and email "emailsample@email.com" are visible
- Scenario — Renders social media links:
  - **WHEN** the TopBar component mounts
  - **THEN** Facebook, Twitter, Instagram, and Dribbble icon links are present

### 2. Navbar
- The navbar SHALL display the brand name "Vitaflow" and navigation links for Home, About, Coach, Pricing, Services, Stories, Blog, and Contact.
- Scenario — Renders logo and nav links:
  - **WHEN** the Navbar component mounts
  - **THEN** the logo "Vitaflow" and all 8 nav links are visible
- Scenario — Mobile toggle works:
  - **WHEN** the user clicks the mobile toggle button
  - **THEN** the menu state toggles

### 3. Hero
- The hero section SHALL display a background image with dark overlay, heading, subtext, and two CTA buttons.
- Scenario — Renders heading and buttons:
  - **WHEN** the Hero component mounts
  - **THEN** the heading "Get in shape faster" and buttons "Learn more" and "Contact us" are visible
- Scenario — Background image renders:
  - **WHEN** the Hero component mounts
  - **THEN** a section element with background-image style is present

### 4. Services
- The services section SHALL display 3 service cards (Exercise Program, Nutrition Plans, Diet Program) with images, headings, descriptions, and "Read more" links.
- Scenario — Renders 3 cards:
  - **WHEN** the Services component mounts
  - **THEN** 3 service cards with headings and "Read more" links are visible

### 5. AboutSplit
- The about section SHALL display a split layout with an image, heading, description, and founder avatar with name and title.
- Scenario — Renders founder info:
  - **WHEN** the AboutSplit component mounts
  - **THEN** the founder name "Cythia Hunter" and title "Personal Dietitian" are visible

### 6. ConsultationBar
- The consultation bar SHALL display 3 columns: healthcare services info, a free consultation form, and find-a-health-expert CTA.
- Scenario — Form renders and accepts input:
  - **WHEN** the ConsultationBar component mounts
  - **THEN** form inputs for First Name, Last Name, Date, Time, and a Services select are present
- Scenario — Form submits:
  - **WHEN** the user clicks the Appointment button
  - **THEN** the form submission handler runs without error

### 7. Testimonials
- The testimonials section SHALL display client testimonials with avatars, quotes, names, and positions.
- Scenario — Renders testimonials:
  - **WHEN** the Testimonials component mounts
  - **THEN** 4 testimonial cards with names and positions are visible

### 8. HowItWorks
- The how-it-works section SHALL display 4 step cards with icons, headings, and descriptions.
- Scenario — Renders 4 steps:
  - **WHEN** the HowItWorks component mounts
  - **THEN** 4 step cards with headings are visible

### 9. SuccessStories
- The success stories section SHALL display client stories with images, quotes, names, and roles.
- Scenario — Renders stories:
  - **WHEN** the SuccessStories component mounts
  - **THEN** 3 story cards with names and roles are visible

### 10. CTAIntro
- The CTA intro SHALL display a full-width background image with heading and consultation button.
- Scenario — Renders CTA:
  - **WHEN** the CTAIntro component mounts
  - **THEN** the heading and "Free Consultation" button are visible

### 11. Pricing
- The pricing section SHALL display 4 pricing cards (Starter $49, Standard $79, Premium $109, Platinum $159) with feature lists and "Get Started" buttons.
- Scenario — Renders 4 plans:
  - **WHEN** the Pricing component mounts
  - **THEN** 4 pricing cards with plan names, prices, and "Get Started" buttons are visible

### 12. Blog
- The blog section SHALL display 3 blog cards with images, dates, authors, comment counts, and headings.
- Scenario — Renders blog cards:
  - **WHEN** the Blog component mounts
  - **THEN** 3 blog cards with dates and headings are visible

### 13. Footer
- The footer SHALL display a subscribe form, 4 link columns (Services, About, Resources, Social), and a copyright line linking to Component Dock.
- Scenario — Renders subscribe form:
  - **WHEN** the Footer component mounts
  - **THEN** an email input and "Subscribe" button are present
- Scenario — Renders Component Dock link:
  - **WHEN** the Footer component mounts
  - **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is present
- Scenario — Subscribe form submits:
  - **WHEN** the user clicks Subscribe
  - **THEN** the form submission handler runs without error

### Cross-cutting requirements

- **App renders all sections in order** — The App component SHALL render all sections in the correct order and set the document title.
  - Scenario — All sections present: **WHEN** the App component mounts; **THEN** all 13 sections (TopBar, Navbar, Hero, Services, AboutSplit, ConsultationBar, Testimonials, HowItWorks, SuccessStories, CTAIntro, Pricing, Blog, Footer) are present
  - Scenario — Document title set: **WHEN** the App component mounts; **THEN** the document title is "Vitaflow — Health Coaching Landing Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/vitaflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/vitaflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/vitaflow` ships on https://vitaflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/vitaflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vitaflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitaflow/public/CNAME` = `vitaflow.free.componentdock.com`
  and the package `homepage` = `https://vitaflow.free.componentdock.com`.
