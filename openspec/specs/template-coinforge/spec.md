# Coinforge — ICO & Cryptocurrency Landing Template

## Purpose

Recreation of ColorLib "Cryptian" (https://colorlib.com/wp/template/cryptian/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. Provides an ICO/cryptocurrency landing page with hero, token sale stats, roadmap, team, FAQ, and community sections.

## Requirements

### Requirement: Navbar with navigation and login

The template SHALL display a fixed navbar with brand logo, navigation links (Home, About, White Paper, Token Sale, Roadmap, Team, App, FAQ, Contact), and a gradient login button. On mobile, a hamburger menu toggles a dropdown panel.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop
- **THEN** the "Coinforge" brand link, all 9 nav links, and the Login button are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation panel opens with all links
- **WHEN** the user clicks a link in the mobile panel
- **THEN** the panel closes

### Requirement: Hero section with CTA buttons

The template SHALL display a split hero section with a heading about ICO/Blockchain, descriptive text, and two gradient CTA buttons (Register for ICO, Download Whitepaper).

#### Scenario: Hero displays heading and buttons

- **WHEN** the page loads
- **THEN** the hero heading "Fast Growing ICO Agency" is visible
- **AND** "Register for the ICO" and "Download Whitepaper" buttons are present

### Requirement: Featured logos section

The template SHALL display a "We are featured in" heading with 6 partner logo placeholders.

#### Scenario: Partner logos are displayed

- **WHEN** the page loads
- **THEN** the "We are featured in" text and 6 logo names are visible

### Requirement: About section with CTA

The template SHALL display a split about section with an image, heading about cryptocurrency exchange, description text, and a "Join us on Telegraph" gradient button.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** the about heading and join button are visible

### Requirement: Features section with 3 cards

The template SHALL display 3 feature cards: "Exciting Opportunity", "Vetted ICO Marketplace", "Diverse Profit Ways" with icons and descriptions.

#### Scenario: Three feature cards are displayed

- **WHEN** the page loads
- **THEN** all three feature card titles and descriptions are visible

### Requirement: ICO Live section with stats and countdown

The template SHALL display token sale statistics (Token Sold, ETH/BTC/LTH collected), a countdown timer, a progress bar (Soft Cap to Max Cap), and a "Buy Tokens" button.

#### Scenario: ICO stats and countdown are shown

- **WHEN** the page loads
- **THEN** token sold count, ETH/BTC/LTH collection stats, countdown timer units, progress bar, and Buy Tokens button are visible

### Requirement: Whitepaper download section

The template SHALL display a "Download Documentation" heading with 5 language download cards (English, Spanish, Russian, Arabic, Portuguese).

#### Scenario: Language download cards are shown

- **WHEN** the page loads
- **THEN** 5 language buttons are visible

### Requirement: Token distribution section

The template SHALL display token allocation percentages (Build Up Team 15%, ICO Investors 50%, Branding & Marketing 25%, Bounty 10%) with a pie chart and a sales contribution breakdown.

#### Scenario: Distribution percentages are displayed

- **WHEN** the page loads
- **THEN** all 4 allocation percentages and labels are visible
- **AND** the sales contribution breakdown with HR & Development, Branding & Marketing, Possible Buyout, Legal Advisory is shown

### Requirement: Roadmap timeline

The template SHALL display a development roadmap with 4 milestones (Concept & Whitepaper, Team Recruitment, Core Development, Main Launch) with dates and descriptions.

#### Scenario: Roadmap milestones are shown

- **WHEN** the page loads
- **THEN** all 4 milestone titles and dates are visible

### Requirement: Team section with core team and advisors

The template SHALL display a "Core Team" section with 4 member cards and an "Advisory Board" section with 4 advisor cards, each with photo, name, role, and social links.

#### Scenario: Team members and advisors are displayed

- **WHEN** the page loads
- **THEN** 4 core team members and 4 advisors are visible with names and social links

### Requirement: Mobile App download section

The template SHALL display a "Track from Anywhere" heading with app description and Google Play + App Store download buttons.

#### Scenario: App download buttons are shown

- **WHEN** the page loads
- **THEN** Google Playstore and Apple Appstore buttons are visible

### Requirement: FAQ section with tabs

The template SHALL display a tabbed FAQ section with 4 categories (General Questions, ICO, Token, Cryptocurrency), each containing question cards with "Read more" links.

#### Scenario: FAQ tabs switch content

- **WHEN** the page loads
- **THEN** General Questions tab is active with its questions
- **WHEN** the user clicks the Token tab
- **THEN** Token-related questions are displayed

### Requirement: Community social media grid

The template SHALL display a "Our Community" heading with 8 social media links in a grid layout.

#### Scenario: Social links are displayed

- **WHEN** the page loads
- **THEN** 8 social media links are visible

### Requirement: Footer with Component Dock link

The template SHALL display a footer with brand logo, description, navigation links, newsletter subscription form, and a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a link to "Component Dock" with href "https://www.componentdock.com/" is present in the footer
