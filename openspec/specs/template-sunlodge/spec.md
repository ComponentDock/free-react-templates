# Template: Sunlodge (Hotel Landing)

## Purpose

Recreation of ColorLib "Ecoho" hotel template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source:** [colorlib.com/wp/template/ecoho/](https://colorlib.com/wp/template/ecoho/)
- **Preview:** [preview.colorlib.com/theme/ecoho/](https://preview.colorlib.com/theme/ecoho/)
- **Screenshot:** `![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/ecoho-free-template.jpg)`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `sunlodge` (apps/sunlodge, @free-react-templates/sunlodge)

## Design Tokens (extracted from preview CSS)

| Token            | Value                        | Notes                                           |
| ---------------- | ---------------------------- | ----------------------------------------------- |
| Brand primary    | `#FD8F5F`                    | Warm orange — buttons, accents, scroll-to-top   |
| Brand dark       | `#A85432`                    | Burnt sienna — secondary buttons, hover states  |
| Dark brown       | `#391F14`                    | Headings, hero text                             |
| Dark navy        | `#140C40`                    | Navbar background                               |
| Background light | `#f9f9ff`                    | Off-white with blue tint — alternating sections |
| Background white | `#ffffff`                    | White section backgrounds                       |
| Text muted       | `#777777`                    | Body text, descriptions                         |
| Font heading     | `"Cormorant", serif`         | Elegant serif for headings                      |
| Font body        | `"Josefin Sans", sans-serif` | Clean sans-serif for body text                  |
| Button primary   | bg `#FD8F5F`, color `#fff`   | `border-radius: 0px`, square corners            |
| Button secondary | bg `#A85432`, color `#fff`   | Darker variant for nav CTA                      |

## Requirements

### Requirement: Navbar renders with correct links and contact info

The navbar shall display the brand name "Sunlodge" and navigation links: Home, Rooms, About, Blog, Contact. It shall show a "Book Now" CTA button. Contact info (phone, address) shall be visible on desktop. The navbar background shall be dark navy.

#### Scenario: Navbar renders all links

- **WHEN** the user visits Sunlodge
- **THEN** the navbar shows links: Home, Rooms, About, Blog, Contact
- **AND** a "Book Now" CTA button is visible
- **AND** contact info (phone number and address) is displayed

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls past the hero area
- **THEN** the navbar remains fixed at the top with a solid background

### Requirement: Hero displays headline with split layout

The hero section shall show a dark brown left panel with headline "World Class Accommodation", subtitle text, and an orange "View More" CTA button. The right side shall display a hotel room photo.

#### Scenario: Hero shows headline and CTA

- **WHEN** the user loads the page
- **THEN** the hero displays "World Class Accommodation" heading
- **AND** a "View More" button is visible
- **AND** a hotel room image is displayed on the right

### Requirement: About section shows description and overlapping images

The about section shall display a centered heading, a two-column layout with descriptive text and a "Learn More" button on the left, and two overlapping hotel images on the right.

#### Scenario: About section displays content

- **WHEN** the user scrolls to the about section
- **THEN** a heading and description text are visible
- **AND** a "Learn More" button is present
- **AND** two overlapping images are displayed

### Requirement: Popular rooms section displays room cards

The popular rooms section shall display four room cards in a responsive grid. Each card shall show an image, room title, price per night, and description.

#### Scenario: Room cards display correctly

- **WHEN** the user scrolls to the popular rooms section
- **THEN** four room cards are displayed
- **AND** each card shows a title, price, and description
- **AND** each card has an image

### Requirement: Video preview section shows play button

The video section shall display a background image with a centered play button and "Hotel Preview" label.

#### Scenario: Video section renders play button

- **WHEN** the user scrolls to the video section
- **THEN** a play button is visible
- **AND** "Hotel Preview" text is shown

### Requirement: Booking form displays all fields

The booking section shall show a two-column layout with descriptive text on the left and a form on the right. The form shall include Check In date, Check Out date, Room select, Guest select, and a "Check Availability" submit button.

#### Scenario: Booking form displays all fields

- **WHEN** the user scrolls to the booking section
- **THEN** the form shows Check In, Check Out, Room, Guest fields
- **AND** a "Check Availability" button is visible

### Requirement: Blog cards section shows post cards

The blog section shall display three blog post cards in a responsive grid. Each card shall show an image, title, and description.

#### Scenario: Blog cards display correctly

- **WHEN** the user scrolls to the blog section
- **THEN** three blog cards are displayed
- **AND** each card has a title and description

### Requirement: Testimonials section shows client quotes

The testimonials section shall display three testimonial cards. Each card shall show a title, quoted text, and author name.

#### Scenario: Testimonials render correctly

- **WHEN** the user scrolls to the testimonials section
- **THEN** client quotes with author names are visible
- **AND** three testimonial cards are displayed

### Requirement: Instagram feed shows photo grid

The Instagram section shall display six photo thumbnails in a responsive grid with hover overlay showing an Instagram icon.

#### Scenario: Instagram photos display correctly

- **WHEN** the user scrolls to the Instagram section
- **THEN** six photo thumbnails are displayed
- **AND** each photo links to Instagram

### Requirement: Footer shows site info and Component Dock attribution

The footer shall display the brand name, description, social icons, navigation links, address, and contact info. It shall include a Component Dock attribution link.

#### Scenario: Footer renders all sections

- **WHEN** the user scrolls to the footer
- **THEN** navigation links are visible
- **AND** address and contact info are shown
- **AND** a Component Dock attribution link is present
- **AND** social media icons are visible
