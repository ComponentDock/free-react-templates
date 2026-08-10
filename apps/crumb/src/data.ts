export const brandName = 'Crumb'

export const navLinks = ['Home', 'Pages', 'Categories', 'Travel', 'About', 'Contact'] as const

/* ── Top bar ─────────────────────────────────────────────────────────── */

export const socialLinks = [
  'facebook',
  'twitter',
  'google-plus',
  'linkedin',
  'instagram',
  'vimeo',
  'youtube',
] as const
export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  'google-plus': 'Google Plus',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  vimeo: 'Vimeo',
  youtube: 'YouTube',
}

export const searchPlaceholder = 'Search and hit enter...'
export const searchLabel = 'Search'
export const menuToggleLabel = 'Toggle menu'
export const mobileMenuLabel = 'Mobile'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Posts ───────────────────────────────────────────────────────────── */

export interface Post {
  title: string
  date: string
  category: string
  author: string
  views: number
  comments: number
  excerpt: string
  seed: string
}

const makePost = (
  title: string,
  excerpt: string,
  seed: string,
  extra: Partial<Post> = {},
): Post => ({
  title,
  date: 'May 8, 2018',
  category: 'Foody',
  author: 'Sarah Jenks',
  views: 192,
  comments: 8,
  excerpt,
  seed,
  ...extra,
})

export const heroSlides: readonly Post[] = [
  makePost(
    "A Closer Look At Our Front Porch Items From Lowe's",
    'Warm wood tones, soft linen, and a few favorite finds from Lowe’s tie the whole corner together.',
    'crumb-hero-1',
    { comments: 35 },
  ),
  makePost(
    '12 Beautiful Vegan Panna Cottas',
    'Silky coconut cream, a whisper of vanilla, and a rainbow of berries — twelve panna cottas worth bookmarking.',
    'crumb-hero-2',
    { comments: 24 },
  ),
  makePost(
    'Quick Vegan Enchiladas with Sweet Potato Sauce',
    'Smoky sweet potatoes and black beans rolled in tortillas, smothered in a rich, silky sauce.',
    'crumb-hero-3',
    { comments: 19 },
  ),
  makePost(
    'Instant Pot Mushroom Stroganoff with Vodka',
    'A cozy, earthy stroganoff with a splash of vodka — on the table in under half an hour.',
    'crumb-hero-4',
    { comments: 12 },
  ),
]

export const featuredPosts: readonly Post[] = [
  makePost(
    'Fried Pizzas on parchment paper with basil.',
    'Crispy pan-fried pizza dough topped with melty cheese and fresh basil.',
    'crumb-featured-1',
  ),
  makePost(
    'Quick Vegan Enchiladas with Sweet Potato Sauce',
    'A fast, plant-based dinner that tastes like it simmered all day.',
    'crumb-featured-2',
  ),
  makePost(
    'Eleven Slushie Cocktails I Bookmarked',
    'Frozen, fruity, and dangerously easy to make at home.',
    'crumb-featured-3',
  ),
  makePost(
    'Homemade Strawberry Almond Milk',
    'Two ingredients and five minutes — so much better than the carton.',
    'crumb-featured-4',
  ),
  makePost(
    'Kitchen Sink Sunflower Salad in a bow.',
    'Crunchy greens, roasted seeds, and whatever the fridge has to offer.',
    'crumb-featured-5',
  ),
]

export const blogPosts: readonly Post[] = [
  makePost(
    "A Closer Look At Our Front Porch Items From Lowe's",
    'Our front porch refresh is finally complete — warm wood tones, soft linen, and a few favorite finds from Lowe’s that tie the whole corner together.',
    'crumb-post-1',
  ),
  makePost(
    '12 Beautiful Vegan Panna Cottas',
    'Silky coconut cream, a whisper of vanilla, and a rainbow of berries — twelve vegan panna cottas that taste as good as they look.',
    'crumb-post-2',
  ),
  makePost(
    'Quick Vegan Enchiladas with Sweet Potato Sauce',
    'Smoky sweet potatoes, black beans, and a rich enchilada sauce make this quick weeknight dinner a family favorite.',
    'crumb-post-3',
  ),
  makePost(
    'Instant Pot Mushroom Stroganoff with Vodka',
    'A cozy, earthy mushroom stroganoff with a splash of vodka — ready in the Instant Pot in under half an hour.',
    'crumb-post-4',
  ),
  makePost(
    'The Most Popular Recipe Last Month',
    'From creamy pastas to crispy skillets, here is the recipe our readers could not stop making last month.',
    'crumb-post-5',
  ),
]

export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'
export const featuredLabel = 'Featured posts'
export const featuredIndicatorLabel = (n: number): string => `Show featured post ${n}`

export const continueReadingLabel = 'Continue Reading'
export const bylinePrefix = 'by'
export const viewsSuffix = 'Views'
export const commentsSuffix = 'Comments'
export const newerLabel = 'Newer'
export const olderLabel = 'Older'
export const blogLabel = 'Blog posts'

/* ── Sidebar ─────────────────────────────────────────────────────────── */

export const aboutHeading = 'About Me'
export const aboutSignature = 'Sarah'
export const aboutBio =
  'Hi, I’m Sarah — recipe developer, food photographer, and the voice behind Crumb. I believe weeknight dinners should be delicious, doable, and a little bit beautiful.'
export const aboutPhotoAlt = 'Portrait of Sarah, the Crumb author'

export const subscribeHeading = 'Subscribe & Follow'

export const latestPostsHeading = 'Latest Posts'
export interface LatestPost {
  title: string
  date: string
  seed: string
}
export const latestPosts: readonly LatestPost[] = [
  {
    title: 'Vegetarian Spring Pho with Sweet Potato Noodles and Heirloom Beans',
    date: 'May 8, 2018',
    seed: 'crumb-latest-1',
  },
  {
    title: 'Grain-Free Sweet & Savory Activated Walnut Granola',
    date: 'May 6, 2018',
    seed: 'crumb-latest-2',
  },
  {
    title: 'Self-Care Interview Series: Gabrielle Russomagno',
    date: 'May 4, 2018',
    seed: 'crumb-latest-3',
  },
  {
    title: 'Green Skillet Pizza with Asparagus and Pesto',
    date: 'May 2, 2018',
    seed: 'crumb-latest-4',
  },
  {
    title: "A Closer Look At Our Front Porch Items From Lowe's",
    date: 'April 30, 2018',
    seed: 'crumb-latest-5',
  },
]

export const newsletterHeading = 'Newsletter'
export const newsletterText =
  'Subscribe our newsletter for get notification about new updates, information discount, etc.'
export const newsletterPlaceholder = 'Your email'
export const newsletterSubmitLabel = 'Subscribe to the newsletter'
export const newsletterSuccess = 'Thanks for subscribing!'

export const tagsHeading = 'Popular Tags'
export const popularTags = [
  'Creative',
  'Unique',
  'Template',
  'Photography',
  'Travel',
  'Lifestyle',
  'Food',
  'Idea',
] as const

/* ── Instagram strip ─────────────────────────────────────────────────── */

export const instagramHeading = 'Follow Us On Instagram'
export const instagramHandle = '@crumbblog'
export const instagramTiles = Array.from({ length: 6 }, (_, i) => `crumb-ig-${i + 1}`)

/* ── Footer ──────────────────────────────────────────────────────────── */

export const footerCopyright = 'All rights reserved'
export const footerCredit = 'Made with ♥ by Crumb'
