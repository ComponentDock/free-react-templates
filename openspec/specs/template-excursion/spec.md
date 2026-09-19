# Template: Excursion (Travel / Tourism)

## Purpose

Recreation of ColorLib "Travello" — a travel & tourism landing page with
full-width hero slider, trip search form, feature highlights, destination
grid, "Why Choose Us" parallax section, featured tours carousel,
testimonials, Instagram feed, latest news, and newsletter footer.

- **Source**: [ColorLib Travello](https://colorlib.com/wp/template/travello/)
- **Preview**: https://preview.colorlib.com/theme/travello/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/travello-free-template-1.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `excursion` (apps/excursion, `@free-react-templates/excursion`)

## Design tokens (extracted from preview CSS)

| Token                | Value                                  | Source                                 |
| -------------------- | -------------------------------------- | -------------------------------------- |
| Brand primary        | `#1a1a2e` (dark navy)                  | `.button a`, `.home_search_button` bg  |
| Brand hover          | `#292948`                              | button hover state                     |
| Accent blue          | `#3b82f6`                              | `.destination_title` hover, focus ring |
| Section subtitle     | `#64748b`                              | `.section_subtitle` color              |
| Body text dark       | `#1a1a2e`                              | headings, titles                       |
| Body text muted      | `#64748b`                              | descriptions, captions                 |
| Body text muted alt  | `#8f8f8f`                              | category labels                        |
| Card shadow          | `0 4px 6px -1px rgba(0,0,0,0.1)`      | `.destination_image`, `.why_item`      |
| Card hover shadow    | `0 20px 25px -5px rgba(0,0,0,0.1)`    | hover lift effect                      |
| Search input bg      | `#f8fafc`                              | `.search_input`                        |
| Search input border  | transparent → `#3b82f6` on focus       | `.search_input:focus`                  |
| Why section bg       | parallax image (dark overlay implied)  | `.parallax_background` on `.why`       |
| Testimonials bg      | parallax image                         | `.testimonials .background_image`      |
| Footer bg            | parallax image (dark)                  | `.footer .background_image`            |
| Newsletter input bg  | `rgba(255,255,255,0.15)`              | `.newsletter_input`                    |
| Newsletter btn bg    | `rgba(255,255,255,0.2)`              | `.newsletter_button`                   |
| White                | `#FFFFFF`                              | sections, text on dark                 |
| Font headings/logo   | `"Oswald", sans-serif`                 | `.logo a`, `.section_title`, buttons   |
| Font body            | `"Open Sans", sans-serif`              | `.newsletter_subtitle`, paragraphs     |
| Button radius        | `24px` (pill)                          | `.home_search_button`, `.button a`     |
| Button height        | `52px`                                 | `.home_search_button`, `.button a`     |
| Card border-radius   | `16px`                                 | `.destination_image`, `.why_item`      |
| Section subtitle     | Oswald 12px, uppercase, `letter-spacing: 0.2em` | `.section_subtitle` |
| Search title radius  | `10px` top corners                     | `.home_search_title`                   |
| Search input radius  | `6px`                                  | `.search_input`                        |
| Icon circle bg       | `#f2f5f6`                              | `.why_icon`                            |

## Sections (in order, from preview DOM)

1. **Header** — Fixed top bar (transparent over hero, `rgba(24,24,24,0.6)` on scroll). Logo "Excursion" (Oswald 30px, white) left, nav links (Home, About us, Services, News, Contact) center-left, phone number right. Social sidebar (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn) fixed right edge. Hamburger menu for mobile (fullscreen overlay with nav + social).
2. **Hero Slider** — Swiper carousel, 3 slides. Each: full-width background image, centered heading in Oswald 100px white ("Let us take you away", "Discover the world", "Adventure awaits"). Page-nav dots on right ("Offers 01", "Testimonials 02", "Latest 03").
3. **Search** — Trip search form floating over hero (glass-morphism: `rgba(255,255,255,0.26)`, 12px radius). Title bar "Search for your trip" (Oswald, white bg, top 10px radius). 4 inputs (City, Departure, Arrival, Budget) + "SEARCH" button (pill, `#1a1a2e` bg).
4. **Intro** — 3-column feature highlights on white bg with decorative background image. Each: icon SVG (beach, wallet, suitcase) + title (Oswald 18px) + short subtitle. Items: "Top Destinations", "Best Prices", "Amazing Services". Bottom border separator.
5. **Destinations** — White bg. Section subtitle "simply amazing places" + title "Popular Destinations". 3×2 grid of destination cards (Bali, Indonesia, San Francisco, Paris, Phi Phi Island, Mykonos). Each: image with 16px radius, optional "Special Offer" badge, title (Oswald 28px), subtitle, price "From $679".
6. **Why Choose Us** — Parallax background image. White text section title "Why Choose Us?". 3-column cards: image at top, icon circle (`#f2f5f6`) overlapping image, title (Oswald 30px), paragraph. Items: "Fast Services", "Expert Guides", "Best Deals". Cards have 16px radius, shadow, hover lift.
7. **Featured Tours** — White bg. Section subtitle "curated experiences" + title "Featured Tours". Swiper carousel of tour cards: image with badge ("Best Seller"/"Special Offer"/"New") + duration, location icon + rating, title, description, price ("From $1,299"), "View Details" link. "View All Tours" button at bottom.
8. **Testimonials** — Parallax background image. White text "Testimonials". Swiper slider with italic quotes (30px), author name + role in Oswald uppercase.
9. **Instagram Feed** — White bg. Title "@Excursion on Instagram". 6-column grid of images with Instagram icon overlay on hover.
10. **News** — White bg. 2-column layout: left (8/12) = 3 blog posts (image + date + title + category + excerpt); right (4/12) = promo sidebar card "Get a 20% Discount" with parallax bg + diagonal color overlays.
11. **Footer** — Parallax background image. Newsletter section: title + subtitle + form (name + email inputs + "SUBSCRIBE" pill button, glass-morphism style). 3-column contact info (phone, address, email) with icon circles. Copyright bar with "Made with ❤ by Colorlib" → replaced with "Component Dock".

## Gherkin requirements

### Feature: Header Navigation

```gherkin
Scenario: Header displays logo and navigation links
  Given the user loads the page
  Then the header shows the logo text "Excursion"
  And the navigation links are visible: "Home", "About us", "Services", "News", "Contact"
  And the phone number "00-56 445 678 33" is displayed

Scenario: Header scrolls to compact mode
  Given the user is at the top of the page
  When the user scrolls down
  Then the header background becomes semi-transparent dark
  And the header height reduces
```

### Feature: Hero Slider

```gherkin
Scenario: Hero displays heading over background image
  Given the user is on the homepage
  Then the hero section shows a heading "Let us take you away"
  And the heading is white and large
  And a background image fills the hero area

Scenario: Hero slider rotates through slides
  Given the hero slider is visible
  When the slider advances
  Then the heading changes to "Discover the world"
  And the background image changes

Scenario: Page navigation links point to sections
  Given the hero is visible
  Then the right-side nav shows "Offers 01", "Testimonials 02", "Latest 03"
  And clicking "Offers 01" scrolls to the destinations section
```

### Feature: Trip Search Form

```gherkin
Scenario: Search form displays with inputs and button
  Given the user views the page
  Then a search form is visible with title "Search for your trip"
  And there are 4 input fields: "City", "Departure", "Arrival", "Budget"
  And a "SEARCH" button is present

Scenario: Search form has glass-morphism styling
  Given the search form is visible
  Then the form container has a translucent white background
  And the title bar has rounded top corners
  And the button is pill-shaped with dark background
```

### Feature: Intro Features

```gherkin
Scenario: Three feature highlights are displayed
  Given the user scrolls to the intro section
  Then there are 3 feature items in a row
  And they show "Top Destinations", "Best Prices", "Amazing Services"
  And each has an icon and subtitle text
```

### Feature: Destinations Grid

```gherkin
Scenario: Six destinations are shown in a grid
  Given the user scrolls to destinations
  Then the section title reads "Popular Destinations"
  And there are 6 destination cards in a 3-column grid
  And each card shows an image, title, subtitle, and price

Scenario: Destination cards have rounded image corners
  Given a destination card is visible
  Then the image has 16px border radius
  And hovering the image adds a subtle shadow

Scenario: Special Offer badge appears on first destination
  Given the first destination is visible
  Then a "Special Offer" badge overlays the top-left of the image
```

### Feature: Why Choose Us

```gherkin
Scenario: Why section displays on parallax background
  Given the user scrolls to Why Choose Us
  Then a parallax background image is visible
  And the section title "Why Choose Us?" is white

Scenario: Three feature cards are displayed
  Given the Why section is visible
  Then there are 3 cards: "Fast Services", "Expert Guides", "Best Deals"
  And each card has an image, icon circle, title, and paragraph
  And cards have 16px border radius and shadow
```

### Feature: Featured Tours

```gherkin
Scenario: Tours carousel displays tour cards
  Given the user scrolls to Featured Tours
  Then the section title reads "Featured Tours"
  And a carousel of tour cards is visible
  And each card shows image, location, rating, title, description, price

Scenario: Tour cards show badges and duration
  Given a tour card is visible
  Then it may show a badge like "Best Seller" or "Special Offer"
  And it shows a duration like "7 Days"
  And a "View Details" link is present
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials section shows quotes
  Given the user scrolls to Testimonials
  Then a parallax background image is visible
  And the title "Testimonials" is displayed in white
  And a testimonial quote is shown in italic text
  And the author name and role are displayed below
```

### Feature: Instagram Feed

```gherkin
Scenario: Instagram grid shows images
  Given the user scrolls to Instagram Feed
  Then the title reads "@Excursion on Instagram"
  And 6 images are displayed in a row
  And hovering an image shows an Instagram icon overlay
```

### Feature: Latest News

```gherkin
Scenario: News section shows blog posts and sidebar
  Given the user scrolls to News
  Then 3 blog posts are listed on the left
  And each post has an image, date, title, category, and excerpt
  And a promo sidebar card is on the right

Scenario: Sidebar promo card has diagonal overlays
  Given the sidebar card is visible
  Then it shows "Get a 20% Discount" text
  And the card has diagonal color overlays on a parallax background
```

### Feature: Footer

```gherkin
Scenario: Newsletter form is displayed
  Given the user scrolls to the footer
  Then a newsletter section shows "Subscribe to our newsletter..."
  And a form with name and email inputs is present
  And a "SUBSCRIBE" pill button is visible

Scenario: Footer contact info is displayed
  Given the footer is visible
  Then 3 contact items are shown: phone, address, email
  And each has an icon and text details

Scenario: Footer copyright mentions Component Dock
  Given the footer copyright bar is visible
  Then it contains a link to "Component Dock"
```

## Verification checklist

- [ ] Header: logo, nav links, phone, social icons, scroll effect
- [ ] Hero: slider with 3 slides, headings, bg images, page nav
- [ ] Search: 4 inputs, search button, glass-morphism styling
- [ ] Intro: 3 feature items with icons
- [ ] Destinations: 6 cards in 3-col grid, image radius, badges, prices
- [ ] Why: parallax bg, 3 cards with icon circles, hover lift
- [ ] Tours: carousel, badges, ratings, prices, "View All" button
- [ ] Testimonials: parallax bg, italic quotes, author info
- [ ] Instagram: 6-image grid with hover overlay
- [ ] News: 3 posts + sidebar promo card
- [ ] Footer: newsletter form, 3 contact items, copyright with Component Dock
- [ ] Responsive: hamburger menu, stacked layouts on mobile
- [ ] Fonts: Oswald (headings/buttons/nav), Open Sans (body)
- [ ] Colors: `#1a1a2e` brand, `#3b82f6` accent, `#64748b` muted
- [ ] Buttons: pill shape (24px radius), dark bg, hover lift
- [ ] No ColorLib references in app code
