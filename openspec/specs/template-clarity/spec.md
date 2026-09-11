# Template: Clarity (Professional Coaching)

## Purpose

Clarity is a single-page professional coaching website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Coaching" free template (source:
https://colorlib.com/wp/template/coaching/), built under a
DIFFERENT name (**Clarity**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source slug:** `coaching`
- **ColorLib page:** https://colorlib.com/wp/template/coaching/
- **Preview URL:** https://preview.colorlib.com/theme/coaching/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coaching-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis:

### Colors

| Token                 | Value                   | Usage                                                               |
| --------------------- | ----------------------- | ------------------------------------------------------------------- |
| `--color-primary`     | `#373a6d`               | Primary blue-indigo — buttons, form focus, service icons, footer bg |
| `--color-black`       | `#000000`               | Headings, text-black class, button hover                            |
| `--color-warning`     | `#ffc107`               | Hero CTA button (yellow/amber)                                      |
| `--color-body`        | `gray`                  | Body text (default)                                                 |
| `--color-footer`      | `#333333`               | Footer background                                                   |
| `--color-footer-text` | `rgba(255,255,255,0.5)` | Footer paragraph text                                               |
| `--color-footer-link` | `rgba(255,255,255,0.6)` | Footer links                                                        |
| `--color-bg`          | `#ffffff`               | Default page background                                             |
| `--color-bg-light`    | `#f8f9fa`               | Light section backgrounds (training, contact)                       |

### Typography

| Element  | Font Family | Weight | Notes                   |
| -------- | ----------- | ------ | ----------------------- |
| Headings | Quicksand   | 700    | All h1-h5 use Quicksand |
| Body     | Quicksand   | 400    | Line height 1.7         |
| Buttons  | inherit     | 400    | 16px font size          |

### Layout

- Container: Bootstrap-style 1140px max-width
- Section padding: 5em 0 (md+), 2.5em 0 (mobile)
- Footer padding: 8em 0 (md+), 4em 0 (mobile)
- Grid: 12-column responsive (Bootstrap grid)

## Sections (in order)

1. **Navbar** — Sticky header with "Clarity." logo (text-primary dot accent) + nav links (Home, About, Our Training, Testimonials, Services, Blog, Contact). Mobile hamburger menu.

2. **Hero** — Full-width cover section with dark overlay, heading "I'm Professional [typed words]" (typed animation cycling roles), subtitle, and yellow "Contact Me" CTA button scrolling to contact.

3. **Hero Images** — Image carousel/slider overlapping the hero (negative margin -20%).

4. **About** — Two-column: left = "Welcome To My Website" heading + 3 paragraphs of text; right = 2 feature cards (Means of Living, Transform Lives) with flaticon icons (use lucide-react equivalents).

5. **Training** — Light bg section. Centered "Life Coach Training" heading + description. Carousel of 3 training cards: each has an image, title, and description.

6. **Testimonials** — "Happy Customers" heading. Carousel of testimonials: each has a blockquote, circular avatar photo, and person name.

7. **Services** — Primary bg (blue-indigo #373a6d). White "Our Services" heading. Carousel of 6 service cards on white bg: each has an icon, title, and description.

8. **Blog** — "Our Blog" heading + description. 2×2 grid of blog entries: each has a thumbnail image, title, date, excerpt, and "Read More.." link.

9. **Contact** — Light bg. "Contact Me" heading. Address/Phone/Email info cards. Contact form: first name, last name, email, message textarea, "Send Message" button.

10. **Footer** — Dark bg (#333). Three columns: About text, Quick Links (nav anchors), Follow Us (social icons) + Subscribe Newsletter form. Bottom bar with copyright + "Made with Component Dock" link.

## Gherkin Requirements

### Navbar

- Given the page is loaded, Then the navbar is visible and sticky
- Given the navbar is visible, Then it shows "Clarity." logo and navigation links
- Given the user clicks a nav link, Then the page scrolls to the corresponding section

### Hero

- Given the hero section is visible, Then it displays "I'm Professional" with typed word animation
- Given the hero section is visible, Then the "Contact Me" button scrolls to the contact section

### About

- Given the about section is visible, Then it shows "Welcome To My Website" heading
- Given the about section is visible, Then it shows 2 feature cards with icons

### Training

- Given the training section is visible, Then it shows "Life Coach Training" heading
- Given the training section is visible, Then it shows 3 training cards with images

### Testimonials

- Given the testimonials section is visible, Then it shows "Happy Customers" heading
- Given the testimonials section is visible, Then it shows testimonial cards with quotes and avatars

### Services

- Given the services section is visible, Then it shows "Our Services" heading on primary background
- Given the services section is visible, Then it shows 6 service cards

### Blog

- Given the blog section is visible, Then it shows "Our Blog" heading
- Given the blog section is visible, Then it shows 4 blog entries with images

### Contact

- Given the contact section is visible, Then it shows a contact form with name, email, and message fields
- Given the user fills in the form, Then validation runs on submit

### Footer

- Given the footer is visible, Then it shows "About Clarity" text
- Given the footer is visible, Then it links to https://www.componentdock.com/
