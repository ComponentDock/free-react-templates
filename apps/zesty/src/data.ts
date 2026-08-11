/* Zesty — minimal food & recipe blog home page (ColorLib "Yummy"
   recreation, https://preview.colorlib.com/theme/yummy/). All copy is
   paraphrased from the live preview DOM; all images are seeded picsum
   placeholders (https://picsum.photos/seed/zesty-<n>/<w>/<h>); brand icons
   are inline SVG path data (lucide-react removed brand icons). */

export const siteName = 'Zesty'

export const documentTitle = 'Zesty — Food & Recipe Blog Template'

export const skipLabel = 'Skip to content'

export const imgUrl = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

/* --- Header + navigation ------------------------------------------------ */

export const navLabel = 'Main navigation'
export const openSearchLabel = 'Open search'
export const closeSearchLabel = 'Close search'
export const searchLabel = 'Search'
export const searchPlaceholder = 'Search here.....'
export const menuOpenLabel = 'Open navigation menu'
export const menuCloseLabel = 'Close navigation menu'

interface NavChild {
  label: string
  href: string
}

export interface NavSection {
  label: string
  href: string
  current?: boolean
  children?: NavChild[]
}

/* White header (reference `header.header-section`): bold logo text left,
   centered nav (Home / Pages dropdown / Recipes / Best Of / Contact),
   search trigger right, hamburger on narrow viewports. */
export const navSections: NavSection[] = [
  { label: 'Home', href: '#', current: true },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'About Me', href: '#' },
      { label: 'Categories', href: '#' },
      { label: 'Recipe', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  { label: 'Recipes', href: '#' },
  { label: 'Best Of', href: '#' },
  { label: 'Contact', href: '#' },
]

/* --- Page-top recipes (hero) -------------------------------------------- */

export const pageTopLabel = 'Latest recipes'

export interface PageTopCard {
  seed: string
  meta: string
  title: string
}

/* 6/3/3 grid: one large center card + two small cards on each side
   (reference `section.page-top-recipe`, order-lg-1/2/3 columns). */
export const pageTopLarge: PageTopCard = {
  seed: 'zesty-1',
  meta: 'Food',
  title: 'Cannellini Aglio e Olio with Salmon',
}

export const pageTopSmallLeft: PageTopCard[] = [
  {
    seed: 'zesty-2',
    meta: 'Vegan',
    title: 'Raw Vegan Carrot Cake Bites with Avocado',
  },
  {
    seed: 'zesty-3',
    meta: 'Soup',
    title: 'One Pot Weeknight Lasagna Soup Recipe',
  },
]

export const pageTopSmallRight: PageTopCard[] = [
  {
    seed: 'zesty-4',
    meta: 'Burger',
    title: 'Beef Burger with French Fries and Salad',
  },
  {
    seed: 'zesty-5',
    meta: 'Dessert',
    title: 'Raspberry Pancakes with Honey and Butter',
  },
]

/* --- Top recipes this week ---------------------------------------------- */

export const topRecipesLabel = 'Top recipes'
export const topRecipesTitle = 'Top Recipes this Week'

export interface TopRecipe {
  seed: string
  category: string
  title: string
  excerpt: string
}

export const topRecipeLarge: TopRecipe = {
  seed: 'zesty-6',
  category: 'Dessert',
  title: 'One Pot Weeknight Lasagna Soup Recipe',
  excerpt:
    'One pot, one spoon and a bubbling broth of tomatoes, herbs and pasta that turns a weekday dinner into the warmest part of the evening.',
}

export const topRecipeSmalls: TopRecipe[] = [
  {
    seed: 'zesty-7',
    category: 'Soup',
    title: 'Veggie Soup with Mushrooms',
    excerpt:
      'A gentle broth of garden vegetables and earthy mushrooms, finished with a swirl of olive oil.',
  },
  {
    seed: 'zesty-8',
    category: 'Dessert',
    title: 'Caramel Ice Cream with Berries',
    excerpt:
      'Silky homemade caramel folded into vanilla ice cream and topped with a handful of fresh berries.',
  },
  {
    seed: 'zesty-9',
    category: 'Seafood',
    title: 'Fresh Octopus with Lime Juice',
    excerpt:
      'Tender grilled octopus dressed with lime, garlic and parsley — bright, simple and unforgettable.',
  },
  {
    seed: 'zesty-10',
    category: 'Breakfast',
    title: 'Raspberry Pancakes with Honey and Butter',
    excerpt: 'Fluffy buttermilk pancakes studded with raspberries and drizzled with warm honey.',
  },
]

