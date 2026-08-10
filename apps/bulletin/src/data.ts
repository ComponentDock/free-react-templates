/* ── Brand & chrome ─────────────────────────────────────────────────────── */

/** Header / footer wordmark, split into two tones like the source logo
    ("NEWS" in accent + "BOX" in ink) — "BULL" accent + "ETIN" ink. */
export const brandStart = 'Bull'
export const brandEnd = 'etin'

export const headerAddTitle = 'YOUR ADD HERE'
export const headerAddSubtitle = 'Insert your advertisement here'

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export interface NavItem {
  label: string
  children?: ReadonlyArray<string>
}

/** Desktop nav labels (reference: International / Local News / Pages /
    Sport / Lifestyle with megamenus under International and Pages). */
export const navItems: ReadonlyArray<NavItem> = [
  {
    label: 'International',
    children: ['United Kingdom', 'Germany', 'France', 'Italy', 'Algeria', 'Egypt'],
  },
  { label: 'Local News' },
  { label: 'Pages', children: ['About Us', 'Contact'] },
  { label: 'Sport' },
  { label: 'Lifestyle' },
]

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Breaking news ticker ───────────────────────────────────────────────── */

export const tickerLabel = 'Trending'

export const tickerHeadlines: ReadonlyArray<string> = [
  'Welcome to Colorlib Family.',
  'Breaking: Markets open higher after a strong round of earnings reports.',
  'Weather: Thunderstorms expected across the north this evening.',
  'Sport: The weekend results are in — see all the highlights here.',
  'Tech: A new generation of smartphones hits stores this Friday.',
]

/* ── Hero carousel ──────────────────────────────────────────────────────── */

export interface HeroPost {
  seed: string
  title: string
  date: string
}

export interface HeroSlide {
  /** [large, stacked, stacked] — one large post beside two stacked posts. */
  posts: readonly [HeroPost, HeroPost, HeroPost]
}

export const heroSlides: readonly [HeroSlide, HeroSlide] = [
  {
    posts: [
      { seed: 'bulletin-hero-1', title: 'Traffic Problems in Time Square', date: 'June 20, 2018' },
      {
        seed: 'bulletin-hero-2',
        title: 'The best way to spend your holliday',
        date: 'June 20, 2018',
      },
      {
        seed: 'bulletin-hero-3',
        title: 'Sport results for the weekend games',
        date: 'June 20, 2018',
      },
    ],
  },
  {
    posts: [
      {
        seed: 'bulletin-hero-4',
        title: 'Elon Musk: Tesla worker admitted to sabotage',
        date: 'June 20, 2018',
      },
      {
        seed: 'bulletin-hero-5',
        title: 'Rachel Smith breaks down while discussing border crisis',
        date: 'June 20, 2018',
      },
      {
        seed: 'bulletin-hero-6',
        title: 'Nearly a quarter have no emergency savings',
        date: 'June 20, 2018',
      },
    ],
  },
]

export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

/* ── All the news tabs ──────────────────────────────────────────────────── */

export const newsTitle = 'All the news'

export type TabId = 'latest' | 'popular' | 'international' | 'local'

export interface NewsTab {
  id: TabId
  label: string
}

export const newsTabs: ReadonlyArray<NewsTab> = [
  { id: 'latest', label: 'Latest' },
  { id: 'popular', label: 'Popular' },
  { id: 'international', label: 'International' },
  { id: 'local', label: 'Local' },
]

export interface NewsPost {
  seed: string
  title: string
  date: string
  author: string
}

export interface NewsPane {
  /** Two large style-2 cards. */
  large: ReadonlyArray<NewsPost>
  /** Six small style-4 thumb-left rows. */
  small: ReadonlyArray<NewsPost>
}

