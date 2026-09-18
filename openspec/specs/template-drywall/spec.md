# Template: Drywall (Construction)

## Purpose

Drywall is a single-page construction company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bee" free template (source:
https://colorlib.com/wp/template/bee/), built under a DIFFERENT name
(**Drywall**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Source slug:** `bee`
**Preview URL:** https://preview.colorlib.com/theme/bee/

The original is a Bootstrap 4 construction company site with: dark navbar,
full-width hero slider (Owl Carousel), a top info bar with amber icons,
services grid (4 columns), a parallax CTA banner, a team section (4 cards),
a project gallery (8 images), a counter/stats section (parallax background),
a testimonials/services split section, a blog section (3 cards), and a dark
footer with newsletter form.

**WHAT MAKES DRYWALL DISTINCT (signature elements):**

1. **Two-font system: Poppins (headings) + Nunito Sans (body).** The hero
   slider headings are Poppins bold; subheadings and body text are Nunito
   Sans. This dual-font approach is distinctive among construction templates.
2. **Amber/yellow top bar icons (#fda729).** The top info bar uses circular
   amber (#fda729) icon badges with white icons on a dark (#16181b) bar.
   The "Request A Quote" button is primary blue (#007bff).
3. **Full-width hero slider with text overlay on RIGHT side.** Unlike most
   hero layouts (centered or left-aligned), Bee/Drywall places the slider
   text (heading + subheading + CTA) in a 6-column div aligned to the
   RIGHT (`justify-content-end`). The overlay covers the full background
   image; text sits at 700px height.
4. **4-column services grid with icon + title + description.** Services
   section uses `col-md-3` cards with centered icons (construction hook,
   skyline, stairs, home) and short blurbs.
5. **Parallax CTA banner ("Lets Build Your Dream Together").** A full-width
   parallax background image section with centered white text and a single
   blue primary CTA button.
6. **4-member team section.** Four team member cards with photos, names
   ("Daren Wilson", "Warren Parker", "Eva Gustavo", "Mike Henderson"),
   and role descriptions.
7. **8-image project gallery grid.** Masonry-style grid of project images
   (San Francisco Tower, Rose Villa House) with hover overlay effects.
8. **Counter/stats section with parallax background.** Four animated
   counters: 30 Years Experienced, 1500 Projects Successful, 100
   Professional Experts, 300 Happy Customers — over parallax bg image.
9. **Split testimony/services section.** Left side: "Experience Great
   Services" with 3 service items (Expert & Professional, High Quality
   Work, 24/7 Help Support) with icons. Right side: testimonial carousel
   with customer quotes and navigation dots.
10. **3-column blog section on light background.** Three blog cards with
    date overlay badges, thumbnail images, titles, excerpts, and "Read
    More" primary buttons. Background: light grey (#f8f9fa).
11. **Dark footer (#16181b) with 4 columns.** Logo + social links,
    services list, recent blog posts with thumbnails, and newsletter
    signup form.

## Design tokens

Extracted from the live preview at https://preview.colorlib.com/theme/bee/
and its `css/style.css` stylesheet:

- **Primary brand color:** `#007bff` (Bootstrap blue — buttons, links,
  active states)
- **Secondary brand color:** `#6c757d` (grey — secondary buttons)
- **Amber accent:** `#fda729` (top bar icon circles, accent highlights)
- **Amber hover:** `#f7b32b` (button hover state)
- **Navbar dark bg:** `#16181b` (near-black — navbar, footer)
- **Dark bg for sections:** `#343a40` (darker grey — footer widgets area)
- **Light section bg:** `#f8f9fa` (blog section background)
- **Footer bg:** `#16181b` (dark)
- **Topper bar bg:** `#16181b` (dark bar behind top info)
- **Font family headings:** `"Poppins", sans-serif` (weights 400–900)
- **Font family body:** `"Nunito Sans", sans-serif` (weights 200–900)
- **Font family base:** sans-serif (Bootstrap default)
- **Button radius:** `0.25rem` (Bootstrap default — slightly rounded)
- **Top bar icon radius:** `50%` (circular — 40x40px)
- **Button primary bg:** `#007bff` → hover `#0069d9` → active `#0062cc`
- **Button secondary bg:** `#6c757d` → hover `#5a6268`
- **Hero slider height:** `700px`
- **Text on hero:** white (`#fff`) with dark overlay
- **Counter text:** white on parallax background
- **Footer text:** `rgba(255,255,255,0.7)` (muted white)
- **Footer heading:** `#fff` (white)
- **Blog date badge bg:** `#fda729` (amber)

## Gherkin requirements

### Hero / Top Bar

Feature: Hero and top info bar

  Scenario: Top bar displays contact info and CTA
    Given the page loads
    Then the top bar shows email address, phone number, and "Request A Quote" button
    And the top bar has a dark background (#16181b)
    And the icon circles are amber (#fda729) with white icons
    And the "Request A Quote" button is primary blue (#007bff)

  Scenario: Hero slider displays with right-aligned text
    Given the page loads
    Then the hero section is 700px tall with a background image
    And the heading "Base Construction" is displayed in Poppins bold
    And the subheading "Build The Future" appears in a span within the heading
    And the body text is in Nunito Sans
    And a "Request A Quote" secondary button appears below the text
    And the text is aligned to the right side of the hero

  Scenario: Navbar has dark background with navigation links
    Given the page loads
    Then the navbar is dark (#16181b) and sticky
    And it contains links: Home, About, Project, Blog, Contact
    And a search input is present on the right
    And the brand logo text "Bee." is displayed

### Services Section

Feature: Services grid

  Scenario: Services section displays 4 service cards
    Given the page loads
    Then the "Our Services" heading is displayed
    And 4 service cards are shown in a row
    And each card has an icon, title, and description
    And the services are: Construction, House Renovation, Painting, Architecture Design

  Scenario: Services cards have centered layout
    Given the services section is visible
    Then each card icon is centered
    And each card title is in Poppins bold
    And each card has a short description paragraph

### CTA Banner

Feature: Call-to-action parallax banner

  Scenario: CTA banner shows with parallax background
    Given the page loads
    Then a parallax banner with "Lets Build Your Dream Together" heading is displayed
    And the banner has a dark overlay on a background image
    And a "Know more about us" primary button is centered below the text

### Team Section

Feature: Team member cards

  Scenario: Team section displays 4 members
    Given the page loads
    Then the "Our Professional Team" heading is displayed
    And 4 team member cards are shown
    And each card has a photo, name, and role
    And the team members are: Daren Wilson, Warren Parker, Eva Gustavo, Mike Henderson

### Project Gallery

Feature: Project image gallery

  Scenario: Projects section displays 8 project images
    Given the page loads
    Then the "Featured Projects" heading is displayed
    And 8 project images are shown in a grid
    And the projects include "San Francisco Tower" and "Rose Villa House"
    And hovering shows a zoom/overlay effect on each image

### Counter Section

Feature: Statistics counter

  Scenario: Counter section displays 4 stats
    Given the page loads
    Then the counter section shows with a parallax background
    And 4 stat items are displayed: "30 Years Experienced", "1500 Projects Successful", "100 Professional Experts", "300 Happy Customers"
    And each counter animates on scroll

### Testimonials Section

Feature: Testimonials and services split

  Scenario: Testimony section displays services and testimonials
    Given the page loads
    Then the "Experience Great Services" heading is displayed on the left
    And 3 service items are listed: Expert & Professional, High Quality Work, 24/7 Help Support
    And the right side shows a testimonial carousel with customer quotes
    And navigation dots allow switching between testimonials

### Blog Section

Feature: Blog cards

  Scenario: Blog section displays 3 blog cards
    Given the page loads
    Then the "Recent Blog" heading is displayed
    And 3 blog cards are shown on a light background (#f8f9fa)
    And each card has a date badge (amber #fda729), title, excerpt, and "Read More" button
    And each card shows author and comment count

### Footer

Feature: Dark footer with widgets

  Scenario: Footer has 4 widget columns
    Given the page loads
    Then the footer is dark (#16181b)
    And column 1 shows the logo "Bee." with social links (Twitter, Facebook, Instagram)
    And column 2 shows a services list (Construction, Renovation, Painting, Interior Design, Exterior Design)
    And column 3 shows recent blog posts with thumbnails
    And column 4 shows a newsletter signup form with email input
    And the footer links to Component Dock

  Scenario: Footer has copyright bar
    Given the footer is visible
    Then a copyright notice is displayed below the widgets
    And the footer is full-width with dark background

## Verification checklist

- [ ] Hero slider renders at 700px with background image and overlay
- [ ] Top bar shows amber icon circles, email, phone, CTA button
- [ ] Navbar is dark with all 5 nav links and search
- [ ] Services section shows 4 cards in a row with icons
- [ ] CTA parallax banner renders with heading and button
- [ ] Team section shows 4 member cards with photos
- [ ] Project gallery shows 8 images in a grid
- [ ] Counter section animates 4 stat numbers
- [ ] Testimony section shows services list + testimonial carousel
- [ ] Blog section shows 3 cards on light background
- [ ] Footer is dark with 4 widget columns
- [ ] Footer newsletter form has email input
- [ ] Footer links to Component Dock
- [ ] All text uses Poppins (headings) + Nunito Sans (body)
- [ ] Brand color #007bff used for primary buttons
- [ ] Amber #fda729 used for accents and icon circles
- [ ] No ColorLib references in app code
- [ ] Images use picsum.photos placeholders