/* --- Categories filter -------------------------------------------------- */

export const categoriesLabel = 'Recipe categories'

export interface CategoryPill {
  label: string
  filter: string
}

export const categoryPills: CategoryPill[] = [
  { label: 'Vegetarian', filter: 'all' },
  { label: 'Most popular', filter: 'mostpopular' },
  { label: 'Meat Lover', filter: 'meatlover' },
  { label: 'Gluten Free', filter: 'glutenfree' },
]

export interface CategoryCard {
  seed: string
  title: string
  tags: string[]
}

export const categoryCards: CategoryCard[] = [
  {
    seed: 'zesty-11',
    title: 'Sunday Brunch: Spaghetti and Eggs Recipe',
    tags: ['all', 'mostpopular'],
  },
  {
    seed: 'zesty-12',
    title: 'Hearty Beef and Root Vegetable Stew',
    tags: ['all', 'meatlover'],
  },
  {
    seed: 'zesty-13',
    title: 'Chickpea and Spinach Coconut Curry',
    tags: ['all', 'glutenfree'],
  },
  {
    seed: 'zesty-14',
    title: 'Crispy Chicken Thighs with Herb Butter',
    tags: ['all', 'meatlover'],
  },
  {
    seed: 'zesty-15',
    title: 'Gluten-Free Banana Oat Muffins',
    tags: ['all', 'glutenfree'],
  },
]

/* --- Featured recipes --------------------------------------------------- */

export const featuredLabel = 'Featured recipes'
export const featuredTitle = 'Featured Recipes'

export interface FeaturedRecipe {
  seed: string
  title: string
  excerpt: string
}

export const featuredRecipes: FeaturedRecipe[] = [
  {
    seed: 'zesty-16',
    title: 'Sunday Brunch: Spaghetti and Eggs Recipe',
    excerpt:
      'A lazy-morning plate of spaghetti tossed with garlic and a softly fried egg on top — proof that the best brunch needs only three ingredients.',
  },
  {
    seed: 'zesty-17',
    title: 'Honey Butter Pancakes with Fresh Berries',
    excerpt:
      'Tall, golden pancakes stacked with whipped honey butter and a tumble of berries, made for slow Saturday mornings.',
  },
]

/* --- Footer ------------------------------------------------------------- */

export const footerBlurb =
  'Zesty is a small food blog about honest, seasonal cooking — simple recipes, bright flavours and the kind of meals you want to make again the next week.'

export const subscribeHeading = 'Subscribe to our newsletter'
export const subscribeEmailLabel = 'Email address'
export const subscribeEmailPlaceholder = 'Your email'
export const subscribeButtonLabel = 'Subscribe'
export const subscribeSuccess = 'Thank you for subscribing!'
export const emailInvalidMessage = 'Please enter a valid email address.'

export type SocialName = 'instagram' | 'pinterest' | 'facebook' | 'twitter' | 'youtube'

export interface SocialLink {
  name: SocialName
  label: string
}

/* Reference `div.social-links`: five links with text labels next to the
   icon (Instagram, Pinterest, Facebook, Twitter, Youtube). */
export const socialLinks: SocialLink[] = [
  { name: 'instagram', label: 'Instagram' },
  { name: 'pinterest', label: 'Pinterest' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'youtube', label: 'Youtube' },
]

export interface SocialIconData {
  path: string
  viewBox: string
}

/* Inline brand icon path data — lucide-react removed brand icons.
   Instagram / Pinterest / Facebook / Twitter are simple-icons (MIT) paths
   (same as the Atlas data); Youtube is the simple-icons (MIT) path. */
export const socialIcons: Record<SocialName, SocialIconData> = {
  instagram: {
    viewBox: '0 0 24 24',
    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.336 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  },
  pinterest: {
    viewBox: '0 0 24 24',
    path: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
  },
  facebook: {
    viewBox: '0 0 24 24',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  twitter: {
    viewBox: '0 0 24 24',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  youtube: {
    viewBox: '0 0 24 24',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
}

export const copyrightText = (year: number) =>
  `Copyright © ${year} All rights reserved | This template is made with ♥ by Colorlib`
