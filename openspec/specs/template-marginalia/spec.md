# Template: Marginalia (Blog Template)

## Purpose

Marginalia is a single-page personal blog template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Blog Wordpress Themes" entry in TEMPLATES.md (Blog category),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a dark-header personal/travel blog design: a charcoal
nav bar (search icon left, centered thin logo, hamburger right), a
full-bleed dark photo hero with a centered headline whose accent word is
set in italic serif, and a white alternating horizontal post-card feed
(image ↔ text), plus a floating vertical share rail on the right edge.
Marginalia recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Blog Wordpress Themes" — a blog-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/blog-wordpress-themes/; the
  article is "37 Best WordPress Blog Themes (Free & Premium) 2026").
  All demo links on that page are third-party (ThemeForest affiliate)
  links; there is no ColorLib-hosted free template behind this slug.
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/blog-wordpress-themes/`
  returned HTTP 404, and the slug is absent from
  `preview.colorlib.com/assets/js/products.js`. Per `docs/replication.md`,
  the design is reconstructed from the TEMPLATES.md screenshot
  (`blog-templates.jpg`, 1200×904) as the sole visual reference.
- **NOTE — the screenshot depicts a third-party theme:** the capture
  shows a personal blog design whose centered logo reads "Jevelin"
  (a Shufflehound blog theme featured in the roundup). Per the fidelity
  rules we do NOT copy that theme's assets or name — we recreate the
  VISUAL DESIGN shown in the screenshot (dark header, dark photo hero
  with serif-italic accent, alternating horizontal post cards, floating
  share rail) under the new name "Marginalia".
- **Visual design (from screenshot):**
  - Header: full-width deep-charcoal bar — search icon on the LEFT,
    centered thin white sans-serif logo wordmark, hamburger menu icon on
    the RIGHT (asymmetric, logo-centered layout).
  - Hero: full-bleed dark landscape photograph (rocky cave mouth looking
    out onto mountains) with a dark overlay for readability. Centered
    white headline "My personal journey for inspiration" — the word
    "inspiration" set in an ITALIC SERIF face as the editorial accent.
    No hero CTA button in the reference.
  - Blog feed (pure white background): alternating horizontal post
    cards — card A has the photo LEFT / text RIGHT, card B is mirrored
    (text left / photo right). Each card: small uppercase light-grey
    meta row (author "by shuttlesound" · date "November 23, 2016"),
    bold headline (e.g. "A quick midday swim for inspiration",
    "Some of my favorite moments this year"), short excerpt, uppercase
    tag list ("CLEAR, NATURE"), and a speech-bubble comment icon with a
    count (9).
  - Right edge: floating vertical icon rail (social/share icons), fixed
    on the viewport.
  - Footer: not visible in the capture (cut off) — reconstructed per the
    repo standard + blog conventions (site name, nav links, socials,
    copyright).
  - Aesthetic: monochrome, high-contrast, editorial — near-black + white
    only, no bright accent color; photography-driven.
- **Structure (1:1 as visible; remainder reconstructed):**
  1. Navbar: dark bar, search icon left, centered logo "Marginalia",
     hamburger right; hamburger opens a mobile menu overlay (reference
     only shows the icon; links reconstructed: Home / About / Blog /
     Contact); repo-standard dark-mode toggle.
  2. Search overlay: clicking the search icon reveals a full-width
     search bar (dark/light inverse strip) with an input and a close
     button (reconstructed affordance — the reference shows only the
     icon).
  3. Hero: full-viewport (~90vh) background photo with dark overlay,
     centered h1 — sans headline with the accent word in italic serif.
  4. Blog feed: ≥4 alternating horizontal cards (photo + meta + title +
     excerpt + tags + comments count), generous vertical rhythm,
     white background.
  5. Share rail: fixed right-edge vertical stack of social icon links
     (e.g. Facebook, X/Twitter, Instagram, Pinterest) with aria-labels;
     optional back-to-top icon at the bottom.
  6. Footer: site name, nav links, social icons, copyright bar.
- **Design tokens (screenshot-derived; no stylesheet available):**
  - Colors (approximate from the screenshot, monochrome scheme):
    near-black **`#141414`** (header bar, hero overlay), pure white
    **`#ffffff`** (content background), near-black text **`#222222`**,
    light-grey meta **`#9b9b9b`** (uppercase 11–12px). No bright brand
    accent — the "accent" is the italic serif word. Put the neutrals in
    `@theme`.
  - Fonts: logo/headlines — thin elegant sans-serif (e.g. **Montserrat
    200/300** or Poppins 300); accent word — italic serif
    (**Playfair Display italic**, "Playfair-Display-like"); body/meta —
    clean sans (Poppins/Montserrat). All via Google Fonts `<link>`.
  - Cards: white bg, generous padding, image ~50% width, alternating
    direction; tags uppercase small text; comment count with
    speech-bubble icon.
  - Buttons: none in the reference hero; icon controls (search, menu)
    only. Any CTA (e.g. "Read more") is a documented addition.
  - Section rhythm: hero ~90vh; feed `py-16`/`py-20` with `gap-16`-ish
    card spacing; footer dark.
