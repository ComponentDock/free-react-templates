import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and the four pricing plans', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Pricing Table' })).toBeInTheDocument()

    for (const plan of ['Basic', 'Premium', 'Standard', 'Business']) {
      expect(screen.getByRole('heading', { name: plan })).toBeInTheDocument()
    }
  })
})
