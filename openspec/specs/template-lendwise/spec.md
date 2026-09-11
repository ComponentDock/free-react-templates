# Template: Lendwise (Financial / Loan Company)

## Purpose

Recreation of the ColorLib **Credit** template
(preview: https://preview.colorlib.com/theme/credit/),
source page: https://colorlib.com/wp/template/credit/.

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.
Design category: financial / loan company / professional.

## Design tokens (extracted from live preview CSS)

| Token               | Value                                            |
|---------------------|-------------------------------------------------|
| Primary (navy)      | `#003679` (dark navy blue)                       |
| Accent (gold)       | `#ffbb38` (amber/gold)                           |
| Body text           | `#838383` (grey)                                |
| Heading text        | `#000000` (black)                               |
| Light background    | `#f1f7f9`                                       |
| Body font           | Open Sans (Google Fonts), sans-serif             |
| Heading font        | Montserrat (Google Fonts), sans-serif            |
| Button radius       | 5px                                              |
| Hero overlay        | `rgba(0, 0, 0, 0.61)`                           |
| Button bg (primary) | `#003679` (navy)                                 |
| Button bg (accent)  | `#ffbb38` (gold)                                 |
| Section heading     | Montserrat, with decorative line element above    |

## Section structure (top → bottom)

1. **TopHeader** — logo on left, contact info (address, email) on right with small icons. Navy blue background `#003679`.
2. **Navbar** — sticky, white background. Logo on left, nav links in center: Home, About Us, Pages (dropdown), Services, Portfolio (mega menu), Blog, Contact. Phone number on right. Mobile hamburger.
3. **HeroSlider** — full-width carousel (4 slides), each with background image + dark overlay. Centered content: subheading "2 years interest", heading "get your [loan] now" (loan in gold accent), description text, "Discover" gold button.
4. **FeaturesArea** — 4-column row. Column 1: section heading "Our Loans" with decorative line, description text, "Discover" gold button. Columns 2-4: image cards with headings ("We take care of you", "No documents needed", "Fast & easy loans").
5. **CTAParallax** — split layout: left = parallax background image; right = content area with section heading "Helping small businesses like yours", description text, 3 circular skill meters (90% Energy, 75% Power, 97% Resource), "Read More" navy button.
6. **CTAInlineBar** — full-width navy background bar. Text: "Are you in need for a loan? Get in touch with us." + "Read More" gold button on right.
7. **ServicesArea** — section heading "Our services" centered with decorative line. 3×2 grid of service cards with icons: All the loans, Easy and fast answer, No additional papers, Secure financial services, Good investments, + 1 more.
8. **MiscellaneousArea** — light grey background `#f2f4f6`. 3-column layout: left = ad/promo image, center = "Get in touch" contact info (address, phone, email with icons), right = "The news" with 3 news items (thumbnail + title + meta).
9. **NewsletterArea** — parallax background image, centered. Heading "Subscribe to our newsletter", email input + "Subscribe" button, description text.
10. **Footer** — 4-column widget area: About Us links, Solutions links, Our Loans links, Latest News (3 news thumbnails with titles and meta). Bottom copyright bar with logo and copyright text.

## Gherkin scenarios

```gherkin
Feature: Lendwise — Financial Loan Company Template

  Background:
    Given the Lendwise template is loaded

  Scenario: Top header shows logo and contact info
    Then a logo is displayed on the left
    And address and email contact info appear on the right
    And the top header has a navy blue background

  Scenario: Navbar navigation and mega menu
    Then the navbar is sticky on scroll
    And nav links include Home, About Us, Pages, Services, Portfolio, Blog, Contact
    And the Pages link shows a dropdown with sub-items
    And the Portfolio link shows a mega menu with portfolio grid items
    And a phone number is displayed on the right side of the navbar

  Scenario: Hero carousel with loan CTA
    Then a full-width hero carousel displays background images with dark overlay
    And each slide shows "2 years interest" subheading
    And each slide shows "get your loan now" with "loan" in gold accent
    And a "Discover" gold button is visible on each slide
    And carousel auto-plays or has navigation controls

  Scenario: Features area displays loan highlights
    Then a 4-column row is displayed
    And column 1 shows a heading "Our Loans", description, and "Discover" button
    And columns 2-4 show image cards with headings describing loan benefits

  Scenario: CTA parallax section with skill meters
    Then a split layout shows a parallax image on the left
    And a heading "Helping small businesses like yours" on the right
    And three circular skill meters display 90%, 75%, and 97%
    And a "Read More" navy button is present

  Scenario: Inline CTA bar
    Then a full-width navy bar displays "Are you in need for a loan?"
    And a "Read More" gold button is aligned to the right

  Scenario: Services grid shows six services
    Then six service cards are displayed in a 3×2 grid
    And each card has an icon and heading with description text
    And services include: All the loans, Easy and fast answer, No additional papers

  Scenario: Miscellaneous section with contact and news
    Then a light-grey section shows three columns
    And the center column shows contact info with address, phone, and email
    And the right column shows "The news" with three news article cards
    And each news card has a thumbnail, title, author, and date

  Scenario: Newsletter subscription
    Then a parallax-background section displays "Subscribe to our newsletter"
    And an email input field and "Subscribe" button are shown

  Scenario: Footer layout
    Then the footer shows four widget columns
    And columns contain: About Us links, Solutions links, Our Loans links, Latest News
    And the copyright bar shows a logo and copyright text
    And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Primary navy `#003679` used for buttons, header, CTA bar
- [ ] Accent gold `#ffbb38` used for loan highlight, buttons, accents
- [ ] Open Sans body font + Montserrat heading font loaded
- [ ] Hero carousel with 4 slides, dark overlay, loan messaging
- [ ] Features area shows 4 columns (heading + 3 image cards)
- [ ] CTA parallax with circular skill meters
- [ ] Services grid has 6 items with icons
- [ ] Contact info with address, phone, email
- [ ] Newsletter subscription form with email input
- [ ] Footer has 4 widget columns + copyright bar
- [ ] Button radius: 5px (rounded, not pill)
- [ ] No references to ColorLib in app code
- [ ] Mobile responsive (hamburger menu, stacked layouts)
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines, functions, branches, statements)
