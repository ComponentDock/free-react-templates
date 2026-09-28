# TownScope — Prep Notes

**Source:** ColorLib Civic (https://colorlib.com/wp/template/civic/)
**Preview:** https://preview.colorlib.com/theme/civic/
**New name:** townscope
**Category:** CV / Resume (single-page portfolio)

## Design overview

A personal CV/resume one-page template with a clean, minimal aesthetic. Dark charcoal (`#40424a`) as the primary brand color used across headings, footer, and stat boxes. Light blue-gray (`#f2f7f8`) for alternating section backgrounds. Josefin Sans gives a geometric, modern feel.

The template is a linear scroll of 10 sections, no navigation bar — just a fixed header with logo + CTAs.

## Section-by-section fidelity notes

### 1. Header
- Fixed/sticky top bar
- Left: logo text "Civic" → replace with "TownScope"
- Subtitle: "Enhance your online presence"
- Right: two outline/ghost buttons — "Download CV" and "Discover me"
- Background: `#f2f7f8`
- Layout: Bootstrap `container-fluid`, `row`, `col-md-4` (logo) + `col-md-8` (buttons, right-aligned)

### 2. Hero
- Two equal columns (`col-lg-6` + `col-lg-6`)
- Left column:
  - Large h2 name heading
  - Bio paragraph
  - "General Info" h2 heading
  - `<ul>` list with `<li>` items: each has `<span>` label + value text
  - Fields: Date of Birth, Address, E-mail, Phone
- Right column: `<figure>` with hero portrait image
- Background: `#f2f7f8` (same as header)
- Overall spacing: `spad` class (section padding)

### 3. Social Links
- Full-width section
- Centered row of 5 social icon links inside `<a>` tags with Font Awesome icons
- Icons: Pinterest, LinkedIn, Instagram, Facebook, Twitter
- Heading: "My Social Profiles" (hidden on md/sm)
- Background: `#f9f9f9`
- Social link circles: `border-radius: 150px`, background `#f9f9f9`, text `#484848`
- Bottom divider: `#cbcbcb`

### 4. Work Experience
- Single centered column (`col-xl-7 offset-xl-2`)
- Section title: "Work Experience" with underline bar (`#40424a`)
- Resume list items: year range (h2), company (h3), role (h4), description (p)
- Timeline dots between items: `border-radius: 50px`, `#cacaca`
- Background: white (default)

### 5. Education
- Same layout as Work Experience
- Section title: "Education"
- Background: `background-image` (parallax photo treatment) — use a picsum.photos image
- Same resume-list structure

### 6. References
- Carousel/slider section
- Section title: "References"
- Review cards in `owl-carousel` style: large quote mark (`"`, 120px, `#505259`), paragraph text, author name (h3), author title (h4)
- 3+ review cards
- Bottom padding removed (`pb-0`)

### 7. Portfolio
- Two-part header: left title "Portfolio", right "See All Portfolio" button
- 4-column grid (`col-xl-3 col-lg-6 col-md-6`)
- Each item: image thumbnail, title (h2), category (p) — all "Graphic design"
- Hover overlay: `#f2f7f8` background
- Bottom padding removed (`pb-0`)

### 8. Extra Skills
- Section title: "Extra Skills"
- 4-column layout:
  - Col 1-2: circular progress bars with percentage (75%, 83%), label "Inspiration", description text
  - Col 3-4: stat boxes — dark background `#40424a`, white text, icon image, large number (14, 9), label text
- `fact-box` height: 375px, `display: table`
- `fact-box.trans` = transparent background (for progress bars)
- Bottom padding removed (`pb-0`)

### 9. Contact Me
- Section title: "Contact Me"
- Form: Name input, E-mail input, Subject input (full-width), Message textarea (full-width)
- Inputs: transparent bg, no border except bottom `2px solid #cacaca`, padding-left 25px, height 60px
- Textarea: height 200px, same styling
- "Send message" button (site-btn): right-aligned

### 10. Footer
- Dark background: `#40424a`
- Copyright text centered, font-size 12px, color `#838488`
- Replace Colorlib credit with "Made with Component Dock" or "More templates at Component Dock"

## Key implementation decisions

- Replace Font Awesome icons with `lucide-react` equivalents
- Replace owl-carousel with CSS-based carousel or simple flex layout with state
- Replace circle-progress.js with CSS/SVG circular progress
- Use `picsum.photos/seed/townscope-N/W/H` for all placeholder images
- Hero image: `picsum.photos/seed/townscope-hero/600/700`
- Portfolio images: `picsum.photos/seed/townscope-portfolio-1/400/300` (etc.)
- Education background: `picsum.photos/seed/townscope-edu-bg/1920/1080`
- Stat box icons: use lucide-react icons instead of PNG files
