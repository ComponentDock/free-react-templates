# Template: Dropcall (Dropdown Component)

## Purpose

Recreation of ColorLib **Dropdown 12** — a wide two-column Bootstrap dropdown
snippet with icon-labeled items.
Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-12/
Source page: https://colorlib.com/wp/template/dropdown-12/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Description: A dropdown button ("Privacy Settings" + cog icon) that opens a wide
two-column menu. Each column contains two items, each with a purple icon, bold
title, and description paragraph. The menu is horizontally centered under the
button and animates in with opacity + margin transition.

## Design Tokens

Extracted from the preview CSS (css/style.css + Bootstrap):

- **Font family (body/headings):** "Roboto", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
- **Additional fonts loaded:** Poppins (300/400/500), Source Serif Pro (400/600)
- **Text color (default):** #888
- **Text color (hover/active button):** #000
- **Paragraph color:** #b3b3b3, font-weight 300
- **Icon color:** #c3a1fa (light purple)
- **Item title color:** #000, font-size 16px, letter-spacing .05rem
- **Item description color:** #b3b3b3, font-size 14px
- **Item border-bottom:** 1px solid #efefef (between items in a column)
- **Column padding:** 20px
- **Column width:** 50% (two equal columns)
- **Menu min-width:** 700px
- **Menu centering:** left 50% + translateX(-50%)
- **Menu shadow:** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Menu margin-top (closed):** 40px (opacity 0, visibility hidden)
- **Menu margin-top (open):** 50px (opacity 1, visibility visible)
- **Transition:** 0.3s all ease
- **Content padding:** 7rem 0
- **Heading font-size:** 20px (h2)
- **Dropdown link:** color #888, font-size 14px, padding 4px 7px
- **Background:** white (default body)

## Gherkin Requirements

### Feature: Dropcall Two-Column Dropdown

The dropdown component must recreate the ColorLib Dropdown 12 snippet — a wide
two-column dropdown with icon-labeled items.

#### Scenario: Renders the dropdown button
- Given the page loads
- Then a button labeled "Privacy Settings" is visible
- And the button has a cog icon to the left of the label

#### Scenario: Dropdown menu is hidden by default
- Given the page loads
- Then the dropdown menu is not visible

#### Scenario: Opens wide two-column menu on click
- Given the page loads
- When the user clicks the "Privacy Settings" button
- Then the dropdown menu becomes visible
- And the menu has two columns side by side

#### Scenario: Menu contains correct items
- Given the dropdown menu is open
- Then column 1 contains "Settings" with a cog icon and description
- And column 1 contains "Account" with a person icon and description
- And column 2 contains "Settings" with a cog icon and description
- And column 2 contains "Notification" with a person icon and description

#### Scenario: Items have purple icons
- Given the dropdown menu is open
- Then all menu item icons are colored #c3a1fa (light purple)

#### Scenario: Items have descriptions
- Given the dropdown menu is open
- Then each menu item shows a title (bold, 16px, black)
- And each menu item shows a description paragraph (14px, #b3b3b3)

#### Scenario: Items separated by borders
- Given the dropdown menu is open
- Then each item in a column has a bottom border (#efefef)
- And the last item in each column has no bottom border

#### Scenario: Menu is horizontally centered
- Given the dropdown menu opens
- Then the menu is centered horizontally under the button

#### Scenario: Menu animation
- Given the dropdown menu opens
- Then the menu fades in with opacity transition (0.3s)
- And the menu slides down with margin-top transition (40px → 50px)

#### Scenario: Closes menu on second click
- Given the dropdown menu is open
- When the user clicks the "Privacy Settings" button again
- Then the dropdown menu becomes hidden

#### Scenario: Closes on outside click
- Given the dropdown menu is open
- When the user clicks outside the dropdown
- Then the dropdown menu becomes hidden

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
- Then a centered heading "Dropdown #2" is visible

## Verification Checklist

- [ ] Heading "Dropdown #2" centered on page
- [ ] "Privacy Settings" button with cog icon renders
- [ ] Click toggles dropdown open/close
- [ ] Menu is wide (min-width 700px) with two columns
- [ ] Column 1: Settings (cog), Account (person) with descriptions
- [ ] Column 2: Settings (cog), Notification (person) with descriptions
- [ ] Icons colored #c3a1fa
- [ ] Item titles: 16px, bold, #000, letter-spacing .05rem
- [ ] Item descriptions: 14px, #b3b3b3
- [ ] Items separated by 1px #efefef borders
- [ ] Menu centered with translateX(-50%)
- [ ] Menu shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- [ ] Menu animates in (opacity + margin-top)
- [ ] Outside click closes dropdown
- [ ] aria-expanded toggles correctly
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Vitest + Testing Library tests at 100% coverage
