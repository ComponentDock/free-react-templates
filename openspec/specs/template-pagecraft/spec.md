# Template: Pagecraft (Web Agency / Corporate)

## Purpose

Recreation of ColorLib **Pageone** (`https://colorlib.com/wp/template/pageone/`), a modern agency and corporate portfolio template. Preview URL: `https://preview.colorlib.com/theme/pageone/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript (strict).

## Design Tokens

- **Brand Primary**: `#ec1e64` (Pink / Accent)
- **Brand Secondary**: `#10495c` (Deep Teal / Dark)
- **Background**: `#ffffff` (White) and `#f8f9fa` (Light Gray)
- **Text Color**: `#212529` (Dark Charcoal)
- **Font Family**: `"Poppins", sans-serif`
- **Button Radius**: Rounded pill (`rounded-full`) and subtle rounded corners (`rounded-lg`)

## Sections & Gherkin Requirements

### 1. Navigation (`Navbar.tsx`)

- **Requirement**: Display sticky navigation with logo ("PageCraft."), links (Home, Services, Process, Clients, About), and Contact button / mobile menu toggle.
- **Scenario**: User views header on desktop
  - Given the user visits Pagecraft
  - When the page loads
  - Then the navbar shows "PageCraft." logo and navigation links.

### 2. Hero Section (`Hero.tsx`)

- **Requirement**: Display large agency heading "We are web agency based in Los Angeles, CA" with introductory overview text and category tags (Technology, Marketing, Product & Design, etc.).
- **Scenario**: User views hero section
  - Given the user is at the top of the page
  - When the hero renders
  - Then it displays the agency headline and introductory copy.

### 3. Services Section (`Services.tsx`)

- **Requirement**: Showcase agency services (Graphic Design, Web Development, Branding, Iconography) in a responsive grid.
- **Scenario**: User explores services
  - Given the user scrolls to Services
  - When the section is visible
  - Then service cards with images and titles are displayed.

### 4. Process Section (`Process.tsx`)

- **Requirement**: Display step-by-step agency workflow (Information Gathering, Planning, Design, Development, Testing and Delivery, Maintenance).
- **Scenario**: User views process steps
  - Given the user scrolls past services
  - When the process section renders
  - Then sequential workflow steps are shown clearly.

### 5. Clients Section (`Clients.tsx`)

- **Requirement**: Showcase client logos and partner brands (Goldline, Foxhub, Ideaa, Nirastate, Treva).
- **Scenario**: User views client roster
  - Given the user scrolls to Clients
  - When the client logos render
  - Then partner brand cards are displayed.

### 6. Features Section (`Features.tsx`)

- **Requirement**: Display agency core features (Illustration, 24/7 Support, Easy to use, Web development, Intuitive, Documentation).
- **Scenario**: User views features
  - Given the user scrolls to features
  - When the section renders
  - Then feature items are listed in a clean grid.

### 7. Team Section (`Team.tsx`)

- **Requirement**: Showcase office and team members (Bradley Costa, Chanice Muir, Alisha Ellison) with social links.
- **Scenario**: User views team profiles
  - Given the user scrolls to team
  - When team cards load
  - Then member photos, names, roles, and social icons appear.

### 8. Contact Section (`Contact.tsx`)

- **Requirement**: Interactive contact form with validation (First name, Last name, Email address, Message) and office contact details.
- **Scenario**: User submits contact form with invalid email
  - Given the user enters an invalid email
  - When they click "SEND MESSAGE"
  - Then validation errors prevent submission.

### 9. Footer (`Footer.tsx`)

- **Requirement**: Footer with agency links, contact details, social icons, and mandatory link to `https://www.componentdock.com/` ("Component Dock").
- **Scenario**: User checks footer links
  - Given the user reaches the page footer
  - When the footer renders
  - Then it includes copyright, site links, and Component Dock attribution.

## Verification Checklist

- [ ] TypeScript strict compilation passes without errors.
- [ ] ESLint and Prettier check pass.
- [ ] Vitest tests pass with 100% coverage.
- [ ] Footer links to Component Dock.
- [ ] No mention of ColorLib in source code.
