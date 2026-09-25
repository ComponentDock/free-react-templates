# Template: ArchVault (Architecture & Interior Design)

## Purpose

Recreation of ColorLib **Archs** (`https://colorlib.com/wp/template/archs/`).
Preview analyzed: `https://preview.colorlib.com/theme/archs/`
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

A clean, professional architecture and interior design firm template with a
dark overlay hero, service highlights, team grid, pricing cards, FAQ accordion,
testimonial carousel, project gallery, blog posts, and a contact form.

## Design tokens

Extracted from `https://preview.colorlib.com/theme/archs/css/style.css`:

| Token               | Value                       | Usage                                  |
| ------------------- | --------------------------- | -------------------------------------- |
| Brand primary       | `#ff5733` (coral-orange)    | Buttons, accents, highlights           |
| Background white    | `#ffffff`                   | Main section backgrounds               |
| Background light    | `#f8f9fa`                   | FAQ, alternate sections                |
| Background muted    | `#ebeef0`                   | Secondary section backgrounds           |
| Text dark           | `#333333`                   | Body text                              |
| Text muted          | `#999999`                   | Subtitles, muted labels                |
| Border light        | `#cccccc`                   | Card borders                           |
| Overlay dark        | `rgba(0, 0, 0, 0.6)`       | Hero image overlay                     |
| Dark accent         | `#000000`                   | Top bar background                     |
| Font family         | System stack (no Google Fonts) | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Icon font           | IcoMoon + Flaticon          | Section icons, social icons            |
| Button style        | `rounded-0` (square corners) | All primary buttons                    |
| Button color        | `#ff5733` (primary)         | CTA buttons throughout                 |

## Section structure (in order from live preview)

1. **Navbar** — Dark top bar with social icons (Twitter, Facebook, LinkedIn, Instagram), email, phone. Sticky navbar with logo left, nav links right (Home, About ▾, Our Team, Pricing, FAQ ▾, Projects, Blog, Services, Contact). Dropdown submenus for About and FAQ.
2. **Hero / Cover** — Full-width background image (`hero_bg_1.jpg`) with dark overlay. Centered play button (video link). Large uppercase headline: "Interior Design". Subtitle line below.
3. **Features Bar** — 3-column row with icon + heading: "Innovative Structure", "Architectural", "Interior Design". Border-bottom separator.
4. **About Us** — Two-column layout: left = large image; right = "About Us" heading, descriptive paragraphs, check-list (4 items with checkmark icons), CTA button "Learn More".
5. **Our Team** — Centered heading "Our Team". 3×2 grid of team member cards. Each card: circular photo, name, role, social icon links (hover overlay on image).
6. **Pricing** — Centered heading "Choose Your Plan". 3-column pricing cards: Starter ($19.99), Professional ($39.99), Enterprise ($99.99). Each card: plan name, price, feature checklist (some items muted/strikethrough for lower tiers), CTA button.
7. **FAQ** — Centered heading "Frequently Asked Questions". Bootstrap accordion with 5 questions, expand/collapse.
8. **Testimonials** — Centered heading "Testimonials". Owl-carousel slider with testimonial cards: quote text, person name, role.
9. **Projects Gallery** — Centered heading "Our Projects". 3-column grid of project images with hover captions (project name + category). Lightbox enabled.
10. **Blog / News** — Centered heading "Our Blog Posts". 3-column grid of blog cards: featured image, date, title, excerpt, "Read More" link.
11. **Services** — Centered heading "Our Services". 5-column row of service items with icon + title: "Innovative Structure", "Architectural Design", "Interior Design", "Modern Window Design", "Experts Architect". Section has light background (`#f8f9fa`).
12. **Contact** — Centered heading "Contact Us". Two-column: left = address/phone/email details; right = contact form (name, email, message, submit button). Section has light background.
13. **Footer** — Dark background. Multi-column: logo + description, navigation links, social icons. Copyright line at bottom. Must link `https://www.componentdock.com/`.

