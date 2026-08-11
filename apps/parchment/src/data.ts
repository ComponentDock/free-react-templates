/* Parchment — minimal editorial blog home page (ColorLib "Wordsmith"
   recreation, https://preview.colorlib.com/theme/wordsmith/). All copy is
   paraphrased from the live preview DOM; all images are seeded picsum
   placeholders; brand icons are inline SVG path data (lucide-react removed
   brand icons). */

export const siteName = 'parchment.'

export const documentTitle = 'Parchment — Minimal Blog Template'

export const skipLabel = 'Skip to content'

export const navLabel = 'Main navigation'

export const imgUrl = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

/* Shared author avatar — one seed so the author looks consistent everywhere
   (the reference reuses the same 42px circular avatar on the slides). */
export const authorAvatar = imgUrl('parchment-22', 84, 84)

/* --- Header + navigation ------------------------------------------------ */

export const menuOpenLabel = 'Open navigation menu'
export const menuCloseLabel = 'Close navigation menu'

export const openSearchLabel = 'Open search'
export const closeSearchLabel = 'Close search'
export const searchLabel = 'Search'
export const searchHint = 'Press Enter to begin your search.'

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

/* Centered uppercase nav (reference `ul.header__nav`): Home (current),
   Categories + Blog dropdowns, Styles, About, Contact. */
