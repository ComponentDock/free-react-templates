# Template: Arco (Architecture / Construction Portfolio)

## Purpose

Recreation of ColorLib "Balay" — an architecture and interior design studio
portfolio template with a fixed sidebar navigation, hero image slider, about
section, services grid, animated counters, portfolio gallery, blog entries,
and a bold CTA section.

- **ColorLib source:** https://colorlib.com/wp/template/balay/
- **Preview URL:** https://preview.colorlib.com/theme/balay/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/arco`

## Design tokens

Extracted from the live preview CSS (`css/style.css`) on 2026-09-10.

| Token            | Value                                | Usage                                        |
| ---------------- | ------------------------------------ | -------------------------------------------- |
| Brand color      | `#FFC300` (golden yellow)           | Active nav, CTAs, links, hero text box bg, selection bg |
| Sidebar bg       | `#2C2C2C` (charcoal)                | Fixed left sidebar background                |
| Body text        | `rgba(0,0,0,0.7)`                   | Paragraphs, body copy                        |
| Headings         | `#000` (black)                       | All h1–h6                                    |
| Muted text       | `#b3b3b3`                           | Figcaptions, secondary labels                |
| Body text alt    | `#999999`                           | Blog date/category labels                    |
| White            | `#fff`                               | Sidebar logo, counter section text, slider borders |
| Light gray       | `#e6e6e6`                           | Form input backgrounds                       |
| Font family      | `"Quicksand", Arial, sans-serif`     | All text (weights 300–700)                   |
| Font size        | 15px desktop, 16px mobile            | Body text                                    |
| Line height      | 1.8                                  | Body text                                    |
| Button style     | Uppercase, 12px, letter-spacing 2px, no radius, no border | CTA buttons (`.btn-learn`) |
| Button color     | `#000` text on `#FFC300` bg         | Primary action buttons                       |
| Section spacing  | ~10em margin-bottom on hero          | Hero to first content section                |
| Content width    | 80% main + 20% sidebar (desktop)     | Two-column layout                           |
| Counter bg       | Parallax image (`cover_bg_1.jpg`)    | Stats section background                     |
| CTA section bg   | `#FFC300`                            | "Get in Touch" footer call-to-action         |
| Nav link active  | `#FFC300` with underline animation  | Current page indicator                       |
| Nav link hover   | `#fff` with `#FFC300` underline     | Interactive hover state                      |
| Text selection   | `#fff` on `#FFC300` bg              | `::selection`                                |

## Layout structure (section order, faithful to source)

The original is a single-page template with sidebar layout. For the React
recreation we use a responsive mobile-first approach: sidebar becomes a
top navbar on mobile.

1. **Sidebar** — Fixed left panel (20% width desktop, full-width top nav
   mobile). Contains: logo ("Arco"), nav links (Home, Projects, About,
   Services, Blog, Contact), footer with copyright + social icons.

2. **Hero slider** — Full-height section with rotating background images
   and yellow (`#FFC300`) text boxes positioned bottom-right. Each slide:
   heading (light weight 300, 44px), subheading, "View Project" CTA button.
   Auto-cycling with overlay.

3. **About** — Two-column: left = background image, right = heading meta
   "Welcome", heading "Who we are", two paragraphs of body copy, then
   3 value cards in a row ("We are passionate", "Honest Dependable",
   "Always Improving") each with a checkmark icon.

4. **Services** — Two-column: left = heading meta "What I do?", heading
   "Here are some of my expertise", 4 feature items (icon + title + desc):
   General Contracting, Pre-Construction Design, Building & Modeling,
   Construction Management. Right = 5 service image cards in 2-col grid:
   Design & Build, House Remodeling, Construction Management, Painting &
   Tiling, Kitchen Remodeling.

5. **Counters** — Parallax background image with dark overlay. 4-column
   stat grid: Projects (1,539), Employees (3,653), Constructors (5,987),
   Partners (3,999). Each has an icon, animated counter number, and label.

6. **Portfolio/Work** — Heading meta "My Work", heading "Recent Work".
   Asymmetric 2-column grid: 6 project cards with background images,
   overlay on hover showing title, category, share/eye/heart counts.
   Grid pattern: 2-col(6) + 3-col(3) + 3-col(3) + 3-col(3) / 3-col(3) +
   3-col(3) + 2-col(6) — roughly 2-row alternating.

7. **Blog** — Heading meta "Read", heading "Recent Blog". 3-column grid
   of blog cards: image, date | category | comment count, title link,
   excerpt paragraph.

8. **CTA ("Get in Touch")** — Yellow (`#FFC300`) background section.
   Heading "Get in Touch!", lead text paragraph, "Contact me!" button.

## Gherkin requirements

### Feature: Sidebar Navigation

