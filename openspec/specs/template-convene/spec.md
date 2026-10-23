# Template: Convene (Event / Conference)

## Purpose

Convene is a single-page conference and event template with a countdown
counter, speaker grid, agenda schedule, three-tier ticket pricing, a blog
teaser, newsletter capture and a contact form.

It is an original React recreation of the ColorLib "Manup" free template
(source: https://colorlib.com/wp/template/manup/), built under a DIFFERENT
name (**Convene**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The reference is a warm orange-and-pink conference landing page: hero
with event dates and a ticket CTA, a live countdown, about block, speaker
cards, a day-by-day schedule, three pricing cards (`1 Day Pass` and
friends at $79 / $129 / $199), blog cards, a newsletter strip and a
contact form. Type is Work Sans; the palette pairs `#ee8425` orange with
`#f9488b` pink on near-black `#171822` ink.

## Design Tokens

| Token         | Value               | Notes                              |
| ------------- | ------------------- | ---------------------------------- |
| Font family   | `'Work Sans', sans-serif` | Headings and body            |
| Brand         | `#ee8425`           | Primary orange (CTAs, accents)     |
| Brand pink    | `#f9488b`           | Gradient partner                   |
| Brand dark    | `#d4741f`           | Hover state                        |
| Ink           | `#171822`           | Dark sections and headings         |
| Paper         | `#ffffff`           | Light sections                     |
| Mist          | `#6a6b7c`           | Body copy                          |
| Accent        | `#f44949`           | Alert / countdown emphasis         |

## Requirements

### Requirement 1: Hero And Live Countdown

The hero SHALL headline the event and offer a `Buy Ticket` CTA, and a
countdown block SHALL render the remaining days, hours, minutes and
seconds to the event date, updating once per second.

#### Scenario: Visitor loads the page

- **WHEN** the page loads
- **THEN** a `banner` landmark shows the event headline and `Buy Ticket`
- **AND** four countdown units are visible with numeric values

#### Scenario: A second elapses

- **WHEN** one second passes
- **THEN** the seconds unit decrements without a full page re-render

### Requirement 2: About And Speakers

The page SHALL render an `About Conference` block and a speaker grid in
which each speaker card shows a name, role and social links.

#### Scenario: Visitor browses the speakers

- **WHEN** the visitor scrolls to the speakers section
- **THEN** each card exposes the speaker's name and role text
- **AND** social icons carry accessible names

### Requirement 3: Schedule And Pricing

The page SHALL render the agenda as day-grouped session rows and a
pricing section headed `Ticket Pricing` with three tiers (the entry tier
being `1 Day Pass`) priced at 79, 129 and 199.

#### Scenario: Visitor compares tickets

- **WHEN** the visitor reaches `Ticket Pricing`
- **THEN** three cards are visible with the prices 79, 129 and 199
- **AND** each card carries its own CTA button

### Requirement 4: Blog, Newsletter And Contact

The page SHALL include a blog teaser row, a `Subscribe Newsletter` strip
with an email field, and a contact form with validated required fields.

#### Scenario: Visitor submits the newsletter form

- **WHEN** the visitor submits a valid email address
- **THEN** an inline success message replaces the form controls

#### Scenario: Visitor submits an empty contact form

- **WHEN** the visitor submits without filling the required fields
- **THEN** the form reports the missing fields and does not navigate away

### Requirement 5: Navbar And Component Dock Footer

The navbar SHALL collapse into an `Open menu` / `Close menu` toggle on
narrow viewports, and the footer SHALL be a `contentinfo` landmark that
links `https://www.componentdock.com/`.

#### Scenario: Visitor opens the mobile menu

- **WHEN** the visitor activates `Open menu`
- **THEN** the navigation links are revealed and the toggle reads
  `Close menu`

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reaches the footer
- **THEN** a link to `https://www.componentdock.com/` is present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/convene/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/convene/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/convene`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% for `apps/convene`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/convene`)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` is `convene.free.componentdock.com` and `homepage` matches
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Hero And Live Countdown — a `banner` landmark shows the event headline and `Buy Ticket
- [ ] About And Speakers — each card exposes the speaker's name and role text
- [ ] Schedule And Pricing — three cards are visible with the prices 79, 129 and 199
- [ ] Blog, Newsletter And Contact — an inline success message replaces the form controls
