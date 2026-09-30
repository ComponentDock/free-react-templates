# Template: Drayage (Transportation)

## Purpose

Drayage is a freight-broker / courier-services marketing site in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Freightbroker" template (source:
https://colorlib.com/wp/template/freightbroker/ — a logistics
one-pager: navy/orange identity, skewed-parallelogram buttons, photo
hero, service cards, animated counters, dark "Why People Choose Us?"
band, project cards, testimonial + call-back form on a dark image
background, news grid, dark footer), built under a DIFFERENT name
(Drayage — "drayage" is the freight term for short-haul trucking,
usually port-to-warehouse; single lowercase word), per the monorepo
naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `freightbroker`
- **Source:** https://colorlib.com/wp/template/freightbroker/
- **Preview — REACHABLE at the STANDARD path (verified 2026-10-01 by
  direct fetch):** https://preview.colorlib.com/theme/freightbroker/ —
  HTTP 200, 49,140 bytes, HTML `<title>Freight-Broker | Template</title>`.
  Unlike the table-* family, this template does NOT need the
  `bootstrap/` sibling path. Implementers can re-fetch freely, but
  everything below was captured at prep time.
- **Preview CSS:** the DOM references `css/style.css` (relative to the
  preview path) —
  **https://preview.colorlib.com/theme/freightbroker/css/style.css**
  (HTTP 200, 46,390 bytes at prep time; self-contained sheet; other
  referenced assets are bootstrap.min.css, elegant-icons,
  font-awesome, nice-select, owl.carousel, slicknav — implementers
  replace all of these with Tailwind/lucide, never copy them).
  **All design tokens in this spec were captured directly from that
  stylesheet — CSS values are canonical over the screenshot;**
  implementers do NOT need to re-fetch it.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/freightbroker-free-template.jpg
  — analyzed 2026-10-01 with vision (desktop viewport crop, top of
  page). Visual: white navbar with an ORANGE SKEWED logo block
  ("FREIGHTBROKER" wordmark) on the left, navy topbar above it, full-
  bleed photo hero (warehouse worker with clipboard, dark overlay)
  with left-aligned white condensed uppercase headline + skewed orange
  CTA; white content sections below with orange eyebrows and navy
  Oswald headings; service cards = photo-left + white text-panel-right
  in a 2×2 grid; source screenshot shows headline typo "AWESOME
  TEMPLATE FOR COURIER & BDELIVERY SERVICES" (typo is in the source —
  paraphrase or fix in copy, keep the same kind of content).
- **TEMPLATES.md:** "## Transportation (22)" section at line 2947;
  item "Freightbroker" at line 2961 (`- [ ]`, first unprepped item at
  prep time); slug `freightbroker` appears exactly ONCE in
  TEMPLATES.md. Sibling shipped recreations in the same section for
  tone: haulage (Cargo), convey (Logistic), cargoly (Boxe), fleetly
  (Car Rental), highway (Autoroad), consignly (Foundation2),
  cargomate (Lagoon), drively/drivego (Carrent/Carrentals), haulio
  (Swiftmove, prepped only).
- **Name collision check:** "drayage" = 0 hits in `ls apps/`,
  `openspec/specs/` (3,149 folders on origin/main), `docs/templates/`,
  and TEMPLATES.md bold item names (case-insensitive), verified
  2026-10-01. Distinct from all shipped logistics names (haulage,
  haulio, convey, cargoly, cargomate, consignly, packwell, drively,
  drivego, highway, depot) and from the source name "Freightbroker".
- **Category:** Transportation (logistics / freight-broker marketing
  one-pager).

## Design tokens

(Canonical values captured 2026-10-01 directly from
`https://preview.colorlib.com/theme/freightbroker/css/style.css`.)

