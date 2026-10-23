# Bankcraft — Implementation Tasks

Source design: **Banker** (`https://colorlib.com/wp/template/banker/`) → recreation name **bankcraft**. Shipped at https://bankcraft.free.componentdock.com.

Scope: A finance and banking template with hero, loan and savings, services, how-it-works, pricing and team sections. Recreation of the ColorLib **Banker** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/bankcraft/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/bankcraft/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle menu · Bankcraft

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Banking Solutions

### 3. MoneySavings
- No dedicated spec block — hold this band to the design notes.
- Anchors: Money Savings

### 4. AboutUs
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Us · We Solve Your Financial Problem · Learn More

### 5. Team
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet Team

### 6. Gallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Gallery · Take a look at our offices and events that showcase our commitment to excellence.

### 7. HowItWorks
- No dedicated spec block — hold this band to the design notes.
- Anchors: How It Works · Getting started with our banking services is simple and straightforward.

### 8. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Services · We offer a wide range of financial services to meet all your banking needs.

### 9. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Happy Customers · See what our clients have to say about their experience with Bankcraft.

### 10. Pricing
- No dedicated spec block — hold this band to the design notes.
- Anchors: Pricing Plans · Choose the plan that best fits your financial needs and goals. · Popular · Get Started

### 11. FAQ
- No dedicated spec block — hold this band to the design notes.
- Anchors: Frequently Asked Questions · Find answers to the most common questions about our banking services.

### 12. BankLoan
- No dedicated spec block — hold this band to the design notes.
- Anchors: Bank Loan · Banking Consultation · Apply Now

### 13. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Blog · Stay updated with the latest financial insights and banking tips from our experts.

### 14. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: name · email · subject · message

### 15. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Bankcraft · Quick Links · Follow Us · Subscribe to our newsletter for the latest financial tips and updates. · Subscribe · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/bankcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/bankcraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Navbar: sticky, logo with orange accent dot, nav links, social icons; [ ] Hero: headline, subtitle, 3 service summary cards; [ ] Money Savings: 4 feature cards with icons; [ ] About Us CTA: split layout, image + text + button; [ ] Team: 8 member cards in responsive grid; [ ] Gallery: image grid; [ ] How It Works: 3 numbered steps; [ ] Services: 6 service cards in 2x3 grid; [ ] Testimonials: customer review cards; [ ] Pricing: 3 tiers, Premium highlighted; [ ] FAQ: accordion with toggle behavior; [ ] Bank Loan CTA: split layout with image and CTA; [ ] Blog: 3 post cards with images; [ ] Contact: form with all fields; [ ] Footer: dark bg, 3 columns, newsletter, Component Dock link; [ ] Design tokens: Open Sans, #fd7e14 orange, #343a40 dark, 30px pill buttons; [ ] No ColorLib references in app code; [ ] Placeholder images via picsum.photos; [ ] Package name: @free-react-templates/bankcraft; [ ] CNAME: bankcraft.free.componentdock.com; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/bankcraft` ships on https://bankcraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/bankcraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/bankcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bankcraft/public/CNAME` = `bankcraft.free.componentdock.com`
  and the package `homepage` = `https://bankcraft.free.componentdock.com`.
