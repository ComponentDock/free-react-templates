# Template: Clearspace (Business / Agency)

## Purpose

Recreation of ColorLib **Whitespace** — a business/agency website template
with a bold black hero, service cards, project gallery, testimonials, and
pricing tiers.

- **Source:** https://colorlib.com/wp/template/whitespace/
- **Preview:** https://preview.colorlib.com/theme/whitespace/
- **New name:** `clearspace` (apps/clearspace, @free-react-templates/clearspace)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Replication note:** Preview was reachable. DOM, CSS tokens, and screenshot
  analyzed from the live preview and ColorLib template page.

---

## Design Tokens

### Colors
| Token         | Hex       | Usage                              |
|---------------|-----------|-------------------------------------|
| brand-yellow  | #fcd307   | Buttons, accent underline, CTA      |
| brand-blue    | #78d5ef   | Accent links, hover states          |
| dark-bg       | #000000   | Hero left panel, navbar             |
| dark-text     | #212529   | Body text, headings on light bg     |
| gray-text     | #6c757d   | Secondary text                      |
| light-bg      | #f8f9fa   | Alternating section backgrounds     |
| white         | #ffffff   | Cards, section backgrounds          |

### Typography
| Property     | Value                               |
|--------------|--------------------------------------|
| Font (headings) | Poppins, Arial, sans-serif        |
| Font (body)     | Work Sans, system stack            |
| Hero heading    | Poppins, very large, bold, white   |
| Body weight     | 400 (normal), 600 (semi-bold for headings) |

### Buttons / Interactive
| Element      | Style                                                  |
|--------------|--------------------------------------------------------|
| CTA button   | Yellow (#fcd307) bg, black text, square corners, ~40px height |
| Link style   | Yellow underline on "Welcome" label, blue accents       |
| Nav links    | White text on dark bg, yellow active state underline    |

### Layout
| Section     | Layout                                                 |
|-------------|--------------------------------------------------------|
| Hero        | 50/50 split — left black panel with text, right full-bleed photo |
| About       | 2-column — right image, left text + 4 service items with circle icons |
| Services    | 4-column grid of cards with circle icon + title + blurb |
| Counter     | 4-column counter bar on dark bg with white numbers      |
| Projects    | 6-item grid of project images with hover overlay        |
| Testimonials| Carousel with quote, name, role                        |
| Case Study  | 3 cards with image + title + description                |
| Pricing     | 3-column cards (Free / Startup / Premium) + CTA button |
| Partners    | Logo row (5 partner logos)                              |
| Footer      | 3-column — brand blurb, Usefull Links, Quick Links, Have a Questions? contact |

---

## Gherkin Requirements

### Feature: Clearspace template renders all sections in correct order

#### Scenario: Navbar renders with navigation links
- Given the page loads
- Then a dark navbar is visible at the top
- And it contains links: Home, About, Work, Pricing, Blog, Contact
- And the logo reads "Clearspace"
- And the Home link has an active indicator

#### Scenario: Hero section with split layout
- Given the page loads
- Then the hero section is visible
- And the left panel has a black background
- And the left panel shows the word "Welcome" with a yellow underline
- And the heading reads "We Help to Build You the Product"
- And a subtitle reads "Business Solution"
- And a yellow "Get in touch" button is present
- And the right panel displays a team photo

#### Scenario: About section with services list
- Given the page loads
- Then the About section is visible
- And it has a "What We Can Do for You" heading
- And the section has a "Providing" yellow label
- And 4 service items are listed with circle icons: Market Research, Financial Services, Online Marketing, 24/7 Support

#### Scenario: Services grid section
- Given the page loads
- Then a services grid is visible
- And it contains 6 service cards
- And each card has a circle icon, title, and description

#### Scenario: Counter/stats section
- Given the page loads
- Then a dark-background counter section is visible
- And it shows 4 stats: Done Works, Happy Customers, Coffee, Work Hours

#### Scenario: Projects gallery
- Given the page loads
- Then a projects grid is visible
- And it contains 6 project cards
- And each card shows a project image with an overlay title

#### Scenario: Testimonials section
- Given the page loads
- Then a testimonials section is visible
- And it has the heading "My satisfied customer says"
- And a testimonial carousel is present

#### Scenario: Case study cards
- Given the page loads
- Then a case study section is visible
- And it has the heading "Case Study"
- And 3 case study cards are shown

#### Scenario: Pricing section
- Given the page loads
- Then a pricing section is visible on a light background
- And it has the heading "Our Best Pricing"
- And 3 pricing tiers are shown: Free, Startup, Premium
- And each tier shows price, feature list, and a CTA button

#### Scenario: Partner logos
- Given the page loads
- Then a partner logos section is visible
- And 5 partner logos are displayed

#### Scenario: Footer
- Given the page loads
- Then a footer is visible
- And it contains brand info, Usefull Links, Quick Links, and contact columns
- And it links to https://www.componentdock.com/

---

## Verification Checklist

- [ ] All 12 sections render in the correct order
- [ ] Navbar has correct links and active state
- [ ] Hero split layout: black left panel + photo right
- [ ] Yellow (#fcd307) used consistently for CTAs and accents
- [ ] Poppins font for headings, Work Sans for body
- [ ] Service icons use circle styling
- [ ] Counter section has dark bg with animated numbers
- [ ] Project gallery shows 6 items with hover overlay
- [ ] Testimonials carousel works with navigation
- [ ] Pricing cards show 3 tiers with correct layout
- [ ] Partner logo row visible
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
