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

## Requirements

### Header / Navigation

#### Scenario: Sticky header displays logo and navigation links

- **GIVEN** the user loads the EduNex page
- **THEN** a header bar is visible at the top
- **AND** the logo "EduNex" is displayed on the left
- **AND** navigation links include "Home", "About", "Courses", "Blog", "Contact"
- **AND** the header sticks to the top on scroll

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** the user is on a mobile viewport
- **WHEN** the user taps the hamburger icon
- **THEN** the navigation menu expands
- **AND** all nav links are visible

### Hero Section

#### Scenario: Hero displays headline, subtext, search, and course tags

- **GIVEN** the user loads the page
- **THEN** the hero section is visible with a full-height background
- **AND** a heading reads "We Rank the Best Courses on the Web"
- **AND** descriptive subtext is shown below the heading
- **AND** a search input with "Search" button is displayed
- **AND** tag buttons for courses like "Ruby on Rails", "Python", "Marketing", "UI/UX Design", "Android", "Data Science", "Cryptocurrency" are shown

#### Scenario: Hero search form is interactive

- **GIVEN** the hero section is visible
- **WHEN** the user types into the search input
- **THEN** the input value updates

### About Section

#### Scenario: About section shows image and course summary

- **GIVEN** the user scrolls past the hero
- **THEN** the About section is visible
- **AND** a heading reads "Over 2500 Courses from 5 Platform"
- **AND** descriptive text is displayed
- **AND** an "Explore Courses" button is shown

#### Scenario: Explore Courses button navigates to courses

- **GIVEN** the About section is visible
- **WHEN** the user clicks "Explore Courses"
- **THEN** the page scrolls to the courses section

### Courses Section

#### Scenario: Courses section lists categories on light-blue background

- **GIVEN** the user scrolls to the courses section
- **THEN** the section has a light background (#f1f9ff)
- **AND** a heading reads "This is Why We have Solid Idea"
- **AND** descriptive text is displayed
- **AND** an "Explore Courses" white button is shown
- **AND** two columns of course categories are listed with book icons
- **AND** categories include: Development, IT & Software, Photography, Language, Life Science, Business, Social Science, Data Science, Design, Training, Humanities, Marketing, Economics, Personal Dev

#### Scenario: Course category items are clickable

- **GIVEN** the courses section is visible
- **WHEN** the user clicks a category item
- **THEN** the item responds with a hover effect

### Features Section

#### Scenario: Features section shows 6 feature cards in 3-column grid

- **GIVEN** the user scrolls to the features section
- **THEN** a heading reads "Features That Make Us Hero"
- **AND** 6 feature cards are displayed in a 3-column layout
- **AND** each card has a colored circle icon, title, and description
- **AND** feature titles are: Architecture, Interior Design, Concept Design, Lifetime Access, Source File Included, Live Support

#### Scenario: Feature cards have hover effects

- **GIVEN** the features section is visible
- **WHEN** the user hovers over a feature card
- **THEN** the card responds with a visual transition

### Faculty Section

#### Scenario: Faculty section shows 4 instructor cards

- **GIVEN** the user scrolls to the faculty section
- **THEN** a heading reads "Faculty Members"
- **AND** 4 instructor cards are displayed in a row
- **AND** each card shows: photo, name, designation, short bio, and social icons (Facebook, Twitter, LinkedIn)
- **AND** faculty names are: Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller
- **AND** each designation reads "Sr. Faculty Data Science"

#### Scenario: Faculty social icons are interactive

- **GIVEN** the faculty section is visible
- **WHEN** the user hovers over a social icon on a faculty card
- **THEN** the icon responds with a color transition

### Testimonials Section

#### Scenario: Testimonials section displays a carousel with star ratings

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a testimonial carousel is visible
- **AND** each slide shows: reviewer name, 5-star rating, quote text, and thumbnail images
- **AND** the carousel auto-plays through slides

#### Scenario: Testimonial thumbnails are clickable

- **GIVEN** the testimonials section is visible
- **WHEN** the user clicks a thumbnail at the bottom
- **THEN** the carousel navigates to that testimonial

### Footer

#### Scenario: Footer shows 4 link columns and newsletter signup

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark navy background (#283367)
- **AND** 4 link columns are visible: Top Products, Quick Links, Features, Resources
- **AND** a Newsletter column with email input and submit button is shown
- **AND** a bottom bar shows copyright text with heart icon and social links (Facebook, Twitter, Dribbble, Behance)

#### Scenario: Footer newsletter form is interactive

- **GIVEN** the footer is visible
- **WHEN** the user types an email into the newsletter input
- **THEN** the input value updates
- **AND** the submit button is clickable

#### Scenario: Footer links Component Dock

- **GIVEN** the footer is visible
- **THEN** the copyright area links to "https://www.componentdock.com/" branded as "Component Dock"

## Verification checklist

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
