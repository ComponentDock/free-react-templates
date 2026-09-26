# Template: Kensei (Personal Portfolio)

## Purpose

Recreation of the ColorLib **Ronin** template.
- **Source:** https://colorlib.com/wp/template/ronin/
- **Preview:** https://preview.colorlib.com/theme/ronin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ronin-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Personal Portfolio / Freelancer

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Brand color (primary) | `#8490ff` | Indigo-purple, used for CTA buttons, links, progress bars, hover states |
| Brand gradient | `linear-gradient(to right, #8490ff, #62bdfc, #8490ff)` | Banner CTA button gradient, animated on hover |
| Dark heading color | `#222222` | All headings (h1-h6), nav links, banner text |
| Body text color | `#777777` | Paragraphs, descriptions, captions |
| Light background | `#f9f9ff` | Alternating section background (very faint lavender) |
| White background | `#ffffff` | Default section background |
| Heading font | `Heebo` (Google Fonts), sans-serif, bold | All headings |
| Body font | `Roboto` (Google Fonts), sans-serif, weight 400 | Body text, nav links, buttons |
| Banner button | `border-radius: 5px`, padding `0 42px`, line-height `50px`, font-size `13px`, uppercase | Gradient background |
| Section padding | `padding: 120px 0` | Consistent vertical rhythm |
| Nav font | `Roboto` 500, 12px, uppercase | Navigation links |
| Nav background (sticky) | `#fff` with `box-shadow: 0px 3px 16px 0px rgba(0,0,0,0.1)` | Transparent → white on scroll |
| Dropdown hover | `#8490ff` background, white text | Nav dropdown item hover |
| Footer background | `#04091e` (very dark navy) | Footer section |
| Testimonials background | `#04091e` | Dark section, white text |
| Skill bar fill | `#8490ff` | Progress bar color |
| Feature icon color | `#8490ff` | Service/feature icons |
| Border color | `#eeeeee` | Card borders, dividers |

## Section Structure (order from preview DOM)

1. **Navbar** — Transparent overlay on banner, logo left, links right (Home, About, Services, Pages dropdown, Blog dropdown, Contact). Fixed on scroll with white bg.
2. **Hero / Banner** — Full-width background image (home-banner.jpg), split layout: left side = portrait illustration, right side = headline ("This is me"), name ("Travor James"), description, CTA button ("Discover Now").
3. **Welcome / About** — Two-column layout. Left: "About Myself" heading, paragraph, three stat cards (Total Donation $2.5M, Total Projects 1465, Total Volunteers 3965) with icons. Right: "Tools Expertness" — five animated skill bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%).
4. **Feature / Services** — Centered heading ("offerings to my clients"), description, three-column grid of service cards (Architecture, Interior Design, Concept Design) with icon + title + description. Light lavender background (`#f9f9ff`).
5. **Projects / Portfolio** — Portfolio grid with filtering tabs (All, Residential, Commercial, Industrial), image gallery with hover overlay.
6. **Testimonials** — Dark background (`#04091e`), carousel of testimonial cards with avatar, quote, name, designation.
7. **Latest Blog** — Three-column blog post cards (image + date badge + title + excerpt + read-more link).
8. **Footer** — Dark background (`#04091e`), multi-column: about text, quick links, newsletter signup, social links. "Made with Component Dock" footer link required.

## Gherkin Requirements

### Scenario: Navbar renders with correct links
- Given the page loads
- When the navbar is visible
- Then it displays the logo on the left
- And it shows nav links: Home, About, Services, Pages, Blog, Contact
- And Pages and Blog have dropdown menus
- And on scroll the navbar becomes fixed with a white background and shadow

### Scenario: Hero banner displays correctly
- Given the page loads
- When the hero banner is visible
- Then it shows a full-width background image
- And a left-side portrait illustration
- And a right-side section with headline, name, description, and CTA button
- And the CTA button ("Discover Now") has a gradient background (#8490ff to #62bdfc) and 5px border-radius

### Scenario: Welcome/About section shows stats and skills
- Given the page loads
- When the About section is visible
- Then it displays "About Myself" heading with description text
- And three stat cards are shown with icons and values (Donation, Projects, Volunteers)
- And five skill bars are displayed with labels and percentage values
- And skill bars animate to their target percentages

### Scenario: Features/Services section shows service cards
- Given the page loads
- When the Features section is visible
- Then it displays a centered heading "offerings to my clients"
- And three service cards are shown in a grid
- Each card has an icon, title, and description
- And the section has a light lavender background (#f9f9ff)

### Scenario: Projects/Portfolio section displays filterable gallery
- Given the page loads
- When the Projects section is visible
- Then filter tabs are displayed (All, Residential, Commercial, Industrial)
- And clicking a filter shows only matching project images
- And project images have hover overlay effects

### Scenario: Testimonials section shows review cards
- Given the page loads
- When the Testimonials section is visible
- Then it displays on a dark background (#04091e)
- And testimonial cards show avatar, quote text, author name, and designation
- And cards cycle via carousel navigation

### Scenario: Blog section shows latest posts
- Given the page loads
- When the Blog section is visible
- Then three blog post cards are displayed in a row
- Each card shows an image, date badge, title, excerpt, and read-more link
- And cards have consistent card styling with borders

### Scenario: Footer renders with required content
- Given the page loads
- When the footer is visible
- Then it displays on a dark background (#04091e)
- And it shows company info, quick links, and newsletter sections
- And it includes a "Made with Component Dock" link to https://www.componentdock.com/

## Verification Checklist

- [ ] All sections render in correct order (Navbar → Hero → About → Services → Projects → Testimonials → Blog → Footer)
- [ ] Design tokens match: brand color #8490ff, fonts Heebo/Roboto, gradients, dark footer
- [ ] Hero button has gradient background and correct border-radius
- [ ] Skill bars animate to correct percentages
- [ ] Portfolio filtering works across all tabs
- [ ] Testimonials carousel cycles through cards
- [ ] Navbar becomes sticky/fixed on scroll
- [ ] Footer links to Component Dock
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] Uses placeholder images from picsum.photos
- [ ] Google Fonts loaded via <link> in index.html
- [ ] lucide-react icons used (not icon font files)
