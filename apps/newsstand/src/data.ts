export const siteName = 'Newsstand'
export const documentTitle = 'Newsstand — Magazine & Blog Template'
export const skipLabel = 'Skip to content'

/* Post categories — the reference color-codes every post card by category
   (cat-1 green Web Design, cat-2 orange JavaScript, cat-3 purple CSS,
   cat-4 blue TypeScript). */
export type CategoryId = 1 | 2 | 3 | 4

export interface Post {
  id: number
  title: string
  category: string
  categoryId?: CategoryId
  date: string
  seed: string
}

export const postImage = (post: Post, width: number, height: number) =>
  `https://picsum.photos/seed/${post.seed}/${width}/${height}`

/* Header navigation (reference `.nav-menu`): News / Popular / Web Design /
   JavaScript / CSS / TypeScript, each link a hairline-divided cell whose
   hover color follows its category. */
export const navLabel = 'Main'
export const asideOpenLabel = 'Open menu'
export const asideCloseLabel = 'Close menu'
export const searchOpenLabel = 'Open search'
export const searchCloseLabel = 'Close search'
export const searchPlaceholder = 'Enter Your Search ...'
export const searchSubmitLabel = 'Submit search'

export interface NavLink {
  label: string
  href: string
  categoryId?: CategoryId
}

export const navLinks: NavLink[] = [
  { label: 'News', href: '#' },
  { label: 'Popular', href: '#' },
  { label: 'Web Design', href: '#', categoryId: 1 },
  { label: 'JavaScript', href: '#', categoryId: 2 },
  { label: 'CSS', href: '#', categoryId: 3 },
  { label: 'TypeScript', href: '#', categoryId: 4 },
]

/* Category color classes — literal strings so Tailwind generates them. */
export const badgeClass: Record<CategoryId, string> = {
  1: 'bg-cat-1',
  2: 'bg-brand',
  3: 'bg-cat-3',
  4: 'bg-cat-4',
}

export const badgeColor = (categoryId?: CategoryId) =>
  categoryId ? badgeClass[categoryId] : 'bg-ink'

export const navHoverClass: Record<CategoryId, string> = {
  1: 'hover:text-cat-1',
  2: 'hover:text-brand',
  3: 'hover:text-cat-3',
  4: 'hover:text-cat-4',
}

export const navHover = (categoryId?: CategoryId) =>
  categoryId ? navHoverClass[categoryId] : 'hover:text-brand'

export const categoryLinkClass: Record<CategoryId, string> = {
  1: 'text-cat-1 hover:underline',
  2: 'text-brand hover:underline',
  3: 'text-cat-3 hover:underline',
  4: 'text-cat-4 hover:underline',
}

/* Section headings + labels. */
export const recentHeading = 'Recent Posts'
export const featuredHeading = 'Featured Posts'
export const mostReadHeading = 'Most Read'
export const categoriesHeading = 'Categories'
export const recentSectionLabel = 'Recent posts'
export const featuredGreyLabel = 'Featured posts'
export const postsSidebarLabel = 'Featured posts with sidebar'
export const sidebarLabel = 'Sidebar'

/* Post content — article-style titles from the live preview (paraphrased),
   seeded picsum placeholders, category badges + dates. */
export const recentPosts: Post[] = [
  {
    id: 1,
    title: 'Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically',
    category: 'Web Design',
    categoryId: 1,
    date: 'January 21, 2018',
    seed: 'newsstand-1',
  },
  {
    id: 2,
    title: 'Why Node.js Is The Coolest Kid On The Backend Development Block!',
    category: 'JavaScript',
    categoryId: 2,
    date: 'January 20, 2018',
    seed: 'newsstand-2',
  },
  {
    id: 3,
    title: 'Tell-A-Tool: Guide To Web Design And Development Tools',
    category: 'Web Design',
    categoryId: 1,
    date: 'January 18, 2018',
    seed: 'newsstand-3',
  },
  {
    id: 4,
    title: 'Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks',
    category: 'JavaScript',
    categoryId: 2,
    date: 'January 16, 2018',
    seed: 'newsstand-4',
  },
  {
    id: 5,
    title: 'Why TypeScript Is Taking Over Frontend Development',
    category: 'TypeScript',
    categoryId: 4,
    date: 'January 14, 2018',
    seed: 'newsstand-5',
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox: When To Use Which Layout Module',
    category: 'CSS',
    categoryId: 3,
    date: 'January 12, 2018',
    seed: 'newsstand-6',
  },
]

/* Grey-band featured section (reference `section-grey`): two large cards. */
export const featuredLarge: Post[] = [
  {
    id: 7,
    title: 'Why Node.js Is The Coolest Kid On The Backend Development Block!',
    category: 'JavaScript',
    categoryId: 2,
    date: 'January 20, 2018',
    seed: 'newsstand-7',
  },
  {
    id: 8,
    title: 'Tell-A-Tool: Guide To Web Design And Development Tools',
    category: 'Web Design',
    categoryId: 1,
    date: 'January 18, 2018',
    seed: 'newsstand-8',
  },
]

