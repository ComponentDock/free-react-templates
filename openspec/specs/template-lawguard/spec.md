# Template: Lawguard (Legal & Investigation Services)

## Purpose

A legal and investigation services template with hero, practice areas, consultants, services, resources and contact sections. - **ColorLib Template Source:** Solicitor (`https://colorlib.com/wp/template/solicitor/`)
- **Live Preview URL:** `https://preview.colorlib.com/theme/solicitor/`
- **Assigned New Name:** `lawguard`
- **App Directory:** `apps/lawguard`
- **Package Name:** `@free-react-templates/lawguard`
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide React icons.

## Design Tokens (Extracted from Solicitor)

- **Primary Color:** `#037ef3` (Bright Blue, used for active states, hover backgrounds, CTA buttons, and accents)
- **Dark Neutral / Background 1:** `#0f0f11` (Dark charcoal/black, used for about-me section banner, media-2 card background)
- **Base Body Font:** `Roboto, sans-serif`
- **Heading Weight:** Bold (700) and Medium (500)
- **Button Radius:** Default modern rounded / pill buttons (`rounded-md`, `rounded-full` for social icons)
- **Section Rhythm:** Generous vertical padding (`py-24` / `7rem` spacing) with alternating light `#ffffff` and dark `#0f0f11` or light gray background treatments.

---

## Requirements

### Feature: Lawguard Landing Page

#### Scenario: Navigation Bar

- **GIVEN** the user visits the Lawguard landing page
- **THEN** they should see a sticky navigation bar with the brand logo "Lawguard", links to Home, Practicing Area, Services, About, and Contact Us, plus a phone contact button `123-489-9381`
- **WHEN** the user clicks the mobile menu toggle on small viewports
- **THEN** a mobile slide-out navigation menu should open with all navigation links

#### Scenario: Hero Section

- **GIVEN** the user views the hero section
- **THEN** they should see a full-screen hero with an overlay, heading "Meet all your investigative and litigation needs", descriptive paragraph, and primary CTAs "Our services" and "Contact us"

#### Scenario: About / Founder Section

- **GIVEN** the user scrolls to the about section
- **THEN** they should see the profile feature ("I'm Jon Campbell"), biographical paragraphs with dark backdrop accent (`bg-1`), a prominent profile image (`img-wrap`), and an "Our services" link

#### Scenario: Services Section (Grid / Cards)

- **GIVEN** the user scrolls to the Our Services section
- **THEN** they should see a grid of service cards (Counsel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding) featuring icons and descriptions, with hover states changing background color to primary blue `#037ef3`

#### Scenario: Security Consultants / Justice Serves Section

- **GIVEN** the user views the Security Consultants and Justice Serves section
- **THEN** they should see editorial layout blocks with headings, detailed paragraphs about investigative services, and tabbed interfaces ("Investigative Services", "Security Consultations", "Criminal Defense Investigations")

#### Scenario: Practice Area Section

- **GIVEN** the user scrolls to the Practice Area section
- **THEN** they should see a numbered list of practice areas (Asset Searches, Background Investigations, Business Due Diligence, Civil Investigations, Criminal Defense Investigations, etc.) with clickable triggers and interactive indicators

#### Scenario: Testimonials Section

- **GIVEN** the user views the Testimonials section
- **THEN** they should see a tabbed testimonial widget with avatar pictures, names, roles, and prominent blockquotes ("Angela Smith", "Joshua Hamilton", etc.)

#### Scenario: Resources Section

- **GIVEN** the user views the Resources section
- **THEN** they should see categorized lists of resource links and an informational dark box background

#### Scenario: Contact & Write to Us Section

- **GIVEN** the user views the Write to Us section
- **THEN** they should see an interactive contact form with fields for Full Name, Email, Phone Number, Choose a Service, and Write your message, along with a submit button
- **WHEN** the user submits valid input in the contact form
- **THEN** a success confirmation should be displayed

#### Scenario: Footer

- **GIVEN** the user scrolls to the page footer
- **THEN** they should see contact address details, phone numbers, email (`info@mydomain.com`), quick navigation links, social media icons, copyright notice, and the mandatory attribution link to **Component Dock** (`https://www.componentdock.com/`)

---

## Verification Checklist

- [ ] App workspace `apps/lawguard` created with valid `package.json`, `vite.config.ts`, `index.html`, and `src/`.
- [ ] `packages/ui` components imported and composed correctly (`cn()` utility used).
- [ ] Tailwind CSS 4 theme tokens configured matching brand colors (`#037ef3`).
- [ ] All sections from Solicitor live preview present in exact 1:1 order.
- [ ] Footer contains mandatory link to `https://www.componentdock.com/`.
- [ ] `public/CNAME` set to `lawguard.free.componentdock.com`.
- [ ] Vitest unit tests implemented with 100% coverage across lines, functions, branches, and statements.
- [ ] `npm run verify:app lawguard` passes all checks (typecheck, lint, coverage, build).
