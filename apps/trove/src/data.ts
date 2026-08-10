export const navLinks = ['Home', 'Category', 'Archive', 'Pages', 'Blog', 'Contact'] as const

export const pagesDropdown = ['Elements', 'Blog', 'Blog Details'] as const

export const blogDropdown = ['Blog Details'] as const

export const stories = [
  {
    seed: 'trove-stories-1',
    title: '2nd Gen Smoke Alarm get up from sleep',
    date: 'September 14, 2018',
  },
  { seed: 'trove-stories-2', title: 'An Stormy Evening in the valley', date: 'September 13, 2018' },
  { seed: 'trove-stories-3', title: 'Morning coffee rituals', date: 'September 12, 2018' },
  { seed: 'trove-stories-4', title: 'City lights after midnight', date: 'September 11, 2018' },
  { seed: 'trove-stories-5', title: 'A quiet corner for reading', date: 'September 10, 2018' },
  { seed: 'trove-stories-6', title: 'The long road home', date: 'September 09, 2018' },
] as const

export const featuredPosts = [
  {
    seed: 'trove-featured-1',
    title: '2nd Gen Smoke Alarm get up from sleep Daily',
    author: 'Marvel Maison',
    date: '13th Oct, 2018',
    excerpt:
      'There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.',
  },
  {
    seed: 'trove-featured-2',
    title: 'An Stormy Evening over the harbor',
    author: 'Marvel Maison',
    date: '13th Oct, 2018',
    excerpt:
      'The storm rolled in just before sunset, painting the sky in deep purples and gold as the last boats returned to the marina.',
  },
  {
    seed: 'trove-featured-3',
    title: 'Finding stillness in a busy world',
    author: 'Marvel Maison',
    date: '12th Oct, 2018',
    excerpt:
      'It’s exciting to think about setting up your own viewing station, a quiet place where the noise of the day finally fades away.',
  },
] as const

export const posts = [
  {
    seed: 'trove-post-1',
    title: '2nd Gen Smoke Alarm get up from sleep',
    excerpt:
      'There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.',
    date: 'March 14, 2018',
    comments: '05',
  },
  {
    seed: 'trove-post-2',
    title: 'An Stormy Evening',
    excerpt:
      'It’s exciting to think about setting up your own viewing station and watching the sky come alive.',
    date: 'March 12, 2018',
    comments: '03',
  },
  {
    seed: 'trove-post-3',
    title: 'The quiet art of slow mornings',
    excerpt:
      'A slow morning changes the shape of the day — time to read, to breathe, to begin on purpose.',
    date: 'March 10, 2018',
    comments: '08',
  },
  {
    seed: 'trove-post-4',
    title: 'Notes from a weekend in the hills',
    excerpt:
      'Every trail has a rhythm of its own, and the hills keep theirs even when you forget to listen.',
    date: 'March 08, 2018',
    comments: '02',
  },
  {
    seed: 'trove-post-5',
    title: 'Tuning in to the evening news',
    excerpt:
      'The day’s stories arrive all at once, and a good cup of coffee makes them easier to follow.',
    date: 'March 06, 2018',
    comments: '11',
  },
  {
    seed: 'trove-post-6',
    title: 'Why the first telescope matters',
    excerpt:
      'There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope.',
    date: 'March 04, 2018',
    comments: '04',
  },
  {
    seed: 'trove-post-7',
    title: 'A kitchen full of stories',
    excerpt:
      'Recipes are memories with instructions attached, and every kitchen keeps a few of its own.',
    date: 'March 02, 2018',
    comments: '07',
  },
  {
    seed: 'trove-post-8',
    title: 'Watching the sky from the porch',
    excerpt:
      'It’s exciting to think about setting up your own viewing station right outside the back door.',
    date: 'February 28, 2018',
    comments: '06',
  },
] as const

export const paginationPages = ['01', '02', '03', '04', '09'] as const

export const about = {
  name: 'Peter Anderson',
  bio: 'Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the same benefit from a free program.',
  avatar: 'https://picsum.photos/seed/trove-about/120/120',
} as const

export const popularPosts = [
  {
    seed: 'trove-popular-1',
    title: '2nd Gen Smoke Alarm get up from sleep',
    date: 'September 14, 2018',
  },
  { seed: 'trove-popular-2', title: 'An Stormy Evening', date: 'September 13, 2018' },
  { seed: 'trove-popular-3', title: 'The quiet art of slow mornings', date: 'September 12, 2018' },
  {
    seed: 'trove-popular-4',
    title: 'Notes from a weekend in the hills',
    date: 'September 11, 2018',
  },
  { seed: 'trove-popular-5', title: 'Tuning in to the evening news', date: 'September 10, 2018' },
  { seed: 'trove-popular-6', title: 'Why the first telescope matters', date: 'September 09, 2018' },
  { seed: 'trove-popular-7', title: 'A kitchen full of stories', date: 'September 08, 2018' },
  { seed: 'trove-popular-8', title: 'Watching the sky from the porch', date: 'September 07, 2018' },
] as const

export const categories = [
  { name: 'International', count: '56' },
  { name: 'Tours and Travels', count: '45' },
  { name: 'Cooking Tips', count: '23' },
  { name: 'Life Style and Fashion', count: '72' },
  { name: 'Organic News', count: '37' },
  { name: 'Games and Sports', count: '19' },
] as const

export const tags = [
  'Lifestyle',
  'Art',
  'Adventure',
  'Food',
  'Technology',
  'Fashion',
  'Architecture',
] as const

export const footerAbout =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.'

export const instaImages = [
  { seed: 'trove-insta-1', alt: 'Morning coffee on the windowsill' },
  { seed: 'trove-insta-2', alt: 'City skyline at golden hour' },
  { seed: 'trove-insta-3', alt: 'Pages of an open magazine' },
  { seed: 'trove-insta-4', alt: 'Trail winding into the hills' },
  { seed: 'trove-insta-5', alt: 'Camera on a tripod at dusk' },
  { seed: 'trove-insta-6', alt: 'Bowl of fresh fruit on a table' },
  { seed: 'trove-insta-7', alt: 'Street corner in the rain' },
  { seed: 'trove-insta-8', alt: 'Notebook and pen by the window' },
] as const

export const socialLinks = ['facebook', 'twitter', 'instagram', 'pinterest'] as const

export type SocialName = (typeof socialLinks)[number]

export const socialLabels: Record<SocialName, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  pinterest: 'Pinterest',
}
