# Edusphere — Implementation Notes

**Source:** ColorLib Universityedu
**Preview:** https://preview.colorlib.com/theme/universityedu/
**New Name:** edusphere
**Package:** @free-react-templates/edusphere

## Design Reference

- Live preview DOM fetched and analyzed: 2026-08-25
- CSS tokens extracted from `assets/css/style.css` (103KB)
- Font: Google Fonts "Chivo" (300, 400, 700, 900)
- Brand palette: emerald green `#007A5C`, coral red `#F15B43`, dark slate `#32404D`

## Section Order (top to bottom)

1. TopBar — announcement text + countdown timer + CTA
2. Navbar — sticky, logo + nav links + phone + social icons
3. Hero — full-screen bg image, dark overlay, left-aligned text + CTA
4. About — cream bg (#FCF2EB), 2-col (image | text + CTA)
5. Programs — 2 program cards (Faculty of Science, Faculty of Arts)
6. Essential Resources — split layout, dark overlay left, 3 resource items
7. Top Stories — 3-col card grid, "More Stories" link
8. Partners — logo carousel, centered title
9. Trusted/Stats — dark green overlay bg, "6000+ STUDENTS" headline
10. Footer — light bg, 4-col (logo, Quick Links, Programs, Resources, Newsletter)

## Fidelity Notes

### TopBar

- Background: light/white, centered text
- Countdown timer: 4 items (Days, Hours, Minutes, Seconds) in a row
- "Learn More" button on the right

### Navbar

- White background, sticky on scroll
- Logo left, nav center-left, phone + social right
- Blog has dropdown submenu (Blog, Blog Details, Elements)
- Mobile: hamburger menu

### Hero

- Full viewport height with background image
- Dark gradient overlay (navy/black)
- Left-aligned: uppercase small label, large headline (h1), paragraph, button
- Button style: solid coral `#F15B43` bg, white text, sharp corners

### About

- `section-bg` = warm cream `#FCF2EB`
- 2-column: image left, text right
- Heading: "A comprehensive teaching approach"
- Two paragraphs + "Learn More" button (outlined style)

### Programs

- White background, centered section title
- 2-column card grid
- Each card: image, h3 title (Faculty of Science/Arts), paragraph, "Learn More" link
- Cards have bottom margin

### Essential Resources

- Dark overlay section (background image + dark gradient)
- Left side content, right side decorative
- Title: "Essential resources"
- 3 items: each with h3 title, paragraph, right-arrow icon
- Items stacked vertically with spacing

### Top Stories

- White background, full-width container
- Title left-aligned with "More Stories" button right-aligned
- 3 equal-width cards in a row
- Each card: image, centered h3 title
- Cards have bottom padding/border

### Partners

- White background, centered title + subtitle
- 5 partner logos in a carousel/grid
- Logos are grayscale/neutral

### Trusted/Stats

- Full-width dark section (dark green `#305534` overlay + background image)
- Content right-aligned
- Large headline: "TRUSTED BY OVER 6000+ STUDENTS"
- Two paragraphs + "Join Now" button
- White text on dark background

### Footer

- Light blue-gray `#F1FBFF` background wrapper
- 4 columns: Logo | Quick Links | Programs | Resources | Newsletter
- Newsletter: email input + submit button
- Bottom bar: copyright + Component Dock link (replaces Colorlib attribution)

## Component Mapping

| Section   | Component          | Notes                              |
| --------- | ------------------ | ---------------------------------- |
| TopBar    | TopBar             | Countdown timer (static or JS)     |
| Navbar    | Navbar             | Sticky, dropdown, mobile hamburger |
| Hero      | Hero               | Background image, overlay, CTA     |
| About     | About              | 2-col, image + text                |
| Programs  | Programs           | 2 card grid                        |
| Resources | EssentialResources | Dark overlay, 3 items              |
| Stories   | TopStories         | 3-col card grid                    |
| Partners  | Partners           | Logo carousel                      |
| Trusted   | TrustedStats       | Dark bg, text + CTA                |
| Footer    | Footer             | 4-col, newsletter form             |

## Implementation Order

1. Set up app scaffold (copy simplest existing app, rename)
2. Install Chivo font via Google Fonts link in index.html
3. Set up Tailwind theme tokens (brand colors, font)
4. Build components top-down: TopBar → Navbar → Hero → About → Programs → Resources → Stories → Partners → Trusted → Footer
5. Write tests for each component (TDD)
6. Wire up App.tsx to compose all sections
7. Run verify-app.sh, fix any issues
8. Commit, push, open PR, merge
