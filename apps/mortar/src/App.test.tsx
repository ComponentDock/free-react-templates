import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { faqs, hero, newsletter, siteName } from './data'

describe('App', () => {
  it('composes all sections in the reference order with a main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')

    // Section order: hero → about → trust → intro CTA → services → video CTA →
    // counters → team → portfolio → pricing → testimonials → blog → FAQ → newsletter
    const order = [
      hero.badge,
      "Companies We've Worked With",
      'We Are Great Construction Company',
      'Services',
      'Building Dreams Into Reality Since 1982',
      'Completed Projects',
      'Qualified Engineers',
      'Projects',
      'Pricing & Packages',
      'Testimonial',
      'Recent Blog',
      faqs.heading,
      newsletter.heading,
    ]
    const texts = order.map((text) => within(main).getByText(text))
    for (let i = 1; i < texts.length; i += 1) {
      const previous = texts[i - 1]
      const current = texts[i]
      if (!previous || !current) continue
      expect(
        previous.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    }
  })

  it('renders the top bar, navbar, and footer landmarks', () => {
    render(<App />)
    expect(screen.getByText('Free Call: +1 234 456 78910')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Mortar — Construction Company Template')
  })
})
