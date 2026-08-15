# Template: Mintly (Dentist Business Template)

## Purpose

Mintly is a single-page dentist-clinic website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Wordpress Dentist Themes" entry in TEMPLATES.md (Dentist category),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference entry is a ROUNDUP/listicle page ("20 Best WordPress Dentist
Themes 2026"), not a single free template — all 20 picks are third-party
themes (Jevelin, Webify, Kalium, Divi, Medicare, DentiCare, HEALTHFLEX, Ekko,
Sway, Bridge, Dentist WP, MedicalPress, RT-Theme 20, iDent, SmilePure, Mediz,
ApexClinic, AllSmiles, Dr.Patterson, SmileCare). Its TEMPLATES.md screenshot
(`dentist-wordpress-themes-1.jpg`, 1200×890, AVIF) shows the demo of Jevelin
(the roundup's #1 pick): a white top NAVBAR (dark navy "JEVELIN" wordmark
with a cross/plus icon, links Home / About / Departments / FAQ / Contacts,
plus user and search icons), a SPLIT HERO (left: large bold charcoal headline
"Dentist WordPress themes.", an uppercase sub-line "CREATE YOUR MEDICAL
WEBSITE USING JEVELIN.", and three circular mint-teal icons — heart, house,
leaf; right: a photo of a smiling female dentist in a white lab coat against
a blurred clinic background), and below it a band of THREE MINT CARDS
(Emergency Service with the phone number 1-800-600-3800 and a white pill
"See More" button; Appointment with a calendar icon and a white pill "Book
Now" button; Opening Hours with a clock icon and a white pill "Contact Us"
button). Mintly recreates that visual design section-for-section with
matching colors, typography, and content types (no ColorLib assets copied),
and reconstructs the below-the-fold dental-clinic sections per the category
conventions.

