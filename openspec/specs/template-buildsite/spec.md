# Template: BuildSite (Construction Company)

## Purpose

Recreation of ColorLib's **Constructioncompany** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source template:** [Constructioncompany](https://colorlib.com/wp/template/constructioncompany/)
- **Live preview:** https://preview.colorlib.com/theme/constructioncompany/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/constructioncompany-free-template.jpg
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)
- **Deploy target:** `https://buildsite.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Brand/Theme | `#ff5f13` | Primary buttons, active states, hover accents, scroll-to-top |
| Brand hover | `#e25311` | Button hover background sweep |
| Dark Navy | `#0e132a` | Heading text color, body headings |
| Deep Blue | `#0b1c39` | Heading defaults (h1-h6) |
| Navy Dark BG | `#16161a` | Black-bg sections |
| Navy Accent | `#1f2b7b` | About badge, primary buttons, list bullets, link color |
| Medium Blue | `#1696e7` | Theme overlay, link hover |
| Steel | `#191a33` | Sticky header background |
| Link Color | `#635c5c` | Default link color |
| Light BG 1 | `#f5f5f5` | Gray background |
| Light BG 2 | `#f7f7fd` | Gray background variant |
| Light BG 3 | `#f1f4fa` | Brand background |
| Light BG 4 | `#f9fafc` | Testimonial background |
| Card BG | `#fcfdff` | Service card background |
| Blog Dark | `#00235b` | Latest news card background |
| CTA Date | `#c94500` | Blog date badge, team role text |
| White | `#ffffff` | Text on dark, button backgrounds |
| Text Dark | `#161e46` | Secondary text |
| Text Gray | `#828bb2` | Typography secondary |
| Border Light | `#f6f7f8` | Decorative stroke text |
| Border Subtle | `#eee` | Dividers |

### Typography
| Token | Value | Usage |
|-------|-------|-------|
| Heading font | `"Teko"` (Google Fonts) | Section titles, hero captions |
| Body font | `"Barlow"` (Google Fonts) | Body text, navigation, buttons |
| Section title size | 70px / weight 700 / uppercase | Section headings |
| Hero h1 size | 140px / weight 900 | Hero headline |
| Hero stock-text | 140px / weight 800 | Animated hero word |
| Body text | 16px / line-height 24px | Paragraph text |

### Buttons
| Style | Radius | Padding | Notes |
|-------|--------|---------|-------|
| `.btn` (primary) | 5px | 25px 22px | Orange fill, hover sweep effect |
| `.red-btn2` (CTA) | 5px | 30px 51px | Teko font, uppercase |
| `.boxed-btn` (outline) | 0 | 18px 44px | White fill, orange border |
| `.white-btn` | 0 | 25px 22px | White fill, orange hover sweep |
| `.more-btn` | — | auto | Text link with square icon |
| `.d-btn` (blog) | — | auto | Text link with underline |

### Decorative
- **Section title pattern:** Front text (70px Teko uppercase) with background "back-text" (140px outlined, `#f6f7f8` stroke, positioned absolutely behind)
- **Hero overlay:** `linear-gradient(0deg, rgba(2,8,52,0.75) 0%, rgba(2,8,52,0.15) 100%)`
- **Hero animation:** Clip-path wave animation on the word "Construction"
- **Team role:** Small orange bar before role text (`#c94500`)
- **Blog date badge:** Overlaid on image top-left, `#c94500` background

## Section Structure

Order from the live preview HTML:

