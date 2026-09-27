# Template: PropBox (Real Estate)

## Purpose

Recreation of ColorLib **Real Estate 2** — a real estate investor website template
with property search, listings, and agent features.
- Source: https://colorlib.com/wp/template/real-estate-2/
- Preview: https://preview.colorlib.com/#real-estate-2 (WordPress-only; no standalone HTML preview)
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Replication reference

- **Preview DOM**: Unreachable (404 at `/theme/real-estate-2/`). Template is WordPress-only.
- **Screenshot**: Analyzed from `https://colorlib.com/wp/wp-content/uploads/sites/2/realestate2-free-template.jpg` (1200x946).
- **ColorLib page description**: "Sticky navigation, drop-down menu, hover effect, accordions, and testimonials slider. Contact page with working form and Google Maps. Blog section."
- **Category**: Real Estate (property listing / investor template)

## Design tokens

Extracted from the ColorLib preview screenshot and page HTML/CSS:

| Token             | Value                     | Notes                                              |
| ----------------- | ------------------------- | -------------------------------------------------- |
| Primary           | `#F77F00`                 | Warm orange — CTA buttons, accents, price slider   |
| Dark navy         | `#1B2A4A`                 | Top bar background, hero overlay tint              |
| White             | `#FFFFFF`                 | Navbar background, text on dark, card backgrounds  |
| Body text         | `#333333`                 | Primary body text color                            |
| Light gray bg     | `#F8F9FA`                 | Alternating section backgrounds                    |
| Overlay           | `rgba(27,42,74,0.7)`     | Hero image dark navy overlay                       |
| Button radius     | `4px`                     | Slightly rounded rectangular CTA buttons            |
| Font family       | `"Poppins"`               | Sans-serif; headings + body (inferred from WP CSS)  |
| Nav link color    | `#1B2A4A`                 | Dark navy text on white navbar                     |
| Orange accent     | `#F77F00`                 | Also used on "Add Property" button, search icon     |

## Section structure (from screenshot analysis)

| #   | Section                       | Background                        | Key elements                                                    |
| --- | ----------------------------- | --------------------------------- | --------------------------------------------------------------- |
| 1   | Top bar                       | Dark navy (`#1B2A4A`)             | Welcome text, email, phone, social icons (LinkedIn, FB, G+)     |
| 2   | Navbar                        | White                             | "Real Estate." logo, nav links (Home, Pages▾, Property, Blog▾, Contact), search icon, "Add Property" orange CTA |
| 3   | Hero                          | Full-width house image + overlay  | Large white heading "Find Your Best Property", subtitle, search form with dropdowns (Location, Property type, Price slider, Bed Room, Bath Room), orange search button |
| 4   | Featured properties           | White                             | Property cards grid (image, price, address, beds/bath/area)      |
| 5   | About section                 | Light gray bg                     | Company info with image, text, counters or features              |
| 6   | Categories / property types   | White                             | Category cards with icons and counts                             |
| 7   | Latest properties             | Light gray bg                     | Property listing cards                                           |
| 8   | Testimonials                  | White or dark bg                  | Testimonial slider with photos, names, roles                     |
| 9   | Team / agents                 | White                             | Agent cards with photo, name, role, social links                 |
| 10  | Blog / news                   | Light gray bg                     | Blog post cards (image, date, title, excerpt)                    |
| 11  | Newsletter                    | Dark navy bg                      | Subscribe form with email input + CTA button                     |
| 12  | Footer                        | Dark navy (`#1B2A4A`)             | Company info, nav links, social icons, copyright                 |

## Gherkin scenarios

### Top bar

```gherkin
Feature: Top information bar

  Scenario: Displays contact information
    Given the top bar is rendered
    Then a welcome message is visible
    And an email address is shown with an icon
    And a phone number is shown with an icon
    And social media icons are displayed (LinkedIn, Facebook, Google+)

  Scenario: Top bar has dark navy background
    Given the top bar is rendered
    Then the background color is dark navy (#1B2A4A)
    And text is white or light colored
```

### Navbar

```gherkin
Feature: Navigation bar

  Scenario: Logo and navigation links are visible
    Given the navbar is rendered
    Then the logo text "Real Estate." is displayed on the left
    And navigation links are visible: Home, Pages, Property, Blog, Contact
    And a search icon is shown
    And an "Add Property" button is visible

  Scenario: Add Property button is orange
    Given the navbar is rendered
    Then the "Add Property" button has an orange background (#F77F00)
    And the button text is white
    And the button has rounded corners

  Scenario: Navigation is sticky on scroll
    Given the user scrolls down the page
    Then the navbar remains fixed at the top of the viewport
```