Mintly appears FOUR times in TEMPLATES.md (all rows are the same source
slug): line 536, line 1516, line 1887, and line 2259 — implement ONE app and
mark ALL FOUR rows `[x]` at bookkeeping.

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress Dentist Themes" — a dentist-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/wordpress-dentist-themes/; the
  article is "20 Best WordPress Dentist Themes 2026"; every demo link on the
  page is a third-party link — there is no ColorLib-hosted free template
  behind this slug, and `preview.colorlib.com` appears nowhere in the page).
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/wordpress-dentist-themes/`
  returned HTTP 404, and the slug is absent from
  `preview.colorlib.com/assets/js/products.js`. Per `docs/replication.md`,
  the design is reconstructed from the TEMPLATES.md screenshot
  (`dentist-wordpress-themes-1.jpg`, 1200×890, AVIF — converted to PNG,
  viewed in the browser, and pixel-sampled for exact tokens) as the sole
  visual reference.
- **NOTE — the capture is a promo frame of the roundup's #1 pick, not a
  full page:** the screenshot shows the top ~72% of the Jevelin demo (hero
  - the three info cards below it). Per the fidelity rules we do NOT copy
    the "JEVELIN" brand name or any assets — we recreate the VISUAL DESIGN
    shown in the capture (white navbar + split dentist hero + mint info-card
    band) under the new name "Mintly". The below-the-fold sections are NOT
    visible in the capture and are reconstructed per the dental-clinic
    landing category conventions (departments/services, about, FAQ, contact,
    footer), reusing the same palette.
- **Visual design (from screenshot):**
  - Navbar: white bar across the top; left a dark navy-blue wordmark with a
    cross/plus mark (capture brand "JEVELIN" → replaced by "Mintly"); right
    the links Home, About, Departments, FAQ, Contacts (dark text, compact
    sans); a user icon and a search (magnifier) icon sit right of the links.
    There is also a floating right-edge icon rail in the capture (demo
    chrome — do NOT reproduce it).
  - Hero: split layout on a white background. Left ~55%: the headline
    "Dentist WordPress themes." — large, bold, dark charcoal sans; below it
    a smaller UPPERCASE sub-line (letter-spaced, lighter charcoal). Under
    the text, three circular mint-teal icons in a row (heart, house,
    leaf/plant). Right ~45%: a high-quality photo of a smiling female
    dentist (blonde, white lab coat) holding a gold coin, blurred clinic
    interior behind her — the white hero background blends into the photo
    (no hard card edge).
  - Info-card band (directly below the hero): three rectangular cards on a
    light mint/teal background spanning the width. Left card: large phone
    number 1-800-600-3800, heading "EMERGENCY SERVICE.", body lorem, white
    oval button "See More". Middle card: calendar icon on top, heading "DO
    YOU WANT TO MAKE AN APPOINTMENT.", body lorem, white oval button "Book
    Now". Right card: clock icon on top, heading "OPENING HOURS.", body
    lines "Monday – Friday" / "Saturday – Sunday", white oval button
    "Contact Us". The white oval (pill) buttons have fully rounded ends.
- **Design tokens (screenshot-sampled, no stylesheet exists):**
  - Brand/accent (mint-teal): `#3BE2AE` (pixel-sampled `(59,226,174)` —
    the circular hero icons; reuse for buttons, links, focus rings, icon
    accents on light sections; hover darkens to ≈ `#2BCA99`).
  - Card-band background: light mint `#B9F7F8` (sampled `(185,247,248)`;
    lighter tones `#D3FEFD`/`#D9FCFB` at card edges — implement as a flat
    `#B9F7F8` band with white cards or as a solid mint band).
  - Text: dark charcoal `#373737` (sampled `(55,55,55)` — headline and
    body); deep near-black `#151515` for the darkest glyphs.
  - Surfaces: white `#FFFFFF` (navbar, hero, card faces); soft blue-grey
    `#F0F5F9` (sampled in the photo area — use for reconstructed alternating
    light bands).
  - Headline: bold geometric sans (Montserrat-like) — load **Montserrat
    400/600/700** via Google Fonts `<link>`; uppercase sub-line weight
    500–600 with letter-spacing; body Open Sans/Roboto-like (Montserrat
    400 suffices).
  - Buttons: white pill (fully rounded, `rounded-full`) with dark charcoal
    or mint text on mint cards; on light reconstructed sections use
    `#3BE2AE` fill + white text, `rounded-full`, hover `#2BCA99`.
  - Radius: pill (full) for buttons; cards `rounded-lg` (~8px) for
    reconstructed sections; the three hero icons are circular (`rounded-full`
    with a mint `#3BE2AE` tint or outline).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/mintly-<n>/<w>/<h>`; the hero portrait uses a
  portrait-style seed — the exact subject of the reference is not
  reproduced, only the composition: smiling professional in a light
  uniform/coat); icons → lucide-react (heart, home, leaf, calendar, clock,
  phone, user, search, cross, plus, tooth-equivalent alternatives);
  Montserrat via Google Fonts `<link>`; no assets copied. Copy paraphrased
  but same content kinds (navbar links, headline + uppercase sub-line, icon
  trio, three info cards with phone/calendar/clock, departments, FAQ,
  contact info). The nav links in the capture (About, Departments, FAQ,
  Contacts) double as the reconstructed section anchors.

Mintly lives in `apps/mintly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a white top navigation bar with the brand wordmark,
the reference link set, and utility icons.

#### Scenario: Navbar content

- **GIVEN** the Mintly page is rendered
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL have a white background and a dark charcoal brand
  wordmark "Mintly" with a cross/plus icon on the left
- **AND** the navbar SHALL show the links Home, About, Departments, FAQ, and
  Contact (dark text, compact sans)
- **AND** the navbar SHALL show a user icon and a search icon on the right
- **AND** clicking a link SHALL scroll to the corresponding section

#### Scenario: Mobile menu

- **GIVEN** the Mintly page is rendered on a narrow viewport
- **WHEN** the hamburger toggle is displayed and activated
- **THEN** a menu SHALL open listing Home, About, Departments, FAQ, and
  Contact
- **AND** the toggle SHALL manage `aria-expanded` and have an `aria-label`
- **AND** clicking a menu link SHALL scroll to the section and close the menu

### Requirement: Hero

The system SHALL render the split dentist hero exactly as captured: white
background, left text block with an icon trio, right portrait photo.

#### Scenario: Hero content

- **GIVEN** the Mintly page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL have a white background split into a left text
  column (~55%) and a right image column (~45%)
