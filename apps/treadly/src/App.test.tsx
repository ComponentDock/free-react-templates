import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Treadly — Sneaker Store')

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Shop by Category',
      'Featured Collection',
      'New Arrivals',
      'What Our Customers Say',
      'Ready to Step Up Your Game?',
      'Join the Treadly Club',
    ])

    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(/Step Into/)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
