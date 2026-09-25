# Template: DesignBolt (Creative Digital Agency)

## Purpose

Recreation of ColorLib **Boxus** — a one-page creative digital agency portfolio template.

- **ColorLib source:** https://colorlib.com/wp/template/boxus/
- **Preview URL:** https://preview.colorlib.com/theme/boxus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/boxus-creative-digital-agency-free-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/designbolt`
- **Deploy target:** `designbolt.free.componentdock.com`

## Design tokens

Extracted from the live preview's `style.css` and visual analysis of the screenshot.

### Colors

| Token               | Value         | Usage                                      |
| ------------------- | ------------- | ------------------------------------------ |
| `--brand-primary`   | `#221C5A`     | Nav background, section backgrounds, footer |
| `--brand-green`     | `#32DB8A`     | Services section title block, blog numbers |
| `--brand-green-dk`  | `#55B286`     | Services section number color              |
| `--brand-pink`      | `#E74C78`     | Portfolio load-more bar, about section title|
| `--brand-pink-lt`   | `#ee87a4`     | Link hover, member position text           |
| `--brand-orange`    | `#FFBA42`     | Portfolio & video section title blocks     |
| `--brand-orange-dk` | `#e3a436`     | Portfolio & video section number color     |
| `--text-dark`       | `#23214c`     | Body text, contact inputs                  |
| `--text-muted`      | `#5b5881`     | Footer text                                |
| `--white`           | `#ffffff`     | Section content backgrounds, nav text      |

### Typography

| Role           | Family         | Weight | Notes                          |
| -------------- | -------------- | ------ | ------------------------------ |
| Body           | Roboto         | 400    | 16px / 26px line-height        |
| Headings       | Montserrat     | 700    | Hero 56px, section titles 109px|
| Subtitle       | PT Serif       | 400    | 22px, hero subtitle only       |
| UI/labels      | Montserrat     | 700    | Service titles, portfolio text |

### Button / CTA styles

- **Contact submit:** outline button — `2px solid #e54b76`, text `#e54b76`, transparent bg, fills pink on hover, uppercase Roboto 16px.
- **Portfolio load-more:** solid pink `#E74C78` bar with white Montserrat 20px text.
- **Nav links:** uppercase Roboto 13px, white, letter-spacing 0.03cm, no underline.

### Section backgrounds

All sections use dark purple `#221C5A` as base with background images (gradients/overlays in the React version via placeholder images):
- Hero: dark purple + background image, full viewport height
- Services: solid `#221C5A`
- Portfolio: `#221C5A` + background image
- About: `#221C5A` + background image
- News: `#221C5A` + background image
- Video: `#221C5A` + background image
- Skills: `#221C5A` + background image
- Contact: `#221C5A` + background image
- Footer: solid `#221C5A`

### Section title blocks

Each section (except hero/footer) has a colored square block (370x370 in original) containing:
- A large faded number (180px Montserrat, lighter shade of the block color)
- The section name (109px Montserrat uppercase, white, word-break)

Colors cycle: Services=green, Portfolio=orange, About=pink, News=pink, Video=orange, Skills=green, Contact=pink.

### Layout

- Content max-width: 1170px centered
- Sections alternate left/right alignment of the title block vs content
- Portfolio: masonry 2-column grid (400px items, 800px full-width)
- Services: 4-column grid (335px items)
- About: team member cards (330px content + 370px image)
- Skills: full-width progress bars (59px height)

## Gherkin requirements

### Scenario: Hero section renders

```gherkin
Feature: Hero section

  Scenario: Displays hero with logo, headline, and subtitle
    Given the user loads the page
    Then the hero section is visible
    And a logo image is displayed
    And the headline "We Craft Awesome Web And Graphic Design Solutions" is shown
    And the subtitle "Support bright students today for a better tomorrow" is shown
    And the hero has a dark purple background with image overlay
```

### Scenario: Navigation

