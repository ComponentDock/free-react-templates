import { describe, expect, it } from 'vitest'
import {
  bannerPosts,
  categoryPosts,
  contactRows,
  featuredPosts,
  feedPosts,
  imgUrl,
  listPosts,
  navItems,
  newsletterIntro,
  popularTags,
  sidebarCategories,
  socialNames,
} from './data'

describe('data', () => {
  it('builds seeded picsum image urls', () => {
    expect(imgUrl('ledger-banner-1', 900, 810)).toBe(
      'https://picsum.photos/seed/ledger-banner-1/900/810',
    )
  })

  it('exposes the nav items with the Pages dropdown', () => {
    expect(navItems.map((item) => item.label)).toEqual([
      'Home',
      'Archive',
      'Category',
      'Contact',
      'Pages',
    ])
    expect(navItems.find((item) => item.label === 'Home')?.active).toBe(true)
    expect(navItems.find((item) => item.label === 'Pages')?.dropdown).toEqual([
      'Single blog',
      'elements',
    ])
  })

  it('provides the three social networks with labels', () => {
    expect(socialNames).toEqual(['facebook', 'twitter', 'instagram'])
  })

  it('sizes every banner post explicitly', () => {
    expect(bannerPosts).toHaveLength(2)
    for (const post of bannerPosts) {
      expect(post.width).toBeGreaterThan(0)
      expect(post.height).toBeGreaterThan(0)
      expect(post.seed).toMatch(/^ledger-banner-\d$/)
    }
  })

  it('provides the three featured, category and feed posts', () => {
    expect(featuredPosts).toHaveLength(3)
    expect(categoryPosts).toHaveLength(3)
    expect(feedPosts).toHaveLength(3)
  })

  it('provides five list posts and the loading label data', () => {
    expect(listPosts).toHaveLength(5)
    expect(listPosts[0]?.pill).toBe('Tours & travel')
  })

  it('provides sidebar categories and tags', () => {
    expect(sidebarCategories).toHaveLength(6)
    expect(sidebarCategories[0]).toEqual({ name: 'Culture', count: 12 })
    expect(popularTags).toEqual(['Nature', 'business', 'tech', 'News', 'html'])
  })

  it('provides footer contact rows and newsletter copy', () => {
    expect(contactRows).toHaveLength(2)
    expect(contactRows[0]?.icon).toBe('home')
    expect(contactRows[1]?.icon).toBe('headphones')
    expect(newsletterIntro.length).toBeGreaterThan(0)
  })
})
