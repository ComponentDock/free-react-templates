# Template: Clearpoint (Portfolio)

## Purpose

Recreation of ColorLib Schmidt (`https://colorlib.com/wp/template/schmidt/`), preview URL: `https://preview.colorlib.com/theme/schmidt/`. Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).

## Design tokens

- **Brand primary**: `#d5c455` (Gold / Yellow accent)
- **Neutral dark**: `#1a1a1a` / `#212529`
- **Neutral light**: `#f8f9fa` / `#ffffff`
- **Font family**: Poppins, sans-serif
- **Button radii**: Rounded / Pill (`rounded` / `rounded-md`)

## Requirements & Gherkin Scenarios

### Feature: Navbar & Header

- As a visitor, I want a responsive navigation bar with brand logo and section links so I can jump to sections.

#### Scenario: Navigation links work correctly

- Given the user is on the Clearpoint home page
- When they view the navbar
- Then they see logo "Clearp." and links for Home, About, Services, Experiences, Works, Blog, and Contact.

### Feature: Hero Section

- As a visitor, I want a striking hero area with my title, subtitle, and CTA buttons.

#### Scenario: Hero content and CTAs

- Given the user lands on the page
- When the hero section is displayed
- Then it shows subheading "UI/UX Designer & Developer", heading "I'm John Clearpoint", and buttons "More About Me" and "Hire Me".

### Feature: About Section

- As a visitor, I want to read bio details, skills, and personal info.

#### Scenario: About details are visible

- Given the user scrolls to About
- Then bio details and skill progress bars are displayed.

### Feature: Services Section

- As a visitor, I want to view offered services with icons and descriptions.

#### Scenario: Services grid

- Given the user scrolls to Services
- Then service cards with icons, titles, and descriptions are shown.

### Feature: Footer Attribution

- As a visitor, I want clear footer info including the Component Dock link.

#### Scenario: Footer link present

- Given the user scrolls to the bottom
- Then the footer contains a copyright notice and a link to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
- [ ] Footer links Component Dock
- [ ] No mention of ColorLib in app code
