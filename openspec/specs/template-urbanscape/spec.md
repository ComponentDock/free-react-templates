# Template: Urbanscape (City Directory / Listing)

## Purpose

Recreation of ColorLib's **CityListing** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source:** https://colorlib.com/wp/template/citylisting/
- **Preview:** https://preview.colorlib.com/theme/citylisting/
- **Package:** `@free-react-templates/urbanscape`
- **Surge target:** `urbanscape.free.componentdock.com`

A city directory and listing landing page with a search-driven hero, popular locations grid, step-by-step how-it-works section, featured categories, statistics, testimonials, newsletter, blog cards, and a multi-column footer.

## Design Tokens

Extracted from the live preview stylesheet (`main.css`) and rendered DOM:

| Token               | Value                                         |
|---------------------|-----------------------------------------------|
| **Brand gold**      | `#c6a16e` (primary accent, CTAs, hover states)|
| **Accent red**      | `#e6373d` (search button, add-listing button) |
| **Dark navy**       | `#0b1c39` (headings, dark text)               |
| **Body text**       | `#506172` / `#635c5c` (paragraphs, muted)     |
| **Muted gray**      | `#868c98` (secondary text, footer)            |
| **Light bg**        | `#fafafa` (alternating section backgrounds)   |
| **White**           | `#fff`                                        |
| **Font — headings** | `"Josefin Sans", sans-serif`                  |
| **Font — script**   | `"Great Vibes", cursive` (decorative subheads: "Explore the city", "Most visited places") |
| **Font — body alt** | `"Barlow", sans-serif` (some body elements)   |
| **Button radius**   | `5px`                                         |
| **Button radius (full)** | `50px` (rounded pill on search/add-listing) |
| **Hero overlay**    | Dark gradient over background image            |
| **Section padding** | ~150px vertical on feature sections           |

## Visual Design Notes (from screenshot)

- Transparent navbar over hero; logo left, nav center, "+ add Listing" red pill button right, "Sign in or Register" far right.
- Full-width hero with cinematic coastal city photo, dark overlay. Script subheading in gold, large white heading, search bar with text input + category dropdown + red search button.
- Popular Locations: 3-column grid of location cards (image, city name, location count badge in gold).
- How It Works: 3-column with icon circles, step titles, descriptions. Light background.
- Featured Categories: 4-column card grid with icon, title, description, "View Details" link in gold.
- Stats section: left-aligned heading + description, right side with two icon+text feature items.
- Testimonials: carousel with centered quote text, circular founder image, name + role. Dark background.
- Newsletter: dark background, heading + email input + gold "Send Now" button.
- Blog: 3-column cards with image, category tag, title, date/author.
- Footer: 4-column layout (logo/about, quick links, categories, download app + social). Dark background.

## Requirements

### Feature: Urbanscape — City Directory Landing Page

#### Scenario: Navbar displays correctly

- **GIVEN** the user visits the homepage
- **THEN** the navbar shows the logo, navigation links (Home, About, Categories, Listing, Page, Blog, Contact), an "+ add Listing" button, and "Sign in or Register" link
- **AND** the navbar is transparent when overlaid on the hero

#### Scenario: Hero section renders with search functionality

- **GIVEN** the user views the hero section
- **THEN** a script-font subheading "Explore the city" is displayed
- **AND** the heading "Discover Great Places" is displayed
- **AND** a search form with text input, category dropdown, and search button is visible
- **AND** the search button is styled with the accent red color (#e6373d)

#### Scenario: Popular Locations section displays location cards

- **GIVEN** the user scrolls to the Popular Locations section
- **THEN** a subheading "Most visited places" and heading "Popular Locations" are shown
- **AND** 6 location cards are displayed in a grid
- **AND** each card shows a city image, city name, and location count badge

#### Scenario: How It Works section explains the process

- **GIVEN** the user scrolls to the How It Works section
- **THEN** a subheading "Easy to explore" and heading "How It Works" are shown
- **AND** 3 steps are displayed: "Choose a Category", "What You Want", "Go Out & Explore"
- **AND** each step has an icon, title, and description text

#### Scenario: Featured Categories section shows category cards

- **GIVEN** the user scrolls to the Featured Categories section
- **THEN** a subheading and heading "Featured Categories" are shown
- **AND** 4 category cards are displayed in a grid
- **AND** each card shows an icon, category title, description, and "View Details" link

#### Scenario: Statistics section highlights site usage

- **GIVEN** the user scrolls to the statistics/info section
- **THEN** a heading about millions of visitors is displayed
- **AND** two feature items with icons and descriptions are shown

#### Scenario: Testimonials carousel displays client quotes

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a subheading "Our client testimonials" and heading "What our client say" are shown
- **AND** a testimonial carousel displays with quote text, founder image, name, and role
- **AND** navigation arrows allow cycling through testimonials

#### Scenario: Newsletter subscription form is functional

- **GIVEN** the user scrolls to the newsletter section
- **THEN** a subheading "Subscribe out newsletter" and heading "Subscribe For Newsletter" are shown
- **AND** an email input field and "Send Now" button are visible
- **AND** the section has a dark background

#### Scenario: Blog section displays recent posts

- **GIVEN** the user scrolls to the blog section
- **THEN** a subheading "Our blog" and heading "News and tips" are shown
- **AND** 3 blog post cards are displayed in a grid
- **AND** each card shows an image, category tag, title, date, and author

#### Scenario: Footer provides navigation and social links

- **GIVEN** the user scrolls to the footer
- **THEN** the footer shows 4 columns: logo/about, Quick Links, Categories, and Download App
- **AND** social media icon links are displayed
- **AND** a copyright notice with Component Dock attribution is shown
- **AND** the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] All sections rendered in correct order matching the original
- [ ] Navbar is transparent on hero, sticky on scroll
- [ ] Hero search form has text input, dropdown, and styled button
- [ ] Script font ("Great Vibes") used for decorative subheadings
- [ ] Brand gold (#c6a16e) used for CTAs and accent elements
- [ ] Accent red (#e6373d) used for search button and add-listing button
- [ ] Dark navy (#0b1c39) used for headings
- [ ] Popular Locations shows 6 cards with images and location counts
- [ ] How It Works shows 3 steps with icons
- [ ] Featured Categories shows 4 cards with icons and "View Details" links
- [ ] Testimonials carousel with navigation works
- [ ] Newsletter form with email input and submit button
- [ ] Blog section shows 3 post cards
- [ ] Footer has 4 columns, social links, Component Dock attribution
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] All placeholder images use picsum.photos
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes with strict TypeScript
- [ ] Build succeeds

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/citylisting/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#c6a16e` — nearest `#f09359` (d=49)
- `#e6373d` — nearest `#dc3545` (d=13)
- `#506172` — nearest `#57667e` (d=15)
<!-- live-palette-unverified:end -->
