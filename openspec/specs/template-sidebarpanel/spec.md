# Template: SidebarPanel (Sidebar Contact Panel)

## Purpose

Recreation of ColorLib Sidebar V04 — a right-hand sliding contact panel
with a chat icon toggle, overlaid on a blog post grid.

- **Source:** https://colorlib.com/wp/template/colorlib-sidebar-v04/
- **Preview:** https://preview.colorlib.com/theme/colorlib-sidebar-v04/ (404 — preview unreachable; design captured from TEMPLATES.md screenshot)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (from screenshot analysis)

| Token             | Value                                                                |
| ----------------- | -------------------------------------------------------------------- |
| Background (main) | #6b6e7b (muted gray-blue, the dimmed content behind the panel)      |
| Sidebar bg        | #483d6b (deep purple/indigo, the contact panel background)          |
| Text primary      | #ffffff (white, headings and form labels on sidebar)                |
| Text secondary    | #cccccc (light gray, post dates and subtitles on dimmed content)    |
| Form field border | #ffffff (white outlines on name, email, message fields)             |
| Button bg         | #ffffff (white, SEND button background)                             |
| Button text       | #222222 (dark, SEND button text)                                    |
| Accent / brand    | Deep purple sidebar — the dominant brand color                      |
| Font family       | System sans-serif (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif) |
| Border radius     | 0 (sharp corners on sidebar and form fields)                        |
| Chat icon         | White speech-bubble icon, positioned top-right of viewport          |
| Sidebar width     | ~350–400px fixed right column                                       |
| Main content      | Remaining width, 2-column grid of blog posts                        |

## Section structure (from screenshot)

1. **Blog Post Grid (left content area)**
   - Dark/muted gray-blue background covering the full left area
   - 2-column grid of blog post cards
   - Each card: small square author photo (left) + post title (right) + "Posted: date" (right, below title)
   - 8 posts visible (4 rows × 2 columns)
   - Content is dimmed/muted behind the overlay when sidebar is open

2. **Chat Icon Toggle**
   - Small white speech-bubble icon, positioned near top-right of viewport
   - Clicking it toggles the right sidebar panel open/closed
   - Visible at all times (sidebar open or closed)

3. **Right Sidebar Contact Panel**
   - Fixed right panel (~350–400px wide), full viewport height
   - Deep purple/indigo background (#483d6b)
   - Heading: "Get in touch" in large white bold text
   - Form fields (all white-outlined, no background fill):
     - Name input (placeholder: "Enter your name")
     - Email input (placeholder: "Enter your email")
     - Message textarea (placeholder: "Write your message", ~3 rows tall)
   - SEND button: full-width, white background, dark text, uppercase
   - Form fields stack vertically with spacing

## Gherkin requirements

```gherkin
Feature: SidebarPanel template layout

  Background:
    Given the user opens the SidebarPanel template page

  Scenario: Chat icon toggle is visible
    Then a white chat/speech-bubble icon is visible near the top-right of the viewport

  Scenario: Sidebar contact panel opens
    When the user clicks the chat icon toggle
    Then the right sidebar contact panel slides in from the right
    And the panel has a deep purple background
    And the heading "Get in touch" is displayed in white

  Scenario: Contact form fields are present
    Then the sidebar contains a name input field with placeholder "Enter your name"
    And an email input field with placeholder "Enter your email"
    And a message textarea with placeholder "Write your message"

  Scenario: Send button renders
    Then a "SEND" button is visible at the bottom of the contact form
    And the button has a white background and dark text
    And the button spans the full width of the form

  Scenario: Sidebar closes
    Given the sidebar contact panel is open
    When the user clicks the chat icon toggle
    Then the sidebar slides back to the right and is hidden

  Scenario: Blog post grid renders
    Then the main content area shows a 2-column grid of blog post cards
    And each post card shows an author photo
    And each post card shows a post title and posted date

  Scenario: Responsive behavior
    When the viewport is below 768px
    Then the sidebar becomes a full-width bottom drawer or overlay
    And the post grid switches to a single column
```

## Verification checklist

- [ ] Chat icon toggle (speech bubble) visible at top-right
- [ ] Clicking chat icon opens the right sidebar contact panel
- [ ] Sidebar has deep purple background and "Get in touch" heading
- [ ] Name, email, and message form fields render with correct placeholders
- [ ] SEND button renders full-width with white background and dark text
- [ ] Clicking chat icon again closes the sidebar
- [ ] Blog post grid shows 2-column layout with author photos, titles, dates
- [ ] Responsive: mobile sidebar collapses to bottom drawer/overlay
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Uses picsum.photos for placeholder images
