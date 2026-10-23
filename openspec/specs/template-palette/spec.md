# Template: Palette (Personal)

Recreation of ColorLib Clyde (https://colorlib.com/wp/template/clyde/)

## Purpose

Palette is a personal portfolio landing page with a navbar, hero, stat counters, about band, skills, services, projects, testimonials and blog. It recreates the ColorLib **Clyde** design (https://colorlib.com/wp/template/clyde/, preview: https://preview.colorlib.com/theme/clyde/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

Palette is a personal portfolio / UI-UX designer CV template. It features a
hero image slider, stats counter, about section with personal info, circular
skill progress indicators, services grid, CTA banner, project gallery with
overlays, testimonials carousel on a blue background, blog cards, contact form,
and a 4-column footer.

## Source References

- **Preview:** https://preview.colorlib.com/theme/clyde/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/clyde-free-template.jpg

## Design Tokens

| Token         | Value            | Notes                         |
| ------------- | ---------------- | ----------------------------- |
| Font family   | Poppins          | Google Fonts, weights 300–800 |
| Primary color | #007bff          | Blue — buttons, links, CTA bg |
| Dark bg       | #1a1a2e          | Navbar, hero overlay          |
| Light bg      | #f8f9fa          | Stats, skills, blog sections  |
| Body text     | #212529          | Dark gray for body copy       |
| White         | #ffffff          | Card backgrounds, CTA text    |
| Shadow        | 0 4px 20px rgba  | Card shadows                  |
| Border radius | 8px (rounded-lg) | Cards, buttons                |

## Sections (in order)

1. **Navbar** — Dark bg, "Palette." brand, nav links: Home, About, Skills,
   Services, Projects, Blog, Contact. Sticky on scroll.

2. **Hero** — Full-width slider with background images (picsum seeded),
   overlay, text: "Hello! This is Palette" / "Creative UI/UX Designer &
   Developer". Two CTA buttons: "Hire me" (solid blue) + "Download CV"
   (outline blue).

3. **Stats** — 4-column counter: 750 Project Complete, 568 Happy Clients,
   478 Cups of coffee, 8 Years experienced. Light bg, icons (lucide-react).

4. **About** — Split layout: left = portrait image, right = "About Me" text,
   personal info list (Name, DOB, Address, Email, Phone), interest tags
   (Music, Travel, Movie, Sports with icons).

5. **Skills** — 6 circular progress indicators: CSS 95%, HTML 98%, jQuery
   68%, Photoshop 92%, WordPress 83%, SEO 95%. Each card shows "Last week"
   and "Last month" sub-stats. Light bg.

6. **Services** — 2x4 grid of service cards: Web Design, Web Application,
   Web Development, Banner Design, Branding, Icon Design, Graphic Design,
   SEO. Each has icon + title + description. White cards with shadow.

7. **CTA Banner** — Blue bg, text: "Have a project on your mind?" with
   description and "Contact me" button. Portrait image on the right.

8. **Projects** — 4-column grid of 8 project cards with background images
   (picsum seeded), dark overlay on hover showing title + category.

9. **Testimonials** — Blue bg (#007bff), carousel of 3 testimonial cards
   with quote icon, text, avatar, name, position.

10. **Blog** — 3 blog cards: image + date/author/comments meta + title +
    excerpt. Light bg.

11. **Contact** — Split: left = form (name, email, subject, message, submit),
    right = contact info cards (address, phone, email, website) with icons.

12. **Footer** — 4 columns: "Lets talk about" + description + CTA, Links
    list, Services list, "Have a Questions?" with contact + social icons.
    Bottom: copyright + "Made with ❤ by Component Dock" link.

## Requirements

### Feature: Palette template behaviour

Feature: Palette Template
As a visitor to the Palette portfolio site
I want to see a professional designer portfolio
So I can evaluate the designer's work and contact them

#### Scenario: Navbar displays all sections

- **GIVEN** I am on the Palette homepage
- **THEN** I see a navbar with "Palette." brand
- **AND** the navbar has links to Home, About, Skills, Services, Projects, Blog, Contact

#### Scenario: Hero section shows designer info

- **GIVEN** I am on the Palette homepage
- **THEN** I see a hero section with heading "Creative UI/UX Designer & Developer"
- **AND** I see "Hire me" and "Download CV" buttons

#### Scenario: Stats section shows counters

- **GIVEN** I scroll to the stats section
- **THEN** I see 4 stat items: Project Complete, Happy Clients, Cups of coffee, Years experienced

#### Scenario: About section shows personal info

- **GIVEN** I scroll to the about section
- **THEN** I see "About Me" heading
- **AND** I see personal info items (Name, Date of birth, Address, Email, Phone)
- **AND** I see interest tags (Music, Travel, Movie, Sports)

#### Scenario: Skills section shows progress

- **GIVEN** I scroll to the skills section
- **THEN** I see 6 skill cards: CSS, HTML, jQuery, Photoshop, WordPress, SEO
- **AND** each card shows a percentage value

#### Scenario: Services section shows offerings

- **GIVEN** I scroll to the services section
- **THEN** I see 8 service cards in a grid
- **AND** each card has an icon, title, and description

#### Scenario: CTA banner prompts contact

- **GIVEN** I scroll to the CTA section
- **THEN** I see "Have a project on your mind?" heading
- **AND** I see a "Contact me" button

#### Scenario: Projects section shows portfolio

- **GIVEN** I scroll to the projects section
- **THEN** I see 8 project cards with images and overlay text

#### Scenario: Testimonials section shows reviews

- **GIVEN** I scroll to the testimonials section
- **THEN** I see testimonial cards with quotes, names, and positions

#### Scenario: Blog section shows posts

- **GIVEN** I scroll to the blog section
- **THEN** I see 3 blog cards with images, dates, and titles

#### Scenario: Contact section has form and info

- **GIVEN** I scroll to the contact section
- **THEN** I see a contact form with name, email, subject, message fields
- **AND** I see contact info cards for address, phone, email, website

#### Scenario: Footer contains Component Dock link

- **GIVEN** I scroll to the footer
- **THEN** I see a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/palette/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/palette/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar displays all sections — I see a navbar with "Palette." brand
- [x] Hero section shows designer info — I see a hero section with heading "Creative UI/UX Designer & Developer"
- [ ] Stats section shows counters — I see 4 stat items: Project Complete, Happy Clients, Cups of coffee, Years experienced
- [x] About section shows personal info — I see "About Me" heading
- [ ] Skills section shows progress — I see 6 skill cards: CSS, HTML, jQuery, Photoshop, WordPress, SEO
- [ ] Services section shows offerings — I see 8 service cards in a grid
- [x] CTA banner prompts contact — I see "Have a project on your mind?" heading
- [ ] Projects section shows portfolio — I see 8 project cards with images and overlay text
- [ ] Testimonials section shows reviews — I see testimonial cards with quotes, names, and positions
- [ ] Blog section shows posts — I see 3 blog cards with images, dates, and titles
- [ ] Contact section has form and info — I see a contact form with name, email, subject, message fields