| Token | Value | Notes |
| --- | --- | --- |
| Brand orange | `#ff5f2a` | Top hex non-neutral (31 uses): buttons, eyebrows, logo block, active nav link, counter numbers, project title chips, news "Guides" labels |
| Navy (headings/topbar/chooseus/projects text) | `#03123b` | Section-title h2, `.header__top` bg, `.chooseus` bg, `.projects__item__text` bg |
| Footer navy | `#09122b` | Slightly darker than the section navy |
| Body gray | `#7d8184` | Primary paragraph text |
| Secondary gray | `#5e6164` | Services top text (`font-size: 18px; line-height: 28px`) |
| Muted gray | `#9caaaf` | Meta/small text |
| Dark text | `#353535` / `#111111` / `#404040` | Card/blog titles and text |
| Border gray | `#515768` | Form input borders on the dark section |
| Light divider | `#ebebeb` | Hairlines |
| Heading font | `"Oswald", sans-serif` | h2/h5 headings, eyebrows, buttons, nav — almost always `font-weight: 700` (headings) / 600 (chips), `text-transform: uppercase`, letter-spacing 2–4px |
| Body font | `"Quicksand", sans-serif` | Paragraphs, form text, meta — load both via Google Fonts `<link>` in `index.html` (400/500/600/700) |
| Button shape | parallelogram: `transform: skew(-30deg)` on the `<a>`, inner `<span>` counter-skewed `skew(30deg)` | `.primary-btn` / `.site-btn`: `padding: 14px 30px` (site-btn 14px 32px), bg `#ff5f2a`, label Oswald 700 uppercase, `letter-spacing: 2px`, white |
| Label chip shape | `skew(-32deg)` outer, `skew(30deg)` inner span | Project title chips (on `#03123b` panels) and news "Guides" labels (on photos) |
| Hero label | Oswald 700, `20px`, `letter-spacing: 4px`, uppercase, white | Eyebrow above hero h2 ("Freight broker") |
| Hero h2 | `52px` / `line-height: 70px`, Oswald 700, uppercase, white | `.hero` vertical padding `215px` top+bottom over the photo bg |
| Section title pattern | span: `#ff5f2a`, `14px`, 700, uppercase, `letter-spacing: 4px`, margin-bottom 10px; h2: `#03123b`, 700, `line-height: 48px`, uppercase | Used by EVERY section (eyebrow + navy Oswald heading) |
| Section spacing | `spad` = `padding-top: 100px` class on nearly all sections | Generous vertical rhythm |
| Header shadow | `0px 15px 60px rgba(3, 18, 59, 0.07)` | White navbar below the navy topbar |
| Counter number | `#ff5f2a`, Oswald 600, uppercase, inline; suffix `<strong>` `36px` 700 same color (e.g. "km") | `.counter__item__num h2` |
| ChooseUs band | bg `#03123b` dark navy; right-side image absolutely positioned `width: 50%`, `height: 565px`, `margin-top: -50px` | Feature icons float left of each h5/p pair |
| Request-form inputs | `height: 50px`, `border: 1px solid #515768`, bg `rgba(0, 0, 0, 0.3)`, placeholder text `#7d8184`, `padding-left: 20px` | Sits on the dark testimonial image background |
| Radii | essentially 0 / square corners (chips and buttons are skewed, not rounded) | Keep blocks square; avoid rounded-card aesthetics |
| Icons | source uses elegant-icons/Font Awesome PNGs | Use `lucide-react` (Plane, Ship, Train, Warehouse, ShieldCheck, Wallet, Truck, …) |
| Images | never copy assets | Deterministic placeholders `https://picsum.photos/seed/drayage-<n>/<w>/<h>` |

## Requirements

### Requirement: Page shell and global styling render

The app renders a single-page shell with the Google Fonts (Oswald +
Quicksand) loaded, Tailwind theme tokens carrying brand `#ff5f2a` /
navy `#03123b`, and section content composed in the canonical order:
topbar → header/nav → hero → services → counters → choose-us →
projects → testimonial + call-back form → latest news → footer.

#### Scenario: Shell renders

- Given the app is mounted
- Then the document loads Oswald and Quicksand via `<link>` in
  `index.html`
- And `src/index.css` defines the brand orange/navy in `@theme`
- And the page composes the eleven content sections in the canonical
  order listed above

