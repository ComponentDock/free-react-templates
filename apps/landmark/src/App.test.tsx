import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Landmark — Real Estate Template')
  })

  it('composes all sections in order', () => {
    const { container } = render(<App />)

    const main = container.querySelector('main')!
    const sections = Array.from(main.querySelectorAll('section'))
    const headings = sections.map((section) => section.querySelector('h1, h2')?.textContent ?? '')

    expect(headings).toEqual([
      'Light House NY',
      'Display Latest & Featured Properties',
      'How we help people?',
      'Properties for Sale',
      'Explore\n        by Property Type',
      'Subscribe Newsletter',
    ])

    // Both property carousels render four cards each.
    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(12)

    const footer = within(main).getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary navigation' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })
})
