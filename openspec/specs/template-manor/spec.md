# Template: Manor (Real Estate)

## Purpose

Recreation of ColorLib's **The Estate** template (`theestate`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/theestate/
- **Preview:** https://preview.colorlib.com/theme/theestate/
- **New name:** `manor` (apps/manor, @free-react-templates/manor)
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)
- **Category:** Real Estate

## Design tokens

Extracted from `styles/main_styles.css` of the live preview.

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#fd784f` | Orange accent — buttons, featured panel, search submit, newsletter submit, CTA phone button, section title underline, link hover, focus rings, weekly offer text, footer form highlights |
| navy-dark | `#0e1d41` | Search box background, header (scrolled), newsletter section background |
| navy-footer | `#07122c` | Footer background |
| navy-form | `#1e2c4e` | Footer form input backgrounds, heading color, CTA heading color |
| gray-light | `#e7eaf0` | CTA section background |
| gray-lighter | `#edeff4` | Workflow circle outer, featured card body background |
| gray-workflow-inner | `#e1e5ec` | Workflow circle inner |
| gray-border | `#aeaead` | Header border (before scroll), section borders |
| text-body | `#a5a5a5` / `#838383` | Body text, paragraph text |
| text-subtitle | `#b0b1b3` | Section subtitles, newsletter subtitle |
| text-white | `#FFFFFF` | Hero text, nav text, button text, featured price, CTA phone button text, newsletter heading |
| newsletter-input-bg | `#4a5b85` | Newsletter email input background |
| footer-text | `#c5c5c5` | Footer about text, useful links text |

### Fonts

- **Body / Headings:** `'Open Sans', sans-serif` (300, 400, 600, 700)
- **Logo / Accent headings:** `'Montserrat', sans-serif` (700)

### Button shapes

- All buttons: **border-radius: 0px** (sharp corners, no rounding)
- Newsletter submit: 132×55px, orange bg, white text, uppercase, 600 weight
- Search submit: orange bg, white text
- Footer send button: 86×32px, orange bg, white text, 12px, uppercase
- CTA phone button: inline-block, orange bg, white text, 18px, 600 weight
- Focus states: white border (newsletter), orange outline (search inputs)

### Section backgrounds

- Hero: full-viewport background image slider
- Search box: `#0e1d41` navy, overlaps hero (negative margin)
- Featured Properties: `#FFFFFF` white
- Testimonials: parallax background image
- Workflow: `#FFFFFF` white
- Cities: no explicit bg (light)
- CTA: `#e7eaf0` light gray with parallax background image overlay (opacity 0.32)
- Newsletter: `#0e1d41` navy
- Footer: `#07122c` dark navy

## Section order (from preview DOM)

1. **Hero** — Full-viewport image slider with headline "find your home"
2. **Header** — Fixed, transparent → navy on scroll. Logo ("the estate"), nav links (home, about us, listings, news, contact), phone number
3. **Search Box** — Overlapping hero, dark navy bg. Form: dropdowns (keywords, property ID, status, location, type, bedrooms, bathrooms, min/max price, min/max sq ft), search button, specific features (checkboxes)
4. **Featured Properties** — 3 property cards: image, "featured" badge, title, description, room details (bedrooms, bathrooms, area, patio, garage), amenity tags, price box
5. **Testimonials** — Parallax bg, carousel of client testimonials (name, title, quote)
6. **Workflow** — "see how we operate" — 3 numbered steps with circle illustrations + rocket: Choose a Location, Find the Perfect Home, Move in your new life
7. **Cities** — "cities clients prefer" — carousel of city cards (Miami, Dublin, Vienna, Marbella, New York, Geneva)
8. **CTA** — "Do you want to talk with one of our real estate experts?" + phone number button
9. **Newsletter** — Left: subscribe form (email input + button). Right: weekly offer promo card
10. **Footer** — Logo, social links, about text, useful links, contact form (name, email, message, send), contact info (address, phone, email, website)

