# Atrium (ColorLib Ararat) — Tasks & Design Notes

> Prep artifacts (pre-correction, name==slug) renamed on the fly by the
> implementer: `template-ararat` → `template-atrium`, Ararat → **Atrium**
> (new original name; the ColorLib source keeps its name in TEMPLATES.md).

## Design notes (replication findings)

- **Original:** ColorLib "Ararat" — free architecture HTML template
  (source: https://colorlib.com/wp/template/ararat/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ararat/
  (HTTP 200, full rendered DOM + `css/style.css` (55KB) extracted).
  Screenshot (`ararat-free-template.jpg`) inspected in browser too.
- **Visual design:** architecture/interior design agency landing. White
  header with serif wordmark + "ARCHITECTURE" tagline, centered uppercase
  nav, ghost buttons ("GET IN TOUCH", "SEE OUR PROJECTS" over a
  skyscraper photo hero), white sections, orange `#ff5e13` accents.
- **Structure (1:1, section order):**
  1. Header: logo "Atrium" + Architecture; nav Home, About, Services,
     Projects, Blog, Contact; GET IN TOUCH ghost button.
  2. Hero: photo bg, "We Design your space" (uppercase, wide tracking),
     blurb, SEE OUR PROJECTS ghost button.
  3. About: image + centered "25 / Years of Experience" white badge;
     kicker "About Us", h3 "Architectural plan design and build",
     90×2px seperator, blurb, 2 bullet items (green dots), ABOUT US
     button.
  4. Services: kicker "About Us", h3 "Make your Dream with US", 3 cards
     (Interior, Exterior, Bridge): image thumb + title + blurb.
  5. Projects: kicker "Project view", h3 "Our Latest Projects", 4
     alternating rows: image | location kicker + name + blurb +
     View More: Abahoni Building (Dubai, UAE), MR Kholifa Tower (Dhaka,
     Bangladesh), Galoni Plan & Design (Dubai, UAE), Hiclick Mirror
     Design (Dhaka, Bangladesh).
  6. Testimonials: photo bg + overlay, white quote, avatar, "-Mithila /
     Designer at Colorlib".
  7. Message: kicker "Contact Us", h3 "Send your message", image + form
     (Your Email, Subject, Messege, SEND US).
  8. Footer (dark): CTA "Do you have any project or Query?" + blurb +
     CONTACT US ghost button; logo + social circles; Navigation /
     Services link columns; copyright line.
- **Design tokens extracted from `style.css`:**
  - Primary accent **orange `#ff5e13`**; dark ink `#131313`; light tints
    `#f9f9ff`, `#f0e9ff`; grays `#808080`, `#9e9e9e`, `#a3a3a3`.
  - Fonts: **"Playfair Display"** (serif wordmark/body) + **"Roboto"**
    (headings/nav/buttons) via Google Fonts `<link>`.
  - `.boxed-btn`: white bg, 1px `#131313` border, uppercase, letter-
    spacing 3px, padding 18px 44px, hover black fill; `.boxed-btn2` over
    photos: transparent, white border, white text.
  - Kickers 14px uppercase ls 3px; h3 46px; `.seperator` 90×2px
    `#131313`; about bullets green `#02c856` 15px dots.
- **Recreation approach:** picsum.photos seeded placeholders
  (`picsum.photos/seed/atrium-<n>/<w>/<h>`); lucide-react + inline SVG
  brand icons; forms prevent default + success message; dark-mode toggle
  (repo convention); typo fixes: "Architechtural" → "Architectural",
  "Do youn" → "Do you", "Messege" → "Message".
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Write `openspec/specs/template-atrium/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/atrium` (copy halcyon — section-rich landing base;
      rename package to `@free-react-templates/atrium`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh atrium` + `npm run spec:validate`.
- [ ] Push `feat/template-atrium`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` (BOTH Ararat lines) + Surge
      URL + homepage (bookkeeping on main, state D).
