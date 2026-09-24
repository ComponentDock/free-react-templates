# Template: SoundBite (Podcast / Blog)

## Purpose

Recreation of ColorLib "The Hustle Hour" — a dark-themed podcast/blog single-page site.
- **Source:** ColorLib "The Hustle Hour" (slug: `hustlehour`)
- **Preview URL:** https://preview.colorlib.com/theme/hustlehour/
- **ColorLib page:** https://colorlib.com/wp/template/the-hustle-hour/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (Tailwind v4.3.3, Astro-generated) and DOM:

### Colors
| Token | Tailwind Class | Usage |
|-------|---------------|-------|
| Primary accent | primary-600 (purple/violet) | Buttons, badges, newsletter gradient start, focus rings, shadows |
| Accent | accent-600 | Newsletter gradient end, avatar gradient end |
| Page background | gray-950 (#030712) | html/body, header, default section bg, footer |
| Section surface | gray-900 (#111827) | About, Sponsors, Reviews section backgrounds |
| Card background | gray-900/50 | Episode cards, sponsor cards, review cards |
| Border | gray-800 (#1f2937) | Card borders, header bottom border, footer top border, input borders |
| Heading text | white | All headings, strong text, card titles |
| Body text | gray-400 (#9ca3af) | Descriptions, paragraphs, nav links |
| Muted text | gray-500 (#6b7280) | Copyright, fine print, footer legal links |
| Link/accent text | primary-400 | Inline links, secondary accents, "Learn More" links |
| Badge text | primary-300 | Category badge labels (on primary-900/50 bg) |
| Star rating | yellow-400 | Star icons in testimonial cards |
| Focus ring | primary-500 | Input focus:border + focus:ring |
| Gradient | from-primary-600 to-accent-600 | Newsletter banner, avatar backgrounds |

### Typography
| Property | Value |
|----------|-------|
| Font family | Outfit (Google Fonts) |
| Weights loaded | 300, 400, 500, 600, 700 |
| Headings | font-bold, tracking-tight, text-white, text-3xl/4xl |
| Body | text-gray-400, text-lg, leading-relaxed |
| Badge/label | text-sm, font-medium, text-primary-300 |
| Small/meta | text-sm, text-gray-400 |

### Spacing & Layout
| Property | Value |
|----------|-------|
| Container | mx-auto, px-4 lg:px-8, max-w-6xl (content areas) |
| Section padding | py-20 lg:py-28 |
| Header height | h-16 lg:h-20 |
| Card radius | rounded-2xl |
| Primary button radius | rounded-full (pill shape) |
| Secondary button radius | rounded-lg |
| Input radius | rounded-xl |
| Avatar radius | rounded-full |
| Badge radius | rounded-full |

### Interactive Elements
| Element | Style |
|---------|-------|
| Primary CTA button | rounded-full, bg-primary-600, white text, px-8 py-3.5, shadow-lg shadow-primary-600/25, hover:bg-primary-500 |
| Secondary button | rounded-lg, bg-gray-800, text-gray-400, p-2.5, hover:bg-gray-700 hover:text-white |
| Input fields | rounded-xl, border border-gray-700, bg-gray-900, text-white, px-4 py-3, focus:border-primary-500 focus:ring-1 focus:ring-primary-500 |
| Textarea | Same as input, min-height 150px |
| Social icons | rounded-lg, bg-gray-800, text-gray-400, p-2.5, hover:bg-gray-700 hover:text-white |
| Cards (episode/sponsor/review) | rounded-2xl, border border-gray-800, bg-gray-900/50, p-6/p-8, hover:border-gray-700 hover:bg-gray-900 |
| FAQ toggle | button, rounded-full bg-gray-800 w-8 h-8, text-gray-400, contains +/- SVG icon |
| Back-to-top | fixed, bottom-6 right-6, rounded-full, bg-primary-600, w-12 h-12, shadow-lg, appears on scroll |

## Section Order (from live preview DOM, top to bottom)

1. **Header** — Sticky (top-0, z-50), backdrop-blur-lg, bg-gray-950/80, border-b border-gray-800. Contains: logo (h-8/h-10), nav links (Episodes, About, Sponsors, Newsletter, Contact) as anchor scrolls, "Listen Now" primary button. Nav hidden on mobile, visible lg+.
2. **Hero / Latest Episodes** (id="episodes") — Badge "Latest Episodes", heading "Tune In, Level Up", subtitle about real stories from founders. Featured episode card: large (image with play overlay, title, description, date + duration). Episode grid (3 cards): each has image, number badge, title, short description, duration, "Listen" link with arrow.
3. **About the Host** (id="about") — 2-column grid (lg:grid-cols-2). Left: host photo (aspect-[4/5], rounded-3xl, gradient overlay from-gray-900/60). Right: badge "About the Host", heading "Meet Your Host", host name with gradient text class, bio paragraph, blockquote with border-l-4 border-primary-600, social icons (Twitter/X, LinkedIn, Instagram) as rounded-lg buttons.
4. **Sponsors** (id="sponsors") — Badge "Our Sponsors", heading "Powered by Great Companies", subtitle. 4-column grid of sponsor cards: each has initial letter icon (h-16 w-16, rounded-2xl, bg-gray-800), company name, description, "Learn More" link with arrow. CTA "Want to sponsor the show? Get in touch".
5. **Reviews / Testimonials** — Badge "Reviews", heading "What Listeners Say", subtitle. Horizontal carousel: flex row with transition-transform, each slide is a review card (rounded-2xl, border, bg-gray-900/50, p-8) with 5-star rating (yellow-400), blockquote text, author row (avatar with gradient bg, name, role). Prev/next arrows (hidden mobile, flex lg+), dot indicators.
6. **Newsletter** (id="newsletter") — Full-width gradient banner (from-primary-600 to-accent-600), rounded-3xl, p-8 sm:p-12 lg:p-16. Decorative blur circles (absolute, bg-white/10, blur-2xl). Heading "Stay in the Loop", subtitle. Inline form: email input (bg-white/10 border-white/20, white text) + "Subscribe" button (bg-white, primary-600 text). Subscriber count note.
7. **FAQ** (id="faq") — Badge "FAQ", heading "Frequently Asked Questions", subtitle. Accordion: divide-y divide-gray-200 dark:divide-gray-800. Each item: button with question text (font-semibold) + toggle icon (rounded-full, bg-gray-800, +/- SVG). Answer div with overflow-hidden, max-height transition, pt-4 text-gray-400.
8. **Contact** (id="contact") — Badge "Get in Touch", heading "Let's Connect", subtitle. Form (space-y-6): Name + Email (2-column grid sm:grid-cols-2), Subject (full width), Message textarea (5 rows). "Send Message" button (rounded-full, bg-primary-600, send icon SVG). Email address link below form.
9. **Footer** — border-t border-gray-800, bg-gray-950, pt-16 lg:pt-24. Grid (lg:grid-cols-12): brand column (logo, description, social icons), Podcast links column, Follow links column (Spotify, Apple, YouTube, RSS), More links column, Listen Now column (Spotify + Apple buttons with icons). Bottom bar: copyright, Privacy/Terms/Style Guide links.
10. **Mobile Sticky CTA** (lg:hidden) — fixed bottom-0, z-40, border-t, bg-white dark:bg-gray-900, p-3. Two buttons: "Subscribe" (bg-gray-100/dark:bg-gray-800) + "Listen Now" (bg-primary-600).
11. **Scroll Progress Bar** — fixed top-0, z-60, h-0.5, bg-primary-600, width controlled by JS scroll listener.
12. **Back to Top Button** — fixed bottom-6 right-6, z-50, rounded-full, bg-primary-600, w-12 h-12, shadow-lg. Appears after scrolling (opacity + transform transition). Arrow-up SVG icon.

## Gherkin Requirements

### Feature: SoundBite Podcast Template

  Scenario: Header is sticky with navigation
    Given the page loads
    Then the header is sticky at the top with backdrop blur
    And the logo is visible on the left
    And navigation links are visible: Episodes, About, Sponsors, Newsletter, Contact
    And a "Listen Now" primary button is visible on the right
    And the header has a bottom border

  Scenario: Hero section shows latest episodes
    Given the page loads
    Then a "Latest Episodes" badge and heading are displayed
    And a featured episode card shows an image, title, description, date, and play button
    And 3 episode cards are displayed in a responsive grid
    And each episode card has a number, title, description, duration, and listen link

  Scenario: About section displays host information
    Given the user scrolls to the About section
    Then a 2-column layout is shown
    And the left column shows a host photo with rounded corners and gradient overlay
    And the right column shows badge, heading, host name (gradient text), bio, and blockquote
    And social media icons (X/Twitter, LinkedIn, Instagram) are displayed as buttons

  Scenario: Sponsors section shows partner cards
    Given the user scrolls to the Sponsors section
    Then a "Powered by Great Companies" heading is displayed
    And 4 sponsor cards are shown in a grid
    And each card has an initial icon, company name, description, and "Learn More" link

  Scenario: Reviews carousel
    Given the user scrolls to the Reviews section
    Then review cards are shown in a horizontal carousel
    And each review has 5-star rating, blockquote, author avatar, name, and role
    And prev/next arrows are visible on desktop
    And dot indicators show current slide

  Scenario: Newsletter subscription
    Given the user scrolls to the Newsletter section
    Then a gradient banner (primary to accent) is displayed
    And an email input and "Subscribe" button are shown inline

  Scenario: FAQ accordion
    Given the user scrolls to the FAQ section
    Then accordion items show questions with +/- toggle buttons
    When a user clicks a question
    Then the answer expands with smooth animation
    And clicking again collapses it

  Scenario: Contact form
    Given the user scrolls to the Contact section
    Then a form shows Name and Email (2-column), Subject, and Message fields
    And a "Send Message" button with send icon is displayed
    And an email link is shown below

  Scenario: Footer layout
    Given the footer is visible
    Then it has brand logo, description, social icons
    And columns: Podcast, Follow, More, Listen Now
    And a bottom bar with copyright and legal links
    And "Component Dock" attribution link is present

  Scenario: Mobile CTA bar
    Given the user is on a viewport below lg breakpoint
    Then a fixed bottom bar appears with "Subscribe" and "Listen Now" buttons
    And it is hidden on lg+ viewports

  Scenario: Back to top
    Given the user scrolls down
    Then a back-to-top button appears at bottom-right
    And clicking it scrolls to the top of the page

## Verification Checklist

- [ ] Header is sticky with backdrop blur, anchor links scroll to sections
- [ ] Hero shows featured episode + 3 episode grid cards
- [ ] About has 2-column layout: host photo + bio + blockquote + social icons
- [ ] Sponsors shows 4 cards in a grid
- [ ] Reviews carousel works with prev/next and dot indicators
- [ ] Newsletter has gradient banner with email input + subscribe button
- [ ] FAQ accordion expands/collapses with smooth animation
- [ ] Contact form has all fields and send button
- [ ] Footer has multi-column layout with "Component Dock" link
- [ ] Mobile CTA appears only below lg breakpoint
- [ ] Back-to-top button works on scroll
- [ ] Design tokens: Outfit font, dark theme (gray-950/900), primary-600 accent
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] 100% test coverage
