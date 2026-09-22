# Template: Physiohub (Health & Fitness / Physiotherapy)

## Purpose

Physiohub is a single-page physiotherapy/chiropractic landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Physical Therapy" HTML template (source:
https://colorlib.com/wp/template/physical-therapy/), built under a
DIFFERENT name per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NAMING NOTE: the ColorLib source name "Physical Therapy" is FORBIDDEN as
> the app name. **Physiohub** ("physio" + "hub" — fits the physiotherapy /
> rehabilitation theme; reads as a central hub for physical therapy services)
> is the new, original name — single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-09-22). Source slug + preview URL are recorded below.

The original is a modern, lightweight medical/health single-pager targeting
physiotherapy, chiropractic, and massage services. It features a parallax
hero with typewriter text effects, animated statistics counters, a
testimonials slider, multi-level dropdown navigation, responsive layout,
blog integration, and a working contact form. Physiohub recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Physical Therapy" — free health/fitness HTML template
  (source: https://colorlib.com/wp/template/physical-therapy/; ColorLib page
  title "Physical Therapy - Best Website Template 2026"; category:
  Health & Fitness). TEMPLATES.md line 1873 — single entry, `- [ ]`.
- **Live preview DOM:** `https://preview.colorlib.com/theme/physical-therapy/`
  returns HTTP 404 (unreachable as of 2026-09-22). Per replication.md,
  falling back to the screenshot + ColorLib page description as the sole
  visual reference. The preview SPA at `https://preview.colorlib.com/#physical-therapy`
  loads but the iframe content is unavailable.
- **Screenshot analyzed:** `https://colorlib.com/wp/wp-content/uploads/sites/2/physicaltherapy-free-templatel.jpg`
  (1200×946px). The screenshot shows a clean, modern medical/health
  template with:
  - White/light background with mauve/purple accent color
  - Hero section with parallax background and typewriter headline effect
  - Statistics counter section with animated numbers
  - Service cards grid layout
  - Testimonials slider section
  - Blog/news section
  - Dark footer with contact info and social links
- **Color palette (from ColorLib page + colors.js):**
  - Primary brand: `#B97EBB` (mauve/purple) — extracted from the ColorLib
    page's preview button `background-color:#B97EBB` with hover `#ae6ab0`
  - colors.js entry: `physicaltherapy: ["red","brown"]` — these are broad
    category indicators; the actual brand is mauve/purple from the page
  - Likely secondary: white `#ffffff`, dark text near `#333333` or `#212121`
  - Section backgrounds: alternating white and light gray (`#f7f7f7` or similar)
- **Typography:** Not determinable from screenshot alone (preview unreachable).
  Based on ColorLib health templates, likely uses a clean sans-serif such as
  "Poppins" or "Open Sans" from Google Fonts. Will verify during implementation.
- **Button styling:** Rounded/soft-corner buttons (`border-radius` ~20-25px),
  solid mauve/purple background, white text, hover darkens to `#ae6ab0`.
  The ColorLib page shows `vc_btn3-shape-rounded` class.
- **Layout pattern:** Full-width sections stacked vertically; hero with
  parallax image overlay; stat counters in a horizontal row; services in
  a card grid; testimonials in a slider; blog posts in a 3-column grid.

## Section order (1:1 recreation plan)

Based on the screenshot and ColorLib page description, the expected section
order is:

1. **Header/Navbar** — sticky navigation with logo, nav links (Home, About,
   Services, Pages dropdown, Blog, Contact), and a CTA button (phone or
   appointment). Multi-level dropdown menu.
2. **Hero** — parallax background image with typewriter text effect headline,
   subheadline, and CTA button(s). Full-width or near-full-width.
3. **About / Welcome** — brief intro text about the practice, possibly with
   an image or icon grid.
4. **Services** — grid of service cards (physiotherapy, chiropractic,
   massage, etc.) with icons, titles, and short descriptions.
5. **Statistics / Counters** — animated number counters (patients served,
   years experience, etc.) on a colored or image background.
6. **Why Choose Us / Features** — additional feature highlights or
   differentiators.
7. **Testimonials** — slider/carousel of patient testimonials with photos
   and quotes.
8. **Blog / News** — 2-3 recent blog post cards with images, titles, dates.
9. **Contact / Appointment** — contact form (name, email, phone, message,
   date picker) + map or contact info.
10. **Footer** — dark background, multi-column: logo + description, quick
    links, services, contact info, newsletter signup, social icons.
    Footer MUST link `https://www.componentdock.com/` (branded
    "Component Dock").

## Gherkin requirements

### Header

