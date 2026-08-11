export const siteName = 'Montage'
export const documentTitle = 'Montage — Video Magazine Template'
export const skipLabel = 'Skip to content'
export const addBannerLabel = 'ADD BANNER'

export const navLabel = 'Main'
export const mobileNavLabel = 'Mobile'

export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: string[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#', active: true },
  { label: 'Videos', href: '#' },
  {
    label: 'Pages',
    href: '#',
    children: ['Home', 'Catagory', 'Video Post', 'Single Post', 'Contact'],
  },
  {
    label: 'Features',
    href: '#',
    children: ['Home', 'Catagory', 'Video Post', 'Single Post', 'Contact'],
  },
  { label: 'Music', href: '#' },
  { label: 'Contact', href: '#' },
]

export const searchPlaceholder = 'Search'
export const searchLabel = 'Search site'
export const searchSubmitLabel = 'Submit search'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export interface PostMeta {
  author: string
  date: string
  comments: string
  likes: string
}

export const defaultMeta: PostMeta = {
  author: 'James Smith',
  date: 'July 23, 2018',
  comments: '5',
  likes: '12k',
}

export const featuredTag = 'FEATURED'
export const playLabel = (title: string) => `Play video: ${title}`

export interface HeroCard {
  title: string
  seed: string
  height: number
}

export const heroCards: HeroCard[] = [
  { title: 'Watch a tiny cat taking a bath', seed: 'montage-1', height: 700 },
  { title: 'Spain: Take a virtual tour', seed: 'montage-2', height: 230 },
  { title: '5 Tips to create your garden', seed: 'montage-3', height: 230 },
  { title: '10 Movies you need to see', seed: 'montage-4', height: 230 },
]

export const heroImage = (card: HeroCard) =>
  `https://picsum.photos/seed/${card.seed}/${card.height > 600 ? 800 : 400}/${card.height}`

export type TabId = 'latest' | 'topViewed' | 'seeAll'

export interface VideoTab {
  id: TabId
  label: string
}

export const videoTabs: VideoTab[] = [
  { id: 'latest', label: 'Latest' },
  { id: 'topViewed', label: 'Top Viewed' },
  { id: 'seeAll', label: 'See All Videos' },
]

export interface VideoCard {
  title: string
  seed: string
  meta: PostMeta
}

export const tabCards: Record<TabId, VideoCard[]> = {
  latest: [
    { title: 'Vacation Blog: Ibiza', seed: 'montage-5', meta: defaultMeta },
    { title: 'Top Video Games', seed: 'montage-6', meta: defaultMeta },
    { title: 'Street Food Tours', seed: 'montage-7', meta: defaultMeta },
  ],
  topViewed: [
    { title: 'Top Video Games', seed: 'montage-6', meta: defaultMeta },
    { title: 'Vacation Blog: Ibiza', seed: 'montage-5', meta: defaultMeta },
    { title: 'Street Food Tours', seed: 'montage-7', meta: defaultMeta },
  ],
  seeAll: [
    { title: 'Street Food Tours', seed: 'montage-7', meta: defaultMeta },
    { title: 'Vacation Blog: Ibiza', seed: 'montage-5', meta: defaultMeta },
    { title: 'Top Video Games', seed: 'montage-6', meta: defaultMeta },
  ],
}

export const prevLabel = 'Previous videos'
export const nextLabel = 'Next videos'
export const tabListLabel = 'Video categories'

export const travelHeading = 'Travel Videos'
export const travelSectionLabel = 'Travel videos'
export const travelFeatured: VideoCard = {
  title: 'Watch a tiny cat taking a bath',
  seed: 'montage-1',
  meta: defaultMeta,
}

export const travelRows: VideoCard[] = [
  { title: 'New York Trip', seed: 'montage-8', meta: defaultMeta },
  { title: 'Coffee in Paris', seed: 'montage-9', meta: defaultMeta },
  { title: 'Summer Holiday', seed: 'montage-10', meta: defaultMeta },
  { title: 'Discover the islands', seed: 'montage-11', meta: defaultMeta },
]

export const cardImage = (card: VideoCard, w = 400, h = 250) =>
  `https://picsum.photos/seed/${card.seed}/${w}/${h}`

export const rowImage = (card: VideoCard) => cardImage(card, 120, 90)

export interface SmallColumn {
  heading: string
  featured: VideoCard
  rows: VideoCard[]
}

export const smallColumns: SmallColumn[] = [
  {
    heading: 'Fashion',
    featured: { title: 'Vacation Blog: Ibiza', seed: 'montage-5', meta: defaultMeta },
    rows: [
      { title: 'Fashion Week 2018 -Spring/summer', seed: 'montage-12', meta: defaultMeta },
      { title: '2018 Summer shoes Collection', seed: 'montage-13', meta: defaultMeta },
      { title: 'The New Collection of Dior', seed: 'montage-14', meta: defaultMeta },
    ],
  },
  {
    heading: 'Technology',
    featured: { title: 'New Iphone release', seed: 'montage-15', meta: defaultMeta },
    rows: [
      { title: 'Fashion Week 2018 -Spring/summer', seed: 'montage-12', meta: defaultMeta },
      { title: '2018 Summer shoes Collection', seed: 'montage-13', meta: defaultMeta },
      { title: 'The New Collection of Dior', seed: 'montage-14', meta: defaultMeta },
    ],
  },
  {
    heading: 'July Top',
    featured: { title: 'Top Video Games', seed: 'montage-6', meta: defaultMeta },
    rows: [
      { title: 'Fashion Week 2018 -Spring/summer', seed: 'montage-12', meta: defaultMeta },
      { title: '2018 Summer shoes Collection', seed: 'montage-13', meta: defaultMeta },
      { title: 'The New Collection of Dior', seed: 'montage-14', meta: defaultMeta },
    ],
  },
]

export const smallSectionLabel = 'Small videos'

export interface FooterColumn {
  title: string
  links?: string[]
  text?: string
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Useful Links',
    links: ['About us', 'Categories', 'Testimonials', 'Contact Us', 'Jobs', 'Terms', 'Conditions'],
  },
  {
    title: 'About Us',
    text: 'Montage is a video magazine template for sharing stories, travel diaries and the best of the web.',
  },
  { title: 'Video Categories', links: ['Travel', 'Games'] },
]

export const footerLabel = 'Footer'
export const footerCopyright = 'All rights reserved | This template is made with ♥ by Montage'

export type SocialName = 'pinterest' | 'facebook' | 'twitter' | 'dribbble' | 'behance' | 'linkedin'

export interface SocialLink {
  name: SocialName
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: 'pinterest', label: 'Pinterest', href: '#' },
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'twitter', label: 'Twitter', href: '#' },
  { name: 'dribbble', label: 'Dribbble', href: '#' },
  { name: 'behance', label: 'Behance', href: '#' },
  { name: 'linkedin', label: 'LinkedIn', href: '#' },
]

export const socialLabel = 'Social links'

/* Inline brand icon paths — lucide-react removed brand icons, so these are
   simple-icons (MIT) path data for the footer social stack, mirroring the
   reference's Font Awesome marks (fa-pinterest, fa-facebook, fa-twitter,
   fa-dribbble, fa-behance, fa-linkedin). */
export const socialPaths: Record<SocialName, string> = {
  pinterest:
    'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  twitter:
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  dribbble:
    'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z',
  behance:
    'M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
}
