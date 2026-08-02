# Fetch (Colorlib Dogger) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-fetch`.

## Design notes (replication findings)

- **Original:** ColorLib "Dogger" — free **dog care / pet care** website
  template, plain and clean
  (source: https://colorlib.com/wp/template/dogger/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dogger/
  (HTTP 200, full rendered DOM + `css/style.css` fetched).
- **Structure (1:1, section order):**
  1. Navbar (`site-navbar`, absolute over hero): logo "Dogger"; links Home,
     About, Trainers, Pricing, FAQ, Testimonials, Gallery, Blog (+ More Links
     dropdown with Trainers/Services/Contact).
  2. Hero (`site-blocks-cover bg-light` + dog image): h1 "We Care For Your
     Dog" (4rem, 900, uppercase, black) + subtext "We always try to provide
     your dog the best services." (gray #999999, light 300, 1.2rem).
  3. Welcome (`#welcome-section`): h2 "Welcome to Dogger Pet Care" + blurb
     (Lorem "Far far away…") + 3 icon tiles: **Love & Care**, **Fearsome**,
     **Beautiful** (each: icon + title + blurb).
  4. About (`#about-section`): h2 "About Us" + two-column copy.
  5. Trainers (`#trainers-section`, `bg-primary` sage background): h2 "Our
     Trainers" + 3 trainer cards (photo + name + role + blurb): **Jessica
     White**, **Valerie Elash**, **Alicia Jones**.
  6. Pricing (`#pricing-section`): h2 "Pricing Table" + 3 tiers — **Basic
     $47/year**, **Premium $250/year**, **Professional** (3rd price) — each
     with 4 bullet features + "Buy Now" button (btn-primary).
  7. FAQ (`#faq-section`): h2 "Frequently Ask Questions" + 4 accordion
     questions (e.g. "Should I stop letting my dog sleep with me at night?").
  8. Testimonials (`#testimonials-section bg-light`): h2 "Happy Customers" +
     4 quote cards: **Ricky Fisher**, **Ken Davis**, **Mellisa Griffin**,
     **Robert Steward**.
  9. Gallery (`#gallery-section`): h2 "Photo Gallery" + 1 large + 6 small
     photos.
  10. Blog (`#blog-section`): h2 "Dogger Blog" + 4 posts (title + date, e.g.
      "5 Things You Need To Know About Dog Massage — April 17, 2019").
  11. Services (`#services-section`): h2 "Our Services" + 6 services with SVG
      icons: **Dog Checkup**, **Dog Dermatology**, **For Strong Teeth**,
      **Dog First Aid**, **Dog Dryer**, **Expert Veterinarian**.
  12. Contact (`#contact-section`): h2 "Contact Form" — form fields: First
      Name, Last Name, Email, Subject, Message (textarea, placeholder "Write
      your notes or questions here...") + submit "Send Message" (btn-dark);
      beside it "Contact Us" info block: Address "Melbourne St, South Birbane
      4101 Australia", Phone "+(000) 123 4567 89", Email "info@yourdomain.com".
  13. Footer (`site-footer`, dark #333333): "About Us" blurb + Quick Links
      (About Us, Trainers, Services, Testimonials, Contact Us) + Follow Us
      (social icons) + "Subscribe Newsletter" form + copyright line.
- **Design tokens extracted from `css/style.css`:**
  - Sage primary `#a2c0be` — buttons, trainers section bg, active states, FAQ
    icon bg. Button hover → black (#000).
  - Dark teal `#405a58` (headings on sage) / `#567876` (text on sage).
  - Black `#000` hero h1; hero text `#999999`; hero bg light `#f8f9fa`.
  - Footer `#333333` bg, body text `#737373`, links `#999999` → white hover,
    headings white.
  - Fonts: **Open Sans** (headings + body) + **Vollkorn** (serif accents);
    loaded via Google Fonts `<link>`.
  - Buttons: height 43px, border-radius 4px, font-size .8rem, padding
    8px 20px.
  - Navbar: transparent over hero, black logo, black links.
- **Recreation name:** Fetch (dog-themed word, distinct from "Dogger"). App
  folder `apps/fetch`, package `@free-react-templates/fetch`.
- **Recreation approach:** seeded picsum placeholders for photos
  (`picsum.photos/seed/fetch-<n>/<w>/<h>`: hero dog, trainers ×3, gallery
  ×7, blog ×4); lucide-react icons for features/services where the original
  uses inline SVG/icomoon icons; inline SVG brand icons for footer socials;
  sage primary in `@theme`; Navbar dark-mode toggle per repo standard;
  newsletter + contact forms prevent default (no backend); FAQ accordion
  with accessible buttons; repo-standard Navbar/Footer chrome pattern.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-fetch/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/fetch` (copy the simplest comparable app — Aurora has the
      section-rich landing pattern; rename package to
      `@free-react-templates/fetch`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-fetch`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
