# Loanforge — Design Notes & Task Outline

## Template identity

- **New name:** Loanforge
- **ColorLib source:** "Loan" (slug: `loan`)
- **Preview URL:** https://preview.colorlib.com/theme/loan/
- **Source page title:** "Finance HTML-5 Template"
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section structure (top-to-bottom order)

| # | Section            | Component name    | Key details                                                  |
|---|-------------------|-------------------|--------------------------------------------------------------|
| 1 | Header/Navbar     | `Navbar.tsx`      | Transparent sticky, logo + nav links + phone CTA button     |
| 2 | Hero Slider       | `Hero.tsx`        | Full-width slider, dark overlay, headline, CTA, hero image  |
| 3 | Slider Footer Strip | `HeroFooter.tsx` | Dark strip below slider: 4 icon+text feature highlights     |
| 4 | About             | `About.tsx`       | Two-column: text left (heading + paragraphs + CTA), images  |
|                   |                   |                   | right (overlapping layered effect)                           |
| 5 | Services          | `Services.tsx`    | Dark bg image, centered heading, 4-column icon+title+desc   |
| 6 | Support/Why-Choose| `Support.tsx`     | Two-column: image+badge left, heading+checklist right       |
| 7 | Application Form  | `Application.tsx` | Dark bg image, horizontal form: 2 dropdowns + input + CTA   |
| 8 | Team              | `Team.tsx`        | 4-column grid: photo, social overlay, name, role            |
| 9 | Testimonial       | `Testimonial.tsx` | Carousel: quote, founder photo/name/role, dots              |
| 10| Blog              | `Blog.tsx`        | 2-column grid: image, date, title, author                   |
| 11| Footer            | `Footer.tsx`      | 4-column links + bottom bar with Component Dock credit      |

## Fidelity notes per section

### Header/Navbar
- Logo left, nav links right, phone button far right (blue `#3589f1` bg)
- Transparent initially, sticky on scroll
- Mobile: hamburger menu
- Blog dropdown with 4 sub-items

### Hero Slider
- Background image with dark overlay
- Right-aligned hero illustration
- Subtitle "Achieve your financial goal" above heading
- CTA "Apply for Loan" — dark bg `#0b1416`, sharp corners (radius 0)
- Below slider: dark strip with 4 feature highlight items (icon + text)

### About
- Subtitle "About Our Company" in brand blue `#3589f1`
- Heading "Building a Brighter financial Future & Good Support." in navy
- Two paragraphs + "Apply for Loan" button
- Right: two overlapping images (decorative layering)

### Services
- Dark background image (`section_bg02.jpg`)
- White text, centered heading
- 4 cards: icon circle + title + description
- Source has: Business Loan, Commercial Loans, Construction Loans, Business Loan

### Support/Why-Choose
- Left: large image with "Since 1992" badge overlay
- Right: heading "We Promise Sustainable Future For You."
- 4 checked items (custom checkbox styling)

### Application Form
- Dark background image (`section_bg03.jpg`)
- Horizontal form: Select Amount dropdown, Duration Month dropdown,
  Return Amount input, "Apply for Loan" button
- Form is decorative (no real submit)

### Team
- 4 cards in a row
- Photo with social links overlay on hover
- Placeholder names/roles for all

### Testimonial
- Light lavender bg `#fbf9ff`
- Carousel with quote icon, text, founder photo/name/role
- Navigation dots

### Blog
- 2 cards in a row
- Large image, date, title, author

### Footer
- Dark bg `#000a2d`
- 4 columns: logo+tagline, Quick Links, New Products, Support
- Bottom: copyright + social icons
- Replace Colorlib attribution with Component Dock link

## Design tokens (from live preview CSS)

- Brand blue: `#3589f1`
- Dark navy: `#000a2d`
- Orange accent: `#ff872d`
- Body text: `#635c5c`
- Light bg: `#f7f7f7`
- Lavender bg: `#fbf9ff`
- Heading font: 'Rufina', serif (Google Fonts)
- Body font: 'Rubik', sans-serif (Google Fonts)
- Button radius: `5px`
- Hero button: sharp corners (radius 0)

## Tasks

- [ ] Scaffold app: copy simplest existing app, rename to `loanforge`
- [ ] Install Google Fonts (Rufina + Rubik) in `index.html`
- [ ] Create Navbar component
- [ ] Create Hero slider component with background image + overlay
- [ ] Create HeroFooter strip component
- [ ] Create About section with overlapping images
- [ ] Create Services section with dark bg + icon cards
- [ ] Create Support section with checklist
- [ ] Create Application form section
- [ ] Create Team section with social overlays
- [ ] Create Testimonial carousel
- [ ] Create Blog card grid
- [ ] Create Footer with Component Dock link
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck + lint + test + build
