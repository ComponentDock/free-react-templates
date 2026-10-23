# Medvista — Implementation Tasks

Source design: **Mediplus** (`https://colorlib.com/wp/template/mediplus/`) → recreation name **medvista**. Shipped at https://medvista.free.componentdock.com.

Scope: A Medical / Healthcare template with hero, about, services, cta banner, doctors and blog sections. Recreation of ColorLib **Mediplus** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/medvista/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/medvista/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sign Up · Sign In

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Medvista · Appointment

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Medvista · We are here for your Care · Make an appointment

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: We Are · Medvista · A Medical Clinic · Make an appointment · Contact us

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Free consultation form · Our Services · Free Consultation · Select Service · Emergency Services · Qualified Doctors

### 6. CtaBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Your Health is Our Priority · Search Places

### 7. Departments
- No dedicated spec block — hold this band to the design notes.

### 8. Doctors
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Qualified Doctors · Book now

### 9. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Gets Every Single Updates Here · Read more

### 10. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Read testimonials · Our Patient Says

### 11. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact form · Medvista location map · Contact Us · Send Message

### 12. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Twitter · Facebook · Google · Instagram

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/medvista/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/medvista/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Spec folder: `openspec/specs/template-medvista/spec.md`; [ ] Docs folder: `docs/templates/medvista/`; [ ] No `apps/` code written (prep stream only); [ ] Source slug recorded: `mediplus`; [ ] Preview URL analyzed: https://preview.colorlib.com/theme/mediplus/; [ ] Design tokens captured from live CSS; [ ] All 11 sections documented in Gherkin scenarios; [ ] New name `medvista` has no collision with existing apps/specs; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/medvista` ships on https://medvista.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/medvista/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/medvista/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medvista/public/CNAME` = `medvista.free.componentdock.com`
  and the package `homepage` = `https://medvista.free.componentdock.com`.
