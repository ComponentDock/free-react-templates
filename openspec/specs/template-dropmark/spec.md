# Template: Dropmark (Dropdown Component)

## Purpose

Recreation of ColorLib **Dropdown 13** — a Bootstrap filetype dropdown with blue
accent hover animation.
Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-13/
Source page: https://colorlib.com/wp/template/dropdown-13/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Description: A dropdown button ("Filetype" + file-text icon) with a gray background
that turns blue when the menu is open. Menu items show file-type options with
icons (HTML, PDF, AI, Sketch). On hover, a blue left-bar accent slides in and
the item text indents slightly.

## Design Tokens

Extracted from the preview CSS (css/style.css + Bootstrap):

- **Font family (body/headings):** "Roboto", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- **Additional fonts loaded:** Poppins (300/400/500), Source Serif Pro (400/600)
- **Text color (default):** #888
- **Text color (hover):** #000
- **Accent color:** #007bff (Bootstrap primary blue)
- **Button background (default):** #f8f9fa
- **Button background (active/menu open):** #007bff
- **Button text (default):** #888
- **Button text (active):** #fff
- **Button font-size:** 15px, padding 8px 15px
- **Item font-size:** 14px, color #888
- **Item padding:** 10px top/bottom, 15px left (default), 20px left (hover)
- **Item border-bottom:** 1px solid #efefef (except last item)
- **Item hover left-bar:** 6px wide, #007bff, slides in via width transition
- **Menu shadow:** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Menu margin-top (closed):** 0px (opacity 0, visibility hidden)
- **Menu margin-top (open):** 20px (opacity 1, visibility visible)
- **Transition:** 0.3s all ease (links), 0.3s margin/opacity/visibility (menu)
- **Content padding:** 7rem 0
- **Heading font-size:** 20px (h2)
- **Background:** white (default body)

## Gherkin Requirements

### Feature: Dropmark Filetype Dropdown

The dropdown component must recreate the ColorLib Dropdown 13 snippet — a filetype
dropdown with blue accent hover animation.

#### Scenario: Renders the dropdown button
- Given the page loads
- Then a button labeled "Filetype" is visible
- And the button has a file-text icon to the left of the label
- And the button has a gray background (#f8f9fa)

#### Scenario: Dropdown menu is hidden by default
- Given the page loads
- Then the dropdown menu is not visible

#### Scenario: Button changes style when menu opens
- Given the page loads
- When the user clicks the "Filetype" button
- Then the button background changes to blue (#007bff)
- And the button text changes to white (#fff)

#### Scenario: Opens menu with file-type items
- Given the page loads
- When the user clicks the "Filetype" button
- Then the dropdown menu becomes visible
- And the menu contains "Markup HTML" with an HTML icon
- And the menu contains "Photoshop PDF" with a PDF icon
- And the menu contains "Illustrator AI" with an AI icon
- And the menu contains "Sketch" with a Sketch icon

#### Scenario: Menu items have hover animation
- Given the dropdown menu is open
- When the user hovers over a menu item
- Then the item text color changes to black (#000)
- And the item text indents (padding-left increases from 15px to 20px)
- And a blue left-bar (6px, #007bff) appears on the left side

#### Scenario: Menu items separated by borders
- Given the dropdown menu is open
- Then each item (except last) has a bottom border (#efefef)

#### Scenario: Menu animation
- Given the dropdown menu opens
- Then the menu fades in with opacity transition
- And the menu slides down with margin-top transition (0→20px)

#### Scenario: Closes menu and resets button
- Given the dropdown menu is open
- When the user clicks the "Filetype" button again
- Then the dropdown menu becomes hidden
- And the button background returns to #f8f9fa
- And the button text returns to #888

#### Scenario: Closes on outside click
- Given the dropdown menu is open
- When the user clicks outside the dropdown
- Then the dropdown menu becomes hidden
- And the button background returns to #f8f9fa

#### Scenario: Accessibility
- Given the dropdown button renders
- Then the button has aria-haspopup="true"
- And the button has aria-expanded="false" when closed
- And the button has aria-expanded="true" when open

#### Scenario: Footer with Component Dock link
- Given the page renders
- Then a footer is visible
- And the footer contains a link to "https://www.componentdock.com/"

#### Scenario: Heading displays correctly
- Given the page loads
- Then a centered heading "Dropdown #3" is visible

## Verification Checklist

- [ ] Heading "Dropdown #3" centered on page
- [ ] "Filetype" button with file-text icon renders
- [ ] Button has gray background (#f8f9fa) by default
- [ ] Click toggles dropdown open/close
- [ ] Button turns blue (#007bff) with white text when open
- [ ] Menu items: Markup HTML, Photoshop PDF, Illustrator AI, Sketch
- [ ] Items have appropriate icons
- [ ] Hover: text turns black, padding increases, blue left-bar appears
- [ ] Items separated by 1px #efefef borders
- [ ] Menu shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- [ ] Menu animates in (opacity + margin-top)
- [ ] Outside click closes and resets button
- [ ] aria-expanded toggles correctly
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Vitest + Testing Library tests at 100% coverage
