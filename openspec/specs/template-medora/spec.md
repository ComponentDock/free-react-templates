# Template: Medora (Medical Clinic Website Template)

## Purpose

Medora is a single-page medical clinic website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medical Wordpress Themes" category design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Medical Wordpress Themes" (category item).
  TEMPLATES.md has **THREE copies** of this item (lines 223, 1863, 2245 —
  mark ALL of them `[x]` when done).
- **Source link behavior:** `https://colorlib.com/wp/template/medical-wordpress-themes/`
  does NOT resolve to a demo — it 301-redirects twice:
  `https://colorlib.com/wp/health-medical-wordpress-themes/` →
  `https://colorlib.com/wp/free-medical-wordpress-theme/` (HTTP 200, 157 KB),
  the roundup article "10 Best Free Medical WordPress Themes 2026" by Aigars
  Silkalns (published June 4, 2024, category "Free Themes", 0 comments).
- **Preview URL:** `https://preview.colorlib.com/theme/medical-wordpress-themes/`
  returns HTTP 404 "Not Found" and the slug is absent from
  `preview.colorlib.com/assets/js/products.js` (preview map). This item is a
  category page, not a demo-hosting template — per the replication fallback
  rule, the **screenshot is the primary visual reference** and the live
  roundup page provides page structure + tokens.
