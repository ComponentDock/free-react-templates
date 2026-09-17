---
name: reachout
description: >
  Recreation of ColorLib "Contact Form 16" — a modern business contact form with
  banner hero, underline-style inputs, and a two-column layout.
source:
  name: Contact Form 16
  slug: contact-form-16
  url: https://colorlib.com/wp/template/contact-form-16/
  preview: https://preview.colorlib.com/theme/contact-form-16/
stack:
  react: 19
  vite: latest
  tailwind: 4
  typescript: latest
---

## Purpose

Reachout is a modern, professional contact form page inspired by ColorLib's Contact Form 16.
The design features a full-width hero banner with a dark overlay, a two-column body (contact
info sidebar on the left, form on the right), underline-style form fields, and a minimal footer
with Component Dock branding.

## Requirements

### Requirement: Hero banner renders heading and subtitle

The page SHALL display a full-width hero banner section with a dark background containing
a centered heading "Get In Touch" and a subtitle inviting users to send a message.

#### Scenario: Hero section visible on page load

- **WHEN** the page loads
- **THEN** a heading "Get In Touch" is visible
- **AND** a subtitle "We'd love to hear from you" is visible

### Requirement: Contact sidebar displays information

The page SHALL display a left-column sidebar with contact information including address,
phone, and email, each with a circular icon container.

#### Scenario: Contact info rendered correctly

- **WHEN** the page loads
- **THEN** the text "Contact Information" is visible
- **AND** address, phone, and email details are visible
- **AND** each info item has a circular white icon container

### Requirement: Contact form with underline-style fields

The page SHALL display a contact form with Full Name, Email Address, Subject, and Message
fields styled with bottom-border-only (underline) inputs, plus a "Send Message" submit button.

#### Scenario: Form fields are interactive

- **WHEN** the page loads
- **THEN** all four form fields are visible
- **AND** the "Send Message" button is visible
- **WHEN** the user types in the Full Name field
- **THEN** the field value updates

#### Scenario: Form submission handled

- **WHEN** the user clicks "Send Message"
- **THEN** the page does not navigate away (form submit is prevented)

### Requirement: Footer links to Component Dock

The page SHALL display a footer with a link to https://www.componentdock.com/ labeled
"Component Dock" that opens in a new tab.

#### Scenario: Footer link correct

- **WHEN** the page loads
- **THEN** a link with text "Component Dock" is visible
- **AND** the link href is "https://www.componentdock.com/"
- **AND** the link opens in a new tab (target="_blank")
