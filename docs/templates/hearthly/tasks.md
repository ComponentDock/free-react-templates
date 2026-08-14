# Hearthly (ColorLib Spark) — Tasks & Design Notes

> Recreation of ColorLib "Spark" — free Bootstrap 5 interior-design /
> home-furnishings website template
> (https://colorlib.com/wp/template/spark/) under the NEW name **Hearthly**
> ("hearth" — the heart of the home, fitting an interior-design brand;
> single lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-14), per the monorepo naming mandate
> (never reuse the ColorLib source name). Full spec:
> `openspec/specs/template-hearthly/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Spark" — modern-minimal interior-design /
  home-furnishings template (hero shows a styled living room; service
  icons are furnishing glyphs: lamp, double bed, desk, bathtub). Bootstrap
  5 based (bootstrap bundle + tiny-slider + aos + navbar + counter +
  custom.js) + custom `css/style.css` (~60 KB) + icon fonts icomoon +
  flaticon. Brand name used in the source copy: "Spark". TEMPLATES.md
  category: **Bootstrap 5 (89)**, first occurrence at line 626
  (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the `spark` slug
  also appears at line 1175 (**Business (365)**) — BOTH `- [ ]` rows of
  the SAME template; ONE implementation covers both rows (mark all `[x]`
  with the same surge URL at bookkeeping). NOTE: do NOT confuse with
  `sparkleclean` (line 166, shipped as gleam) — different template.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/spark/` — HTTP 200, ~25 KB HTML
  (REACHABLE). The index page carries the FULL single-page layout (navbar
  - hero + intro + services + blog + testimonials + CTA band + footer —
    all parsed from the live DOM). Subpages exist (`features.html`,
    `blog.html`, etc.) but are OUT OF SCOPE for the single-page recreation.
    Custom CSS `css/style.css` (~60 KB, fully extracted for tokens).
    Screenshot `spark-free-templatel.jpg` (1200×946 AVIF — the odd
    "templatel" filename in TEMPLATES.md is CORRECT; `spark-free-template.jpg`
    404s; viewed in browser): SPLIT hero — left solid muted teal panel
    (#367f7c) with white "Spark" logo + nav, large white serif headline
    "Design is not just what it looks like design is how it works", and a
    WHITE quote card floating on the panel (round avatar + name + location);
    right — photo of a modern living room (brown leather sofa, grey sofa +
    dark pillow, round gold mirror, potted plant). Below the fold: white
    page, big serif heading, two text columns (one with circular avatar).
    Editorial, modern-minimal aesthetic. Screenshot cuts off before
    services/blog/CTA/footer — those come from the live DOM.
- **Visual design:** LIGHT theme — white page bg, **Open Sans 14px** body,
  **Playfair Display serif `#000`** headings (editorial feel), **brand
  teal `#367f7c`** for every accent (hero left panel, 50×2px `.line`
  dividers, 90px feature-icon circles on
  `rgba(54,127,124,0.1)`, `py-5 bg-primary` CTA band, footer link
  accents). Hero: 100vh (min 800px), photo cover + `rgba(0,0,0,0.35)`
  overlay + 35% teal left panel (hidden ≤991.98px). Buttons: PILL radius
  30px, padding 12px 30px, 12px uppercase, letter-spacing .1rem; only
  outline-white used (hover → white bg + teal text). Quotes: Georgia serif
  (blockquote 16px, block-testimonial italic 18px) under Playfair 50px
  quote marks. Footer: bg `#efefef`, text `#888`, links `#777`, 30px
  social circles.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav`, absolute top 0, z-9, transparent over
     hero): brand **"Spark"** (Playfair 24px white) left; links **Home ·
     About us · Dropdown (Menu One → Menu Two → Sub Menu One/Two/Three,
     Menu Three) · Our products · Features · Blog · Contact Us** (14px,
     white-ish, hover white, padding 10px); mobile hamburger + off-canvas
     menu. Recreation: "Hearthly", same top-level links (nested dropdown
     may be simplified to one level — note in PR), hamburger + mobile
     panel.
  2. **Hero** (`.hero`, 100vh/min 800px, bg image + teal panel `:before`
     - `rgba(0,0,0,0.35)` `:after`): left col-lg-7 (text-center, lg
       text-start): `.subheading` **"Welcome"** (13px white) + h1.heading
       **"Design is not just what it looks like design is how it works"**
       (Playfair 50px/700 white, 40px mobile, mb 50px); right col-lg-5
       (text-center, lg text-end): `.testionial-hero` white quote card
       (max-width 300px): Playfair 50px quote mark + Georgia blockquote
       ("Far far away, behind the word mountains...") + `.author` (round
       avatar + **Mark Vaughn** + **Lublin, Poland**).
  3. **Intro** (`.section.section-1.pb-0`, pb 20rem desktop / 2rem
     mobile): left col-lg-6 — teal `.line.me-auto` + h2 **"Separated they
     live in Bookmarksgrove right at the coast of the Semantics, a large
     language ocean."** + `.block-testimonial` (round avatar + italic
     Georgia quote "A small river named Duden flows..."); right col-lg-6 —
     `.img-wrap` (absolute desktop / relative mobile) image + overlapping
     WHITE card `.text` (padding 40px, width 80%, float right, mt -50px,
     z-5): h3 **"We love minimal"** + paragraph.
  4. **Services** (`.section.section-2`): centered `.line.mx-auto` + h2
     **"Our Services Includes..."**; 4 feature cards (col-6 col-sm-6
     col-md-6 col-lg-3 text-center): 90px circle icon
     (`rgba(54,127,124,0.1)` bg, teal glyph — flaticon lamp/double-bed/
     desk/bathtub) + h3 **"Reduce costs to a minimum"** + paragraph.
  5. **Blog** (`.post-entries.section`, 70px 0): centered `.line.mx-auto`
     - h2 **"Vokalia and Consonantia, there live the blind texts."**; 4
       `.media-entry.h-100` cards (col-12 col-sm-6 col-md-6 col-lg-3): 200px
       image (black bg cover) + `.m-body` (padding 20px 20px 50px): date
       **"May 14, 2020"** (12px) + h3 **"Far far away, behind the word
       mountains"** (16px/700, hover teal) + paragraph + `.more` hidden
       Read More + arrow (fade in on card hover, arrow border teal).
  6. **Testimonials** (`.section`): 3 `.testionial-hero.dark` cards
     (col-sm-6 col-md-6 col-lg-4, BLACK text): Playfair quote mark +
     Georgia blockquote + `.author` (person_1/2/3.jpg round + **Mark
     Vaughn** + **Lublin, Poland**). SOURCE REPEATS the same quote/name
     ×3 — vary names/quotes for realism (same kind of content).
  7. **CTA band** (`py-5.bg-primary` teal): left col-lg-7 h3 white
     **"Get started with our products"**; right col-lg-5 `btn
btn-outline-white` **"Get started"** (pill).
  8. **Footer** (`site-footer`, bg #efefef, 70px 0): **About Foundation**
     (col-lg-4: h3 + paragraph + Connect socials: instagram/twitter/
     facebook/linkedin/pinterest/dribbble 30px circles), **Links**
     (col-lg-2 ms-auto: About us/Services/News/Careers/Contact),
     **Company** (col-lg-2: same 5 links), **Contact** (col-lg-3: address
     43 Raymouth Rd. Baltemoer, London 3910 + tel ×2 + email); bottom bar
     copyright → **Component Dock link** (mandatory).

## Implementation tasks

- [ ] Scaffold `apps/hearthly` from the simplest existing app; rename
      package to `@free-react-templates/hearthly`; `npm install
    --package-lock-only` (NEVER full install — lockfile only) +
      `public/CNAME` = `hearthly.free.componentdock.com`, homepage =
      `https://hearthly.free.componentdock.com`; register `injectUiSource()`
      in vite.config.ts (copy existing app)
- [ ] Theme tokens in `src/index.css` `@theme`: `--color-brand: #367f7c`
      (teal), `--color-ink: #000`, `--color-paper: #fff`, footer grays
      (`#efefef`/`#888`/`#777`), `rgba(54,127,124,0.1)` circle bg; fonts
      Playfair Display + Open Sans via `<link>` in index.html
- [ ] Navbar (absolute over hero, HEARTHLY logo, links, hamburger + mobile
      menu; simplified dropdown; aria-expanded on toggle)
- [ ] Hero (100vh, bg photo + overlay + teal left panel desktop-only,
      "Welcome" + serif headline + white quote card w/ avatar)
- [ ] Intro (teal line + serif heading + inline quote block left; image +
      overlapping white "We love minimal" card right; overlap off on
      mobile)
- [ ] Services (centered heading + 4 feature cards, 90px teal-tinted
      circles; lucide Lamp/BedDouble/Desk/Bath — probe `typeof` each)
- [ ] Blog (centered heading + 4 media cards: image, date, title,
      paragraph, Read More hover reveal)
- [ ] Testimonials (3 dark quote cards w/ avatars, varied content)
- [ ] CTA band (teal, "Get started with our products" + outline-white
      pill button)
- [ ] Footer (About Foundation + 6 social circles via inline SVG
      simple-icons paths — NO lucide brand icons; Links/Company/Contact
      widgets; bottom bar with Component Dock link)
- [ ] Placeholder images: `picsum.photos/seed/hearthly-<n>/<w>/<h>` — 1
      hero living-room photo, 1 intro image, 4 blog images, 4 avatars;
      screen seeds before pinning (seed-screening method; verified person
      picsum IDs 1027/64/823/996 for avatars; interior scenes for
      hero/intro/blog — verify the seed actually renders a room)
- [ ] Tests: navbar (links + mobile toggle), hero (headline + quote card),
      intro overlap, services cards, blog Read More reveal, testimonial
      cards, CTA button, footer Component Dock link + socials, responsive
      stacking — 100% coverage (MemoryStorage polyfill NOT needed — no
      localStorage in this template)
- [ ] Run `scripts/verify-app.sh hearthly` until green (typecheck + lint +
      vitest 100% + build)
- [ ] PR: source template, preview URL, design tokens, deviations (renames,
      placeholder images, varied testimonials, simplified dropdown)
- [ ] Bookkeeping on merge: mark BOTH `- [ ]` rows (line 626 Bootstrap 5,
      line 1175 Business) `[x]` with `https://hearthly.free.componentdock.com` + `npm run readme:status`