- **AND** the left column SHALL show a large bold charcoal headline
  (paraphrase of "Dentist WordPress themes.", e.g. "Dental Care, Done
  Right.")
- **AND** the left column SHALL show a smaller UPPERCASE letter-spaced
  sub-line below the headline (paraphrase of "CREATE YOUR MEDICAL WEBSITE
  USING JEVELIN.", e.g. "MODERN CARE FOR YOUR WHOLE SMILE")
- **AND** the left column SHALL show three circular mint-teal icons in a row
  below the sub-line (heart, house, leaf from lucide-react)
- **AND** the right column SHALL show a portrait image of a smiling
  professional in a light uniform/coat, blending into the white hero
  background

### Requirement: Info cards

The system SHALL render the three-card mint band below the hero (Emergency
Service, Appointment, Opening Hours).

#### Scenario: Info card band

- **GIVEN** the Mintly page is rendered
- **WHEN** the info-card band is displayed
- **THEN** the band SHALL have the light mint `#B9F7F8` background spanning
  the full width
- **AND** the band SHALL show three cards in a row (1 column on mobile)
- **AND** the first card SHALL show the phone number 1-800-600-3800, the
  heading "EMERGENCY SERVICE.", a short body line, and a white pill button
  "See More"
- **AND** the second card SHALL show a calendar icon, the heading "DO YOU
  WANT TO MAKE AN APPOINTMENT.", a short body line, and a white pill button
  "Book Now"
- **AND** the third card SHALL show a clock icon, the heading "OPENING
  HOURS.", the hours "Monday – Friday" and "Saturday – Sunday", and a white
  pill button "Contact Us"
- **AND** each white pill button SHALL be fully rounded (`rounded-full`)
  with dark charcoal or mint text

### Requirement: Departments

The system SHALL render a departments/services grid (reconstructed below the
fold per dental-clinic conventions).

#### Scenario: Department cards

- **GIVEN** the Mintly page is rendered
- **WHEN** the departments section is displayed
- **THEN** the section SHALL show a heading and sub-line on a white or soft
  `#F0F5F9` background
- **AND** the section SHALL show six department cards in a 3-column grid
  (2 tablet / 1 mobile) using the shared `Card` component
- **AND** each card SHALL show a lucide icon in mint `#3BE2AE`, a title
  (e.g. General Dentistry, Orthodontics, Cosmetic Dentistry, Dental
  Surgery, Pediatric Dentistry, Emergency Care), and a short description

### Requirement: About

The system SHALL render an about section (reconstructed).

#### Scenario: About split

- **GIVEN** the Mintly page is rendered
- **WHEN** the about section is displayed
- **THEN** the section SHALL show a split layout: an image on one side and a
  heading, two short paragraphs, and a mint pill button on the other
- **AND** the section SHALL show a couple of quick stats (e.g. Years of
  Experience, Happy Patients) in mint accent

### Requirement: FAQ

The system SHALL render an FAQ accordion (reconstructed).

#### Scenario: FAQ accordion

- **GIVEN** the Mintly page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** the section SHALL show a heading and an accordion of at least
  four questions relevant to a dental clinic (e.g. appointment booking,
  insurance, emergency care, payment plans)
- **AND** each item SHALL expand/collapse on click with `aria-expanded`
  managed and only one item open at a time
- **AND** each item SHALL have an accessible button control

### Requirement: Contact

The system SHALL render a contact section (reconstructed).

#### Scenario: Contact content

- **GIVEN** the Mintly page is rendered
- **WHEN** the contact section is displayed
- **THEN** the section SHALL show a heading and contact details (address,
  phone, email) with mint icons
- **AND** the section SHALL show a contact form with Name, Email, and
  Message fields and a mint pill "Send Message" submit button
- **AND** the form SHALL validate required fields and show per-field errors
  before submit

### Requirement: Footer

The system SHALL render the footer (reconstructed, repo standard).

#### Scenario: Footer content

- **GIVEN** the Mintly page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the brand, a short blurb, and link columns
  on a dark charcoal or mint-tinted background
- **AND** the footer SHALL show a copyright bar with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `scripts/verify-app.sh mintly` passes (typecheck + lint + 100% coverage
      tests + build)
- [ ] All spec scenarios implemented (`openspec/specs/template-mintly/spec.md`)
- [ ] Visual pass vs the TEMPLATES.md screenshot
      (`dentist-wordpress-themes-1.jpg`) — white navbar with brand +
      Home/About/Departments/FAQ/Contacts, split dentist hero with icon
      trio, three mint `#B9F7F8` info cards with white pill buttons,
      accent `#3BE2AE`
- [ ] TEMPLATES.md lines 536, 1516, 1887, AND 2259 all marked `[x]`
- [ ] `public/CNAME` = `mintly.free.componentdock.com`; `homepage` =
      `https://mintly.free.componentdock.com`
