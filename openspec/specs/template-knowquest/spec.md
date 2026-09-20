# Template: KnowQuest (Education / Online Learning)

## Purpose

Recreation of [ColorLib "Knowledge"](https://colorlib.com/wp/template/knowledge/)
using React 19 + Vite + Tailwind CSS 4 + TypeScript.

- **Source slug:** `knowledge`
- **Preview URL:** https://preview.colorlib.com/theme/knowledge/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/knowledge-free-template.jpeg
- **Category:** Education / Online Learning
- **Design notes:** Clean, professional online learning center design with hero slider, course catalog, stats counters, trainers section, events, and blog. Dark upper-nav bar with brand blue accents throughout.

## Design Tokens

| Token              | Value                       | Notes                                    |
|--------------------|-----------------------------|------------------------------------------|
| Primary brand      | `#4586ff`                   | Blue — buttons, links, counter numbers   |
| Upper nav bg       | `#302a39`                   | Purple-navy — top bar, search bar        |
| Body text          | `#555555`                   | Paragraph text                           |
| Headings           | `#000`                      | All heading levels                       |
| Background         | `#fff`                      | Page background                          |
| Light grey bg      | `#f2f3f7`                   | Blog section background                  |
| Font family        | `"Rubik", Arial, sans-serif`| Weights: 300, 400, 500, 700              |
| Body font size     | `17px`                      |                                          |
| Button radius      | `100px` (pill)              | CTA and primary buttons                  |
| Button primary     | `bg: #4586ff, color: #fff`  | Solid blue pill                          |
| Button outline     | `border: #4586ff, bg: transparent` | Discover button on slider          |
| Play icon bg       | `#000` (circle)             | Inside hero play button                  |
| Dropdown bg        | `#000`                      | Nav dropdown background, radius: 4px     |
| Dropdown text      | `#999999`                   |                                          |

## Gherkin Requirements

### Scenario: Top Bar Navigation

```gherkin
Feature: Top Bar Navigation

  Scenario: Top bar displays tagline and action links
    Given I visit the KnowQuest page
    Then I see a dark purple-navy top bar with tagline "The ideal WordPress theme for online learning center"
    And I see links for "Our Vision", "Our Missions", and "Sign Up" aligned right

  Scenario: Main nav displays logo and menu items
    Given I visit the KnowQuest page
    Then I see the "Knowledge" logo on the left
    And I see navigation items: Home (active), Courses (with dropdown), Teachers, About, Events, News, Contact
    And I see a "Get started" CTA button in the nav
```

### Scenario: Hero Section (Slider)

```gherkin
Feature: Hero Section

  Scenario: Hero displays rotating slides with CTA
    Given I visit the KnowQuest page
    Then I see a full-width hero slider section
    And each slide shows a headline ("You only have to know one thing"), subtitle, and play button "Start Learning Now!"
    And the play button has a dark circle icon on the left
    And there is a "Discover More" outline button below
    And navigation dots or arrows appear for slide control

  Scenario: Hero slide content variety
    Given I see the hero slider
    Then the slides cycle through subtitles: "Best Online Learning System", "Online Free Course", "Education is a Key to Success", "Best Online Learning Center"
```

### Scenario: Search / Course Filter Section

```gherkin
Feature: Course Search

  Scenario: Search form with category, difficulty, and submit
    Given I visit the KnowQuest page
    Then I see a search section with dark background (#302a39)
    And it contains a form with a "Categories" dropdown
    And a "Difficulty" dropdown (Beginner, Intermediate, Advance)
    And a "Sort By" dropdown (Default, Duration, Student Number)
    And a blue "Submit" button (pill shape)
```

### Scenario: Course Categories Section

```gherkin
Feature: Course Categories

  Scenario: Course cards display with images
    Given I visit the KnowQuest page
    Then I see a section titled "Popular Online Courses"
    And there are 6 course cards in a carousel/slider layout
    And each card shows an image, course title, and price/info
    And cards have hover effects

  Scenario: Course card content
    Given I see the course category cards
    Then each card displays a course type (e.g. "Developing Mobile Apps Using Ruby on Rails")
    And cards include instructor info, rating, and duration
```

### Scenario: Stats / Counter Section

```gherkin
Feature: Statistics Counters

  Scenario: Parallax counter section with stats
    Given I visit the KnowQuest page
    Then I see a dark parallax background section with overlay
    And there are 4 animated counters displayed in a row
    And the counters show: "1539 Courses", "3653 Students", "2300 Teachers online", "200 Countries"
    And counter numbers are displayed in brand blue (#4586ff)
    And labels are displayed in white below each number
```

### Scenario: Trainers Section

```gherkin
Feature: Trainers / Teachers

  Scenario: Trainer profiles displayed
    Given I visit the KnowQuest page
    Then I see a section with instructor/trainer profiles
    And each trainer has a photo, name, and subject specialty
    And trainer names include "Dave Henderson", "Olivia Young", "Daniel Anderson", "David Brook"
```

### Scenario: Events Section

```gherkin
Feature: Events

  Scenario: Upcoming events listed
    Given I visit the KnowQuest page
    Then I see an "Upcoming Events" section
    And events display with an image, title, date, and description
    And there is a "Discover" link/button
```

### Scenario: Blog Section

```gherkin
Feature: Blog / Articles

  Scenario: Blog posts displayed on light background
    Given I visit the KnowQuest page
    Then I see a blog section with light grey background (#f2f3f7)
    And there are article cards with featured images, titles, and excerpts
    And articles show author name and date
```

### Scenario: Footer

```gherkin
Feature: Footer

  Scenario: Multi-column footer with info and links
    Given I visit the KnowQuest page
    Then I see a dark footer with multiple columns
    And columns include: About text, Course links (Diploma Degree, BS Degree), Difficulty links (Beginner, Intermediate, Advance), Company links
    And the footer contains address, phone, and email contact info
    And there is a "Component Dock" attribution link (branded as required)
```

## Verification Checklist

- [ ] Top bar: dark purple-navy bg (#302a39), tagline text, 3 action links right-aligned
- [ ] Main nav: logo, 7 nav items with dropdown on Courses, CTA "Get started"
- [ ] Hero: full-width slider, 4 slides, headline + subtitle + play CTA, "Discover More" outline button
- [ ] Search form: dark bg, 3 dropdowns + submit button
- [ ] Course cards: 6 cards in carousel, image + title + price
- [ ] Counters: dark parallax, 4 animated numbers (#4586ff), labels below
- [ ] Trainers: photo grid, 4+ instructor profiles with name and specialty
- [ ] Events: image + title + date + description, "Discover" link
- [ ] Blog: light grey bg, article cards with image, title, excerpt, author, date
- [ ] Footer: dark, multi-column, contact info, "Component Dock" link
- [ ] Font: Rubik loaded from Google Fonts
- [ ] Brand color: #4586ff used consistently for CTAs, links, counters
- [ ] All buttons: pill shape (border-radius: 100px), blue primary, white text
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] `npm run spec:validate` passes
