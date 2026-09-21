# Template: Loandawn (Loan / Financial)

## Purpose

Recreation of ColorLib **Loanday** — a loan/financial services single-page
template. Source: https://colorlib.com/wp/template/loanday/
Preview: https://preview.colorlib.com/theme/loanday/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Source Mapping

| Field | Value |
|---|---|
| ColorLib slug | `loanday` |
| ColorLib name | Loanday |
| New name | Loandawn |
| Preview URL | https://preview.colorlib.com/theme/loanday/ |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/loanday-free-template.jpg |

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Lato", sans-serif` | Body + headings (weights 300–900) |
| Brand / accent | `#88C417` (lime green) | Buttons, CTA highlights |
| Header top bg | `#182143` (dark navy) | Top bar background |
| Heading color | `#111111` | h1–h6 default |
| Section title | `#323232` | `.section-title h2` |
| Body text | `#5c5c5c` | Paragraphs |
| Button bg | `#88C417` | `.primary-btn`, `.site-btn` |
| Button text | `#ffffff` | Uppercase, bold, letter-spacing 1px |
| Button radius | `2px` | Both button classes |
| Button padding | `14px 40px 12px` (primary) / `14px 30px 12px` (site) | |
| Section spacing | `100px` top/bottom (`.spad`) | All major sections |
| Section backgrounds | Image-based (`set-bg` + `data-setbg`) | Hero, testimonials, call, contact |

## Section Order (from preview HTML)

1. **Header** — top bar (address, phone, email, language selector) + navbar (logo, nav links: Home/About/Services/Blog/Pages dropdown/Contact, search icon)
2. **Hero** — full-width background image; left column: headline "Find The Best Monthly Payment" + subtext + two CTA buttons ("Get Start", "How It Work"); right column: loan application form (amount, duration, repayment, name, phone, submit button)
3. **Home About** — section title "Thousands Of Customers Trust Our Company" + descriptive paragraph + images
4. **Loan Services** — section title + 5 service cards with background images (Business Loan, Fast Loan, Online Loan, Cash Loan, Car Loan)
5. **Choose** — section title "Why Choose Us" + 6 feature items (icon + title + description)
6. **Testimonials** — background image, section title, carousel with 4 testimonial slides (avatar, name, quote)
7. **Counter** — 4 stat items (2100 Successful Loan Approval, 99% Customer Satisfaction, 90+ Office Partners, 70+ Award Certificate)
8. **Call / Contact Form** — background image, section title "Request A Call Back" + description + "Contact Us" link + form (name, email, phone, service select, submit)
9. **Latest Blog** — section title "Latest Post" + 3 blog cards (title, excerpt, author avatar + name + date) + "View More" button
10. **Contact Widget** — background image, two office locations (New York, New Jersey) + large phone number CTA
11. **Footer** — about column (logo + text), services links, social links, open hours, copyright bar with terms/privacy/community links

## Gherkin Scenarios

### Header
Scenario: Header displays contact info and navigation
  Given the page loads
  Then the top bar shows address, phone number, and email
  And the navbar shows logo, nav links (Home, About, Services, Blog, Pages, Contact)
  And a search icon is visible
  And a mobile hamburger menu is available on small screens

### Hero
Scenario: Hero section shows headline and loan form
  Given the user views the hero section
  Then the headline "Find The Best Monthly Payment" is displayed
  And two CTA buttons are visible ("Get Start", "How It Work")
  And a loan application form is displayed with fields: amount, duration, repayment, name, phone
  And the form has a submit button "Get Your Loan Now!"

Scenario: Loan form accepts input
  Given the loan form is visible
  When the user fills in all required fields
  And clicks "Get Your Loan Now!"
  Then the form submits without error

### Home About
Scenario: About section displays trust message
  Given the user scrolls to the about section
  Then the section title "Thousands Of Customers Trust Our Company" is visible
  And descriptive paragraph text is shown
  And supporting images are displayed

### Loan Services
Scenario: Loan services section shows 5 service cards
  Given the user scrolls to loan services
  Then 5 service cards are displayed
  And each card has a background image and title
  And cards are: Business Loan, Fast Loan, Online Loan, Cash Loan, Car Loan

### Choose
Scenario: Why choose us section shows 6 features
  Given the user scrolls to the choose section
  Then 6 feature items are displayed
  And each item has an icon, title, and description

### Testimonials
Scenario: Testimonials carousel shows reviews
  Given the user scrolls to testimonials
  Then a carousel of 4 testimonials is displayed
  And each testimonial shows an avatar, name, and quote
  And the carousel has navigation dots or arrows

### Counter
Scenario: Counter section shows statistics
  Given the user scrolls to counter section
  Then 4 statistics are displayed
  And values are: 2100 (Successful Loan Approval), 99% (Customer Satisfaction), 90+ (Office Partners), 70+ (Award Certificate)

### Call / Contact Form
Scenario: Call back form is functional
  Given the user scrolls to the call section
  Then the title "Request A Call Back" is visible
  And a form with name, email, phone, and service select is shown
  And a "Submit" button is displayed
  When the user fills all fields and submits
  Then the form submits without error

### Latest Blog
Scenario: Blog section shows 3 posts
  Given the user scrolls to the blog section
  Then 3 blog cards are displayed
  And each card has a title, excerpt, author avatar, author name, and date
  And a "View More" button is shown below

### Contact Widget
Scenario: Contact widget shows office info
  Given the user scrolls to contact widget
  Then two office locations are displayed (New York, New Jersey)
  And a large phone number CTA is shown

### Footer
Scenario: Footer displays site info
  Given the user scrolls to the footer
  Then the footer shows about text, services links, social links, and open hours
  And a copyright bar with terms, privacy, and community links is displayed
  And a link to https://www.componentdock.com/ is present
