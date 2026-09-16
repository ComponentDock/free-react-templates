# Template: Hammerly (Construction Company)

## Purpose

Hammerly is a single-page construction company website in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Webuilder" free template (source:
https://colorlib.com/wp/template/webuilder/), built under a
DIFFERENT name (**Hammerly**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a construction company template featuring: a dark top bar
with contact info, sticky white navbar with yellow accent, full-width hero
with overlay, yellow get-quote banner, split who-we-are section, 6 service
cards, filterable project grid with sidebar, dark work-with-us CTA,
team member grid, stat counters, client testimonials, blog cards, and a
dark 4-column footer. Brand color is golden yellow `#ffcd00`. Fonts are
Montserrat (headings), Open Sans (body), PT Sans (section titles).

**WHAT MAKES HAMMERLY DISTINCT (signature behaviors):**

1. **Golden yellow accent throughout.** Brand color `#ffcd00` is used for
   borders, buttons, icons, hover states, and the top bar border-bottom
   on the navbar. Dark sections use `#292c31`.
2. **Split logo in navbar.** "HAMMER" in dark text + "LY" in yellow,
   creating a distinctive two-tone brand mark.
3. **Filterable project grid.** Sidebar filter buttons (All, Buildings,
   Interior, Design, Isolation, Plumbing, Tiling) dynamically filter
   the project cards. Active filter highlighted in yellow.
4. **Stat counters on dark background.** Four icons + numbers (245
   projects, 535 houses, 288 staff, 750 clients) in a grid layout.
5. **Title decoration with bordered box.** Section titles have a
   yellow left border accent (`border-l-4 border-brand pl-4`).

## Naming

- **App name:** Hammerly
- **Package:** `@free-react-templates/hammerly`
- **Folder:** `apps/hammerly`
- **Homepage:** `https://hammerly.free.componentdock.com`
- **CNAME:** `hammerly.free.componentdock.com`

## Design reference (replication findings)

- Source: https://colorlib.com/wp/template/webuilder/
- Preview: https://preview.colorlib.com/theme/webuilder/
- jQuery + Bootstrap-based original; React + Tailwind recreation

## Design tokens

| Token  | Value     | Usage                    |
| ------ | --------- | ------------------------ |
| brand  | `#ffcd00` | Golden yellow accent     |
| dark   | `#292c31` | Dark section backgrounds |
| topbar | `#111f29` | Top bar background       |
| ink    | `#31353d` | Dark text                |
| body   | `#444444` | Body text                |
| light  | `#e8e8e8` | Light text on dark bg    |
| accent | `#ffcd00` | Same as brand for CTAs   |

Fonts: Montserrat (headings), Open Sans (body), PT Sans (section titles)

## Requirements

### Requirement: TopBar

The template SHALL include a top bar with dark background displaying contact information (phone, address, hours) and social media links.

#### Scenario: Contact information display

- Given the page is loaded
- Then the top bar shows phone number "+1 (234) 567-8900"
- And the top bar shows address "2811 City Street, New York, NY 10001"
- And the top bar shows hours "Mon – Fri: 8am – 7pm"

#### Scenario: Social links

- Given the page is loaded
- Then social links for Facebook, Twitter, and LinkedIn are present

### Requirement: Navbar

The template SHALL include a sticky white navbar with a split two-tone logo "HAMMERLY" (HAMMER dark + LY yellow), navigation links, and a yellow search icon.

#### Scenario: Split logo

- Given the page is loaded
- Then the navbar shows "HAMMER" and "LY" as separate text elements

#### Scenario: Navigation links

- Given the page is loaded
- Then links for Home, Projects, Services, About, Blog, and Contact are visible
- And each link has the correct href anchor

#### Scenario: Search button

- Given the page is loaded
- Then a search button with yellow circle styling is present

#### Scenario: Mobile menu toggle

- Given the page is loaded on mobile
- When the menu toggle is clicked
- Then the mobile menu opens
- And the toggle shows "Close menu"
- When a mobile link is clicked
- Then the mobile menu closes

### Requirement: Hero

The template SHALL include a full-width hero section with a background image, overlay text "We Build Dreams", subtitle "We are Hammerly", and a "Browse Services" CTA button.

#### Scenario: Hero content

- Given the page is loaded
- Then heading "We Build Dreams" is displayed
- And subtitle "We are Hammerly" is displayed
- And a "Browse Services" CTA button is present

### Requirement: GetQuote

The template SHALL include a yellow banner section with the text "Looking for a quality constructor?" and a "Get a Quote" button.

#### Scenario: Quote banner

- Given the page is loaded
- Then "Looking for a quality constructor?" text is shown
- And a "Get a Quote" button is present

### Requirement: WhoWeAre

The template SHALL include a split-layout "Who We Are" section with text on the left, an image on the right, and a yellow left-border accent on the heading.

#### Scenario: Split layout

- Given the page is loaded
- Then "Who We Are" heading is displayed with yellow left border
- And descriptive paragraphs are shown
- And a construction team image is displayed

### Requirement: Services

The template SHALL include a services section with 6 service cards (Pre-Construction, New Construction, Remodel, Location, Civil & Architecture, Engineering) and a right-side text panel.

#### Scenario: Six service cards

- Given the page is loaded
- Then 6 service cards are displayed
- And services include Pre-Construction, New Construction, Remodel,
  Location, Civil & Architecture, and Engineering

#### Scenario: Right text panel

- Given the page is loaded
- Then "Why Choose Our Services" heading is displayed

### Requirement: Projects

The template SHALL include a filterable project grid with sidebar filter buttons (All, Buildings, Interior, Design, Isolation, Plumbing, Tiling) that dynamically filter project cards.

#### Scenario: Filterable grid

- Given the page is loaded
- Then 8 project cards are displayed
- And filter buttons for All, Buildings, Interior, Design, Isolation,
  Plumbing, and Tiling are present

#### Scenario: Filter interaction

- Given the page is loaded
- When "Buildings" filter is clicked
- Then only Buildings-category projects are shown (3 items)

### Requirement: WorkWithUs

The template SHALL include a dark-background "Work With Us" section with centered text and a "Get a Quote" CTA button.

#### Scenario: CTA section

- Given the page is loaded
- Then "Work With Us" heading is displayed on dark background
- And a "Get a Quote" button is present

### Requirement: Team

The template SHALL include a team section displaying 4 team members with photos, names, roles, and social media links.

#### Scenario: Team members

- Given the page is loaded
- Then 4 team members are displayed with names, roles, and social links
- And members include Alex Johnson, Maria Garcia, David Lee, Sarah Chen

### Requirement: Counter

The template SHALL include a stat counters section on dark background displaying 4 statistics (245 projects, 535 houses, 288 staff, 750 clients) with icons.

#### Scenario: Statistics

- Given the page is loaded
- Then 4 stat boxes are displayed
- And stats show 245 Projects Done, 535 Houses Built, 288 Staff
  Members, and 750 Happy Clients

### Requirement: Testimonials

The template SHALL include a testimonials section titled "Client Says" with client quotes, photos, names, and roles.

#### Scenario: Client quotes

- Given the page is loaded
- Then "Client Says" heading is displayed
- And 3 testimonials with quotes, names, and roles are shown

### Requirement: LatestNews

The template SHALL include a blog/news section titled "Latest News" with 3 blog cards showing images, dates, titles, and excerpts.

#### Scenario: Blog cards

- Given the page is loaded
- Then "Latest News" heading is displayed
- And 3 blog posts with titles, dates, and excerpts are shown

### Requirement: Footer

The template SHALL include a dark 4-column footer with About section (logo + social links), Quick Links, Twitter feed, Contact info, and a copyright line linking to Component Dock.

#### Scenario: Four-column layout

- Given the page is loaded
- Then footer shows About section with logo and social links
- And Quick Links column is present
- And Twitter feed column is present
- And Contact Info column is present

#### Scenario: Component Dock credit

- Given the page is loaded
- Then footer contains a link to https://www.componentdock.com/
- And the link text is "Component Dock"
- And the link opens in a new tab

### Requirement: Accessibility

The template SHALL use semantic HTML elements, provide alt text for images, and include accessible labels on interactive elements.

#### Scenario: Semantic HTML

- Given the page is loaded
- Then all sections use appropriate semantic HTML elements
- And all images have alt text
- And buttons have accessible labels

### Requirement: Design tokens

The template SHALL apply the golden yellow accent (#ffcd00) for borders, buttons, and icons, dark backgrounds using #292c31, and top bar using #111f29.

#### Scenario: Brand colors applied

- Given the page is loaded
- Then yellow accent (#ffcd00) is used for borders, buttons, and icons
- And dark backgrounds use #292c31
- And the top bar uses #111f29

### Requirement: Google Fonts

The template SHALL load Montserrat, Open Sans, and PT Sans fonts via Google Fonts links in the HTML head.

#### Scenario: Font loading

- Given the page is loaded
- Then Montserrat, Open Sans, and PT Sans fonts are loaded via Google Fonts