Scenario: Desktop sidebar displays logo and nav links
  Given the page is loaded on desktop (≥1024px)
  When the sidebar is visible
  Then it shows the "Arco" logo at the top
  And it lists navigation links: Home, Projects, About, Services, Blog, Contact
  And the active link is highlighted in brand yellow (#FFC300) with an underline
  And the sidebar background is charcoal (#2C2C2C)
  And social media icon links appear in the sidebar footer

Scenario: Mobile sidebar collapses to top navbar
  Given the page is loaded on mobile (<768px)
  When the viewport is narrow
  Then the sidebar is hidden by default
  And a hamburger toggle button is visible
  And tapping the toggle opens the sidebar as an overlay from the left
  And tapping a nav link closes the overlay and scrolls to the section

### Feature: Hero Slider

Scenario: Hero displays rotating slides with brand-colored text boxes
  Given the hero section is visible
  When the page loads
  Then a full-height image slider is displayed
  And each slide has a dark overlay on the background image
  And a yellow (#FFC300) text box appears at bottom-right containing:
    - A heading (light weight, large text)
    - A subheading
    - A "View Project" button (uppercase, no radius)
  And slides auto-cycle on a timer
  And the slider responds to touch/swipe on mobile

### Feature: About Section

Scenario: About section shows company description and values
  Given the about section scrolls into view
  When it becomes visible
  Then it displays a "Welcome" meta label
  And a "Who we are" heading
  And two paragraphs of descriptive text
  And a left-aligned background image
  And 3 value cards in a row below the text:
    - "We are passionate" with a checkmark icon
    - "Honest Dependable" with a checkmark icon
    - "Always Improving" with a checkmark icon
  And each card animates in from left (fadeInLeft)

### Feature: Services Section

Scenario: Services section displays expertise features and service cards
  Given the services section scrolls into view
  When it becomes visible
  Then it shows a "What I do?" meta label and heading "Here are some of my expertise"
  And 4 feature items are listed vertically on the left:
    - General Contracting (with icon)
    - Pre-Construction Design (with icon)
    - Building & Modeling (with icon)
    - Construction Management (with icon)
  And 5 service image cards are displayed in a 2-column grid on the right:
    - Design & Build, House Remodeling, Construction Management (left col)
    - Painting & Tiling, Kitchen Remodeling (right col, offset down)
  And each service card has a background image with an overlay title

### Feature: Counters Section

Scenario: Counter stats animate on scroll
  Given the counter section scrolls into view
  When it becomes visible
  Then a parallax background image is displayed with a dark overlay
  And 4 stat columns appear in a row:
    - Projects: 1,539
    - Employees: 3,653
    - Constructors: 5,987
    - Partners: 3,999
  And each stat has an icon above the number
  And each number animates (counts up from 0 to the target)
  And the label text appears below each number

### Feature: Portfolio/Work Section

Scenario: Portfolio grid displays project cards
  Given the portfolio section scrolls into view
  When it becomes visible
  Then it shows "My Work" meta label and "Recent Work" heading
  And 6 project cards are displayed in an asymmetric grid:
    - Work 01 (Building) — 2-column width
    - Work 02 (House, Apartment) — 1-column width
    - Work 03 (Dining Room) — 1-column width
    - Work 04 (House, Building) — 1-column width
    - Work 05 (Condo, Pad) — 1-column width
    - Work 06 (Table, Chairs) — 2-column width
  And each card has a background image
  And hovering/focusing a card reveals: title, category, share icon, view count, heart count

### Feature: Blog Section

Scenario: Blog entries display in a 3-column grid
  Given the blog section scrolls into view
  When it becomes visible
  Then it shows "Read" meta label and "Recent Blog" heading
  And 3 blog cards are displayed in a row
  And each card contains:
    - A blog image
    - Date, category, and comment count
    - A title link
    - An excerpt paragraph
  And cards animate in from left (fadeInLeft)

### Feature: CTA Section

Scenario: Call-to-action section encourages contact
  Given the CTA section scrolls into view
  When it becomes visible
  Then the section background is brand yellow (#FFC300)
  And it shows the heading "Get in Touch!"
  And a lead paragraph with descriptive text
  And a "Contact me!" button (uppercase, no radius, black text on white bg)

## Verification checklist

- [ ] Sidebar: logo, nav links, active state styling, mobile toggle
- [ ] Hero: slider cycling, background images (picsum), yellow text boxes, CTA button
- [ ] About: two-column layout, meta label, heading, paragraphs, 3 value cards with icons
- [ ] Services: 4 feature items with icons, 5 service image cards in 2-col grid
- [ ] Counters: parallax bg, 4 stats, count-up animation on scroll
- [ ] Portfolio: 6 project cards in asymmetric grid, hover overlay with details
- [ ] Blog: 3 blog entries in 3-col grid, image + meta + title + excerpt
- [ ] CTA: yellow background, heading, lead text, contact button
- [ ] Responsive: sidebar collapses on mobile, sections stack vertically
- [ ] Footer: copyright text, "Component Dock" link, social icons
- [ ] Animations: fadeInLeft on section entry (scroll-triggered)
- [ ] Design tokens: Quicksand font, #FFC300 brand, #2C2C2C sidebar, no border-radius buttons
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
