/* Atlas — blog & magazine home page (ColorLib "World" recreation,
   https://preview.colorlib.com/theme/world/). All copy is paraphrased from
   the live preview DOM; all images are seeded picsum placeholders
   (https://picsum.photos/seed/atlas-<n>/<w>/<h>); brand icons are inline SVG
   path data (lucide-react removed brand icons). */

export const siteName = 'Atlas'

export const documentTitle = 'Atlas — Blog & Magazine Template'

export const skipLabel = 'Skip to content'

export const imgUrl = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

/* --- Header + navigation ------------------------------------------------ */

export const navLabel = 'Main navigation'
export const openSearchLabel = 'Open search'
export const closeSearchLabel = 'Close search'
export const searchLabel = 'Search'
export const searchPlaceholder = 'Search something...'
export const menuOpenLabel = 'Open navigation menu'
export const menuCloseLabel = 'Close navigation menu'

interface NavChild {
  label: string
  href: string
}

export interface NavSection {
  label: string
  href: string
  current?: boolean
  children?: NavChild[]
}

/* Fixed transparent header (reference `header.header-area`): logo text left,
   Home (current) / Pages dropdown / Gadgets / Lifestyle / Video / Contact,
   search trigger right. */
export const navSections: NavSection[] = [
  { label: 'Home', href: '#', current: true },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Home', href: '#' },
      { label: 'Catagory', href: '#' },
      { label: 'Single Blog', href: '#' },
      { label: 'Regular Page', href: '#' },
    ],
  },
  { label: 'Gadgets', href: '#' },
  { label: 'Lifestyle', href: '#' },
  { label: 'Video', href: '#' },
  { label: 'Contact', href: '#' },
]

/* --- Hero --------------------------------------------------------------- */

export const heroLabel = 'Hero'

/* Pure-imagery photo slider (reference `div.hero-slides.owl-carousel` — the
   DOM slides carry NO text; the numbered strip below carries headlines). */
export const heroSlides: { seed: string }[] = [{ seed: 'atlas-1' }, { seed: 'atlas-2' }]
export const heroSlidesLabel = 'Hero slides'
export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const goToSlideLabel = (slide: number) => `Go to slide ${slide}`

/* Numbered posts strip over the hero bottom (reference
   `div.hero-post-slide` — 4 circular 55px badges + 14px 700 titles; the
   active slide's badge picks up blue accent borders and a white title). */
export const heroPostStripLabel = 'Latest posts'
export const heroPostAutoAdvanceMs = 4000

export interface HeroStripPost {
  number: number
  seed: string
  title: string
}

export const heroStripPosts: HeroStripPost[] = [
  {
    number: 1,
    seed: 'atlas-36',
    title: 'Van Gogh’s Turbulent Mind and the Physics of Starry Night',
  },
  {
    number: 2,
    seed: 'atlas-37',
    title: 'The Cities That Never Sleep: A Night-Photo Essay',
  },
  {
    number: 3,
    seed: 'atlas-38',
    title: 'Neon Reflections: Street Photography After Dark',
  },
  {
    number: 4,
    seed: 'atlas-39',
    title: 'Why We Find Skylines at Dusk So Compelling',
  },
]

/* --- Posts model -------------------------------------------------------- */

export interface Post {
  seed: string
  category: string
  title: string
  author: string
  date: string
  excerpt?: string
}

const post = (
  seed: string,
  category: string,
  title: string,
  author: string,
  date: string,
  excerpt?: string,
): Post => ({ seed, category, title, author, date, excerpt })

/* Shared tab labels for both tab groups (source typo "Politices" kept for
   fidelity; the source panes are static Bootstrap tab-panes, so client-side
   state with one shared dataset is faithful). */
export const tabLabels = [
  'All',
  'Style hunter',
  'Vogue',
  'Health & Fitness',
  'Travel',
  'Gadgets',
  'Sports',
  'Politices',
  'Features',
]

export const dontMissTitle = "Don't Miss"
export const trendingTitle = "What's Trending"