```gherkin
Feature: Navigation

  Scenario: Fixed nav with section links
    Given the user loads the page
    Then a fixed navigation bar is visible at the top
    And the nav contains links for Home, Services, Portfolio, About, News, Video, Skills, Contact
    And the nav has a dark purple background with white uppercase text

  Scenario: Nav links scroll to sections
    Given the user clicks the "Services" nav link
    Then the page scrolls to the services section
```

### Scenario: Services section

```gherkin
Feature: Services section

  Scenario: Displays 4 service cards
    Given the user scrolls to the services section
    Then a green section title block is visible with number "01" and title "Services"
    And 4 service cards are displayed in a grid
    And each card has an icon, a title, and a description
    And the service titles include Branding, Mobile Apps, Web, and Graphic
```

### Scenario: Portfolio section

```gherkin
Feature: Portfolio section

  Scenario: Displays portfolio grid with items
    Given the user scrolls to the portfolio section
    Then an orange section title block is visible with number "02" and title "Portfolio"
    And a masonry grid of portfolio items is displayed
    And each item shows an image with a hover overlay revealing category and title
    And a pink "Load More" button is shown at the bottom right
```

### Scenario: About section

```gherkin
Feature: About section

  Scenario: Displays team member cards
    Given the user scrolls to the about section
    Then a pink section title block is visible with number "03" and title "About"
    And team member cards are displayed
    And each card shows a member image, name, position, and bio text
    And the member position text is pink (#ee87a4)
```

### Scenario: News section

```gherkin
Feature: News section

  Scenario: Displays blog post list
    Given the user scrolls to the news section
    Then a pink section title block is visible with number "04" and title "News"
    And a list of blog post items is displayed
    And each item shows a number, category link, and post title
    And a "View All Posts" link is shown at the bottom
```

### Scenario: Video section

```gherkin
Feature: Video section

  Scenario: Displays video embed with play button
    Given the user scrolls to the video section
    Then an orange section title block is visible with number "05" and title "Video"
    And a video thumbnail with a play button overlay is shown
```

### Scenario: Skills section

```gherkin
Feature: Skills section

  Scenario: Displays progress bars
    Given the user scrolls to the skills section
    Then a green section title block is visible with number "06" and title "Skills"
    And multiple progress bars are displayed
    And each bar shows a skill name and percentage
    And the bars have a colored fill on dark background
```

### Scenario: Contact section

```gherkin
Feature: Contact section

  Scenario: Displays contact form
    Given the user scrolls to the contact section
    Then a pink section title block is visible with number "07" and title "Contact"
    And a contact form is displayed with fields for Name, Email, Subject, and Message
    And the submit button has a pink outline style

  Scenario: Contact form submission
    Given the user fills in all required fields
    When the user clicks the submit button
    Then the form attempts submission
```

### Scenario: Footer

```gherkin
Feature: Footer

  Scenario: Displays footer with social links and copyright
    Given the user scrolls to the bottom
    Then a dark purple footer is visible
    And social media icon links are displayed (Facebook, Twitter, Behance, Dribbble, RSS)
    And a copyright notice is shown
    And a "Component Dock" link is included
```

## Verification checklist

- [ ] Hero: dark purple bg, logo, headline, subtitle, full-height
- [ ] Nav: fixed, dark purple, white uppercase links, smooth scroll
- [ ] Services: green title block, 4 service cards with icons
- [ ] Portfolio: orange title block, masonry grid, hover overlays, load-more button
- [ ] About: pink title block, team member cards with image + bio
- [ ] News: pink title block, numbered blog list, view-all link
- [ ] Video: orange title block, video thumbnail with play button
- [ ] Skills: green title block, progress bars
- [ ] Contact: pink title block, form with 4 fields, outline submit button
- [ ] Footer: dark purple, social icons, copyright, Component Dock link
- [ ] All section title blocks use correct accent colors cycling pattern
- [ ] Typography: Roboto body, Montserrat headings, PT Serif subtitle
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
