# Template: Rostrum (Event / Conference)
<!-- prep-status: shipped-as=festpoint -->
> **SHIPPED-UNDER** — the ColorLib `eventalk` design this prep describes already
> ships as `apps/festpoint` (<https://festpoint.free.componentdock.com>).
> Do not scaffold `apps/rostrum`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-festpoint/spec.md`.

## Purpose

Recreation of ColorLib "Eventalk" (https://colorlib.com/wp/template/eventalk/)
Preview: https://preview.colorlib.com/theme/eventalk/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
New name: **rostrum** (a speaker's platform — fits the conference/event theme)

## Replication reference

### Live preview DOM (fetched 2026-09-20)

**Section order (HTML):**
1. Navbar — dark bg, brand "Even[span]talk.", nav links: Home, About, Speakers, Schedule, Blog, Contact, "Buy ticket" CTA
2. Hero — full-height parallax background image, overlay, headline "Developer Conference 2019", subtext "December 21-24, 2019. Paris, Italy", countdown timer (days/hours/minutes/seconds)
3. Services — 4-column row on light bg: Venue, Transport, Hotel, Restaurant (icon + heading + description)
4. Counter / Fun Facts — split layout: left image, right side with "Fun Facts" heading + 2×2 stat grid (30 Speakers, 200 Sponsor, 2500 Total Seats, 40 Topics)
5. Speakers — centered heading "Our Speakers", horizontal carousel of speaker cards (image, name, role, social icons)
6. Schedule — centered heading "Event Schedule", tabbed days (Day 01–04), each with session rows (speaker photo, time, title, description, speaker name + role)
7. Testimonials — "Happy Clients" heading, carousel of testimonial cards (avatar with quote icon, testimonial text, name, role)
8. Pricing — "Our Ticket Pricing" heading, 3-column cards (Personal $85, Small Team $200, Family Pack $499), each with feature list + "Buy Ticket" button
9. Blog — "Recent Blog" heading, 3-column cards with date overlay (day + month + year), title, excerpt
10. Newsletter — parallax background, "Subscribe to our Newsletter" heading + description + email input + submit button
11. Gallery — 4-column grid of images with Instagram icon overlay on hover
12. Footer — dark bg, 4-column layout: brand + description + social, Useful Links, Privacy links, Have a Questions (address, phone, email), copyright line

### CSS tokens extracted from style.css

| Token | Value | Usage |
|-------|-------|-------|
| Primary / Brand | `#78d5ef` (sky blue) | Buttons, links, accents |
| Primary hover | `#56caeb` | Button hover state |
| Link hover | `#34c0e7` | Anchor hover |
| Pink accent | `#e83e8c` | Secondary accent (icon-quote, etc.) |
| Subscribe button | `#3847ff` (indigo) | Newsletter submit button |
| Dark bg | Bootstrap `.bg-dark` (`#343a40`) | Navbar, footer |
| Light section bg | `#f8f9fa` (Bootstrap --light) | Services, schedule, pricing sections |
| Body text | `#212529` | Default text color |
| Gray text | `#6c757d` | Muted/caption text |
| White | `#fff` | Card backgrounds, subscribe input bg |
| Button radius | `0` (rectangular) | Bootstrap default (no border-radius on .btn) |
| Subscribe input radius | `5px 0 0 5px` | Left-rounded input |
| Subscribe submit radius | `0 5px 5px 0` | Right-rounded button |
| Card reply radius | `4px` | Small rounded |
| Heading size | `40px` / `font-weight: 700` | Section headings |
| Subheading | `18px` uppercase | Section sub-labels |
| Font family | `"Work Sans", sans-serif` | All text |
| Body font size | `1rem` | Base text |
| Body line-height | `1.5` | Base text |
| Section padding | `7em 0` | .ftco-section |
| Gallery item height | `350px` | .gallery |

### Screenshot visual notes

Preview image: https://colorlib.com/wp/wp-content/uploads/sites/2/eventalk-free-template.jpg
- Dark-themed hero with large parallax photo background
- Clean white/light-gray content sections
- Sky-blue (#78d5ef) brand color on buttons and accents
- Work Sans typeface throughout
- Dark footer matching navbar
- Modern conference/event aesthetic with countdown timer prominent in hero

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/eventalk/ (HTTP 200, 50,756 B, sha256 `62908e908b35…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `inline-style-0`, `icomoon.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#6b75ff` | 91 declarations — `.hero-wrap .overlay`, `.slider-text h1` |
| Other chromatic values | `#59b7ff` (42), `#6b76ff` (30), `#78d5ef` (9) | secondary hues in the same sheet |
| Surface | `#ffffff` | 53 declarations — `.form-control`, `.table .table` |
| Ink / dark surface | `#000000` | 26 declarations — `.close`, `.close:hover, .close:focus` |
| Typeface | `Work Sans` (4 rules — `.popover`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `0.25rem`, `5px`, `4px` | `50%` (`.owl-carousel .owl-dots .owl-dot`); `0.25rem` (`.btn`); `5px` (`.form-control`); `4px` (`.comment-list li .comment-body .reply`) |
| Gradients | 42 declarations | `.hero-wrap .overlay`, `.slider-text h1` |

Palette in order of use: `#6b75ff` ×91, `#ffffff` ×53, `#59b7ff` ×42, `#6b76ff` ×30, `#000000` ×26, `#78d5ef` ×9, `#212529` ×8, `#6c757d` ×8.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.
- This folder is prep history, not the fidelity reference: the design ships as
  `apps/festpoint`, and `openspec/specs/template-festpoint/spec.md` holds the canonical
  record. Do not scaffold `apps/rostrum`.

Sheet identity (measured 2026-10-24): `theme/eventalk/css/style.css` — 75,027 B, sha256 `26c2592ba888…`; `theme/eventalk/css/icomoon.css` — 1,374 B, sha256 `61e749d5ee1d…`.

## Requirements

### Feature: Rostrum template behaviour

#### Scenario: Navbar renders correctly

- **GIVEN** the user loads the page
- **THEN** the navbar displays brand "Rostrum"
- **AND** nav links include Home, About, Speakers, Schedule, Blog, Contact
- **AND** a "Buy Ticket" CTA button is visible
- **AND** the navbar has a dark background

#### Scenario: Hero section displays event details

- **GIVEN** the user loads the page
- **THEN** a full-height hero section is visible with a background image
- **AND** a headline "Developer Conference 2019" is displayed
- **AND** the event date "December 21-24, 2019. Paris, Italy" is shown
- **AND** a countdown timer shows days, hours, minutes, seconds

#### Scenario: Services section shows 4 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** 4 service items are displayed in a row
- **AND** each service has an icon, heading, and description
- **AND** the services are Venue, Transport, Hotel, Restaurant
- **AND** the section has a light background

#### Scenario: Fun Facts counter section

- **GIVEN** the user scrolls to the counter section
- **THEN** a split layout shows an image on the left
- **AND** 4 stat cards are displayed: Speakers (30), Sponsor (200), Total Seats (2500), Topics (40)
- **AND** each stat card has an icon, number, and label

#### Scenario: Speakers carousel

- **GIVEN** the user scrolls to the speakers section
- **THEN** a centered heading "Our Speakers" is visible
- **AND** speaker cards are displayed in a carousel
- **AND** each speaker card shows a photo, name, role, and social icons

#### Scenario: Schedule section with day tabs

- **GIVEN** the user scrolls to the schedule section
- **THEN** a centered heading "Event Schedule" is visible
- **AND** day tabs (Day 01 through Day 04) are displayed
- **AND** clicking a day tab shows sessions for that day
- **AND** each session shows a speaker photo, time, title, description, and speaker info

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a heading "Happy Clients" is displayed
- **AND** testimonial cards appear in a carousel
- **AND** each card shows an avatar, quote icon, testimonial text, name, and role

#### Scenario: Pricing section

- **GIVEN** the user scrolls to the pricing section
- **THEN** a heading "Our Ticket Pricing" is displayed
- **AND** 3 pricing cards are shown: Personal ($85), Small Team ($200), Family Pack ($499)
- **AND** each card lists features and has a "Buy Ticket" button

#### Scenario: Blog section

- **GIVEN** the user scrolls to the blog section
- **THEN** a heading "Recent Blog" is displayed
- **AND** 3 blog cards are shown with date overlay, title, and excerpt

#### Scenario: Newsletter subscription

- **GIVEN** the user scrolls to the newsletter section
- **THEN** a parallax background is visible
- **AND** a heading "Subscribe to our Newsletter" is shown
- **AND** an email input and subscribe button are displayed

#### Scenario: Gallery section

- **GIVEN** the user scrolls to the gallery section
- **THEN** 4 gallery images are displayed in a grid
- **AND** hovering over an image shows an Instagram icon overlay

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **THEN** a dark background footer is displayed
- **AND** 4 columns are shown: brand description + social links, Useful Links, Privacy links, contact info
- **AND** a copyright line is present
- **AND** the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] All 12 sections present in correct order
- [ ] Navbar: dark bg, brand, nav links, CTA button
- [ ] Hero: full-height, background image, countdown timer
- [ ] Services: 4 cards with icons
- [ ] Counter: split layout with image + 4 stat cards
- [ ] Speakers: carousel with speaker cards
- [ ] Schedule: tabbed interface, session rows
- [ ] Testimonials: carousel with quote cards
- [ ] Pricing: 3 pricing cards with features
- [ ] Blog: 3 cards with date overlays
- [ ] Newsletter: parallax bg, email form
- [ ] Gallery: 4-col grid with hover overlay
- [ ] Footer: 4 columns, dark bg, Component Dock link
- [ ] Brand color #78d5ef applied consistently
- [ ] Font: Work Sans loaded via Google Fonts
- [ ] Responsive: mobile-friendly layout
- [ ] No ColorLib references in app code
- [ ] public/CNAME = rostrum.free.componentdock.com
- [ ] homepage = https://rostrum.free.componentdock.com
