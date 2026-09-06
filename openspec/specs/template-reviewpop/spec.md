# Template: Reviewpop (Modal)

## Purpose

Recreation of the ColorLib "Modal V19" template — a split-screen product review
modal with a product image on the left, rating/review details on the right,
star ratings, description, and social action buttons (like, message, add).

- **Source:** [ColorLib Modal 19](https://colorlib.com/wp/template/modal-19/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-19/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-19.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token                    | Value                                        | Notes                                          |
| ------------------------ | -------------------------------------------- | ---------------------------------------------- |
| Body font                | `Roboto`, sans-serif, 300 weight             | Main body text                                 |
| Heading font             | `Roboto`, sans-serif                         | Same family, default weight                    |
| Modal font               | Inherited (no explicit override in `.modal`) | Uses Roboto from body                          |
| Paragraph color (body)   | `#b3b3b3`                                   | Light gray for page body paragraphs            |
| Paragraph color (modal)  | `#777`                                      | Medium gray for modal body paragraphs          |
| Heading color (modal)    | `#000`                                      | Black headings in modal                        |
| Modal background         | `#efefef`                                   | Light gray background                          |
| Modal border-radius      | `7px`                                        | Slightly rounded corners                       |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)`          | Deep, strong shadow                            |
| Modal size               | `modal-lg`                                  | Large modal (wider than standard)              |
| Modal layout             | Flex two-column (50/50)                      | Image left, content right                      |
| Promo image              | `flex: 0 0 50%`                             | Fixed 50% width, cover background              |
| Price badge              | Absolute positioned, white text              | Top-left on image (`top: 20px; left: 20px`)    |
| Heading underline        | 70px centered line below heading             | `::after` pseudo-element, `#ccc` color         |
| Star rating color        | `text-warning` (Bootstrap yellow)            | Filled stars                                   |
| Empty star               | Default (no color class)                     | Unfilled star                                  |
| Social section           | 50% width, centered, flex                    | Like / Message / Add actions                   |
| Like icon color          | `#dc3545` (red)                              | Heart icon                                     |
| Message icon color       | `#007bff` (blue)                             | Chat icon                                      |
| Add icon color           | `#007bff` (blue)                             | Add icon                                       |
| Social text color        | `#b3b3b3`                                   | Light gray for counts                          |
| Share icon               | Absolute top-right, `#ccc`                   | Share button                                   |
| Share hover              | `#000`                                       | Black on hover                                 |
| Button radius            | `4px`                                        | Slightly rounded                               |
| Button border            | None                                         | Borderless buttons                             |
| Button primary padding   | `py-2` (10px top/bottom)                     | Standard padding                               |
| Content text padding     | `p-4 px-5`                                  | Generous horizontal padding                    |
| Description font-size    | `14px`                                       | Small text in modal                            |
| Modal paragraph size     | `18px`                                       | Larger text in modal (override)                |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-19/`):
A full-viewport centered page with "Modal #9" heading and a "Launch modal"
secondary button. Clicking the button opens a large centered modal dialog with:

- Light gray (#efefef) background, 7px border-radius, deep box-shadow
- Two-column flex layout:
  - **Left column (50%):** Product image with background-size cover, price badge
    ("$2000") absolute-positioned top-left in white text
  - **Right column (50%):** Centered content area with:
    - Share icon (absolute top-right, gray)
    - Product title: "Grand Prix 4000" (h3, black, 22px) with decorative underline
    - Star rating: 4 filled yellow stars + 1 empty star
    - Description paragraph in gray (#777)
    - Social action row (50% width, centered):
      - Heart icon (red #dc3545) + "25" count
      - Chat icon (blue #007bff) + "10" count
      - Add icon (blue #007bff) + "55" count
- Product review / showcase modal — builds trust via ratings and social proof

## Requirements

### Requirement: Page layout

The page renders a full-viewport centered container.

#### Scenario: Full viewport centering

```gherkin
Given the page loads
Then the content is vertically and horizontally centered in the viewport
And the container fills the full viewport height (100vh)
```

### Requirement: Page content

The page displays a small heading and a launch button.

#### Scenario: Heading displayed

```gherkin
Given the page has loaded
Then a heading "Modal #9" is visible in the center of the page
And the heading uses h3 styling
```

#### Scenario: Launch button

```gherkin
Given the page has loaded
Then a "Launch modal" button is visible below the heading
And the button uses secondary (gray) styling
```

### Requirement: Modal opening

Clicking the launch button opens the modal dialog.

#### Scenario: Launch modal

```gherkin
Given the page has loaded
When the user clicks the "Launch modal" button
Then a large modal dialog appears centered on the screen
And the modal has a light gray background with rounded corners
And a semi-transparent backdrop covers the page
```

#### Scenario: Modal accessibility

```gherkin
Given the modal is open
Then the modal has role="dialog"
And the modal has aria-labelledby pointing to its title
And focus is trapped within the modal
```

### Requirement: Modal product image

The modal displays a product image on the left side.

#### Scenario: Product image displayed

```gherkin
Given the modal is open
Then a product image is visible on the left half of the modal
And the image uses background-size cover
And the image occupies 50% of the modal width
```

#### Scenario: Price badge

```gherkin
Given the modal is open
Then a price badge "$2000" is visible on the product image
And the badge is positioned at the top-left of the image
And the badge text is white
```

### Requirement: Modal product details

The modal displays product information on the right side.

#### Scenario: Share button

```gherkin
Given the modal is open
Then a share icon is visible at the top-right of the content area
And the icon is gray (#ccc) and turns black on hover
```

#### Scenario: Product title

```gherkin
Given the modal is open
Then the product title "Grand Prix 4000" is visible
And the title is centered with a decorative underline below it
```

#### Scenario: Star rating

```gherkin
Given the modal is open
Then 5 stars are displayed below the title
And 4 stars are filled yellow (text-warning)
And 1 star is empty/unfilled
```

#### Scenario: Description

```gherkin
Given the modal is open
Then a description paragraph is visible below the stars
And the text is gray (#777) at 14px
```

### Requirement: Social actions

The modal displays social engagement buttons.

#### Scenario: Social row layout

```gherkin
Given the modal is open
Then a social action row is visible below the description
And the row is 50% width and centered
```

#### Scenario: Like action

```gherkin
Given the modal is open
Then a heart icon with count "25" is visible on the left of the social row
And the heart icon is red (#dc3545)
```

#### Scenario: Message action

```gherkin
Given the modal is open
Then a chat icon with count "10" is visible in the center of the social row
And the chat icon is blue (#007bff)
```

#### Scenario: Add action

```gherkin
Given the modal is open
Then an add icon with count "55" is visible on the right of the social row
And the add icon is blue (#007bff)
```

### Requirement: Modal closing

The modal can be closed by multiple methods.

#### Scenario: Close via backdrop

```gherkin
Given the modal is open
When the user clicks the backdrop overlay
Then the modal closes
```

#### Scenario: Close via Escape key

```gherkin
Given the modal is open
When the user presses the Escape key
Then the modal closes
```

### Requirement: Modal styling

The modal matches the original design tokens.

#### Scenario: Modal dimensions and shape

```gherkin
Given the modal is open
Then the modal is large size (modal-lg)
And the modal has 7px border-radius
And the modal has a deep box-shadow (0 10px 50px -10px rgba(0,0,0,0.9))
And the modal background is light gray (#efefef)
```

#### Scenario: Typography

```gherkin
Given the modal is open
Then headings are black (#000) at 22px
And paragraphs are gray (#777) at 14px
And modal-level paragraphs are 18px with 1.5 line-height
```

### Requirement: Component Dock footer

Every template's footer must link to Component Dock.

#### Scenario: Footer link

```gherkin
Given the page has loaded
Then the footer contains a link to https://www.componentdock.com/
And the link text mentions "Component Dock"
```

## Verification checklist

- [ ] Page renders centered with heading and launch button
- [ ] Launch button opens large modal with split-screen layout
- [ ] Product image displays on left with price badge
- [ ] Product title "Grand Prix 4000" with decorative underline
- [ ] Star rating shows 4/5 filled stars
- [ ] Description paragraph in gray
- [ ] Social actions (like/message/add) with correct colors and counts
- [ ] Share icon in top-right corner
- [ ] Modal closes on backdrop click and Escape key
- [ ] Design tokens match: #efefef bg, 7px radius, deep shadow, Roboto font
- [ ] Footer links to Component Dock
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] `npm run spec:validate` passes