## Gherkin requirements

### Scenario: Hero section renders with background image and play button
```
Given I visit the ArchVault homepage
Then I should see a full-width hero section with a dark overlay background
And the hero should display the heading "Interior Design"
And the hero should show a play button for video
```

### Scenario: Features bar shows 3 service highlights
```
Given I visit the ArchVault homepage
Then I should see 3 feature items below the hero
And each feature should have an icon and a heading
And the features should be "Innovative Structure", "Architectural", "Interior Design"
```

### Scenario: About Us section displays content
```
Given I visit the ArchVault homepage
When I scroll to the About Us section
Then I should see a large image on the left
And I should see "About Us" heading on the right
And I should see a check-list with 4 items
And I should see a "Learn More" CTA button
```

### Scenario: Team grid shows 6 members
```
Given I visit the ArchVault homepage
When I scroll to the Our Team section
Then I should see a heading "Our Team"
And I should see 6 team member cards in a 3-column grid
And each card should show a photo, name, and role
```

### Scenario: Pricing cards display 3 plans
```
Given I visit the ArchVault homepage
When I scroll to the Pricing section
Then I should see 3 pricing cards side by side
And the plans should be "Starter", "Professional", "Enterprise"
And each card should show a price and feature list
And lower-tier features should be visually muted or struck through
```

### Scenario: FAQ accordion expands and collapses
```
Given I visit the ArchVault homepage
When I click on a FAQ question
Then the answer should expand
And when I click on another question
Then the first answer should collapse
```

### Scenario: Testimonials carousel displays
```
Given I visit the ArchVault homepage
When I scroll to the Testimonials section
Then I should see a carousel with testimonial cards
And each card should show a quote, person name, and role
```

### Scenario: Projects gallery renders images
```
Given I visit the ArchVault homepage
When I scroll to the Our Projects section
Then I should see a grid of project images
And each project should have a name and category label
And clicking an image should open a lightbox
```

### Scenario: Blog section shows post cards
```
Given I visit the ArchVault homepage
When I scroll to the Blog section
Then I should see 3 blog post cards
And each card should have an image, date, title, and excerpt
And each card should have a "Read More" link
```

### Scenario: Services section lists 5 services
```
Given I visit the ArchVault homepage
When I scroll to the Services section
Then I should see 5 service items with icons
And the section should have a light background
```

### Scenario: Contact form is functional
```
Given I visit the ArchVault homepage
When I scroll to the Contact section
Then I should see a form with name, email, and message fields
And I should see contact details on the left (address, phone, email)
And submitting empty fields should show validation errors
```

### Scenario: Footer links to Component Dock
```
Given I visit the ArchVault homepage
When I scroll to the footer
Then I should see a link to https://www.componentdock.com/
And the link text should reference "Component Dock"
```

### Scenario: Navbar is sticky and responsive
```
Given I visit the ArchVault homepage
When I scroll down the page
Then the navbar should remain fixed at the top
And on mobile viewport the navbar should collapse to a hamburger menu
```

## Verification checklist

- [ ] All sections render in the correct order as listed
- [ ] Brand color `#ff5733` used for buttons and accents throughout
- [ ] Square button style (`rounded-0`) on all CTA buttons
- [ ] Hero section has dark overlay on background image
- [ ] Team grid shows exactly 6 members in 3-column layout
- [ ] Pricing cards display 3 tiers with correct price values
- [ ] FAQ accordion expands/collapses correctly
- [ ] Testimonials carousel scrolls through cards
- [ ] Projects gallery opens lightbox on click
- [ ] Blog cards show image, date, title, excerpt, read-more link
- [ ] Services section has light background (`#f8f9fa`)
- [ ] Contact form validates required fields
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code, comments, or assets
- [ ] Placeholder images use `https://picsum.photos/seed/archvault-<n>/`
- [ ] Navbar is sticky with dropdown menus
- [ ] 100% test coverage on all new code
- [ ] `npm run verify:app archvault` passes
