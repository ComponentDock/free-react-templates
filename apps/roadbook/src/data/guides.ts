export interface Guide {
  /** Stable key for the list; also the image seed, so a card's photo never moves. */
  id: string
  /** Category pill at the card's top-left — a noun phrase, two words at most. */
  tag: string
  /** Destination kicker — region then country, comma separated (U+00F8 in Troms\u00f8). */
  place: string
  /** The card's only link text and the card's h2. */
  title: string
  /** Three lines at 264 px wide, so the reveal panel lands on 116.25 px. */
  blurb: string
  /** Exactly two fact chips: a quantity and a reading time. */
  facts: [string, string]
  /** Seeded placeholder photograph, 560 x 720 so the cover crop is horizontal only. */
  image: string
  /** Scene description — what the photograph shows, not the trip. */
  alt: string
}

export const GUIDES: Guide[] = [
  {
    id: '1',
    tag: 'Hiking',
    place: 'Dolomites, Italy',
    title: 'Lakes and larches',
    blurb:
      'Five day hikes between mountain huts, timed for the golden larch weeks in mid October.',
    facts: ['5 routes', '6 min read'],
    image: 'https://picsum.photos/seed/roadbook-1/560/720',
    alt: 'Turquoise alpine lake with a wooden boat below steep mountains',
  },
  {
    id: '2',
    tag: 'City break',
    place: 'Tokyo, Japan',
    title: 'Neon after dark',
    blurb:
      'Late-night food alleys, record bars and the last trains home, neighbourhood by neighbourhood.',
    facts: ['18 places', '9 min read'],
    image: 'https://picsum.photos/seed/roadbook-2/560/720',
    alt: 'Busy Tokyo street at night lit by neon signs',
  },
  {
    id: '3',
    tag: 'Trekking',
    place: 'Cusco region, Peru',
    title: 'Above the clouds',
    blurb:
      'Acclimatise in the Sacred Valley, then walk four days to the citadel on a quieter route.',
    facts: ['4 days', '11 min read'],
    image: 'https://picsum.photos/seed/roadbook-3/560/720',
    alt: 'Ancient terraces on a green mountain ridge under clouds',
  },
  {
    id: '4',
    tag: 'Winter',
    place: 'Troms\u00f8, Norway',
    title: 'Chasing the lights',
    blurb:
      'How to read the forecast, where to drive on cloudy nights, and what to pack for minus fifteen.',
    facts: ['3 nights', '7 min read'],
    image: 'https://picsum.photos/seed/roadbook-4/560/720',
    alt: 'Green and violet northern lights over a snowy landscape',
  },
]
