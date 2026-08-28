# Template: Btnflare (Bootstrap Button Showcase & Component Library)

## Purpose

Recreation of ColorLib Bootstrap Buttons 07 (`https://colorlib.com/wp/template/bootstrap-buttons-07/`, preview: `https://preview.colorlib.com/theme/bootstrap-buttons-07/` — unreachable, 404). A clean, systematic UI component showcase featuring Bootstrap 4 inspired button variants organized by size scale (Large, Medium, Small), comprehensive color palette (18 variants: Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray), and a full-width block button, built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Primary Brand Color**: Indigo / Bootstrap Blue (`#3b82f6` / `#2563eb`)
- **Color Palette** (exact Bootstrap 4 semantics):
  - Primary: `#0d6efd` (blue)
  - Secondary: `#6c757d` (gray)
  - Success: `#198754` (green)
  - Info: `#0dcaf0` (cyan)
  - Warning: `#ffc107` (yellow/amber)
  - Danger: `#dc3545` (red)
  - Light: `#f8f9fa` (near-white)
  - Orange: `#fd7e14` (orange)
  - Indigo: `#6610f2` (deep indigo)
  - Pink: `#d63384` (pink)
  - Deep Orange: `#f4623a` (coral/deep orange)
  - Aqua: `#0891b2` (teal/aqua)
  - Dark: `#212529` (dark charcoal)
  - Black: `#000000` (pure black)
  - Purple: `#6f42c1` (purple)
  - Blue: `#0d6efd` (bright blue)
  - Brown: `#8b5e3c` (brown)
  - Blue Gray: `#6b7280` (slate gray)
- **Font Family**: Inter, system-ui, -apple-system, sans-serif
- **Button Radii**: Pill / fully rounded (`rounded-full`) for all variants
- **Button Sizes**:
  - Large: `px-8 py-4 text-lg` (equivalent to `.btn-lg`)
  - Medium: `px-5 py-2.5 text-base` (equivalent to `.btn-md`)
  - Small: `px-3 py-1.5 text-sm` (equivalent to `.btn-sm`)
- **Section Backgrounds**: White (`white`) light mode, Slate-900 (`slate-900`) dark mode
- **Container**: Max-width centered container with generous vertical padding

## Requirements & Gherkin Scenarios

### Requirement 1: Size Scale Showcase

- As a developer visiting the template, I want to explore different button sizes so I can choose the appropriate scale for my user interface.

**Scenario: Viewing button sizes**
Given the user is on the Btnflare home page
When the user views the size scale section
Then they should see Large, Medium, and Small button variants with proportional padding and typography
And each button should have a label indicating its size
And all size buttons should use the Primary color variant

### Requirement 2: Comprehensive Color Palette

- As a developer, I want to see a rich collection of colored buttons so I can match my brand guidelines.

**Scenario: Viewing color variants — Row 1**
Given the user is viewing the color palette section
When the user scans the first row of buttons
Then they should see Primary, Secondary, Success, Info, Warning, Danger, Light, and Orange button options
And each button should display its semantic color correctly
And each button should have a label with its color name

**Scenario: Viewing color variants — Row 2**
Given the user is viewing the color palette section
When the user scans the second row of buttons
Then they should see Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, and Blue button options
And each button should display its semantic color correctly
And each button should have a label with its color name

**Scenario: Viewing color variants — Row 3**
Given the user is viewing the color palette section
When the user scans the third row of buttons
Then they should see Brown and Blue Gray button options
And each button should display its semantic color correctly
And each button should have a label with its color name

**Scenario: Interactive hover states on color buttons**
Given the user is viewing any color variant button
When the user hovers over a button
Then the button should display a subtle elevation/darken effect
And the transition should be smooth (150-200ms)

### Requirement 3: Full Width Block Button

- As a designer, I want to test full-width buttons for responsive layouts.

**Scenario: Viewing full width block button**
Given the user is viewing the full width section
When the user checks the block button
Then it should span 100% of its container width
And it should use the Primary color variant
And it should have a label indicating "Full width button"
And it should have clear hover feedback

### Requirement 4: Responsive Layout & Component Dock Footer

- As a user, I want a responsive page that works on all viewports with proper attribution.

**Scenario: Mobile responsive layout**
Given the user views the page on a mobile viewport (≤640px)
When the page renders
Then button rows should stack vertically or wrap gracefully
And the full-width button should span the viewport width
And all text should remain readable

**Scenario: Footer attribution check**
Given the user scrolls to the bottom of the page
Then the footer must display "Made with Component Dock" linking to https://www.componentdock.com/

## Verification Checklist

- [ ] All size scales (Large, Medium, Small) render correctly with proportional sizing
- [ ] All 18 color variants display exact Bootstrap 4 semantic colors and hover effects
- [ ] Color variant rows wrap responsively on mobile viewports
- [ ] Full width button expands correctly to container bounds
- [ ] Pill/rounded-full radius applied consistently to all buttons
- [ ] Dark mode: backgrounds switch to Slate-900, text colors adapt
- [ ] Fully responsive on mobile and desktop viewports
- [ ] Footer includes branded Component Dock link (`https://www.componentdock.com/`)
- [ ] 100% test coverage with Vitest & Testing Library
