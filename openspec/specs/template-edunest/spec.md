# Template: EduNest (Education)
<!-- prep-status: shipped-as=classroom -->
> **SHIPPED-UNDER** — the ColorLib `oneschool` design this prep describes already
> ships as `apps/classroom` (<https://classroom.free.componentdock.com>).
> Do not scaffold `apps/edunest`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-classroom/spec.md`.

## Purpose

Recreation of the ColorLib "OneSchool" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for an education / school website.

- **Source:** https://colorlib.com/wp/template/oneschool/
- **Preview:** https://preview.colorlib.com/theme/oneschool/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/edunest`
- **Deploy:** `edunest.free.componentdock.com`

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand` | `#7971EA` | Primary brand — medium purple/violet. Buttons, form focus, active nav links, CTA pill, dropdown border-top, icon backgrounds, courses title bg |
| `--color-dark` | `#343A40` | Dark text headings, hero description bg, body text variant |
| `--color-body-text` | `gray` (CSS default) | Body text — `color: gray; font-weight: 300` |
| `--color-white` | `#FFFFFF` | Card backgrounds, navbar overlay, section defaults |
| `--color-light-bg` | `#F8F9FA` | Contact form section (`bg-light`) |
| `--color-border-light` | `#EDF0F5` | Border-top on course stats, dropdown borders |
| `--color-border-nav` | `#F3F3F4` | Navbar border-bottom |
| `--color-hero-overlay` | `rgba(0,0,0,0.7)` | Background image overlay on testimonial/quote section |
| `--color-footer-subscribe-bg` | `#7971EA` | Subscribe button in footer |

**Fonts (Google Fonts):**
- `"Muli"` — all headings (h1–h6), form controls, body text fallback (weights: 300, 400, 700, 900)
- Note: "Muli" was renamed to "Mulish" on Google Fonts; use `Mulish` in implementation

**Button shapes:**
- Primary CTA (`.btn-primary`): `border-radius: 30px` (`.btn-pill`), bg `#7971EA`, white text, uppercase, font-weight 900, font-size 12px, padding 14px 30px
- Form submit buttons: same `.btn-pill` style, full-width on contact form

**Section backgrounds:**
- Hero: background image (`hero_1.jpg`) with no overlay, full-width
- Courses title strip: solid `#7971EA` background
- Courses carousel: white bg on cards
- Programs: white bg, illustration images on left, text + icon stats on right
- Teachers: white bg, teacher cards with image + name + role
- Testimonial: background image with dark overlay (`rgba(0,0,0,0.7)`), centered quote
- Why Choose Us: white bg, stat cards with icon + label
- Contact (Message Us): light gray bg (`#F8F9FA`)
- Footer: white bg, 3-column (About, Links, Subscribe) + copyright

## Design notes (from visual reference + live preview DOM)

The template has a clean, professional education aesthetic:
- Purple/violet (`#7971EA`) as the dominant brand color — used on buttons, active states, icon backgrounds, courses title strip, and form focus borders
- Clean white backgrounds with gray body text at font-weight 300
- Hero section: full-width background image with headline "Learn From The Expert" + sign-up form overlay on the right
- Pill-shaped buttons (`border-radius: 30px`) on all CTAs
- Courses displayed as a carousel with prev/next navigation
- Programs section: alternating left/right layout with illustration images + stat counters (graduates, universities)
- Teacher profile cards in a 3-column grid
- Single testimonial quote with author photo in a dark-overlay background section
- "Why Choose Us" stat cards with icon + label pairs
- Contact form (Message Us) on light gray background
- Footer: 3-column (About, Links, Subscribe with email input)

## Requirements

### Feature: EduNest Homepage

#### Scenario: Navbar renders with logo and navigation links

- **GIVEN** the user loads the homepage
- **THEN** a sticky navigation bar is visible at the top
- **AND** the logo "EduNest" is displayed on the left in white, font-weight 900
- **AND** navigation links include: Home, Courses, Programs, Teachers
- **AND** a "Contact Us" CTA button is shown on the right with pill shape (`border-radius: 30px`), background `#7971EA`
- **AND** the active nav link color is `#7971EA`
- **AND** the navbar is transparent/overlaying the hero image

#### Scenario: Hero section displays headline and sign-up form

- **GIVEN** the user views the hero area
- **THEN** a background image is displayed (education/school imagery)
- **AND** the heading reads "Learn From The Expert" in white, large font
- **AND** a paragraph with descriptive text is shown below the heading
- **AND** an "Admission Now" pill-shaped CTA button is present with background `#7971EA`
- **AND** a sign-up form is displayed on the right with fields: Email, Password, Re-type Password, and a "Sign up" submit button
- **AND** the sign-up form has a white background card overlay

#### Scenario: Courses section displays course carousel

- **GIVEN** the user scrolls to the courses section
- **THEN** a section title "Courses" is centered with a `#7971EA` background strip
- **AND** course cards are displayed in a carousel layout
- **AND** each course card shows: image, price badge, lesson/week count, course title, description, student count, and comment count
- **AND** prev/next navigation buttons are centered below the carousel
- **AND** course cards have white background with a stats row at the bottom separated by a border

#### Scenario: Our Programs section shows alternating illustration and stats

- **GIVEN** the user scrolls to the programs section
- **THEN** a section title "Our Programs" is centered with descriptive paragraph
- **AND** three content rows are displayed alternating left/right layout
- **AND** each row has an illustration image on one side and text + stat counters on the other
- **AND** the stat counters show: "22,931 Yearly Graduates" and "150 Universities Worldwide" with icon + text
- **AND** section headings include "We Are Excellent In Education", "Strive for Excellent", "Education is life"

#### Scenario: Our Teachers section displays teacher profiles

- **GIVEN** the user scrolls to the teachers section
- **THEN** a section title "Our Teachers" is centered
- **AND** teacher profile cards are displayed in a 3-column grid
- **AND** each card shows: teacher image, name (e.g. "Benjamin Stone", "Katleen Stone", "Sadie White")
- **AND** teacher names are styled in dark text (`#343A40`)

#### Scenario: Testimonial section shows a quote with dark overlay

- **GIVEN** the user scrolls to the testimonial section
- **THEN** a background image is displayed with a dark overlay (`rgba(0,0,0,0.7)`)
- **AND** a centered quote block is shown with an author photo (rounded circle)
- **AND** the author name "Jerome Jensen" is displayed above the blockquote
- **AND** the quote text is enclosed in a blockquote element

#### Scenario: Why Choose Us section shows stat cards

- **GIVEN** the user scrolls to the Why Choose Us section
- **THEN** a section title "Why Choose Us" is centered
- **AND** stat cards are displayed in a column on the left side (`col-lg-4 ml-auto`)
- **AND** each stat card has an icon (graduation-cap or university) and a label
- **AND** stats include: "22,931 Yearly Graduates", "150 Universities Worldwide", "Top Professionals in The World", "Expand Your Knowledge", "Best Online Teaching Assistant Courses", "Best Teachers"
- **AND** icon backgrounds use the brand color `#7971EA`

#### Scenario: Contact form section renders with fields

- **GIVEN** the user scrolls to the contact section
- **THEN** the section has a light gray background (`#F8F9FA`)
- **AND** a section title "Message Us" is centered
- **AND** a contact form is displayed with fields: First Name, Last Name, Subject, Email, Message (textarea)
- **AND** a "Send Message" submit button spans the full width with pill shape and `#7971EA` background

#### Scenario: Footer renders with three columns and copyright

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a white background
- **AND** it contains three columns: "About EduNest" (description text), "Links" (Home, Courses, Programs, Teachers), "Subscribe" (email input + subscribe button)
- **AND** a copyright line at the bottom with a "Component Dock" link
- **AND** the copyright links to `https://www.componentdock.com/`

#### Scenario: Responsive layout adapts to mobile

- **GIVEN** the user views the page on a viewport ≤ 768px
- **THEN** the header collapses to a mobile hamburger menu
- **AND** the hero sign-up form stacks below the heading
- **AND** multi-column grids (courses, programs, teachers) stack to single column
- **AND** navbar container padding reduces from 7rem to 15px

#### Scenario: No ColorLib references in app code

- **GIVEN** any source file under `apps/edunest/`
- **THEN** no file contains the strings "colorlib", "ColorLib", or "preview.colorlib.com"
- **AND** provenance is only in the spec and TEMPLATES.md

## Verification checklist

- [ ] Navbar: sticky, transparent over hero, logo + nav links + Contact Us CTA pill button
- [ ] Hero: background image, heading "Learn From The Expert", sign-up form on right
- [ ] Courses: title strip in `#7971EA`, carousel of course cards with price/stats, prev/next buttons
- [ ] Programs: section title, 3 alternating illustration + stat rows
- [ ] Teachers: section title, 3-column teacher profile cards
- [ ] Testimonial: dark overlay background image, centered quote with author photo
- [ ] Why Choose Us: stat cards with icon + label pairs
- [ ] Contact: light gray bg, "Message Us" title, form with First/Last Name, Subject, Email, Message, Send button
- [ ] Footer: white bg, 3 columns (About, Links, Subscribe), copyright + Component Dock link
- [ ] Design tokens: brand `#7971EA`, font Mulish (Muli), pill buttons `border-radius: 30px`
- [ ] Responsive: mobile hamburger, stacked layouts, reduced padding
- [x] No ColorLib references in `apps/edunest/` — superseded: shipped as `apps/classroom`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `edunest.free.componentdock.com`
- [ ] Package name: `@free-react-templates/edunest`
