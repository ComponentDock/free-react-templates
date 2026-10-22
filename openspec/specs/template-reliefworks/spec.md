# Template: ReliefWorks (Charity Foundation)
<!-- prep-status: shipped-as=givecause -->
> **SHIPPED-UNDER** — the ColorLib `charity-works` design this prep describes already
> ships as `apps/givecause` (<https://givecause.free.componentdock.com>).
> Do not scaffold `apps/reliefworks`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-givecause/spec.md`.

## Purpose

React 19 + Vite + Tailwind CSS 4 + TypeScript recreation of the ColorLib
"Charity Works" template — a charity foundation website designed to raise
awareness and showcase donation causes, volunteer teams, and events.

- **Source:** ColorLib "Charity Works" — https://colorlib.com/wp/template/charity-works/
- **Preview (original):** https://preview.colorlib.com/theme/charityworks/
- **Screenshot (fallback reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/charityworks-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/reliefworks`
- **Deploy target:** `reliefworks.free.componentdock.com`

> Note: The original ColorLib preview URL returns 404 at
> `preview.colorlib.com/theme/charity-works/` but works at
> `preview.colorlib.com/theme/charityworks/`. Screenshot used as secondary
> reference. Design tokens extracted from the live preview stylesheet.

## Design Tokens

### Colors

| Token              | Hex       | Usage                                           |
| ------------------ | --------- | ----------------------------------------------- |
| `--brand-green`    | `#09cc7f` | Primary brand color (CTAs, highlights, accents) |
| `--brand-navy`     | `#1f2b7b` | Secondary (secondary buttons, outlines)         |
| `--brand-dark`     | `#072366` | Navbar text, dark accents                       |
| `--heading-color`  | `#002d5b` | Hero heading and major headings                 |
| `--text-gray`      | `#64676c` | Body text color                                 |
| `--bg-light`       | `#f8fcff` | Service area, WantToWork section backgrounds    |
| `--bg-white`       | `#ffffff` | Card backgrounds                                |
| `--white`          | `#fff`    | Text on dark/parallax backgrounds               |
| `--count-bg`       | parallax  | Counter section (dark overlay on parallax img)  |

### Typography

- **Font family:** `"Mulish", sans-serif` (Google Fonts, originally "Muli" rebranded to Mulish)
- **Hero heading:** 70px, weight 800, color `#002d5b`, line-height 1.2
- **Section headings:** bold, centered, with bottom margin (~80px mb)
- **Body text:** 16px, color `#64676c`, line-height 1.6
- **Counter text:** 40px, weight 700, uppercase, white

### Buttons

- **Primary (hero):** green `#09cc7f` bg, white text, padding 30px 62px, border-radius 5px, hover darkens
- **White button:** white bg, navy `#072366` text, padding 30px 39px, border-radius 5px
- **Secondary (navy):** `#1f2b7b` bg, white text, border-radius 5px
- **Outlined:** transparent bg, `#1f2b7b` border + text, border-radius 5px

### Layout & Spacing

- **Section padding standard:** 120px top/bottom
- **Section padding large (about area):** 200px top/bottom
- **Card border-radius:** 6px
- **Avatar border-radius:** 50% (circular)
- **Hero section:** full-width background image, text left-aligned
- **Parallax sections:** fixed background-attachment for events, counter areas

## Requirements

### Feature: ReliefWorks template behaviour

#### Scenario: Header renders with top bar and sticky navigation

- **GIVEN** the user visits the ReliefWorks page
- **THEN** a top bar is visible with phone number and email
- **AND** a language selector dropdown is shown
- **AND** a "Subscribe Now" link is present
- **AND** social media icons (Twitter, Facebook, LinkedIn, Google) are shown
- **AND** a sticky navigation bar with logo and menu links is visible
- **AND** a "Donate" button is in the header

#### Scenario: Hero section displays mission headline and CTAs

- **GIVEN** the user is on the ReliefWorks homepage
- **THEN** the hero section shows a background image
- **AND** the heading "We Are In A Mission To Help The Helpless" is displayed
- **AND** two buttons are present: "Donate" and "About US"

#### Scenario: Services section shows three service cards

- **GIVEN** the user scrolls to the services section
- **THEN** the section has a light background (#f8fcff)
- **AND** three service cards are displayed
- **AND** each card has an icon, a title, and a short description
- **AND** cards have white background with rounded corners (border-radius: 6px)

#### Scenario: About section shows mission description and CTAs

- **GIVEN** the user scrolls to the about section
- **THEN** the heading "We Are In A Mission To Help Helpless" is shown
- **AND** a paragraph describes the charity's mission
- **AND** a left-aligned image is displayed alongside the text
- **AND** an "About US" button and a "Become A Volunteer" button are present

#### Scenario: Our Causes section shows causes with progress bars

- **GIVEN** the user scrolls to the causes section
- **THEN** the heading "Explore our latest causes that we works" is displayed
- **AND** three cause cards are shown
- **AND** each cause card has an image, title, and donation progress bar
- **AND** a "Donate" link is on each card

#### Scenario: Featured Events section with parallax background

- **GIVEN** the user scrolls to the events section
- **THEN** a parallax background image is displayed
- **AND** the heading "We arrange many social events for charity donations" is shown
- **AND** the section has a dark overlay treatment

#### Scenario: Team section shows volunteer profiles

- **GIVEN** the user scrolls to the team section
- **THEN** the heading "Our Expert Volunteer Alwyes ready" is displayed
- **AND** four team member cards are shown
- **AND** each card has a circular avatar image, name, and role
- **AND** social media icons are below each member

#### Scenario: CTA / WantToWork section

- **GIVEN** the user scrolls to the call-to-action section
- **THEN** the heading "Lets Chenge The World With Humanity" is displayed
- **AND** a "Become A Volunteer" button is shown
- **AND** the section has a light background

#### Scenario: Testimonials section with slider

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a testimonial slider is displayed
- **AND** each testimonial shows a quote, name, and role
- **AND** dot navigation indicators allow switching between testimonials

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the blog section
- **THEN** the heading "Latest News from our recent blog" is displayed
- **AND** three blog post cards are shown
- **AND** each card has an image, date, title, and excerpt

#### Scenario: Counter / Funfact section with stats

- **GIVEN** the user scrolls to the counter section
- **THEN** a parallax background is displayed
- **AND** four statistic counters are shown in white text
- **AND** counters show animated numbers (e.g., total donations, volunteers, events)

#### Scenario: Footer with three columns and copyright

- **GIVEN** the user scrolls to the footer
- **THEN** three columns are displayed: Contact Info, Important Links, and Newsletter
- **AND** a newsletter signup form with email input is present
- **AND** social media icons are shown
- **AND** a copyright bar with Component Dock link is at the bottom

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device
- **THEN** the navigation collapses into a hamburger menu
- **AND** service cards stack vertically
- **AND** the about section stacks image above text
- **AND** the footer columns stack vertically

## Verification Checklist

- [ ] All sections match the original order: Header → Hero → Services → About → Causes → Events → Team → CTA → Testimonials → Blog → Counter → Footer
- [ ] Brand green `#09cc7f` used for primary buttons and accents
- [ ] Navy `#1f2b7b` used for secondary buttons and outlined elements
- [ ] Mulish font loaded from Google Fonts
- [ ] Hero section has background image placeholder via picsum.photos
- [ ] Parallax sections use `bg-fixed` or equivalent Tailwind class
- [ ] Cards use white background with 6px border-radius
- [ ] Team avatars are circular (50% border-radius)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No references to ColorLib in any app source files
- [ ] Placeholder images via `picsum.photos/seed/reliefworks-<n>/<w>/<h>`
- [ ] Icons from `lucide-react`
- [ ] `packages/ui` components reused where applicable (Button, ButtonLink, etc.)
- [ ] Tests written first (TDD), 100% coverage on changed files
- [ ] Spec validates: `npm run spec:validate`