```gherkin
Feature: Physiohub Header

  Scenario: Desktop navigation displays all links
    Given the user is on a desktop viewport (≥1024px)
    When the page loads
    Then a sticky header is visible
    And the logo is displayed on the left
    And navigation links are visible: Home, About, Services, Blog, Contact
    And a CTA button (e.g. "Book Appointment") is visible on the right

  Scenario: Multi-level dropdown opens on hover/click
    Given the user is on a desktop viewport
    When the user hovers over or clicks a nav item with a submenu
    Then a dropdown menu appears below the parent link
    And the dropdown contains sub-navigation items

  Scenario: Mobile hamburger menu opens on click
    Given the user is on a mobile viewport (<1024px)
    When the user taps the hamburger icon
    Then a slide-down or overlay mobile menu appears
    And all navigation links are accessible in the mobile menu

  Scenario: Header becomes sticky on scroll
    Given the user has scrolled past the hero section
    Then the header remains fixed at the top of the viewport
    And the header background becomes solid (white or semi-transparent)
```

### Hero

```gherkin
Feature: Physiohub Hero Section

  Scenario: Hero displays typewriter headline
    Given the user is on the hero section
    Then a headline text is displayed
    And the headline features a typewriter/rotating text animation
    And a subheadline paragraph is visible below
    And at least one CTA button is visible

  Scenario: Hero has parallax background
    Given the user scrolls the page
    Then the hero background image moves at a different speed than the
      foreground content (parallax effect)
```

### Services

```gherkin
Feature: Physiohub Services Section

  Scenario: Services section displays service cards
    Given the user scrolls to the services section
    Then a section heading is visible (e.g. "Our Services")
    And at least 3 service cards are displayed in a grid layout
    And each card has an icon, title, and short description

  Scenario: Service cards are responsive
    Given the user is on a mobile viewport
    Then service cards stack vertically in a single column
```

### Statistics

```gherkin
Feature: Physiohub Statistics Section

  Scenario: Animated counters display on scroll
    Given the user scrolls to the statistics section
    Then at least 3 counter items are visible
    And each counter animates from 0 to its target number
    And each counter has a label (e.g. "Happy Patients", "Years Experience")
```

### Testimonials

```gherkin
Feature: Physiohub Testimonials Section

  Scenario: Testimonials slider displays patient quotes
    Given the user scrolls to the testimonials section
    Then a section heading is visible (e.g. "Testimonials")
    And at least 2 testimonial items are available in the slider
    And each testimonial shows a quote, patient name, and optional photo
    And navigation dots or arrows allow switching between testimonials

  Scenario: Testimonials auto-advance
    Given the user is viewing the testimonials section
    When 5 seconds pass without interaction
    Then the slider advances to the next testimonial automatically
```

### Blog

```gherkin
Feature: Physiohub Blog Section

  Scenario: Blog section shows recent posts
    Given the user scrolls to the blog section
    Then a section heading is visible (e.g. "Latest News")
    And at least 2 blog post cards are displayed
    And each card has an image, title, date, and excerpt
```

### Contact

```gherkin
Feature: Physiohub Contact Section

  Scenario: Contact form is displayed and functional
    Given the user scrolls to the contact section
    Then a contact form is visible with fields: Name, Email, Phone,
      Message
    And a submit button is visible
    And form validation shows errors for empty required fields

  Scenario: Contact form validates email format
    Given the user enters "invalid-email" in the Email field
    When the user submits the form
    Then an email format validation error is displayed
```

### Footer

```gherkin
Feature: Physiohub Footer

  Scenario: Footer displays all required content
    Given the user scrolls to the footer
    Then the footer has a dark background
    And it contains the logo and a brief description
    And quick links are displayed
    And contact information is shown (address, phone, email)
    And social media icon links are present
    And a "Made with Component Dock" link to
      https://www.componentdock.com/ is visible
```

## Verification checklist

- [ ] All sections render without errors
- [ ] Header is sticky on scroll
- [ ] Multi-level dropdown navigation works
- [ ] Mobile hamburger menu opens and closes
- [ ] Hero typewriter/rotating text animation works
- [ ] Hero parallax effect works on scroll
- [ ] Service cards display with icons, titles, descriptions
- [ ] Statistics counters animate on scroll into view
- [ ] Testimonials slider auto-advances and is manually navigable
- [ ] Blog cards display with images, titles, dates, excerpts
- [ ] Contact form validates required fields and email format
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec + PR)
- [ ] Responsive layout works on mobile, tablet, and desktop
- [ ] All placeholder images use `https://picsum.photos/seed/physiohub-<n>/<w>/<h>`
- [ ] Google Fonts loaded via `<link>` in `index.html`
- [ ] Icons from `lucide-react`
- [ ] `apps/physiohub/public/CNAME` contains `physiohub.free.componentdock.com`
- [ ] `apps/physiohub/package.json` has `"homepage": "https://physiohub.free.componentdock.com"`
- [ ] `npm install` at repo root runs successfully after creating the workspace
- [ ] Tests pass with 100% coverage
- [ ] Typecheck passes
- [ ] Build succeeds
