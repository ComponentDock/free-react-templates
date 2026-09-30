# Template: Sideloom (Sidebar Navigation)

## Purpose

Recreation of ColorLib Sidebar V05 — a fixed left navigation sidebar with
logo, nav links (Home, Videos, Books, Store) with active indicator bar, and
a "Featured Users" list with circular avatar thumbnails. Main content is a
2-column blog post grid offset by the sidebar width. Sidebar slides in from
left; a hamburger toggle sits on the right edge.

- **Source:** https://colorlib.com/wp/template/colorlib-sidebar-v05/
- **Preview:** https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v05/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (from live preview CSS + screenshot analysis)

| Token                | Value                                                                 |
| -------------------- | --------------------------------------------------------------------- |
| Font family          | Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif     |
| Brand / accent       | #007bff (blue — logo circle bg, nav active indicator bar)             |
| Text primary         | #212529 (dark gray — body text, headings, nav active, user names)     |
| Text secondary       | #b1b1b1 (light gray — inactive nav links)                             |
| Text meta            | #ccc (light gray — post date text)                                    |
| Link hover           | #0056b3 (darker blue — anchor hover)                                  |
| Background (sidebar) | #ffffff (white sidebar background)                                    |
| Background (main)    | #fcfcfc / #fff (near-white main content area)                         |
| Sidebar width        | 300px fixed                                                           |
| Border radius (logo) | 50% (circular)                                                        |
| Border radius (nav)  | 0 (no radius)                                                         |
| Nav indicator bar    | 2px height, #007bff blue, 30px width, left-aligned on link            |
| Avatar size (sidebar)| 45px circular (border-radius: 50%)                                    |
| Thumbnail size (main)| 80px × auto (flex: 0 0 80px)                                         |
| Sidebar shadow       | 10px 0 30px 0 rgba(0,0,0,0.1)                                        |
| Sidebar transition   | 1s cubic-bezier(0.23, 1, 0.32, 1) slide transform                    |
| Logo circle          | 50×50px, #007bff bg, white "C" letter, centered                       |
| Hamburger bars       | 2px height, 28px width, #000 color, animated to X on active           |

## Section structure (from live preview DOM)

1. **Sidebar (fixed left, `<aside>`)**
   - Logo: circular blue (#007bff) badge with letter "C"
   - Navigation menu: vertical list (Home [active], Videos, Books, Store)
     - Inactive links: light gray (#b1b1b1)
     - Active/hover: black (#000) with 2px blue left indicator bar (30px)
   - Featured Users section:
     - Heading: "FEATURED USERS" (13px, uppercase, letter-spacing 0.2rem, bold)
     - User list: 8 users, each with 45px circular avatar + name (14px, #000)
   - Sidebar scrollable internally (overflow-y: scroll, hidden scrollbar)

2. **Hamburger Toggle**
   - Positioned at top-right edge of sidebar (absolute, translateX(100%))
   - 28×32px, three 2px bars (#000)
   - Animates to X when active; bars turn white when sidebar is open
   - Clicking toggles sidebar open/closed with slide transition

3. **Main Content Area (offset 300px from left)**
   - 9-column container (75% width) centered in remaining space
   - 2-column grid of blog post cards (each column = col-md-6)
   - Each card: horizontal flex layout
     - Left: 80×auto thumbnail image (person photo)
     - Right: post title (18px h3) + "Posted: date" meta (15px, #ccc)
   - 8 posts visible (4 rows × 2 columns)
   - All post titles are identical placeholder text

4. **Footer**
   - Minimal — no explicit footer in original design
   - React recreation: add Component Dock attribution link

## Gherkin scenarios

### Sidebar visibility

```gherkin
Scenario: Sidebar is visible on page load
  Given the user opens the page
  Then the sidebar is visible on the left side
  And the sidebar displays a circular blue logo
  And the sidebar displays 4 navigation links
  And the sidebar displays a "Featured Users" heading
  And the sidebar displays 8 user entries with avatars and names

Scenario: Sidebar slides out of view when closed
  Given the sidebar is open
  When the user clicks the hamburger toggle
  Then the sidebar slides left out of view
  And the main content area expands to full width
```

### Navigation

```gherkin
Scenario: Active navigation link has indicator bar
  Given the sidebar is open
  Then the "Home" link has a blue left indicator bar
  And the "Home" link text is black
  And the other nav links have gray text

Scenario: Hovering a nav link shows indicator
  Given the sidebar is open
  When the user hovers over "Videos"
  Then the "Videos" link text turns black
  And a blue indicator bar appears on the left

Scenario: Clicking a nav link activates it
  Given the sidebar is open
  When the user clicks "Store"
  Then the "Store" link becomes active with blue indicator
  And the "Home" link loses its active state
```

### Featured Users

```gherkin
Scenario: Featured Users list displays correctly
  Given the sidebar is open
  Then there are exactly 8 user entries
  And each entry has a 45px circular avatar
  And each entry displays the user's name

Scenario: Featured users are clickable
  Given the sidebar is open
  When the user clicks on a featured user entry
  Then the entry receives focus
```

### Main content

```gherkin
Scenario: Blog post grid displays in 2 columns
  Given the user opens the page
  Then there are 8 blog post cards visible
  And they are arranged in a 2-column grid
  And each card has a thumbnail image on the left
  And each card has a title and a date on the right

Scenario: Blog post cards have consistent layout
  Given the blog post grid is visible
  Then each thumbnail is 80px wide
  And each title is displayed in 18px font
  And each date is displayed in 15px gray text
```

### Hamburger toggle

```gherkin
Scenario: Hamburger icon toggles sidebar
  Given the sidebar is open
  When the user clicks the hamburger icon
  Then the icon animates to an X shape
  And the sidebar slides out of view

Scenario: X icon closes back to hamburger
  Given the sidebar is closed and showing X icon
  When the user clicks the X icon
  Then the icon animates back to hamburger
  And the sidebar slides back into view
```

## Verification checklist

- [ ] Sidebar is 300px wide, fixed left, white background
- [ ] Logo is 50×50px blue circle with centered white letter
- [ ] Nav links: Home (active), Videos, Books, Store — vertical stack
- [ ] Active nav link: black text + 2px blue left bar (30px width)
- [ ] Inactive nav links: gray (#b1b1b1) text
- [ ] Hover on nav: black text + blue bar animates in
- [ ] Featured Users heading: 13px uppercase, bold, 0.2rem letter-spacing
- [ ] 8 user entries with 45px circular avatars + name labels
- [ ] Sidebar internal scroll with hidden scrollbar
- [ ] Main content offset by 300px from left edge
- [ ] 2-column grid of 8 blog post cards
- [ ] Each card: 80px thumbnail + title (18px) + date meta (15px, #ccc)
- [ ] Hamburger toggle: 28×32px, animates to X on click
- [ ] Sidebar slide transition: 1s cubic-bezier
- [ ] Footer has Component Dock link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
