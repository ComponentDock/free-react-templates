# Template: Footlight (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 09** — a minimalist, centered footer
with a light background, bold brand logo, inline navigation links, colorful
social icons, and a simple copyright bar.

- **Source:** Bootstrap Footer 09 — https://colorlib.com/wp/template/bootstrap-footer-09/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-09/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                | Value                     | Source                                                    |
| -------------------- | ------------------------- | --------------------------------------------------------- |
| Font family          | `"Poppins", sans-serif`   | `.footer-16371 { font-family: "Poppins", sans-serif }`    |
| Body font            | `"Roboto", sans-serif`    | `body { font-family: "Roboto" }` (preview body wrapper)   |
| Footer background    | `#ffffff` (white)         | No explicit bg; inherits white from page                  |
| Logo color           | `#4200ff` (vivid blue)    | `.footer-site-logo a { color: #4200ff }`                  |
| Logo font size       | `2rem`                    | `.footer-site-logo { font-size: 2rem }`                   |
| Logo font weight     | `900`                     | `.footer-site-logo { font-weight: 900 }`                  |
| Nav link color       | `#000000` (black)         | `.nav-links li a { color: #000 }`                         |
| Nav link hover       | `#4200ff` (vivid blue)    | `.nav-links li a:hover { color: #4200ff }`                |
| Nav link padding     | `10px`                    | `.nav-links li a { padding: 10px }`                       |
| Social heading color | `#000000` (black)         | `.social h3 { color: #000 }`                              |
| Social heading size  | `18px`                    | `.social h3 { font-size: 18px }`                          |
| Social icon - Instagram | `#df588a` (pink)       | `.social ul li.in a { color: #df588a }`                   |
| Social icon - Twitter   | `#15b8ff` (cyan)        | `.social ul li.tw a { color: #15b8ff }`                   |
| Social icon - Facebook  | `#3742d0` (blue)        | `.social ul li.fb a { color: #3742d0 }`                   |
| Social icon - Dribbble  | `#fa38c1` (magenta)     | `.social ul li.dr a { color: #fa38c1 }`                   |
| Social icon - Pinterest | `#dd4d5a` (red)         | `.social ul li.pin a { color: #dd4d5a }`                  |
| Copyright color     | `#999999` (gray)          | `.copyright { color: #999999 }`                           |
| Footer padding      | `7rem 0`                  | `.footer-16371 { padding: 7rem 0 }`                       |
| Link transition     | `0.3s all ease`           | `a { transition: .3s all ease }`                          |
| Content area height | `70vh`                    | `.content { height: 70vh }`                               |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #9" on a light
background, filling 70vh.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #9" is visible
- **AND** the content area uses a light (off-white / #f8f9fa) background
- **AND** the content area fills approximately 70vh

### Requirement: Footer main content section

The footer SHALL be centered, with 7rem vertical padding, white background,
and Poppins font family.

#### Scenario: Footer renders centered and padded

- **WHEN** the footer renders
- **THEN** the footer uses white (#ffffff) background
- **AND** the footer has 7rem vertical padding
- **AND** all content is centered horizontally

#### Scenario: Brand logo and site name

- **WHEN** the footer renders
- **THEN** a brand logo text "Footlight" is displayed in vivid blue (#4200ff)
- **AND** the logo is 2rem font-size with font-weight 900
- **AND** the logo links to the homepage

### Requirement: Navigation links

The footer SHALL display 7 inline navigation links horizontally.

#### Scenario: Navigation links render

- **WHEN** the footer renders
- **THEN** 7 navigation links are displayed inline: About, Services, Press, Careers, FAQ, Legal, Contact
- **AND** each link is black (#000000) with 10px padding
- **AND** hovering a link transitions to vivid blue (#4200ff) over 0.3s

#### Scenario: Navigation links hover behavior

- **WHEN** a user hovers over a navigation link
- **THEN** the link color transitions to vivid blue (#4200ff) over 0.3s

### Requirement: Social icons section

The footer SHALL display a "Stay in touch" heading followed by 5 colored social
icons (Instagram, Facebook, Twitter, Pinterest, Dribbble).

#### Scenario: Social heading renders

- **WHEN** the footer renders
- **THEN** a heading "Stay in touch" is displayed in black (#000), bold, 18px

#### Scenario: Social icons render with brand colors

- **WHEN** the footer renders
- **THEN** 5 social icons are displayed inline: Instagram, Facebook, Twitter, Pinterest, Dribbble
- **AND** Instagram icon is pink (#df588a)
- **AND** Facebook icon is blue (#3742d0)
- **AND** Twitter icon is cyan (#15b8ff)
- **AND** Pinterest icon is red (#dd4d5a)
- **AND** Dribbble icon is magenta (#fa38c1)

#### Scenario: Social icons have hover transition

- **WHEN** a user hovers over a social icon
- **THEN** the icon color transitions smoothly over 0.3s

### Requirement: Copyright bar

The footer SHALL display a centered copyright notice in gray text.

#### Scenario: Copyright notice renders

- **WHEN** the footer renders
- **THEN** a copyright paragraph is displayed centered
- **AND** the copyright text color is gray (#999999)
- **AND** the copyright text says "© Component Dock. All Rights Reserved."
- **AND** the copyright links to Component Dock

### Requirement: Component Dock branding

Every template's footer MUST link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the footer renders
- **THEN** the copyright text links to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

### Requirement: Responsive layout

The footer SHALL be responsive and work on mobile and desktop.

#### Scenario: Desktop layout

- **WHEN** viewed on a desktop viewport (>= 768px)
- **THEN** all navigation links display inline in a single row
- **AND** all social icons display inline

#### Scenario: Mobile layout

- **WHEN** viewed on a mobile viewport (< 768px)
- **THEN** navigation links wrap naturally
- **AND** social icons wrap naturally
- **AND** all content remains centered

## Verification Checklist

- [ ] Preview content area: centered "Footer #9" heading, 70vh, light bg
- [ ] Footer background: white (#ffffff)
- [ ] Footer padding: 7rem 0
- [ ] Font: Poppins, sans-serif
- [ ] Logo: "Footlight" in #4200ff, 2rem, weight 900, linked
- [ ] Nav links: 7 items (About, Services, Press, Careers, FAQ, Legal, Contact), inline, #000, hover → #4200ff
- [ ] Social heading: "Stay in touch", bold, 18px, black
- [ ] Social icons: Instagram (#df588a), Facebook (#3742d0), Twitter (#15b8ff), Pinterest (#dd4d5a), Dribbble (#fa38c1)
- [ ] Copyright: "© Component Dock. All Rights Reserved.", gray (#999), linked to componentdock.com
- [ ] All links transition 0.3s ease
- [ ] Responsive: works on mobile and desktop
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
