# Template: Tagmint (Multi-Select Form Component)

## Purpose

Recreation of the ColorLib **Multiselect 20** template as a React single-page
application.

- **Source slug:** `multiselect-20`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/
- **Source page:** https://colorlib.com/wp/template/multiselect-20/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Form / Multi-Select UI Components

### What this template is

A centered page showcasing three color-variant multi-select dropdown components
built with the Chosen jQuery plugin. The page demonstrates how to style tag
chips (selected items) with different color palettes on a neutral gray
background. This is a **UI component showcase**, not a full landing page.

### Design overview (from screenshot + preview DOM)

The page is a simple, centered layout on a light gray (#efefef) background:

1. **Heading** — "Multi-Select #10 (Limit to 5)" centered at the top
2. **Three stacked sections**, each containing:
   - A multi-select dropdown (`col-md-5`, centered via `justify-content-center`)
   - Each uses the Chosen plugin to render a tag/chip-based multi-select
   - Category options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
   - Placeholder text: "Select Categories"
3. Each section has a distinct tag color palette:
   - Section 1 (color-1): warm cream/beige tags (#e5e4cc)
   - Section 2 (color-2): soft mint green tags (#c7f0db)
   - Section 3 (color-3): light sky blue tags (#d3f4ff)

No navbar, no footer, no hero — purely a centered component demo page.

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and inline font-face
declarations.

### Colors

| Token             | Value             | Usage                             |
| ----------------- | ----------------- | --------------------------------- |
| `bg-page`         | `#efefef`         | Page background (light gray)      |
| `text-body`       | `#b3b3b3`         | Paragraph text (medium gray)      |
| `text-heading`    | default (black)   | Heading text color                |
| `tag-cream`       | `#e5e4cc`         | Section 1 selected tag chips      |
| `tag-mint`        | `#c7f0db`         | Section 2 selected tag chips      |
| `tag-sky`         | `#d3f4ff`         | Section 3 selected tag chips      |
| `shadow-soft`     | `rgba(0,0,0,0.1)` | Tag chip shadow (1px 4px 0)       |
| `shadow-dropdown` | `rgba(0,0,0,0.2)` | Dropdown panel shadow (15px 30px) |
| `dropdown-bg`     | white (default)   | Dropdown background               |

### Typography

| Token           | Value                                     | Usage                      |
| --------------- | ----------------------------------------- | -------------------------- |
| `font-body`     | `"Roboto", sans-serif`                    | Body + headings            |
| `font-head`     | `"Roboto", sans-serif`                    | Headings                   |
| `font-size`     | `20px` (h2)                               | Page heading               |
| `font-weight`   | `300` (body paragraphs), `400` (headings) | Body text is light weight  |
| `font-size-tag` | `14px`                                    | Search field input in tags |

Note: The preview also loads Poppins (weights 300/400/500) and Source Serif
Pro (weights 400/600) via font-face but they are not directly referenced in
the main stylesheet. Implement with Roboto only (via Google Fonts link).

### Layout

| Token             | Value                                | Usage                              |
| ----------------- | ------------------------------------ | ---------------------------------- |
| `content-padding` | `7rem 0`                             | Vertical padding on content area   |
| `row-max-width`   | `col-md-5`                           | Select containers (Bootstrap grid) |
| `border-radius`   | `4px`                                | Tag chips and dropdown             |
| `tag-padding`     | `7px` (choices), `10px 26px` (chips) | Tag chip internal spacing          |
| `input-height`    | `32px`                               | Search input in dropdown           |

### Interaction

- Multi-select dropdown powered by Chosen jQuery plugin
- `data-placeholder="Select Categories"`
- Tags appear as colored chips with an "x" close button
- Dropdown has `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`
- Limit mentioned in heading: "Limit to 5" selections

## Gherkin requirements

### Scenario: Page renders with heading and three multi-select sections

```gherkin
Given the user navigates to the Tagmint page
Then a centered heading "Multi-Select #10 (Limit to 5)" is visible
And three multi-select sections are displayed vertically stacked
And each section is centered horizontally on the page
```

### Scenario: Section 1 displays cream-colored tag chips

```gherkin
Given the user is on the Tagmint page
When the user clicks the first multi-select dropdown
And selects "Design" and "HTML5" from the options
Then two tag chips appear in the first section
And the tag chips have a cream/beige background color (#e5e4cc)
And each tag chip has a close "x" button
```

### Scenario: Section 2 displays mint-colored tag chips

```gherkin
Given the user is on the Tagmint page
When the user clicks the second multi-select dropdown
And selects "CSS3" and "jQuery" from the options
Then two tag chips appear in the second section
And the tag chips have a mint green background color (#c7f0db)
And each tag chip has a close "x" button
```

### Scenario: Section 3 displays sky-blue tag chips

```gherkin
Given the user is on the Tagmint page
When the user clicks the third multi-select dropdown
And selects "Bootstrap" and "WordPress" from the options
Then two tag chips appear in the third section
And the tag chips have a light sky blue background color (#d3f4ff)
And each tag chip has a close "x" button
```

### Scenario: Placeholder text displays when no items selected

```gherkin
Given the user is on the Tagmint page
And no items are selected in any dropdown
Then each dropdown shows the placeholder "Select Categories"
```

### Scenario: Multiple items can be selected

```gherkin
Given the user is on the Tagmint page
When the user clicks the first dropdown
And selects "Design", "HTML5", "CSS3", "jQuery", and "BS4"
Then five tag chips appear in the first section
And all five chips are visible with close buttons
```

### Scenario: Items can be deselected via tag close button

```gherkin
Given the user has selected "Design" in the first dropdown
When the user clicks the "x" button on the "Design" tag chip
Then the "Design" tag chip is removed from the first section
And the dropdown placeholder reappears if no items remain
```

### Scenario: Page background and typography

```gherkin
Given the user navigates to the Tagmint page
Then the page background is light gray (#efefef)
And the heading uses Roboto font at 20px
And paragraph text is medium gray (#b3b3b3) with light weight (300)
```

### Scenario: Accessibility

```gherkin
Given the user is on the Tagmint page
Then each dropdown has a label or aria-label
And the heading is an h2 element
And keyboard navigation is functional for selecting and deselecting items
```

## Verification checklist

- [ ] Page renders with centered heading "Multi-Select #10 (Limit to 5)"
- [ ] Three multi-select sections displayed vertically, centered
- [ ] Section 1: cream tag chips (#e5e4cc) on selection
- [ ] Section 2: mint tag chips (#c7f0db) on selection
- [ ] Section 3: sky-blue tag chips (#d3f4ff) on selection
- [ ] Placeholder "Select Categories" when nothing selected
- [ ] Multiple items selectable as tag chips with close buttons
- [ ] Items deselectable via chip close button
- [ ] Page background #efefef
- [ ] Roboto font family, 20px heading, light body text
- [ ] Box shadows on tag chips (1px 4px 0 rgba(0,0,0,0.1))
- [ ] Dropdown shadow (15px 30px 0 rgba(0,0,0,0.2))
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Builds and deploys successfully

## Replication notes

- **Preview reachable:** Yes, at `https://preview.colorlib.com/theme/bootstrap/multiselect-20/`
- **CSS fetched:** Yes, `css/style.css` from the preview
- **Screenshot analyzed:** Yes, ColorLib template page loaded via curl
- **Chosen plugin:** The original uses jQuery + Chosen. In React, replace with
  a native React multi-select component (e.g., `react-select` or a custom
  implementation) that renders tag chips with the same visual style.
- **Three color variants:** Implement as a reusable component with a `variant`
  prop (`cream` | `mint` | `sky`) mapped to the three background colors.
- **Layout:** Simple centered page, no navigation, no footer in original.
  Add the Component Dock footer per conventions.
- **Bootstrap grid:** The original uses Bootstrap's `col-md-5` centering.
  Replace with Tailwind's `max-w-md mx-auto` or similar.
