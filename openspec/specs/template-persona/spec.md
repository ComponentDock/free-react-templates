# Template: Persona (Personal Branding Website Template)

## Purpose

Persona is a single-page personal branding website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Personal Wordpress Themes" category design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Personal Wordpress Themes" (category item).
  TEMPLATES.md has ONE copy of this item (line 279 — mark it `[x]` when
  done).
- **Source link behavior:** `https://colorlib.com/wp/template/personal-wordpress-themes/`
  does NOT resolve to a demo — it 301-redirects to the ColorLib roundup
  article `https://colorlib.com/wp/personal-branding-wordpress-theme/`
  ("19 Best Personal Branding WordPress Themes For Personal Websites 2026",
  author Aigars Silkalns, category "Theme Collections", 0 comments).
- **Preview URL:** `https://preview.colorlib.com/theme/personal-wordpress-themes/`
  returns HTTP 404 "Not Found" and the slug is absent from
  `preview.colorlib.com/assets/js/products.js` (preview map). This item is a
  category page, not a demo-hosting template — per the replication fallback
  rule, the **screenshot is the primary visual reference** and the live
  roundup page provides the page structure + tokens.
- **Screenshot:** `personal-website-templates.jpg` (1200×938, served as AVIF
  by ColorLib; verified live in a browser via vision after ffmpeg
  conversion). It shows the hero/landing section of the "Jackie Brooklyn"
  personal WordPress theme demo (United Themes, themeforest.unitedthemes.com):
  - transparent fixed navbar: "Jackie Brooklyn" branding left; uppercase
    menu right separated by bullet dots —
    `HOME • SERVICES • PROJECTS • CLIENTS • EXPERIENCE • CONTACT`;
  - full-bleed, softly blurred bokeh background photo (woman in a grey knit
    beanie + black-rimmed glasses typing on a white laptop at a cafe table;
    warm ambient light, slightly desaturated);
  - centered 3-line bold white sans-serif headline:
    "Personal Website / WordPress / Themes";
  - below the headline a small white rounded pill CTA with dark text
    "Hello...";
  - a fixed vertical dark (near-black/navy) toolbar on the left edge with
    white icons top→bottom: price tag + "$39", home, share, download, plus.
  - Palette: white text over a muted cool-toned photo, dark near-black
    sidebar, white pill CTA.
- **Live page structure (from the roundup article DOM, HTTP 200, 166 KB):**
  header with logo + main menu → breadcrumb → article: h1 title (31px/600),
  meta line (author / "Theme Collections" / "0 Comments") → intro paragraph
  → h2 "Best Personal Branding WordPress Themes" → **numbered theme entries
  1–19** (Brooklyn, Bridge, RyanCV, Kallyas, Avada, Total, Porto, Coaching
  WP, XStore, Volos, Oxer, Archi, Stockholm, Leverage, Dolife, Liga, Massive
  Dynamic, The Voux, H-Code), each = number + name + description paragraph +
  accent "Download this template" button → "Leave a Reply" comment form →
  footer. The 19 entries are premium marketplace themes; the recreation does
  NOT ship them — the list is repurposed as the Projects/Showcase section
  content (see Recreation decisions).
- **Visual design:** modern personal-branding one-pager — transparent
  uppercase dot-separated nav over a big blurred photo hero, 3-line stacked
  headline, white pill CTA, dark floating side action bar, then light
  sections (services / numbered showcase / clients / experience / contact)
  and a dark footer. Clean sans-serif, generous whitespace, single blue
  accent for CTAs and links.

## Design tokens (from the live page CSS + screenshot)

