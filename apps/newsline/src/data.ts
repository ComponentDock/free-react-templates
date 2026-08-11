export const siteName = 'Newsline'
export const documentTitle = 'Newsline — Blog & Magazine Template'
export const skipLabel = 'Skip to content'

/* Top header (reference `.top-header-area`): breaking-news ticker on the
   left, social/search/login controls on the right. */
export const breakingNewsLabel = 'Breaking News:'
export const breakingNews: string[] = [
  'Reunification of migrant toddlers, parents should be completed Thursday',
  'Boys doing well after Thai cave rescue',
  'Pogba dedicates France win to ailing father',
  "How the world reacted to PM's Brexit crisis",
  'The best street food cities in the world',
]
export const topSocialLabel = 'Top social links'
export const topSearchLabel = 'Search site'
export const loginLabel = 'Login'

/* Navbar (reference `.vizew-main-menu`): red bar, logo left, uppercase
   links right; Home active with white underline; Pages/Features have
   dropdowns. */
export const navLabel = 'Main'
export const mobileNavLabel = 'Mobile'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: string[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Archives', href: '#' },
  {
    label: 'Pages',
    href: '#',
    children: [
      'Home',
      'Archive List',
      'Archive Grid',
      'Single Post',
      'Single Video Post',
      'Contact',
      'Typography',
      'Login',
    ],
  },
  {
    label: 'Features',
    href: '#',
    children: [
      'Home',
      'Archive List',
      'Archive Grid',
      'Single Post',
      'Single Video Post',
      'Contact',
      'Typography',
      'Login',
    ],
  },
  { label: 'Contact', href: '#' },
]

/* Hero (reference `.hero-area`): featured video card left + playlist
   panel right; activating a row swaps the featured video. */
export const heroSectionLabel = 'Featured video'
export const playlistLabel = 'Video playlist'

export interface VideoMeta {
  comments: string
  views: string
  likes: string
}

const defaultMeta: VideoMeta = {
  comments: '12',
  views: '3.4k',
  likes: '1.2k',
}

export interface Video {
  id: string
  title: string
  category: string
  seed: string
  duration: string
  meta: VideoMeta
}

export const playLabel = (title: string) => `Play video: ${title}`
export const durationBadgeLabel = (duration: string) => `Duration ${duration}`

export const heroVideos: Video[] = [
  {
    id: 'v1',
    title: 'Reunification of migrant toddlers, parents should be completed Thursday',
    category: 'Sports',
    seed: 'newsline-1',
    duration: '05.03',
    meta: defaultMeta,
  },
  {
    id: 'v2',
    title: 'Boys doing well after Thai cave rescue',
    category: 'World',
    seed: 'newsline-2',
    duration: '04.11',
    meta: defaultMeta,
  },
  {
    id: 'v3',
    title: 'Pogba dedicates France win to ailing father',
    category: 'Sports',
    seed: 'newsline-3',
    duration: '06.42',
    meta: defaultMeta,
  },
  {
    id: 'v4',
    title: "How the world reacted to PM's Brexit crisis",
    category: 'Politics',
    seed: 'newsline-4',
    duration: '03.55',
    meta: defaultMeta,
  },
  {
    id: 'v5',
    title: 'The best street food cities in the world',
    category: 'Food',
    seed: 'newsline-5',
    duration: '07.18',
    meta: defaultMeta,
  },
  {
    id: 'v6',
    title: 'New iPhone features you missed',
    category: 'Tech',
    seed: 'newsline-6',
    duration: '08.05',
    meta: defaultMeta,
  },
  {
    id: 'v7',
    title: 'Top video games of the year',
    category: 'Games',
    seed: 'newsline-7',
    duration: '09.30',
    meta: defaultMeta,
  },
]

export const heroImage = (video: Video) => `https://picsum.photos/seed/${video.seed}/800/450`
export const thumbImage = (video: Video) => `https://picsum.photos/seed/${video.seed}/100/80`

/* Trending videos (reference `.trending-posts-area`): centered heading +
   3-column grid. */
export const trendingSectionLabel = 'Trending videos'
export const trendingHeading = 'Trending Videos'
export const trendingVideos: Video[] = [heroVideos[0]!, heroVideos[2]!, heroVideos[6]!]
export const cardImage = (video: Video, w = 350, h = 220) =>
  `https://picsum.photos/seed/${video.seed}/${w}/${h}`

/* Content blocks (reference `.vizew-post-area`): Featured / Sport /
   Business carousels + Latest News list in the main column. */
export const contentSectionLabel = 'Video content'
export const prevLabel = 'Previous videos'
export const nextLabel = 'Next videos'

