# Template: Critique (Split-Screen Review Modal)
<!-- prep-status: shipped-as=splitmodal -->
> **SHIPPED-UNDER** — the ColorLib `modal-19` design this prep describes already
> ships as `apps/splitmodal` (<https://splitmodal.free.componentdock.com>).
> Do not scaffold `apps/critique`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-splitmodal/spec.md`.

## Purpose

Recreation of ColorLib "Modal 19" — a modern split-screen product review modal
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

<!-- body-role-tokens: modal-19/body/critique -->
**Body-text role (measured 2026-10-25):** this prep states `#b3b3b3`, which is a real rule that LOSES: both rendered paragraphs are #777777, because .cl-modal .cl-modal-content .cl-modal-body p{color:#777} out-ranks p{color:#b3b3b3}. The prep's second row naming `#777777` is the value that paints. The sibling prep `reviewcard` states the value the render supports.
<!-- /body-role-tokens -->

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

## Requirements

### Feature: Critique template behaviour

#### Scenario: Page loads with trigger button

- **GIVEN** the user visits the template page
- **WHEN** the page finishes loading
- **THEN** a centered "Launch modal" button is visible
- **AND** the button has Bootstrap secondary styling (gray bg, white text)

#### Scenario: Modal opens on trigger click

- **GIVEN** the trigger button is visible
- **WHEN** the user clicks "Launch modal"
- **THEN** a split-screen modal animates into view
- **AND** the modal is centered on screen
- **AND** the modal has a light gray background (#efefef)
- **AND** the modal has rounded corners (7px) and a deep drop shadow

#### Scenario: Left panel shows product image with price

- **GIVEN** the modal is open
- **THEN** the left 50% of the modal shows a product image
- **AND** a price badge ("$2000") appears in the top-left corner of the image
- **AND** the price badge has white text

#### Scenario: Right panel shows product details

- **GIVEN** the modal is open
- **THEN** the right panel shows the product name ("Grand Prix 4000")
- **AND** a decorative horizontal line appears below the product name
- **AND** a 4-out-of-5 star rating row is visible below the title
- **AND** a description paragraph is visible below the stars
- **AND** the description text is gray (#777)

#### Scenario: Social interaction counters are displayed

- **GIVEN** the modal is open
- **THEN** a like counter shows "25" with a red heart icon
- **AND** a message counter shows "10" with a blue chat icon
- **AND** an add counter shows "55" with a blue plus icon

#### Scenario: Share icon is accessible

- **GIVEN** the modal is open
- **THEN** a share icon is visible in the top-right corner of the content panel
- **AND** the share icon is gray (#ccc) by default
- **AND** the share icon turns black (#000) on hover

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks outside the modal
- **THEN** the modal fades out and disappears

#### Scenario: Modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** the user presses Escape
- **THEN** the modal closes

#### Scenario: Responsive layout

- **GIVEN** the modal is open on a narrow viewport (< 768px)
- **THEN** the split layout stacks vertically (image on top, content below)

## Verification checklist

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
