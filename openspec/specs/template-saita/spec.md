# Spec: Saita (Digital Agency)

## Purpose

Recreation of ColorLib **Saita** (`https://colorlib.com/wp/template/saita/`), a modern digital agency template featuring a bold teal-blue gradient hero, services grid, animated counters, portfolio gallery, team section, pricing tables, testimonials, and blog posts.

- **Preview URL:** https://preview.colorlib.com/theme/saita/
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens

- **Brand Colors:**
  - Primary Teal: `#1fc1a9` (`rgb(31, 193, 169)`)
  - Hero Gradient: `linear-gradient(135deg, #1fc1a9 0%, #2889a6 100%)`
  - Accent Blue: `#5579fa` (`rgb(85, 121, 250)`)
  - Dark Navy (Navbar on mobile): `#052c43` (`rgb(5, 44, 67)`)
  - Text Color: `#8c8c8c` (`rgb(140, 140, 140)`)
  - Heading Color: `rgba(0, 0, 0, 0.8)`
- **Font Family:** `Poppins, Arial, sans-serif`
- **Button Styles:** Rounded corners (`rounded` / 4px), primary teal or blue buttons with hover transitions.

## Gherkin Requirements & Scenarios

### Feature: Saita Landing Page

#### Scenario: Header and Hero Section

- Given the user visits the Saita template home page
- Then they should see the navbar with brand logo "Saita." and links (Home, About, Work, Services, Pricing, Blog, Contact)
- And the hero section with heading "We Are Digital Agency Helping To Boost Your sales" and CTA buttons "START A PROJECT" and "WATCH THE VIDEO"

#### Scenario: Experience / About Section

- Given the user scrolls to the about section
- Then they should see headings such as "We have experience for your project", "We know how to save your time and money", and progress bars for Design & Development, Branding, and Marketing

#### Scenario: Counter Section

- Given the user scrolls to the counter statistics section
- Then they should see key stats like projects completed (60), happy clients (9200), cups of coffee (5800), and expert workers (100)

#### Scenario: Services Section

- Given the user scrolls to the services section
- Then they should see the heading "Our Exclusive Services We Offer For You" and interactive service cards (Creative Design, Digital Marketing, Application Design, Web Development, Branding, Graphic Design, Email Marketing, Web Design) that highlight on hover

#### Scenario: Featured Projects Portfolio

- Given the user scrolls to the portfolio section
- Then they should see category filter tabs (All, Web Design, Web Development, Branding, Marketing, UI/UX Design) and a responsive grid of project cards with zoom/link actions

#### Scenario: Meet Our Team Section

- Given the user scrolls to the team section
- Then they should see team member cards with photos, names, titles (President & CEO, Executive Vice President, General Manager, Strategic Consultant), and social media icons

#### Scenario: Pricing Plans Section

- Given the user scrolls to the pricing section
- Then they should see pricing tiers with features and "GET STARTED" buttons

#### Scenario: Testimonials and Blog Section

- Given the user scrolls down further
- Then they should see the customer testimonials carousel and the "Recent From Blog" section with article cards
- And a call to action banner "PREPARE FOR TAKEOFF — Looking for business opportunity?"
- And a footer with company details, quick links, recent posts, and the mandatory Component Dock attribution link (`https://www.componentdock.com/`)

## Verification Checklist

- [ ] Navbar renders brand and all navigation links correctly
- [ ] Hero section displays gradient background, headline, and action buttons
- [ ] Experience section shows feature blocks and skill progress bars
- [ ] Statistics counter section displays 4 key metrics
- [ ] Services section presents hover-interactive cards
- [ ] Featured Projects grid filters or displays showcase items
- [ ] Team section renders leader profiles with social links
- [ ] Pricing section lists structured agency plans
- [ ] Testimonials and Blog posts render correctly
- [ ] Footer includes all contact info and required Component Dock link (`https://www.componentdock.com/`)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `scripts/verify-app.sh` passes successfully
