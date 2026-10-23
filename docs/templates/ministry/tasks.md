# Ministry — Implementation Tasks

Source design: **Salvation** (`https://colorlib.com/wp/template/salvation/`) → recreation name **ministry**. Shipped at https://ministry.free.componentdock.com.

Scope: Ministry is a single-page church website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Salvation" church website template design, built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/ministry/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- The template SHALL render a transparent navbar with the brand name "Ministry", navigation links (Home, About, Ministries, Sermons, Events, Blog, Contact), and a pill-shaped "Donate" button.
- Scenario — Navbar renders all navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar displays links for Home, About, Ministries, Sermons, Events, Blog, and Contact
- Scenario — Donate button has pill styling:
  - **WHEN** the user views the navbar
  - **THEN** the Donate button has a rounded-full border-radius with brand background color

### 3. Hero
- The template SHALL render a full-viewport hero section with a background image, dark overlay, headline, subheading, description, and a CTA button.
- Scenario — Hero displays heading and CTA:
  - **WHEN** the page loads
  - **THEN** the hero shows "Transforming Lives" subheading, "Total Surrender to God" heading, description text, and "Become A Volunteer" button

### 4. Services
- The template SHALL render a services section with three service cards (Worship, Connect, God's Love) each with icon, title, subheading, and description, plus a quote block.
- Scenario — Three service cards are visible:
  - **WHEN** the user scrolls to the services section
  - **THEN** three cards for Worship, Connect, and God's Love are displayed with icons and descriptions

### 5. About
- The template SHALL render an about section with an image, heading, description paragraphs, and a "Learn More" button.
- Scenario — About section displays content:
  - **WHEN** the user scrolls to the about section
  - **THEN** the image, "Connect, Grow and Serve with Us" heading, description, and "Learn More" button are visible

### 6. Counter
- The template SHALL render a counter section with brand-colored background and four statistics: Members, Pastors, Donations, Churches.
- Scenario — Four stats are displayed:
  - **WHEN** the user scrolls to the counter section
  - **THEN** the values 1,005,000 (Members), 65,000 (Pastors), 500,000 (Donations), and 50 (Churches) are shown

### 7. Sermons
- The template SHALL render a sermons section with three sermon cards, each containing an image, title, speaker, categories, date, description, and Watch/Download buttons.
- Scenario — Three sermon cards with actions:
  - **WHEN** the user scrolls to the sermons section
  - **THEN** three sermon cards are displayed with Watch Sermons and Download Sermons buttons

### 8. Testimony
- The template SHALL render a dark-background testimony section with testimonials showing avatars, quotes, and names.
- Scenario — Testimonials display correctly:
  - **WHEN** the user scrolls to the testimony section
  - **THEN** four testimonials with avatars and names are displayed

### 9. Blog
- The template SHALL render a blog section with three blog cards showing images, meta information, titles, excerpts, and Read more buttons.
- Scenario — Three blog cards are visible:
  - **WHEN** the user scrolls to the blog section
  - **THEN** three blog cards with images, dates, authors, and Read more buttons are displayed

### 10. Events
- The template SHALL render an events section with three event items showing images, titles, dates, locations, and More Details buttons.
- Scenario — Three events are listed:
  - **WHEN** the user scrolls to the events section
  - **THEN** three event items with images, details, and More Details buttons are displayed

### 11. Gallery
- The template SHALL render a gallery section with seven images in a grid layout with hover overlay effects.
- Scenario — Seven gallery images in grid:
  - **WHEN** the user scrolls to the gallery section
  - **THEN** seven images are displayed in a grid with accessible labels

### 12. Footer
- The template SHALL render a four-column footer with brand info and social icons, latest news, quick links, and contact information. The footer copyright MUST link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer links to Component Dock:
  - **WHEN** the user views the footer
  - **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is present in the copyright line

### Cross-cutting requirements

- **No ColorLib references in app source** — The template SHALL NOT contain any references to "Colorlib" or "colorlib.com" in source files, comments, or data within the app folder.
  - Scenario — No ColorLib strings in app code: **WHEN** the app source files are inspected; **THEN** no file contains the string "colorlib" (case-insensitive)

## Verification

- [x] `apps/ministry` ships on https://ministry.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/ministry/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/ministry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ministry/public/CNAME` = `ministry.free.componentdock.com`
  and the package `homepage` = `https://ministry.free.componentdock.com`.
