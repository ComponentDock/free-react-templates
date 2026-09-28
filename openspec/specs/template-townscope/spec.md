# Template: TownScope (CV / Resume)

## Purpose

Recreation of ColorLib's **Civic** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page CV/resume portfolio.

- **Source:** [ColorLib Civic](https://colorlib.com/wp/template/civic/)
- **Preview:** https://preview.colorlib.com/theme/civic/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/civic-free-template-1.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/townscope`
- **Deploy target:** `townscope.free.componentdock.com`

## Design tokens

Extracted from live preview CSS (`css/style.css`) at `https://preview.colorlib.com/theme/civic/`:

| Token | Value | Usage |
|---|---|---|
| Font family | `"Josefin Sans", sans-serif` | All text. Weights 400 (body), 600/700 (headings). Google Fonts `<link>` in index.html. |
| Primary text | `#40424a` | Headings, body text, hero name, info labels, footer bg |
| Secondary text | `#808181` | Subtitles, meta text, info values, copyright |
| Accent / quote color | `#505259` | Review section large quotation mark |
| Light section bg | `#f2f7f8` | Header, hero section, portfolio item hover, stat boxes |
| Near-white bg | `#f9f9f9` | Social links section |
| Divider / timeline dot | `#cacaca` | Resume timeline dots, contact form bottom border |
| Dark fact-box bg | `#40424a` | Extra skills stat boxes (years, awards) — white text on dark |
| Social link circles | border-radius: `150px` | Fully round pill social icons |
| Resume timeline dot | border-radius: `50px`, bg `#cacaca` | Between resume list items |
| Section title bar | `#40424a` underline | Small horizontal bar under section headings |
| Contact input border | bottom `2px solid #cacaca` | Transparent bg inputs |
| Button (site-btn) | white bg, `#40424a` text, outline style | "Download CV", "Discover me", "See All Portfolio", "Send message" |
| Footer bg | `#40424a` | Dark footer, copyright text `#838488` |
| Resume with-bg | background-image (photo) | Education section has a parallax/photo background |

## Section structure (order from live preview)

1. **Header** — Sticky/fixed top bar: logo text "Civic" (replaced with "TownScope"), subtitle "Enhance your online presence", two CTA buttons ("Download CV", "Discover me"). Background: `#f2f7f8`.

2. **Hero** — Two-column layout (col-6 + col-6). Left: large heading (name "Maria Williams"), short bio paragraph, "General Info" list (Date of Birth, Address, E-mail, Phone) with label/value pairs. Right: large hero portrait image.

3. **Social Links** — Full-width band. Row of 5 circular social icon links (Pinterest, LinkedIn, Instagram, Facebook, Twitter) centered, with "My Social Profiles" heading. Background: `#f9f9f9`. Divider line below.

4. **Work Experience (Resume)** — Centered single-column (col-7 offset). Section title "Work Experience". Resume list: each item has year range (large h2), company name (h3), role (h4), description paragraph. Timeline dots between items. Background: white.

5. **Education (Resume with BG)** — Same layout as Work Experience but with a background image (parallax/photo). Section title "Education". Same resume-list item structure.

6. **References (Reviews)** — Carousel/slider section. Section title "References". Each review card: large quotation mark (`"`), review text paragraph, author name (h3), author title (h4). Multiple cards in owl-carousel style.

7. **Portfolio** — Section title "Portfolio" left-aligned, "See All Portfolio" button right-aligned. 4-column grid of portfolio items: image thumbnail, title (h2), category label (p). Hover state shows light overlay.

8. **Extra Skills** — Section title "Extra Skills". 4-column row: first two columns are circular progress bars (75% Inspiration, 83% Inspiration) with labels and descriptions; last two columns are stat boxes (dark bg `#40424a`, white text) showing "14 Years of Experience" and "9 Awards Won" with icon images.

9. **Contact Me** — Section title "Contact Me". Form with Name input, E-mail input, Subject input, Message textarea. "Send message" button. Inputs have transparent bg with bottom border. Right-aligned submit button.

10. **Footer** — Dark bg `#40424a`. Copyright text centered. Replace Colorlib attribution with Component Dock link.

## Gherkin requirements

```gherkin
Feature: TownScope CV/Resume Template

  Background:
    Given the TownScope template is loaded in the browser
    Then all sections render without errors
    And the page uses "Josefin Sans" font family

  Scenario: Header displays branding and CTAs
    Given I look at the header
    Then I see the logo text "TownScope"
    And I see the subtitle "Enhance your online presence"
    And there are two buttons: "Download CV" and "Discover me"
    And the header background is light blue-gray (#f2f7f8)

  Scenario: Hero section shows personal info and portrait
    Given I look at the hero section
    Then there is a name heading (e.g. "Maria Williams")
    And there is a short bio paragraph
    And there is a "General Info" list with Date of Birth, Address, E-mail, Phone
    And the info list shows label-value pairs
    And there is a portrait image on the right column
    And the layout is two equal columns

  Scenario: Social links section displays icon row
    Given I look at the social links section
    Then there are 5 circular social icon links
    And the icons are: Pinterest, LinkedIn, Instagram, Facebook, Twitter
    And there is a "My Social Profiles" heading
    And the section background is near-white (#f9f9f9)

  Scenario: Work Experience section shows timeline
    Given I look at the work experience section
    Then the section title is "Work Experience"
    And there are at least 2 resume list items
    And each item has a year range, company name, role, and description
    And timeline dots separate the items
    And the section is centered in a single column

  Scenario: Education section shows background image
    Given I look at the education section
    Then the section title is "Education"
    And there is a background image behind the content
    And the item structure matches the work experience section

  Scenario: References section displays carousel
    Given I look at the references section
    Then the section title is "References"
    And there are at least 3 review cards
    And each card has a large quotation mark, review text, author name, and title
    And the cards are in a carousel/slider layout

  Scenario: Portfolio section shows grid of work samples
    Given I look at the portfolio section
    Then the section title is "Portfolio"
    And there is a "See All Portfolio" button
    And there are 4 portfolio items in a grid
    And each item has an image, title, and category label
    And hovering an item shows a light overlay

  Scenario: Extra Skills section shows progress and stats
    Given I look at the extra skills section
    Then the section title is "Extra Skills"
    And there are 2 circular progress bars with percentage labels
    And there are 2 stat boxes with dark background (#40424a)
    And the stat boxes show "Years of Experience" and "Awards Won"

  Scenario: Contact form collects user input
    Given I look at the contact section
    Then the section title is "Contact Me"
    And there are input fields for Name, E-mail, and Subject
    And there is a textarea for Message
    And there is a "Send message" button
    And inputs have transparent background with bottom border

  Scenario: Footer shows copyright
    Given I look at the footer
    Then the footer has dark background (#40424a)
    And there is centered copyright text
    And the Colorlib attribution is replaced with a Component Dock link
```

## Verification checklist

- [ ] All 10 sections render in order matching the original
- [ ] Font: Josefin Sans loaded via Google Fonts, weights 400/600/700
- [ ] Colors match extracted tokens (#40424a, #808181, #f2f7f8, #f9f9f9, #cacaca, #505259)
- [ ] Social icons are fully round circles (border-radius: 150px)
- [ ] Resume timeline dots are round (border-radius: 50px, #cacaca)
- [ ] Portfolio grid is 4 columns with hover overlay
- [ ] Extra Skills has 2 progress circles + 2 dark stat boxes
- [ ] Contact form has transparent inputs with bottom border
- [ ] Footer is dark with Component Dock link (no Colorlib reference)
- [ ] No Colorlib references in any app source code or comments
- [ ] Hero layout is two equal columns (text left, image right)
- [ ] Education section has background image treatment
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] Package name: `@free-react-templates/townscope`
- [ ] CNAME: `townscope.free.componentdock.com`
- [ ] Coverage: 100% lines/functions/branches/statements
