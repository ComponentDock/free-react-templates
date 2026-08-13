# Template: Dojoly (Martial Arts School)

## Purpose

Dojoly is a martial-arts school website in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Nova" template
design (see TEMPLATES.md — appears 2×: line 608 (Bootstrap 5) and line 1869;
both rows point to the same source and are `- [ ]` — one prep covers both,
mark ALL `[x]` when done; verified with `grep -c 'wp/template/nova/'
TEMPLATES.md` = 2), built under a DIFFERENT name (Dojoly — "dojo" + the
repo's common `-ly` suffix, evoking a martial-arts school; single lowercase
word, no collision with `apps/` or existing spec folders; verified: no
`apps/dojoly`, no `template-dojoly` spec, no `docs/templates/dojoly`, no grep
hit in `package-lock.json` or any app/spec/docs file) per the monorepo
naming mandate (never reuse the ColorLib source name — "nova" is ALSO taken
as an app name by the Colorlib Error 404 19 recreation, so it is doubly
unusable), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/nova/ (Bootstrap 5 category —
page title "Nova — Free Bootstrap 5 Website Template by Colorlib"; the
theme is a karate / martial-arts school for kids).

Preview URL: https://preview.colorlib.com/theme/nova/ (HTTP 200, ~31 KB
HTML + `css/style.css` ~61 KB fetched and parsed for tokens — the preview
slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Nova" — a KIDS MARTIAL ARTS / karate school
  landing page. Signature look: a thin 5-color top bar (teal, orange, dark
  teal, indigo, red), a transparent nav floating over a full-height hero
  photo of children in karate gi, a vivid brand red `#ec0101` on ALL
  headings + buttons + links, a very pale red-tinted page background
  `#fef7f7`, and distinctive DIAGONAL rounded corners (200px radius
  `border-bottom-right-radius`) on teacher cards and the section image.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/nova/
  (HTTP 200, ~31 KB HTML; `css/style.css` ~61 KB parsed for tokens).
  Stack: Bootstrap 5 + tiny-slider (testimonial carousel) + glightbox
  (video lightbox) + AOS (fade-up scroll animations) + icomoon + flaticon
  icon fonts — NOT Tailwind. All interactivity must be recreated
  client-side in React: dropdown menu (click state), mobile burger panel,
  video lightbox modal, testimonial carousel (index cycling + prev/next
  controls), optional fade-up on scroll.
- **Screenshot note:** `nova-free-template.jpg` (1200×946, viewed in the
  browser): thin multi-colored strip at the very top; white "Nova" logo +
  white nav links over the hero; hero = centered UPPERCASE white headline
  "IT'S NEVER TOO LATE TO DEFEND YOURSELF" over a photo of five children in
  white karate uniforms (green/orange/white/blue belts) with a circular
  play button + "Watch video"; below the fold a split section — left:
  "ENCOURAGE YOUR KIDS TO LEARN" in red/orange caps, body copy, a bulleted
  list (Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, Basic Defense) and
  decorative translucent circles bottom-left; right: photo of four smiling
  kids in karate uniforms. Overall pale white/pink background.

## Design tokens (from preview stylesheet `css/style.css`)

- **Fonts:** `"Montserrat", sans-serif` for ALL headings + `.logo`
  (weights 700 for h1/logo, bold for card titles); `"Open Sans", sans-serif`
  for body (base 14px, `overflow-x: hidden`). Google Fonts `<link>` in
  `index.html`.
- **Brand red (signature, everywhere):** `#ec0101` — `.btn-primary` fill,
  `.text-primary` (all section h2s), `.custom-list` bullet dots, footer
  links, post-title hover, active nav link. Hover/darker variants:
  `#c90101` (btn hover), `#bd0101`; bright hover red `#fe2222` (social
  icon hover). Put in `@theme` as `--color-brand` (+ `--color-brand-dark`,
  `--color-brand-bright`).
- **Page background:** `#fef7f7` (very pale red-tinted white) on `body` —
  all sections sit on it (no alternating dark bands).
- **Text:** `#212529` (body/dark), `#6c757d` (muted), `#888` (footer body
  text), `#ccc` (blog post meta).
- **Colored top bar (`.colored-line`):** 5 stripes, each 20% width × 10px
  tall: `#007f74`, `#fe5802`, `#025e69`, `#464f9e`, `#ec0101`.
