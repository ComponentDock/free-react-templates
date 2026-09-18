# Hostpeak — Web Hosting Landing Template

Recreation of ColorLib [Lorahost](https://colorlib.com/wp/template/lorahost/) under the name **Hostpeak**.

## Design Tokens

| Token             | Value                                         |
| ----------------- | --------------------------------------------- |
| Primary gradient  | `linear-gradient(to right, #2926ac, #6128be)` |
| Heading color     | `#1e1859`                                     |
| Body text         | `#888`                                        |
| Background gray   | `#f9f9ff`                                     |
| Footer background | `#0c112a`                                     |
| Border color      | `#dbd9e6`                                     |
| Button radius     | `30px`                                        |
| Body font         | Roboto 300                                    |
| Heading font      | Lato 700                                      |

## Sections

### 1. Navbar

- Transparent background, white text
- Logo (text-based: "Hostpeak")
- Nav links: Home, Features, Services, Pricing, Contact
- "Live Chat" text link + "Login" outline button

### 2. Hero

- Full-width background with purple gradient overlay
- Centered white text
- Subtitle: "Smart Company With Perfect Space"
- Heading: "Powerful Web Hosting"
- Description paragraph
- "Get Started" outline button

### 3. Domain Search

- Light gray background (#f9f9ff)
- "Search Your Domain Now!" heading
- Text input + "Search" button (gradient)
- Checkboxes: .com, .net, .org, .in with prices ($5.99)

### 4. Brand Logos

- "Trusted by 12,000+ Happy Customers Worldwide"
- Horizontal row of 5 placeholder brand logos

### 5. Features

- 3×2 grid of feature cards
- Left card: heading "Choose Your Own Virtual Space" + description
- 5 icon cards: Secured Server, Backup Facility, Easy To Customize, Free Domain Transfer, Live Chat Support
- Hover: lift + shadow

### 6. Pricing

- Gradient background
- "Popular Pricing Package" heading (white)
- 3 cards: Normal ($45.80), Premium ($65.80), Ultimate ($75.80)
- Feature lists with checkmarks
- "Select Plan" buttons

### 7. Services

- 3×2 grid of service cards
- "High Quality Service" heading
- SSD Cloud Hosting, Free Domain Transfer, Best Hosting Service, Strong Backup, Email Service, Data Analysis
- Each with icon + description

### 8. Newsletter

- Light gray background
- "Subscribe To Get Our Newsletter"
- Email input + "Subscribe" button with shadow

### 9. Dedicated Server

- Two-column: text left, server illustration right
- Heading: "Dedicated and Secured Server for your Website"
- Description paragraph

### 10. Testimonials

- Light gray background
- "Happy Customer Says" heading with decorative line
- 3 testimonial cards: avatar, quote, name, role

### 11. Footer

- Dark navy (#0c112a)
- 4 columns: About Us, Contact Info, Important Links, Newsletter
- Bottom bar: copyright + "More templates at Component Dock" + social icons

## Scenarios

### G1: Page renders all sections

- Given the user visits Hostpeak
- When the page loads
- Then Navbar, Hero, DomainSearch, BrandLogos, Features, Pricing, Services, Newsletter, DedicatedServer, Testimonials, and Footer are visible

### G2: Navbar navigation

- Given the page is loaded
- When the user views the Navbar
- Then Home, Features, Services, Pricing, Contact links and Login button are visible

### G3: Domain search interaction

- Given the DomainSearch section is visible
- When the user types a domain name and clicks Search
- Then the form submits without error

### G4: Pricing cards

- Given the Pricing section is visible
- When the user views the cards
- Then Normal ($45.80), Premium ($65.80), and Ultimate ($75.80) are displayed with feature lists

### G5: Newsletter subscription

- Given the Newsletter section is visible
- When the user enters an email and clicks Subscribe
- Then the form submits without error

### G6: Footer links

- Given the Footer is visible
- When the user views it
- Then "Component Dock" link to https://www.componentdock.com/ is present

### G7: Responsive layout

- Given the viewport is mobile-sized
- When the page renders
- Then the layout adapts (single column grids, collapsible nav)
