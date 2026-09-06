# Template: Critique (Split-Screen Review Modal)

## Purpose

Recreation of ColorLib **Modal 19** — a modern split-screen product review modal
that builds customer trust via star ratings, social proof counters, and a
prominent product image.

- **Source:** https://colorlib.com/wp/template/modal-19/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-19/
- **Category:** Bootstrap Modal Templates
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the preview page's `css/style.css` and inline styles.

| Token              | Value                            | Notes                                     |
| ------------------ | -------------------------------- | ----------------------------------------- |
| Font family (body) | `"Roboto", sans-serif`           | Google Fonts — weights 300, 400           |
| Heading font       | `"Roboto", sans-serif`           | Same family as body                       |
| Modal bg           | `#efefef`                        | Light gray background                     |
| Modal border-radius| `7px`                            | Rounded corners on the modal shell        |
| Modal shadow       | `0 10px 50px -10px rgba(0,0,0,.9)` | Deep drop shadow                     |
| Body text          | `#b3b3b3`                        | Light gray paragraphs                     |
| Heading text       | `#000`                           | Black product title                       |
| Modal paragraph    | `#777`                           | Slightly darker than body text            |
| Button border-radius | `4px`                          | Standard Bootstrap-ish buttons            |
| Separator line     | `70px wide, 1px, #ccc`           | Underline after product title             |
| Star rating color  | `#ffc107` (Bootstrap warning)    | Filled stars                              |
| Like/heart icon    | `#dc3545`                        | Bootstrap danger red                      |
| Message/add icon   | `#007bff`                        | Bootstrap primary blue                    |
| Social text        | `#b3b3b3`                        | Counter labels                            |
| Share icon         | `#ccc`, hover `#000`             | Top-right corner share icon               |
| Price badge        | White text, absolute top-left    | `$2000` overlay on product image          |

## Section Structure (order preserved from preview)

1. **Trigger Button** — centered on page, launches the modal
2. **Modal Shell** — centered, max-width ~800px (modal-lg), 7px rounded, deep shadow
3. **Split Layout (flex row)**
   - **Left: Product Image** — 50% width, `background-size: cover`, price badge overlay (absolute, top-left, white text)
   - **Right: Content Panel** — 50% width, light gray bg (#efefef), padded
     - Share icon (absolute top-right)
     - Product title (h3, black, 22px, centered, with decorative 70px underline)
     - Star rating row (4/5 stars, yellow)
     - Description paragraph (centered, gray #777, 14px)
     - Social interaction row (like count in red, message count in blue, add count in blue)

## Gherkin Requirements

### Scenario: Page loads with trigger button
- **Given** the user visits the template page
- **When** the page finishes loading
- **Then** a centered "Launch modal" button is visible
- **And** the button has Bootstrap secondary styling (gray bg, white text)

### Scenario: Modal opens on trigger click
- **Given** the trigger button is visible
- **When** the user clicks "Launch modal"
- **Then** a split-screen modal animates into view
- **And** the modal is centered on screen
- **And** the modal has a light gray background (#efefef)
- **And** the modal has rounded corners (7px) and a deep drop shadow

### Scenario: Left panel shows product image with price
- **Given** the modal is open
- **Then** the left 50% of the modal shows a product image
- **And** a price badge ("$2000") appears in the top-left corner of the image
- **And** the price badge has white text

### Scenario: Right panel shows product details
- **Given** the modal is open
- **Then** the right panel shows the product name ("Grand Prix 4000")
- **And** a decorative horizontal line appears below the product name
- **And** a 4-out-of-5 star rating row is visible below the title
- **And** a description paragraph is visible below the stars
- **And** the description text is gray (#777)

### Scenario: Social interaction counters are displayed
- **Given** the modal is open
- **Then** a like counter shows "25" with a red heart icon
- **And** a message counter shows "10" with a blue chat icon
- **And** an add counter shows "55" with a blue plus icon

### Scenario: Share icon is accessible
- **Given** the modal is open
- **Then** a share icon is visible in the top-right corner of the content panel
- **And** the share icon is gray (#ccc) by default
- **And** the share icon turns black (#000) on hover

### Scenario: Modal closes on backdrop click
- **Given** the modal is open
- **When** the user clicks outside the modal
- **Then** the modal fades out and disappears

### Scenario: Modal closes on Escape key
- **Given** the modal is open
- **When** the user presses Escape
- **Then** the modal closes

### Scenario: Responsive layout
- **Given** the modal is open on a narrow viewport (< 768px)
- **Then** the split layout stacks vertically (image on top, content below)

## Verification Checklist

- [ ] Trigger button launches the modal
- [ ] Modal opens centered with correct shadow and border-radius
- [ ] Left panel shows product image at 50% width with price overlay
- [ ] Right panel has correct background color (#efefef)
- [ ] Product title has decorative underline separator
- [ ] Star rating displays 4/5 filled yellow stars
- [ ] Description paragraph uses gray text
- [ ] Social counters show correct numbers and icon colors
- [ ] Share icon position and hover behavior match
- [ ] Modal closes on backdrop click and Escape key
- [ ] Responsive stacking on narrow viewports
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder image
- [ ] Uses Google Fonts (Roboto) via index.html link
- [ ] Uses lucide-react for icons (heart, message-circle, plus, share)
