# Template: Novelist (Personal Author / Writer Portfolio)

## Purpose

Novelist is a personal author / writer portfolio in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Mellisa"
template design (see TEMPLATES.md — appears 3×: lines 605 (Bootstrap 5), 2340
(One Page) and 2408 (Personal); all three rows point to the same source and are
`- [ ]` — one prep covers all, mark ALL `[x]` when done; verified with
`grep -c 'wp/template/mellisa/' TEMPLATES.md` = 3), built under a DIFFERENT
name (Novelist — a writer of novels, which is exactly what this template's
hero persona is: an author who showcases her books; single lowercase word, no
collision with `apps/` or existing spec folders; verified: no `apps/novelist`,
no `template-novelist` spec, no `docs/templates/novelist`, no
`package-lock.json` entry) per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/mellisa/ (Bootstrap 5 + Personal
categories — the page title is "Mellisa - Free Bootstrap 5 Template by
Colorlib").
Preview URL: https://preview.colorlib.com/theme/mellisa/ (HTTP 200, ~64 KB
HTML + `css/style.css` ~62 KB fetched and parsed — the preview slug matches
the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Mellisa" — an editorial, literary one-page author
  portfolio. Amber `#ffa62b` accent + ink `#111111` + dark wood photography
  hero. Top: amber navbar strip with a black "MB" logo box + uppercase
  letter-spaced nav (HOME / ABOUT / BOOKS / NEWS / CONTACT). Hero: full-height
  dark desk flat-lay photo (black book "READ THIS IF YOU WANT TO TAKE GREAT
  PHOTOGRAPHS" + ruler + succulent + keyboard, `background-attachment: fixed`)
  with a small serif sub-headline and the HUGE 11vw Playfair name "Mellisa
  Berlusconi" in ink black. Below: white intro section with a pulsing amber
  80px play button + an italic serif quote; an about split (portrait +
  "A Writer & Author of the Book" + Duden copy + amber "See More Works"
  button); a "Books that I've Written" grid of 8 book covers; a dark
  image-backed "Technical Statistics" counter band (4 counters: Happy
  Readers / Books Published / Cups of Coffee / Awards Winning); a light-grey
  "Our Happy Readers" testimonial carousel; a light-grey "Recent From Blog"
  grid of 8 story cards; a contact section (details + Name/Email/Subject/
  message form + "Follow me here" social text links); an amber CTA band
  ("You want to read my book?" + ink "Contact Me" button); and a dark
  `#161616` footer (MB logo + blurb + socials, Category links, "Have a
  Questions?" contact column, copyright bar).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/mellisa/
  (HTTP 200, ~64 KB HTML; `css/style.css` ~62 KB parsed for tokens). The site
  is Bootstrap 5 + tiny-slider (testimonial carousel) + glightbox + aos
  (scroll animations) + countup (stat counters) + Font Awesome / ionicons /
  flaticon icon fonts, NOT Tailwind. All interactivity must be recreated
  client-side in React.
- **Screenshot note:** `mellisa-colorlib-template.jpg` (1200×946 AVIF,
  viewed in the browser) + live-preview visual check: top amber band carries
  the MB logo (black square, white letters) + white uppercase nav links; the
  big name "Mellisa Berlusconi" renders as LARGE BOLD BLACK serif text
  directly over the dark wood photo (the amber `#ffa62b` hero overlay sits at
  `z-index: -1`, BEHIND the photo, so it is not visible — the wood photo
  dominates); below the fold a stark white section with the italic quote +
  orange circular play button; the black book cover in the hero flat-lay
  matches the sub-headline text. Trust the live DOM/CSS for structure and
  colors; the screenshot confirms the amber navbar + dark-photo hero +
  white-section rhythm.

### Design tokens (extracted from `css/style.css`)

- **Brand amber:** `#ffa62b` — `.ftco-navbar-light.scroll` navbar background
  (the live page renders the navbar amber at the top), `.hero-wrap .overlay`
  (`background: #ffa62b`, `z-index: -1` — hidden behind the hero photo;
  effectively a tint/fallback), `.ftco-intro` CTA band (`.bg-primary` is
  overridden to `#ffa62b !important`), `.intro .icon-video` 80px pulsing play
  circle, `.btn.btn-primary` fill, `.ftco-footer .logo a` color, link/heading
  hover accents.
- **Ink / near-black:** `#111111` — `.hero-wrap .slider-text h1` (Playfair
  Display 700, `font-size: 11vw`, line-height 1.2; 40px on mobile), navbar
  brand (`.navbar-brand` weight 800, 40px), `.btn.btn-darken` fill, section
  headings, `.ftco-section-counter .overlay` (`background: #111111`, opacity
  .9 over the counter photo).
- **Body / canvas:** `#f8f8f8` (body background); light sections `#f8f9fa`
  (`bg-light` — testimonial + blog sections).
- **Footer:** `#161616` background, text `rgba(255,255,255,.5)`, white
  headings, amber logo link.
- **Nav links:** `.ftco-navbar-light .navbar-nav > .nav-item > .nav-link` —
  16px, weight 600, `letter-spacing: 4px`, `text-transform: uppercase`,
  color `rgba(0,0,0,.7)`; active link (`.activeme`) `#000000`. Mobile toggler:
  text "Menu", 16px, uppercase, `letter-spacing: .1em`.
- **Fonts (Google Fonts `<link>` in index.html):** `"Playfair Display", serif`
  — hero h1 (700, 11vw), display/headings (`.navbar-brand` 800, `.intro h2`
  40px, `.slider-text h2` 6vh); `"Poppins", Arial, sans-serif` — body (17px),
  nav, buttons, general UI; `"EB Garamond", serif` — serif accents (the
  italic intro quote).
- **Buttons:** `.btn` base padding `9px 12px`. `.btn.btn-primary` — amber
  `#ffa62b` fill, BLACK text, `1px solid #ffa62b` border; hover → transparent
  bg + amber text. `.btn.btn-darken` — `#111111` fill, white text, `1px solid
#111111` border; hover → transparent bg + ink text. Demo instances add
  `px-4 py-3` padding.
- **Intro play button:** `.intro .icon-video` — 80×80 circle,
  `border-radius: 50%`, amber bg, `animation: pulse 2s infinite`, 24px play
  glyph.
- **Section titles:** headings in Playfair Display (h2 ~40px); the counter
  section carries a small uppercase kicker line "GREAT REVIEWS FOR OUR
  SERVICES" above its h2 ("Technical Statistics").
- **Testimonials:** `tiny-slider` carousel — 2 slides, pagination dots
  ("Carousel Page 1 / Page 2 (Current Slide)" in the live DOM); quote text +
  author name ("Roger Scott").
- **Forms:** contact form fields Name, Email, Subject, "Create a message
  here" textarea + "Send Message" submit button.
- **Footer "Have a Questions?":** address "203 Fake St. Mountain View, San
  Francisco, California, USA", phone `+2 392 3929 210`, email
  `info@yourdomain.com` — NEVER write a literal `tel:` URI in source (compute
  at runtime from a spaced display string per repo policy, or render as plain
  text).

### Section structure (from the live DOM, top to bottom)

1. `nav#navbar.navbar.navbar-expand-lg.fixed-top.ftco-navbar-light` — brand
   "MB" (black box logo, Playfair 800) + nav links HOME, ABOUT, BOOKS, NEWS,
   CONTACT (16px 600 uppercase, letter-spacing 4px); transparent over hero at
   `top: 30px`, amber `#ffa62b` full-width strip on scroll (the live preview
   renders it amber immediately); mobile "Menu" toggler.
2. `section.hero-wrap#home` — full-height, `background-image: images/bg_1.jpg`
   (dark wood desk flat-lay with black book), `background-attachment: fixed`,
   amber overlay `z-index: -1`; `.slider-text`: h2 (small serif) "Read This
   If You Want To Take Great Photographs.", h1 (Playfair 700 11vw ink)
   "Mellisa Berlusconi".
3. `section.ftco-section.intro#about` — `.icon-video` pulsing amber 80px play
   circle + h2 italic serif quote: "I'm Mellisa Berlusconi A Writer Based in
   England Far far away, behind the word mountains, far from the countries
   Vokalia and Consonantia, there live the blind texts."
4. `section.ftco-section.ftco-about.ftco-no-pt.ftco-no-pb` — portrait
   (`images/about.jpg`, `.img-about`) + h2 "Mellisa Berlusconi A Writer &
   Author of the Book" + Duden copy paragraph + "See More Works"
   (`btn btn-primary px-4 py-3`).
5. `section.ftco-section.ftco-project.ftco-no-pb#books` — h2 "Books that I've
   Written" + 8 book cards (cover `background-image` + h3 title link "Read
   This If You Want To Take Great Photographs" — VARY the titles).
6. `section.ftco-section-counter.img` — photo bg + `#111111` overlay (opacity
   .9); kicker "GREAT REVIEWS FOR OUR SERVICES" + h2 "Technical Statistics" +
   4 counters (countup + flaticon icon + caption): 3000 Happy Readers, 50
   Books Published, 1000 Cups of Coffee, 20 Awards Winning.
7. `section.ftco-section.testimony-section.bg-light.ftco-no-pb` — h2 "Our
   Happy Readers" + tiny-slider carousel (2 slides): quote + author "Roger
   Scott" + pagination dots.
8. `section.ftco-section.bg-light.ftco-no-pb#blog` — h2 "Recent From Blog" +
   8 blog cards (`images/image_1..6.jpg` + date "Mar. 03, 2021" + "3
   Comments" link + h3 "How to Develop & Awesome sense of Story" — VARY
   titles/dates).
9. `section.ftco-section.ftco-no-pb#contactme` — h3 "Contact us" + "We're
   open for any suggestion or just to have a chat" + email link
   `info@yoursite.com` + phone `+ 1235 2355 98`; form (Name, Email, Subject,
   message textarea, "Send Message" button); h3 "Follow me here" + text links
   FACEBOOK, TWITTER, INSTAGRAM, DRIBBBLE.
10. `section.ftco-intro.py-5.bg-primary` — amber band: h2 "You want to read my
    book?" + Duden snippet + "Contact Me" (`btn btn-darken py-3`).
11. `footer.ftco-footer` — `#161616`: MB logo + blurb ("Far far away, behind
    the word mountains…") + social icon links; "Category" column (Novels,
    Fiction, Arts, Fantasy); "Have a Questions?" column (address, phone,
    email); copyright bar — the Colorlib credit is REPLACED with the
    mandatory Component Dock link (https://www.componentdock.com/).

## Requirements

### Requirement: Navbar (amber strip + mobile menu)

The system SHALL render a fixed navbar with the brand and the five section
links, turning into a solid amber strip on scroll, with a working mobile
menu.

#### Scenario: Desktop navbar

- **GIVEN** the Novelist app is rendered at desktop width
- **WHEN** the page loads
- **THEN** the navbar SHALL show the "MB" brand (black box, white letters,
  Playfair 800) on the left
- **AND** SHALL show the links HOME, ABOUT, BOOKS, NEWS, CONTACT (uppercase,
  letter-spaced, 16px 600) on the right
- **AND** SHALL show a solid amber `#ffa62b` background strip (the live
  reference renders the navbar amber at the top; the scroll-to-amber
  transition may be simplified to always-amber)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user activates the "Menu" toggler
- **THEN** the nav SHALL be shown in a collapse panel with an `aria-expanded`
  toggle and all five section links SHALL remain usable

### Requirement: Hero (dark photo + giant name)

The system SHALL render a full-height hero with a fixed dark desk photo
background, a small serif sub-headline, and the author's name in giant
Playfair type.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show the sub-headline "Read This If You Want To
  Take Great Photographs." (small serif) above the 11vw Playfair 700 ink
  `#111111` name "Mellisa Berlusconi"
- **AND** SHALL have a dark photo background (placeholder image — picsum seed
  `novelist-hero`, NOT ColorLib assets) with a fixed-attachment feel
- **AND** the navbar SHALL overlay the hero at the top

### Requirement: Intro (pulsing play + quote)

The system SHALL render a white intro section with a pulsing amber play
button and the italic author quote.

#### Scenario: Intro content

- **GIVEN** the intro section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show an 80px amber circle play button (pulsing
  animation, white play glyph)
- **AND** SHALL show the italic serif quote "I'm Mellisa Berlusconi A Writer
  Based in England Far far away, behind the word mountains, far from the
  countries Vokalia and Consonantia, there live the blind texts."

### Requirement: About split (portrait + pitch)

The system SHALL render the about section with a portrait, the author pitch
heading, supporting copy, and an amber CTA button.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a portrait image, the heading "Mellisa
  Berlusconi A Writer & Author of the Book", a short paragraph (Duden-river
  style copy), and an amber "See More Works" button (amber fill, black text,
  hover → transparent/amber)

### Requirement: Books grid

The system SHALL render a "Books that I've Written" grid of eight book
covers with title links.

#### Scenario: Book cards

- **GIVEN** the books section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the heading "Books that I've Written"
- **AND** SHALL show a responsive grid of 8 book cards, each with a cover
  image (picsum placeholders) and a book-title link (VARY the titles from the
  demo's repeated "Read This If You Want To Take Great Photographs")

### Requirement: Counter band (technical statistics)

The system SHALL render a dark image-backed stats band with a kicker line, a
title, and four counters.

#### Scenario: Stats

- **GIVEN** the counter section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL have a photo background with a `#111111` overlay
  (opacity ~.9)
- **AND** SHALL show the small uppercase kicker "GREAT REVIEWS FOR OUR
  SERVICES" and the heading "Technical Statistics"
- **AND** SHALL show four stat blocks (icon + number + caption): 3000 Happy
  Readers, 50 Books Published, 1000 Cups of Coffee, 20 Awards Winning
- **AND** the numbers MAY count up on scroll into view (client-side only)

### Requirement: Testimonials carousel

The system SHALL render a light-grey "Our Happy Readers" testimonial
carousel.

#### Scenario: Testimonial slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the heading "Our Happy Readers" on a
  `#f8f9fa` background
- **AND** SHALL show a carousel of at least 2 slides, each with a praise
  quote and an author name (e.g. "Roger Scott"), navigable via pagination
  dots/arrows

### Requirement: Blog grid

The system SHALL render a light-grey "Recent From Blog" grid of eight story
cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the heading "Recent From Blog"
- **AND** SHALL show a grid of 8 cards, each with an image, a date line
  (e.g. "Mar. 03, 2021"), a comments count link ("3 Comments"), and a bold
  story title (VARY the titles/dates from the demo's repeated "How to
  Develop & Awesome sense of Story")

### Requirement: Contact (details + form + socials)

The system SHALL render the contact section with contact details, a message
form, and "Follow me here" social links.

#### Scenario: Contact content

- **GIVEN** the contact section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the heading "Contact us", the line "We're
  open for any suggestion or just to have a chat", an email link, and a
  phone number (no literal `tel:` URI in source — compute at runtime or
  render as text)
- **AND** SHALL show a form with Name, Email, Subject, and message fields and
  a "Send Message" submit button
- **AND** submitting SHALL NOT navigate away (client-side validation +
  success state)
- **AND** SHALL show the heading "Follow me here" with the text links
  FACEBOOK, TWITTER, INSTAGRAM, DRIBBBLE

### Requirement: CTA band (amber)

The system SHALL render an amber full-width call-to-action band with an ink
button.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL have the amber `#ffa62b` background
- **AND** SHALL show the heading "You want to read my book?" and an ink
  "Contact Me" button (`#111111` fill, white text, hover → transparent/ink)

### Requirement: Footer

The system SHALL render a dark `#161616` footer with brand blurb, category
links, contact column, and a copyright bar linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show the "MB" logo + blurb ("Far far away, behind
  the word mountains…") + social icon links
- **AND** SHALL show a "Category" column (Novels, Fiction, Arts, Fantasy) and
  a "Have a Questions?" column (address "203 Fake St. Mountain View, San
  Francisco, California, USA", phone, email)
- **AND** the bottom bar SHALL show the copyright line with the current year
  and a credit linking Component Dock (https://www.componentdock.com/) — the
  Colorlib credit is replaced

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh novelist`)
- [ ] Design tokens from this spec applied in `@theme` (brand amber
      `#ffa62b`, ink `#111111`, body `#f8f8f8`, light `#f8f9fa`, footer
      `#161616`)
- [ ] Playfair Display (400/700/800) + Poppins (400/600) + EB Garamond
      (italic quote) loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (navbar → hero →
      intro play/quote → about split → books grid → counter band →
      testimonials → blog grid → contact → amber CTA → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/novelist-<n>/<w>/<h>`
      (hero desk photo, about portrait, 8 book covers, counter bg, 8 blog
      images); NO assets copied from ColorLib
- [ ] Hero: full-height dark photo, fixed-attachment feel, small serif
      sub-headline + 11vw Playfair 700 ink name (40px on mobile)
- [ ] Navbar: "MB" brand + 5 uppercase letter-spaced links, amber strip
      (always-amber acceptable), mobile "Menu" collapse with `aria-expanded`
- [ ] Intro play: 80px amber circle, white play glyph, pulsing animation
- [ ] Buttons: `.btn-primary` = amber fill/black text → hover
      transparent/amber; `.btn-darken` = ink fill/white text → hover
      transparent/ink (used for "Contact Me")
- [ ] Counter: `#111111` overlay over photo, kicker + "Technical Statistics" + 4 stats (number + caption); countup optional, client-side only
- [ ] Testimonials: carousel ≥2 slides with quotes + author names +
      pagination (no tiny-slider — plain React state)
- [ ] Blog: 8 cards (image, date, "3 Comments", story title) with varied copy
- [ ] Contact form: Name/Email/Subject/message + "Send Message", client-side
      validation + success state, no navigation away
- [ ] Footer: `#161616`, MB logo + blurb + socials, Category + "Have a
      Questions?" columns, copyright bar with Component Dock link
- [ ] Icons from lucide-react (Play, Menu, MessageSquare, Phone, Mail, MapPin) + inline SVG brand icons for socials (lucide-react removed brand
      icons); verify every lucide export with the typeof probe; NO
      fontawesome / ionicons / flaticon icon fonts
- [ ] Interactivity client-side only: mobile menu, testimonial carousel,
      counter countup (optional), contact form (no jquery/tiny-slider/
      glightbox/aos/countup)
- [ ] Demo-repeated content varied (book titles, blog titles/dates,
      testimonial authors) — same kinds of content, no duplicated strings
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark ALL THREE mellisa rows `[x]` (lines 605, 2340, 2408) + surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (novelist.free.componentdock.com) returns 200
