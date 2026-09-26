# Template: Charcoal (Personal Portfolio / vCard)

## Purpose

Charcoal is a personal portfolio/vCard landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Calvin"
design (source: https://colorlib.com/wp/template/calvin/), built under a
DIFFERENT name (**Charcoal** — a nod to the artist's sketching medium; a single
lowercase word, kebab-case, no collision with `apps/`, `openspec/specs/`,
`docs/templates/` or `origin/main` — verified 2026-09-26), per the monorepo
naming mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript. It is a full one-page personal portfolio: transparent sticky
header → hero with employee photo + headline + about-info info bar →
expertise/services 2×2 grid → portfolio gallery with hover overlays → about
me with animated skill bars → brand logo carousel → testimonial carousel →
latest news blog cards → black footer with CTA band + copyright. Brand color:
vivid orange **`#FF8553`** → dark orange `#ec703f` gradient for CTAs; black
`#000000` for headings; light yellow `#FFEFAE` accent; body text `#635c5c`.
Typeface pairing: **Roboto Condensed** for headings/nav, **DM Sans** for body.
Buttons are rounded pills (border-radius 25px gradient CTA, 30px outlined).

## Design reference (replication findings)

- **Original:** ColorLib "Calvin" — a free personal portfolio / vCard landing
  page (source page: https://colorlib.com/wp/template/calvin/).
  TEMPLATES.md has ONE copy (line 2505, `- [ ]` unchecked). This prep:
  Calvin → **Charcoal**. When the implementer finishes, that row gets
  bookkept `[x]`.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/calvin/` (HTTP 200, ~35 KB,
  `<title> Personal | Template</title>`). Stylesheets: `bootstrap.min.css`
  (Bootstrap 4), `owl.carousel.min.css` (testimonial/brand carousels),
  `slicknav.css` (mobile nav), `progressbar_barfiller.css` (skill bars),
  `gijgo.css`, `animate.min.css` (wow.js scroll animations),
  `magnific-popup.css` (gallery popup), `fontawesome-all.min.css` +
  `themify-icons.css` (icons), `slick.css`, `nice-select.css`, and main
  `assets/css/style.css`. Google Fonts `@import` loads **DM Sans** (500, 700)
  + **Roboto Condensed** (300, 400, 700); body is DM Sans, headings are
  Roboto Condensed. JS: jquery + bootstrap + owl + slick + slicknav +
  wow.js + barfiller (skill bars) + magnific-popup (gallery) — the
  recreation re-implements all interactive parts in React; no third-party
  libs needed.
- **CSS design tokens extracted:**
  - Primary brand: **`#FF8553`** (vivid orange) — used for `.btn` gradient,
    `.browse-btn`, `.border-btn`, `h1`, links, footer accent
  - Primary dark: **`#ec703f`** (darker orange) — gradient partner in `.btn`
  - Accent light: **`#FFEFAE`** (pale yellow) — `.submit-btn2` background
  - Footer accent on icon: **`#FD8F5F`** (soft orange)
  - Body font: **DM Sans** (16px, weight 300)
  - Heading font: **Roboto Condensed** (various weights)
  - Text color: `#000000` (headings), `#635c5c` (links/body)
  - Button shapes: `.btn` → border-radius 25px, gradient background
    `linear-gradient(to left, #FF8553, #ec703f, #FF8553)`, box-shadow
    `0px 7px 21px 0px rgba(0,0,0,0.12)`. `.border-btn` → border-radius 30px,
    1px solid #fff, transparent background, white text.
  - Section padding: `.section-padding` → 120px top/bottom,
    `.section-padding40` → 40px top/bottom
  - Footer background: **`#000000`** (solid black)
  - Services borders: `#EFEFEF` (light gray dividers in 2×2 grid)
  - Progress bar fill: `#FF8553` (orange)
  - Testimonial background: white, `.testimonial-area` default bg
  - About-info bar: positioned absolutely at bottom of hero, white bg,
    three info blocks (Design For, Phone, Email)
  - Gallery overlay: black semi-transparent hover overlay with project name
  - Hero background: full-bleed image `h1_hero.png`, `background-size: cover`

## Section structure (from live DOM, order preserved)

1. **Header/Navbar** — transparent sticky header, logo left, nav center
   (Home, Work, Service, Blog with submenu, Contact), "Let's Talk" outlined
   button right. Mobile: hamburger menu.
2. **Hero** — full-bleed background image, split layout: employee illustration
   left (col-4/5), headline right (col-8/7): "My name is Calvin. Digital
   Product Designer" + subtitle "Head of design at Calvino".
3. **About Info Bar** — overlaps bottom of hero. Three blocks in a row:
   "Design For → Web & Mobile", "Phone → +10 (67) 367-9034",
   "Drop your Message → calvino90@gmail.com" with email icon.
4. **Services (Our Expertise)** — section title "My Expertise", 2×2 grid of
   service cards, each with icon image, title ("Strategy & Direction"),
   description paragraph, and "browse-btn" link. Bordered grid with
   `#EFEFEF` dividers.
5. **Gallery (My Works)** — section title "My Works", 2-column image grid
   (4 items), each with hover overlay showing project name. "More Work"
   outlined button centered below.
6. **About Me** — split layout: left side has section title "About Me" +
   two paragraphs + bottom quote; right side has three skill bars
   (User Interface Design 60%, User Experience 89%, Illustration 95%) with
   orange progress bars.
7. **Brand Carousel** — horizontal strip of 7 brand/logo images in a
   scrolling carousel (owl-carousel).
8. **Testimonials** — section title "Client Testimonial", carousel of
   testimonial cards: quote text + founder photo + name + role. Cards
   cycle automatically.
9. **Blog (Latest News)** — section title "Latest News", carousel of blog
   cards: image, category tag ("Tips"), date + author, article title link.
10. **Footer** — solid black background.
    - **Want To Work CTA band**: logo, description text, social icons
      (Twitter, Facebook, Pinterest, Globe, Instagram), "Let's Talk"
      orange CTA button + "Download CV" outlined button.
    - **Footer bottom**: copyright bar (left), footer nav links (right).

## Gherkin requirements

### Header
- **Scenario: Navbar renders all navigation links**
  Given I am on the Charcoal homepage
  Then I should see navigation links for Home, Work, Service, Blog, and Contact
  And I should see a "Let's Talk" outlined button

- **Scenario: Header is transparent and sticky on scroll**
  Given I am on the Charcoal homepage
  When I scroll down the page
  Then the header should remain fixed at the top
  And the header background should be transparent initially

### Hero
- **Scenario: Hero displays headline and employee image**
  Given I am on the Charcoal homepage
  Then I should see a hero headline with designer name and title
  And I should see an employee/portrait illustration

### About Info Bar
- **Scenario: About info bar shows contact details**
  Given I am on the Charcoal homepage
  Then I should see a "Design For" block with "Web & Mobile"
  And I should see a phone number
  And I should see an email address with an icon

### Services
- **Scenario: Services section displays 4 expertise cards**
  Given I am on the Charcoal homepage
  When I scroll to the Services section
  Then I should see the heading "My Expertise"
  And I should see 4 service cards in a 2×2 grid
  And each card should have an icon, title, description, and link

### Gallery
- **Scenario: Gallery shows 4 portfolio items**
  Given I am on the Charcoal homepage
  When I scroll to the Gallery section
  Then I should see the heading "My Works"
  And I should see 4 gallery images in a 2-column layout
  And I should see a "More Work" button

- **Scenario: Gallery items show overlay on hover**
  Given I hover over a gallery image
  Then I should see a dark overlay with the project name

### About Me
- **Scenario: About Me shows text and skill bars**
  Given I am on the Charcoal homepage
  When I scroll to the About Me section
  Then I should see the heading "About Me"
  And I should see description text
  And I should see 3 skill bars with labels and percentage values

### Brand Carousel
- **Scenario: Brand logos are displayed in a carousel**
  Given I am on the Charcoal homepage
  When I scroll to the brand section
  Then I should see a horizontal row of brand logos

### Testimonials
- **Scenario: Testimonials carousel shows quotes**
  Given I am on the Charcoal homepage
  When I scroll to the Testimonials section
  Then I should see the heading "Client Testimonial"
  And I should see at least one testimonial with a quote, photo, name, and role

### Blog
- **Scenario: Blog section shows latest news cards**
  Given I am on the Charcoal homepage
  When I scroll to the Blog section
  Then I should see the heading "Latest News"
  And I should see at least 2 blog cards with images, category tags, dates, and titles

### Footer
- **Scenario: Footer displays CTA and copyright**
  Given I am on the Charcoal homepage
  When I scroll to the footer
  Then I should see a "Let's Talk" CTA button and a "Download CV" button
  And I should see social media icon links
  And I should see a copyright line
  And I should see footer navigation links
  And the footer should link to Component Dock (https://www.componentdock.com/)

## Verification checklist

- [ ] All 10 sections render in correct order matching the live DOM
- [ ] Brand color `#FF8553` used for all CTAs, progress bars, and accents
- [ ] Heading font is Roboto Condensed, body font is DM Sans
- [ ] Buttons have correct border-radius (25px gradient CTA, 30px outlined)
- [ ] Services grid uses `#EFEFEF` border dividers
- [ ] Skill bars animate to their target percentages with orange fill
- [ ] Gallery has hover overlay with project name
- [ ] Testimonial and brand carousels auto-advance
- [ ] Footer is solid black `#000000` with orange accent icons
- [ ] Footer includes Component Dock link per conventions
- [ ] No ColorLib references in app code (provenance only in spec/PR)
- [ ] All images use picsum.photos placeholder URLs
- [ ] Responsive: mobile hamburger menu, single-column layouts on small screens
