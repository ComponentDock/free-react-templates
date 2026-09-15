# Template: GiveCause (Charity / Non-Profit Landing Page)

## Purpose

GiveCause is a single-page charity / non-profit landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Charity Works" free template (source:
https://colorlib.com/wp/template/charity-works/), live preview at
https://preview.colorlib.com/theme/charityworks/, built under a
DIFFERENT name (**GiveCause**), with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

**Note:** The original slug is `charity-works` (with hyphen) but the
live preview resolves at `charityworks` (no hyphen). Both URLs were
checked during research.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand color (primary) | `#c6a16e` (warm gold) | Buttons, preloader, nav hover, CTA area, footer accent, links |
| Heading color | `#0b1c39` (dark navy) | h1–h6 base color |
| Body text | `#506172` (medium gray) | Paragraph text |
| Muted text | `#868c98` | Footer body, blog info |
| Muted text light | `#888888` | Footer copyright, social icons |
| White | `#ffffff` | Slider text, button text on brand bg |
| Page background | `#f9f9ff` (light lavender) | section-bg, forms, cards |
| Section alt bg | `#f0e9ff` (lighter lavender) | section-bg2, borders, tag clouds |
| Heading font | "Josefin Sans", sans-serif (400–700) | h1–h6, nav, team captions |
| Hero heading font | "Barlow", sans-serif (900) | Slider h1 only |
| Body font | "Great Vibes", cursive | Paragraphs (parallax/decorative feel) |
| Utility font | "Montserrat" (200–800) | Imported but secondary usage |
| Button radius | 5px | `.btn`, `.boxed-btn` |
| Button primary bg | `#c6a16e` | `.btn` background |
| Button hover bg | `#e6373d` (red) | `.btn::before` sweep animation |
| Button outlined | white bg, `#c6a16e` border + text | `.boxed-btn` |
| Card/blog shadow | `0px 10px 20px 0px rgba(221,221,221,0.3)` | `.blog_details` |
| Blog date badge | `#c6a16e` bg, 5px radius | `.blog_item_date` |
| Preloader | `#c6a16e` spinner on `#f7f7f7` bg | Loading screen |
| Footer bg | dark gradient (inherited from section-bg2) | `.footer-wrapper` |
| Footer border | `#2d3544` | `.footer-border` top rule |

## Section order (from live preview DOM)

1. **Header** — top info bar (phone, email, social icons, language selector)
   + sticky nav bar (logo, menu links, "Donate" button)
2. **Hero/Slider** — full-width carousel, dark overlay, big h1 headline
   ("Our Helping to…"), subtext, two CTA buttons (primary + outlined)
3. **About** — `about-low-area section-padding2` — mission statement,
   heading "We Are In A Mission To Help The Helpless", text + image
4. **Services** — `service-area section-padding30` — 3 service cards
   with icons, titles, descriptions
5. **Our Causes** — `our-cases-area section-padding30` — 3 cause cards
   with images, titles, descriptions
6. **Featured Events** — `featured-job-area section-padding30 section-bg2`
   — event listing cards on lavender bg
7. **Countdown** — `count-down-area pt-25 section-bg` — countdown timer
   to next event on dark bg
8. **Team** — `team-area pt-160 pb-160` — 4 team member cards with
   images, gradient overlay, name + role
9. **Testimonials** — `testimonial-area testimonial-padding` — slider
   with quote icon, testimonial text, dark background
10. **WantToWork CTA** — `wantToWork-area` — gold `#c6a16e` banner,
    big headline, animated arrow
11. **Blog** — `home-blog-area section-padding30` — 2–3 blog cards with
    image, date badge, title, excerpt, meta
12. **Footer** — `footer-area footer-padding` — 4-column layout: logo +
    about text, quick links, support links, newsletter form; bottom bar
    with copyright + social icons

## Gherkin requirements

### Background
  Given the app is loaded at the root URL
  Then the page renders without errors
  And all sections are present in the correct order

### Scenario: Header renders with navigation
  Given the user views the page
  Then a sticky navigation bar is visible
  And the nav contains a logo text
  And the nav contains menu links (Home, About, Causes, Events, Pages, Blog, Contact)
  And a "Donate" button is visible in the nav

### Scenario: Hero section displays
  Given the user views the page top
  Then the hero section shows a large headline ("Our Helping to Save the World")
  And the hero has a subtext paragraph
  And two CTA buttons are visible (primary and outlined)
  And the hero uses a background image with a dark overlay

### Scenario: About section displays
  Given the user scrolls past the hero
  Then the About section shows a heading ("We Are In A Mission To Help The Helpless")
  And a descriptive paragraph is present
  And a supporting image is shown beside the text

### Scenario: Services section displays
  Given the user scrolls to the Services section
  Then 3 service cards are visible
  And each card has an icon, a title, and a description

### Scenario: Causes section displays
  Given the user scrolls to the Causes section
  Then 3 cause cards are visible
  And each card has an image, a title, and a description

### Scenario: Featured Events section displays
  Given the user scrolls to the Featured Events section
  Then event cards are displayed on a light background
  And each event card shows a title and description

### Scenario: Countdown section displays
  Given the user scrolls to the Countdown section
  Then a countdown timer is visible
  And the timer shows days, hours, minutes, and seconds

### Scenario: Team section displays
  Given the user scrolls to the Team section
  Then 4 team member cards are visible
  And each card shows a photo, name, and role
  And a gradient overlay appears on hover

### Scenario: Testimonials section displays
  Given the user scrolls to the Testimonials section
  Then a testimonial slider is visible
  And testimonial text is displayed with a quote icon

### Scenario: CTA banner displays
  Given the user scrolls past testimonials
  Then a gold banner section is visible
  And the banner shows a headline ("Want To Work With Us?")
  And the banner background is the brand gold color

### Scenario: Blog section displays
  Given the user scrolls to the Blog section
  Then 2–3 blog post cards are visible
  And each card shows an image, date badge, title, and excerpt

### Scenario: Footer renders
  Given the user scrolls to the bottom
  Then the footer displays with 4 columns
  And column 1 shows logo + about text
  And column 2 shows Quick Links
  And column 3 shows Support links
  And column 4 shows a newsletter form
  And a bottom bar shows copyright + social icons
  And the footer links to https://www.componentdock.com/

### Scenario: Responsive layout
  Given the user views the page on a mobile viewport (375px)
  Then the nav collapses to a hamburger menu
  And sections stack vertically
  And team cards stack to 1 column
  And blog cards stack to 1 column

## Verification checklist

- [ ] All 12 sections render in correct order
- [ ] Brand gold `#c6a16e` used consistently for buttons, accents, CTA
- [ ] Fonts: Josefin Sans headings, Great Vibes paragraphs, Barlow hero h1
- [ ] Hero buttons: primary (solid gold) + outlined (white bg, gold border)
- [ ] Button hover sweep animation (red `#e6373d` reveal)
- [ ] Countdown timer functional (days/hours/minutes/seconds)
- [ ] Team cards have gradient overlay on hover
- [ ] Testimonial slider navigable
- [ ] Blog date badges in gold
- [ ] Footer 4-column layout on desktop, stacked on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images from picsum.photos
- [ ] Google Fonts loaded via index.html link
- [ ] Icons from lucide-react
- [ ] 100% test coverage (lines, functions, branches, statements)
