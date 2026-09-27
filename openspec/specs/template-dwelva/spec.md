# Template: Dwelva (Real Estate)

## Purpose

Dwelva is a single-page real estate investor website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Real Estate 2" website template
(source: https://colorlib.com/wp/template/real-estate-2/,
preview: https://preview.colorlib.com/theme/real-estate-2/ — 404 at time of
prep; screenshot + ColorLib template page description used as primary
reference), built under a DIFFERENT name (Dwelva — "dwell" inspired,
single lowercase word, no collision with apps/ or existing specs) per the
monorepo naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Reference & provenance

- ColorLib slug: `real-estate-2`
- Preview URL: https://preview.colorlib.com/theme/real-estate-2/ (404)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realestate2-free-template.jpg
- Source page: https://colorlib.com/wp/template/real-estate-2/
- Design category: Real Estate / Investor
- Description (from ColorLib): "Real Estate 2 is a striking, professional
  and sophisticated free real estate investor website template."

## Design tokens

Extracted from screenshot analysis (preview unreachable, tokens inferred
from pixel analysis + ColorLib page + matching the "Real Estate 2" visual
identity):

| Token                  | Value                                         | Notes                                           |
| ---------------------- | --------------------------------------------- | ----------------------------------------------- |
| Font family            | `"Poppins", sans-serif`                       | Google Fonts, weights 200–700                    |
| Heading color          | `#001D38`                                     | Dark navy for h1–h5, section headings           |
| Body text color        | `#4D4D4D`                                     | Medium grey for paragraphs                      |
| Link/default color     | `#1F1F1F`                                     | Near-black for links and buttons                |
| Label color            | `#7e7e7e`                                     | Light grey for form labels                      |
| Primary accent (orange)| `#FD8E5E`                                     | Warm orange — buttons, badges, highlights       |
| Secondary accent       | `#FDAE5C`                                     | Lighter warm orange                              |
| Button gradient        | `linear-gradient(to right, #fdae5c, #fd8e5e)` | Left-to-right orange gradient for primary CTAs  |
| Dark overlay           | `#001D38` at 0.7 opacity                      | Used on testimonial section and hero            |
| Hero background        | Dark navy `#001D38` with photo overlay         | Cityscape/interior photo + dark tint            |
| Card background        | `#FFFFFF`                                     | White cards with subtle shadow                  |
| Section background alt | `#F8F9FA`                                     | Light gray alternating sections                 |
| Navbar                 | Transparent over hero, solid white on scroll   | Sticky behavior                                 |
| Button radius          | `4px`                                         | Slightly rounded rectangular                    |
| Footer background      | `#001D38`                                     | Dark navy matching heading color                |
| Placeholder color      | `#cccccc`                                     | Input placeholder text                          |

## Section structure

1. **Top bar** (desktop only): welcome text, email, phone, social icons
   (LinkedIn, Facebook, Google+).
2. **Navbar**: logo (left), nav links (center): Home, Pages (dropdown:
   About, Property Details, Elements), Property, Blog (dropdown: Blog,
   Single Blog), Contact. Right side: search icon + "Add Property" button.
   Hamburger menu on mobile.
