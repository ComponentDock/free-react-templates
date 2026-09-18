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

## Gherkin Requirements

### Feature: Urbanscape — City Directory Landing Page

#### Scenario: Navbar displays correctly
- **Given** the user visits the homepage
- **Then** the navbar shows the logo, navigation links (Home, About, Categories, Listing, Page, Blog, Contact), an "+ add Listing" button, and "Sign in or Register" link
- **And** the navbar is transparent when overlaid on the hero

#### Scenario: Hero section renders with search functionality
- **Given** the user views the hero section
- **Then** a script-font subheading "Explore the city" is displayed
- **And** the heading "Discover Great Places" is displayed
- **And** a search form with text input, category dropdown, and search button is visible
- **And** the search button is styled with the accent red color (#e6373d)

#### Scenario: Popular Locations section displays location cards
- **Given** the user scrolls to the Popular Locations section
- **Then** a subheading "Most visited places" and heading "Popular Locations" are shown
- **And** 6 location cards are displayed in a grid
- **And** each card shows a city image, city name, and location count badge

#### Scenario: How It Works section explains the process
- **Given** the user scrolls to the How It Works section
- **Then** a subheading "Easy to explore" and heading "How It Works" are shown
- **And** 3 steps are displayed: "Choose a Category", "What You Want", "Go Out & Explore"
- **And** each step has an icon, title, and description text

#### Scenario: Featured Categories section shows category cards
- **Given** the user scrolls to the Featured Categories section
- **Then** a subheading and heading "Featured Categories" are shown
- **And** 4 category cards are displayed in a grid
- **And** each card shows an icon, category title, description, and "View Details" link

#### Scenario: Statistics section highlights site usage
- **Given** the user scrolls to the statistics/info section
- **Then** a heading about millions of visitors is displayed
- **And** two feature items with icons and descriptions are shown

#### Scenario: Testimonials carousel displays client quotes
- **Given** the user scrolls to the testimonials section
- **Then** a subheading "Our client testimonials" and heading "What our client say" are shown
- **And** a testimonial carousel displays with quote text, founder image, name, and role
- **And** navigation arrows allow cycling through testimonials

#### Scenario: Newsletter subscription form is functional
- **Given** the user scrolls to the newsletter section
- **Then** a subheading "Subscribe out newsletter" and heading "Subscribe For Newsletter" are shown
- **And** an email input field and "Send Now" button are visible
- **And** the section has a dark background

#### Scenario: Blog section displays recent posts
- **Given** the user scrolls to the blog section
- **Then** a subheading "Our blog" and heading "News and tips" are shown
- **And** 3 blog post cards are displayed in a grid
- **And** each card shows an image, category tag, title, date, and author

#### Scenario: Footer provides navigation and social links
- **Given** the user scrolls to the footer
- **Then** the footer shows 4 columns: logo/about, Quick Links, Categories, and Download App
- **And** social media icon links are displayed
- **And** a copyright notice with Component Dock attribution is shown
- **And** the footer links to https://www.componentdock.com/

## Verification Checklist

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
