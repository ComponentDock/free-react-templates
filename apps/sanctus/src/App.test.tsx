import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { about, hero, join, sermons, services, siteName, testimonials, whyUs } from './data'

describe('App', () => {
  it('composes all sections in the reference order with a main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')

    const order = [
      hero.subheading,
      about.ctaLabel,
      sermons.subheading,
      whyUs.heading,
      testimonials.heading,
      services.heading,
      join.heading,
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

  it('renders the navbar, hero, and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sanctus — Church Template')
  })
})
