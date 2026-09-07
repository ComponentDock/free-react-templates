# Template: OptPool (Multiselect Snippet)

## Purpose

Recreation of ColorLib "Multiselect V19" — a fancy multiselect snippet built
with Bootstrap and the Chosen jQuery plugin, providing a clean, minimal
multi-select dropdown for category/tag selection.

- **Source:** [ColorLib Multiselect 19](https://colorlib.com/wp/template/multiselect-19/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-19/
- **Stack:** React 19, Tailwind CSS 4, TypeScript (strict). No jQuery/Chosen —
  React-native implementation with controlled multi-select chips/tags.
- **License:** CC BY 3.0

## Design tokens

Extracted from the live preview DOM and stylesheet (`css/style.css`):

| Token             | Value                                  | Notes                                   |
| ----------------- | -------------------------------------- | --------------------------------------- |
| font-body         | `"Roboto", sans-serif`                 | Loaded via Google Fonts / Cloudflare    |
| font-heading      | `"Roboto", sans-serif`                 | Same family, same style                 |
| bg-page           | `#efefef`                              | Light gray page background              |
| text-primary      | `#444`                                 | Dark gray for input text                |
| text-secondary    | `#b3b3b3`                              | Lighter gray for paragraph text         |
| tag-bg-olive      | `#e5e4cc`                              | Color variant 1 — warm tan              |
| tag-bg-green      | `#c7f0db`                              | Color variant 2 — light green           |
| tag-bg-blue       | `#d3f4ff`                              | Color variant 3 — light blue            |
| border-radius     | `4px` (tags/chips), `5px` (select box) | Rounded corners on interactive elements |
| shadow-input      | `0 1px 4px 0 rgba(0,0,0,0.1)`          | Subtle input shadow                     |
| shadow-dropdown   | `0 15px 30px 0 rgba(0,0,0,0.2)`        | Pronounced dropdown shadow              |
| font-size-heading | `20px`                                 | Section heading                         |
| font-size-input   | `14px`                                 | Search/input text size                  |

### Visual design (from screenshot)

The preview screenshot (1200×972) shows a centered, minimal single-section page:

- Light gray `#efefef` full-page background
- Centered heading "Multi-Select #9" in dark Roboto, 20px
- A single `col-md-5` centered card-like container with the Chosen multi-select
- The select box has no visible border, just a soft `box-shadow` (0 1px 4px)
- Selected items appear as rounded tag chips (border-radius 4px) in three
  possible color variants (olive/tan, green, blue) depending on the demo state
- Dropdown pops below with a stronger shadow (`0 15px 30px`)
- Overall aesthetic: clean, modern, neutral gray palette with colored tag chips

## Requirements (Gherkin)

### Scenario: Page renders with heading and select container

```gherkin
Given the user visits the OptPool page
When the page loads
Then a heading "Multi-Select #9" is visible
And a multi-select dropdown container is rendered
And the page background is light gray (#efefef)
```

### Scenario: Select dropdown displays placeholder

```gherkin
Given the user visits the OptPool page
When the page loads
Then the select input shows the placeholder text "Select Categories"
And the input has a soft box-shadow
```

### Scenario: Select contains predefined categories

```gherkin
Given the user visits the OptPool page
When the page loads
Then the select contains the options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
```

### Scenario: User can select multiple options

```gherkin
Given the user visits the OptPool page
When the user clicks the select input
And the user selects "Design"
Then "Design" appears as a tag chip
When the user selects "CSS3"
Then "CSS3" appears as a tag chip
And both "Design" and "CSS3" are selected
```

### Scenario: User can deselect an option via chip close button

```gherkin
Given the user has selected "Design" and "CSS3"
When the user clicks the close button on the "Design" chip
Then "Design" is removed from the selected chips
And "CSS3" remains selected
```

### Scenario: Dropdown opens and closes on interaction

```gherkin
Given the user visits the OptPool page
When the user clicks the select input
Then a dropdown list opens below the input
When the user clicks outside the dropdown
Then the dropdown closes
```

### Scenario: Dropdown shadow matches design token

```gherkin
Given the dropdown is open
Then the dropdown has a box-shadow of 0 15px 30px 0 rgba(0,0,0,0.2)
And the dropdown has border-radius 4px
```

### Scenario: Tag chips have correct visual styling

```gherkin
Given the user has selected one or more options
Then each selected option displays as a rounded chip
And each chip has border-radius 4px
And chips have a soft background color (olive, green, or blue variant)
```

### Scenario: Responsive layout

```gherkin
Given the user visits the OptPool page on a mobile device
Then the select container adjusts to full width
And the heading remains centered
```

## Verification checklist

- [ ] Page renders with heading "Multi-Select #9"
- [ ] Multi-select container is centered (max-width col-md-5)
- [ ] Select input shows "Select Categories" placeholder
- [ ] All 8 category options are present in the data
- [ ] Multiple options can be selected simultaneously
- [ ] Selected options render as chip/tag elements
- [ ] Chips have border-radius 4px
- [ ] Chips have colored backgrounds (olive #e5e4cc, green #c7f0db, blue #d3f4ff)
- [ ] Close button on each chip removes that selection
- [ ] Dropdown opens on click with shadow `0 15px 30px 0 rgba(0,0,0,0.2)`
- [ ] Dropdown closes when clicking outside
- [ ] Input has box-shadow `0 1px 4px 0 rgba(0,0,0,0.1)`
- [ ] Page background is #efefef
- [ ] Font family is Roboto
- [ ] Responsive: works on mobile viewport
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] 100% test coverage
