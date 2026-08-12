# Template: Panache (Creative Agency Template)

## Purpose

Panache is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fancy" creative business website template (see TEMPLATES.md,
line 392 [Bootstrap section]; duplicate rows at line 1006 [Business], 2047
[Landing Page] and 2320 [One Page] — same source, ONE implementation; mark
EVERY copy `[x]` when done), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> **Naming note:** the natural name "fancy" is the ColorLib source name —
> never reuse it. The NEW name is **Panache** (single lowercase word,
> verified free in `apps/`, `openspec/specs/`, and `docs/templates/`).
> "Panache" captures the confident, stylish creative-agency feel of the
> source name while staying clearly original.

The reference is a bold creative-agency landing ("Fancy — Creative Agency
Template by Colorlib"): a fixed transparent navbar over a 900px animated
photo hero with a purple→green gradient brand system, a 3-card features box
straddling the hero bottom edge, an about split, a skills section with 4
gradient progress bars, a photo-background services section, an owl-carousel
testimonial, a photo CTA band, a 3-card blog grid, and a dark navy footer
with newsletter + socials. The signature look is the **gradient treatment**:
`#7450fe` (purple) → `#21d397` (green) appears on buttons, progress-bar
fills, quote marks, and link underlines everywhere.

## Design tokens (from `https://preview.colorlib.com/theme/fancy/`)

- **Brand gradient:** `linear-gradient(to right, #7450fe, #21d397)` —
  purple `#7450fe` → green `#21d397`. Used on: `.fancy-btn` hover fill and
  `.fancy-active` (solid) buttons, `.barfiller .fill` progress bars,
  `.testimonilas-content span.quote` (gradient text via
  `background-clip: text`), and link/underline accents.
- **Buttons (`.fancy-btn`):** 160×46px, uppercase 13px, font-weight 600,
  white text, `line-height: 44px`, padding `0 15px`. Gradient frame: 2px
  solid `#7450fe` border-left, 2px solid `#21d397` border-right, and 2px
  gradient top/bottom borders (background-image gradient lines at 0 0 and
  0 100%). Hover (and `.fancy-active`): fills with the brand gradient
  (white text stays). `.fancy-dark` variant: text `#232d37` (used on light
  sections — About "Read More", Skills "Work with us"); hover → white on
  gradient. Transitions ~1000ms (500ms fill).
- **Headings:** `"Poppins", sans-serif`, weight 500, color `#232d37` (dark
  navy), `line-height: 1.25`. Hero h2: 48px (24px mobile), white, weight
  700, `margin-bottom: 50px`. Section-heading h2: 38px, `margin-bottom:
15px`, with a 50×2px black underline line (`.section-heading-line`) and
  a sub-text paragraph below.
- **Body text:** `"Poppins", sans-serif`, 14px, color `#51545f`, `line-height:
2`, weight 400.
- **Icon accent:** `#2bc0a4` (teal) — top-feature h5 icons, video play icon
  (white circle bg + teal icon), footer social links, footer link hover,
  search-close button.
- **Section backgrounds:** white (skills, testimonials, blog); `bg-gray`
  `#f7f7f7` (top-features area + about); photo + dark overlay
  `rgba(4,8,29,0.7)` (hero, services, CTA — inline `background-image` with
  `bg-img bg-overlay` classes); footer `#131627` (`.fancy-bg-dark`).
- **Navbar:** fixed 100px tall, transparent → sticky `rgba(4,8,29,0.85)`
  after scroll. Brand "fancy" → "Panache": Poppins 700, 30px, white,
  lowercase, no image. Links Poppins 500 14px white, `padding: 0 25px`;
  "Home" active. Right: search icon + shop (bag) icon.
- **Top features box:** `box-shadow: 2px 3px 10px rgba(0,0,0,0.15)`,
  `border-radius: 2px`; 3 white cards, `padding: 45px` (15px mobile), 1px
  `#e5e5e5` divider `:after` between cards (last card none). The whole box
  is absolutely positioned straddling the hero bottom edge (desktop:
  centered on the boundary; mobile: `bottom: -100px` static).
- **Progress bars (`.barfiller`):** 8px tall, track `#e5e5e5`, fill = brand
  gradient; label above in h6 (dark `#232d37`, weight 600, 14px tip text).
- **Testimonials:** 170px circular photo (`border-radius: 50%`, white bg +
  `box-shadow: 0 1px 5px rgba(0,0,0,0.15)`), 120px `"Playfair Display"`
  quote mark with gradient text, quote h5 18px `#51545f` (`line-height:
30px`), name h6 with role span.
- **Footer:** bg `#131627`; widget h6 white 600; widget text `#b5aec4`
  (light purple-gray) weight 300; newsletter input 40px tall, `#2b2e3d`
  bg, radius 2px, 12px text, inline "Subscribe" button (padding `5px 15px`);
  link columns 50% width, hover → `#2bc0a4` with `margin-left` shift.
- **Fonts (Google Fonts `<link>` in `index.html`):** `"Poppins"` (400/500/
  600/700 — everything) and `"Playfair Display"` (serif, only the
  testimonial quote marks). The source pulls both from Google Fonts —
  recreate the same way.

## Design reference (replication findings)

- **Original:** ColorLib "Fancy" — creative agency website template
  (source: https://colorlib.com/wp/template/fancy/). Listed in TEMPLATES.md
  line 392 (Bootstrap section); duplicate rows at lines 1006 (Business),
  2047 (Landing Page) and 2320 (One Page) — same source, ONE implementation
  (line 392 is the claim row; mark ALL FOUR `[x]` after merge).
  Screenshot: `fancy-free-creative-business-website-template.jpg`
  (1200×933, viewed in the browser): dark-overlay hero photo of a smiling
  team in an office, centered white uppercase-headline hero ("Website
  Design, Brand Strategy, Digital Marketing with Stunning Results") with
  two CTA buttons — left SOLID purple "ABOUT US", right OUTLINE
  purple-border "GET A QUOTE" — plus a white serif-ish brand wordmark top
  left, white nav links (Home, Pages, Blog, Shop, Contact) with search +
  bag icons top right, and a white 3-column features box (Reliability
  leaf, Expertise gear, Quality diamond icons + lorem) overlapping the hero
  bottom. Flat, corporate, clean. The screenshot only shows the top of the
  page — the preview DOM is authoritative for the rest.
- **Live preview URL:** https://preview.colorlib.com/theme/fancy/
  (reachable, HTTP 200, 28.9 KB, title "Fancy - Creative Agency Template").
  HTML saved to `/tmp/fancy/preview.html`; stylesheet
  `https://preview.colorlib.com/theme/fancy/style.css` (22.6 KB) saved to
  `/tmp/fancy/style.css`; responsive stylesheet
  `https://preview.colorlib.com/theme/fancy/css/responsive/responsive.css`
  (4.4 KB) saved to `/tmp/fancy/responsive.css`; screenshot
  `/tmp/fancy/shot.jpg`. Plugin CSS: bootstrap, font-awesome (fa icons),
  barfiller (progress bars), owl.carousel — none needed in the recreation
  (icons → lucide-react, progress bars → divs, carousel → static render).
- **Preloader + search overlay:** `div#preloader` (loader spinner) and
  `div.fancy-search-form` (fixed white 100px bar, slides down from
  `top: -130px` when `.search-form-on`, with a 36px transparent input and a
  teal close button). Recreate the search overlay toggled by the navbar
  search icon (jsdom-safe); preloader optional (skip or a brief spinner).
- **Navbar:** `header.header_area#header` — `position: fixed; width: 100%;
height: 100px; z-index: 90`, transparent; sticky state adds
  `background-color: rgba(4, 8, 29, 0.85)` (`.is-sticky`). Inside: brand
  "fancy" → "Panache" (`a.navbar-brand`, Poppins 700 30px white) and
  `ul.navbar-nav` links: Home (`.active`, → `index.html`), Pages
  (dropdown: Home / Static Page / Contact), Work, Blog (`static-page.html`),
  Shop, Contact (`contact.html`). Right: `div.fancy-search-and-shop-area`
  with `#search-btn` (magnifier) + `#shop-btn` (bag) icon links. Mobile
  (<992px): Bootstrap navbar collapse → hamburger toggling a stacked
  panel (recreate with `aria-expanded` + focus ring; desktop + mobile
  links render duplicates — tests must use `getAllByRole`).
- **Hero:** `div.fancy-hero-area.bg-img.bg-overlay.animated-img` — 900px
  tall (600px mobile), inline `background-image: url(img/bg-img/hero-1.jpg)`
  (the source swaps hero-1/2/3.jpg; the 20s `animated-image` keyframes
  slowly pan background-position — optional nicety), overlay =
  `rgba(4,8,29,0.7)` flat. Centered content: `div.video-overview` — play
  link "Watch The Overview" (12px uppercase white; 30px white circle with
  teal `#2bc0a4` play icon + 2px white underline under the text); h2
  "Website Design, Brand Strategy, Digital Marketing with Stunning Results"
  (48px white 700); two buttons: `a.btn.fancy-btn.fancy-active` "About Us"
  (SOLID gradient) + `a.btn.fancy-btn` "Get a quote" (outline frame).
- **Top features:** `div.fancy-top-features-area.bg-gray` — the white box
  `div.fancy-top-features-content` is absolutely positioned (`bottom: 50%;
translateY(50%)`) so it straddles the hero/features boundary; THREE
  `col-md-4` white cards `div.single-top-feature` (`padding: 45px`): h5
  icon (teal `#2bc0a4`) + h5 title "Reliability" / "Expertise" / "Quality"
  - lorem paragraph; 1px `#e5e5e5` vertical divider between cards. Mobile:
    box goes static (`bottom: -100px`), cards stack.
- **About** `section.fancy-about-us-area.bg-gray` (`padding: 200px 0 100px`)
  — row: left `col-lg-6` `div.about-us-text`: h2 "We Are A Creative Digital
  Agency Focused on Growing Brands Online" (38px), two lorem paragraphs
  ("Ut enim ad minim veniam..." / "Duis aute irure dolor..."), and
  `a.btn.fancy-btn.fancy-dark` "Read More"; right `col-lg-6.col-xl-5
.ml-xl-auto` `div.about-us-thumb` (wow fadeInUp): image
  `img/bg-img/about-1.jpg`.
- **Skills** `section.fancy-skills-area.section-padding-200` (white) —
  absolute left thumb `div.skills-side-thumb` (`img/bg-img/skills.png`,
  `width: calc(50% - 15px)`, vertically centered; static + full-width on
  mobile); right `col-md-6.col-xl-5.ml-auto`: `div.section-heading` h2 "We
  Serve All Industries" + sub "We stay on top of our industry by being
  experts in yours. We measure our success by the results we drive for our
  clients."; then FOUR progress bars `div.single_progress_bar` (barfiller,
  `#bar1..bar4`): label h6 "Website Design" / "Brand Strategy" / "Digital
  Marketing" / "Website Development" + 8px bar with gradient fill; then
  `a.btn.fancy-btn.fancy-dark` "Work with us".
- **Services** `section.fancy-services-area.bg-img.bg-overlay.section-
padding-100-70` (inline `background-image: url(img/bg-img/hero-2.jpg)` +
  dark overlay, white heading) — `div.section-heading.heading-white`:
  "Our Services" + sub "We Are A Creative Digital Agency. Focused on
  Growing Brands Online"; THREE `col-md-4` `div.single-service-area.text-
center` cards: icon + h5 "Website Design" / "Website Development" /
  "Digital Marketing" + lorem paragraph ("The Fancy that recognize the
  talent and effort of the best web designers, developers and agencies in
  the world." → paraphrase; keep the "The Fancy..." lorem or drop the
  source name — paraphrase is safer).
- **Testimonials** `section.fancy-testimonials-area.section-padding-100`
  (white) — `div.testimonials-slides.owl-carousel` of THREE identical
  slides `div.single-testimonial.d-md-flex.align-items-center`: 170px
  circular photo (`img/clients-img/1.jpg`), `span.playfair-font.quote` " “
  " (120px gradient text), h5 quote (the long "I wanted to mention that
  these days..." praise — paraphrase but keep a long praise quote), h6
  "Aigars Silkalns - <span>CEO DeerCreative</span>". Render all three
  statically (or a single testimonial) — jsdom-safe.
- **CTA** `section.fancy-cta-area.bg-img.bg-overlay.section-padding-100`
  (inline `background-image: url(img/bg-img/hero-3.jpg)` + overlay) —
  `div.cta-content.text-center`: h2 "Ready To Discuss Your Project?" +
  p "There are many ways to contact us. You may drop us a line, give us a
  call or send an email, choose what suits you the most." + `a.btn.fancy-
btn` "Work with us" (outline frame).
- **Blog** `section.fancy-blog-area.section-padding-100-70` (white) —
  `div.section-heading.text-center`: "Latest News" + sub (same agency
  tagline); THREE `col-md-4` `div.single-blog-area` cards (wow fadeInUp,
  delays 0.2/0.35/0.5s): image `img/blog-img/blog-1..3.jpg`, `div.blog-
content`: h5 title link "We Create Experiences" / "Simple, Fast And Fun"
  / "Device Friendly" (→ `static-page.html`; no subpages in the recreation
  — keep it a link), lorem paragraph, "Learn More" link.
- **Footer** `footer.fancy-footer-area.fancy-bg-dark` (`#131627`,
  `.footer-content.section-padding-80-50`) — FOUR `col-lg-3` widgets:
  1. "Our Newsletter" (h6) — p "Subscribe to our mailing list to get the
     updates to your email inbox." + form (40px `#2b2e3d` input + inline
     "Subscribe" button) + `div.footer-social-widegt` FIVE teal social icon
     links (facebook, twitter, google-plus, instagram, pinterest — fa →
     inline SVGs; hover purple `#7450fe`).
  2. "Twitter Feed" (h6) — tweet paragraph ("With the popularity of podcast
     shows growing with each year, you might consider starting it yourself
     as well.") + "About 20 hours ago" span.
  3. "Link Categories" (h6) — 2-column links: Agency Home · Studio About ·
     Studio Services · Blogs · Work · Shop · Privacy.
  4. "Contact Us" (h6) — phone "1 (800) 686-6688" · email
     "info.deercreative@gmail.com" · address "40 Baria Sreet 133/2 NewYork
     City, US" · "Open hours: 8.00-18.00 Mon-Fri".
     Bottom bar `div.footer-copywrite-area`: left "Copyright © <year> All
     rights reserved | This template is made with ❤ by <ColorLib>" — reword
     for Panache with the MANDATORY Component Dock link
     (`https://www.componentdock.com/`), no ColorLib credit; right
     `div.footer-nav` links: Disclaimer · Privacy · Advertisement · Contact us.

## Requirements

### Requirement: Fixed transparent navbar with brand, links and icons

The system SHALL render a fixed navbar over the hero with a brand,
uppercase-style links, search/shop icons and a mobile menu.

#### Scenario: Desktop navbar

- **GIVEN** the Panache app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be fixed at the top, transparent over the hero,
  and gain a dark `rgba(4,8,29,0.85)` background after scrolling
- **AND** the brand SHALL read "Panache" (Poppins 700, 30px, white,
  lowercase)
- **AND** white links SHALL follow: Home (active) · Pages · Work · Blog ·
  Shop · Contact
- **AND** a search icon and a shop/bag icon SHALL sit at the right end of
  the navbar

#### Scenario: Search overlay

- **GIVEN** the navbar search icon is rendered
- **WHEN** it is clicked
- **THEN** a white search bar SHALL slide down from the top with a large
  transparent text input and a teal close button
- **AND** clicking the close button SHALL hide the overlay again

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** a hamburger button SHALL open a stacked menu panel with
  `aria-expanded` reflecting the open state and a close control

### Requirement: Full-height animated photo hero

The system SHALL render a 900px photo hero with a dark overlay, video
link and two CTAs.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL be 900px tall (600px mobile) with a full-bleed office
  photo background and a dark `rgba(4,8,29,0.7)` overlay
- **AND** a "Watch The Overview" play link SHALL show a white circle with a
  teal `#2bc0a4` play icon and an underline
- **AND** the h2 headline SHALL read "Website Design, Brand Strategy,
  Digital Marketing with Stunning Results" (48px, white, bold)
- **AND** two buttons SHALL follow: "About Us" (solid brand-gradient fill)
  and "Get a quote" (gradient outline frame)

### Requirement: Top features box straddling the hero

The system SHALL render a white three-card features box overlapping the
hero bottom edge on a light-grey background.

#### Scenario: Feature cards

- **GIVEN** the top-features area is rendered
- **WHEN** it loads
- **THEN** the white box SHALL straddle the hero/features boundary (static
  below the hero on mobile)
- **AND** three cards SHALL show a teal icon plus title "Reliability" /
  "Expertise" / "Quality" with a lorem paragraph each
- **AND** a 1px `#e5e5e5` divider SHALL separate the cards (none after the
  last)

### Requirement: About split with CTA

The system SHALL render an about section with text, paragraphs and a
dark-outline CTA on the left and a photo on the right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** the left column SHALL show the h2 "We Are A Creative Digital
  Agency Focused on Growing Brands Online", two paragraphs, and a
  dark-text "Read More" button
- **AND** the right column SHALL show a photo with a fade-in animation

### Requirement: Skills section with progress bars

The system SHALL render a skills section with four gradient progress bars.

#### Scenario: Skills content

- **GIVEN** the skills section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "We Serve All Industries" with the
  sub-text "We stay on top of our industry by being experts in yours..."
- **AND** four labelled progress bars SHALL follow — Website Design ·
  Brand Strategy · Digital Marketing · Website Development — each with an
  8px track and a purple→green gradient fill
- **AND** a dark-text "Work with us" button SHALL close the section
- **AND** a skills illustration SHALL sit on the left (above the text on
  mobile)

### Requirement: Photo-background services section

The system SHALL render a services section over a photo with a dark
overlay and three icon cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Our Services" (white) with the agency
  tagline sub-text
- **AND** three centered cards SHALL follow — Website Design · Website
  Development · Digital Marketing — each with an icon, a title and a
  description paragraph

### Requirement: Testimonials carousel

The system SHALL render a testimonials section with a circular photo,
gradient quote mark and long praise quote.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** it loads
- **THEN** each testimonial SHALL show a 170px circular member photo, a
  large serif quote mark in the brand gradient, a praise quote paragraph,
  and a name line "Aigars Silkalns - CEO DeerCreative"
- **AND** the section SHALL render at least one testimonial (all three
  source slides are identical — one static slide is acceptable)

### Requirement: Photo CTA band

The system SHALL render a full-width CTA section over a photo with an
outline button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Ready To Discuss Your Project?" with
  the contact hint paragraph
- **AND** a "Work with us" outline button SHALL follow

### Requirement: Blog grid

The system SHALL render a blog section with three article cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Latest News" with the agency tagline
- **AND** three cards SHALL follow, each with a photo, a title link ("We
  Create Experiences" · "Simple, Fast And Fun" · "Device Friendly"), a
  description and a "Learn More" link

### Requirement: Dark footer with widgets and copyright

The system SHALL render a dark navy footer with four widget columns,
socials and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL show an "Our Newsletter" column (blurb + email input
  with "Subscribe" button + five teal social icons — Facebook, Twitter,
  Google+, Instagram, Pinterest as inline SVGs)
- **AND** a "Twitter Feed" column with a tweet and "About 20 hours ago"
- **AND** a "Link Categories" column (Agency Home · Studio About · Studio
  Services · Blogs · Work · Shop · Privacy)
- **AND** a "Contact Us" column (phone "1 (800) 686-6688" · email
  "info.deercreative@gmail.com" · address "40 Baria Sreet 133/2 NewYork
  City, US" · "Open hours: 8.00-18.00 Mon-Fri")

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** the bottom bar SHALL read "© 2026 Panache. All rights reserved."
  with a "Made with ❤" credit line linking to
  `https://www.componentdock.com/` (mandatory, no ColorLib credit)
- **AND** footer nav links SHALL follow: Disclaimer · Privacy ·
  Advertisement · Contact us

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Panache app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar (banner landmark), hero +
  top-features + about + skills + services + testimonials + CTA + blog
  (main landmark) and the footer (contentinfo landmark)
- **AND** the document title SHALL be "Panache — Creative Agency Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (navbar
  collapses to the mobile menu, hero text scales to 24px, features box
  drops below the hero, skills thumb stacks, grids collapse to 1 column,
  footer columns stack)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/panache`
      (`scripts/verify-app.sh panache` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: fixed transparent navbar (brand "Panache", white
      links + search/shop icons, dark sticky bg, mobile hamburger panel,
      search overlay), hero (900px photo + dark overlay + "Watch The
      Overview" play link + 48px white headline + "About Us" solid +
      "Get a quote" outline), top-features (white 3-card box straddling
      the hero, teal icons, `#e5e5e5` dividers), about (h2 + 2 paragraphs + dark "Read More" + right photo), skills (heading + sub + 4
      gradient progress bars + "Work with us" + left illustration),
      services (photo bg + overlay + "Our Services" + 3 icon cards),
      testimonials (170px circular photo + gradient Playfair quote mark +
      praise quote + name), CTA (photo bg + "Ready To Discuss Your
      Project?" + "Work with us"), blog (3 cards with title links +
      "Learn More"), footer (`#131627`, Newsletter + Twitter Feed + Link
      Categories + Contact Us widgets, teal socials, Component Dock
      credit) match the Fancy preview 1:1.
- [ ] Design tokens in `@theme`: brand purple `#7450fe` + green `#21d397`
      (gradient), icon teal `#2bc0a4`, heading navy `#232d37`, body
      `#51545f`, light-grey `#f7f7f7`, overlay `rgba(4,8,29,0.7)`, footer
      `#131627` (widget text `#b5aec4`, input bg `#2b2e3d`); Poppins +
      Playfair Display via Google Fonts `<link>` in `index.html`.
- [ ] Buttons: 160×46px, uppercase 13px/600, gradient frame (2px purple
      left + 2px green right + gradient top/bottom lines), hover/active
      fills with the brand gradient; `.fancy-dark` variant for light
      sections.
- [ ] Placeholder images use `picsum.photos/seed/panache-<n>/<w>/<h>` (3
      hero/photo backgrounds, about photo, skills illustration, 3 blog
      photos, testimonial portrait); icons from lucide-react (leaf, cog,
      gem, palette/pen-tool, code, megaphone, play, search, shopping-bag,
      menu, x, mail, phone, map-pin, clock, twitter/facebook/instagram/
      pinterest as inline SVGs — lucide has NO brand icons); no ColorLib
      assets copied.
- [ ] PR description states source template (ColorLib "Fancy"), preview
      URL (https://preview.colorlib.com/theme/fancy/), design tokens, and
      what differs (name, placeholder images, paraphrased copy, no
      subpages, single page only).
