import { describe, expect, it } from 'vitest'
import {
  collections,
  contactInfo,
  formatPrice,
  hero,
  navItems,
  photo,
  popularProducts,
  quickLinkColumns,
  ratedProducts,
} from './data'

describe('data', () => {
  it('exposes the five navigation items in source order', () => {
    expect(navItems.map((item) => item.label)).toEqual([
      'Home',
      'Shop',
      'Catalog',
      'New Arrivals',
      'Contact',
    ])
  })

  it('describes the three-collection collage with counts', () => {
    expect(collections).toHaveLength(3)
    expect(collections.map((collection) => collection.name)).toEqual(['Women', 'Men', 'Shoes'])
    expect(collections.every((collection) => collection.count === 25)).toBe(true)
  })

  it('keeps six popular products, four discounted and one rated', () => {
    expect(popularProducts).toHaveLength(6)
    expect(popularProducts.filter((product) => product.wasPrice !== undefined)).toHaveLength(4)
    expect(popularProducts.filter((product) => product.rating === 5)).toHaveLength(1)
  })

  it('keeps five rated products, each with five stars', () => {
    expect(ratedProducts).toHaveLength(5)
    expect(ratedProducts.every((product) => product.rating === 5)).toBe(true)
  })

  it('uses seeded placeholder photography', () => {
    expect(photo('drapely-hero-arrivals', 900, 1000)).toBe(
      'https://picsum.photos/seed/drapely-hero-arrivals/900/1000',
    )
  })

  it('formats prices with two decimals', () => {
    expect(formatPrice(20)).toBe('$20.00')
    expect(formatPrice(28.5)).toBe('$28.50')
  })

  it('carries the hero copy and the three footer link columns', () => {
    expect(hero.eyebrow).toBe('#New Summer Collection 2019')
    expect(hero.primary.title).toBe('Arrivals Sales')
    expect(hero.secondary.title).toBe('New Shoes')
    expect(quickLinkColumns).toHaveLength(3)
    expect(quickLinkColumns.flat()).toHaveLength(10)
    expect(contactInfo.email).toBe('hello@drapely.store')
  })
})
