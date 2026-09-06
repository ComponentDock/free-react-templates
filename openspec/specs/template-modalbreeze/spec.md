# Template: ModalBreeze (Modal)

## Purpose

Recreation of ColorLib **Modal V18** — a free Bootstrap modal popup template
featuring a centered promotional modal with SVG illustration, heading, copy,
and dual-action buttons.

- **Source slug:** `modal-18`
- **ColorLib page:** https://colorlib.com/wp/template/modal-18/
- **Live preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-18/
  (note: the non-`/bootstrap/` variant returns 404; the actual preview lives
  under the `/bootstrap/` path)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (from preview CSS + HTML)

| Token              | Value                                        | Source                                 |
| ------------------ | -------------------------------------------- | -------------------------------------- |
| Body font family   | `"Roboto", sans-serif`                       | `style.css` body rule                  |
| Modal font family  | `"Poppins", sans-serif`                      | `.modal { font-family: "Poppins" }`    |
| Modal heading font | Roboto, weight 900, 22px, color `#000`       | `.modal h3`                            |
| Body text color    | `#777`                                       | `.modal p`                             |
| Paragraph weight   | 300 (light)                                  | `p { font-weight: 300 }`              |
| Modal background   | `#fff`                                       | `.modal-body { background-color: #fff }` |
| Illustration bg    | `#b2fcff` (light cyan-blue)                  | inline `style` on `<img>`             |
| Modal border-radius| `7px`                                         | `.modal { border-radius: 7px }`        |
| Button border-radius| `4px`                                        | `.btn { border-radius: 4px }`          |
| Modal shadow       | `0 10px 50px -10px rgba(0,0,0,0.9)`         | `.modal-body` box-shadow               |
| Button styles      | `btn-primary` solid fill, no border; `btn-link` text-only dismiss | Bootstrap classes |
| Button padding     | Primary: `px-4 py-10` (10px top/bottom)     | `.btn-primary { padding-top: 10px }`   |

## Gherkin requirements

### Feature: ModalBreeze — centered promotional modal popup

#### Scenario: Default state — modal is hidden

Given the page loads
When I view the initial render
Then a centered "Launch modal" button is visible
And no modal dialog is visible

#### Scenario: Launch modal

Given the page loads
When I click the "Launch modal" button
Then a centered modal dialog appears
And the modal contains an illustration image with a light cyan-blue (#b2fcff) background
And the modal displays a heading "Introducing Work from Anywhere"
And the modal displays a descriptive paragraph
And a "Get the app" primary button is visible
And a "No thanks" dismiss link is visible

#### Scenario: Dismiss modal via close link

Given the modal is open
When I click the "No thanks" link
Then the modal closes
And the page returns to its initial state

#### Scenario: Dismiss modal via backdrop click

Given the modal is open
When I click the modal backdrop (outside the dialog)
Then the modal closes

#### Scenario: Dismiss modal via Escape key

Given the modal is open
When I press the Escape key
Then the modal closes

#### Scenario: Accessibility — modal ARIA

Given the modal is open
Then the modal dialog has `role="dialog"`
And the modal dialog has `aria-labelledby` pointing to the heading
And the heading has an `id` matching `aria-labelledby`

#### Scenario: Footer attribution

Given the page loads
Then a footer link points to `https://www.componentdock.com/`
And the footer text mentions "Component Dock"

## Verification checklist

- [ ] Modal hidden on initial load
- [ ] Launch button opens centered modal
- [ ] Modal contains illustration area with #b2fcff background
- [ ] Heading text matches source
- [ ] Body text styled with Roboto, weight 300, #777 color
- [ ] "No thanks" dismiss works
- [ ] Backdrop click dismisses modal
- [ ] Escape key dismisses modal
- [ ] Modal has `role="dialog"` and `aria-labelledby`
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] New name (modalbreeze) used throughout; source name (modal-18) only in spec
- [ ] 100% test coverage