### Hero section

```gherkin
Feature: Hero section with property search

  Scenario: Hero displays heading and subtitle
    Given the hero section is loaded
    Then a large heading "Find Your Best Property" is visible in white
    And a subtitle text is displayed below the heading

  Scenario: Hero has background image with dark overlay
    Given the hero section is loaded
    Then a full-width background image of a house is shown
    And a dark navy overlay is applied over the image

  Scenario: Search form with filter dropdowns
    Given the hero section is loaded
    Then a search form is visible with fields:
      | Field         | Type     |
      | Location      | Dropdown |
      | Property type | Dropdown |
      | Price ($)     | Slider   |
      | Bed Room      | Dropdown |
      | Bath Room     | Dropdown |
    And an orange search button is shown at the end of the form
```

### Featured properties

```gherkin
Feature: Featured property listings

  Scenario: Property cards are displayed in a grid
    Given the featured properties section is loaded
    Then property cards are shown in a responsive grid
    And each card has a property image
    And each card shows the price
    And each card shows the address/location
    And each card shows bed, bath, and area counts

  Scenario: Property cards have hover effect
    Given a property card is displayed
    When the user hovers over the card
    Then a subtle hover effect is applied (shadow or scale)
```

### About section

```gherkin
Feature: About / company section

  Scenario: Company information is displayed
    Given the about section is loaded
    Then a section heading is visible
    And descriptive text about the company is shown
    And an image or illustration accompanies the text

  Scenario: Alternating background
    Given the about section is loaded
    Then the section has a light gray background (#F8F9FA)
```

### Categories

```gherkin
Feature: Property categories

  Scenario: Category cards are shown
    Given the categories section is loaded
    Then category cards are displayed with icons
    And each card shows the category name and property count
    And categories include types like House, Apartment, Villa, Office
```

### Testimonials

```gherkin
Feature: Client testimonials

  Scenario: Testimonial slider is displayed
    Given the testimonials section is loaded
    Then testimonial cards are shown in a slider/carousel
    And each card has a client photo
    And each card shows the client name and role
    And each card has testimonial text

  Scenario: Slider supports navigation
    Given the testimonials slider is loaded
    Then navigation arrows or dots are visible
    And clicking arrows advances to the next/previous testimonial
```

### Team / agents

```gherkin
Feature: Agent team section

  Scenario: Agent cards are displayed
    Given the team section is loaded
    Then agent cards are shown in a grid
    And each card has an agent photo
    And each card shows the agent name and role
    And social media links are shown on each card
```

### Blog

```gherkin
Feature: Blog / news section

  Scenario: Blog post cards are displayed
    Given the blog section is loaded
    Then blog post cards are shown in a grid
    And each card has a post image
    And each card shows the publication date
    And each card shows the post title and excerpt
    And a "Read More" link is shown on each card
```

### Newsletter

```gherkin
Feature: Newsletter subscription

  Scenario: Newsletter form is visible
    Given the newsletter section is loaded
    Then a heading invites users to subscribe
    And an email input field is shown
    And a subscription button is displayed

  Scenario: Newsletter has dark background
    Given the newsletter section is loaded
    Then the background is dark navy (#1B2A4A)
    And text and form elements are light/white
```

### Footer

```gherkin
Feature: Site footer

  Scenario: Footer displays company info and links
    Given the footer is rendered
    Then company information is shown
    And navigation links are organized in columns
    And social media icons are displayed
    And a copyright notice is shown at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    Then a link to "https://www.componentdock.com/" is present
    And it is branded as "Component Dock"
```

## Verification checklist

- [ ] Top bar renders with dark navy background, contact info, social icons
- [ ] Navbar has white background, logo, nav links with dropdowns, search icon, orange CTA
- [ ] Hero has full-width background image with dark overlay
- [ ] Hero heading and subtitle are visible in white text
- [ ] Search form has all 5 filter fields (Location, Property type, Price, Bed, Bath)
- [ ] Search button is orange with search icon
- [ ] Featured properties grid shows property cards with all details
- [ ] Property cards have hover effects
- [ ] About section has alternating light background
- [ ] Categories section shows property type cards with icons and counts
- [ ] Testimonials slider works with navigation controls
- [ ] Team section shows agent cards with photos and social links
- [ ] Blog section shows post cards with images and excerpts
- [ ] Newsletter section has dark background with subscribe form
- [ ] Footer has dark background with company info, links, social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `propbox.free.componentdock.com`
- [ ] `package.json` homepage is `https://propbox.free.componentdock.com`
