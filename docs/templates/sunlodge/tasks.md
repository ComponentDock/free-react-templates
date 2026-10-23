# Sunlodge — Implementation Tasks

Source design: **Ecoho** (`https://colorlib.com/wp/template/ecoho/`) → recreation name **sunlodge**. Shipped at https://sunlodge.free.componentdock.com.

Scope: A hotel template with hero, about, popular rooms, video preview, booking and blog sections. Recreation of ColorLib "Ecoho" hotel template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

## Component breakdown

Render order as composed in `apps/sunlodge/src/App.tsx`:

### 1. Navbar
- The navbar shall display the brand name "Sunlodge" and navigation links: Home, Rooms, About, Blog, Contact. It shall show a "Book Now" CTA button. Contact info (phone, address) shall be visible on desktop. The navbar background shall be dark navy.
- Scenario — Navbar renders all links:
  - **WHEN** the user visits Sunlodge
  - **THEN** the navbar shows links: Home, Rooms, About, Blog, Contact
  - **AND** a "Book Now" CTA button is visible
  - **AND** contact info (phone number and address) is displayed
- Scenario — Navbar becomes sticky on scroll:
  - **WHEN** the user scrolls past the hero area
  - **THEN** the navbar remains fixed at the top with a solid background

### 2. Hero
- The hero section shall show a dark brown left panel with headline "World Class Accommodation", subtitle text, and an orange "View More" CTA button. The right side shall display a hotel room photo.
- Scenario — Hero shows headline and CTA:
  - **WHEN** the user loads the page
  - **THEN** the hero displays "World Class Accommodation" heading
  - **AND** a "View More" button is visible
  - **AND** a hotel room image is displayed on the right

### 3. About
- The about section shall display a centered heading, a two-column layout with descriptive text and a "Learn More" button on the left, and two overlapping hotel images on the right.
- Scenario — About section displays content:
  - **WHEN** the user scrolls to the about section
  - **THEN** a heading and description text are visible
  - **AND** a "Learn More" button is present
  - **AND** two overlapping images are displayed

### 4. PopularRooms
- The popular rooms section shall display four room cards in a responsive grid. Each card shall show an image, room title, price per night, and description.
- Scenario — Room cards display correctly:
  - **WHEN** the user scrolls to the popular rooms section
  - **THEN** four room cards are displayed
  - **AND** each card shows a title, price, and description
  - **AND** each card has an image

### 5. VideoPreview
- The video section shall display a background image with a centered play button and "Hotel Preview" label.
- Scenario — Video section renders play button:
  - **WHEN** the user scrolls to the video section
  - **THEN** a play button is visible
  - **AND** "Hotel Preview" text is shown

### 6. BookingForm
- The booking section shall show a two-column layout with descriptive text on the left and a form on the right. The form shall include Check In date, Check Out date, Room select, Guest select, and a "Check Availability" submit button.
- Scenario — Booking form displays all fields:
  - **WHEN** the user scrolls to the booking section
  - **THEN** the form shows Check In, Check Out, Room, Guest fields
  - **AND** a "Check Availability" button is visible

### 7. BlogCards
- The blog section shall display three blog post cards in a responsive grid. Each card shall show an image, title, and description.
- Scenario — Blog cards display correctly:
  - **WHEN** the user scrolls to the blog section
  - **THEN** three blog cards are displayed
  - **AND** each card has a title and description

### 8. Testimonials
- The testimonials section shall display three testimonial cards. Each card shall show a title, quoted text, and author name.
- Scenario — Testimonials render correctly:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** client quotes with author names are visible
  - **AND** three testimonial cards are displayed

### 9. InstagramFeed
- The Instagram section shall display six photo thumbnails in a responsive grid with hover overlay showing an Instagram icon.
- Scenario — Instagram photos display correctly:
  - **WHEN** the user scrolls to the Instagram section
  - **THEN** six photo thumbnails are displayed
  - **AND** each photo links to Instagram

### 10. Footer
- The footer shall display the brand name, description, social icons, navigation links, address, and contact info. It shall include a Component Dock attribution link.
- Scenario — Footer renders all sections:
  - **WHEN** the user scrolls to the footer
  - **THEN** navigation links are visible
  - **AND** address and contact info are shown
  - **AND** a Component Dock attribution link is present
  - **AND** social media icons are visible

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sunlodge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sunlodge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sunlodge` ships on https://sunlodge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sunlodge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sunlodge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sunlodge/public/CNAME` = `sunlodge.free.componentdock.com`
  and the package `homepage` = `https://sunlodge.free.componentdock.com`.
