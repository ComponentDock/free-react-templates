# Template: Bakerly (Bakery / Cake Shop)

## Purpose

Recreation of ColorLib **Cakes** template.
- Source: <https://colorlib.com/wp/template/cakes/>
- Preview: <https://preview.colorlib.com/theme/cakes/>
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- New name: **bakerly** (package `@free-react-templates/bakerly`)

## Design tokens

### Colors
| Token            | Value        | Usage                                   |
| ---------------- | ------------ | --------------------------------------- |
| brand-primary    | `#F04506`    | Buttons, section labels, links, accents |
| brand-dark       | `#d83e06`    | Button gradient end, hover state        |
| hero-bg          | `#FFF5F2`    | Soft peach/pink hero & product cards    |
| footer-bg        | `#FFF7F3`    | Warm off-white footer wrapper           |
| text-primary     | `#000000`    | Headings (h1–h6)                        |
| text-body        | `#5E5E5E`    | Body text, nav links, secondary copy    |
| text-muted       | `#635C5C`    | Default link color                      |
| text-heading-sub | `#391F14`    | Section-tittle paragraph                |

### Typography
| Role            | Font family              | Weight | Size     |
| --------------- | ------------------------ | ------ | -------- |
| Body            | DM Sans, sans-serif      | 400    | 16px     |
| Headings h1–h6  | Quicksand, sans-serif    | 500–700| 23–80px  |
| Decorative      | Lobster, cursive         | 400    | 160px    |
| Section labels  | DM Sans, sans-serif      | 400    | 16px     |
| Buttons         | Quicksand, sans-serif    | 400    | 16–22px  |

### Buttons
- Primary (`.btn`): pill shape (`border-radius: 30px`), orange gradient
  (`linear-gradient(to left, #F04506, #d83e06, #F04506)`), white text,
  shadow `0px 17px 27px rgba(240,69,6,0.27)`, padding `13px 37px`.
- Hero CTA (`.slider-btn`): same gradient, larger (`font-size: 22px`, padding
  `15px 45px`).
- Product order (`.order-btn`): same gradient pill, font-size 18px, hover
  lifts up (`top: -5px`).
- Outlined (`.boxed-btn`): white bg, 1px solid `#F04506`, uppercase,
  `letter-spacing: 3px`, hover fills orange.
- Header "Order Online" (`.header-btn2`): same as `.btn` without shadow.

### Section backgrounds
| Section         | Background                                |
| --------------- | ----------------------------------------- |
| Hero/Slider     | Full-width background image (warm imagery)|
| Popular items   | White (cards: `#FFF5F2` with `border-radius: 0 0 60px 0`) |
| About           | White                                     |
| Services        | White                                     |
| Video           | Background image (`section-bg2`)          |
| Testimonials    | White                                     |
| Instagram       | Image carousel (no solid bg)              |
| Footer          | `#FFF7F3` warm pink                       |

## Section order (from live preview DOM)

1. **Navbar** — Logo (left), nav links (Home, Product, About, Blog, Contact),
   phone number + "Order Online" button (right). Sticky header, white bg with
   shadow on scroll. Dropdown submenu on "Blog".
2. **Hero / Slider** — Full-width background image. Left column: decorative
   Lobster "Delicious" watermark, bold h1 "Delicious Cake For Everyone", body
   text, "Explore Menu" CTA button. Right column: large cake image in organic
   rounded shape. Decorative cake shape bleeds at bottom-left.
3. **Popular Products** — Section label "Most Popular", heading "Our Exclusive
   Cakes". 3-column grid of product cards (Owl carousel with arrows). Each card:
   soft peach bg (`#FFF5F2`), rounded bottom-right corners (`0 0 60px 0`),
   cake image (top), name, description, "$20 | Order Now" button. Items:
   Chocolate, Sweetheart, Blackforest.
4. **About** — Split layout: large image left, text right. Label "Fresh &
   Delicious", heading "A Simple Way to Eating Delicious", body paragraph,
   "Our Story" outlined button.
5. **Services / Features** — Label "Our Features", heading "Quality is Our
   First Priority". 3-column icon cards with heading + description. Decorative
   shape at bottom-right.
