# Sidenote — Newsletter Sidebar Template

## Purpose

Recreation of ColorLib Sidebar V03 — a newsletter signup sidebar panel on a bright blue background, with a right-hand email form and a left-hand blog post grid.

## Requirements

### Requirement: Sidebar rendering

The template SHALL render a right-hand sidebar with a bright blue (#4361ee) background, a large heading "Share Your Article to the World", a description paragraph, an email input field, and a "SIGN UP" submit button.

#### Scenario: Sidebar is visible on desktop

- **WHEN** the page loads
- **THEN** the sidebar heading "Share Your Article to the World" is visible
- **AND** the email input field is visible
- **AND** the "SIGN UP" button is visible

### Requirement: Post grid

The template SHALL render a grid of 4 blog post cards in the main content area. Each card SHALL display a thumbnail image, a title, and a posted date.

#### Scenario: Post cards render

- **WHEN** the page loads
- **THEN** 4 article elements are visible
- **AND** each article contains an image, a title, and a date

### Requirement: Newsletter form

The template SHALL provide a newsletter signup form with a required email input and a submit button. The form SHALL prevent default browser submission.

#### Scenario: Email input accepts text

- **WHEN** the user types an email address into the email input
- **THEN** the input field reflects the typed value

#### Scenario: Required email validation

- **WHEN** the user clicks "SIGN UP" without entering an email
- **THEN** the browser's native required validation triggers

### Requirement: Sidebar toggle on mobile

The template SHALL provide a close button (X icon) that toggles the sidebar visibility. On mobile viewports, clicking the close button SHALL hide the sidebar, and clicking the menu button SHALL show it again.

#### Scenario: Close sidebar

- **WHEN** the user clicks the close button
- **THEN** the sidebar is removed from the DOM

#### Scenario: Reopen sidebar

- **WHEN** the sidebar is hidden and the user clicks the menu button
- **THEN** the sidebar reappears

### Requirement: Footer with Component Dock link

The template SHALL render a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a footer link to https://www.componentdock.com/ is visible with text "Component Dock"

### Requirement: Accessibility

The template SHALL provide accessible labels, alt text, and semantic HTML elements.

#### Scenario: Sidebar accessible label

- **WHEN** the page loads
- **THEN** the sidebar has an aria-label "Newsletter signup sidebar"

#### Scenario: Image alt text

- **WHEN** the page loads
- **THEN** all images have descriptive alt text

#### Scenario: Email input label

- **WHEN** the page loads
- **THEN** the email input has an associated label

### Requirement: Document title

The template SHALL set the document title to "Sidenote — Newsletter Sidebar Template" on mount.

#### Scenario: Title is set

- **WHEN** the page loads
- **THEN** the document title contains "Sidenote"
