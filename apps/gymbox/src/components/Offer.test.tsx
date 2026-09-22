import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders the 50% Off text and heading', () => {
    render(<Offer />)
    expect(screen.getByText('50% Off')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /a big offer for this summer/i }),
    ).toBeInTheDocument()
  })

  it('renders description and Join Now button', () => {
    render(<Offer />)
    expect(screen.getByText(/limited-time summer offer/i)).toBeInTheDocument()
    const buttons = screen.getAllByText('Join Now')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('has the offer section landmark', () => {
    render(<Offer />)
    expect(screen.getByRole('region', { name: /special offer/i })).toBeInTheDocument()
  })
})
