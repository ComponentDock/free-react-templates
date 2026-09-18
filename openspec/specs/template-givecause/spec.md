# Template: GiveCause (Charity / Non-Profit Landing Page)

## Purpose

GiveCause is a single-page charity / non-profit landing page in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Charity Works" free template (source:
https://colorlib.com/wp/template/charity-works/), live preview at
https://preview.colorlib.com/theme/charityworks/, built under a
DIFFERENT name (**GiveCause**), with the monorepo stack: Vite + React 19

- Tailwind CSS 4 + TypeScript.

**Note:** The original slug is `charity-works` (with hyphen) but the
live preview resolves at `charityworks` (no hyphen). Both URLs were
checked during research.

## Design tokens (extracted from preview CSS)

| Token                 | Value                                      | Usage                                                         |
| --------------------- | ------------------------------------------ | ------------------------------------------------------------- |
| Brand color (primary) | `#c6a16e` (warm gold)                      | Buttons, preloader, nav hover, CTA area, footer accent, links |
| Heading color         | `#0b1c39` (dark navy)                      | h1–h6 base color                                              |
| Body text             | `#506172` (medium gray)                    | Paragraph text                                                |
| Muted text            | `#868c98`                                  | Footer body, blog info                                        |
| Muted text light      | `#888888`                                  | Footer copyright, social icons                                |
| White                 | `#ffffff`                                  | Slider text, button text on brand bg                          |
| Page background       | `#f9f9ff` (light lavender)                 | section-bg, forms, cards                                      |
| Section alt bg        | `#f0e9ff` (lighter lavender)               | section-bg2, borders, tag clouds                              |
| Heading font          | "Josefin Sans", sans-serif (400–700)       | h1–h6, nav, team captions                                     |
| Hero heading font     | "Barlow", sans-serif (900)                 | Slider h1 only                                                |
| Body font             | "Great Vibes", cursive                     | Paragraphs (parallax/decorative feel)                         |
| Utility font          | "Montserrat" (200–800)                     | Imported but secondary usage                                  |
| Button radius         | 5px                                        | `.btn`, `.boxed-btn`                                          |
| Button primary bg     | `#c6a16e`                                  | `.btn` background                                             |
| Button hover bg       | `#e6373d` (red)                            | `.btn::before` sweep animation                                |
| Button outlined       | white bg, `#c6a16e` border + text          | `.boxed-btn`                                                  |
| Card/blog shadow      | `0px 10px 20px 0px rgba(221,221,221,0.3)`  | `.blog_details`                                               |
| Blog date badge       | `#c6a16e` bg, 5px radius                   | `.blog_item_date`                                             |
| Preloader             | `#c6a16e` spinner on `#f7f7f7` bg          | Loading screen                                                |
| Footer bg             | dark gradient (inherited from section-bg2) | `.footer-wrapper`                                             |
| Footer border         | `#2d3544`                                  | `.footer-border` top rule                                     |

## Section order (from live preview DOM)

1. **Header** — top info bar (phone, email, social icons, language selector)
   - sticky nav bar (logo, menu links, "Donate" button)
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

## Requirements

### Requirement: Header renders with navigation

Users SHALL see a sticky navigation bar with logo, menu links (Home, About, Causes, Events, Pages, Blog, Contact), and a "Donate" button.

#### Scenario: Header renders with navigation

- **WHEN** the user views the page
- **THEN** a sticky navigation bar is visible
- **AND** the nav contains a logo text "GiveCause"
- **AND** the nav contains menu links (Home, About, Causes, Events, Pages, Blog, Contact)
- **AND** a "Donate" button is visible in the nav

### Requirement: Hero section displays

Users SHALL see a full-width hero section with headline, subtext, and two CTA buttons.

#### Scenario: Hero section displays

- **WHEN** the user views the page top
- **THEN** the hero section shows a large headline ("Our Helping to Save the World")
- **AND** the hero has a subtext paragraph
- **AND** two CTA buttons are visible (primary and outlined)
- **AND** the hero uses a background image with a dark overlay

