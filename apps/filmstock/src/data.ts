export const siteName = 'Filmstock'

export const navLabel = 'Primary'
export const mobileNavLabel = 'Mobile'

export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'

export interface GalleryCategory {
  name: string
  seed: string
}

export const galleryCategories: GalleryCategory[] = [
  { name: 'Nature', seed: 'filmstock-nature-1' },
  { name: 'Portrait', seed: 'filmstock-portrait-2' },
  { name: 'People', seed: 'filmstock-people-3' },
  { name: 'Architecture', seed: 'filmstock-arch-4' },
  { name: 'Animals', seed: 'filmstock-animals-5' },
  { name: 'Sports', seed: 'filmstock-sports-6' },
  { name: 'Travel', seed: 'filmstock-travel-7' },
  { name: 'Wildlife', seed: 'filmstock-wild-8' },
  { name: 'Urban', seed: 'filmstock-urban-9' },
]

export const gallerySectionLabel = 'Photo gallery'
export const morePhotosLabel = 'More Photos'

export type SocialPlatform = 'Facebook' | 'Twitter' | 'Instagram' | 'YouTube'

export const socialLinks: Array<{ label: SocialPlatform; href: string }> = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
]

export const componentDockUrl = 'https://www.componentdock.com/'
export const componentDockLabel = 'Component Dock'

export const footerText = 'All rights reserved'

export const skipLabel = 'Skip to content'
