# Template: Playbook (Portfolio / Creative Agency)

## Purpose

Recreation of ColorLib **Strategy** portfolio/creative agency template.

- **Source:** https://colorlib.com/wp/template/strategy/
- **Preview:** https://preview.colorlib.com/theme/strategy/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/strategy-free-template.jpg
- **Category:** Portfolio / Creative Agency
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token                 | Value                                                                                  | Usage                                                              |
| --------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Font family           | System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) | All text (no custom Google Font — pure system stack)                |
| Brand red             | `#dc3545`                                                                              | CTA section hover bg, hover overlay, footer social link hover color |
| Dark text             | `#000`                                                                                 | Headings, navbar logo, hero text, CTA text                         |
| Secondary text        | `#495057` / `#6c757d`                                                                  | Body text, secondary labels                                        |
| Light text            | `#b3b3b3`                                                                              | Footer social icons                                                |
| Border/light          | `#ccc` / `#e6e6e6`                                                                     | Borders, dividers                                                  |
| Light gray bg (CTA)   | `#f8f9fa`                                                                              | CTA section background                                             |
| Light gray bg (forms) | `#f6f6f6` / `#f7f7f7`                                                                  | Section alternating bg, form control bg                            |
| White                 | `#fff`                                                                                 | Page background, hover overlay text                                |
| Footer border         | `1px solid #F4F4F4`                                                                     | Top border of footer section                                       |
| Button style          | `border-radius: 30px` (pill), `border-radius: 4px` (rectangular), `50%` (circle)       | Mixed radius usage                                                 |
| Hero height           | `90vh` / `min-height: 700px`                                                           | Hero section                                                       |
| Hero font size        | `70px` desktop, responsive scaling                                                     | Hero headline                                                      |
| Portfolio overlap     | `margin-top: -100px`                                                                   | Portfolio grid overlaps hero bottom by 100px                       |
| Hover overlay         | `rgba(220, 53, 69, 0.9)` — brand red with 0.9 opacity                                  | Portfolio/blog item hover state                                    |
| CTA hover animation   | Red `#dc3545` bg slides up from bottom to fill section, text swaps from "Start a Project." to "Let's chat we are good people." | Interactive CTA section                                            |
| Section padding       | `7em 0`                                                                                | All major sections                                                 |

## Requirements

### Requirement: Navbar SHALL display logo and navigation links

The navbar MUST render a logo text and navigation links with a hamburger toggle for mobile.

#### Scenario: Logo displays in navbar

- **WHEN** the page is loaded
- **THEN** a logo text "Playbook" is visible in the navbar left area

#### Scenario: Navigation links are present

- **WHEN** the page is loaded
- **THEN** the navbar contains navigation links: "Work", "About", "Blog", "Contact"

#### Scenario: Mobile nav switch

- **WHEN** the viewport is mobile width (< 768px)
- **THEN** a hamburger menu icon is visible
- **AND** the main menu is hidden behind the toggle

#### Scenario: Navbar is positioned absolute over hero

- **WHEN** the page is loaded
- **THEN** the navbar is positioned absolutely over the hero section
- **AND** it has transparent background

### Requirement: Hero SHALL display full-height section with headline

The hero section MUST render a large centered headline with a scroll-down arrow.

#### Scenario: Hero headline displays

- **WHEN** the page is loaded
- **THEN** a full-height hero section is visible (90vh, min-height 700px)
- **AND** it contains the headline "We are Playbook. A digitally minded creative agency based in NYC."

#### Scenario: Scroll-down arrow is present

- **WHEN** the page is loaded
- **THEN** a scroll-down arrow/chevron link is visible at the bottom of the hero section

#### Scenario: Hero headline styling

