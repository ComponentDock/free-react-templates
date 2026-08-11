export const siteName = 'Rekindle'
export const skipLabel = 'Skip to main content'

export const leftLinks = ['Home', 'Category', 'Archive'] as const
export const rightLinks = ['Elements', 'Blog Detail', 'Contact'] as const

export interface BannerSlide {
  seed: string
  alt: string
}

export const bannerSlides: BannerSlide[] = [
  { seed: 'rekindle-banner-1', alt: 'Editorial photograph one' },
  { seed: 'rekindle-banner-2', alt: 'Editorial photograph two' },
  { seed: 'rekindle-banner-3', alt: 'Editorial photograph three' },
  { seed: 'rekindle-banner-4', alt: 'Editorial photograph four' },
]

export const bannerHeadline = 'Make the world a better place with camera'
export const shareStripLabel = 'sharre now'
export const slideIndicatorLabel = (index: number) => `Go to slide ${index + 1}`

export const bannerAutoplayMs = 4000

export interface BlogPost {
  seed: string
  title: string
  date: string
  comments: string
  excerpt: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    seed: 'rekindle-1',
    title: "There's goting to be a musical about meghan",
    date: '20th Nov, 2018',
    comments: '05',
    excerpt:
      "Creepeth green light appear let rule only you're divide and lights moving and isn't given creeping deep. Earth day signs made moved one.",
    category: 'Travel',
  },
  {
    seed: 'rekindle-2',
    title: 'Forest responds to consultation smoking in al fresco',
    date: '18th Nov, 2018',
    comments: '03',
    excerpt:
      "Won't greater them waters there air also without years the place. Given appear it seas replenish every midst and every moving.",
    category: 'Fashion',
  },
  {
    seed: 'rekindle-3',
    title: 'The quiet ritual of a morning editorial desk',
    date: '15th Nov, 2018',
    comments: '08',
    excerpt:
      "Above bearing him dry whales you're them all deep evening firmament. Creepeth made hath their in without of stars gathering.",
    category: 'Lifestyle',
  },
  {
    seed: 'rekindle-4',
    title: 'Small studios, big ideas: a field notebook',
    date: '12th Nov, 2018',
    comments: '02',
    excerpt:
      "Seasons you'll under two they're green said light. Grass creeping over signs creature from created moveth life can't lights.",
    category: 'Travel',
  },
  {
    seed: 'rekindle-5',
    title: 'A wander through the autumn market district',
    date: '09th Nov, 2018',
    comments: '11',
    excerpt:
      'Likeness grass had he winged he over our grass. Midst light own man tree fly kind after place there beginning blessed.',
    category: 'Shopping',
  },
  {
    seed: 'rekindle-6',
    title: 'Print is not dead: notes from a letterpress tour',
    date: '06th Nov, 2018',
    comments: '04',
    excerpt:
      "Two signs behold made don't called, fill lights. Fruitful days moveth sixth, own shall green their won't creeping kind.",
    category: 'Design',
  },
  {
    seed: 'rekindle-7',
    title: 'Recipe: slow bread for slow mornings',
    date: '03rd Nov, 2018',
    comments: '07',
    excerpt:
      "Place moving made waters you'll deep of, land. Under male gathered made sea, midst won't morning lights creature seas.",
    category: 'Food',
  },
  {
    seed: 'rekindle-8',
    title: "The travel photographer's essential kit",
    date: '01st Nov, 2018',
    comments: '09',
    excerpt:
      "Said him, from she'd form sea. Set appear sixth sea signs living midst. Grass can't sea seasons life without she'd image.",
    category: 'Travel',
  },
]

export const readMoreLabel = 'Read More'

export const paginationLabel = 'Pagination'
export const prevLabel = 'Previous'
export const nextLabel = 'Next'
export const pageNumbers = ['01', '02', '03', '04', '09'] as const

export interface CategoryRow {
  name: string
  count: string
}

