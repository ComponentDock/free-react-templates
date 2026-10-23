# Template: Hostpeak (Web Hosting Landing)

Recreation of ColorLib [Lorahost](https://colorlib.com/wp/template/lorahost/) under the name **Hostpeak**.

## Purpose

Hostpeak is a web hosting landing template. It recreates the ColorLib **Lorahost** design (https://colorlib.com/wp/template/lorahost/, preview: https://preview.colorlib.com/theme/lorahost/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

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

## Requirements

### Feature: Page renders all sections

#### Scenario: Given the user visits Hostpeak

- **Given** the page is rendered
- **When** the Page renders all sections is inspected
- **Then** given the user visits Hostpeak

#### Scenario: When the page loads

- **Given** the page is rendered
- **When** the Page renders all sections is inspected
- **Then** when the page loads

#### Scenario: Then Navbar, Hero, DomainSearch, BrandLogos, Features, Pricing,…

- **Given** the page is rendered
- **When** the Page renders all sections is inspected
- **Then** then Navbar, Hero, DomainSearch, BrandLogos, Features, Pricing, Services, Newsletter, DedicatedServer, Testimonials, and Footer are visible

### Feature: Navbar navigation

#### Scenario: Given the page is loaded

- **Given** the page is rendered
- **When** the Navbar navigation is inspected
- **Then** given the page is loaded

#### Scenario: When the user views the Navbar

- **Given** the page is rendered
- **When** the Navbar navigation is inspected
- **Then** when the user views the Navbar

#### Scenario: Then Home, Features, Services, Pricing, Contact links and Login button…

- **Given** the page is rendered
- **When** the Navbar navigation is inspected
- **Then** then Home, Features, Services, Pricing, Contact links and Login button are visible

### Feature: Domain search interaction

#### Scenario: Given the DomainSearch section is visible

- **Given** the page is rendered
- **When** the Domain search interaction is inspected
- **Then** given the DomainSearch section is visible

#### Scenario: When the user types a domain name and clicks Search

- **Given** the page is rendered
- **When** the Domain search interaction is inspected
- **Then** when the user types a domain name and clicks Search

#### Scenario: Then the form submits without error

- **Given** the page is rendered
- **When** the Domain search interaction is inspected
- **Then** then the form submits without error

### Feature: Pricing cards

#### Scenario: Given the Pricing section is visible

- **Given** the page is rendered
- **When** the Pricing cards is inspected
- **Then** given the Pricing section is visible

#### Scenario: When the user views the cards

- **Given** the page is rendered
- **When** the Pricing cards is inspected
- **Then** when the user views the cards

#### Scenario: Then Normal ($45.80), Premium ($65.80), and Ultimate ($75.80) are…

- **Given** the page is rendered
- **When** the Pricing cards is inspected
- **Then** then Normal ($45.80), Premium ($65.80), and Ultimate ($75.80) are displayed with feature lists

### Feature: Newsletter subscription

#### Scenario: Given the Newsletter section is visible

- **Given** the page is rendered
- **When** the Newsletter subscription is inspected
- **Then** given the Newsletter section is visible

#### Scenario: When the user enters an email and clicks Subscribe

- **Given** the page is rendered
- **When** the Newsletter subscription is inspected
- **Then** when the user enters an email and clicks Subscribe

#### Scenario: Then the form submits without error

- **Given** the page is rendered
- **When** the Newsletter subscription is inspected
- **Then** then the form submits without error

### Feature: Footer links

#### Scenario: Given the Footer is visible

- **Given** the page is rendered
- **When** the Footer links is inspected
- **Then** given the Footer is visible

#### Scenario: When the user views it

- **Given** the page is rendered
- **When** the Footer links is inspected
- **Then** when the user views it

#### Scenario: Then "Component Dock" link to https://www.componentdock.com/ is present

- **Given** the page is rendered
- **When** the Footer links is inspected
- **Then** then "Component Dock" link to https://www.componentdock.com/ is present

### Feature: Responsive layout

#### Scenario: Given the viewport is mobile-sized

- **Given** the page is rendered
- **When** the Responsive layout is inspected
- **Then** given the viewport is mobile-sized

#### Scenario: When the page renders

- **Given** the page is rendered
- **When** the Responsive layout is inspected
- **Then** when the page renders

#### Scenario: Then the layout adapts (single column grids, collapsible nav)

- **Given** the page is rendered
- **When** the Responsive layout is inspected
- **Then** then the layout adapts (single column grids, collapsible nav)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/hostpeak/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/hostpeak/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders all sections — Given** the page is rendered
- [ ] Navbar navigation — Given** the page is rendered
- [ ] Domain search interaction — Given** the page is rendered
- [ ] Pricing cards — Given** the page is rendered
- [ ] Newsletter subscription — Given** the page is rendered
- [ ] Responsive layout — Given** the page is rendered
