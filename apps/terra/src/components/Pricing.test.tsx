import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and three pricing cards with Get Started buttons', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Get Our Package Pricing' })).toBeInTheDocument()

    for (const name of ['Basic', 'Standard', 'Premium']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })
})
