# Template: DropShelf (Bootstrap Dropdowns)

## Purpose

Recreation of ColorLib **Dropdown 11** as a React component.

- **Source:** https://colorlib.com/wp/template/dropdown-11/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-11/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-11.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Bootstrap Dropdowns (component snippet, not a full-page template)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token              | Value                         | Source                              |
| ------------------ | ----------------------------- | ----------------------------------- |
| Font (body)        | `"Roboto", sans-serif`        | `body { font-family }`              |
| Font (headings)    | `"Roboto", sans-serif`        | `h1-h6 { font-family }`            |
| Font (secondary)   | `"Poppins"`                   | Loaded via Google Fonts in preview  |
| Text color         | `#888`                        | `.dropdown-link`, `.dropdown-item`  |
| Paragraph color    | `#b3b3b3`                     | `p { color }`                       |
| Border color       | `#efefef`                     | `.btn-custom { border }`, link hover|
| Hover background   | `#f8f9fa`                     | `.show .dropdown-link`              |
| Menu shadow        | `0 15px 30px 0 rgba(0,0,0,.2)`| `.dropdown-menu { box-shadow }`     |
| Active inset shadow| `inset 0 2px 2px 0 rgba(0,0,0,.2)` | `.show .dropdown-link`        |
| Border radius      | `4px`                         | `.dropdown-link { border-radius }`  |
| Transition         | `0.3s ease`                   | `.dropdown-link`, `.dropdown-menu`  |

## Structure (from live preview DOM)

```
<body>
  <div class="content">
    <div class="container">
      <h2>Dropdown #1</h2>            ← centered heading
    </div>
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-5">
          <div class="custom-dropdown">
            <a class="dropdown-link">  ← trigger with cog icon + "Privacy Settings"
              <span class="icon-cog mr-2"></span>Privacy Settings
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item">Account</a>
              <a class="dropdown-item">Privacy & Security</a>
              <a class="dropdown-item">Password</a>
              <a class="dropdown-item">Notification</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
```

## Gherkin Requirements

### Scenario: Page renders with heading

```gherkin
Given the user opens the DropShelf page
Then a centered heading "Dropdown #1" is visible
```

### Scenario: Dropdown trigger displays with icon and label

```gherkin
Given the user opens the DropShelf page
Then a dropdown trigger with a cog icon and text "Privacy Settings" is visible
```

### Scenario: Dropdown opens on click

```gherkin
Given the user opens the DropShelf page
When the user clicks the "Privacy Settings" dropdown trigger
Then a dropdown menu appears below the trigger
And the menu contains items: "Account", "Privacy & Security", "Password", "Notification"
```

### Scenario: Dropdown closes when clicking outside

```gherkin
Given the dropdown menu is open
When the user clicks outside the dropdown
Then the dropdown menu closes
```

### Scenario: Dropdown items are clickable

```gherkin
Given the dropdown menu is open
When the user clicks the "Account" item
Then the dropdown menu closes
```

### Scenario: Visual styling matches reference

```gherkin
Given the user opens the DropShelf page
Then the page background is white
And the heading uses Roboto font
And the dropdown trigger has a 4px border radius
And the dropdown trigger text is color #888
And the dropdown menu has a box shadow of 0 15px 30px 0 rgba(0,0,0,0.2)
And the dropdown items are color #888
```

### Scenario: Hover state on trigger

```gherkin
Given the user opens the DropShelf page
When the user hovers over the dropdown trigger
Then the trigger shows a light border (#efefef)
And the trigger shows a subtle box shadow
```

### Scenario: Hover state on menu items

```gherkin
Given the dropdown menu is open
When the user hovers over a menu item
Then the item text changes to black
```

## Verification Checklist

- [ ] Heading centered on page
- [ ] Dropdown trigger shows cog icon + "Privacy Settings" label
- [ ] Click opens menu with 4 items: Account, Privacy & Security, Password, Notification
- [ ] Menu has box shadow (0 15px 30px 0 rgba(0,0,0,0.2))
- [ ] Menu items use 14px font size, color #888
- [ ] Trigger uses 4px border radius
- [ ] Trigger hover shows border #efefef + subtle shadow
- [ ] Menu item hover changes text to black
- [ ] Clicking outside closes the dropdown
- [ ] Transition is 0.3s ease
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
