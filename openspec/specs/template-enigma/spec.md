# Template: Enigma (Portfolio)

## Purpose

Recreation of ColorLib **Riddle** portfolio template.

- **Source:** https://colorlib.com/wp/template/riddle/
- **Preview:** https://preview.colorlib.com/theme/riddle/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/riddle-free-template.jpg
- **Category:** Portfolio
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token                 | Value                                                                                  | Usage                                                      |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Font family           | `'Josefin Sans', sans-serif`                                                           | All text (Google Fonts, weights 400, 700)                  |
| Brand black           | `#000`                                                                                 | Buttons, logo, hover overlay bg                            |
| Dark teal             | `#001418`                                                                              | Nav links, portfolio hover overlay (`rgba(0,20,24,0.8)`)   |
| Gray accent           | `#979797`                                                                              | Filter labels, section-title span, social links, copyright |
| Light gray bg         | `#efefef`                                                                              | Page background                                            |
| White                 | `#fff`                                                                                 | Button text, portfolio overlay heading                     |
| Dark text             | `#222` / `#333`                                                                        | Body text                                                  |
| Button style          | Rectangular (no radius), solid `#000` bg, white text, 14px font, 15px vertical padding |
| Portfolio item height | 600px                                                                                  | Grid items, background-position center                     |
| Hover overlay         | `rgba(0,20,24,0.8)`                                                                    | Semi-transparent dark teal on portfolio items              |
| Hover heading         | opacity 0→1, letter-spacing 10px→0                                                     | "+ See Project" text reveals on hover                      |

## Requirements

### Requirement: Header SHALL display logo, navigation links, and CTA button

The header section MUST render the logo, navigation links, and a call-to-action button.

#### Scenario: Logo displays in header

- **WHEN** the page is loaded
- **THEN** a logo text "Enigma" is visible in the header left area

#### Scenario: Navigation links are present

- **WHEN** the page is loaded
- **THEN** the header contains navigation links: "Home", "About", "Work", "Contact"

#### Scenario: CTA button in header

- **WHEN** the page is loaded
- **THEN** a "Get in touch" button is visible in the header

#### Scenario: Mobile nav switch

- **WHEN** the viewport is mobile width (< 768px)
- **THEN** a hamburger menu icon is visible
- **AND** the main menu is hidden

### Requirement: Intro section SHALL display headline with highlighted span

The intro section MUST display a centered headline with a highlighted "digital designer" span.

#### Scenario: Intro headline displays

- **WHEN** the page is loaded
- **THEN** a centered intro section is visible
- **AND** it contains the text "I'm a freelance"
- **AND** it contains a highlighted span "digital designer"
- **AND** it contains the text "with +10 years of experience"

#### Scenario: Intro headline styling

- **WHEN** the page is loaded
- **THEN** the section title font size is large (60px desktop)
- **AND** the highlighted span uses gray accent color (#979797)

### Requirement: Portfolio section SHALL have filter tabs and hover overlay

The portfolio section MUST display filterable portfolio items with hover overlay effects.

#### Scenario: Filter tabs are displayed

- **WHEN** the page is loaded
- **THEN** filter tabs are visible: "All", "Web design", "Digital design", "3D Rendering", "Brand Identity"

#### Scenario: Portfolio grid items are shown

- **WHEN** the page is loaded
- **THEN** 8 portfolio items are displayed in a grid layout

#### Scenario: Portfolio items have hover overlay

- **WHEN** a portfolio item is hovered
- **THEN** a dark teal overlay appears (rgba(0,20,24,0.8))
- **AND** "+ See Project" text fades in at bottom-left

#### Scenario: Portfolio filter works

- **WHEN** the user clicks "Web design" filter
- **THEN** only web-design portfolio items are visible
- **AND** other items are hidden

#### Scenario: Portfolio filter "All" shows all items

- **WHEN** the user clicks "All" filter
- **THEN** all portfolio items are visible

### Requirement: Footer SHALL display CTA, social links, and Component Dock branding

The footer MUST display a call-to-action, social media links, and Component Dock copyright.

#### Scenario: Footer CTA displays

- **WHEN** the page is loaded
- **THEN** the footer contains "Let's work together" heading
- **AND** a "Get in touch" button is visible

#### Scenario: Social links in footer

- **WHEN** the page is loaded
- **THEN** social links are visible: Pinterest, LinkedIn, Instagram, Facebook, Twitter

#### Scenario: Copyright in footer

- **WHEN** the page is loaded
- **THEN** a copyright line is displayed
- **AND** it links to "https://www.componentdock.com/" (Component Dock)

#### Scenario: Footer has Component Dock branding

- **WHEN** the page is loaded
- **THEN** the footer copyright area mentions "Component Dock"
- **AND** no ColorLib attribution is visible

## Layout Structure (section order)

1. **Header** — logo (left) + nav links + "Get in touch" CTA button (right), hamburger for mobile
2. **Intro Section** — centered large headline with highlighted span
3. **Portfolio Section** — filter tabs + masonry-style grid (2-col + 1-col mix), 600px item height, hover overlay with "+ See Project"
4. **Footer** — centered "Let's work together" CTA, "Get in touch" button, social icon row, copyright with Component Dock link

## Verification Checklist

- [ ] All sections render (header, intro, portfolio, footer)
- [ ] Font: Josefin Sans loaded from Google Fonts
- [ ] Brand colors match: black buttons, #979797 accents, #001418 dark teal
- [ ] Portfolio filter tabs functional (All / Web / Digital / 3D / Brand)
- [ ] Portfolio hover overlay with "+ See Project" animation
- [ ] Header CTA button styled (rectangular, black bg, white text)
- [ ] Footer social links present (5 icons)
- [ ] Footer links to Component Dock (not Colorlib)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
- [ ] Responsive: hamburger nav on mobile, single-col portfolio
