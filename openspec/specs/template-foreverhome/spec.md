# Template: ForeverHome (Charity / Adoption)

## Purpose

Recreation of ColorLib "Adopted" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site for child adoption / foster care charities.

- **Source:** https://colorlib.com/wp/template/adopted/
- **Preview URL:** https://preview.colorlib.com/theme/adopted/
- **Preview DOM fetched:** Yes (2026-09-15)
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Preview was reachable:** Yes — full DOM + CSS extracted

## Design Tokens (extracted from preview)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Primary | `#bc5148` | Top bar background, navbar CTA, footer background, link color |
| Brand Hover / Accent | `#ca746d` | Button hover state, outline-primary hover |
| CTA Button (gold) | `#f4b214` | Top-bar login CTA button background |
| Body Text | `#868e96` | Body paragraph text color |
| Headings | `#000` | h1, h2, h3, h5 |
| Background | `#fff` | Page body background |
| Light Section BG | `#f8f9fa` | `bg-light` sections (accordion, featured stories) |
| Light Gray BG | `#f2f2f2` | Footer fallback (overridden to brand in CSS) |
| Border Color | `#dee2e6` | Top bar fallback (overridden to brand), borders |
| Footer Link Color | `#ffc107` | Footer anchor links (amber/gold) |
| Footer Text | `rgba(255,255,255,0.5)` | Footer paragraph text on brand background |

### Fonts
| Font | Weights | Usage |
|------|---------|-------|
| Open Sans | 300, 400, 700, 800 | Body text, headings (sans-serif) |
| Sacramento | 400 | Decorative cursive child names in slider |

### Button Shapes
- `.btn-primary`: white text, 2px border, square corners (no radius)
- Hover: `#ca746d` background + `#ca746d` border
- Shadow on hover: `0 3px 10px -2px rgba(0,0,0,0.2)`
- `.cta-btn` (top-bar): solid `#f4b214` background, no radius

### Section Backgrounds
- Header top bar: solid `#bc5148` (brand)
- Navbar: solid white
- Home Slider: full-bleed background images with dark overlay
- Steps to Adopt: white background (`.section`)
- Waiting Children: light gray (`.bg-light`)
- Featured Stories: white (`.section`) with border-top (`.border-t`)
- Newsletter Subscribe: light gray (`.section-subscribe.bg-light`)
- Footer: solid `#bc5148` (brand)

## Gherkin Requirements

### Feature: ForeverHome — Adoption / Foster Care Charity Template

#### Scenario: Page loads and shows navbar
Given the user navigates to the ForeverHome page
Then a top bar with social links and Sponsor/Login buttons is visible
And a navbar with brand "ForeverHome" and links (Home, Adoption, Stories, About, Contact) is visible

#### Scenario: Hero slider renders
Given the page has loaded
When the user views the hero area
Then a carousel/slider with full-bleed background images is visible
And each slide shows a child name in cursive, a headline, description, and a CTA button

#### Scenario: Steps to Adopt section
Given the user scrolls to the Steps section
When the user views the accordion
Then 7 expandable steps are displayed in a Bootstrap-style accordion
And the first step is expanded by default

#### Scenario: Waiting Children section
Given the user scrolls to the Waiting Children section
When the user views the children grid
Then 5 child cards are displayed with photo, name, age, and a brief description
And section heading reads "WAITING CHILDREN"

#### Scenario: Featured Stories section
Given the user scrolls to the Featured Stories section
When the user views the stories
Then 3 story cards are displayed with date and headline
And section heading reads "FEATURED STORIES"

#### Scenario: Newsletter Subscribe section
Given the user scrolls to the newsletter section
When the user views the form
Then a name input, email input, and Subscribe button are visible
And the section has a light gray background

#### Scenario: Footer renders
Given the user scrolls to the footer
Then 4 columns are visible: About, Contact & Address, Quick Links, Social
And social icons (Twitter, Facebook, LinkedIn, Instagram) are present
And a copyright line with "Made with ❤ by Colorlib" is replaced with "Made with Component Dock" linking to https://www.componentdock.com/

#### Scenario: Footer links to Component Dock
Given the user inspects the footer
Then the attribution link points to https://www.componentdock.com/
And the text reads "Made with ❤ by Component Dock"

#### Scenario: Responsive layout
Given the user views the page on a mobile device
Then the navbar collapses into a hamburger menu
And all sections stack vertically

## Verification Checklist

- [ ] Top bar: brand background, social icons, Sponsor + Login buttons
- [ ] Navbar: white bg, brand name, 5 nav links, hamburger on mobile
- [ ] Hero slider: 2 slides with cursive child names, headlines, CTAs
- [ ] Steps accordion: 7 items, first expanded, smooth expand/collapse
- [ ] Waiting Children: 5 cards with photos (picsum), names, ages
- [ ] Featured Stories: 3 stories with dates, light bg section
- [ ] Newsletter: name + email inputs, subscribe button
- [ ] Footer: 4 columns (About, Contact, Quick Links, Social), brand bg
- [ ] Footer attribution: links to componentdock.com
- [ ] Fonts: Open Sans (body), Sacramento (cursive accents)
- [ ] Colors: brand `#bc5148`, hover `#ca746d`, gold `#f4b214`, footer links `#ffc107`
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos/seed/foreverhome-*
- [ ] CNAME: foreverhome.free.componentdock.com
- [ ] Tests: 100% coverage, Vitest + Testing Library