3. **Hero/Slider**: background image with dark overlay (#001D38, 0.7 opacity).
   Centered text: "Find your best Property" + subtitle. Search form:
   Location select, Property Type select, Price range slider, Bed Room
   select, Bath Room select, search icon button.
4. **Popular Properties**: heading "Popular Properties". 6 property cards in
   3×2 grid. Each card: image, "For Sale"/"For Rent" badge, title, location
   with icon, price, footer with sqft/bed/bath icons + counts. "More
   Properties" button at bottom.
5. **Home Details**: owl-carousel-style cards showing featured property
   details. Each card: property image on left, info on right (For Sale badge,
   title, location, sqft/bed/bath stats, description, price, "View Details"
   button).
6. **Accordion/FAQ**: split layout — left side accordion with 3 expandable
   FAQ items, right side image.
7. **Counter Area**: 3 stat counters on gradient background: 200+ (Properties),
   300 (Clients), 15 (Awards). Counter animation on scroll.
8. **Testimonials**: dark overlay background section with client testimonials
   (carousel). Client name, role, testimonial text.
9. **Team Area**: heading with team member cards. Each card: photo, name,
   role/title. 3–4 members.
10. **Contact Action CTA**: full-width gradient bar. Left: "Add your property
    for sale" heading. Right: phone number + "Add Property" outlined button.
11. **Footer**: 4 columns — (1) Logo + contact info + social icons, (2)
    Services links, (3) Useful Links, (4) Subscribe form (email + button).
    Bottom bar with copyright and Component Dock link.

## Gherkin requirements

### Scenario: Header renders top bar and sticky navbar
```
Given the user loads the page on desktop
Then a top bar shows welcome text, email, phone, and social icons
And a sticky navbar shows a logo, navigation links (Home, Pages, Property, Blog, Contact), and "Add Property" button
```

### Scenario: Mobile hamburger menu toggles
```
Given the user loads the page on mobile
Then the top bar is hidden
And a hamburger menu icon appears in the navbar
When the user taps the hamburger icon
Then the mobile navigation menu opens with all nav links
And tapping a link closes the menu
```

### Scenario: Hero section with property search form
```
Given the user views the hero section
Then a dark-overlay background image is displayed
And the heading "Find your best Property" is centered
And a search form shows: Location select, Property Type select, Price range slider, Bed Room select, Bath Room select
And a search icon button triggers the form
```

### Scenario: Popular Properties shows 6 listing cards
```
Given the user scrolls to the Popular Properties section
Then the heading "Popular Properties" is displayed
And 6 property cards are shown in a 3x2 grid
And each card has an image, a "For Sale" or "For Rent" tag, title, location, price, and sqft/bed/bath info
And a "More Properties" button is centered below the grid
```

### Scenario: Property card hover effect
```
Given the user hovers over a property card
Then a subtle hover effect (shadow or scale) is applied
```

### Scenario: Home Details carousel shows featured property
```
Given the user scrolls to the Home Details section
Then a carousel displays featured property detail cards
And each card shows a property image alongside info (tag, title, location, stats, description, price, "View Details" button)
```

### Scenario: Accordion FAQ section
```
Given the user scrolls to the accordion section
Then 3 FAQ items are displayed in an accordion on the left
And an image is shown on the right
When the user clicks an accordion header
Then the content expands or collapses
```

### Scenario: Counter area displays statistics
```
Given the user scrolls to the counter section
Then 3 statistics are displayed: 200+ Properties, 300 Clients, 15 Awards
And the counters animate on scroll into view
```

### Scenario: Testimonial section with dark overlay
```
Given the user scrolls to the testimonial section
Then a dark overlay background is applied
And testimonial cards display client quotes, names, and roles
```

### Scenario: Team area shows member cards
```
Given the user scrolls to the team section
Then team member cards are displayed
And each card shows a photo, name, and role/title
```

### Scenario: Contact action CTA bar
```
Given the user scrolls to the contact action section
Then a CTA bar shows "Add your property for sale" heading
And a phone number and "Add Property" outlined button are displayed
```

### Scenario: Footer with 4 columns
```
Given the user views the footer
Then 4 columns are shown: contact info + social, Services links, Useful Links, Subscribe form
And the subscribe form has an email input and submit button
And a link to https://www.componentdock.com/ branded as "Component Dock" is present
```

### Scenario: Responsive layout adapts to mobile
```
Given the user views on a mobile viewport
Then the top bar is hidden
And the navbar collapses to a hamburger menu
And property cards stack vertically
And the home details carousel adapts to single column
And the accordion and image stack vertically
```

## Verification checklist

- [ ] Header renders with top bar (desktop) and sticky navbar
- [ ] Hero section has dark overlay, heading, and search form
- [ ] Search form shows all selects and price slider
- [ ] Popular Properties shows 6 cards in 3x2 grid
- [ ] Each property card has tag, image, title, location, price, stats
- [ ] "More Properties" button renders
- [ ] Home Details carousel shows featured property cards
- [ ] Accordion FAQ section with 3 items + image
- [ ] Accordion expand/collapse works
- [ ] Counter area shows 3 animated stats
- [ ] Testimonial section with dark overlay
- [ ] Team area shows member cards
- [ ] CTA bar shows heading, phone, and "Add Property" button
- [ ] Footer shows 4 columns with subscribe form
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains dwelva.free.componentdock.com
- [ ] package.json homepage set to https://dwelva.free.componentdock.com
