# Template: Roundtable (Conference / Workshop Event)

## Purpose

Recreation of the ColorLib **Workshop** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page conference/workshop event site.

- **Source:** https://colorlib.com/wp/template/workshop/
- **Preview:** https://preview.colorlib.com/theme/workshop/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/workshop-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and preview DOM:

| Token | Value | Notes |
|---|---|---|
| **Primary brand** | `#ff5733` | Orange-red accent (links, CTAs, text-primary) |
| **Accent dark** | `#c70039` | Darker red used in gradient |
| **Brand gradient** | `linear-gradient(to right, #c70039, #ff5733 70%)` | Hero heading text gradient, button backgrounds |
| **Body background** | `#232531` | Dark charcoal — entire page bg |
| **Footer background** | `#1b1d24` | Slightly darker than body |
| **Section light bg** | `#f4f5f9` | Light gray used in hover states, alternating rows |
| **Body text** | `#cfcfd1` | Light gray on dark bg |
| **Heading text (hero)** | Gradient `#c70039 → #ff5733` | Large gradient headings |
| **Speaker name text** | `#fff` (white) | On dark speaker cards |
| **Muted text** | `#818186` | Footer headings, secondary info |
| **Border light** | `#edf0f5` | Light borders between rows |
| **Border dark** | `#383b4f` | Dark borders in program/schedule rows |
| **Font family** | `"Roboto Mono", monospace` | Monospace aesthetic throughout |
| **Button radius** | `0` (sharp corners) | All buttons square/rectangular |
| **Button gradient** | `linear-gradient(to right, #c70039, #ff5733 70%)` | CTA buttons |
| **Dark overlay** | `rgba(0,0,0,0.6)` | Hero image overlay |
| **Accent border-top** | `2px solid #ff5733` | Tab active state |

## Gherkin requirements

### Section order (top to bottom)

1. Navbar
2. Hero
3. Speakers (4 speakers, alternating image/text layout)
4. Programs / Schedule (time-based agenda rows)
5. Sponsors (logo grid + "Be a Sponsor" CTA)
6. News / Blog (3-column card grid)
7. Footer (3-column: About, Quick Links, Connect + copyright)

### Navbar

```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user loads the page
  Then the navbar shows the logo "Roundtable" (text-only, no image)
  And the nav links are: Home, About Us, Speakers, News, Contacts
  And a "Buy Tickets" CTA button appears at the right
  And the navbar is fixed/sticky on scroll
  And a mobile hamburger menu appears on small screens

Scenario: Navbar logo uses brand gradient highlight
  Given the user views the navbar
  Then "Round" is displayed in white
  And "table" uses the primary brand color (#ff5733)
```

### Hero

```gherkin
Scenario: Hero section displays conference info
  Given the user loads the page
  Then the hero shows a caption "Conference 2025"
  And a large heading "Web Design Conference 2025" with gradient text
  And a date/location line "September 6th-7th, Minnesota, United States"
  And a "Buy Tickets" CTA button with gradient background
  And the hero has a dark background with subtle overlay
  And elements animate in with fade-up on scroll

Scenario: Hero heading uses brand gradient
  Given the user views the hero heading
  Then the heading text uses a linear-gradient from #c70039 to #ff5733
  And the font is Roboto Mono
  And font size is ~6rem on desktop, ~2rem on mobile
```

### Speakers

```gherkin
Scenario: Speakers section shows 4 speakers in alternating layout
  Given the user scrolls to the Speakers section
  Then a section heading "Speakers" appears on the left
  And a description paragraph appears beside it
  And 4 speaker cards are displayed, each with:
    | field | content |
    | image | placeholder person photo |
    | name  | white text, large |
    | role  | uppercase text in primary color (#ff5733) |
    | bio   | short description paragraph |
    | social links | Facebook, Twitter, GitHub icons |
  And speaker cards alternate image left/right layout
  And each card animates with AOS fade effects

Scenario: Speaker role text uses brand color
  Given the user views a speaker card
  Then the role label (e.g. "Web Designer") is uppercase
  And the role text color is #ff5733 (primary)
```

