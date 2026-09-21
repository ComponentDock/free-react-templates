# Template: ModelCraft (Model Agency)

## Purpose

Recreation of ColorLib "Mona" — a model agency HTML5 template.

- **Source:** https://colorlib.com/wp/template/mona/
- **Preview:** https://preview.colorlib.com/theme/mona/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/mona-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `modelcraft` (NOT "mona")

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| brand-pink | `#ed489d` | CTA backgrounds, buttons, accents, hover states |
| pink-light | `#f6a4ce` | Subtle pink variation (nav hover) |
| text-primary | `#232323` | Headings, dark text |
| text-secondary | `#666666` | Body paragraphs |
| text-muted | `#a6a6a6` | Subtitles, dates |
| white | `#ffffff` | Card backgrounds, testimonial text |
| black | `#000000` | Dark backgrounds (search modal) |
| bg-light | `#f0f0f0` | Light section backgrounds |
| font-family | `"HK Grotesk", sans-serif` | Body + headings |
| btn-radius | `40px` | Pill-shaped buttons |
| btn-height | `50px` | Standard button height |
| btn-font | `18px`, `font-weight: 600` | Button text |
| section-padding | `80px 0` | Vertical rhythm |

## Section structure (from live preview DOM)

1. **Navbar** — Fixed top, logo left, nav links (Home, Pages dropdown, Project, Models, Casting, Blog, Contact), search icon. Pink curve background image on desktop.
2. **Hero / Welcome Slider** — Full-width carousel with 3 slides. Each slide: large model photo as background, model name as heading (e.g. "Jesse Edwards"), subtitle "Star Model 2019", "Model details" pill button. Social links overlay (Facebook, Twitter, Instagram, YouTube). Slide pager ("Next: ...").
3. **About Us** — 3-column layout: 2 image thumbnails with decorative lines on left/center, text content on right ("We Have 20+ Years Practical Experience in Agency"). Below: 4-column service icons (Fashion Shows, Special Events, Commercial Photo, Model School).
4. **Models Gallery** — Tabbed carousel (All, Model, Actor, Singer). Each model card: dual thumbnail (flip on hover), share overlay with social icons, model name + role. Dark background section.
5. **Client Testimonials** — Slider with client photo on left, testimonial quote + star ratings on right. White background.
6. **CTA** — Pink (`#ed489d`) full-width band: "Do You Want To Be A Model?" heading, subtitle, "Contact Us" pill button.
7. **Blog / Latest News** — Asymmetric grid: 1 small post left column, 1 featured post spanning top-right, 2 small posts bottom-right. Each: thumbnail image, title link, date.
8. **Footer** — 3 columns: logo + description + copyright, "Our Link" nav list, contact info (phone + address) + social icons. Dark background.

## Gherkin requirements

### Navbar
```gherkin
Scenario: Navbar renders with all navigation links
  Given the page loads
  Then the navbar displays links: Home, Project, Models, Casting, Blog, Contact
  And the logo is visible on the left
  And a search icon is present

Scenario: Navbar remains sticky on scroll
  Given the user scrolls down
  Then the navbar stays fixed at the top
```

### Hero Section
```gherkin
Scenario: Hero carousel displays model slides
  Given the page loads
  Then a full-width hero image is displayed
  And a model name heading is visible (e.g. "Jesse Edwards")
  And a subtitle "Star Model 2019" is shown
  And a "Model details" pill button is rendered
  And social media links are visible (Facebook, Twitter, Instagram, YouTube)

Scenario: Hero carousel advances to next slide
  Given the hero carousel is on slide 1
  When the carousel advances
  Then slide 2 shows a different model name and image
  And the pager text updates to show the next model name
```

### About Us Section
```gherkin
Scenario: About section shows agency info with images
  Given the About section is in view
  Then 2 model thumbnails are displayed on the left
  And heading text "We Have 20+ Years Practical Experience in Agency" is visible
  And 2 descriptive paragraphs are shown

Scenario: Services row displays 4 items
  Given the About section is in view
  Then 4 service cards are rendered in a row
  And each card has an icon, title (Fashion Shows / Special Events / Commercial Photo / Model School), and description
```

### Models Gallery
```gherkin
Scenario: Models tab bar renders with categories
  Given the Models section is in view
  Then tabs are displayed: All, Model, Actor, Singer

Scenario: All tab shows model cards in carousel
  Given the "All" tab is active
  Then 6 model cards are visible in a carousel
  And each card has a thumbnail, name, role label, and share overlay

Scenario: Tab switching filters model cards
  Given the "Model" tab is clicked
  Then only model-category cards are shown
```

### Client Testimonials
```gherkin
Scenario: Testimonial slider renders
  Given the Testimonials section is in view
  Then a client photo is displayed on the left
  And a testimonial quote is shown on the right
  And star ratings are rendered
  And navigation dots or arrows are available
```

### CTA Section
```gherkin
Scenario: CTA band renders with pink background
  Given the CTA section is in view
  Then the background color is pink (#ed489d)
  And heading "Do You Want To Be A Model?" is displayed in white
  And a "Contact Us" pill button is rendered
```

### Blog Section
```gherkin
Scenario: Blog grid renders latest news posts
  Given the Blog section is in view
  Then heading "Latest News" is centered
  And 4 blog posts are displayed in asymmetric layout
  And each post has a thumbnail, title link, and date
```

### Footer
```gherkin
Scenario: Footer renders with 3 columns
  Given the footer is visible
  Then column 1 shows logo, description, and copyright
  And column 2 shows "Our Link" navigation list
  And column 3 shows contact info and social icons
  And a link to componentdock.com is present
```

## Verification checklist

- [ ] Navbar: logo, links, search icon, sticky behavior
- [ ] Hero: carousel with 3 slides, model names, pill buttons, social links, pager
- [ ] About: 2 thumbnails, heading, paragraphs, 4 service icons
- [ ] Models: tab bar (All/Model/Actor/Singer), card grid/carousel, hover flip, share overlay
- [ ] Testimonials: client photo, quote, star ratings, slider navigation
- [ ] CTA: pink band, white heading, "Contact Us" pill button
- [ ] Blog: asymmetric 4-post grid, thumbnails, titles, dates
- [ ] Footer: 3 columns (logo+info, nav links, contact+social), componentdock.com link
- [ ] Brand color `#ed489d` used for buttons, CTA, accents
- [ ] Font: HK Grotesk (Google Fonts)
- [ ] Buttons: pill-shaped (border-radius 40px), pink background
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] 100% test coverage
