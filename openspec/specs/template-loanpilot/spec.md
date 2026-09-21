# Template: Loanpilot (Finance / Loans)

## Purpose

Recreation of the ColorLib **Loanday** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source:** https://colorlib.com/wp/template/loanday/
- **Preview analyzed:** https://preview.colorlib.com/theme/loanday/
- **New name:** `loanpilot` (apps/loanpilot, `@free-react-templates/loanpilot`)
- **Deploy target:** https://loanpilot.free.componentdock.com
- **Stack:** Vite latest, React 19, Tailwind CSS 4, TypeScript strict
- **Analysis date:** 2026-09-21

## Replication reference

### Preview DOM analysis

Sections extracted from `https://preview.colorlib.com/theme/loanday/` (top to bottom):

1. **Top bar** — Dark navy (`#182143`) bar with address, phone, email, language selector (flag icon + dropdown).
2. **Header/Navbar** — White background, logo image, nav links (Home, About, Services, Blog, Pages dropdown, Contact), search icon, hamburger for mobile.
3. **Hero** — Full-width banner with background image (`hero-bg.jpg`), dark overlay. Left side: headline "Find The Best Monthly Payment", subtitle, two green CTA buttons ("Get Start", "How It Work"). Right side: loan calculator form (Amount, Days, Repayment, Name, Phone inputs + green submit button).
4. **Home About** — Two-column layout: left has "Thousands Of Customers Trust Our Company" heading, description, two sub-items ("Our Company", "Our Vision"), green CTA button. Right has an image.
5. **Loan Services** — "Discover all the loans for you" heading. Full-width image grid: 4 loan type cards with background images and overlay text: Personal Loan (01.), Business Loan (02.), Education Loan (03.), Commercial Loan (04.). Each has a "Find Out More" link.
6. **Choose** — "Why People Choose Us" heading. 6 feature cards in 3-column grid (2 rows): Quick & Easy, Absolute Security, Quick Approval, Low Interest Rates, Customer Support, Transparent Process. Each has an icon/image, title, description.
7. **Testimonial** — Dark background with image (`testimonial-bg.jpg`). "What Customers Are Saying" heading. Carousel with 3 testimonial cards: photo, name, role, quote text.
8. **Counter** — Stats section, 4 items in a row: 2100 (Successful Loan Approval), 99% (Customer Satisfaction), 90+ (Office National Partners), 70+ (Team Members). Each has an icon, number, label.
9. **Call/CTA** — Full-width background image (`call-bg.jpg`). Dark overlay with CTA content (heading, description, button).
10. **Blog/Latest** — "Latest Post" heading. 3 blog cards in a row: title, excerpt, author photo + name + date.
11. **Contact Widget** — Background image, two office addresses (New York, New Jersey) on left, phone number on right.
12. **Footer** — Dark background, logo, About text, Quick Links, Follow Us social icons, address, copyright.

### Design tokens (extracted from style.css)

| Token                | Value                                             | Usage                                                               |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| Font family          | `"Lato", sans-serif` (weights 300, 400, 700, 900) | Body, headings, all text                                            |
| Primary brand color  | `#88C417` (green)                                 | Buttons, accent borders, links, hover states, pricing highlights    |
| Dark navy            | `#182143`                                         | Top bar, dark section backgrounds, secondary dark areas             |
| Dark navy alt        | `#223060`                                         | Secondary dark accent                                               |
| Dark gray            | `#323232`                                         | Footer background, dark sections, body text alt                     |
| Body text            | `#111111`                                         | Primary body text                                                   |
| Body text secondary  | `#5c5c5c`                                         | Descriptions, secondary text                                        |
| Light background     | `#f6f7f9`                                         | Loan services section, alternating sections                         |
| Input background     | `#f6f6f6`                                         | Form input fields                                                   |
| White                | `#ffffff`                                         | Hero form card, card backgrounds                                    |
| Button border-radius | `2px`                                             | Sharp/squared buttons throughout                                    |
| Section spacing      | `spad` class (padding top/bottom)                 | Consistent section rhythm                                           |
| Background images    | Used on hero, testimonial, call, contact sections  | Dark overlay on all background-image sections                       |

### Visual design notes (from screenshot)

- Clean, professional loan/finance aesthetic with green as primary accent.
- Sharp-edged buttons (2px radius) give a corporate feel.
- Dark navy top bar + dark sections create a premium look.
- Hero has a split layout: text + CTA on left, loan application form on right.
- Loan services section uses full-width images with text overlays.
- Testimonials and CTA sections use background images with dark overlay.
- Counter section has icons with animated numbers.
- Blog section with author avatars.
- Overall: modern, trustworthy financial services feel.

## Gherkin requirements

### Feature: Loanpilot Template