- **WHEN** the page is loaded
- **THEN** the hero headline uses font-size 70px on desktop
- **AND** text color is black (#000)

### Requirement: Portfolio overlap section SHALL display project grid with hover overlays

The portfolio section MUST display project items in a 2+3 grid that overlaps the hero, with hover overlay effects.

#### Scenario: Portfolio grid items are shown

- **WHEN** the page is loaded
- **THEN** 5 portfolio items are displayed
- **AND** the first row has 2 large items (col-md-6 each)
- **AND** the second row has 3 smaller items (col-lg-4 each)

#### Scenario: Portfolio items have hover overlay

- **WHEN** a portfolio item is hovered
- **THEN** a red overlay (rgba(220,53,69,0.9)) fades in over the image
- **AND** the project title text is displayed centered in white
- **AND** "View Case Study" subtitle appears below the title

#### Scenario: Portfolio section overlaps hero

- **WHEN** the page is loaded
- **THEN** the portfolio section has negative margin-top (-100px) overlapping the hero

### Requirement: What We Do section SHALL display services with icons

The services section MUST display a heading, description text, and 4 service items with icons.

#### Scenario: Section heading displays

- **WHEN** the page is loaded
- **THEN** the "What We Do" heading is visible on the left side

#### Scenario: Description text displays

- **WHEN** the page is loaded
- **THEN** a description paragraph is visible: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."

#### Scenario: Four service items display

- **WHEN** the page is loaded
- **THEN** 4 service items are displayed in a 2x2 grid: "Web Development", "Brand identity", "Copywriting", "eCommerce"
- **AND** each service has an icon and descriptive text

### Requirement: Recent Blog Posts section SHALL display posts with hover effects

The blog section MUST display a heading and blog post items with hover overlays.

#### Scenario: Section heading displays

- **WHEN** the page is loaded
- **THEN** the "Recent Blog Posts" heading is visible on the left side

#### Scenario: Blog post items display

- **WHEN** the page is loaded
- **THEN** 3 blog post items are displayed
- **AND** the first post is full-width (col-lg-12)
- **AND** the second row has 2 posts side by side (col-lg-6 each)

#### Scenario: Blog posts have hover overlay

- **WHEN** a blog post is hovered
- **THEN** a red overlay (rgba(220,53,69,0.9)) fades in
- **AND** the post title and date are displayed in white

#### Scenario: "Read All Blog Posts" link

- **WHEN** the page is loaded
- **THEN** a "Read All Blog Posts" link is visible below the blog posts

### Requirement: CTA section SHALL display animated call-to-action

The CTA section MUST display an interactive headline that changes text on hover with a red background fill animation.

#### Scenario: CTA text displays

- **WHEN** the page is loaded
- **THEN** the CTA section shows "Start a Project." text
- **AND** the section background is light gray (#f8f9fa)

#### Scenario: CTA hover animation

- **WHEN** the user hovers over the CTA section
- **THEN** a red (#dc3545) background slides up from the bottom to fill the section
- **AND** the text changes from "Start a Project." to "Let's chat we are good people."
- **AND** the text color changes to white

### Requirement: Footer SHALL display copyright, social links, and Component Dock branding

The footer MUST display copyright text, social media links, and Component Dock attribution.

#### Scenario: Copyright text displays

- **WHEN** the page is loaded
- **THEN** a copyright line is displayed in the footer left area

#### Scenario: Social links in footer

- **WHEN** the page is loaded
- **THEN** social links are visible: Facebook, Twitter, Dribbble, Instagram
- **AND** social links change to red (#dc3545) on hover

#### Scenario: Footer links to Component Dock

- **WHEN** the page is loaded
- **THEN** the footer links to "https://www.componentdock.com/" (Component Dock)
- **AND** no ColorLib attribution is visible

#### Scenario: Footer border

- **WHEN** the page is loaded
- **THEN** the footer has a top border (1px solid #F4F4F4)

## Layout Structure (section order)

1. **Navbar** — logo "Playbook" (left) + nav links (Work/About/Blog/Contact) (right), hamburger toggle for mobile, absolute positioned over hero
2. **Hero** — full-height (90vh, min 700px) with large centered headline "We are Playbook. A digitally minded creative agency based in NYC." and scroll-down arrow
3. **Portfolio overlap** — 2+3 grid of project items overlapping hero by -100px, each with hover overlay (red, "View Case Study")
4. **What We Do** — left heading + right side with description text + 4 service items (Web Development, Brand identity, Copywriting, eCommerce) with icons in 2x2 grid
5. **Recent Blog Posts** — left heading + right side with 1 full-width + 2 side-by-side posts with hover overlays, "Read All Blog Posts" link
6. **CTA** — full-width animated section with "Start a Project." / "Let's chat we are good people." text swap, red background fill on hover
7. **Footer** — copyright left, social icons (Facebook/Twitter/Dribbble/Instagram) right, border-top separator, Component Dock link

## Verification Checklist

- [ ] All sections render (navbar, hero, portfolio, what-we-do, blog, CTA, footer)
- [ ] System font stack used (no custom Google Font)
- [ ] Brand colors match: #dc3545 red, #000 black, #f8f9fa light gray
- [ ] Hero section is 90vh with 70px headline
- [ ] Portfolio grid: 2 large + 3 small items with -100px overlap
- [ ] Portfolio hover overlay: red (rgba(220,53,69,0.9)) with "View Case Study"
- [ ] What We Do: 4 services (Web Development, Brand identity, Copywriting, eCommerce)
- [ ] Blog posts: 1 full-width + 2 side-by-side with hover overlays
- [ ] CTA: animated text swap on hover, red background fill
- [ ] Footer: copyright, 4 social icons, Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
- [ ] Responsive: hamburger nav on mobile, single-col grid
