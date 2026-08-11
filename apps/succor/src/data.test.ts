import { describe, expect, it } from 'vitest'
import {
  CAUSES,
  CONTACT_ROWS,
  FOOTER_BLURB,
  FOOTER_INFORMATION_LINKS,
  FOOTER_LINKS,
  NAV_LINKS,
  SERVICES,
  TESTIMONIALS,
} from './data'

describe('data', () => {
  it('keeps the five source nav links in order with Home active', () => {
    expect(NAV_LINKS.map((link) => link.label)).toEqual([
      'Home',
      'Who we are',
      'Causes',
      'Stories',
      'Contact',
    ])
    expect(NAV_LINKS[0]?.active).toBe(true)
  })

  it('keeps the four service cards with the source titles', () => {
    expect(SERVICES.map((service) => service.title)).toEqual([
      'Help & Support',
      'Adoption',
      'Volunteering',
      'Education',
    ])
    expect(SERVICES[0]?.blurb).toContain('203 Fake St.')
    expect(SERVICES[2]?.active).toBe(true)
  })

  it('keeps the five causes with circular-image seeds', () => {
    expect(CAUSES).toHaveLength(5)
    for (const [i, cause] of CAUSES.entries()) {
      expect(cause.seed).toBe(`succor-cause-${i + 1}`)
    }
    expect(CAUSES[0]?.title).toBe('Adoption, Fostering & Children Care')
  })

  it('keeps Jeff Nucci as the first testimonial', () => {
    expect(TESTIMONIALS[0]).toMatchObject({ name: 'Jeff Nucci', position: 'Businessman' })
    expect(TESTIMONIALS).toHaveLength(3)
  })

  it('keeps the footer link lists and contact rows', () => {
    expect(FOOTER_INFORMATION_LINKS).toEqual(['Donation', 'Privacy', 'Terms Condition'])
    expect(FOOTER_LINKS).toEqual(['Home', 'Who we are', 'Causes', 'Blog', 'Contact'])
    expect(CONTACT_ROWS.address).toContain('203 Fake St.')
    expect(FOOTER_BLURB.length).toBeGreaterThan(20)
  })
})
