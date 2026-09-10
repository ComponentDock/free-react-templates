# Template: PackWell (Logistics / Freight)

## Purpose

Recreation of ColorLib **Carries** — a logistics and freight services website template.

- **ColorLib source:** https://colorlib.com/wp/template/carries/
- **Live preview:** https://preview.colorlib.com/theme/carries/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carries-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New app name:** `packwell` (apps/packwell)

## Design Tokens (extracted from preview CSS)

### Colors

| Token          | Hex       | Usage                                  |
| -------------- | --------- | -------------------------------------- |
| brand-primary  | `#0083ff` | Links, hover accents                   |
| brand-accent   | `#f39c12` | CTA buttons, promo highlights, border  |
| dark-bg        | `#3c4a62` | Service catalog top section, footer bg |
| dark-footer    | `#212121` | Footer bottom area                     |
| light-bg       | `#f4f7f9` | Promo top area, alternating sections   |
| gray-bg        | `#f1f1f1` | About area, blog area backgrounds      |
| text-primary   | `#333`    | Body text                              |
| text-secondary | `#585858` | Secondary text                         |
| text-muted     | `#a1a7b2` | Muted/caption text                     |
| white          | `#fff`    | Button text, hero overlays             |

### Typography

- **Font family:** `'Roboto', sans-serif` (Google Fonts)
- **Headings:** bold weight, white on dark backgrounds

### Buttons

- **Primary CTA:** background `#f39c12`, color `#fff`, border `2px solid #f39c12`, border-radius `3px`, padding `12px 30px`
- **Secondary/outline:** border `2px solid #fff`, color `#fff`, transparent background, same border-radius

### Radii

- Buttons: `3px`
- Blog cards: `5px` (image corners)
- Some elements: `0 50px 50px 0` (asymmetric for service labels)
- Icons: `50%` (circular service icons)

### Section Backgrounds

| Section        | Background                                    |
| -------------- | --------------------------------------------- |
| Hero slider    | Full-width background images (dark overlay)   |
| About          | `#f1f1f1` gray                                |
| Service top    | `#3c4a62` dark blue-gray                      |
| Service bottom | `#f4f7f9` light                               |
| Promo top      | `#f4f7f9` light + decorative bg image right   |
| Promo bottom   | Full-width dark image (`promo_bottom_bg.jpg`) |
| Testimonial    | Dark image background                         |
| Newsletter     | White background                              |
| Footer         | `#3c4a62` dark blue-gray, bottom `#212121`    |

## Gherkin Requirements

### Hero Section

- **Scenario: Hero slider renders**
  Given the user visits PackWell
  When the hero section loads
  Then a full-width slider displays with heading "WE MAKE STRONGEST SERVICE ABOVE THE WORLD"
  And a CTA button "Get A Quote" is visible
  And navigation arrows allow sliding between slides
  And the slider has a dark overlay on background images

### Navbar

- **Scenario: Navigation renders**
  Given the user visits PackWell
  When the navbar loads
  Then the site logo/brand name is displayed
  And navigation links are visible (Home, About, Services, Pages, Blog, Contact)
  And the navbar is sticky on scroll

### About Section

- **Scenario: About section renders**
  Given the user scrolls to the about area
  Then the heading "We have 25 years experience in this passion" is visible
  And a descriptive paragraph about the company is shown
  And the section has a gray background (`#f1f1f1`)

### Service Section

- **Scenario: Service catalog renders**
  Given the user scrolls to the service area
  When the service catalog is visible
  Then a dark blue-gray header says "Our Service"
  And four service cards are shown: Ware House, Road Freight, Sea Freight, Air Freight
  And each card has a circular icon, title, and short description
  And the top half has dark background (`#3c4a62`), bottom half has light background (`#f4f7f9`)

### Promo / Why Choose Us

- **Scenario: Why Choose Us section renders**
  Given the user scrolls to the promo area
  Then "Why Choose Us?" heading is displayed
  And bullet points or feature list items describe benefits
  And the section has a light background with a decorative image

### Features / Highlights

- **Scenario: Feature highlights render**
  Given the user scrolls to the feature highlights
  Then three columns show: Our Location, Latest News, 24/7 Support, Fast Delivery
  And each has an icon and short text
  And the section has a dark image background

### Testimonials

- **Scenario: Testimonial slider renders**
  Given the user scrolls to the testimonials area
  Then "what client's say" heading is displayed
  And client quotes with names (e.g. "JABIN KANE") are shown
  And prev/next navigation arrows allow cycling through testimonials

### Newsletter

- **Scenario: Newsletter subscription form renders**
  Given the user scrolls to the newsletter section
  Then "Weekly Newsletter" heading is visible
  And an email input field is present
  And a submit button is present
  And the section has a white background

### Footer

- **Scenario: Footer renders**
  Given the user scrolls to the footer
  Then three columns display: About Us, Latest Tweets, Customer Service
  And a copyright bar is at the bottom
  And the footer has a dark blue-gray background (`#3c4a62`)
  And a link to "Component Dock" (https://www.componentdock.com/) is present

## Verification Checklist

- [ ] Hero slider works with multiple slides
- [ ] Navbar is sticky
- [ ] About section matches original layout and colors
- [ ] Service catalog shows 4 service cards in correct layout
- [ ] Promo section renders with correct background treatment
- [ ] Feature highlights render with icons
- [ ] Testimonial slider works
- [ ] Newsletter form is functional (email input + submit)
- [ ] Footer has 3 columns + Component Dock link
- [ ] All design tokens match the ColorLib reference
- [ ] Responsive on mobile/tablet/desktop
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
