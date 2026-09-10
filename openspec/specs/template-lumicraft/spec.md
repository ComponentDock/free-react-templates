# Template: Lumicraft (Creative Digital Agency)

## Purpose

Recreation of the ColorLib "Boxus" template — a creative digital agency
one-page template. Source: <https://colorlib.com/wp/template/boxus/>.
Preview: <https://preview.colorlib.com/theme/boxus/>.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from the live preview's stylesheets on 2026-09-10.

| Token             | Value                          | Usage                                |
| ----------------- | ------------------------------ | ------------------------------------ |
| font-body         | Roboto, sans-serif, 400        | Body text, paragraphs                |
| font-heading      | Montserrat, sans-serif, 700    | Headings, section titles, hero       |
| font-accent       | PT Serif, serif, 400           | Hero subtitle, decorative text       |
| color-primary     | #221C5A                        | Dark purple — nav, hero bg, headings |
| color-primary-alt | #26276D                        | Slightly lighter purple variant      |
| color-text        | #23214C                        | Body text color                      |
| color-green       | #32DB8A                        | Section title blocks, skill bars     |
| color-green-dark  | #55B286                        | Section number text, muted green     |
| color-pink        | #E74C78 / #E64B77              | Accent buttons, highlights, links    |
| color-gold        | #FFBB42 / #E3A536              | Skill progress bars (CSS)            |
| color-blue        | #4C9EE7 / #468AC7              | Skill progress bars (Design)         |
| color-white       | #FFFFFF                        | Section text on dark, card bg        |
| color-link-hover  | #EE87A4                        | Anchor hover                         |
| radius-button     | 0 (sharp)                      | Submit button — 2px solid #E54B76    |
| section-title-bg  | #32DB8A, 370×370px             | Colored left/right title block       |
| section-title-font| Montserrat 700, 109px, upper   | Section headings (white on green)    |
| section-num-font  | Montserrat 700, 180px, #55B286 | Large background section numbers     |
| content-width     | 1170px max                     | Container width                      |

## Section Structure (order)

1. **Hero** (`#home`) — Dark purple bg with background image. Centered logo,
   big title ("We Craft Awesome Web And Graphic Design Solutions") in
   Montserrat bold white, PT Serif subtitle. Full viewport height minus nav.
2. **Services** (`#services`, section 01) — Green 370×370 title block (left)
   + service card slider (right). 8 services across 2 slides: Branding, Mobile
   Apps, Web, Graphic, Services, PSD, HTML, PHP. Each card: icon image +
   uppercase title + short description.
3. **Portfolio** (`#portfolio`, section 02) — Green title block (right, top)
   + masonry grid (left, below). Portfolio items with hover overlay showing
   category icon, title, subtitle.
4. **Crafters / About** (`#about`, section 03) — Green title block (left) +
   team slider (right). 3 team members (photo + name + title) in an image
   slider with prev/next arrows.
5. **Stories / News** (`#news`, section 04) — Green title block (right, top)
   + blog post grid (left, below). 4 blog entries: featured image + date +
   category tag + title + excerpt + read more link.
6. **Offer / Video** (`#video`, section 05) — Green title block (left) +
   video popup (Vimeo embed) + full-width image carousel with pagination.
   Testimonial slider with quote text + author name.
7. **Expertise / Skills** (`#skills`, section 06) — Green title block
   (right, top) + progress bars (left, below). 4 skills: HTML 81% (green),
   CSS 93% (gold), PSD 72% (pink), Design 99% (blue). Each bar has skill
   name + percentage + colored fill.
8. **Contact** (`#contact`, section 07) — Green title block (left) +
   two-column content (right): left column = text with colored emphasis;
   right column = form (Name, Email, Subject, Message, Submit button).
   Full-width Google Maps embed below.
9. **Footer** — Dark purple background. Centered: copyright line + social
   icons (Twitter, Behance, Dribbble, Facebook, RSS). Replace Colorlib
   attribution with Component Dock link.

## Gherkin Requirements