export const categoryRows: CategoryRow[] = [
  { name: 'Fashion', count: '59' },
  { name: 'Travel', count: '09' },
  { name: 'Lifestyle', count: '24' },
  { name: 'Shopping', count: '44' },
  { name: 'Food', count: '15' },
]

export interface PopularPost {
  seed: string
  title: string
  byline: string
}

export const popularPosts: PopularPost[] = [
  {
    seed: 'rekindle-popular-1',
    title: 'Keep eyes open and keep moving forwards',
    byline: 'Mate Winston | Dec 15',
  },
  {
    seed: 'rekindle-popular-2',
    title: 'The art of leaving quietly',
    byline: 'Arielle Ford | Dec 12',
  },
  {
    seed: 'rekindle-popular-3',
    title: 'Notes on slow living and fast cities',
    byline: 'Jonas Reed | Dec 08',
  },
  {
    seed: 'rekindle-popular-4',
    title: 'Why we still collect paper maps',
    byline: 'Mara Ellis | Dec 02',
  },
]

export const sidebarSearchPlaceholder = 'Search Posts'
export const sidebarSearchLabel = 'Search'

export const instagramTitle = 'Instagram'
export const instagramPostLabel = (index: number) => `Instagram post ${index + 1}`
export const instagramSidebarCount = 6

export const categoriesTitle = 'Catgories'

export const popularTitle = 'Popular Posts'

export const newsletterTitle = 'Newsletter'
export const newsletterEmailPlaceholder = 'Enter email'
export const subscribeLabel = 'Subscribe'

export const shareTitle = 'Share this post'

export interface SocialLink {
  name: string
  label: string
  path: string
}

/** Inline brand-icon paths (simple-icons). lucide-react removed brand
    icons, so these are hand-inlined SVGs — never copied assets. */
