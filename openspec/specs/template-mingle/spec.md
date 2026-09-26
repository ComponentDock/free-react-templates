# Template: Mingle (Personal Portfolio / Resume)

## Purpose

Recreation of ColorLib **Meetme** as a React 19 + Vite + Tailwind 4 + TypeScript
personal portfolio / resume template.

- **Source:** https://colorlib.com/wp/template/meetme/
- **Preview:** https://preview.colorlib.com/theme/meetme/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/mingle`

### Section structure (order preserved 1:1 from preview DOM)

1. **Header (Navbar)** — transparent absolute overlay, logo left, right-aligned nav links (Home, About, Services, Pages dropdown, Blog dropdown, Contact). On scroll: fixed black background.
2. **Hero Banner** — purple-to-cyan gradient background (`#766dff` → `#88f3ff`), white card overlapping downward, two-column layout: profile photo left, text right (greeting, name, role, bio, contact info list, social icons row).
3. **Welcome / About Myself** — two-column: left side has "About Myself" heading + paragraph + 3 stat cards (Total Donation, Total Projects, Total Volunteers) in bordered boxes; right side has 5 animated progress bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%).
4. **Tabs (Experience / Education)** — tabbed section with two tabs "My Experiences" and "My Education", each containing a timeline list of 3 entries with date left + company/role right. Active tab has gradient underline.
5. **Features (Offerings)** — 3-column grid of feature cards (Architecture, Interior Design, Concept Design) with icon + heading + paragraph, light purple background `#f9f9ff`.
6. **Gallery (Portfolio)** — filterable image grid (All, Vector, Raster, UI/UX, Printing), 6 project cards in 3-column layout, each with image overlay icon + title + subtitle, "Load More" button at bottom.
7. **Testimonials** — carousel/slider of testimonial cards, italic quote + author name + star rating (4.5 stars), white cards on light purple background `#f9f9ff`.
8. **Footer** — black background (`#000`), 3-column: About Me text + Newsletter signup form (email input + submit button) + Follow Me social links.

---

## Design Tokens

Extracted from `css/style.css` at the ColorLib preview.

| Token | Value | Usage |
|---|---|---|
| brand-purple | `#766dff` | Gradient start, buttons, progress bars, social hover |
| brand-cyan | `#88f3ff` / `#86e8ff` | Gradient end |
| text-heading | `#222222` | All headings, name |
| text-body | `#777777` | Body text, descriptions |
| bg-light | `#f9f9ff` | Feature area, testimonials section backgrounds |
| bg-dark | `#000` | Footer background, fixed header on scroll |
| border | `#eeeeee` | Card borders, dividers, skill progress borders |
| progress-bg | `#e8e8e8` | Progress bar track, social icon circles |
| star-color | `#ffc000` | Testimonial star ratings |
| gradient-main | `linear-gradient(to right, #766dff, #86e8ff)` | Buttons, social hover, newsletter submit, welcome icons |
| font-heading | `"Heebo", sans-serif` | All headings (h1–h6) — load via Google Fonts |
| font-body | `"Roboto", sans-serif` | Body text, nav links, form elements — load via Google Fonts |
| radius-card | `12px` | Hero white card box |
| radius-button | `0px` (sharp) | Main CTA buttons |
| radius-icon | `5px` | Social icon circles, welcome stat cards |
| radius-progress | `10px` | Skill progress bar tracks and bars |

### Additional progress-bar accent colors (gallery section)

- `#6382e6` (blue)
- `#e66686` (pink)
- `#f09359` (orange)
- `#73fbaf` (green)
- `#a367e7` (purple)

---

## Gherkin Requirements

### Background
Given the template is served at its deployment URL
And the browser has loaded the page successfully

### Scenario: Header / Navbar
Given the user views the page
Then a transparent overlay navbar is visible with the logo on the left
And nav links are right-aligned: Home, About, Services, Pages, Blog, Contact
When the user scrolls down
Then the navbar becomes fixed with a black background
And the nav text remains white

### Scenario: Hero Banner
Given the user is at the top of the page
Then a gradient banner (purple to cyan) spans the full width
And a white card overlaps the banner's bottom edge
And the card contains a profile photo on the left
And on the right: greeting text, person name, role title, short bio
And a contact info list with icons (date, phone, email, address)
And a row of 3 social icons (Facebook, Twitter, LinkedIn)
When the user hovers a social icon
Then the icon background changes to the purple-to-cyan gradient

### Scenario: Welcome / About Myself
Given the user scrolls past the hero
Then a section titled "About Myself" appears with a paragraph of text
And 3 stat cards are displayed in a row (Total Donation, Total Projects, Total Volunteers) each with an icon, number, and label
And the right column shows 5 skill progress bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%)
And each progress bar animates to its target width on scroll

### Scenario: Tabs (Experience / Education)
Given the user scrolls to the tabs section
Then two tabs are visible: "My Experiences" (active) and "My Education"
When the user clicks "My Education"
Then the education timeline is shown with 3 entries
And the active tab has a gradient underline indicator
When the user clicks "My Experiences"
Then the experience timeline is shown with 3 entries

### Scenario: Features / Offerings
Given the user scrolls to the features section
Then a heading "offerings to my clients" is displayed
And a subtitle paragraph is shown below the heading
And 3 feature cards are displayed in a 3-column grid
And each card has an icon, heading, and description paragraph
And the section background is light purple (#f9f9ff)

### Scenario: Gallery / Portfolio
Given the user scrolls to the gallery section
Then a heading "Our Latest Featured Projects" is shown
And filter buttons appear: All, Vector, Raster, UI/UX, Printing
And 6 project cards are displayed in a 3-column grid
And each card has an image, overlay icon, title, and subtitle
When the user clicks a filter (e.g., "Vector")
Then only projects matching that filter are visible
And a "Load More Items" button is shown at the bottom

### Scenario: Testimonials
Given the user scrolls to the testimonials section
Then a heading "Testimonials" is displayed
And a carousel shows testimonial cards
And each card has an italic quote, author name, and star rating (4.5 stars in gold)
And the section background is light purple (#f9f9ff)

### Scenario: Footer
Given the user scrolls to the footer
Then the footer has a black background (#000)
And it contains 3 columns: About Me (text), Newsletter (email input + submit), Follow Me (social icons)
And the newsletter submit button has the purple-to-cyan gradient
And a Component Dock link is present in the footer

---

## Verification Checklist

- [ ] All 8 sections present in correct order
- [ ] Gradient hero banner matches `#766dff` → `#88f3ff`
- [ ] Fonts loaded: Heebo (headings) + Roboto (body) via Google Fonts
- [ ] Navbar transparent overlay → fixed black on scroll
- [ ] Hero card overlaps gradient with 12px radius and box-shadow
- [ ] Skill progress bars animate to correct percentages
- [ ] Tabs switch between Experience and Education content
- [ ] Gallery filter buttons work (show/hide projects by category)
- [ ] Testimonials carousel renders cards with star ratings
- [ ] Footer black with 3 columns, newsletter form, social icons
- [ ] Footer links Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] CNAME: `mingle.free.componentdock.com`
- [ ] Package: `@free-react-templates/mingle`
- [ ] Placeholder images via `picsum.photos/seed/mingle-<n>/...`
- [ ] Tests: 100% lines/functions/branches/statements coverage
