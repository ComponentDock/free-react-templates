# Template: BeastMode (Fitness / Gym)

## Purpose

Recreation of ColorLib's **Crossfits** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page site.

- **Source:** https://colorlib.com/wp/template/crossfits/
- **Live preview:** https://preview.colorlib.com/theme/crossfits/
- **New name:** `beastmode` (apps/beastmode, `@free-react-templates/beastmode`)
- **Category:** Fitness / Gym

## Design Tokens (extracted from live preview CSS)

| Token              | Value                                      |
| ------------------ | ------------------------------------------ |
| Primary brand color| `#fd7e14` (vibrant orange)                 |
| Dark background    | `#1e1e1c` (near-black, used in footer)     |
| Light bg           | `#f8f9fa` / `#f4f4f4`                      |
| White              | `#fff`                                     |
| Text primary       | `#25262a` / `#212529`                      |
| Text muted         | `rgba(255,255,255,0.5)` (on dark bg)       |
| Font family        | `"Work Sans", sans-serif`                  |
| Monospace (code)   | `"Roboto Mono", monospace`                 |
| Button radius      | `30px` (pill shape, `.btn.pill`)           |
| Border radius      | `7px` (cards/containers)                   |
| Circular elements  | `50%` radius (avatar images)               |
| Section spacing    | ~`4em` padding (footer), generous vertical |

## Page Structure (section order, 1:1 fidelity)

1. **Navbar** — sticky top, site name "BeastMode", navigation links (Home, About, Programs, Trainer, Exercises, Testimonies, Contact), mobile hamburger menu.
2. **Hero Slider** — full-viewport carousel with dark overlay, large heading "Welcome To BeastMode", subheading "Optimize Your Health", CTA button "Get Started".
3. **Popular Programs** — section heading "Popular Program", 4-column grid of program cards (Body Building, Body Combat, Push Up, Weight Lifting), each with image, title, description, "Learn More" pill button.
4. **The Club** — split layout (image left, text right), heading "The Club", descriptive paragraph, "Join Our Club" pill button (orange).
5. **Featured Trainer** — section heading "Featured Trainer", trainer card with circular avatar, name "Shane Green", role description, "Make Me Your Trainer" pill button.
6. **Crossfit Exercises** — section heading "Crossfit Exercises", masonry/grid gallery of exercise images with overlay titles on hover (Weight Lifting, Walking Exercise, Belly Crunches, Weight Lifting Partner, Exercise Rolling, Lunge Plunk).
7. **Testimonies** — section heading "Testimonies", testimonial cards with circular avatars, names (Katie Johnson, Jane Mars, Shane Holmes, Mark Johnson), and testimonial text.
8. **Footer** — dark background (#1e1e1c), 4 columns (About, Quick Menu, Program, Social Icons), copyright line at bottom.

## Gherkin Requirements

### Scenario: Navbar displays and is sticky
- **Given** the user loads the page
- **Then** a navigation bar is visible at the top with the site name and nav links
- **And** the navbar remains fixed/sticky when scrolling

### Scenario: Hero slider shows welcome message
- **Given** the user views the page
- **Then** a full-width hero section displays with a background image and dark overlay
- **And** the heading "Welcome To BeastMode" is visible
- **And** the subheading "Optimize Your Health" is visible
- **And** a CTA button is visible

### Scenario: Popular Programs section shows 4 programs
- **Given** the user scrolls to the programs section
- **Then** the heading "Popular Program" is visible
- **And** 4 program cards are displayed in a grid
- **And** each card has a title, description, and "Learn More" button

### Scenario: Programs cards are clickable
- **Given** the user sees a program card
- **When** the user clicks "Learn More" on a card
- **Then** the button has a hover shadow effect

### Scenario: The Club section displays
- **Given** the user scrolls to the club section
- **Then** a split layout with image and text is shown
- **And** the heading "The Club" is visible
- **And** a "Join Our Club" button is visible with orange background

### Scenario: Featured Trainer section displays
- **Given** the user scrolls to the trainer section
- **Then** the heading "Featured Trainer" is visible
- **And** a trainer card with circular avatar, name, and description is shown
- **And** a "Make Me Your Trainer" button is visible

### Scenario: Crossfit Exercises gallery
- **Given** the user scrolls to the exercises section
- **Then** the heading "Crossfit Exercises" is visible
- **And** a grid of exercise images is displayed
- **And** hovering over an image reveals its title as an overlay

### Scenario: Testimonies section
- **Given** the user scrolls to the testimonies section
- **Then** the heading "Testimonies" is visible
- **And** testimonial cards with circular avatars and names are shown

### Scenario: Footer layout
- **Given** the user scrolls to the footer
- **Then** the footer has a dark background (#1e1e1c)
- **And** 4 columns are displayed: About, Quick Menu, Program, Social Icons
- **And** a copyright line is shown at the bottom

### Scenario: Mobile responsive
- **Given** the user views on a mobile viewport
- **Then** the navbar collapses into a hamburger menu
- **And** program cards stack vertically
- **And** the club section stacks vertically

## Verification Checklist

- [ ] App builds without errors (`npm run build`)
- [ ] All components render without console errors
- [ ] Navbar is sticky on scroll
- [ ] Hero slider cycles through slides
- [ ] Program grid shows 4 cards with correct content
- [ ] Club section has split layout with image + text
- [ ] Trainer section shows avatar + info
- [ ] Exercise gallery grid renders with hover overlays
- [ ] Testimonial cards display correctly
- [ ] Footer has 4 columns on dark background
- [ ] Mobile hamburger menu works
- [ ] All buttons have pill shape (30px radius) and orange accent
- [ ] Font family is Work Sans throughout
- [ ] Brand color #fd7e14 used for CTAs and accents
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
