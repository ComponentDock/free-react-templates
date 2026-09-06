# Template: BidHub (Auction Marketplace)

## Purpose

Recreation of ColorLib "Auction" — a full-featured auction marketplace website
template with hero section, auction grid, how-it-works steps, about features,
testimonials, and CTA. Built with a warm orange accent palette and Muli font.

- **Source slug:** `auction`
- **Preview URL:** https://preview.colorlib.com/theme/auction/
- **ColorLib page:** https://colorlib.com/wp/template/auction/
- **Stack:** React 19, Tailwind CSS 4, TypeScript (strict), Vite

## Design tokens

| Token              | Value                                        | Notes                                                 |
| ------------------ | -------------------------------------------- | ----------------------------------------------------- |
| brand-color        | `#f37121`                                    | Orange — accent, buttons, testimonial overlay, icons  |
| brand-hover        | `#d5610e`                                    | Darker orange for hover states                        |
| text-heading       | `#000000`                                    | Black headings                                        |
| text-body          | `#212529`                                    | Dark gray body text                                   |
| text-muted         | `#777`                                       | Muted text color                                      |
| bg-page            | `#ffffff`                                    | Page background                                       |
| bg-section-alt     | `#f4f5f9`                                    | Light gray section alternating background             |
| bg-footer          | `#25262a`                                    | Dark footer background                                |
| bg-footer-top      | `#edf0f5`                                    | Footer top area                                       |
| border-light       | `#dee2e6`                                    | Light border for cards and dividers                   |
| font-family        | `"Muli", sans-serif`                         | Google Fonts (weights 300/400/700/900)                |
| font-size-base     | `16px`                                       | Body text                                             |
| line-height        | `1.7`                                        | Body line height                                      |
| heading-size       | `36px`                                       | Section heading h2                                    |
| hero-heading-size  | `52px`                                       | Hero section h1                                       |
| border-radius-card | `0`                                          | Cards have sharp corners (no rounding)                |
| border-radius-btn  | `4px`                                        | Buttons have slight rounding                          |
| border-radius-img  | `50%`                                        | Avatar/circular images                                |
| section-padding    | `5rem 0`                                     | Site-section vertical padding                         |
| hero-padding       | `8rem 0`                                     | Hero section vertical padding                         |
| card-shadow        | `0 2px 10px rgba(0,0,0,0.08)`               | Subtle card shadow                                    |
| overlay-opacity    | `0.9`                                        | Testimonial section orange overlay                    |

## Gherkin requirements

### Scenario: Navbar renders with logo and navigation links

- Given the page loads
- Then a sticky navbar is visible at the top
- And the navbar contains a logo image on the left
- And the navbar contains navigation links: "Home", "Buy", "Sell", "Services", "Blog", "About", "Contact"
- And a "Sign In / Register" button is visible on the right
- And the navbar has a white background

### Scenario: Hero section displays with background image

- Given the page loads
- Then a hero section is visible with a full-width background image
- And the hero heading reads "The Best Place to Buy and Sell"
- And the heading is centered and white on the dark background
- And a "Get Started" call-to-action button is visible below the heading

### Scenario: Current Auctions grid displays items

- Given the page loads
- Then a section titled "Current Auctions" is visible
- And 8 auction item cards are displayed in a responsive grid
- And each card shows a product image, title, current bid price, and time remaining
- And cards are arranged in 4 columns on desktop, 2 on tablet, 1 on mobile
- And each card has a white background with a subtle shadow

### Scenario: How It Works section displays 4 steps

- Given the page loads
- Then a section titled "How It Works" is visible
- And 4 step items are displayed: "Register", "Buy or Bid", "Submit a bid", "Win"
- And each step has an icon and a brief description
- And the steps are arranged in a horizontal row

### Scenario: About Us section displays features

- Given the page loads
- Then a section titled "About Us" is visible
- And 3 feature items are displayed: "Fast Support", "Happy Customers", "24/7 Support"
- And each feature has an orange (#f37121) icon and a description
- And the section has a light gray (#f4f5f9) background

### Scenario: Testimonials section with orange overlay

- Given the page loads
- Then a section titled "Happy Clients" is visible
- And the section has an orange (#f37121) overlay at 90% opacity over a background image
- And testimonial cards are displayed in a carousel/grid
- And each card shows a circular avatar, client name, and quote text
- And client names are white on the orange background
- And quote text is semi-transparent white

### Scenario: CTA section prompts user action

- Given the page loads
- Then a call-to-action section is visible
- And the heading reads "Create an account and start Buy, Bid or Sell Now!"
- And the heading is centered and black
- And a prominent orange button is visible

### Scenario: Footer renders with columns

- Given the page loads
- Then a dark footer (#25262a) is visible
- And the footer contains 3 columns: "Solutions", "Services", "Contact"
- And each column has a list of link items
- And a copyright notice is visible at the bottom

### Scenario: Responsive layout adapts to mobile

- Given the viewport is 375px wide
- Then the navbar collapses to a hamburger menu
- And the hero heading text scales down
- And auction cards stack in a single column
- And how-it-works steps stack vertically
- And the footer columns stack vertically

## Verification checklist

- [ ] Navbar with logo, links, and sign-in button
- [ ] Hero section with background image and heading
- [ ] Auction grid with 8 item cards
- [ ] How It Works with 4 step items
- [ ] About Us with 3 feature items
- [ ] Testimonials with orange overlay and client cards
- [ ] CTA section with heading and button
- [ ] Footer with 3 columns and copyright
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Muli font loaded from Google Fonts
- [ ] Orange (#f37121) accent color used consistently
- [ ] Footer links to Component Dock
