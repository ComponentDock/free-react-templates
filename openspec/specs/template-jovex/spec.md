# Template: Jovex (Personal Portfolio)

## Purpose

Recreation of ColorLib "Jonson" personal portfolio template.
- **Source:** https://colorlib.com/wp/template/jonson/
- **Preview:** https://preview.colorlib.com/theme/jonson/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jonson-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Personal portfolio / designer showcase

## Design Tokens

Extracted from the ColorLib preview stylesheet (`assets/css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Font family | `"Poppins", sans-serif` (weights 200–800) | All text |
| Brand color | `#670000` (deep maroon/crimson) | Headings, footer bg, primary buttons, hero subtitle |
| Accent color | `#FFEFAE` (light cream/yellow) | Section backgrounds (expertise), button bg (CV, submit), footer form inputs |
| Body text | `#000000` | Paragraphs |
| Secondary text | `#635c5c` | Minor text |
| Footer form border | `#853023` | Input borders in footer |
| Button border-radius | `0px` (sharp corners) | All buttons |
| Button letter-spacing | `3px` | CTA buttons |
| Hero h1 size | `280px` (responsive down to 50px) | Hero name |
| Hero subtitle | `30px, font-weight 300, color #670000` | Hero role |
| Slider min-height | `960px` | Hero section |
| Gallery image height | `535–565px` | Portfolio grid |
| Form input height | `50px` | Contact form |
| Submit button | Full width, `60px` height, bg `#FFEFAE`, color `#670000`, no border-radius | Contact form |
| Footer background | `#670000` | Entire footer wrap |

## Section Order (top to bottom)

1. **Header** — Transparent sticky navbar. Logo left, nav links center (Home, About, Portfolio, Blog), "Let's Talk" CTA button right. Mobile hamburger menu.
2. **Hero** — Full-width hero area. Very large uppercase name (280px), subtitle "Digital Product Designer", animated/rotating text "Head of design at [Company]". Dark maroon text on white/light bg.
3. **About** — Two-column layout. Left: "About" heading + two bio paragraphs. Right: portrait image. Below: stats row (3 items: years of experience, investment amount, industry awards).
4. **Experience** — Full-width section. "Experience" heading, stacked entries each with job title, date range, and company link with external icon.
5. **Education** — Full-width section. "Education" heading, stacked entries matching experience format (degree name, date range, institution link).
6. **My Expertise** — Light cream `#FFEFAE` background. Three-column card grid: Experience Design, Interaction Design, Front-end Design. Each card has title + short description.
7. **Gallery / Selected Portfolios** — 2x2 image grid. Each image has an overlay with a zoom/plus icon on hover. Images fill the card area (535–565px height).
8. **Footer** — Dark maroon `#670000` background. Two sub-sections:
   - **CTA bar:** "Do you want to know more about me?" heading + "Download CV" button (cream bg).
   - **Contact form:** Name, Email, Subject inputs + Message textarea + "Send Message" submit button (cream bg, full width).
   - **Footer bottom:** Social icons (Twitter, Facebook, Pinterest, Globe, Instagram) left, copyright text right.

## Gherkin Requirements

### Scenario: Header renders with navigation links
```
Given the user loads the Jovex template
Then the header displays a logo
And the navigation links are "Home", "About", "Portfolio", "Blog"
And a "Let's Talk" button is visible in the header
```

### Scenario: Hero section displays name and rotating role
```
Given the user loads the Jovex template
Then the hero shows a large name heading
And the hero shows "Digital Product Designer" subtitle
And the hero shows a rotating/animated text element with company names
```

### Scenario: About section shows bio and stats
```
Given the user scrolls to the About section
Then there is an "About" heading
And two paragraphs describe the designer's background
And a portrait image is displayed on the right
And a stats row shows 3 items: experience years, investment amount, and awards
```

### Scenario: Experience section lists work history
```
Given the user scrolls to the Experience section
Then there is an "Experience" heading
And multiple experience entries are listed
And each entry has a job title, date range, and company link
```

### Scenario: Education section lists education history
```
Given the user scrolls to the Education section
Then there is an "Education" heading
And multiple education entries are listed
And each entry has a degree name, date range, and institution link
```

### Scenario: My Expertise section shows skill cards
```
Given the user scrolls to the My Expertise section
Then there is a "My Expertise" heading
And 3 skill cards are displayed: "Experience Design", "Interaction Design", "Front-end Design"
And each card has a title and short description
And the section has a light cream background (#FFEFAE)
```

### Scenario: Gallery section shows portfolio grid
```
Given the user scrolls to the Selected Portfolios section
Then there is a "Selected Portfolios" heading
And 4 portfolio images are displayed in a 2x2 grid
And each image has an overlay with a zoom icon on hover
```

### Scenario: Footer contains contact form and social links
```
Given the user scrolls to the footer
Then there is a "Do you want to know more about me?" heading
And a "Download CV" button is displayed
And a contact form shows Name, Email, Subject, and Message fields
And a "Send Message" submit button is shown
And social media icons are displayed (Twitter, Facebook, Pinterest, Globe, Instagram)
And copyright text is shown
And a "Component Dock" link is present in the footer
```

### Scenario: Contact form has required fields
```
Given the user views the contact form
Then the form has a Name input field
And the form has an Email input field
And the form has a Subject input field
And the form has a Message textarea
And the form has a "Send Message" submit button
```

### Scenario: Responsive design adapts to mobile
```
Given the user views the template on a mobile device
Then the navigation collapses to a hamburger menu
And the hero name text scales down appropriately
And the 2-column layouts stack to single column
And the 3-column expertise cards stack vertically
And the 2x2 gallery grid stacks to 1 column
```

## Verification Checklist

- [ ] Header: transparent sticky nav, logo, nav links, CTA button, mobile hamburger
- [ ] Hero: large name, subtitle, animated rotating text, full-width layout
- [ ] About: heading, bio text, portrait image, 3 stats items
- [ ] Experience: heading, stacked entries with title + date + company link
- [ ] Education: heading, stacked entries matching experience format
- [ ] My Expertise: cream bg, 3 skill cards with title + description
- [ ] Gallery: 4 images in 2x2 grid, hover overlay with zoom icon
- [ ] Footer: maroon bg, CTA heading, Download CV button, contact form, social icons, copyright
- [ ] Contact form: Name, Email, Subject, Message, Send Message button
- [ ] Footer includes "Component Dock" link
- [ ] All sections use Poppins font
- [ ] Brand color #670000 used for headings, footer bg, buttons
- [ ] Accent color #FFEFAE used for section bg, buttons, form inputs
- [ ] Buttons have sharp corners (border-radius: 0)
- [ ] Responsive: hamburger nav, stacked layouts on mobile
- [ ] Placeholder images use picsum.photos
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Tests: 100% coverage with Vitest + Testing Library
- [ ] Build succeeds: `npm run build` in app workspace
- [ ] Lint passes: no errors
- [ ] Typecheck passes: strict TypeScript
