# Forno (ColorLib Feliciano) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-forno`.

## Design notes (replication findings)

- **Original:** ColorLib "Feliciano" — restaurant / fine-dining template
  (source: https://colorlib.com/wp/template/feliciano/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/feliciano/ (HTTP
  200, full rendered DOM; stylesheet `css/style.css` parsed — no Google Fonts
  import in CSS, fonts self-hosted in demo: **Poppins** + **Great Vibes**;
  load both from Google Fonts in the recreation). Cross-checked against the
  TEMPLATES.md screenshot (`feliciano-free-template.jpg`, viewed) — designs
  match. The demo brands itself "Feliciano"; recreation uses the NEW name
  **Forno**.
- **Visual design (from DOM + CSS tokens + screenshot):** moody fine-dining
  aesthetic — dark charcoal/black hero (bg photo + heavy overlay) with
  centered **gold script wordmark** above a bold white uppercase h1; thin
  **black top info bar** (phone / email / open hours); transparent navbar
  that turns fixed white on scroll; warm gold `#c8a97e` accents everywhere;
  light sections with white cards; **dark brown footer `#3c312e`**.
  Distinctive: hero carousel dots are circular dish thumbnails.
- **Structure (1:1, section order):**
  1. Top info bar (`py-1 bg-black top`): phone icon + "+ 1235 2355 98",
     paper-plane icon + "youremail@email.com", right-aligned "Open hours:
     Monday - Sunday 8:00AM - 9:00PM".
  2. Navbar (`.ftco-navbar-light`, transparent over hero → `.scrolled` fixed
     white): brand left, links HOME / ABOUT / MENU / STORIES / CONTACT, gold
     "Book a table" CTA (radius 5px). Mobile: hamburger.
  3. Hero slider (`home-slider owl-carousel js-fullheight`, 3 slides):
     full-height bg photo (bg_1/2/3.jpg) + `.overlay` (opacity .5); centered
     Great Vibes subheading "Feliciano" (80px gold `#c8a97e`) + h1
     "Best Restaurant" / "Nutritious & Tasty" / "Delicious Specialties".
     Circular dish thumbnails as carousel dots (nice-to-have).
  4. Welcome / About (`.ftco-wrap-about`): left photo (+ optional badge);
     right: script "About" subheading + h2 "Feliciano Restaurant" + two
     Duden-river paragraphs + signature; "Delicious Specialties" intro
     heading leads into the services row.
  5. Services: script "Services" subheading + h2 "Catering Services"; 4 icon
     cards: Catering Services, Birthday Party, Business Meetings, Wedding
     Party.
  6. Menu: script "Specialties" + h2 "Our Menu"; 6 entries in 2-col grid
     (`.menus` d-sm-flex): square food photo, dish h3, price span (`$29`),
     ingredient tags ("Meat, Potatoes, Rice, Tomatoe"), "Order now" gold
     `.btn.btn-primary`. Demo repeats one dish name ×6 — use 6 distinct
     dishes (e.g. Grilled Beef, Roast Chicken, Seafood Pasta, Veggie Bowl,
     Steak Frites, Tiramisu-ish dessert).
  7. Counter strip (`.ftco-counter img`, bg photo + overlay): 4 count-up
     numbers + labels (Happy Customer / Projects / Years of Experience /
     Awards).
  8. Chefs: script "Chef" + h2 "Our Master Chef"; 4 cards: photo + name +
     role (John Smooth — Restaurant Owner, Rebeca Welson, Kharl Branyt, Luke
     Simon).
  9. Reservation (`.ftco-section img`, bg bg_3.jpg): script "Book a table" +
     h2 "Make Reservation"; form fields: Your Name, Your Email, Phone, Date,
     Time, select (persons), gold submit (py-3 px-5); right: "Open Hours"
     card. (Demo date/time pickers → plain inputs in recreation.)
  10. Testimonials (`.testimony-section img`): script "Testimony" + h2
      "Happy Customer"; 3-quote carousel, 5-star ratings, author name/role.
  11. Blog: script "Blog" + h2 "Recent Posts"; 3 post cards (photo, date,
      title, excerpt, read-more).
  12. Footer (`.ftco-footer ftco-bg-dark`, bg `#3c312e`): brand + blurb +
      social icons · Open Hours · Instagram grid · Newsletter input +
      subscribe; copyright bar (paraphrase the ColorLib credit).
- **Design tokens extracted from the preview CSS (`style.css`):**
  - Brand **gold `#c8a97e`** (28 uses) — links, active nav, hero script
    subheading, nav CTA, `.btn.btn-primary` bg (hover → transparent bg +
    gold text), counter/hover states.
  - Body `#666666` (17px, lh 2); headings near-black `#000000`/`#212529`;
    muted `#6c757d`/`#495057`/`#343a40`; light surfaces `#f8f9fa`/`#fafafa`;
    footer dark `#3c312e`.
  - Fonts: **Poppins** sans (body/nav 300–600), **Great Vibes** cursive
    (script subheadings — hero 80px, section heads smaller).
  - Buttons: gold bg + 1px gold border + white text; hover transparent;
    nav CTA radius 5px; submit py-3 px-5. Inputs: bootstrap .form-control.
  - Overlays: hero overlay opacity .5; dark overlays on counter/testimonial
    photo sections.
  - Spacing: `.ftco-section` padding 7em 0; hero js-fullheight; centered
    heading-section (script subheading above h2).
- **Recreation name:** Forno (NEW — differs from source "Feliciano"). App
  folder `apps/forno`, package `@free-react-templates/forno`. No collision
  with `ls apps/` or existing `openspec/specs/`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/forno-<n>/<w>/<h>`); lucide-react icons; social brand
  icons as inline SVG; Poppins + Great Vibes via Google Fonts `<link>`;
  gold `#c8a97e` in `@theme`; dark footer `#3c312e` in `@theme`.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-forno/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/forno` (copy the simplest existing app — e.g. Aurora or a
      recent restaurant/food app like Feast/Savory; rename package to
      `@free-react-templates/forno`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage:
      TopBar, Navbar (scroll state), HeroSlider, Welcome, Services, Menu,
      Counter, Chefs, Reservation (form validation + Open Hours), Testimonials,
      BlogPosts, Footer.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-forno`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (`free-react-templates-forno.surge.sh`) + homepage + `npm run
    readme:status`.
