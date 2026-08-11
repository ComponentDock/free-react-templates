import { describe, expect, it } from 'vitest'
import {
  CHEFS,
  COPYRIGHT,
  COUNTER_STATS,
  HERO_SLIDES,
  MENU_CATEGORIES,
  NAV_LINKS,
  OPEN_HOURS,
  RESERVATION_FIELDS,
  SERVICES,
  TESTIMONIALS,
  TOP_BAR_EMAIL,
  TOP_BAR_HOURS,
  TOP_BAR_PHONE,
} from './data'

describe('Palate data', () => {
  it('exposes the top bar contact details', () => {
    expect(TOP_BAR_PHONE).toBe('+ 1235 2355 98')
    expect(TOP_BAR_EMAIL).toBe('youremail@email.com')
    expect(TOP_BAR_HOURS).toBe('Open hours: Monday - Sunday 8:00AM - 9:00PM')
  })

  it('defines the five navbar links with Home active', () => {
    expect(NAV_LINKS.map((link) => link.label)).toEqual([
      'Home',
      'About',
      'Menu',
      'Blog',
      'Contact',
    ])
    expect(NAV_LINKS[0]?.active).toBe(true)
  })

  it('defines three hero slides with distinct headlines', () => {
    expect(HERO_SLIDES).toHaveLength(3)
    expect(HERO_SLIDES.map((slide) => slide.headline)).toEqual([
      'Our Delicious Specialties',
      'The Best Place to Kick Off Your Day',
      'Creamy Hot and Ready to Serve',
    ])
  })

  it('defines the four counter stats', () => {
    expect(COUNTER_STATS.map((stat) => [stat.value, stat.label])).toEqual([
      [18, 'Years of Experienced'],
      [15000, 'Happy Customers'],
      [100, 'Menus'],
      [20, 'Staffs'],
    ])
  })

  it('defines the three catering services with icons', () => {
    expect(SERVICES.map((service) => service.title)).toEqual([
      'Birthday Party',
      'Business Meetings',
      'Wedding Party',
    ])
    expect(SERVICES.map((service) => service.icon)).toEqual(['cake', 'meeting', 'tray'])
  })

  it('defines six menu categories with 18 distinct dishes at $29', () => {
    expect(MENU_CATEGORIES.map((category) => category.name)).toEqual([
      'Breakfast',
      'Lunch',
      'Dinner',
      'Desserts',
      'Wine Card',
      'Drinks',
    ])
    const items = MENU_CATEGORIES.flatMap((category) => category.items)
    expect(items).toHaveLength(18)
    expect(new Set(items.map((item) => item.name)).size).toBe(18)
    for (const item of items) {
      expect(item.price).toBe('$29')
      expect(item.tags).toHaveLength(4)
    }
  })

  it('defines the reservation fields with a Person select', () => {
    expect(RESERVATION_FIELDS.map((field) => field.label)).toEqual([
      'Name',
      'Email',
      'Phone',
      'Date',
      'Time',
      'Person',
    ])
    expect(RESERVATION_FIELDS[5]?.kind).toBe('select')
  })

  it('defines the four master chefs', () => {
    expect(CHEFS.map((chef) => chef.name)).toEqual([
      'John Smooth',
      'Rebeca Welson',
      'Kharl Branyt',
      'Luke Simon',
    ])
    expect(CHEFS.map((chef) => chef.position)).toEqual([
      'Restaurant Owner',
      'Head Chef',
      'Chef',
      'Chef',
    ])
  })

  it('defines the five testimonials', () => {
    expect(TESTIMONIALS).toHaveLength(5)
    expect(TESTIMONIALS.map((testimonial) => testimonial.name)).toEqual([
      'Jason McClean',
      'Mark Stevenson',
      'Art Leonard',
      'Rose Henderson',
      'Ian Boner',
    ])
  })

  it('defines the seven open hours rows', () => {
    expect(OPEN_HOURS).toHaveLength(7)
    expect(OPEN_HOURS.slice(0, 4).every((row) => row.hours === '9:00 - 24:00')).toBe(true)
    expect(OPEN_HOURS.slice(4).every((row) => row.hours === '9:00 - 02:00')).toBe(true)
  })

  it('keeps the rebranded copyright line', () => {
    expect(COPYRIGHT).toBe('© Palate. All rights reserved.')
  })
})
