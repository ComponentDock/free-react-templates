# Template: DropVex (Dropdown Navbar)

## Purpose

Recreation of ColorLib "Dropdown V08" — a clean, minimal dropdown navbar
component featuring a split-button hamburger menu with a smooth dropdown
panel.

- **Source:** https://colorlib.com/wp/template/dropdown-08/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-08/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-08.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Navigation / Dropdown Navbar

## Design tokens

| Token | Value | Source |
|-------|-------|--------|
| Font family | "Roboto", Arial, sans-serif | `body` rule in style.css |
| Body background | `#fafafa` | `body` rule |
| Body text color | `gray` | `body` rule |
| Body font-size | `18px` | `body` rule |
| Brand color (blue) | `#4d80e4` | `.btn-group` background, link color, dropdown hover bg |
| Brand dark blue | `#2161dd` | `.btn-group .split` background |
| Brand hover blue | `#3770e1` | `.btn-group .split:hover` |
| Text white | `#fff` | `.btn-group .logo` color, split icon color |
| Text black | `#000` | `h1–h5` color, heading-section color |
| Dropdown bg | `#fff` | `.dropdown-menu` background |
| Dropdown shadow | `0px 10px 34px -20px rgba(0,0,0,0.41)` | `.dropdown-menu` |
| Dropdown item border | `1px solid rgba(0,0,0,0.05)` | `.dropdown-item` |
| Dropdown item hover bg | `#4d80e4` | `.dropdown-item:hover` |
| Border radius (btn-group) | `4px` | `.btn-group` |
| Border radius (split btn) | `0 4px 4px 0` | `.btn-group .split` |
| Section padding | `5em 0` | `.ftco-section` |
| Heading font-size | `28px` | `.heading-section` |
| Ionicons | v4.5.6 via CDN | `<link>` in preview HTML |

## Structure (from preview DOM)

```
<section class="ftco-section">
  <div class="container">
    <div class="row"> heading "Dropdown #08" centered </div>
    <div class="row justify-content-center">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="btn-group ...">
          <p class="heading"><a class="logo">Splash</a></p>
          <a class="split dropdown-toggle ...">
            <span class="icon ion-ios-menu"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item">Home</a>
            <a class="dropdown-item">About</a>
            <a class="dropdown-item">Services</a>
            <a class="dropdown-item">Blog</a>
            <a class="dropdown-item">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

The component is a **split-button dropdown navbar**: left side shows brand
name "Splash", right side is a 60×60 hamburger icon button that toggles
a right-aligned dropdown menu. Each dropdown item has label text on the
left and an arrow icon (`ion-ios-arrow-round-forward`) on the right.

## Fidelity notes

- The original is a single Bootstrap 4 dropdown component — this is NOT a
  full-page template, just a navbar/dropdown widget centered on the page.
- Brand color `#4d80e4` (blue) is the primary accent throughout.
- The hamburger button has a darker blue `#2161dd` background and is
  separated from the brand bar with a vertical split styling.
- Dropdown menu appears below the button group with a white background,
  subtle shadow, and small upward-pointing arrow decoration.
- Dropdown items have subtle bottom borders and fill blue on hover.
- Font is Roboto (weights 400, 500, 700).

## Gherkin requirements

### Scenario: Page loads with centered heading
  Given the user visits the DropVex page
  Then a heading "Dropdown Navbar" is visible centered on the page

### Scenario: Navbar bar visible with brand and hamburger
  Given the user visits the DropVex page
  Then a full-width blue navigation bar is visible in the center
  And the brand name "Splash" is displayed in white uppercase text on the left
  And a hamburger menu icon button is displayed on the right of the bar

### Scenario: Dropdown opens on hamburger click
  Given the user visits the DropVex page
  When the user clicks the hamburger menu button
  Then a dropdown menu appears below the navigation bar
  And the dropdown contains items: Home, About, Services, Blog, Contact

### Scenario: Dropdown items show arrow icons
  Given the dropdown menu is open
  Then each item has label text on the left
  And each item has a right-arrow icon on the right

### Scenario: Dropdown closes on outside click
  Given the dropdown menu is open
  When the user clicks outside the dropdown
  Then the dropdown menu closes

### Scenario: Dropdown item hover styling
  Given the dropdown menu is open
  When the user hovers over a dropdown item
  Then the item background changes to the brand blue color
  And the item text changes to white

### Scenario: Brand name styling
  Given the user visits the DropVex page
  Then the brand name is styled in uppercase white text
  And the brand name links to the homepage

### Scenario: Responsive behavior
  Given the user views on a mobile device
  Then the navigation bar adjusts to full width
  And the dropdown menu displays at minimum width of 15rem

## Verification checklist

- [ ] Heading renders centered on page
- [ ] Blue navigation bar visible with brand name and hamburger
- [ ] Hamburger click toggles dropdown open/closed
- [ ] Dropdown shows 5 items with correct labels
- [ ] Each item has arrow icon on the right
- [ ] Hover state changes item to blue background with white text
- [ ] Dropdown closes on outside click
- [ ] Brand name is uppercase white text
- [ ] Navigation bar border-radius is 4px
- [ ] Dropdown has white background with shadow
- [ ] Font is Roboto
- [ ] Background is #fafafa
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
