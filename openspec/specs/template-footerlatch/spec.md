# Template: FooterLatch (Bootstrap Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 19" (source: `bootstrap-footer-19`).
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-19/
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-19/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-19.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the preview's `css/style.css`:

| Token | Value | Notes |
|-------|-------|-------|
| Footer background | `linear-gradient(45deg, #2a1a5e 0%, #5126a7 100%)` | Deep purple gradient, 45deg |
| Link color | `#fe59d7` | Hot pink |
| Link hover | `rgba(255, 255, 255, 0.9)` | White on hover |
| Text color (body) | `rgba(255, 255, 255, 0.3)` | Faint white |
| Text color (links) | `rgba(255, 255, 255, 0.5)` | Slightly brighter white |
| Footer heading | `#fff`, 22px, `font-weight: 500` | White, bold-ish |
| Heading icon circle | 40×40px, `border: 1px solid #fe59d7`, `color: #fe59d7`, `border-radius: 50%` | Hot pink outlined circle with icon |
| Subscribe input | `border: 2px solid #fe8ce3`, `background: rgba(0,0,0,0.05)` | Light pink border |
| Subscribe submit button | `#fe8ce3` background, white text, 52×52px, no border-radius | Hot pink square button |
| Border-top | `rgba(255, 255, 255, 0.1)` | Very faint separator |
| Font family | Poppins (300–900 weights) | Google Fonts |

## Visual Design (from screenshot)

The preview page shows a centered heading "Footer #09" above a full-width footer on a purple gradient background. The footer is a 4-column Bootstrap grid layout:

1. **About column** — heading with circular icon badge, address with pin icon, phone with call icon, email with send icon, and a newsletter subscription form (input + submit button).
2. **Latest News column** — heading with list icon, two blog-post cards each with a thumbnail image, title, date, author, and comment count.
3. **Information column** — heading with document icon, vertical list of nav links (About, Products, Blog, Contact, Help & Support).
4. **Instagram column** — heading with Instagram icon, 2×3 grid of square Instagram photo thumbnails.

Below the 4 columns: a `border-top` separator row with copyright text on the left and a "made with ♥ by Colorlib.com" attribution on the right.

## Gherkin Requirements

```gherkin
Feature: FooterLatch — Bootstrap Footer 19 Recreation

  Background:
    Given the FooterLatch template is rendered
    And the page uses Poppins font family

  # ── About Column ──────────────────────────────────────
  Scenario: About column heading with icon badge
    Then I see a heading "About"
    And the heading has a circular icon badge (40×40, hot pink border + icon)

  Scenario: About column contact info
    Then I see an address line with a pin icon
    And I see a phone number with a call icon
    And I see an email address with a send icon

  Scenario: Newsletter subscription form
    Then I see a text input with placeholder "Enter email address"
    And the input has a light pink border (#fe8ce3)
    And I see a square submit button with a send icon
    And the submit button is hot pink (#fe8ce3) with white text

  # ── Latest News Column ────────────────────────────────
  Scenario: Latest News heading with icon
    Then I see a heading "Latest News"
    And the heading has a circular icon badge

  Scenario: Blog post cards
    Then I see 2 blog post cards
    And each card has a thumbnail image
    And each card has a title link
    And each card shows date, author, and comment count

  # ── Information Column ────────────────────────────────
  Scenario: Information heading with icon
    Then I see a heading "Information"
    And the heading has a circular icon badge

  Scenario: Navigation links
    Then I see links for "About", "Products", "Blog", "Contact", "Help & Support"
    And each link is a vertical list item

  # ── Instagram Column ──────────────────────────────────
  Scenario: Instagram heading with icon
    Then I see a heading "Instagram"
    And the heading has a circular icon badge with the Instagram logo

  Scenario: Instagram photo grid
    Then I see a 2×3 grid of square Instagram photo thumbnails
    And each thumbnail links to "#"

  # ── Footer Bottom Bar ─────────────────────────────────
  Scenario: Copyright and attribution row
    Then I see a separator border-top line
    And I see copyright text on the left
    And I see attribution text "made with ♥ by Component Dock" on the right

  # ── Overall Layout ────────────────────────────────────
  Scenario: Footer layout structure
    Then the footer has a deep purple gradient background (#2a1a5e → #5126a7)
    And the content is arranged in a 4-column responsive grid
    And columns stack on mobile viewports

  Scenario: Brand color usage
    Then the brand accent color is #fe59d7 (hot pink)
    And links use the brand accent color
    And heading icon badges use the brand accent color
    And the subscribe button uses a lighter variant #fe8ce3
```

## Verification Checklist

- [ ] Footer background is the correct purple gradient (#2a1a5e → #5126a7 at 45deg)
- [ ] All 4 columns present: About, Latest News, Information, Instagram
- [ ] Heading icon badges are 40×40px circles with #fe59d7 border
- [ ] Contact info uses Ionicons (pin, call, send) — replaced with lucide-react equivalents
- [ ] Subscribe form has input + square submit button (#fe8ce3)
- [ ] Blog post cards show thumbnail, title, date, author, comment count
- [ ] Instagram grid is 2×3 with rounded square thumbnails
- [ ] Bottom row has copyright + attribution with border-top separator
- [ ] Attribution links to Component Dock (not Colorlib)
- [ ] Font is Poppins (Google Fonts via link in index.html)
- [ ] Responsive: columns stack on small screens
- [ ] No Colorlib references in app code (provenance only in spec + TEMPLATES.md)
