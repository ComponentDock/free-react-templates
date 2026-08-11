export const siteName = 'Vellum'
export const skipLabel = 'Skip to main content'

export const navLinks = ['Home', 'Articles', 'Team', 'Contact'] as const

export const heroImageAlt = 'Featured hero photograph'
export const heroSubheading = 'Hello! Welcome to'
export const heroHeadline = 'Vellum blog'
export const heroParagraph =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
export const scrollLabel = 'Scroll down to the blog'

export interface BlogEntry {
  seed: string
  category: string
  title: string
  date: string
  readTime: string
}

export const blogEntries: BlogEntry[] = [
  {
    seed: 'vellum-1',
    category: 'Illustration',
    title: 'Build a Website in Minutes with Adobe Templates',
    date: '11/13/2019',
    readTime: '12 min read',
  },
  {
    seed: 'vellum-2',
    category: 'Application',
    title: 'The Untapped Potential of Progressive Web Apps',
    date: '11/08/2019',
    readTime: '9 min read',
  },
  {
    seed: 'vellum-3',
    category: 'Design',
    title: 'A Field Guide to Editorial Typography',
    date: '11/02/2019',
    readTime: '15 min read',
  },
  {
    seed: 'vellum-4',
    category: 'Illustration',
    title: 'Sketching the City: A Daily Drawing Practice',
    date: '10/27/2019',
    readTime: '8 min read',
  },
  {
    seed: 'vellum-5',
    category: 'Illustration',
    title: 'From Pencil to Pixel: Modern Illustration Workflows',
    date: '10/20/2019',
    readTime: '11 min read',
  },
  {
    seed: 'vellum-6',
    category: 'Illustration',
    title: 'Why Editorial Illustrators Are Thriving Online',
    date: '10/14/2019',
    readTime: '7 min read',
  },
  {
    seed: 'vellum-7',
    category: 'Illustration',
    title: 'The Art of the Book Cover',
    date: '10/07/2019',
    readTime: '10 min read',
  },
  {
    seed: 'vellum-8',
    category: 'Illustration',
    title: 'Visual Storytelling for Small Brands',
    date: '09/29/2019',
    readTime: '13 min read',
  },
  {
    seed: 'vellum-9',
    category: 'Illustration',
    title: 'A Beginner\u2019s Guide to Watercolor Textures',
    date: '09/22/2019',
    readTime: '6 min read',
  },
]

export interface SocialLink {
  name: string
  label: string
  path: string
}

/** Inline brand-icon paths (simple-icons). lucide-react removed brand
    icons, so these are hand-inlined SVGs — never copied assets. */
export const socialLinks: SocialLink[] = [
  {
    name: 'Twitter',
    label: 'Share on Twitter',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    name: 'Facebook',
    label: 'Share on Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Instagram',
    label: 'Share on Instagram',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
]

export const paginationLabel = 'Pagination'
export const prevLabel = 'Previous page'
export const nextLabel = 'Next page'
export const pageCount = 5
export const activePage = 1

export const footerBlurb =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.'

export interface NewsItem {
  headline: string
  meta: string
}

export const latestNews: NewsItem[] = [
  {
    headline: 'Even the all-powerful Pointing has no control about the blind texts',
    meta: 'Oct. 16, 2019 \u00B7 Admin \u00B7 19',
  },
  {
    headline: 'Separated they live in Bookmarksgrove right at the coast',
    meta: 'Oct. 10, 2019 \u00B7 Admin \u00B7 12',
  },
]

export const informationLinks = ['Home', 'About', 'Articles', 'Contact'] as const

export const questionsTitle = 'Have a Questions?'
export const address = '203 Fake St. Mountain View, San Francisco, California, USA'
export const phone = '+2 392 3929 210'
export const email = 'info@yourdomain.com'

export const copyright = 'Copyright \u00A9 All rights reserved'
export const credit = 'This template is made with \u2665 by Colorlib'
