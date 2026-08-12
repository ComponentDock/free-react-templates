import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Benevol — Charity Template')
  })

  it('composes the navbar, main sections, and footer in order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    // All section headings appear in the reference order.
    const expected = [
      'Rescue An Orphan',
      'Feed The Hungry',
      'Free Education',
      'Our Mission',
      'Discover',
      'Make A Donation Now! You May Change Lives Forever',
      'Our Leadership',
      'Testimonial',
      'Our Blog',
      'Contact Us',
      'About Us',
      'Features',
      'Some Paragraph',
      'Subscribe to Newsletter',
      'Follow Us',
    ]
    for (const heading of expected) {
      expect(headings).toContain(heading)
    }
    const order = expected.map((heading) => headings!.indexOf(heading))
    expect(order).toEqual([...order].sort((a, b) => a - b))
  })
})
