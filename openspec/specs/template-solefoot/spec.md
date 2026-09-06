# Template: Solefoot (Bootstrap Footer)

## Purpose

Recreation of ColorLib **Bootstrap Footer 14** as a React + Tailwind template.

- **Source:** https://colorlib.com/wp/template/bootstrap-footer-14/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-14/
- **Category:** Bootstrap Footer
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `solefoot` (never reuse the source name `bootstrap-footer-14`)

This is a footer-only template: a hero/header section introducing the page, a dark full-width footer with four columns (brand info, categories list, tag cloud, subscribe form + social links), and a copyright bar.

## Design Tokens

Extracted from the preview CSS (`style.css`) and HTML.

### Colors

| Token | Value | Usage |
|---|---|---|
| footer-bg | `#272727` | Main footer background (dark gray) |
| footer-bar-bg | `#1a1a1a` | Copyright bar / divider bar background (darker gray) |
| accent | `#f7b633` | Gold/amber — links, submit button background, tag hover |
| text-heading | `#fff` | Footer headings (Categories, Tag cloud, Subscribe, Follow us) |
| text-body | `rgba(255, 255, 255, 0.3)` | Footer paragraph text |
| text-list | `rgba(255, 255, 255, 0.7)` | Category list link text |
| text-copyright | `rgba(255, 255, 255, 0.5)` | Copyright text and links |
| text-tag | `#fff` | Tag cloud link text |
| hero-bg | `#fff` | Hero section background (white) |
| hero-text | `#212529` | Hero heading text (dark) |

### Typography

| Token | Value |
|---|---|
| font-family | `"Nunito Sans", Arial, sans-serif` |
| font-weight-light | 300 |
| font-weight-normal | 400 |
| font-weight-semibold | 600 |
| font-weight-bold | 700 |
| body-font-size | 15px |
| body-line-height | 1.8 |
| heading-font-size | 13px (uppercase, letter-spacing 1px) |
| logo-font-size | 16px (capitalize) |

### Spacing & Layout

| Token | Value | Usage |
|---|---|---|
| footer-padding | `7em 0` (top/bottom) | Footer section padding |
| bar-padding | `5em 2em` | Copyright bar internal padding |
| column-gap | 15px (Bootstrap gutter) | Between 4 columns |
| grid | 4-col (md-6 lg-3) | Four equal columns on desktop |

### Borders & Radii

| Token | Value | Usage |
|---|---|---|
| tag-border | `1px solid rgba(255, 255, 255, 0.1)` | Tag cloud link border |
| tag-radius | 4px | Tag cloud link border-radius |
| social-icon-radius | 4px | Social media icon border-radius |
| social-icon-border | `1px solid rgba(255, 255, 255, 0.1)` | Social icon border |
| social-icon-size | 40x40px | Social icon square |
| submit-radius | 0px | Subscribe button — sharp corners |
| submit-size | 52x52px | Subscribe submit button |
| input-radius | 0px | Subscribe input — sharp corners |

### Interactive States

| Token | Value |
|---|---|
| tag-hover | 1px solid `#000` |
| social-hover | color: `#fff` |
| submit-hover | inherit (no change specified) |

## Section Structure

1. **Hero section** (`.ftco-section`): centered `<h2>` heading with white background, generous vertical padding (`12em 0`).
2. **Footer** (`.footer-04`): dark `#272727` background, 4-column grid:
   - Column 1: Brand name (styled as `<a>`), description paragraph, "read more" link
   - Column 2: "Categories" heading + unordered list of 4 category links
   - Column 3: "Tag cloud" heading + tag cloud (8 tags)
   - Column 4: "Subscribe" heading + email input with submit button, "Follow us" heading + 3 social icons (Twitter, Facebook, Instagram)
3. **Copyright bar**: full-width divider, border-top + darker `#1a1a1a` background, copyright text (left), Terms/Privacy/Compliances links (right)

## Gherkin Requirements

```gherkin
Feature: Solefoot template — Bootstrap Footer 14 recreation
  As a visitor I want a professional full-width footer with brand info,
  navigation, tags, subscription, and social links.

  Background:
    Given the template is loaded at the root URL

  Scenario: Hero section renders
    Then the hero heading is visible
    And the hero heading text is "Footer #04"
    And the hero section has a white background

  Scenario: Footer has four columns
    Then the footer section is visible
    And there are four columns in the footer on desktop

  Scenario: Column 1 — brand info
    Then the first column shows the brand name "Solefoot"
    And the first column has a description paragraph
    And the first column has a "read more" link

  Scenario: Column 2 — categories
    Then the second column has a "Categories" heading
    And the second column lists 4 category links

  Scenario: Column 3 — tag cloud
    Then the third column has a "Tag cloud" heading
    And the third column shows 8 tag links
    And each tag link is styled as uppercase with a rounded border

  Scenario: Column 4 — subscribe form
    Then the fourth column has a "Subscribe" heading
    And the subscribe form has an email input and a submit button
    And the submit button has a gold accent background

  Scenario: Column 4 — social links
    Then the fourth column has a "Follow us" heading
    And there are 3 social media icon links (Twitter, Facebook, Instagram)
    And each social icon is a 40x40px square with rounded corners

  Scenario: Copyright bar
    Then the copyright bar is visible at the bottom
    And the copyright bar shows "All rights reserved"
    And the copyright bar has Terms, Privacy, and Compliances links

  Scenario: Footer link color
    Then all links in the footer have a gold accent color (#f7b633)

  Scenario: Footer background
    Then the footer background is dark (#272727)
    And the copyright bar background is darker (#1a1a1a)

  Scenario: Footer attribution
    Then the footer MUST link to https://www.componentdock.com/
    And the footer link text says "Component Dock"
```

## Verification Checklist

- [ ] Hero heading renders centered with white background
- [ ] Footer uses dark background `#272727`
- [ ] Four columns: brand, categories, tag cloud, subscribe+social
- [ ] Brand name renders as "Solefoot" (not "Colorlib")
- [ ] Categories list shows 4 items
- [ ] Tag cloud shows 8 tags, uppercase, border, rounded
- [ ] Subscribe form has email input + submit button
- [ ] Submit button is gold `#f7b633`, 52x52px
- [ ] 3 social icons (Twitter, Facebook, Instagram), 40x40px, 4px radius
- [ ] Copyright bar has darker background `#1a1a1a`
- [ ] Copyright text + Terms/Privacy/Compliances links
- [ ] Footer links are gold accent `#f7b633`
- [ ] Font is "Nunito Sans" loaded from Google Fonts
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage on all components
