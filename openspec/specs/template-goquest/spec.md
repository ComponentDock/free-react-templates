# Template: GoQuest (Travel)

## Purpose

Recreation of ColorLib **Gotrip** — a travel/tour booking homepage template.
- **Source slug**: `gotrip`
- **Preview URL**: https://preview.colorlib.com/theme/gotrip/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/gotrip-free-template.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **New name**: `goquest` (apps/goquest, @free-react-templates/goquest)

## Design tokens (extracted from preview CSS)

| Token              | Value                          | Usage                                         |
| ------------------ | ------------------------------ | --------------------------------------------- |
| Brand primary      | `#014b85`                      | Buttons, nav hover, scroll-to-top, section accent |
| Accent yellow      | `#fde02f` (hero), `#ffb400` / `#ffa801` (section labels, stars, footer links) | Hero headline fill, CTA search button, star ratings, "FEATURED" labels |
| Accent red         | `#e6373d`                      | Button hover fill (::before sweep animation)  |
| Dark navy          | `#0e1c35`                      | Header top bar background                     |
| Heading text       | `#0b1c39` / `#191d34`          | h1–h6 headings                                |
| Body text          | `#506172`                      | Paragraphs                                    |
| Nav link           | `#264247`                      | Desktop nav links                             |
| Light background   | `#f8fafe`                      | Footer area                                   |
| Card border        | `#f0f1f2`                      | Tour package cards, dividers                  |
| Price color        | `#4cafa4`                      | Tour price text                               |
| Rating star        | `#ffa800`                      | Star icons in place cards                     |
| Font — Heading     | `"Barlow Condensed"` (200–900) | Headings, nav, button text                    |
| Font — Body        | `"Roboto"` (300–900)           | Paragraphs, body copy                         |
| Font — Display     | `"Satisfy"`                    | Hero headline script style                    |
| Button radius      | `5px`                          | .btn, .border-btn                             |
| Button padding     | `27px 44px` (.btn) / `28px 50px` (.border-btn) | Primary and outline buttons |
| Card image radius  | `6px 6px 0 0`                  | Top corners of tour cards                     |
| Video play button  | `95x95px`, `border-radius: 3px` | Yellow square with play icon                 |
| Overlay color      | `rgba(32,54,38,0.3)`           | Hero image dark overlay                       |

## Section structure (order from live DOM)

1. **Header** — Top info bar (dark navy `#0e1c35`: email, phone, address + social icons) → Sticky nav bar (logo left, 6-item menu right: Home, About, Package, Blog (with submenu), Pages (with submenu), Contact). White background.
2. **Hero / Slider** — Full-screen background image with dark overlay. Yellow script headline "Find your Next tour!" (`Satisfy` font, `#fde02f`). Subtitle "Where would you like to go?" in white. Search form overlay (translucent white `rgba(255,255,255,0.2)`): text input (destination), dropdown (When), yellow search button.
3. **Our Services** — 4-column icon grid with bordered cards (`border: 1px solid #dafcef`). Each: icon (60px, `#014b85`) + heading text. Items: "8000+ Our Local Guides", "100% Trusted Tour Agency", "28+ Years of Travel Experience", "98% Our Travelers are Happy". White background.
4. **Favourite Places** — Section title "FEATURED TOURS Packages" / "Favourite Places" with yellow accent span. 6 tour package cards in 3-column grid. Each card: image (top, rounded corners), content area with star rating badge, tour name, price (`#4cafa4`), duration + location. White background.
5. **Video Area** — Full-width parallax background image. Centered: yellow play button (`95x95px` square, `#fde02f`), white text "Love where you're going in the perfect time", "Tripo is a World Leading Online Tour Booking Platform" (`Barlow Condensed`, 60px white).
6. **Support Company / About** — 2-column split: left = image with rotated "Since 1992" badge (`rgba(1,75,133,0.8)` background, yellow text); right = section title "About Our Company" / "We are Go Trip Travels Support Company", paragraph text, 4 checkbox items with blue checked state, "About us" outline button. White background.
7. **Testimonial** — Background image section. Centered carousel with quote icon, testimonial paragraph (30px, dark), founder avatar + name + title. White text on founder info.
8. **Tourist Blog** — Section title "Our Recent news" / "Tourist Blog". 2-column blog cards: image top, category tag "Traveling", blog title, "Read more" link. Floating date badge (bottom-left, `#014b85` background, rounded). White background.
9. **Footer** — Background image with dark overlay. 4-column: logo + about text (light), Quick Links, New Products, Support. Bottom bar: copyright left, social icons right. Light text (`#ced9e1`), yellow links (`#ffa801`).

