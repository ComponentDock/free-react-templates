import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections and footer in landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Sapor — Restaurant Template')

    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    for (const heading of [
      'Authentic Italian Cuisine',
      'A Family Tradition of Excellence',
      "Chef's Selections",
      'Reviews & Testimonials',
      'Make a Reservation',
      'A Glimpse of Sapor',
    ]) {
      expect(
        screen.getAllByRole('heading', { name: new RegExp(heading) }).length,
      ).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
