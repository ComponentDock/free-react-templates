# Template: BrightHaven (Education / University)
<!-- prep-status: shipped-as=brightmind -->
> **SHIPPED-UNDER** — the ColorLib `genius` design this prep describes already
> ships as `apps/brightmind` (<https://brightmind.free.componentdock.com>).
> Do not scaffold `apps/brighthaven`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-brightmind/spec.md`.

## Purpose

Recreation of ColorLib's **Genius** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Genius
- **ColorLib URL:** https://colorlib.com/wp/template/genius/
- **Live preview:** https://preview.colorlib.com/theme/genius/
- **New app name:** `brighthaven`
- **Package:** `@free-react-templates/brighthaven`

## Design tokens

| Token | Value |
| --- | --- |
| Brand primary | `#167ce9` (blue) |
| Brand secondary | `#ffc300` (golden yellow) |
| Accent cyan | `#78d5ef` (light cyan) |
| Dark bg | `#1b212c` (dark navy) |
| Text dark | `#212529` |
| Text muted | `#6c757d` / `#8d9db9` |
| White | `#ffffff` |
| Font heading | `"Work Sans", sans-serif` |
| Font body | `"Roboto", Arial, sans-serif` |
| Button radius | `30px` (rounded) |
| Card radius | `4px` |
| Avatar radius | `50%` (circular) |
| Surface (measured) | `#ffd900` — paints it ×24 — `background` on `.hero-wrap .overlay`; style.css (69,362 B, sha256 d339e56a282a) · <https://preview.colorlib.com/theme/genius/> |

## Section structure

1. **Navbar** — Logo ("Genius University"), nav (Home, About, Courses, Teacher, Blog, Events, Contact), "Apply Now!" CTA button
2. **Hero** — Full-width background image, heading "No Nation Can Prosper In Life Without Education", two CTAs: "Apply Now" + "View Courses"
3. **Search Course** — Search bar section ("I want to study" + "See all courses" link)
4. **Info Cards** — 3 cards: Workshop 2018, Admission, Notice Board, Our Library (4 items)
5. **About/Stats** — "Genius University is a Leading Schools" heading + description
6. **Counters** — 4 stat counters on light background (bg-light)
7. **Testimonials** — "What Our Student Says" carousel with student avatars
8. **Advisors** — "Our Experience Advisor" — instructor profiles (circular avatars, names)
9. **Free Trial CTA** — "Try our free trial course" + "Join now!" button
10. **Courses** — "Our Courses" — 3 course cards (English, Computer Engineering, Business Studies) + "View All Courses"
11. **Blog** — "Recent from blog" — 3 blog post cards with dates
12. **Events** — "Our Latest Events" section
13. **Newsletter Parallax** — "Subscribe to our Newsletter" on parallax background
14. **Footer** — "Genius University" branding, columns, Component Dock link

## Requirements

### Feature: BrightHaven template behaviour

Feature: BrightHaven Navigation

#### Scenario: Navbar displays correctly

- **GIVEN** the user visits the BrightHaven homepage
- **THEN** the navbar shows "BrightHaven" logo
- **AND** links: Home, About, Courses, Teacher, Blog, Events, Contact
- **AND** an "Apply Now" CTA button is visible

Feature: BrightHaven Hero

#### Scenario: Hero shows headline and CTAs

- **GIVEN** the user visits the homepage
- **THEN** a heading about education is displayed
- **AND** "Apply Now" and "View Courses" buttons are visible

Feature: BrightHaven Search

#### Scenario: Course search bar works

- **GIVEN** the user scrolls to the search section
- **THEN** a search input with "I want to study" label is visible

Feature: BrightHaven Counters

#### Scenario: Four stat counters shown

- **GIVEN** the user scrolls to the counters
- **THEN** 4 counters with numbers and labels appear on light bg

Feature: BrightHaven Testimonials

#### Scenario: Student testimonials carousel

- **GIVEN** the user scrolls to testimonials
- **THEN** a carousel with student quotes and avatars is displayed

Feature: BrightHaven Advisors

#### Scenario: Advisor profiles shown

- **GIVEN** the user scrolls to advisors
- **THEN** instructor profiles with circular avatars and names appear

Feature: BrightHaven Free Trial

#### Scenario: Free trial CTA section

- **GIVEN** the user scrolls to the trial section
- **THEN** "Try our free trial course" heading and "Join now!" button are visible

Feature: BrightHaven Courses

#### Scenario: Course cards displayed

- **GIVEN** the user scrolls to courses
- **THEN** 3 course cards are shown with titles and "Enroll now!" links
- **AND** a "View All Courses" link exists

Feature: BrightHaven Blog

#### Scenario: Blog posts shown

- **GIVEN** the user scrolls to blog
- **THEN** 3 blog post cards with dates and titles are displayed

Feature: BrightHaven Newsletter

#### Scenario: Newsletter signup on parallax bg

- **GIVEN** the user scrolls to newsletter
- **THEN** "Subscribe to our Newsletter" heading is visible with email input

Feature: BrightHaven Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** the user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" branded "Component Dock" exists

## Verification checklist

- [ ] Brand blue `#167ce9` for buttons/links
- [ ] Secondary gold `#ffc300` for highlights
- [ ] Work Sans for headings, Roboto for body
- [ ] 30px rounded buttons
- [ ] Hero with bg image + two CTAs
- [ ] Search course section
- [ ] 4 stat counters on light bg
- [ ] Testimonial carousel with avatars
- [ ] Advisor profiles with circular avatars
- [ ] Free trial CTA section
- [ ] 3 course cards + "View All"
- [ ] Blog section with 3 posts
- [ ] Events section
- [ ] Newsletter parallax section
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
