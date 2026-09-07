# Template: Glider (Creative Agency)

## Purpose

Glider is a single-page CREATIVE AGENCY / PORTFOLIO template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bobsled" free template (source:
https://colorlib.com/wp/template/bobsled/), built under a DIFFERENT name
(**Glider**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery template by CodePixar: a full-viewport
page with a blue-to-cyan gradient body background, centered content sections
on white cards, and a multi-section creative agency layout. The page includes
a navbar, hero banner, working process steps, feature cards, portfolio
showcase, story section, newsletter subscription, contact form, and a footer
widget area with social links.

**WHAT MAKES GLIDER DISTINCT (signature behaviors):**

1. **Blue-cyan gradient body.** The entire page background is a linear
   gradient from `#4cd4e3` (cyan) at top to `#3e69fe` (blue) at bottom,
   applied to `body`. All sections sit on top of this gradient — hero and
   featured/story areas are transparent (showing the gradient), while
   working-process, remarkable-works, and subscription areas use white or
   light `#f9f9ff` cards.

2. **Pill-shaped transparent buttons.** The `.primary-btn` is a 20px
   border-radius pill with transparent background, 1px white border, and
   white text. On hover, the button fills with the gradient. This is the
   ONLY template in the series with transparent pill CTA buttons on a
   gradient body.

3. **Gradient-text accents.** Icon labels and button hover states use
   `-webkit-background-clip: text` with the blue-cyan gradient, creating
   gradient text effects on section titles and card labels.

4. **4-step working process with arrow connectors.** A horizontal row of
   4 icon boxes (120x120px, `border-radius: 3px`) connected by arrow
   images, each labeled (Researching → Wireframing → Prototyping → Final
   Design). The icon boxes have a light background with gradient-text
   labels.

5. **Alternating portfolio showcase.** Three "Remarkable Works" rows
   alternate image-left/text-right and text-left/image-right, each in a
   7:5 column split with box-shadow cards (`0px 15px 50px rgba(0,0,0,0.1)`).

6. **Story box with floating position.** The story section has a white
   card (`border-radius: 3px`, padding 60px 90px) positioned with
   `z-index: 2` over the gradient, offset from the left with a spacer
   column.

## Naming

- **New name:** Glider
- **Source name:** Bobsled
- **Source slug:** `bobsled`
- **Source URL:** https://colorlib.com/wp/template/bobsled/
- **Apps folder:** `apps/glider`
- **Package:** `@free-react-templates/glider`
- **No name collision** with `ls apps/` (confirmed: no "glider" folder exists)

## Design reference (replication findings)

### Preview DOM (reachable via https://preview.colorlib.com/theme/bobsled/)

Fetched and analyzed on 2026-09-07. The preview HTML is 17,947 bytes,
164 lines. Full template structure extracted (see Section order below).

**Section order (from DOM):**

1. **Navbar** — Logo image + nav links (Home, Generic, Elements) + hamburger
   menu (`.menu-bar` with `.lnr-menu` icon). Hidden nav on mobile.
2. **Hero / Banner** — Full-width gradient area. Container with 7-col left:
   uppercase h1 "Don't look anywhere, This is the best place on web" +
   subtext paragraph + "Get Started" pill button. Right side: decorative
   hero-bg.png illustration (50% width, absolute positioned).
3. **Working Process** — White background section. Section title "Our Working
   Process" centered. 4 icon boxes in a flex row with arrow images between
   them: Researching, Wireframing, Prototyping, Final Design.
4. **Featured / Exclusive Features** — Gradient background section. Section
   title "Our Exclusive Features" in white. 3 feature cards (col-md-4) each
   with: thumbnail image, title (Creative Design, Appropriate UX, Super
   Clean Code), description text, "Read More" pill button.
5. **Remarkable Works** — White background section. Section title "Remarkable
   Works" centered. 3 alternating rows: each has a 7:5 split with image on
   one side and text (title "Vector Illustration" + description + "View
   Project" button) on the other. Box-shadow cards.
6. **Story** — Gradient background section. Offset container (col-lg-1 spacer
   + col-lg-7 content). White card with "From the part of beginning"
   uppercase h6, paragraph, "Get Started" button.
7. **Subscription** — Light `#f9f9ff` background. Left: "Subscribe for our
   Newsletter" title + subtext. Right: email input + "Get Started" button.
8. **Contact Form** — Gradient background section. Section title "Keep in
   Touch" in white. Form with: name input, email input, textarea, "Send
   Message" button (right-aligned).
9. **Footer Widget** — Transparent background over gradient. 3 columns:
   Address, Email Address, Phone Number. Centered text in each.
10. **Footer** — Over gradient. Logo + copyright text ("Copyright 2017 |
    All rights reserved to Dinomuz inc.") + social icons (Facebook, Twitter,
    Dribbble, Behance). Border-top: 1px solid rgba(255,255,255,0.3).

### Design tokens (extracted from css/main.css)

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Poppins", sans-serif` | Body, all text (weights 300, 500, 600) |
| Body font size | `14px` | Base text |
| Body font weight | `300` | Light weight base |
| Body text color | `#777777` | Paragraphs, labels |
| Heading color | `#222222` | h2, h4, strong |
| Primary brand gradient | `#3e69fe` → `#4cd4e3` | Hero bg, featured bg, story bg, contact bg, button hover, gradient text |
| Body background | `linear-gradient(0deg, #4cd4e3, #3e69fe)` | Full page gradient (cyan top → blue bottom) |
| White | `#fff` | Text on gradient, card backgrounds, button text |
| Light section bg | `#f9f9ff` | Subscription area |
| Link/accent | `#3e69fe` | Anchor tags |
| Button border-radius | `20px` | Pill shape |
| Button style | transparent bg, 1px white border, white text | `.primary-btn` |
| Button hover | gradient fill | `.primary-btn:hover:after` |
| Icon box size | `120px × 120px` | Work process icons |
| Icon box radius | `3px` | Square-ish with slight rounding |
| Card shadow | `0px 15px 50px rgba(0,0,0,0.1)` | Remark cards |
| Story box padding | `60px 90px` | White card in story section |
| Footer border | `1px solid rgba(255,255,255,0.3)` | Separator above footer |
| Section padding | `100px 0` | All major sections |

### Screenshot (`bobsled-creative-website-template.jpg`)

The screenshot shows a creative agency template with:
- Blue-cyan gradient background visible behind all sections
- Hero area with large white uppercase headline and pill CTA button
- Working process section on white background with 4 icon steps
- Features section on gradient with 3 image cards
- Portfolio showcase with alternating image/text rows on white
- Story section with floating white card
- Newsletter subscription on light background
- Contact form on gradient
- Footer with social icons

## Gherkin requirements

### Scenario: Full page renders with gradient background
```gherkin
Given the user visits the Glider homepage
Then the page background should display a blue-to-cyan gradient
And all sections should be visible in order: navbar, hero, working process,
     features, remarkable works, story, subscription, contact, footer
```

### Scenario: Navbar displays logo and navigation links
```gherkin
Given the user visits the Glider homepage
Then the navbar should show a logo image on the left
And navigation links "Home", "Generic", "Elements" should be visible on desktop
And a hamburger menu icon should be visible on mobile
```

### Scenario: Hero banner shows headline and CTA
```gherkin
Given the user visits the Glider homepage
Then the hero section should display an uppercase headline
And a subtitle paragraph should appear below the headline
And a "Get Started" pill button should be visible
And the hero area should show a decorative illustration on the right
```

### Scenario: Working process shows 4 steps with arrows
```gherkin
Given the user views the working process section
Then 4 step cards should be displayed horizontally
And each card should have an icon and a label
And the steps should be: Researching, Wireframing, Prototyping, Final Design
And arrow connectors should appear between the steps
```

### Scenario: Features section shows 3 feature cards
```gherkin
Given the user views the features section
Then 3 feature cards should be displayed in a row
And each card should have a thumbnail image, title, description, and button
And the section title should read "Our Exclusive Features"
```

### Scenario: Remarkable works shows alternating layout
```gherkin
Given the user views the remarkable works section
Then 3 portfolio rows should be displayed
And rows should alternate between image-left/text-right and text-left/image-right
And each row should have a title, description, and "View Project" button
And rows should have a box shadow
```

### Scenario: Story section shows floating card
```gherkin
Given the user views the story section
Then a white card should appear offset from the left
And the card should contain an uppercase heading, paragraph, and CTA button
```

### Scenario: Subscription area accepts email
```gherkin
Given the user views the subscription section
Then a "Subscribe for our Newsletter" heading should be visible
And an email input field should be present
And a "Get Started" button should be next to the input
```

### Scenario: Contact form collects user messages
```gherkin
Given the user views the contact form section
Then name and email inputs should be displayed side by side
And a textarea for messages should be below them
And a "Send Message" button should be right-aligned below the textarea
```

### Scenario: Footer shows contact info and social links
```gherkin
Given the user views the footer
Then address, email, and phone information should be displayed in 3 columns
And social media icons should be visible
And copyright text should be present
```

### Scenario: Responsive layout adapts to mobile
```gherkin
Given the user views the Glider homepage on a mobile device
Then the navbar should collapse to a hamburger menu
And multi-column layouts should stack vertically
And the story box padding should reduce
```

## Verification checklist

- [ ] Page renders with blue-cyan gradient body background
- [ ] Navbar shows logo + desktop nav + mobile hamburger
- [ ] Hero section has headline, subtitle, pill CTA, decorative illustration
- [ ] Working process shows 4 steps with arrow connectors
- [ ] Features section shows 3 cards with images, titles, descriptions
- [ ] Remarkable works shows 3 alternating image/text rows with shadows
- [ ] Story section shows floating white card with content
- [ ] Subscription section has email input + button on light background
- [ ] Contact form has name, email, textarea, send button
- [ ] Footer has 3-column info + social icons + copyright
- [ ] All pill buttons have 20px border-radius, transparent bg, white border
- [ ] Gradient text effects on icon labels and button hover states
- [ ] Responsive: hamburger nav, stacked columns, reduced padding on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Package name: @free-react-templates/glider
- [ ] CNAME: glider.free.componentdock.com