export const navSections: NavSection[] = [
  { label: 'Home', href: '#', current: true },
  {
    label: 'Categories',
    href: '#',
    children: [
      { label: 'Lifestyle', href: '#' },
      { label: 'Health', href: '#' },
      { label: 'Family', href: '#' },
      { label: 'Management', href: '#' },
      { label: 'Travel', href: '#' },
      { label: 'Work', href: '#' },
    ],
  },
  {
    label: 'Blog',
    href: '#',
    children: [
      { label: 'Video Post', href: '#' },
      { label: 'Audio Post', href: '#' },
      { label: 'Standard Post', href: '#' },
    ],
  },
  { label: 'Styles', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

/* --- Featured slider ---------------------------------------------------- */

export interface FeaturedSlide {
  seed: string
  category: string
  title: string
  author: string
  date: string
}

export const featuredSlides: FeaturedSlide[] = [
  {
    seed: 'parchment-1',
    category: 'Music',
    title: 'What Your Music Preference Says About You and Your Personality.',
    author: 'Jonathan Smith',
    date: 'June 02, 2018',
  },
  {
    seed: 'parchment-2',
    category: 'Management',
    title: 'The Pomodoro Technique Really Works.',
    author: 'John Doe',
    date: 'June 13, 2018',
  },
  {
    seed: 'parchment-3',
    category: 'LifeStyle',
    title: 'The difference between Classics, Vintage & Antique Cars.',
    author: 'John Doe',
    date: 'June 12, 2018',
  },
]

export const sliderLabel = 'Featured posts'
export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const goToSlideLabel = (slide: number) => `Go to slide ${slide}`

/* --- Blog entries grid -------------------------------------------------- */

export interface Entry {
  seed: string
  category: string
  title: string
  date: string
}

export const entriesLabel = 'Latest entries'

/* Twelve post cards (reference `div.entries` → 12 `article.item-entry`). */
export const entries: Entry[] = [
  {
    seed: 'parchment-4',
    category: 'Design',
    title: '3 Benefits of Minimalism In Interior Design.',
    date: 'June 15, 2018',
  },
  {
    seed: 'parchment-5',
    category: 'Health',
    title: '10 Interesting Facts About Caffeine.',
    date: 'June 14, 2018',
  },
  {
    seed: 'parchment-6',
    category: 'Health',
    title: 'The Power of Music to Reduce Stress.',
    date: 'June 14, 2018',
  },
  {
    seed: 'parchment-7',
    category: 'Management',
    title: 'The Pomodoro Technique Really Works.',
    date: 'June 12, 2018',
  },
  {
    seed: 'parchment-8',
    category: 'Lifestyle',
    title: 'Visiting Theme Parks Improves Your Health.',
    date: 'June 12, 2017',
  },
  {
    seed: 'parchment-9',
    category: 'Music',
    title: 'What Your Music Preference Says About You and Your Personality.',
    date: 'June 02, 2018',
  },
  {
    seed: 'parchment-10',
    category: 'Relationships',
    title: 'Create Meaningful Family Moments.',
    date: 'June 02, 2018',
  },
  {
    seed: 'parchment-11',
    category: 'Lifestyle',
    title: 'Gardening: The Secret to Happiness.',
    date: 'June 01, 2018',
  },
  {
    seed: 'parchment-12',
    category: 'Creativity',
    title: 'An Examination of Minimalistic Design.',
    date: 'May 30, 2018',
  },
  {
    seed: 'parchment-13',
    category: 'Creativity',
    title: 'What Skills Are Required For a Photographer?',
    date: 'May 30, 2018',
  },
  {
    seed: 'parchment-14',
    category: 'Lifestyle',
    title: 'Throwback To The Good Old Days.',
    date: 'May 28, 2018',
  },
  {
    seed: 'parchment-15',
    category: 'Travel',
    title: 'Planning Your First Trip To Sydney.',
    date: 'May 28, 2018',
  },
]

/* --- Pagination --------------------------------------------------------- */

export const paginationLabel = 'Page navigation'
export const previousPageLabel = 'Previous page'
export const nextPageLabel = 'Next page'
export const pageLabel = (page: number) => `Page ${page}`

export const paginationPages: (number | '…')[] = [1, 2, 3, 4, 5, '…', 8]
export const firstPage = 1
export const lastPage = 8

/* --- s-extra: popular posts, categories, site links --------------------- */

export const popularHeading = 'Popular Posts'
export const popularLabel = 'Popular posts list'

export interface PopularPost {
  seed: string
  title: string
  meta: string
}

export const popularPosts: PopularPost[] = [
  {
    seed: 'parchment-16',
    title: '10 Interesting Facts About Caffeine.',
    meta: 'By John Doe on Jun 14, 2018',
  },
  {
    seed: 'parchment-17',
    title: 'Visiting Theme Parks Improves Your Health.',
    meta: 'By John Doe on Jun 12, 2018',
  },
  {
    seed: 'parchment-18',
    title: 'Key Benefits Of Family Photography.',
    meta: 'By John Doe on Jun 12, 2018',
  },
  {
    seed: 'parchment-19',
    title: 'Absolutely No Sugar Oatmeal Cookies.',
    meta: 'By John Doe on Jun 12, 2018',
  },
  {
    seed: 'parchment-20',
    title: 'Throwback To The Good Old Days.',
    meta: 'By John Doe on Jun 12, 2018',
  },
  {
    seed: 'parchment-21',
    title: 'Healthy Mediterranean Salad Recipes',
    meta: 'By John Doe on Jun 12, 2018',
  },
]

export const categoriesHeading = 'Categories'
export const categoriesLinks = [
  'Lifestyle',
  'Travel',
  'Recipes',
  'Management',
  'Health',
  'Creativity',
]

export const siteLinksHeading = 'Site Links'
export const siteLinks = ['Home', 'Blog', 'Styles', 'About', 'Contact', 'Privacy Policy']

/* --- Footer ------------------------------------------------------------- */

export const footerAboutHeading = 'About Parchment'
export const footerAboutParagraphs = [
  'Fugiat quas eveniet voluptatem natus. Placeat error temporibus magnam sunt optio aliquam. Ut ut occaecati placeat at. Fuga fugit ea autem. Dignissimos voluptate repellat occaecati minima dignissimos mollitia consequatur.',
  'Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa error temporibus magnam est voluptatem.',
  'Et fugit eum repellat molestias iure modi. Nemo itaque vitae sit et voluptatem omnis. Aperiam laboriosam nulla temporibus et exercitationem qui.',
]

export const newsletterHeading = 'Our Newsletter'
export const newsletterBlurb =
  'Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.'
export const newsletterEmailLabel = 'Email address'
export const newsletterEmailPlaceholder = 'Your email address'
export const newsletterSendLabel = 'Send'
export const newsletterSuccess = 'Thanks for subscribing!'

export const copyrightText = '© Copyright All rights reserved'
export const copyrightDivider = '|'
export const footerCredit = 'This template is made with ♥ by Parchment'

/* --- Social brand icons -------------------------------------------------- */

export type SocialName = 'facebook' | 'twitter' | 'instagram' | 'pinterest' | 'google'

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  pinterest: 'Pinterest',
  google: 'Google+',
}

export interface SocialIconData {
  path: string
  viewBox: string
}

/* Inline brand icon path data — lucide-react removed brand icons. Facebook,
   Twitter, Instagram, Pinterest are simple-icons (MIT) paths mirroring the
   reference's Font Awesome marks; Google+ (retired service, dropped from
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
  instagram: {
    viewBox: '0 0 24 24',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.336 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  pinterest: {
    viewBox: '0 0 24 24',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  },
  google: {
    viewBox: '0 0 640 512',
    path: 'M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z',
  },
}
