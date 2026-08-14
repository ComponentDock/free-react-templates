# Orion (ColorLib Oneder) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-orion` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Oneder" — free **one-page creative business**
  template (Bootstrap 4 + jQuery, CC BY 3.0),
  source: https://colorlib.com/wp/template/oneder/
- **Live preview analyzed:** https://preview.colorlib.com/theme/oneder/
  (DOM + `css/style.css` fetched and parsed for this prep; screenshot at
  https://colorlib.com/wp/wp-content/uploads/sites/2/oneder-free-template.jpg
  reviewed in-browser — full-viewport office photo hero, centered uppercase
  white headline, blue pill CTA, white/light-gray alternating sections).
- **Recreation name:** Orion (a bright constellation — one-page creative
  business). App folder `apps/orion`, package `@free-react-templates/orion`.
- **Brand tokens:** primary `#007bff`, hover `#000`; section titles blue
  40px/900; pill buttons (radius 30px, padding 10px 30px); font Work Sans;
  light sections `#f8f9fa`; footer `#333333` with `#737373`/`#999999` text;
  hero overlay `rgba(0,0,0,0.4)`; hero h1 3rem/900 white uppercase.
  Put the primary in Tailwind `@theme` and use via classes.

## Section order (1:1 from the live DOM)

1. Sticky navbar (logo "Orion" + links: Home, About, Team, Pricing, FAQ,
   More Links dropdown, Portfolio, Services, Testimonials, Blog, Contact) +
   mobile slide-out menu. Links smooth-scroll to section ids.
2. Hero `home-section` (`site-blocks-cover overlay`, bg image, 100vh, dark
   scrim): h1 "I'm Creative One Page Template" (uppercase, white, 900),
   primary pill "Get In Touch" → `#contact-section`. **Same cover block**
   continues with: "About Orion" (uppercase blue), h3 "For the next great
   business", one lorem paragraph, second "Get In Touch" button, and a
   two-column row (image left, text right).
3. `team-section` (border-bottom): "Our Team" + 8 member cards in a 4-col
   grid — photo, name, role ("Product Manager"). No hover overlay needed;
   keep it clean (flat image + caption).
4. `portfolio-section`: "Portfolio" + filter buttons All/Web/Design/Brand
   (`*`, `.web`, `.design`, `.brand`) + responsive grid of ~6–9 items
   (original has 26 images; a representative subset is fine) with an
   active-filter state; clicking an item opens a lightbox or focuses the
   image (implementer's choice — keep accessible).
5. `services-section` (bg-light, border-bottom): "Our Services" + 6 cards —
   Business Consulting, Market Analysis, User Monitoring, Insurance
   Consulting, Financial Investment, Financial Management; icon + title +
   copy + "Learn More".
6. `testimonials-section` (`testimonial-wrap`): "Testimonials" carousel of
   3 quotes (John Smith, Christine Aguilar, + one more); photo + name +
   quote; prev/next controls.
7. `pricing-section` (bg-light): "Pricing" — Basic $47/year, Premium
   $200/year, Professional $750/year, each: title, price, short feature
   copy, pill "Buy Now".
8. FAQ (inside pricing section, `faq-section`): "Frequently Ask Questions"
   accordion — questions: "Can I accept both Paypal and Stripe?", "What
   available is refund period?", "Where are you from?", "What is your
   opening time?"; single-open accordion behavior.
9. `about-section`: two specialty items — "Web & Mobile Specialties",
   "Intuitive Thinkers" — title + copy + "Learn More".
10. `blog-section`: "Our Blog" + 3 post cards — image, meta
    (author · Jan 18, 2019 · News), title "Repudiandae Quisquam Eaque
    Dolore", excerpt, "Continue Reading..." link. (Paraphrase titles fine.)
11. `contact-section` (bg-light): "Contact Us" + info (203 Fake St.
    Mountain View, San Francisco, California, USA; +1 232 3235 324;
    youremail@domain.com — paraphrase) + form: First Name, Last Name,
    Email, Subject, Message, "Send Message" pill submit (local-state
    success, zod validation).
12. `site-footer` (#333333): 4 columns — About Us blurb; Quick Links
    (About Us, Services, Testimonials, Contact Us); Follow Us (Facebook,
    Twitter/X, Instagram, LinkedIn icons); Subscribe Newsletter (email
    input + send). Bottom bar: copyright + **"Component Dock" link to
    https://www.componentdock.com/** (replaces the original "made with
    Colorlib" attribution — REQUIRED, see conventions).

## Fidelity notes

- Match the flat, spacious look: lots of whitespace, no heavy shadows,
  subtle borders (`border-bottom` between sections), centered section
  titles in blue 900.
- Placeholder images: `https://picsum.photos/seed/orion-<n>/<w>/<h>`
  (deterministic). Hero: wide office-style shot, e.g. seed orion-1 1920×900.
- Icons: `lucide-react` (service icons, social icons, menu/close, chevrons).
- Font: load "Work Sans" via Google Fonts `<link>` in `index.html`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate.
- Base implementation on a simple existing one-pager app (e.g.
  `apps/aurora` or similar single-page structure) for conventions; keep the
  dark-mode toggle per suite convention (`.dark` class) — the template is
  light by default.
- No ColorLib strings in any app file; provenance only in spec/TEMPLATES/PR.

## Tasks

- [ ] Write `openspec/specs/template-orion/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/orion` (copy simplest existing app; rename package to
      `@free-react-templates/orion`; `public/CNAME` =
      `orion.free.componentdock.com`; homepage accordingly; `npm install`
      at root to register the workspace in package-lock.json).
- [ ] `index.html`: title "Orion — One Page Template", Work Sans font link.
- [ ] TDD: tests first for Navbar (links, dropdown, mobile menu,
      aria-expanded), Hero (+intro block), Team, Portfolio (filter),
      Services, Testimonials (carousel), Pricing, FAQ (accordion), About,
      Blog, Contact (validation + success), Footer (columns, newsletter,
      Component Dock link), App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `bash scripts/verify-app.sh orion` + `npm run spec:validate`.
- [ ] PR: open `feat/template-orion` → merge immediately (squash). PR body:
      source (ColorLib Oneder), preview URL, tokens, renames/placeholders.
- [ ] TEMPLATES.md bookkeeping on main after merge: Oneder `[ ]` → `[x]`
      (implementer, per FAST_MODE state D); update README structure +
      `docs/ai-context.md` app list.
