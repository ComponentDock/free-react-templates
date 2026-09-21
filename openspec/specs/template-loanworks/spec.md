# Template: Loanworks (Finance / Payday Loan)

## Purpose

Recreation of the ColorLib **Finloans** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source:** https://colorlib.com/wp/template/finloans/
- **Preview analyzed:** https://preview.colorlib.com/theme/finloans/
- **New name:** `loanworks` (apps/loanworks, `@free-react-templates/loanworks`)
- **Deploy target:** https://loanworks.free.componentdock.com
- **Stack:** Vite latest, React 19, Tailwind CSS 4, TypeScript strict
- **Analysis date:** 2026-09-21
- **Category:** Finance

## Replication reference

### Preview DOM analysis

Sections extracted from `https://preview.colorlib.com/theme/finloans/` (top to bottom):

1. **Navbar** — Sticky header with logo (image), nav links (Home, Loan, About, Pages dropdown, Blog dropdown, FAQ, Contact), phone number "+10 673 567 367", "Apply for a Loan" button (`.boxed-btn4`).
2. **Hero / Slider** — Full-width banner with background image (`banner.png`), headline "Get Loan for your Business growth or startup", "How it Works" CTA button (`.boxed-btn3`). Right side: loan calculator form card (white background, "How much do you want?" heading, Amount dropdown, Month dropdown, "You have to pay: $0" display, "Continue" button).
3. **Services** — "What we offer for you" heading, 3 service cards in a row (Home Loan, Car Loan, Education Loan). Each card has: blue gradient background (`#0a8cff` → `#054680`), icon, title, price range "$3000-$10000", loan details list, "Apply Now" button.
4. **About** — "Why Choose Us?" heading, split layout: image left, text + 4 bullet points right, "About Us" CTA button.
5. **How It Works** — "How it Works" heading, 3 numbered steps (01, 02, 03) in circular badges on light blue background (`#F5FBFF`): Apply for loan, Application review, Get funding fast.
6. **FAQ / Accordion** — "Frequently ask" heading, 4 accordion items (Bootstrap collapse). Left side has a decorative background image overlay.
7. **Testimonials** — Owl-carousel with testimonial cards: author image, quote text, author name. Navigation arrows (circular, bordered).
8. **Brand Logos** — Owl-carousel of 5 partner/brand logo images.
9. **CTA Banner** — Full-width banner with dark overlay (`#040E27` at 0.4 opacity), heading "Apply for a Loan for your startup, education or company", "Apply Now" button.
10. **Footer** — Dark background, 4 columns: Logo + contact info (email, phone, address) + social icons, Services links, Useful Links, Subscribe newsletter form + text. Footer bottom with copyright.

### Design tokens (extracted from style.css)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Roboto", sans-serif` (Google Fonts, weights 100–900) | Body, headings, all text |
| Primary brand color | `#33D4D6` (teal/cyan) | Buttons, accent bar under headings, service card prices, links, hover states |
| Dark navy | `#001D38` / `#040E27` | Headings (h1–h5), footer background overlay, FAQ heading |
| Body text color | `#7A838B` (gray) | Paragraphs, footer text, secondary content |
| Text dark | `#1F1F1F` | Anchor/button base color |
| Service card gradient | `#0a8cff` → `#054680` (linear gradient top-to-bottom) | Service card backgrounds |
| Works section bg | `#F5FBFF` (very light blue) | How It Works section background |
| White | `#ffffff` | Card backgrounds, loan form, general backgrounds |
| Button primary (`.boxed-btn3`) | `background: #33D4D6`, `color: #fff`, `border-radius: 5px`, `padding: 11px 29px` | CTA buttons — teal filled, white text |
| Button primary hover | `background: transparent`, `color: #33D4D6`, `border: 1px solid #33D4D6` | Teal outline on hover |
| Button outline (`.boxed-btn4`) | `background: transparent`, `color: #33D4D6`, `border: 1px solid #33D4D6`, `border-radius: 5px` | Header "Apply for a Loan" button |
| Button outline hover | `background: #33D4D6`, `color: #fff`, `border: 1px solid transparent` | Fills teal on hover |
| Heading accent bar | `background: #33D4D6`, `width: 60px`, `height: 3px`, `border-radius: 2px` | Small teal bar above section titles |
| Section title h3 | `font-size: 44px`, `font-weight: 400`, `color: #001D38` | Section headings |
| Footer title | `font-size: 18px`, `font-weight: 500`, `color: #040E27` | Footer column headings |
| Footer text | `font-size: 13–14px`, `color: #7A838B` | Footer body text, links |
| Works number badge | `width: 72px`, `height: 72px`, `border-radius: 50%` | Circular step number badges |
| Overlay | `background-color: #040E27`, `opacity: 0.5` | Dark overlay on CTA banners and FAQ left panel |
| Section padding | `padding-top: 120–150px`, `padding-bottom: 120px` | Generous vertical spacing between sections |
| Service card bullet | `width: 8px`, `height: 8px`, `border-radius: 50%` | Small circular bullet points in service lists |

