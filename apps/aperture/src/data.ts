export const siteName = 'Aperture'

export const navLabel = 'Primary'
export const mobileNavLabel = 'Mobile'

export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: string[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Albums', href: '#gallery' },
  { label: 'About', href: '#about', children: ['Albums Details', 'Blog Details'] },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const aboutDropdownLabel = 'About pages'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const searchOpenLabel = 'Open search'
export const searchCloseLabel = 'Close search'
export const searchModelLabel = 'Site search'
export const searchPlaceholder = 'Search photos'
export const searchSubmitLabel = 'Submit search'

export const heroSectionLabel = 'Welcome'
export const heroHeading = 'Hello! Welcome to Aperture photo gallery With Creative & Unique Style'

export const gallerySectionLabel = 'Photo gallery'
export const filterBarLabel = 'Filter photos by category'

export interface PhotoFilter {
  label: string
  tag: string
}

export const photoFilters: PhotoFilter[] = [
  { label: 'All', tag: 'all' },
  { label: 'Photography', tag: 'photo' },
  { label: 'Travel', tag: 'travel' },
  { label: 'Nature', tag: 'natural' },
  { label: 'Fashion', tag: 'fashion' },
  { label: 'Life Style', tag: 'lifestyle' },
]

export interface GalleryTile {
  category: string
  descriptor: string
  title: string
  tag: string
  seed: string
  height: number
}

/** 20 tiles mirroring the reference `.mix` grid: photo ×5, travel ×3,
    natural ×5, fashion ×3, lifestyle ×4. */
export const galleryTiles: GalleryTile[] = [
  {
    category: 'Photography',
    descriptor: 'Flora',
    title: 'Flower In Door',
    tag: 'photo',
    seed: 'aperture-1',
    height: 480,
  },
  {
    category: 'Photography',
    descriptor: 'Streets',
    title: 'Urban Geometry',
    tag: 'photo',
    seed: 'aperture-2',
    height: 600,
  },
  {
    category: 'Travel',
    descriptor: 'Coast',
    title: 'Distant Shores',
    tag: 'travel',
    seed: 'aperture-3',
    height: 420,
  },
  {
    category: 'Nature',
    descriptor: 'Woods',
    title: 'Morning Mist',
    tag: 'natural',
    seed: 'aperture-4',
    height: 520,
  },
  {
    category: 'Fashion',
    descriptor: 'Studio',
    title: 'Runway Edit',
    tag: 'fashion',
    seed: 'aperture-5',
    height: 640,
  },
  {
    category: 'Life Style',
    descriptor: 'Home',
    title: 'Slow Morning',
    tag: 'lifestyle',
    seed: 'aperture-6',
    height: 460,
  },
  {
    category: 'Nature',
    descriptor: 'Water',
    title: 'Still Water',
    tag: 'natural',
    seed: 'aperture-7',
    height: 560,
  },
  {
    category: 'Fashion',
    descriptor: 'Editorial',
    title: 'Textile Story',
    tag: 'fashion',
    seed: 'aperture-8',
    height: 440,
  },
  {
    category: 'Photography',
    descriptor: 'People',
    title: 'Portrait Study',
    tag: 'photo',
    seed: 'aperture-9',
    height: 620,
  },
  {
    category: 'Life Style',
    descriptor: 'Diary',
    title: 'Home Diary',
    tag: 'lifestyle',
    seed: 'aperture-10',
    height: 480,
  },
  {
    category: 'Nature',
    descriptor: 'Peaks',
    title: 'High Peaks',
    tag: 'natural',
    seed: 'aperture-11',
    height: 520,
  },
  {
    category: 'Fashion',
    descriptor: 'Monochrome',
    title: 'Chic Monochrome',
    tag: 'fashion',
    seed: 'aperture-12',
    height: 460,
  },
  {
    category: 'Life Style',
    descriptor: 'Evenings',
    title: 'Little Joys',
    tag: 'lifestyle',
    seed: 'aperture-13',
    height: 580,
  },
  {
    category: 'Travel',
    descriptor: 'Cities',
    title: 'City Break',
    tag: 'travel',
    seed: 'aperture-14',
    height: 500,
  },
  {
    category: 'Nature',
    descriptor: 'Flora',
    title: 'Wild Bloom',
    tag: 'natural',
    seed: 'aperture-15',
    height: 440,
  },
  {
    category: 'Photography',
    descriptor: 'Light',
    title: 'Golden Hour',
    tag: 'photo',
    seed: 'aperture-16',
    height: 540,
  },
  {
    category: 'Life Style',
    descriptor: 'Kitchen',
    title: 'Table Stories',
    tag: 'lifestyle',
    seed: 'aperture-17',
    height: 480,
  },
  {
    category: 'Travel',
    descriptor: 'Roads',
    title: 'Wander Lines',
    tag: 'travel',
    seed: 'aperture-18',
    height: 600,
  },
  {
    category: 'Nature',
    descriptor: 'Ground',
    title: 'Forest Floor',
    tag: 'natural',
    seed: 'aperture-19',
    height: 460,
  },
  {
    category: 'Photography',
    descriptor: 'Rhythm',
    title: 'Street Rhythm',
    tag: 'photo',
    seed: 'aperture-20',
    height: 520,
  },
]

export const tileLinkLabel = (title: string) => `View photo: ${title}`

export type SocialLabel = 'Facebook' | 'Twitter' | 'Instagram'

export const socialLinks: Array<{ label: SocialLabel; href: string }> = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
]

export const footerCopyright = 'All rights reserved | Made with ♥ by Aperture'

export const skipLabel = 'Skip to content'
export const documentTitle = 'Aperture — Photography Template'
