# Chapel — Implementation Tasks

Source design: **Libchurch** (`https://colorlib.com/wp/template/libchurch/`) → recreation name **chapel**. Shipped at https://chapel.free.componentdock.com.

Scope: Recreate the ColorLib "Libchurch" church event template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app. The template provides a full church website with hero, events, about, services, sermons, blog, newsletter, and contact sections.

## Component breakdown

Render order as composed in `apps/chapel/src/App.tsx`:

### 1. TopBar
- The top bar SHALL display social media icon links and an event countdown timer.
- Scenario — Social icons are visible:
  - **WHEN** the page loads
  - **THEN** Facebook, Twitter, Google, and Instagram icon links are rendered
- Scenario — Countdown displays event timing:
  - **WHEN** the page loads
  - **THEN** the upcoming event label, days, hours, minutes, and seconds are displayed

### 2. Navbar
- The navbar SHALL show the site logo/name, a "Send Donation" button, and navigation links with mobile hamburger menu.
- Scenario — Desktop nav shows all links:
  - **WHEN** the page loads on desktop
  - **THEN** Home, About Us, Sermons, Event, Blog, and Contact links are visible
- Scenario — Mobile menu toggles:
  - **WHEN** the user taps the hamburger icon
  - **THEN** the mobile menu opens and all nav links are accessible
  - **WHEN** the user taps a link
  - **THEN** the mobile menu closes

### 3. Hero
- The hero SHALL display a background image with overlay, heading text, paragraph, and a call-to-action button.
- Scenario — Hero content is visible:
  - **WHEN** the page loads
  - **THEN** the heading "Living in God's Amazing Grace!" is displayed
  - **THEN** the paragraph and "join with us" CTA button are present

### 4. EventSpotlight
- The event spotlight section SHALL display the next event's date, title, time, location, and countdown.
- Scenario — Event info is rendered:
  - **WHEN** the page loads
  - **THEN** the event date (20 may), title, time, and location are visible

### 5. About
- The about section SHALL show the heading, descriptive paragraphs, a CTA button, and a complementary image.
- Scenario — About content is visible:
  - **WHEN** the page loads
  - **THEN** the heading, paragraphs, CTA button, and image are rendered

### 6. Services
- The services section SHALL display three service cards (Our Values, Our Vision, Our Mission) each with an icon, description, and read-more link.
- Scenario — Three service cards are rendered:
  - **WHEN** the page loads
  - **THEN** three cards with titles, descriptions, and read-more links are visible

### 7. Sermon
- The sermon section SHALL show the sermon title, preacher, categories, date, description, and download action links.
- Scenario — Sermon content is visible:
  - **WHEN** the page loads
  - **THEN** the sermon title, preacher name, categories, and description are displayed
  - **THEN** link, archive, listen, and download icons are present

### 8. EventList
- The event list SHALL display event items with thumbnails, dates, authors, locations, descriptions, and read-more buttons.
- Scenario — Event items are rendered:
  - **WHEN** the page loads
  - **THEN** the "Upcoming Events" heading and event cards with thumbnails and details are visible

### 9. Blog
- The blog section SHALL display three blog post cards with thumbnails, dates, titles, authors, and categories.
- Scenario — Blog cards are rendered:
  - **WHEN** the page loads
  - **THEN** three article cards with images, titles, authors, and categories are visible

### 10. Newsletter
- The newsletter section SHALL display a heading and an email input with a subscribe button.
- Scenario — Newsletter form is visible:
  - **WHEN** the page loads
  - **THEN** the heading, email input, and subscribe button are rendered
  - **WHEN** the user types in the email input
  - **THEN** the value is accepted

### 11. ContactInfo
- The contact section SHALL show the heading, address, email, and phone number.
- Scenario — Contact details are visible:
  - **WHEN** the page loads
  - **THEN** the heading, city, address, email (as mailto link), and phone (as tel link) are rendered

### 12. Footer
- The footer SHALL display the copyright line with a link to Component Dock and social media icon links.
- Scenario — Footer copyright and Component Dock link are present:
  - **WHEN** the page loads
  - **THEN** the copyright text with site name and Component Dock link are visible
  - **THEN** social icon links are rendered

### Cross-cutting requirements

- **Document title is set** — The App component SHALL set the document title on mount.
  - Scenario — Title is set: **WHEN** the app mounts; **THEN** the document title is "Chapel — Church Event Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/chapel/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/chapel/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/chapel` ships on https://chapel.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/chapel/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/chapel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chapel/public/CNAME` = `chapel.free.componentdock.com`
  and the package `homepage` = `https://chapel.free.componentdock.com`.
