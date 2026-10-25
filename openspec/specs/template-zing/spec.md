# Template: Zing (Restaurant Landing)

## Purpose

Zing is a restaurant landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Tasteit" free template (source: https://colorlib.com/wp/template/tasteit/), built under a DIFFERENT name (**Zing**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based restaurant template with a hero slider, reservation form, tabbed menu, chef profiles, testimonials carousel, blog cards, newsletter CTA, and a dark footer with hours and social links.

## Design tokens (reference re-check, 2026-10-23)

<!-- heading-role-tokens: tasteit/ink/template-zing/#333333 -->
**Heading-ink role (measured 2026-10-25):** the `ink` row states `#333333`, which is declared by no rule in this page's stylesheets and appears in no inline style or style attribute. The rendered headings paint rgba(0, 0, 0, 0.8) x36, rgb(255, 255, 255) x10; the most-painted heading colour is `rgba(0, 0, 0, 0.8)`.
<!-- /heading-role-tokens -->

- **Source**: ColorLib **Tasteit** — https://colorlib.com/wp/template/tasteit/
- **Preview**: `https://preview.colorlib.com/theme/tasteit/` — HTTP 200, title
  `Taste.it | Family Restaurant Since 1958`. The demo is a **3.0.0 rebuild**
  (`?v=3.0.0` on every asset, Bootstrap 5 inlined); the screenshot in
  TEMPLATES.md is the pre-3.0 release of the same design.
- **Stylesheets measured**: `css/style.min.css?v=3.0.0` — **196,189 B**
  (theme + inlined Bootstrap 5 + self-hosted Roboto/Dancing Script);
  `vendor/swiper/14.3.0/swiper-bundle.min.css` 14,615 B;
  `vendor/fontawesome/7.3.1/…subset.css` 1,700 B (icons).
- **Measured how**: hex-literal census per sheet, then the winning rule per
  selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| **Brand red** | `#cf1f28` | 44 | `a` (base/hover), `.navbar-brand`, nav link hover + `.nav-item.active`, `.nav-item.cta > a` fill (and again in `.scrolled`), `.bg-primary`, `.ftco-footer-social li a`, footer subscribe submit, breadcrumb hover, `.subheading-2` with its 85 px flanking rules |
| A11y accent (3.0.0 patch) | `#e52b34` | 3 | `:focus-visible { outline: 3px solid … }` and the underline on the active nav item in the rebuilt sheet — a focus/underline accent, **not** the brand fill |
| Footer | `#1a1a1a` | 1 | `.ftco-footer` |
| Paper | `#fff` | 108 | body ground, cards, footer button label |
| Ink | `#000` / `#333333` | 68 / 63 | overlays, framework body text (`--bs-body-color`) |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `Roboto` (11 declarations), sans-serif fallback | `body` rule |
| Decorative | `Dancing Script`, `cursive` (4 declarations) | hero `Cooking Since` line and the "About" kicker |
| Nav | Roboto, uppercase 13–14 px | `.ftco-navbar-light .nav-link` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Nav | `.ftco-navbar-light` transparent over the hero, white on `.scrolled`; the last item (`.cta`) is a **filled `#cf1f28` pill with white label** |
| Radius | `50%` ×15 (dots, avatars), `2px` on chips, `var(--bs-border-radius)` on controls |
| Bands | dark food-photo hero with script headline and a dark info bar above the nav → white booking/reservation block with a **`#cf1f28` form panel** → about/chef → tabbed menu → testimonials → blog → newsletter → `#1a1a1a` footer |

## Requirements

### Requirement: Page shell

The app renders a min-h-screen wrapper containing all major sections in order.

#### Scenario: All sections present

- **WHEN** the app loads
- **THEN** the page shows Navbar, Hero, About, CTA Banner, Menu, Testimonials, Chefs, Ingredients, Blog, Newsletter, and Footer sections

### Requirement: Navbar

The navbar shows the logo "Zing" and navigation links with scroll-based background change and mobile menu toggle.

#### Scenario: Navigation links

- **WHEN** the app loads
- **THEN** the navbar shows Home, About, Chef, Menu, Reservation, Blog, Contact links

#### Scenario: Mobile menu toggle

- **WHEN** I click the open menu button
- **THEN** the close menu button appears
- **WHEN** I click the close menu button
- **THEN** the open menu button appears

#### Scenario: Transparent to solid on scroll

