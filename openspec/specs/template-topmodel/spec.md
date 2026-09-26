# Template: TopModel (Modeling Agency / Portfolio)

## Purpose

Recreation of ColorLib's **Mona** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source:** [ColorLib Mona](https://colorlib.com/wp/template/mona/)
- **Preview:** https://preview.colorlib.com/theme/mona/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/mona-free-template.jpg) — hot-pink header accent, large hero with model portrait, tabbed model portfolio, testimonials, CTA, blog, footer.
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library · 100% coverage
- **New name:** `topmodel` (package `@free-react-templates/topmodel`, app `apps/topmodel`)

## Design Tokens

Extracted from the live preview stylesheet (`style.css`):

| Token | Value | Usage |
|---|---|---|
| `brand` | `#ed489d` | Hot pink — primary accent (header bg, CTA buttons, active dots, hover states) |
| `brand-light` | `#f6a4ce` | Light pink accent (supplementary) |
| `text-dark` | `#232323` | Primary text color, headings |
| `text-muted` | `#666666` | Secondary/body text |
| `bg-light` | `#f0f0f0` | Light gray section backgrounds |
| `bg-neutral` | `#f2f4f5` | Neutral background |
| `white` | `#ffffff` | Card backgrounds, button default bg |
| `black` | `#000000` | Button hover bg, dark sections |
| Font | `"HK Grotesk"` | Primary typeface (Google Fonts) |
| Button | 50px height, 180px min-width, 2px white border, 40px radius (pill) | `.mona-btn` — pill-shaped, white border, hover → black bg |
| Button variant | Pink border (#ed489d), white bg, pink text | `.mona-btn.btn-2` — hover → pink bg, white text |
| Hero heading | 100px font-size, capitalize, line-height 1.2 | `.welcome-text h2` |
| Section padding | 80px top/bottom | `.section-padding-80` |
| Nav | Transparent overlay on hero, white bg on scroll | `.classy-navbar` |
| Border radius | 50% for circular thumbnails, 40px for pill buttons, 6px for cards | Various |

## Sections (DOM order)

1. **Header** — transparent navbar overlaying the hero; logo left ("TopModel."), nav links right (Home, Pages, Project, Models, Casting, Blog, Contact), search icon
2. **Welcome/Hero Carousel** — full-width carousel with model name (huge text), subtitle ("Star Model 2019"), "Model Details →" CTA button, social links bar (Facebook, Twitter, Instagram, YouTube), large portrait photo, navigation arrows
3. **About Us** — "We Have 20+ Years Practical Experience in Agency" heading, 4 feature icons (Fashion Shows, Special Events, Commercial Photo, Model School), model portrait images
4. **Models/Portfolio** — tabbed section (All Models / Model / Actors / Singers), each tab shows a carousel of model cards (circular thumbnail, name, role label)
5. **Client Feedback / Testimonials** — client quote carousel with star ratings, client name, circular avatar thumbnail, dot navigation
6. **CTA Section** — "Do You Want To Be A Model?" heading with description text and "Contact Us" button (pink variant)
7. **Blog / Latest News** — blog post cards grid
8. **Footer** — 4-column layout: About text, quick links, contact info (+01-3-8888-6868, 40 Baria Street 133/2 NewYork City), newsletter signup; bottom bar with social links and copyright

## Gherkin Requirements

### Feature: Header Navigation

```gherkin
Scenario: Navbar displays logo and navigation links
  Given the page loads
  Then the logo "TopModel." is visible
  And navigation links "Home", "Models", "Blog", "Contact" are visible
  And a search icon is present in the navbar

Scenario: Navbar becomes opaque on scroll
  Given the page loads
  When the user scrolls past the hero section
  Then the navbar background changes from transparent to white
```

### Feature: Hero Carousel

```gherkin
Scenario: Hero displays model information
  Given the hero carousel is visible
  Then a model name is displayed in large text
  And a subtitle "Star Model 2019" is shown below the name
  And a "Model Details →" link is visible
  And social media links (Facebook, Twitter, Instagram, YouTube) are shown

Scenario: Hero carousel advances automatically
  Given the hero carousel is visible
  When 5 seconds pass without interaction
  Then the carousel transitions to the next slide

Scenario: Hero carousel responds to navigation
  Given the hero carousel is visible
  When the user clicks the next arrow
  Then the carousel advances to the next model slide
```

### Feature: About Us Section

```gherkin
Scenario: About section displays experience heading
  Given the about section is in the viewport
  Then a heading about "20+ Years Practical Experience" is visible

Scenario: About section displays service categories
  Given the about section is in the viewport
  Then 4 service items are shown: Fashion Shows, Special Events, Commercial Photo, Model School
```

### Feature: Model Portfolio Section

```gherkin
Scenario: Portfolio section has filterable tabs
  Given the models section is in the viewport
  Then tabs for "All Models", "Model", "Actors", "Singers" are visible

Scenario: Clicking a tab filters model cards
  Given the models section is in the viewport
  When the user clicks the "Actors" tab
  Then only actor model cards are displayed

Scenario: Model cards display correctly
  Given the models section is in the viewport
  Then each model card shows a circular thumbnail image
  And a name and role label below the image
```

### Feature: Client Testimonials

```gherkin
Scenario: Testimonials display client quotes
  Given the testimonials section is in the viewport
  Then a client quote is displayed with quotation marks
  And a star rating is shown
  And the client name is displayed below the quote

Scenario: Testimonials carousel navigates
  Given the testimonials section is in the viewport
  When the user clicks a dot indicator
  Then the carousel transitions to the selected testimonial
```

### Feature: Call to Action

```gherkin
Scenario: CTA section displays model recruitment message
  Given the CTA section is in the viewport
  Then the heading "Do You Want To Be A Model?" is visible
  And a "Contact Us" button with pink variant styling is shown

Scenario: CTA button is interactive
  Given the CTA section is in the viewport
  When the user hovers over the "Contact Us" button
  Then the button background transitions to pink with white text
```

### Feature: Blog Section

```gherkin
Scenario: Blog section displays recent posts
  Given the blog section is in the viewport
  Then a "Latest News" heading is visible
  And blog post cards are displayed in a grid layout
```

### Feature: Footer

```gherkin
Scenario: Footer displays site information
  Given the footer is in the viewport
  Then an "About" column with company description is visible
  And a "Quick Links" column is visible
  And a "Contact" column with phone number and address is visible

Scenario: Footer links to Component Dock
  Given the footer is in the viewport
  Then a link to "https://www.componentdock.com/" is present
  And the link text mentions "Component Dock"
```

## Verification Checklist

- [ ] Hero carousel renders with model names and portraits
- [ ] Navbar is transparent on hero, white on scroll
- [ ] About section shows 20+ years heading with 4 service icons
- [ ] Models section has working tabs (All Models / Model / Actors / Singers)
- [ ] Model cards show circular thumbnails with name + role
- [ ] Testimonials carousel shows quotes with star ratings
- [ ] CTA section has "Do You Want To Be A Model?" heading and pink button
- [ ] Blog section shows latest news cards
- [ ] Footer has 4 columns and Component Dock link
- [ ] Brand color #ed489d is applied as Tailwind theme token
- [ ] Font "HK Grotesk" loads via Google Fonts link in index.html
- [ ] All interactive elements have aria-labels
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] Tests achieve 100% line/branch/function/statement coverage
- [ ] No ColorLib references in app source code
- [ ] Footer links to https://www.componentdock.com/
