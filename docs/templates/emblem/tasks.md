# Emblem (ColorLib Noxen) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Emblem** (NEW name —
> the ColorLib source keeps its name "Noxen"). Implementation ships on
> `feat/template-emblem` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Noxen" — free digital-agency website template
  (source: https://colorlib.com/wp/template/noxen/). TEMPLATES.md rows:
  line 467 (**Bootstrap (216)** category) + dup rows at lines 1112
  (Business), 2067 (Landing Page), 2535 (Portfolio) — all `- [ ]`, not
  shipped anywhere. Mark all four `[x]` at ship time.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-11):**
  `https://preview.colorlib.com/theme/noxen/` (HTTP 200, 28KB HTML) +
  `css/style.css` (24KB) + customized `css/bootstrap.min.css` (primary
  recompiled to `#dc3545`). Screenshot (`noxen-free-template.jpg`, 1200×946)
  browser-verified 2026-08-11.
- **Structure observed (1:1):** header (logo "Noxen." + red dot; topbar
  quick-contact address + hours; nav Home [active]/Services/Projects/
  About/Blog/Contact; social icons; mobile offcanvas toggle; sticky +
  shrink on scroll) → hero cover (hero_1.jpg + rgba(0,0,0,.3) overlay;
  H1 "Digital Agency with Excellent Services." 3rem white + 18px paragraph
  - "About Us" red pill; right: white-dots frame + img_2.jpg laptop art) →
    features (subtitle "Features" 13px uppercase #ccc + H2 "A creative
    digital agency with excellence services"; 3 × feature-1 cards bg #edf7ff
    padding 30px, icon 2rem, h3 18px, p 14px #9aa3a6; "View All Services"
    btn) → skills (bg-light #f8f9fa; left: "Your digital partner starts
    here." + signature.svg + Mr. John Doe / CEO & Co-Founder; right: "Our
    expertise and skills" + 4 progress bars 55/85/93/83% Writing/WordPress/
    Bootstrap/jQuery) → CTA band 1 (section-3, hero_2.jpg + rgba(0,0,0,.5);
    lead "Suscipit libero voluptate" + white H2 "Get ready to start your
    exciting journey. Our agency") → counters (#222 band; icon + number
    #ffd692 2rem + caption rgba(255,255,255,.7): 14k firms / 2k crews / 3920k
    lines; animateNumber count-up) → news & events (bg-light; red
    section-heading + intro; nonloop-block-13 owl carousel: 4 × news-1 cards
    500px tall bg images, centered text h3 link + category span + p + arrow;
    hover overlay rgba(0,0,0,.7); autoplay loop nav dots, items 1/2/3) →
    more services (section-3 hero_2.jpg; white heading + lead; 6 × service-1:
    90px circle 4px #dc3545 border icon 3rem white + h3 20px white + p
    rgba(255,255,255,.5)) → testimonials (bg-light; "Our Top Client Says" +
    intro; 3 × testimonial-2 white padding 30px shadow 0 5px 30px -5px
    rgba(0,0,0,.1); avatar 50px round; blockquote 18px; Mike Fisher / Jean
    Stanley / Katie Rose) → quality services CTA (section-3 hero_1.jpg;
    white heading + lead + "Contact Us Now" pill) → blog (bg-white; "Our
    Blog" + intro; 3 × post-entry-1: image + white contents padding 20px,
    meta #ccc "July 17, 2019 · by Admin", h2 22px black hover red, excerpt)
    → footer (#000; col-lg-4 About Us + col-lg-4 Newsletter form [email
    input 55px + Send pill] + col-lg-8 ml-auto > Navigation ×2 lists [About
    Us, Testimonials, Terms of Service, Privacy, Contact Us]; bottom
    border-top rgba(255,255,255,.1) copyright).
- **Design tokens:** brand red **#dc3545** (btn-primary bg/border, text-
  primary logo dot, nav active/hover, section-heading + 70×2px underline,
  service circle border, progress fill, form focus, post title hover,
  dropdown border-top); body/headings **#364d59** weight 300 (line-height
  1.7); feature cards **#edf7ff** / p **#9aa3a6**; light sections **#f8f9fa**;
  counter band **#222** / numbers **#ffd692**; footer **#000** / links
  rgba(255,255,255,.5); hero H1 3rem white (2rem mobile) line-height 1,
  hero p 18px white; fonts **DM Sans** 300/400/700 (Google Fonts); `.btn`
  radius **30px** uppercase letter-spacing .2rem font-size .8rem padding
  10px 20px; section padding 2.5em/5em, hero 9rem, footer 4em/8em;
  form-control height 55px.
- **Design approach:** light theme, red accents, photo backdrops on hero +
  both CTA bands, dark counter band, black footer. Paraphrase lorem copy
  but keep the same content kinds (agency value props, skills, services,
  testimonials, blog posts).
- **Placeholders:** seeded picsum — `emblem-hero` (office/team scene),
  `emblem-laptop` (subject-critical: 3D/art/laptop image per screenshot —
  SCREEN the seed), `emblem-news-<n>` (n 1..4), `emblem-blog-<n>` (n 1..3),
  `emblem-avatar-<n>` (n 1..3), backdrop seeds for the two CTA bands;
  signature = inline SVG squiggle or `emblem-signature` seed.
- **Icons:** lucide-react — `Home`/`Building2`, `Clock`, `MapPin`, `Code`,
  `PenTool`, `DraftingCompass`, `Smile`, `Smartphone`, `Gift`, `Layers`,
  `ArrowRight`, `Menu`, `Facebook`, `Twitter`, `Linkedin` (inline SVG brand
  icons — lucide removed brand icons), `Quote`.

## Implementation tasks

1. **Scaffold** — `apps/emblem` from the simplest existing app; rename
   package to `@free-react-templates/emblem`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it).
2. **Theme tokens** — add `#dc3545` / `#364d59` / `#edf7ff` / `#f8f9fa` /
   `#222` / `#000` / `#ffd692` to `@theme`; DM Sans Google Fonts `<link>` in
   `index.html`.
3. **Components** (per section, TDD — tests first):
   - `Header` — logo (wordmark + red dot), topbar quick-contact
     (address + hours), nav (Home active + 5 links), social icons, mobile
     offcanvas toggle (`aria-expanded`), sticky + shrink on scroll.
   - `Hero` — cover photo + dark overlay, H1 + paragraph + About Us pill,
     white-dots framed photo (decorative dot pattern via CSS radial-
     gradient dots, NOT a copied PNG).
   - `Features` — subtitle + H2 + 3 pale-blue cards + View All Services.
   - `Skills` — signature block (heading, paragraph, signature SVG,
     name/role) + 4 labeled progress bars (animated width).
   - `CtaBand` — photo backdrop + overlay + lead + white H2 (reused for
     both bands).
   - `Counters` — 3 counters, count-up on view (IntersectionObserver).
   - `NewsCarousel` — 4 tall image cards, autoplay + prev/next + dots,
     responsive items 1/2/3, hover overlay reveal.
   - `Services` — 6 circular-icon cards on photo backdrop.
   - `Testimonials` — 3 white cards (avatar, quote, name).
   - `BlogSection` — 3 post cards (image, meta, title, excerpt).
   - `Footer` — About Us / Newsletter form (validation) / Navigation ×2 /
     copyright.
4. **Compose** `App`/page in reference order; wire sticky header.
5. **Verify** — `scripts/verify-app.sh emblem` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark all four Noxen rows `[~]`→`[x]` (lines 467,
   1112, 2067, 2535) + surge URL + `npm run readme:status`; PR description
   must list source template, preview URL, tokens, placeholder images.
