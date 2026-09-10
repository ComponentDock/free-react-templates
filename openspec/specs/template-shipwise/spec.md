# Template: Shipwise (Logistics / Transport)

## Purpose

Recreation of ColorLib's **Carries** template
(source: https://colorlib.com/wp/template/carries/)
preview: https://preview.colorlib.com/theme/carries/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

New name: `shipwise` (never "carries" — naming rule enforced)

---

## Design tokens (extracted from preview + style.css)

| Token                 | Value                                        |
| --------------------- | -------------------------------------------- |
| Brand accent          | `#f39c12` (amber/orange)                     |
| Secondary accent      | `#0083ff` (blue)                             |
| Font family           | `'Roboto', sans-serif`                       |
| Heading color         | `#3c4a62` (dark slate)                       |
| Body text color       | `#5d6b82` / `#687284` (medium slate)         |
| Gray section bg       | `#f7f9fc` (light blue-gray)                  |
| Dark section bg       | `#3c4147` (footer / overlays)                |
| Footer bg             | `#3c4147` (dark)                             |
| Light card bg         | `#f7f9fc`                                    |
| Deep gray bg          | `#eff1ff`                                    |
| Button radius         | 0 (sharp) for CTA border buttons; 5px for form buttons |
| Button style          | `border: 2px solid; border-radius: 3px; letter-spacing: 2px; padding: 12px 30px; text-transform: uppercase` (hero) |
| Form button           | `border-radius: 5px; background: #f39c12; color: #fff` |
| Quote form button     | `border-radius: 5px; background: #5d6b82; letter-spacing: 2px` |
| Subscribe button      | `border-radius: 5px; background: #f39c12`     |
| Parallax bg overlay   | `#3c4147` (used on promo-bottom-area)         |
| Service icon shape    | Hexagon (`.service-icon-hexagon`)              |

---

## Section order (from preview DOM)

1. **Navbar** — sticky top bar with brand, search icon, language selector, nav links (stellar nav)
2. **Hero Slider** — 2 full-height parallax slides with headline + CTA buttons (`.welcome-slider-area`)
3. **Blog Cards** — 3-column grid of blog/news cards (`.blog-area.gray-bg`) with images + titles
4. **About + Quote Form** — two-column: left = about text + counter stats, right = quote form (`.about-area.gray-bg`)
5. **Service Area** — title "Our Service" + hexagon icon cards for Warehouse/Road Freight/Sea Freight/Air Freight (`.service-area`)
6. **Service Catalog** — "Why Choose Us?" with parallax bg, checklist items, 4 promo icon cards (`.promo-area`)
7. **Testimonials** — client photos + quote carousel, centered (`.testmonial-area`)
8. **Footer** — dark bg, 4-column: About Us + Latest Tweets + Customer Service links + Instagram feed + subscribe form (`.footer-area.dark-bg`)

---

## Gherkin requirements

### Feature: Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given I visit the Shipwise homepage
  Then I see a navigation bar with brand logo and nav links
  And the navbar is sticky on scroll

Scenario: Navbar has search and language controls
  Given I visit the Shipwise homepage
  Then I see a search icon and language selector in the top bar
```

### Feature: Hero Slider

```gherkin
Scenario: Hero displays two slides with headlines
  Given I visit the Shipwise homepage
  Then I see a full-width hero slider with two slides
  And each slide has a headline and CTA button

Scenario: Hero buttons navigate or trigger action
  Given I am on the hero slider
  Then each CTA button is styled with border and uppercase text
```

### Feature: Blog Cards

```gherkin
Scenario: Blog section shows three cards
  Given I scroll to the blog section
  Then I see three blog cards in a grid
  And each card has an image, title, and meta info

Scenario: Blog section has gray background
  Given I view the blog section
  Then the background color is light blue-gray (#f7f9fc)
```

### Feature: About + Quote Form

```gherkin
Scenario: About section displays text and stats
  Given I scroll to the about section
  Then I see introductory text on the left
  And counter statistics below the text

Scenario: Quote form collects shipping inquiry
  Given I scroll to the quote form area
  Then I see fields for Name, Email, Phone, Type, Quantity, Destination
  And a Submit button styled in dark slate color
```

### Feature: Service Area

```gherkin
Scenario: Service section shows four hexagon service cards
  Given I scroll to the service section
  Then I see four service cards with hexagon icons
  And the services are: Warehouse, Road Freight, Sea Freight, Air Freight

Scenario: Service icons use hexagon shape
  Given I view the service cards
  Then each service icon is inside a hexagon container
```

### Feature: Service Catalog / Why Choose Us

```gherkin
Scenario: Why Choose Us section with checklist
  Given I scroll to the catalog section
  Then I see "Why Choose Us?" heading
  And a checklist of 4-5 benefits
  And a parallax background image

Scenario: Promo cards display 4 features
  Given I view the catalog area
  Then I see 4 promo cards: Our Location, Latest News, 24/7 Support, Fast Delivery
  And each has an icon and short description
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials display client quotes
  Given I scroll to the testimonials section
  Then I see a carousel of client testimonials
  And each testimonial has a photo, quote, name, and title

Scenario: Testimonials are centered and styled
  Given I view the testimonials
  Then the section is centered with a clean background
  And quotes are styled with proper typography
```

### Feature: Footer

```gherkin
Scenario: Footer has four columns
  Given I scroll to the footer
  Then I see four widget columns: About Us, Latest Tweets, Customer Service, Instagram Feed

Scenario: Footer includes subscribe form
  Given I view the footer
  Then I see an email subscription form
  And the subscribe button is amber (#f39c12)

Scenario: Footer has dark background
  Given I view the footer
  Then the background is dark (#3c4147)
  And text is white

Scenario: Footer links to Component Dock
  Given I view the footer
  Then I see a link to https://www.componentdock.com/
```

---

## Verification checklist

- [ ] All 8 sections implemented in correct order
- [ ] Brand color `#f39c12` used for accent buttons and highlights
- [ ] Font family set to Roboto
- [ ] Hexagon icon shapes for service cards
- [ ] Hero slider with 2 slides and CTA buttons
- [ ] Quote form with all 6 fields
- [ ] Parallax background effect on catalog section
- [ ] Footer with 4 columns + subscribe form
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos with seed `shipwise-N`
- [ ] No ColorLib references in app code
- [ ] Spec-only references: preview URL, source slug, design tokens
- [ ] 100% test coverage
- [ ] Build passes
