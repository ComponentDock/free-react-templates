# Template: EduHaven (University / Education Website)

## Purpose

Recreation of ColorLib Education Wordpress Themes — a university/education website template with top utility bar, navigation with university branding, hero with student imagery, feature icons, admission call-to-action, and educational content sections.

- **Source:** https://colorlib.com/wp/template/education-wordpress-themes/
- **Preview:** https://preview.colorlib.com/theme/education-wordpress-themes/ (UNAVAILABLE at prep time — 404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/education-website-designs.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Source mapping

| Field         | Value                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| ColorLib slug | `education-wordpress-themes`                                                |
| Preview URL   | `https://preview.colorlib.com/theme/education-wordpress-themes/` (404)      |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/education-website-designs.jpg` |

## Design tokens (extracted from screenshot — preview unavailable)

### Fonts

- **Headings / hero title:** Serif font (likely "Playfair Display" or "Merriweather") — the "Kingster University" hero text uses a classic serif with high contrast
- **Body / nav / UI:** Sans-serif (likely "Open Sans" or "Roboto") — clean, modern sans-serif for navigation, descriptions, and UI elements

### Colors

| Token                | Value (estimated) | Usage                                                          |
| -------------------- | ----------------- | -------------------------------------------------------------- |
| Top bar background   | `#1B2A4A`         | Dark navy blue top utility bar                                 |
| Primary accent       | `#4CAF50` or `#43A047` | Green — active nav link, "Support KU" button, "Take A Tour" button border, accent text |
| Hero overlay         | Dark navy/black   | Semi-transparent overlay on hero background image              |
| Body background      | `#FFFFFF`         | White main background                                          |
| Heading text (dark)  | `#1B2A4A`         | Dark navy for section headings                                 |
| Body text            | `#666666` or `#777777` | Grey for paragraph text                                    |
| Feature icon color   | `#1B2A4A` or dark | Dark icons for feature row                                     |
| Admission section bg | `#1B2A4A`         | Dark navy blue background for admission CTA section            |
| Button "Take A Tour" | Dark bg with white text, green left border accent | CTA button style |
| "Support KU" button  | Green bg `#4CAF50`, white text | Top bar CTA button                                         |

### Layout

- **Top utility bar:** Full-width dark navy, contact info left (email, phone), utility links right (Alumni, Calendar, Portal) + green CTA button
- **Navbar:** White background, logo (crest/shield icon + university name) left, nav links center/right, search icon far right
- **Hero:** Full-width background image (student studying) with dark overlay, left-aligned text content, "Take A Tour" CTA button
- **Feature icons row:** 4-column grid below hero: icon + title + subtitle
- **Admission section:** Two-column — left: professor/instructor photo, right: dark navy bg with heading + green accent text + description
- Responsive: standard Bootstrap-like breakpoints

### Button styling

- "Take A Tour" button: dark background (or transparent with green left border), white text, rectangular/slightly rounded
- "Support KU" button: solid green `#4CAF50`, white text, rounded corners
- General buttons: medium padding, clean edges

## Structure (section order — from screenshot)

1. **Top Bar** — Full-width dark navy (#1B2A4A): left side = email icon + "contact@KUTheme.edu" + phone icon + "+1-3435-2356-222"; right side = "Alumni", "Calendar", "Portal" links + green "Support KU" button
2. **Navbar** — White background, logo = shield/crest icon + "Kingster University" text; nav links: Home (green active), Pages, Academics, Admissions, Courses, Athletics, University Life; search icon on far right; sticky on scroll
3. **Hero** — Full-width background image (student at desk), dark overlay, left-aligned: subtitle "The Best University Of The State" (white, smaller), main heading "Kingster University" (white, large serif, bold), "Take A Tour" button (dark bg, white text, green left border)
4. **Feature Icons** — White bg, 4-column row: University Life (building icon), Graduation (graduation cap icon), Athletics (trophy/sport icon), Social (people icon) — each with title + subtitle
5. **Apply for Admission** — Two-column: left = instructor/professor photo, right = dark navy bg section with "Apply for Admission" heading (white), green accent text "Fall 2019 applications are now open", description paragraph
6. **(Likely below fold — inferred from typical university templates):** Campus facilities/gallery, Events/News, Testimonials, Course listings, Faculty/Staff, Footer with university info + Component Dock link

## Gherkin scenarios

### Scenario: Top bar displays contact info and utility links

```
Given the user navigates to the EduHaven homepage
Then the top bar shows email "contact@KUTheme.edu" and phone "+1-3435-2356-222"
And utility links "Alumni", "Calendar", "Portal" are visible on the right
And a green "Support KU" button is present
```

### Scenario: Navigation has correct links

```
Given the user views the navbar
Then the university logo (crest icon + "EduHaven") is visible on the left
And nav links for Home, Pages, Academics, Admissions, Courses, Athletics, University Life are present
And a search icon is visible on the far right
```

### Scenario: Hero section renders correctly

```
Given the user views the hero section
Then a full-width background image is displayed with a dark overlay
And the subtitle "The Best University Of The State" is visible in white
And the main heading "EduHaven University" is visible in large white serif text
And a "Take A Tour" button is visible
```

### Scenario: Feature icons row shows four items

```
Given the user scrolls below the hero
Then four feature items are displayed in a row: University Life, Graduation, Athletics, Social
And each item shows an icon, title, and subtitle
```

### Scenario: Admission section displays correctly

```
Given the user scrolls to the admission section
Then a two-column layout is visible
And the left column shows a professor/instructor photo
And the right column has a dark navy background with "Apply for Admission" heading
And green accent text "applications are now open" is visible
And a description paragraph is present
```

### Scenario: Footer contains Component Dock link

```
Given the user scrolls to the footer
Then the footer has relevant university information
And a link to https://www.componentdock.com/ is present
And social media links are visible
```

## Verification checklist

- [ ] Top utility bar renders with contact info and utility links
- [ ] Green accent color used consistently for active nav, CTA buttons, accent text
- [ ] Navbar becomes sticky on scroll
- [ ] Hero section has parallax/fixed background with dark overlay
- [ ] Serif font used for main headings, sans-serif for body
- [ ] Feature icons row shows 4 items in a horizontal grid
- [ ] Admission section has correct two-column layout
- [ ] No references to ColorLib in any app source file
- [ ] Placeholder images use `https://picsum.photos/seed/eduhaven-<n>/<w>/<h>` pattern
- [ ] Icons use lucide-react (replacing Font Awesome)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] All sections have proper semantic HTML
- [ ] Responsive layout works on mobile (hamburger nav, stacked columns)
