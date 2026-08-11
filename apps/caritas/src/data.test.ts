import { describe, expect, it } from 'vitest'
import {
  ABOUT_BADGE,
  ABOUT_TITLE,
  BLOG_POSTS,
  BLOG_TITLE,
  CAUSES,
  CAUSES_TITLE,
  CLIENT_NAMES,
  CLIENTS_TITLE,
  COUNTERS,
  CTA_TITLE,
  EVENTS,
  EVENTS_TITLE,
  FOOTER_CAUSES_LINKS,
  GALLERY_SEEDS,
  HERO_CTA_LABEL,
  HERO_SUBTITLE,
  HERO_TITLE,
  NAV_LINKS,
  SERVICES,
  SERVICES_TITLE,
  WORKING_HOURS,
} from './data'

describe('data', () => {
  it('defines the header nav with two dropdown groups', () => {
    expect(NAV_LINKS.map((link) => link.label)).toEqual([
      'Home',
      'About',
      'Causes',
      'Pages',
      'Blog',
      'Contact',
    ])
    expect(NAV_LINKS[0]?.active).toBe(true)
    expect(NAV_LINKS[3]?.children?.map((child) => child.label)).toEqual(['Event', 'Elements'])
    expect(NAV_LINKS[4]?.children?.map((child) => child.label)).toEqual(['Blog', 'Single Blog'])
  })

  it('defines the hero copy and CTA', () => {
    expect(HERO_TITLE).toContain('Children')
    expect(HERO_SUBTITLE.length).toBeGreaterThan(40)
    expect(HERO_CTA_LABEL).toBe('Start Donation')
  })

  it('defines 4 services with icons and links', () => {
    expect(SERVICES).toHaveLength(4)
    expect(SERVICES.map((service) => service.title)).toEqual([
      'Donation',
      'Adopt A Child',
      'Become A Volunteer',
      'Donation',
    ])
    for (const service of SERVICES) {
      expect(service.blurb.length).toBeGreaterThan(10)
      expect(service.href).toMatch(/^#/)
    }
    expect(SERVICES_TITLE).toContain('Funding Network')
  })

  it('defines the about badge and 3 counters', () => {
    expect(ABOUT_BADGE).toEqual({ value: '2000', label: 'Since' })
    expect(ABOUT_TITLE).toContain('Mission')
    expect(COUNTERS).toHaveLength(3)
    expect(COUNTERS.map((counter) => `${counter.value}${counter.suffix}`)).toEqual([
      '50k',
      '25k',
      '100k',
    ])
  })

  it('defines 3 causes with 75% progress', () => {
    expect(CAUSES_TITLE).toBe('Our Causes')
    expect(CAUSES).toHaveLength(3)
    for (const cause of CAUSES) {
      expect(cause.seed).toMatch(/^caritas-cause-\d$/)
      expect(cause.percent).toBe(75)
    }
  })

  it('defines the CTA band copy', () => {
    expect(CTA_TITLE).toContain('Save the World')
  })

  it('defines 4 upcoming events', () => {
    expect(EVENTS_TITLE).toBe('Upcoming Event')
    expect(EVENTS).toHaveLength(4)
    for (const event of EVENTS) {
      expect(event.seed).toMatch(/^caritas-event-\d$/)
      expect(event.description.length).toBeGreaterThan(10)
    }
  })

  it('defines 3 blog posts with date and comments', () => {
    expect(BLOG_TITLE).toBe('Blog Post')
    expect(BLOG_POSTS).toHaveLength(3)
    for (const post of BLOG_POSTS) {
      expect(post.date).toMatch(/^[A-Z][a-z]+ \d{1,2}, 2026$/)
      expect(post.comments).toMatch(/Comments$/)
    }
  })

  it('defines 5 client wordmarks', () => {
    expect(CLIENTS_TITLE).toContain('Donated')
    expect(CLIENT_NAMES).toHaveLength(5)
  })

  it('defines footer content', () => {
    expect(WORKING_HOURS).toHaveLength(2)
    expect(FOOTER_CAUSES_LINKS).toHaveLength(5)
    expect(GALLERY_SEEDS).toHaveLength(8)
    for (const seed of GALLERY_SEEDS) {
      expect(seed).toMatch(/^caritas-gallery-\d$/)
    }
  })
})
