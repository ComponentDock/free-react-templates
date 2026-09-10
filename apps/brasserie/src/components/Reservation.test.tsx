import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the reservation heading and CTA', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { name: 'Reserve Your Desk' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '#reservation')
  })
})
