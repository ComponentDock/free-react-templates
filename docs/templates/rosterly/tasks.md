# Rosterly — Implementation Tasks

Source design: ColorLib **Jobboard** (`https://colorlib.com/wp/template/jobboard/`, preview
`https://preview.colorlib.com/theme/jobboard/`) → recreation name **rosterly**. Shipped at
https://rosterly.free.componentdock.com.

Naming (AGENTS.md rule 5): the template ships as **Rosterly**; the source name stays out of
every app file. Provenance lives only in this brief, the spec, `TEMPLATES.md` and the PR.
The folder was `apps/jobboard` until the rule-5 rename, i.e. it reused the source slug.

Row note: `TEMPLATES.md` links the slug `rosterly` for this app, and the spec records the
same slug — no disagreement. (Until 2026-10-24 both the spec and this brief recorded ColorLib
"Careers" and its blue `#1644ba`; the app never rendered that design. The `SPEC-STALE`
verdict in `docs/spec-row-mismatch.md` settled it; tokens here are re-measured from
`css/style.css` 37,406 B + `css/custom-bs.css` 36,236 B — lime `#89ba16`, Nunito.)

Scope: a job-board landing page with hero search, trending keywords, a stats band, job
cards, a "Looking For A Job?" call to action, a client-logo row, a mobile-app band and a
four-column footer. Recreation of ColorLib's **Jobboard** template as a React 19 + Vite +
Tailwind 4 + TypeScript single-page application.

> The spec carries the measured section list and the token table; this brief mirrors it and
> adds the app's one documented omission (the reference's testimonial carousel band).

## Component breakdown

Render order as composed in `apps/rosterly/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Rosterly · Post a Job · Log In

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search keywords · Location · Job type

### 3. TrendingKeywords
- No dedicated spec block — hold this band to the design notes.
- Anchors: Trending Keywords:

### 4. StatsCounter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Rosterly Site Stats

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
- Anchors: Rosterly · Search Trending · Company · Support · Contact Us · New York, NY

## Verification

- [x] `apps/rosterly` ships on https://rosterly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/rosterly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rosterly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rosterly/public/CNAME` = `rosterly.free.componentdock.com`
  and the package `homepage` = `https://rosterly.free.componentdock.com`.
