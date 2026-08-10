export const brandName = 'Trailhead'

export const navLinks = ['Homepage', 'Lifestyle', 'Inspiration', 'Technology', 'Latest'] as const

export const inspirationLinks = ['Architect', 'Minimal', 'Interior', 'Furniture'] as const

export const socialLinks = ['facebook', 'twitter', 'instagram', 'rss', 'envelope'] as const
export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  rss: 'RSS',
  envelope: 'Email',
}

export const menuToggleLabel = 'Toggle menu'
export const menuCloseLabel = 'Close menu'

export const imgUrl = (seed: string, w: number, h: number): string =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ── Category chips ──────────────────────────────────────────────────── */

export const chipColors = {
  nature: 'bg-nature',
  travel: 'bg-travel',
  lifestyle: 'bg-lifestyle',
  sports: 'bg-sports',
} as const
export type ChipCategory = keyof typeof chipColors

/* ── Hero slider ─────────────────────────────────────────────────────── */

export interface HeroSlide {
  title: string
  category: ChipCategory
  chipLabel: string
  author: string
  date: string
  seed: string
}

export const heroSlides: HeroSlide[] = [
  {
    title: 'The 20 Biggest Hiking Trails You Can Walk In 2019',
    category: 'nature',
    chipLabel: 'Nature',
    author: 'By Carrol Atkinson',
    date: 'February 10, 2019',
    seed: 'trailhead-hero-1',
  },
  {
    title: 'How To Pack A Lighter Backpack For The Long Haul',
    category: 'travel',
    chipLabel: 'Travel',
    author: 'By Erin Vance',
    date: 'February 12, 2019',
    seed: 'trailhead-hero-2',
  },
]

export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

/* ── Featured strip ──────────────────────────────────────────────────── */

export interface FeaturedEntry {
  title: string
  category: ChipCategory
  chipLabel: string
  seed: string
}

export const featuredEntries: FeaturedEntry[] = [
  {
    title: 'Summit Season: Five Peaks Worth The Early Start',
    category: 'travel',
    chipLabel: 'Travel',
    seed: 'trailhead-feat-1',
  },
  {
    title: 'Slow Sundays And Long Forest Walks',
    category: 'lifestyle',
    chipLabel: 'Lifestyle',
    seed: 'trailhead-feat-2',
  },
  {
    title: 'Spring Wildflower Routes To Hike This Month',
    category: 'nature',
    chipLabel: 'Nature',
    seed: 'trailhead-feat-3',
  },
]

/* ── Retro layout ────────────────────────────────────────────────────── */

export interface RetroCard {
  title: string
  category: ChipCategory
  chipLabel: string
  date: string
  seed: string
  tall?: boolean
}

export const retroCards: RetroCard[] = [
  {
    title: 'The Quiet Trails Of The High Sierra',
    category: 'travel',
    chipLabel: 'Travel',
    date: 'February 12, 2019',
    seed: 'trailhead-retro-1',
    tall: true,
  },
  {
    title: 'Morning Light Above The Timberline',
    category: 'nature',
    chipLabel: 'Nature',
    date: 'February 10, 2019',
    seed: 'trailhead-retro-2',
  },
  {
    title: 'Trail Running In The Rain',
    category: 'sports',
    chipLabel: 'Sports',
    date: 'February 8, 2019',
    seed: 'trailhead-retro-3',
  },
  {
    title: 'Camp Coffee And Slow Mornings',
    category: 'lifestyle',
    chipLabel: 'Lifestyle',
    date: 'February 6, 2019',
    seed: 'trailhead-retro-4',
  },
]

export const retroLabel = 'Photo highlights'

/* ── Popular posts ───────────────────────────────────────────────────── */

export interface PopularPost {
  title: string
  category: ChipCategory
  chipLabel: string
  author: string
  date: string
  excerpt: string
  seed: string
}

export const popularHeading = 'Popular Posts'

export const popularFeatured: PopularPost = {
  title: 'Ten Ridgelines Every Backpacker Should Know',
  category: 'nature',
  chipLabel: 'Nature',
  author: 'By Carrol Atkinson',
  date: 'February 10, 2019',
  excerpt:
    'From granite domes to knife-edge ridges, these ten routes stitch together the best of the backcountry \u2014 and none of them require a rope.',
  seed: 'trailhead-popular-1',
}

export const popularRows: PopularPost[] = [
  {
    title: 'A Field Guide To Desert Oases',
    category: 'travel',
    chipLabel: 'Travel',
    author: 'By Erin Vance',
    date: 'February 8, 2019',
    excerpt: 'Hidden springs, cottonwood groves and the birds that find them first.',
    seed: 'trailhead-popular-2',
  },
  {
    title: 'Why We Walk: Notes From The Trail',
    category: 'lifestyle',
    chipLabel: 'Lifestyle',
    author: 'By Jordan Lee',
    date: 'February 6, 2019',
    excerpt: 'A slow essay on miles, silence and the friends you make at camp.',
    seed: 'trailhead-popular-3',
  },
  {
    title: 'Ultralight Gear That Actually Survives',
    category: 'sports',
    chipLabel: 'Sports',
    author: 'By Sam Carter',
    date: 'February 4, 2019',
    excerpt: 'We thrashed the lightest packs and shelters for a season so you do not have to.',
    seed: 'trailhead-popular-4',
  },
]

/* ── Category columns ────────────────────────────────────────────────── */

export interface CategoryColumn {
  heading: string
  category: ChipCategory
  chipLabel: string
  featured: PopularPost
  small: Omit<PopularPost, 'excerpt' | 'author'>[]
}

