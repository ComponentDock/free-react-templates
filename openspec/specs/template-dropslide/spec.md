# Dropslide — Custom Dropdown Menu Template

## Purpose

Dropslide is a custom dropdown menu template. It recreates the ColorLib **Dropdown 11** design (https://colorlib.com/wp/template/dropdown-11/, preview: https://preview.colorlib.com/theme/bootstrap/dropdown-11/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

Recreation of ColorLib Dropdown 11 (https://colorlib.com/wp/template/dropdown-11/)
A simple, centered page showcasing a custom dropdown component with a link-style
trigger and smooth animated menu.

## Design Tokens (extracted from original CSS)

- **Font:** Roboto, sans-serif (Google Fonts)
- **Body text:** #888888 (gray)
- **Heading text:** #212529 (dark)
- **Dropdown trigger:** color #888, font-size 14px, padding 4px 7px, border-radius 4px
- **Trigger hover:** border #efefef, shadow 0 1px 5px rgba(0,0,0,0.05)
- **Trigger active/open:** bg #f8f9fa, inset shadow 0 2px 2px rgba(0,0,0,0.2)
- **Menu background:** white
- **Menu shadow:** 0 15px 30px 0 rgba(0,0,0,0.2)
- **Menu items:** font-size 14px, color #888, hover color #000
- **Page content padding:** 7rem 0

## Page Structure

1. Centered heading: "Dropdown #1"
2. Custom dropdown component (Privacy Settings trigger + menu)
3. Footer with Component Dock branding

## Components

### PrivacyDropdown

- Link-style trigger with settings icon + "Privacy Settings" text
- Click toggles open/close
- Dropdown menu appears below trigger (left-aligned)
- Menu items: Account, Privacy & Security, Password, Notification
- Smooth opacity + margin-top transition
- Click outside closes menu
- Escape key closes menu
- aria-haspopup, aria-expanded on trigger
- role=menu on dropdown, role=menuitem on items

### Footer

- Template name "Dropslide"
- Description: "Custom Dropdown Showcase"
- "Made with Component Dock" link to https://www.componentdock.com/

## Requirements

### PrivacyDropdown

#### Scenario: PrivacyDropdown

- **GIVEN** the page is loaded
- **WHEN** I look at the dropdown trigger
- **THEN** I see "Privacy Settings" text with a settings icon
- **GIVEN** the dropdown is closed
- **WHEN** I click the trigger
- **THEN** the menu becomes visible with 4 items
- **GIVEN** the dropdown is open
- **WHEN** I click the trigger again
- **THEN** the menu closes
- **GIVEN** the dropdown is open
- **WHEN** I press Escape
- **THEN** the menu closes
- **GIVEN** the dropdown is open
- **WHEN** I click outside the dropdown
- **THEN** the menu closes
- **GIVEN** the dropdown is closed
- **WHEN** I check aria-expanded on the trigger
- **THEN** it is "false"
- **GIVEN** the dropdown is open
- **WHEN** I check aria-expanded on the trigger
- **THEN** it is "true"
- **GIVEN** the dropdown is open
- **WHEN** I see the menu
- **THEN** it has role="menu"

### Footer

#### Scenario: Footer

- **GIVEN** the page is loaded
- **WHEN** I look at the footer
- **THEN** I see "Dropslide" and "Component Dock" link to https://www.componentdock.com/

### App

#### Scenario: App

- **GIVEN** the page is loaded
- **WHEN** I check the title
- **THEN** it says "Dropslide — Custom Dropdown"
