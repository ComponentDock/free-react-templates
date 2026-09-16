# Template: Gracious (Charity — Bootstrap)

## Purpose

Gracious is a single-page charity/non-profit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Welfare" charity website template (source:
https://colorlib.com/wp/template/welfare/; listed under **Charity (37)**
at line 1285 in TEMPLATES.md), built under a different name (**Gracious**)
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
(strict). No ColorLib references in app code — provenance lives in this
spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Welfare" — free charity/non-profit HTML template
  (source: https://colorlib.com/wp/template/welfare/). Single page: dark
  navbar ("Welfare" wordmark + nav links), full-height hero with parallax
  background photo + dark overlay + centered headline + video popup button,
  a 3-column orange counter/intro strip (animated counter + two CTA
  blocks), 3 service feature icons, 6 cause cards with progress bars,
  latest donations carousel, a photo gallery grid, blog section (3 cards),
  events section (3 cards), and a photo-background footer with about,
  blog links, site links, and contact info.
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/welfare/` — fetched
  `/tmp/welfare-preview.html` (42,849 bytes), stylesheet `style.css`
  (`/tmp/welfare-style.css`, 63,066 bytes). TEMPLATES.md screenshot
  (`welfare-free-template.jpg`) was not separately viewable (browser
  unavailable) but live DOM + CSS provide complete replication data.
- **Visual design (live DOM + CSS tokens):** Warm, inviting charity
  design with a distinctive orange gradient counter strip (`#f86f2d` →
  `#fa8f3d` → `#faaa3a`) and teal/blue (`#78d5ef`) accent buttons.
  Uses three fonts: Dosis (headings), Overpass (body), and Work Sans
  (secondary text). The hero has a parallax background photo with dark
  overlay and centered white text. Square-cornered buttons (`border-radius:
0`) give a bold, modern look. The gallery section uses a 6-image grid
  with magnific-popup lightbox and hover icon overlays. Overall: clean,
  warm palette on white/light-grey backgrounds with orange accents.

## Design tokens (from `style.css` of the live preview)

- **Brand orange (gradient strip):** `#f86f2d` (color-1, darkest — counter
  number background), `#fa8f3d` (color-2, medium — "Donate Money" block),
  `#faaa3a` (color-3, lightest — "Be a Volunteer" block). These three
  create the gradient counter/intro strip spanning the full width.
- **Teal/blue accent:** `#78d5ef` — `.btn-primary` background (general),
  also `#4ac7ea` and `#56caeb` in button hover/focus states. Used for
  progress bars and interactive accent elements.
- **Green accent:** `#7cbd1e` — progress bar fill color in cause cards.
- **Ink/text:** `#212529` (primary text), `#495057` (secondary text),
  `#666666` (body paragraphs), `#96a1af` (meta), `#1d2124` (headings).
- **Dark backgrounds:** `#1d2124` (navbar), `#252525` (footer), `#000`
  (hero overlay at 0 opacity in CSS — effectively transparent by default,
  but the `.overlay` div is present for darkening the hero photo).
- **Light section backgrounds:** `#f2f2f2` (`.bg-light` sections — causes
  and events), `#fafafa`, white for most content areas.
- **Fonts:** `'Dosis', sans-serif` (headings, 200–700 via Google Fonts),
  `'Overpass', sans-serif` (body, 300–700 via Google Fonts), `'Work Sans',
sans-serif` (secondary, some text elements). Load via Google Fonts
  `<link>` in index.html.
- **Buttons:** Bootstrap `.btn` with **square corners** (`border-radius:
0` throughout):
  - `.btn-primary`: bg `#78d5ef`, color `#212529`, border `#78d5ef`.
  - `.btn-white`: bg `#fff`, border `1px solid #fff`, color `#000`,
    border-radius `0` — used in the counter/intro strip CTAs.
  - `.btn-outline-white`: transparent bg, white border, white text —
    used in the hero ("Watch Video") and footer CTA.
- **Border radii:** Almost universally `0` (square buttons, square cards).
  The only `0.25rem` radius appears on form inputs and `0.50%` on avatars.
- **Hero:** `height: calc(100vh - 117px)` with `min-height: 700px`,
  parallax via `data-stellar-background-ratio="0.5"`, dark overlay (`.overlay`
  with `background: #000`), AOS scroll animations (`data-scrollax`).
