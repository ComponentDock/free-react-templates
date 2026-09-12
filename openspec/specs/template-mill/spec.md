# Template: Mill (Industrial / Corporate)

## Purpose

Recreation of the ColorLib **Industries** template for use as a React 19 + Vite
+ Tailwind CSS 4 + TypeScript single-page app under the name `mill`.

- **ColorLib source:** https://colorlib.com/wp/template/industries/
- **Live preview (fetched):** https://preview.colorlib.com/theme/industries/
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/industries-free-template.jpg
- **Preview status:** ✅ Reached and analyzed (DOM + CSS fetched 2026-09-13)

## Design tokens

Extracted from `css/style.css` on the live preview:

| Token            | Value                       | Notes                                         |
|------------------|-----------------------------|-----------------------------------------------|
| Primary color    | `#fd5f00`                   | Bright orange — used for `.text-primary`, `.bg-primary`, `.btn-primary` |
| Primary hover    | `#d75100`                   | Darker orange on hover                        |
| Dark background  | `#343a40`                   | Navbar and dark sections                      |
| Light background | `#f8f9fa`                   | `.bg-light` on services and testimonials      |
| Body text color  | `#212529`                   | Near-black                                    |
| Font family      | `Oxygen, sans-serif`        | Google Font (400, 700 weights)                |
| Button radius    | `0.25rem`                   | Slightly rounded (Bootstrap default)          |
| Border/separator | `#eee`                      | Section dividers, footer border-top           |
| Footer padding   | `7em 0`                     | Generous vertical spacing                     |
| Slider text      | `#ffffff`                   | White text on hero images                     |
| Readmore style   | Uppercase, arrow icon       | `.readmore` class, hover slides right          |
| CTA button       | `.btn-outline-white`        | White outline on orange bg, rounded corners   |
| Loader spinner   | Stroke `#f4b214`            | Golden yellow spinner (loading overlay)       |

### Color palette (Tailwind `@theme`)

```css
@theme {
  --color-primary: #fd5f00;
  --color-primary-hover: #d75100;
  --color-dark: #343a40;
  --color-surface: #f8f9fa;
  --color-body: #212529;
  --color-border: #eeeeee;
}
```

## Section order and Gherkin scenarios

### 1. Navbar

Dark background (`#343a40`), brand text "Mill" (white), responsive collapse.
Links: Home, About, Projects, Services (dropdown → Architectural Design, Interior, Building), Blog, Contact.
Mobile: hamburger toggle with collapse menu.

```gherkin
Scenario: Desktop navbar renders all links
  Given the viewport is wider than 992px
  When the page loads
  Then the navbar displays brand "Mill" and links Home, About, Projects, Services, Blog, Contact

Scenario: Services dropdown opens on hover/click
  Given the viewport is wider than 992px
  When the user hovers or clicks "Services"
  Then a dropdown appears with Architectural Design, Interior, Building

Scenario: Mobile navbar shows hamburger toggle
  Given the viewport is narrower than 992px
  When the page loads
  Then the navbar shows a hamburger button
  And the nav links are hidden until the toggle is clicked
```

### 2. Hero Slider

Full-width image slider with background images, white centered text overlay.
Play button (fancy box video link placeholder).
Two slides: "We Are Industrial Company" / "Create, Enhance and Sustain".
Subtext placeholder underneath each heading.

```gherkin
Scenario: Hero slider displays first slide
  Given the page loads
  Then the hero section shows a full-width background image
  And the heading reads "We Are Industrial Company"
  And a play button icon is visible

Scenario: Hero slider auto-advances
  Given the page loads
  When 5 seconds pass
  Then the second slide is visible with heading "Create, Enhance and Sustain"
```

### 3. Features / Services (3-column)

Light background (`#f8f9fa`). Three centered cards in a row:
- Automotive Parts (bookmark icon, orange)
- Maintenance Services (heart icon, orange)
- Green Energy (leaf icon, orange)

Each card: icon → heading → short paragraph.

```gherkin
Scenario: Three service cards render
  Given the features section is in the viewport
  Then three cards are visible: Automotive Parts, Maintenance Services, Green Energy
  And each card has an orange icon above its heading
```

### 4. About / Engineering (image + 4 features)

Heading: "We Are Reliable Engineering In House".
Layout: image on left, 2 feature blocks stacked on center + 2 on right.
Features: Green Energy, Precision Mechanics, Construction Machines, Reliable and Stable.
Each feature: orange icon → heading → short text.

