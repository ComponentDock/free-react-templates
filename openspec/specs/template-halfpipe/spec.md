# Template: Halfpipe (Personal Brand / Skateboarding)

## Purpose

Halfpipe is a single-page PERSONAL BRAND / SKATEBOARDING template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Skater" free template (source:
https://colorlib.com/wp/template/skater/), built under a DIFFERENT name
(**Halfpipe**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/skater/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/skater-free-template.jpg

The original is a Bootstrap 4 dark-themed single-page site for a skateboarder
personal brand: full-viewport hero carousel with background images + overlay,
services grid, alternating image+text about blocks, video embed with animated
counters, team member cards, pricing table, FAQ accordion, testimonial
carousel, blog posts, contact form, and a dark footer with newsletter
subscribe. The entire site uses a DARK charcoal body (`#222`) with ORANGE
(`#ff8b00`) as the sole accent color throughout.

## Naming

The ColorLib source name "Skater" is FORBIDDEN as the app name. The new name
is **Halfpipe** (a skateboarding ramp — thematic without reusing the source).

- Source slug: `skater`
- Source URL: https://colorlib.com/wp/template/skater/
- Preview URL: https://preview.colorlib.com/theme/skater/
- New name: `halfpipe`
- Package: `@free-react-templates/halfpipe`
- App folder: `apps/halfpipe`
- Deploy target: `https://halfpipe.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) fetched 2026-09-26.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Brand / Primary | `#ff8b00` | Accent throughout: nav active, icons, pricing numbers, section headings, team member names, testimonial dots, form submit buttons, social button hover |
| Body background | `#222` | Full-page dark charcoal |
| Card / Block background | `#333` | Team cards, pricing cards, testimonial blockquotes, form inputs, footer |
| Body text | `#939393` | Main paragraph text |
| Heading text (dark sections) | `#fff` | Headings in dark sections (services, team) |
| Heading text (light sections) | `#000` | Headings in the about/performance text blocks |
| Subheading / muted span | `#b8b8b8` | `.block-heading-1 span`, `.font-gray-5` |
| Success checkmark | `#71bc42` | Pricing feature check icons |
| Footer link muted | `rgba(255,255,255,0.5)` | Footer links, subscribe input placeholder |
| Selection | `#000` bg, `#fff` text | `::selection` |
| White | `#fff` | Hero text, button text, footer text |
| Black | `#000` | Logo text, body text in about section |

### Typography

| Element | Font | Weights | Transform |
|---------|------|---------|-----------|
| Headings (h1–h5) | `"Oswald", sans-serif` | 400, 700 | uppercase |
| Body / paragraphs | `"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | 300, 400, 700 | none |
| Hero h1 | Oswald | 400/700 | uppercase, 4.5rem desktop / 2rem mobile |
| Body line-height | — | — | 1.7 |
| Base font size | — | — | 1rem |

Load via Google Fonts `<link>` in `index.html`: Oswald (400, 700) + Rubik (300, 400, 700).

### Buttons

| Variant | Style |
|---------|-------|
| `.btn-outline-white` | transparent bg, 2px white border, white text; hover: white bg, white border, black text |
| `.btn-primary` | `#ff8b00` bg, white text (Bootstrap override) |
| `.btn-secondary` | Bootstrap default secondary |
| `.btn-md` | padding 8px 20px |
| `.border-w-2` | border-width 2px |

### Section Backgrounds

All sections sit on the dark `#222` body background. No alternating light/dark
section treatment — the entire page is dark with white/primary text.

- **Hero**: background images (skateboarding photos) with dark overlay (`rgba(0,0,0,0.3)` via `::before`)
- **Services**: dark body bg, white headings, primary icon color
- **About/Performance**: dark body bg, black headings in text columns
- **Video/Stats**: dark body bg, white counter numbers (4rem Oswald)
- **Team**: dark bg, `#333` card backgrounds, primary names
- **Pricing**: dark bg, `#333` card backgrounds, primary price numbers
- **FAQ**: dark bg (within pricing section), primary question headings
- **Testimonials**: dark bg, `#333` blockquote backgrounds
- **Blog**: dark bg, standard card layout
- **Contact**: dark bg, `#333` form inputs, primary submit button
- **Footer**: `#333` background, white headings, muted links

### Rounded Corners / Radii

- Team member photos: `border-radius: 50%` (circular)
- Pricing cards: no explicit radius (square corners)
- Blog images: `rounded` (small radius, Bootstrap default ~0.25rem)
- Buttons: Bootstrap default (small radius)
- Dropdown menus: no radius, 2px primary border-top

## Gherkin Requirements

### Feature: Halfpipe — Personal Brand / Skateboarding Template

#### Scenario: Navbar renders with logo and navigation links
  Given the page loads
  Then a sticky navbar is visible at the top
  And the logo reads "Halfpipe" with primary color accent
  And navigation links include Home, Services, About, Testimonials, Blog, Contact
  And the About link has a dropdown with Team, Pricing, FAQ sub-items
  And nav links are white text on dark background
  And active/hover state uses primary color #ff8b00

#### Scenario: Hero carousel displays with background images and CTA
  Given the page loads
  Then a full-viewport hero carousel is visible
  And it contains at least 2 slides with background images
  And each slide has a dark overlay
  And each slide shows a large uppercase heading in white Oswald font
  And each slide has a white paragraph description
  And each slide has an outline-white "Get in touch" button
  And slides auto-rotate (carousel behavior)

#### Scenario: Services section shows 6 service cards in a grid
  Given the user scrolls to the Services section
  Then a heading "Services" is visible with a subtitle paragraph
  And 6 service cards are displayed in a 3-column grid
  And each card has an orange (#ff8b00) icon (3rem size)
  And each card has a white heading (e.g., "Skate for Beginner")
  And each card has a grey description paragraph
  And cards animate on scroll (fade-up)

#### Scenario: About / Performance section shows alternating image+text blocks
  Given the user scrolls to the About section
  Then 2 alternating blocks are visible
  And each block has a full-width background image on one side
  And each block has text content on the other side
  And text blocks have an orange heading (e.g., "My Best Performance")
  And text blocks have body paragraphs and a checkmark list with orange icons
  And the image and text sides alternate left/right between blocks

#### Scenario: Video embed and stats counters section
  Given the user scrolls past the About section
  Then a video embed area is visible with a play button overlay
  And 4 stat counters are displayed in a row
  And counters show: "30+ Year of Experience", "4+ Expert Trainer", "4+ Number of Trainer", "1500+ Number of Members"
  And counter numbers are in large white Oswald font with an orange underline
  And counters animate on scroll

#### Scenario: Team section shows 3 team members
  Given the user scrolls to the Team section
  Then a heading "Our Team" is visible with a subtitle
  And 3 team member cards are displayed in a 3-column layout
  And each card has a dark (#333) background with padding
  And each card shows a circular photo (border-radius 50%)
  And each card shows an orange member name and grey role subtitle
  And each card has 3 social media icon buttons (Facebook, Twitter, Instagram)
  And cards lift on hover (translateY + shadow)

#### Scenario: Pricing section shows 3 pricing tiers
  Given the user scrolls to the Pricing section
  Then a heading "Session Pricing" is visible with a subtitle
  And 3 pricing cards are displayed (Basic $47, Premium $200, Professional $750)
  And each card has a dark (#333) background
  And each card has a white tier name heading
  And each card shows the price with the dollar amount in large orange font
  And each card has a feature list with green (#71bc42) checkmarks
  And excluded features have a "remove" class (strikethrough/hidden)
  And each card has a buy button (secondary for Basic/Professional, primary for Premium)

#### Scenario: FAQ section with questions and answers
  Given the user scrolls to the FAQ section
  Then a heading "Frequently Ask Questions" is visible in primary color
  And 8 FAQ items are displayed in a 2-column layout
  And each question is an orange heading
  And each answer is a grey paragraph
  And items animate on scroll

#### Scenario: Testimonials carousel
  Given the user scrolls to the Testimonials section
  Then a heading "Testimonial" is visible
  And a carousel displays testimonial cards
  And each card has a dark (#333) blockquote with italic white text
  And each card shows a circular photo and person name
  And carousel dots are visible (active dot is orange, inactive grey)
  And the carousel auto-rotates

#### Scenario: Blog section shows 2 blog posts
  Given the user scrolls to the Blog section
  Then a heading "Our Blog" is visible with subtitle "Latest Blog Posts"
  And 2 blog post cards are displayed side by side
  And each card has a featured image
  And each card has a title, date/author line, excerpt, and "Read More" link
  And cards animate on scroll

#### Scenario: Contact section with form and CTA
  Given the user scrolls to the Contact section
  Then a heading "Contact Me" is visible with subtitle "Get In Touch"
  And a contact form is displayed with: 2 name fields (side by side), email field, textarea, submit button
  And form inputs have dark (#333) background with white text
  And the submit button is primary (orange) with white text
  And to the right of the form is a CTA text block with orange heading and primary "Get Started" button

#### Scenario: Footer with newsletter and social links
  Given the user scrolls to the footer
  Then the footer has a dark (#333) background
  And it contains an "About Us" text column and a "Features" links column
  And it contains a "Subscribe to Newsletter" section with email input and orange subscribe button
  And it contains social media icon links (Facebook, Twitter, Instagram, LinkedIn)
  And a copyright line reads "Copyright © [year] All rights reserved"
  And the footer links to Component Dock (https://www.componentdock.com/)
  And no reference to ColorLib appears in the footer

#### Scenario: Responsive behavior on mobile
  Given the page is viewed on a mobile viewport (≤991px)
  Then the navbar collapses to a hamburger menu toggle
  And the hero h1 reduces to 2rem
  And service cards stack to single column
  And team/pricing cards stack to single column
  And the contact form and CTA stack vertically
  And all sections maintain dark theme readability

#### Scenario: AOS scroll animations throughout
  Given the page loads
  Then sections use AOS (Animate On Scroll) fade-up animations
  And animations have staggered delays (0ms, 100ms, 200ms, 300ms)
  And animations trigger as sections enter the viewport

## Verification Checklist

- [ ] App folder `apps/halfpipe` created with correct package name
- [ ] `public/CNAME` contains `halfpipe.free.componentdock.com`
- [ ] `package.json` has `"homepage": "https://halfpipe.free.componentdock.com"`
- [ ] Google Fonts loaded: Oswald (400, 700) + Rubik (300, 400, 700)
- [ ] Brand color `#ff8b00` registered in Tailwind `@theme`
- [ ] Body background `#222` applied
- [ ] All 12 sections present in correct order: Navbar → Hero → Services → About → Video/Stats → Team → Pricing → FAQ → Testimonials → Blog → Contact → Footer
- [ ] Navbar: sticky, logo with primary accent, dropdown with primary border-top
- [ ] Hero: carousel with 2+ slides, background images + overlay, outline-white CTA
- [ ] Services: 6 cards in 3×2 grid, orange icons, white headings
- [ ] About: 2 alternating image+text blocks, orange headings, checkmark lists
- [ ] Video/Stats: video area + 4 animated counters
- [ ] Team: 3 cards, circular photos, orange names, social buttons, hover lift
- [ ] Pricing: 3 tiers, dark cards, orange prices, green checks, buy buttons
- [ ] FAQ: 2-column, orange questions, 8 items
- [ ] Testimonials: carousel with dark blockquotes, circular photos, dots
- [ ] Blog: 2 posts side by side, images + metadata + Read More
- [ ] Contact: form (2 name fields, email, textarea, submit) + CTA text
- [ ] Footer: dark bg, About Us, Features links, newsletter subscribe, social icons, Component Dock link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app halfpipe` passes
- [ ] No new dependencies added (use packages/ui + lucide-react for icons)
- [ ] Placeholder images use `https://picsum.photos/seed/halfpipe-<n>/<w>/<h>`