```gherkin
Feature: Lumicraft — Creative Digital Agency Template

  Background:
    Given the user opens the Lumicraft page
    Then the fixed navigation bar is visible at the top

  # --- HERO ---

  Scenario: Hero section displays with dark purple background
    Given the hero section is visible
    Then the hero has a dark purple background with background image
    And a centered logo is displayed
    And the headline reads "We Craft Awesome Web And Graphic Design Solutions"
    And the headline uses Montserrat bold white font
    And a PT Serif subtitle is displayed below the headline

  # --- SERVICES ---

  Scenario: Services section shows numbered title block and service cards
    Given the user scrolls to the services section
    Then section number "01" is displayed in a green 370×370 title block on the left
    And the heading "Services" is displayed in white uppercase Montserrat
    And a service card slider is shown on the right
    And the first slide contains 4 service cards: Branding, Mobile Apps, Web, Graphic
    And each card has an icon, uppercase title, and description text

  Scenario: Services slider navigation
    Given the services slider is visible
    When the user clicks the next arrow
    Then the second slide appears with: Services, PSD, HTML, PHP

  # --- PORTFOLIO ---

  Scenario: Portfolio section shows grid with hover overlay
    Given the user scrolls to the portfolio section
    Then section number "02" is displayed in a green title block on the right
    And a masonry grid of portfolio items is displayed on the left
    And each item shows a hover overlay with category, title, and subtitle

  # --- CRAFTERS / ABOUT ---

  Scenario: About section shows team members
    Given the user scrolls to the about section
    Then section number "03" is displayed in a green title block on the left
    And the heading reads "CRAFTERS"
    And a team slider shows 3 members with photos and names
    And navigation arrows allow browsing between team slides

  # --- STORIES / NEWS ---

  Scenario: News section shows blog entries
    Given the user scrolls to the news section
    Then section number "04" is displayed in a green title block on the right
    And the heading reads "STORIES"
    And 4 blog entries are displayed in a grid
    And each entry has an image, date, category tag, title, excerpt, and read more link

  # --- OFFER / VIDEO ---

  Scenario: Video section shows video popup and testimonials
    Given the user scrolls to the video section
    Then section number "05" is displayed in a green title block on the left
    And the heading reads "OFFER"
    And a video thumbnail with popup overlay is displayed
    And a testimonial slider shows quotes with author attribution
    And a full-width image carousel with pagination is shown

  # --- EXPERTISE / SKILLS ---

  Scenario: Skills section shows progress bars
    Given the user scrolls to the skills section
    Then section number "06" is displayed in a green title block on the right
    And the heading reads "EXPERTISE"
    And 4 progress bars are displayed: HTML (81%), CSS (93%), PSD (72%), Design (99%)
    And each bar has a skill name, percentage text, and colored fill bar

  # --- CONTACT ---

  Scenario: Contact section displays form and map
    Given the user scrolls to the contact section
    Then section number "07" is displayed in a green title block on the left
    And the heading reads "Contact"
    And a two-column layout is shown: descriptive text on the left, form on the right
    And the form contains Name, Email, Subject, Message fields and a Submit button
    And a full-width Google Maps embed is displayed below the form

  # --- FOOTER ---

  Scenario: Footer displays copyright and social links
    Given the user scrolls to the footer
    Then the footer has a dark purple background
    And a copyright line is displayed
    And social icons for Twitter, Behance, Dribbble, Facebook, and RSS are shown
    And a "Component Dock" link replaces the original Colorlib attribution
```

## Verification Checklist

- [ ] Section order matches: Hero → Services → Portfolio → Crafters → Stories → Offer → Expertise → Contact → Footer
- [ ] Section title blocks are 370×370px green (#32DB8A) with white Montserrat text
- [ ] Section numbers use Montserrat bold 180px in #55B286
- [ ] Hero has dark purple (#221C5A) background with background image
- [ ] Navigation is fixed-position with dark purple background and white uppercase links
- [ ] Service cards use an image slider with prev/next controls
- [ ] Portfolio uses a masonry grid layout
- [ ] Team members use an image slider
- [ ] Blog entries show date, category, title, excerpt
- [ ] Skills section has 4 color-coded progress bars (green, gold, pink, blue)
- [ ] Contact form has Name, Email, Subject, Message, Submit fields
- [ ] Google Maps embed is full-width below the form
- [ ] Footer links to Component Dock (no ColorLib attribution)
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
