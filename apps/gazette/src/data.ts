export interface Slide {
  seed: string
  category: string
  date: string
  comments: number
  title: string
  excerpt: string
}

export interface Post {
  seed: string
  category: string
  date: string
  comments: number
  title: string
}

export const heroSlides: Slide[] = [
  {
    seed: 'gazette-hero-1',
    category: 'Travel',
    date: 'March 15, 2018',
    comments: 3,
    title: 'Chasing the Northern Lights Across Iceland',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    seed: 'gazette-hero-2',
    category: 'Food',
    date: 'March 12, 2018',
    comments: 8,
    title: 'The Hidden Cafés of Lisbon’s Alfama District',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    seed: 'gazette-hero-3',
    category: 'Lifestyle',
    date: 'March 8, 2018',
    comments: 5,
    title: 'Slow Mornings: A Guide to Mindful Weekends',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export const photoCards: Post[] = [
  {
    seed: 'gazette-card-1',
    category: 'Lifestyle',
    date: 'March 15, 2018',
    comments: 2,
    title: 'Five Books That Changed How I Travel',
  },
  {
    seed: 'gazette-card-2',
    category: 'Food',
    date: 'March 14, 2018',
    comments: 6,
    title: 'Street Food Safari in Ho Chi Minh City',
  },
  {
    seed: 'gazette-card-3',
    category: 'Travel',
    date: 'March 12, 2018',
    comments: 4,
    title: 'Off-Season: Why January Is the Best Time to Visit Paris',
  },
] as const

export const blogPosts: Post[] = [
  {
    seed: 'gazette-post-1',
    category: 'Travel',
    date: 'February 20, 2018',
    comments: 4,
    title: 'The Art of Packing Light for a Month Abroad',
  },
  {
    seed: 'gazette-post-2',
    category: 'Lifestyle',
    date: 'February 18, 2018',
    comments: 7,
    title: 'Designing a Workspace That Sparks Creativity',
  },
  {
    seed: 'gazette-post-3',
    category: 'Food',
    date: 'February 15, 2018',
    comments: 2,
    title: 'A Weekend in Tuscany: Recipes From the Hills',
  },
  {
    seed: 'gazette-post-4',
    category: 'Travel',
    date: 'February 12, 2018',
    comments: 11,
    title: 'Solo Travel: Lessons From 30 Countries',
  },
  {
    seed: 'gazette-post-5',
    category: 'Lifestyle',
    date: 'February 9, 2018',
    comments: 6,
    title: 'Analog vs Digital: Why I Went Back to Film',
  },
  {
    seed: 'gazette-post-6',
    category: 'Travel',
    date: 'February 6, 2018',
    comments: 9,
    title: 'The Best Hidden Beaches in Southeast Asia',
  },
] as const

export const morePosts: Post[] = [
  {
    seed: 'gazette-more-1',
    category: 'Travel',
    date: 'February 3, 2018',
    comments: 3,
    title: 'Sunrise Hikes You Can Do Before Breakfast',
  },
  {
    seed: 'gazette-more-2',
    category: 'Food',
    date: 'February 1, 2018',
    comments: 5,
    title: 'Coffee Culture: A Tour of Specialty Cafés',
  },
  {
    seed: 'gazette-more-3',
    category: 'Lifestyle',
    date: 'January 28, 2018',
    comments: 2,
    title: 'Minimalism: Owning Less, Living More',
  },
] as const

export const popularPosts: Post[] = [
  {
    seed: 'gazette-popular-1',
    category: 'Travel',
    date: 'February 12, 2018',
    comments: 11,
    title: 'Solo Travel: Lessons From 30 Countries',
  },
  {
    seed: 'gazette-popular-2',
    category: 'Travel',
    date: 'February 6, 2018',
    comments: 9,
    title: 'The Best Hidden Beaches in Southeast Asia',
  },
  {
    seed: 'gazette-popular-3',
    category: 'Lifestyle',
    date: 'February 9, 2018',
    comments: 6,
    title: 'Analog vs Digital: Why I Went Back to Film',
  },
] as const

export const latestPosts: Post[] = [
  {
    seed: 'gazette-latest-1',
    category: 'Travel',
    date: 'February 3, 2018',
    comments: 3,
    title: 'Sunrise Hikes You Can Do Before Breakfast',
  },
  {
    seed: 'gazette-latest-2',
    category: 'Food',
    date: 'February 1, 2018',
    comments: 5,
    title: 'Coffee Culture: A Tour of Specialty Cafés',
  },
  {
    seed: 'gazette-latest-3',
    category: 'Lifestyle',
    date: 'January 28, 2018',
    comments: 2,
    title: 'Minimalism: Owning Less, Living More',
  },
] as const

export const socialLinks = [
  'twitter',
  'facebook',
  'instagram',
  'youtube',
  'vimeo',
  'snapchat',
] as const

export const socialLabels: Record<(typeof socialLinks)[number], string> = {
  twitter: 'Twitter',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  vimeo: 'Vimeo',
  snapchat: 'Snapchat',
}

export const travelMenu = ['Asia', 'Europe', 'Dubai', 'Africa', 'South America'] as const

export const categoryMenu = ['Lifestyle', 'Food', 'Adventure', 'Travel', 'Business'] as const

export const quickLinks = ['About Us', 'Travel', 'Adventure', 'Courses', 'Categories'] as const

export const categories = [
  { name: 'Courses', count: 12 },
  { name: 'News', count: 22 },
  { name: 'Design', count: 37 },
  { name: 'HTML', count: 42 },
  { name: 'Web Development', count: 14 },
] as const

export const tags = ['Travel', 'Adventure', 'Food', 'Lifestyle', 'Business', 'Freelancing'] as const
