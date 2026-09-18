# Template: Cognita (Education / Online Courses)

## Purpose

Recreation of the ColorLib "Educature" template — an education / online courses
landing page.

- **Source slug:** `educature`
- **Source URL:** https://colorlib.com/wp/template/educature/
- **Preview URL:** https://preview.colorlib.com/theme/educature/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`main.css`) and screenshot analysis.

### Colors

| Token              | Value                      | Usage                                        |
| ------------------ | -------------------------- | -------------------------------------------- |
| brand-teal         | `#39cfca`                  | Gradient start (buttons, footer, banner)     |
| brand-blue         | `#3279bb`                  | Gradient end (buttons, footer, banner)       |
| brand-gradient     | `linear-gradient(90deg, #39cfca 0%, #3279bb 100%)` | Primary CTA buttons, footer bg, banner overlay |
| text-dark          | `#222222`                  | Headings (h1–h6)                             |
| text-body          | `#777777`                  | Body text, descriptions                      |
| bg-white           | `#ffffff`                  | Default section background                   |
| bg-light-blue      | `#f1f9ff`                  | Courses section, Faculty section backgrounds |
| bg-banner          | Image overlay (header-bg.png) | Hero banner — replace with gradient + illustration placeholder |
| nav-text           | `#ffffff` (on banner)      | Navbar links over hero                       |

### Typography

| Role      | Font Family                | Weight | Notes                     |
| --------- | -------------------------- | ------ | ------------------------- |
| Headings  | `"Montserrat", sans-serif` | 600    | h1–h6, line-height 1.2em |
| Body      | `"Roboto", sans-serif`     | 400    | Paragraphs, descriptions  |

### Spacing

| Token        | Value          | Usage                              |
| ------------ | -------------- | ---------------------------------- |
| section-gap  | `padding: 150px 0` | Vertical padding between sections |

### Buttons

- **Primary:** gradient background `linear-gradient(90deg, #39cfca, #3279bb)`,
  white text, rounded corners, padding ~10px 30px. Used for CTAs like
  "Explore Courses".
- **Tag/Pill:** outlined white border, white text, rounded-full, on hero banner.
  Used for course category tags (e.g. "Ruby on Rails", "Python").

### Section Backgrounds

- Hero banner: full-width image background with teal-to-blue gradient overlay
- About section: white
- Courses section: `#f1f9ff` (light blue)
- Feature icons section: white
- Faculty section: `#f1f9ff` (light blue)
- Testimonials section: white
- Footer: `linear-gradient(90deg, #39cfca, #3279bb)` (brand gradient)

## Section Order (from live preview DOM)

1. **Navbar** — transparent over hero, logo left ("Cognita" with icon), nav
   links right (Home, About, Courses, Pages, Blog, Contact). White text on
   banner.
2. **Hero / Banner** — full-width with background image/gradient, large white
   heading ("We Rank the Best Courses on the Web"), subtitle paragraph, search
   bar (white input + gradient "Search" button), "Top courses" label with
   outlined pill tags for course categories.
3. **About** — white background, two-column: illustration/image left, text
   right. Heading "Over 2500 Courses from 5 Platform", description paragraph,
   "Explore Courses" gradient CTA button.
4. **Courses** — light blue `#f1f9ff` background. Heading "This is Why We
   have Solid Idea", description paragraph, grid of course category cards
   (icon + title). Categories: Development, IT & Software, Photography,
   Language, Life Science, Business, Social Science, Data Science, Design,
   Training, Humanities, Marketing, Economics, Personal Development.
5. **Features** — white background. Heading "Features That Make Us Hero",
   description, 3-column grid of feature cards with icon, title, description.
   Features: Architecture, Interior Design, Concept Design.
6. **Faculty** — light blue `#f1f9ff` background. Heading "Faculty Members",
   description, 4-column grid of faculty cards (photo placeholder, name,
   role). Members: Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller —
   all "Sr. Faculty Data Science".
7. **Testimonials** — white background. Carousel/slider of testimonial cards
   with quote text, name, role. Testimonial from Fanny Spencer.
8. **Footer** — brand gradient background. Multi-column layout:
   - "Top Products" links
   - "Quick Links"
   - "Resources"
   - Newsletter signup (email input + "Get Started" button)
   - Bottom bar: copyright + "Made with Component Dock"

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Navbar renders over hero banner
  Given the page loads
  Then the navbar is visible with transparent background over the hero
  And the logo text "Cognita" is displayed on the left
  And navigation links are displayed: Home, About, Courses, Contact