export const newsPanes: Record<TabId, NewsPane> = {
  latest: {
    large: [
      {
        seed: 'bulletin-latest-1',
        title: 'City Council Approves Ambitious Public Transit Plan',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
      {
        seed: 'bulletin-latest-2',
        title: 'Markets Rally as Trade Talks Resume Between the Blocs',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
    ],
    small: [
      {
        seed: 'bulletin-latest-3',
        title: 'Local Library Extends Weekend Opening Hours',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-latest-4',
        title: 'Five Simple Habits for a Healthier New Year',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
      {
        seed: 'bulletin-latest-5',
        title: 'Tech Startup Raises Record Seed Round',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
      {
        seed: 'bulletin-latest-6',
        title: 'Coastal Towns Prepare for Storm Season',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
      {
        seed: 'bulletin-latest-7',
        title: 'New Community Park Opens in the Old District',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-latest-8',
        title: 'Researchers Unveil Clean Energy Breakthrough',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
    ],
  },
  popular: {
    large: [
      {
        seed: 'bulletin-popular-1',
        title: 'The Best Way to Spend Your Summer Holiday',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
      {
        seed: 'bulletin-popular-2',
        title: 'Sport Results for the Weekend Games',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
    ],
    small: [
      {
        seed: 'bulletin-popular-3',
        title: 'Ten Photos That Defined the Year in Culture',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-popular-4',
        title: 'Why Everyone Is Talking About the New Diet',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
      {
        seed: 'bulletin-popular-5',
        title: 'The Rise of Weekend City Breaks',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
      {
        seed: 'bulletin-popular-6',
        title: 'A Beginner Guide to Home Coffee Brewing',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
      {
        seed: 'bulletin-popular-7',
        title: 'What to Watch This Season on the Small Screen',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-popular-8',
        title: 'The Hidden Costs of Fast Fashion',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
    ],
  },
  international: {
    large: [
      {
        seed: 'bulletin-intl-1',
        title: 'European Union Agrees on New Climate Targets',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
      {
        seed: 'bulletin-intl-2',
        title: 'Global Markets React to Shifting Trade Winds',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
    ],
    small: [
      {
        seed: 'bulletin-intl-3',
        title: 'Historic Peace Talks Enter a New Phase',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-intl-4',
        title: 'Island Nations Pledge Ocean Protection Pact',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
      {
        seed: 'bulletin-intl-5',
        title: 'High-Speed Rail Links Two Capitals',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
      {
        seed: 'bulletin-intl-6',
        title: 'World Heritage Sites Face Climate Pressure',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
      {
        seed: 'bulletin-intl-7',
        title: 'Space Agencies Announce Joint Lunar Mission',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-intl-8',
        title: 'Global Food Prices Edge Higher',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
    ],
  },
  local: {
    large: [
      {
        seed: 'bulletin-local-1',
        title: 'City Hall Announces Open Budget Review',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-local-2',
        title: 'Downtown Festival Draws Record Crowds',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
    ],
    small: [
      {
        seed: 'bulletin-local-3',
        title: 'Neighborhood Watch Program Expands',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
      {
        seed: 'bulletin-local-4',
        title: 'School Board Votes on New Sports Facilities',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
      {
        seed: 'bulletin-local-5',
        title: 'Farmers Market Returns for the Season',
        date: 'June 20, 2018',
        author: 'Sarah Lindqvist',
      },
      {
        seed: 'bulletin-local-6',
        title: 'Transit Fares Hold Steady in New Budget',
        date: 'June 20, 2018',
        author: 'Marcus Vella',
      },
      {
        seed: 'bulletin-local-7',
        title: 'Volunteers Restore the Riverside Trail',
        date: 'June 20, 2018',
        author: 'Olivia Capzallo',
      },
      {
        seed: 'bulletin-local-8',
        title: 'Public Pool Opens Early for Summer',
        date: 'June 20, 2018',
        author: 'Danile Palmer',
      },
    ],
  },
}

/* ── Sidebar widgets ────────────────────────────────────────────────────── */

export const newsletterTitle = 'Subscribe to our newsletter'
export const newsletterBlurb =
  'Nullam lacinia ex eleifend orci porttitor, at pretium odio varius. Subscribe to get the latest headlines delivered straight to your inbox.'
export const emailLabel = 'Email address'
export const emailPlaceholder = 'Your E-mail'
export const subscribeLabel = 'Subscribe'
export const invalidEmailMessage = 'Please enter a valid email address.'
export const successMessage = 'Thanks for subscribing! Please check your inbox.'

export const adWidgetLabel = 'ADVERTISEMENT'

/* ── Video section ──────────────────────────────────────────────────────── */

export const playVideoLabel = 'Play featured video'
export const videoDate = 'June 20, 2018'
export const videoTitle = 'Traffic Problems in Time Square'

export const videoSlides: ReadonlyArray<NewsPost> = [
  {
    seed: 'bulletin-video-1',
    title: 'Video: How the City Is Tackling Gridlock',
    date: 'June 20, 2018',
    author: 'Olivia Capzallo',
  },
  {
    seed: 'bulletin-video-2',
    title: 'Behind the Scenes at the Grand Market',
    date: 'June 20, 2018',
    author: 'Danile Palmer',
  },
  {
    seed: 'bulletin-video-3',
    title: 'Meet the Athletes of the Summer Games',
    date: 'June 20, 2018',
    author: 'Sarah Lindqvist',
  },
  {
    seed: 'bulletin-video-4',
    title: 'A Day in the Life of a Modern Newsroom',
    date: 'June 20, 2018',
    author: 'Marcus Vella',
  },
  {
    seed: 'bulletin-video-5',
    title: 'Documentary: Voices of the Harbor',
    date: 'June 20, 2018',
    author: 'Olivia Capzallo',
  },
  {
    seed: 'bulletin-video-6',
    title: 'Highlights from the Summer Music Festival',
    date: 'June 20, 2018',
    author: 'Danile Palmer',
  },
]

/* ── Top news grid ──────────────────────────────────────────────────────── */

export const topNewsPosts: ReadonlyArray<NewsPost> = [
  {
    seed: 'bulletin-top-1',
    title: 'Election Night: Key Races Still Too Close to Call',
    date: 'June 20, 2018',
    author: 'Olivia Capzallo',
  },
  {
    seed: 'bulletin-top-2',
    title: 'Weather: Heat Wave Expected Through the Weekend',
    date: 'June 20, 2018',
    author: 'Danile Palmer',
  },
  {
    seed: 'bulletin-top-3',
    title: 'Economy: Inflation Cools for a Third Straight Month',
    date: 'June 20, 2018',
    author: 'Sarah Lindqvist',
  },
  {
    seed: 'bulletin-top-4',
    title: 'Science: Deep-Sea Expedition Returns with New Species',
    date: 'June 20, 2018',
    author: 'Marcus Vella',
  },
  {
    seed: 'bulletin-top-5',
    title: 'Culture: Museum Unveils Newly Found Artworks',
    date: 'June 20, 2018',
    author: 'Olivia Capzallo',
  },
  {
    seed: 'bulletin-top-6',
    title: 'Sports: Underdogs Advance to the Finals',
    date: 'June 20, 2018',
    author: 'Danile Palmer',
  },
]

/* ── Big add area ───────────────────────────────────────────────────────── */

export const bigAddLabel = 'YOUR AD HERE'

/* ── Footer ─────────────────────────────────────────────────────────────── */

export const footerNavLinks: ReadonlyArray<string> = ['Contact Us', 'Closed Captioning', 'Site Map']

export type SocialName = 'pinterest' | 'facebook' | 'twitter' | 'dribbble' | 'behance' | 'linkedin'

export const socials: ReadonlyArray<{ label: string; name: SocialName }> = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export const copyrightText = 'All rights reserved | This template is made with ♥ by Colorlib'
