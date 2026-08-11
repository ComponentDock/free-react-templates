# Solo (ColorLib Personal) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-solo/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Personal" — personal portfolio / resume site
  (source: https://colorlib.com/wp/template/personal/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/personal/
  (HTTP 200, full rendered DOM + `css/main.css` (67KB) + `css/linearicons.css`
  extracted 2026-08-12 during prep). Screenshot `personal-free-template.jpg`
  (1200×946) viewed in browser and matches the live preview: clean minimal
  personal site — white + #f9f9ff bands, bold uppercase Poppins headlines,
  single blue-violet accent #8490ff with the signature
  #8490ff → #62bdfc gradient on buttons/bands/pricing hover, dark #04091e
  footer.
- **Visual design:** split hero with "THIS IS ME" eyebrow + huge uppercase
  name ("PHILIP GILBERT") + intro paragraph + flat blue CTA, portrait photo
  framed by a light-blue square border behind the subject; About section
  mirrors the split (photo left / "PERSONAL DETAILS" right). Generous
  whitespace, single-accent palette, gradient bands for contrast rhythm.
- **Structure (1:1, section order):**
  1. Header (`#header`, `position: fixed`, bg #fff; `.main-menu` padding
     20px 0; `.header-scrolled` → shadow
     `-21.213px 21.213px 30px 0px rgba(0,0,0,0.2)`): logo "Personal" →
     **Solo** (blue square/diamond icon + uppercase wordmark); links Home,
     About, Services, Portfolio, Pricing, Blog (dropdown: Blog Home, Blog
     Single), Pages (dropdown: Elements, Level 2 → Item One, Item Two),
     Contact.
  2. Banner hero (`banner-area`, bg **#f9f9ff**, `.fullscreen` 750px
     height): left `.banner-left` — h6 "This is me" (uppercase, weight
     400, letter-spacing 2px), h1 name 60px uppercase (30px <992px, margin
     20px 0), p (Dickens Pattern copy), `<a class="primary-btn
text-uppercase">discover now</a>`; right `.banner-right` — portrait
     photo (hero-img.png) with light-blue square frame behind (screenshot-
     verified; implement as a positioned bordered box behind the img).
  3. About (`home-about-area pt-120`): `.home-about-left` photo
     (about-img.png); `.home-about-right` — h6 "About Me" (uppercase,
     weight 400, mb 30px), h1 "Personal Details" (mb 40px), two paragraphs,
     `primary-btn` "view full details".
  4. Services (`services-area section-gap`): `.title.text-center` — h1 "My
     Offered Services" + p; 3 × `.single-services` (text-center, mt 60px):
     linearicons icon 35px #222 (hover → gradient bg + white icon), h4 (mt
     30px mb 20px), p. **Web Design / Web Development / Photography**
     (lucide: Monitor/PenTool, Code/Globe, Camera).
  5. Facts (`facts-area section-gap`, bg **gradient #8490ff→#62bdfc**):
     4 counters white — **2536** Projects Completed, **6784** Happy
     Clients, **2239** Cups of Coffee, **435** Real Professionals. Original
     uses counter-up on scroll → implement a small count-up hook.
  6. Portfolio (`portfolio-area section-gap`): centered title "Our Latest
     Featured Projects" + p; `.filters` All / Vector / Raster / UI/UX /
     Printing (active = gradient); 6 items (p1–p6) with hover overlay +
     centered preview icon (magnific-popup → SPA modal or dead link);
     labels "2D Vinyl Design", "Vector", "Creative Poster Design",
     "Agency", "Embosed Logo Design", "Portal", "3D Helmet Design",
     "Raster"; centered `primary-btn` "View More".
  7. Testimonials (`testimonial-area section-gap`, bg **#f9f9ff**):
     centered title "Client's Feedback About Me" + p; owl-carousel of
     white cards `.single-testimonial` (padding 25px 30px 12px): quote +
     round avatar (user1.png/user2.png) + name **Harriet Maxwell** "CEO at
     Google" / **Carolyn Craig** "CEO at Facebook".
  8. Pricing (`price-area section-gap`): centered title "Choose Your Plan"
     - p; 3 × `.single-price` (bg #f9f9ff, padding 40px 20px, text-center):
       `.package-no` "01" + h4 "Economy" → **£199.00**, "02 Business" →
       **£299.00**, "03 Premium" → **£399.00**; features: Secure Online
       Transfer, Unlimited Styles for interface, Reliable Customer Service;
       `primary-btn` "Buy Now"; hover → gradient bg + white text + white
       button.
  9. Recent blog (`recent-blog-area section-gap`, bg **#f9f9ff**):
     header `col-md-8 pb-30 header-text` — h1 "Latest posts from our blog"
     - p; 3 cards `.single-recent-blog col-lg-4`: thumb (b1–b3.jpg) →
       `.bottom` flex author row (user.png avatar + "Mark Wiens" + meta
       "13th Dec ♥ 15 💬 04") → h4 title → p excerpt → `primary-btn`
       "View More". Titles: "Break Through Self Doubt And Fear", "Portable
       Fashion for young women", "Do Dreams Serve As A Premonition".
  10. Brands (`brands-area`, bg **gradient**): `active-brand-carusel` of 6
      logos (l1–l6) in `.col single-brand` cells → text wordmarks (bold,
      uppercase, white/translucent).
  11. Footer (`footer-area section-gap`, bg **#04091e**): 3 widgets —
      **About Me** (h4 white + p + "Copyright © All rights reserved | This
      template is made with ♥ by ColorLib"), **Newsletter** ("Stay updated
      with our latest trends": email input + send button), **Follow Me**
      ("Let us be social": circular social icons); `.footer-social` row.
- **Design tokens extracted from `main.css` + computed styles:**
  - Primary **#8490ff**; gradient **`linear-gradient(0deg, #8490ff 0%,
#62bdfc 100%)`** (buttons, facts, brands, price hover, service-icon
    hover, portfolio overlay).
  - Light band **#f9f9ff** (banner, testimonials, price cards, blog);
    body **#777777**; headings **#222222**; footer **#04091e**.
  - Font **Poppins** (300 body / 400 / 500 buttons / 600 headings);
    body 14px lh 1.625em; h1 36px, h2 30px, h3 24px, h4 18px; hero h1 60px
    uppercase (30px mobile).
  - Buttons `.primary-btn`: line-height 42px, padding 0 30px, no border,
    white, weight 500, uppercase, subtle rounding.
  - Section rhythm `.section-gap { padding: 120px 0 }`; header scrolled
    shadow `-21.213px 21.213px 30px 0px rgba(0,0,0,0.2)`.
- **Recreation name:** Solo (single-word personal brand; no collision with
  `apps/` or existing spec folders). App folder `apps/solo`, package
  `@free-react-templates/solo`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/solo-<n>/<w>/<h>`); lucide-react icons (Monitor,
  Code, Camera, ArrowRight, Heart, MessageCircle, social icons); Poppins
  300/400/500/600 via Google Fonts `<link>` in `index.html`; count-up hook
  for facts; owl-carousels → auto-advancing carousel / scroll-snap strip
  (testimonials + brands); portfolio filters filter client-side; nav
  dropdowns → disclosure menus or simple link groups; client logos → text
  wordmarks; hero portrait frame → positioned bordered box behind the image;
  copy paraphrased, same content kinds; footer keeps "made with ♥ by
  ColorLib" credit; repo-standard chrome from `packages/ui` (Button,
  ButtonLink, Badge, Card, cn) per conventions; no assets copied.

## Tasks

- [x] Write `openspec/specs/template-solo/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/solo` (copy the simplest existing app; rename package to
      `@free-react-templates/solo`; `npm install` at root for lockfile;
      register `injectUiSource()` in vite.config.ts).
- [ ] TDD: tests first for Header (scroll shadow + dropdowns), Hero (CTA),
      About, Services (icon hover), Facts (count-up), Portfolio (filters +
      hover overlay), Testimonials (carousel), Pricing (hover invert),
      RecentBlog, Brands, Footer (newsletter form + social), App
      composition — all green at 100% coverage.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh solo` (typecheck + lint + knip +
      fallow + 100% coverage tests + build).
- [ ] Push `feat/template-solo`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