| Token                  | Value                                                                                                        | Where                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Accent blue            | `#1a73e8` (page CSS var `--wpex-accent` / `--wpex-accent-alt`)                                               | links, "Download this template" buttons, focus rings, hover states                               |
| Dark navy / near-black | `#1c1e26` (approximated from screenshot's left action bar; adjust against Brooklyn demo)                     | fixed left action bar, footer background, hero text is white over photo                          |
| Ink                    | `#111827`                                                                                                    | headings, body text on light sections                                                            |
| Text greys             | `#374151` (body), `#4b5563` (secondary/meta)                                                                 | paragraphs, card blurbs, meta                                                                    |
| Light backgrounds      | `#f8fafc`, `#f0f4ff`                                                                                         | alternating section backgrounds (services, experience)                                           |
| White                  | `#ffffff`                                                                                                    | hero text, pill CTA bg, page bg                                                                  |
| Font                   | system sans-serif stack (live page body 16px; no Google Font import found)                                   | all text; hero headline bold ~64px desktop / ~40px mobile; nav 12px uppercase letter-spacing 1px |
| Hero CTA pill          | white bg, dark text, **border-radius 999px**, padding ~14px 36px, hover → accent bg                          | "Hello..." button under the headline                                                             |
| Accent button          | solid `#1a73e8`, white text, radius ~4px, 14px medium                                                        | "Download this template" CTAs in showcase cards                                                  |
| Nav                    | transparent over hero (white text), fixed top; after scroll → translucent dark blur bg                       | uppercase links separated by "•" bullet dots                                                     |
| Section rhythm         | 96–120px vertical padding; max-width container ~1200px                                                       | all light sections                                                                               |
| Floating action bar    | fixed left, ~56px wide, dark navy, vertical stack of white icon buttons (price, home, share, download, plus) | decorative; aria-labels + tooltips; hidden on small screens                                      |

## Recreation decisions

- The deliverable is a **single-page personal branding website template** in
  the style of the screenshot (the Jackie Brooklyn demo): this is what the
  category image depicts and what "Personal Wordpress Themes" means as a
  template type. The roundup article is a blog page, not a theme; its
  numbered-entry pattern and 19-theme content are repurposed as the
  Projects/Showcase section (6 cards, numbered 01–06, each = number + name +
  one-line description + accent CTA) and its copy informs the services list
  (photographer / freelancer / creative / agency niches from the article's
  Brooklyn description).
- Brand name "Persona" replaces the demo's "Jackie Brooklyn"; the source
  word "Brooklyn" never appears as the brand.
- Headline keeps the 3-line structure of the screenshot:
  "Personal Website / WordPress / Themes" (line 2 could read "Branding" —
  implementer keeps 3 stacked lines, bold white).
- Photos → seeded picsum placeholders (`picsum.photos/seed/persona-<n>/<w>/<h>`),
  hero photo additionally blurred (`blur-sm`/scale-110 trick or a blurred
  overlay) to match the bokeh look; no assets copied.
- Icons → lucide-react (Home, Share2, Download, Plus, Tag, Menu, X,
  ArrowRight, Mail, Phone, MapPin); brand icons (socials) → inline SVG
  BrandIcon from packages/ui (lucide removed brand icons).
- The floating left action bar is decorative but interactive (buttons with
  aria-labels + tooltips); the "$39" price tag icon is omitted (nothing to
  sell) — implementer may keep a Tag icon.
- Comment form from the article ("Leave a Reply") is NOT recreated — it is
  blog furniture, not theme furniture; the Contact section (name/email/
  message form + info) covers interactivity.

Persona lives in `apps/persona` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Fixed transparent header

The system SHALL render a fixed header over the hero: brand name on the left
and an uppercase dot-separated menu on the right, which gains a translucent
dark background after scrolling.

#### Scenario: Header content

- **GIVEN** the Persona page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the wordmark "Persona" on the left in white
- **AND** it SHALL show the uppercase links Home, Services, Projects,
  Clients, Experience, and Contact on the right, separated by "•" bullet
  dots
- **AND** each link SHALL scroll to its section

#### Scenario: Scroll behavior

- **GIVEN** the page is scrolled past the hero
- **WHEN** the header sticks to the top
- **THEN** it SHALL get a translucent dark background (blur) and keep white
  text

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the user SHALL be able to close it

### Requirement: Blurred hero with stacked headline

The system SHALL render a full-bleed hero with a blurred background photo, a
centered three-line bold white headline, and a white pill CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show a full-bleed blurred background photo
- **AND** it SHALL show a centered three-line bold white headline
  ("Personal Website" / "WordPress" / "Themes", 3 stacked lines)
- **AND** it SHALL show a white pill-shaped CTA with dark text
  ("Say hello" — paraphrased from the original "Hello...")

#### Scenario: Hero CTA

- **GIVEN** the hero CTA is displayed
- **WHEN** the user clicks it
- **THEN** the page SHALL scroll to the contact section
- **AND** hovering the pill SHALL fill it with the accent color `#1a73e8`
  with white text

### Requirement: Floating action bar

The system SHALL render a fixed vertical dark action bar on the left edge
with icon buttons.

#### Scenario: Action bar content

- **GIVEN** the page is rendered on a desktop screen
- **WHEN** the left edge is displayed
- **THEN** it SHALL show a vertical dark-navy bar with white icon buttons
  (price tag, home, share, download, plus)
- **AND** each button SHALL have an accessible name (aria-label/tooltip)
- **AND** the bar SHALL be hidden on small screens

### Requirement: Services section

The system SHALL render a services section with three cards describing the
personal-branding offer.

#### Scenario: Services cards

- **GIVEN** the services section is displayed
- **WHEN** the cards are rendered
- **THEN** they SHALL appear in a three-column grid
- **AND** each card SHALL show an icon, a title (e.g. Brand Identity,
  Web Design, Personal Branding), and a short description
- **AND** the section SHALL carry the heading "Services"

### Requirement: Projects showcase

The system SHALL render a numbered showcase grid of six project cards, each
with a number, name, description, and an accent CTA button.

#### Scenario: Showcase grid

- **GIVEN** the projects section is displayed
- **WHEN** the cards are rendered
- **THEN** they SHALL appear in a two-column grid numbered 01–06
- **AND** each card SHALL show its number, a project name (e.g. "Branding
  for Creatives", "Freelancer Portfolio", "Photography Site", "Agency
  Website", "Consultant Resume", "Artist Showcase"), a one-line
  description, and a "Download template" accent button
- **AND** the section SHALL carry the heading "Projects"

#### Scenario: Card CTA hover

- **GIVEN** a showcase card is displayed
- **WHEN** the user hovers its CTA button
- **THEN** the button SHALL darken or invert to a darker accent shade

### Requirement: Clients strip

The system SHALL render a client logo strip.

#### Scenario: Logo strip

- **GIVEN** the clients section is displayed
- **WHEN** the logos are rendered
- **THEN** they SHALL appear as a row of grayscale placeholder logos
  (six to eight, seeded images or inline marks)
- **AND** the section SHALL carry the heading "Clients"

### Requirement: Experience timeline

The system SHALL render a vertical experience timeline.

#### Scenario: Timeline entries

- **GIVEN** the experience section is displayed
- **WHEN** the timeline is rendered
- **THEN** it SHALL show three to four entries, each with a period (e.g.
  "2022 — Present"), a role, and a company/description
- **AND** entries SHALL be ordered newest first with a connecting line

### Requirement: Contact section

The system SHALL render a contact section with a validated form and contact
details.

#### Scenario: Contact form

- **GIVEN** the contact section is displayed
- **WHEN** the user submits the form with a valid name, email, and message
- **THEN** the form SHALL show a success state
- **AND** submitting with an invalid email or empty fields SHALL show
  validation errors and block submission

#### Scenario: Contact details

- **GIVEN** the contact section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Contact" and contact details (email,
  phone, location) next to the form

### Requirement: Footer

The system SHALL render a dark footer with a copyright line and a Colorlib
credit link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Persona" wordmark, the nav links, and a
  copyright line with a paraphrased Colorlib credit
- **AND** the footer background SHALL be the dark navy `#1c1e26`

## Verification checklist

- [ ] `bash scripts/verify-app.sh persona` passes (typecheck + lint +
      100% coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Header is fixed/transparent over the hero, gains blurred dark bg on
      scroll; mobile menu opens/closes with all six links
- [ ] Hero shows blurred full-bleed photo, 3-line bold white headline, white
      pill CTA that scrolls to contact; pill hover → `#1a73e8`
- [ ] Floating left action bar renders on desktop only, buttons have
      accessible names
- [ ] Services 3-col grid, Projects numbered 01–06 grid with accent CTAs,
      Clients logo strip, Experience timeline, Contact validated form with
      success state
- [ ] Footer dark navy `#1c1e26` with credit line
- [ ] Fidelity: section order matches the Brooklyn nav (Home → Services →
      Projects → Clients → Experience → Contact), system sans-serif font,
      `#1a73e8` accent, white pill CTA radius 999px, dot-separated uppercase
      nav, picsum placeholders seeded `persona-<n>`, no copied assets
- [ ] TEMPLATES.md: mark line 279 (Personal Wordpress Themes) `[x]` and
      append the live surge URL
- [ ] `npm install` at root before committing (lockfile registers
      `apps/persona`); `grep -c "free-react-templates/persona"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-persona.surge.sh"`
      in `apps/persona/package.json`
- [ ] PR title: `feat: Persona — personal branding website template
    (ColorLib Personal Wordpress Themes)`; body includes the source URL,
      the redirect note (roundup article), the 404 preview URL, tokens, and
      the single-copy TEMPLATES.md note
