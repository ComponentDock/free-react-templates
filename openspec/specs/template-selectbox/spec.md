# Template: SelectBox (Bootstrap Multiselect)

## Purpose

Recreation of ColorLib **Multiselect V03** — a free custom select dropdown menu
that works for any project and application.

- **Source:** https://colorlib.com/wp/template/multiselect-03/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-03/
- **New name:** selectbox
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Bootstrap Multiselect

## Design tokens

Extracted from live preview DOM and `css/style.css`:

| Token           | Value                                        | Notes                                         |
| --------------- | -------------------------------------------- | --------------------------------------------- |
| font-family     | "Lato", Arial, sans-serif                    | Loaded via Google Fonts (weights 300/400/700) |
| primary/accent  | #3e64ff (blue)                               | Links, active items, bg-primary class         |
| body-color      | gray (#808080)                               | Body text                                     |
| heading-color   | #000                                         | h1–h5                                         |
| background      | #fff                                         | Page background                               |
| border-color    | #e6e6e6                                      | Dropdown borders, menu item separators        |
| font-weight     | 300 (light), 400 (normal), 700 (bold)        | Lato weights                                  |
| font-size       | 16px (body), 28px (heading), 13px (dropdown) | Body, section heading, dropdown items         |
| line-height     | 1.8 (body), 1.5 (headings)                   |                                               |
| border-radius   | default Semantic UI rounded                  | Rounded dropdown corners                      |
| transition      | .3s all ease                                 | Link/dropdown hover transitions               |
| section-padding | 7em 0                                        | ftco-section                                  |
| shadow (active) | 0px 3px 19px -15px rgba(0,0,0,0.41)          | Active dropdown menu shadow                   |

### Visual design notes (from screenshot)

The template shows a clean, minimal single-page layout:

- **White background** with a centered heading "Multiselect #03"
- A **Semantic UI fluid selection dropdown** configured as a multiselect
- The dropdown uses Semantic UI's built-in styles (rounded corners, border, hover state)
- The dropdown items list programming languages (PHP, Javascript, Java, jQuery, SQL, etc.)
- **Blue accent (#3e64ff)** for active/selected items and links
- Very simple layout: one centered column with label + dropdown
- No navbar, no footer, no extra sections — just the form component

## Gherkin requirements

### Scenario: Page renders heading

```gherkin
Given I am on the SelectBox page
Then I should see a heading "SelectBox #03" centered on the page
```

### Scenario: Dropdown label displayed

```gherkin
Given I am on the SelectBox page
Then I should see a label "Select Language" above the dropdown
```

### Scenario: Dropdown renders with options

```gherkin
Given I am on the SelectBox page
When I click the dropdown
Then I should see the following options:
  | option     |
  | All        |
  | PHP        |
  | Javascript |
  | Java       |
  | jQuery     |
  | SQL        |
  | Wordpress  |
  | Python     |
  | .Net       |
  | HTML       |
  | CSS        |
```

### Scenario: Dropdown supports multiselect

```gherkin
Given I am on the SelectBox page
When I select "PHP" from the dropdown
And I select "Javascript" from the dropdown
Then both "PHP" and "Javascript" should appear as selected
```

### Scenario: Dropdown shows selected count

```gherkin
Given I am on the SelectBox page
When I select 3 items from the dropdown
Then the dropdown label area should reflect the selected items
```

### Scenario: Page uses correct design tokens

```gherkin
Given I am on the SelectBox page
Then the body background should be white (#fff)
And the heading color should be black (#000)
And the link/accent color should be #3e64ff
And the font family should include "Lato"
```

### Scenario: Responsive layout

```gherkin
Given I am on the SelectBox page on a mobile device
Then the dropdown should be full-width within its container
And the heading should remain centered
```

### Scenario: Accessibility

```gherkin
Given I am on the SelectBox page
Then the dropdown should have a visible label
And the dropdown should be keyboard navigable
```

## Verification checklist

- [ ] Heading renders with correct text and styling
- [ ] Label "Select Language" is displayed above dropdown
- [ ] Dropdown opens and shows all 11 options
- [ ] Multiselect functionality works (multiple items selectable)
- [ ] Selected items are visually indicated
- [ ] Design tokens match: #3e64ff accent, Lato font, white background
- [ ] Responsive on mobile (full-width dropdown)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] No shared files modified (standalone template)
