# Template: Symposium (Event/Conference Landing Page)

## Purpose

Recreation of ColorLib "Umeet" (https://colorlib.com/wp/template/umeet/) as a
modern event/conference landing page. Built with Vite, React 19, Tailwind CSS 4,
and TypeScript under the new name **Symposium**.

- **Source slug:** `umeet`
- **Preview URL:** https://preview.colorlib.com/theme/umeet/
- **Design category:** Event / Conference Landing Page
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide React

## Design Tokens (extracted from live preview CSS)

### Colors

| Token               | Value     | Usage                                  |
|---------------------|-----------|----------------------------------------|
| primary-purple      | `#3b1d82` | Headings, nav active, buttons, speaker card bg, tab active, schedule card left, form labels |
| accent-pink         | `#ea0763` | Secondary accent, nav hover, hero CTA, button-header bg, social pipe separators, footer text link |
| body-text           | `#797979` | Body copy, schedule dates, footer widget text |
| heading-color       | `#242424` | h1–h6 headings                         |
| gray-background     | `#f7f7f7` | Section backgrounds, schedule card bg, tab bg |
| dark-footer         | `#111429` | Footer area background                 |
| white               | `#ffffff` | Card borders, sponsor frames, card-identity text |
| light-purple-border | `#f0e9ff` | Form input borders, pagination, blog sidebar |

### Typography

| Element    | Font Family        | Weight | Size  | Notes                              |
|------------|--------------------|--------|-------|------------------------------------|
| Body       | Roboto, sans-serif | 400    | 15px  | Line-height 1.6                    |
| Headings   | Oswald, sans-serif | 500–700| 18–60px | Line-height 1.5                  |
| Buttons    | Oswald, sans-serif | 500    | 15px  | Uppercase, letter-spacing normal  |

### Buttons

- Default: border `#3b1d82`, color `#242424`, border-radius `4px`, padding `12px 54px`, hover bg `#3b1d82` text `#fff`
- Hero/CTA: bg `#ea0763`, border `#ea0763`, color `#fff`, hover bg `#b8024c`
- Link style: no background, no border, color `#3b1d82`, letter-spacing 0

### Section Spacing (Tailwind)

- `section-padding`: `padding: 70px 0` / lg `120px 0`
- `section-padding--small`: `padding: 50px 0` / lg `100px 0`
- `section-margin`: `margin: 70px 0` / lg `120px 0`
- `pb-98px`: `padding-bottom: 58px` / lg `98px`

## Gherkin Requirements & Scenarios

### Feature: Navbar

As a visitor, I want a fixed/sticky navigation bar so I can navigate the conference site.

#### Scenario: Navbar renders with logo and nav links

- Given the user loads Symposium
- When the navbar renders
- Then it shows a logo, nav links (Home, About, Speakers, Pages, Blog, Contact), and a "Get Ticket" CTA

#### Scenario: Sticky navbar on scroll

- Given the page is loaded
- When the user scrolls down past the hero
- Then the navbar becomes fixed with a white background and subtle box-shadow

### Feature: Hero Banner

As a visitor, I want to see the event headline and a CTA so I know what the event is about.

#### Scenario: Hero banner displays event info

- Given the user loads the page
- When the hero banner renders
- Then it shows an event icon, date/location text, a large headline ("UX CONFERENCE 2019" or similar), and a "Buy Ticket" button

### Feature: Innovation / Countdown Section

As a visitor, I want to see a countdown timer to the event date.

#### Scenario: Countdown timer shows days/hours/minutes

- Given the user is on the home page
- When the innovation section loads
- Then a countdown displays Days, Hours, and Mins in styled boxes with background images
- And a "Get Ticket" link appears below the timer

### Feature: Why Join / Features

As a visitor, I want to see the reasons to attend the event.

#### Scenario: Feature cards display

- Given the user scrolls to the "Why Join" section
- When the section loads
- Then 3 feature cards are displayed side by side, each with an icon, title, and description
- And "Learn More" and "Buy Ticket" buttons appear below

### Feature: Meet The Speakers

As a visitor, I want to see speaker profiles with social links.

#### Scenario: Speaker cards render on dark background

- Given the user scrolls to the speakers section
- When the section loads
- Then 6 speaker cards are displayed in a 3-column grid on a dark background image
- And each card shows an avatar, name, and role
- And hovering reveals social media overlay icons (Facebook, Twitter, Instagram, Skype)

### Feature: Conference Schedule

As a visitor, I want to browse sessions by day.

#### Scenario: Tabbed schedule navigation

- Given the user scrolls to the schedule section
- When the schedule loads
- Then day tabs (Day 1–4) are displayed horizontally
- And clicking a tab shows that day's sessions

#### Scenario: Session cards render

- Given a day tab is active
- When sessions display
- Then each session card shows the speaker avatar + name, time range, session title, and description
- And the speaker identity area is styled with purple background, turning pink on hover

### Feature: Pricing Tables

As a visitor, I want to see ticket tiers and features.

#### Scenario: Three pricing tiers display

- Given the user scrolls to the pricing section
- When the section loads
- Then 3 pricing cards (Normal, Advance, Ultimate) appear in a row
- And each shows a tier name, subtitle, price, feature list with check/close icons, and a "Buy Now" button
- And hovering turns the card purple with white text

### Feature: Sponsors

As a visitor, I want to see event sponsors.

#### Scenario: Gold and Silver sponsor sections

- Given the user scrolls to the sponsors section
- When the section loads
- Then Gold sponsors (3) and Silver sponsors (3) are displayed in bordered white frames
- And hovering adds a subtle shadow

### Feature: Event Gallery

As a visitor, I want to browse event photos.

#### Scenario: Image grid with hover overlay

- Given the user scrolls to the gallery section
- When the gallery loads
- Then 6 images are displayed in a 3-column grid on a dark background
- And hovering shows a dark overlay with a pink circle icon

### Feature: Blog Carousel

As a visitor, I want to see recent blog posts about the event.

#### Scenario: Blog cards display

- Given the user scrolls to the blog section
- When the carousel loads
- Then 4 blog cards appear with an image, title, date, and comment count
- And hovering turns the card purple with white text

### Feature: Footer

As a visitor, I want to find contact info and social links.

#### Scenario: Footer renders with required sections

- Given the user scrolls to the bottom
- When the footer renders
- Then it contains About text, Navigation Links, Newsletter signup, Instagram feed, and social icons
- And it links to https://www.componentdock.com/ ("Component Dock")

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] 100% test coverage on new components (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] Section order matches original (Navbar → Hero → Innovation/Countdown → Features → Speakers → Schedule → Pricing → Sponsors → Gallery → Blog → Footer)
- [ ] Design tokens match: primary purple `#3b1d82`, accent pink `#ea0763`, Roboto body, Oswald headings, `#111429` footer
- [ ] Responsive layout adapts correctly on mobile/tablet
