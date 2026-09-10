# Template: Inkline (Fullscreen Business Website)

## Purpose

Recreation of ColorLib **Blueline** — a fullscreen business/design agency
website template.

- **Source:** https://colorlib.com/wp/template/blueline/
- **Preview:** https://preview.colorlib.com/theme/blueline/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/blueline-free-fullscreen-business-website-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `inkline` (apps/inkline, @free-react-templates/inkline)

## Design Tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Poppins", sans-serif` | All text (weights 100–700) |
| Primary brand | `#2954c9` (deep blue) | Buttons, links, accents, ordered-list color, checkbox/switch |
| Accent gradient start | `#3c50ca` | Gradient button backgrounds, number highlights |
| Accent gradient end | `#77d5f7` (sky cyan) | Gradient button backgrounds, selection, footer link color, nav hover on mobile |
| Text body | `#777` | Body copy, placeholder text |
| Text heading | `#222` | All headings (h1–h6) |
| Background light | `#f9f9ff` | Page body, feature area, inputs, selects, progress tables |
| Background dark | `#000` | Service area left panel, footer area |
| White | `#fff` | Service right panel, newsletter section, contact form, card borders |
| Button border-radius | `20px` (pill) | `.primary-btn` circle shape |
| Button line-height | `40px` | Standard button height |
| Button padding | `0 30px` | Horizontal padding |
| Border color (light) | `#eee` | Service card borders, feature borders |
| Section padding | `100px 0` (`.pt-100`, `.pb-100`) | Most sections |
| Banner height | `735px` (fullscreen row) | Hero section |
| Banner h1 size | `124px`, weight 300, letter-spacing 25px | Hero headline |
| Content heading size | `36px`, weight 200 | Video, services, latest-works, newsletter headings |
| Content heading bold span | `weight: 600` | Emphasis words in section headings |

## Section Structure (order from live preview DOM)

1. **Header** — Absolute-positioned top navbar. Logo left, nav links right
   (Home, Generic, Elements), hamburger menu icon on mobile. Transparent over
   hero. White logo image.
2. **Hero/Banner** — Fullscreen background image (`header-bg.jpg`), centered
   content: "Introducing" subtitle (h4, white, uppercase, weight 200) +
   "inkline" headline (h1, white, 124px, weight 300, letter-spacing 25px,
   text-shadow). Height 735px.
3. **Features** — White background. 3-column grid. Each feature: large number
   (h1, gradient text `#3c50ca → #77d5f7`, 48px, uppercase, text-shadow) +
   title (h2, 18px, uppercase, weight 600) + description paragraph. Items:
   01 Responsive View, 02 Multiple Layouts, 03 Flexible Design.