/* Magazine post pool — 18 posts (seeds atlas-3..20), two per category. */
const posts: Post[] = [
  post(
    'atlas-3',
    'Travel',
    'A Slow Journey Through the Quiet Villages of the Highlands',
    'Katy Liu',
    'Sep 29, 2017 at 9:48 am',
    'Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth and sink them into unripened memories of summer roads.',
  ),
  post(
    'atlas-4',
    'Style hunter',
    'Five Wardrobe Staples That Never Fall Out of Fashion',
    'John Dorian',
    'Sep 28, 2017 at 11:20 am',
    'The mango is perfect in it. It is always yellow with a faint blush on one side, and the best way to eat it is over the sink, letting the juice run where it wants.',
  ),
  post(
    'atlas-5',
    'Vogue',
    'The Comeback of Bold Prints on the Autumn Runways',
    'Katy Liu',
    'Sep 27, 2017 at 8:14 am',
    'Trends come and go, but a well-cut silhouette endures; this season the runways trade minimalism for patterns that demand a second look.',
  ),
  post(
    'atlas-6',
    'Health & Fitness',
    'Morning Workouts That Fit a Busy City Schedule',
    'John Dorian',
    'Sep 26, 2017 at 7:02 am',
    'Twenty minutes before the first meeting is enough to wake the body and clear the mind, if you keep the routine short and honest.',
  ),
  post(
    'atlas-7',
    'Gadgets',
    'The Pocket Camera That Reinvented Night Photography',
    'Katy Liu',
    'Sep 25, 2017 at 6:45 pm',
    'Small sensors have come a long way; the new generation of compacts handles low light better than some full-frame bodies from a few years ago.',
  ),
  post(
    'atlas-8',
    'Sports',
    'Inside the Training Camps of the Marathon Elite',
    'John Dorian',
    'Sep 24, 2017 at 10:30 am',
    'Before sunrise the track is already alive — intervals, drills, and the quiet discipline that separates podium finishers from the pack.',
  ),
  post(
    'atlas-9',
    'Politices',
    'What the New Transit Bill Means for Commuters',
    'Katy Liu',
    'Sep 23, 2017 at 4:18 pm',
    'The proposal redraws the map of the morning commute, promising faster lines and quieter neighborhoods in exchange for years of construction.',
  ),
  post(
    'atlas-10',
    'Features',
    'Portraits of the Night Shift: Stories From the City After Hours',
    'John Dorian',
    'Sep 22, 2017 at 9:55 pm',
    'Bakers, nurses, taxi drivers and printers — the people who keep the city alive while the rest of us sleep, photographed in their element.',
  ),
  post(
    'atlas-11',
    'All',
    'The Art of the Perfect Weekend Escape, Planned in an Hour',
    'Katy Liu',
    'Sep 21, 2017 at 1:40 pm',
    'You do not need a long holiday to reset; a well-chosen weekend trip with a loose itinerary can do more for the mind than two weeks of rushing.',
  ),
  post(
    'atlas-12',
    'Style hunter',
    'Neutral Tones, Sharp Cuts: Tailoring Trends for the Season',
    'John Dorian',
    'Sep 20, 2017 at 12:05 pm',
    'The new tailoring loosens the shoulders and lengthens the line, favouring fabrics that move with the body rather than against it.',
  ),
  post(
    'atlas-13',
    'Vogue',
    'Behind the Scenes of a Fashion Week Photo Studio',
    'Katy Liu',
    'Sep 19, 2017 at 3:22 pm',
    'Between the shows, backstage becomes a studio of its own — makeup artists, stylists and photographers chasing the perfect frame.',
  ),
  post(
    'atlas-14',
    'Health & Fitness',
    'Why Rest Days Are the Secret to Faster Progress',
    'John Dorian',
    'Sep 18, 2017 at 8:48 am',
    'Muscles grow between sessions, not during them; athletes who plan recovery as carefully as training consistently come back stronger.',
  ),
  post(
    'atlas-15',
    'Gadgets',
    'A Beginner’s Guide to Building a Smart Home on a Budget',
    'Katy Liu',
    'Sep 17, 2017 at 2:33 pm',
    'You do not need a whole new infrastructure; a hub, a couple of sensors and one good assistant can automate the rooms you actually use.',
  ),
  post(
    'atlas-16',
    'Sports',
    'The Strategy Behind a Perfect Penalty Kick',
    'Katy Liu',
    'Sep 16, 2017 at 5:26 pm',
    'Keepers study the shooter’s habits, so the best takers study the keepers — a duel of tells and bluffs decided in under a second.',
  ),
  post(
    'atlas-17',
    'Politices',
    'Community Gardens and the Fight for Urban Green Space',
    'John Dorian',
    'Sep 15, 2017 at 10:12 am',
    'Empty lots are becoming pocket parks and shared plots, changing the temperature of whole blocks and the mood of their residents.',
  ),
  post(
    'atlas-18',
    'Features',
    'The Craftspeople Keeping Centuries-Old Trades Alive',
    'Katy Liu',
    'Sep 14, 2017 at 11:47 am',
    'From letterpress printers to saddle makers, a new generation is learning the slow trades — and finding meaning in making things by hand.',
  ),
  post(
    'atlas-19',
    'Travel',
    'Hidden Beaches Within Two Hours of the Capital',
    'John Dorian',
    'Sep 13, 2017 at 4:05 pm',
    'Skip the crowded piers; the coastline north of the city hides coves reachable only by foot, where the water is clear and the sand quiet.',
  ),
  post(
    'atlas-20',
    'All',
    'Reading Habits of People Who Read Fifty Books a Year',
    'Katy Liu',
    'Sep 12, 2017 at 9:36 am',
    'No magic trick — they read a little every day, keep a stack within reach, and abandon books that do not earn their place.',
  ),
]

