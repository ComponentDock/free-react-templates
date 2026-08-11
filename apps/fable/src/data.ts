/* All copy/content for Fable, extracted from the ColorLib "Stories" live
   preview (https://preview.colorlib.com/theme/stories/) on 2026-08-11.
   Text is kept close to the original kind of content; the brand name is
   replaced with "Fable". No ColorLib assets are copied — images are seeded
   picsum placeholders. */

export const siteName = 'Fable'
export const skipLabel = 'Skip to main content'
export const documentTitle = 'Fable — Food & Lifestyle Blog Template'

/* Navbar — serif logo with a yellow accent dot, links Home / About / Foods /
   Lifestyle / Contact (Home active → orange #fd5f00), dark-mode toggle. */
export const navLabel = 'Primary navigation'
export interface NavItem {
  label: string
  href: string
  active?: boolean
}
export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Foods', href: '#foods' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'Contact', href: '#contact' },
]
export const darkToggleLabel = (dark: boolean) =>
  dark ? 'Switch to light mode' : 'Switch to dark mode'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

/* Hero slider — 2 slides, split between a food photo and a solid yellow
   (#ffd615) text panel with a subheading, serif h1, paragraph, and a black
   "Read More" button + arrow. */
export const heroSectionLabel = 'Featured posts slider'
export const heroSubheading = 'Featured Posts'
export const heroParagraph =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
export const heroReadMore = 'Read More'
export const heroSlides = [
  {
    heading: 'Love the Delicious & Tasty Foods',
    imageAlt: 'A colorful food flat-lay photograph',
    seed: 'fable-hero-1',
  },
  {
    heading: 'I Am A Blogger & I Love Foods',
    imageAlt: 'A table set with fresh ingredients',
    seed: 'fable-hero-2',
  },
] as const
export const previousSlideLabel = 'Previous slide'
export const nextSlideLabel = 'Next slide'

/* Recent Stories — heading with a yellow square dot, then large photo cards
   with a category overlay, serif title, and "Read More" link. */
export const recentLabel = 'Recent Stories'
export const recentStories = [
  { category: 'Food', title: 'Tasty & Delicious Foods', seed: 'fable-recent-1' },
  { category: 'Dessert', title: 'Tasty & Delicious Foods', seed: 'fable-recent-2' },
  { category: 'Food', title: 'Tasty & Delicious Foods from Scotland', seed: 'fable-recent-3' },
] as const

/* Blog list + sidebar — dated entries with thumbnail + text; sidebar has an
   About Me box (avatar + bio), a search box, and a Categories box. */
export const blogSectionLabel = 'Blog'
export const blogHeading = 'Holiday Seasons Recipes'
export const blogEntries = [
  {
    category: 'Food',
    date: 'March 01, 2018',
    title: 'Ham sandwich on white surface',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'fable-blog-1',
  },
  {
    category: 'Lifestyle',
    date: 'March 01, 2018',
    title: 'White and red ceramic plate',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    seed: 'fable-blog-2',
  },
] as const
export const aboutMeTitle = 'About Me'
export const authorName = 'Cathy Deon'
export const authorBio =
  'behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const authorImageAlt = 'Portrait of the blog author'
export const authorSeed = 'fable-author'
export const searchPlaceholder = 'Search'
export const searchLabelText = 'Search the blog'
export const categoriesTitle = 'Categories'
export const categories = [
  { label: 'Foods', seed: 'fable-cat-1' },
  { label: 'Lifestyle', seed: 'fable-cat-2' },
  { label: 'Others', seed: 'fable-cat-3' },
] as const

/* About (dark) — heading, paragraph, "Watch Video" link, italic serif
   signature. */
export const aboutSectionLabel = 'About Stories'
export const aboutName = 'Roger Bosch'
export const aboutParagraph =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const watchVideoLabel = 'Watch Video'
export const signature = 'Roger.Bosch'

/* Counter — background image + stat blocks with an icon in a blue-gradient
   circle, a bold number, and a label. */
export const counterSectionLabel = 'Stats'
export const counterHeading = 'About Stories'
export const counterParagraph =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
export const counterStats = [
  { value: 10, label: 'Years of Experienced', icon: 'award' },
  { value: 200, label: 'Foods', icon: 'utensils' },
  { value: 300, label: 'Lifestyle', icon: 'sparkles' },
  { value: 40, label: 'Happy Customers', icon: 'smile' },
] as const
export const counterSeed = 'fable-counter'

/* Subscribe — heading, email input, orange submit; invalid email shows an
   error and blocks submission. */
export const subscribeSectionLabel = 'Newsletter'
export const subscribeHeading = 'Subscribe to our Newsletter'
export const subscribeParagraph =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
export const emailPlaceholder = 'Enter email address'
export const emailLabel = 'Email address'
export const subscribeButton = 'Subscribe'
export const subscribeError = 'Please enter a valid email address.'
export const subscribeSuccess = 'Thank you for subscribing!'

/* Footer — dark (#1f1f1f), four columns + copyright. */
export const footerBrandText =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
export const informationTitle = 'Information'
export const informationLinks = [
  'Terms of Uses',
  'About Stories',
  'Privacy Policy',
  'Accessibility Help',
  'Advertise with us',
] as const
export const footerCategoriesTitle = 'Categories'
export const footerCategories = ['Food', 'Restaurant', 'Dessert', 'Lifestyle', 'Recipes'] as const
export const questionsTitle = 'Have a Questions?'
export const address = '203 Fake St. Mountain View, San Francisco, California, USA'
export const phone = '+2 392 3929 210'
export const email = 'info@yourdomain.com'
export const socialNames: readonly string[] = ['Twitter', 'Facebook', 'Instagram']
export const socialLabel = (name: string) => `Visit our ${name} page`
export const copyright = `Copyright ©${new Date().getFullYear()} All rights reserved | This template is made with Fable`
