import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders all ten sections in the reference order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = main.querySelectorAll('h1, h2')
    const headingTexts = [...headings].map((h) => h.textContent)

    expect(headingTexts).toEqual([
      "Once a year go someplace you've never been before.",
      'Our Services',
      'About Concierge',
      'Blog Posts',
      'Frequently Asked Questions',
      'Testimonials',
      'Instagram',
    ])

    // navbar + footer
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Concierge — Travel & Hotel Template')
  })

  it('links the footer to Component Dock', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
