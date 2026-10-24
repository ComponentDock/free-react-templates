# Template: TopModel (Modeling Agency / Portfolio)
<!-- prep-status: shipped-as=vizier -->
> **SHIPPED-UNDER** — the ColorLib `mona` design this prep describes already
> ships as `apps/vizier` (<https://vizier.free.componentdock.com>).
> Do not scaffold `apps/topmodel`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-vizier/spec.md`.

## Purpose

Recreation of ColorLib's **Mona** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source:** [ColorLib "Mona"](https://colorlib.com/wp/template/mona/)
- **Preview:** https://preview.colorlib.com/theme/mona/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/mona-free-template.jpg) — hot-pink header accent, large hero with model portrait, tabbed model portfolio, testimonials, CTA, blog, footer.
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library · 100% coverage
- **New name:** `topmodel` (package `@free-react-templates/topmodel`, app `apps/topmodel`)

## Design Tokens

Extracted from the live preview stylesheet (`style.css`):

| Token | Value | Usage |
|---|---|---|
| `brand` | `#ed489d` | Hot pink — primary accent (header bg, CTA buttons, active dots, hover states) |
| `brand-light` | `#f6a4ce` | Light pink accent (supplementary) |
| `text-dark` | `#232323` | Primary text color, headings |
| `text-muted` | `#666666` | Secondary/body text |
| `bg-light` | `#f0f0f0` | Light gray section backgrounds |
| `bg-neutral` | `#f2f4f5` | Neutral background |
| `white` | `#ffffff` | Card backgrounds, button default bg |
| `black` | `#000000` | Button hover bg, dark sections |
| Font | `"HK Grotesk"` | Primary typeface (Google Fonts) |
| Button | 50px height, 180px min-width, 2px white border, 40px radius (pill) | `.mona-btn` — pill-shaped, white border, hover → black bg |
| Button variant | Pink border (#ed489d), white bg, pink text | `.mona-btn.btn-2` — hover → pink bg, white text |
| Hero heading | 100px font-size, capitalize, line-height 1.2 | `.welcome-text h2` |
| Section padding | 80px top/bottom | `.section-padding-80` |
| Nav | Transparent overlay on hero, white bg on scroll | `.classy-navbar` |
| Border radius | 50% for circular thumbnails, 40px for pill buttons, 6px for cards | Various |

## Sections (DOM order)

1. **Header** — transparent navbar overlaying the hero; logo left ("TopModel."), nav links right (Home, Pages, Project, Models, Casting, Blog, Contact), search icon
2. **Welcome/Hero Carousel** — full-width carousel with model name (huge text), subtitle ("Star Model 2019"), "Model Details →" CTA button, social links bar (Facebook, Twitter, Instagram, YouTube), large portrait photo, navigation arrows
3. **About Us** — "We Have 20+ Years Practical Experience in Agency" heading, 4 feature icons (Fashion Shows, Special Events, Commercial Photo, Model School), model portrait images
4. **Models/Portfolio** — tabbed section (All Models / Model / Actors / Singers), each tab shows a carousel of model cards (circular thumbnail, name, role label)
5. **Client Feedback / Testimonials** — client quote carousel with star ratings, client name, circular avatar thumbnail, dot navigation
6. **CTA Section** — "Do You Want To Be A Model?" heading with description text and "Contact Us" button (pink variant)
7. **Blog / Latest News** — blog post cards grid
8. **Footer** — 4-column layout: About text, quick links, contact info (+01-3-8888-6868, 40 Baria Street 133/2 NewYork City), newsletter signup; bottom bar with social links and copyright

## Requirements

### Feature: Header Navigation

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the page loads
- **THEN** the logo "TopModel." is visible
- **AND** navigation links "Home", "Models", "Blog", "Contact" are visible
- **AND** a search icon is present in the navbar

#### Scenario: Navbar becomes opaque on scroll

- **GIVEN** the page loads
- **WHEN** the user scrolls past the hero section
- **THEN** the navbar background changes from transparent to white

### Feature: Hero Carousel

#### Scenario: Hero displays model information

- **GIVEN** the hero carousel is visible
- **THEN** a model name is displayed in large text
- **AND** a subtitle "Star Model 2019" is shown below the name
- **AND** a "Model Details →" link is visible
- **AND** social media links (Facebook, Twitter, Instagram, YouTube) are shown

#### Scenario: Hero carousel advances automatically

- **GIVEN** the hero carousel is visible
- **WHEN** 5 seconds pass without interaction
- **THEN** the carousel transitions to the next slide

#### Scenario: Hero carousel responds to navigation

- **GIVEN** the hero carousel is visible
- **WHEN** the user clicks the next arrow
- **THEN** the carousel advances to the next model slide

### Feature: About Us Section

#### Scenario: About section displays experience heading

- **GIVEN** the about section is in the viewport
- **THEN** a heading about "20+ Years Practical Experience" is visible

#### Scenario: About section displays service categories

- **GIVEN** the about section is in the viewport
- **THEN** 4 service items are shown: Fashion Shows, Special Events, Commercial Photo, Model School

### Feature: Model Portfolio Section

#### Scenario: Portfolio section has filterable tabs

- **GIVEN** the models section is in the viewport
- **THEN** tabs for "All Models", "Model", "Actors", "Singers" are visible

#### Scenario: Clicking a tab filters model cards

- **GIVEN** the models section is in the viewport
- **WHEN** the user clicks the "Actors" tab
- **THEN** only actor model cards are displayed

#### Scenario: Model cards display correctly

- **GIVEN** the models section is in the viewport
- **THEN** each model card shows a circular thumbnail image
- **AND** a name and role label below the image

### Feature: Client Testimonials

#### Scenario: Testimonials display client quotes

- **GIVEN** the testimonials section is in the viewport
- **THEN** a client quote is displayed with quotation marks
- **AND** a star rating is shown
- **AND** the client name is displayed below the quote

#### Scenario: Testimonials carousel navigates

- **GIVEN** the testimonials section is in the viewport
- **WHEN** the user clicks a dot indicator
- **THEN** the carousel transitions to the selected testimonial

### Feature: Call to Action

#### Scenario: CTA section displays model recruitment message

- **GIVEN** the CTA section is in the viewport
- **THEN** the heading "Do You Want To Be A Model?" is visible
- **AND** a "Contact Us" button with pink variant styling is shown

#### Scenario: CTA button is interactive

- **GIVEN** the CTA section is in the viewport
- **WHEN** the user hovers over the "Contact Us" button
- **THEN** the button background transitions to pink with white text

### Feature: Blog Section

#### Scenario: Blog section displays recent posts

- **GIVEN** the blog section is in the viewport
- **THEN** a "Latest News" heading is visible
- **AND** blog post cards are displayed in a grid layout

### Feature: Footer

#### Scenario: Footer displays site information

- **GIVEN** the footer is in the viewport
- **THEN** an "About" column with company description is visible
- **AND** a "Quick Links" column is visible
- **AND** a "Contact" column with phone number and address is visible

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is in the viewport
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Hero carousel renders with model names and portraits
- [ ] Navbar is transparent on hero, white on scroll
- [ ] About section shows 20+ years heading with 4 service icons
- [ ] Models section has working tabs (All Models / Model / Actors / Singers)
- [ ] Model cards show circular thumbnails with name + role
- [ ] Testimonials carousel shows quotes with star ratings
- [ ] CTA section has "Do You Want To Be A Model?" heading and pink button
- [ ] Blog section shows latest news cards
- [ ] Footer has 4 columns and Component Dock link
- [ ] Brand color #ed489d is applied as Tailwind theme token
- [ ] Font "HK Grotesk" loads via Google Fonts link in index.html
- [ ] All interactive elements have aria-labels
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Tests achieve 100% line/branch/function/statement coverage
- [ ] No ColorLib references in app source code
- [ ] Footer links to https://www.componentdock.com/