#### Scenario: Navbar renders with logo and navigation links
- Given the user visits the Loanpilot homepage
- When the page loads
- Then a sticky navbar is visible with the logo "Loanpilot." (green dot accent)
- And navigation links: Home, About, Services, Blog, Pages (dropdown), Contact
- And a search icon is visible
- And mobile hamburger menu appears on small screens

#### Scenario: Hero section displays headline and loan form
- Given the user is on the homepage
- When the hero section loads
- Then a full-width banner with background image is displayed
- And the headline "Find The Best Monthly Payment" is visible
- And a subtitle about business loans is shown
- And two green CTA buttons ("Get Started", "How It Works") are visible
- And a loan calculator form is displayed on the right with fields: Amount, Days, Repayment, Name, Phone
- And the form has a green submit button

#### Scenario: Home About section shows company trust message
- Given the user scrolls to the About section
- When the section is visible
- Then "Thousands Of Customers Trust Our Company" heading is displayed
- And a description paragraph is shown
- And two sub-items ("Our Company", "Our Vision") are displayed in a 2-column grid
- And a green "Learn More" CTA button is visible
- And an image is shown on the right side

#### Scenario: Loan Services section displays 4 loan types
- Given the user scrolls to the Loan Services section
- When the section is visible
- Then "Discover all the loans for you" heading is displayed
- And 4 loan type cards are shown in a full-width grid
- And each card has a background image with text overlay
- And the loan types are: Personal Loan (01.), Business Loan (02.), Education Loan (03.), Commercial Loan (04.)
- And each card has a "Find Out More" link

#### Scenario: Choose section shows 6 feature cards
- Given the user scrolls to the Choose section
- When the section is visible
- Then "Why People Choose Us" heading is displayed
- And 6 feature cards are shown in a 3-column grid
- And each card has an icon, title, and description
- And the features are: Quick & Easy, Absolute Security, Quick Approval, Low Interest Rates, Customer Support, Transparent Process

#### Scenario: Testimonial section shows customer reviews
- Given the user scrolls to the Testimonial section
- When the section is visible
- Then a dark background section with background image is displayed
- And "What Customers Are Saying" heading is shown
- And a carousel with 3 testimonial cards is displayed
- And each card has a customer photo, name, role, and quote text

#### Scenario: Counter section displays statistics
- Given the user scrolls to the Counter section
- When the section is visible
- Then 4 stat items are shown in a row
- And each stat has an icon, number, and label
- And the stats are: 2100 (Successful Loan Approval), 99% (Customer Satisfaction), 90+ (Office National Partners), 70+ (Team Members)

#### Scenario: Call/CTA section encourages action
- Given the user scrolls to the Call section
- When the section is visible
- Then a full-width background image with dark overlay is displayed
- And a CTA heading and description are shown
- And a green CTA button is visible

#### Scenario: Blog section shows latest posts
- Given the user scrolls to the Blog section
- When the section is visible
- Then "Latest Post" heading is displayed
- And 3 blog post cards are shown in a row
- And each card has a title, excerpt, and author info (photo + name + date)

#### Scenario: Contact widget shows office locations
- Given the user scrolls to the Contact widget section
- When the section is visible
- Then a background image with dark overlay is displayed
- And two office addresses are shown (New York, New Jersey)
- And a "Contact Us Now!" phone number is displayed on the right

#### Scenario: Footer renders with links and social icons
- Given the user scrolls to the footer
- When the section is visible
- Then a dark background footer is displayed
- And the logo is shown
- And Quick Links, Follow Us social icons, and address info are visible
- And a Component Dock attribution link is present
- And copyright text is shown

## Verification checklist

- [ ] Navbar is sticky, responsive, logo has green dot accent
- [ ] Hero section has background image, headline, subtitle, two green buttons, loan form
- [ ] Loan form has all 5 inputs (Amount, Days, Repayment, Name, Phone) + green submit
- [ ] About section: 2-column layout, heading, description, 2 sub-items, CTA, image
- [ ] Loan Services: 4 image cards with text overlay, "Find Out More" links
- [ ] Choose section: 6 feature cards in 3-column grid with icons
- [ ] Testimonials: dark background, carousel with 3 customer reviews
- [ ] Counter: 4 stats with icons and animated numbers
- [ ] Call/CTA: background image, dark overlay, CTA content
- [ ] Blog: 3 post cards with author info
- [ ] Contact widget: background image, office addresses, phone number
- [ ] Footer: dark, logo, links, social icons, Component Dock attribution
- [ ] All green buttons use `#88C417` brand color
- [ ] All sharp buttons use `border-radius: 2px`
- [ ] Font is Lato throughout
- [ ] Background image sections use dark overlays
- [ ] Mobile responsive at all breakpoints
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME file present with loanpilot.free.componentdock.com
- [ ] homepage in package.json set correctly