Scenario: Navbar is responsive
  Given the viewport is mobile width
  Then the navigation collapses into a hamburger menu
  And tapping the hamburger reveals the nav links
```

### Feature: Hero Banner

```gherkin
Scenario: Hero banner displays main heading and search
  Given the page loads
  Then a large heading "We Rank the Best Courses on the Web" is visible
  And a subtitle paragraph is displayed below the heading
  And a search input with placeholder "Search Courses" is visible
  And a "Search" button is visible next to the input

Scenario: Course category tags are displayed
  Given the hero banner is visible
  Then outlined pill tags are shown for course categories
  And the categories include "Ruby On Rails", "Python", "Marketing"
  And tags have white border and white text on the gradient background
```

### Feature: About Section

```gherkin
Scenario: About section shows course count and CTA
  Given the page scrolls to the about section
  Then the heading "Over 2500 Courses from 5 Platform" is visible
  And a descriptive paragraph is displayed
  And an "Explore Courses" gradient button is visible
  And an illustration/image is displayed to the left of the text
```

### Feature: Courses Section

```gherkin
Scenario: Courses section displays category grid
  Given the page scrolls to the courses section
  Then the section has a light blue (#f1f9ff) background
  And the heading "This is Why We have Solid Idea" is visible
  And a grid of 14 course category cards is displayed
  And each card shows an icon and category title

Scenario: Course categories are clickable
  Given the courses grid is displayed
  When a user clicks a category card
  Then the card indicates interactivity (hover effect or link)
```

### Feature: Features Section

```gherkin
Scenario: Features section shows 3 feature cards
  Given the page scrolls to the features section
  Then the heading "Features That Make Us Hero" is visible
  And 3 feature cards are displayed in a row
  And each card has an icon, title, and description paragraph

Scenario: Feature cards include Architecture, Interior Design, Concept Design
  Given the features section is visible
  Then the first card is titled "Architecture"
  And the second card is titled "Interior Design"
  And the third card is titled "Concept Design"
```

### Feature: Faculty Section

```gherkin
Scenario: Faculty section displays member cards
  Given the page scrolls to the faculty section
  Then the section has a light blue (#f1f9ff) background
  And the heading "Faculty Members" is visible
  And 4 faculty cards are displayed in a row
  And each card has a photo placeholder, name, and role

Scenario: Faculty members are correctly listed
  Given the faculty section is visible
  Then member names include "Ethel Davis", "Rodney Cooper", "Dora Walker", "Lena Keller"
  And each member role is "Sr. Faculty Data Science"
```

### Feature: Testimonials Section

```gherkin
Scenario: Testimonials carousel is displayed
  Given the page scrolls to the testimonials section
  Then the heading area shows testimonial quotes
  And a testimonial from "Fanny Spencer" is visible
  And navigation dots or arrows are available for the carousel
```

### Feature: Footer

```gherkin
Scenario: Footer renders with gradient background and links
  Given the page scrolls to the footer
  Then the footer has a teal-to-blue gradient background
  And column sections display "Top Products", "Quick Links", "Resources"
  And a newsletter signup with email input and "Get Started" button is visible
  And a copyright line is displayed at the bottom
  And the footer links to "Component Dock" (https://www.componentdock.com/)

Scenario: Footer newsletter signup works
  Given the footer newsletter section is visible
  When a user enters an email and clicks "Get Started"
  Then the form attempts submission (client-side validation)
```

## Verification Checklist

- [ ] All 8 sections present in correct order (Navbar → Hero → About → Courses → Features → Faculty → Testimonials → Footer)
- [ ] Brand gradient (#39cfca → #3279bb) used on primary buttons, footer, banner overlay
- [ ] Montserrat 600 for headings, Roboto 400 for body
- [ ] Section gap padding matches ~150px vertical rhythm
- [ ] Light blue (#f1f9ff) background on Courses and Faculty sections
- [ ] Hero has search bar + course category pill tags
- [ ] About section has two-column layout (image + text)
- [ ] Courses section has 14-item category grid with icons
- [ ] Features section has 3 cards (Architecture, Interior, Concept)
- [ ] Faculty section has 4 member cards with photos
- [ ] Testimonials section has carousel with quotes
- [ ] Footer has gradient bg, multi-column links, newsletter, copyright
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Responsive: navbar collapses, grid adapts to mobile
- [ ] All text content paraphrased (not verbatim copy)