- **Counter strip:** `.ftco-intro` with `margin-top: -80px` (overlaps hero),
  3 columns: col-md-5 (counter) + col-md (Donate Money) + col-md (Be a
  Volunteer). Each `.block-18` has solid orange bg (color-1/2/3) with white
  text, padding, and "Donate Now" / "Be A Volunteer" `.btn-white` buttons.
- **Causes:** 6 `.cause-item` cards in a grid, each with background photo,
  title, description, progress bar (green `#7cbd1e` fill), "Donate Now"
  link. Progress bar widths vary (source shows all at same level —
  percentages to be determined during implementation).
- **Gallery:** `.ftco-gallery` — 6 items in a responsive grid (3+3 layout),
  each with background photo + center icon overlay on hover, opens
  magnific-popup lightbox on click.
- **Events:** 3 `.event-item` cards with background photo, time/venue
  overlay, title, description, "Join Event" link.

## Section structure (top → bottom, single page)

1. **Navbar** — Dark `bg-dark`, "Gracious" wordmark left, hamburger
   toggler (mobile), `.collapse` nav right: Home (active) / About / Causes
   / Donate / Blog / Gallery / Events / Contact. Desktop: `ml-auto`
   right-aligned links.
2. **Hero** — Full-height (`calc(100vh - 117px)`, min 700px) background
   photo (picsum seed `gracious-hero`) with `.overlay` dark layer + parallax
   (`data-stellar-background-ratio="0.5"`). Centered white text: h1
   "Doing Nothing is Not An Option of Our Life" + subtitle + "Watch Video"
   `.btn.btn-outline-white` button (opens a Vimeo popup — recreate as an
   external link or modal). AOS scroll animations.
3. **Counter/Intro Strip** (`.ftco-counter ftco-intro`, `margin-top: -80px`
   overlapping hero) — 3 colored columns spanning full width:
   - Col 1 (col-md-5, `#f86f2d`): "Served Over" + animated counter
     `1,432,805` + "Children in 190 countries in the world".
   - Col 2 (col-md, `#fa8f3d`): h3 "Donate Money" + description +
     "Donate Now" `.btn-white`.
   - Col 3 (col-md, `#faaa3a`): h3 "Be a Volunteer" + description +
     "Be A Volunteer" `.btn-white`.
4. **Services** (`.ftco-section`, white bg) — 3 feature cards (col-md-4):
   "Make Donation" (lucide `HandCoins`), "Become A Volunteer" (lucide
   `HeartHandshake`), "Sponsorship" (lucide `Handshake`). Each: icon
   (teal `#4ac7ea`) + title + description paragraph.
5. **Causes** (`.ftco-section bg-light`, `#f2f2f2`) — h2 "Our Causes"
   - 6 cause cards in a responsive grid: background photo (picsum seeds
     `gracious-cause-1..6`), title "Clean water for the urban area" ×6
     (placeholder), description, progress bar (green `#7cbd1e` fill),
     "Donate Now" link.