### Programs / Schedule

```gherkin
Scenario: Programs section shows time-based agenda
  Given the user scrolls to the Programs section
  Then a section heading "Programs" appears on the left
  And a description paragraph appears beside it
  And 6 schedule rows are displayed, each with:
    | field | content |
    | time  | e.g. "8:00 AM" in large white text |
    | title | session title in white |
    | speaker | speaker name (optional, omit for breaks) |
  And rows are separated by dark borders (#383b4f)
  And break rows (e.g. "Break With Snacks", "Break For Lunch") have no speaker
  And rows animate with AOS fade effects

Scenario: Schedule rows have consistent styling
  Given the user views the Programs section
  Then each row has a top and bottom border
  And the time column takes ~25% width
  And the title column takes ~75% width
```

### Sponsors

```gherkin
Scenario: Sponsors section shows logo grid
  Given the user scrolls to the Sponsors section
  Then a section heading "Sponsors" appears on the left
  And a description paragraph appears beside it
  And 6 sponsor logos are displayed in a 3-column grid
  And logos are grayscale or neutral by default
  And a "Be a Sponsor" CTA button appears centered below the grid
  And the CTA button uses the brand gradient
  And logos animate with AOS fade effects

Scenario: Be a Sponsor button matches brand style
  Given the user views the Sponsors section
  Then the "Be a Sponsor" button has sharp corners (border-radius: 0)
  And the button uses the gradient background (#c70039 → #ff5733)
  And the button text is white
```

### News / Blog

```gherkin
Scenario: News section shows 3 blog entry cards
  Given the user scrolls to the News section
  Then a section heading "News" appears on the left
  And a description paragraph appears beside it
  And 3 blog entry cards are displayed in a row, each with:
    | field | content |
    | image | thumbnail photo |
    | title | article title (links) |
    | meta  | author avatar + author name + date |
    | excerpt | short paragraph |
  And card titles link to # (placeholder)
  And the author name uses the primary color (#ff5733)
  And cards animate with AOS fade effects

Scenario: Blog entry meta shows author info
  Given the user views a blog entry
  Then a small circular author avatar appears
  And "By [Author Name]" text appears next to the avatar
  And a date follows the author name
```

### Footer

```gherkin
Scenario: Footer has 3 columns and copyright
  Given the user scrolls to the footer
  Then the footer background is darker than the body (#1b1d24)
  And column 1 shows "About Event" heading + description
  And column 2 shows "Quick Links" with links: About Us, Speakers, Gallery, Contact Us
  And column 3 shows "Connect with Us" with social icons (Facebook, Twitter, YouTube, Instagram)
  And a copyright line at the bottom with current year
  And the footer links to Component Dock (https://www.componentdock.com/)
  And footer headings use muted text color (#818186)
  And footer links are white, hover to #ff5733

Scenario: Footer attribution links to Component Dock
  Given the user views the footer copyright
  Then it displays "Made with ♥ by Component Dock" or equivalent
  And the Component Dock link points to https://www.componentdock.com/
```

## Verification checklist

- [ ] Spec matches section order: Navbar → Hero → Speakers → Programs → Sponsors → News → Footer
- [ ] Design tokens match: #ff5733 primary, #c70039 accent, gradient buttons, Roboto Mono font, sharp corners
- [ ] All 7 sections implemented as separate components in `src/components/`
- [ ] Speaker cards alternate image left/right layout (4 speakers)
- [ ] Program schedule has 6 rows with time + title + optional speaker
- [ ] Sponsors section has 3x2 logo grid + "Be a Sponsor" CTA
- [ ] News section has 3 blog entry cards with author meta
- [ ] Footer has 3 columns + copyright + Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/...
- [ ] `npm run spec:validate` passes
- [ ] App builds without errors (`npm run build`)
