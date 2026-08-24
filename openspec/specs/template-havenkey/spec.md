# Template: Havenkey (Bootstrap / Real Estate — Agency)

## Purpose

Havenkey is a single-page real-estate agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Oakberry" website template
(source: https://colorlib.com/wp/template/oakberry/), built under a DIFFERENT
name (**Havenkey** — haven + key, property-themed) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a real-estate agency landing page: a top info bar (phone,
location, social links), a sticky navbar ("Oakberry Real Estate Agency"),
a full-viewport hero slider (3 slides with background images and dark
overlay), a Buy/Rent property search form with pill tabs and multiple
filter fields, a 4-column category showcase (Land, Residential, Commercial,
Industrial), a "Featured Properties" card grid, a video background section,
an "About Us" split panel, a "Find Best Place" CTA strip, a testimonials
carousel, an "Our Agents" card grid, a "Recent Blog" section, a full-width
photo gallery strip, and a multi-column footer. Havenkey recreates that
structure 1:1 with matching layout, colors, typography, and content types
(no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Oakberry" / slug `oakberry` is
> FORBIDDEN as the app name. **Havenkey** is the new, original name — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md (verified 2026-08-25). Source slug +
> preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Oakberry" — real-estate agency landing page.
  Category in TEMPLATES.md: **Bootstrap** (line 609: `- [ ] **Oakberry**
— https://colorlib.com/wp/template/oakberry/`). The recreation brands
  itself **Havenkey** but keeps the same section structure and copy kinds.
- **Live preview DOM analyzed (verified 2026-08-25):** the official preview
  `https://preview.colorlib.com/theme/oakberry/` is LIVE — HTTP 200, title
  "Oakberry - Free Bootstrap 5 Template by Colorlib". Structure extracted
  from the rendered DOM and the HTML source (1,009 lines) + `css/style.css`
  (3,150 lines).
- **Visual design (live render — match 1:1):** professional real-estate
  agency aesthetic. Palette: white + dark navy/black text + green brand
  accent (`#5ea51d`). Hero = full-viewport image slider with dark overlay,
  centered headline in white, CTA button in green. Search form sits below
  the hero on white with pill-shaped Buy/Rent tabs. Categories section uses
  white cards on a light background. Featured properties have card layouts
  with images and agent info. Video section has a dark background image
  overlay. About section is a two-column layout (text + image). Testimonials
  on light grey. Agents in a card grid. Blog in a 3-column card grid.
  Gallery strip is full-width photos. Footer is dark navy (`#081637`)
  background.

## Design tokens

| Token                                 | Value                                       | Source                                      |
| ------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| Brand primary (green)                 | `#5ea51d`                                   | `.btn-primary`, nav active, section accents |
| Background dark (footer/hero overlay) | `#030513` / `#081637`                       | `.ftco-footer`, `.overlay`                  |
| Background light                      | `#f3f5f1` / `#f8f9fa`                       | `.bg-light`, body                           |
| Text dark                             | `#000000`                                   | headings                                    |
| Text muted                            | `#6c757d`                                   | body text, secondary                        |
| White                                 | `#ffffff`                                   | cards, nav, form backgrounds                |
| Font family                           | `"Nunito Sans", Arial, sans-serif`          | body, headings                              |
| Button shape                          | rounded (`border-radius` on `.btn-primary`) | all CTAs                                    |
| Hero overlay                          | `rgba(0,0,0,.4)`                            | `.overlay::before` on slider                |

## Section order (1:1, verified from live DOM)

1. **Top info bar** (`div.py-4.top-wrap`): 3 columns — phone number +
   hours, location address, social media links (Facebook, Twitter,
   Dribbble). Light background, icons from Font Awesome.
2. **Navbar** (`nav.navbar.navbar-expand-lg.ftco-navbar-light`): brand
   "Oakberry / Real Estate Agency" left, 6 nav links center (Home, About,
   Properties, Agents, Blog, Contact), green "Submit A Property" button
   right. Sticky on scroll.
3. **Hero slider** (`section.slider-hero`): 3-slide carousel with full-
   viewport background images, dark overlay, centered white text headline
   - paragraph + green CTA button ("Learn More"). Slides:
   * "Your Property Is Our Priority"
   * "Let Your Home Be Unique & Stylist"
   * "Modern House Make Better Life"
4. **Property search form** (`section.ftco-section.ftco-no-pb.ftco-no-pt`):
   Pill-shaped tabs ("Buy Properties" / "Rent Properties"), each tab has
   a row of filter fields: Keyword input, Property Type select, Location
   input, Price Limit select, green Search button.
5. **Categories** (`section.ftco-section`): "Explore Our Categories &
   Places" heading, 4 cards in a row: Land, Residential, Commercial,
   Industrial — each with an image and label overlay.
6. **Featured Properties** (`section.ftco-section.bg-light`): "Featured
   Properties" heading, 4 property cards with image, title, price, agent
   name + avatar. Card has a green price tag overlay.
7. **Video section** (`section.img.vid-section`): "Modern House Video"
   heading, full-width background image with dark overlay and a play
   button overlay.
8. **About** (`section.ftco-section.ftco-about-section`): Two-column layout
   — image left, text right. "Oakberry / A Real Estate Company" heading,
   description paragraph, agent photo inset, stats/feature list.
9. **CTA strip** (`section.ftco-intro.ftco-no-pt.ftco-no-pb.img`):
   "Find Best Place For Living" — full-width image background, dark
   overlay, centered headline + "Get in touch" button.
10. **Testimonials** (`section.ftco-section.testimony-section.bg-light`):
    "Clients We Help" heading, carousel of client testimonials with
    avatar, name, quote.
11. **Our Agents** (`section.ftco-section.ftco-agent.ftco-no-pb`): "Our
    Agents" heading, 3 agent cards with photo, name, role, social icons.
12. **Recent Blog** (`section.ftco-section.bg-light`): "Recent Blog"
    heading, 3 blog cards with image, date badge, title, excerpt, "Read
    more" link.
13. **Gallery** (`section.ftco-gallery`): Full-width strip of 4–6 photos
    in a row, no text — just images.
14. **Footer** (`section.ftco-footer`): Dark background, 4 columns — brand
    description, quick links, services, contact info + newsletter signup.
    Bottom bar with copyright.

## Gherkin scenarios

```gherkin
Feature: Havenkey — Real Estate Agency Landing Page

  Background:
    Given the Havenkey app is running
    And all routes resolve without error

  Scenario: Page loads and displays the top info bar
    Then the top info bar should show a phone number
    And the top info bar should show a location address
    And the top info bar should show social media links

  Scenario: Navbar renders with correct links
    Then the navbar should display the brand name "Havenkey"
    And the navbar should have links for Home, About, Properties, Agents, Blog, Contact
    And there should be a "Submit A Property" CTA button

  Scenario: Hero slider displays slides
    Then the hero section should be visible
    And there should be a headline and description text
    And there should be a "Learn More" CTA button
    And there should be navigation dots or arrows for slide switching

  Scenario: Property search form renders all filter fields
    Then there should be Buy/Rent tab toggles
    And there should be a Keyword input field
    And there should be a Property Type select field
    And there should be a Location input field
    And there should be a Price Limit select field
    And there should be a Search submit button

  Scenario: Categories section shows property types
    Then the categories section should display 4 category cards
    And each category card should have an image and a label
    And the labels should be Land, Residential, Commercial, Industrial

  Scenario: Featured properties section renders property cards
    Then the featured properties section should be visible
    And there should be property cards with images
    And each property card should show a title and price

  Scenario: Video section renders
    Then the video section should display a background image
    And there should be a play button overlay

  Scenario: About section shows company info
    Then the about section should have a two-column layout
    And there should be a company description heading
    And there should be an image alongside the text

  Scenario: CTA strip renders
    Then the CTA strip should display a headline
    And there should be a "Get in touch" button

  Scenario: Testimonials section shows client reviews
    Then the testimonials section should be visible
    And there should be at least one testimonial with a client name and quote

  Scenario: Agents section shows agent cards
    Then the agents section should display agent cards
    And each agent card should have a photo, name, and role

  Scenario: Blog section shows recent posts
    Then the blog section should display blog cards
    And each blog card should have an image, title, and excerpt

  Scenario: Gallery strip renders images
    Then the gallery section should display multiple images in a row

  Scenario: Footer renders with correct columns
    Then the footer should be visible
    And the footer should contain brand description, quick links, services, and contact info
    And the footer should include a newsletter signup form
    And the footer bottom should show a copyright notice
    And the footer should link to https://www.componentdock.com/

  Scenario: Mobile responsive layout
    When the viewport is 375px wide
    Then the navbar should collapse into a hamburger menu
    And all sections should be vertically stacked
    And text should remain readable
```

## Verification checklist

- [ ] All 14 sections render in the correct order
- [ ] Top info bar shows phone, location, social links
- [ ] Navbar shows brand + 6 nav links + CTA button
- [ ] Hero slider has 3 slides with transitions
- [ ] Search form has Buy/Rent tabs + 4 filter fields + Search button
- [ ] Categories show 4 cards with images and labels
- [ ] Featured properties show 4 cards with image, title, price
- [ ] Video section has background image + play button
- [ ] About section has two-column layout (text + image)
- [ ] CTA strip has headline + "Get in touch" button
- [ ] Testimonials show client name + quote
- [ ] Agents section shows 3 agent cards
- [ ] Blog section shows 3 blog cards
- [ ] Gallery shows strip of images
- [ ] Footer has 4 columns + newsletter + copyright + componentdock.com link
- [ ] All interactive elements are accessible (keyboard nav, aria labels)
- [ ] Mobile layout stacks everything vertically
- [ ] Design tokens match: green `#5ea51d`, Nunito Sans, dark footer
