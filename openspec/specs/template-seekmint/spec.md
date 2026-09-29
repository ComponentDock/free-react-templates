# Template: Seekmint (Search Form)

## Purpose

Recreation of ColorLib **Search Form Bar 04** (slug: `search-form-bar-04`).
Preview: https://preview.colorlib.com/theme/search-form-bar-04/ (unreachable at time of prep — falls back to screenshot)
Source page: https://colorlib.com/wp/template/search-form-bar-04/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-04.jpg

A single-page search form showcase: full-viewport gradient hero with a
centered heading and a single pill-shaped search input with an embedded
circular search button. Minimal design — one section, one form.

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from the screenshot (preview unreachable, no CSS available — values estimated from visual).

| Token | Value | Source |
|---|---|---|
| **Font family** | `"Poppins", sans-serif` (estimated) | Screenshot — clean sans-serif heading |
| **Font weight (heading)** | 600 (semi-bold) | Screenshot — bold white title |
| **Background gradient** | `linear-gradient(135deg, #4a3af5 0%, #c850c0 100%)` | Screenshot — blue-purple to pink-purple diagonal |
| **Heading color** | `#ffffff` | Screenshot — white text on gradient |
| **Heading size** | `2.5rem / 40px` (estimated) | Screenshot — large centered title |
| **Search input background** | `#ffffff` | Screenshot — solid white pill |
| **Search input height** | `56px` (estimated) | Screenshot — proportional to viewport |
| **Search input border-radius** | `30px` (pill) | Screenshot — fully rounded ends |
| **Search input padding** | `16px 64px 16px 24px` | Screenshot — left padding for text, right space for button |
| **Search input font** | `16px Poppins, sans-serif` | Screenshot — clean sans-serif placeholder |
| **Search input placeholder color** | `#999999` | Screenshot — light gray "Search..." |
| **Search button size** | `48px × 48px` (circular) | Screenshot — round button inside input right edge |
| **Search button background** | `#7c3aed` (purple) | Screenshot — solid purple circle |
| **Search button icon** | `#ffffff` magnifying glass, 20×20 | Screenshot — white icon |
| **Search button hover** | `#6d28d9` (darker purple) | Estimated standard hover pattern |
| **Page layout** | Full viewport (100vh), flex center | Screenshot — content centered vertically + horizontally |
| **Content spacing** | `24px` between heading and input | Screenshot — gap estimate |
| **Shadow on input** | `0 4px 20px rgba(0,0,0,0.1)` (estimated) | Screenshot — slight depth |

## Gherkin Requirements

### R1: Page Layout

**Scenario: Full-viewport gradient hero**
- Given a user visits the Seekmint page
- Then a full-viewport gradient background is displayed
- And the gradient transitions from blue-purple (#4a3af5) on the left to pink-purple (#c850c0) on the right
- And the content (heading + search form) is centered vertically and horizontally

### R2: Heading

**Scenario: Title displayed above search form**
- Given the page loads
- Then a heading "Search Form/Bar #04" (or equivalent) is displayed
- And the heading is white (#ffffff) and semi-bold
- And the heading is centered horizontally
- And 24px of spacing separates the heading from the search form below

### R3: Search Input

**Scenario: Default state**
- Given the page loads
- Then a white pill-shaped search input is displayed
- And the input has rounded ends (border-radius ~30px)
- And a "Search..." placeholder is shown in light gray (#999)
- And the input is centered horizontally on the page

**Scenario: User types into the search input**
- Given the search input is visible
- When the user types a query
- Then the placeholder disappears and the typed text appears
- And the input remains pill-shaped

### R4: Search Button

**Scenario: Button displayed inside input**
- Given the page loads
- Then a circular purple (#7c3aed) search button is positioned at the right end of the input
- And the button contains a white magnifying glass icon
- And the button is vertically centered within the input height

**Scenario: Button hover state**
- Given the search button is visible
- When the user hovers over the button
- Then the button background darkens (to approximately #6d28d9)
- And the cursor changes to pointer

**Scenario: Button click**
- Given the user has typed a query
- When the user clicks the search button
- Then the form submits (or triggers a search action)

### R5: Footer

**Scenario: Component Dock branding**
- Given the page loads
- Then a footer is present with a link to "https://www.componentdock.com/"
- And the footer is branded as "Component Dock"

## Verification Checklist

- [ ] Gradient background matches #4a3af5 → #c850c0 (135deg)
- [ ] Heading is white, semi-bold, centered
- [ ] Search input is pill-shaped (border-radius ~30px), white bg
- [ ] Placeholder text "Search..." in light gray
- [ ] Circular purple search button inside input right edge
- [ ] Button has white magnifying glass icon
- [ ] Button hover darkens background
- [ ] Content is vertically + horizontally centered in viewport
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Tests pass with 100% coverage
