# Archon (ColorLib Alpha) — Tasks & Design Notes

> Prep artifacts (renamed from the pre-correction `template-alpha` spec —
> the ColorLib source name may not be reused). Implementation ships on
> `feat/template-archon`.

## Design notes (replication findings)

- **Original:** ColorLib "Alpha" — free HTML architecture template
  (source: https://colorlib.com/wp/template/alpha/).
- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/alpha/
  (live DOM + `css/style.css` (29 KB) fetched; screenshot
  `alpha-free-template.jpg` cross-checked).
- **Visual design:** architecture/agency landing, white/light-grey with a
  **coral** brand (`#ff926b`, hover `#ffa585`), near-black `#000` accents,
  Montserrat type, pill-shaped buttons, a photo hero with overlapping quote
  and a black-bordered "Get Quote" box, dark `#191919` footer.
- **Structure (1:1, section order):**
  1. Navbar: logo "Archon" + Home, Dropdown (3 items), Inner Page, Contact
     us, black pill CTA "Get a quote" (replaces "Visit Colorlib").
  2. Hero: full-width photo (`bg_1.jpg`), overlapping blockquote
     ("Awesome free html template by Colorlib." + author Adam Aderson with
     photo), bordered `cta-box` (h2 "Get Quote", blurb, black "Get a quote"
     button), share row ("Share me please!" + Facebook/Twitter circles).
  3. Mission (`section-grey`, `#f5f5f5`): block 1 = image right, subtitle
     "Our Mission" + title + two paragraphs + coral "Our Mission" button;
     block 2 = image left, text right + counters row (30,210 Share /
     9,102 Likes / 40,244 Love with Share2/ThumbsUp/Heart icons).
  4. Services: intro (subtitle "Our Services", title, paragraphs, "Contact
     Us" button) + 2×2 cards (Square, Technology, Brilliant Ideas,
     Blueprint — flaticon glyphs → lucide Square, Cpu, Lightbulb,
     DraftingCompass).
  5. News: grey band (`#f5f5f5`, 70px top / 150px bottom padding, cards
     overlap up with `-120px`) — subtitle "Ideas & Publications", title
     "Keep up to date", 4 entries (date April 28, 2020 + title + blurb +
     "Read more" + arrow), centered "Our Blog Posts" button.
  6. Testimonials (`bg-gray`): subtitle "What They Say", title
     "Testimonials", owl carousel → Prev/Next carousel of 3 (Adam Aderson,
     Lukas Devlin, Kayla Bryant; 70px round photo, name 18px, quote).
  7. Footer (`#191919`, 70px padding): About Us (text + coral "Learn
     more"), Navigation (2 columns: Overview/About Us/Find Buyers/Find
     Us/Webinars/Privacy Policy + Overview/About Us/Services/Portfolio/
     Gallery/Contact Us), We are on social (5 circles: Facebook, Twitter,
     LinkedIn, Google, YouTube), Subscribe (email input + arrow submit),
     Recent Posts (4 × date May 3, 2020 + title), copyright row.
- **Design tokens (`style.css`):** coral `#ff926b`; `#000` headings/hero
  border/CTA; greys `#f5f5f5`, `#f7f7f7`, `#f8f9fa`, `#878787`, `#b3b3b3`,
  `#dedede`; footer `#191919`; Montserrat; buttons `border-radius: 30px`,
  `padding: 10px 30px`, `border: 2px solid transparent`, hover → transparent
  bg + coral border + coral text.
- **Recreation name:** **Archon** (new original name, evokes classical
  architecture; distinct from ColorLib "Alpha" and every existing app).
  App folder `apps/archon`, package `@free-react-templates/archon`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/archon-<n>/<w>/<h>`); lucide-react icons + inline
  SVG brand icons; Montserrat via Google Fonts `<link>`; subscribe form
  prevents default with client-side validation (no backend); coral primary
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename spec folder `template-alpha` → `template-archon`; rewrite
      `openspec/specs/template-archon/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/archon` (copy halcyon pattern; rename package to
      `@free-react-templates/archon`; keep `injectUiSource()` in
      vite.config.ts).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh archon` + `npm run
    spec:validate`.
- [ ] Push `feat/template-archon`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage +
      `npm run readme:status` (bookkeeping on main).
