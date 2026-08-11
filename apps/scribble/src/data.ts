export const siteName = 'Scribble'

export const siteDescription =
  'Scribble is a simple and yet cool blog template for writers who love words.'

export const navLabel = 'Primary'

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Scroll', href: '#' },
  { label: 'Contact', href: '#' },
]

export const searchLabel = 'Search for:'
export const searchPlaceholder = 'Type here to search...'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const scrollTopLabel = 'Scroll to top'
export const logoLabel = 'Scribble — home'

export const footerCopyright = '© 2026 Scribble HTML Template. Crafted with ♥ by Scribble.'

export type SocialName = 'twitter' | 'youtube' | 'facebook' | 'vimeo' | 'behance' | 'rss'

export interface SocialLink {
  name: SocialName
  label: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: 'twitter', label: 'Twitter', href: '#' },
  { name: 'youtube', label: 'YouTube', href: '#' },
  { name: 'facebook', label: 'Facebook', href: '#' },
  { name: 'vimeo', label: 'Vimeo', href: '#' },
  { name: 'behance', label: 'Behance', href: '#' },
  { name: 'rss', label: 'RSS', href: '#' },
]

/* Inline brand icon paths — lucide-react removed brand icons, so these are
   simple-icons (MIT) path data for the rail social stack, mirroring the
   reference's Font Awesome marks (fa-twitter, fa-youtube-play, fa-facebook,
   fa-vimeo, fa-behance, fa-rss). */
export const socialPaths: Record<SocialName, string> = {
  twitter:
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  youtube:
    'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  vimeo:
    'M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 003.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z',
  behance:
    'M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z',
  rss: 'M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z',
}

export interface Post {
  title: string
  category: string
  date: string
}

export interface FeaturedPost extends Post {
  excerpt: string
}

/* Content mirrors the reference home DOM: one featured post (category, date,
   headline, excerpt, read-more arrow) + five regular posts, all dated
   February 12, 2016. */
export const featuredPost: FeaturedPost = {
  title: 'Whatever is begun in anger ends in shame',
  category: 'Crafting',
  date: 'February 12, 2016',
  excerpt:
    'Once I had learned the language of this water and could name every bend and marker along the great river as easily as the letters of the alphabet, I found I had gained a great deal — and lost something too. I still keep in mind a certain wonderful sunset I witnessed while steamboating.',
}

export const posts: Post[] = [
  { title: 'I like to reinvent myself', category: 'Science', date: 'February 12, 2016' },
  { title: 'Everything is design', category: 'Art', date: 'February 12, 2016' },
  { title: "It's all about experience", category: 'Life', date: 'February 12, 2016' },
  { title: 'This is not my code', category: 'Coding', date: 'February 12, 2016' },
  { title: 'Support human activity', category: 'Advocacy', date: 'February 12, 2016' },
]

export const readMoreLabel = 'Read more'
export const loadMoreLabel = 'LOAD MORE ENTRIES'

export const skipLabel = 'Skip to content'
export const documentTitle = 'Scribble — Blog Template'
