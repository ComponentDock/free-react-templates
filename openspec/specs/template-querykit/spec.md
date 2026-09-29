# Template: QueryKit (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form/Bar 08" — a single-section job search bar
component for job board platforms. The template provides a prominent keyword
search, location search, budget dropdown, and a call-to-action button, all
set against a bold blue hero background.

- **Source**: [ColorLib Search Form/Bar 08](https://colorlib.com/wp/template/search-form-bar-08/)
- **Preview**: https://preview.colorlib.com/theme/bootstrap/search-form-bar-08/
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token              | Value                        | Notes                                  |
| ------------------ | ---------------------------- | -------------------------------------- |
| Brand color        | `#1089ff`                    | Bright blue — body bg, icons, placeholders |
| Button bg          | `#000000`                    | Black — search CTA                     |
| Button text        | `#ffffff`                    | White, uppercase, font-weight 500       |
| Button height      | 40px                         |                                        |
| Button radius      | 4px                          | Slight rounding                        |
| Input bg           | `#ffffff`                    | White                                  |
| Input text color   | `#1089ff`                    | Blue text (matches brand)              |
| Input placeholder  | `#1089ff`                    | Blue placeholder text                  |
| Input border       | `1px solid rgba(0,0,0,0.05)` | Nearly invisible border                |
| Input height       | 40px                         |                                        |
| Input radius       | 4px                          |                                        |
| Input font size    | 14px                         |                                        |
| Heading color      | `#ffffff`                    | White on blue bg                       |
| Heading font size  | 28px                         | Section title                          |
| Subtitle font size | 24px                         | "Find For A Jobs"                      |
| Font family        | Poppins, Arial, sans-serif   | Loaded from Google Fonts               |
| Section padding    | 7em top/bottom               |                                        |
| Body font size     | 16px                         |                                        |
| Body line height   | 1.8                          |                                        |

## Gherkin Requirements

### Section: Hero Search Bar

**Scenario: Page renders with correct background**
  Given the user visits the QueryKit page
  Then the page background is solid brand blue (#1089ff)

**Scenario: Title is displayed**
  Given the user visits the QueryKit page
  Then a heading "Search For Opportunities" is visible
  And it is white, centered, and uses the Poppins font

**Scenario: Subtitle is displayed**
  Given the user visits the QueryKit page
  Then a subtitle "Find Your Perfect Role" is visible below the title
  And it is white, centered, and uses the Poppins font

**Scenario: Keywords input is present**
  Given the user visits the QueryKit page
  Then a text input with placeholder "Keywords (e.g. Job Title, Position...)" is visible
  And it has a search icon on the right side
  And it has a white background with blue placeholder text

**Scenario: Location input is present**
  Given the user visits the QueryKit page
  Then a text input with placeholder "Location (City, Country...)" is visible
  And it has a search icon on the right side
  And it has a white background with blue placeholder text

**Scenario: Budget dropdown is present**
  Given the user visits the QueryKit page
  Then a select dropdown is visible with budget range options
  And it defaults to the first budget option
  And it has a dropdown arrow icon on the right side

**Scenario: Search button is present**
  Given the user visits the QueryKit page
  Then a "SEARCH JOB" button is visible
  And it has a black background with white uppercase text
  And it spans the same height as the inputs (40px)

**Scenario: Form layout is horizontal on desktop**
  Given the user visits the QueryKit page on a desktop viewport
  Then the keywords input, location input, budget dropdown, and search button
  are displayed in a single horizontal row

**Scenario: Form layout stacks on mobile**
  Given the user visits the QueryKit page on a mobile viewport
  Then the inputs and button stack vertically

**Scenario: Form fields have focus states**
  Given the user clicks on the keywords input
  Then the input border changes to white
  And the input remains functional

**Scenario: Button hover state**
  Given the user hovers over the search button
  Then the button text remains visible
  And the button remains black

## Verification Checklist

- [ ] Brand blue background covers full viewport
- [ ] Poppins font loaded via Google Fonts
- [ ] Title and subtitle white, centered
- [ ] Three form fields in a row (desktop) / stacked (mobile)
- [ ] Search icons in keyword and location inputs
- [ ] Budget dropdown with arrow icon and range options
- [ ] Black search button, uppercase text, 4px radius
- [ ] Input placeholder text is blue (#1089ff)
- [ ] Input height matches button height (40px)
- [ ] Section padding matches original (7em top/bottom)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Spec recorded: source slug = search-form-bar-08