export const featuredHeading = 'Featured Videos'
export const featuredVideos: Video[] = [
  heroVideos[0]!,
  heroVideos[1]!,
  heroVideos[4]!,
  heroVideos[5]!,
]
export const sportHeading = 'Sport Videos'
export const sportVideos: Video[] = [heroVideos[2]!, heroVideos[0]!, heroVideos[3]!, heroVideos[6]!]
export const businessHeading = 'Business Videos'
export const businessVideos: Video[] = [
  heroVideos[3]!,
  heroVideos[1]!,
  heroVideos[4]!,
  heroVideos[5]!,
]

export const latestNewsHeading = 'Latest News'
export const latestNewsSectionLabel = 'Latest news'
export const latestNews: Video[] = [heroVideos[5]!, heroVideos[1]!, heroVideos[3]!, heroVideos[6]!]

/* Sidebar widgets (reference sidebar column). */
export const sidebarLabel = 'Sidebar'
export const latestVideoHeading = 'Latest Video'
export const latestVideoVideos: Video[] = [heroVideos[4]!]
export const hotChannelsHeading = 'Hot Channels'
export const subscribeLabel = 'Subscribe'
export const newsletterHeading = 'Newsletter'
export const newsletterPlaceholder = 'Enter your email'
export const newsletterSubmitLabel = 'Subscribe'
export const mostViewedHeading = 'Most Viewed Playlist'
export const mostViewedVideos: Video[] = [
  heroVideos[0]!,
  heroVideos[2]!,
  heroVideos[6]!,
  heroVideos[5]!,
]

export interface Channel {
  name: string
  seed: string
  meta: VideoMeta
}

export const channels: Channel[] = [
  { name: 'Newsline TV', seed: 'newsline-c1', meta: defaultMeta },
  { name: 'Daily Sports', seed: 'newsline-c2', meta: defaultMeta },
  { name: 'Tech Weekly', seed: 'newsline-c3', meta: defaultMeta },
]

export const channelAvatar = (channel: Channel) =>
  `https://picsum.photos/seed/${channel.seed}/60/60`

/* Footer (reference `footer.footer-area`, bg #191C1D). */
export const footerLabel = 'Footer'
export const footerColumns = [
  {
    title: 'Latest Twister',
    tweets: [
      'New episode of the travel diary is live now.',
      'Our team reviews the newest gadgets this week.',
      'The best goals from the weekend highlights.',
    ],
  },
  {
    title: 'Sport Videos',
    videos: [heroVideos[2]!, heroVideos[0]!, heroVideos[6]!],
  },
  {
    title: 'Our Address',
    address: '101 E 129th St, East Chicago, IN 46312, US',
    phone: '001-1234-88888',
    email: 'info@newsline.example',
  },
] as const

export const footerNewsletterPlaceholder = 'Enter your email'
export const footerNewsletterSubmitLabel = 'Subscribe'
export const footerCopyright = 'All rights reserved | This template is made with ♥ by Newsline'

export type SocialName = 'facebook' | 'twitter' | 'googleplus' | 'instagram' | 'linkedin'

export interface SocialLink {
  name: SocialName
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'twitter', label: 'Twitter', href: '#' },
  { name: 'googleplus', label: 'Google Plus', href: '#' },
  { name: 'instagram', label: 'Instagram', href: '#' },
  { name: 'linkedin', label: 'LinkedIn', href: '#' },
]

export const socialLabel = 'Social links'

/* Inline brand icon paths — lucide-react removed brand icons, so these are
   simple-icons (MIT) path data for the top-bar + footer social stacks,
   mirroring the reference's Font Awesome marks (fa-facebook, fa-twitter,
   fa-google-plus, fa-instagram, fa-linkedin). */
export const socialPaths: Record<SocialName, string> = {
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  twitter:
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  googleplus:
    'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.773-8.6-8.6s3.773-8.6 8.6-8.6c2.6 0 4.507 1.027 5.907 2.347l2.32-2.307C18.587 1.907 16.027.6 12.48.6 5.84.6.52 5.92.52 12.6s5.32 12 11.96 12c6.4 0 11.32-4.28 11.32-11.52 0-.8-.08-1.6-.24-2.4h-11.08z',
  instagram:
    'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.789.717 1.459 1.384 2.126.667.666 1.337 1.078 2.126 1.384.765.297 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.913-.558.789-.306 1.459-.717 2.126-1.384.666-.667 1.078-1.337 1.384-2.126.297-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126C21.319 1.347 20.649.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
}

export const socialColorClass: Record<SocialName, string> = {
  facebook: 'bg-facebook',
  twitter: 'bg-twitter',
  googleplus: 'bg-googleplus',
  instagram: 'bg-instagram',
  linkedin: 'bg-linkedin',
}
