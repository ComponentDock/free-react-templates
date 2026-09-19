# Template: Blossom (Florist / Flower Shop)

## Purpose

Blossom is a florist / flower shop e-commerce landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Florist" template design, built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/florist/
- **Preview URL:** https://preview.colorlib.com/theme/florist/
- **New name:** `blossom` (apps/blossom, @free-react-templates/blossom)
- **Category:** Flower shop / florist e-commerce landing page

## Design reference (replication findings)

- **Original:** ColorLib "Florist" — a flower shop / e-commerce template
  (`<title>Florist | Template</title>`). Pink-accented e-commerce landing
  page on a white palette with a hot-pink primary. Two-column header
  (logo left, nav + search/heart/bag right); full-width hero photo slider
  (600px, dark overlay, left-aligned headline "Making beautiful flowers a
  part of your life" + pink CTA pill + white dots); 4-column benefits bar
  (icon + title + blurb); 4-column categories grid with overlay text on
  cover images; two-part about section (left: section title + paragraph;
  right: video thumbnail + feature text with CTA); filterable product grid
  (5-column, 10 items with New/Sale/Out Of Stock labels, hover icon bar,
  price-to-cart transition); "Latest posts" 3-column blog cards with
  label pill + date; testimonial carousel (lavender `#f7f5fa` bg,
  serif italic quote, owl-nav circles); 5-column Instagram photo strip
  (hover overlay with pink icon + follow link); footer (logo + blurb +
  social row, 4-column widget area with newsletter form, copyright bar
  with pink heart/link).

- **Preview DOM analyzed:** https://preview.colorlib.com/theme/florist/
  (HTTP 200, 749 lines HTML). Also imports css/bootstrap.min.css,
  css/font-awesome.min.css, css/elegant-icons.css, css/magnific-popup.css,
  css/nice-select.css, css/owl.carousel.min.css, css/slicknav.min.css.
  jQuery + owl.carousel + mixitup + nice-select + nicescroll + slicknav
  + magnific-popup — **NOT Tailwind**. Font: `"Quicksand", sans-serif`
  (body/paragraphs) + `"Libre Baskerville", serif` (headings) + custom
  `"Hello Santtiny"` (decorative — skip; use cursive Google Font
  alternative or omit).

- **Screenshot note:** florist-free-template.jpg — visually consistent with
  the live DOM analysis. White background, pink accent (`#f45d96`), serif
  headings, soft e-commerce aesthetic.

### Design tokens (from css/style.css)

| Token                | Value                              | Where                                              |
| --------------------- | ---------------------------------- | -------------------------------------------------- |
| Primary pink          | `#f45d96`                          | buttons, section-title span, hover states, icons   |
| Near-black             | `#111111`                          | headings, nav, product labels, copyright           |
| Body text             | `#444444`                          | paragraphs, footer widget text                     |
| Muted gray            | `#888888`                          | testimonial role, blog date, form placeholders     |
| White                 | `#ffffff`                          | button text, card hover bg, testimonial nav bg     |
| Lavender tint         | `#f7f5fa`                          | testimonial section bg                             |
| Border light          | `#eaeaea`                          | footer options top/bottom border                   |
| Border form           | `#e1e1e1`                          | contact form input/textarea border                 |
| Body font             | `"Quicksand", sans-serif`          | body, paragraphs, nav                              |
| Heading font          | `"Libre Baskerville", serif`       | h1-h6                                              |
| Primary button        | bg `#f45d96`, white text, radius 50px | `.primary-btn` pill style                       |
| Border button         | transparent bg, 2px solid `#f45d96` | `.primary-btn.border-btn`                        |
| Site button           | bg `#111111`, white text, radius 0 | `.site-btn` (shop buttons)                         |
| Card shadow           | `0px 10px 21px rgba(99,133,136,0.16)` | `.blog__item`                                   |
| Hero height           | 600px                              | `.hero__items`                                     |
| Hero dot              | 15px circle, white, radius 50%     | `.owl-dots button`                                 |
| Product card height   | 344px image                        | `.product__item__pic`                              |
| Category card height  | 440px                              | `.categories__item`                                |
| Instagram item height | 372px                              | `.instagram__post__item`                           |

## Gherkin requirements

### Hero Section
Scenario: Hero slider displays floral imagery with headline and CTA
  Given the user is on the homepage
  Then a full-width hero section is visible with a background image
  And a subtitle "Fresh Flower & Gift Shop" is displayed
  And a heading "Making beautiful flowers a part of your life." is displayed
  And a pink pill button "Shop now" is displayed
  And slider navigation dots are visible at the bottom

### Benefits Bar
Scenario: Four benefit items are displayed in a row
  Given the user is on the homepage
  Then 4 benefit items are displayed in a horizontal row
  And each benefit item has an icon, a title, and a short description
  And the titles are "100% Freshness", "Made by artist", "Own courier", "100% Freshness"

### Categories Section
Scenario: Four category cards with overlay text on cover images
  Given the user is on the homepage
  Then 4 category cards are displayed in a 4-column grid
  And each card has a background image with overlay text
  And the categories are "Fresh Flower", "Succulent plants", "Cactus plants", "Funiture tree"
  And each category shows an item count

### About Section
Scenario: Two-column about section with video and feature text
  Given the user is on the homepage
  Then a section title "About us" with subtitle "We provide all kinds of fresh flower services" is displayed
  And a paragraph about the florist business is shown
  And a video thumbnail with a play button is displayed
  And a feature text block with heading "Dried flowers are having a renaissance" is shown
  And a pink "Contact us" button is displayed

### New Arrivals / Product Grid
Scenario: Filterable product grid with 10 items
  Given the user is on the homepage
  Then a section title "New Arrivals" with subtitle "Our flower" is displayed
  And filter controls show: All, Bouquet, Flower box, Flower shelf, Basket of flower, Gift combos
  And 10 product cards are displayed in a grid
  And each product card has an image, product name, price, and "Add to cart" link
  And some cards show labels: "New", "Sale", or "Out Of Stock"
  And hovering a card reveals icon buttons (search, cart, heart) and hides the price

### Latest Posts / Blog Section
Scenario: Three blog post cards with labels
  Given the user is on the homepage
  Then a section title "Florist tricks" with subtitle "Latest posts" is displayed
  And a "View all posts" border button is displayed
  And 3 blog cards are shown in a 3-column grid
  And each blog card has a cover image, a label pill, a title, excerpt, and date
  And the labels are "Trend news", "Tips & Idea", "DIY & Crafts"

### Testimonial Section
Scenario: Testimonial carousel with quote and author
  Given the user is on the homepage
  Then a testimonial section with a lavender (#f7f5fa) background is displayed
  And a quote mark image is shown
  And a testimonial quote in serif italic font is displayed
  And the author name "Alejandro Houston" and role "Businessman" are shown
  And carousel navigation buttons (prev/next) are visible

### Instagram Section
Scenario: Five-column Instagram photo strip with hover overlay
  Given the user is on the homepage
  Then 5 Instagram photo items are displayed in a horizontal row
  And each item has a background image
  And hovering an item shows a white overlay with a pink Instagram icon and "Follow us @blossom" text

### Footer
Scenario: Multi-column footer with newsletter and social links
  Given the user is on the homepage
  Then a footer is displayed with the logo and a short description
  And social media icon links (Facebook, Twitter, Instagram, LinkedIn) are shown
  And a 4-column widget area shows: Company links, Account links, Newsletter form, Contact info
  And the newsletter form has an email input and a "Subscribe" button
  And the copyright bar shows "All rights reserved" with a link to "Component Dock"

## Verification checklist

- [ ] Hero section renders with background image, subtitle, heading, pink CTA button, and slider dots
- [ ] Benefits bar shows 4 items in a responsive row
- [ ] Categories section shows 4 cards with background images and overlay text
- [ ] About section has two-column layout: title+text left, video+feature right
- [ ] Product grid shows 10 filterable items with labels, prices, and hover interactions
- [ ] Blog section shows 3 cards with label pills, titles, excerpts, and dates
- [ ] Testimonial section has lavender bg, serif italic quote, author info, nav buttons
- [ ] Instagram strip shows 5 images with hover overlay
- [ ] Footer has logo, social icons, 4-column widgets, newsletter form, copyright with Component Dock link
- [ ] Typography matches: Quicksand for body, Libre Baskerville for headings
- [ ] Primary color #f45d96 used for buttons, accents, links
- [ ] All sections match the original ColorLib section order 1:1
- [ ] Placeholder images use picsum.photos/seed/blossom-N/W/H
- [ ] No ColorLib references in app code (only in spec)
- [ ] Footer links to https://www.componentdock.com/
