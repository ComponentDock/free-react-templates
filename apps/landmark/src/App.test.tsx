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

    expect(headings).toHaveLength(7)
    expect(headings[0]).toBe('Light House NY')
    expect(headings[1]).toBe('Display Latest & Featured Properties')
    expect(headings[2]).toBe('How we help people?')
    expect(headings[3]).toBe('Properties for Sale')
    expect(headings[4]).toMatch(/Explore/)
    expect(headings[5]).toBe('Our Agents')
    expect(headings[6]).toBe('Subscribe Newsletter')

    // Both property carousels render four cards each.
    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(12)

    const footer = within(main).getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary navigation' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })
})
