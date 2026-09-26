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

| Token              | Value                          | Usage                                  |
| ------------------ | ------------------------------ | -------------------------------------- |
| Font family        | `'Josefin Sans', sans-serif`   | All text (Google Fonts, weights 400, 700) |
| Brand black        | `#000`                         | Buttons, logo, hover overlay bg        |
| Dark teal          | `#001418`                      | Nav links, portfolio hover overlay (`rgba(0,20,24,0.8)`) |
| Gray accent        | `#979797`                      | Filter labels, section-title span, social links, copyright |
| Light gray bg      | `#efefef`                      | Page background                       |
| White              | `#fff`                         | Button text, portfolio overlay heading |
| Dark text          | `#222` / `#333`               | Body text                              |
| Button style       | Rectangular (no radius), solid `#000` bg, white text, 14px font, 15px vertical padding |
| Portfolio item height | 600px                        | Grid items, background-position center |
| Hover overlay      | `rgba(0,20,24,0.8)`          | Semi-transparent dark teal on portfolio items |
| Hover heading      | opacity 0→1, letter-spacing 10px→0 | "+ See Project" text reveals on hover |

## Gherkin Requirements

### Header Section

```gherkin
Scenario: Logo displays in header
  Given the page is loaded
  Then a logo text "Enigma" is visible in the header left area

Scenario: Navigation links are present
  Given the page is loaded
  Then the header contains navigation links: "Home", "About", "Work", "Contact"

Scenario: CTA button in header
  Given the page is loaded
  Then a "Get in touch" button is visible in the header

Scenario: Mobile nav switch
  Given the viewport is mobile width (< 768px)
  Then a hamburger menu icon is visible
  And the main menu is hidden
```

### Intro Section

```gherkin
Scenario: Intro headline displays
  Given the page is loaded
  Then a centered intro section is visible
  And it contains the text "I'm a freelance"
  And it contains a highlighted span "digital designer"
  And it contains the text "with +10 years of experience"

Scenario: Intro headline styling
  Given the page is loaded
  Then the section title font size is large (60px desktop)
  And the highlighted span uses gray accent color (#979797)
```

### Portfolio Section

```gherkin
Scenario: Filter tabs are displayed
  Given the page is loaded
  Then filter tabs are visible: "All", "Web design", "Digital design", "3D Rendering", "Brand Identity"

Scenario: Portfolio grid items are shown
  Given the page is loaded
  Then 8 portfolio items are displayed in a grid layout

Scenario: Portfolio items have hover overlay
  Given a portfolio item is hovered
  Then a dark teal overlay appears (rgba(0,20,24,0.8))
  And "+ See Project" text fades in at bottom-left

Scenario: Portfolio filter works
  Given the user clicks "Web design" filter
  Then only web-design portfolio items are visible
  And other items are hidden

Scenario: Portfolio filter "All" shows all items
  Given the user clicks "All" filter
  Then all portfolio items are visible
```

### Footer Section

```gherkin
Scenario: Footer CTA displays
  Given the page is loaded
  Then the footer contains "Let's work together" heading
  And a "Get in touch" button is visible

Scenario: Social links in footer
  Given the page is loaded
  Then social links are visible: Pinterest, LinkedIn, Instagram, Facebook, Twitter

Scenario: Copyright in footer
  Given the page is loaded
  Then a copyright line is displayed
  And it links to "https://www.componentdock.com/" (Component Dock)

Scenario: Footer has Component Dock branding
  Given the page is loaded
  Then the footer copyright area mentions "Component Dock"
  And no ColorLib attribution is visible
```

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
