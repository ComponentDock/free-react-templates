/* Jotter content data — recreated from the ColorLib "Elen" template's
   home page (aside menu, article list, footer widgets). Text is
   paraphrased but keeps the same kinds of content. */

export const NAV_LINKS = ['Home', 'Photography', 'Travel', 'Fashion', 'About', 'Contact'] as const

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/' },
]

export const SOCIAL_PATHS: Record<string, string> = {
  Facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  Twitter:
    'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  Instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  Linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
}

export interface Article {
  seed: string
  category: string
  title: string
  blurb: string
  author: string
  date: string
  hearts: number
  eyes: number
  comments: number
}

export const ARTICLES: Article[] = [
  {
    seed: 'jotter-article-1',
    category: 'Technology',
    title: 'The Newest Technology On This Year',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    author: 'Dave Lewis',
    date: 'Nov. 28, 2018',
    hearts: 3,
    eyes: 100,
    comments: 5,
  },
  {
    seed: 'jotter-article-2',
    category: 'Travel',
    title: 'Far Far Away, Behind the Word Mountains',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Elena Wright',
    date: 'Nov. 21, 2018',
    hearts: 4,
    eyes: 120,
    comments: 7,
  },
  {
    seed: 'jotter-article-3',
    category: 'Fashion',
    title: 'A Small River Named Duden Flows by Their Place',
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    author: 'Marcus Reid',
    date: 'Nov. 14, 2018',
    hearts: 6,
    eyes: 90,
    comments: 3,
  },
  {
    seed: 'jotter-article-4',
    category: 'Photography',
    title: 'The Blind Texts Live in Bookmarksgrove',
    blurb:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Ava Bennett',
    date: 'Nov. 7, 2018',
    hearts: 2,
    eyes: 75,
    comments: 4,
  },
  {
    seed: 'jotter-article-5',
    category: 'Technology',
    title: 'One Make Creepeth Man Bearing the One Firmament',
    blurb:
      "One make creepeth man bearing the one firmament won't fowl meat over sea, great heaven is gathered.",
    author: 'Dave Lewis',
    date: 'Oct. 31, 2018',
    hearts: 8,
    eyes: 140,
    comments: 9,
  },
  {
    seed: 'jotter-article-6',
    category: 'Travel',
    title: 'Roasted Parts of Sentences Fly Into Your Mouth',
    blurb:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth, even the all-powerful.',
    author: 'Elena Wright',
    date: 'Oct. 24, 2018',
    hearts: 5,
    eyes: 110,
    comments: 6,
  },
  {
    seed: 'jotter-article-7',
    category: 'Fashion',
    title: 'The Big Oxmox Advised Her Not to Do So',
    blurb:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks.',
    author: 'Marcus Reid',
    date: 'Oct. 17, 2018',
    hearts: 7,
    eyes: 95,
    comments: 2,
  },
  {
    seed: 'jotter-article-8',
    category: 'Photography',
    title: 'When She Reached the First Hills of the Italic Mountains',
    blurb:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.',
    author: 'Ava Bennett',
    date: 'Oct. 10, 2018',
    hearts: 9,
    eyes: 160,
    comments: 11,
  },
  {
    seed: 'jotter-article-9',
    category: 'Technology',
    title: 'She Packed Her Seven Versalia, Put Her Initials Into the Sea',
    blurb:
      'She packed her seven versalia, put her initials into the sea and then lorem ipsum dolor sit amet consectetur.',
    author: 'Dave Lewis',
    date: 'Oct. 3, 2018',
    hearts: 4,
    eyes: 85,
    comments: 5,
  },
  {
    seed: 'jotter-article-10',
    category: 'Travel',
    title: 'A Wonderful Serenity Has Taken Possession of My Entire Soul',
    blurb:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.',
    author: 'Elena Wright',
    date: 'Sep. 26, 2018',
    hearts: 3,
    eyes: 130,
    comments: 8,
  },
  {
    seed: 'jotter-article-11',
    category: 'Fashion',
    title: 'I Am Alone, and Feel the Charm of Existence',
    blurb:
      'I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
    author: 'Marcus Reid',
    date: 'Sep. 19, 2018',
    hearts: 6,
    eyes: 70,
    comments: 4,
  },
  {
    seed: 'jotter-article-12',
    category: 'Photography',
    title: 'The Seasons Turn Quietly Outside the Window',
    blurb:
      'The seasons turned quietly outside the window while the city argued with itself inside, and I took notes.',
    author: 'Ava Bennett',
    date: 'Sep. 12, 2018',
    hearts: 5,
    eyes: 105,
    comments: 6,
  },
]

export const FOOTER_CATEGORIES = ['Photography (6)', 'Fashion (8)', 'Technology (2)', 'Travel (2)']

export const FOOTER_ARCHIVES = [
  'October 2018 (6)',
  'September 2018 (6)',
  'August 2018 (8)',
  'July 2018 (2)',
  'June 2018 (7)',
]

export const FOOTER_QUESTIONS = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
}
