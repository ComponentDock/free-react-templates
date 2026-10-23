# Batter — Implementation Tasks

Source design: **Go Crepe** (`https://colorlib.com/wp/template/go-crepe/`) → recreation name **batter**. Shipped at https://batter.free.componentdock.com.

Scope: Recreation of ColorLib Go Crepe (https://colorlib.com/wp/template/go-crepe/) as a React 19 + Tailwind CSS 4 + TypeScript template. Batter is a creative digital agency landing page with a hero banner, feature grid, about story, portfolio works, newsletter signup, and footer with contact widgets.

## Component breakdown

Render order as composed in `apps/batter/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky navbar with logo, navigation links (Home, About, Works, Contact), and a hamburger menu toggle on mobile.
- Scenario — Desktop navigation:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar displays the "Batter" logo and all four navigation links
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the hamburger button on mobile
  - **THEN** the mobile menu expands showing all navigation links
  - **AND** the button icon changes to a close icon

### 2. Hero
- The template SHALL render a full-width hero section with a dark gradient background, heading text, subtext, and an orange CTA button linking to the contact section.
- Scenario — Hero content:
  - **WHEN** the hero section is visible
  - **THEN** it displays the heading "Instead of eating, you should feel the garnishing"
  - **AND** it shows a "Get Started" CTA button linking to #contact

### 3. Features
- The template SHALL render a 3-column features section with three feature cards, each containing an icon, title, and description.
- Scenario — Feature cards display:
  - **WHEN** the features section is visible
  - **THEN** three cards are displayed: "Stunning Visuals", "Clean Code", and "Punctuality"
  - **AND** each card has a descriptive paragraph

### 4. Story
- The template SHALL render a dark-background story section with a title on the left and a white content card on the right containing a heading, paragraph, and CTA button.
- Scenario — Story content:
  - **WHEN** the story section is visible
  - **THEN** it displays "Our Untold Story" heading
  - **AND** a white card with "From the part of beginning" heading and a CTA button

### 5. Works
- The template SHALL render a portfolio grid with six work items, each showing a placeholder image, title, and description.
- Scenario — Works display:
  - **WHEN** the works section is visible
  - **THEN** six portfolio items are displayed in a responsive grid
  - **AND** each item has an image, title, and description

### 6. Newsletter
- The template SHALL render a newsletter section with a heading, email input field, and submit button.
- Scenario — Newsletter form:
  - **WHEN** the newsletter section is visible
  - **THEN** it displays "Subscribe for our Newsletter" heading
  - **AND** an email input with placeholder "Email address"
  - **AND** a "Get Started" submit button

### 7. FooterWidgets
- The template SHALL render a dark-background footer widget section with three contact info blocks: address, email, and phone.
- Scenario — Contact widgets:
  - **WHEN** the footer widgets section is visible
  - **THEN** three blocks are displayed: Address, Email Address, and Phone Number
  - **AND** each block has an icon and contact details

### 8. Footer
- The template SHALL render a dark-background footer widget section with three contact info blocks: address, email, and phone.
- Scenario — Contact widgets:
  - **WHEN** the footer widgets section is visible
  - **THEN** three blocks are displayed: Address, Email Address, and Phone Number
  - **AND** each block has an icon and contact details

### Cross-cutting requirements

- **Footer with Component Dock link** — The template SHALL render a footer with the logo, copyright text linking to Component Dock, and social media icons.
  - Scenario — Footer content: **WHEN** the footer is visible; **THEN** it displays the "Batter" logo; **AND** copyright text with a link to https://www.componentdock.com/; **AND** social media icon links (Facebook, Twitter, Dribbble, Behance)
- **App integration renders all sections** — The template SHALL render all sections in the correct order: Navbar, Hero, Features, Story, Works, Newsletter, FooterWidgets, Footer.
  - Scenario — Full page render: **WHEN** the App component mounts; **THEN** all eight sections are rendered in order; **AND** no console errors occur
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/batter/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/batter/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/batter` ships on https://batter.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/batter/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/batter/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/batter/public/CNAME` = `batter.free.componentdock.com`
  and the package `homepage` = `https://batter.free.componentdock.com`.
