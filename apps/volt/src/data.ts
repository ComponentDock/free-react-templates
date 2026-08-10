export const brandName = 'Volt'

export const navLinks = ['Home', 'Travel', 'Lifestyle', 'About', 'Contact'] as const

/* ── Sidebar ─────────────────────────────────────────────────────────── */

export const newsletterHeading = 'Subscribe for newsletter'
export const newsletterLabel = 'Email address'
export const newsletterPlaceholder = 'Enter your email address'
export const newsletterSubmitLabel = 'Subscribe'
export const newsletterSuccess = 'Subscribed! Check your inbox.'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const mobileNavLabel = 'Mobile navigation'

export const creditPrefix = 'All rights reserved | This template is made with'
export const creditBrand = 'Volt'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export const sidebarImg = imgUrl('volt-sidebar', 600, 900)

/* ── Blog ────────────────────────────────────────────────────────────── */

export interface BlogPost {
  title: string
  date: string
  category: string
  comments: number
  excerpt: string
  seed: string
}

export interface CarouselImage {
  seed: string
  alt: string
}

const makePost = (
  title: string,
  category: string,
  comments: number,
  excerpt: string,
  seed: string,
  date = 'Sept. 10, 2019',
): BlogPost => ({ title, date, category, comments, excerpt, seed })

export const featured: { images: CarouselImage[]; post: BlogPost } = {
  images: [
    { seed: 'volt-f1', alt: 'Sunrise over a mountain ridge' },
    { seed: 'volt-f2', alt: 'A winding coastal trail at dusk' },
    { seed: 'volt-f3', alt: 'Campfire under a starry sky' },
  ],
  post: makePost(
    'Wander Often, Wonder Always',
    'Travel',
    5,
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    'volt-featured',
  ),
}

export const widePosts: BlogPost[] = [
  makePost(
    'Five Peaks Worth the Sunrise Hike',
    'Travel',
    8,
    'Even the all-powerful Pointing has no control about the blind texts; an almost unorthographic life one day together a still more distant world.',
    'volt-w1',
    'Aug. 21, 2019',
  ),
  makePost(
    'The Art of Slow Mornings',
    'Lifestyle',
    3,
    'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything left.',
    'volt-w2',
    'July 30, 2019',
  ),
]

export const verticalPosts: BlogPost[] = [
  makePost(
    'Coastal Trails of the North Sea',
    'Travel',
    12,
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    'volt-v1',
    'Sept. 2, 2019',
  ),
  makePost(
    'Finding Quiet in the City',
    'Lifestyle',
    7,
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'volt-v2',
    'Aug. 15, 2019',
  ),
  makePost(
    "A Foodie's Guide to Street Markets",
    'Lifestyle',
    15,
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    'volt-v3',
    'Aug. 4, 2019',
  ),
  makePost(
    'Why We Travel Solo at Least Once',
    'Travel',
    4,
    'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.',
    'volt-v4',
    'July 18, 2019',
  ),
  makePost(
    'Packing Light: Ten Essentials',
    'Travel',
    9,
    'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks.',
    'volt-v5',
    'July 6, 2019',
  ),
  makePost(
    'Campfire Stories Under the Stars',
    'Lifestyle',
    11,
    'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.',
    'volt-v6',
    'June 24, 2019',
  ),
  makePost(
    'The Color of Autumn in the Alps',
    'Travel',
    6,
    'I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
    'volt-v7',
    'June 9, 2019',
  ),
  makePost(
    'Slow Travel Through Old Towns',
    'Travel',
    13,
    'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline.',
    'volt-v8',
    'May 27, 2019',
  ),
  makePost(
    'Letters from a Mountain Hut',
    'Lifestyle',
    2,
    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    'volt-v9',
    'May 12, 2019',
  ),
]
