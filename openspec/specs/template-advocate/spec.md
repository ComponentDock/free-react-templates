# Template: Advocate (Legal / Professional Services)

## Purpose

Recreation of ColorLib **Solicitor** (`https://preview.colorlib.com/theme/solicitor/`, source: `https://colorlib.com/wp/template/solicitor/`).
A professional dark-themed legal, investigative, and security consulting website template built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**:
  - Primary Accent: `#037ef3` (Bright Blue)
  - Dark Neutral / Background: `#0f0f11` (Deep Charcoal / Black)
  - Surface Dark: `#1b1c1e` (Card / Section Background)
  - Text Muted: `rgba(255, 255, 255, 0.5)`
- **Typography**:
  - Headings: `"Playfair Display"`, serif
  - Body: `"Roboto"`, sans-serif
- **Button Radius & Style**: Rounded rectangle, solid blue background (`#037ef3`) with hover transition (`#2991f5`), dark text.
- **Layout Structure**: Fullscreen dark hero with overlay, About section with image and background accent, Services/Departments grid, Interactive Services Tabs, Practice Areas numbered cards, Testimonials carousel/tabs, Resources list with icon bullets, and Footer linking Component Dock.

---

## Gherkin Requirements & Scenarios

### Feature: Advocate Legal & Professional Template

#### Scenario: User views the hero banner

- **Given** the user visits the Advocate homepage
- **When** the page loads
- **Then** a fullscreen hero banner appears with heading "Meet all your investigative and litigation needs", dark overlay, and primary call-to-action buttons.

#### Scenario: User inspects About section

- **Given** the user scrolls to the About section
- **When** the section is in view
- **Then** it displays "I'm Jon Campbell", professional profile copy, and styled images.

#### Scenario: User explores Practice Areas

- **Given** the user views the Practice Area numbered cards section
- **When** examining the cards (Asset Searches, Background Investigations, Business Due Diligence, etc.)
- **Then** each card displays a sequential index number (01, 02, etc.), clear title, and hover interaction arrow.

#### Scenario: User navigates Services Tabs

- **Given** the user interacts with the Services tabs section
- **When** clicking different tabs (Investigative Services, Security Consultations, Criminal Defense Investigations)
- **Then** the corresponding tab content updates dynamically with description and visual elements.

#### Scenario: User reads Testimonials

- **Given** the user views the Testimonials section
- **When** browsing client feedback
- **Then** testimonial avatars, author titles, and quote blocks are displayed cleanly.

#### Scenario: User reviews Footer attribution

- **Given** the user reaches the footer of the page
- **When** checking attribution links
- **Then** it displays "Made with Component Dock" linking to `https://www.componentdock.com/`.

---

## Verification Checklist

- [ ] App workspace `@free-react-templates/advocate` created under `apps/advocate/`
- [ ] `public/CNAME` contains `advocate.free.componentdock.com`
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] No `colorlib` references in app source code
- [ ] 100% test coverage with Vitest
- [ ] Passes typecheck, lint, and build verification
