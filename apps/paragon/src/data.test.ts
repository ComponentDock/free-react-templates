import { describe, expect, it } from 'vitest'
import {
  BLOG_DATE,
  BLOG_LINK,
  BLOG_POSTS,
  BRAND,
  COMPONENT_DOCK,
  COPYRIGHT,
  EXPERIENCE_LABEL,
  EXPERIENCE_TITLE,
  EXPERIENCE_YEARS,
  FOLLOW_TITLE,
  FOOTER_ABOUT,
  FOOTER_FEATURES,
  FOOTER_FEATURES_TITLE,
  HERO_CTA,
  HERO_INTERVAL_MS,
  HERO_SLIDES,
  INTRO_HEADING,
  INTRO_LEAD,
  INTRO_LINK,
  NAV_LEFT,
  NAV_RIGHT,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_TEXT,
  NEWSLETTER_TITLE,
  PROJECT_BLURB,
  PROJECT_CAPTION,
  PROJECT_IMAGES,
  PROJECT_LINK,
  PROJECT_TITLE,
  PROJECTS_HEADING,
  PROJECTS_LINK,
  SERVICES,
  SERVICES_HEADING,
  SERVICES_LEAD,
  SERVICES_LINK,
  SOCIAL_LINKS,
  TESTIMONIALS,
} from './data'

describe('data', () => {
  it('defines the brand and split navigation', () => {
    expect(BRAND).toBe('Paragon')
    expect(NAV_LEFT.map((link) => link.label)).toEqual(['Home', 'Project', 'Services'])
    expect(NAV_RIGHT.map((link) => link.label)).toEqual(['About', 'Blog', 'Contact'])
    expect(NAV_LEFT[0]?.active).toBe(true)
    expect(NAV_RIGHT.every((link) => link.href.startsWith('#'))).toBe(true)
  })

  it('defines three hero slides with picsum photos', () => {
    expect(HERO_SLIDES).toHaveLength(3)
    expect(HERO_SLIDES[0]?.headline).toBe('Welcome to ')
    expect(HERO_SLIDES[0]?.accent).toBe('Paragon.')
    expect(HERO_SLIDES[1]?.accent).toBeUndefined()
    expect(HERO_SLIDES.every((slide) => slide.image.startsWith('https://picsum.photos/'))).toBe(
      true,
    )
    expect(HERO_INTERVAL_MS).toBeGreaterThan(0)
    expect(HERO_CTA).toBe('Get A Quote')
  })

  it('defines intro and experience copy', () => {
    expect(INTRO_HEADING).toContain('Enhance The Human Experience')
    expect(INTRO_LEAD.length).toBeGreaterThan(20)
    expect(INTRO_LINK).toBe('More About Us')
    expect(EXPERIENCE_TITLE).toBe('The Best In Interior Design')
    expect(EXPERIENCE_LABEL).toBe('Years of Experience')
    expect(EXPERIENCE_YEARS).toBe('75')
  })

  it('defines four service cards', () => {
    expect(SERVICES).toHaveLength(4)
    expect(SERVICES.map((service) => service.caption)).toEqual([
      'Architecture',
      'Gym & Arena',
      'Interior Design',
      'Product Design',
    ])
    expect(SERVICES.every((service) => service.image.startsWith('https://picsum.photos/'))).toBe(
      true,
    )
    expect(SERVICES_HEADING).toBe('Our Featured Services')
    expect(SERVICES_LEAD.length).toBeGreaterThan(20)
    expect(SERVICES_LINK).toBe('Learn More')
  })

  it('defines projects, testimonials and blog content', () => {
    expect(PROJECT_IMAGES).toHaveLength(3)
    expect(PROJECTS_HEADING).toBe('Latest Projects')
    expect(PROJECTS_LINK).toBe('View All Projects')
    expect(PROJECT_CAPTION).toBe('Interior Design')
    expect(PROJECT_TITLE).toBe('The Saddleback Residence')
    expect(PROJECT_BLURB.length).toBeGreaterThan(20)
    expect(PROJECT_LINK).toBe('View This Project')

    expect(TESTIMONIALS).toHaveLength(3)
    expect(TESTIMONIALS.every((item) => item.author.includes('CEO and Co-Founder'))).toBe(true)

    expect(BLOG_POSTS).toHaveLength(4)
    expect(BLOG_POSTS.every((post) => post.date === BLOG_DATE)).toBe(true)
    expect(BLOG_POSTS.every((post) => post.image.startsWith('https://picsum.photos/'))).toBe(true)
    expect(BLOG_LINK).toBe('Continue Reading')
  })

  it('defines footer copy and the Component Dock credit', () => {
    expect(FOOTER_ABOUT).toContain('word mountains')
    expect(FOOTER_FEATURES).toHaveLength(5)
    expect(FOOTER_FEATURES_TITLE).toBe('Features')
    expect(NEWSLETTER_TITLE).toBe('Subscribe to Newsletter')
    expect(NEWSLETTER_TEXT).toContain('newsletter')
    expect(NEWSLETTER_PLACEHOLDER).toBe('Enter Email')
    expect(NEWSLETTER_BUTTON).toBe('Subscribe')
    expect(FOLLOW_TITLE).toBe('Follow Us')
    expect(SOCIAL_LINKS).toHaveLength(4)
    expect(COPYRIGHT).toContain('Paragon')
    expect(COMPONENT_DOCK.href).toBe('https://www.componentdock.com/')
    expect(COMPONENT_DOCK.label).toContain('Component Dock')
  })
})
