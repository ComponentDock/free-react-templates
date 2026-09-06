# Template: Seagrass (Bootstrap Footer 18)

## Purpose

Recreation of ColorLib "Bootstrap Footer 18" (slug: `bootstrap-footer-18`).

- **Source**: https://colorlib.com/wp/template/bootstrap-footer-18/
- **Preview**: https://preview.colorlib.com/theme/bft/bootstrap-footer-18/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-18.jpg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package**: `@free-react-templates/seagrass`
- **Deploy**: `https://seagrass.free.componentdock.com`

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and HTML:

| Token              | Value                      | Notes                                            |
|--------------------|----------------------------|--------------------------------------------------|
| `--bg`             | `#f1f6f5`                  | Light gray-green footer background               |
| `--accent`         | `#12cc94`                  | Teal/seafoam green — links, right panel bg       |
| `--submit`         | `#2f89fc`                  | Blue submit button                               |
| `--text-primary`   | `rgba(0, 0, 0, 0.7)`      | Inferred body text (headings)                    |
| `--text-secondary` | `rgba(0, 0, 0, 0.3)`      | Paragraph text, link text, placeholder text      |
| `--heading-size`   | `18px`                     | Footer heading font size                         |
| `--heading-white`  | `#ffffff`                  | White heading on teal right panel                |
| `--input-bg`       | `#ffffff`                  | White form inputs                                |
| `--input-radius`   | `5px`                      | Form input border radius                         |
| `--input-height`   | `50px`                     | Form input height                                |
| `--font-family`    | `Poppins, sans-serif`      | Google Fonts (consistent with footer series)     |
| `--social-icons`   | Twitter, Facebook, Instagram | Ionicons in About us column                    |

## Visual design notes (from screenshot analysis)

The original screenshot shows:
- A light gray-green (#f1f6f5) full-width footer with a two-panel layout.
- **Left panel** (9 columns): Contains "About us" section with description text and 3 social icons (Twitter, Facebook, Instagram). Below that, 3 link columns: "Discover" (Buy & Sell, Merchant, Giving back, Help & Support), "About" (Staff, Team, Careers, Blog), "Resources" (Security, Global, Charts, Privacy). Copyright line at bottom.
- **Right panel** (3 columns): Teal/seafoam green (#12cc94) background with white "Contact us" heading, followed by a contact form (Your Name, Your Email, Subject, Message textarea, Send button). Form inputs are white with 5px border-radius. Send button is blue (#2f89fc).
- Clean, professional aesthetic with plenty of whitespace.

## Section structure (top → bottom)

1. **Hero spacer** — White section with centered heading (title only). Visual page body above footer.
2. **Footer** — Light gray-green (#f1f6f5) background, full-width:
   - **Left area** (9/12 columns):
     - "About us" heading + description paragraph + social icons (3 circles)
     - 3-column link grid: Discover | About | Resources (4 links each)
     - Copyright line with dynamic year
   - **Right sidebar** (3/12 columns): Teal (#12cc94) background
     - "Contact us" heading (white)
     - Contact form: Name, Email, Subject, Message textarea, Send button

## Gherkin requirements

```gherkin
Feature: Seagrass footer template
  As a visitor I see a light footer with a teal contact sidebar

  Background:
    Given the Seagrass page is loaded

  Scenario: Hero section displays
    Then a white hero section is visible
    And the hero contains a centered heading

  Scenario: Footer background
    Then the footer background is light gray-green (#f1f6f5)

  Scenario: About us section
    Then the footer displays an "About us" heading
    And a description paragraph is shown below the heading
    And three social icons (Twitter, Facebook, Instagram) are shown

  Scenario: Link columns
    Then three link columns are displayed: "Discover", "About", "Resources"
    And "Discover" contains links: "Buy & Sell", "Merchant", "Giving back", "Help & Support"
    And "About" contains links: "Staff", "Team", "Careers", "Blog"
    And "Resources" contains links: "Security", "Global", "Charts", "Privacy"
    And all link text color is rgba(0, 0, 0, 0.3)
    And hovering a link changes color to teal (#12cc94)

  Scenario: Contact sidebar
    Then a right sidebar has teal (#12cc94) background
    And the sidebar displays a white "Contact us" heading
    And the sidebar contains a contact form
    And the form has fields: Name, Email, Subject, Message
    And form inputs are white with 5px border-radius
    And the Send button is blue (#2f89fc)

  Scenario: Copyright line
    Then a copyright line is displayed at the footer bottom
    And the copyright includes the current year

  Scenario: Component Dock footer link
    Then the footer includes a link to https://www.componentdock.com/
    And the link text references "Component Dock"
```

## Verification checklist

- [ ] Footer background is #f1f6f5 (light gray-green)
- [ ] "About us" section with heading, description, and 3 social icons
- [ ] Social icons: Twitter, Facebook, Instagram (lucide-react)
- [ ] 3 link columns: Discover, About, Resources (4 links each)
- [ ] Link text color is rgba(0, 0, 0, 0.3), hover → teal #12cc94
- [ ] Right sidebar: teal #12cc94 background, white heading
- [ ] Contact form: Name, Email, Subject, Message, Send button
- [ ] Form inputs: white bg, 5px border-radius, 50px height
- [ ] Send button: blue #2f89fc, white text
- [ ] Copyright line with dynamic year
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] No copied assets — use picsum.photos, Google Fonts, lucide-react
