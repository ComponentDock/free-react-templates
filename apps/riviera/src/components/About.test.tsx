import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the quote heading, copy and CTA', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Customers love our facilities/)
    expect(screen.getByRole('link', { name: 'Make a Reservation' })).toHaveAttribute(
      'href',
      '#reservation',
    )
  })

  it('renders the four-photo grid beside the text', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('riviera-6'))
    expect(images[3]).toHaveAttribute('src', expect.stringContaining('riviera-9'))
  })
})
