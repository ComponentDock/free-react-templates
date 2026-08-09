import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the section heading', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Pricing Plan' })).toBeInTheDocument()
  })

  it('renders the eight priced rows at $10.00 each', () => {
    render(<Pricing />)

    const names = [
      'Hair Cut',
      'Hair Color',
      'Hair Straight',
      'Shampoo',
      'Hair Wash',
      'Hair Shave',
      "Men's Facial",
      'Wedding Style',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('$10.00')).toHaveLength(8)
  })
})
