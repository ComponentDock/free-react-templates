# Template: Strategos (Consulting / Business Agency)

## Purpose

Recreation of ColorLib "Conbusi" consulting template as a single-page React 19 + Vite + Tailwind CSS 4 + TypeScript app.

- **Source:** https://colorlib.com/wp/template/conbusi/
- **Preview analyzed:** https://preview.colorlib.com/theme/conbusi/ (200 OK — full DOM + CSS extracted)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/conbusi-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Package:** `@free-react-templates/strategos`
- **Deploy:** `strategos.free.componentdock.com`

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand | `#0181f5` | Vibrant blue — CTA buttons (gradient start), accent |
| Secondary blue | `#5DB2FF` | Lighter blue — button gradient end, links, outline buttons |
| Headings color | `#001D38` | Dark navy — all section headings, top bar bg |
| Body text | `#707070` | Medium gray — paragraph text |
| Body font | Poppins (Google Fonts) | weights: 300, 400, 500, 600, 700 — fallback sans-serif |
| Button primary (`.boxed-btn3`) | Gradient `#0181f5` → `#5DB2FF`, border-radius 30px | Pill-shaped, white text, 14px 40px padding |
| Button outline (`.boxed-btn3-line`) | Border `#5DB2FF`, color `#5DB2FF`, radius 30px | Transparent bg, hover fills #5DB2FF |
| Top bar bg | `#001D38` dark navy | White text, hidden on mobile |
| Navbar | White background, sticky | Logo left, links center |
| Counter area | Dark bg image + overlay | White text and icons, 4-column metrics |
| Information/CTA area | Dark bg image + overlay | White text, large heading, CTA button |
| Footer top | White background | 4-column layout |
| Footer text | `#919191` gray | Copyright line |
| Footer links | `#5DB2FF` | Accent blue |
| Service card accent colors | `#6382e6`, `#e66686`, `#f09359`, `#73fbaf`, `#a367e7` | SVG icon tints per card |
| Section heading | `#001D38`, 46px, weight 300 | Light-weight large headings |
| Section border bottom | `#E8E8E8` | Thin border separator |
| Border radius (cards) | 10px | Accordion images, general cards |

## Gherkin Requirements

### Top Contact Bar

```gherkin
Scenario: Top contact bar displays contact info and social links
  Given the user loads the page
  Then a dark navy top bar (#001D38) is visible with white text
  And it contains "Welcome to Strategos consulting service" on the left
  And an email address (info@docmed.com) and phone number on the right
  And social media icon links (LinkedIn, Facebook, Google+) on the far right
  And the top bar is hidden on mobile and tablet (< lg breakpoint)
```

### Navigation Bar

```gherkin
Scenario: Navbar shows brand logo and navigation links
  Given the user loads the page
  Then a sticky white navigation bar is visible below the top bar
  And it contains the brand logo on the left
  And navigation links: Home (active), Pages (with dropdown), Services, Case Study, Blog (with dropdown), Contact
  And a "Get a Quote" CTA button on the right

Scenario: Pages dropdown shows sub-items
  Given the navbar is visible
  When the user clicks or hovers on "Pages"
  Then a dropdown appears with: Case Details, About, Elements

Scenario: Blog dropdown shows sub-items
  Given the navbar is visible
  When the user clicks or hovers on "Blog"
  Then a dropdown appears with blog category links
```

### Hero Carousel

```gherkin
Scenario: Hero carousel displays with background images and CTAs
  Given the user loads the page
  Then a full-width hero carousel is visible
  And it contains 2 alternating slides with background images and dark overlay
  And each slide shows "Big Opportunity for your Business" heading
  And each slide has an "Our Services" pill-shaped CTA button
  And the carousel auto-rotates between slides
  And dots/indicators are present for manual navigation
```

### Services Section

```gherkin
Scenario: Services section displays 6 service cards
  Given the user scrolls past the hero carousel
  Then a services section appears on white background
  And a centered "What we Do?" heading is displayed
  And 6 service cards are shown in a 3-column grid:
    | Title                  | Description                              |
    | Marketing & SEO Agency | Esteem spirit temper too say adieus...   |
    | Startup Agency         | Esteem spirit temper too say adieus...   |
    | Corporate Business     | Esteem spirit temper too say adieus...   |
    | Finance Solution       | Esteem spirit temper too say adieus...   |
    | Food & Restaurant      | Esteem spirit temper too say adieus...   |
    | Travel Agency          | Esteem spirit temper too say adieus...   |
  And each card has a centered SVG icon, title, short description, and "Learn More" link
```

### About Info Section

