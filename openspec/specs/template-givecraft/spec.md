# Template: GiveCraft (Charity / Nonprofit)

## Purpose

Recreation of ColorLib **Seelife** — a charity/nonprofit website template with a bold green brand, hero imagery of children in nature, and cause-focused sections.

- **Source slug:** `seelife`
- **Preview URL:** https://preview.colorlib.com/theme/seelife/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/seelife-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Charity / Nonprofit

## Design tokens (extracted from ColorLib preview)

| Token                  | Value                                        | Notes                                              |
| ---------------------- | -------------------------------------------- | -------------------------------------------------- |
| Primary brand          | `#60bc0f`                                    | Bright green — buttons, CTA, accents, logo         |
| Yellow accent          | `#fdbb00`                                    | Golden yellow — secondary CTA, subscribe button    |
| Text dark              | `#222222`                                    | Headings (h1–h6)                                   |
| Text body              | `#777777`                                    | Paragraph text                                     |
| White                  | `#FFFFFF`                                    | Hero text, card backgrounds, nav links             |
| Black                  | `#000000`                                    | Yellow button text                                 |
| Dark overlay           | `rgba(0,0,0,0.5)`                           | CTA section overlay on hero bg                     |
| Button primary bg      | `#60bc0f`                                    | Green solid                                        |
| Button secondary bg    | `#fdbb00`                                    | Yellow solid                                       |
| Button radius          | `0px`                                        | Sharp rectangular, no rounding                     |
| Button text primary    | `#FFFFFF`                                    | White on green                                     |
| Button text secondary  | `#000000`                                    | Black on yellow                                    |
| Button height          | `48px`                                       | Line-height based                                  |
| Button padding-x       | `50px`                                       | Wide horizontal padding                            |
| Button font            | `'Roboto', sans-serif`, 12px, weight 500, uppercase | Small caps                             |
| Body font              | `'Roboto', sans-serif`                       | Main paragraph text, 15px                          |
| Heading font           | `'Poppins', sans-serif`, weight 600          | All headings                                       |
| Section padding        | `130px` top/bottom                           | Generous vertical spacing                          |
| Section title size     | `36px`, weight 600                           | Section headings                                   |
| Section subtitle color | `#777777`                                    | Muted paragraph under headings                     |
| Hero background        | Full-width image (children in nature)        | With white text overlay                            |
| Subscribe bar bg       | Green (`#60bc0f`) on mobile; image on desktop| Overlapping newsletter bar above footer             |
| Footer bg              | Dark (dark gray/black)                       | 4-column layout                                    |
| Footer text            | Light gray on dark                           | Links and contact info                             |

## Requirements

### Requirement: Navbar displays logo and navigation links

The navbar SHALL show a logo on the left and navigation links (Home, About, Causes, Events, Team, Story, Contact) on the right. The navbar is transparent and overlays the hero image.

#### Scenario: Navbar renders with transparent overlay

- **WHEN** I visit the GiveCraft page
- **THEN** the navbar shows a logo (green heart icon + "GiveCraft" text)
- **AND** navigation links include Home, About, Causes, Events, Team, Story, Contact
- **AND** the navbar background is transparent, overlaying the hero image
- **AND** nav text is white

### Requirement: Hero banner displays headline and dual CTAs

The hero section SHALL show a background image of children in nature, a small uppercase label "Give a hand", a large heading "to make the better world", descriptive text, and two CTA buttons ("Donate Now" in green, "See Causes" in yellow).

#### Scenario: Hero renders headline and CTA buttons

- **WHEN** I visit the GiveCraft page
- **THEN** the hero section shows a full-width background image
- **AND** an uppercase label "Give a hand" is displayed
- **AND** a large heading "to make the better world" is visible
- **AND** a descriptive paragraph is shown
- **AND** a "Donate Now" button (green) and "See Causes" button (yellow) are visible

### Requirement: Causes section displays three cause cards

The causes section SHALL show a heading "Our major causes" with subtitle, followed by three cards (Give Donation, Give Inspiration, Become Volunteer), each with an image, title, and description.

#### Scenario: Causes section renders three cards

