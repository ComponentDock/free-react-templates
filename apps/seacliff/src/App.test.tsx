import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Seacliff — Luxury Resort Hotel')

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Rooms & Suites',
      'World-Class Amenities',
      'Culinary Excellence',
      'A Glimpse of Paradise',
      'What Our Guests Say',
      'Frequently Asked Questions',
      'Make Your Stay Extraordinary',
    ])

    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(/Experience/)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
  })
})
