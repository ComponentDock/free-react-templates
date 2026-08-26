# Template: Bellows (Accordion & Profile Widget)

## Purpose

Recreation of ColorLib **Accordion 15** (`https://colorlib.com/wp/template/accordion-15/`), previewed at `https://preview.colorlib.com/theme/accordion-15/`.
Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Primary / Brand Colors**: Deep indigo/slate background (`#1f2937` / `#111827`), vibrant primary accent blue/violet (`#3b82f6` / `#6366f1`), active item highlight (`#2563eb`).
- **Font Family**: Inter, system-ui, sans-serif.
- **Card Shape & Elevation**: Rounded-xl containers with smooth accordion transitions, shadow-lg, clean padding, and crisp iconography.
- **Section Layout**: Centered widget card with vertical accordion panels (Profile, Messages, Settings, Logout), nested links, icons (User, Mail/Message, Settings, LogOut), and smooth expand/collapse states.

## Gherkin Requirements & Scenarios

### Feature: Interactive Accordion Widget & Profile Navigation

As a user visiting the Bellows template, I want to explore collapsible profile sections, manage messages, adjust settings, and navigate tabs so I can interact with a polished dashboard widget.

#### Scenario: Expanding and collapsing accordion sections

- **Given** the user is viewing the main accordion dashboard
- **When** the user clicks on the "Profile" or "Messages" section header
- **Then** the section expands smoothly to reveal its internal navigation links and content
- **And** clicking another section collapses the previously expanded section.

#### Scenario: Responsive layout and footer attribution

- **Given** the user views the template on any screen size
- **Then** the widget scales gracefully with proper centering and padding
- **And** the footer links to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] Spec valid (`npm run spec:validate`)
- [ ] All sections rendered and interactive
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Footer links to Component Dock
