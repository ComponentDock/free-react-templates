import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the section heading and the three tiers', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Pricing Plan' })).toBeInTheDocument()
    for (const name of ['Basic Hair Cut', 'Standard Hair Cut', 'Ultimate Hair Cut']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('$79.00')).toBeInTheDocument()
    expect(screen.getByText('$89.00')).toBeInTheDocument()
    expect(screen.getByText('$99.00')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Order Now' })).toHaveLength(3)
  })
})
