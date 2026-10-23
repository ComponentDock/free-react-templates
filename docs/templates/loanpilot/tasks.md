# Loanpilot — Implementation Tasks

Source design: **Loanday** (`https://colorlib.com/wp/template/loanday/`) → recreation name **loanpilot**. Shipped at https://loanpilot.free.componentdock.com.

Scope: A loan and finance template with top bar, hero, loan services, why choose us, counter, blog and contact sections. Recreation of the ColorLib **Loanday** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/loanpilot/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/loanpilot/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: navigation · Primary · Search

### 3. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: amount · days · repayment · name · phone

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Thousands Of Customers Trust Our Company · Our Company · Our Vision · Learn More

### 5. LoanServices
- No dedicated spec block — hold this band to the design notes.
- Anchors: Discover all the loans for you · Find Out More →

### 6. Choose
- No dedicated spec block — hold this band to the design notes.
- Anchors: Why People Choose Us

### 7. Testimonial
- No dedicated spec block — hold this band to the design notes.
- Anchors: What Customers Are Saying

### 8. Counter
- No dedicated spec block — hold this band to the design notes.

### 9. CallToAction
- No dedicated spec block — hold this band to the design notes.
- Anchors: Are You Looking For A Loan? · Apply Now

### 10. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Post

### 11. ContactWidget
- No dedicated spec block — hold this band to the design notes.
- Anchors: Phone

### 12. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Loan · Quick Links · Follow Us · Address · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/loanpilot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/loanpilot/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Navbar is sticky, responsive, logo has green dot accent; [ ] Hero section has background image, headline, subtitle, two green buttons, loan form; [ ] Loan form has all 5 inputs (Amount, Days, Repayment, Name, Phone) + green submit; [ ] About section: 2-column layout, heading, description, 2 sub-items, CTA, image; [ ] Loan Services: 4 image cards with text overlay, "Find Out More" links; [ ] Choose section: 6 feature cards in 3-column grid with icons; [ ] Testimonials: dark background, carousel with 3 customer reviews; [ ] Counter: 4 stats with icons and animated numbers; [ ] Call/CTA: background image, dark overlay, CTA content; [ ] Blog: 3 post cards with author info; [ ] Contact widget: background image, office addresses, phone number; [ ] Footer: dark, logo, links, social icons, Component Dock attribution; [ ] All green buttons use `#88C417` brand color; [ ] All sharp buttons use `border-radius: 2px`; [ ] Font is Lato throughout; [ ] Background image sections use dark overlays; [ ] Mobile responsive at all breakpoints; [ ] No ColorLib references in app code; [ ] Footer links to componentdock.com; [ ] CNAME file present with loanpilot.free.componentdock.com; [ ] homepage in package.json set correctly; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/loanpilot` ships on https://loanpilot.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/loanpilot/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loanpilot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loanpilot/public/CNAME` = `loanpilot.free.componentdock.com`
  and the package `homepage` = `https://loanpilot.free.componentdock.com`.