- **Teacher card pastel backgrounds (`bg-color-1..4`):** `#F8EFD4` (cream),
  `#e6e7f6` (lavender), `#ddf8f6` (mint), `#f9e4e4` (pink) — 4 distinct
  pastels, one per teacher card (also reused by testimonial slides).
- **Buttons:** `.btn-primary` = `#ec0101` fill, white text, hover `#c90101`,
  radius `0.25rem` (4px — slight rounding, NOT pills), Bootstrap padding
  `0.375rem 0.75rem`. Text links ("Learn More", "Read more", post titles):
  black → red `#ec0101` on hover.
- **Hero:** `100vh` (min-height 700px) background photo (`hero_1.jpg`) +
  overlay `rgba(0,0,0,0.4)`; h1 `.heading` 50px/700/UPPERCASE/white (DOM
  text is mixed case "It's Never Too Late to Defend yourself" — CSS
  uppercases it; tests query the RAW text); sub-heading
  `rgba(255,255,255,0.5)` (class `subheaidng` — source typo, harmless);
  play button 80×80 circle, `2px solid #fff` border, 50% radius, 30px icon;
  caption 18px white.
- **Shapes (signature):** `.teacher` card padding `40px 40px 80px`,
  `border-radius: 70px` + `border-bottom-right-radius: 200px`; teacher
  photo 100px circle, `margin-bottom: 30px`; `.sec-1 .img-wrap img`
  `border-top-left-radius: 200px` + `border-bottom-right-radius: 200px`,
  img-wrap absolutely positioned `right: -20px; max-width: 700px`; social
  icons 30px circles `#777` bg → `#fe2222` hover; `.section` padding
  `7rem` top/bottom.
- **Section headings:** centered block per section = small divider image
  (karate-divider.png → tiny placeholder, ~2 line-height, centered, mb-2) +
  `h2.heading.text-primary` (Montserrat, bootstrap 2rem, red).
- **Footer:** transparent bg (page `#fef7f7` shows through), 14px `#888`;
  widget `h3` 16px/700 `#000` (About Foundation with red `.` period);
  footer links red `#ec0101`; 6 social circles (Instagram, Twitter,
  Facebook, LinkedIn, Pinterest, Dribbble).

## Requirements

### Requirement: Colored top bar

A thin decorative bar SHALL span the full page width at the very top,
above the nav, composed of five equal stripes (each 20% width, 10px tall)
in the order teal `#007f74`, orange `#fe5802`, dark teal `#025e69`, indigo
`#464f9e`, red `#ec0101`.

#### Scenario: Five stripes in order

- **GIVEN** the Dojoly app is rendered
- **WHEN** the page loads
- **THEN** a top bar SHALL render five contiguous stripes of equal width
- **AND** the stripe colors SHALL follow the order `#007f74`, `#fe5802`,
  `#025e69`, `#464f9e`, `#ec0101`

### Requirement: Navbar (transparent over hero + dropdown)

The navbar SHALL be transparent/absolute over the hero with the white
Montserrat "Dojoly" wordmark (24px/700) on the left and nav links on the
right: Home (active), Dropdown Menu (expands a submenu), Classes, Blog,
About, Contact Us. Links SHALL be 14px `rgba(255,255,255,0.7)`, white on
hover, white when active. On narrow viewports the links SHALL collapse
behind a burger toggler that opens a mobile menu panel.

#### Scenario: Desktop navbar

- **GIVEN** the Dojoly app is rendered at desktop width
- **WHEN** the page loads
- **THEN** the navbar SHALL show the "Dojoly" wordmark in white Montserrat
- **AND** SHALL show the nav links Home, Dropdown Menu, Classes, Blog,
  About, Contact Us
- **AND** "Home" SHALL be styled as the active link

#### Scenario: Dropdown submenu

- **GIVEN** the desktop navbar is rendered
- **WHEN** the user activates the "Dropdown Menu" item
- **THEN** a submenu SHALL open listing Menu One, Menu Two (with Sub Menu
  One, Sub Menu Two, Sub Menu Three), Menu Three
- **AND** activating it again SHALL close the submenu

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user activates the burger toggler
- **THEN** a mobile menu panel SHALL open with `aria-expanded` reflecting
  the open state
- **AND** activating the toggler again SHALL close the panel

### Requirement: Hero (full-height photo + play button)

