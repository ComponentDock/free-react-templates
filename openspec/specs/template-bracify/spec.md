# Template: Bracify (Dental Clinic)
<!-- prep-status: shipped-as=smilewell -->
> **SHIPPED-UNDER** — the ColorLib `toothsy` design this prep describes already
> ships as `apps/smilewell` (<https://smilewell.free.componentdock.com>).
> Do not scaffold `apps/bracify`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-smilewell/spec.md`.

## Purpose

Recreation of ColorLib's "Toothsy" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source template:** [ColorLib Toothsy](https://colorlib.com/wp/template/toothsy/)
- **Preview URL:** https://preview.colorlib.com/theme/toothsy/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/toothsy-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Fonts:** Nunito (Google Fonts, weights 300, 400, 700)

## Design Tokens

Extracted from `css/style.css` on the ColorLib preview:

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#51eaea` | Buttons, active nav links, accent icons, social hover |
| `--brand-secondary` | `#499bea` | Gradient endpoints |
| `--brand-gradient` | `#51eaea → #499bea` (linear-gradient top to bottom) | About section background, icon backgrounds, play button |
| `--text-body` | `#939393` | Body text color |
| `--text-heading` | `#000` | Headings (`h1`-`h3`, `.text-black`) |
| `--text-subtle` | `#b8b8b8` | Section sub-headings (`.block-heading-1 span`) |
| `--bg-footer` | `#333333` | Footer background |
| `--bg-light` | `#f4f5f9` | Testimonials & contact section backgrounds |
| `--footer-link` | `#999999` | Footer anchor links |
| `--font-family` | `"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | Global + headings + form controls |
| Button radius | Rounded (Bootstrap `.rounded`) | `.btn-primary` buttons |
| Social icon buttons | `border-w-2 rounded` with `.primary-primary-outline--hover` | Team card social links |
| Testimonial images | `rounded-circle` (50% radius) | Testimonial + team member avatars |

## Section Structure (order)

1. **Navbar** — Sticky, white background, logo ("Tooth" + "sy" split), centered nav links (Home, Services, About Us, Doctors, Testimonials, Blog, Contact), mobile hamburger toggle.
2. **Hero** — Full-width cover with background image, left-aligned text overlay: heading "We Care For Your Smile", subtext, "Contact Us" button.
3. **Services** — White background. Section heading "All Kind Of Services" / "Dental Services". 6 icon cards in 3×2 grid: Tooth Extraction, Tooth Fillings, Braces Install, Children Clinic, Tooth Cleaning, Patient Records. Each card has flaticon icon, title, blurb.
4. **About** — Gradient background (`#51eaea` → `#499bea`). Video embed (Vimeo placeholder) centered. 4 stat counters in a row: 8+ Year of Experience, 15+ Expert Doctors, 320+ Health Sections, 1500+ Happy Smiles.
5. **Team** — White background. Section heading "Expert Doctors" / "Meet Our Team". 3 team member cards: circular photo, name, role (Doctor/Dentist), short bio, social icons (Facebook, Twitter, Instagram).
6. **Testimonials** — Light background (`#f4f5f9`). Section heading "Happy Client Says" / "Testimonial". Owl-carousel-style testimonial cards: quote text, circular avatar, name. (Implement as a static slider or simple carousel.)
7. **Blog** — White background. Section heading "Latest Blog Posts" / "Our Blog". Two-column layout: left = featured post with large image + title + meta + excerpt + "Read More"; right = 4 list-style post entries (title + meta).
8. **Contact** — Light background (`#f4f5f9`). Section heading "Get In Touch" / "Contact Us". Left column = contact form (first name, last name, email, message, submit button); right column = heading + descriptive text.
9. **Footer** — Dark background (`#333333`). Two rows: top = About Us text + Features links + Newsletter form + Follow Us social icons; bottom = copyright line.

## Requirements

### Feature: Bracify template behaviour

Feature: Bracify dental clinic website

#### Scenario: Page loads with all sections

- **GIVEN** the user visits the Bracify homepage
- **THEN** the page displays 9 sections in order: Navbar, Hero, Services, About, Team, Testimonials, Blog, Contact, Footer

#### Scenario: Navbar displays correctly

- **GIVEN** the user sees the Navbar
- **THEN** it shows the logo "Bracify" with brand color accent
- **AND** it displays navigation links: Home, Services, About, Doctors, Testimonials, Blog, Contact
- **AND** it becomes sticky on scroll
- **AND** a hamburger menu appears on mobile

#### Scenario: Hero section renders

- **GIVEN** the user sees the Hero section
- **THEN** it shows a heading "We Care For Your Smile"
- **AND** it shows descriptive subtext
- **AND** it shows a "Contact Us" button with brand color background
- **AND** the section has a background image

#### Scenario: Services section shows 6 service cards

- **GIVEN** the user scrolls to the Services section
- **THEN** 6 service cards are displayed in a 3-column grid on desktop
- **AND** each card has an icon, a title, and a description paragraph
- **AND** the services are: Tooth Extraction, Tooth Fillings, Braces Install, Children Clinic, Tooth Cleaning, Patient Records

#### Scenario: About section displays stats

- **GIVEN** the user scrolls to the About section
- **THEN** the section has a gradient background (#51eaea to #499bea)
- **AND** a video embed placeholder is centered
- **AND** 4 stat counters are shown: 8+ Years, 15+ Doctors, 320+ Sections, 1500+ Happy Smiles

#### Scenario: Team section shows doctor cards

- **GIVEN** the user scrolls to the Team section
- **THEN** 3 team member cards are displayed in a row on desktop
- **AND** each card shows a circular photo, name, role, short bio, and social icon buttons

#### Scenario: Testimonials carousel works

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** testimonial cards are displayed with quote text, avatar, and name
- **AND** the section has a light background

#### Scenario: Blog section shows posts

- **GIVEN** the user scrolls to the Blog section
- **THEN** 1 featured post is displayed on the left with large image, title, date, author, excerpt, and Read More link
- **AND** 4 list-style post entries are displayed on the right

#### Scenario: Contact form renders

- **GIVEN** the user scrolls to the Contact section
- **THEN** a contact form is displayed with fields: First Name, Last Name, Email, Message
- **AND** a "Send Message" submit button is present
- **AND** the right column shows descriptive text

#### Scenario: Footer renders with newsletter and social links

- **GIVEN** the user scrolls to the Footer
- **THEN** the section has a dark background (#333333)
- **AND** it shows an About Us description
- **AND** it shows a Features link list
- **AND** it shows a Newsletter subscription form
- **AND** it shows social media icon links (Facebook, Twitter, Instagram, LinkedIn)
- **AND** it shows a copyright line
- **AND** the footer links to Component Dock (https://www.componentdock.com/)

## Verification checklist

- [ ] All 9 sections render in correct order
- [ ] Brand color `#51eaea` is used for buttons, active nav, and accents
- [ ] Gradient `#51eaea → #499bea` used for About section background and icon backgrounds
- [ ] Nunito font loaded via Google Fonts
- [ ] Footer background is `#333333` with light text
- [ ] Team member photos are circular
- [ ] Service cards display 6 items in 3×2 grid (desktop)
- [ ] Contact form has all 4 fields + submit button
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] All images use picsum.photos placeholders with deterministic seeds
- [ ] 100% test coverage on new code
- [ ] `npm run verify:app bracify` passes