## Gherkin requirements

### Scenario: Hero slider renders
```gherkin
Given the user visits the homepage
Then a full-viewport hero section is visible
And the hero displays the headline "find your home"
And the hero contains navigation arrows
```

### Scenario: Fixed header appears on scroll
```gherkin
Given the user is at the top of the page
Then the header is transparent with white text
When the user scrolls down
Then the header background becomes navy (#0e1d41)
And the header is fixed to the top of the viewport
```

### Scenario: Header navigation links
```gherkin
Given the header is visible
Then the logo displays "manor"
And the nav contains links: home, about us, listings, news, contact
And a phone number is displayed in the header
```

### Scenario: Search box form
```gherkin
Given the search box is visible
Then the search box has a dark navy background
And the title reads "search your home"
And the form contains dropdown selects for: keywords, property ID, property status, location, property type, bedrooms, bathrooms, min price, max price, min sq ft, max sq ft
And a search submit button is present
And specific features checkboxes are available
```

### Scenario: Featured properties cards
```gherkin
Given the featured properties section is visible
Then the section title reads "featured properties"
And the subtitle reads "See our best offers"
And 3 property cards are displayed
And each card has an image, a "featured" badge, title, description
And each card shows room details: bedrooms, bathrooms, area, patio, garage
And each card has amenity tags
And each card has a price box with "For Sale" and a price
```

### Scenario: Testimonials carousel
```gherkin
Given the testimonials section is visible
Then a parallax background image is displayed
And the section title reads "clients testimonials"
And testimonial items show a quote, user name, and user title
And the carousel allows navigation between testimonials
```

### Scenario: Workflow steps
```gherkin
Given the workflow section is visible
Then the section title reads "see how we operate"
And the subtitle reads "What you need to do"
And 3 steps are displayed in a row
And step 01 is "Choose a Location"
And step 02 is "Find the Perfect Home"
And step 03 is "Move in your new life"
And each step has a circular illustration with a number
```

### Scenario: Cities carousel
```gherkin
Given the cities section is visible
Then the section title reads "cities clients prefer"
And city cards show: Miami, Dublin, Vienna, Marbella, New York, Geneva
And carousel navigation arrows are present
```

### Scenario: CTA section
```gherkin
Given the CTA section is visible
Then the heading reads "Do you want to talk with one of our real estate experts?"
And "real estate experts" is highlighted in orange
And an orange phone number button is displayed
```

### Scenario: Newsletter section
```gherkin
Given the newsletter section is visible
Then the background is dark navy
And the heading reads "subscribe to our newsletter"
And the subtitle reads "Get the latest offers"
And an email input field is present
And an orange "subscribe" button is present
And a weekly offer promo card is displayed alongside
```

### Scenario: Footer
```gherkin
Given the footer is visible
Then the background is dark navy (#07122c)
And the logo "manor" is displayed
And social media icon links are present (Pinterest, Facebook, Twitter, Dribbble, Behance)
And useful links are listed
And a contact form with name, email, message fields and a send button is present
And contact info (address, phone, email, website) is displayed
And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Hero is full-viewport with image slider
- [ ] Header is fixed, transitions from transparent to navy on scroll
- [ ] Search box overlaps hero with negative margin
- [ ] Featured properties show 3 cards with all room details and tags
- [ ] Testimonials have parallax background and carousel
- [ ] Workflow shows 3 numbered steps with circle illustrations
- [ ] Cities carousel renders all 6 cities
- [ ] CTA has orange highlighted text and phone button
- [ ] Newsletter has dark navy bg, form, and weekly offer card
- [ ] Footer has 4 columns: about/social, useful links, contact form, contact info
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Brand color `#fd784f` used consistently as accent
- [ ] Sharp-corner buttons (no border-radius)
- [ ] Open Sans + Montserrat fonts loaded
- [ ] Responsive layout (mobile hamburger menu)
