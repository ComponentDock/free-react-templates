# Template: SideQuest (Sidebar / Onboarding)

## Purpose

Recreation of ColorLib Sidebar V07 — a two-panel split layout with a dark
content area showing a blog post list on the left and a white "GET STARTED"
onboarding checklist sidebar on the right. The sidebar features a progress
bar, completed/pending step items, and a user profile at the bottom.

Source: https://colorlib.com/wp/template/colorlib-sidebar-v07/
Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v07/ (404;
spec based on screenshot analysis)

## Design tokens (from screenshot analysis)

| Token            | Value                  | Notes                                                    |
| ---------------- | ---------------------- | -------------------------------------------------------- |
| Content bg       | `#3d454d` (dark slate) | Left panel background, full height                       |
| Sidebar bg       | `#ffffff` (white)      | Right fixed sidebar, full height                         |
| Progress fill    | `#66bb6a` (green)      | Progress bar track fill color                            |
| Progress track   | `#e0e0e0` (light gray) | Progress bar empty track                                 |
| Check icon       | `#4caf50` (green)      | Completed step checkmark color                           |
| Ink primary      | `#ffffff` (white)      | Post titles and headings on dark bg                      |
| Ink secondary    | `#b0bec5` (blue-gray)  | Post dates, step descriptions on light bg                |
| Ink sidebar-head | `#212529` (near-black) | "GET STARTED" heading, step titles                       |
| Font family      | 'Open Sans', sans-serif| Consistent with ColorLib sidebar templates               |
| Avatar size      | ~60px circular         | Post list avatars + user profile avatar                  |
| Close button     | X icon, white          | Top-right of dark content panel                          |
| Progress bar H   | ~8px, rounded          | Horizontal progress indicator                            |
| Section order    | Content list → Sidebar | Two-panel: left content list, right onboarding sidebar  |

## Requirements

### Requirement: Two-panel layout

The template SHALL render a full-height split layout with a dark content area
on the left and a white sidebar panel on the right.

#### Scenario: Layout renders on desktop

- **WHEN** the page loads on a desktop viewport (>= 768px)
- **THEN** a dark background content area occupies the left portion of the screen
- **AND** a white sidebar occupies the right portion of the screen
- **AND** both panels span the full viewport height

#### Scenario: Layout stacks on mobile

- **WHEN** the page loads on a mobile viewport (< 768px)
- **THEN** the content area and sidebar stack vertically

### Requirement: Blog post list

The content area SHALL display a list of blog post items, each with a title,
a posted date, and a circular avatar image.

#### Scenario: Post list renders

- **WHEN** the page loads
- **THEN** at least 4 blog post items are visible in the content area
- **AND** each item displays a title in white text
- **AND** each item displays a "Posted: Dec 17, 2019" date line in lighter text
- **AND** each item displays a circular avatar image

#### Scenario: Post items arranged in rows

- **WHEN** the page loads
- **THEN** each post row shows the title and date on the left and the avatar on the right

### Requirement: Close button

The content area SHALL display a close (X) icon button in the top-right corner.

#### Scenario: Close button visible

- **WHEN** the page loads
- **THEN** a white X icon button is visible in the top-right of the dark content area

### Requirement: Onboarding sidebar

The sidebar SHALL display a "GET STARTED" heading, a progress bar showing
completion percentage, and a list of onboarding steps.

#### Scenario: Sidebar heading renders

- **WHEN** the page loads
- **THEN** the text "GET STARTED" is visible at the top of the sidebar
- **AND** the heading is in uppercase, bold, dark text

#### Scenario: Progress bar renders

- **WHEN** the page loads
- **THEN** a horizontal progress bar is visible below the heading
- **AND** the progress bar shows approximately 25% completion
- **AND** the filled portion is green and the track is light gray

#### Scenario: Progress percentage displayed

- **WHEN** the page loads
- **THEN** the text "25%" is visible to the right of the progress bar

### Requirement: Onboarding steps

The sidebar SHALL display a list of onboarding steps. Completed steps SHALL
show a green checkmark; pending steps SHALL show no icon.

#### Scenario: Completed steps with checkmarks

- **WHEN** the page loads
- **THEN** the first two steps ("Create organization", "Create project") display green checkmark icons
- **AND** the remaining steps ("Create organization", "Add time", "Download and test", "Invite group", "Set pay rate") display no checkmark

#### Scenario: Step details render

- **WHEN** the page loads
- **THEN** each step displays a title in dark text
- **AND** each step displays description text in lighter gray below the title

### Requirement: User profile

The sidebar SHALL display a user profile at the bottom with a circular avatar
and a name.

#### Scenario: User profile renders

- **WHEN** the page loads
- **THEN** a circular avatar image is visible at the bottom of the sidebar
- **AND** the name "Dan Smith" is displayed next to or below the avatar

### Requirement: Footer

The template SHALL render a footer containing a "Made with Component Dock"
line with a link to https://www.componentdock.com/.

#### Scenario: Footer renders with Component Dock link

- **WHEN** the page loads
- **THEN** the footer text "Made with" is visible
- **AND** a link labeled "Component Dock" points to https://www.componentdock.com/

### Requirement: Design tokens

The template SHALL use the design tokens listed above (content bg #3d454d,
sidebar bg #fff, progress fill #66bb6a, Open Sans font, etc.) for all styling.

#### Scenario: Brand colors applied

- **WHEN** the page renders
- **THEN** the content area has a dark slate background (~#3d454d)
- **AND** the sidebar has a white background (#fff)
- **AND** the progress bar fill is green (#66bb6a)
