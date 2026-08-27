# Template: BtnVault (UI Components & Creative Buttons)

## Purpose

- Recreation of ColorLib **Bootstrap Buttons V02** (`https://colorlib.com/wp/template/bootstrap-buttons-02/`, preview URL `https://preview.colorlib.com/theme/bootstrap-buttons-02/`).
- Built with Vite, React 19, Tailwind CSS 4, and TypeScript.
- Provides an extensive showcase of creative, modern, and animated button styles, interactive toggle states, gradient pill buttons, glowing effects, and social action buttons.

## Design tokens

- **Brand Colors**:
  - Primary / Accent: `#6366f1` (Indigo 500) & `#3b82f6` (Blue 500) gradients
  - Success: `#10b981` (Emerald 500)
  - Warning: `#f59e0b` (Amber 500)
  - Danger: `#ef4444` (Red 500)
  - Dark Surface: `#0f172a` (Slate 900)
  - Light Surface: `#f8fafc` (Slate 50)
- **Font Family**: `"Inter", sans-serif`
- **Button Shapes**: Rounded-full pill buttons, sharp modern buttons, soft shadow elevations, glowing hover rings, and animated underline links.
- **Section Backgrounds**: Clean white and light gray alternating cards, dark footer showcasing Component Dock.

## Gherkin Requirements & Scenarios

### Feature: Creative Buttons Showcase

As a developer or designer visiting BtnVault,
I want to explore various creative Bootstrap button styles and interactions,
So that I can use them in my own projects.

#### Scenario: Viewing main button categories

- Given I am on the BtnVault home page
- When I view the button collection sections
- Then I should see categorized sections for Gradient Buttons, Animated Hover Buttons, Social Buttons, and Toggle States.

#### Scenario: Interacting with interactive button states

- Given I am viewing a button card
- When I click or hover over the button
- Then it should display smooth transition animations, ripple effects, or scale transforms.

#### Scenario: Footer Attribution

- Given I scroll to the bottom of the page
- When I view the footer
- Then I should see a link pointing to `https://www.componentdock.com/` as "Component Dock".

## Verification Checklist

- [ ] TypeScript strict compilation passes (`npm run build`)
- [ ] Vitest unit tests pass with 100% coverage
- [ ] Component Dock link present in footer
- [ ] Responsive grid layout works on mobile and desktop
