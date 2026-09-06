# Template: Basalt (Footer / Subscription)

## Purpose

Basalt is a footer-only template in the free-react-templates monorepo. It is an
original React recreation of the ColorLib free "Bootstrap Footer 10" design,
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a subscription/footer template with a light content header area
("Footer #10") and a four-column footer containing Store links, About links,
Legal links, and a Subscribe form with an embedded purple Send button. A copyright
bar with social icons sits at the bottom. Basalt recreates that structure
section-for-section with matching layout, colors, typography, and content types
(no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Bootstrap Footer 10" — free subscription footer template
  (source: https://colorlib.com/wp/template/bootstrap-footer-10/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/bft/bootstrap-footer-10/`
  (HTTP 200, 18.4KB). The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`bootstrap-footer-10.jpg`) confirms the visual design (light content
  area, clean footer with 4 columns, purple accent on subscribe button).
- **Section order (1:1):**
  1. Content header: full-width centered "Footer #10" heading on bg-light
     background, 70vh height.
  2. Footer (`.footer-39201`): 7rem vertical padding, 4-column row:
     - Col 1 — "Store": Men, Women, Children, New Arrivals, Top Brands, Special Offers
     - Col 2 — "About": About us, Clients, Services, Best sellers, Blog, Contact
     - Col 3 — "Legal": Terms & Conditions, Privacy Policy, Legality, Author License
     - Col 4 (col-md-4) — "Subscribe": paragraph blurb + email form (text input
       with rounded pill shape + "Send" button positioned inside the input)
  3. Copyright bar: horizontal border-top separator, left-aligned copyright text
     ("© 2019 All Rights Reserved"), right-aligned social icon row (Facebook,
     Twitter, Pinterest, Instagram, Behance).
- **Design tokens extracted from `css/style.css`:**
  - Brand accent: **#614ad3** (purple — used on submit button, link hover states)
  - Footer text color: **#9d9d9d** (medium gray)
  - Heading color: **#000** (black), font-weight 900, font-size 16px
  - Input background: **#e6e6e6**, input text: **#000**, placeholder: **#b3b3b3**
  - Submit button: **#614ad3** purple fill, white text, font-weight bold,
    border-radius 30px, box-shadow 0 2px 2px 0 rgba(0,0,0,0.2)
  - Input field: border-radius 30px, height 50px, no border, left-padding 30px
  - Footer padding: 7rem 0
  - Content header: bg-light, height 70vh, centered flex
  - Social icons: inline-block, 10px padding, gray #9d9d9d, hover #614ad3
  - Font family: **"Roboto"** (sans-serif) for body and headings
  - Link transition: 0.3s all ease
- **Visual design (from TEMPLATES.md screenshot):** The template shows a clean,
  minimalist footer on a light background. The content area has a large "Footer #10"
  heading centered vertically. The footer below has four evenly-spaced columns
  with small bold section headings and gray link lists. The Subscribe column is
  wider with a description paragraph and a pill-shaped email input with an embedded
  purple "Send" button. A thin border separates the copyright line from the footer
  content. Social media icons appear as simple glyph icons on the right side of
  the copyright bar.

## Recreation decisions

- Repo-standard single-page layout: no Navbar (this is a footer-only template).
- Footer links use the same link text as the original (Store, About, Legal columns).
- Subscribe form: email input with pill shape (rounded-full), purple "Send" button
  positioned inside the input via absolute positioning — matching the original.
- Social icons: use lucide-react icons (Facebook, Twitter, Pinterest, Instagram,
  Behance) instead of icomoon icon font.
- Footer footer attribution: "Made with Component Dock" / "More templates at
  Component Dock" link per repo conventions (replaces any external attribution).
- Copyright text: paraphrased to "All Rights Reserved" (drop hardcoded year).
- Use `https://picsum.photos/seed/basalt-<n>/<w>/<h>` for any placeholder images
  if needed (this template has none).

## Gherkin requirements

```gherkin
Feature: Basalt footer template
  As a visitor
  I want to see a subscription footer with navigation links
  So that I can subscribe and navigate the site

  Background:
    Given the Basalt template is rendered

  Scenario: Content header is visible
    Then the content header displays "Footer #10"
    And the content header has a light background

  Scenario: Store column links are present
    Then the "Store" column heading is visible
    And the following links are under "Store":
      | link           |
      | Men            |
      | Women          |
      | Children       |
      | New Arrivals   |
      | Top Brands     |
      | Special Offers |

  Scenario: About column links are present
    Then the "About" column heading is visible
    And the following links are under "About":
      | link           |
      | About us       |
      | Clients        |
      | Services       |
      | Best sellers   |
      | Blog           |
      | Contact        |

  Scenario: Legal column links are present
    Then the "Legal" column heading is visible
    And the following links are under "Legal":
      | link                  |
      | Terms & Conditions    |
      | Privacy Policy        |
      | Legality              |
      | Author License        |

  Scenario: Subscribe form is functional
    Then the "Subscribe" column heading is visible
    And the subscribe description paragraph is visible
    And an email input field with placeholder "Enter your e-mail" is visible
    And a "Send" button is visible

  Scenario: Subscribe form validates email
    Given the email input is empty
    When the user clicks the "Send" button
    Then the form does not submit

  Scenario: Subscribe form accepts valid email
    Given the email input has value "test@example.com"
    When the user clicks the "Send" button
    Then the form submits successfully

  Scenario: Copyright bar is visible
    Then a copyright notice is visible
    And the copyright text contains "All Rights Reserved"

  Scenario: Social icons are present
    Then social media icons are visible in the copyright bar
    And there are at least 5 social icons

  Scenario: Link hover states use purple accent
    When the user hovers over a footer link
    Then the link color changes to the purple accent color

  Scenario: Responsive layout - columns stack on mobile
    Given the viewport width is less than 768px
    Then the footer columns stack vertically

  Scenario: Footer attribution links Component Dock
    Then the footer contains a link to "https://www.componentdock.com/"
```

## Verification checklist

- [ ] Content header renders centered "Footer #10" on light background
- [ ] Footer has 4 columns: Store, About, Legal, Subscribe
- [ ] All navigation links render with correct text
- [ ] Subscribe form has pill-shaped input + embedded Send button
- [ ] Submit button is purple (#614ad3) with rounded corners (30px radius)
- [ ] Link hover transitions to purple accent (#614ad3)
- [ ] Copyright bar shows "All Rights Reserved"
- [ ] Social icons render (at least 5) — Facebook, Twitter, Pinterest, Instagram, Behance
- [ ] Social icons hover to purple
- [ ] Footer attribution links componentdock.com
- [ ] Footer has 7rem vertical padding
- [ ] Responsive: columns stack below 768px
- [ ] No ColorLib references in app code
- [ ] public/CNAME set to basalt.free.componentdock.com
- [ ] homepage set to https://basalt.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
