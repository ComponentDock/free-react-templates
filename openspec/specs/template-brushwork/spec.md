# Template: Brushwork (Designer portfolio / creative agency)

## Purpose

Brushwork is a single-page designer portfolio / creative-agency template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Snipp" website template design (see TEMPLATES.md, line 500),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Snipp" — creative designer portfolio landing page:
  gradient hero with particle-network overlay, overlapping masonry portfolio
  grid with hover reveals, about blurb with CTA, 4 icon service cards,
  gradient newsletter parallax band, works gallery (Illustration /
  Application / Web Design), light testimonial carousel, blue animated
  counters, blog cards, and a dark multi-column footer (source:
  https://colorlib.com/wp/template/snipp/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/snipp/`
  (HTTP 200, ~36KB HTML). DOM + `css/style.css` (68KB, Bootstrap 4-based)
  extracted and analyzed; tokens below come from that stylesheet. Screenshot
  `snipp-free-template.jpg` (1200×946) viewed in browser.
- **Visual design (from screenshot + DOM):** warm pastel gradient aesthetic.
  The dominant visual is a full-height hero background gradient from soft
  pink `#ee76ad` to peach/orange `#efac78` (`linear-gradient(45deg, #ee76ad
0%, #efac78 100%)`, opacity 0.97) with a subtle particle network (dots +
  connecting lines) overlay. Hero text is centered white: h1 "We love to
  create **Beautiful** websites" (light weight 200 with "Beautiful" bold
  weight 800), pill-shaped outline "Get in touch" button (white 1px border,
  radius 30px; hover: white bg, dark `#404044` text). The portfolio grid
  below overlaps the hero (`margin-top: -250px`) and uses a masonry-style
  layout of mixed column widths (3/6/4/8/4/3) with hover-reveal white bars
  (title + "Website" tag + avatar + "John Bruce / Designer"). Services use
  hexagonal-ish icon tiles in 4 pastel tints. Newsletter + counters keep the
  warm/gradient theme; counters sit on solid sky blue `#29bae4`. Footer is
  dark `#404044`-family. Typography: **Work Sans** everywhere (h1 55px/200,
  strong 800; body 16px/400; navbar-brand 700 uppercase 20px).
