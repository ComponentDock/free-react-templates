# Template: Startwell (Business / SaaS)

## Purpose

Recreation of ColorLib Startright (`https://colorlib.com/wp/template/startright/`), built as a modern React 19 + Tailwind CSS 4 + TypeScript application (`@free-react-templates/startwell`).

## Design Tokens

- **Font Family**: `Poppins`, sans-serif
- **Primary / Brand Color**: `#f2ad5f` (Warm Amber / Orange)
- **Dark / Neutral Color**: `#252837` (Dark Slate / Navy)
- **Background Tones**: Clean white `#ffffff` and light gray/slate `#f8f9fa`
- **Button Shapes**: Fully rounded or softly rounded buttons (`rounded-full` or `rounded-md`) with hover transitions.

## Sections

1. **Header / Navbar**: Brand logo ("Startwell."), navigation links (Home, Solutions, Pricing, Why Us, Contact Us), and mobile hamburger toggle.
2. **Hero Section**: Bold headline ("A big business starts small"), descriptive subheading, primary CTA button ("Get started"), and feature illustration/image.
3. **Clients / Logos Section**: "As seen on" banner with brand logo placeholders.
4. **Overview / Solutions Section**: "A better way to run your business" with descriptive text, 3-column feature highlights, and secondary CTA.
5. **Productive Section**: Rich multi-paragraph section with feature graphic and testimonial blockquote.
6. **Stats Section**: Key metrics counters (244,982 Reviews, 2,488,938 Downloads, 1,335 Employees).
7. **Features Grid**: 6 distinct feature cards with icons (Easy to use, Fast and Secure, Robust and Intuitive, etc.).
8. **Footer**: 4 columns (Help, About, Support, Subscribe newsletter form) and copyright attribution linking to `https://www.componentdock.com/`.

## Requirements & Scenarios

### Requirement 1: Navigation

- Scenario: User views header
  - Given the user loads the application
  - When the header renders
  - Then it displays the "Startwell." brand name, navigation links, and mobile menu trigger.

### Requirement 2: Hero Section

- Scenario: User views hero
  - Given the user is on the landing page
  - When the hero section is visible
  - Then it displays the main headline "A big business starts small", a call-to-action button, and a hero visual.

### Requirement 3: Features & Stats

- Scenario: User explores features and statistics
  - Given the user scrolls down the page
  - When they reach the stats and features sections
  - Then key numerical counters and 6 feature cards with icons are displayed.

### Requirement 4: Footer Attribution & Newsletter

- Scenario: User reaches page bottom
  - Given the user scrolls to the footer
  - When the footer renders
  - Then it includes navigation links, a newsletter subscription form, and a link to Component Dock (`https://www.componentdock.com/`).

## Verification Checklist

- [ ] App builds successfully with Vite and Tailwind CSS v4.
- [ ] All 8 sections rendered cleanly.
- [ ] 100% test coverage on components.
- [ ] Footer links to Component Dock.
- [ ] CNAME configured correctly for Surge.
