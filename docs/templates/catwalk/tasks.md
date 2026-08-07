# Catwalk (Colorlib Topmodel) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-catwalk`.

## Design notes (replication findings)

- **Original:** ColorLib "Topmodel" — model agency landing page template
  (source: https://colorlib.com/wp/template/topmodel/).
- **Live preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/topmodel/
  — fetched `topmodel.html` + `css/style.css` (see prep session). The
  TEMPLATES.md screenshot (`topmodel-free-template.jpg`) confirms the
  visual design.
- **Visual design (screenshot + DOM):** elegant model-agency landing —
  muted dusty-rose/terracotta accent (#daa592) on white; full-bleed photo
  hero with dark overlay; terracotta model-search bar; circular icon
  services; tall photo model cards with hover overlay + stats; testimonial
  carousel; split image+text events block; blog case-study cards; peach
  (#cd866c) footer. All-Poppins typography (300–700), white text on photo
  sections.
- **Structure (1:1, section order):**
  1. Navbar: "TopModel" brand (accent span) + Home, About, Models, Blog,
     Contact (dark, white links) + "Contact Us" button.
  2. Hero: eyebrow "Top Model", H1 "Your Career of A Model", sub "We Are
     Professional Model Agency Based in London", Contact Us CTA.
  3. Model search bar (#daa592): "Search A Model" + Height (5.5–6), Bust
     (85–110cm), Weist (65–90), Hips (90–115), Eye
     (Amber/Blue/Brown/Gray/Green/Black) + Search button.
  4. Services: Finding Agency, Types of Modeling, Freelance, Search
     Models (circular icons, "Even the all-powerful Pointing…" blurb).
  5. Counter strip: Models, Agency, Awards, Events (photo bg + overlay;
     count-up in source → static numbers in React).
  6. About: "Welcome to Top Model" + "We Are Model Agency" + Fashion
     Shows, Photosessions, Model Video.
  7. Popular Model: 6 photo cards — Patricia Becket, Emily Stewart, Sofia
     Scott, Chloe Johnson, Victoria Henderson, Ella Turner — hover
     overlay + stats (Age 18, Height 179, Bust 85, Waist 65, Hips 90,
     Shoes 39, Eyes Blue).
  8. Testimonials: "My satisfied customer says" — carousel (Garreth
     Smith, Agent, …).
  9. Events (bg-light, split): image + "Events" / "Latest Fashion Shows"
     - 2 paragraphs.
  10. Case Study: "Our latest update" + 3 blog cards (sept. 17, 2019,
      Admin, 3 comments, "The Most Attractive Persons of the Hollywood").
  11. Footer (#cd866c): About Me / Popular Links / Quick Links / Have a
      Questions? (203 Fake St., Mountain View, San Francisco, CA, USA ·
      +2 392 3929 210 · info@yourdomain.com) + copyright.
- **Design tokens extracted from the CSS (`css/style.css`):**
  - Brand color: **#daa592** (dusty rose / terracotta) — `.bg-primary`,
    `.btn.btn-primary`, hover overlays, subheadings.
  - Brand scale: #cd866c (footer bg, btn-custom text), #d59883
    (btn-custom:after), #dfb2a1 (btn-custom underline), #000 at 0.3
    opacity (hero overlay).
  - Neutrals: white, #6c757d, #212529, #f8f9fa (bg-light), #000.
  - Font: **"Poppins"** 300–700 (single family, body + headings); hero H1
    ~6vw weight 700 white.
  - Buttons: `.btn-primary` #daa592 bg + white text; custom CTA = 4px
    bottom border #dfb2a1, text #cd866c, letter-spacing 1px, arrow.
  - Shapes: circular icon containers, tall 600px model cards, no rounded
    cards.
- **Recreation name:** Catwalk (NEW — never "Topmodel"). App folder
  `apps/catwalk`, package `@free-react-templates/catwalk`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/catwalk-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome; search bar = client-side filter over model cards; counter strip
  = static stats; testimonials = simple index-based slider.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-catwalk/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/catwalk` (copy the section-rich landing app pattern —
      e.g. Serenite or Aurora; rename package to
      `@free-react-templates/catwalk`; remember `injectUiSource()` in
      vite.config.ts and run root `npm install` so package-lock.json
      registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar, Hero, Model
      Search (filter logic), Services, Stats, About, ModelCards,
      Testimonials (slider), Events, Blog, Footer.
- [ ] `npm run verify:app catwalk` (typecheck + lint + coverage + build).
- [ ] PR `feat: Catwalk — model agency landing template (ColorLib
    Topmodel)` → immediate squash merge; mark TEMPLATES.md `[x]` +
      surge URL; `npm run readme:status`.
