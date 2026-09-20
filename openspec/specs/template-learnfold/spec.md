# Template: Learnfold (Education)

## Purpose

Recreation of [ColorLib Webuni](https://colorlib.com/wp/template/webuni/) — an
education/online-courses template.

- **Source slug:** `webuni`
- **Preview URL:** https://preview.colorlib.com/theme/webuni/
- **Deploy name:** `learnfold`
- **Deploy URL:** https://learnfold.free.componentdock.com
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token | Value | Notes |
|---|---|---|
| Font family | `"Raleway", sans-serif` | Google Font; weights 400–800 |
| Brand primary | `#d82a4e` | Crimson-red. Buttons, section BGs, accent borders |
| Secondary BG | `#edf4f6` | Light blue-grey. Category cards, footer-bottom |
| Neutral white | `#ffffff` | Card backgrounds, text on dark sections |
| Neutral dark text | `#3e3e3e` / `#474747` | Body copy |
| Border radius | `0` (square) | Buttons are rectangular, no rounding |
| Button style | `background: #d82a4e`, `color: #fff`, `border: none`, `padding: 15px 10px`, `font-weight: 600`, `font-size: 16px`, `min-width: 196px` | Pill-style is NOT used; flat rectangle |
| Section padding | `115px` top/bottom (`.spad`) | Large vertical rhythm |
| Background images | `data-setbg` pattern (CSS `background-size: cover`) | Hero, signup, course thumbs |

## Page structure (section order)

1. **Header** — Logo left (3 cols), nav right (9 cols): Home, About us, Courses, News, Contact. "Login" button right-aligned (`.site-btn`).
2. **Hero** — Full-width background image, white text heading + subtitle, name+email signup form at bottom.
3. **Course Categories** — "Our Course Categories" heading + 3×2 grid of category cards (image thumb, title, description, course count span). Cards have `#edf4f6` background.
4. **Search Section** — Full-width `#d82a4e` background, white heading "Search your course", course+category inputs + search button.
5. **Featured Courses** — Filter tabs (All / Finance / Design / Web Development / Photography). 4-column grid of course cards (thumbnail with price badge, title, description, student count, author avatar + name). MixItUp filter pattern.
6. **Signup Section** — Left-aligned form on `#d82a4e` background (right half is parallax background image). Fields: name, email, phone, file upload (label styled as button), submit.
7. **Banner/CTA** — "Join Our Community Now!" heading + description + "Register Now" button centered.
8. **Footer** — 5-column widget row: Contact Info, 3 link columns (Engineering, Graphic Design, Development — each with 5 links), Newsletter form. Border top `3px solid #d82a4e`.
9. **Footer Bottom** — `#edf4f6` background: Terms/Privacy links + copyright. Replace attribution with Component Dock link.

## Gherkin scenarios

### Header

```gherkin
Feature: Learnfold Header

  Scenario: Logo and navigation render
    Given the page loads
    Then a logo image is visible on the left
    And navigation links "Home", "About us", "Courses", "News", "Contact" are visible
    And a "Login" button styled with brand primary color is visible

  Scenario: Navigation links are interactive
    Given the header is rendered
    When a user clicks a navigation link
    Then the link responds with a visible hover state
```

### Hero

```gherkin
Feature: Learnfold Hero

  Scenario: Hero displays heading and signup form
    Given the hero section is visible
    Then a heading "Get The Best Free Online Courses" is displayed
    And a subtitle paragraph is displayed
    And a signup form with Name, E-mail inputs and "Sign Up Now" button is present

  Scenario: Hero has a background image
    Given the hero section is visible
    Then the background displays a cover image
```

### Course Categories

```gherkin
Feature: Learnfold Course Categories

  Scenario: Categories grid renders 6 items
    Given the categories section is visible
    Then a heading "Our Course Categories" is displayed
    And 6 category cards are rendered in a 3-column grid
    And each card has an image thumbnail, title, description, and course count

  Scenario: Category cards have consistent styling
    Given a category card is rendered
    Then the card background is the secondary light color
    And the course count text uses the brand primary color
```

### Search Section

```gherkin
Feature: Learnfold Search

  Scenario: Search form renders on brand background
    Given the search section is visible
    Then the section background is brand primary (#d82a4e)
    And a heading "Search your course" is displayed in white
    And Course and Category inputs are present
    And a "Search Course" button is present
```

### Featured Courses

```gherkin
Feature: Learnfold Featured Courses

  Scenario: Filter tabs render
    Given the courses section is visible
    Then filter tabs "All", "Finance", "Design", "Web Development", "Photography" are visible
    And "All" tab is active by default

  Scenario: Course cards render in grid
    Given the courses section is visible
    Then 8 course cards are rendered in a 4-column grid
    And each card shows a thumbnail with a price badge
    And each card shows a title, description, student count, and author info

  Scenario: Filter tabs filter courses
    Given a user clicks the "Finance" tab
    Then only finance-category courses are visible
```

### Signup Section

```gherkin
Feature: Learnfold Signup

  Scenario: Signup form renders with fields
    Given the signup section is visible
    Then a heading "Sign up to became a teacher" is displayed
    And Name, E-mail, Phone inputs are present
    And an "Upload Course" file upload button is present
    And a "Search Course" submit button is present

  Scenario: Signup section has parallax background
    Given the signup section is visible
    Then the right half shows a background image with cover sizing
```

### Banner CTA

```gherkin
Feature: Learnfold Banner CTA

  Scenario: CTA renders with button
    Given the banner section is visible
    Then a heading "Join Our Community Now!" is displayed
    And a description paragraph is shown
    And a "Register Now" button using brand primary color is centered
```

### Footer

```gherkin
Feature: Learnfold Footer

  Scenario: Footer widgets render
    Given the footer is visible
    Then Contact Info with address, phone, email is shown
    And 3 link columns (Engineering, Graphic Design, Development) with 5 links each are shown
    And a Newsletter form with email input and Subscribe button is shown

  Scenario: Footer has brand accent border
    Given the footer is visible
    Then the top border is 3px solid brand primary

  Scenario: Footer bottom renders
    Given the footer bottom is visible
    Then Terms & Conditions, Register, Privacy links are shown
    And copyright text is shown
    And a link to Component Dock is present (replacing original attribution)
```

## Verification checklist

- [ ] All 9 sections render in the correct order
- [ ] Font "Raleway" loads from Google Fonts
- [ ] Brand primary #d82a4e used consistently on buttons, search BG, signup BG, footer border
- [ ] Secondary background #edf4f6 used on category cards, footer bottom
- [ ] Buttons are rectangular (border-radius: 0), not rounded
- [ ] Course filter tabs filter cards correctly
- [ ] Hero background image is visible with cover sizing
- [ ] Signup section has parallax-style background on the right half
- [ ] Footer has 5 widget columns + newsletter
- [ ] Footer bottom links to Component Dock
- [ ] No references to ColorLib anywhere in app code
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] All tests pass with 100% coverage
