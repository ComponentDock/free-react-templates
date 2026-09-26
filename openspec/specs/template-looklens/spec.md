# Template: Looklens (Photo Gallery)

## Purpose

Recreation of ColorLib **TheLook** — a photo gallery / photography showcase
template. Minimalist dark-accent aesthetic with editorial layout, gallery grid,
and blog section.

- **Source:** https://colorlib.com/wp/template/thelook/
- **Preview:** https://preview.colorlib.com/theme/thelook/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Name rationale:** "Looklens" combines the original "Look" concept with
  photography/lens imagery. Single lowercase word, kebab-safe.

## Design Tokens (extracted from preview CSS)

| Token             | Value         | Usage                                      |
| ----------------- | ------------- | ------------------------------------------ |
| Font family       | Lato (300, 400, 700) | Body + headings via Google Fonts    |
| Brand color       | #081624       | Headings, nav links, button fill, borders  |
| Body text         | #5c5c5c       | Paragraphs, descriptions                   |
| Blog background   | #f6f7f9       | Blog section background                    |
| Footer background | #222222       | Dark footer                                |
| Secondary text    | #828282       | Blog dates, categories                     |
| Muted accent      | #c1c1c1       | Milestone/stat numbers                     |
| Button style      | Transparent bg, uppercase, arrow icon, no border-radius |
| Button solid      | #081624 bg, white text                           |
| Section padding   | 120px top/bottom (spad)                          |
| Hero height       | 950px         | Full-height carousel slide                  |
| Hero heading      | 160px font    | Large display heading                       |
| Grid              | 2-column gallery split (col-md-6)                |

## Gherkin Requirements

### Feature: Looklens — Photo Gallery Template

#### Scenario: Header navigation bar
- GIVEN the page loads
- THEN a header is visible with a logo on the left
- AND a navigation menu on the right with links: Home, Gallery, Artists, Shop, News, Contact
- AND the nav text is uppercase, 13px, font-weight 700, color #081624
- AND the header has padding 37px 53px

#### Scenario: Hero carousel section
- GIVEN the page loads
- THEN a full-width hero carousel is visible below the header
- AND each slide has a background image covering 70% width on the right
- AND the slide text shows a heading "The Look Gallery" in 160px font
- AND a subtext with date/event info in 36px font
- AND a "Read More" CTA button with right arrow icon
- AND carousel navigation arrows (prev/next) are at the bottom-right of the image area
- AND the prev arrow has dark background (#081624), next arrow has white background

#### Scenario: Gallery section with quote and items
- GIVEN the user scrolls past the hero
- THEN a two-column gallery section is displayed
- AND the left column contains an italicized pull-quote (large heading)
- AND below the quote are 3 gallery items (image + title + artist + "view gallery" link)
- AND the right column shows 3 more gallery items
- AND a "see all galleries" button appears at the bottom of the right column
- AND gallery items have consistent spacing (margin-bottom ~123px)

#### Scenario: Blog section
- GIVEN the user scrolls past the gallery
- THEN a blog section with light gray background (#f6f7f9) is visible
- AND a heading "Latest from the blog" in italic style
- AND the layout has the title on the left (39% width) and blog posts on the right (57%)
- AND each blog post has a thumbnail image (264px wide) floated left
- AND each post shows: category label (uppercase, letter-spacing 3px), title, date, excerpt, "Read More" link
- AND the date and category text use color #828282

#### Scenario: Footer with contact form
- GIVEN the user scrolls to the bottom
- THEN a dark footer (#222222) is displayed
- AND the left side shows "Get in touch" heading in white italic text with a description paragraph
- AND the right side contains a contact form with: Name, Email, Subject inputs + Message textarea
- AND form inputs have transparent background with bottom border (2px solid #656565)
- AND a "send message" button with white text and right arrow icon
- AND a copyright line at the bottom
- AND the footer includes a link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Responsive behavior
- GIVEN the page is viewed on mobile
- THEN the header collapses to a mobile-friendly layout
- AND the hero text and heading scale down appropriately
- AND the gallery switches to single-column layout
- AND the blog section stacks vertically
- AND the footer form inputs stack full-width

#### Scenario: Accessibility
- GIVEN any page state
- THEN all images have descriptive alt text
- AND navigation links are focusable with visible focus indicators
- AND the contact form has proper labels associated with inputs
- AND semantic HTML elements are used (header, section, footer, nav)

## Verification Checklist

- [ ] Header with logo and 6-item nav renders correctly
- [ ] Hero carousel animates slides with background images and text
- [ ] Gallery section: 2-column layout, 6 items total, quote text, CTA buttons
- [ ] Blog section: gray background, 2 posts with thumbnails and metadata
- [ ] Footer: dark background, contact form with 4 fields + submit button
- [ ] Footer links to Component Dock
- [ ] All design tokens match: #081624 brand, Lato font, #f6f7f9 blog bg, #222222 footer
- [ ] Responsive: mobile-friendly at all breakpoints
- [ ] Accessibility: alt text, focus states, semantic HTML, form labels
- [ ] No references to ColorLib in app code
- [ ] CNAME file: looklens.free.componentdock.com
- [ ] 100% test coverage
