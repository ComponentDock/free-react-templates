# Tally — Accounting & Business Consulting Template

Recreation of ColorLib **Accounting** (https://colorlib.com/wp/template/accounting/).

## Design Tokens

- **Font:** Montserrat (Google Fonts, weights 300-800)
- **Primary color:** #F96D00 (orange — used for CTAs, loader spinner)
- **Dark overlay:** rgba(0,0,0,0.5) on hero slides
- **Background palette:** white (#fff), light gray (#f8f9fa / bg-light), dark (#666666 / bg-secondary)
- **Section rhythm:** alternating white / light-gray backgrounds
- **Button style:** rounded-pill for hero CTA ("Connect with us"), standard rounded for pricing/subscribe
- **Layout:** Bootstrap 4 grid (12-col), container-based

## Page Structure (sections in order)

1. **TopBar** — phone number + email (left), social icons (right), dark background
2. **Navbar** — brand "Tally", nav links (Home, About, Services, Case Study, Blog, Contact), search form, sticky on scroll, dark bg
3. **Hero** — carousel/slider with 3 slides, each: background image + dark overlay, centered heading + subheading + CTA button ("Connect with us")
4. **About** — split: left image, right text + 4 service items with icons (Market Analysis, Accounting Advisor, General Consultancy, Structured Assessment)
5. **Services** — 4-column grid: Accounting, Tax/Compliance/Payroll, Financial Services, Growth & Funding Access (each with icon + heading + description)
6. **StatsCounter** — 4 counters: 50 Years Experience, 8500 Cases Completed, 20 Awards Won, 50 Expert Consultants (animated count-up)
7. **Testimonials** — carousel with quote cards: icon, quote text, avatar, name, position
8. **FAQ** — split: left images, right accordion with 4 questions (expandable/collapsible)
9. **Blog** — 3-column blog cards: image thumbnail, date + author + comments, heading
10. **Newsletter** — dark banner: heading left, email subscribe form right
11. **Pricing** — 4 pricing tiers: Personal ($49), Business ($79), Ultimate ($109), Premium ($149), each with feature list + CTA button
12. **Footer** — dark bg: About column + social, Services column, Discover column, Resources column, Free Consultation form, copyright with Component Dock link

## Gherkin Scenarios

### TopBar

- Given the page loads, Then the top bar displays phone number and email address
- Given the page loads, Then social media icons are visible in the top bar

### Navbar

- Given the page loads, Then the navbar shows brand "Tally"
- Given the page loads, Then navigation links for Home, About, Services, Case Study, Blog, Contact are visible
- Given the user scrolls down, Then the navbar becomes sticky

### Hero

- Given the page loads, Then a carousel displays the first slide with heading and CTA
- Given the user waits, Then slides auto-rotate
- Given a slide is active, Then it shows a background image with dark overlay and centered text

### About

- Given the page loads, Then an image appears on the left and text content on the right
- Given the about section loads, Then 4 service items are displayed (Market Analysis, Accounting Advisor, General Consultancy, Structured Assessment)

### Services

- Given the page loads, Then 4 service cards are displayed in a grid
- Given a service card renders, Then it shows an icon, heading, and description

### StatsCounter

- Given the page loads, Then 4 stat counters are displayed
- Given a counter enters viewport, Then the number animates from 0 to target value

### Testimonials

- Given the page loads, Then a testimonials carousel is displayed
- Given a testimonial card renders, Then it shows a quote, avatar, name, and position

### FAQ

- Given the page loads, Then 4 FAQ items are displayed
- Given the user clicks an FAQ header, Then the answer expands/collapses

### Blog

- Given the page loads, Then 3 blog cards are displayed
- Given a blog card renders, Then it shows an image, date, author, comment count, and heading

### Newsletter

- Given the page loads, Then a newsletter banner with email input and subscribe button is displayed

### Pricing

- Given the page loads, Then 4 pricing tiers are displayed
- Given a pricing tier renders, Then it shows tier name, price, feature list, and CTA button

### Footer

- Given the page loads, Then the footer shows About, Services, Discover, Resources columns
- Given the page loads, Then a consultation form is visible in the footer
- Given the page loads, Then the copyright links to Component Dock (https://www.componentdock.com/)

## Verification

- TypeCheck: PASS
- Lint: PASS
- Test Coverage: 100% lines/functions/branches/statements
- Build: PASS
