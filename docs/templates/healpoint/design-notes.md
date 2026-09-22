# Healpoint — Design Notes & Task Outline

Source: ColorLib "Medicare2"
Preview: https://preview.colorlib.com/theme/medicare2/
Screenshot: medicare2-free-template.jpg

## Section structure (order to implement)

1. **Navbar** — site name "Healpoint", Home link, dark-mode toggle. Standard repo navbar pattern (packages/ui).
2. **Hero Banner** — background image (picsum-seeded), H1 headline ("Growing up your children with our most smart monitization" or paraphrase), paragraph, "Learn More" pill button. Gradient-to-right hover on button.
3. **Features** — 3 cards in a row: Emergency Services, Doctors Schedule, Online Appointment. Each has a lucide icon, H4 title, paragraph, and action link/button (f_btn style).
4. **About** — Two-column layout: left = H2 "Welcome to Medicare Center", paragraph, 3 bullet items (purple bullet dots). Right = overlay card with doctor timetable (Mon–Fri schedule entries). Background: light (#f9f9f9).
5. **Departments** — Centered H2 "Medicare Popular Departments", subtitle paragraph. 6 department icons in a grid (Cardiology, Urology, Dental Care, Eye Care, Neurology, Plastic Surgery) using lucide icons. "Learn More" button below.
6. **Counter/Stats** — Dark overlay background (use dark bg or bg-image placeholder). 4 stat cards in a row: 30K Years of Experiences, 2K+ Blood Donors, 5K+ Patients, 20K+ Staff. Purple accent color on numbers.
7. **Team** — Background: light (#f9f9f9). H2 "Our Doctors". 4 team member cards: photo (initials avatar), name, profession, social icons (FB, Twitter, LinkedIn), bio paragraph. Names: Ethel Davis, Rodney Cooper, Dane Walker, Lena Keller (or paraphrase).
8. **Blog + Appointment** — Two-column layout. Left: H2 "Our Recent Blogs" + 3 horizontal blog cards (thumbnail, date/likes/comments meta row, H4 title, excerpt). Right: H2 "Make an Appointment" + form (Patient name, Email, DOB, Doctor select, Appointment date, Message textarea, "confirm booking" submit button).
9. **Footer** — Three columns: About Us (text), Contact Us (text + phone numbers), Newsletter (email input + "get started" button). Bottom bar: copyright + social links (FB, Twitter, Dribbble, Behance). Footer links to componentdock.com.

## Design tokens (from css/style.css)

- Primary: #772dff (purple — header, about bullets, counter accents)
- Accent: #0ba9ff → #56d9ff (blue gradient — buttons, links)
- Text heading: #222222
- Text body: #777777
- Section bg light: #f9f9f9
- Button shape: border-radius 50px (pill), uppercase, gradient-to-right hover
- Fonts: "Roboto" (body), "Playfair Display" (headings)
- Counter overlay: dark semi-transparent over bg image

## Fidelity notes

- Original uses Bootstrap grid — recreate with Tailwind grid/flex utilities.
- Original uses jQuery counter animation — use simple CSS or a small counter hook.
- Original has a search bar overlay in the navbar — omit (repo pattern doesn't include it).
- Original has a language selector in the top bar — omit (not standard for the repo).
- Original uses Owl Carousel and Lightbox — omit (no carousel needed for homepage replica).
- Doctor timetable overlay in About section: recreate as a styled card with schedule entries.
- Blog section uses horizontal card layout (thumbnail left, content right) — use flex row.
- Appointment form has a select dropdown for doctor name — use a native select element.