6. **Latest Donations** (`.ftco-section`, white bg) — h2 "Latest
   Donations" + 3 donation cards: avatar photo (picsum `gracious-donor-1..3`),
   name "Ivan Jacobson" ×3, description text, donation amount ("Donated
   $300 for Children Needs Food", "$150", "$250"). Carousel/slider
   behavior via Owl Carousel → React carousel.
7. **Gallery** (`.ftco-gallery`) — 6 image grid items: background photos
   (picsum seeds `gracious-gallery-1..6`), center icon overlay on hover,
   magnific-popup lightbox on click (recreate as a simple modal or
   skip lightbox, use an image viewer).
8. **Blog** (`.ftco-section`, white bg) — h2 "Recent from blog" + 3
   blog cards (col-md-4): thumbnail photo (picsum `gracious-blog-1..3`),
   date/category meta, h3 title "Hurricane Irma has devastated Florida"
   ×3, excerpt, "Read more" link.
9. **Events** (`.ftco-section bg-light`, `#f2f2f2`) — h2 "Our Latest
   Events" + 3 event cards: background photo (picsum `gracious-event-1..3`),
   time + venue ("10:30AM-03:30PM Venue Main Campus"), title "World Wide
   Donation" ×3, description, "Join Event" link.
10. **Footer/CTA** (`.ftco-section-3`, background photo `bg_3.jpg` with
    dark overlay) — Split layout: left h2 "Be a volunteer" + "About Us"
    heading + description; right "Recent Blog" with 2 blog links + "Site
    Links" (Home / About / Causes / Blog / Contact) + "Have a Questions?"
    with phone + email. Copyright bar at bottom: "Component Dock" link
    to https://www.componentdock.com/ (replaces ColorLib credit).

## Verification checklist

- [ ] Spec covers every section in the correct order (10 sections)
- [ ] Design tokens match extracted CSS values exactly (`#f86f2d`,
      `#fa8f3d`, `#faaa3a`, `#78d5ef`, `#7cbd1e`, Dosis + Overpass + Work Sans)
- [ ] Counter strip gradient (3 orange tones) documented
- [ ] Square buttons (border-radius: 0) documented
- [ ] Gallery grid (6 items) + lightbox behavior documented
- [ ] All section headings match the source DOM
- [ ] Footer includes Component Dock attribution (NO ColorLib)
- [ ] No ColorLib references in app code — provenance only in spec
- [ ] Name "Gracious" does not collide with existing `apps/` or specs
- [ ] Spec records source slug (`welfare`) + preview URL

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL display the "Gracious" brand name and navigation links (Home, About, Causes, Donate, Blog, Gallery, Events, Contact).

#### Scenario: Desktop navbar

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows "Gracious" as a link to #home
- **AND** all eight navigation links are visible
- **AND** the navbar has a dark background (#1d2124)

### Requirement: Hero section with background and CTA

The hero section SHALL display a full-height background image with dark overlay, a headline, subtitle, and a "Watch Video" button.

#### Scenario: Hero renders

- **WHEN** the page loads
- **THEN** the hero displays the heading "Doing Nothing is Not An Option of Our Life"
- **AND** a subtitle is present
- **AND** a "Watch Video" link is visible

### Requirement: Counter strip with donation metrics

The counter strip SHALL display three colored columns: an animated counter, a "Donate Money" block, and a "Be a Volunteer" block.

#### Scenario: Counter strip renders

- **WHEN** the page loads
- **THEN** the counter number "1,432,805" is displayed
- **AND** a "Donate Now" button is visible in the orange donate block
- **AND** a "Be A Volunteer" button is visible in the light orange volunteer block

### Requirement: Services section

The services section SHALL display three feature cards: Make Donation, Become A Volunteer, and Sponsorship.

#### Scenario: Services renders

- **WHEN** the page loads
- **THEN** the heading "What We Do" is visible
- **AND** three service cards are rendered with icons and descriptions

### Requirement: Causes section with progress bars

The causes section SHALL display six cause cards, each with a title, description, progress bar, and "Donate Now" link.

#### Scenario: Causes renders

- **WHEN** the page loads
- **THEN** the heading "Our Causes" is visible
- **AND** six cause cards are rendered
- **AND** each card has a progress bar and a "Donate Now" link

### Requirement: Latest Donations section

The donations section SHALL display three donation cards with avatar, donor name, and donation amount.

#### Scenario: Donations renders

- **WHEN** the page loads
- **THEN** the heading "Latest Donations" is visible
- **AND** three donation cards are rendered
- **AND** donation amounts are displayed

### Requirement: Gallery section

The gallery section SHALL display six image items in a grid with hover overlays.

#### Scenario: Gallery renders

- **WHEN** the page loads
- **THEN** the heading "Our Gallery" is visible
- **AND** six gallery images are rendered

### Requirement: Blog section

The blog section SHALL display three blog cards with thumbnail, date, title, excerpt, and "Read more" link.

#### Scenario: Blog renders

- **WHEN** the page loads
- **THEN** the heading "Recent from blog" is visible
- **AND** three blog cards are rendered with "Read more" links

### Requirement: Events section

The events section SHALL display three event cards with background photo, time/venue, title, description, and "Join Event" link.

#### Scenario: Events renders

- **WHEN** the page loads
- **THEN** the heading "Our Latest Events" is visible
- **AND** three event cards are rendered with "Join Event" links

### Requirement: Footer with Component Dock attribution

The footer SHALL display about text, quick links, contact info, and a copyright line linking to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** the footer shows quick links (Home, About, Causes, Blog, Contact)
- **AND** contact information is displayed
- **AND** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: App composes all sections

The App component SHALL compose all ten sections in the correct order within main landmark.

#### Scenario: Full page composition

- **WHEN** the page loads
- **THEN** the document title is set to "Gracious — Charity & Nonprofit Template"
- **AND** the banner, main, and contentinfo landmarks are present
- **AND** all section headings are rendered
