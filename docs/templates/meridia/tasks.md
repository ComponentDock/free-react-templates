# Unioncorp — Implementation Tasks

Source design: **Unioncorp** (`https://colorlib.com/wp/template/unioncorp/`) → recreation name **unioncorp**. Shipped at https://unioncorp.free.componentdock.com.

Scope: A Financial & Business Consulting template with hero banner, services grid, statistics & counters and footer attribution sections.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/unioncorp/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/unioncorp/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Call Us: +2 392 3929 210 · Location: San Francisco, California, USA

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: navigation · Main navigation · Unioncorp. · Finance & Consultation · Get Started

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Build Your Financial Plan With Our Specialists · Get Started

### 4. AboutOverview
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Union Corporation · More than 40M+ Trusted Our Financial &amp; Consultation Institution · Learn More

### 5. QualityBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Union Corporation · Quality Makes the Belief for Customers · Watch Video

### 6. ServicesGrid
- No dedicated spec block — hold this band to the design notes.
- Anchors: Services · Our Exclusive Services We Offer For You

### 7. CaseStudies
- No dedicated spec block — hold this band to the design notes.
- Anchors: We Take Every Case Studies Very Seriously

### 8. Stats
- No dedicated spec block — hold this band to the design notes.
- Anchors: Great Reviews For Our Services · Technical Statistics

### 9. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Leadership Team

### 10. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Happy Customers

### 11. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Recent From Blog · Read More

### 12. CTABanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Prepare for Takeoff · Looking for business opportunity? · Get Started

### 13. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Unioncorp. · Services · Recent Posts · Have a Questions? · San Francisco, California, USA

## Verification

- [x] `apps/unioncorp` ships on https://unioncorp.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/unioncorp/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/unioncorp/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/unioncorp/public/CNAME` = `unioncorp.free.componentdock.com`
  and the package `homepage` = `https://unioncorp.free.componentdock.com`.