- **WHEN** the page scrolls past 60px
- **THEN** the navbar gets a dark background

### Requirement: Hero

The hero section shows decorative text and a CTA button.

#### Scenario: Hero content

- **WHEN** the app loads
- **THEN** the hero shows "Cooking Since Best Quality" heading
- **AND** a "Book Your Table" CTA button is visible

### Requirement: About section with reservation form

The about section has a reservation form and welcome text.

#### Scenario: Form fields

- **WHEN** the app loads
- **THEN** the reservation form has Name, Phone, Email fields
- **AND** a "Book Now" submit button

#### Scenario: Form prevents default

- **WHEN** I click "Book Now"
- **THEN** the page does not navigate away

### Requirement: CTA Banner

A parallax-style banner with dining event promotion.

#### Scenario: CTA content

- **WHEN** the app loads
- **THEN** "Private Dinners & Happy Hours" heading is visible
- **AND** a Reservation link is present

### Requirement: Tabbed Menu

The menu section has tabbed categories with food items.

#### Scenario: Menu tabs

- **WHEN** the app loads
- **THEN** Breakfast, Lunch, Dinner, Desserts tabs are visible
- **AND** breakfast items are shown by default

#### Scenario: Tab switching

- **WHEN** I click the "Lunch" tab
- **THEN** lunch menu items appear
- **WHEN** I click the "Dinner" tab
- **THEN** dinner items appear

### Requirement: Testimonials

Customer review carousel with navigation.

#### Scenario: Testimonial navigation

- **WHEN** I click the next review button
- **THEN** a different review appears
- **WHEN** I click the previous review button
- **THEN** the previous review returns

#### Scenario: Wrap-around navigation

- **WHEN** I click next from the last review
- **THEN** the first review appears

### Requirement: Chef profiles

Master chef section with profile cards.

#### Scenario: Chef display

- **WHEN** the app loads
- **THEN** the "Our Master Chef" heading is visible
- **AND** chef names and titles are shown

### Requirement: Ingredients feature

Feature section with image and checklist.

#### Scenario: Features list

- **WHEN** the app loads
- **THEN** "Perfect Ingredients" heading is visible
- **AND** feature items are listed

### Requirement: Blog section

Recent blog post cards.

#### Scenario: Blog cards

- **WHEN** the app loads
- **THEN** "Recent Blog" heading is visible
- **AND** 3 blog cards with "Read more" links are shown

### Requirement: Newsletter CTA

Email subscription form on colored background.

#### Scenario: Newsletter form

- **WHEN** the app loads
- **THEN** a newsletter heading is visible
- **AND** an email input and Subscribe button are present

### Requirement: Footer

Dark footer with about text, hours, social links, newsletter, and Component Dock link.

#### Scenario: Footer content

- **WHEN** the app loads
- **THEN** "About Zing" heading is visible
- **AND** service hours are listed
- **AND** a newsletter form is present

#### Scenario: Component Dock link

- **WHEN** the app loads
- **THEN** a link to https://www.componentdock.com/ with "Component Dock" text is present

#### Scenario: Newsletter prevents default

- **WHEN** I fill in the footer newsletter email and submit
- **THEN** the page does not navigate away

### Requirement: Accessibility

Interactive elements have proper ARIA attributes.

#### Scenario: ARIA labels

- **WHEN** the app loads
- **THEN** the mobile menu toggle has an aria-label
- **AND** testimonial navigation buttons have aria-labels

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/zing/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/zing/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page shell — the page shows Navbar, Hero, About, CTA Banner, Menu, Testimonials, Chefs, Ingredients, Blog, Newsletter, and Footer sections
- [ ] Navbar — the navbar shows Home, About, Chef, Menu, Reservation, Blog, Contact links
- [x] Hero — the hero shows "Cooking Since Best Quality" heading
- [ ] About section with reservation form — the reservation form has Name, Phone, Email fields
- [x] CTA Banner — "Private Dinners & Happy Hours" heading is visible
- [ ] Tabbed Menu — Breakfast, Lunch, Dinner, Desserts tabs are visible
- [ ] Testimonials — a different review appears
- [x] Chef profiles — the "Our Master Chef" heading is visible
- [x] Ingredients feature — "Perfect Ingredients" heading is visible
- [x] Blog section — "Recent Blog" heading is visible
- [ ] Newsletter CTA — a newsletter heading is visible
- [ ] Accessibility — the mobile menu toggle has an aria-label
