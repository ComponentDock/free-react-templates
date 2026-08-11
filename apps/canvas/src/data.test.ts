import { describe, expect, it } from 'vitest'
import {
  BLOG_AUTHOR_NAME,
  BLOG_AUTHOR_ROLE,
  BLOG_POSTS,
  BLOG_POST_DATE,
  CLIENTS,
  COPYRIGHT,
  FOOTER_LINK_COLUMNS,
  HERO_HEADLINE,
  HERO_LEAD,
  NAV_LINKS,
  PORTFOLIO_ITEMS,
  POSTS_PER_VIEW,
  SERVICES,
  SOCIAL_LINKS,
  VIMEO_VIDEO_URL,
} from './data'

describe('data', () => {
  it('exposes the brand and nav links with Home active', () => {
    expect(NAV_LINKS).toHaveLength(6)
    expect(NAV_LINKS[0]).toEqual({ label: 'Home', href: '#home', active: true })
    expect(NAV_LINKS.map((link) => link.label)).toEqual([
      'Home',
      'Portfolio',
      'About',
      'Services',
      'Blog',
      'Contact',
    ])
  })

  it('provides the hero headline, lead and Vimeo URL', () => {
    expect(HERO_HEADLINE).toBe('Creativity is a wild mind and a disciplined eye.')
    expect(HERO_LEAD.length).toBeGreaterThan(0)
    expect(VIMEO_VIDEO_URL).toBe('https://player.vimeo.com/video/191947042')
  })

  it('lists six portfolio images in a 3/6/3 then 4/4/4 mosaic', () => {
    expect(PORTFOLIO_ITEMS).toHaveLength(6)
    expect(PORTFOLIO_ITEMS.slice(0, 3).map((item) => item.span)).toEqual([
      'md:col-span-3',
      'md:col-span-6',
      'md:col-span-3',
    ])
    expect(PORTFOLIO_ITEMS.slice(3).every((item) => item.span === 'md:col-span-4')).toBe(true)
    for (const item of PORTFOLIO_ITEMS) {
      expect(item.src).toMatch(/^https:\/\/picsum\.photos\/seed\/canvas-p\d+\//)
      expect(item.alt.length).toBeGreaterThan(0)
      expect(item.ratio.length).toBeGreaterThan(0)
    }
  })

  it('lists three services with their lucide icon names', () => {
    expect(SERVICES.map((service) => service.title)).toEqual([
      'Interface Design',
      'Product Design',
      'Quality Results',
    ])
    expect(SERVICES.map((service) => service.icon)).toEqual(['Monitor', 'Compass', 'Layers'])
    for (const service of SERVICES) {
      expect(service.blurb.length).toBeGreaterThan(0)
    }
  })

  it('provides 12 distinct blog posts paginated 3 per view', () => {
    expect(BLOG_POSTS).toHaveLength(12)
    expect(new Set(BLOG_POSTS.map((post) => post.title)).size).toBe(12)
    for (const post of BLOG_POSTS) {
      expect(post.image).toMatch(/^https:\/\/picsum\.photos\/seed\/canvas-b\d+\//)
    }
    expect(POSTS_PER_VIEW).toBe(3)
    expect(Math.ceil(BLOG_POSTS.length / POSTS_PER_VIEW)).toBe(4)
    expect(BLOG_POST_DATE).toBe('October 18, 2019')
    expect(BLOG_AUTHOR_NAME).toBe('John Freeman')
    expect(BLOG_AUTHOR_ROLE).toBe('Thinker & Designer')
  })

  it('lists four client wordmarks', () => {
    expect(CLIENTS).toEqual(['Google', 'InVision', 'Nike', 'Microsoft'])
  })

  it('keeps the duplicated footer link columns', () => {
    expect(FOOTER_LINK_COLUMNS).toHaveLength(3)
    expect(FOOTER_LINK_COLUMNS[0]).toEqual([
      'Contact Us',
      'hello@mydomain.com',
      '+1 829 2293 382',
      'Support',
    ])
    expect(FOOTER_LINK_COLUMNS[1]).toEqual(['Home', 'Blog', 'Services', 'About Us'])
    expect(FOOTER_LINK_COLUMNS[2]).toEqual(FOOTER_LINK_COLUMNS[1])
  })

  it('lists five social links with readable labels', () => {
    expect(SOCIAL_LINKS.map((social) => social.name)).toEqual([
      'facebook',
      'twitter',
      'linkedin',
      'instagram',
      'skype',
    ])
    expect(SOCIAL_LINKS.map((social) => social.label)).toEqual([
      'Facebook',
      'Twitter',
      'LinkedIn',
      'Instagram',
      'Skype',
    ])
  })

  it('rebrands the copyright line', () => {
    expect(COPYRIGHT).toBe('© Canvas. All rights reserved.')
  })
})
