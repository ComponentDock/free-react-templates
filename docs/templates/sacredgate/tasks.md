# Sacredgate — Implementation Tasks

Source design: **Church** (`https://colorlib.com/wp/template/church/`) → recreation name **sacredgate**. Shipped at https://sacredgate.free.componentdock.com.

Scope: SacredGate is a single-page church / ministry landing page in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/sacredgate/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Days · Hours · Minutes · Seconds

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Search · Mobile

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous slide · Next slide · Learn More

### 4. Intro
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Our Church

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Church main activities

### 6. Causes
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Church&apos;s Causes · Donate Now

### 7. Quote
- No dedicated spec block — hold this band to the design notes.
- Anchors: Quote of the day

### 8. Sermon
- No dedicated spec block — hold this band to the design notes.
- Anchors: Today&apos;s Sermon

### 9. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: alert · Subscribe to Our Newsletter · Stay updated with the latest sermons, events, and community news. · Thank you for subscribing! · Email address · Subscribe

### 10. News
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · Read More

### 11. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Church · Quick Links · Support · Made with Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sacredgate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sacredgate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Top bar with countdown timer renders correctly; [ ] Red "Send Donations" button styled with #eb4141; [ ] Header is sticky with logo in Bilbo serif font; [ ] Nav links: Home, Ministries, Sermons, Blog, Contact; [ ] Hero slider with Owl Carousel-style functionality; [ ] "God is all around us" headline visible on slides; [ ] Intro section with "Welcome to Our Church" heading; [ ] Services section with parallax bg + 5 service items; [ ] Causes slider with card items; [ ] Quote section with parallax bg; [ ] Sermon section on #f0f4f8 background; [ ] Newsletter form on #eb4141 red background; [ ] News/blog cards with date badges; [ ] Footer on #161619 dark bg with 3 columns; [ ] Footer links to Component Dock; [ ] Responsive: hamburger menu on mobile; [ ] Brand colors: #eb4141 (red), #ffd600 (yellow), #000 (black), #161619 (dark); [ ] Fonts: Bilbo (headings/logo), Montserrat (body); [ ] Placeholder images via picsum.photos/seed/sacredgate-*; [ ] No ColorLib references in app code (provenance in spec only); [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sacredgate` ships on https://sacredgate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sacredgate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sacredgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sacredgate/public/CNAME` = `sacredgate.free.componentdock.com`
  and the package `homepage` = `https://sacredgate.free.componentdock.com`.
