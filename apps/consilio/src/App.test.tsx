import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes all sections in order', () => {
    render(<App />)

    expect(document.title).toBe('Consilio — Business Consulting Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 2 })
    const headingTexts = headings.map((heading) => heading.textContent)
    expect(headingTexts).toEqual(
      expect.arrayContaining([
        'Our Best Services',
        expect.stringMatching(/We support our clients/),
        'See How We Transform Businesses',
        'Featured Case Study',
        'Our Case Studies',
        'Ready to Transform Your Business?',
        'What Our Clients Say',
        'Our Team Members',
        'Choose Your Plan',
        'Frequently Asked Questions',
        expect.stringMatching(/First-Class Consultant/),
        'Our Recent Blog',
      ]),
    )

    const hero = screen.getByRole('heading', { level: 1 })
    expect(hero.textContent).toMatch(/We help to grow your business/)
  })

  it('matches the original section order 1:1', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const sections = main.querySelectorAll('section')
    const sectionLabels = Array.from(sections).map(
      (section) =>
        section.getAttribute('aria-label') ?? section.getAttribute('aria-labelledby') ?? section.id,
    )

    const expectedOrder = [
      'Featured highlights',
      'top-services-heading',
      'company-support-heading',
      'video-intro-heading',
      'featured-cases-heading',
      'case-studies-heading',
      'cta-banner-heading',
      'testimonials-heading',
      'Our results',
      'team-heading',
      'pricing-heading',
      'faq-heading',
      'want-to-work-heading',
      'blog-heading',
      'Brands we have worked with',
    ]
    expect(sectionLabels).toEqual(expectedOrder)
  })
})
