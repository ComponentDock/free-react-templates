# Template: Opus (Music Band)

## Purpose

Opus is a single-page music band website in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Music 2" free template
(source: https://colorlib.com/wp/template/music-2/), built under a DIFFERENT
name (**Opus**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a dark-themed music template for bands and artists: a full-
viewport hero section with a dark navy-to-purple background and blurred guitar
imagery, large bold headline ("YOUR MUSIC." with the word "MUSIC." in lime
green), two input fields (Event + Tickets) and a green CTA button, a social
follow bar, and a "Song of the Week" audio player widget. Navigation includes
logo + links (Home, Artists, Download Music, News, Contact, Login/Register).

**Preview URL:** https://preview.colorlib.com/theme/music-2/ (UNREACHABLE at
time of research — falling back to screenshot reference)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-template.jpg

## Design Tokens (extracted from screenshot)

| Token               | Value                       | Source                      |
|---------------------|-----------------------------|-----------------------------|
| Background          | `#1a1147` (deep navy/purple)| Hero + page background      |
| Accent green        | `#a4c400` (lime/chartreuse) | CTA button, social icons    |
| Yellow accent       | `#ffeb3b` (bright yellow)   | "MUSIC." headline word      |
| Pink badge          | `#ff1493` (hot pink)        | "LIVE" badge                |
| Text primary        | `#ffffff` (white)            | Headlines, nav links        |
| Text secondary      | `#b0b0b0` (light grey)      | Subtext, input placeholders |
| Font family         | `Poppins, sans-serif`       | All text (geometric sans)   |
| Font weight bold    | `700`                       | Headlines                   |
| Font weight regular | `400`                       | Body text                   |
| Border radius (btn) | `30px` (pill)               | CTA button                  |
| Border radius (input)| `30px` (pill)              | Event/Tickets inputs        |
| Border radius (badge)| `50%` (circle)             | LIVE badge, social icons    |

## Section Structure (top to bottom)

1. **Navbar** — Logo (colored bars icon + "opus" text), nav links (Home
   with green active dot, Artists, Download Music, News, Contact),
   Login/Register link on right. Transparent/navy background overlay.

2. **Hero** — Full-viewport dark navy/purple background with blurred
   guitar imagery (dark overlay). Large centered headline: "YOUR MUSIC."
   where "YOUR" is white and "MUSIC." is lime green. Subtitle text
   below. Two pill-shaped input fields side by side ("Event" and
   "Tickets"), a lime green "GET YOUR TICKETS" pill button, and a
   green circular arrow/chevron button to the right. "LIVE" pink
   circular badge in upper-right area of headline.

3. **Follow Bar** — Dark navy strip below hero. Left-aligned "FOLLOW"
   label, row of 5 circular social media icons (Pinterest, Facebook,
   Twitter, Spotify, Bandcamp), "SCROLL DOWN" text centered/right.

4. **Song of the Week** — Dark background section. "SONG OF THE WEEK"
   green pill badge/label. Artist photo (circular or square thumbnail),
   artist name "MICHAEL SMITH" in bold white, song title "Better Days"
   in lighter text. Audio player controls: play/pause/stop buttons
   (white on dark circles), progress bar/timeline with green accent,
   volume icon, timestamp (00:00 / 02:33).

## Requirements

### Feature: Opus — Music Band Website Template

  Background:
- **GIVEN** the Opus template is loaded in the browser

#### Scenario: Navbar renders correctly

- **THEN** the navbar should display the logo (colored bars icon + "opus" text)
- **AND** the navbar should show navigation links: Home, Artists, Download Music, News, Contact
- **AND** the navbar should show a "Login / Register" link on the right
- **AND** the "Home" link should have an active indicator (green dot)

#### Scenario: Hero section displays correctly

- **THEN** the hero should have a full-viewport dark navy/purple background
- **AND** the hero should display the headline "YOUR MUSIC."
- **AND** the word "MUSIC." in the headline should be lime green colored
- **AND** the hero should show two pill-shaped input fields labeled "Event" and "Tickets"
- **AND** the hero should show a lime green "GET YOUR TICKETS" pill button
- **AND** the hero should show a green circular chevron button
- **AND** the hero should show a pink "LIVE" circular badge

#### Scenario: Follow bar renders correctly

- **THEN** the follow bar should display the text "FOLLOW"
- **AND** the follow bar should show 5 circular social media icons
- **AND** the follow bar should display "SCROLL DOWN" text

#### Scenario: Song of the Week section renders correctly

- **THEN** the section should show a "SONG OF THE WEEK" green pill badge
- **AND** the section should display an artist photo thumbnail
- **AND** the section should show the artist name "MICHAEL SMITH"
- **AND** the section should show the song title "Better Days"
- **AND** the section should display audio player controls (play, pause, stop)
- **AND** the section should display a progress/timeline bar with green accent
- **AND** the section should show a volume icon
- **AND** the section should show timestamps (00:00 and 02:33)

#### Scenario: Footer renders correctly

- **THEN** the footer should display a "Made with Component Dock" link
- **AND** the footer link should point to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar: logo, nav links, active indicator, Login/Register
- [ ] Hero: background, headline with green accent, inputs, CTA button, LIVE badge
- [ ] Follow bar: label, social icons, scroll down text
- [ ] Song of the Week: badge, artist info, audio player controls, timeline
- [ ] Footer: Component Dock attribution link
- [ ] Dark theme consistency across all sections
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains opus.free.componentdock.com
- [ ] package.json homepage set to https://opus.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (tsc --noEmit)
- [ ] Lint passes (oxlint)
- [ ] Build succeeds (vite build)
