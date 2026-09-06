# Template: Catnav (Dropdown Navigation Snippet)

## Purpose

Recreation of ColorLib's "Dropdown 20" — a free category and sub-category
dropdown navigation snippet. This is a small, focused UI component template
(a single dropdown menu with grouped items), not a full-page website template.

- **Source:** [ColorLib Dropdown 20](https://colorlib.com/wp/template/dropdown-20/)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/dropdown-20/
- **New name:** `catnav` (category navigation)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| **Font family** | `"Roboto", sans-serif` | Weights: 300 (body), 400, 700 |
| **Body background** | `#efefef` | Light gray page background |
| **Text color (paragraphs)** | `#b3b3b3` | Medium gray |
| **Headings font** | Same Roboto stack | No separate heading font |
| **Link / text color** | `#000` | Black |
| **Dropdown menu background** | `#fff` | White |
| **Dropdown menu shadow** | `0 15px 30px 0 rgba(0,0,0,0.2)` | Deep drop shadow |
| **Menu heading color** | `#b3b3b3` | Same as paragraph gray |
| **Menu heading size** | `14px` | Small caps section headers |
| **Dropdown item font size** | `14px` | Consistent with headings |
| **Dropdown item padding** | `8px 20px` | Horizontal emphasis |
| **Hover background** | `#f8f9fa` | Very light gray on hover |
| **Badge background** | `#fd7e14` | Orange accent (Bootstrap orange) |
| **Badge text** | `#fff` | White on orange |
| **Badge border-radius** | `4px` | Slightly rounded badge |
| **HR color** | `1px solid #e9ecef` | Subtle divider between sections |
| **Dropdown border-radius** | `0` | Sharp/square corners on menu |
| **Content vertical padding** | `7rem 0` | Generous vertical spacing |
| **Arrow rotation** | `rotate(-180deg)` on `.show` | Arrow flips when menu opens |
| **Transition** | `.3s all ease` | Smooth open/close animation |

### Visual Design Notes

- Clean, minimal dropdown with a white card appearance on light gray background
- Two section groups ("Help & Feedback" and "About") separated by a thin HR
- Each dropdown item has a leading icon (Material Design style via icomoon)
- The "Help center" item has an orange notification badge ("3") on the right
- Arrow icon rotates 180 degrees when dropdown opens
- Menu slides down with opacity + margin-top transition (0 → -10px → 0)
- Square corners throughout (border-radius: 0)
- The overall feel is a clean, professional, Bootstrap-style navigation component

## Requirements (Gherkin)

### Scenario: Renders the dropdown toggle
```gherkin
Given the Catnav component is rendered
When I look at the page
Then I see a "Menu" toggle button with a down-arrow icon
And the toggle is centered on the page
```

### Scenario: Dropdown menu is hidden by default
```gherkin
Given the Catnav component is rendered
When I look at the page
Then the dropdown menu is not visible
```

### Scenario: Opening the dropdown menu
```gherkin
Given the Catnav component is rendered
When I click the "Menu" toggle
Then the dropdown menu becomes visible
And the arrow icon rotates 180 degrees
And the menu slides down with a fade-in animation
```

### Scenario: Closing the dropdown menu
```gherkin
Given the dropdown menu is open
When I click the "Menu" toggle again
Then the dropdown menu becomes hidden
And the arrow icon returns to its original position
```

### Scenario: Dropdown menu contains two section groups
```gherkin
Given the dropdown menu is open
Then I see a "Help & Feedback" section heading
And I see an "About" section heading
And the two sections are separated by a horizontal rule
```

### Scenario: Help & Feedback section items
```gherkin
Given the dropdown menu is open
Then the "Help & Feedback" section contains:
  | Item              | Icon           | Badge |
  | Getting started   | dashboard      | none  |
  | Help center       | mail_outline   | 3     |
  | Contact us        | people         | none  |
```

### Scenario: About section items
```gherkin
Given the dropdown menu is open
Then the "About" section contains:
  | Item              | Icon                 |
  | Blog              | comment              |
  | Privacy           | lock_outline         |
  | Security          | security             |
  | Terms of service  | featured_play_list   |
```

### Scenario: Hover effect on dropdown items
```gherkin
Given the dropdown menu is open
When I hover over a dropdown item
Then the item background changes to #f8f9fa
And the text color remains #000
```

### Scenario: Badge styling
```gherkin
Given the dropdown menu is open
Then the "Help center" badge shows "3"
And the badge has an orange (#fd7e14) background
And the badge text is white (#fff)
And the badge is right-aligned within the item
And the badge has a 4px border-radius
```

### Scenario: Accessibility
```gherkin
Given the Catnav component is rendered
Then the toggle has aria-haspopup="true"
And the toggle has aria-expanded (true when open, false when closed)
And the dropdown menu has aria-labelledby referencing the toggle
```

### Scenario: Responsive layout
```gherkin
Given the Catnav component is rendered on a mobile device
Then the dropdown menu is still centered
And the menu items are still readable at 14px
And the padding remains 8px 20px
```

## Verification Checklist

- [ ] Dropdown toggle renders with "Menu" text and arrow icon
- [ ] Menu hidden by default (opacity: 0, visibility: hidden)
- [ ] Clicking toggle opens menu with slide-down + fade animation
- [ ] Arrow rotates 180 degrees when open
- [ ] Two sections: "Help & Feedback" and "About"
- [ ] HR divider between sections
- [ ] Each item has a Material-style leading icon
- [ ] "Help center" has orange badge with "3"
- [ ] Hover background is #f8f9fa
- [ ] All text uses Roboto font
- [ ] Sharp corners (border-radius: 0) on dropdown
- [ ] Shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- [ ] aria-haspopup and aria-expanded on toggle
- [ ] aria-labelledby on dropdown menu
- [ ] Component is centered on page with 7rem vertical padding
