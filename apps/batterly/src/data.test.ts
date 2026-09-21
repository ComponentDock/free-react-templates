import { describe, it, expect } from 'vitest'
import {
  NAV_LINKS,
  PAGES_DROPDOWN,
  CATEGORIES,
  PRODUCTS,
  CLASS_TYPES,
  TEAM_MEMBERS,
  TESTIMONIALS,
  INSTAGRAM_SEEDS,
  CONTACT,
  WORKING_HOURS,
  SOCIAL_LINKS,
  SOCIAL_PATHS,
  CATEGORY_ICONS,
  getStarParts,
  starClass,
} from './data'

describe('data', () => {
  it('exports nav links', () => {
    expect(NAV_LINKS).toContain('Home')
    expect(NAV_LINKS.length).toBeGreaterThan(0)
  })

  it('exports pages dropdown', () => {
    expect(PAGES_DROPDOWN).toContain('Shop Details')
  })

  it('exports categories', () => {
    expect(CATEGORIES.length).toBeGreaterThanOrEqual(5)
    CATEGORIES.forEach((c: { name: string; icon: string }) => {
      expect(c.name).toBeTruthy()
      expect(c.icon).toBeTruthy()
    })
  })

  it('exports products with correct shape', () => {
    expect(PRODUCTS.length).toBe(8)
    PRODUCTS.forEach((p: { name: string; category: string; price: number; seed: string }) => {
      expect(p.name).toBeTruthy()
      expect(p.category).toBeTruthy()
      expect(p.price).toBeGreaterThan(0)
      expect(p.seed).toBeTruthy()
    })
  })

  it('exports class types', () => {
    expect(CLASS_TYPES.length).toBe(3)
  })

  it('exports team members', () => {
    expect(TEAM_MEMBERS.length).toBe(4)
    TEAM_MEMBERS.forEach((m: { name: string; role: string; seed: string }) => {
      expect(m.name).toBeTruthy()
      expect(m.role).toBeTruthy()
      expect(m.seed).toBeTruthy()
    })
  })

  it('exports testimonials', () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(2)
    TESTIMONIALS.forEach(
      (t: { author: string; city: string; text: string; rating: number; seed: string }) => {
        expect(t.author).toBeTruthy()
        expect(t.city).toBeTruthy()
        expect(t.text).toBeTruthy()
        expect(t.rating).toBeGreaterThan(0)
        expect(t.rating).toBeLessThanOrEqual(5)
      },
    )
  })

  it('exports instagram seeds', () => {
    expect(INSTAGRAM_SEEDS.length).toBe(6)
  })

  it('exports contact info', () => {
    expect(CONTACT.city).toBeTruthy()
    expect(CONTACT.address).toBeTruthy()
    expect(CONTACT.email).toContain('@')
    expect(CONTACT.phone).toBeTruthy()
  })

  it('exports working hours', () => {
    expect(WORKING_HOURS.length).toBe(3)
  })

  it('exports social links and paths', () => {
    expect(SOCIAL_LINKS.length).toBe(4)
    expect(SOCIAL_PATHS.Facebook).toBeTruthy()
    expect(SOCIAL_PATHS.Twitter).toBeTruthy()
    expect(SOCIAL_PATHS.Instagram).toBeTruthy()
    expect(SOCIAL_PATHS.YouTube).toBeTruthy()
  })

  it('exports category icons', () => {
    expect(Object.keys(CATEGORY_ICONS).length).toBeGreaterThanOrEqual(5)
  })
})

describe('getStarParts', () => {
  it('returns full stars for integer rating', () => {
    const parts = getStarParts(5)
    expect(parts).toEqual(['full', 'full', 'full', 'full', 'full'])
  })

  it('returns half star for x.5 rating', () => {
    const parts = getStarParts(4.5)
    expect(parts).toEqual(['full', 'full', 'full', 'full', 'half'])
  })

  it('returns empty stars for low rating', () => {
    const parts = getStarParts(0)
    expect(parts).toEqual(['empty', 'empty', 'empty', 'empty', 'empty'])
  })

  it('returns mixed stars for fractional rating', () => {
    const parts = getStarParts(2.3)
    expect(parts).toEqual(['full', 'full', 'empty', 'empty', 'empty'])
  })
})

describe('starClass', () => {
  it('returns brand class for full stars', () => {
    expect(starClass('full')).toBe('text-brand')
  })

  it('returns brand/50 class for half stars', () => {
    expect(starClass('half')).toBe('text-brand/50')
  })

  it('returns border class for empty stars', () => {
    expect(starClass('empty')).toBe('text-border')
  })
})
