# Template: Bracify (Dental Clinic)

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

## Gherkin Requirements

```gherkin
Feature: Bracify dental clinic website

  Scenario: Page loads with all sections
    Given the user visits the Bracify homepage
    Then the page displays 9 sections in order: Navbar, Hero, Services, About, Team, Testimonials, Blog, Contact, Footer

  Scenario: Navbar displays correctly
    Given the user sees the Navbar
    Then it shows the logo "Bracify" with brand color accent
    And it displays navigation links: Home, Services, About, Doctors, Testimonials, Blog, Contact
    And it becomes sticky on scroll
    And a hamburger menu appears on mobile

  Scenario: Hero section renders
    Given the user sees the Hero section
    Then it shows a heading "We Care For Your Smile"
    And it shows descriptive subtext
    And it shows a "Contact Us" button with brand color background
    And the section has a background image

  Scenario: Services section shows 6 service cards
    Given the user scrolls to the Services section
    Then 6 service cards are displayed in a 3-column grid on desktop
    And each card has an icon, a title, and a description paragraph
    And the services are: Tooth Extraction, Tooth Fillings, Braces Install, Children Clinic, Tooth Cleaning, Patient Records

  Scenario: About section displays stats
    Given the user scrolls to the About section
    Then the section has a gradient background (#51eaea to #499bea)
    And a video embed placeholder is centered
    And 4 stat counters are shown: 8+ Years, 15+ Doctors, 320+ Sections, 1500+ Happy Smiles

  Scenario: Team section shows doctor cards
    Given the user scrolls to the Team section
    Then 3 team member cards are displayed in a row on desktop
    And each card shows a circular photo, name, role, short bio, and social icon buttons

  Scenario: Testimonials carousel works
    Given the user scrolls to the Testimonials section
    Then testimonial cards are displayed with quote text, avatar, and name
    And the section has a light background

  Scenario: Blog section shows posts
    Given the user scrolls to the Blog section
    Then 1 featured post is displayed on the left with large image, title, date, author, excerpt, and Read More link
    And 4 list-style post entries are displayed on the right

  Scenario: Contact form renders
    Given the user scrolls to the Contact section
    Then a contact form is displayed with fields: First Name, Last Name, Email, Message
    And a "Send Message" submit button is present
    And the right column shows descriptive text

  Scenario: Footer renders with newsletter and social links
    Given the user scrolls to the Footer
    Then the section has a dark background (#333333)
    And it shows an About Us description
    And it shows a Features link list
    And it shows a Newsletter subscription form
    And it shows social media icon links (Facebook, Twitter, Instagram, LinkedIn)
    And it shows a copyright line
    And the footer links to Component Dock (https://www.componentdock.com/)
```

## Verification Checklist

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