export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    label: 'Share on Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Twitter',
    label: 'Share on Twitter',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    name: 'Pinterest',
    label: 'Share on Pinterest',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  },
  {
    name: 'Instagram',
    label: 'Share on Instagram',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  {
    name: 'Dribbble',
    label: 'Share on Dribbble',
    path: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z',
  },
  {
    name: 'Behance',
    label: 'Share on Behance',
    path: 'M7.263 2.292c1.276 0 2.4.206 3.368.618.97.412 1.773.96 2.407 1.653.636.69 1.107 1.474 1.423 2.351.314.874.472 1.778.472 2.71 0 1.175-.223 2.239-.67 3.187-.447.949-1.098 1.749-1.953 2.406 1.122.49 2.026 1.238 2.71 2.243.684 1.005 1.027 2.16 1.027 3.465 0 1.02-.196 1.92-.586 2.71-.392.79-.93 1.448-1.614 1.973-.687.528-1.487.923-2.407 1.192-.92.268-1.9.402-2.94.402H0V2.292h7.263zm-.357 9.132c.693 0 1.297-.14 1.812-.42.514-.28.944-.655 1.29-1.127.345-.473.607-1.012.787-1.62.18-.606.268-1.233.268-1.879 0-1.017-.186-1.843-.558-2.478-.373-.634-.955-1.088-1.747-1.363-.793-.274-1.62-.412-2.482-.412H3.51v7.3h3.395zm-.178 8.443c.907 0 1.716-.147 2.43-.442.713-.295 1.297-.708 1.748-1.237.453-.53.792-1.15 1.024-1.865.23-.714.346-1.482.346-2.305 0-1.916-.567-3.397-1.7-4.442-1.133-1.044-2.584-1.566-4.352-1.566H3.51v11.858h3.218zm8.232 1.65c-.15.178-.392.267-.727.267-.184 0-.364-.03-.542-.089-.178-.058-.345-.13-.5-.215-.155-.084-.293-.162-.414-.237l1.46-2.86c.177.12.41.255.698.404.29.15.623.224 1.002.224.327 0 .61-.06.848-.18.237-.118.398-.288.484-.51.085-.222.127-.472.127-.75v-.446H16.06c-.548 0-1.027-.084-1.438-.25-.412-.168-.757-.4-1.035-.697-.278-.298-.492-.65-.64-1.058-.15-.408-.224-.855-.224-1.342 0-.633.12-1.19.357-1.675.238-.484.55-.886.938-1.205.387-.32.83-.56 1.327-.72.5-.16 1.014-.238 1.547-.238.615 0 1.165.11 1.65.335.484.223.895.537 1.235.938.34.403.598.885.774 1.444.177.56.265 1.178.265 1.853v1.518c0 .915-.12 1.728-.357 2.44-.238.714-.567 1.317-.99 1.81-.422.494-.92.875-1.496 1.142-.574.268-1.19.402-1.848.402-.754 0-1.35-.154-1.79-.462-.438-.31-.77-.63-.99-.965l1.358-2.516c.148.15.375.36.68.625.306.268.617.402.935.402.245 0 .442-.08.59-.243zm1.505-8.325c-.274 0-.512.06-.715.178-.203.12-.377.275-.524.468-.146.193-.262.41-.348.655-.084.243-.126.49-.126.736 0 .437.084.778.253 1.024.17.244.43.367.785.367h2.046c-.025-.33-.084-.63-.178-.9-.095-.268-.225-.5-.393-.692-.17-.192-.375-.343-.618-.454-.244-.108-.52-.163-.832-.163-.14 0-.275.009-.402.027-.13.018-.263.03-.402.04-.14.008-.273.017-.402.024-.13.008-.233.012-.31.012zm1.216-8.24c.72 0 1.37.12 1.947.357.577.24 1.063.567 1.456.98.395.414.695.9.903 1.455.208.556.313 1.153.313 1.79h-2.074c0-.375-.05-.726-.15-1.05-.103-.325-.258-.61-.466-.854-.208-.245-.472-.438-.79-.58-.32-.14-.697-.212-1.133-.212-.404 0-.764.08-1.08.238-.318.16-.588.374-.81.646-.222.27-.392.585-.512.945-.12.36-.178.743-.178 1.147v.384c0 .466.06.905.178 1.318.118.412.295.77.53 1.074.235.303.527.544.876.72.348.178.752.267 1.212.267.486 0 .894-.103 1.224-.31.33-.206.593-.444.788-.713.195-.27.336-.538.424-.803.09-.268.15-.494.183-.68h2.1c-.06.48-.19.963-.39 1.444-.203.483-.492.922-.868 1.318-.376.398-.838.718-1.386.965-.55.244-1.18.368-1.895.368-.765 0-1.45-.137-2.054-.412-.604-.274-1.116-.652-1.537-1.133-.42-.48-.74-1.05-.963-1.706-.223-.654-.334-1.36-.334-2.117v-.846c0-.757.113-1.46.34-2.11.226-.65.546-1.214.96-1.694.416-.48.91-.855 1.486-1.127.575-.273 1.21-.41 1.903-.41z',
  },
]

export const shareWidgetNames = ['Facebook', 'Twitter', 'Pinterest', 'Instagram'] as const
export const followUsNames = ['Facebook', 'Twitter', 'Dribbble', 'Behance'] as const

export const footerAboutTitle = 'About Us'
export const footerAboutBlurb =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'

export const footerNewsletterTitle = 'Newsletter'
export const footerNewsletterTagline = 'Stay update with our latest'
export const footerNewsletterPlaceholder = 'Email Address'
export const footerNewsletterLabel = 'Subscribe to newsletter'

export const footerInstagramTitle = 'Instragram Feed'
export const footerInstagramCount = 8

export const followUsTitle = 'Follow Us'
export const followUsTagline = 'Let us be social'

export const copyright = 'Copyright © All rights reserved'
export const credit = 'This template is made with ♥ by Colorlib'
