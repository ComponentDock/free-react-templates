# Template: DesignVault (Portfolio / Creative Resources)

## Purpose

Recreation of ColorLib "Reopen" — a minimal portfolio/creative resources grid
template with a full-screen overlay menu, centered logo, masonry grid of
portfolio items, load-more interaction, and a simple social-footer.

- **ColorLib source:** https://colorlib.com/wp/template/reopen/
- **Preview URL:** https://preview.colorlib.com/theme/reopen/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **Component library:** packages/ui (Button, ButtonLink, cn)
- **Tests:** Vitest + Testing Library, 100% coverage enforced

## Design tokens (extracted from live preview CSS)

| Token               | Value                                | Notes                                      |
| ------------------- | ------------------------------------ | ------------------------------------------ |
| font-body           | `'Roboto', sans-serif`               | Weights 300, 400, 700 (body)               |
| font-heading        | `'Montserrat', sans-serif`           | Loaded for accent headings if used          |
| font-serif          | `'PT Serif', serif`                  | Loaded for quotes / accent text             |
| color-bg            | `#ECECEC`                            | Page background (body)                      |
| color-surface       | `#ffffff`                            | Card / content wrapper background           |
| color-text          | `#222222`                            | Primary text color                          |
| color-text-light    | `#6f6f6f`                            | Secondary / muted text                      |
| color-text-muted    | `#9a9a9a`                            | Tertiary text                               |
| color-accent        | `#FD3137`                            | Bright red accent (used sparingly)          |
| color-hover         | `#f277ae`                            | Link / hover pink accent                    |
| color-border        | `#cccccc`                            | Menu overlay border, subtle dividers        |
| color-toggle        | `#c2c2c2`                            | Hamburger menu toggle lines                 |
| color-gray-dark     | `#191919`                            | Dark gray for footer text                   |
| radius-sm           | `2px`                                | Minimal radius for some elements            |
| radius-pill         | `30px` / `50px`                      | Rounded pill shapes (buttons, tags)         |
| radius-circle       | `90%`                                | Circular avatar / icon containers           |

## Section structure (from live preview DOM analysis)

1. **Navbar** — Hamburger toggle (top-right, 3 lines) that opens a full-screen
   overlay menu with centered logo at top + horizontal nav links (Home, About,
   Story, Blog, Contact, More). Overlay has white background with `#cccccc`
   border (30px). Toggle animates to X on open.

2. **Header / Hero** — Centered layout inside `.body-wrapper` (white, 30px
   margin from viewport edge). Logo image centered with 80px top padding.
   Heading: "Handpicked **design resources** crafted with much ❤ and care for
   every detail" — the word "design resources" is bold, the heart is a Font
   Awesome icon. Subtext: "free downloads only on fridays" in muted style.

3. **Portfolio Grid** — Masonry-style grid of portfolio cards. Items use
   `.grid-item.element-item` with classes `p_one_third` or `p_two_third` to
   define span widths. Each card has:
   - A colored image area (placeholder images)
   - `.portfolio-text-holder` overlay with `.portfolio-text` title and
     `.portfolio-type` category tag
   - Grid items: SMARTPHONE, GALLERY, BOOK, VIDEO, DOODLE, VIDEO, FOSTER,
     GALLERY, STARLIGHT, ARTICLE, OPEN BOOK, VIDEO, BURGER, VIDEO,
     PRINTSCREEN, ARTICLE, BOTTLE, ARTICLE
   - Mix of 1/3-width and 2/3-width items creating a masonry rhythm

4. **Load More** — Centered "Load More" button/text at bottom of grid section.
   Styled as a simple text link or subtle button.

5. **Footer** — Simple footer with copyright line "Made with ❤ by [Name]"
   (heart is Font Awesome icon), social icons row (Twitter, Behance, Dribbble,
   Facebook, RSS) using Font Awesome icons.

## Gherkin requirements

### Feature: DesignVault — Portfolio Creative Resources Template

#### Scenario: Page load and initial render
  Given the user visits the DesignVault homepage
  Then the page background is light gray (#ECECEC)
  And the content wrapper has a white background with visible margin from viewport edges
  And the centered logo is visible at the top of the content area

#### Scenario: Hero section
  Given the hero section is rendered
  Then the heading displays "Handpicked design resources crafted with much ❤ and care for every detail"
  And the phrase "design resources" is visually bold
  And the subtext reads "free downloads only on fridays" in muted style
  And the heading and subtext are center-aligned

#### Scenario: Hamburger menu toggle
  Given the hamburger menu is closed
  When the user clicks the toggle button (3 horizontal lines, top-right)
  Then a full-screen overlay menu appears with white background and gray border
  And the toggle animates to an X shape
  And the overlay shows the logo centered at top
  And nav links are displayed: Home, About, Story, Blog, Contact, More
  And Contact has a sub-menu item "Contact + Map"

#### Scenario: Hamburger menu close
  Given the overlay menu is open
  When the user clicks the toggle button again
  Then the overlay menu closes and returns to the initial state

#### Scenario: Portfolio grid layout
  Given the portfolio grid is rendered
  Then items are displayed in a masonry-style grid
  And each item spans either one-third or two-thirds of the grid width
  And items have a category tag overlay (e.g. "SMARTPHONE", "GALLERY", "BOOK")
  And items have a title overlay
  And items have a placeholder image background

#### Scenario: Portfolio grid item hover
  Given a portfolio grid item is rendered
  When the user hovers over the item
  Then the item shows a hover state (image zoom or overlay effect)

#### Scenario: Load more interaction
  Given the portfolio grid is displayed with initial items
  When the user clicks "Load More"
  Then additional portfolio items are loaded and appended to the grid

#### Scenario: Footer
  Given the page footer is rendered
  Then it displays a copyright line with heart icon
  And social media icons are present (Twitter, Behance, Dribbble, Facebook, RSS)
  And social icons link to "#" (placeholder URLs)

#### Scenario: Responsive behavior
  Given the user views the page on a mobile viewport
  Then the hamburger menu is visible as the primary navigation
  And the portfolio grid items stack to single column
  And the footer social icons remain visible

## Verification checklist

- [ ] Favicon and page title set correctly
- [ ] Body background matches #ECECEC
- [ ] Content wrapper has white background with margin
- [ ] Logo centered in header with correct spacing
- [ ] Hero heading renders with bold emphasis and heart icon
- [ ] Subtext renders in muted style
- [ ] Hamburger toggle animates between hamburger and X
- [ ] Full-screen overlay menu opens/closes correctly
- [ ] Overlay menu has white background with gray border
- [ ] Nav links render with hover color (#f277ae)
- [ ] Contact sub-menu renders correctly
- [ ] Portfolio grid renders masonry-style layout
- [ ] Grid items span 1/3 and 2/3 widths correctly
- [ ] Portfolio cards show category tags and titles
- [ ] Portfolio cards use placeholder images (picsum.photos)
- [ ] Hover effect on portfolio items works
- [ ] Load More button visible and interactive
- [ ] Footer copyright with heart icon renders
- [ ] Social media icons render (using lucide-react or equivalent)
- [ ] Social icons have placeholder href="#"
- [ ] All text uses Roboto font family
- [ ] Link hover color is #f277ae
- [ ] Component Dock footer link present ("Made with Component Dock" or similar)
- [ ] No ColorLib references in app code
- [ ] CNAME file contains designvault.free.componentdock.com
- [ ] homepage in package.json matches deploy URL
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (strict TypeScript)
- [ ] Lint passes
- [ ] Build succeeds