export const viewAllLabel = 'View All'

export const categoryColumns: CategoryColumn[] = [
  {
    heading: 'Sports',
    category: 'sports',
    chipLabel: 'Sports',
    featured: {
      title: 'Trail Running In The Rain',
      category: 'sports',
      chipLabel: 'Sports',
      author: 'By Sam Carter',
      date: 'February 12, 2019',
      excerpt: 'Slippery roots, warm rain and the fastest miles of the year.',
      seed: 'trailhead-sports-1',
    },
    small: [
      {
        title: 'Rock Climbing Basics For Newbies',
        category: 'sports',
        chipLabel: 'Sports',
        date: 'February 10, 2019',
        seed: 'trailhead-sports-2',
      },
      {
        title: 'Kayaking The Inland Lakes',
        category: 'sports',
        chipLabel: 'Sports',
        date: 'February 8, 2019',
        seed: 'trailhead-sports-3',
      },
      {
        title: 'Cycling The Valley Loop',
        category: 'sports',
        chipLabel: 'Sports',
        date: 'February 6, 2019',
        seed: 'trailhead-sports-4',
      },
    ],
  },
  {
    heading: 'Travel',
    category: 'travel',
    chipLabel: 'Travel',
    featured: {
      title: 'The Quiet Trails Of The High Sierra',
      category: 'travel',
      chipLabel: 'Travel',
      author: 'By Erin Vance',
      date: 'February 12, 2019',
      excerpt: 'Fewer crowds, bigger views \u2014 the classic Sierra loops without the queue.',
      seed: 'trailhead-travel-1',
    },
    small: [
      {
        title: 'Weekend Getaways From The City',
        category: 'travel',
        chipLabel: 'Travel',
        date: 'February 10, 2019',
        seed: 'trailhead-travel-2',
      },
      {
        title: 'Road Tripping The Coastal Route',
        category: 'travel',
        chipLabel: 'Travel',
        date: 'February 8, 2019',
        seed: 'trailhead-travel-3',
      },
      {
        title: 'Hidden Canyons Worth The Detour',
        category: 'travel',
        chipLabel: 'Travel',
        date: 'February 6, 2019',
        seed: 'trailhead-travel-4',
      },
    ],
  },
  {
    heading: 'Lifestyle',
    category: 'lifestyle',
    chipLabel: 'Lifestyle',
    featured: {
      title: 'Why We Walk: Notes From The Trail',
      category: 'lifestyle',
      chipLabel: 'Lifestyle',
      author: 'By Jordan Lee',
      date: 'February 12, 2019',
      excerpt: 'A slow essay on miles, silence and the friends you make at camp.',
      seed: 'trailhead-lifestyle-1',
    },
    small: [
      {
        title: 'Camp Coffee And Slow Mornings',
        category: 'lifestyle',
        chipLabel: 'Lifestyle',
        date: 'February 10, 2019',
        seed: 'trailhead-lifestyle-2',
      },
      {
        title: 'A Cozy Cabin Reading List',
        category: 'lifestyle',
        chipLabel: 'Lifestyle',
        date: 'February 8, 2019',
        seed: 'trailhead-lifestyle-3',
      },
      {
        title: 'Meal Prep For The Trail',
        category: 'lifestyle',
        chipLabel: 'Lifestyle',
        date: 'February 6, 2019',
        seed: 'trailhead-lifestyle-4',
      },
    ],
  },
  {
    heading: 'Nature',
    category: 'nature',
    chipLabel: 'Nature',
    featured: {
      title: 'Ten Ridgelines Every Backpacker Should Know',
      category: 'nature',
      chipLabel: 'Nature',
      author: 'By Carrol Atkinson',
      date: 'February 12, 2019',
      excerpt:
        'From granite domes to knife-edge ridges, these ten routes stitch together the best of the backcountry.',
      seed: 'trailhead-nature-1',
    },
    small: [
      {
        title: 'Spring Wildflower Routes',
        category: 'nature',
        chipLabel: 'Nature',
        date: 'February 10, 2019',
        seed: 'trailhead-nature-2',
      },
      {
        title: 'Birdwatching At Dawn',
        category: 'nature',
        chipLabel: 'Nature',
        date: 'February 8, 2019',
        seed: 'trailhead-nature-3',
      },
      {
        title: 'Ancient Forests To Wander',
        category: 'nature',
        chipLabel: 'Nature',
        date: 'February 6, 2019',
        seed: 'trailhead-nature-4',
      },
    ],
  },
]

/* ── Footer ──────────────────────────────────────────────────────────── */

export const aboutHeading = 'About Us'
export const aboutText =
  'Trailhead is a hiking and outdoor-living magazine \u2014 trail guides, gear notes and slow stories from the mountains, written by people who actually walk them.'
export const quickMenuHeading = 'Quick Menu'
export const quickMenuLeft = ['About Us', 'Advertise', 'Careers', 'Subscribes'] as const
export const quickMenuRight = ['Travel', 'Lifestyle', 'Sports', 'Nature'] as const
export const subscribeHeading = 'Subscribe'
export const subscribeText = 'Get new trail guides and gear notes straight to your inbox.'
export const subscribePlaceholder = 'Email address'
export const subscribeLabel = 'Subscribe'
export const subscribeConfirmation = 'Thanks for subscribing!'
export const connectHeading = 'Connect With Us'
export const footerCredit = 'This template is made with \u2665 by free-react-templates'
export const footerCopyright = (year: number): string =>
  `Copyright \u00A9 ${year} All rights reserved`
