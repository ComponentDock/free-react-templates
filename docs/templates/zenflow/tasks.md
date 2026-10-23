# Zenflow — Implementation Tasks

Source design: **Onepro** (`https://colorlib.com/wp/template/onepro/`) → recreation name **zenflow**. Shipped at https://zenflow.free.componentdock.com.

Scope: A business/tech agency website template with hero slider, services, portfolio, pricing, and contact sections. Recreation of ColorLib "Onepro".

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/zenflow/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/zenflow/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Mobile navigation · Zenflow

### 2. HeroSlider
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero slider · Previous slide · Next slide

### 3. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Learn More

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: progressbar · We are Theme Creator · Learn More

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Services We Provides

### 6. Portfolio
- No dedicated spec block — hold this band to the design notes.
- Anchors: View Project

### 7. PromoCTA
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Latest Design &amp; Creative Templates · Download Now

### 8. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet Our Team

### 9. Info
- No dedicated spec block — hold this band to the design notes.
- Anchors: We Build Digital Products · Learn More

### 10. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · Our Happy Clients

### 11. Pricing
- No dedicated spec block — hold this band to the design notes.
- Anchors: Pricing Plans · Buy It Now

### 12. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Latest News · Twitter Feed · Read More

### 13. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact Us · Address · Phone · Email · Name · Subject

### 14. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Zenflow · Component Dock

## Verification

- [x] `apps/zenflow` ships on https://zenflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/zenflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/zenflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zenflow/public/CNAME` = `zenflow.free.componentdock.com`
  and the package `homepage` = `https://zenflow.free.componentdock.com`.
