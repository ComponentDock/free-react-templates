# Template: Lumencore (Consulting)

## Purpose

Recreation of ColorLib's **CellOn** template
(`https://colorlib.com/wp/template/cellon/`) as a modern React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page consulting template.

- Source slug: `cellon`
- Preview URL: `https://preview.colorlib.com/theme/cellon/`
- Category: Consulting / light company landing page
- Stack: React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)

## Design Tokens

| Token          | Value                                       | Notes                                              |
| -------------- | ------------------------------------------- | -------------------------------------------------- |
| Brand color    | `#6cbb23` (green)                           | Primary CTAs, accents, counters, hover states      |
| Font family    | `"Poppins", sans-serif`                     | Weights 100–600; import via Google Fonts           |
| Body text      | `#777`                                      | Paragraphs, nav links                              |
| Headings       | `#222`                                      | All heading elements                               |
| Page bg        | `#f6f6fc` (light lavender-grey)             | Body background                                    |
| Card bg        | `#fff`                                      | Feature cards, banner area, about, FAQ, footer     |
| Button radius  | `20px` (circle class)                       | Primary CTA buttons are pill-shaped                |
| Button primary | bg `#6cbb23`, text `#fff`, border transparent | Hover: bg `#fff`, text `#6cbb23`, border `#6cbb23` |
| Button border  | color `#6cbb23`, border `#6cbb23`, bg `#fff` | Hover: fills green                                 |
| Overlay color  | `rgba(108,187,35,0.85)`                    | Green semi-transparent on video/feature/contact    |
| Feature icon bg| `#f0f8e9` (light green tint)               | Icon background in feature cards                   |
| Feature icon   | `#6cbb23`                                   | Linear icon color                                  |
| Contact input  | border `1px solid #a6d477`, bg transparent  | White text placeholders                            |
| Counter color  | `#6cbb23`, font-weight 100, 48px           | Stats section left column                          |
| Selection bg   | `#6cbb23`                                   | Text selection highlight                           |
| Box shadow     | `0 0 50px rgba(0,0,0,0.2)`                 | Outer body wrapper (oz-body-wrap)                  |

## Visual Design Notes (from preview + CSS)

- Clean, light consulting page with a card-like body wrapper (shadow + margin)
- Split hero: illustration left, headline right
- Green-dominated palette: brand green overlays on video/feature/contact sections
- Feature cards sit on a green-overlay background image, white card surface
- Stats + FAQ in a two-column layout (numbers left, questions right)
- Contact form on a green-overlay background image, white input borders
- Footer is plain white with 4-column link grid and social icons

## Gherkin Requirements

### Scenario: Navbar renders with logo and navigation links
- Given the user visits the template
- Then a navbar is visible with a logo and links for "Home", "Generic", "Elements"
- And the navbar is absolutely positioned over the banner

### Scenario: Banner section displays headline and CTA
- Given the user visits the template
- Then a banner section is visible
- And the banner contains a left illustration and right text content
- And the headline reads "Behind Every Success There is a Cactus"
- And the highlighted word "Cactus" is in brand green
- And a "Get Started" primary button with arrow icon is present

### Scenario: Video section shows play button and heading
- Given the user visits the template
- Then a video section is visible with a green overlay background
- And a play button image is centered
- And heading text "Being unique is the preference" is displayed

### Scenario: About section displays info with image
- Given the user visits the template
- Then an about section is visible with white background
- And the section contains a headline "Brief Information About Lumencore"
- And a descriptive paragraph is shown on the left
- And an illustration image is shown on the right
- And a "View More" primary-border button is present

### Scenario: Feature section shows feature cards on green overlay
- Given the user visits the template
- Then a feature section is visible with green overlay background
- And 7 feature cards are displayed in a responsive grid
- And each card has a light-green icon area, uppercase heading, and description text
- And cards have white backgrounds with padding

### Scenario: Stats and FAQ section shows counters and questions
- Given the user visits the template
- Then a stats/FAQ section is visible with white background
- And a left column shows 4 stat counters (Projects Completed, New Projects, Tickets Submitted, Cup of Coffee)
- And counter numbers are large, green, and lightweight (font-weight 100)
- And a right column shows 3 FAQ items with question headings and paragraph answers

### Scenario: Contact section renders form on green overlay
- Given the user visits the template
- Then a contact section is visible with green overlay background
- And a heading "Send Us Message" is displayed
- And a form contains name input, email input, and message textarea
- And input borders are light green (`#a6d477`)
- And a "Send Message" button with arrow icon is present

### Scenario: Footer displays columns and copyright
- Given the user visits the template
- Then a footer is visible with white background
- And 4 columns are shown: "Top Product", "Navigation", "Compare", "Quick About"
- And each column has a list of links
- And a footer bottom bar has copyright text and social media icons (Facebook, Twitter, Dribbble, Behance)
- And a "Component Dock" link is present in the footer

### Scenario: Responsive behavior
- Given the user resizes to mobile viewport
- Then the body wrapper margin shrinks
- And the banner stacks vertically (illustration above text)
- And feature cards stack in a single column
- And the navbar collapses to a hamburger menu

## Verification Checklist

- [ ] Spec loaded and matched against preview DOM section order
- [ ] Design tokens (colors, font, radii) extracted from `main.css`
- [ ] Section order matches original: Header → Banner → Video → About → Features → Stats/FAQ → Contact → Footer
- [ ] Brand color `#6cbb23` used for CTAs, accents, counters
- [ ] Font is Poppins (imported via Google Fonts)
- [ ] Buttons use pill shape (border-radius: 20px)
- [ ] Green overlay on video, feature, and contact sections
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Footer social icons (lucide-react equivalents)
- [ ] Placeholder images via `picsum.photos`
- [ ] `public/CNAME` contains `lumencore.free.componentdock.com`
