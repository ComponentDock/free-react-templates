# Template: FooterPulse (Modern Footer with Contact Cards)

## Purpose

FooterPulse is a footer-focused page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Bootstrap Footer 20" free template (source: https://colorlib.com/wp/template/bootstrap-footer-20/), built under a DIFFERENT name (**FooterPulse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 footer snippet titled "Footer #10" with three colored contact info cards (phone, email, address) at the top, a three-column navigation footer (About, Company, Resources) plus a newsletter subscribe form, and a copyright bar with social media icons at the bottom. The design uses Poppins and Nunito Sans fonts, Bootstrap's grid system, and Ionicons for iconography.

**WHAT MAKES FOOTERPULSE DISTINCT (signature behaviors):**

1. **Three colored contact info cards** — phone (blue #6ea8fe), email (green #20c997), address (orange #fd7e14) — rendered as a responsive 3-column grid above the footer body.
2. **Dark footer body** (#3b3d41) with three nav columns (About, Company, Resources) and a subscribe form with input + button.
3. **Copyright bar** with dynamic year, Component Dock attribution, and social media icons (Twitter, Facebook, Instagram) using inline SVG.

## Requirements

### Requirement: ContactCards section renders three colored info cards

The ContactCards component SHALL render three contact info cards in a responsive grid (1 column on mobile, 3 columns on desktop).

#### Scenario: Phone card renders with blue background

- **WHEN** the ContactCards component is rendered
- **THEN** the phone card SHALL display the text "(+00) 1234 5678" with a blue (#6ea8fe) background

#### Scenario: Email card renders with green background

- **WHEN** the ContactCards component is rendered
- **THEN** the email card SHALL display the text "info@email.com" with a green (#20c997) background

#### Scenario: Address card renders with orange background

- **WHEN** the ContactCards component is rendered
- **THEN** the address card SHALL display the address text with an orange (#fd7e14) background

#### Scenario: Cards are responsive

- **WHEN** the ContactCards component is rendered
- **THEN** the cards SHALL be arranged in a 3-column grid on desktop and stacked on mobile

### Requirement: Footer renders navigation columns and subscribe form

The Footer component SHALL render three navigation columns (About, Company, Resources) and a newsletter subscribe form.

#### Scenario: About column renders links

- **WHEN** the Footer component is rendered
- **THEN** the About column SHALL display links: Our Story, Awards, Our Team, Career

#### Scenario: Company column renders links

- **WHEN** the Footer component is rendered
- **THEN** the Company column SHALL display links: Our Services, Clients, Contact, Press

#### Scenario: Resources column renders links

- **WHEN** the Footer component is rendered
- **THEN** the Resources column SHALL display links: Blog, Newsletter, Privacy Policy

#### Scenario: Subscribe form renders with input and button

- **WHEN** the Footer component is rendered
- **THEN** the subscribe form SHALL contain an email input with placeholder "Enter email address" and a "Subscribe" button

#### Scenario: Subscribe form has subtext

- **WHEN** the Footer component is rendered
- **THEN** the subscribe form SHALL display the subtext "Get digital marketing updates in your mailbox"

### Requirement: Footer bottom bar renders copyright and social links

The Footer component SHALL render a copyright bar with dynamic year, Component Dock attribution, and social media links.

#### Scenario: Copyright shows current year

- **WHEN** the Footer component is rendered
- **THEN** the copyright line SHALL contain the current year

#### Scenario: Component Dock link renders correctly

- **WHEN** the Footer component is rendered
- **THEN** a link labeled "Component Dock" SHALL point to https://www.componentdock.com/ with target="_blank"

#### Scenario: Social links render with aria-labels

- **WHEN** the Footer component is rendered
- **THEN** three social links (Twitter, Facebook, Instagram) SHALL render with appropriate aria-labels

#### Scenario: Footer uses semantic HTML

- **WHEN** the Footer component is rendered
- **THEN** the component SHALL use a `<footer>` element with role="contentinfo"

### Requirement: Subscribe form handles submission

The subscribe form SHALL prevent default form submission on submit.

#### Scenario: Form submit is prevented

- **WHEN** the user clicks the Subscribe button
- **THEN** the form's default submit action SHALL be prevented