```gherkin
Scenario: About section shows content and image side by side
  Given the user scrolls past services
  Then an about section appears on white background
  And the left column shows:
    | Element | Detail |
    | Title | "Why our Consulting?" |
    | Body | Description paragraph about consulting services |
    | Button | "About Us" pill-shaped CTA button |
  And the right column shows a large illustration/image
  And the layout is 2-column (50/50 split)
```

### Counter / Stats Section

```gherkin
Scenario: Counter section displays 4 key metrics
  Given the user scrolls past the about section
  Then a dark counter section is visible with background image and overlay
  And 4 metrics are displayed in a row:
    | Number | Label            |
    | 200+   | Team Members     |
    | 97%    | Business Success |
    | 5628   | Happy Client     |
    | 5637   | Business Done    |
  And each metric has a small SVG icon above the number
  And all text is white on the dark background
```

### Case Study Section

```gherkin
Scenario: Case study section shows portfolio carousel
  Given the user scrolls past the counter section
  Then a case study section appears on white background
  And a centered "Case Study" heading is displayed
  And a carousel of 4 case study cards is shown, each with:
    | Element | Detail |
    | Thumbnail | Project image |
    | Category | "Finance Solution" label |
    | Title | "Consumer Products Consulting" (linked) |
  And a "More Cases" outline button is centered below the carousel
```

### Accordion FAQ Section

```gherkin
Scenario: FAQ section shows accordion with image
  Given the user scrolls past case studies
  Then a FAQ section appears on white background
  And the left column shows a large image (rounded corners, border-radius 10px)
  And the right column shows a "Frequently ask" heading and 3 accordion items:
    | Question | Answer |
    | Adieus who direct esteem It esteems luckily? | Esteem spirit temper... |
    | Who direct esteem It esteems? | Esteem spirit temper... |
    | Duis consectetur feugiat auctor? | Esteem spirit temper... |
  And accordion items expand/collapse on click
  And only one item is expanded at a time
```

### Team Section

```gherkin
Scenario: Team section shows 3 expert team members
  Given the user scrolls past the FAQ
  Then a team section appears on white background
  And a centered "Expert Team" heading is displayed
  And 3 team member cards are shown in a row:
    | Name           | Role         |
    | Milani Mou     | Photographer |
    | Jasmine Pinky  | Photographer |
    | Piya Zosoldos  | Photographer |
  And each card shows a team member photo, name, role, and social media icons (Facebook, Twitter, Instagram)
```

### Information / CTA Section

```gherkin
Scenario: Information CTA section with dark overlay
  Given the user scrolls past the team section
  Then a full-width dark section with background image and overlay appears
  And centered white text reads "For Any Information Call Us"
  And a subtitle paragraph is displayed below
  And a pill-shaped CTA button shows a phone number: +10 673 763 6786
  And the section has generous vertical padding
```

### Footer

```gherkin
Scenario: Footer displays 4 columns on white background
  Given the user scrolls to the bottom
  Then a white background footer is visible with 4 columns:
    | Column | Content |
    | Brand | Logo, email, phone, address, social icons (Facebook, Twitter, Instagram) |
    | Services | Marketing & SEO, Startup, Finance solution, Food, Travel |
    | Useful Links | About, Blog, Contact, Appointment |
    | Subscribe | Email input field + "Subscribe" button + description text |
  And a bottom copyright bar with "All rights reserved" text
  And a "Component Dock" attribution link replacing the original Colorlib credit
```

## Verification Checklist

- [ ] All 11 sections present in correct order (TopBar → Navbar → Hero → Services → About → Counter → CaseStudy → FAQ → Team → Info CTA → Footer)
- [ ] Design tokens match: `#0181f5` primary blue, `#5DB2FF` secondary, `#001D38` headings/navy, Poppins font
- [ ] Top contact bar: dark navy, contact info + social links, hidden on mobile
- [ ] Navbar: sticky white, logo, 6 nav items + dropdowns + CTA button
- [ ] Hero carousel: 2 slides with bg images, dark overlay, centered heading + CTA
- [ ] Services: 6 cards in 3-col grid with SVG icons and "Learn More" links
- [ ] About: 2-column (text left, image right), heading + body + CTA button
- [ ] Counter: dark overlay bg, 4 metrics with icons and white text
- [ ] Case Study: carousel of 4 cards, "More Cases" outline button
- [ ] FAQ: accordion with 3 collapsible items, image on left
- [ ] Team: 3 member cards with photos, names, roles, social icons
- [ ] Info CTA: dark overlay bg, large heading, phone number button
- [ ] Footer: 4-col white bg, services links, subscribe form, Component Dock attribution
- [ ] Responsive: mobile-friendly at all breakpoints
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All buttons use pill shape (border-radius: 30px)
