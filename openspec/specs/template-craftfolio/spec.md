# Template: Craftfolio (Portfolio / Personal)

## Purpose

Recreation of ColorLib's **Steve** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio app.

- **Source slug:** `steve`
- **Preview URL:** https://preview.colorlib.com/theme/steve/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/steve-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/craftfolio`
- **Deploy target:** `craftfolio.free.componentdock.com`

## Design tokens (from preview CSS)

| Token            | Value                     | Notes                                   |
| ---------------- | ------------------------- | --------------------------------------- |
| Brand color      | `#e45447` (warm red)      | CTA buttons, hover states               |
| Secondary accent | `#ffd200` (golden yellow) | Footer background                       |
| Text primary     | `#222`                    | Body copy                               |
| Text secondary   | `#777`                    | Muted / secondary text                  |
| Background white | `#fff`                    | Card / content areas                    |
| Background gray  | `#f9f9ff`                 | About section (`.gray-bg`)              |
| Font heading     | `"Poppins", sans-serif`   | Headings                                |
| Font body        | `"Roboto", sans-serif`    | Body text, buttons                      |
| Button radius    | `0` (square/rectangular)  | `.primary-btn` — no border-radius       |
| Button padding   | `12px 34px`               | Standard CTA button                     |
| Section spacing  | `120px` vertical          | `.section_gap`                          |
| Portfolio grid   | 4-column (`col-lg-3`)     | With 5px radius, black overlay on hover |
| Footer bg        | `#ffd200`                 | Golden yellow                           |

## Section structure (from preview DOM)

1. **Navbar** — Fixed top, logo left, links right (Home, About, Portfolio, Contact). Mobile hamburger toggle.
2. **Hero / Banner Carousel** — Fullscreen with dark background image, centered h1 name + h3 subtitle + "Hire Me" CTA button (red `#e45447`).
3. **Portfolio / Work** — 4-column grid of 8 project cards. Each card: image with black overlay + text overlay (title + "Client Project"). Filter bar (All Categories).
4. **About** — Two-column: left image, right text block with h2 heading ("About Myself"), two paragraphs, "More Info" CTA button. Gray background (`#f9f9ff`).
5. **Testimonials** — Two-column: left is testimonial cards (quote icon, name, 5 stars, paragraph), right is brand logos panel (white card with shadow, 5 logos).
6. **Newsletter** — Centered section with dark background image, white h2 ("Join Our Newsletter"), paragraph, email input + "Subscribe" button.
7. **Footer** — Centered: logo, "Follow Me" heading, 4 social icons (Facebook, Twitter, Dribbble, Behance), copyright line linking Component Dock. Golden yellow background (`#ffd200`).

## Requirements

### Requirement: Navbar renders navigation links

Users SHALL see a navigation bar with logo and links to Home, About, Portfolio, and Contact.

#### Scenario: Navbar renders all navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links: Home, About, Portfolio, Contact
- **AND** the navbar has a logo on the left
- **AND** on mobile the hamburger button is visible

### Requirement: Hero displays name and CTA

Users SHALL see a hero section with the person's name, subtitle, and a "Hire Me" CTA button.

#### Scenario: Hero carousel displays name and CTA

- **WHEN** the page loads
- **THEN** the hero section shows a heading with a name
- **AND** shows a subtitle describing the person
- **AND** shows a "Hire Me" CTA button

### Requirement: Portfolio grid shows project cards

Users SHALL see a filterable grid of 8 project cards with images and labels.

#### Scenario: Portfolio grid shows project cards

- **WHEN** the page loads
- **THEN** 8 project cards are displayed in a grid
- **AND** each card shows an image, title, and "Client Project" label
- **AND** a filter bar shows "All Categories" as active

### Requirement: About section shows image and text

Users SHALL see a two-column about section with an image, heading, description, and CTA button.

#### Scenario: About section shows image and text

- **WHEN** the page loads
- **THEN** the about section displays an image on the left
- **AND** text content on the right with a heading and paragraphs
- **AND** a "More Info" CTA button is present

### Requirement: Testimonials section shows reviews

Users SHALL see testimonial cards with ratings and a brand logos panel.

#### Scenario: Testimonial carousel shows reviews

- **WHEN** the page loads
- **THEN** testimonial cards are displayed with a quote icon, name, star rating, and text
- **AND** a brand logos panel is shown on the right

### Requirement: Newsletter section has email signup

Users SHALL see a newsletter signup section with email input and subscribe button.

#### Scenario: Newsletter section has email signup

- **WHEN** the page loads
- **THEN** a "Join Our Newsletter" heading is displayed
- **AND** an email input field is present
- **AND** a "Subscribe" button is present

### Requirement: Footer shows social links and copyright

Users SHALL see a footer with social icons, copyright, and a Component Dock link.

#### Scenario: Footer shows social links and copyright

- **WHEN** the page loads
- **THEN** the footer displays social media icon links
- **AND** a copyright notice is present
- **AND** the footer links to Component Dock

## Verification checklist

- [x] All sections match the original section order 1:1
- [x] Design tokens (colors, fonts, radii) match the extracted values
- [x] Portfolio grid is 4-column with black overlay hover effect
- [x] About section has gray background (`#f9f9ff`)
- [x] Newsletter has background image with white text
- [x] Footer is golden yellow (`#ffd200`) with social icons
- [x] No references to ColorLib in app code
- [x] Footer links to `https://www.componentdock.com/`
- [x] Placeholder images use `https://picsum.photos/seed/craftfolio-<n>/<w>/<h>`
- [x] Google Fonts loaded: Poppins (headings) + Roboto (body)
- [x] `npm run test:coverage` passes at 100%
- [x] `npm run build` succeeds
