import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)
    expect(document.title).toBe('Concierge — Travel & Hotel Template')

    const main = screen.getByRole('main')
    const sections = within(main)
      .getAllByRole('region')
      .filter((s) => !s.getAttribute('aria-label')?.startsWith('Answer for'))
    expect(sections.map((s) => s.getAttribute('aria-label'))).toEqual([
      'Welcome',
      'Check availability',
      'Our services',
      'About Concierge',
      'Blog posts',
      'Frequently asked questions',
      'Testimonials',
      'Instagram gallery',
    ])

    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Once a year go someplace you've never been before.",
    )
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
