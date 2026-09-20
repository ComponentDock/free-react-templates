# Template: EduNex (Education / Online Courses)

## Purpose

Recreation of ColorLib "Educature" template
(https://colorlib.com/wp/template/educature/) as a React 19 + Vite + Tailwind 4
+ TypeScript single-page education/course marketplace site.

- **Source slug:** `educature`
- **Preview URL:** https://preview.colorlib.com/theme/educature/
- **ColorLib page:** https://colorlib.com/wp/template/educature/
- **New name:** `edunex`
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/educature-free-template.jpeg

## Design Tokens (extracted from preview CSS)

| Token              | Value                                                  |
| ------------------ | ------------------------------------------------------ |
| Brand primary      | `#39cfca` (teal)                                       |
| Brand gradient     | `linear-gradient(90deg, #39cfca 0%, #3279bb 100%)`     |
| Dark text          | `#222222`                                              |
| Muted text         | `#777777`                                              |
| Light bg alt       | `#f9f9ff`                                              |
| Section bg (courses)| `#f1f9ff`                                             |
| Footer bg          | `#283367` (dark navy)                                  |
| Footer bottom bar  | `#3e4876`                                              |
| Feature icon colors| `#6382e6` (purple), `#e66686` (pink), `#f09359` (orange), `#73fbaf` (green) |
| Star color         | `#ffc000`                                              |
| Heading font       | `Montserrat`, sans-serif (weights 400, 600, 700)       |
| Body font          | `Roboto`, sans-serif (weights 300, 400)                |
| Button border-radius | 5px general; 20px pill for tag buttons               |
| Section gap        | Consistent section-gap between sections                 |

## Visual Design Notes (from screenshot reference)

The template features a clean, modern education marketplace aesthetic:
- Dark teal header bar with logo left, nav right
- Full-height hero with a dark background image, white headline + subtext, search input, and rounded teal "tag" buttons for top course topics
- Two-column about section: illustration/image left, text + CTA right
- Light-blue background courses section with two-column icon+text category list
- Features section: 3-column grid of icon cards with colored circle icons and descriptions
- Faculty section: 4-column instructor cards with photo, name, designation, bio, social icons
- Testimonials: carousel slider with star ratings, quote text, and thumbnail navigation at bottom
- Dark navy footer: 5-column layout (4 link columns + newsletter signup), bottom bar with copyright + social icons

## Requirements (Gherkin)

### Header / Navigation

```gherkin
Scenario: Sticky header displays logo and navigation links
  Given the user loads the EduNex page
  Then a header bar is visible at the top
  And the logo "EduNex" is displayed on the left
  And navigation links include "Home", "About", "Courses", "Blog", "Contact"
  And the header sticks to the top on scroll

Scenario: Mobile hamburger menu toggles navigation
  Given the user is on a mobile viewport
  When the user taps the hamburger icon
  Then the navigation menu expands
  And all nav links are visible
```

### Hero Section

```gherkin
Scenario: Hero displays headline, subtext, search, and course tags
  Given the user loads the page
  Then the hero section is visible with a full-height background
  And a heading reads "We Rank the Best Courses on the Web"
  And descriptive subtext is shown below the heading
  And a search input with "Search" button is displayed
  And tag buttons for courses like "Ruby on Rails", "Python", "Marketing", "UI/UX Design", "Android", "Data Science", "Cryptocurrency" are shown

Scenario: Hero search form is interactive
  Given the hero section is visible
  When the user types into the search input
  Then the input value updates
```

### About Section

```gherkin
Scenario: About section shows image and course summary
  Given the user scrolls past the hero
  Then the About section is visible
  And a heading reads "Over 2500 Courses from 5 Platform"
  And descriptive text is displayed
  And an "Explore Courses" button is shown

Scenario: Explore Courses button navigates to courses
  Given the About section is visible
  When the user clicks "Explore Courses"
  Then the page scrolls to the courses section
```

### Courses Section

```gherkin
Scenario: Courses section lists categories on light-blue background
  Given the user scrolls to the courses section
  Then the section has a light background (#f1f9ff)
  And a heading reads "This is Why We have Solid Idea"
  And descriptive text is displayed
  And an "Explore Courses" white button is shown
  And two columns of course categories are listed with book icons
  And categories include: Development, IT & Software, Photography, Language, Life Science, Business, Social Science, Data Science, Design, Training, Humanities, Marketing, Economics, Personal Dev

Scenario: Course category items are clickable
  Given the courses section is visible
  When the user clicks a category item
  Then the item responds with a hover effect
```

### Features Section

```gherkin
Scenario: Features section shows 6 feature cards in 3-column grid
  Given the user scrolls to the features section
  Then a heading reads "Features That Make Us Hero"
  And 6 feature cards are displayed in a 3-column layout
  And each card has a colored circle icon, title, and description
  And feature titles are: Architecture, Interior Design, Concept Design, Lifetime Access, Source File Included, Live Support

Scenario: Feature cards have hover effects
  Given the features section is visible
  When the user hovers over a feature card
  Then the card responds with a visual transition
```

### Faculty Section

```gherkin
Scenario: Faculty section shows 4 instructor cards
  Given the user scrolls to the faculty section
  Then a heading reads "Faculty Members"
  And 4 instructor cards are displayed in a row
  And each card shows: photo, name, designation, short bio, and social icons (Facebook, Twitter, LinkedIn)
  And faculty names are: Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller
  And each designation reads "Sr. Faculty Data Science"

Scenario: Faculty social icons are interactive
  Given the faculty section is visible
  When the user hovers over a social icon on a faculty card
  Then the icon responds with a color transition
```

### Testimonials Section

```gherkin
Scenario: Testimonials section displays a carousel with star ratings
  Given the user scrolls to the testimonials section
  Then a testimonial carousel is visible
  And each slide shows: reviewer name, 5-star rating, quote text, and thumbnail images
  And the carousel auto-plays through slides

Scenario: Testimonial thumbnails are clickable
  Given the testimonials section is visible
  When the user clicks a thumbnail at the bottom
  Then the carousel navigates to that testimonial
```

### Footer

```gherkin
Scenario: Footer shows 4 link columns and newsletter signup
  Given the user scrolls to the footer
  Then the footer has a dark navy background (#283367)
  And 4 link columns are visible: Top Products, Quick Links, Features, Resources
  And a Newsletter column with email input and submit button is shown
  And a bottom bar shows copyright text with heart icon and social links (Facebook, Twitter, Dribbble, Behance)

Scenario: Footer newsletter form is interactive
  Given the footer is visible
  When the user types an email into the newsletter input
  Then the input value updates
  And the submit button is clickable

Scenario: Footer links Component Dock
  Given the footer is visible
  Then the copyright area links to "https://www.componentdock.com/" branded as "Component Dock"
```

## Verification Checklist

- [ ] Spec section order matches preview: Header → Hero → About → Courses → Features → Faculty → Testimonials → Footer
- [ ] Brand teal `#39cfca` used consistently for CTAs, hover states, links
- [ ] Gradient buttons: `linear-gradient(90deg, #39cfca, #3279bb)`
- [ ] Montserrat font for headings, Roboto for body text
- [ ] Hero has full-height dark background with search + course tag pills
- [ ] About section: two-column layout (image left, text right)
- [ ] Courses section: light blue `#f1f9ff` background, two-column category list
- [ ] Features: 3×2 grid with colored circle icons
- [ ] Faculty: 4-column card layout with photos, bio, social icons
- [ ] Testimonials: carousel with star ratings and thumbnail navigation
- [ ] Footer: dark navy, 4 link columns + newsletter, social icons
- [ ] Footer links Component Dock (not ColorLib)
- [ ] No ColorLib references in app code
- [ ] All placeholder images use `https://picsum.photos/seed/edunex-<n>/<w>/<h>`
- [ ] Google Fonts loaded via `<link>` in index.html
- [ ] Icons from lucide-react (replacing FontAwesome/Themify icons)
