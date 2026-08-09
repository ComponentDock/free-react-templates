import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the kicker, section title, and six service cards', () => {
    render(<Services />)
    expect(screen.getByText('We offer Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our car services/i })).toBeInTheDocument()
    for (const card of [
      'Oil change',
      'Tire Change',
      'Batteries',
      'Engine Repair',
      'Tow Truck',
      'Car Maintenance',
    ]) {
      expect(screen.getByRole('heading', { name: card })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Read more/i })).toHaveLength(6)
  })
})
