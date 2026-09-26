# Template: Ledgerman (Personal Portfolio / Resume)

## Purpose

Recreation of ColorLib's **Jackson** — a sidebar-based personal portfolio/resume website template.

- **Source:** https://colorlib.com/wp/template/jackson/
- **Preview:** https://preview.colorlib.com/theme/jackson/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jackson-free-personal-resume-website-template.jpg
- **New name:** Ledgerman (`apps/ledgerman`, `@free-react-templates/ledgerman`)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#0066ff` | Links, buttons, accents |
| `--color-primary-hover` | `#0052cc` | Button/link hover |
| `--color-primary-light` | `rgba(0, 102, 255, 0.08)` | Light accent backgrounds |
| `--color-text` | `#1a1a1a` | Body text |
| `--color-text-secondary` | `#555555` | Secondary text |
| `--color-text-muted` | `#888888` | Muted/tertiary text |
| `--color-bg` | `#ffffff` | Page background |
| `--color-bg-secondary` | `#f8f9fa` | Alt section backgrounds |
| `--color-bg-tertiary` | `#f1f3f5` | Tertiary backgrounds |
| `--color-border` | `#e5e7eb` | Borders and dividers |

### Typography
- **Font family:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Body text: regular weight, `--color-text`
- Headings: bold, `--color-text`

### Radii
- `--radius-sm` — small elements (cards, inputs)
- `--radius-md` — buttons, containers
- `--radius-lg` — large containers
- `--radius-full` — pills, badges

### Section Backgrounds
- Most sections: white (`#ffffff`) or `--color-bg-secondary` (`#f8f9fa`)
- Hero: full-height background image with dark overlay
- Counter section: background image (`img_bg_2.jpg`) with dark overlay
- Work section: background image (`cover_bg_1.jpg`) with dark overlay
- Sidebar: fixed left panel with border-right, `--color-bg` background

## Layout Structure

This is a **sidebar layout** — the author panel sits fixed on the left with navigation, and the main content scrolls on the right.

### Section Order (from DOM analysis)

1. **Hero** — Full-height background image carousel (flexslider), centered text: "Hi! I'm Jackson Ford" with subtitle "UI/UX Designer" and CTA buttons
2. **About** — "Who Am I?" heading, author photo (background-image), bio text, social links, counters
3. **Services** — "Here are some of my expertise", 2-column grid of 6 service cards (icon + title + description): Innovative Ideas, Software, Application, Graphic Design, Software, Application
4. **Skills** — "My Skills", progress bars (HTML/CSS 75%, Photoshop 60%, Illustrator 85%, WordPress 90%, Photoshop 70%, Illustrator 80%)
5. **Education** — "Education", timeline items with dates and descriptions
6. **Experience** — "Work Experience", timeline items with dates and descriptions
7. **Work/Portfolio** — "Recent Work", filterable gallery (All, Graphic Design, Web Design, Software, Apps) with overlay on hover, share + view count icons
8. **Blog** — "From the Blog", blog post cards
9. **Contact** — "Contact", contact form (Name, Email, Subject, Message fields), location info
10. **Footer** — Copyright text, social icons (Facebook, Twitter, Instagram, LinkedIn), dark mode toggle

### Sidebar (fixed left)
- Author photo (circular)
- Name / title
- Navigation links (Home, About, Services, Skills, Education, Experience, Work, Blog, Contact)
- Social icons (Facebook, Twitter, Instagram, LinkedIn)
- Dark mode toggle
- "Made with ♥" text
- Mobile: offcanvas menu triggered by hamburger

## Gherkin Requirements

### Feature: Ledgerman Template

#### Scenario: Hero Section
- **Given** a visitor loads the page
- **Then** the hero section displays a full-height background image with overlay
- **And** the heading shows "Hi! I'm [Name]" with a subtitle
- **And** call-to-action buttons are visible

#### Scenario: Sidebar Navigation
- **Given** a visitor is on desktop
- **Then** a fixed sidebar is visible on the left
- **And** the sidebar contains the author photo, name, and navigation links
- **And** clicking a nav link scrolls to the corresponding section

#### Scenario: Mobile Navigation
- **Given** a visitor is on mobile
- **Then** a hamburger menu button is visible
- **And** clicking it opens an offcanvas sidebar
- **And** the offcanvas contains the author photo, nav links, and close button

#### Scenario: About Section
- **Given** a visitor scrolls to the About section
- **Then** the heading "Who Am I?" is displayed
- **And** an author photo is shown
- **And** bio text is displayed

#### Scenario: Services Section
- **Given** a visitor scrolls to the Services section
- **Then** 6 service cards are displayed in a 2-column grid
- **And** each card has an icon, title, and description

#### Scenario: Skills Section
- **Given** a visitor scrolls to the Skills section
- **Then** skill bars are displayed with labels and percentage widths
- **And** each bar shows the skill name and proficiency level

#### Scenario: Education Section
- **Given** a visitor scrolls to the Education section
- **Then** education entries are listed in timeline format
- **And** each entry has a date range and description

#### Scenario: Experience Section
- **Given** a visitor scrolls to the Experience section
- **Then** work experience entries are listed in timeline format
- **And** each entry has a date range and description

#### Scenario: Work/Portfolio Section
- **Given** a visitor scrolls to the Work section
- **Then** a filterable gallery of work items is displayed
- **And** filter buttons (All, Graphic Design, Web Design, Software, Apps) are present
- **And** each work item shows an image with hover overlay and icons
- **And** a "Load More" button is visible

#### Scenario: Blog Section
- **Given** a visitor scrolls to the Blog section
- **Then** blog post cards are displayed
- **And** each card has a featured image, title, and excerpt

#### Scenario: Contact Section
- **Given** a visitor scrolls to the Contact section
- **Then** a contact form is displayed with Name, Email, Subject, and Message fields
- **And** a submit button is present

#### Scenario: Dark Mode Toggle
- **Given** a visitor clicks the dark mode toggle
- **Then** the theme switches to dark mode
- **And** all section backgrounds and text colors update accordingly

#### Scenario: Footer
- **Given** a visitor reaches the bottom of the page
- **Then** the footer shows copyright text
- **And** social media icons (Facebook, Twitter, Instagram, LinkedIn) are present
- **And** a "Made with ♥" attribution is displayed
- **And** a link to Component Dock is present

## Verification Checklist

- [ ] Sidebar layout renders correctly (fixed left panel on desktop)
- [ ] Hero section has full-height background image with overlay
- [ ] All 9 content sections render in correct order
- [ ] Skills progress bars animate on scroll
- [ ] Work portfolio filter buttons filter items correctly
- [ ] Contact form has all required fields
- [ ] Dark mode toggle works and persists
- [ ] Mobile offcanvas navigation opens/closes
- [ ] Smooth scroll navigation from sidebar links
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] All design tokens match extracted values
- [ ] 100% test coverage
- [ ] Build succeeds with no errors