- **Screenshot:** `medical-website-templates.jpg` (1200×885, served as AVIF
  by ColorLib; converted to PNG via ffmpeg and verified live in a browser via
  vision). It shows the hero/landing section of the "HealthFlex" medical
  clinic WordPress theme demo (the roundup's featured "Medical" theme):
  - thin light-grey **top utility bar**: left "FEES & INSURANCE" and
    "REQUEST AN APPOINTMENT" links; center search input ("Search or enter
    website name"); right "Emergency Line (+1) 555-0199-005" (light grey bg,
    small dark text);
  - **white main header**: bold blue logo "HEALTHFLEX" left; right nav in
    caps: HOME, OUR CLINIC, DEPARTMENTS, SERVICES, INFO, BLOG, CONTACT,
    SHOP, MORE (active "HOME" underlined in blue);
  - **hero slider** (full-width photo of a grey-haired male doctor with a
    stethoscope, reassuring smile; blurred female colleague in blue scrubs
    behind): dark semi-transparent overlay box on the right with large white
    "QUALITY CARE" + sub-headline "Your Health is our priority." + short
    paragraph + bright blue "LEARN MORE" button; left/right arrow controls
    (carousel);
  - **quick-access bar**: a horizontal blue GRADIENT band (left `#0c65ae` →
    right `#6cb4f2`, pixel-verified from the screenshot) with four tiles of
    white icons + caps labels + small subtexts — DEPARTMENTS (hospital-building
    icon), MEDICAL SERVICES (open-book icon), FIND A DOCTOR (doctor-with-
    stethoscope icon), REQUEST AN APPOINTMENT (calendar/clipboard icon);
  - **Welcome section** (white): "WELCOME TO MEDICUS CLINIC" heading +
    paragraph on the left ("We've built a long standing relationship based on
    trust..."), photo of a modern multi-story medical building with trees on
    the right;
  - **Modern Facilities section**: heading + text left, building photo right
    (partial, begins below the fold);
  - dark-blue **chat widget** tab bottom-right: "Have a question? Ask...
    Theme".
  - Palette: trustworthy medium blue (logo, buttons, feature boxes, active
    nav) on white; dark grey body text; light-grey utility bar; dark
    semi-transparent overlay on the hero photo.
- **Live page structure (from the roundup article DOM, HTTP 200, 157 KB):**
  header with logo + main menu → page header/breadcrumb → article: h1 title
  ("10 Free Medical WordPress Themes For Your Hospital Website 2026", 31px/
  600), meta line (author / "Free Themes" / 0 comments) → intro paragraph →
  h2 "Best Free Medical WordPress Themes" → **numbered theme entries 1–10**
  (Astra, Medical Way, Medical, VW Hospital Lite, Eightmedi Lite, Medplus,
  Doctor Clinic, Gutener Medical, Medical Care, VW Medical Care), each = h3
  number + name + description + accent "Download this template" button →
  h3 "Over To You" → "Leave a Reply" comment form → footer. The 10 entries
  are free marketplace themes; the recreation does NOT ship them — the
  entry list informs the Departments/Services section content (see
  Recreation decisions).
- **Visual design:** classic trustworthy medical-clinic corporate landing
  page — utility bar + white header over a full-width doctor-photo hero
  slider with a dark overlay caption box, a blue quick-access feature bar,
  white text+photo content sections, blue CTAs everywhere, clean modern
  sans-serif with caps headings, generous whitespace.

## Design tokens (from the live page CSS + screenshot)

| Token               | Value                                                                                      | Where                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Brand blue (accent) | `#1a73e8` (page CSS var `--wpex-accent`)                                                   | logo, "LEARN MORE" button, feature boxes, active nav underline, links, hover states   |
| Accent dark variant | `#1464cc` (page CSS var `--wpex-accent-alt`)                                               | button hover / darker accents                                                         |
| Ink                 | `#111827`                                                                                  | headings on light sections                                                            |
| Body text           | `#374151`                                                                                  | paragraphs                                                                            |
| Secondary grey      | `#4b5563`                                                                                  | meta / small text                                                                     |
| Quick-access band   | horizontal blue gradient `#0c65ae` → `#6cb4f2` (pixel-verified from screenshot)            | feature tiles: white icons, caps labels, small subtexts                               |
| Utility bar bg      | `#f5f6f7` (light grey, approx. from screenshot)                                            | top bar                                                                               |
| White               | `#ffffff`                                                                                  | header, page bg, hero caption text, feature-box icons                                 |
| Hero overlay        | dark semi-transparent (rgba ~`0,0,0,0.55` over photo)                                      | hero caption box                                                                      |
| Font                | system sans-serif stack (live page body 16px; no Google Font import found)                 | all text; caps headings bold; hero "QUALITY CARE" large bold white; nav 12–14px caps  |
| Primary button      | solid `#1a73e8`, white text, radius ~4px, bold caps, padding ~12px 28px; hover → `#1464cc` | "LEARN MORE", "Request an Appointment", "Download this template"                      |
| Nav                 | white header, dark text links, caps, active link underlined in blue                        | Home, Our Clinic, Departments, Services, Info, Blog, Contact, Shop, More              |
| Section rhythm      | 80–100px vertical padding; max-width container ~1200px                                     | all content sections                                                                  |
| Feature bar tiles   | 4 equal tiles, light blue bg, white line icons, caps labels, hover → brand blue            | quick access: Departments / Medical Services / Find a Doctor / Request an Appointment |
| Chat widget         | fixed bottom-right dark-blue rounded tab (decorative; may be omitted or kept non-blocking) | "Have a question? Ask..."                                                             |

## Recreation decisions

- The deliverable is a **single-page medical clinic website template** in the
  style of the screenshot (the HealthFlex demo): this is what the category
  image depicts and what "Medical Wordpress Themes" means as a template type.
  The roundup article is a blog page, not a theme; its numbered-entry list
  (Astra, Medical Way, Medical, Medplus, Doctor Clinic, ...) is repurposed as
  the Departments/Services section content (6 cards: Cardiology, Pediatrics,
  Orthopedics, Neurology, Dental Care, Emergency) and the article's accent
  button pattern becomes the section CTAs.
- Brand name "Medora" replaces the demo's "HEALTHFLEX"/"Medicus Clinic"; the
  source words "HealthFlex" and "Medicus" never appear as the brand.
- Single-page structure (matches the screenshot top-to-bottom plus the
  sections the feature bar points to):
  1. Utility bar (phone + appointment link, decorative search)
  2. Header — "Medora" logo left, nav right (Home, About, Departments,
     Services, Doctors, Contact), active-link underline; sticky white
  3. Hero — full-width doctor photo with dark overlay caption box: "Quality
     Care" + "Your Health is Our Priority." + paragraph + blue "Learn More"
     button (carousel arrows optional; implementer may render a single slide)
  4. Quick-access feature bar — 4 tiles (Departments, Medical Services,
     Find a Doctor, Request an Appointment) that anchor-scroll to sections
  5. Welcome/About — "Welcome to Medora Clinic" + text left, building photo
     right
  6. Departments/Services — 6 cards grid (from the article's theme list,
     paraphrased)
  7. Doctors — "Find a Doctor" grid of 3–4 doctor cards (seeded photos,
     name, specialty)
  8. Facilities — "Modern Medical Facilities" text + photo (from screenshot)
  9. Appointment/Contact — validated request form (name, email, phone,
     department select, message) + clinic info; success state
  10. Footer — dark navy/blue-grey, wordmark, quick links, contact columns,
      copyright + paraphrased Colorlib credit
- Photos → seeded picsum placeholders (`picsum.photos/seed/medora-<n>/<w>/<h>`),
  hero photo additionally darkened with a dark overlay; no assets copied.
- Icons → lucide-react (Hospital/Stethoscope, BookOpen, Calendar, User,
  Phone, Mail, MapPin, Search, Menu, X, ArrowRight, HeartPulse, Syringe,
  Baby, Brain, Ambulance, ShieldPlus — verify exports before use); brand
  icons (socials) → inline SVG BrandIcon from packages/ui (lucide removed
  brand icons).
- The chat widget from the screenshot is blog/demo furniture — omit it (or
  keep as a decorative non-blocking element if desired); the Appointment
  form covers interactivity.
- Comment form from the article ("Leave a Reply") is NOT recreated — blog
  furniture, not theme furniture.
- The demo's top-bar search input is decorative — implementer may omit it or
  render a non-functional input with a search icon.

Medora lives in `apps/medora` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Utility bar

The system SHALL render a thin top utility bar above the header with contact
information and an appointment link.

#### Scenario: Utility bar content

- **GIVEN** the Medora page is rendered
- **WHEN** the page loads
- **THEN** a thin light-grey bar SHALL appear above the header
- **AND** it SHALL show a phone line ("Emergency Line (+1) 555-0199-005" —
  paraphrased) and a "Request an Appointment" link
- **AND** the appointment link SHALL scroll to the appointment section

### Requirement: Sticky white header

The system SHALL render a white sticky header with the "Medora" wordmark and
a caps navigation menu with an active-link underline.

#### Scenario: Header content

- **GIVEN** the Medora page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the wordmark "Medora" on the left in bold blue
- **AND** it SHALL show the uppercase links Home, About, Departments,
  Services, Doctors, and Contact on the right
- **AND** each link SHALL scroll to its section
- **AND** the header SHALL stay fixed at the top on scroll with a white
  background

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the user SHALL be able to close it

### Requirement: Hero with overlay caption

The system SHALL render a full-width hero with a doctor photo, a dark
overlay caption box, and a blue CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it is displayed
- **THEN** it SHALL show a full-width background photo
- **AND** it SHALL show a dark semi-transparent caption box on the right with
  a large bold white heading ("Quality Care") and a sub-headline ("Your
  Health Is Our Priority.")
- **AND** it SHALL show a short supporting paragraph in white
- **AND** it SHALL show a solid blue "Learn More" button

#### Scenario: Hero CTA

- **GIVEN** the hero "Learn More" button is displayed
- **WHEN** the user clicks it
- **THEN** the page SHALL scroll to the departments section
- **AND** hovering the button SHALL darken it to the accent-alt `#1464cc`

### Requirement: Quick-access feature bar

The system SHALL render a row of four blue feature tiles with icons and
labels linking to their sections.

#### Scenario: Feature tiles

- **GIVEN** the feature bar is displayed
- **WHEN** the tiles are rendered
- **THEN** they SHALL appear as a four-column row of tiles on a blue
  gradient band (`#0c65ae` → `#6cb4f2`)
- **AND** each tile SHALL show a white line icon, a caps label
  (Departments, Medical Services, Find a Doctor, Request an Appointment),
  and a short subtext
- **AND** each tile SHALL anchor-scroll to its target section
- **AND** hovering a tile SHALL darken it slightly (black overlay)

### Requirement: Welcome section

The system SHALL render a white welcome/about section with text on the left
and a photo on the right.

#### Scenario: Welcome content

- **GIVEN** the welcome section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Welcome to Medora Clinic"
- **AND** it SHALL show two short paragraphs about the clinic's philosophy
  on the left
- **AND** it SHALL show a building photo on the right

### Requirement: Departments section

The system SHALL render a departments/services grid of six cards.

#### Scenario: Departments grid

- **GIVEN** the departments section is displayed
- **WHEN** the cards are rendered
- **THEN** they SHALL appear in a three-column grid
- **AND** each card SHALL show an icon, a title (e.g. Cardiology,
  Pediatrics, Orthopedics, Neurology, Dental Care, Emergency), and a
  one-line description
- **AND** the section SHALL carry the heading "Our Departments"

### Requirement: Doctors section

The system SHALL render a "find a doctor" grid of doctor cards.

#### Scenario: Doctor cards

- **GIVEN** the doctors section is displayed
- **WHEN** the cards are rendered
- **THEN** they SHALL appear in a grid of three to four cards
- **AND** each card SHALL show a photo, a doctor name, and a specialty
- **AND** the section SHALL carry the heading "Meet Our Doctors"

### Requirement: Facilities section

The system SHALL render a facilities section with text on one side and a
photo on the other.

#### Scenario: Facilities content

- **GIVEN** the facilities section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Modern Medical Facilities"
- **AND** it SHALL show a supporting paragraph and a facility photo

### Requirement: Appointment form

The system SHALL render an appointment/contact section with a validated
request form and clinic details.

#### Scenario: Appointment form validation

- **GIVEN** the appointment section is displayed
- **WHEN** the user submits the form with a valid name, email, phone, and
  message
- **THEN** the form SHALL show a success state
- **AND** submitting with an invalid email or empty required fields SHALL
  show validation errors and block submission

#### Scenario: Clinic details

- **GIVEN** the appointment section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Request an Appointment" and clinic
  details (address, phone, email, hours) next to the form

### Requirement: Footer

The system SHALL render a dark footer with a copyright line and a Colorlib
credit link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Medora" wordmark, quick links, and contact
  columns
- **AND** it SHALL show a copyright line with a paraphrased Colorlib credit

## Verification checklist

- [ ] `bash scripts/verify-app.sh medora` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Utility bar shows phone + appointment link; header sticky white with
      all six links, active underline, mobile menu opens/closes
- [ ] Hero shows full-width photo, dark overlay caption ("Quality Care" /
      "Your Health Is Our Priority."), blue "Learn More" that scrolls to
      departments; hover → `#1464cc`
- [ ] Feature bar renders 4 tiles with icons, anchor-scrolls, hover →
      `#1a73e8`
- [ ] Welcome text+photo, Departments 3-col grid (6 cards), Doctors grid
      (3–4 cards), Facilities text+photo
- [ ] Appointment form validates (name/email/phone/message), success state,
      clinic details alongside
- [ ] Footer dark with credit line
- [ ] Fidelity: utility bar → header → hero overlay caption → feature bar →
      welcome → departments → doctors → facilities → appointment → footer
      matches the screenshot order; system sans-serif, `#1a73e8` accent,
      `#1464cc` hover, caps headings, picsum placeholders seeded
      `medora-<n>`, no copied assets
- [ ] TEMPLATES.md: mark ALL THREE copies (lines 223, 1863, 2245 — Medical
      Wordpress Themes) `[x]` and append the live surge URL to each
- [ ] `npm install` at root before committing (lockfile registers
      `apps/medora`); `grep -c "free-react-templates/medora"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-medora.surge.sh"`
      in `apps/medora/package.json`
- [ ] PR title: `feat: Medora — medical clinic website template (ColorLib
  Medical Wordpress Themes)`; body includes the source URL, the
      double-redirect note (roundup article), the 404 preview URL, tokens,
      and the three-copy TEMPLATES.md note
