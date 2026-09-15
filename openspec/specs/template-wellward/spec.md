# Template: Wellward (Health Awareness)

## Purpose

Recreation of ColorLib "Covid" template as a health-awareness single-page React app.

- **Source slug:** `covid`
- **Source URL:** https://colorlib.com/wp/template/covid/
- **Preview URL:** https://preview.colorlib.com/theme/covid/
- **New name:** `wellward` (apps/wellward, @free-react-templates/wellward)
- **Category:** Health / Awareness / NGO
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
| --- | --- | --- |
| primary | #6f42c1 | Purple — buttons, active nav, form focus, dropdown borders |
| green-accent | #a8df65 | Check-list success color |
| text | gray (default) | Body text color |
| heading-font | "Mulish" | Loaded via Google Fonts (weights 400, 700, 900) |
| body-font | "Mulish" | Same family, 400 weight |
| button-radius | 30px | Pill-shaped buttons |
| button-padding | 10px 30px | |
| button-transform | uppercase | Letter-spacing emphasis |
| bg-primary-light | rgba(111,66,193,0.05) | Very light purple tint for alternating sections |
| card-bg | #f8f9fa | Light gray card backgrounds |
| dropdown-hover | #eff1f3 | Nav dropdown hover |
| border-light | #dee2e6 | Subtle dividers |
| selection-bg | #000 | Black text selection |
| selection-fg | #fff | |

## Section order (from live DOM)

1. **Navbar** — Logo "Wellward" (with colored dot), nav links: Home, Prevention (dropdown), Symptoms, Blog, Contact. Sticky on scroll.
2. **Hero** — Split: left text (subheading "Health Awareness", heading "Stay Safe. Stay Home.", description, CTA button "How to prevent"); right illustration placeholder image.
3. **Statistics** — Centered heading "Health Statistics", 3 stat cards (Active Cases, Deaths, Recovered) each with a virus icon, number, label.
4. **About / What is** — Split: left image with "Watch the Video" overlay; right heading "What is a Health Crisis?", description, checklist, CTA "Learn more".
5. **Features Grid** — 4-column row: Protection, Prevention, Treatments, Symptoms icons with labels.
6. **Prevention** — bg-primary-light section. Left: 2x2 grid of prevention tips (Stay at home, Wear facemask, Keep social distancing, Wash your hands) as icon+heading+text cards. Right: heading, description, checklist, CTA "Read more about prevention".
7. **How to Protect** — Centered heading. Left: do/don't checklists. Right: illustration.
8. **Symptoms** — bg-primary-light section. Centered heading. 2x2 grid of symptom cards (High Fever, Cough, Sore Throat, Headache) each with image + description. Bottom: callout banner with help line button.
9. **News & Articles** — Centered heading. 3-column blog cards (thumbnail with date overlay, post meta, title).
10. **Footer** — About text + social icons (3 col), Quick Links, Helpful Links, Resources columns. Copyright with Component Dock link.

## Gherkin requirements

### Scenario: Navbar renders with correct links
```
Given the user loads the page
Then the navbar displays "Wellward" logo
And the navbar contains links: Home, Prevention, Symptoms, Blog, Contact
And the Prevention link has a dropdown with sub-links
```

### Scenario: Hero section displays correctly
```
Given the user loads the page
Then the hero shows heading "Stay Safe. Stay Home."
And the hero shows a subheading "Health Awareness"
And the hero shows a CTA button labeled "How to prevent"
And the hero shows an illustration on the right
```

### Scenario: Statistics section shows three stats
```
Given the user loads the page
Then three stat cards are visible
And each stat card has an icon, number, and label
And the labels are "Active Cases", "Deaths", "Recovered"
```

### Scenario: About section with video overlay
```
Given the user loads the page
Then the about section shows a "Watch the Video" overlay on the image
And the about section shows heading "What is a Health Crisis?"
And the about section has a checklist and a "Learn more" button
```

### Scenario: Prevention tips displayed on light background
```
Given the user loads the page
Then the prevention section has a light purple background
And four prevention tips are shown: Stay at home, Wear facemask, Keep social distancing, Wash your hands
And each tip has an icon and description
```

### Scenario: Symptoms section shows four symptom cards
```
Given the user loads the page
Then four symptom cards are displayed: High Fever, Cough, Sore Throat, Headache
And each card has an image and description
And a help line banner is shown at the bottom
```

### Scenario: News section shows three blog posts
```
Given the user loads the page
Then three blog cards are visible
And each card has a thumbnail, date overlay, post meta, and title
```

### Scenario: Footer has correct structure
```
Given the user loads the page
Then the footer shows an "About" section with social icons
And the footer shows Quick Links, Helpful Links, Resources columns
And the footer contains a "Made with Component Dock" attribution
```

### Scenario: Responsive layout
```
Given the user loads the page on a mobile viewport
Then the navbar collapses to a hamburger menu
And the hero stacks vertically
And the stat cards stack vertically
And the prevention grid stacks vertically
```

## Verification checklist

- [ ] All sections render without errors
- [ ] Navbar is sticky on scroll
- [ ] Prevention dropdown shows/hides on hover
- [ ] All CTA buttons have pill shape (border-radius 30px)
- [ ] Primary purple (#6f42c1) used consistently
- [ ] Font is Mulish throughout
- [ ] Statistics section shows 3 stat cards
- [ ] Symptoms section shows 4 symptom cards
- [ ] News section shows 3 blog cards
- [ ] Footer links to componentdock.com
- [ ] Responsive: hamburger nav on mobile
- [ ] Responsive: sections stack vertically on mobile
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] Footer link is "Component Dock"
