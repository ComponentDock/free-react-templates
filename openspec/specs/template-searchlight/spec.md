# Template: SearchLight (SEO/Agency)

## Purpose

Recreation of the ColorLib **Seo** template for the free-react-templates
monorepo.

- **Source:** https://colorlib.com/wp/template/seo/
- **Preview:** https://preview.colorlib.com/theme/seo/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `searchlight` (apps/searchlight, @free-react-templates/searchlight)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/seo-free-seo-website-template.jpg

## Design tokens

Extracted from `css/main.css` on the live preview:

| Token | Value | Notes |
|---|---|---|
| brand-primary | `#f45622` | Orange — gradient start |
| brand-secondary | `#f53e54` | Crimson-red — gradient end |
| brand-gradient | `linear-gradient(90deg, #f45622 0%, #f53e54 100%)` | Banner bg, primary buttons, hover states |
| accent-cyan | `#4cd3e3` | Service icon hover |
| accent-blue | `#38a4ff` | Accent |
| accent-yellow | `#f4e700` | Accent |
| accent-purple | `#6382e6` | Accent |
| accent-green | `#73fbaf` | Accent |
| text-dark | `#222222` | Headings, body |
| text-gray | `#777777` | Secondary text |
| bg-lavender | `#f9f9ff` | About area, price area backgrounds |
| bg-light | `#f1f1f1` | Service icon borders |
| white | `#fff` | Button text, light sections |
| font-family | `"Poppins", sans-serif` | All text |
| button-radius | `25px` | Primary buttons, pill shape |
| button-padding | `42px line-height, 30px left, 60px right` | Asymmetric pill |
| icon-circle | `40px border-radius, 1px solid #f0f0f0` | Service icons |

## Section structure (in page order)

1. **Banner (hero)** — Full-width gradient background (`#f45622 → #f53e54`).
   Centered headline (uppercase) + "Get a Quote" pill button (`primary-btn2`).
   Height ~800px. Dark overlay for readability.

