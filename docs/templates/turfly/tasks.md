# Turfly — Implementation Tasks

Source design: **Lawncare** (`https://colorlib.com/wp/template/lawncare/`) → recreation name **turfly**. Shipped at https://turfly.free.componentdock.com.

Scope: Turfly is a single-page lawn care & landscaping landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Lawncare" website template design (see TEMPLATES.md), built under a DIFFERENT name ("Turfly") with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/turfly/src/App.tsx`:

### 1. Navbar
- Users SHALL see a sticky dark navbar with the Turfly logo and navigation links (Home, Services, About, Blog, Contact) plus a "Get a Quote" CTA.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the page loads on desktop
  - **THEN** the navbar displays the Turfly brand, five navigation links, and a "Get a Quote" button
- Scenario — Mobile menu toggle:
  - **WHEN** a user taps the hamburger button on mobile
  - **THEN** the mobile menu opens with the same links and a "Get a Quote" button
- Scenario — Mobile menu close:
  - **WHEN** the mobile menu is open and the user taps the close button
  - **THEN** the mobile menu closes

### 2. Hero
- Users SHALL see a hero section with a background image, the headline "Lawn care for everyone", a description, and two CTA buttons.
- Scenario — Hero content renders:
  - **WHEN** the page loads
  - **THEN** the hero section shows the headline "Lawn care for everyone", a description, "Our Services" link, and "Get a Quote" link
- Scenario — Hero background image:
  - **WHEN** the hero section renders
  - **THEN** a background image is displayed behind the text content

### 3. Services
- Users SHALL see three service cards (Garden Care, Lawn Mowing, Lawn Treatment) each with an icon, title, and description.
- Scenario — Three service cards render:
  - **WHEN** the user scrolls to the Services section
  - **THEN** three cards are displayed with headings "Garden Care", "Lawn Mowing", and "Lawn Treatment"

### 4. About
- Users SHALL see an about section with the heading "Welcome to Turfly", a five-item feature checklist, a "Learn More" CTA, and a lawn image.
- Scenario — About content renders:
  - **WHEN** the user scrolls to the About section
  - **THEN** the heading "Welcome to Turfly", five checklist items, a "Learn More" link, and a decorative image are displayed

### 5. SeasonalTips
- Users SHALL see four seasonal tip cards (Spring, Summer, Autumn, Winter) each with an image, season badge, title, and description.
- Scenario — Four seasonal cards render:
  - **WHEN** the user scrolls to the Seasonal Tips section
  - **THEN** four cards are displayed with seasons Spring, Summer, Autumn, and Winter

### 6. Testimonials
- Users SHALL see three client testimonial cards each with an avatar, 5-star rating, quote, name, and role.
- Scenario — Three testimonials render:
  - **WHEN** the user scrolls to the Testimonials section
  - **THEN** three cards are displayed with names Sarah Mitchell, James Cooper, and Emily Watson

### 7. Blog
- Users SHALL see three blog post cards each with an image, date, title, excerpt, and "Read More" link.
- Scenario — Three blog posts render:
  - **WHEN** the user scrolls to the Blog section
  - **THEN** three blog post cards are displayed with titles and "Read More" links

### 8. Newsletter
- Users SHALL see a green newsletter banner with a heading, email input, and subscribe button. Submitting the form clears the email field.
- Scenario — Newsletter form renders:
  - **WHEN** the user scrolls to the Newsletter section
  - **THEN** a heading "Subscribe to our Newsletter", an email input, and a "Subscribe" button are displayed
- Scenario — Newsletter form submission:
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the email input is cleared

### 9. Footer
- Users SHALL see a four-column footer (brand, services, contact, newsletter) with a copyright line and a "Made with Component Dock" link to https://www.componentdock.com/.
- Scenario — Footer columns render:
  - **WHEN** the user scrolls to the footer
  - **THEN** four columns are displayed: brand with social links, services list, contact information, and a newsletter form
- Scenario — Component Dock attribution:
  - **WHEN** the user looks at the footer bottom
  - **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is displayed
- Scenario — Footer newsletter form:
  - **WHEN** the user fills the footer newsletter email and clicks Subscribe
  - **THEN** the email input is cleared

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/turfly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/turfly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/turfly` ships on https://turfly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/turfly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/turfly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/turfly/public/CNAME` = `turfly.free.componentdock.com`
  and the package `homepage` = `https://turfly.free.componentdock.com`.
