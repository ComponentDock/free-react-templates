import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  about,
  blogPosts,
  brands,
  footer,
  hero,
  navLinks,
  portfolioItems,
  pricingPlans,
  services,
  testimonials,
} from './data'

describe('App', () => {
  it('composes all sections in the reference order', () => {
    const { container } = render(<App />)
    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    const labels = sections.map((section) => section.getAttribute('aria-label'))

    expect(labels).toEqual([
      'Hero',
      'About',
      'Services',
      'Facts',
      'Portfolio',
      'Testimonials',
      'Pricing',
      'Blog',
      'Brands',
    ])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(container.querySelector('main')?.firstElementChild).not.toBeNull()
  })

  it('renders the document title', () => {
    render(<App />)
    expect(document.title).toBe('Solo — Personal Portfolio Template')
  })

  it('renders key content from every section', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /solo/i })).toBeInTheDocument()
    for (const link of navLinks.slice(0, 2)) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Philip Gilbert/)
    expect(screen.getByRole('img', { name: hero.alt })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Personal Details/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: about.alt })).toBeInTheDocument()
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }
    for (const item of portfolioItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
    for (const testimonial of testimonials) {
      expect(screen.getByRole('heading', { name: testimonial.name })).toBeInTheDocument()
    }
    for (const plan of pricingPlans) {
      expect(screen.getByRole('heading', { name: plan.name })).toBeInTheDocument()
    }
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    for (const brand of brands) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
    const footerRegion = screen.getByRole('contentinfo')
    expect(
      within(footerRegion).getByRole('heading', { name: footer.aboutHeading }),
    ).toBeInTheDocument()
  })
})