- **Section order (1:1) from the DOM:**
  1. Navbar (`div.ftco-navbar-light`): brand "Snipp." (uppercase, weight 700,
     20px) left; links Home, About, Services, Portfolio (dropdown: Portfolio,
     Portfolio Single), Case Studies, Contact; right-aligned "Get in touch"
     CTA button; hamburger toggle below lg (original collapses).
  2. Hero (`div.hero-wrap.js-fullheight`): full-viewport height; overlay =
     the pink→peach 45° gradient (opacity .97) + `#particles-js` canvas
     (particle network dots/lines — recreate as a subtle CSS/SVG dot pattern
     or static SVG network, no external lib needed); centered content: h1
     "We love to create" + strong "Beautiful" + "websites", subtext paragraph
     (optional per original), pill outline "Get in touch" button
     (`.slider-text .btn-primary`: 1px solid rgba(255,255,255,.4), radius
     30px; hover bg #fff, color #404044).
  3. Featured portfolio (`section.ftco-section-featured`, margin-top -250px
     overlapping hero bottom): 6 portfolio cards in a masonry grid (mixed
     col widths): The Verge, Racks, Zendesk, Curator, Tasty, Voyage — each a
     background image with hover overlay (white bottom bar `.text` slides up,
     title + tag "Website"; top bar `.text-1` with avatar + "John Bruce" /
     "Designer"). Then an about blurb row: "UI/UX, visual, Web designer with
     more than 12 years of experience in designing websites and mobile apps."
     - "Get in touch" button.
  4. Services (`section.ftco-section`): subheading "Our Services" + h2 "Web &
     Mobile app design, bring your ideas to life" (38px, weight 700) + 4
     cards with pastel icon tiles (hexagonal with triangle notches via
     `:before/:after`): Strategy (lightbulb, tile `#fce7f1`/icon `#ee76ad`),
     Design (laptop, tile `#fdf2ea`/icon `#efac78`), Development (gear, tile
     `#def4fb`/icon `#29bae4`), Help & Supports (chat, tile `#ebfdf4`/icon
     `#79efb4`); each card: icon tile + h3 title + blurb.
  5. Newsletter (`section.ftco-section-parallax`): same pink→peach gradient
     background; centered white: h2 "Subcribe to our Newsletter", blurb, and
     pill email input (`.subscribe-form`: transparent bg, 1px
     rgba(255,255,255,.7) border, radius 30px, white placeholder text) with a
     paper-plane icon on the right (the original has no separate submit
     button — the icon acts as the submit affordance).
  6. Works (`section.ftco-section`): subheading "Works" + h2 "View our works
     below to see our design and way of development." + 3 work cards
     (Illustration, Application, Web Design — each: image, title, blurb,
     "View Portfolio" link) + "View All Projects" link below the grid.
  7. Testimonials (`section.ftco-section.testimony-section.bg-light`):
     subheading "Customer Says" + h2 "Our satisfied customer says" + carousel
     (owl-carousel in original) of 4+ quote slides: quote text + author
     (e.g. "Dennis Green") + role (Marketing Manager / Interface Designer /
     UI Designer); prev/next controls.
  8. Counters (`section.ftco-section.ftco-counter`, bg solid `#29bae4`):
     subheading "Our achievements" (white) + 3 counters (count-up animation
     via `data-number` in original): 400 "Customers are satisfied with our
     professional support", 1000 "Amazing preset options to be mixed and
     combined", 8000 "Average response time on live chat support channel".
  9. Blog (`section.ftco-section.bg-light`): subheading "Blog" + h2 "Recent
     Blog" + 3 blog cards: meta (date "July 12, 2018" / Admin / 3 comments),
     title ("Even the all-powerful Pointing has no control about the blind
     texts"), "Read More" link.
  10. Footer (`footer.ftco-footer.ftco-bg-dark.ftco-section`): brand
      "Snipp." + blurb "Far far away, behind the word mountains..."; "Quick
      Links" column (Home, Case studies, Services, Portfolio, About,
      Contact); "Contact Information" column (address "198 West 21th Street,
      Suite 721 New York NY 10016", phone "+ 1235 2355 98", email
      "info@yoursite.com"); social icons (facebook, twitter, instagram,
      heart/link); copyright bar "Copyright © <year> All rights reserved"
      (paraphrase the "made with ♥" credit per repo conventions, drop the
      Colorlib attribution).
- **Recreation decisions:** new name **Brushwork** (evokes a designer's
  craft; single word, no collision with `apps/`, `openspec/specs/`, or
  `docs/templates/`). Brand renders as a text wordmark "Brushwork."
  (original brand is also text). Hero particle network: static inline SVG /
  CSS radial-gradient dot pattern (no canvas lib — the particles-js effect
  is decorative). Portfolio masonry grid: CSS grid with explicit row spans or
  mixed column widths to mimic the 3/6/4/8 layout; hover reveals the white
  info bar. Testimonial carousel has prev/next controls. Counters animate
  count-up on scroll into view (IntersectionObserver) with static values as
  fallback. Newsletter form: email input + paper-plane submit button that
  validates (zod) and shows success state. Social icons are inline SVGs
  (lucide-react removed brand icons). Dark-mode `.dark` variants per repo
  conventions.

Brushwork lives in `apps/brushwork` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Design tokens (extracted from `css/style.css`)

- Fonts: **Work Sans** (Google Fonts, weights 100–800 imported) — body font;
  `h1` 55px weight 200 with `strong` weight 800; `h2` 38px weight 700;
  `.navbar-brand` 700, uppercase, 20px; `.heading-section .subheading` 13px
  uppercase letter-spacing 2px.
- Brand gradient: **`linear-gradient(45deg, #ee76ad 0%, #efac78 100%)`** —
  hero overlay (opacity .97) and newsletter parallax band. Pink `#ee76ad`
  (start) + peach `#efac78` (end) are the two brand accents.
- Sky blue: **`#29bae4`** — counters section background; also
  Development-icon color and default Bootstrap `#78d5ef`-adjacent accent
  (`#78d5ef` = `.btn-primary` default).
- Dark text: **`#404044`** — navbar link color on scroll, button hover text,
  footer family base.
- Service tile tints (bg / icon color): color-1 `#fce7f1` / `#ee76ad`
  (Strategy), color-2 `#fdf2ea` / `#efac78` (Design), color-3 `#def4fb` /
  `#29bae4` (Development), color-4 `#ebfdf4` / `#79efb4` (Help & Supports).
  Tiles are hexagonal-ish: rounded square with triangle notches top/bottom
  (`:before/:after` borders).
- Muted text: `#c0c0c3` (tags/positions), `rgba(0,0,0,.2)` subheadings.
- Section surfaces: white `#fff`; light gray `#f8f9fa` / `#f7f7f7` /
  `#f4f4f5` (`bg-light` sections: testimonials, blog); counter blue
  `#29bae4`; footer dark `#404044`-family (`.ftco-bg-dark`).
- Buttons: pill radius **30px**. Hero `.btn-primary`: transparent bg, 1px
  solid `rgba(255,255,255,.4)` border, white text; hover bg `#fff`, color
  `#404044`. Newsletter `.btn.btn-primary` (if a separate button is used):
  bg `#fce7f1`, 2px border `#fce7f1`, color `#ee76ad`; hover transparent +
  `#ee76ad` border/text. Default Bootstrap `.btn-primary` is `#78d5ef` /
  hover `#56caeb`.
- Newsletter input: transparent bg, 1px solid `rgba(255,255,255,.7)`, radius
  30px, white placeholder (rgba .8), paper-plane icon absolutely positioned
  right (20px).
- Layout rhythm: hero full-viewport; `.ftco-section-featured` `margin-top:
-250px` (overlaps hero), `padding-bottom: 7em`; sections `padding: 7em 0`
  (`.ftco-section`); counter/parallax `padding: 10em 0`; portfolio cards use
  Bootstrap col widths 3/6/4/8 mixed into a masonry look; `.block-3`
  (about-style split rows) 50/50 at md+.

## Requirements

### Requirement: Header

The system SHALL render a navbar with a wordmark, navigation links with a
portfolio dropdown, and a CTA button.

#### Scenario: Navbar content

- **GIVEN** the Brushwork page is rendered on a desktop viewport
- **WHEN** the header is displayed
- **THEN** it SHALL show the "Brushwork." wordmark on the left
- **AND** it SHALL show the links Home, About, Services, Portfolio, Case
  Studies, and Contact
- **AND** the Portfolio link SHALL expand a dropdown with Portfolio and
  Portfolio Single
- **AND** it SHALL show a "Get in touch" button on the right
- **AND** the Home link SHALL be marked active

#### Scenario: Mobile toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the collapsed menu SHALL expand showing the nav links and the
  CTA button
- **AND** the toggle SHALL expose `aria-expanded` and an accessible label

### Requirement: Hero

The system SHALL render a full-viewport hero on the brand gradient with a
particle pattern, headline, and CTA.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on the pink-to-peach brand gradient background
- **AND** it SHALL show a subtle particle/dot pattern overlay
- **AND** it SHALL show the centered white headline "We love to create
  Beautiful websites" with "Beautiful" emphasized
- **AND** it SHALL show a pill "Get in touch" button with a translucent
  white border

### Requirement: Featured portfolio

The system SHALL render a masonry portfolio grid that overlaps the hero,
with hover-reveal card info.

#### Scenario: Portfolio grid

- **GIVEN** the featured portfolio section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show six portfolio cards (The Verge, Racks, Zendesk,
  Curator, Tasty, Voyage)
- **AND** the section SHALL overlap the hero bottom (negative top margin)
- **AND** each card SHALL show a background image, a title, a "Website" tag,
  and a designer credit (e.g. "John Bruce" / "Designer")

#### Scenario: Card hover

- **GIVEN** a portfolio card is displayed
- **WHEN** the user hovers or focuses the card
- **THEN** a white info bar SHALL reveal with the title, tag, and designer
  credit

#### Scenario: About blurb

- **GIVEN** the portfolio section is displayed
- **WHEN** it is scrolled to its end
- **THEN** it SHALL show the blurb "UI/UX, visual, Web designer with more
  than 12 years of experience in designing websites and mobile apps."
- **AND** it SHALL show a "Get in touch" button

### Requirement: Services

The system SHALL render four service cards with pastel icon tiles.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the subheading "Our Services" and the heading "Web &
  Mobile app design, bring your ideas to life"
- **AND** it SHALL show four cards: Strategy, Design, Development, and Help &
  Supports
- **AND** each card SHALL show a pastel icon tile, a title, and a short
  blurb
- **AND** each tile SHALL use its tint pair (Strategy pink, Design peach,
  Development blue, Help & Supports green)

### Requirement: Newsletter

The system SHALL render a newsletter band on the brand gradient with an
email input.

#### Scenario: Newsletter content

- **GIVEN** the newsletter section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on the brand gradient background
- **AND** it SHALL show the heading "Subcribe to our Newsletter" and a short
  blurb
- **AND** it SHALL show a pill email input with a paper-plane submit icon

#### Scenario: Email validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid email
- **THEN** the form SHALL show a validation error and SHALL NOT submit
- **WHEN** the user submits a valid email
- **THEN** the form SHALL show a success confirmation

### Requirement: Works

The system SHALL render a works gallery with three project cards and a
gallery link.

#### Scenario: Works content

- **GIVEN** the works section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the subheading "Works" and the heading "View our
  works below to see our design and way of development."
- **AND** it SHALL show three cards: Illustration, Application, and Web
  Design
- **AND** each card SHALL show an image, a title, a blurb, and a "View
  Portfolio" link
- **AND** it SHALL show a "View All Projects" link below the grid

### Requirement: Testimonials

The system SHALL render a testimonial carousel on a light background with
author quotes and navigation.

#### Scenario: Carousel

- **GIVEN** the testimonial section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the subheading "Customer Says" and the heading "Our
  satisfied customer says"
- **AND** it SHALL show one quote with author name and role at a time
- **AND** it SHALL provide Previous and Next controls to cycle quotes

### Requirement: Counters

The system SHALL render three animated stat counters on a blue background.

#### Scenario: Stats row

- **GIVEN** the counters section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on the solid sky-blue `#29bae4` background
- **AND** it SHALL show the subheading "Our achievements"
- **AND** it SHALL show the values 400, 1000, and 8000 with their labels
  (customers satisfied, preset options, response time)
- **AND** the values SHALL count up when scrolled into view

### Requirement: Blog

The system SHALL render a blog section with three post cards.

#### Scenario: Post cards

- **GIVEN** the blog section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the subheading "Blog" and the heading "Recent Blog"
- **AND** it SHALL show three cards, each with a meta line (date / Admin /
  comments), a title link, and a "Read More" link

### Requirement: Footer

The system SHALL render a dark multi-column footer with brand, quick links,
contact info, socials, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the "Brushwork." wordmark and a blurb
- **AND** it SHALL show a "Quick Links" column (Home, Case studies, Services,
  Portfolio, About, Contact)
- **AND** it SHALL show a "Contact Information" column with an address, a
  phone number, and an email
- **AND** it SHALL show social icon links
- **AND** it SHALL show a copyright bar with the current year and a credit
  line that links to https://www.componentdock.com/ ("Component Dock")

## Verification checklist

- [ ] `npm run verify:app brushwork` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (header → hero → featured
      portfolio → services → newsletter → works → testimonials → counters →
      blog → footer)
- [ ] Tokens wired through `@theme`: brand gradient (`#ee76ad` → `#efac78`),
      sky blue `#29bae4`, dark text `#404044`, tile tints `#fce7f1` /
      `#fdf2ea` / `#def4fb` / `#ebfdf4` with icon colors `#ee76ad` /
      `#efac78` / `#29bae4` / `#79efb4`, muted `#c0c0c3`
- [ ] Work Sans loaded via Google Fonts `<link>` in `index.html`
- [ ] Hero uses the 45° brand gradient with a subtle particle/dot pattern
      overlay and pill outline CTA
- [ ] Featured portfolio overlaps the hero (`-mt-*`), masonry-ish grid,
      hover-reveal info bars
- [ ] Counters on `#29bae4` with count-up on scroll (static fallback)
- [ ] Newsletter pill input + paper-plane submit with zod validation and
      success state; a11y labels and focus rings
- [ ] Placeholder images use `https://picsum.photos/seed/brushwork-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Footer copyright bar credits Component Dock
      (https://www.componentdock.com/)
- [ ] Mobile navbar toggle with aria-expanded; social icons are inline SVGs
- [ ] Dark-mode toggle present per repo conventions (dark: variants)
- [ ] README status table regenerated after merge (`npm run readme:status`)