The hero SHALL be a full-viewport (`100vh`, min-height 700px) section with
a background photo, a `rgba(0,0,0,0.4)` overlay, and centered content: an
uppercase white h1 ("It's Never Too Late to Defend yourself" — CSS
uppercases; render the mixed-case text), a faint white sub-heading
("Far far away, behind the word mountains"), and an 80px circular play
button (2px white border) with a white "Watch video" caption beside it.
Activating the play button SHALL open a video lightbox modal.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show the h1 "It's Never Too Late to Defend
  yourself" in white uppercase Montserrat
- **AND** SHALL show the sub-heading "Far far away, behind the word
  mountains"
- **AND** SHALL show an 80px circular play button with a white 2px border
- **AND** SHALL show the "Watch video" caption

#### Scenario: Video lightbox

- **GIVEN** the hero play button is rendered
- **WHEN** the user clicks the play button
- **THEN** a lightbox modal SHALL open (dark backdrop + video embed area)
- **AND** a close control SHALL dismiss the modal

### Requirement: Kids section (split text + image, `sec-1`)

A split section SHALL render a left column with the small divider image,
the red h2 "Encourage Your Kids to Learn", a paragraph, a custom list with
red dot bullets (Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, Basic Defense),
and a red "Enroll now" button; and a right column with a photo whose
corners are diagonally rounded (200px top-left + bottom-right), offset
outside the column (`right: -20px`). A large decorative circle SHALL sit
behind the section at `left: -200px; top: 200px` (z-index -1).

#### Scenario: Left column content

- **GIVEN** the kids section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the divider image above the h2
- **AND** SHALL show the h2 "Encourage Your Kids to Learn" in brand red
- **AND** SHALL show the four list items Taekwondo, Brazilian Jiu-Jitsu,
  Muay Thai, Basic Defense, each with a red dot bullet
- **AND** SHALL show an "Enroll now" button with the brand-red fill

#### Scenario: Right column image

- **GIVEN** the kids section is rendered
- **WHEN** the user inspects the image column
- **THEN** a photo SHALL render with 200px top-left and bottom-right
  border radii (diagonal rounding)

### Requirement: Our Teachers (4 pastel cards)

A centered heading block (divider image + red h2 "Our Teachers") SHALL
introduce a row of four teacher cards, each with a distinct pastel
background (`#F8EFD4`, `#e6e7f6`, `#ddf8f6`, `#f9e4e4`), the signature
70px/200px diagonal card radius, a 100px circular photo, a bold name
(Maria Jones, James Campbell, Rob Smith, Kaye Hamilton), an "Instructor"
position line, and a short paragraph.

#### Scenario: Teacher cards

- **GIVEN** the teachers section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Our Teachers"
- **AND** SHALL show exactly four teacher cards in a row
- **AND** each card SHALL use one of the four pastel backgrounds in order
- **AND** each card SHALL show a circular photo, a bold name, an
  "Instructor" position, and a paragraph

### Requirement: Our Services (6 feature cards)

A centered heading block (divider image + red h2 "Our Services") SHALL
introduce a 3-column grid of six feature cards, each pairing a leading icon
with a bold title, a short paragraph, and a "Learn More" text link (black
→ red hover). Source icon glyphs (flaticon medal/kimono/martial-arts) map
to lucide-react equivalents; titles: Won Medal, Wear Kimono, Martial Arts,
Wear Kimono 2, Martial Arts Kids, Martial Arts.

#### Scenario: Feature grid

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Our Services"
- **AND** SHALL show six feature cards in a 3-column grid (2 rows)
- **AND** each card SHALL show an icon, a bold title, a paragraph, and a
  "Learn More" link

### Requirement: Testimonials (carousel)

A centered heading block (divider image + red h2 "Testimonials") SHALL
introduce a testimonial carousel with prev/next chevron controls. Each of
three slides SHALL reuse the teacher-card styling (pastel background,
circular photo, bold name, position) plus a serif italic blockquote
(Georgia, 20px) with the quoted text. Only one slide SHALL be visible at a
time; the controls SHALL cycle through the slides.

#### Scenario: Carousel slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the h2 "Testimonials"
- **AND** SHALL show exactly one testimonial slide (photo, name, position,
  serif italic quote) at a time
- **AND** SHALL show prev and next chevron controls

#### Scenario: Cycling slides

