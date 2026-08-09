import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Gleam — Cleaning Services')

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Get your estimated price in seconds',
      'Cleaning Services for Every Need',
      'Choose Your Clean',
      'See the Difference',
      'What Our Clients Say',
      'Ready for a Spotless Space?',
      'Frequently Asked Questions',
      'Get in Touch',
    ])

    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(
      /Professional Cleaning/,
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
  })
})
