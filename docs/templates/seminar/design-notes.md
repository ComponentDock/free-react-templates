# Forge — Design Notes

## Replication Research

- Fetched live preview DOM from https://preview.colorlib.com/theme/workshop/
- Fetched style.css from preview
- Dark theme conference/event landing page

## Visual Analysis

- Dark background (#232531) throughout
- Red-orange accent (#ff5733) for links, buttons, underlines
- Gradient underline on section headings (#c70039 → #ff5733)
- Roboto Mono monospace font gives it a tech/workshop aesthetic
- Speaker cards alternate image/text left/right
- Program schedule uses time + title rows with borders
- Sponsor logos in 3x2 grid
- Blog cards with image, author info, excerpt
- Footer darker (#1b1d24) with 3 columns

## Token Mapping to Tailwind

- primary-500: #ff5733
- primary-700: #c70039
- ink: #232531
- surface: #1b1d24
- text-main: #cfcfd1
- font: 'Roboto Mono' via Google Fonts