1. **Header** — Transparent overlay, sticky on scroll. Top bar: phone, email, hours, social icons. Main bar: logo, nav (Home, About, Projects, Services, Blog, Pages, Contact), CTA button.
2. **Hero Slider** — Full-width background image with dark overlay. Two slides. Large headline text ("Advanced" / "Expert" in orange), animated word "Construction" with clip-path wave, CTA "Our Services".
3. **Services** — 3-column cards. Each: image + title + "Read More" link with icon. Light background (#fcfdff).
4. **About / Support Company** — Split layout. Left: section title "Who we are" (back-text: "About us"), description paragraphs, "Read More" CTA button. Right: large image with floating badge "1994 Since" (navy blue rounded).
5. **Projects Gallery** — Tabbed filter (Show all, Interior, Recent, Big building, Park). 3x2 grid of project cards. Each: image + title + category + hover effect (dark overlay, plus icon).
6. **Contact CTA** — Full-width background image. "Contact With Us" section heading. Parallax-style.
7. **Counter Stats** — 3-column stats on background image. Each: large number + label ("Machinery", "Tools"). Dark overlay.
8. **Team** — 3 member cards. Each: image + role (small text with orange bar) + name.
9. **Testimonial** — Carousel slider. Each: large SVG quote icon (orange stroke), testimonial text, author name + title. Light background.
10. **Latest News** — 2-column blog cards on dark background (#00235b). Each: image with date badge (orange), category, title, "Read more" link.
11. **Footer** — 4 columns: Logo + description, Quick Links, Contact info, Newsletter form + map. Dark background with copyright bar.

## Requirements

### Feature: Header Navigation

#### Scenario: Transparent header displays on page load

- **GIVEN** the user loads the page
- **THEN** the header should be visible with transparent background
- **AND** the logo should link to the home page
- **AND** navigation should show: Home, About, Projects, Services, Blog, Contact

#### Scenario: Header becomes sticky on scroll

- **GIVEN** the user scrolls down past the hero section
- **THEN** the header should become fixed at the top
- **AND** the background should change to dark (#191a33)

### Feature: Hero Section

#### Scenario: Hero displays with background image and overlay

- **GIVEN** the user loads the page
- **THEN** the hero section should display a full-width background image
- **AND** a dark gradient overlay should be visible
- **AND** the headline text should be visible

#### Scenario: Hero shows CTA button

- **GIVEN** the hero section is visible
- **THEN** a "Our Services" link button should be present
- **AND** clicking it should navigate to the services section

### Feature: Services Section

#### Scenario: Services section displays 3 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** 3 service cards should be visible
- **AND** each card should have an image, title, and "Read More" link

#### Scenario: Service card hover effect

- **GIVEN** a service card is displayed
- **WHEN** the user hovers over the card
- **THEN** the image should scale up slightly
- **AND** the "Read More" icon should change color

### Feature: About Section

#### Scenario: About section displays split layout

- **GIVEN** the user scrolls to the about section
- **THEN** the left side should show "Who we are" heading with "About us" background text
- **AND** descriptive paragraphs should be visible
- **AND** a "Read More" button should be present
- **AND** the right side should show an image with a "1994 Since" badge

#### Scenario: About badge styling

- **GIVEN** the about section is visible
- **THEN** the year badge should have a navy blue (#1f2b7b) background
- **AND** the badge should be positioned at the bottom-right of the image

### Feature: Projects Gallery

#### Scenario: Projects section displays with tab filters

- **GIVEN** the user scrolls to the projects section
- **THEN** filter tabs should be visible: Show all, Interior, Recent, Big building, Park
- **AND** 6 project cards should be visible in "Show all" tab

#### Scenario: Project card hover effect

- **GIVEN** a project card is displayed
- **WHEN** the user hovers over the card
- **THEN** the caption background should turn dark (#00235b)
- **AND** a plus icon should appear
- **AND** the text should turn white

### Feature: Counter Stats

#### Scenario: Counter section displays 3 stats

- **GIVEN** the user scrolls to the counter section
- **THEN** 3 stat items should be visible
- **AND** each should show a large number and label
- **AND** the section should have a background image with overlay

### Feature: Team Section

#### Scenario: Team section displays 3 members

- **GIVEN** the user scrolls to the team section
- **THEN** 3 team member cards should be visible
- **AND** each card should show an image, role, and name
- **AND** the role text should have an orange (#c94500) decorative bar

#### Scenario: Team card hover effect

- **GIVEN** a team card is displayed
- **WHEN** the user hovers over the card
- **THEN** the team image should scale up slightly

### Feature: Testimonials

#### Scenario: Testimonials display in carousel

- **GIVEN** the user scrolls to the testimonial section
- **THEN** a carousel of testimonials should be visible
- **AND** each testimonial should show a quote icon, text, author name, and title
- **AND** navigation arrows should allow cycling through testimonials

### Feature: Latest News

#### Scenario: News section displays 2 blog cards

- **GIVEN** the user scrolls to the news section
- **THEN** 2 blog cards should be visible on a dark (#00235b) background
- **AND** each card should have an image with date badge, category, title, and "Read more" link

#### Scenario: Blog date badge styling

- **GIVEN** a blog card is displayed
- **THEN** the date badge should be positioned top-left on the image
- **AND** the badge should have an orange (#c94500) background
- **AND** the date number and month should be white

### Feature: Footer

#### Scenario: Footer displays 4 columns

- **GIVEN** the user scrolls to the footer
- **THEN** the footer should show: logo + description, Quick Links, Contact info, Newsletter form
- **AND** the newsletter form should have an email input and "SIGN UP" button
- **AND** a map image should be visible below the newsletter form
- **AND** a copyright bar should be at the bottom
- **AND** the footer should link to https://www.componentdock.com/

#### Scenario: Footer navigation links

- **GIVEN** the footer is visible
- **THEN** Quick Links should include: About, Services, Projects, Contact Us

## Verification Checklist

- [ ] All sections render in correct order (11 sections)
- [ ] Header: transparent → sticky on scroll with dark background
- [ ] Hero: background image, overlay, headline, animated text, CTA
- [ ] Services: 3 cards with images, titles, Read More links
- [ ] About: split layout, heading with back-text, badge
- [ ] Projects: tab filters, 6 cards, hover effects
- [ ] Counter: 3 stats with background image
- [ ] Team: 3 members, hover scale effect
- [ ] Testimonials: carousel with quote icon, navigation
- [ ] Latest News: 2 cards on dark background, date badges
- [ ] Footer: 4 columns, newsletter form, Component Dock link
- [ ] Responsive: mobile menu toggle, stacked layouts at breakpoint
- [ ] Fonts loaded: Barlow (body), Teko (headings)
- [ ] Brand color #ff5f13 used consistently for CTAs and accents
- [ ] Placeholder images via picsum.photos/seed/buildsite-N/W/H
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (TDD)
