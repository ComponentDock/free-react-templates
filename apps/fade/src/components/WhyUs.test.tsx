import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the heading and four feature cards', () => {
    render(<WhyUs />)

    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'The BarberKraft Difference' }),
    ).toBeInTheDocument()

    for (const title of [
      'Master Craftsmanship',
      'Premium Products',
      'Easy Online Booking',
      'The Right Atmosphere',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