- **WHEN** I scroll to the causes section
- **THEN** a heading "Our major causes" is displayed with a subtitle
- **AND** three cause cards are visible in a row
- **AND** each card has an image, a title (Give Donation, Give Inspiration, Become Volunteer), and a description paragraph

### Requirement: About section displays nonprofit team info

The about section SHALL show a heading "We are nonprofit team and work worldwide", two paragraphs of text, an image on the left, and a "Learn more" button.

#### Scenario: About renders content with image and text

- **WHEN** I scroll to the about section
- **THEN** an image is displayed on the left side
- **AND** the heading "We are nonprofit team and work worldwide" is on the right
- **AND** two descriptive paragraphs are shown
- **AND** a "Learn more" button (green) is visible

### Requirement: Featured causes section displays cause cards with progress

The featured causes section SHALL show a heading "Featured causes" with subtitle, followed by three cards, each with an image, title, description, raised/goal amounts, a donate button, and donor count.

#### Scenario: Featured causes renders progress cards

- **WHEN** I scroll to the featured causes section
- **THEN** three feature cards are displayed
- **AND** each card has an image, title, description, raised amount, and goal amount
- **AND** each card has a "donate" button and a donor count with heart icon

### Requirement: Upcoming events section displays event cards with countdown

The events section SHALL show a heading "Upcoming events" with subtitle, followed by event cards in a 2x2 grid, each with an image, title, description, countdown timer (days/hours/minutes/seconds), and "Learn More" button.

#### Scenario: Events renders event cards with countdowns

- **WHEN** I scroll to the upcoming events section
- **THEN** four event cards are displayed in a 2x2 grid
- **AND** each card has an image on the left and content on the right
- **AND** each card shows a title, description, countdown timer, and "Learn More" button

### Requirement: Team section displays volunteer cards

The team section SHALL show a heading "Meet our volunteer" with subtitle, followed by four team member cards, each with a photo, name, role, description, and social media icons.

#### Scenario: Team renders volunteer cards

- **WHEN** I scroll to the team section
- **THEN** four team member cards are displayed in a row
- **AND** each card has a photo, name, role title, description, and social media icon links

### Requirement: CTA section displays volunteer call-to-action

The CTA section SHALL show a dark overlay background, a heading "Become a volunteer", descriptive text, and a "Join with us" yellow button.

#### Scenario: CTA renders call-to-action

- **WHEN** I scroll to the CTA section
- **THEN** a dark overlay background is displayed
- **AND** the heading "Become a volunteer" is visible
- **AND** a descriptive paragraph is shown
- **AND** a "Join with us" button (yellow, rounded) is visible

### Requirement: Story section displays blog cards

The story section SHALL show a heading "Our latest Story" with subtitle, followed by three blog/story cards, each with an image, date, category, and title.

#### Scenario: Story renders blog cards

- **WHEN** I scroll to the story section
- **THEN** three story cards are displayed in a row
- **AND** each card has a thumbnail image, date, category, and title link

### Requirement: Newsletter subscribe bar

The subscribe section SHALL display an email input field and a "Subscribe" button on a green background, overlapping the footer.

#### Scenario: Subscribe renders email form

- **WHEN** I scroll to the subscribe section
- **THEN** an email input field is displayed
- **AND** a "Subscribe" button (yellow, rounded) is visible
- **AND** the section has a green background

### Requirement: Footer displays mission, links, gallery, and contact

The footer SHALL display four columns: Our Mission (text), Quick Links, Gallery (image grid), and Contact Us (address, phone, email), plus a copyright bar at the bottom linking to ComponentDock.

#### Scenario: Footer renders four columns and copyright

- **WHEN** I scroll to the footer
- **THEN** four columns are visible: Our Mission, Quick Links, Gallery, Contact Us
- **AND** contact info includes address, phone numbers, and email
- **AND** a copyright bar at the bottom links to ComponentDock

### Requirement: Footer links to ComponentDock

The footer SHALL link to `https://www.componentdock.com/` with text "Component Dock".

#### Scenario: Footer has ComponentDock link

- **WHEN** I inspect the footer
- **THEN** a link to `https://www.componentdock.com/` is present
- **AND** the link text contains "Component Dock"
