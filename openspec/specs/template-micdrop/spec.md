# Template: MicDrop (Podcast / Media)

## Purpose

Recreation of ColorLib "The Hustle Hour" — a dark-themed podcast website template.
- **Source slug:** `the-hustle-hour`
- **Source URL:** https://colorlib.com/wp/template/the-hustle-hour/
- **Preview URL:** https://preview.colorlib.com/theme/the-hustle-hour/ (404 at time of prep — fallback to screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Description:** Podcast website with episode archives, audio players, guest profiles, newsletter signup, and platform distribution links.

## Design Tokens

### Colors

| Token             | Value              | Usage                                         |
| ----------------- | ------------------ | --------------------------------------------- |
| `--brand`         | `#dc2626` (red-600)| CTA buttons, accents, badge backgrounds       |
| `--bg-dark`       | `#0f0f11`          | Hero section, navbar, stats bar backgrounds   |
| `--bg-surface`    | `#1a1a1f`          | Card / elevated surface on dark bg            |
| `--bg-light`      | `#f8f9fa`          | Secondary stats section background            |
| `--text-primary`  | `#ffffff`          | Headings on dark bg                           |
| `--text-secondary`| `#9ca3af`          | Body text on dark bg, labels                  |
| `--text-dark`     | `#111827`          | Text on light backgrounds                     |
| `--border`        | `#374151`          | Divider lines between sections                |

### Typography

| Token           | Value                                      |
| --------------- | ------------------------------------------ |
| Font family     | `"Inter", sans-serif` (Google Fonts)       |
| Heading weight  | 700–800 (extrabold)                        |
| Body weight     | 400–500                                    |
| Hero heading    | 3.5–4.5rem, line-height ~1.1              |
| Stats numbers   | 2.5–3rem, font-weight 800, brand color    |

### Buttons

| Element               | Style                                                         |
| --------------------- | ------------------------------------------------------------- |
| Primary CTA           | `bg-brand text-white rounded-full px-6 py-3` + icon           |
| Secondary / Outline   | `border border-white/30 text-white rounded-full px-6 py-3`    |
| Platform pill links   | `border border-white/20 rounded-full px-4 py-2 text-sm` + icon|
| Nav CTA               | `bg-brand text-white rounded-full px-5 py-2 text-sm font-semibold` |

### Section Backgrounds

| Section            | Background                                  |
| ------------------ | ------------------------------------------- |
| Navbar             | `bg-[#0f0f11]` (solid dark)                 |
| Hero               | `bg-[#0f0f11]` (solid dark)                 |
| Stats Bar          | `bg-[#0f0f11]` with top border divider      |
| Stats Section 2    | `bg-[#f8f9fa]` (light gray/off-white)        |
| (remaining below)  | Dark sections alternating with light         |

## Gherkin Requirements

### Feature: Navbar

Scenario: Navbar displays logo, navigation links, dark mode toggle, and CTA
  Given the user visits the page
  Then the navbar shows "The Hustle Hour" logo with a red microphone icon on the left
  And navigation links are visible: Episodes, About, Sponsors, Newsletter, Blog, Contact
  And a dark mode toggle (moon icon) is visible
  And a red "Listen Now" CTA button is visible on the right

Scenario: Navbar is sticky on scroll
  Given the user scrolls down the page
  Then the navbar remains fixed at the top

### Feature: Hero Section

Scenario: Hero displays headline, subtitle, and CTAs
  Given the user sees the hero section
  Then a red pill badge shows "New Episode Every Tuesday"
  And the headline reads "Stories That Spark Ideas" with "Spark Ideas" in red
  And subtitle text describes the podcast value proposition
  And a red "Listen Latest Episode" button with a music note icon is visible
  And a dark outline "Subscribe" button is visible

Scenario: Platform links are displayed
  Given the user sees the hero section below the CTAs
  Then "Available on" text is shown
  And pill links for Spotify, Apple Podcasts, Google Podcasts, and YouTube are visible with icons

### Feature: Stats Bar (Hero Bottom)

Scenario: Stats bar shows key metrics
  Given the user sees the stats bar below the hero
  Then "500+" Episodes is displayed
  And "2M+" Downloads is displayed
  And "Top 50" Tech Podcast is displayed
  And "4.8" Rating is displayed
  And all values are white text on dark background

### Feature: Stats Section (Light)

Scenario: Secondary stats section highlights reach
  Given the user scrolls past the dark hero area
  Then a light background section shows red stats: "200+" Episodes Published, "1M+" Total Downloads, "50+" Countries Reached, "4.9" Average Rating

### Feature: Episodes Section

Scenario: Episodes list shows recent episodes
  Given the user scrolls to the episodes section
  Then a grid/list of episode cards is displayed
  And each card shows episode title, date, duration, and a play button
  And episodes are filterable by category

### Feature: Guest Profiles

Scenario: Guest profile cards are displayed
  Given the user scrolls to the guests section
  Then guest cards show name, role/title, and a short bio
  And a photo placeholder is shown for each guest

### Feature: Newsletter Signup

Scenario: Newsletter form captures email
  Given the user scrolls to the newsletter section
  Then a heading invites subscription
  And an email input field and "Subscribe" button are visible
  And form validation prevents empty submission

### Feature: Footer

Scenario: Footer contains site links and Component Dock attribution
  Given the user scrolls to the footer
  Then the footer shows navigation links
  And social media icons are visible
  And "Made with Component Dock" (or similar) links to https://www.componentdock.com/

## Verification Checklist

- [ ] Navbar: sticky, logo, nav links, dark mode toggle, red CTA
- [ ] Hero: badge, headline with red accent, subtitle, two CTAs, platform links
- [ ] Stats bar: four metrics, dark bg, divider line
- [ ] Light stats section: four red metrics on light bg
- [ ] Episodes section: card grid, play buttons, filtering
- [ ] Guest profiles: photo, name, role, bio
- [ ] Newsletter: email input, subscribe button, validation
- [ ] Footer: nav links, social icons, Component Dock link
- [ ] Dark mode toggle works (persists via localStorage)
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` = `micdrop.free.componentdock.com`
- [ ] `homepage` in package.json = `https://micdrop.free.componentdock.com`
