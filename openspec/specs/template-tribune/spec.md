# Template: Tribune (Conference/Event)

## Purpose

Recreation of the ColorLib **Plataforma** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **ColorLib source:** https://colorlib.com/wp/template/plataforma/
- **Live preview:** https://preview.colorlib.com/theme/plataforma/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/plataforma-free-template.jpg
- **App name:** `tribune` (apps/tribune, @free-react-templates/tribune)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Description:** A corporate conference/event landing page with a full-screen hero with countdown and registration form, services strip, about section, schedule tabs, gallery, testimonials, pricing tiers, speakers, newsletter, and dark footer. Blue primary brand color on a clean white layout.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/plataforma/css/style.css`:

### Colors

| Token | Value | Usage |
|---|---|---|
| Primary blue | `#1162fb` | Buttons, service bg, accents, active states |
| White | `#ffffff` | Section backgrounds, text on dark |
| Dark bg | `#212529` / `#343a40` | Footer, hero overlay |
| Text primary | `#000000` | Headings |
| Text muted | `#6c757d` | Body text, descriptions |
| Light gray | `#f8f9fa` | Alternate section backgrounds |
| Border gray | `#dee2e6` | Dividers |

### Typography

| Property | Value |
|---|---|
| Font family | `"Nunito Sans", Arial, sans-serif` |
| Heading weight | 700 |
| Body weight | 400 |
| Hero heading size | ~50px (responsive) |
| Section heading size | ~32px |

### Buttons

| Property | Value |
|---|---|
| Shape | Rounded (Bootstrap `btn-primary`, ~4px radius) |
| Padding | Varies by context |
| Color | White text on `#1162fb` bg |
| Hover | Darker blue `#0062cc` |

### Section backgrounds

| Section | Background |
|---|---|
| Hero | Full-width bg image + dark overlay (850px height) |
| Services strip | Solid blue (`#1162fb`) |
| About | White (two-column: image + text) |
| Schedule | White with vertical pill tabs |
| Gallery | White, 4-image grid with popup |
| Testimonials | White |
| Pricing | White |
| Speakers | White |
| Newsletter/Contact | Parallax bg image |
| Footer | Dark (`#212529`) |

## Section Structure (top to bottom)

1. **Navbar** — Dark bg, logo "Plataforma." left, nav links (Home, About, Speakers, Schedule, Blog, Contact), "Buy ticket" right. Sticky.
2. **Hero** — Full-screen bg image + dark overlay. Left column: "Conference 2019" subtitle, "Business Leaders" heading. Right column: registration form (name, position, email, phone, checkbox, "Join now" button). Countdown timer below heading.
3. **Services Strip** — Blue bg (`#1162fb`), 4 service cards in a row: Venue, Transport, Hotel, Restaurant. Each: icon + heading + description.
4. **About** — Two-column (5+7): left = image, right = "What is all about us?" heading, 2 paragraphs, "Join now" button.
5. **Schedule** — "Conference Schedule" heading. Vertical pill tabs (First Day, Second Day, Third Day with dates). Each tab shows session items.
6. **Gallery** — "Conference Gallery" heading. 4-image grid with lightbox popup.
7. **Testimonials** — "Happy Clients" heading. Carousel/slider with client quotes.
8. **Pricing** — "Conference Ticket Pricing" heading. 3 pricing cards: Personal, Small Team, Family Pack. Each: tier name, "Enjoy All The Features", "Buy Ticket" button.
9. **Speakers** — "Conference Speakers" heading. 4 speaker cards: photo, name, description, 3 social links.
10. **Newsletter** — Parallax bg. "Subscribe to our Newsletter" heading, description, email input + subscribe button.
11. **Footer** — Dark bg. Logo "Plataforma.", description, social icons, Useful Links column, Privacy column, "Have a Questions?" column with address/phone/email.

## Gherkin Requirements

```gherkin
Feature: Tribune conference landing page

  Background:
    Given the app is loaded at the root URL

  Scenario: Navbar renders all navigation links
    Then I should see a "Tribune" brand link
    And I should see "Home", "About", "Speakers", "Schedule", "Blog", "Contact" links
    And I should see a "Buy ticket" link

  Scenario: Hero section displays event info and registration form
    Then I should see a "Business Leaders" heading
    And I should see a "Conference" subtitle
    And I should see a registration form with name, email fields
    And I should see a countdown timer

  Scenario: Services strip shows 4 service categories
    Then I should see a blue services section
    And I should see "Venue", "Transport", "Hotel", "Restaurant" headings

  Scenario: About section renders content
    Then I should see a "What is all about us?" heading
    And I should see descriptive paragraphs
    And I should see a "Join now" button

  Scenario: Schedule section has tabbed days
    Then I should see a "Conference Schedule" heading
    And I should see tab buttons for "First Day", "Second Day", "Third Day"
    And clicking a tab should show that day's sessions

  Scenario: Gallery section shows images
    Then I should see a "Conference Gallery" heading
    And I should see 4 gallery image links

  Scenario: Testimonials section renders
    Then I should see a "Happy Clients" heading

  Scenario: Pricing section shows ticket tiers
    Then I should see a "Conference Ticket Pricing" heading
    And I should see "Personal", "Small Team", "Family Pack" cards
    And each card should have a "Buy Ticket" button

  Scenario: Speakers section shows speaker cards
    Then I should see a "Conference Speakers" heading
    And I should see 4 speaker cards with names and social links

  Scenario: Newsletter section accepts email signup
    Then I should see a "Subscribe to our Newsletter" heading
    And I should see an email input and subscribe button

  Scenario: Footer contains navigation and branding
    Then I should see footer navigation links
    And I should see social media icons
    And I should see a link to componentdock.com
```

## Verification Checklist

- [ ] Section order matches original (Hero → Services → About → Schedule → Gallery → Testimonials → Pricing → Speakers → Newsletter → Footer)
- [ ] Primary blue (#1162fb) used on buttons and services strip
- [ ] Nunito Sans font family applied
- [ ] Hero has countdown timer + registration form
- [ ] Services strip is blue bg with 4 cards
- [ ] Schedule tabs are interactive (3 days)
- [ ] Gallery has 4 images with lightbox
- [ ] Pricing cards show 3 tiers
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage
- [ ] Typecheck passes
- [ ] Build succeeds