- **Recreation decisions:** same kind of personal-blog landing — dark
  navbar with centered logo + search trigger + hamburger; photo hero
  with italic-serif accent headline; alternating post-card feed with
  seeded picsum photos (`picsum.photos/seed/marginalia-<n>/<w>/<h>`:
  hero 1600×900, cards 800×600); floating share rail; lucide-react
  icons (Search, Menu, X, MessageCircle, ArrowUp; social icons as inline
  SVG — lucide-react removed brand icons); Montserrat + Playfair
  Display via Google Fonts `<link>`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; no assets copied.

Marginalia lives in `apps/marginalia` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark top navigation bar with a search icon on
the left, the site name centered, and a menu trigger on the right.

#### Scenario: Navbar content

- **GIVEN** the Marginalia page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show a search trigger icon on the left
- **AND** the site name "Marginalia" SHALL be centered in the navbar
- **AND** a hamburger menu trigger SHALL be shown on the right

#### Scenario: Search overlay

- **GIVEN** the navbar is rendered
- **WHEN** the user clicks the search trigger icon
- **THEN** a full-width search bar SHALL appear with a text input and a
  placeholder (e.g. "Search...")
- **AND** clicking the close icon SHALL hide it again

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user clicks the hamburger trigger
- **THEN** a menu overlay SHALL open listing the navigation links
  (Home, About, Blog, Contact)
- **AND** clicking the close control SHALL close it

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root
  element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-height hero with a background photo, a
dark overlay, and a centered headline with a serif-italic accent word.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 heading (e.g. "My personal journey
  for inspiration") centered over the background image
- **AND** the accent word of the heading (e.g. "inspiration") SHALL be
  styled in an italic serif font
- **AND** the hero SHALL use a full-viewport background image with an
  overlay so the white text stays readable
- **AND** the hero SHALL NOT render a call-to-action button (matches the
  reference screenshot)

### Requirement: Blog feed

The system SHALL render a blog feed of alternating horizontal post
cards, each with a photo, meta row, title, excerpt, tags and a comments
count.

#### Scenario: Post card content

- **GIVEN** the blog feed is rendered
- **WHEN** a post card is displayed
- **THEN** it SHALL show an uppercase meta row with an author and a date
- **AND** it SHALL show a bold post title and a short excerpt
- **AND** it SHALL show an uppercase tag list (e.g. "CLEAR, NATURE")
- **AND** it SHALL show a speech-bubble icon with a comments count

#### Scenario: Alternating layout

- **GIVEN** the blog feed is rendered
- **WHEN** more than one post card is displayed
- **THEN** the first card SHALL place its photo on one side and the
  text on the other
- **AND** the next card SHALL mirror that layout (photo on the opposite
  side)

### Requirement: Share rail

The system SHALL render a fixed vertical rail of social share icons on
the right edge of the viewport.

#### Scenario: Share rail content

- **GIVEN** the page is rendered
- **WHEN** the share rail is displayed
- **THEN** it SHALL show a vertical stack of social icon links (e.g.
  Facebook, X/Twitter, Instagram, Pinterest)
- **AND** each icon-only link SHALL have an accessible name
  (aria-label)
- **AND** the rail SHALL stay fixed while the page scrolls

### Requirement: Footer

The system SHALL render a footer with the site name, navigation links,
social icons and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Marginalia"
- **AND** it SHALL show navigation links (Home, About, Blog, Contact)
- **AND** it SHALL show social icon links
- **AND** it SHALL show a copyright line in the bottom bar

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Marginalia app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Marginalia — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-marginalia`.
- [ ] App renders all sections 1:1 in the order above (navbar → search
      overlay → hero → blog feed → share rail → footer).
- [ ] Design tokens match the reference: near-black `#141414` header/
      hero overlay, white content bg, `#222222` text, `#9b9b9b` meta;
      thin sans logo/headlines, italic serif accent word (Playfair
      Display italic), uppercase small meta; alternating card layout.
- [ ] Fonts (Montserrat + Playfair Display or documented equivalent)
      loaded via Google Fonts `<link>`; no font or image assets copied
      from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/marginalia-<n>/<w>/<h>`).
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/marginalia` (lines/functions/
      branches/statements).
- [ ] PR description includes: source template (ColorLib "Blog
      Wordpress Themes" roundup entry), preview URL (unreachable — 404;
      screenshot-only reference, note that the screenshot depicts the
      featured "Jevelin" theme whose visual design is recreated under
      the new name), design tokens used, what differs (name, placeholder
      images, reconstructed navbar links/footer).
