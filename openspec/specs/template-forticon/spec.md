# Template: Forticon (Construction / Architecture Company)
<!-- prep-status: shipped-as=sitecraft -->
> **SHIPPED-UNDER** — the ColorLib `complex` design this prep describes already
> ships as `apps/sitecraft` (<https://sitecraft.free.componentdock.com>).
> Do not scaffold `apps/forticon`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-sitecraft/spec.md`.

## Purpose

Recreation of the ColorLib **Complex** template
(https://colorlib.com/wp/template/complex/) as a React 19 + Vite + Tailwind 4
+ TypeScript template.

- **Preview URL:** https://preview.colorlib.com/theme/complex/
- **Source slug:** `complex`
- **Category:** Construction / Architecture Company
- **New name:** `forticon`

## Design Tokens (extracted from preview CSS)

| Token               | Value                                      | Usage                                           |
| ------------------- | ------------------------------------------ | ----------------------------------------------- |
| brand-cyan          | `#00b7ea`                                  | Hero slider overlay (solid fallback)            |
| brand-gradient      | `linear-gradient(45deg, #43DDE6, #9870FC)` | Hero overlay (cyan → purple gradient)           |
| brand-yellow        | `#F7B633` / `#F7AF1D`                     | Accents, active tab highlight                   |
| dark-bg             | `#25282a`                                  | Footer background                               |
| dark-footer-info    | `#1E2022`                                  | Footer contact info strip                       |
| dark-heading        | `#1E2022`                                  | Heading text color                              |
| body-bg             | `#fff` / `#fafafa`                         | Section backgrounds                             |
| text-primary        | `#333333`                                  | Body text                                       |
| text-secondary      | `#666666` / `#999999`                      | Paragraphs, meta text                           |
| text-muted          | `#b3b3b3` / `#cccccc`                     | Light text, borders                             |
| white               | `#fff`                                     | Text on dark/overlay backgrounds                |
| overlay             | `rgba(0, 0, 0, 0.7)`                      | Dark overlay on hero/counter/about/subscribe     |
| font-family         | `Poppins, Arial, sans-serif`               | Google Font — all text                          |
| button-text         | uppercase, 12px, letter-spacing 2px        | Hero CTA button                                 |
| button-padding      | `14px 30px`                                | Primary button                                  |
| section-padding     | `7em 0`                                    | All main content sections                       |
| parallax            | `background-attachment: fixed`             | Counter + About sections (stellar parallax)     |

## Section Structure (from preview DOM)

1. **Navbar** — fixed/sticky nav: logo "forticon" + nav links (Commercial, Apartment, House, Building, Services, Blog, About, Contact)
2. **HeroSlider** — full-width flexslider with 3 slides, each with background image, dark overlay, cyan-purple gradient overlay, centered h1/h2 text + "Get Started" CTA button
3. **IntroTabs** — 4 tabbed service descriptions (Planning & Design, General Constructing, Construction Management, Building Modeling) each with image + description + bullet list
4. **Services** — 4 service cards in a 2×2 grid (General Constructing, Interior Design, Building Modeling, Construction Management) each with icon, title, description
5. **Counter** — parallax background image with dark overlay, 4 stat counters (Projects: 1539, Employees: 3653, Constructors: 1450, Partners: 391) with icons and labels
6. **Projects** — section heading + 3-column project grid (Apartment Interior Design, Office Space, Condo Building) each with image, hover search icon, title + category tags
7. **Team** — parallax background, section heading "Our Team", 3 team member cards with background image, name + role overlay
8. **Testimonials** — section heading "Client Says:", owl-carousel with testimonial slides (avatar, quote, name)
9. **Newsletter** — dark overlay background, "Subscribe Newsletter" heading, email input + subscribe button
10. **Footer** — dark bg (#25282a): contact info strip (address, email/website, phone), 3-column widget area (About, Follow Us social links, Our Company list), copyright with Component Dock link

## Requirements

### Feature: Forticon — Construction Company Template

Feature: Forticon Template
As a visitor to Forticon
I want a complete construction company homepage
So that I can learn about services, view projects, and contact the team

**── Navbar ────────────────────────────────────────**

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** I am on the Forticon homepage
- **THEN** I see the logo "forticon" in the navbar
- **AND** I see navigation links: Commercial, Apartment, House, Building, Services, Blog, About, Contact

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** I scroll down the Forticon page
- **THEN** the navbar remains fixed at the top of the viewport

**── Hero Slider ───────────────────────────────────**

#### Scenario: Hero slider displays with gradient overlay

- **GIVEN** I am on the Forticon homepage
- **THEN** I see a full-width hero slider with background images
- **AND** I see a dark overlay with cyan-purple gradient
- **AND** I see centered heading text (h1 + h2) on each slide
- **AND** I see a "Get Started" CTA button with uppercase text

#### Scenario: Hero slider auto-rotates through slides

- **GIVEN** I am on the Forticon homepage
- **THEN** the slider displays 3 slides with different background images and headings

**── Intro Tabs ────────────────────────────────────**

#### Scenario: Service tabs display correctly

- **GIVEN** I scroll to the Intro Tabs section
- **THEN** I see 4 tabs: Planning & Design, General Constructing, Construction Management, Building Modeling
- **AND** the active tab shows a service image on the left and description with bullet points on the right

#### Scenario: Clicking a tab switches content

- **GIVEN** I click the "General Constructing" tab
- **THEN** the content switches to show the General Constructing image and description

**── Services Grid ─────────────────────────────────**

#### Scenario: Services grid displays

- **GIVEN** I scroll to the Services section
- **THEN** I see 4 service cards in a grid
- **AND** each card has an icon, title (h3), and description text
- **AND** the services are: General Constructing, Interior Design, Building Modeling, Construction Management

**── Counter ───────────────────────────────────────**

#### Scenario: Counter section displays with stats

- **GIVEN** I scroll to the Counter section
- **THEN** I see a parallax background image with dark overlay
- **AND** I see 4 counters: Projects (1539), Employees (3653), Constructors (1450), Partners (391)
- **AND** each counter has an icon and label

**── Projects ──────────────────────────────────────**

#### Scenario: Projects grid displays

- **GIVEN** I scroll to the Projects section
- **THEN** I see the heading "Our Projects"
- **AND** I see 3 project cards in a row
- **AND** each card has a background image with a hover search icon overlay
- **AND** each card has a title and category tags

**── Team ──────────────────────────────────────────**

#### Scenario: Team section displays

- **GIVEN** I scroll to the Team section
- **THEN** I see the heading "Our Team"
- **AND** I see 3 team member cards
- **AND** each card has a background image with name and role overlay

**── Testimonials ──────────────────────────────────**

#### Scenario: Testimonials carousel displays

- **GIVEN** I scroll to the Testimonials section
- **THEN** I see the heading "Client Says:"
- **AND** I see a testimonial carousel with slides
- **AND** each slide shows an avatar, quote text, and client name

**── Newsletter ────────────────────────────────────**

#### Scenario: Newsletter subscription section displays

- **GIVEN** I scroll to the Newsletter section
- **THEN** I see the heading "Subscribe Newsletter"
- **AND** I see an email input field
- **AND** I see a subscribe button

**── Footer ────────────────────────────────────────**

#### Scenario: Footer displays contact info and widgets

- **GIVEN** I scroll to the footer
- **THEN** I see contact information (address, email, phone)
- **AND** I see 3 widget columns: About, Follow Us, Our Company
- **AND** I see social media icons
- **AND** I see a copyright notice
- **AND** I see a link to "Component Dock" (https://www.componentdock.com/)

## Verification checklist

- [ ] Navbar with logo, 8 nav links, sticky on scroll
- [ ] Hero slider with 3 slides, gradient overlay, CTA button
- [ ] Intro tabs with 4 service tabs, image + description content
- [ ] Services grid with 4 cards (icon + title + description)
- [ ] Counter section with parallax bg, 4 stat counters
- [ ] Projects grid with 3 project cards (image + hover overlay + tags)
- [ ] Team section with parallax bg, 3 team member cards
- [ ] Testimonials carousel with avatar, quote, name
- [ ] Newsletter with email input + subscribe button
- [ ] Footer with contact strip, 3 widget columns, social icons, copyright, Component Dock link
- [ ] Design tokens: Poppins font, #00b7ea cyan, #9870FC purple, #F7B633 yellow, #25282a dark
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All images use picsum.photos placeholder URLs
- [ ] Google Fonts loaded via index.html link tag
- [ ] Icons from lucide-react (replacing Flaticons + Font Awesome)