2. **Service** — White background, `section-gap`. Heading "Device Related
   Services". Three service cards in a row: each has a circular icon (30px
   linearicons icon, 40px round border), title (h4), and description text.
   Services: Diagnosis Devices, Software Installation, Virus & Malware Removal.
   Center-aligned. Icon border color changes to cyan (#4cd3e3) on hover.

3. **About** — Light lavender bg (`#f9f9ff`), `section-gap`. Split 2-column
   layout: left side has a chart/widget placeholder (originally a Donut chart),
   right side has headline ("We Believe that Interior beautifies the"), body
   paragraph, and "See Details" button (primary-btn2 style).

4. **Related** — White bg, `section-gap`. Heading "Device Related Services"
   (reused). Carousel of two slide items. Each slide: 2-column — left has
   headline + paragraph + "Research Details" button; right has an image.
   First slide: "Helps You Increasing Website Traffic".

5. **Price** — Light lavender bg (`#f9f9ff`), `section-gap`. Heading "Choose
   the Perfect Plan for you". Three pricing cards in a row:
   - Standard: £199
   - Business: £399
   - Ultimate: £499
   Each card: name (h4), price (h1), description list, "Purchase Plan" button
   (primary-btn, gradient on hover). Cards have white bg, shadow.

6. **Team** — White bg, `section-gap`. Heading "About Creative Agency Team".
   Four team member cards in a row: photo, name (h4), role. Team:
   Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller.

7. **Testimonial** — Background image with dark overlay (`opacity: 0.6`),
   `section-gap`. Carousel of testimonials: user photo (circular thumb),
   quote text, name (h4), title ("CEO at Google"). Two testimonials
   visible (Mark Alviro Wiens appears twice as placeholder).

8. **Blog** — White bg, `section-gap`. Heading "Latest From Our Blog". Four
   blog cards: thumbnail image, category tag, date, title (h4), short
   excerpt. Hover: title gets gradient text background. Cards are in a row.

9. **Brand** — No section gap. Logo carousel of partner/client logos.
   Simple row of images, likely with reduced opacity.

10. **Contact** — White bg, `section-gap`. Heading "Contact Us". Two-column
    form: left has name + email inputs, right has subject + message textarea.
    "Send Message" primary button with arrow icon.

11. **Footer** — Dark bg, `section-gap`. Three columns:
    - "Top Products" links list (Managed Website, Manage Reputation, Power
      Tools, Marketing Service)
    - Newsletter signup form (email input + button)
    - "Instragram Feed" (sic — keep original typo or fix to "Instagram")

## Gherkin scenarios

### Feature: Banner section
Scenario: Banner renders with gradient background and CTA
  Given the user loads the SearchLight homepage
  Then the banner section is visible
  And the banner has an orange-to-crimson gradient background
  And a "Get a Quote" button is displayed inside the banner
  And the banner headline is rendered in uppercase

### Feature: Service section
Scenario: Three service cards render correctly
  Given the user loads the SearchLight homepage
  When the user scrolls to the service section
  Then three service cards are visible
  And each card has a circular icon with a light border
  And each card has a title and description

Scenario: Service icon highlights on hover
  Given the user hovers over a service icon
  Then the icon border changes to a cyan color

### Feature: About section
Scenario: About section displays in split layout
  Given the user loads the SearchLight homepage
  When the user scrolls to the about section
  Then a two-column layout is displayed
  And the left column shows a chart placeholder
  And the right column shows a headline, paragraph, and "See Details" button

### Feature: Related section
Scenario: Related services carousel renders
  Given the user loads the SearchLight homepage
  When the user scrolls to the related section
  Then a carousel of related services is displayed
  And each slide has a headline, description, image, and "Research Details" button

### Feature: Pricing section
Scenario: Three pricing tiers render
  Given the user loads the SearchLight homepage
  When the user scrolls to the pricing section
  Then three pricing cards are visible
  And the Standard plan shows £199
  And the Business plan shows £399
  And the Ultimate plan shows £499
  And each card has a "Purchase Plan" button

Scenario: Pricing button shows gradient on hover
  Given the user hovers over a "Purchase Plan" button
  Then the button background changes to the brand gradient

### Feature: Team section
Scenario: Four team members render
  Given the user loads the SearchLight homepage
  When the user scrolls to the team section
  Then four team member cards are visible
  And each card shows a photo, name, and role

### Feature: Testimonial section
Scenario: Testimonials render with dark background
  Given the user loads the SearchLight homepage
  When the user scrolls to the testimonial section
  Then a dark overlay background is visible
  And testimonial quotes with user photos are displayed

### Feature: Blog section
Scenario: Blog posts render in a grid
  Given the user loads the SearchLight homepage
  When the user scrolls to the blog section
  Then four blog cards are visible
  And each card shows a thumbnail, title, and excerpt

### Feature: Brand section
Scenario: Brand logos carousel renders
  Given the user loads the SearchLight homepage
  When the user scrolls to the brand section
  Then a row of brand logos is visible

### Feature: Contact section
Scenario: Contact form renders with fields
  Given the user loads the SearchLight homepage
  When the user scrolls to the contact section
  Then a contact form is displayed
  And the form has name, email, subject, and message fields
  And a "Send Message" button is visible

### Feature: Footer
Scenario: Footer renders with three columns
  Given the user loads the SearchLight homepage
  Then the footer is visible
  And the footer has a "Top Products" links column
  And the footer has a "Newsletter" signup column
  And the footer has an Instagram feed column

## Verification checklist

- [ ] Spec covers every section from the original template
- [ ] Design tokens match the live preview CSS
- [ ] Section order matches the original: banner → service → about → related → price → team → testimonial → blog → brand → contact → footer
- [ ] Brand gradient (#f45622 → #f53e54) used for hero bg and primary buttons
- [ ] Font family set to Poppins
- [ ] Button border-radius 25px (pill shape)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos
