# Jockford — Implementation Tasks & Design Notes

**Source:** ColorLib Jackson
**Preview:** https://preview.colorlib.com/theme/jackson/
**Spec:** openspec/specs/template-jockford/spec.md

## Structure order (top to bottom)

1. Sidebar (fixed left) — always visible
2. Hero (full-viewport slider)
3. About ("Who Am I?")
4. Services ("Here are some of my expertise")
5. Skills ("My Skills")
6. Education ("Education" accordion)
7. Experience ("Work Experience" timeline)
8. Work ("Recent Work" portfolio grid)
9. Blog ("From the Blog")
10. Contact ("Contact")
11. Footer

## Design tokens

- Brand: #0066ff (blue), hover #0052cc
- Text: #1a1a1a (primary), #555555 (secondary), #888888 (muted)
- Backgrounds: #ffffff, #f8f9fa (secondary), #f1f3f5 (tertiary)
- Borders: #e5e7eb
- Font: Inter (Google Fonts), weights 300-700
- Radii: 6px, 10px, 14px, 9999px (pill)
- Shadows: sm/md/lg as CSS vars

## Section-by-section fidelity notes

### Sidebar
- Fixed position left, ~250px width
- Circular avatar (border-radius: 50%)
- Name in bold, role in lighter color
- Nav links: uppercase, small font, active state on blue
- Social icons row at bottom
- Dark mode toggle button
- Light background, matches body

### Hero
- Full viewport height (100vh)
- Background image with dark gradient overlay (rgba 0,0,0 0.55-0.75)
- Two slides (can simplify to single or simple carousel)
- Headline in large bold font, white text
- CTA buttons: outlined style (white border, white text, transparent bg)
- Navigation dots at bottom

### About
- Two-column layout: text left, stats right
- "Who Am I?" as section heading
- Bio paragraph with light text
- 4 stat cards in a row with icon, count, and label
- Cards have subtle shadow and rounded corners
- "Hire me" button in primary blue

### Services
- "Here are some of my expertise" heading
- 6 cards in 3×2 grid
- Each card: colored icon circle, title, description
- Icon colors cycle through 4 variants
- Cards have subtle hover effect

### Skills
- "My Skills" heading
- Description paragraph
- 6 progress bars with labels and percentage counters
- Bars animate on scroll (intersection observer)
- Color-coded bars cycling through 3 variants

### Education
- "Education" heading
- 5 accordion items
- Each: title + expand/collapse chevron
- Expanded: description paragraph
- Smooth height transition

### Experience
- "Work Experience" heading
- Centered vertical timeline line
- 5 entries alternating left/right
- Each: colored circle icon, title with date, description
- Icon colors alternate between 2 variants

### Work
- "Recent Work" heading
- Filter tabs: All, Graphic Design, Web Design, Software, Apps
- 2-column grid of portfolio items
- Each: background image, title overlay
- Hover: dark overlay with action icons (share, view, heart)
- Filtering with smooth transition

### Blog
- "From the Blog" heading
- 1 featured card (full width, large image)
- 2 standard cards (side by side)
- Each: image, category badge, date, title, excerpt, "Read more" link

### Contact
- "Contact" heading
- 3 icon feature boxes: email, address, phone
- Each with icon, label, and info text
- Contact form below (name, email, message, submit)

### Footer
- Copyright text
- "Made with ❤ by Component Dock" link
- Social media icon links

## Implementation checklist

- [ ] Copy simplest existing app as base
- [ ] Rename package to @free-react-templates/jockford
- [ ] Create Sidebar component (fixed left)
- [ ] Create Hero component (full-height slider)
- [ ] Create About component (bio + stats)
- [ ] Create Services component (6 icon cards)
- [ ] Create Skills component (progress bars)
- [ ] Create Education component (accordion)
- [ ] Create Experience component (timeline)
- [ ] Create Work component (filterable portfolio grid)
- [ ] Create Blog component (3 cards)
- [ ] Create Contact component (info + form)
- [ ] Create Footer component
- [ ] Create App.tsx composing all sections
- [ ] Set up Tailwind theme tokens in index.css
- [ ] Use picsum.photos for all placeholder images
- [ ] Add lucide-react icons
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck + lint + tests + build
- [ ] Set up CNAME and homepage
- [ ] Commit and PR
