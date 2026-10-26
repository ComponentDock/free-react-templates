import { describe, expect, it } from 'vitest'
import { LISTINGS, STATUS_STYLES, initialSavedIds } from './listings'

describe('listings data', () => {
  it('ships three listings, each with a unique id and an in-page target', () => {
    expect(LISTINGS).toHaveLength(3)
    expect(new Set(LISTINGS.map((listing) => listing.id)).size).toBe(3)

    LISTINGS.forEach((listing) => {
      expect(listing.href).toBe(`#${listing.id}`)
      expect(listing.href).not.toBe('#')
    })
  })

  it('gives every listing a deterministic placeholder photograph with an alt', () => {
    LISTINGS.forEach((listing, index) => {
      expect(listing.image.src).toBe(`https://picsum.photos/seed/baylist-${index + 1}/800/540`)
      expect(listing.image.alt.length).toBeGreaterThan(10)
    })
  })

  it('orders the four facts of a listing as a buyer reads them', () => {
    const first = LISTINGS[0]!
    expect(first.price).toBe('$1,290,000')
    expect(first.address).toBe('14 Seaview Terrace')
    expect(first.area).toContain(' · ')
    expect(first.specs).toEqual({ beds: '4', baths: '3', floor: '2,450' })
  })

  it('spreads the three statuses over the three cards', () => {
    expect(LISTINGS.map((listing) => listing.status.variant)).toEqual(['sale', 'new', 'open'])
    expect(LISTINGS.map((listing) => listing.status.label)).toEqual([
      'For sale',
      'New listing',
      'Open house Sat',
    ])
    expect(Object.keys(STATUS_STYLES)).toEqual(['sale', 'new', 'open'])
  })

  it('counts photos in three different numbers', () => {
    expect(LISTINGS.map((listing) => listing.photos)).toEqual([24, 18, 31])
  })

  it('seeds the saved list from the pre-saved middle card only', () => {
    expect(LISTINGS.map((listing) => listing.initiallySaved)).toEqual([false, true, false])
    expect(initialSavedIds()).toEqual(['listing-7-banyan-lane'])
  })
})
