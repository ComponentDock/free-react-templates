import { describe, it, expect } from 'vitest'
import { COMPONENT_DOCK_URL, EN_DASH, EVENTS, HEAD } from './events'

describe('events data', () => {
  it('carries the head copy verbatim', () => {
    expect(HEAD.title).toBe('Upcoming in Lisbon')
    expect(HEAD.sub).toBe('Three picks for October from the city events desk.')
    expect(EN_DASH).toBe('\u2013')
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })

  it('holds exactly three events in card order', () => {
    expect(EVENTS.map((event) => event.title)).toEqual([
      'Product Craft Summit 2026',
      'Marés: Live at the Riverside',
      'Latte Art Morning Workshop',
    ])
    expect(EVENTS.map((event) => event.type)).toEqual(['Conference', 'Live music', 'Workshop'])
  })

  it('keeps the schedule floating and the second event crossing midnight', () => {
    expect(EVENTS.map((event) => [event.start, event.end])).toEqual([
      ['20261014T090000', '20261014T173000'],
      ['20261017T213000', '20261018T000000'],
      ['20261024T100000', '20261024T123000'],
    ])
  })

  it('prints the neighbourhood but calendars the city', () => {
    expect(EVENTS.map((event) => event.venueLabel)).toEqual([
      'Centro de Congressos, Belém',
      'Armazém 16, Marvila',
      'Fábrica Coffee Lab, Chiado',
    ])
    expect(EVENTS.map((event) => event.calendarLocation)).toEqual([
      'Centro de Congressos, Lisbon',
      'Armazém 16, Lisbon',
      'Fábrica Coffee Lab, Lisbon',
    ])
  })

  it('keeps the two count conventions and the two price shapes', () => {
    expect(EVENTS.map((event) => event.countLabel)).toEqual([
      '412 going',
      '1,280 going',
      '9 of 12 places taken',
    ])
    expect(EVENTS.map((event) => event.price)).toEqual([
      { label: 'From', amount: '€180', labelAfter: false },
      { label: 'From', amount: '€28', labelAfter: false },
      { label: 'incl. coffee', amount: '€45', labelAfter: true },
    ])
    EVENTS.forEach((event) => expect(event.price.amount).toContain('\u20ac'))
  })

  it('flags the second card only', () => {
    expect(EVENTS.map((event) => event.flag)).toEqual([undefined, 'Few tickets left', undefined])
  })

  it('gives every face a two-letter initial and its own colour', () => {
    expect(EVENTS.map((event) => event.faces.map((face) => face.initials))).toEqual([
      ['AM', 'JL', 'RT'],
      ['SF', 'NB', 'PO'],
      ['CV', 'DK'],
    ])
    expect(EVENTS.flatMap((event) => event.faces.map((face) => face.color))).toEqual([
      '#2563eb',
      '#be185d',
      '#047857',
      '#7c3aed',
      '#c2410c',
      '#0e7490',
      '#b45309',
      '#4f46e5',
    ])
  })

  it('describes each photograph rather than naming the event', () => {
    EVENTS.forEach((event) => {
      expect(event.imageSeed).toMatch(/^showbill-\d$/)
      expect(event.alt.length).toBeGreaterThan(20)
      expect(event.alt).not.toContain(event.title)
    })
  })
})
