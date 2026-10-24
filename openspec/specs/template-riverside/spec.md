# Template: Riverside (Personal Portfolio)
<!-- prep-status: shipped-as=clydson -->
> **SHIPPED-UNDER** — the ColorLib `clyde` design this prep describes already
> ships as `apps/clydson` (<https://clydson.free.componentdock.com>).
> Do not scaffold `apps/riverside`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-clydson/spec.md`.

## Purpose

Recreation of ColorLib's **Clyde** personal portfolio template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/clyde/
- **Preview:** https://preview.colorlib.com/theme/clyde/
- **Design category:** Personal Portfolio / Developer Portfolio
- **New name:** `riverside` (never reuse source name "clyde")
- **App folder:** `apps/riverside`
- **Package:** `@free-react-templates/riverside`
- **Deploy target:** `riverside.free.componentdock.com`

## Design Tokens

| Token              | Value                                  | Notes                                                |
| ------------------ | -------------------------------------- | ---------------------------------------------------- |
| Brand color        | `#007bff` (blue)                       | Bootstrap primary; used on CTAs, accents             |
| Text color         | `#212529` (dark gray)                  | Main body text                                       |
| Light background   | `#f8f9fa` (near-white gray)            | Counter section, skills section background           |
| White background   | `#ffffff`                              | Services cards, about content area                   |
| Font family        | Poppins (Google Fonts)                 | All headings and body text                           |
| Button radius      | `0.25rem` (4px)                        | Standard Bootstrap border-radius                     |
| Button style       | Solid primary + outline primary        | Two CTAs: "Hire me" (solid) + "Download CV" (outline)|
| Overlay            | Dark semi-transparent on hero images   | Gives hero a darkened image feel                     |
| Card shadow        | Bootstrap `.shadow`                    | Services and skills cards have drop shadow           |
| Card radius        | `rounded-lg` (0.3rem)                  | Skill and service cards use large rounded corners    |

## Sections (order from reference)

1. **Navbar** — dark fixed-top navbar, "Clyde." brand with period accent, links: Home, About, Skills, Services, Projects, Blog, Contact. Mobile hamburger toggle.
2. **Hero (Slider)** — owl-carousel style, full-width split layout: left text with subheading "Hello! This is Clyde", headline "Creative UI/UX Designer & Developer", two CTA buttons ("Hire me" solid, "Download CV" outline), right side background image with overlay. Multiple slides.
3. **Counter Bar** — bg-light section, 4 stat blocks with icons: Project Complete (750), Happy Clients (568), Cups of coffee (478), Years experienced (780). Animated number counters.
4. **About Me** — split layout: left image with overlay, right content with subheading "My Intro", heading "About Me", paragraph, info list (Name, DOB, Address, Zip, Email, Phone), interests row (Music, Travel, Movie, Sports with icons).
5. **Skills** — bg-light section, heading "My Skills", 7 circular progress indicators (CSS 95%, HTML 98%, jQuery 68%, Photoshop 92%, WordPress 83%, SEO 95%, plus one more), each in a white card with shadow.
6. **Services** — heading "We do awesome services for our clients", 2 rows of 4 service cards (8 total): Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO. Each card has icon + title + description.
7. **Hire Me CTA** — dark background section with left text "Have a project on your mind." and "Contact me" white button, right side image.
8. **Projects** — portfolio grid with hover overlay effects, filterable by category (All, Web, Illustration, Branding, Application).
9. **Blog** — recent posts grid with image thumbnails, titles, dates, author, excerpt.
10. **Contact** — form (name, email, subject, message, submit button) + contact info (address, phone, email, website).
11. **Footer** — dark background, brand name, social links, copyright, "Link back to Colorlib" text (to be replaced with Component Dock link).

## Requirements

### Feature: Riverside template behaviour

#### Scenario: Navbar renders correctly

- **GIVEN** the page loads
- **THEN** the navbar displays with brand "Riverside."
- **AND** navigation links include: Home, About, Skills, Services, Projects, Blog, Contact
- **AND** the navbar has a dark background
- **AND** a mobile hamburger toggle is present

#### Scenario: Hero section displays

- **GIVEN** the page loads
- **THEN** the hero section shows a subheading "Hello! This is Riverside"
- **AND** a headline with role description
- **AND** two CTA buttons: "Hire me" and "Download CV"
- **AND** a background image is visible with a dark overlay

#### Scenario: Counter statistics animate

- **GIVEN** the page loads
- **AND** the counter section is visible
- **THEN** four stat blocks are displayed
- **AND** each stat shows a number, icon, and label
- **AND** the numbers animate from 0 to their target values on scroll

#### Scenario: About section shows personal info

- **GIVEN** the page loads
- **THEN** the About section displays with subheading "My Intro"
- **AND** a heading "About Me"
- **AND** a description paragraph
- **AND** an info list with Name, Date of birth, Address, Zip code, Email, Phone
- **AND** interest icons for Music, Travel, Movie, Sports

#### Scenario: Skills section shows progress circles

- **GIVEN** the page loads
- **THEN** the Skills section shows 7 skill cards
- **AND** each card has a circular progress indicator with percentage
- **AND** skill names include CSS, HTML, jQuery, Photoshop, WordPress, SEO

#### Scenario: Services section shows service cards

- **GIVEN** the page loads
- **THEN** 8 service cards are displayed in a 4-column grid (2 rows)
- **AND** each card has an icon, title, and short description
- **AND** service titles include Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO

#### Scenario: Hire Me CTA section renders

- **GIVEN** the page loads
- **THEN** the hire-me section displays with heading "Have a project on your mind."
- **AND** a paragraph description
- **AND** a "Contact me" white button

#### Scenario: Projects grid is filterable

- **GIVEN** the page loads
- **THEN** the projects section shows a grid of portfolio items
- **AND** filter tabs are present: All, Web, Illustration, Branding, Application
- **AND** clicking a filter tab shows only matching projects

#### Scenario: Blog section shows recent posts

- **GIVEN** the page loads
- **THEN** the blog section displays post cards
- **AND** each card has an image, title, date, author name, and excerpt

#### Scenario: Contact form renders and validates

- **GIVEN** the page loads
- **THEN** the contact section displays a form
- **AND** the form has fields: Name, Email, Subject, Message
- **AND** a submit button is present
- **AND** submitting with empty required fields shows validation errors

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the page loads
- **THEN** the footer displays with a dark background
- **AND** a link to https://www.componentdock.com/ is present
- **AND** social media icons are shown

## Verification checklist

- [ ] Navbar with dark background and all section links
- [ ] Hero slider with background image, overlay, headline, and two CTA buttons
- [ ] Counter bar with 4 animated stats on bg-light
- [ ] About section: image left, info list right, interests row
- [ ] Skills section: 7 circular progress cards on bg-light
- [ ] Services section: 8 icon+title+description cards in 4-col grid
- [ ] Hire Me CTA: dark bg, heading, description, white button
- [ ] Projects grid with category filter tabs and hover overlays
- [ ] Blog section with post cards (image, title, meta, excerpt)
- [ ] Contact form with name, email, subject, message, submit
- [ ] Footer with Component Dock link and social icons
- [ ] Mobile responsive layout (hamburger nav, stacked grids)
- [ ] All images use picsum.photos placeholders
- [ ] Poppins font loaded via Google Fonts link in index.html
- [ ] Brand color #007bff used for CTAs and accents
- [ ] No ColorLib references in app source code
- [ ] Footer links to https://www.componentdock.com/