### Visual design notes (from screenshot)

- Professional finance/payday-loan aesthetic with teal (`#33D4D6`) as the dominant brand color.
- Clean white background with blue-gradient service cards providing visual contrast.
- Hero section has a full-width background image with a loan calculator form overlaid on the right side.
- Section headings use a small teal accent bar (60px × 3px) above the heading text.
- Rounded buttons (5px radius) — teal filled by default, teal outline on hover.
- Light blue (`#F5FBFF`) background for the "How It Works" section creates subtle section differentiation.
- FAQ section has a split layout with decorative background image on the left.
- Testimonials use an owl-carousel with author photos and quote marks.
- Dark footer with newsletter subscription form.
- Overall: corporate finance, trust-building, teal + navy color palette.

## Requirements

### Feature: Loanworks — Finance/Payday Loan Template

#### Scenario: Navbar renders with logo and navigation links

Given the page loads
Then a sticky navbar is displayed at the top
And the navbar contains the logo "Loanworks"
And navigation links include Home, Loan, About, Blog, FAQ, and Contact
And a phone number "+10 673 567 367" is shown
And an "Apply for a Loan" outline button is visible on the right

#### Scenario: Hero banner displays headline and loan calculator

Given the page loads
Then a full-width hero banner is visible
And the banner has a background image with a dark overlay
And the headline reads "Get Loan for your Business growth or startup"
And a "How it Works" teal button is present
And a white loan calculator card is displayed on the right side
And the calculator has "How much do you want?" heading
And the calculator has an Amount dropdown and a Month dropdown
And a "Continue" button is present

#### Scenario: Services section displays three loan type cards

Given the user scrolls to the Services section
Then the heading "What we offer for you" is displayed
And a teal accent bar appears above the heading
And 3 service cards are shown in a row
And each card has a blue gradient background
And each card shows a loan type (Home Loan, Car Loan, Education Loan)
And each card shows a price range "$3000-$10000"
And each card has a details list with loan terms
And each card has an "Apply Now" teal button

#### Scenario: About section shows split layout with image and text

Given the user scrolls to the About section
Then the heading "Why Choose Us?" is displayed
And an image appears on the left side
And descriptive text appears on the right side
And 4 bullet points listing benefits are shown
And an "About Us" teal button is present

#### Scenario: How It Works section displays numbered steps

Given the user scrolls to the How It Works section
Then the heading "How it Works" is displayed
And 3 numbered steps are shown (01, 02, 03)
And each step has a circular number badge
And each step has a title and description
And the section has a light blue (#F5FBFF) background

#### Scenario: FAQ section displays accordion items

Given the user scrolls to the FAQ section
Then the heading "Frequently ask" is displayed
And 4 accordion FAQ items are shown
And clicking a question expands the answer
And clicking another question collapses the previous one
And the left side has a decorative background image overlay

#### Scenario: Testimonials section displays carousel

Given the user scrolls to the Testimonials section
Then a testimonial carousel is displayed
And each testimonial shows an author image
And each testimonial shows a quote
And each testimonial shows an author name
And navigation arrows allow cycling through testimonials

#### Scenario: Brand logos section displays partner logos

Given the user scrolls to the Brand section
Then 5 partner brand logos are displayed in a carousel

#### Scenario: CTA banner displays call-to-action

Given the user scrolls to the CTA banner
Then a full-width dark overlay banner is displayed
And the heading reads "Apply for a Loan for your startup, education or company"
And an "Apply Now" teal button is present

#### Scenario: Footer displays contact info and newsletter

Given the user scrolls to the footer
Then a dark footer is displayed with 4 columns
And the first column shows the logo, email, phone, and address
And social media icons are shown (Facebook, Google+, Twitter, Instagram)
And a "Services" column lists service links
And a "Useful Links" column lists navigation links
And a "Subscribe" column has a newsletter input and button
And the footer bottom shows copyright information
And the footer links to "https://www.componentdock.com/" branded as "Component Dock"

## Verification checklist

- [ ] Navbar is sticky and responsive (hamburger menu on mobile)
- [ ] Hero banner has background image with dark overlay
- [ ] Loan calculator form renders with dropdowns
- [ ] Service cards use blue gradient background
- [ ] About section has correct split layout
- [ ] How It Works section has light blue background
- [ ] FAQ accordion works (expand/collapse)
- [ ] Testimonials carousel navigates correctly
- [ ] Brand logos carousel displays
- [ ] CTA banner has dark overlay
- [ ] Footer has 4 columns with newsletter form
- [ ] Footer links to componentdock.com
- [ ] All buttons use teal (#33D4D6) brand color
- [ ] Font is Roboto (loaded via Google Fonts)
- [ ] Responsive on mobile, tablet, and desktop
- [ ] No references to ColorLib in app code
- [ ] `public/CNAME` contains `loanworks.free.componentdock.com`
- [ ] `package.json` homepage is `https://loanworks.free.componentdock.com`
