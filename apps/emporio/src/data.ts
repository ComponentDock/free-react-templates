export const brandName = 'Emporio'

/* Header — utility top bar links (left) and account links (right). */
export const topBarLinks = ['About Us', 'Privacy', 'FAQ', 'Careers']
export const accountLinks = ['My Wishlist', 'Track Your Order']

/* Social brand icons (inline SVG — brand glyphs are not in lucide-react). */
export interface SocialLink {
  name: string
  href: string
}

export const socials: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'Linkedin', href: 'https://linkedin.com' },
  { name: 'Youtube', href: 'https://youtube.com' },
]

/* Footer socials — a subset of the same icon set. */
export const footerSocials = ['Facebook', 'Instagram', 'Youtube']

export interface NavItem {
  label: string
  href: string
  badge?: string
  children?: { label: string; href: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Men', href: '#trending' },
  { label: 'Women', href: '#trending' },
  { label: 'Baby Collection', href: '#trending', badge: 'New' },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'Login', href: '#pages' },
      { label: 'Cart', href: '#pages' },
      { label: 'Product Details', href: '#pages' },
      { label: 'Product Checkout', href: '#pages' },
    ],
  },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Blog Element', href: '#blog' },
      { label: 'Blog Details', href: '#blog' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const cartCount = 2

export const promoLine = 'Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer'

export interface HeroSlide {
  script: string
  title: string
  copy: string
  image: string
  alt: string
}

export const heroSlides: HeroSlide[] = [
  {
    script: 'Fashion Sale',
    title: 'Minimal Menz Style',
    copy: 'Clean lines, premium fabrics and timeless silhouettes for the modern wardrobe.',
    image: 'https://picsum.photos/id/1005/1920/1080',
    alt: 'Man in a leather jacket and knit scarf looking out over the water',
  },
  {
    script: 'Fashion Sale',
    title: 'Minimal Menz Style',
    copy: 'Discover seasonal essentials crafted for effortless everyday dressing.',
    image: 'https://picsum.photos/id/823/1920/1080',
    alt: 'Woman in a denim jacket and red beanie holding a vintage camera',
  },
]

export interface Category {
  title: string
  image: string
  alt: string
}

export const categories: Category[] = [
  {
    title: "Men's Fashion",
    image: 'https://picsum.photos/id/453/900/1100',
    alt: "Men's fashion collection",
  },
  {
    title: "Women's Fashion",
    image: 'https://picsum.photos/id/64/900/1100',
    alt: "Women's fashion collection",
  },
  {
    title: 'Baby Fashion',
    image: 'https://picsum.photos/id/1055/900/1100',
    alt: 'Baby fashion collection',
  },
]

export const productTabs = ['Men', 'Women', 'Baby', 'Fashion']

export interface Product {
  name: string
  price: string
  original: string
  image: string
  alt: string
}

const productImages = [20, 42, 66, 122, 145, 160, 180, 200, 350, 500, 800, 950]

export const products: Product[] = [
  'Cashmere Tank + Bag',
  'Wool Blend Coat',
  'Ribbed Knit Sweater',
  'Slim Denim Jacket',
  'Pleated Midi Skirt',
  'Cotton Poplin Shirt',
  'Leather Crossbody Bag',
  'Quilted Puffer Vest',
  'Silk Slip Dress',
  'Tailored Wool Trouser',
  'Chunky Knit Cardigan',
  'Linen Camp Shirt',
].map((name, i) => ({
  name,
  price: '$98.00',
  original: '$120.00',
  image: `https://picsum.photos/id/${productImages[i]}/600/750`,
  alt: name,
}))

const mayLikeImages = [1000, 1035, 1084, 550]

export const mayLikeProducts: Product[] = [
  'Essential Tee + Tote',
  'Suede Ankle Boots',
  'Classic Trench Coat',
  'Jersey Knit Joggers',
].map((name, i) => ({
  name,
  price: '$98.00',
  original: '$120.00',
  image: `https://picsum.photos/id/${mayLikeImages[i]}/600/750`,
  alt: name,
}))

export const testimonial = {
  heading: 'Customer Testimonial',
  quote: 'Everybody is different, which is why we offer styles for every body.',
  author: 'Petey Cruiser',
  role: 'Designer',
  avatar: 'https://picsum.photos/id/1027/200/200',
  avatarAlt: 'Portrait of Petey Cruiser',
}

export interface BlogPost {
  tag: string
  title: string
  excerpt: string
  image: string
  alt: string
}

const blogImages = [900, 400, 996]

export const blogPosts: BlogPost[] = [
  {
    tag: 'Fashion Tips',
    title: 'What Curling Irons Are The Best Ones',
    excerpt:
      'We tested the season\u2019s top styling tools so you can find the perfect finish for every look.',
    alt: 'Golden sunset over a wooden pier',
  },
  {
    tag: 'Fashion Tips',
    title: "Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes",
    excerpt:
      'From ankle boots to loafers, the definitive edit of the season\u2019s most-wanted footwear.',
    alt: 'Dramatic stage lighting on a dark background',
  },
  {
    tag: 'Fashion Tips',
    title: 'How To Style Knitwear For The New Season',
    excerpt: 'Layering, colour blocking and the silhouettes worth investing in this year.',
    alt: 'Woman with long hair backlit by a bright sky',
  },
].map((post, i) => ({
  ...post,
  image: `https://picsum.photos/id/${blogImages[i]}/600/450`,
}))

export interface Service {
  title: string
  subline: string
  icon: 'truck' | 'shield' | 'refund' | 'support'
}

export const services: Service[] = [
  { title: 'Fast & Free Delivery', subline: 'Free delivery on all orders', icon: 'truck' },
  { title: 'Secure Payment', subline: 'Free delivery on all orders', icon: 'shield' },
  { title: 'Money Back Guarantee', subline: 'Free delivery on all orders', icon: 'refund' },
  { title: 'Online Support', subline: 'Free delivery on all orders', icon: 'support' },
]

export interface FooterColumn {
  heading: string
  links: string[]
}

export const shopColumns: FooterColumn[] = [
  {
    heading: 'Shop Men',
    links: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'],
  },
  {
    heading: 'Shop Women',
    links: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'],
  },
  {
    heading: 'Baby Collection',
    links: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'],
  },
]

export const quickLinks = ['Track Your Order', 'Support', 'FAQ', 'Carrier', 'About', 'Contact Us']

export const subscribeCopy = {
  heading: 'Subscribe Newsletter',
  body: 'Subscribe newsletter to get 5% on all products.',
}
