# Jobboard — Implementation Tasks

Source design: **Jobboard** (`https://colorlib.com/wp/template/careers/`) → recreation name **jobboard**. Shipped at https://jobboard.free.componentdock.com.

Row note: `TEMPLATES.md` links the slug `jobboard` for this app while the spec records `careers`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Scope: A careers template with hero, stats banner, job listings, company logos and cta banner sections. Recreation of ColorLib's **Careers** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/jobboard/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/jobboard/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: JobBoard · Post a Job · Log In

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search keywords · Location · Job type

### 3. TrendingKeywords
- No dedicated spec block — hold this band to the design notes.
- Anchors: Trending Keywords:

### 4. StatsCounter
- No dedicated spec block — hold this band to the design notes.
- Anchors: JobBoard Site Stats

### 5. JobListings
- No dedicated spec block — hold this band to the design notes.
- Anchors: Listed · View More Jobs

### 6. CtaBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Looking For A Job? · Browse thousands of opportunities from top companies around the world · Browse Jobs

### 7. CompanyLogos
- No dedicated spec block — hold this band to the design notes.
- Anchors: Company We&apos;ve Helped

### 8. MobileAppCta
- No dedicated spec block — hold this band to the design notes.
- Anchors: Get The Mobile Apps · Search and apply for jobs on the go with our mobile application · App Store · Google Play

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: JobBoard · Search Trending · Company · Support · Contact Us · New York, NY

## Verification

- [x] `apps/jobboard` ships on https://jobboard.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/jobboard/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/jobboard/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobboard/public/CNAME` = `jobboard.free.componentdock.com`
  and the package `homepage` = `https://jobboard.free.componentdock.com`.