- **GIVEN** a testimonial slide is visible
- **WHEN** the user activates the next (or prev) control
- **THEN** the carousel SHALL advance to the following (or preceding) slide
- **AND** SHALL wrap around at the ends

### Requirement: Blog Posts (3 cards)

A centered heading block (divider image + red h2 "Blog Posts") SHALL
introduce three post cards, each with a photo, a meta line
("July 17, 2019 by Admin"), a 20px bold black title (red on hover), a
paragraph, and a "Read more" link.

#### Scenario: Post cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Blog Posts"
- **AND** SHALL show three post cards, each with photo, meta line, title,
  paragraph, and "Read more" link

### Requirement: Footer (About + Connect + Links + Company + Contact)

The footer SHALL be transparent (page background shows through), 14px
`#888` text, with five areas: "About Foundation." widget (h3 with red
period + paragraph), "Connect" social row of six 30px circular icon buttons
(Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble — inline SVG
brand icons, `#777` bg → `#fe2222` hover), "Links" and "Company" lists
(About us, Services, News, Careers, Contact), and a "Contact" widget with
an address ("43 Raymouth Rd. Baltemoer, London 3910"), two phone links,
and an email link. The bottom line SHALL read as a copyright
line with the monorepo-mandated "Component Dock" link
(https://www.componentdock.com/) — the source's ColorLib attribution is
REPLACED by the Component Dock footer per conventions.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to it
- **THEN** the footer SHALL show the "About Foundation." widget with the
  red period
- **AND** SHALL show six social icon buttons in a row
- **AND** SHALL show the Links and Company link lists
- **AND** SHALL show the Contact widget with address, phone, and email

#### Scenario: Component Dock attribution

- **GIVEN** the footer copyright line
- **WHEN** the user inspects it
- **THEN** the line SHALL link to https://www.componentdock.com/ (branded
  "Component Dock")
- **AND** no ColorLib reference SHALL appear anywhere in the app code

### Requirement: Composition & interactions

The page SHALL render sections in this exact order: colored top bar →
navbar → hero → kids section → teachers → services → testimonials → blog →
footer. Interactivity SHALL be client-side only (React state): dropdown
menu, mobile burger panel, video lightbox, testimonial carousel. Optional
fade-up scroll animations (AOS-style) are permitted but must not affect
testable content.

#### Scenario: Section order

- **GIVEN** the Dojoly app is rendered
- **WHEN** the page is inspected top to bottom
- **THEN** the sections SHALL appear in the order: top bar, navbar, hero,
  kids section, teachers, services, testimonials, blog, footer

## Verification checklist

- [ ] Structure + order matches the preview 1:1 (top bar → nav → hero →
      kids → teachers → services → testimonials → blog → footer).
- [ ] Brand red `#ec0101` in `@theme` (`--color-brand`) and used for all
      headings, primary buttons, list bullets, footer links.
- [ ] Fonts: Montserrat (headings/logo) + Open Sans (body) via Google
      Fonts `<link>` in `index.html`.
- [ ] Signature shapes reproduced: 5-stripe colored bar, teacher card
      70px/200px diagonal radius, sec-1 image 200px diagonal radius, 80px
      circular play button, 30px circular social buttons.
- [ ] Teacher card pastel backgrounds `#F8EFD4` / `#e6e7f6` / `#ddf8f6` /
      `#f9e4e4` in order.
- [ ] Placeholder images use `https://picsum.photos/seed/dojoly-<n>/<w>/<h>`
      (hero + kids + teachers + posts) — subject-check hero/people seeds.
- [ ] Icons: lucide-react for services (Medal, Shirt, Swords, Dumbbell,
      etc.); INLINE SVG brand icons for the 6 social glyphs (lucide dropped
      brand icons) — probe every lucide import with the typeof check.
- [ ] Video lightbox modal, dropdown menu, mobile burger, carousel all
      client-side React state.
- [ ] Footer links https://www.componentdock.com/; NO colorlib.com string
      in any app file (spec/TEMPLATES.md/PR only).
- [ ] Tests before implementation (TDD), 100% coverage, per-app gate
      (`scripts/verify-app.sh dojoly`).
- [ ] After merge: mark BOTH TEMPLATES.md rows (lines 608 + 1869) `[x]`
      with `https://dojoly.free.componentdock.com`, run `npm run readme:status`,
      verify surge URL 200.
