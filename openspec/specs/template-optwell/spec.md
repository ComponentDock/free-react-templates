# Template: OptWell (Multiselect 12)

A searchable multiselect dropdown component with live search, tag chips, and US states options.

## Source

- Template: Multiselect 12 (Bootstrap Select2 multiselect with search)
- Accent: coral/pink `#f67280`
- Background: light gray `#efefef`
- Font: Roboto (Google Font)

## Scenarios

### Rendering

```gherkin
Scenario: App renders heading and description
  Given the app is loaded
  Then I see a heading "OptWell"
  And I see a description containing "States separated by comma"

Scenario: App sets document title
  Given the app is loaded
  Then the document title contains "OptWell"

Scenario: Footer renders Component Dock link
  Given the app is loaded
  Then I see a link to "https://www.componentdock.com/" labeled "Component Dock"
```

### Dropdown behavior

```gherkin
Scenario: Dropdown opens on click
  Given the app is loaded
  When I click the dropdown trigger
  Then the dropdown menu is visible
  And all options are listed

Scenario: Dropdown closes on click outside
  Given the dropdown is open
  When I click outside the dropdown
  Then the dropdown menu is not visible

Scenario: Dropdown closes on Escape
  Given the dropdown is open
  When I press Escape
  Then the dropdown menu is not visible
```

### Selection

```gherkin
Scenario: Select an option
  Given the dropdown is open
  When I click option "Alaska"
  Then a tag "Alaska" appears in the selected area

Scenario: Deselect an option
  Given option "Alaska" is selected
  When I click option "Alaska"
  Then the tag "Alaska" is removed

Scenario: Deselect via tag remove button
  Given option "Alaska" is selected
  When I click the remove button on the "Alaska" tag
  Then the tag "Alaska" is removed
```

### Search / Filter

```gherkin
Scenario: Search filters options
  Given the dropdown is open
  When I type "Cal" in the search input
  Then only options matching "Cal" are visible

Scenario: Search clears on selection
  Given the dropdown is open and I typed "Alas"
  When I select option "Alaska"
  Then the search input is cleared
  And all options are visible again

Scenario: No results message
  Given the dropdown is open
  When I type "xyz" in the search input
  Then I see "No results found"
```

### Select all / Clear all

```gherkin
Scenario: Select all
  Given the dropdown is open
  When I click "Select All"
  Then all options are selected
  And tags appear for all options

Scenario: Clear all
  Given all options are selected
  When I click "Clear All"
  Then no options are selected
  And no tags are visible
```

### Keyboard navigation

```gherkin
Scenario: Open with Enter
  Given the dropdown is closed
  When I press Enter on the trigger
  Then the dropdown is open

Scenario: Navigate with ArrowDown
  Given the dropdown is open
  When I press ArrowDown
  Then the focus moves to the next option

Scenario: Select with Space
  Given the dropdown is open and an option is focused
  When I press Space
  Then the focused option is toggled

Scenario: Close with Escape
  Given the dropdown is open
  When I press Escape
  Then the dropdown is closed
```

### Accessibility

```gherkin
Scenario: ARIA attributes on trigger
  Given the app is loaded
  Then the trigger has aria-expanded="false"
  When I click the trigger
  Then the trigger has aria-expanded="true"

Scenario: Listbox has aria-multiselectable
  Given the dropdown is open
  Then the listbox has aria-multiselectable

Scenario: Options have aria-selected
  Given the dropdown is open
  Then each option has an aria-selected attribute
```