export type PostPane = Post[]

/* "Don't Miss" panes: 1 featured + 4 stacked small posts per tab. */
export const featuredPanes: PostPane[] = tabLabels.map((_, index) => {
  const offset = index * 2
  return [
    posts[offset % posts.length]!,
    posts[(offset + 1) % posts.length]!,
    posts[(offset + 2) % posts.length]!,
    posts[(offset + 3) % posts.length]!,
    posts[(offset + 4) % posts.length]!,
  ]
})

/* "What's Trending" panes: 8 stacked posts per tab (2 columns of 4 + the
   sliding row of groups of 4). */
export const trendingPanes: PostPane[] = tabLabels.map((_label, index) => {
  const offset = index * 2 + 1
  return Array.from({ length: 8 }, (_, n) => posts[(offset + n) % posts.length]!)
})

export const trendingSliderLabel = 'Trending posts carousel'

/* --- Sidebar ------------------------------------------------------------ */

export const sidebarLabel = 'Sidebar'

export const aboutHeading = 'About Atlas'
export const aboutParagraph =
  'The mango is perfect in it. It is always yellow with a faint blush on one side, and the best way to eat it is over the sink, letting the juice run where it wants. The magazine that started with a single typewriter now covers style, travel, gadgets and the stories in between — published every week from a small office above a bakery.'

export const topStoriesHeading = 'Top Stories'
export const topStories: Post[] = [
  post(
    'atlas-21',
    'Travel',
    'The Road Trip That Changed How I Pack',
    'Katy Liu',
    'Sep 11, 2017 at 7:58 am',
  ),
  post(
    'atlas-22',
    'Vogue',
    'Why Everyone Is Wearing Wide-Leg Trousers Again',
    'John Dorian',
    'Sep 10, 2017 at 12:26 pm',
  ),
  post(
    'atlas-23',
    'Gadgets',
    'The Headphones That Finally Got Noise Cancelling Right',
    'Katy Liu',
    'Sep 09, 2017 at 3:41 pm',
  ),
  post(
    'atlas-24',
    'Health & Fitness',
    'The Ten-Minute Stretch Routine for Desk Workers',
    'John Dorian',
    'Sep 08, 2017 at 9:12 am',
  ),
  post(
    'atlas-25',
    'Features',
    'Letters From a Small-Town Bookshop Owner',
    'Katy Liu',
    'Sep 07, 2017 at 5:33 pm',
  ),
]

export const stayConnectedHeading = 'Stay Connected'

export const todaysPickHeading = "Today's Pick"
export const todaysPick: Post = post(
  'atlas-26',
  'Features',
  'How Did Van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?',
  'Katy Liu',
  'Sep 29, 2017 at 9:48 am',
  'The swirling sky of Starry Night matches, brushstroke for brushstroke, the mathematics of turbulent flow — a discovery made a century after the paint dried.',
)

/* --- Social brand icons -------------------------------------------------- */

export type SocialName = 'facebook' | 'twitter' | 'pinterest' | 'vimeo' | 'instagram' | 'google'

export const socialOrder: SocialName[] = [
  'facebook',
  'twitter',
  'pinterest',
  'vimeo',
  'instagram',
  'google',
]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  pinterest: 'Pinterest',
  vimeo: 'Vimeo',
  instagram: 'Instagram',
  google: 'Google+',
}

export interface SocialIconData {
  path: string
  viewBox: string
}

