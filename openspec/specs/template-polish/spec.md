# Template: Polish (Cleaning Company)

## Purpose

Polish is a cleaning-company landing page in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Cleanex" free template
(source: https://colorlib.com/wp/template/cleanex/), built under a DIFFERENT
name (**Polish**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based single-page cleaning service site with a
parallax hero banner, a booking form, animated stat counters, a services grid,
a "how it works" flow section, testimonial carousel, pricing cards, a CTA
banner, a blog grid, and a dark-image-overlay footer with newsletter and social
links.

**Preview URL:** https://preview.colorlib.com/theme/cleanex/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-template.jpg

**WHAT MAKES POLISH DISTINCT (signature behaviors):**

1. **Dark photographic hero with left-aligned content.** Full-width hero
   (`background-image: url(bg_1.jpg)`) with dark overlay and
   `degree-right` diagonal clip. Left-aligned white text: "Introducing Cleanex"
   subheading with decorative underline, "A Clean Home is A Happy Home" h1,
   description paragraph, and a secondary (outline) "Request A Quote" button.

2. **Appointment booking form with blue background.** Two-column layout: left
   side has a white card form (First Name, Last Name, Service dropdown with
   6 options, Phone, Date, Time fields, "Make an Appointment" submit button).
   Right side shows phone/email contact info. The form area has a light blue
   tinted background.

3. **Animated stat counters over dark image.** Background image (`bg_2.jpg`)
   with dark overlay. Four counter items: 4,800 Projects Completed, 14,000
   Employees, 200 Clients, 71,650 Awards. Each has a blue circular icon and
   an animated number counter.

4. **Industries We Serve — two-column checklist.** Left column: full-height
   background image. Right column: "Services" subheading, "Industries We Serve"
   h2, description paragraph, two columns of 8 checkmarked industry items
   (Airport & Airlines, House & Offices, Auto Dealerships, etc.) with
   blue checkmark icons.

5. **Services grid with image cards.** "Offering Best Cleaning Services" h2,
   6 service cards in a 3x2 grid. Each card has a background image,
   service name (h3), "Starting from $50" price, and a circular arrow
   button. Services: Residential, Commercial, Construction, Windows, Carpet,
   Furniture Cleaning.

6. **How It Works — 3-step flow over dark image.** Background image
   (`bg_2.jpg`), dark overlay, white text. Three numbered steps with icons:
   (1) "Pick a suitable plan", (2) "Set your schedule",
   (3) "Get amazing result" — each with a description paragraph.

7. **Testimonial carousel.** `bg-light` section with owl-carousel. Each card:
   circular avatar image, name, location, and quoted text. Animates between
   testimonials.

8. **Four pricing cards.** "Our Plans & Pricing" h2. Four cards: Basic ($29),
   Standard ($59), Premium ($99), Ultimate ($139). Each has plan name, price,
   feature list (5 items), and blue "Sign Up" button.

9. **CTA banner over dark image.** Background image (`bg_4.jpg`), dark overlay,
   white h2 "Need to clean your house? Just hire us!" with two buttons:
   blue primary phone number and outline secondary email.

10. **Blog grid.** `bg-light` section, "Recent Post" h2, 3 blog cards: each
    with top background image, meta bar (date, author, comments), title (h3),
    and excerpt paragraph.

11. **Dark image-overlay footer.** Background image (`bg_2.jpg`) with dark
    overlay. Four columns: Logo + social icons (Twitter, Facebook, Instagram),
    Recent Posts (2 blog previews with thumbnails), Explore links
    (About, Contact, Services, Blog), and Contact info + Newsletter signup
    form with rounded input and arrow button. Bottom bar with copyright and
    Component Dock link.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token           | Value                                             | Notes                                         |
| --------------- | ------------------------------------------------- | --------------------------------------------- |
| font-family     | System font stack (Bootstrap default)             | -apple-system, BlinkMacSystemFont, etc.       |
| brand-primary   | #225ae1                                           | Primary blue — buttons, links, icons, accents |
| brand-secondary | #fedd32                                           | Yellow accent — subheading decorations        |
| dark-navy       | #161655                                           | Deep navy for overlays                        |
| body-text       | #6c757d                                           | Paragraph text                                |
| heading-color   | #000000                                           | All h1-h6                                     |
| white           | #fff                                              | Text on dark backgrounds, cards               |
| bg-light        | #f8f9fa                                           | Testimonial + blog sections                   |
| border-radius   | 0.25rem                                           | Bootstrap default buttons                     |
| overlay-bg      | rgba(0,0,0,0.5) (approx)                          | Dark image overlays                           |
| btn-primary     | bg #225ae1, color #fff, border-radius 0.25rem     | Blue solid button                             |
| btn-secondary   | bg transparent, border 1px solid #fff, color #fff | Outline button on dark hero                   |
| hero-gradient   | Diagonal clip (degree-right CSS class)            | Hero bottom edge shape                        |

## Requirements (Gherkin)

### Scenario: Navbar renders fixed dark top bar with logo and nav links

- Given the user is on the page
- Then a fixed dark navbar is visible at the top
- And the navbar contains the brand logo text "Polish"
- And the navbar contains links: About, Services, Pricing, Blog, Contact

### Scenario: Hero section displays with dark image overlay and CTA

- Given the user is on the page
- Then the hero section has a dark photographic background image
- And a dark overlay covers the background
- And "Introducing" subheading text is visible
- And "A Clean Home is A Happy Home" heading is visible
- And a "Request A Quote" outline button is visible

### Scenario: Booking form accepts user input

- Given the user is on the page
- When the user types "John" in the First Name field
- And the user types "Doe" in the Last Name field
- And the user selects "Residential Cleaning" from the service dropdown
- Then the "Make an Appointment" button is enabled

### Scenario: Stats section displays animated counters

- Given the user is on the page
- Then 4 stat counters are visible
- And each counter shows a number and a label
- And each counter has a blue circular icon

### Scenario: Services grid shows 6 cleaning service cards

- Given the user is on the page
- Then 6 service cards are displayed in a grid
- And each card has an image, title, and price
- And each card has a circular arrow button

### Scenario: Pricing section shows 4 plan cards

- Given the user is on the page
- Then 4 pricing cards are displayed
- And each card has a plan name, price, and feature list
- And each card has a "Sign Up" button

### Scenario: Blog section shows 3 post cards

- Given the user is on the page
- Then 3 blog post cards are displayed
- And each card has an image, meta info, title, and excerpt

### Scenario: Footer contains newsletter form and social links

- Given the user is on the page
- Then the footer has a newsletter email input and submit button
- And the footer has social media icon links
- And the footer has a copyright line with Component Dock link

## Verification Checklist

- [ ] All 11 sections render in correct order (hero → booking → stats → industries → services → how it works → testimonials → pricing → CTA → blog → footer)
- [ ] Hero has dark photographic background, overlay, diagonal clip, left-aligned text, outline CTA button
- [ ] Booking form has all fields (first name, last name, service dropdown, phone, date, time) and submit button
- [ ] 4 stat counters display with icons, numbers, and labels
- [ ] Industries section shows 8 checkmarked items in 2 columns
- [ ] Services grid shows 6 cards with images, titles, prices, arrow buttons
- [ ] How It Works shows 3 numbered steps with icons
- [ ] Testimonial carousel shows customer quotes with avatars
- [ ] Pricing shows 4 cards (Basic/Standard/Premium/Ultimate) with prices and feature lists
- [ ] CTA banner has heading and two buttons (phone + email)
- [ ] Blog shows 3 cards with images, meta, titles, excerpts
- [ ] Footer has 4 columns: brand+social, recent posts, explore links, newsletter+contact
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Build succeeds with no TypeScript errors
