# Template: SearchMint (Search Form & Bar)

## Purpose

Recreation of ColorLib's "Search Form/Bar V09" — a minimal, clean search bar
snippet. No frameworks, no plugins, plain HTML/CSS in the original.

- **Source:** https://colorlib.com/wp/template/search-form-bar-09/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/search-form-bar-09/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens (from original CSS)

| Token              | Value                                    | Tailwind mapping           |
| ------------------ | ---------------------------------------- | -------------------------- |
| Font family        | Poppins, Arial, sans-serif               | `font-poppins` (Google)    |
| Body background    | #fafafa                                  | `bg-[#fafafa]`             |
| Body text color    | gray (#808080)                           | `text-gray`                |
| Heading color      | #000                                     | `text-black`               |
| Heading font-size  | 28px                                     | `text-[28px]`              |
| Heading font-weight| 400 (normal)                             | `font-normal`              |
| Input background   | #fff                                     | `bg-white`                 |
| Input height       | 50px                                     | `h-[50px]`                 |
| Input font-size    | 14px                                     | `text-sm` (14px)           |
| Input border-radius| 2px (very slight rounding)               | `rounded-[2px]`            |
| Input border       | none                                     | `border-none`              |
| Input placeholder  | rgba(0, 0, 0, 0.7)                       | `placeholder-black/70`     |
| Input box-shadow   | 0px 5px 20px -12px rgba(0,0,0,0.2)       | custom shadow class        |
| Input padding      | 0 15px 0 20px                            | `py-0 pl-5 pr-4`          |
| Button background  | #01d28e (mint green)                     | `bg-[#01d28e]`             |
| Button color       | #fff                                     | `text-white`               |
| Button width       | 90px                                     | `w-[90px]`                 |
| Button height      | 50px                                     | `h-[50px]`                 |
| Button border-radius| 2px                                     | `rounded-[2px]`            |
| Button box-shadow  | 0px 5px 20px -12px rgba(0,0,0,0.34)      | custom shadow class        |
| Button border      | none                                     | `border-none`              |
| Section padding    | 7em 0                                    | `py-28`                    |
| Transition         | 0.3s (form hover)                        | `transition-all duration-300` |

### Layout

- Centered container (max-width ~720px on md, 960px on lg)
- Title centered above the form with margin-bottom: 3rem
- Search form: flex row, space-between alignment
  - Input takes `calc(100% - 100px)` width
  - Button is fixed 90px wide
  - Both have 50px height
- Entirely responsive: stacks on small screens

### Visual design (from screenshot)

Minimal white page with a centered heading "Search Form/Bar #09" above a
single-line search form. The form has a white input field on the left with
"Search..." placeholder and a mint-green (#01d28e) "Search" button on the
right. Both elements have a subtle drop shadow. Very slight rounded corners
(2px). Clean, airy layout with generous vertical padding. No other sections,
no footer, no navigation — purely a search bar snippet.

## Requirements (Gherkin)

### Scenario: Page renders with centered heading
  Given a user visits the SearchMint page
  Then the heading "Find What You Need" is visible and centered
  And the heading uses Poppins font, 28px, font-weight 400, color #000

### Scenario: Search input renders correctly
  Given a user visits the SearchMint page
  Then a search input is visible with placeholder text "Search..."
  And the input has a white background, 50px height, 2px border-radius
  And the input has no visible border
  And the input has a subtle box shadow

### Scenario: Search button renders correctly
  Given a user visits the SearchMint page
  Then a "Search" button is visible to the right of the input
  And the button has a mint-green (#01d28e) background
  And the button text is white
  And the button is 90px wide and 50px tall
  And the button has a subtle box shadow

### Scenario: Search form layout
  Given a user visits the SearchMint page
  Then the search input and button are aligned in a horizontal row
  And the input and button are vertically centered within the row
  And the form is centered on the page with max-width ~640px

### Scenario: Page background and spacing
  Given a user visits the SearchMint page
  Then the page background is #fafafa
  And the section has generous vertical padding (~7em top and bottom)

### Scenario: Hover transition on form
  Given a user visits the SearchMint page
  When the user hovers over the search form area
  Then a smooth 0.3s transition is applied

### Scenario: Responsive behavior
  Given a user visits the SearchMint page on a mobile device (width < 768px)
  Then the search form remains visible and functional
  And the input and button maintain their horizontal layout

### Scenario: Accessibility
  Given a user visits the SearchMint page
  Then the search input has an associated label or aria-label
  And the search button is a semantic button element
  And the heading uses a semantic heading tag (h1 or h2)

### Scenario: Footer link
  Given a user visits the SearchMint page
  Then a footer is present with a link to https://www.componentdock.com/
  And the link text mentions "Component Dock"

## Verification checklist

- [ ] Heading rendered with correct Poppins font, 28px, normal weight
- [ ] Search input: white bg, 50px height, 2px radius, no border, shadow
- [ ] Search button: #01d28e bg, white text, 90px wide, 50px tall, shadow
- [ ] Form layout: flex row, input + button side-by-side, centered
- [ ] Page background: #fafafa
- [ ] Section padding: ~7em vertical
- [ ] Responsive: works on mobile widths
- [ ] Accessibility: input label, semantic button, heading tag
- [ ] Footer: Component Dock link present
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