/* Second posts section (white): four cards + ad box. */
export const featuredPosts: Post[] = [
  {
    id: 9,
    title: 'Why TypeScript Is Taking Over Frontend Development',
    category: 'TypeScript',
    categoryId: 4,
    date: 'January 14, 2018',
    seed: 'newsstand-9',
  },
  {
    id: 10,
    title: 'CSS Grid vs Flexbox: When To Use Which Layout Module',
    category: 'CSS',
    categoryId: 3,
    date: 'January 12, 2018',
    seed: 'newsstand-10',
  },
  {
    id: 11,
    title: 'Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically',
    category: 'Web Design',
    categoryId: 1,
    date: 'January 21, 2018',
    seed: 'newsstand-11',
  },
  {
    id: 12,
    title: 'Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks',
    category: 'JavaScript',
    categoryId: 2,
    date: 'January 16, 2018',
    seed: 'newsstand-12',
  },
]

/* Sidebar "Most Read" widget rows (thumbnail + 15px title). */
export const mostRead: Post[] = [
  {
    id: 13,
    title: 'The Best Free Fonts For Your Next Project',
    category: 'Web Design',
    categoryId: 1,
    date: 'January 21, 2018',
    seed: 'newsstand-13',
  },
  {
    id: 14,
    title: 'A Practical Guide To Modern JavaScript Modules',
    category: 'JavaScript',
    categoryId: 2,
    date: 'January 20, 2018',
    seed: 'newsstand-14',
  },
  {
    id: 15,
    title: 'CSS Custom Properties: Theming Without Pain',
    category: 'CSS',
    categoryId: 3,
    date: 'January 18, 2018',
    seed: 'newsstand-15',
  },
  {
    id: 16,
    title: "TypeScript's Strict Mode: Tips And Tricks",
    category: 'TypeScript',
    categoryId: 4,
    date: 'January 16, 2018',
    seed: 'newsstand-16',
  },
]

/* Off-canvas aside drawer (reference `#nav-aside`). */
export const drawerLabel = 'Menu drawer'
export const drawerNavLabel = 'Drawer'
export const drawerPosts = recentPosts.slice(0, 3)
export const followLabel = 'Follow us'

/* Ad placeholder (reference ad box). */
export const adLabel = 'Advertisement'
export const adImgAlt = 'Advertisement placeholder'
export const adImage = 'https://picsum.photos/seed/newsstand-17/300/250'

export interface CategoryCount {
  name: string
  categoryId: CategoryId
  count: number
}

/* Categories widget counts from the live preview. */
export const categoryCounts: CategoryCount[] = [
  { name: 'Web Design', categoryId: 1, count: 340 },
  { name: 'JavaScript', categoryId: 2, count: 74 },
  { name: 'TypeScript', categoryId: 4, count: 41 },
  { name: 'CSS', categoryId: 3, count: 35 },
]

export const tags = [
  'Chrome',
  'CSS',
  'Tutorial',
  'Backend',
  'TypeScript',
  'Design',
  'Development',
  'JavaScript',
  'Website',
]

/* Footer (reference `footer#footer` — light, not dark). */
export const footerLabel = 'Footer'
export const footerNavLabel = 'Footer links'
export const footerNavLinks = ['Privacy Policy', 'Advertisement']
export const aboutHeading = 'About Us'
export const aboutLinks = ['About Us', 'Join Us', 'Contacts']
export const categoryLinks = ['Web Design', 'JavaScript', 'CSS', 'TypeScript']
export const newsletterHeading = 'Join our Newsletter'
export const newsletterLabel = 'Email address'
export const newsletterPlaceholder = 'Enter your email'
export const subscribeLabel = 'Subscribe'
export const newsletterThanks = 'Thanks for subscribing!'
export const copyrightLine =
  'All rights reserved | This template is made with ♥ by free-react-templates'

export type SocialName = 'facebook' | 'x' | 'pinterest' | 'youtube' | 'tiktok'

export interface SocialLink {
  name: SocialName
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'x', label: 'X', href: '#' },
  { name: 'pinterest', label: 'Pinterest', href: '#' },
  { name: 'youtube', label: 'YouTube', href: '#' },
  { name: 'tiktok', label: 'TikTok', href: '#' },
]

export const socialLabel = 'Social links'

/* Inline brand icon paths — lucide-react removed brand icons, so these are
   simple-icons (MIT) path data for the footer/social stacks, mirroring the
   reference's Font Awesome marks (fa-facebook, fa-twitter, fa-pinterest,
   fa-youtube, fa-tiktok). */
export const socialPaths: Record<SocialName, string> = {
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  pinterest:
    'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  youtube:
    'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  tiktok:
    'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
}