### Requirement: Navy topbar renders with contact info, auth link, and social icons

A full-width navy `#03123b` strip sits above the navbar with: left —
phone "+44 20 7930 8205" and address "450 Strand, Charing Cross,
London"; right — "Register or Sign In" link and social icon links
(facebook, twitter, linkedin, pinterest — lucide icons, `aria-label`
each).

#### Scenario: Topbar renders

- Given the page is rendered
- Then the topbar shows the phone number and the London address
- And shows a "Register or Sign In" link
- And renders four social icon links with accessible labels

### Requirement: Header renders the skewed orange logo block and white nav

White navbar (shadowed) with: left — an orange `#ff5f2a` logo block
whose right edge is skewed (parallelogram, matching the button skew),
containing the two-tone wordmark ("FREIGHT" bold + "BROKER" lighter —
recolor/rename allowed as long as the two-tone skewed treatment is
kept; the recreation's brand wordmark is "DRAYAGE"); right — nav links
HOME (orange = active), SERVICES, ABOUT, PAGES (dropdown: About,
Services Details, Blog Details), BLOG, CONTACTS, plus a search icon
button. Dropdown toggles use button semantics with `aria-expanded`.

#### Scenario: Header renders

- Given the page is rendered
- Then the navbar shows the skewed orange logo block with a two-tone
  uppercase wordmark
- And renders the nav links HOME · SERVICES · ABOUT · PAGES · BLOG ·
  CONTACTS with HOME styled active in orange
- And the PAGES item exposes a dropdown with About / Services Details /
  Blog Details items
- And a search icon button with an accessible label is present

### Requirement: Hero renders the full-bleed photo, label, headline, and skewed CTA

Full-width photo background (dark overlay, picsum placeholder seed
`drayage-hero`) with left-aligned content: small white uppercase label
("Freight broker" — kind: brand/category eyebrow), large white Oswald
uppercase h2 (kind: "Awesome template for courier & delivery
services" — paraphrase the source typo away or keep, same content
kind), and a skewed orange primary button "View services" that scrolls
to the services section.

#### Scenario: Hero renders

- Given the page is rendered
- Then the hero shows a full-bleed background image with a dark overlay
- And renders the uppercase label, the large uppercase white headline,
  and the skewed orange CTA
- And the CTA label reads "View services"

### Requirement: Services section renders the eyebrow, split heading, and 2×2 service cards

White section: left column — orange eyebrow "What We do?" + navy
Oswald h2 "Welcome to the freight Broker we are the best." (uppercase);
right column — gray intro paragraph (kind: decades-of-experience blurb).
Below: 2×2 grid of service cards; each card = photo left (picsum
seed) + white text panel right with a lucide icon, orange uppercase
Oswald h5 title, and gray blurb. Canonical titles in order: **Air
Freight**, **Ship Freight**, **Railway Logistics**, **Ware Housing**.

#### Scenario: Services section renders

- Given the page is rendered
- Then the section shows the "What We do?" eyebrow and the navy
  uppercase h2 beside an intro paragraph
- And renders exactly four service cards titled Air Freight, Ship
  Freight, Railway Logistics, and Ware Housing
- And each card shows a photo, an icon, the orange title, and a blurb

### Requirement: Counters section renders four animated stats and a partner strip

White section: centered section-title (eyebrow "ABOUT US", h2 "OUR
CLIENTS & COUNTERS"). Four counter items in a row, each = icon +
large orange Oswald number + h5 label + gray blurb: **9123**
Employees in Team · **70102** "km" Kilometer Travel Weekly · **1254**
Worldwide Clients · **20254** Projects Done. Numbers animate (count-up
on mount/in-view; static fallback text renders the final value for
tests/SSR). Below: a partner-logo strip (5 grayscale placeholder
logos).

#### Scenario: Counters render

- Given the page is rendered
- Then four counter items render with the canonical values 9123,
  70102 km, 1254, and 20254 and their labels
- And each counter shows an icon and a blurb
- And a partner logo strip renders below the counters

#### Scenario: Counter animation completes

- Given the counters section enters the viewport
- When the count-up animation finishes
- Then each counter displays its canonical final value

### Requirement: Choose-us band renders dark navy with four benefits and a side image

Dark navy `#03123b` section: left — eyebrow "Our Benefit" (orange) +
white h2 "Why People Choose Us?" and a 2×2 grid of benefit items
(icon + white h5 + gray p): **Warehouse Storage** (order tendering
blurb) · **Security Cargo** (in-transit tracking blurb) · **Easy
Payment** (post-tendering blurb) · **Fast Delivery** (spot/drop
trailer blurb). Right — a warehouse/logistics image occupying ~50%
width, offset upward (`-50px` top margin) so it bleeds over the band
edge (picsum seed `drayage-benefit`).

#### Scenario: Choose-us band renders

- Given the page is rendered
- Then the section uses the navy background with white headings
- And renders the four benefit items Warehouse Storage, Security
  Cargo, Easy Payment, Fast Delivery
- And the right-side image bleeds above the section's top edge

### Requirement: Projects section renders skewed-chip project cards

White section: left — eyebrow "Our Projects" + navy h2 "What We Have
Done!"; right — skewed orange button "View All Projects". Below: a
3-column row of project cards; each = photo on top (picsum seed) +
navy `#03123b` text panel with the title as a skewed orange `#ff5f2a`
chip (uppercase white Oswald, absolutely positioned overlapping the
panel's top-left edge) + gray blurb. Canonical items in order:
**Freight Carrier**, **Freight Forwarder**, **Import-Export**,
**Agricultural Truck** (fourth may sit outside the visible 3-col row /
carousel in the source — implement all four).

#### Scenario: Projects section renders

- Given the page is rendered
- Then the section shows the "Our Projects" eyebrow, the navy h2, and
  the skewed "View All Projects" button
- And renders project cards titled Freight Carrier, Freight Forwarder,
  Import-Export, and Agricultural Truck
- And each card's title chip is skewed orange over a navy panel

### Requirement: Testimonial slider renders on the dark image background

Full-width dark image background (picsum seed `drayage-testimonial`,
dark overlay): left — eyebrow "Testimonials" + white h2 "Our Custormer
Reviews" (uppercase; typo is in the source — "Customer" is fine to
fix), and a quote slider: each item = orange/white quote glyph,
blockquote paragraph, author row (avatar pic + h5 name + role span).
Canonical slides: **Eric Carson** — CEO Of Colorlib → rename role to a
neutral brand ("CEO Of Drayage" or similar; never ship ColorLib in app
copy) and **Steve Smith** — CEO Of Colorlib (same rename). Slider
arrows (lucide chevrons) navigate slides; at least two slides.

#### Scenario: Testimonial slider renders

- Given the page is rendered
- Then the testimonial band shows the "Testimonials" eyebrow and
  "Our Customer Reviews"-style white h2 on the dark image background
- And renders two testimonial slides with quote text, avatar, name, and
  role
- And slider arrow buttons navigate between slides

### Requirement: Call-back form renders on the dark section with validation

The call-back form shares the dark testimonial background: eyebrow
"Contacts Us" + white h2 "Request A Call Back"; fields in a 2-column
grid — Your Name, Your Email, Your Phone, Services `<select>` (options:
Services, Services 1) — then full-width Message textarea and a skewed
orange "Submit Now" button. Inputs are dark translucent
(`rgba(0,0,0,0.3)` bg, `#515768` border, 50px height). Form uses
react-hook-form + zod: name/email/message required, email format
validated, submit blocked until valid; on valid submit show a success
message (no network call).

#### Scenario: Form renders

- Given the page is rendered
- Then the form shows the "Contacts Us" eyebrow, the "Request A Call
  Back" h2, the five controls in the canonical layout, and the skewed
  "Submit Now" button
- And inputs render with the dark translucent styling

#### Scenario: Submit blocked until valid

- Given the call-back form is empty
- When the user activates "Submit Now"
- Then no success state appears and per-field validation errors render

#### Scenario: Valid submit succeeds

- Given the user fills name, valid email, and message
- When the user activates "Submit Now"
- Then a success confirmation renders

### Requirement: Latest news grid renders three cards with skewed category chips

White section, centered title: eyebrow "Insight and Trends" + navy h2
"Latest news company". Three news cards: photo top with an orange
skewed "Guides" chip + uppercase white Oswald h5 title overlaid at the
bottom-left of the photo; below — meta list (by **Ryan Casey** · date
· comment count), gray excerpt, "Read More" link. Canonical title:
"Expert Tips for Managing Hypoglycemia Lorem ipsum dolor" (lorem
placeholder in source — same kind of blog title is fine, e.g. freight
tips; keep the Guides chip).

#### Scenario: News grid renders

- Given the page is rendered
- Then three news cards render with photo, skewed "Guides" chip,
  overlaid title, meta line, excerpt, and "Read More" link
- And the section title shows "Insight and Trends" / "Latest news
  company"

### Requirement: Footer renders link columns and Component Dock attribution

Footer bg `#09122b`: left — brand wordmark + short blurb paragraph;
three columns — **Quick links** (History, Our Staff, Our Partners,
Blog), **Services** (Air Shipping, Expert Staff, Ground Shipping,
Logistic Services), **Contacts** (450 Strand, Charing Cross, US ·
+44 20 7930 8205 · info.cololib@gmail.com → replace with a neutral
placeholder email, e.g. info@drayage.example). Bottom bar: current-
year copyright + "Made with Component Dock" linking
`https://www.componentdock.com/` (MANDATORY; replaces the source's
Colorlib attribution), plus "Client Login" and "Join Team" links.

#### Scenario: Footer renders

- Given the page is rendered
- Then the footer shows the blurb and the Quick links / Services /
  Contacts columns with the canonical items
- And the bottom bar shows the current-year copyright and a "Component
  Dock" link to https://www.componentdock.com/
- And no ColorLib attribution or string appears anywhere in the app

### Requirement: Accessibility (global semantics)

Semantic landmarks (`header`/`nav`/`main`/`footer`), one `h1` (hero
headline; other sections use `h2`), labelled form fields
(`<label htmlFor>`), `aria-expanded` on the nav dropdown and search
toggle, `aria-label` on icon-only buttons, focus-visible rings on
interactive elements.

#### Scenario: Page semantics

- Given the page is rendered
- Then landmarks and a single h1 exist
- And the call-back form's fields have associated labels
- And icon-only controls have accessible names

## Verification checklist

- [ ] `npm run verify:app drayage` passes: typecheck + lint + 100%
      coverage tests + build
- [ ] Google Fonts (Oswald + Quicksand) load via `index.html` `<link>`
- [ ] `@theme` carries `#ff5f2a` / `#03123b`; sections use tokens, not
      stray hexes
- [ ] All CTAs/chips use the skew(-30deg/-32deg) parallelogram
      treatment with counter-skewed labels; corners stay square
- [ ] Section order matches the source 1:1 (topbar → header → hero →
      services → counters → chooseus → projects → testimonial+form →
      news → footer)
- [ ] Canonical copy kinds present: 4 service cards, 4 counters
      (9123/70102 km/1254/20254), 4 benefits, 4 project items, 2
      testimonials, 5-field form, 3 news cards, footer columns
- [ ] All images are `picsum.photos/seed/drayage-*` placeholders; icons
      from `lucide-react`; zero copied assets
- [ ] No "colorlib"/"Colorlib" string anywhere in `apps/drayage`
      (grep); footer links Component Dock with the exact URL
- [ ] `public/CNAME` = `drayage.free.componentdock.com`; `homepage` =
      `https://drayage.free.componentdock.com`
- [ ] Form validation blocks invalid submit; valid submit shows success
- [ ] Slider arrows + nav dropdown keyboard-operable with
      `aria-expanded`
