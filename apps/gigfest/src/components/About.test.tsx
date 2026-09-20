import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, description, and CTA button', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Program')
    expect(screen.getAllByText(/diverse range of attendees/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      "It's time to book your seat",
    )
    expect(screen.getByRole('link', { name: 'Buy Tickets' })).toHaveAttribute(
      'href',
      '#buy-tickets',
    )
  })

  it('displays the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about the concert/i })
    expect(img).toBeInTheDocument()
  })
})