6. **Video** — Full-width background image section with centered YouTube play
   button (play icon in circle, magnific-popup style).
7. **Testimonials** — Label "Testimonial", heading "What Customers Say".
   Carousel with quote, founder avatar, name, title.
8. **Instagram Feed** — Full-width horizontal carousel of food photos with
   Instagram icon overlay (hover reveals icon).
9. **Footer** — 4-column: logo + social links (Twitter, Facebook, LinkedIn,
   Pinterest), Quick Links, Cake list (Blackforest, etc.), Contact info.
   Footer bottom: copyright with "made with ❤ by Colorlib" → replace with
   Component Dock attribution.
10. **Back-to-top button** — Fixed position, bottom-right, orange circle.

## Gherkin requirements

### Feature: Bakerly — Bakery Cake Shop Template

#### Scenario: Navbar renders correctly
  Given the page loads
  When the navbar is visible
  Then it shows the logo, nav links (Home, Product, About, Blog, Contact),
    a phone number, and an "Order Online" button
  And it becomes sticky with a white background and shadow on scroll

#### Scenario: Hero section displays
  Given the page loads
  When the hero section renders
  Then it shows a large heading "Delicious Cake For Everyone"
  And a decorative "Delicious" text in Lobster font at 6% opacity
  And a body paragraph beneath the heading
  And an "Explore Menu" pill button
  And a cake image on the right side in an organic rounded shape
  And a decorative cake shape bleeds at the bottom-left

#### Scenario: Popular Products section displays
  Given the page loads
  When the popular products section renders
  Then it shows a section label "Most Popular"
  And a heading "Our Exclusive Cakes"
  And at least 3 product cards in a grid
  And each card has a cake image, name, description, and an "Order Now" button
  And the product cards have soft peach backgrounds and rounded bottom-right corners

#### Scenario: About section displays
  Given the page loads
  When the about section renders
  Then it shows a large image on the left
  And a label "Fresh & Delicious"
  And a heading "A Simple Way to Eating Delicious"
  And body text
  And an "Our Story" outlined button

#### Scenario: Services section displays
  Given the page loads
  When the services section renders
  Then it shows a section label "Our Features"
  And a heading "Quality is Our First Priority"
  And 3 feature cards with icons, titles, and descriptions
  And the section has a decorative shape element

#### Scenario: Video section displays
  Given the page loads
  When the video section renders
  Then it shows a full-width background image
  And a centered play button that triggers a video popup

#### Scenario: Testimonials section displays
  Given the page loads
  When the testimonials section renders
  Then it shows a section label "Testimonial"
  And a heading "What Customers Say"
  And at least one testimonial with a quote, avatar, name, and title

#### Scenario: Instagram feed section displays
  Given the page loads
  When the Instagram section renders
  Then it shows a horizontal row of food images
  And each image has an Instagram icon overlay on hover

#### Scenario: Footer renders correctly
  Given the page loads
  When the footer renders
  Then it shows 4 columns: logo + social links, Quick Links, Cake list, Contact
  And the footer bottom shows copyright with Component Dock attribution
  And the footer background is warm off-white (`#FFF7F3`)

#### Scenario: Back-to-top button works
  Given the page loads and user scrolls down
  When the back-to-top button is visible
  And the user clicks it
  Then the page scrolls to the top

## Verification checklist

- [ ] Brand color `#F04506` used consistently for buttons, labels, accents
- [ ] Fonts: DM Sans (body), Quicksand (headings/buttons), Lobster (decorative)
- [ ] Button pill shape: `border-radius: 30px`, orange gradient, white text
- [ ] Product cards: peach bg `#FFF5F2`, rounded bottom-right `0 0 60px 0`
- [ ] Hero: decorative Lobster watermark, split layout with organic image shape
- [ ] Footer: warm `#FFF7F3` background, 4-column layout, Component Dock link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `bakerly.free.componentdock.com`
- [ ] `homepage` = `https://bakerly.free.componentdock.com`
- [ ] Tailwind `@theme` declares brand colors
- [ ] Responsive: mobile hamburger menu, stacked columns on small screens
- [ ] 100% test coverage on changed code