4. **Video** — Light background. Centered 8-col video embed area with border
   (20px solid #f3f3f3), background image, dark overlay, play button
   centered. Below: text content — "Great Modern Design" heading (36px,
   weight 200, bold span) + lorem description.
5. **Services** — Split layout, dark left + white right. Left (col-6): black
   background, "Services We Offered" heading (white, 36px, weight 200/600)
   + description. Right (col-6): 2×2 grid of service cards (bordered
   #eee), each with icon (Linearicons), title (h2, 18px, uppercase, weight
   600, letter-spacing 2px) + description. Four identical cards titled
   "Graphics Design".
6. **Latest Works** — White background. Centered heading "Some Of our Latest
   Works" (36px, weight 200/600) + subtitle. Owl Carousel slider with
   portfolio images (opacity transition on active item, white border on
   active).
7. **Newsletter** — White background. Centered heading "Subscribe for our
   Newsletter" (36px, weight 200/600) + "We won't send any kind of spam".
   Email input (rounded, #f9f9ff background, full width) + "Get Started"
   pill button (gradient, positioned absolute right of input).
8. **Contact** — White card wrapped in light section. Left (col-3): contact
   image. Right (col-9): form with name input, email input, textarea
   (common-input, common-textarea classes), "Send Message" pill button
   (gradient, rounded, float-left).
9. **Footer** — Black background. Copyright text (white) with "inkline"
   colored link (#77d5f7) + "Component Dock" attribution. Social icons
   right (Facebook, Twitter, Dribbble, Behance) on dark squares (#1e1e1e),
   gradient hover.

## Gherkin Requirements

### Scenario: Header renders with logo and navigation
```gherkin
Given the page loads
When the header is rendered
Then a logo image is displayed on the left
And navigation links "Home", "Generic", "Elements" are visible on desktop
And a hamburger menu icon is visible on mobile viewports
And the header is transparent and overlaid on the hero
```

### Scenario: Hero banner displays fullscreen with heading
```gherkin
Given the page loads
When the hero section renders
Then a full-viewport background image is displayed
And the subtitle "Introducing" appears in white uppercase
And the headline "inkline" appears in large white text (124px desktop)
And the text has a text-shadow effect
```

### Scenario: Features section shows three columns
```gherkin
Given the page loads
When the features section renders
Then three feature cards are displayed in a row
And each card has a large gradient-colored number (01, 02, 03)
And each card has a title and description text
And the gradient goes from blue to cyan
```

### Scenario: Video section shows embed and text
```gherkin
Given the page loads
When the video section renders
Then a video thumbnail with play button overlay is displayed
And the heading "Great Modern Design" is shown
And a description paragraph follows the heading
```

### Scenario: Services section shows split layout
```gherkin
Given the page loads
When the services section renders
Then the left half has a dark background with white text
And the heading "Services We Offered" is displayed
And the right half has a white background with a 2×2 grid of service cards
And each card has an icon, title, and description
And each card has a light border
```

### Scenario: Latest Works section shows portfolio slider
```gherkin
Given the page loads
When the latest works section renders
Then the heading "Some Of our Latest Works" is displayed
And a carousel of portfolio images is shown
And the active image is fully opaque with a white border
And inactive images have reduced opacity
```

### Scenario: Newsletter section shows subscription form
```gherkin
Given the page loads
When the newsletter section renders
Then the heading "Subscribe for our Newsletter" is displayed
And an email input field is shown with rounded corners
And a "Get Started" gradient pill button is positioned to the right
```

### Scenario: Contact section shows form with image
```gherkin
Given the page loads
When the contact section renders
Then a contact image is shown on the left (small column)
And a form with name, email, and message fields is on the right
And a "Send Message" gradient pill button is shown
And the form sits on a white background card
```

### Scenario: Footer renders with copyright and social links
```gherkin
Given the page loads
When the footer renders
Then a copyright line is shown with a colored link
And social media icons (Facebook, Twitter, Dribbble, Behance) are shown
And the footer has a dark background
And social icon squares are dark (#1e1e1e) with gradient hover
```

### Scenario: Primary button has gradient pill style
```gherkin
Given a primary button is rendered
When the button is displayed
Then it has a gradient background from blue to cyan
And it has pill-shaped border-radius (20px)
And the text is white and uppercase
And on hover the background becomes white with colored text/border
```

## Verification Checklist

- [ ] Header: logo + nav links + hamburger on mobile
- [ ] Hero: fullscreen bg image, "Introducing" subtitle, "inkline" headline
- [ ] Features: 3-column grid, gradient numbers, titles, descriptions
- [ ] Video: thumbnail + play button, heading, paragraph
- [ ] Services: split dark/light layout, 4 service cards with icons
- [ ] Latest Works: carousel/slider with opacity transitions
- [ ] Newsletter: email input + gradient pill button
- [ ] Contact: image + form (name, email, message) + gradient pill button
- [ ] Footer: copyright with Component Dock link + social icons
- [ ] Design tokens: Poppins font, #2954c9 primary, #77d5f7 accent, gradient buttons, #000 dark sections, #f9f9ff light bg
- [ ] Responsive: hero scales, nav collapses, columns stack on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