/* Inline brand icon path data — lucide-react removed brand icons. Facebook,
   Twitter, Pinterest, Vimeo, Instagram are simple-icons (MIT) paths mirroring
   the reference's Font Awesome marks; Google+ (retired service, dropped from
   simple-icons) uses the Font Awesome 6 google-plus-g path (CC BY 4.0). */
export const socialIcons: Record<SocialName, SocialIconData> = {
  facebook: {
    viewBox: '0 0 24 24',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  twitter: {
    viewBox: '0 0 24 24',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  pinterest: {
    viewBox: '0 0 24 24',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  },
  vimeo: {
    viewBox: '0 0 24 24',
    path: 'M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z',
  },
  instagram: {
    viewBox: '0 0 24 24',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.336 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  google: {
    viewBox: '0 0 640 512',
    path: 'M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z',
  },
}

/* --- Cards row ---------------------------------------------------------- */

/* Three post-style-3 cards: image with a 0.5 black overlay and centered
   chip + white headline + meta. */
export const featuredCards: Post[] = [
  post(
    'atlas-27',
    'Travel',
    'The Hidden Coast: Cliffs, Coves and Quiet Roads',
    'Katy Liu',
    'Sep 29, 2017 at 9:48 am',
  ),
  post(
    'atlas-28',
    'Gadgets',
    'Why the Smart Speaker Became the Heart of the Home',
    'John Dorian',
    'Sep 28, 2017 at 2:15 pm',
  ),
  post(
    'atlas-29',
    'Style hunter',
    'The Return of the Classic Trench Coat',
    'Katy Liu',
    'Sep 27, 2017 at 10:04 am',
  ),
]

/* --- Latest articles & videos ------------------------------------------- */

export const latestHeading = 'Latest Articles'
export const latestPosts: Post[] = [
  post(
    'atlas-30',
    'Travel',
    'Weekend in the Mountains: A Route for First-Timers',
    'Katy Liu',
    'Sep 29, 2017 at 9:48 am',
    'Two days, three valleys and a lot of coffee — a loose plan for your first alpine weekend without the crowds.',
  ),
  post(
    'atlas-31',
    'Vogue',
    'The Minimalist Makeup Look That Works for Everyone',
    'John Dorian',
    'Sep 28, 2017 at 4:32 pm',
    'A lighter hand, better light and three products instead of nine — the routine that takes five minutes and lasts all day.',
  ),
  post(
    'atlas-32',
    'Gadgets',
    'Battery Life Myths: What Actually Drains Your Phone',
    'Katy Liu',
    'Sep 27, 2017 at 11:20 am',
    'Closing apps does not help; the screen, the signal and the background sync are the real energy hogs.',
  ),
  post(
    'atlas-33',
    'Sports',
    'Learning to Run Again After a Long Break',
    'John Dorian',
    'Sep 26, 2017 at 8:50 am',
    'The first week is about showing up, not pace — small loops, walking breaks, and a schedule you can actually keep.',
  ),
]

export const videosHeading = 'Most Popular Videos'
export const videoPosts: Post[] = [
  post(
    'atlas-34',
    'Video',
    'Flying Over the Fjords at Sunrise in 4K',
    'Katy Liu',
    'Sep 29, 2017 at 9:48 am',
    'Twenty minutes of drone footage from a place where the water is still and the light arrives sideways.',
  ),
  post(
    'atlas-35',
    'Video',
    'How a City Skyline Is Built: Timelapse in Three Minutes',
    'John Dorian',
    'Sep 28, 2017 at 1:05 pm',
    'Two years of construction, compressed into a single sunrise-to-sunset sweep of steel and glass.',
  ),
]

/* --- Load more ----------------------------------------------------------- */

export const loadMoreLabel = 'Load More'

/* --- Footer -------------------------------------------------------------- */

export const footerMenuHeading = 'Footer menu'
export const footerMenuLinks = ['Home', 'Fashion', 'Lifestyle', 'Contact', 'Gadgets', 'Video']

export const subscribeHeading = 'Subscribe'
export const subscribeEmailLabel = 'Email address'
export const subscribeEmailPlaceholder = 'Enter your mail'
export const subscribeButtonLabel = 'Subscribe'
export const subscribeSuccess = 'Thanks for subscribing!'

/* Original attribution line (reference `.copywrite-text`): */
export const footerCopyright = (year: number) =>
  `Copyright © ${year} All rights reserved | This template is made with ♥ by Colorlib`