### Requirement: About section displays

Users SHALL see an About section with heading, descriptive text, and an image.

#### Scenario: About section displays

- **WHEN** the user scrolls past the hero
- **THEN** the About section shows a heading ("We Are In A Mission To Help The Helpless")
- **AND** a descriptive paragraph is present
- **AND** a supporting image is shown beside the text

### Requirement: Services section displays

Users SHALL see 3 service cards with icons, titles, and descriptions.

#### Scenario: Services section displays

- **WHEN** the user scrolls to the Services section
- **THEN** 3 service cards are visible
- **AND** each card has an icon, a title, and a description

### Requirement: Causes section displays

Users SHALL see 3 cause cards with images, titles, descriptions, and fundraising progress.

#### Scenario: Causes section displays

- **WHEN** the user scrolls to the Causes section
- **THEN** 3 cause cards are visible
- **AND** each card has an image, a title, and a description

### Requirement: Featured Events section displays

Users SHALL see event cards on a light background with titles, descriptions, and locations.

#### Scenario: Featured Events section displays

- **WHEN** the user scrolls to the Featured Events section
- **THEN** event cards are displayed on a light background
- **AND** each event card shows a title and description

### Requirement: Countdown section displays

Users SHALL see a countdown timer with days, hours, minutes, and seconds.

#### Scenario: Countdown section displays

- **WHEN** the user scrolls to the Countdown section
- **THEN** a countdown timer is visible
- **AND** the timer shows days, hours, minutes, and seconds

### Requirement: Team section displays

Users SHALL see 4 team member cards with photos, names, roles, and hover effects.

#### Scenario: Team section displays

- **WHEN** the user scrolls to the Team section
- **THEN** 4 team member cards are visible
- **AND** each card shows a photo, name, and role

### Requirement: Testimonials section displays

Users SHALL see a testimonial slider with navigation controls.

#### Scenario: Testimonials section displays

- **WHEN** the user scrolls to the Testimonials section
- **THEN** a testimonial slider is visible
- **AND** testimonial text is displayed with a quote icon

### Requirement: CTA banner displays

Users SHALL see a gold banner with headline and CTA button.

#### Scenario: CTA banner displays

- **WHEN** the user scrolls past testimonials
- **THEN** a gold banner section is visible
- **AND** the banner shows a headline ("Want To Work With Us?")
- **AND** the banner background is the brand gold color

### Requirement: Blog section displays

Users SHALL see 2–3 blog post cards with images, dates, titles, excerpts, and metadata.

#### Scenario: Blog section displays

- **WHEN** the user scrolls to the Blog section
- **THEN** 2–3 blog post cards are visible
- **AND** each card shows an image, date badge, title, and excerpt

### Requirement: Footer renders

Users SHALL see a 4-column footer with logo, links, newsletter, and Component Dock attribution.

#### Scenario: Footer renders

- **WHEN** the user scrolls to the bottom
- **THEN** the footer displays with 4 columns
- **AND** column 1 shows logo + about text
- **AND** column 2 shows Quick Links
- **AND** column 3 shows Support links
- **AND** column 4 shows a newsletter form
- **AND** a bottom bar shows copyright + social icons
- **AND** the footer links to https://www.componentdock.com/

### Requirement: Responsive layout

Users SHALL see a responsive layout that adapts to mobile viewports.

#### Scenario: Responsive layout

- **WHEN** the user views the page on a mobile viewport (375px)
- **THEN** the nav collapses to a hamburger menu
- **AND** sections stack vertically
- **AND** team cards stack to 1 column
- **AND** blog cards stack to 1 column

## Verification checklist

- [ ] All 12 sections render in correct order
- [ ] Brand gold `#c6a16e` used consistently for buttons, accents, CTA
- [ ] Fonts: Josefin Sans headings, Great Vibes paragraphs, Barlow hero h1
- [ ] Hero buttons: primary (solid gold) + outlined (white bg, gold border)
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
