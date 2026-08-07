# Lustre (ColorLib Vogue) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lustre` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Vogue" — hair salon single-page template
  (source: https://colorlib.com/wp/template/vogue/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/vogue/
  (HTTP 200, full rendered DOM + `styles/main_styles.css` (28.5 KB)
  extracted). Screenshot `vogue-free-template.jpg` confirms: dark hero with
  a large hair photo, gold "hair" highlight + gold CTA, services section on
  a light salon photo, amber service cards.
- **Structure (1:1, section order):**
  1. Header: wordmark "Vogue" + gold "hair" tagline, center nav (Home /
     About Us / Services / Articles / Contact), gold "Book an Appointment"
     button → slides open right panel with appointment form (Full Name,
     Email Address, Phone Number, Desired Date, Select Service, submit).
  2. Mobile menu overlay (hamburger).
  3. Hero: full-screen slider (3 identical slides) — "Our best offers"
     kicker, h1 "The hair that you dream" (gold "hair"), muted paragraph,
     gold "View our offers" link, centered "Scroll Down" mouse indicator,
     slide progress "01." + bar.
  4. Services (id="services"): parallax bg image, dark "Our Services" h1 +
     subtext, carousel of 6 amber cards (icon + title + text): Hair
     Dressing, Ombre Hair, Hair Coloring, Treatments, Cutting & Trimming,
     Keratin Straightening. Hover: dark bg, gold title, white text.
  5. Testimonials: parallax bg image, white "Testimonials" h1 + subtext,
     carousel of 3 white cards — circular author photo overlapping top
     edge, gold title, quote, gold author "Jessica Smith, Client" — then
     centered "load more" button.
  6. Footer: parallax bg image, white "Get in touch" h1 + subtext, two
     cols: Contact Info (address / phone / email rows + 6 circular gold
     social buttons: pinterest, facebook, twitter, dribbble, behance,
     linkedin) + "Leave a comment" form (Name, E-mail, Subject, Message,
     gold "send message"); bottom bar with copyright.
- **Design tokens extracted from `main_styles.css`:**
  - Gold **`#ffae00`** primary (appointment/form buttons, links, author
    lines; service cards `rgba(255,174,0,0.86)`); hover gold **`#ffbb00`**
    (nav active underline bar + 10px diamond, logo span, hover states).
  - Dark `#1a1a1a` (section h1 on light, testimonial text), `#2a2a2a`
    (button text on gold), `#454545` (copyright); input underlines
    `#767271` (footer) / `#737373` (app form); muted `rgba(255,255,255,0.49)`.
  - Font: **"Montserrat"** everywhere — hero h1 110px/700 (`line-height
0.91`), section h1 110px/700, logo 48px (span 700 gold), tagline 9px
    uppercase `letter-spacing 0.75em`, nav 18px, body 15–18px.
  - Buttons: sharp corners, gold fill, uppercase bold `#2a2a2a` text
    (contact 203×62, app form 100×46, "load more" white 16px uppercase).
  - Cards: service 239px tall with icon overlapping left edge; testimonial
    396px white with 53px circular author image at `top: -20px`.
  - Header: fixed, transparent → `rgba(0,0,0,0.85)` on scroll (logo
    48px→36px). Slide kicker 14px white, subtitle 12px muted.
- **Recreation name:** Lustre (NEW — distinct from ColorLib "Vogue" and
  from all existing apps/spec names). App folder `apps/lustre`, package
  `@free-react-templates/lustre`.
- **Recreation approach:** hero slider + services/testimonials carousels as
  accessible scrollable groups; `https://picsum.photos/seed/lustre-<n>/<w>/<h>`
  placeholders; lucide icons (scissors, sparkles, palette, etc.); Montserrat
  via Google Fonts `<link>`; gold primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-lustre/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/lustre` (copy the simplest app; rename package to
      `@free-react-templates/lustre`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate (local per-app gate in FAST_MODE).
- [ ] Push `feat/template-lustre`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