## Gherkin requirements

### Header

```gherkin
Scenario: Top info bar displays contact details
  Given I am on the GoQuest homepage
  Then I should see an email address, phone number, and physical address in the top bar
  And the top bar has a dark navy background (#0e1c35)
  And social media icons (Twitter, LinkedIn, Facebook, Pinterest) are visible

Scenario: Sticky navigation bar with logo and menu
  Given I am on the GoQuest homepage
  Then the navigation bar contains a logo on the left
  And the menu contains links: Home, About, Package, Blog, Pages, Contact
  And the nav bar sticks to the top on scroll
  And dropdown submenus appear on hover for Blog and Pages
```

### Hero

```gherkin
Scenario: Hero section with headline and search form
  Given I am on the GoQuest homepage
  Then I should see a full-width background image hero section
  And the headline "Find your Next tour!" is displayed in yellow script font
  And the subtitle "Where would you like to go?" appears in white
  And a search form with destination input, date dropdown, and search button is present
  And the search button is yellow (#fde02f)
```

### Our Services

```gherkin
Scenario: Four service cards displayed in a row
  Given I scroll to the services section
  Then I should see 4 service cards in a horizontal grid
  And each card has an icon and a short heading
  And the cards have a light border (#dafcef)
  And the section heading shows the services
```

### Favourite Places

```gherkin
Scenario: Tour package cards with details
  Given I scroll to the Favourite Places section
  Then I should see the section title "Favourite Places" with "FEATURED TOURS Packages" accent text
  And 6 tour package cards are displayed in a 3-column grid
  And each card shows an image, star rating, tour name, price, duration, and location
  And the price is displayed in a teal color (#4cafa4)
  And cards have rounded top corners on the image
```

### Video Area

```gherkin
Scenario: Parallax video section with play button
  Given I scroll to the video section
  Then I should see a full-width parallax background image
  And a yellow square play button is centered
  And white text reads "Love where you're going in the perfect time"
  And larger text reads "Tripo is a World Leading Online Tour Booking Platform"
```

### Support Company

```gherkin
Scenario: About section with image and checklist
  Given I scroll to the support/about section
  Then I should see a 2-column layout with an image on the left
  And the image has a "Since 1992" rotated badge
  And the right side shows a heading "About Our Company"
  And a descriptive paragraph is present
  And 4 checked checkbox items are displayed
  And an "About us" outline button is visible
```

### Testimonial

```gherkin
Scenario: Testimonial carousel
  Given I scroll to the testimonial section
  Then I should see a background image section
  And a quote icon is displayed
  And a testimonial paragraph is centered
  And a founder avatar, name, and title are shown below the quote
```

### Tourist Blog

```gherkin
Scenario: Blog cards with date badge
  Given I scroll to the blog section
  Then I should see the section title "Tourist Blog" with "Our Recent news" accent
  And 2 blog cards are displayed in a 2-column layout
  And each card shows an image, category tag, title, and "Read more" link
  And a floating date badge appears at the bottom-left of each card image
```

### Footer

```gherkin
Scenario: Footer with links and social icons
  Given I scroll to the footer
  Then I should see a dark background footer with background image
  And 4 columns: logo+about, Quick Links, New Products, Support
  And a bottom bar with copyright text on the left
  And social media icons on the right
  And links are styled in yellow (#ffa801)
```

## Verification checklist

- [ ] Header: top bar with contact info + social icons, sticky nav with logo + menu + dropdowns
- [ ] Hero: full-width background, yellow script headline, search form with 3 fields
- [ ] Services: 4 cards with icons, light border, centered text
- [ ] Favourite Places: 6 cards in 3-col grid, image + rating + price + duration + location
- [ ] Video: parallax bg, yellow play button, centered text overlay
- [ ] About/Support: 2-col split, image with "Since 1992" badge, checklist, outline button
- [ ] Testimonial: bg image, carousel with quote + founder info
- [ ] Blog: 2 cards with image, date badge, category, title, read more
- [ ] Footer: 4-col layout, dark bg, social icons, copyright, yellow accent links
- [ ] All design tokens match the original (colors, fonts, radii, spacing)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
