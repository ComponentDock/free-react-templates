import { describe, expect, it } from 'vitest'
import { blogPosts, heroSlides, navLinks, products, testimonials } from './data'

describe('template data', () => {
  it('defines five centered nav links with on-page anchors', () => {
    expect(navLinks.map((l) => l.label)).toEqual(['Home', 'About', 'Wines', 'Shop', 'Contact'])
    for (const link of navLinks) {
      expect(link.href).toMatch(/^#/)
      expect(link.label.length).toBeGreaterThan(0)
    }
  })

  it('defines two full-screen hero slides with copy and photos', () => {
    expect(heroSlides).toHaveLength(2)
    expect(heroSlides[0]!.subTitle).toBe('Royal Wine')
    expect(heroSlides[0]!.headline).toBe('Grape Wine')
    expect(heroSlides[1]!.subTitle).toBe('Welcome')
    expect(heroSlides[1]!.headline).toBe('Wines For Everyone')
    for (const slide of heroSlides) {
      expect(slide.image).toMatch(/^https:\/\/picsum\.photos\//)
      expect(slide.alt.length).toBeGreaterThan(0)
    }
    expect(new Set(heroSlides.map((s) => s.id)).size).toBe(2)
  })

  it('defines three wine products with price, struck original price, and rating', () => {
    expect(products).toHaveLength(3)
    for (const product of products) {
      expect(product.name.length).toBeGreaterThan(0)
      expect(product.price).toBe('$629.00')
      expect(product.originalPrice).toBe('$900.00')
      expect(product.rating).toBeLessThanOrEqual(product.ratingMax)
      expect(product.image).toMatch(/^https:\/\/picsum\.photos\//)
    }
    expect(new Set(products.map((p) => p.id)).size).toBe(3)
  })

  it('defines four testimonials with quotes, photos, and attributions', () => {
    expect(testimonials).toHaveLength(4)
    for (const t of testimonials) {
      expect(t.quote.length).toBeGreaterThan(20)
      expect(t.name.startsWith('— ')).toBe(false)
      expect(t.name.length).toBeGreaterThan(0)
      expect(t.photo).toMatch(/^https:\/\/picsum\.photos\//)
    }
    expect(new Set(testimonials.map((t) => t.id)).size).toBe(4)
  })

  it('defines three blog posts with excerpt and author meta', () => {
    expect(blogPosts).toHaveLength(3)
    for (const post of blogPosts) {
      expect(post.title.length).toBeGreaterThan(0)
      expect(post.excerpt.length).toBeGreaterThan(10)
      expect(post.author).toBe('Dave Rogers')
      expect(post.category.length).toBeGreaterThan(0)
      expect(post.image).toMatch(/^https:\/\/picsum\.photos\//)
    }
    expect(new Set(blogPosts.map((p) => p.id)).size).toBe(3)
  })
})
