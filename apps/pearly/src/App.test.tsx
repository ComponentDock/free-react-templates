import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every section in the source order', () => {
    render(<App />)
    const headings = screen
      .getAllByRole('heading')
      .map((h) => h.textContent ?? '')
      .filter(Boolean)

    const expectedOrder = [
      /brighter dental care/i,
      /Best template for dental specialist/i,
      /Our treatment keeps you smile/i,
      /Latest blog/i,
      /Get a Call Back/i,
    ]
    let cursor = 0
    for (const h of headings) {
      const expected = expectedOrder[cursor]
      if (expected && expected.test(h)) {
        cursor += 1
      }
    }
    expect(cursor).toBe(expectedOrder.length)
  })

  it('renders the testimonial quotes and the footer dock link', () => {
    render(<App />)
    expect(screen.getByText(/Maria Gomez/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
