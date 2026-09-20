# Template: Rostrum (Conference / Event)

## Purpose

Rostrum is a single-page conference/event website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Confe" free
template (source: https://colorlib.com/wp/template/confe/, preview:
https://preview.colorlib.com/theme/confe/), built under a DIFFERENT name
(**Rostrum**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page conference site with AOS scroll
animations, an Owl Carousel for event cards, and a parallax hero. It targets
conferences, summits, and professional events with a clean white + dark
aesthetic and a red-orange accent color.

**WHAT MAKES ROSTRUM DISTINCT (signature behaviors):**

1. **Full-viewport hero with parallax city skyline background.** Dark overlay
   (`rgba(0,0,0,0.6)`) over a city photo, centered white uppercase heading
   ("The Challenges of Business Innovation"), date/location subtext, and a
   red-orange pill CTA button ("Get Your Ticket") + "or Learn More" link.
2. **Countdown timer section.** "About The Conference" section includes a
   live countdown to a target date, rendered with labeled number blocks
   (days, hours, minutes, seconds).
3. **Dual-image split rows.** Two sections with side-by-side full-bleed
   images (50/50 split, no text) used as visual breaks between content.
4. **6-speaker grid.** Three columns × two rows of speaker cards, each
   with a photo thumbnail (slight shadow), first name in a `<span>` inside
   the heading, role/company subtitle.
5. **"Why Us?" icon features.** Three columns with flaticon icons
   (paper-plane, speaker, chat), uppercase h5 headings, and short blurbs.
6. **Sponsors grid + CTA card.** Six sponsor logo images in a 3×2 grid,
   followed by a bordered "Your Company Here" card with a "Become a Sponsor"
   button.
7. **Owl Carousel events slider.** Repeating event cards with image
   thumbnail + play overlay, title, date/author meta, and description.
8. **Quick-contact info bar.** Black (`#000`) full-width strip with three
   centered columns: Where (map icon), When (clock icon), Email (comment
   icon) — uppercase headings, white text.
9. **Footer with hero image overlay.** Background image with
   `rgba(0,0,0,0.8)` overlay, three-column layout (About + Quick Menu +
   Social Icons), copyright line with heart icon.

## Design tokens (extracted from preview CSS)

| Token                | Value                                              |
| -------------------- | -------------------------------------------------- |
| Brand / primary      | `#f23a2e` (red-orange)                             |
| Body font            | `'Work Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Heading font         | Same as body (Work Sans), uppercase via CSS         |
| Decorative font      | `'Amatic SC'` (available via Google Fonts, used for accent text) |
| Button radius        | `30px` (pill shape)                                |
| Button padding       | `px-4 py-3` (hero), `px-4 py-2` (inline)           |
| Section bg (light)   | `#fff`                                             |
| Section bg (dark)    | `#000` (contact bar, footer overlay)               |
| Hero overlay         | `rgba(0,0,0,0.6)`                                  |
| Footer overlay       | `rgba(0,0,0,0.8)` over background image            |
| Primary text         | `#000`                                             |
| Secondary text       | `rgba(0,0,0,0.6)` / `rgba(255,255,255,0.5)`       |
| Image shadow         | `0 2px 10px -2px rgba(0,0,0,0.25)`, radius `7px`   |
| Footer link hover    | `#fff`                                             |
| Navbar               | Sticky, white bg (`#fff`), light border bottom     |
| Heading style        | Uppercase, bold, centered with `section-heading`    |

## Visual design notes (from screenshot)

The screenshot shows a professional conference template with:
- Dark city skyline hero (Chrysler Building / NYC) with heavy dark overlay
- Large white uppercase sans-serif heading centered
- Date + location in lighter white text below
- Prominent red-orange pill-shaped CTA button
- Clean white sections below with bold black uppercase headings
- Minimal, modern professional aesthetic — lots of whitespace
- Dark footer with image background

## Gherkin requirements

### Feature: Rostrum Conference Template

#### Scenario: Navbar renders with logo and navigation links
  Given the page loads
  Then a sticky navbar is visible at the top
  And it contains the logo text "Rostrum."
  And it contains navigation links: Home, Speakers, Venue, Sponsors, About, Contact

#### Scenario: Hero section displays conference headline and CTA
  Given the hero section is visible
  Then the heading reads "The Challenges of Business Innovation"
  And the date/location text is displayed below the heading
  And a "Get Your Ticket" pill button is visible
  And a "Learn More" text link is visible beside the button

#### Scenario: About section shows countdown timer
  Given the about section is visible
  Then an "About The Conference" heading is displayed
  And a countdown timer shows days, hours, minutes, seconds
  And descriptive paragraph text is shown below the countdown
  And a "Get Your Ticket Now" button is present

#### Scenario: Image split rows display two side-by-side images
  Given the first image split row is visible
  Then two full-bleed images are displayed side by side (50/50)
  And no text overlays the images

#### Scenario: Speakers section shows a 3×2 grid of speaker cards
  Given the speakers section is visible
  Then a "Speakers" heading is displayed
  And six speaker cards are shown in a 3-column grid
  And each card has a photo thumbnail
  And each card shows the speaker name and role/company

#### Scenario: Why Us section shows three feature columns
  Given the why-us section is visible
  Then a "Why Us?" heading is displayed
  And three feature columns are shown
  And each column has an icon, an uppercase heading, and a description

#### Scenario: Sponsors section shows logo grid and CTA
  Given the sponsors section is visible
  Then a "Sponsors" heading is displayed
  And six sponsor logo images are shown in a 3×2 grid
  And a "Your Company Here" bordered card is displayed
  And a "Become a Sponsor" button is present in the card

#### Scenario: Conference Events carousel shows event cards
  Given the events section is visible
  Then a "Conference Events" heading is displayed
  And a carousel of event cards is shown
  And each card has an image with play overlay, title, date, and description

#### Scenario: Quick contact info bar displays location, time, and email
  Given the quick-contact bar is visible
  Then it has a black background
  And three centered columns are shown: Where, When, Email
  And each column has an icon, heading, and detail text

#### Scenario: Footer shows about text, links, and social icons
  Given the footer is visible
  Then it has a background image with dark overlay
  And it contains About text with a "Read More" button
  And it has a Quick Menu with navigation links
  And it has social media icon links
  And it contains a copyright line with a link to Component Dock

#### Scenario: Footer links to Component Dock
  Given the footer copyright line is visible
  Then it contains a link to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar is sticky and matches original layout
- [ ] Hero uses parallax background image with dark overlay
- [ ] Countdown timer functions correctly (days/hours/min/sec)
- [ ] Image split rows are 50/50 side-by-side
- [ ] Speakers grid is 3 columns × 2 rows with correct card layout
- [ ] "Why Us" section has 3 icon feature columns
- [ ] Sponsors grid shows 6 logos in 3×2 layout
- [ ] Events carousel slides between event cards
- [ ] Quick contact bar is black with 3 centered columns
- [ ] Footer has image background with dark overlay
- [ ] Footer links to https://www.componentdock.com/
- [ ] All design tokens match the extracted values
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] Placeholder images use picsum.photos/seed/rostrum-*
- [ ] Fonts loaded via Google Fonts link in index.html
- [ ] Component Dock branding in footer
- [ ] 100% test coverage maintained
