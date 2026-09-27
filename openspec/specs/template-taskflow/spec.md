# Template: TaskFlow (Personal Portfolio / Creative Agency)

## Purpose

Recreation of the ColorLib **Work** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source:** ColorLib "Work" — https://colorlib.com/wp/template/work/
- **Preview:** https://preview.colorlib.com/theme/work/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/work-free-template.jpg
- **New name:** `taskflow` (apps/taskflow, `@free-react-templates/taskflow`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand color | `#F75940` | Orange-red. Used on links, buttons, selection highlight, active states, focus borders |
| Brand hover | `#f86e58` | Slightly lighter variant for hover/active |
| Font family | `"Quicksand", Arial, sans-serif` | Google Fonts, weights 300/400/500/700 |
| Body font size | `15px` (16px on mobile) | |
| Body text color | `rgba(0, 0, 0, 0.7)` | |
| Heading color | `#000` | All h1–h6 |
| Link color | `#F75940` | |
| Button border-radius | `2px` | Minimal rounding |
| Button font | 12px, uppercase, letter-spacing 1px | |
| Button padding | `8px 15px` | |
| Button primary bg | `#F75940` | White text, 2px solid border |
| Button primary hover | `#f86e58` | |
| Section meta heading | `#999` color, uppercase, small | `.heading-meta` class |
| CTA section bg | `#fafafa` | `.colorlib-bg-color` |
| Sidebar bg | `#fff` | Fixed left, 20% width |
| Sidebar logo | Black bg, white text, uppercase, letter-spacing 10px | |
| Nav items | Uppercase, 12px, 1px letter-spacing, `rgba(0,0,0,0.4)` default, `#000` active | |
| Selection | White text on `#F75940` bg | |
| Form controls | Border-radius 0, transparent bg, border `rgba(0,0,0,0.1)`, focus border `#F75940` | |

## Section structure (from preview DOM, in order)

1. **Sidebar (fixed left)** — Logo ("TaskFlow"), navigation (Home, Work, About, Services, Blog, Contact), footer with copyright + social icons (Facebook, Twitter, Instagram, LinkedIn)
2. **Hero Slider** — Full-height flexslider with 3 slides. Each slide: background image with dark overlay, centered text (h1 headline + h2 subtitle + "Learn More" CTA button). Slides: "Strategic Design for Brands", "Creators of Brands Template", "Design & develop functional sites"
3. **About** — Two overlapping images (left, col-md-6) + description (right, col-md-6) with heading meta "Welcome & Introduce", name "Hola! my name is Louie Jie!", paragraph, and accordion (3 panels: "Why choose me?", "What I do?", "My Specialties")
4. **Services / Expertise** — Meta heading "What I do?", heading "Here are some of my expertise", 6 feature cards in 2-column layout (Branding, Web Design, SEO, Web Development, UI, Help & Support). Each card: icon + h3 title + paragraph
5. **Work / Portfolio** — Meta heading "My Work", heading "Recent Work", 6 project cards (2-column grid). Each: background image, overlay with title + category tags + social metrics (share, eye count, heart count)
6. **Blog** — Meta heading "Read", heading "Recent Blog", 3 blog cards (3-column). Each: image, date + category + comment count, title, excerpt, "Read More" link
7. **CTA / Get in Touch** — `#fafafa` background, heading "Get in Touch!", description paragraph, "Contact me!" button

## Gherkin requirements

### Scenario: Sidebar navigation renders correctly
- Given the page loads
- Then a fixed sidebar is visible on the left
- And the sidebar contains a logo "TaskFlow" in black box with white text
- And the sidebar has navigation links: Home, Work, About, Services, Blog, Contact
- And the sidebar footer shows copyright and social media icon links

### Scenario: Hero slider displays slides
- Given the page loads
- Then a full-height hero slider is visible
- And slide 1 shows heading "Strategic Design for Brands" with a "Learn More" button
- And slide 2 shows heading "Creators of Brands Template"
- And slide 3 shows heading "Design & develop functional sites"
- And slides transition automatically or via navigation

### Scenario: About section shows introduction
- Given the page loads
- Then the About section displays two overlapping images on the left
- And a "Welcome & Introduce" meta heading is visible
- And the name heading "Hola! my name is Louie Jie!" is shown
- And a descriptive paragraph is present
- And an accordion with 3 panels is rendered: "Why choose me?", "What I do?", "My Specialties"

### Scenario: Accordion panels expand and collapse
- Given the About section accordion is visible
- When the user clicks "What I do?"
- Then the "Why choose me?" panel collapses
- And the "What I do?" panel expands showing its content
- When the user clicks "My Specialties"
- Then "What I do?" collapses and "My Specialties" expands

### Scenario: Services section displays expertise cards
- Given the page loads
- Then the Services section shows meta heading "What I do?"
- And heading "Here are some of my expertise"
- And 6 service cards are displayed in 2 columns: Branding, Web Design, SEO, Web Development, UI, Help & Support
- And each card has an icon, title, and description paragraph

### Scenario: Work/Portfolio grid displays project cards
- Given the page loads
- Then the Work section shows meta heading "My Work"
- And heading "Recent Work"
- And 6 project cards are displayed in a 2-column grid
- And each card shows a background image with overlay
- And each card displays title, category tags, and social metrics (share, views, likes)

### Scenario: Blog section displays recent posts
- Given the page loads
- Then the Blog section shows meta heading "Read"
- And heading "Recent Blog"
- And 3 blog cards are displayed in a 3-column layout
- And each card shows an image, date, category, comment count, title, excerpt, and "Read More" link

### Scenario: CTA section renders contact prompt
- Given the page loads
- Then the CTA section has a light gray (#fafafa) background
- And heading "Get in Touch!" is visible
- And a description paragraph is shown
- And a "Contact me!" button is displayed

### Scenario: Brand colors and fonts are applied correctly
- Given the page loads
- Then headings use the Quicksand font family
- And body text uses rgba(0,0,0,0.7)
- And links and buttons use #F75940 brand color
- And buttons have 2px border-radius, uppercase text, 12px font size

### Scenario: Responsive layout adapts to mobile
- Given the viewport width is less than 768px
- Then the sidebar slides off-screen and is toggled by a hamburger menu
- And the hero slider text remains readable
- And service cards stack vertically
- And work portfolio cards stack vertically
- And blog cards stack vertically

## Verification checklist

- [ ] Sidebar renders with logo, nav links, and footer
- [ ] Hero slider shows 3 slides with backgrounds, headings, and CTA buttons
- [ ] About section shows images, description, and working accordion
- [ ] Services section shows 6 expertise cards in 2-column grid
- [ ] Work section shows 6 project cards with image overlays and metrics
- [ ] Blog section shows 3 blog cards in 3-column layout
- [ ] CTA section shows heading, description, and contact button
- [ ] Brand color #F75940 applied to links, buttons, selection
- [ ] Quicksand font loaded and applied to headings and body
- [ ] Buttons styled: 2px radius, uppercase, 12px, correct padding
- [ ] Responsive: sidebar collapses on mobile, grid stacks
- [ ] No references to ColorLib in app code
- [ ] Footer links to componentdock.com