```gherkin
Scenario: About section shows heading and features
  Given the about section is in the viewport
  Then the heading reads "We Are Reliable Engineering In House"
  And 4 feature items are displayed with orange icons
```

### 5. About Alternate (image + text block)

Image on right, text block on left.
Heading: "Create, Enhance and Sustain".
Paragraph + "Read More" link with arrow icon.

```gherkin
Scenario: About alternate section renders with read more
  Given the about alternate section is in the viewport
  Then a heading "Create, Enhance and Sustain" is visible
  And a "Read More" link with arrow is present
```

### 6. Projects Grid

Heading: "Our Latest Projects".
Subtext paragraph.
6 project thumbnail cards in a 3-column grid (no gutters).
Each card: full-bleed image with overlay (project title + plus icon) on hover.

```gherkin
Scenario: Projects grid renders 6 items
  Given the projects section is in the viewport
  Then 6 project cards are visible in a 3-column grid
  And each card shows a title and a plus icon overlay on hover
```

### 7. Testimonials (carousel)

Light background. Heading: "Happy Clients".
Owl-carousel style horizontal slider of testimonial cards.
Each card: avatar image + name + meta label + blockquote text.

```gherkin
Scenario: Testimonials carousel renders cards
  Given the testimonials section is in the viewport
  Then at least 3 testimonial cards are visible
  And each card has an avatar, name, and blockquote
```

### 8. Blog Posts

Heading: "Blog Posts" + subtext.
4 blog post items in 2 columns.
Each: thumbnail image on left + date + title + "Read More" link on right.

```gherkin
Scenario: Blog section renders 4 posts
  Given the blog section is in the viewport
  Then 4 blog post items are displayed in 2 columns
  And each post has a date, title, and Read More link
```

### 9. CTA Banner

Orange background (`#fd5f00`). White text.
Heading: "Create, Enhance and Sustain".
Description paragraph.
Button: "Download This Template" (white outline, rounded).

```gherkin
Scenario: CTA banner renders with orange background
  Given the CTA section is in the viewport
  Then the background is orange (#fd5f00)
  And the heading text is white
  And a white outline button is visible
```

### 10. Footer

Dark background. 4-column layout:
- Col 1: "About Us" + paragraph + social icons (Twitter, Facebook, LinkedIn, Instagram)
- Col 2: "Contact Info" with Address, Telephone, Email
- Col 3: "Quick Links" (About, Terms, Disclaimers, Contact)
- Col 4: (empty in original)
Bottom: Copyright line with heart icon.

```gherkin
Scenario: Footer renders all columns
  Given the footer is in the viewport
  Then "About Us" section with social icons is visible
  And "Contact Info" with address, phone, email is visible
  And "Quick Links" with 4 links is visible
  And a copyright line with heart icon is visible

Scenario: Footer links to Component Dock
  Given the footer renders
  Then the copyright area links to https://www.componentdock.com/
```

## Replication reference notes

- **Preview DOM:** Fetched live from `https://preview.colorlib.com/theme/industries/` (504 lines HTML).
- **CSS:** `css/style.css` fetched (2305 lines). Tokens extracted above.
- **Screenshot:** ColorLib preview image shows a dark navbar, full-bleed hero with industrial imagery (factory/warehouse), orange accent color on icons and CTAs, light gray sections for features/testimonials, dark footer. Clean, professional industrial/corporate aesthetic.
- **Font:** Oxygen (Google Fonts, 400 + 700 weights). Montserrat also loaded via inline style but Oxygen is the main body/heading font.
- **Icons:** Ionicons (`ion-*` classes) and Font Awesome (`fa-*`). Replace with `lucide-react`.
- **Slider:** Owl Carousel with jQuery. Replace with a React carousel or CSS-only solution.
- **Fancybox:** Video lightbox on hero play button. Replace with a simple modal or omit.
- **No parallax sections.** Pure background-image sections.

## Verification checklist

- [ ] Spec written with all 10 sections
- [ ] Design tokens documented and mapped to `@theme`
- [ ] All Gherkin scenarios cover each section
- [ ] Preview DOM analyzed (live fetch confirmed)
- [ ] CSS tokens extracted and recorded
- [ ] Screenshot visual description included
- [ ] New name "mill" confirmed no collision with apps/ or specs/
- [ ] ColorLib source URL recorded
- [ ] Component Dock footer link requirement noted
