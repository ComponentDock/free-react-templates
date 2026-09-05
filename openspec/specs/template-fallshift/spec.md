# Template: Fallshift (Dropdown Component)

## Purpose

Recreation of ColorLib **Dropdown 11** — a Bootstrap dropdown button snippet.
Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-11/
Source page: https://colorlib.com/wp/template/dropdown-11/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Description: A simple dropdown button snippet showing "Privacy Settings" with a cog
icon. When clicked, the dropdown menu reveals Account, Privacy & Security, Password,
and Notification links. The component demonstrates animated dropdown reveal with
opacity and margin transitions.

## Design Tokens

Extracted from the preview CSS (css/style.css + Bootstrap):

- **Font family (body):** "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- **Font family (headings):** same as body (Roboto)
- **Additional fonts loaded:** Poppins (300/400/500), Source Serif Pro (400/600)
- **Text color:** #888 (default), #000 (hover)
- **Paragraph color:** #b3b3b3, font-weight 300
- **Link/button color:** #888, font-size 14px
- **Active background:** #f8f9fa
- **Border color:** #efefef (hover border), transparent (default)
- **Border radius:** 4px (on dropdown-link)
- **Padding:** 4px 7px (on dropdown-link)
- **Shadow (menu):** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Shadow (active button):** inset 0 2px 2px 0 rgba(0, 0, 0, 0.2)
- **Shadow (hover):** 0 1px 5px 0 rgba(0, 0, 0, 0.05)
- **Transition:** 0.3s all ease (links), margin-top 0.3s ease + opacity 0.3s ease (menu)
- **Menu spacing:** margin-top 10px when open, 0 when closed
- **Section padding:** 7rem 0 (content area)
- **Heading font-size:** 20px (h2)
- **Background:** white (default body)
- **Page title:** centered, font-size 20px

## Gherkin Requirements

### Feature: Fallshift Dropdown Component

The dropdown component must faithfully recreate the ColorLib Dropdown 11 snippet
as a React component using Tailwind CSS.

#### Scenario: Renders the dropdown button
- Given the page loads
- Then a button labeled "Privacy Settings" is visible
- And the button has a cog icon to the left of the label

#### Scenario: Dropdown menu is hidden by default
- Given the page loads
- Then the dropdown menu is not visible

#### Scenario: Opens dropdown menu on click
- Given the page loads
- When the user clicks the "Privacy Settings" button
- Then the dropdown menu becomes visible
- And the menu contains "Account"
- And the menu contains "Privacy & Security"
- And the menu contains "Password"
- And the menu contains "Notification"

#### Scenario: Closes dropdown menu on second click
- Given the dropdown menu is open
- When the user clicks the "Privacy Settings" button again
- Then the dropdown menu becomes hidden

#### Scenario: Closes dropdown on outside click
- Given the dropdown menu is open
- When the user clicks outside the dropdown
- Then the dropdown menu becomes hidden

#### Scenario: Dropdown item hover styling
- Given the dropdown menu is open
- When the user hovers over a dropdown item
- Then the item text color changes to dark/black

#### Scenario: Active button styling
- Given the dropdown menu is open
- Then the button has a light background (#f8f9fa)
- And the button has an inset shadow

#### Scenario: Dropdown menu animation
- Given the dropdown menu opens
- Then the menu fades in with opacity transition
- And the menu slides down with margin transition

#### Scenario: Accessibility — aria attributes
- Given the dropdown button renders
- Then the button has aria-haspopup="true"
- And the button has aria-expanded="false" when closed
- And the button has aria-expanded="true" when open
- And the menu has role="menu" or uses Bootstrap's aria pattern

#### Scenario: Footer with Component Dock link
- Given the page renders
- Then a footer is visible
- And the footer contains a link to "https://www.componentdock.com/"
- And the link text includes "Component Dock"

#### Scenario: Heading displays correctly
- Given the page loads
- Then a centered heading "Dropdown #1" is visible

## Verification Checklist

- [ ] Heading "Dropdown #1" centered on page
- [ ] "Privacy Settings" button with cog icon renders
- [ ] Click toggles dropdown open/close
- [ ] Menu items: Account, Privacy & Security, Password, Notification
- [ ] Menu items have hover color change to #000
- [ ] Active button shows #f8f9fa background + inset shadow
- [ ] Menu has box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- [ ] Menu animates in with opacity + margin-top transition
- [ ] Outside click closes dropdown
- [ ] aria-expanded toggles correctly
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Vitest + Testing Library tests at 100% coverage
