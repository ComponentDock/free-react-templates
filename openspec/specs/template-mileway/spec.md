# Template: Mileway (Car Rental)

## Purpose

Recreation of ColorLib "Carrentals" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page car rental site.

- **ColorLib source:** `carrentals`
- **Preview URL:** https://preview.colorlib.com/theme/carrentals/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carrentals-free-template.jpg

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis.

| Token                | Value                                                | Notes                                                                              |
| -------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Primary blue         | `#0779e4`                                            | Buttons, step numbers, accents, links. Bootstrap `text-primary` fallback `#007bff` |
| Dark text            | `#000` / `#212529`                                   | Headings, body text                                                                |
| Secondary text       | `#364d59` / `#888` / `#999`                          | Subheadings, captions                                                              |
| Light background     | `#f8f9fa` / `#f7f7f7`                                | Alternating section backgrounds (`.bg-light`)                                      |
| White                | `#fff`                                               | Card backgrounds, hero search bar, text on dark                                    |
| CTA banner bg        | `#0779e4` (`.bg-primary`)                            | "What are you waiting for?" banner                                                 |
| Dark footer bg       | `#111` / `#333`                                      | Footer area                                                                        |
| Font family          | `"Roboto", sans-serif`                               | Imported from Google Fonts                                                         |
| Section heading      | `font-weight: 700`, bold                             | `.section-heading strong`                                                          |
| Button border-radius | `4px`                                                | Standard Bootstrap `.btn`                                                          |
| Step number radius   | `50%`                                                | Circle number badges                                                               |
| Card radius          | `4px–7px`                                            | Listing cards                                                                      |
| Button padding       | `12px 25px` (`.btn-primary`), `8px 20px` (`.btn-md`) | Primary CTA and secondary                                                          |

## Sections (in order)

1. **Navbar** — Fixed/absolute top, logo ("Mileway"), right-aligned nav links (Home, Listings, Testimonials, About, Contact). Transparent over hero, solid on scroll.
2. **Hero** — Full-width background image (car keys / car photo). Overlay text: "Rent a car is within your fingertips." Search bar with inputs: Select Type (dropdown), Pick up (date), Drop off (date), Search Now button (blue).
3. **How It Works** — 3-column steps: 01 Select a car, 02 Fill up form, 03 Payment. Blue step numbers, dark headings, gray body text. White background. Optional video play button below.
4. **Promo Banner** — "You can easily avail our promo for renting a car." paragraph with descriptive text. Light background.
5. **Car Listings** — 3-column grid of 6 car cards. Each card: car image (left), name (h3), price/day, specs (Luggage, Doors, Passenger), description, "Rent Now" button. Cars: Mitsubishi Pajero, Nissan Moco, Honda Fitta, Skoda Laura, Mazda LaPuta, Buick LaCrosse.
6. **Features** — "Features" heading with 6 feature cards (Lorem ipsum placeholder content). Light background.
7. **Testimonials** — 3-column testimonial cards. Each: blockquote, person image, name + role. Mike Fisher (Owner, Ford), Jean Stanley (Traveler), Katie Rose (Customer). White background.
8. **CTA Banner** — Blue (`#0779e4`) full-width banner. "What are you waiting for?" heading (white), subtext, "Rent a car now" white button.
9. **Footer** — Dark background. 4 columns: About Us (text + social icons), Quick Links, Resources, Support. Copyright bar at bottom.

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user loads the Mileway page
  Then a "Mileway" logo text is visible in the top-left
  And navigation links "Home", "Listings", "Testimonials", "About", "Contact" are visible

Scenario: Navbar becomes solid on scroll
  Given the user has scrolled past the hero section
  Then the navbar background becomes solid white
```

### Hero

```gherkin
Scenario: Hero shows headline and search bar
  Given the user loads the Mileway page
  Then a hero headline "Rent a car" is visible
  And a search bar with "Select Type", "Pick up", "Drop off" inputs is shown
  And a "Search Now" button is visible

Scenario: Search bar has three input fields
  Given the user views the hero section
  Then a car type selector is present
  And a pick-up date picker is present
  And a drop-off date picker is present
```

### How It Works

```gherkin
Scenario: Three-step process is displayed
  Given the user scrolls to the "How it works" section
  Then step "01" with title "Select a car" is visible
  And step "02" with title "Fill up form" is visible
  And step "03" with title "Payment" is visible
```

### Car Listings

```gherkin
Scenario: Car listing grid shows 6 vehicles
  Given the user scrolls to the "Car Listings" section
  Then 6 car cards are displayed in a grid
  And each card shows a car name, price per day, and specs (Luggage, Doors, Passenger)
  And each card has a "Rent Now" button

Scenario: Car cards show pricing and features
  Given a car card is rendered
  Then it displays a price formatted as "$XXX.XX/day"
  And it shows Luggage, Doors, and Passenger counts
```

### Testimonials

```gherkin
Scenario: Three testimonials are displayed
  Given the user scrolls to the "Testimonials" section
  Then 3 testimonial cards are shown
  And each card has a blockquote, person name, role, and avatar image
```

### CTA Banner

```gherkin
Scenario: CTA banner shows call to action
  Given the user scrolls to the blue CTA banner
  Then the heading "What are you waiting for?" is visible
  And a "Rent a car now" button is displayed
```

### Footer

```gherkin
Scenario: Footer has four columns and social links
  Given the user scrolls to the footer
  Then "About Us", "Quick Links", "Resources", "Support" headings are visible
  And social media icons (Facebook, Instagram, Twitter, LinkedIn) are present
  And a "Component Dock" attribution link is in the footer
```

## Verification Checklist

- [ ] Spec covers all 9 sections in correct order
- [ ] Design tokens match the original CSS (primary `#0779e4`, Roboto font, `4px` radius)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Car listing data (names, prices, specs) matches the original
- [ ] Search bar has 3 inputs + button
- [ ] Hero uses placeholder image from picsum (not original asset)
- [ ] 3 testimonial cards with name, role, avatar
- [ ] CTA banner uses blue background with white text
- [ ] Footer has 4 columns + social icons
- [ ] All `npm run spec:validate` checks pass
