# Template: Kinfolk (Church)

## Purpose

Recreation of ColorLib's **BrotherlyLove** church template.

- **Source:** https://colorlib.com/wp/template/brotherlylove/
- **Preview:** https://preview.colorlib.com/theme/brotherlylove/
- **New name:** `kinfolk` (apps/kinfolk)
- **Package:** `@free-react-templates/kinfolk`
- **Surge:** https://kinfolk.free.componentdock.com
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

Church/community website with a hero overlay, sermon announcement bar,
welcome section with video, three-column features, services carousel,
sermons + events grid, testimonials, and a multi-column footer.

## Design tokens

Extracted from the live preview's `css/style.css`:

| Token | Value |
|-------|-------|
| Brand color | `#6c5b7b` (muted purple) |
| Background light | `#e9ecef` |
| Background white | `#fff` |
| Text primary | `#000` |
| Text secondary | `gray` |
| Font family | `"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Font weight | 300 (light body), 400 (regular) |
| Button radius | `100px` (pill shape) |
| Button primary bg | `#6c5b7b` |
| Button primary text | `#fff` |
| Button hover | transparent bg, `#6c5b7b` border |
| Hero heading size | 60-70px, font-weight 300 |
| Section padding | `site-section` standard (~4rem) |
| Overlap bar | negative margin overlap (-10px) with `#6c5b7b` or white bg |
| Footer bg | `#6c5b7b` (brand purple) |
| Footer text | `#fff` |

## Section order (from live preview DOM)

1. **Top Bar** — secondary nav links (Home, About Us, Ministries) + social icons (FB, Twitter, LinkedIn, Instagram). Light gray bg `#e9ecef`.
2. **Navbar** — "Brotherly ❤" brand, collapsible nav with dropdowns (Ministries, Sermons, Events, About, Contact). White bg, `#6c5b7b` active state.
3. **Hero** — full-width background image with dark overlay, centered headline "Let your light so shine before men", CTA button "About Us" (pill, `#6c5b7b`) + "Visit Our Church" text link.
4. **Latest Sermon Bar** — overlapping section (block-42) showing "Latest Sermon:" label + title + pastor + media icons (video, headphones, download, book).
5. **Welcome Section** — two-column split: text (heading + paragraph + pastor name) left, video thumbnail with play button right.
6. **Features** — three-column cards: "Connect With God" (book icon), "Come As You Are" (user icon), "Brotherly Love" (heart icon). Each has icon + heading + paragraph. Icons use `text-primary` (#6c5b7b).
7. **Church Services Carousel** — "Church Services" heading, owl-carousel of service cards (image + heading + description + "Read More" link). 3 items: "The Truth will set us free", "Piano Lesson for Children", "Bible studies like Bereans did".
8. **Sermons & Events** — two-column layout: "Latest Sermons" (3 items: title + meta + media icons) and "Latest Events" (2 items: title + meta + description + "Read More").
9. **Testimonials** — "Change Lives" heading, 3 testimonial cards (blockquote + person name/location + avatar image). Background light `#e9ecef`.
10. **Footer** — three-column: "Church Quick Links" (3 sub-columns of ministry links), "Events" (3 recent event cards with date/person/comments), "Contact Information" (address, phone, email). Copyright bar with social icons.

## Gherkin requirements

### Feature: Kinfolk Church Template

#### Scenario: Top bar renders with nav links and social icons
- GIVEN the page loads
- WHEN the top bar is visible
- THEN it shows "Home", "About Us", "Ministries" links on the left
- AND social icons (Facebook, Twitter, LinkedIn, Instagram) on the right
- AND the top bar background is light gray

#### Scenario: Navbar brand and navigation
- GIVEN the page loads
- WHEN the navbar is visible
- THEN the brand shows "Kinfolk" with a heart icon
- AND nav items include Home, Ministries (dropdown), Sermons (dropdown), Events, About, Contact
- AND the active nav item uses brand purple color

#### Scenario: Hero section displays with background and CTA
- GIVEN the page loads
- WHEN the hero section is visible
- THEN it shows a background image with dark overlay
- AND a centered heading "Let your light so shine before men"
- AND a primary "About Us" button with pill shape and brand purple
- AND a "Visit Our Church" text link with location icon

#### Scenario: Latest sermon announcement bar overlaps hero
- GIVEN the page loads
- WHEN the sermon bar is visible
- THEN it overlaps the bottom of the hero section
- AND shows "Latest Sermon:" label with sermon title and pastor name
- AND media icons for video, audio, download, and text

#### Scenario: Welcome section with video thumbnail
- GIVEN the page loads
- WHEN the welcome section is visible
- THEN it shows "Welcome To Kinfolk" heading on the left
- AND a paragraph description
- AND pastor attribution text
- AND a video thumbnail with play button on the right

#### Scenario: Three-column features section
- GIVEN the page loads
- WHEN the features section is visible
- THEN it shows three feature cards in a row
- AND each card has an icon, heading, and paragraph
- AND the icons use brand purple color

#### Scenario: Church services carousel
- GIVEN the page loads
- WHEN the services carousel is visible
- THEN it shows a "Church Services" heading
- AND a horizontally scrollable carousel of service cards
- AND each card has an image, heading, description, and "Read More" link

#### Scenario: Sermons and events grid
- GIVEN the page loads
- WHEN the sermons and events section is visible
- THEN "Latest Sermons" column shows 3 sermon items with thumbnail, title, meta, and media icons
- AND "Latest Events" column shows 2 event items with thumbnail, title, meta, description, and "Read More" link

#### Scenario: Testimonials section
- GIVEN the page loads
- WHEN the testimonials section is visible
- THEN it shows "Change Lives" heading
- AND 3 testimonial cards in a row
- AND each card has a blockquote, person name, location, and avatar image
- AND the section has a light background

#### Scenario: Footer with links, events, and contact
- GIVEN the page loads
- WHEN the footer is visible
- THEN it has brand purple background
- AND "Church Quick Links" column with three sub-columns of ministry links
- AND "Events" column with 3 recent event entries
- AND "Contact Information" column with address, phone, email
- AND a copyright bar with social icons
- AND the footer links to https://www.componentdock.com/

#### Scenario: Responsive layout
- GIVEN the page loads on a mobile device
- WHEN the viewport is less than 768px wide
- THEN the navbar collapses to a hamburger menu
- AND columns stack vertically
- AND the carousel becomes swipeable

#### Scenario: Accessibility
- GIVEN any section renders
- WHEN inspecting the DOM
- THEN nav items use semantic `<a>` elements with accessible labels
- AND images have alt text
- AND the hero button is keyboard-focusable
- AND color contrast meets WCAG AA

## Verification checklist

- [ ] Spec written and saved to `openspec/specs/template-kinfolk/spec.md`
- [ ] Design tokens match ColorLib source (brand purple #6c5b7b, Rubik font, pill buttons)
- [ ] Section order matches live preview 1:1
- [ ] All 10 sections implemented as separate React components
- [ ] Responsive: navbar collapse, stacked columns, carousel mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Deployed to kinfolk.free.componentdock.com
