import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Beanery — Decoffee Template')
  })

  it('composes every section with the sidebar, main and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    const content = screen.getByRole('main')
    expect(content).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: 'Handmade "Cookies" and Coffee Delights' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /boutique and fun cafe/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Menu' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Love from Customers' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '@beanery_coffee' })).toBeInTheDocument()
  })

  it('renders the sections in the source order', () => {
    render(<App />)
    const content = screen.getByRole('main')
    const headings = Array.from(content.querySelectorAll('h1, h2')).map(
      (heading) => heading.textContent ?? '',
    )
    const ordered = [
      'Handmade "Cookies" and Coffee Delights',
      'boutique and fun cafe',
      'Our Menu',
      'Love from Customers',
    ]
    let previous = -1
    for (const heading of ordered) {
      const position = headings.findIndex((text) => text.includes(heading))
      expect(position).toBeGreaterThan(previous)
      previous = position
    }
  })
})
