# Template: Bootstrap Buttons Ten (Gradient & Shadow Button Showcase)

## Purpose

Recreation of ColorLib Bootstrap Buttons 10 (`https://colorlib.com/wp/template/bootstrap-buttons-10/`). A modern UI component showcase highlighting gradient, shadow-enhanced, and pill-shaped button variations with rich interactive hover and click states, built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Primary Brand Color**: Indigo-600 / Violet-600 with vibrant gradient pairings (from-indigo-600 to-violet-600)
- **Accent Colors**: Emerald-500, Amber-500, Rose-500, Cyan-500, Slate-800
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded-xl, rounded-full, pill styles
- **Section Backgrounds**: Clean neutral light mode (slate-50 / white) with subtle shadow-md / shadow-lg card containers

## Requirements & Gherkin Scenarios

### Requirement 1: Gradient & Shadow Button Showcase

- As a developer, I want to explore buttons styled with rich gradients and elevated shadows so I can use high-impact CTA elements in my applications.

Scenario: Viewing gradient and shadow variants
Given the user is on the Bootstrap Buttons Ten home page
When the user views the gradient and shadow section
Then they should see buttons featuring multi-stop gradient backgrounds and depth-enhancing box shadows

### Requirement 2: Pill & Rounded Shape Variations

- As a designer, I want to view buttons in pill and rounded-xl shapes to match modern UI design systems.

Scenario: Browsing shape variations
Given the user is browsing the shape variations section
When the user inspects the buttons
Then they should see fully rounded pill buttons alongside softly rounded buttons with hover scaling effects

### Requirement 3: Interactive Copy-to-Clipboard Snippets

- As a developer, I want to copy code snippets for each button style so I can accelerate my frontend development.

Scenario: Copying button code
Given the user clicks the "Copy Code" button on a button component card
When the action is triggered
Then the corresponding Tailwind CSS classes should be copied to the clipboard with a visual success confirmation

### Requirement 4: Component Dock Footer Attribution

- As a visitor, I want to see a clear attribution link to Component Dock in the footer.

Scenario: Checking footer attribution
Given the user scrolls to the bottom of the page
When the footer is rendered
Then it must include a link to https://www.componentdock.com/
